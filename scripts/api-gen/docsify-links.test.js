import assert from "node:assert/strict";
import test from "node:test";
import {
  collectHeadingIds,
  createDocsifySlugify,
  docsifyHeadingIdToken,
  fixSandkitNamespaceLinks,
  fullPageHeadingId,
  headingIdFromText,
  qualifyDocsifyPageLinks,
  qualifyFullPageAnchors,
  resolveDocsifyTarget,
  rewriteDocsifyHref,
  rewriteMarkdownLinks,
  validateDeprecatedCallouts,
  validateDocsifyLinks,
} from "./docsify-links.mjs";

test("full-page heading ids drop dots so Docsify :id= does not leak into the title", () => {
  assert.equal(
    fullPageHeadingId("sandkit.api.effects", "createeffectatworld"),
    "sandkit-api-effects-createeffectatworld",
  );
  assert.equal(docsifyHeadingIdToken("sandkit.api.effects.createeffectatworld"), "sandkit-api-effects-createeffectatworld");
  const slugify = createDocsifySlugify();
  assert.equal(
    headingIdFromText(
      "~~sandkit.api.effects.createEffectAtWorld~~ :id=sandkit-api-effects-createeffectatworld",
      slugify,
    ),
    "sandkit-api-effects-createeffectatworld",
  );
  const dotted = createDocsifySlugify();
  assert.equal(
    headingIdFromText(
      "~~sandkit.api.effects.createEffectAtWorld~~ :id=sandkit.api.effects.createeffectatworld",
      dotted,
    ),
    "sandkit",
  );
});

test("qualifyFullPageAnchors prefixes ids without dots", () => {
  const src = `#### ~~sandkit.api.effects.createEffectAtWorld~~ :id=createeffectatworld

Use [createAtWorld](?id=createatworld) instead.
`;
  const out = qualifyFullPageAnchors(src, "sandkit.api.effects");
  assert.match(out, /:id=sandkit-api-effects-createeffectatworld/);
  assert.match(out, /\]\(\?id=sandkit-api-effects-createatworld\)/);
  assert.doesNotMatch(out, /:id=sandkit\.api\./);
});

test("rewriteDocsifyHref turns heading hashes into Docsify ?id= query params", () => {
  assert.equal(rewriteDocsifyHref("#start"), "?id=start");
  assert.equal(rewriteDocsifyHref("api/shared.player.md#vector2"), "api/shared.player.md?id=vector2");
  assert.equal(rewriteDocsifyHref("api/shared.player.md?id=vector2"), "api/shared.player.md?id=vector2");
  assert.equal(rewriteDocsifyHref("#/search"), "#/search");
  assert.equal(
    rewriteDocsifyHref("https://sandustry.com/sandkit.html#api-access-heading"),
    "https://sandustry.com/sandkit.html#api-access-heading",
  );
});

test("rewriteMarkdownLinks rewrites in-page TypeDoc hashes", () => {
  const src = "Options for [start](#start) and [Vector2](api/shared.player.md#vector2).";
  assert.equal(
    rewriteMarkdownLinks(src),
    "Options for [start](?id=start) and [Vector2](api/shared.player.md?id=vector2).",
  );
});

test("fixSandkitNamespaceLinks rewrites TypeDoc sandkit cross-links", () => {
  const src =
    "See [sandkit.api](api/sandkit.md?id=api-1), [sandkit.engine](?id=engine-1), and [sandkit.enums](?id=enums-1).";
  assert.equal(
    fixSandkitNamespaceLinks(src),
    "See [sandkit.api](api/sandkit.api.md), [sandkit.engine](api/sandkit.engine.md), and [sandkit.enums](api/sandkit.enums.md).",
  );
});

test("collectHeadingIds uses :id= and Docsify slugify", () => {
  const ids = collectHeadingIds(`# sandkit.api.game

### start() :id=start

#### Properties

##### skipIntro?
`);
  assert.equal(ids.has("start"), true);
  assert.equal(ids.has("properties"), true);
  assert.equal(ids.has("skipintro"), true);
});

test("resolveDocsifyTarget maps routes from the docs root", () => {
  assert.deepEqual(resolveDocsifyTarget("?id=start", "api/sandkit.api.game.md"), {
    file: "api/sandkit.api.game.md",
    id: "start",
    skip: false,
  });
  assert.equal(resolveDocsifyTarget("search.md", "api/sandkit.api.game.md").file, "search.md");
  assert.equal(resolveDocsifyTarget("/", "guides/foo.md").file, "README.md");
  assert.equal(resolveDocsifyTarget("https://example.com/a", "README.md").skip, true);
});

test("validateDocsifyLinks reports missing files and heading ids", () => {
  const files = [
    {
      rel: "api/game.md",
      content: `# game

See [missing](api/nope.md) and [start](?id=start) and [bad](?id=nope).

### start() :id=start
`,
    },
  ];
  const errors = validateDocsifyLinks(files, () => false);
  const messages = errors.map((e) => e.message);
  assert.equal(messages.some((m) => m.includes("missing file api/nope.md")), true);
  assert.equal(messages.some((m) => m.includes('missing heading id "nope"')), true);
  assert.equal(messages.some((m) => m.includes('missing heading id "start"')), false);
});

test("qualifyDocsifyPageLinks prefixes bare ?id= hrefs with the page path", () => {
  assert.equal(
    qualifyDocsifyPageLinks("Use [start](?id=start) instead.", "api/sandkit.api.game.md"),
    "Use [start](api/sandkit.api.game.md?id=start) instead.",
  );
  assert.equal(
    qualifyDocsifyPageLinks(
      "Use [grid.mutate](api/sandkit.api.grid.md?id=mutate) instead.",
      "api/sandkit.api.world.md",
    ),
    "Use [grid.mutate](api/sandkit.api.grid.md?id=mutate) instead.",
  );
});

test("validateDeprecatedCallouts rejects HTML anchors and missing markdown=\"1\"", () => {
  const files = [
    {
      rel: "api/player.md",
      content: `# player

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note">Use <a href="?id=setpositionatworld">setPositionAtWorld</a> instead.</div>
</div>

### setPositionAtWorld() :id=setpositionatworld
`,
    },
    {
      rel: "api/player.md",
      content: `# player

<div class="smt-member-deprecated-note" markdown="1">

Use [setPositionAtWorld](?id=setpositionatworld) instead.

</div>

### setPositionAtWorld() :id=setpositionatworld
`,
    },
  ];

  const bad = validateDeprecatedCallouts([files[0]], () => true);
  assert.equal(
    bad.some((e) => e.message.includes('markdown="1"')),
    true,
  );
  assert.equal(
    bad.some((e) => e.message.includes("markdown links")),
    true,
  );

  const bareId = validateDeprecatedCallouts(
    [
      {
        rel: "api/player.md",
        content: `# player

<div class="smt-member-deprecated-note" markdown="1">

Use [setPositionAtWorld](?id=setpositionatworld) instead.

</div>

### setPositionAtWorld() :id=setpositionatworld
`,
      },
    ],
    () => true,
  );
  assert.equal(
    bareId.some((e) => e.message.includes("bare ?id=")),
    true,
  );

  const good = validateDeprecatedCallouts(
    [
      {
        rel: "api/player.md",
        content: `# player

<div class="smt-member-deprecated-note" markdown="1">

Use [setPositionAtWorld](api/player.md?id=setpositionatworld) instead.

</div>

### setPositionAtWorld() :id=setpositionatworld
`,
      },
    ],
    () => true,
  );
  assert.equal(good.length, 0);
});
