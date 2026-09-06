/**
 * UI overlays, dialogs, tooltips, and controller navigation hooks.
 *
 * Available as `sandkit.api.ui`.
 *
 * @module
 */
import type { CSSProperties, ComponentType, ReactNode, RefObject } from "react";
import type { ComponentId as ComponentIdEnum, KeyBinding } from "../enums/index";
import { shared } from "../../shared";
import type { LooseString } from "../../shared/nominal";
import { action } from "./action";
import { events } from "./events";

export namespace ui {
  /**
   * Show a toast message.
   *
   * @example
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
   * Show a modal choice picker.
   * @param options - Choices shown in the picker.
   * @param opts - Dialog title, default, and confirm label.
   * @returns Promise that resolves with the chosen value, or null when cancelled.
   *
   * @example
   * ```ts
   * const selected = await api.ui.select(
   *   [
   *     { label: "Sand", value: "sand" },
   *     { label: "Fluxite", value: "fluxite" },
   *   ],
   *   { title: "Select element", defaultValue: "sand", buttonLabel: "Choose" },
   * );
   * ```
   */
  export function select<T = string>(
    options: readonly SelectChoice<T>[],
    opts?: SelectDialogOptions<T>,
  ): Promise<T | null>;

  /**
   * React hook that re-renders when the listed UI components update.
   * @param componentIds - Component ids to subscribe to.
   */
  export function useRefresh(componentIds: readonly ComponentId[]): void;

  /**
   * React hook that returns the current UI scale.
   * @returns UI scale factor.
   */
  export function useScale(): number;

  /**
   * React hook that subscribes to a game event.
   * @param eventId - Registered event name.
   * @param handler - Called with the event payload.
   *
   * @example
   * ```ts
   * api.ui.useGameEvent("resource:collected", (payload) => {
   *   console.log(payload.resourceId, payload.amount);
   * });
   * ```
   */
  export function useGameEvent<K extends events.EventId>(
    eventId: K,
    handler: (payload: events.EventPayload<K>) => void,
  ): void;

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

  /** Mount React content in a named UI region. */
  export namespace regions {
    /**
     * Mount a React region in a UI slot.
     * `"docked"` sits on the hotbar.
     * `"raised"` sits above panels such as Filter Config.
     * @param regionId - Region name (for example `"hotbar"`).
     * @param mountId - Unique id for this mount within the region.
     * @param options - Placement, order, and render function.
     * @returns Handle used to update or unmount the region.
     *
     * @example
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
     */
    export function mount(
      regionId: OverlaySlot,
      mountId: string,
      options: RegionMountOptions,
    ): RegionMountHandle;

    /**
     * Show or hide a mounted region.
     * @param regionId - Region name passed to {@link mount}.
     * @param visible - When false, hide the region until restored.
     * @returns Handle whose {@link VisibilityHandle.restore} shows the region again.
     */
    export function setVisible(regionId: OverlaySlot, visible: boolean): VisibilityHandle;
  }

  /** Wrap a built-in UI component. */
  export namespace overrides {
    /**
     * Register a wrapper around a built-in UI component.
     * @param componentId - Built-in component id (for example `"resources"`).
     * @param wrapper - Receives the original component and props; return replacement content.
     * @returns Handle whose {@link OverrideHandle.remove} drops the wrapper.
     *
     * @example
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
     */
    export function register(
      componentId: ComponentId,
      wrapper: (
        Original: ComponentType<Record<string, unknown>>,
        props: Record<string, unknown>,
      ) => ReactNode,
    ): OverrideHandle;
  }

  /** Hotbar bank sources, selection, and slot queries. */
  export namespace hotbar {
    /**
     * Create a hotbar bank source for extra action banks.
     * @param options - Bank offset and optional minimum bank count.
     * @returns Source used by {@link components.ActionSlot}.
     *
     * @example
     * ```ts
     * const source = api.ui.hotbar.createBankSource({
     *   bankOffset: 1,
     *   minimumBankCount: 2,
     * });
     * ```
     */
    export function createBankSource(options: HotbarBankSourceOptions): HotbarBankSource;

    /**
     * Select a hotbar action programmatically.
     * @param action - Action to select.
     */
    export function selectAction(action: action.Action): void;

    /**
     * Return the number of hotbar banks.
     */
    export function getBankCount(): number;

    /**
     * Return the active hotbar bank index.
     */
    export function getActiveBankIndex(): number;

