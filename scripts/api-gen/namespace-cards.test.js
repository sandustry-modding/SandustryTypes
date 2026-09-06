import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildBrowseCatalog,
  cardFromNode,
  docsifyHash,
  findCurrentApiRoot,
} from "./namespace-cards.mjs";
test("findCurrentApiRoot returns the parent namespace for a child page", () => {
  const roots = [
    {
      name: "player",
      slug: "sandkit.api.player",
      href: "#/api/sandkit.api.player",
      children: [
        {
          name: "inventory",
          slug: "sandkit.api.player.inventory",
          href: "#/api/sandkit.api.player.inventory",
          children: [],
        },
        {
          name: "buildings",
          slug: "sandkit.api.player.buildings",
          href: "#/api/sandkit.api.player.buildings",
          children: [],
        },
      ],
    },
    {
      name: "elements",
      slug: "sandkit.api.elements",
      href: "#/api/sandkit.api.elements",
      children: [],
    },
    {
      name: "elements",
      slug: "sandkit.api.elements.worker",
      href: "#/api/sandkit.api.elements.worker",
      children: [],
    },
  ];
  const player = findCurrentApiRoot(roots, "sandkit.api.player.inventory");
  assert.equal(player?.name, "player");
  assert.equal(player?.children.length, 2);
  assert.equal(findCurrentApiRoot(roots, "sandkit.api.elements.worker")?.slug, "sandkit.api.elements.worker");
  assert.equal(findCurrentApiRoot(roots, "sandkit.api.elements")?.slug, "sandkit.api.elements");
  assert.equal(findCurrentApiRoot(roots, "search"), null);
});

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
  assert.deepEqual(card.children, []);
});

test("cardFromNode lists child namespaces for browse chips", () => {
  const card = cardFromNode(
    {
      name: "player",
      typedocRel: "sandkit/api/namespaces/player/README.md",
      children: [
        {
          name: "inventory",
          typedocRel: "sandkit/api/namespaces/player/namespaces/inventory/README.md",
        },
        {
          name: "buildings",
          typedocRel: "sandkit/api/namespaces/player/namespaces/buildings/README.md",
        },
      ],
    },
    (rel) => {
      if (rel.includes("inventory")) return "api/sandkit.api.player.inventory.md";
      if (rel.includes("buildings")) return "api/sandkit.api.player.buildings.md";
      return "api/sandkit.api.player.md";
    },
  );
  assert.deepEqual(
    card.children.map((child) => child.name),
    ["buildings", "inventory"],
  );
  assert.equal(card.children[0].href, "#/api/sandkit.api.player.buildings");
  assert.equal(card.children[1].href, "#/api/sandkit.api.player.inventory");
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
