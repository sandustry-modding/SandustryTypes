import type { LooseString } from "../../shared/nominal";

/**
 * `sandkit.api.hooks` — intercept and modify internal game hook points.
 * Main thread only.
 */
export namespace hooks {
  /**
   * Registers an intercept hook. Returns an unsubscribe function.
   *
   * @param hookId - Registered hook identifier.
   * @param callback - Called with hook arguments and context; may cancel the hook.
   * @param options - Optional priority and filter options.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.hooks.intercept`
   */
  export function intercept<K extends InterceptHookId>(
    hookId: K,
    callback: (args: InterceptHookArgs<K>, context: HookContext) => void,
    options?: InterceptHookOptions<K>,
  ): () => void;

  /**
   * Registers a modifier hook. Returns an unsubscribe function.
   *
   * @param hookId - Registered hook identifier.
   * @param callback - Called with hook arguments; may mutate hook payload.
   * @param options - Optional priority and filter options.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.hooks.modify`
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

  /** Options shared by intercept and modify hooks. */
  export interface HookOptions {
    /** Run this hook before others with lower priority. */
    priority?: number;
    [key: string]: unknown;
  }

  /** Options for {@link intercept}. */
  export type InterceptHookOptions<K extends InterceptHookId> = HookOptions &
    (K extends "item:use"
      ? { itemIds?: string[]; priority?: number }
      : K extends "entity:update"
        ? { entityTypes?: string[]; priority?: number }
        : K extends "building:place"
          ? { structureTypes?: string[]; priority?: number }
          : K extends "projectile:fire:overStructure" | "projectile:hit"
            ? { projectileTypes?: string[]; priority?: number }
            : Record<string, unknown>);

  /** Options for {@link modify}. */
  export type ModifyHookOptions = HookOptions &
    (
      | { weaponIds?: string[]; priority?: number }
      | { projectileTypes?: string[]; priority?: number }
      | { triggerIds?: string[]; priority?: number }
      | { resourceIds?: string[]; priority?: number }
      | Record<string, unknown>
    );

  /** Known main-thread intercept hook ids plus custom strings. */
  export type InterceptHookId = LooseString<
    | "item:use"
    | "teleport:effect:create"
    | "teleport:effect"
    | "action:start"
    | "action:intercept"
    | "input:keyDown"
    | "input:keydown"
    | "input:keyUp"
    | "input:keyup"
    | "placePoints:suppress"
    | "placePoints:isSuppressed"
    | "placePoints:directionalArrows:suppress"
    | "placePoints:directionalArrows:isSuppressed"
    | "entity:update"
    | "building:place"
    | "building:clearShape"
    | "input:scroll"
    | "input:boostDown"
    | "input:boost-down"
    | "input:descendDown"
    | "input:descend-down"
    | "input:escape"
    | "interactable:suppressHover"
    | "fire:element:ignite"
    | "projectile:fire:overStructure"
    | "projectile:hit"
    | "player:position:commit"
    | "progression:purchase"
  >;

  /** Known main-thread modify hook ids plus custom strings. */
  export type ModifyHookId = LooseString<
    | "excavation:prepare"
    | "locator:scan:prepare"
    | "vacuum:prepare"
    | "vacuum:element:prepare"
    | "player:movement:prepare"
    | "player:movement"
    | "building:placementLimit:prepare"
    | "building:placementLimit"
    | "building:placement-limit"
    | "fluxEmanator:processing:prepare"
    | "fluxEmanator:processing"
    | "flux-emanator:processing"
    | "render:pipes:prepare"
    | "render:pipes"
    | "structures:moved:prepare"
    | "structures:removed:prepare"
    | "weapon:reload:prepare"
    | "projectile:travel:prepare"
    | "projectile:impact:prepare"
    | "player:collision:prepare"
    | "trigger:schedule:prepare"
    | "progression:cost:prepare"
    | "resource:collection:prepare"
    | "resource:delivery:prepare"
    | "resource:balance:prepare"
    | "gold:removal:prepare"
    | "gold:removal:settle"
  >;

