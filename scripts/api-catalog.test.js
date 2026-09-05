import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  groupOfficialByNamespace,
  parseOfficialApiInventory,
} from "./lib/sandkit-html.mjs";
import {
  groupDeclaredByNamespace,
  resolveAlias,
  scanDeclaredSandkitApi,
  scanWorkerNamespaces,
} from "./lib/scan-sandkit-api.mjs";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SRC = join(ROOT, "src");
const CACHE = join(ROOT, ".tmp", "sandkit.html");

test("parseOfficialApiInventory reads nested api-signature paths from cached HTML", () => {
  const html = readFileSync(CACHE, "utf8");
  const members = parseOfficialApiInventory(html);
  assert.ok(members.length > 200, `expected many members, got ${members.length}`);
  assert.ok(
    members.some((m) => m.path === "action.getActive"),
    "should include action.getActive",
  );
  const byNs = groupOfficialByNamespace(members);
  assert.ok(byNs.player?.length > 5);
  assert.ok(byNs.gameConfig?.length > 0, "gameConfig should be present in official inventory");
});

test("scanDeclaredSandkitApi counts nested namespace members", () => {
  const members = scanDeclaredSandkitApi(SRC);
  assert.ok(members.length > 300, `expected many declared members, got ${members.length}`);
  assert.ok(
    members.some((m) => m.path.startsWith("player.inventory.")),
    "should include nested player.inventory members",
  );
  const byNs = groupDeclaredByNamespace(members);
  assert.ok(byNs.gameConfig?.length > 0, "gameConfig should be scanned from gameconfig.d.ts");
});

test("scanWorkerNamespaces reads worker sandkit-api.d.ts", () => {
  const worker = scanWorkerNamespaces(SRC);
  assert.ok(worker.has("elements"));
  assert.ok(worker.has("grid"));
});

test("resolveAlias maps official paths to declared names", () => {
  const aliases = {
    "time.getElapsedMs": "getTimeMs",
    "world.mutate": "grid.mutate",
    "lights.vfx.createAtWorld": "lights.temporary.createAtWorld",
  };
  assert.equal(resolveAlias("time.getElapsedMs", aliases), "getTimeMs");
  assert.equal(resolveAlias("world.mutate", aliases), "grid.mutate");
  assert.equal(
    resolveAlias("lights.vfx.createAtWorld", aliases),
    "lights.temporary.createAtWorld",
  );
  assert.equal(resolveAlias("action.getActive", aliases), "action.getActive");
});
