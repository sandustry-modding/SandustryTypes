import assert from "node:assert/strict";
import test from "node:test";
import { parseMemberH3, parseSignatureLine, renderSignatureHtml, restyleApiCards } from "./api-cards.mjs";

test("parseMemberH3 reads TypeDoc member headings", () => {
  assert.deepEqual(parseMemberH3("start() :id=start"), {
    id: "start",
    local: "start",
    strike: false,
  });
  assert.deepEqual(parseMemberH3("~~createAtCellWhenIdle()~~ :id=createatcellwhenidle"), {
    id: "createatcellwhenidle",
    local: "createAtCellWhenIdle",
    strike: true,
  });
  assert.equal(parseMemberH3("Properties"), null);
});

test("parseSignatureLine splits return type, name, and params", () => {
  const parsed = parseSignatureLine(
    "sandkit.api.game.start(options?: GameStartOptions): void",
  );
  assert.equal(parsed.kind, "call");
  assert.equal(parsed.name, "start");
  assert.equal(parsed.ret, "void");
  assert.equal(parsed.params, "options?: GameStartOptions");
});

test("renderSignatureHtml emits a TypeScript fence for Prism", () => {
  const html = renderSignatureHtml(
    parseSignatureLine("sandkit.api.game.start(options?: GameStartOptions): void"),
  );
  assert.match(html, /class="smt-member-sig"/);
  assert.match(html, /data-sig="sandkit\.api\.game\.start\(options\?: GameStartOptions\): void"/);
  assert.match(html, /```ts\nstart\(options\?: GameStartOptions\): void\n```/);
});

