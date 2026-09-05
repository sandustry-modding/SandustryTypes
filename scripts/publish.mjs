/**
 * Verify the package, then publish to npm.
 *
 * Checks (before npm publish):
 * - clean git working tree
 * - CHANGELOG.md has a dated section for package.json version
 * - docs/Changelog.md matches CHANGELOG.md
 * - version is not already on the registry
 * - npm auth works (runs `npm login` when whoami fails)
 * - npm run validate (typecheck, tests, packed-tarball consumer probes)
 *
 * Usage:
 *   npm run release
 *   npm run release -- --dry-run
 *
 * Named `release` in package.json so it does not collide with npm’s
 * `publish` lifecycle script.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dryRun = process.argv.includes("--dry-run");
const npmBin = process.platform === "win32" ? "npm.cmd" : "npm";

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const version = pkg.version;
const name = pkg.name;

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(`publish: ${message}`);
  process.exit(1);
}

/**
 * @param {string} message
 */
function info(message) {
  console.log(`publish: ${message}`);
}

/**
 * @param {string} cmd
 * @param {string[]} args
 * @param {{ allowFail?: boolean, inherit?: boolean }} [opts]
 */
function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, {
    cwd: root,
    encoding: "utf8",
    stdio: opts.inherit ? "inherit" : ["ignore", "pipe", "pipe"],
  });
  if (!opts.allowFail && result.status !== 0) {
    if (!opts.inherit) {
      if (result.stdout?.trim()) console.error(result.stdout);
      if (result.stderr?.trim()) console.error(result.stderr);
    }
    fail(`${cmd} ${args.join(" ")} failed (exit ${result.status})`);
  }
  return result;
}

info(`${dryRun ? "dry-run for" : "publishing"} ${name}@${version}`);

// --- git clean ---
const status = run("git", ["status", "--porcelain"]);
if (status.stdout.trim()) {
  fail("git working tree is not clean; commit or stash before publish");
}

// --- changelog ---
const changelogPath = path.join(root, "CHANGELOG.md");
const docsChangelogPath = path.join(root, "docs", "Changelog.md");
if (!fs.existsSync(changelogPath)) fail("missing CHANGELOG.md");
if (!fs.existsSync(docsChangelogPath)) fail("missing docs/Changelog.md");

const changelog = fs.readFileSync(changelogPath, "utf8");
const docsChangelog = fs.readFileSync(docsChangelogPath, "utf8");
if (changelog !== docsChangelog) {
  fail("docs/Changelog.md must match CHANGELOG.md");
}

const versionHeading = new RegExp(
  `^## ${version.replace(/\./g, "\\.")} - \\d{4}-\\d{2}-\\d{2}\\s*$`,
  "m",
);
if (!versionHeading.test(changelog)) {
  fail(`CHANGELOG.md must include a dated section "## ${version} - YYYY-MM-DD" before publish`);
}

const unreleasedMatch = changelog.match(/^## Unreleased\s*\n([\s\S]*?)(?=^## )/m);
if (unreleasedMatch) {
  const body = unreleasedMatch[1].replace(/^\s+|\s+$/g, "");
  if (body.length > 0) {
    fail(
      "CHANGELOG.md ## Unreleased must be empty before publish (move notes into the version section)",
    );
  }
}

// --- registry ---
const view = run(npmBin, ["view", `${name}@${version}`, "version"], { allowFail: true });
if (view.status === 0 && view.stdout.trim() === version) {
  fail(`${name}@${version} is already on the npm registry`);
}

/**
 * @returns {string} npm username
 */
function requireNpmAuth() {
  let whoami = run(npmBin, ["whoami"], { allowFail: true });
  if (whoami.status === 0) {
    return whoami.stdout.trim();
  }
  info("npm auth missing or expired; starting npm login…");
  run(npmBin, ["login"], { inherit: true });
  whoami = run(npmBin, ["whoami"], { allowFail: true });
  if (whoami.status !== 0) {
    if (whoami.stderr?.trim()) console.error(whoami.stderr);
    fail("npm login did not establish auth; retry manually with npm login");
  }
  return whoami.stdout.trim();
}

info(`npm user: ${requireNpmAuth()}`);

// --- validate ---
info("running validate…");
run(npmBin, ["run", "validate"], { inherit: true });
info("validate ok");

if (dryRun) {
  info(`dry-run ok — would publish ${name}@${version}`);
  process.exit(0);
}

// --- publish ---
// Skip lifecycle scripts: validate already ran above. Avoids re-entering this
// script if someone ever wires a `publish` lifecycle by mistake.
info("npm publish…");
run(npmBin, ["publish", "--ignore-scripts"], { inherit: true });

const tag = `v${version}`;
const tagExists = run("git", ["rev-parse", "-q", "--verify", `refs/tags/${tag}`], {
  allowFail: true,
});
if (tagExists.status !== 0) {
  run("git", ["tag", "-a", tag, "-m", `Release ${version}`]);
  info(`created local tag ${tag}`);
} else {
  info(`tag ${tag} already exists`);
}

info(`published ${name}@${version}`);
info(`next: git push origin ${tag}  (and create a GitHub release if needed)`);
