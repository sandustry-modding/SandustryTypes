/**
 * Prebuilt Sandkit API search (replaces Docsify's runtime page crawler).
 * Index: window.SMT_SEARCH_INDEX from assets/search-index.js
 */
(function () {
  var MAX_RESULTS = 40;
  var IGNORE_TITLE = {
    Accessors: true,
    Classes: true,
    Constructors: true,
    Enumerations: true,
    "Enumeration Members": true,
    Functions: true,
    Interfaces: true,
    Methods: true,
    Modules: true,
    Namespaces: true,
    Overrides: true,
    Properties: true,
    References: true,
    "Type Aliases": true,
    "Type Parameters": true,
    Variables: true,
  };

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/\s+\(worker\)/g, "")
      .replace(/\(\)\s*$/g, "")
      .replace(/[/\\]+/g, ".")
      .replace(/[_\s]+/g, ".")
      .replace(/\.+/g, ".")
      .replace(/^\.+|\.+$/g, "")
      .trim();
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function scoreEntry(entry, query) {
    var title = entry.title || "";
    if (IGNORE_TITLE[title]) return 0;

    var t = normalize(title);
    var q = normalize(query);
    if (!t || !q) return 0;

    var worker = /\(worker\)/i.test(title) ? -20 : 0;
    if (t === q) return 1000 + worker;
    if (t.endsWith("." + q)) return 920 + worker;

    var last = t.split(".").pop();
    if (last === q) return 880 + worker;

    if (t.indexOf(q) !== -1) {
      var dotted = q.indexOf(".") !== -1 ? 120 : 0;
      return 500 + dotted + Math.max(0, 100 - t.length) + worker;
    }

    var parts = q.split(".").filter(Boolean);
    if (parts.length > 1) {
      var i = 0;
      var pos = 0;
      for (; i < parts.length; i++) {
        var at = t.indexOf(parts[i], pos);
        if (at === -1) break;
        pos = at + parts[i].length;
      }
      if (i === parts.length) return 400 + parts.length * 25 + worker;
    }

    var path = normalize(entry.path || "");
    if (path && path.indexOf(q) !== -1) return 220 + worker;

    var body = normalize(entry.body || "");
    if (body && body.indexOf(q) !== -1) return 80 + worker;

    // Token AND: every query segment appears somewhere in title/path/body.
    var tokens = q.split(".").filter(Boolean);
    if (tokens.length > 1) {
      var hay = t + " " + path + " " + body;
      var all = true;
      for (var ti = 0; ti < tokens.length; ti++) {
        if (hay.indexOf(tokens[ti]) === -1) {
          all = false;
          break;
        }
      }
      if (all) return 60 + tokens.length * 10 + worker;
    }

    return 0;
  }

  function resultUrl(entry) {
    var path = entry.path || "/";
    var hash = "#" + (path === "/" ? "/" : path);
    if (entry.id) hash += "?id=" + encodeURIComponent(entry.id);
    return hash;
  }

  function snippet(entry, query) {
    var body = String(entry.body || "");
    if (!body) return "";
    var q = String(query || "").trim();
    var lower = body.toLowerCase();
    var at = q ? lower.indexOf(q.toLowerCase()) : -1;
    var start = at < 0 ? 0 : Math.max(0, at - 24);
    var end = Math.min(body.length, (at < 0 ? 0 : at) + q.length + 72);
    var text = body.slice(start, end).trim();
    if (start > 0) text = "…" + text;
    if (end < body.length) text = text + "…";
    if (q) {
      var re = new RegExp(q.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "ig");
      text = escapeHtml(text).replace(re, function (m) {
        return "<mark>" + m + "</mark>";
      });
      return text;
    }
    return escapeHtml(text);
  }

  function search(query) {
    var index = window.SMT_SEARCH_INDEX;
    if (!Array.isArray(index) || !query) return [];

    var ranked = [];
    for (var i = 0; i < index.length; i++) {
      var entry = index[i];
      var score = scoreEntry(entry, query);
      if (score <= 0) continue;
      ranked.push({ entry: entry, score: score });
    }

    ranked.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return (a.entry.title || "").length - (b.entry.title || "").length;
    });

    return ranked.slice(0, MAX_RESULTS);
  }

  function render(query) {
    var panel = document.querySelector(".search .results-panel");
    var status = document.querySelector(".search .results-status");
    if (!panel || !status) return;

    if (!query) {
      panel.innerHTML = "";
      status.textContent = "";
      return;
    }

    var hits = search(query);
    if (!hits.length) {
      panel.innerHTML = "";
      status.textContent = "No results";
      return;
    }

    var uncapped = 0;
    var index = window.SMT_SEARCH_INDEX;
    for (var j = 0; j < index.length; j++) {
      if (scoreEntry(index[j], query) > 0) uncapped++;
    }

    var html = "";
    for (var i = 0; i < hits.length; i++) {
      var entry = hits[i].entry;
      var title = escapeHtml(entry.title || "");
      var content = snippet(entry, query);
      html +=
        '<div class="matching-post" aria-label="search result ' +
        (i + 1) +
        '">' +
        '<a href="' +
        resultUrl(entry) +
        '" title="' +
        title +
        '">' +
        '<p class="title">' +
        title +
        "</p>" +
        (content ? '<p class="content">' + content + "</p>" : "") +
        "</a></div>";
    }
    panel.innerHTML = html;

    if (uncapped > MAX_RESULTS) {
      status.textContent = "Found " + uncapped + " results (showing " + MAX_RESULTS + ")";
    } else {
      status.textContent = "Found " + hits.length + " results";
    }
  }

  function ensureUi() {
    var sidebar = document.querySelector(".sidebar");
    if (!sidebar || document.querySelector(".search")) return;

    var section = document.createElement("section");
    section.className = "search";
    section.setAttribute("role", "search");
    section.innerHTML =
      '<div class="input-wrap">' +
      '<input type="search" value="" required aria-keyshortcuts="/ control+k meta+k" placeholder="Search Sandkit API" />' +
      '<button class="clear-button" title="Clear search" type="button">' +
      '<span class="visually-hidden">Clear search</span>' +
      "</button>" +
      "</div>" +
      '<p class="results-status" aria-live="polite"></p>' +
      '<div class="results-panel"></div>';

    var first = sidebar.querySelector(":scope > :first-child");
    if (first) sidebar.insertBefore(section, first);
    else sidebar.appendChild(section);

    var input = section.querySelector("input");
    var clear = section.querySelector(".clear-button");
    var timer = null;

    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        render(input.value.trim());
      }, 80);
    });
    clear.addEventListener("click", function () {
      input.value = "";
      render("");
      input.focus();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && !/input|textarea|select/i.test((e.target && e.target.tagName) || "")) {
        e.preventDefault();
        input.focus();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        input.focus();
      }
    });
  }

  window.smtDocsifySearchPlugin = function (hook) {
    hook.mounted(function () {
      ensureUi();
    });
    hook.ready(function () {
      ensureUi();
    });
    hook.doneEach(function () {
      ensureUi();
    });
  };
})();
