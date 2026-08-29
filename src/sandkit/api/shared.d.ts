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
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.shared.buffers.ensure`
     */
    export function ensure(key: string, config: { type: SharedArrayType; length: number; }): SharedArray;

    /**
     * @deprecated Use {@link ensure} instead.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.shared.buffers.ensure`
     */
    export function create(key: string, config: { type: SharedArrayType; length: number; }): SharedArray;

    /**
     * Look up a named shared buffer without creating it.
     *
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.shared.buffers.get`
     */
    export import get = sharedApi.api.shared.buffers.get;
  }

  /** Opaque shared array backing store. */
  export import SharedArray = sharedApi.api.shared.SharedArray;
  /** Discriminator for the underlying typed array kind. */
  export import SharedArrayType = sharedApi.api.shared.SharedArrayType;
}
