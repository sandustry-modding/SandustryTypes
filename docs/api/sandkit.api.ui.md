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

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.TooltipMessageData :id=tooltipmessagedata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L299" target="_blank" rel="noopener">ui.d.ts:299</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | "message" | Discriminator for tooltip renderer selection. |
| text | LocalizedText | Message body as localized text. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### text <!-- {docsify-ignore} -->

</div>

Message tooltip with localized body text.

</div>

<div class="smt-member-card">

### sandkit.api.ui.Focusable :id=focusable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L307" target="_blank" rel="noopener">ui.d.ts:307</a></p>

| Property | Type | Description |
| --- | --- | --- |
| ref | RefObject<T> | Ref to attach to the focusable element. |
| focused | boolean | True when the element has controller focus. |
| focus | () => void | Move controller focus to this element. |

<div class="smt-member-anchors">

##### ref <!-- {docsify-ignore} -->

##### focused <!-- {docsify-ignore} -->

##### focus <!-- {docsify-ignore} -->

</div>

Focusable element state from useFocusable.

#### Type Parameters

##### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

</div>

<div class="smt-member-card">

### sandkit.api.ui.FocusOptions :id=focusoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L317" target="_blank" rel="noopener">ui.d.ts:317</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | string | Unique id within the focus scope. |
| scope | string | Focus scope id this element belongs to. |
| onActivate | (element?: HTMLElement) => void | Called when the element is activated (A button / Enter). |
| onFocus? | () => void | Called when the element receives focus. |
| disabled? | boolean | When true, skip this element during navigation. |
| x? | number | Optional grid column for spatial navigation. |
| y? | number | Optional grid row for spatial navigation. |
| neighbors? | Partial<Record<"left" &#124; "right" &#124; "up" &#124; "down", string>> | Neighbor ids for directional navigation. |
| scrollIntoView? | boolean | When true, scroll the element into view on focus. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### scope <!-- {docsify-ignore} -->

##### onActivate <!-- {docsify-ignore} -->

##### onFocus? <!-- {docsify-ignore} -->

##### disabled? <!-- {docsify-ignore} -->

##### x? <!-- {docsify-ignore} -->

##### y? <!-- {docsify-ignore} -->

##### neighbors? <!-- {docsify-ignore} -->

##### scrollIntoView? <!-- {docsify-ignore} -->

</div>

Options for useFocusable registration.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.OverlaySlot :id=overlayslot

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L284" target="_blank" rel="noopener">ui.d.ts:284</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.OverlaySlot = LooseString&lt;&quot;hotbar&quot; | &quot;global&quot;&gt;">

```ts
OverlaySlot = LooseString<"hotbar" | "global">
```

</div>

Overlay slot name. Known vanilla slots autocomplete; any string is allowed.

</div>

<div class="smt-member-card">

### sandkit.api.ui.ComponentId :id=componentid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L290" target="_blank" rel="noopener">ui.d.ts:290</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.ComponentId = ComponentId | LooseString&lt;never&gt;">

```ts
ComponentId = ComponentId | LooseString<never>
```

</div>

Registered UI component id.
Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) values autocomplete; custom string ids are allowed.

</div>

<div class="smt-member-card">

### sandkit.api.ui.ComponentUpdateOptions :id=componentupdateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L293" target="_blank" rel="noopener">ui.d.ts:293</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.ComponentUpdateOptions = Record&lt;string, unknown&gt;">

```ts
ComponentUpdateOptions = Record<string, unknown>
```

</div>

Component-specific update payload passed to [update](?id=update).

</div>

<div class="smt-member-card">

### sandkit.api.ui.TooltipData :id=tooltipdata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L296" target="_blank" rel="noopener">ui.d.ts:296</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.TooltipData = TooltipMessageData">

```ts
TooltipData = TooltipMessageData
```

</div>

Tooltip payload shown near the cursor or UI target.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.update :id=update

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L130" target="_blank" rel="noopener">ui.d.ts:130</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.update(componentId: ComponentId, options?: ComponentUpdateOptions): void">

