/**
 * Shared primitives for Sandkit declarations.
 *
 * Not a runtime `sandkit` namespace.
 * Main-thread API modules live under `src/sandkit/api/`.
 * Worker-thread API modules live under `src/worker/api/`.
 *
 * At runtime, `sandkit.api.shared` is the shared-memory buffer API — not this folder.
 */
export type {
  CellCoordinates,
  CellXY,
  Size2,
  Vector2,
} from "./geometry";
