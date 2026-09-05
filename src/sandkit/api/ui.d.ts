/**
 * UI overlays, dialogs, tooltips, and controller navigation hooks.
 *
 * Available as `sandkit.api.ui`.
 *
 * @module
 */
import type { ComponentType, ReactNode, RefObject } from "react";
import type { ComponentId as ComponentIdEnum } from "../enums/index";
import { shared } from "../../shared";
import type { LooseString } from "../../shared/nominal";

/**
 * @example api.ui.components.ActionSlot
 * ```ts
 * const slot = sandkit.react.createElement(
 *   api.ui.components.ActionSlot,
 *   { source, slotIndex: 0, keyLabel: "1" },
 * );
 * ```
 *
 * @example api.ui.components.Button
 * ```ts
 * const button = sandkit.react.createElement(
 *   api.ui.components.Button,
 *   { onClick: openPanel },
 *   "Open",
 * );
 * ```
 *
 * @example api.ui.components.Panel
 * ```ts
 * const panel = sandkit.react.createElement(
 *   api.ui.components.Panel,
 *   { title: "Options" },
 *   "Panel content",
 * );
 * ```
 *
 * @example api.ui.hotbar.createBankSource
 * ```ts
 * const source = api.ui.hotbar.createBankSource({
 *   bankOffset: 1,
 *   minimumBankCount: 2,
 * });
 * ```
 *
 * @example api.ui.hotbar.useHotbar
 * ```ts
 * const hotbar = api.ui.hotbar.useHotbar();
 * console.log(
 *   hotbar.bankCount,
 *   hotbar.activeBankIndex,
 *   hotbar.activeSlotIndex,
 * );
 * ```
 *
 * @example api.ui.overrides.register
 * ```ts
 * const overrideHandle = api.ui.overrides.register(
 *   "resources",
 *   (Original) => sandkit.react.createElement(
 *     sandkit.react.Fragment,
 *     null,
 *     sandkit.react.createElement(Original),
 *     sandkit.react.createElement(ResourceAddon),
 *   ),
 * );
 * ```
 *
 * @example api.ui.regions.mount
 * ```ts
 * const mountHandle = api.ui.regions.mount(
 *   "hotbar",
 *   "extra-actions",
 *   {
 *     placement: "docked",
 *     order: 0,
 *     render: () => sandkit.react.createElement(ExtraActions),
 *   },
 * );
 * ```
 *
 * @example api.ui.regions.mountHandle.update
 * ```ts
 * mountHandle.update({
 *   order: 10,
 *   render: () => sandkit.react.createElement(UpdatedActions),
 * });
 * ```
 *
 * @example api.ui.select
 * ```ts
 * const selected = await api.ui.select(
 *   [
 *     { label: "Sand", value: "sand" },
 *     { label: "Fluxite", value: "fluxite" },
 *   ],
 *   { title: "Select element", defaultValue: "sand", buttonLabel: "Choose" },
 * );
 * ```
 *
 * @example api.ui.useGameEvent
 * ```ts
 * api.ui.useGameEvent("resource:collected", (payload) => {
 *   console.log(payload.resourceId, payload.amount);
 * });
 * ```
 */
export namespace ui {
  /**
   * Show a toast message.
   *
   * @example Main entry
   * ```ts
   * api.ui.toast({ key: "mods|example|saved" });
   * ```
   */
  export import toast = shared.api.ui.toast;
  /** Localized text value for UI strings. */
  export import LocalizedText = shared.api.ui.LocalizedText;
  /** Options for toast display. */
  export import ToastOptions = shared.api.ui.ToastOptions;

  /**
   * Update a registered UI component by id.
   * @param componentId - Built-in {@link ComponentIdEnum} value or custom string id.
   * @param options - Component-specific update payload.
   */
  export function update(componentId: ComponentId, options?: ComponentUpdateOptions): void;

  /** Open the pause menu. */
  export function openPauseMenu(): void;

  /**
   * Show a tooltip with the given data.
   * @param data - Tooltip type and localized content.
   */
  export function showTooltip(data: TooltipData): void;

  /**
   * Show an alert dialog.
   * @param message - Dialog body text.
   * @param title - Optional dialog title.
   * @returns Promise that resolves when the user dismisses the dialog.
   *
   * @example
   * ```ts
   * await api.ui.alert(
   *   { key: "mods|example|details" },
   *   { key: "mods|example|title" },
   * );
   * ```
   */
  export function alert(message: LocalizedText, title?: LocalizedText): Promise<void>;

  /**
   * Show a confirm dialog.
   * @param message - Dialog body text.
   * @param title - Optional dialog title.
   * @returns Promise that resolves with true when confirmed, or false when cancelled.
   *
   * @example
   * ```ts
   * const confirmed = await api.ui.confirm(
   *   { key: "mods|example|confirm" },
   * );
   * ```
   */
  export function confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>;

