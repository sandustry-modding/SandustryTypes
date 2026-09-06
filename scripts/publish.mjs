/**
 * Verify the package, push git state, publish to npm, and create a GitHub release.
 *
 * Checks (before npm publish):
 * - clean git working tree
 * - CHANGELOG.md has a dated section for package.json version
 * - docs/Changelog.md matches CHANGELOG.md
 * - version is not already on the npm registry
 * - npm auth works (runs `npm login` when whoami fails)
 * - gh auth works (`gh auth login` when needed)
 * - npm run validate (typecheck, tests, packed-tarball consumer probes)
 * - release commit(s) pushed to the tracked upstream branch
 *
 * After npm publish:
 * - annotated git tag `v<version>` on HEAD
 * - tag pushed to origin
 * - GitHub release created with notes from CHANGELOG.md
 *
 * Usage:
 *   npm run release
 *   npm run release -- --dry-run
 *
 * Named `release` in package.json so it does not collide with npm’s
 * `publish` lifecycle script.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractReleaseNotes, versionHeadingPattern } from "./lib/release-notes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dryRun = process.argv.includes("--dry-run");
const npmBin = process.platform === "win32" ? "npm.cmd" : "npm";

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const version = pkg.version;
const name = pkg.name;
const tag = `v${version}`;

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(`release: ${message}`);
  process.exit(1);
}

/**
 * @param {string} message
 */
function info(message) {
  console.log(`release: ${message}`);
}

/**
 * @param {string} cmd
 * @param {string[]} args
 * @param {{ allowFail?: boolean, inherit?: boolean }} [opts]
 */
function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, {
    cwd: root,
    encoding: "utf8",
    stdio: opts.inherit ? "inherit" : ["ignore", "pipe", "pipe"],
  });
  if (!opts.allowFail && result.status !== 0) {
    if (!opts.inherit) {
      if (result.stdout?.trim()) console.error(result.stdout);
      if (result.stderr?.trim()) console.error(result.stderr);
    }
    fail(`${cmd} ${args.join(" ")} failed (exit ${result.status})`);
  }
  return result;
}

/**
 * @returns {string}
 */
function currentBranch() {
  return run("git", ["rev-parse", "--abbrev-ref", "HEAD"]).stdout.trim();
}

/**
 * @returns {string}
 */
function upstreamBranch() {
  const branch = currentBranch();
  const upstream = run(
    "git",
    ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"],
    { allowFail: true },
  );
  if (upstream.status !== 0 || !upstream.stdout.trim()) {
    fail(`branch ${branch} has no upstream; run git push -u origin ${branch}`);
  }
  return upstream.stdout.trim();
}

/**
 * Push local commits before publish so origin has the release code.
 *
 * @param {string} upstream
 */
function ensureBranchPushed(upstream) {
  run("git", ["fetch", "origin"]);

  const behind = Number(
    run("git", ["rev-list", "--count", `HEAD..${upstream}`], { allowFail: true }).stdout.trim() ||
      "0",
  );
  if (behind > 0) {
    fail(`branch is ${behind} commit(s) behind ${upstream}; pull or rebase before release`);
  }

  const ahead = Number(run("git", ["rev-list", "--count", `${upstream}..HEAD`]).stdout.trim());
  if (ahead === 0) {
    info(`branch is up to date with ${upstream}`);
    return;
  }

  const branch = currentBranch();
  if (dryRun) {
    info(`would push ${ahead} commit(s) from ${branch} to origin/${branch}`);
    return;
  }

  info(`pushing ${ahead} commit(s) from ${branch} to origin…`);
  run("git", ["push", "origin", branch], { inherit: true });
}

/**
 * @returns {string} npm username
 */
function requireNpmAuth() {
  let whoami = run(npmBin, ["whoami"], { allowFail: true });
  if (whoami.status === 0) {
    return whoami.stdout.trim();
  }
  info("npm auth missing or expired; starting npm login…");
  run(npmBin, ["login"], { inherit: true });
  whoami = run(npmBin, ["whoami"], { allowFail: true });
  if (whoami.status !== 0) {
    if (whoami.stderr?.trim()) console.error(whoami.stderr);
    fail("npm login did not establish auth; retry manually with npm login");
  }
  return whoami.stdout.trim();
}

function requireGhAuth() {
  const status = run("gh", ["auth", "status"], { allowFail: true });
  if (status.status === 0) {
    return;
  }
  info("gh auth missing or expired; starting gh auth login…");
  run("gh", ["auth", "login"], { inherit: true });
  const retry = run("gh", ["auth", "status"], { allowFail: true });
  if (retry.status !== 0) {
    fail("gh auth login did not establish auth; retry manually with gh auth login");
  }
}

/**
 * @param {string} notes
 */
