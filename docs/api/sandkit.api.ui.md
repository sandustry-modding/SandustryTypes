# sandkit.api.ui

## Examples

**api.ui.components.ActionSlot**

```ts
const slot = sandkit.react.createElement(
  api.ui.components.ActionSlot,
  { source, slotIndex: 0, keyLabel: "1" },
);
```

**api.ui.components.Button**

```ts
const button = sandkit.react.createElement(
  api.ui.components.Button,
  { onClick: openPanel },
  "Open",
);
```

**api.ui.components.Panel**

```ts
const panel = sandkit.react.createElement(
  api.ui.components.Panel,
  { title: "Options" },
  "Panel content",
);
```

**api.ui.hotbar.createBankSource**

```ts
const source = api.ui.hotbar.createBankSource({
  bankOffset: 1,
  minimumBankCount: 2,
});
```

**api.ui.hotbar.useHotbar**

```ts
const hotbar = api.ui.hotbar.useHotbar();
console.log(
  hotbar.bankCount,
  hotbar.activeBankIndex,
  hotbar.activeSlotIndex,
);
```

**api.ui.overrides.register**

```ts
const overrideHandle = api.ui.overrides.register(
  "resources",
  (Original) => sandkit.react.createElement(
    sandkit.react.Fragment,
    null,
    sandkit.react.createElement(Original),
    sandkit.react.createElement(ResourceAddon),
  ),
);
```

**api.ui.regions.mount**

```ts
const mountHandle = api.ui.regions.mount(
  "hotbar",
  "extra-actions",
  {
    placement: "docked",
    order: 0,
    render: () => sandkit.react.createElement(ExtraActions),
  },
);
```

**api.ui.regions.mountHandle.update**

```ts
mountHandle.update({
  order: 10,
  render: () => sandkit.react.createElement(UpdatedActions),
});
```

**api.ui.select**

```ts
const selected = await api.ui.select(
  [
    { label: "Sand", value: "sand" },
    { label: "Fluxite", value: "fluxite" },
  ],
  { title: "Select element", defaultValue: "sand", buttonLabel: "Choose" },
);
```

**api.ui.useGameEvent**

```ts
api.ui.useGameEvent("resource:collected", (payload) => {
  console.log(payload.resourceId, payload.amount);
});
```

## Namespaces <!-- {docsify-ignore} -->

- [overlays](api/sandkit.api.ui.overlays.md)
- [navigation](api/sandkit.api.ui.navigation.md)

## Interfaces <!-- {docsify-ignore} -->

### TooltipMessageData :id=tooltipmessagedata

<p class="smt-member-path"><code>sandkit.api.ui.TooltipMessageData</code></p>

Defined in: [sandkit/api/ui.d.ts:282](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L282)

Message tooltip with localized body text.

#### Properties

##### type

```ts
type: "message"
```

Defined in: [sandkit/api/ui.d.ts:284](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L284)

Discriminator for tooltip renderer selection.

##### text

```ts
text: LocalizedText
```

Defined in: [sandkit/api/ui.d.ts:286](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L286)

Message body as localized text.

***

### Focusable :id=focusable

<p class="smt-member-path"><code>sandkit.api.ui.Focusable</code></p>

Defined in: [sandkit/api/ui.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L290)

Focusable element state from useFocusable.

#### Type Parameters

##### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

#### Properties

##### ref

```ts
readonly ref: RefObject<T>
```

Defined in: [sandkit/api/ui.d.ts:292](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L292)

Ref to attach to the focusable element.

##### focused

```ts
readonly focused: boolean
```

Defined in: [sandkit/api/ui.d.ts:294](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L294)

True when the element has controller focus.

##### focus

```ts
readonly focus: () => void
```

Defined in: [sandkit/api/ui.d.ts:296](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L296)

Move controller focus to this element.

###### Returns

`void`

***

### FocusOptions :id=focusoptions

<p class="smt-member-path"><code>sandkit.api.ui.FocusOptions</code></p>

Defined in: [sandkit/api/ui.d.ts:300](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L300)

Options for useFocusable registration.

#### Properties

##### id

```ts
readonly id: string
```

Defined in: [sandkit/api/ui.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L302)

Unique id within the focus scope.

##### scope

```ts
readonly scope: string
```

Defined in: [sandkit/api/ui.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L304)

Focus scope id this element belongs to.

##### onActivate

```ts
readonly onActivate: (element?: HTMLElement) => void
```

Defined in: [sandkit/api/ui.d.ts:306](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L306)

Called when the element is activated (A button / Enter).

###### Parameters

###### element?

`HTMLElement`

###### Returns

`void`

##### onFocus?

```ts
readonly optional onFocus?: () => void
```

Defined in: [sandkit/api/ui.d.ts:308](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L308)

Called when the element receives focus.

###### Returns

`void`

##### disabled?

```ts
readonly optional disabled?: boolean
```

Defined in: [sandkit/api/ui.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L310)

When true, skip this element during navigation.

##### x?

```ts
readonly optional x?: number
```

Defined in: [sandkit/api/ui.d.ts:312](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L312)

Optional grid column for spatial navigation.

##### y?

```ts
readonly optional y?: number
```

Defined in: [sandkit/api/ui.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L314)

Optional grid row for spatial navigation.

##### neighbors?

```ts
readonly optional neighbors?: Partial<Record<"left" | "right" | "up" | "down", string>>
```

Defined in: [sandkit/api/ui.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L316)

Neighbor ids for directional navigation.

##### scrollIntoView?

```ts
readonly optional scrollIntoView?: boolean
```

Defined in: [sandkit/api/ui.d.ts:318](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L318)

When true, scroll the element into view on focus.