```ts
update(componentId: ComponentId, options?: ComponentUpdateOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| componentId | [`ComponentId`](?id=componentid) | Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) value or custom string id. |
| options? | [`ComponentUpdateOptions`](?id=componentupdateoptions) | Component-specific update payload. |

<div class="smt-member-anchors">

##### componentId <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Update a registered UI component by id.

</div>

<div class="smt-member-card">

### sandkit.api.ui.openPauseMenu :id=openpausemenu

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L133" target="_blank" rel="noopener">ui.d.ts:133</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.openPauseMenu(): void">

```ts
openPauseMenu(): void
```

</div>

Open the pause menu.

</div>

<div class="smt-member-card">

### sandkit.api.ui.showTooltip :id=showtooltip

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L139" target="_blank" rel="noopener">ui.d.ts:139</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.showTooltip(data: TooltipMessageData): void">

```ts
showTooltip(data: TooltipMessageData): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| data | [`TooltipMessageData`](?id=tooltipmessagedata) | Tooltip type and localized content. |

<div class="smt-member-anchors">

##### data <!-- {docsify-ignore} -->

</div>

Show a tooltip with the given data.

</div>

<div class="smt-member-card">

### sandkit.api.ui.alert :id=alert

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L155" target="_blank" rel="noopener">ui.d.ts:155</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.alert(message: LocalizedText, title?: LocalizedText): Promise&lt;void&gt;">

```ts
alert(message: LocalizedText, title?: LocalizedText): Promise<void>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | [`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext) | Dialog body text. |
| title? | [`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext) | Optional dialog title. |

<div class="smt-member-anchors">

##### message <!-- {docsify-ignore} -->

##### title? <!-- {docsify-ignore} -->

</div>

Show an alert dialog.

`Promise`\<`void`\> Promise that resolves when the user dismisses the dialog.

#### Example

```ts
await api.ui.alert(
  { key: "mods|example|details" },
  { key: "mods|example|title" },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.confirm :id=confirm

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L170" target="_blank" rel="noopener">ui.d.ts:170</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.confirm(message: LocalizedText, title?: LocalizedText): Promise&lt;boolean&gt;">

```ts
confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | [`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext) | Dialog body text. |
| title? | [`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext) | Optional dialog title. |

<div class="smt-member-anchors">

##### message <!-- {docsify-ignore} -->

##### title? <!-- {docsify-ignore} -->

</div>

Show a confirm dialog.

`Promise`\<`boolean`\> Promise that resolves with true when confirmed, or false when cancelled.

#### Example

```ts
const confirmed = await api.ui.confirm(
  { key: "mods|example|confirm" },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.prompt :id=prompt

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L189" target="_blank" rel="noopener">ui.d.ts:189</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise&lt;string | null&gt;">

```ts
prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | [`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext) | Dialog body text. |
| defaultValue? | `string` | Initial input value. |
| placeholder? | [`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext) | Placeholder text in the input field. |
| title? | [`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext) | Optional dialog title. |
| allowCopy? | `boolean` | When true, allow copying the result from the dialog. |

<div class="smt-member-anchors">

##### message <!-- {docsify-ignore} -->

##### defaultValue? <!-- {docsify-ignore} -->

##### placeholder? <!-- {docsify-ignore} -->

##### title? <!-- {docsify-ignore} -->

##### allowCopy? <!-- {docsify-ignore} -->

</div>

Show a prompt dialog.

`Promise`\<`string` &#124; `null`\> Promise that resolves with entered text, or null when cancelled.

#### Example

```ts
const value = await api.ui.prompt(
  { key: "mods|example|enterValue" },
  "",
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.inject :id=inject

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L203" target="_blank" rel="noopener">ui.d.ts:203</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.inject(componentId: ComponentId, component: ComponentType&lt;Record&lt;string, never&gt;&gt;): () =&gt; void">

```ts
inject(componentId: ComponentId, component: ComponentType<Record<string, never>>): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| componentId | [`ComponentId`](?id=componentid) | Overlay slot or custom mount point id. |
| component | `ComponentType`\<`Record`\<`string`, `never`\>\> | React component to render. |

<div class="smt-member-anchors">

##### componentId <!-- {docsify-ignore} -->

##### component <!-- {docsify-ignore} -->

</div>

Mount a React component by id.

Function that unmounts the injected component. () => `void`

</div>
