# Rules

This folder is the Sandkit types package.
Types and generated API pages describe **Sandustry the game** and its **public Sandkit surface** only.
Official signatures: do not invent APIs.

Markdown prose in this repo: one sentence per line.

The Docsify site lives in [sandustry-modding.github.io](https://github.com/sandustry-modding/sandustry-modding.github.io) (template `docs/`).
This package has no `docs/` tree.

## In scope

- Sandkit API declarations derived from the game (`sandkit.api`, `sandkit.engine`, enums, hooks)
- Generator output into the docs site clone: `api/`, `full.md`, schemas, search assets
- JSON Schema for manifests the **game host** loads (`modinfo.json`, `patches.json`, `workshop.json`) when those shapes come from Sandkit

## Out of scope

Do **not** add types or docs for:

| Out of scope | Put it instead |
| --- | --- |
| `@modkit/*`, modkit helpers, template-only patches | [SandustryModTemplate](https://github.com/sandustry-modding/SandustryModTemplate) / `docs/modkit/` |
| Mod template npm scripts, dev workflow, release tooling | Template root `README.md` |
| Third-party mod APIs, options, or behavior | That mod's repo |
| Sample mod tutorials | [SandustryExamples](https://github.com/sandustry-modding/SandustryExamples) |
| Guides, site chrome, OKF | Docs site clone |

Do not document individual mods in this repo.
Do not add mod-framework wrappers to `src/` unless they are part of the shipping Sandkit contract.

Vanilla game facts for agents also live in OKF: see [okf/AGENTS.md](https://github.com/sandustry-modding/sandustry-modding.github.io/blob/main/okf/AGENTS.md) on the docs site (`docs/okf/AGENTS.md` in the template clone).

## Member cards

Each generated member is one `.smt-member-card`.
Order inside the card:

1. Member heading (qualified name).
2. Deprecated callout, when the member is deprecated.
3. Signature TypeScript fence.
4. Argument or property table for ordinary members.
5. Description.
6. Examples and other remaining sections.

The Deprecated callout is `.smt-member-deprecated` with the gold **Deprecated** pill and a note that uses `markdown="1"`.
Use that marker for every deprecation: functions, aliases, and hook ids.
Put the callout directly under the heading it belongs to.

Union types in tables use an HTML pipe (`&#124;`) so Docsify does not show a backslash.

Drop TypeDoc page-top **Namespaces** and **References** lists.
Drop **See** sections that only link to official Sandkit HTML.
Search is the index for generated API pages.

Edit generated member layout in `scripts/api-gen/api-cards.mjs` and `assets/api-cards.css` on the docs site.

## Hook-id maps

Maps whose keys are colon ids (`item:use`, `terrain:destroyed`) are not tables and not bullet lists.

Each id is a small heading: `h4.smt-hook-heading` with the id in `<code>`.
The args type is a Prism TypeScript fence under that heading.
Rebuild nested object fields into that fence.

A deprecated hook id keeps the same heading, then the standard Deprecated callout, then the type fence.

## Generate

The docs site clone must sit at `../docs` and be a git repo.

`npm run generate` overwrites `api/` pages there in place.
It does not delete that folder.

After card or generator changes, run `node --test scripts/api-gen/api-cards.test.js` and `npm run generate -- --docs`.

## Site

Docsify `noEmoji: true`.
The in-page heading spy highlights `h1`–`h3` only (gold).
The API sidebar nests child namespaces under the current page (for example `buildings` and `inventory` under `player`).