  /** Intercept hook argument shapes keyed by hook id. */
  export interface InterceptHookMap {
    "item:use": {
      itemId: string;
      useId: string;
      kind: "instant" | "sustained" | "chargeThenFire";
      baseline: Readonly<Record<string, unknown>>;
      prepared: Record<string, unknown>;
    };
    "teleport:effect:create": Record<string, unknown>;
    /** @deprecated Use `"teleport:effect:create"` instead. */
    "teleport:effect": InterceptHookMap["teleport:effect:create"];
    "action:start": { action?: { id?: string; } & Record<string, unknown>; } & Record<string, unknown>;
    /** @deprecated Use `"action:start"` instead. */
    "action:intercept": InterceptHookMap["action:start"];
    "input:keyDown": { key?: string; code?: string; event?: Event; };
    /** @deprecated Use `"input:keyDown"` instead. */
    "input:keydown": InterceptHookMap["input:keyDown"];
    "input:keyUp": { key?: string; code?: string; event?: Event; };
    /** @deprecated Use `"input:keyUp"` instead. */
    "input:keyup": InterceptHookMap["input:keyUp"];
    "placePoints:suppress": { type?: string; } & Record<string, unknown>;
    /** @deprecated Use `"placePoints:suppress"` instead. */
    "placePoints:isSuppressed": InterceptHookMap["placePoints:suppress"];
    "placePoints:directionalArrows:suppress": { type?: string; } & Record<string, unknown>;
    /** @deprecated Use `"placePoints:directionalArrows:suppress"` instead. */
    "placePoints:directionalArrows:isSuppressed": InterceptHookMap["placePoints:directionalArrows:suppress"];
    "entity:update": {
      entityTypeId: string;
      entity: Record<string, unknown>;
      deltaTimeSeconds: number;
      phase: "normal" | "capturing" | "launching";
      isVisible: boolean;
      playerWorldX: number;
      playerWorldY: number;
      worldMinX: number;
      worldMinY: number;
      worldMaxX: number;
      worldMaxY: number;
      cellSize: number;
      timeSeconds: number;
    };
    "building:place": {
      structureId: string;
      x: number;
      y: number;
      data?: Record<string, unknown>;
    };
    "building:clearShape": { structure: Record<string, unknown>; };
    "input:scroll": { deltaY: number; } & Record<string, unknown>;
    "input:boostDown": Record<string, unknown>;
    /** @deprecated Use `"input:boostDown"` instead. */
    "input:boost-down": InterceptHookMap["input:boostDown"];
    "input:descendDown": Record<string, unknown>;
    /** @deprecated Use `"input:descendDown"` instead. */
    "input:descend-down": InterceptHookMap["input:descendDown"];
    "input:escape": Record<string, unknown>;
    "interactable:suppressHover": { type?: string; structure?: Record<string, unknown>; } & Record<string, unknown>;
    "fire:element:ignite": { x: number; y: number; elementType: number; };
    "projectile:fire:overStructure": { projectile: Record<string, unknown>; x: number; y: number; };
    "projectile:hit": { projectile: Record<string, unknown>; travelResult: Record<string, unknown>; };
    "player:position:commit": {
      previousWorldX: number;
      previousWorldY: number;
      proposedWorldX: number;
      proposedWorldY: number;
      velocityX: number;
      velocityY: number;
    };
    "progression:purchase": {
      domain: "tech" | "upgrade";
      id: string;
      itemId?: string;
      costs: Record<string, unknown>;
    };
  }