function createGitHubRelease(notes) {
  const existing = run("gh", ["release", "view", tag, "--json", "url"], { allowFail: true });
  if (existing.status === 0) {
    try {
      const parsed = JSON.parse(existing.stdout);
      info(`GitHub release ${tag} already exists: ${parsed.url}`);
    } catch {
      info(`GitHub release ${tag} already exists`);
    }
    return;
  }

  const notesDir = path.join(root, ".tmp", "release");
  fs.mkdirSync(notesDir, { recursive: true });
  const notesPath = path.join(notesDir, `${tag}.md`);
  fs.writeFileSync(notesPath, `${notes}\n`);

  if (dryRun) {
    info(`would create GitHub release ${tag} with notes from CHANGELOG.md`);
    return;
  }

  info(`creating GitHub release ${tag}…`);
  run(
    "gh",
    ["release", "create", tag, "--title", version, "--notes-file", notesPath],
    { inherit: true },
  );
}

/**
 * @param {string} notes
 */
function ensureGitTag(notes) {
  const tagExists = run("git", ["rev-parse", "-q", "--verify", `refs/tags/${tag}`], {
    allowFail: true,
  });

  if (tagExists.status !== 0) {
    if (dryRun) {
      info(`would create annotated tag ${tag} on HEAD`);
    } else {
      run("git", ["tag", "-a", tag, "-m", `Release ${version}`]);
      info(`created annotated tag ${tag}`);
    }
  } else {
    info(`tag ${tag} already exists locally`);
  }

  const remoteTag = run("git", ["ls-remote", "--tags", "origin", `refs/tags/${tag}`], {
    allowFail: true,
  });
  const onOrigin = remoteTag.stdout.includes(tag);

  if (!onOrigin) {
    if (dryRun) {
      info(`would push tag ${tag} to origin`);
    } else {
      info(`pushing tag ${tag} to origin…`);
      run("git", ["push", "origin", tag], { inherit: true });
    }
  } else {
    info(`tag ${tag} is already on origin`);
  }

  createGitHubRelease(notes);
}

info(`${dryRun ? "dry-run for" : "releasing"} ${name}@${version}`);

// --- git clean ---
const status = run("git", ["status", "--porcelain"]);
if (status.stdout.trim()) {
  fail("git working tree is not clean; commit or stash before release");
}

// --- changelog ---
const changelogPath = path.join(root, "CHANGELOG.md");
const docsChangelogPath = path.join(root, "docs", "Changelog.md");
if (!fs.existsSync(changelogPath)) fail("missing CHANGELOG.md");
if (!fs.existsSync(docsChangelogPath)) fail("missing docs/Changelog.md");

const changelog = fs.readFileSync(changelogPath, "utf8");
const docsChangelog = fs.readFileSync(docsChangelogPath, "utf8");
if (changelog !== docsChangelog) {
  fail("docs/Changelog.md must match CHANGELOG.md");
}

if (!versionHeadingPattern(version).test(changelog)) {
  fail(`CHANGELOG.md must include a dated section "## ${version} - YYYY-MM-DD" before release`);
}

const unreleasedMatch = changelog.match(/^## Unreleased\s*\n([\s\S]*?)(?=^## )/m);
if (unreleasedMatch) {
  const body = unreleasedMatch[1].replace(/^\s+|\s+$/g, "");
  if (body.length > 0) {
    fail(
      "CHANGELOG.md ## Unreleased must be empty before release (move notes into the version section)",
    );
  }
}

const releaseNotes = extractReleaseNotes(changelog, version);
if (!releaseNotes) {
  fail(`CHANGELOG.md section for ${version} is empty`);
}

// --- registry ---
const view = run(npmBin, ["view", `${name}@${version}`, "version"], { allowFail: true });
if (view.status === 0 && view.stdout.trim() === version) {
  fail(`${name}@${version} is already on the npm registry`);
}

info(`npm user: ${requireNpmAuth()}`);
requireGhAuth();

// --- validate ---
info("running validate…");
run(npmBin, ["run", "validate"], { inherit: true });
info("validate ok");

const upstream = upstreamBranch();
ensureBranchPushed(upstream);

if (dryRun) {
  info(`dry-run ok — would publish ${name}@${version}, push ${tag}, and create GitHub release`);
  ensureGitTag(releaseNotes);
  process.exit(0);
}

// --- publish ---
// Skip lifecycle scripts: validate already ran above. Avoids re-entering this
// script if someone ever wires a `publish` lifecycle by mistake.
info("npm publish…");
run(npmBin, ["publish", "--ignore-scripts"], { inherit: true });

ensureGitTag(releaseNotes);

info(`released ${name}@${version}`);
info(`npm: https://www.npmjs.com/package/${name}/v/${version}`);
info(`GitHub: https://github.com/sandustry-modding/SandustryTypes/releases/tag/${tag}`);