## Type Aliases <!-- {docsify-ignore} -->

### OverlaySlot :id=overlayslot

<p class="smt-member-path"><code>sandkit.api.ui.OverlaySlot</code></p>

```ts
OverlaySlot = LooseString<"hotbar" | "global">
```

Defined in: [sandkit/api/ui.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L267)

Overlay slot name. Known vanilla slots autocomplete; any string is allowed.

***

### ComponentId :id=componentid

<p class="smt-member-path"><code>sandkit.api.ui.ComponentId</code></p>

```ts
ComponentId = ComponentId | LooseString<never>
```

Defined in: [sandkit/api/ui.d.ts:273](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L273)

Registered UI component id.
Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) values autocomplete; custom string ids are allowed.

***

### ComponentUpdateOptions :id=componentupdateoptions

<p class="smt-member-path"><code>sandkit.api.ui.ComponentUpdateOptions</code></p>

```ts
ComponentUpdateOptions = Record<string, unknown>
```

Defined in: [sandkit/api/ui.d.ts:276](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L276)

Component-specific update payload passed to [update](#update).

***

### TooltipData :id=tooltipdata

<p class="smt-member-path"><code>sandkit.api.ui.TooltipData</code></p>

```ts
TooltipData = TooltipMessageData
```

Defined in: [sandkit/api/ui.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L279)

Tooltip payload shown near the cursor or UI target.

## Functions <!-- {docsify-ignore} -->

### update() :id=update

<p class="smt-member-path"><code>sandkit.api.ui.update()</code></p>

```ts
update(componentId: ComponentId, options?: ComponentUpdateOptions): void
```

Defined in: [sandkit/api/ui.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L130)

Update a registered UI component by id.

#### Parameters

##### componentId

[`ComponentId`](#componentid)

Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) value or custom string id.

##### options?

[`ComponentUpdateOptions`](#componentupdateoptions)

Component-specific update payload.

#### Returns

`void`

***

### openPauseMenu() :id=openpausemenu

<p class="smt-member-path"><code>sandkit.api.ui.openPauseMenu()</code></p>

```ts
openPauseMenu(): void
```

Defined in: [sandkit/api/ui.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L133)

Open the pause menu.

#### Returns

`void`

***

### showTooltip() :id=showtooltip

<p class="smt-member-path"><code>sandkit.api.ui.showTooltip()</code></p>

```ts
showTooltip(data: TooltipMessageData): void
```

Defined in: [sandkit/api/ui.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L139)

Show a tooltip with the given data.

#### Parameters

##### data

[`TooltipMessageData`](#tooltipmessagedata)

Tooltip type and localized content.

#### Returns

`void`

***

### alert() :id=alert

<p class="smt-member-path"><code>sandkit.api.ui.alert()</code></p>

```ts
alert(message: LocalizedText, title?: LocalizedText): Promise<void>
```

Defined in: [sandkit/api/ui.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L155)

Show an alert dialog.

#### Parameters

##### message

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Dialog body text.

##### title?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Optional dialog title.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the user dismisses the dialog.

#### Example

```ts
await api.ui.alert(
  { key: "mods|example|details" },
  { key: "mods|example|title" },
);
```

***

### confirm() :id=confirm

<p class="smt-member-path"><code>sandkit.api.ui.confirm()</code></p>

```ts
confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>
```

Defined in: [sandkit/api/ui.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L170)

Show a confirm dialog.

#### Parameters

##### message

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Dialog body text.

##### title?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Optional dialog title.

#### Returns

`Promise`\<`boolean`\>

Promise that resolves with true when confirmed, or false when cancelled.

#### Example

```ts
const confirmed = await api.ui.confirm(
  { key: "mods|example|confirm" },
);
```

***

### prompt() :id=prompt

<p class="smt-member-path"><code>sandkit.api.ui.prompt()</code></p>

```ts
prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>
```

Defined in: [sandkit/api/ui.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L189)

Show a prompt dialog.

#### Parameters

##### message

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Dialog body text.

##### defaultValue?

`string`

Initial input value.

##### placeholder?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Placeholder text in the input field.

##### title?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Optional dialog title.

##### allowCopy?

`boolean`

When true, allow copying the result from the dialog.

#### Returns

`Promise`\<`string` \| `null`\>

Promise that resolves with entered text, or null when cancelled.

#### Example

```ts
const value = await api.ui.prompt(
  { key: "mods|example|enterValue" },
  "",
);
```

***

### inject() :id=inject

<p class="smt-member-path"><code>sandkit.api.ui.inject()</code></p>

```ts
inject(componentId: ComponentId, component: ComponentType<Record<string, never>>): () => void
```

Defined in: [sandkit/api/ui.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L197)

Mount a React component by id.

#### Parameters

##### componentId

[`ComponentId`](#componentid)

Overlay slot or custom mount point id.

##### component

`ComponentType`\<`Record`\<`string`, `never`\>\>

React component to render.

#### Returns

Function that unmounts the injected component.

() => `void`

## References <!-- {docsify-ignore} -->

### toast :id=toast

<p class="smt-member-path"><code>sandkit.api.ui.toast</code></p>

Re-exports [toast](api/sandkit.api.ui.worker.md#toast)

***

### LocalizedText :id=localizedtext

<p class="smt-member-path"><code>sandkit.api.ui.LocalizedText</code></p>

Re-exports [LocalizedText](api/sandkit.api.ui.worker.md#localizedtext)

***

### ToastOptions :id=toastoptions

<p class="smt-member-path"><code>sandkit.api.ui.ToastOptions</code></p>

Re-exports [ToastOptions](api/sandkit.api.ui.worker.md#toastoptions)
