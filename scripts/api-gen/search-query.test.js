import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const search = require(join(dirname(fileURLToPath(import.meta.url)), "../../docs/assets/search-query.js"));

test("classifyEntry tags worker, engine, enum, and methods", () => {
  assert.deepEqual(
    search.classifyEntry({
      title: "sandkit.api.elements.register() (worker)",
      path: "/api/sandkit.api.elements.worker",
      id: "register",
    }),
    { kind: "method", scope: "worker" },
  );
  assert.deepEqual(
    search.classifyEntry({
      title: "sandkit.engine.api.game",
      path: "/api/sandkit.engine.api.game",
      id: "",
    }),
    { kind: "page", scope: "engine" },
  );
  assert.deepEqual(
    search.classifyEntry({
      title: "sandkit.enums.Scene",
      path: "/api/sandkit.enums.Scene",
      id: "",
    }),
    { kind: "page", scope: "enum" },
  );
  assert.deepEqual(
    search.classifyEntry({
      title: "sandkit.api.player.buildings.unlockById()",
      path: "/api/sandkit.api.player.buildings",
      id: "unlockbyid",
    }),
    { kind: "method", scope: "main" },
  );
});

test("searchIndex ranks an exact method path first", () => {
  const index = [
    {
      title: "sandkit.api.camera",
      body: "Camera helpers",
      path: "/api/sandkit.api.camera",
      id: "",
    },
    {
      title: "sandkit.api.camera.setFocusAtWorld()",
      body: "Focus the camera on a world point",
      path: "/api/sandkit.api.camera",
      id: "setfocusatworld",
    },
    {
      title: "Guides",
      body: "camera tutorial",
      path: "/guides/getting-started",
      id: "",
    },
  ];
  const found = search.searchIndex(index, "camera.setFocusAtWorld", "all", 10);
  assert.equal(found.hits[0]?.entry.title, "sandkit.api.camera.setFocusAtWorld()");
  const mainOnly = search.searchIndex(index, "camera", "main", 10);
  assert.equal(mainOnly.total, 2);
  const guides = search.searchIndex(index, "camera", "guide", 10);
  assert.equal(guides.total, 1);
});

test("searchIndex can hide deprecated entries", () => {
  const index = [
    {
      title: "sandkit.api.ui.overlays.register()",
      body: "Deprecated overlay register",
      path: "/api/sandkit.api.ui.overlays",
      id: "register",
      deprecated: true,
    },
    {
      title: "sandkit.api.ui.regions.mount()",
      body: "Mount a region",
      path: "/api/sandkit.api.ui.regions",
      id: "mount",
    },
  ];
  const shown = search.searchIndex(index, "mount", "all", 10, false);
  assert.equal(shown.total, 1);
  const hidden = search.searchIndex(index, "register", "all", 10, true);
  assert.equal(hidden.total, 0);
  const visible = search.searchIndex(index, "mount", "all", 10, true);
  assert.equal(visible.hits[0]?.entry.title, "sandkit.api.ui.regions.mount()");
});
