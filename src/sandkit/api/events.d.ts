import type { LooseString } from "../../shared/nominal";

/**
 * `sandkit.api.events` — subscribe to and emit named game events.
 * Main thread only. The `events` object is frozen; do not replace `on` or `emit`.
 */
export namespace events {
  /**
   * Subscribes to an event. Returns an unsubscribe function.
   *
   * @param eventId - Registered event name.
   * @param callback - Called when the event is emitted.
   *
   * @example item:used
   * ```ts
   * const unsubscribe = api.events.on("item:used", (payload) => {
   *   if (payload.itemId !== "laser") return;
   *
   *   spawnSparklesAtCell(payload.cellX, payload.cellY);
   * });
   * ```
   *
   * @example frame:render
   * ```ts
   * api.events.on("frame:render", () => {
   *   drawOverlay();
   * });
   * ```
   *
   * @example scene:game:started
   * ```ts
   * api.events.on("scene:game:started", () => {
   *   initializeGameScene();
   * });
   * ```
   *
   * @example earlyAccess:completed
   * ```ts
   * api.events.on("earlyAccess:completed", (payload) => {
   *   onEarlyAccessCompleted(payload);
   * });
   * ```
   *
   * @example terrain:destroyed
   * ```ts
   * api.events.on("terrain:destroyed", (payload) => {
   *   onTerrainDestroyed(payload.cellX, payload.cellY, payload.cellType);
   * });
   * ```
   *
   * @example fog:cellRevealed
   * ```ts
   * api.events.on("fog:cellRevealed", (payload) => {
   *   onFogCellRevealed(payload.cellX, payload.cellY);
   * });
   * ```
   *
   * @example upgrade:levelSelected
   * ```ts
   * api.events.on("upgrade:levelSelected", (payload) => {
   *   onLevelSelected(payload.itemId, payload.upgradeId, payload.level);
   * });
   * ```
   *
   * @example building:placed
   * ```ts
   * api.events.on("building:placed", (payload) => {
   *   onBuildingPlaced(payload.structure, payload.x, payload.y);
   * });
   * ```
   *
   * @example building:removed
   * ```ts
   * api.events.on("building:removed", (payload) => {
   *   onBuildingRemoved(payload.structureId, payload.x, payload.y);
   * });
   * ```
   *
   * @example structures:placed
   * ```ts
   * api.events.on("structures:placed", (payload) => {
   *   onStructuresPlaced(payload.structures);
   * });
   * ```
   *
   * @example structures:removed
   * ```ts
   * api.events.on("structures:removed", (payload) => {
   *   onStructuresRemoved(payload.removed, payload.byMove);
   * });
   * ```
   *
   * @example structures:moved
   * ```ts
   * api.events.on("structures:moved", (payload) => {
   *   onStructuresMoved(payload.moved, payload.failedToPlace);
   * });
   * ```
   *
   * @example game:ready
   * ```ts
   * api.events.on("game:ready", () => {
   *   initializeExample();
   * });
   * ```
   *
   * @example game:started
   * ```ts
   * api.events.on("game:started", () => {
   *   startExample();
   * });
   * ```
   *
   * @example tutorial:stepChanged
   * ```ts
   * api.events.on("tutorial:stepChanged", (payload) => {
   *   onTutorialStepChanged(payload.step);
   * });
   * ```
   *
   * @example tutorial:completed
   * ```ts
   * api.events.on("tutorial:completed", (payload) => {
   *   onTutorialCompleted(payload.skipped);
   * });
   * ```
   *
   * @example tech:unlocked
   * ```ts
   * api.events.on("tech:unlocked", (payload) => {
   *   onTechUnlocked(payload.techId, payload.suppressMusic);
   * });
   * ```
   *
   * @example worldItem:pickedUp
   * ```ts
   * api.events.on("worldItem:pickedUp", (payload) => {
   *   onPickup(payload.worldItemId, payload.type);
   * });
   * ```
   *
   * @example resource:collected
   * ```ts
   * api.events.on("resource:collected", (payload) => {
   *   onResourceCollected(payload.resourceId, payload.amount);
   * });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function on<K extends EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void;

  /**
   * Emits an event with a payload to all subscribers.
   *
   * @param eventId - Registered event name.
   * @param payload - Serializable payload passed to listeners.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function emit<K extends EventId>(eventId: K, payload: EventPayload<K>): void;

  /**
   * Mutable payload for `player:collision:prepare`.
   * Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.
   */
  export interface PlayerCollisionPreparePayload {
    /** When true, terrain collision is skipped this sub-step. */
    phaseThroughTerrain: boolean;
    /** When true, structure collision is skipped this sub-step. */
    phaseThroughStructures: boolean;
    /** Max cells the player can step up when blocked horizontally (1–8). */
    maxStepCells: number;
  }

  /** Known event payloads. Unlisted ids still use `unknown`. */
  export interface EventPayloadMap {
    "item:used": {
      itemId: string;
      useId: string;
      kind: string;
      cellX: number;
      cellY: number;
      prepared: Readonly<Record<string, unknown>>;
    };
    "frame:render": Record<string, unknown>;
    "scene:game:started": Record<string, unknown>;
    /** @deprecated Use `"scene:game:started"` instead. */
    "scene:started:game": EventPayloadMap["scene:game:started"];
    "earlyAccess:completed": Record<string, unknown>;
    /** @deprecated Use `"earlyAccess:completed"` instead. */
    "earlyAccess:complete": EventPayloadMap["earlyAccess:completed"];
    "terrain:destroyed": {
      cellX: number;
      cellY: number;
      cellType: number;
      /** @deprecated Use {@link cellX} instead. */
      x?: number;
      /** @deprecated Use {@link cellY} instead. */
      y?: number;
    };
    "fog:cellRevealed": {
      cellX: number;
      cellY: number;
      /** @deprecated Use {@link cellX} instead. */
      x?: number;
      /** @deprecated Use {@link cellY} instead. */
      y?: number;
    };
    "upgrade:levelSelected": {
      itemId: string;
      upgradeId: string;
      level: number;
    };
    "building:placed": {
      structure: Record<string, unknown>;
      x: number;
      y: number;
      isBatch: boolean;
      isCopied: boolean;
    };
    "building:removed": {
      structureId: string;
      x: number;
      y: number;
      isBatch: boolean;
    };
    "structures:placed": { structures: unknown[]; };
    "structures:removed": {
      removed: unknown[];
      structures?: unknown[];
      byMove: boolean;
    };
    "structures:moved": {
      moved: unknown[];
      failedToPlace: unknown[];
    };
    "game:ready": Record<string, unknown>;
    "game:started": Record<string, unknown>;
    "tutorial:stepChanged": { step: unknown; };
    "tutorial:completed": { skipped: boolean; };
    "tech:unlocked": {
      techId: string;
      suppressMusic: boolean;
    };
    "worldItem:pickedUp": {
      worldItemId: number;
      type: string;
    };
    "resource:collected": {
      resourceId: string;
      amount: number;
      sourceKind: string;
      cellX: number;
      cellY: number;
    };
    "player:collision:prepare": PlayerCollisionPreparePayload;
    "player:moved": {
      /**
       * Simulation step duration in seconds.
       * `0` on teleports. The event runs after collision; landing already
       * zeroes `velocity.y`. Vanilla gravity is applied after this event.
       */
      dt?: number;
      state?: unknown;
    };
  }

  /** Known event names plus any custom string id. */
  export type EventId = LooseString<keyof EventPayloadMap>;

  /** Event payload type for a given event id. */
  export type EventPayload<K> = K extends keyof EventPayloadMap ? EventPayloadMap[K] : unknown;
}
