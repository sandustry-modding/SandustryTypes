import type { elements as sharedElements } from "../../shared/api/elements";
import type { LooseString } from "../../shared/nominal";

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
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Worker entry `api.hooks.intercept`
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
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Worker entry `api.hooks.modify`
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
    terrainType?: number;
  }

  /** Options for {@link intercept}. */
  export type InterceptHookOptions<K extends InterceptHookId> =
    K extends ElementGuardedInterceptHookId
      ? { guard: { elementType: sharedElements.ElementType }; priority?: number }
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

  /** Known worker intercept hook ids plus custom strings. */
  export type InterceptHookId = LooseString<
    | ElementGuardedInterceptHookId
    | "element:move"
    | "fire:element:burn"
    | "shaker:elementOn"
  >;

  /** Known worker modify hook ids plus custom strings. */
  export type ModifyHookId = LooseString<string>;

  /** Intercept hook argument shapes keyed by hook id. */
  export interface InterceptHookMap {
    "cell:process": Record<string, unknown>;
    "element:update": Record<string, unknown>;
    "element:move": Record<string, unknown>;
    "element:move:blocked": Record<string, unknown>;
    /** @deprecated Use `"element:move:blocked"` instead. */
    "element:blocked": InterceptHookMap["element:move:blocked"];
    "element:duration:expire": Record<string, unknown>;
    /** @deprecated Use `"element:duration:expire"` instead. */
    "element:duration": InterceptHookMap["element:duration:expire"];
    "fire:element:burn": Record<string, unknown>;
    "shaker:elementOn": Record<string, unknown>;
  }

  /** Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`. */
  export type ModifyHookMap = Record<string, unknown>;

  /** Intercept hook args for a given hook id. */
  export type InterceptHookArgs<K extends InterceptHookId> =
    K extends keyof InterceptHookMap ? InterceptHookMap[K] : unknown;

  /** Modify hook args for a given hook id. */
  export type ModifyHookArgs<K extends ModifyHookId> =
    K extends keyof ModifyHookMap ? ModifyHookMap[K] : unknown;
}