    /**
     * Return the active hotbar slot index.
     */
    export function getActiveSlotIndex(): number;

    /**
     * Return the key label for a hotbar slot binding.
     * @param bindingId - Key binding id for the slot.
     */
    export function getSlotKeyLabel(bindingId: KeyBinding): string;

    /**
     * React hook for hotbar bank and slot state.
     * @returns Current bank count and active bank and slot indexes.
     *
     * @example
     * ```ts
     * const hotbar = api.ui.hotbar.useHotbar();
     * console.log(
     *   hotbar.bankCount,
     *   hotbar.activeBankIndex,
     *   hotbar.activeSlotIndex,
     * );
     * ```
     */
    export function useHotbar(): HotbarState;
  }

  /** Built-in React UI components. */
  export namespace components {
    /**
     * React hotbar action slot.
     * @param props - Bank source, slot index, and optional labels and handlers.
     *
     * @example
     * ```ts
     * const slot = sandkit.react.createElement(
     *   api.ui.components.ActionSlot,
     *   { source, slotIndex: 0, keyLabel: "1" },
     * );
     * ```
     */
    export function ActionSlot(props: ActionSlotProps): ReactNode;

    /**
     * React panel with an optional title.
     * @param props - Title, children, and optional class and style.
     *
     * @example
     * ```ts
     * const panel = sandkit.react.createElement(
     *   api.ui.components.Panel,
     *   { title: "Options" },
     *   "Panel content",
     * );
     * ```
     */
    export function Panel(props: PanelProps): ReactNode;

    /**
     * React button.
     * @param props - Children, click handler, and optional style flags.
     *
     * @example
     * ```ts
     * const button = sandkit.react.createElement(
     *   api.ui.components.Button,
     *   { onClick: openPanel },
     *   "Open",
     * );
     * ```
     */
    export function Button(props: ButtonProps): ReactNode;
  }

  /**
   * Overlay slot registration and updates.
   * @deprecated Use {@link regions} instead.
   */
  export namespace overlays {
    /**
     * Register a render function in an overlay slot.
     * @param slot - Slot name (for example `"hotbar"`).
     * @param overlayId - Unique id for this overlay within the slot.
     * @param render - Function that returns React content.
     * @deprecated Use {@link regions.mount} instead.
     */
    export function register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void;

    /**
     * Remove an overlay from a slot.
     * @param slot - Slot name the overlay was registered in.
     * @param overlayId - Overlay id passed to {@link register}.
     * @deprecated Use {@link RegionMountHandle.unmount} instead.
     */
    export function unregister(slot: OverlaySlot, overlayId: string): void;

    /**
     * Request a re-render for all overlays in a slot.
     * @param slot - Slot name to refresh.
     * @deprecated Use {@link RegionMountHandle.update} instead.
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
    export function useFocusScope(options: FocusScopeOptions): void;

    /**
     * Return CSS class for controller focus ring state.
     * @param focused - True when the element has controller focus.
     * @returns Class name string for the focus ring.
     */
    export function getControllerFocusClass(focused: boolean): string;

    /**
     * Return CSS class for controller focus ring state.
     * @param focused - True when the element has controller focus.
     * @returns Class name string for the focus ring.
     * @deprecated Use {@link getControllerFocusClass} instead.
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

  /** One choice in {@link select}. */
  export interface SelectChoice<T = string> {
    /** Display label for the choice. */
    label: LocalizedText;
    /** Value returned when the player picks this choice. */
    value: T;
  }

  /** Dialog options for {@link select}. */
  export interface SelectDialogOptions<T = string> {
    /** Optional dialog body text. */
    message?: LocalizedText;
    /** Optional dialog title. */
    title?: LocalizedText;
    /** Value selected when the dialog opens. */
    defaultValue?: T;
    /** Confirm button label. */
    buttonLabel?: LocalizedText;
  }

  /** Options for {@link regions.mount}. */
  export interface RegionMountOptions {
    /**
     * `"docked"` sits on the hotbar.
     * `"raised"` sits above panels such as Filter Config.
     */
    placement?: "raised" | "docked";
    /** Draw order within the region. */
    order?: number;
    /** Function that returns React content. */
    render: () => ReactNode;
  }

