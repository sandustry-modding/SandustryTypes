/**
 * Parse Keep a Changelog sections for GitHub release notes.
 */

/**
 * @param {string} version
 * @returns {RegExp}
 */
export function versionHeadingPattern(version) {
  return new RegExp(`^## ${version.replace(/\./g, "\\.")} - \\d{4}-\\d{2}-\\d{2}\\s*$`, "m");
}

/**
 * Return the markdown body for one dated version section.
 *
 * Strips the release-tag URL line GitHub adds automatically.
 *
 * @param {string} changelog
 * @param {string} version
 * @returns {string | null}
 */
export function extractReleaseNotes(changelog, version) {
  const heading = versionHeadingPattern(version);
  const match = changelog.match(heading);
  if (!match || match.index === undefined) return null;

  const start = match.index + match[0].length;
  const rest = changelog.slice(start);
  const nextHeading = rest.search(/^## /m);
  let body = (nextHeading === -1 ? rest : rest.slice(0, nextHeading)).trim();
  body = body.replace(
    /^https:\/\/github\.com\/[^\s]+\/releases\/tag\/v[^\s]+\s*\n?/,
    "",
  );
  return body.trim() || null;
}
