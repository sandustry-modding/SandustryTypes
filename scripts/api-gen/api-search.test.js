import assert from "node:assert/strict";
import test from "node:test";
import {
  apiPathToQualifiedName,
  apiPathToRouteFile,
  buildSearchIndex,
  collectSearchPaths,
  mdFileToSearchPath,
  qualifyApiMarkdown,
  qualifiedNameToSlug,
  rewriteApiHrefMap,
} from "./api-search.mjs";

test("apiPathToQualifiedName maps TypeDoc files to runtime names", () => {
  assert.equal(apiPathToQualifiedName("README.md"), "Sandkit API types");
  assert.equal(apiPathToQualifiedName("types.md"), "Sandkit API types");
  assert.equal(apiPathToQualifiedName("modules.md"), null);
  assert.equal(apiPathToQualifiedName("_media/search.md"), null);
  assert.equal(
    apiPathToQualifiedName("sandkit/api/namespaces/settings/README.md"),
    "sandkit.api.settings",
  );
  assert.equal(
    apiPathToQualifiedName("src/sandkit/api/namespaces/settings/README.md"),
    "sandkit.api.settings",
  );
  assert.equal(
    apiPathToQualifiedName("sandkit/api/namespaces/ui/namespaces/overlays/README.md"),
    "sandkit.api.ui.overlays",
  );
  assert.equal(
    apiPathToQualifiedName("worker/namespaces/elements/README.md"),
    "sandkit.api.elements (worker)",
  );
  assert.equal(
    apiPathToQualifiedName("worker/namespaces/structures/namespaces/processing/README.md"),
    "sandkit.api.structures.processing (worker)",
  );
  assert.equal(apiPathToQualifiedName("engine/README.md"), "sandkit.engine");
  assert.equal(
    apiPathToQualifiedName("engine/namespaces/game/README.md"),
    "sandkit.engine.api.game",
  );
  assert.equal(
    apiPathToQualifiedName("sandkit/enums/enumerations/Scene.md"),
    "sandkit.enums.Scene",
  );
  assert.equal(apiPathToQualifiedName("sandkit/react/README.md"), "sandkit.react");
  assert.equal(apiPathToQualifiedName("shared/player/README.md"), "shared.player");
  assert.equal(apiPathToQualifiedName("sandkit.api.settings.md"), "sandkit.api.settings");
  assert.equal(
    apiPathToQualifiedName("sandkit.api.elements.worker.md"),
    "sandkit.api.elements (worker)",
  );
  assert.equal(apiPathToQualifiedName("global/README.md"), null);
  assert.equal(apiPathToQualifiedName("api/_sidebar.md"), null);
});

test("qualifiedNameToSlug and apiPathToRouteFile use runtime-style URLs", () => {
  assert.equal(qualifiedNameToSlug("sandkit.api.action"), "sandkit.api.action");
  assert.equal(qualifiedNameToSlug("sandkit.api.elements (worker)"), "sandkit.api.elements.worker");
  assert.equal(qualifiedNameToSlug("Sandkit API types"), "types");
  assert.equal(
    apiPathToRouteFile("sandkit/api/namespaces/action/README.md"),
    "sandkit.api.action.md",
  );
  assert.equal(
    apiPathToRouteFile("worker/namespaces/elements/README.md"),
    "sandkit.api.elements.worker.md",
  );
  assert.equal(
    apiPathToRouteFile("engine/namespaces/game/README.md"),
    "sandkit.engine.api.game.md",
  );
});

