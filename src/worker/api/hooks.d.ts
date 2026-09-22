import type { elements as sharedElements } from "../../shared/api/elements";
import type { CellId, LooseString } from "../../shared/nominal";
import type { Vector2 } from "../../shared/geometry";
import type { structures } from "../../shared/api/structures";
import type { terrains } from "../../shared/api/terrains";

/**
 * Worker-thread `sandkit.api.hooks` — intercept and modify simulation hook points.
 *
 * @internal Worker-only surface; do not use main-thread {@link sandkit.api.hooks}.
 */
export namespace hooks {
  /**
   * Register an intercept hook on this worker. Returns an unsubscribe function.
   *
   * @param hookId - Registered hook identifier.
   * @param callback - Called with hook arguments and context; may cancel the hook.
   * @param options - Optional guard and priority.
   *
   * @example cell:process
   * ```ts
   * api.hooks.intercept("cell:process", handleCell, {
   *   guard: { elementType },
   * });
   * ```
   *
   * @example element:update
   * ```ts
   * api.hooks.intercept("element:update", handleUpdate, {
   *   guard: { elementType },
   * });
   * ```
   *
   * @example element:move
   * ```ts
   * api.hooks.intercept("element:move", (args, context) => {
   *   handleElementMove(args, context);
   * });
   * ```
   *
   * @example element:move:blocked
   * ```ts
   * api.hooks.intercept(
   *   "element:move:blocked",
   *   (args, context) => {
   *     handleBlockedMovement(args, context);
   *   },
   *   { guard: { elementType } },
   * );
   * ```
   *
   * @example element:duration:expire
   * ```ts
   * api.hooks.intercept(
   *   "element:duration:expire",
   *   (args, context) => {
   *     handleDurationExpiry(args, context);
   *   },
   *   { guard: { elementType } },
   * );
   * ```
   *
   * @example fire:element:burn
   * ```ts
   * api.hooks.intercept("fire:element:burn", (args, context) => {
   *   handleElementBurn(args, context);
   * });
   * ```
   *
   * @example fire:terrain:burn
   * ```ts
   * api.hooks.intercept("fire:terrain:burn", handleTerrainBurn, {
   *   guard: { terrainType },
   * });
   * ```
   *
   * @example shaker:elementOn
   * ```ts
   * api.hooks.intercept("shaker:elementOn", (args, context) => {
   *   handleShakerElement(args, context);
   * });
   * ```
   *
   */
  export function intercept<K extends InterceptHookId>(
    hookId: K,
    callback: (args: InterceptHookArgs<K>, context: HookContext) => void,
    options?: InterceptHookOptions<K>,
  ): () => void;

  /**
   * Register a modifier hook on this worker. Returns an unsubscribe function.
   *
   * @param hookId - Registered hook identifier.
   * @param callback - Called with hook arguments; may mutate hook payload.
   * @param options - Optional guard and priority.
   *
   * @example Worker entry
   * ```ts
   * api.hooks.modify("example:prepare", (args) => {
   *   args.value *= 2;
   * });
   * ```
   *
   */
  export function modify<K extends ModifyHookId>(
    hookId: K,
    callback: (args: ModifyHookArgs<K>) => void,
    options?: ModifyHookOptions,
  ): () => void;

  /** Context passed to intercept hook callbacks. */
  export interface HookContext {
    /** When called, the intercepted action is skipped. */
    cancel(): void;
    /** True after {@link cancel} was called on this context. */
    cancelled: boolean;
  }

  /** Guard filter for worker hook registration. */
  export interface HookGuard {
    /** Required for element-scoped intercept hooks and optional on emit. */
    elementType?: sharedElements.ElementType;
    /** Required for terrain-scoped event guards; optional on emit. */
    terrainType?: terrains.TerrainType;
  }

  /** Options for {@link intercept}. */
  export type InterceptHookOptions<K extends InterceptHookId> =
    K extends ElementGuardedInterceptHookId
      ? { guard: { elementType: sharedElements.ElementType }; priority?: number }
      : K extends TerrainGuardedInterceptHookId
        ? { guard: { terrainType: terrains.TerrainType }; priority?: number }
        : { guard?: HookGuard; priority?: number };

  /** Options for {@link modify}. */
  export interface ModifyHookOptions {
    guard?: HookGuard;
    priority?: number;
  }

  /** Intercept hook ids with a required element guard. */
  export type ElementGuardedInterceptHookId =
    | "cell:process"
    | "element:update"
    | "element:move:blocked"
    | "element:blocked"
    | "element:duration:expire"
    | "element:duration";