test("restyleApiCards builds a member card with an arguments table", () => {
  const src = `# sandkit.api.game

## Functions <!-- {docsify-ignore} -->

### start() :id=start

\`\`\`ts
sandkit.api.game.start(options?: GameStartOptions): void
\`\`\`

Defined in: [sandkit/api/game.d.ts:21](https://github.com/example/game.d.ts#L21)

Start or restart the game session.

#### Parameters

##### options?

[\`GameStartOptions\`](#gamestartoptions)

Optional session start flags.

#### Returns

\`void\`

#### Example

\`\`\`ts
api.game.start({ skipIntro: true });
\`\`\`
`;
  const out = restyleApiCards(src, "sandkit.api.game");
  assert.match(out, /class="smt-member-card"/);
  assert.match(out, /^### sandkit\.api\.game\.start :id=start$/m);
  assert.match(out, /class="smt-member-badge"/);
  assert.match(out, /game\.d\.ts:21/);
  assert.match(out, /start\(options\?: GameStartOptions\): void/);
  const sigAt = out.indexOf("start(options?: GameStartOptions): void");
  const tableAt = out.indexOf("| Argument | Type | Description |");
  const descAt = out.indexOf("Start or restart the game session.");
  assert.ok(sigAt >= 0 && tableAt > sigAt && descAt > tableAt);
  assert.match(out, /^\| Argument \| Type \| Description \|$/m);
  assert.match(out, /options\?/);
  assert.match(out, /GameStartOptions/);
  assert.doesNotMatch(out, /^#### Start or restart the game session$/m);
  assert.match(out, /^#### Example$/m);
  assert.doesNotMatch(out, /^#### Returns$/m);
  assert.doesNotMatch(out, /^### start\(\)/m);
});

test("restyleApiCards flattens interface properties", () => {
  const src = `# sandkit.api.game

## Interfaces <!-- {docsify-ignore} -->

### GameStartOptions :id=gamestartoptions

<p class="smt-member-path"><code>sandkit.api.game.GameStartOptions</code></p>
Defined in: [sandkit/api/game.d.ts:24](https://github.com/example/game.d.ts#L24)

Options for [start](#start).

#### Properties

##### skipIntro?

\`\`\`ts
optional skipIntro?: boolean
\`\`\`

Defined in: [sandkit/api/game.d.ts:26](https://github.com/example/game.d.ts#L26)

When true, skip the intro sequence.
`;
  const out = restyleApiCards(src, "sandkit.api.game");
  assert.match(out, /^### sandkit\.api\.game\.GameStartOptions :id=gamestartoptions$/m);
  const tableAt = out.indexOf("| Property | Type | Description |");
  const descAt = out.indexOf("Options for");
  assert.ok(tableAt >= 0 && descAt > tableAt);
  assert.match(out, /skipIntro\?/);
  assert.match(out, /smt-member-anchors/);
  assert.match(out, /^##### skipIntro\? <!-- \{docsify-ignore\} -->$/m);
  assert.match(out, /boolean/);
  assert.match(out, /When true, skip the intro sequence/);
});

test("restyleApiCards table cells use HTML pipe for union types", () => {
  const src = `# sandkit.api.player

## Functions <!-- {docsify-ignore} -->

### setMovementMode() :id=setmovementmode

\`\`\`ts
setMovementMode(mode: "normal" | "hover"): boolean
\`\`\`

#### Parameters

##### mode

\`"normal"\` | \`"hover"\`

\`"normal"\` for default physics, or \`"hover"\` for hover flight.
`;
  const out = restyleApiCards(src, "sandkit.api.player");
  assert.match(out, /`"normal"` &#124; `"hover"`/);
  assert.doesNotMatch(out, /\\\|/);
});

test("restyleApiCards drops Official docs See sections", () => {
  const src = `# sandkit.api.player

## See <!-- {docsify-ignore} -->

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Functions <!-- {docsify-ignore} -->

### setPositionAtWorld() :id=setpositionatworld

\`\`\`ts
setPositionAtWorld(): void
\`\`\`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### setWorldPosition() :id=setworldposition

\`\`\`ts
setWorldPosition(): void
\`\`\`

#### Deprecated

Use [setPositionAtWorld](?id=setpositionatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
`;
  const out = restyleApiCards(src, "sandkit.api.player");
  assert.doesNotMatch(out, /^## See/m);
  assert.doesNotMatch(out, /^#### See$/m);
  assert.doesNotMatch(out, /Official docs/);
  assert.match(out, /smt-member-deprecated/);
  assert.match(out, /smt-member-deprecated-note" markdown="1"/);
  assert.match(out, /\[setPositionAtWorld\]\(api\/sandkit\.api\.player\.md\?id=setpositionatworld\)/);
  assert.doesNotMatch(out, /\]\(\?id=/);
  assert.doesNotMatch(out, /^#### Deprecated$/m);
  assert.doesNotMatch(out, /smt-member-head/);
});

test("restyleApiCards drops the TypeDoc Namespaces child list", () => {
  const src = `# sandkit.api.player

## Namespaces <!-- {docsify-ignore} -->

- [inventory](api/sandkit.api.player.inventory.md)
- [buildings](api/sandkit.api.player.buildings.md)

## Functions <!-- {docsify-ignore} -->

### setPositionAtWorld() :id=setpositionatworld

\`\`\`ts
setPositionAtWorld(): void
\`\`\`
`;
  const out = restyleApiCards(src, "sandkit.api.player");
  assert.match(out, /setPositionAtWorld/);
  assert.doesNotMatch(out, /## Namespaces/);
  assert.doesNotMatch(out, /inventory/);
  assert.doesNotMatch(out, /buildings/);
});

test("restyleApiCards drops the TypeDoc References re-export list", () => {
  const src = `# sandkit.api.player

## Functions <!-- {docsify-ignore} -->

### getPositionAtWorld() :id=getpositionatworld

\`\`\`ts
getPositionAtWorld(): Vector2
\`\`\`

## References <!-- {docsify-ignore} -->

### getWorldPosition

Re-exports getWorldPosition.
`;
  const out = restyleApiCards(src, "sandkit.api.player");
  assert.match(out, /getPositionAtWorld/);
  assert.doesNotMatch(out, /## References/);
  assert.doesNotMatch(out, /Re-exports/);
  assert.doesNotMatch(out, /getWorldPosition/);
});
