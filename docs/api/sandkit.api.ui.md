# sandkit.api.ui

## Namespaces <!-- {docsify-ignore} -->

- [overlays](api/sandkit.api.ui.overlays.md)
- [navigation](api/sandkit.api.ui.navigation.md)

## Interfaces <!-- {docsify-ignore} -->

### TooltipMessageData :id=tooltipmessagedata

<p class="smt-member-path"><code>sandkit.api.ui.TooltipMessageData</code></p>

Defined in: [sandkit/api/ui.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L137)

Message tooltip with localized body text.

#### Properties

##### type

```ts
type: "message"
```

Defined in: [sandkit/api/ui.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L139)

Discriminator for tooltip renderer selection.

##### text

```ts
text: LocalizedText
```

Defined in: [sandkit/api/ui.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L141)

Message body as localized text.

***

### Focusable :id=focusable

<p class="smt-member-path"><code>sandkit.api.ui.Focusable</code></p>

Defined in: [sandkit/api/ui.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L145)

Focusable element state from useFocusable.

#### Type Parameters

##### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

#### Properties

##### ref

```ts
readonly ref: RefObject<T>
```

Defined in: [sandkit/api/ui.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L147)

Ref to attach to the focusable element.

##### focused

```ts
readonly focused: boolean
```

Defined in: [sandkit/api/ui.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L149)

True when the element has controller focus.

##### focus

```ts
readonly focus: () => void
```

Defined in: [sandkit/api/ui.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L151)

Move controller focus to this element.

###### Returns

`void`

***

### FocusOptions :id=focusoptions

<p class="smt-member-path"><code>sandkit.api.ui.FocusOptions</code></p>

Defined in: [sandkit/api/ui.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L155)

Options for useFocusable registration.

#### Properties

##### id

```ts
readonly id: string
```

Defined in: [sandkit/api/ui.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L157)

Unique id within the focus scope.

##### scope

```ts
readonly scope: string
```

Defined in: [sandkit/api/ui.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L159)

Focus scope id this element belongs to.

##### onActivate

```ts
readonly onActivate: (element?: HTMLElement) => void
```

Defined in: [sandkit/api/ui.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L161)

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

Defined in: [sandkit/api/ui.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L163)

Called when the element receives focus.

###### Returns

`void`

##### disabled?

```ts
readonly optional disabled?: boolean
```

Defined in: [sandkit/api/ui.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L165)

When true, skip this element during navigation.

##### x?

```ts
readonly optional x?: number
```

Defined in: [sandkit/api/ui.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L167)

Optional grid column for spatial navigation.

##### y?

```ts
readonly optional y?: number
```

Defined in: [sandkit/api/ui.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L169)

Optional grid row for spatial navigation.

##### neighbors?

```ts
readonly optional neighbors?: Partial<Record<"left" | "right" | "up" | "down", string>>
```

Defined in: [sandkit/api/ui.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L171)

Neighbor ids for directional navigation.

##### scrollIntoView?

```ts
readonly optional scrollIntoView?: boolean
```

Defined in: [sandkit/api/ui.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L173)

When true, scroll the element into view on focus.

## Type Aliases <!-- {docsify-ignore} -->

### OverlaySlot :id=overlayslot

<p class="smt-member-path"><code>sandkit.api.ui.OverlaySlot</code></p>

```ts
OverlaySlot = LooseString<"hotbar" | "global">
```

Defined in: [sandkit/api/ui.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L122)

Overlay slot name. Known vanilla slots autocomplete; any string is allowed.

***

### ComponentId :id=componentid

<p class="smt-member-path"><code>sandkit.api.ui.ComponentId</code></p>

```ts
ComponentId = ComponentId | LooseString<never>
```

Defined in: [sandkit/api/ui.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L128)

Registered UI component id.
Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) values autocomplete; custom string ids are allowed.

***

### ComponentUpdateOptions :id=componentupdateoptions

<p class="smt-member-path"><code>sandkit.api.ui.ComponentUpdateOptions</code></p>

```ts
ComponentUpdateOptions = Record<string, unknown>
```

Defined in: [sandkit/api/ui.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L131)

Component-specific update payload passed to [update](#update).

***

### TooltipData :id=tooltipdata

<p class="smt-member-path"><code>sandkit.api.ui.TooltipData</code></p>

```ts
TooltipData = TooltipMessageData
```

Defined in: [sandkit/api/ui.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L134)

Tooltip payload shown near the cursor or UI target.

## Functions <!-- {docsify-ignore} -->

### update() :id=update

<p class="smt-member-path"><code>sandkit.api.ui.update()</code></p>

```ts
update(componentId: ComponentId, options?: ComponentUpdateOptions): void
```

Defined in: [sandkit/api/ui.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L26)

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

Defined in: [sandkit/api/ui.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L29)

Open the pause menu.

#### Returns

`void`

***

### showTooltip() :id=showtooltip

<p class="smt-member-path"><code>sandkit.api.ui.showTooltip()</code></p>

```ts
showTooltip(data: TooltipMessageData): void
```

Defined in: [sandkit/api/ui.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L35)

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

Defined in: [sandkit/api/ui.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L43)

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

***

### confirm() :id=confirm

<p class="smt-member-path"><code>sandkit.api.ui.confirm()</code></p>

```ts
confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>
```

Defined in: [sandkit/api/ui.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L51)

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

***

### prompt() :id=prompt

<p class="smt-member-path"><code>sandkit.api.ui.prompt()</code></p>

```ts
prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>
```

Defined in: [sandkit/api/ui.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L62)

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

***

### inject() :id=inject

<p class="smt-member-path"><code>sandkit.api.ui.inject()</code></p>

```ts
inject(componentId: ComponentId, component: ComponentType<Record<string, never>>): () => void
```

Defined in: [sandkit/api/ui.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L70)

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
