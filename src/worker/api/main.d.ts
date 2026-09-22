import type { events as mainEvents } from "../../sandkit/api/events";

/**
 * Worker thread only.
 *
 * `sandkit.api.main` — send events to the main thread.
 *
 * @internal Base shape reused by {@link WorkerSandkitApi}. Main thread has a
 * larger `sandkit.api` surface; do not assume parity.
 */
export namespace main {
  /**
   * Emit an event on the main thread (`sandkit.api.events`).
   * @param eventId - Main-thread event name (known ids or a custom string).
   * @param payload - Payload for that event. Custom ids use `unknown`.
   */
  export function emitEvent<K extends mainEvents.EventId>(
    eventId: K,
    payload: mainEvents.EventPayload<K>,
  ): void;
}
