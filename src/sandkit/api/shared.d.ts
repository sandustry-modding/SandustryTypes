/**
 * Cross-thread shared memory buffers.
 *
 * Available as `sandkit.api.shared`.
 *
 * @module
 */
// Aliased: this module declares its own `shared` namespace below.
import { shared as sharedApi } from "../../shared";

export namespace shared {
  /** Shared buffer ensure and lookup. */
  export namespace buffers {
    /**
     * Create or return a named shared buffer with type and length.
     *
     * @param key - Buffer name shared across threads.
     * @param config - Typed array kind and element count.
     *
     * @example
     * ```ts
     * const counts = api.shared.buffers.ensure("counts", {
     *   type: "uint32",
     *   length: 4,
     * });
     * ```
     *
     */
    export function ensure(
      key: string,
      config: { type: SharedArrayType; length: number },
    ): SharedArray;

    /**
     * @deprecated Use {@link ensure} instead.
     *
     */
    export function create(
      key: string,
      config: { type: SharedArrayType; length: number },
    ): SharedArray;

    /**
     * Look up a named shared buffer without creating it.
     *
     */
    export import get = sharedApi.api.shared.buffers.get;
  }

  /** Opaque shared array backing store. */
  export import SharedArray = sharedApi.api.shared.SharedArray;
  /** Discriminator for the underlying typed array kind. */
  export import SharedArrayType = sharedApi.api.shared.SharedArrayType;
}
