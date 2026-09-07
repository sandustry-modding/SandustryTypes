import assert from "node:assert/strict";
import test from "node:test";
import {
  buildRuntimeApiDocument,
  groupRuntimeByNamespace,
  runtimeApiPaths,
} from "./scrape-runtime.mjs";

test("buildRuntimeApiDocument wraps scrape payload", () => {
  const doc = buildRuntimeApiDocument(
    {
      ok: true,
      apiVersion: 1,
      topLevelKeys: ["api", "engine", "enums"],
      surfaces: {
        api: [
          { path: "action.getActive", kind: "function" },
          { path: "player.inventory.addById", kind: "function" },
        ],
        "engine.api": [{ path: "debug.log", kind: "function" }],
        electron: [{ path: "log", kind: "function" }],
      },
      enums: ["CellType", "ElementType"],
      react: ["createElement"],
      stats: {
        apiFunctionCount: 2,
        engineFunctionCount: 1,
        electronFunctionCount: 1,
        enumNamespaceCount: 2,
        reactExportCount: 1,
      },
    },
    {
      port: "9222",
      pageTitle: "Sandustry",
      pageUrl: "file:///dist/index.html",
      userAgent: "sandustry/0.5.6",
    },
  );

  assert.equal(doc.version, 1);
  assert.equal(doc.apiVersion, 1);
  assert.equal(doc.source.cdpPort, "9222");
  assert.deepEqual(runtimeApiPaths(doc), ["action.getActive", "player.inventory.addById"]);
});

test("groupRuntimeByNamespace groups dotted api paths", () => {
  const grouped = groupRuntimeByNamespace([
    { path: "action.getActive", kind: "function" },
    { path: "action.getSelected", kind: "function" },
    { path: "player.getPosition", kind: "function" },
    { path: "player.inventory.addById", kind: "function" },
  ]);

  assert.deepEqual(grouped.action, ["action.getActive", "action.getSelected"]);
  assert.deepEqual(grouped.player, ["player.getPosition", "player.inventory.addById"]);
});

test("buildRuntimeApiDocument throws on scrape error payload", () => {
  assert.throws(
    () =>
      buildRuntimeApiDocument(
        { ok: false, error: "sandkit.api is not available" },
        { port: "9222", pageTitle: "", pageUrl: "" },
      ),
    /sandkit\.api is not available/,
  );
});
