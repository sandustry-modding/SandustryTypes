import assert from "node:assert/strict";
import test from "node:test";
import { extractReleaseNotes } from "./release-notes.mjs";

const sample = `# Changelog

## Unreleased

## 0.6.0 - 2026-09-06

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.6.0

### Added

- Electron types

### Changed

- Split modules

## 0.5.0 - 2026-09-03

### Added

- Older release
`;

test("extractReleaseNotes returns section body without release URL", () => {
  const notes = extractReleaseNotes(sample, "0.6.0");
  assert.ok(notes);
  assert.match(notes, /^### Added/);
  assert.match(notes, /Electron types/);
  assert.match(notes, /Split modules/);
  assert.doesNotMatch(notes, /releases\/tag/);
  assert.doesNotMatch(notes, /Older release/);
});

test("extractReleaseNotes returns null for missing version", () => {
  assert.equal(extractReleaseNotes(sample, "9.9.9"), null);
});