  /** Intercept hook ids with a required terrain guard. */
  export type TerrainGuardedInterceptHookId = "fire:terrain:burn";

  /** Known worker intercept hook ids plus custom strings. */
  export type InterceptHookId = LooseString<
    | ElementGuardedInterceptHookId
    | TerrainGuardedInterceptHookId
    | "element:move"
    | "fire:element:burn"
    | "shaker:elementOn"
  >;

  /** Known worker modify hook ids plus custom strings. */
  export type ModifyHookId = LooseString<string>;

  /** What an element collided with on {@link InterceptHookMap} `"element:move:blocked"`. */
  export type ElementBlockedCollider = LooseString<"terrain" | "element" | "unauthorized">;

  /** Blocked-move direction on {@link InterceptHookMap} `"element:move:blocked"`. */
  export type ElementBlockedDirection = LooseString<"down" | "up" | "horizontal">;

  /**
   * Shared `elementData` SOA passed to {@link InterceptHookMap} `"element:update"`.
   * Index with `elementIndex`.
   */
  export interface ElementSimData {
    type: Uint8Array;
    x: Uint16Array;
    y: Uint16Array;
    velocityX: Float32Array;
    velocityY: Float32Array;
    minVelocityX: Float32Array;
    minVelocityY: Float32Array;
    thresholdX: Float32Array;
    thresholdY: Float32Array;
    hasBeenUpdated: Uint8Array;
    isFreeFalling: Uint8Array;
    density: Float32Array;
    variantIndex: Uint8Array;
    durationMax: Float32Array;
    durationLeft: Float32Array;
    skipPhysics: Uint8Array;
    movesYAxis: Uint16Array;
    movesYAxisCount: Uint16Array;
    lastSideChecked: Int16Array;
    linkedElementIndex: Uint32Array;
    hasDuration: Uint8Array;
    dataField1: Uint16Array;
    dataField2: Int16Array;
    dataField3: Uint16Array;
    dataField4: Float32Array;
  }

  /** Intercept hook argument shapes keyed by hook id. */
  export interface InterceptHookMap {
    "cell:process": {
      cellId: CellId;
      x: number;
      y: number;
      dt: number;
      runOrder: number;
    };
    "element:update": {
      cellId: CellId;
      x: number;
      y: number;
      dt: number;
      elementIndex: number;
      elementData: ElementSimData;
      elementType: sharedElements.ElementType;
      matterType: sharedElements.MatterType;
      matterConfig: unknown;
    };
    "element:move": {
      cellId: CellId;
      elementIndex: number;
      elementType: sharedElements.ElementType;
      source: Vector2;
      destination: Vector2;
    };
    "element:move:blocked": {
      cellId: CellId;
      elementIndex: number;
      elementType: sharedElements.ElementType;
      position: Vector2;
      collidedAt: Vector2;
      velocity: Vector2;
      collidedWith: ElementBlockedCollider;
      collidedElementType?: sharedElements.ElementType;
      collidedCellId: CellId;
      direction: ElementBlockedDirection;
      linkedElementType?: sharedElements.ElementType;
    };
    /** @deprecated Use `"element:move:blocked"` instead. */
    "element:blocked": InterceptHookMap["element:move:blocked"];
    "element:duration:expire": {
      elementIndex: number;
      elementType: sharedElements.ElementType;
      x: number;
      y: number;
    };
    /** @deprecated Use `"element:duration:expire"` instead. */
    "element:duration": InterceptHookMap["element:duration:expire"];
    "fire:element:burn": Vector2 & { elementType: sharedElements.ElementType };
    "fire:terrain:burn": Vector2 & {
      terrainType: terrains.TerrainType;
      sourceElementType: sharedElements.ElementType;
      sourceX: number;
      sourceY: number;
      wasUndamaged: boolean;
    };
    "shaker:elementOn": Vector2 & {
      cellId: CellId;
      elementIndex: number;
      elementType: sharedElements.ElementType;
      structureType: structures.StructureType;
    };
  }

  /** Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`. */
  export type ModifyHookMap = Record<string, unknown>;

  /** Intercept hook args for a given hook id. */
  export type InterceptHookArgs<K extends InterceptHookId> = K extends keyof InterceptHookMap
    ? InterceptHookMap[K]
    : unknown;

  /** Modify hook args for a given hook id. */
  export type ModifyHookArgs<K extends ModifyHookId> = K extends keyof ModifyHookMap
    ? ModifyHookMap[K]
    : unknown;
}