  /**
   * Show a prompt dialog.
   * @param message - Dialog body text.
   * @param defaultValue - Initial input value.
   * @param placeholder - Placeholder text in the input field.
   * @param title - Optional dialog title.
   * @param allowCopy - When true, allow copying the result from the dialog.
   * @returns Promise that resolves with entered text, or null when cancelled.
   *
   * @example
   * ```ts
   * const value = await api.ui.prompt(
   *   { key: "mods|example|enterValue" },
   *   "",
   * );
   * ```
   */
  export function prompt(
    message: LocalizedText,
    defaultValue?: string,
    placeholder?: LocalizedText,
    title?: LocalizedText,
    allowCopy?: boolean,
  ): Promise<string | null>;

  /**
   * Mount a React component by id.
   * @param componentId - Overlay slot or custom mount point id.
   * @param component - React component to render.
   * @returns Function that unmounts the injected component.
   */
  export function inject(
    componentId: ComponentId,
    component: ComponentType<Record<string, never>>,
  ): () => void;

  /** Overlay slot registration and updates. */
  export namespace overlays {
    /**
     * Register a render function in an overlay slot.
     * @param slot - Slot name (for example `"hotbar"`).
     * @param overlayId - Unique id for this overlay within the slot.
     * @param render - Function that returns React content.
     */
    export function register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void;

    /**
     * Remove an overlay from a slot.
     * @param slot - Slot name the overlay was registered in.
     * @param overlayId - Overlay id passed to {@link register}.
     */
    export function unregister(slot: OverlaySlot, overlayId: string): void;

    /**
     * Request a re-render for all overlays in a slot.
     * @param slot - Slot name to refresh.
     */
    export function update(slot: OverlaySlot): void;
  }

  /** Controller focus and scope navigation hooks. */
  export namespace navigation {
    /**
     * React hook for a focusable UI element in a scope.
     * @param options - Focus registration and neighbor wiring.
     * @returns Ref, focus state, and a focus helper.
     *
     * @example
     * ```ts
     * const focusable = api.ui.navigation.useFocusable({
     *   id: "example-button",
     *   scope: "example-scope",
     *   onActivate: openExample,
     * });
     * ```
     */
    export function useFocusable<T extends HTMLElement = HTMLDivElement>(
      options: FocusOptions,
    ): Focusable<T>;

    /**
     * React hook to register a focus scope with back handling.
     * @param options - Scope id, priority, default focus, and back handler.
     *
     * @example
     * ```ts
     * api.ui.navigation.useFocusScope({
     *   id: "example-scope",
     *   active: true,
     *   priority: 10,
     * });
     * ```
     */
    export function useFocusScope(options: {
      readonly id: string;
      readonly active: boolean;
      readonly priority?: number;
      readonly defaultId?: string;
      readonly onBack?: () => boolean | void;
    }): void;

    /**
     * Return CSS class for controller focus ring state.
     * @param focused - True when the element has controller focus.
     * @returns Class name string for the focus ring.
     */
    export function controllerFocusClass(focused: boolean): string;
  }

  /**
   * Overlay slot name. Known vanilla slots autocomplete; any string is allowed.
   */
  export type OverlaySlot = LooseString<"hotbar" | "global">;

  /**
   * Registered UI component id.
   * Built-in {@link ComponentIdEnum} values autocomplete; custom string ids are allowed.
   */
  export type ComponentId = ComponentIdEnum | LooseString<never>;

  /** Component-specific update payload passed to {@link update}. */
  export type ComponentUpdateOptions = Record<string, unknown>;

  /** Tooltip payload shown near the cursor or UI target. */
  export type TooltipData = TooltipMessageData;

  /** Message tooltip with localized body text. */
  export interface TooltipMessageData {
    /** Discriminator for tooltip renderer selection. */
    type: "message";
    /** Message body as localized text. */
    text: LocalizedText;
  }

  /** Focusable element state from useFocusable. */
  export interface Focusable<T extends HTMLElement = HTMLDivElement> {
    /** Ref to attach to the focusable element. */
    readonly ref: RefObject<T>;
    /** True when the element has controller focus. */
    readonly focused: boolean;
    /** Move controller focus to this element. */
    readonly focus: () => void;
  }

  /** Options for useFocusable registration. */
  export interface FocusOptions {
    /** Unique id within the focus scope. */
    readonly id: string;
    /** Focus scope id this element belongs to. */
    readonly scope: string;
    /** Called when the element is activated (A button / Enter). */
    readonly onActivate: (element?: HTMLElement) => void;
    /** Called when the element receives focus. */
    readonly onFocus?: () => void;
    /** When true, skip this element during navigation. */
    readonly disabled?: boolean;
    /** Optional grid column for spatial navigation. */
    readonly x?: number;
    /** Optional grid row for spatial navigation. */
    readonly y?: number;
    /** Neighbor ids for directional navigation. */
    readonly neighbors?: Partial<Record<"left" | "right" | "up" | "down", string>>;
    /** When true, scroll the element into view on focus. */
    readonly scrollIntoView?: boolean;
  }
}
