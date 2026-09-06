# Rules

This folder is the Sandkit types package and the Docsify API site.
Edit generated member layout in `scripts/api-gen/api-cards.mjs` and `docs/assets/api-cards.css`.
Official signatures: do not invent APIs.

Markdown prose in this repo: one sentence per line.

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

## Hook-id maps

Maps whose keys are colon ids (`item:use`, `terrain:destroyed`) are not tables and not bullet lists.

Each id is a small heading: `h4.smt-hook-heading` with the id in `<code>`.
The args type is a Prism TypeScript fence under that heading.
Rebuild nested object fields into that fence.

A deprecated hook id keeps the same heading, then the standard Deprecated callout, then the type fence.

## Generate

`npm run generate` overwrites `docs/api/` pages in place.
It does not delete that folder.

After card or generator changes, run `node --test scripts/api-gen/api-cards.test.js` and `npm run generate -- --docs`.

## Site

Docsify `noEmoji: true`.
The in-page heading spy highlights `h1`–`h3` only (gold).
The API sidebar nests child namespaces under the current page (for example `buildings` and `inventory` under `player`).
