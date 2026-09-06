import assert from "node:assert/strict";
import { test } from "node:test";
import { buildBrowseCatalog, cardFromNode, docsifyHash } from "./namespace-cards.mjs";

test("docsifyHash strips .md and prefixes #/", () => {
  assert.equal(docsifyHash("api/sandkit.api.player.md"), "#/api/sandkit.api.player");
});

test("cardFromNode copies the summary description", () => {
  const card = cardFromNode(
    {
      name: "player",
      typedocRel: "sandkit/api/namespaces/player/README.md",
    },
    () => "api/sandkit.api.player.md",
    { player: { description: "Move the player." } },
  );
  assert.equal(card.name, "player");
  assert.equal(card.href, "#/api/sandkit.api.player");
  assert.equal(card.description, "Move the player.");
});

test("buildBrowseCatalog groups main leftovers as Other", () => {
  const catalog = buildBrowseCatalog({
    mainNs: [
      { name: "player", typedocRel: "player.md" },
      { name: "zzz", typedocRel: "zzz.md" },
    ],
    workerNs: [],
    engineNs: [],
    href: (rel) => `api/${rel}`,
  });
  const titles = catalog.main.map((section) => section.title);
  assert.ok(titles.includes("Player & controls"));
  assert.ok(titles.includes("Other"));
  const other = catalog.main.find((section) => section.title === "Other");
  assert.equal(other?.cards[0]?.name, "zzz");
  assert.equal(other?.cards[0]?.href, "#/api/zzz");
});
