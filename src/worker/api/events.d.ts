import type { elements as sharedElements } from "../../shared/api/elements";
import type { LooseString } from "../../shared/nominal";

/**
 * Worker-thread `sandkit.api.events` — subscribe to and emit worker-scoped events.
 *
 * @internal Worker-only surface; do not use main-thread {@link sandkit.api.events}.
 */
export namespace events {
  /**
   * Subscribe to a worker event. Returns an unsubscribe function.
   *
   * @param eventId - Registered event name.
   * @param callback - Called when the event is emitted.
   * @param options - Required guard for filtered events.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.events.on`
   */
  export function on<K extends EventId>(
    eventId: K,
    callback: (payload: EventPayload<K>) => void,
    options?: EventOnOptions<K>,
  ): () => void;

  /**
   * Emit a worker event with a payload to subscribers.
   *
   * @param eventId - Registered event name.
   * @param payload - Serializable payload passed to listeners.
   * @param options - Optional guard forwarded to filtered listeners.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.events.emit`
   */
  export function emit<K extends EventId>(
    eventId: K,
    payload: EventPayload<K>,
    options?: EventEmitOptions,
  ): void;

  /** Guard filter for worker events. */
  export interface EventGuard {
    /** Required when subscribing to `element:moved`. Optional on emit. */
    elementType?: sharedElements.ElementType;
    /** Required when subscribing to `terrain:updated`. Optional on emit. */
    terrainType?: number;
  }

  /** Options for {@link on}. */
  export type EventOnOptions<K extends EventId> =
    K extends "element:moved"
      ? { guard: { elementType: sharedElements.ElementType } }
      : K extends "terrain:updated" | "terrain:update"
        ? { guard: { terrainType: number } }
        : { guard?: EventGuard };

  /** Options for {@link emit}. */
  export interface EventEmitOptions {
    guard?: EventGuard;
  }

  /** Known worker event payloads. Unlisted ids still use `unknown`. */
  export interface EventPayloadMap {
    "element:moved": Record<string, unknown>;
    "terrain:updated": Record<string, unknown>;
    /** @deprecated Use `"terrain:updated"` instead. */
    "terrain:update": EventPayloadMap["terrain:updated"];
    "worker:update:post": Record<string, unknown>;
    /** @deprecated Use `"worker:update:post"` instead. */
    "update:post": EventPayloadMap["worker:update:post"];
  }

  /** Known worker event names plus any custom string id. */
  export type EventId = LooseString<keyof EventPayloadMap>;

  /** Event payload type for a given event id. */
  export type EventPayload<K> = K extends keyof EventPayloadMap ? EventPayloadMap[K] : unknown;
}