test("qualifyApiMarkdown puts the absolute path in the signature fence", () => {
  const src = `# settings

## Functions

### get()

\`\`\`ts
get(id: string): unknown
\`\`\`

Return a value.

## Type Aliases

### ConfigValueV1

\`\`\`ts
ConfigValueV1 = string | number | boolean
\`\`\`
`;
  const out = qualifyApiMarkdown(src, "sandkit.api.settings");
  assert.match(out, /^# sandkit\.api\.settings$/m);
  assert.match(out, /^## Functions <!-- \{docsify-ignore\} -->$/m);
  assert.match(out, /^### get\(\) :id=get$/m);
  assert.match(out, /^sandkit\.api\.settings\.get\(id: string\): unknown$/m);
  assert.match(out, /^### ConfigValueV1 :id=configvaluev1$/m);
  assert.match(out, /^sandkit\.api\.settings\.ConfigValueV1 = string \| number \| boolean$/m);
  assert.doesNotMatch(out, /smt-member-path/);
});

test("qualifyApiMarkdown keeps a path line when there is no signature fence", () => {
  const src = `# settings

## Functions

### get()

Return a value.
`;
  const out = qualifyApiMarkdown(src, "sandkit.api.settings");
  assert.match(out, /<code>sandkit\.api\.settings\.get\(\)<\/code>/);
});

test("qualifyApiMarkdown uses live sandkit paths for composed bag types", () => {
  const src = `# sandkit

## Type Aliases

### SandkitApi

The composed api bag.

### Sandkit

The host object.
`;
  const out = qualifyApiMarkdown(src, "sandkit");
  assert.match(out, /^### sandkit\.api :id=sandkitapi$/m);
  assert.match(out, /^### sandkit :id=sandkit$/m);
  assert.doesNotMatch(out, /sandkit\.SandkitApi/);
  assert.doesNotMatch(out, /<code>sandkit\.Sandkit<\/code>/);
});

test("qualifyApiMarkdown marks WorkerSandkitApi as the worker api", () => {
  const src = `# worker

## Type Aliases

### WorkerSandkitApi
`;
  const out = qualifyApiMarkdown(src, "sandkit.api (worker)");
  assert.match(out, /^### sandkit\.api \(worker\) :id=workersandkitapi$/m);
  assert.doesNotMatch(out, /WorkerSandkitApi :id=/);
});

test("qualifyApiMarkdown marks worker members without breaking the main-thread name", () => {
  const src = `# elements

## Functions

### register()
`;
  const out = qualifyApiMarkdown(src, "sandkit.api.elements (worker)");
  assert.match(out, /^# sandkit\.api\.elements \(worker\)$/m);
  assert.match(out, /^### register\(\) :id=register$/m);
  assert.match(out, /<code>sandkit\.api\.elements\.register\(\) \(worker\)<\/code>/);
});

test("buildSearchIndex prefers runtime member paths as titles", () => {
  const entries = buildSearchIndex([
    {
      path: "/api/sandkit.api.settings",
      content: `# sandkit.api.settings

## Functions <!-- {docsify-ignore} -->

### get() :id=get

\`\`\`ts
sandkit.api.settings.get(id: string): unknown
\`\`\`

Return a settings field value by id.

### ConfigValueV1 :id=configvaluev1

\`\`\`ts
sandkit.api.settings.ConfigValueV1 = string | number | boolean
\`\`\`

Settings field value shape.
`,
    },
  ]);
  assert.equal(entries[0]?.title, "sandkit.api.settings");
  assert.equal(entries[1]?.title, "sandkit.api.settings.get()");
  assert.equal(entries[1]?.id, "get");
  assert.equal(entries[1]?.path, "/api/sandkit.api.settings");
  assert.match(entries[1]?.body || "", /settings field value/i);
  assert.equal(entries[2]?.title, "sandkit.api.settings.ConfigValueV1");
});

test("buildSearchIndex marks deprecated members and pages", () => {
  const entries = buildSearchIndex([
    {
      path: "/api/sandkit.api.ui.overlays",
      content: `# sandkit.api.ui.overlays

## Deprecated

Use regions instead.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.ui.overlays.register~~ :id=register

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
</div>

</div>
`,
    },
  ]);
  assert.equal(entries[0]?.title, "sandkit.api.ui.overlays");
  assert.equal(entries[0]?.deprecated, true);
  assert.equal(entries[1]?.title, "sandkit.api.ui.overlays.register");
  assert.equal(entries[1]?.deprecated, true);
});

test("mdFileToSearchPath matches Docsify getFile paths", () => {
  assert.equal(mdFileToSearchPath("README.md"), "/");
  assert.equal(mdFileToSearchPath("quick-start.md"), "/quick-start");
  assert.equal(mdFileToSearchPath("api/sandkit.api.settings.md"), "/api/sandkit.api.settings");
  assert.equal(mdFileToSearchPath("api/_sidebar.md"), null);
  assert.equal(mdFileToSearchPath("full.md"), null);
  assert.equal(mdFileToSearchPath("api/full.md"), null);
  assert.equal(mdFileToSearchPath("modules.md"), null);
  assert.equal(mdFileToSearchPath("api/_media.search.md"), null);
  assert.equal(mdFileToSearchPath("api/global/README.md"), null);
  assert.equal(mdFileToSearchPath("search.md"), null);
  assert.equal(mdFileToSearchPath("AGENTS.md"), null);
});

test("rewriteApiHrefMap remaps TypeDoc links to flat slugs", () => {
  const map = new Map([
    ["api/sandkit/api/namespaces/ui/README.md", "api/sandkit.api.ui.md"],
    ["api/shared/asset/README.md", "api/shared.asset.md"],
  ]);
  const out = rewriteApiHrefMap(
    "See [ui](api/sandkit/api/namespaces/ui/README.md) and [AssetRef](api/shared/asset/README.md#assetref).",
    map,
  );
  assert.equal(
    out,
    "See [ui](api/sandkit.api.ui.md) and [AssetRef](api/shared.asset.md?id=assetref).",
  );
});

test("collectSearchPaths sorts and drops skip files", () => {
  assert.deepEqual(collectSearchPaths(["AGENTS.md", "README.md", "builds.md"]), ["/", "/builds"]);
});