  /** Modify hook argument shapes keyed by hook id. */
  export interface ModifierHookMap {
    "excavation:prepare": {
      sourceId: string;
      sourceKind: "tool" | "projectile" | "structure" | "drone";
      originCellX: number;
      originCellY: number;
      consumedVoid: boolean;
      profileId: string;
      patternDiameterCells: number;
      drillTierDamage: number;
    };
    "locator:scan:prepare": {
      originWorldX: number;
      originWorldY: number;
      hasTarget: boolean;
      targetCellX: number;
      targetCellY: number;
      outerTint: [number, number, number];
      innerTint: [number, number, number];
      noTargetToast: string;
      noTargetToastKey: string;
      triangulationLensOverride: true | false | null;
    };
    "vacuum:prepare": {
      nozzleCellX: number;
      nozzleCellY: number;
      targetCellX: number;
      targetCellY: number;
      pattern: number[][];
    };
    "vacuum:element:prepare": {
      elementType: number;
      matterType: number;
      isTransportable: boolean;
      collectable: boolean;
      visibleInPicker: boolean;
    };
    "player:movement:prepare": Record<string, unknown>;
    /** @deprecated Use `"player:movement:prepare"` instead. */
    "player:movement": ModifierHookMap["player:movement:prepare"];
    "building:placementLimit:prepare": { maxCount: number | null; } & Record<string, unknown>;
    /** @deprecated Use `"building:placementLimit:prepare"` instead. */
    "building:placementLimit": ModifierHookMap["building:placementLimit:prepare"];
    /** @deprecated Use `"building:placementLimit:prepare"` instead. */
    "building:placement-limit": ModifierHookMap["building:placementLimit:prepare"];
    "fluxEmanator:processing:prepare": { speedMultiplier: number; } & Record<string, unknown>;
    /** @deprecated Use `"fluxEmanator:processing:prepare"` instead. */
    "fluxEmanator:processing": ModifierHookMap["fluxEmanator:processing:prepare"];
    /** @deprecated Use `"fluxEmanator:processing:prepare"` instead. */
    "flux-emanator:processing": ModifierHookMap["fluxEmanator:processing:prepare"];
    "render:pipes:prepare": { layer?: string; } & Record<string, unknown>;
    /** @deprecated Use `"render:pipes:prepare"` instead. */
    "render:pipes": ModifierHookMap["render:pipes:prepare"];
    "structures:moved:prepare": {
      moved: unknown[];
      failedToPlace: unknown[];
    };
    "structures:removed:prepare": {
      removed: unknown[];
      structures?: unknown[];
      byMove: boolean;
    };
    "weapon:reload:prepare": {
      weaponId: string;
      reloadMs: number;
      maxAmmo: number;
    };
    "projectile:travel:prepare": {
      projectileType: string;
      firstCollisionStep: number;
      maxCollisionSteps: number;
      collidesWithTerrain: boolean;
      collidesWithStructures: boolean;
    };
    "projectile:impact:prepare": {
      projectileType: string;
      impactKind: string;
      profileId: string;
      power: number;
      centerPower: number;
      radiusCells: number;
      /** @deprecated Use {@link radiusCells} instead. */
      radius?: number;
    };
    "player:collision:prepare": {
      phaseThroughTerrain: boolean;
      phaseThroughStructures: boolean;
      maxStepCells: number;
    };
    "trigger:schedule:prepare": {
      triggerId: string;
      intervalMs: number;
      sequentialRuns: number;
    };
    "progression:cost:prepare": {
      domain: "tech" | "upgrade";
      id: string;
      itemId?: string;
      currencyId: string;
      amount: number;
    };
    "resource:collection:prepare": {
      resourceId: string;
      sourceKind: string;
      cellX: number;
      cellY: number;
      amount: number;
      feedback: "default" | "silent";
    };
    "resource:delivery:prepare": {
      resourceId: string;
      sourceKind: string;
      sourceId: string;
      sourceCellX: number;
      sourceCellY: number;
      targetCellX: number;
      targetCellY: number;
      mode: "world" | "collection";
      amount: number;
      feedback: "default" | "silent";
    };
    "resource:balance:prepare": {
      resourceId: string;
      balance: number;
    };
    "gold:removal:prepare": {
      requestedAmount: number;
      shortfall: number;
    };
    "gold:removal:settle": {
      requestedAmount: number;
      physicalRemoved: number;
      shortfall: number;
    };
  }

  /** Intercept hook args for a given hook id. */
  export type InterceptHookArgs<K extends InterceptHookId> =
    K extends keyof InterceptHookMap ? InterceptHookMap[K] : unknown;

  /** Modify hook args for a given hook id. */
  export type ModifyHookArgs<K extends ModifyHookId> =
    K extends keyof ModifierHookMap ? ModifierHookMap[K] : unknown;
}