  /** Partial options for {@link RegionMountHandle.update}. */
  export interface RegionMountUpdateOptions {
    /**
     * `"docked"` sits on the hotbar.
     * `"raised"` sits above panels such as Filter Config.
     */
    placement?: "raised" | "docked";
    /** Draw order within the region. */
    order?: number;
    /** Function that returns React content. */
    render?: () => ReactNode;
  }

  /** Handle returned from {@link regions.mount}. */
  export interface RegionMountHandle {
    /**
     * Update placement, order, or render for this mount.
     * @param options - Fields to change.
     *
     * @example
     * ```ts
     * mountHandle.update({
     *   order: 10,
     *   render: () => sandkit.react.createElement(UpdatedActions),
     * });
     * ```
     */
    update(options: RegionMountUpdateOptions): void;
    /** Remove this mount from the region. */
    unmount(): void;
  }

  /** Handle returned from {@link regions.setVisible}. */
  export interface VisibilityHandle {
    /** Show the region again. */
    restore(): void;
  }

  /** Handle returned from {@link overrides.register}. */
  export interface OverrideHandle {
    /** Drop this wrapper. */
    remove(): void;
  }

  /** Options for {@link hotbar.createBankSource}. */
  export interface HotbarBankSourceOptions {
    /** Bank index offset for this source. */
    bankOffset: number;
    /** Minimum number of banks to keep available. */
    minimumBankCount?: number;
  }

  /** Hotbar bank source used by {@link components.ActionSlot}. */
  export interface HotbarBankSource {
    /** Return true when this bank source can show slots. */
    isAvailable(): boolean;
    /** Return the bank index for this source. */
    getBankIndex(): number;
    /** Return the number of slots in this bank. */
    getSlotCount(): number;
    /**
     * Return the action in a slot.
     * @param slotIndex - Slot index in this bank.
     */
    getAction(slotIndex: number): action.Action;
    /**
     * Activate a slot in this bank.
     * @param slotIndex - Slot index in this bank.
     */
    activateSlot(slotIndex: number): void;
    /**
     * Clear a slot in this bank.
     * @param slotIndex - Slot index in this bank.
     */
    clearSlot(slotIndex: number): void;
    /** Release this bank source. */
    dispose(): void;
  }

  /** State returned from {@link hotbar.useHotbar}. */
  export interface HotbarState {
    /** Number of hotbar banks. */
    bankCount: number;
    /** Active bank index. */
    activeBankIndex: number;
    /** Active slot index. */
    activeSlotIndex: number;
  }

  /** Props for {@link components.ActionSlot}. */
  export interface ActionSlotProps {
    /** Bank source from {@link hotbar.createBankSource}. */
    source: HotbarBankSource;
    /** Slot index in the bank. */
    slotIndex: number;
    /** Action shown in the slot. */
    action?: action.Action;
    /** Optional key label drawn on the slot. */
    keyLabel?: string;
    /** When true, draw the slot as selected. */
    active?: boolean;
    /** Called when the player selects the slot. */
    onSelect?: () => void;
    /** Called when the player clears the slot. */
    onClear?: () => void;
  }

  /** Props for {@link components.Panel}. */
  export interface PanelProps {
    /** Optional panel title. */
    title?: LocalizedText;
    /** Panel body. */
    children?: ReactNode;
    /** Extra class names. */
    className?: string;
    /** Inline style. */
    style?: CSSProperties;
  }

  /** Props for {@link components.Button}. */
  export interface ButtonProps {
    /** Button label or content. */
    children?: ReactNode;
    /** When true, draw the button as selected. */
    active?: boolean;
    /** When false, hide the button border. */
    border?: boolean;
    /** When true, ignore clicks. */
    disabled?: boolean;
    /** When true, use the small button size. */
    small?: boolean;
    /** Visual style. */
    variant?: "primary" | "danger";
    /** Extra class names. */
    className?: string;
    /** Inline style. */
    style?: CSSProperties;
    /** Click handler. */
    onClick?: () => void;
  }

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

  /** Options for {@link navigation.useFocusScope}. */
  export interface FocusScopeOptions {
    /** Unique scope id. */
    readonly id: string;
    /** When true, this scope can receive focus. */
    readonly active: boolean;
    /** Higher values take focus before lower values. */
    readonly priority?: number;
    /** Default focusable id in this scope. */
    readonly defaultId?: string;
    /** Called on back. Return true when the scope handled back. */
    readonly onBack?: () => boolean | void;
  }
}
