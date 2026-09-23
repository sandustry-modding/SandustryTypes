/**
 * Cross-thread shared memory buffers.
 *
 * Available as `sandkit.api.shared`.
 *
 * @module
 */
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
     * @param key - Buffer name shared across threads.
     * @returns The typed array, or `undefined` when the buffer does not exist.
     *
     */
    export function get(key: string): SharedArray | undefined;
  }

  /**
   * Typed array backing a shared buffer.
   *
   * Use {@link SharedArrayType} when creating or requiring a buffer. The runtime
   * returns the matching `*Array` constructor for the configured type.
   */
  export type SharedArray =
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | Int8Array
    | Int16Array
    | Int32Array
    | Float32Array
    | Float64Array;

  /** Discriminator for the underlying typed array kind. */
  export type SharedArrayType =
    | "uint8"
    | "uint16"
    | "uint32"
    | "int8"
    | "int16"
    | "int32"
    | "float32"
    | "float64";
}
