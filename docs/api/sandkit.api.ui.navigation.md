# sandkit.api.ui.navigation

Controller focus and scope navigation hooks.

## Functions <!-- {docsify-ignore} -->

### useFocusable() :id=usefocusable

<p class="smt-member-path"><code>sandkit.api.ui.navigation.useFocusable()</code></p>

```ts
useFocusable<T *extends* HTMLElement = HTMLDivElement>(options: FocusOptions): Focusable<T>
```

Defined in: [sandkit/api/ui.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L103)

React hook for a focusable UI element in a scope.

#### Type Parameters

##### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

#### Parameters

##### options

[`FocusOptions`](api/sandkit.api.ui.md#focusoptions)

Focus registration and neighbor wiring.

#### Returns

[`Focusable`](api/sandkit.api.ui.md#focusable)\<`T`\>

Ref, focus state, and a focus helper.

***

### useFocusScope() :id=usefocusscope

<p class="smt-member-path"><code>sandkit.api.ui.navigation.useFocusScope()</code></p>

```ts
useFocusScope(options: object): void
```

Defined in: [sandkit/api/ui.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L109)

React hook to register a focus scope with back handling.

#### Parameters

##### options

Scope id, priority, default focus, and back handler.

###### id

`string`

###### active

`boolean`

###### priority?

`number`

###### defaultId?

`string`

###### onBack?

() => `boolean` \| `void`

#### Returns

`void`

***

### controllerFocusClass() :id=controllerfocusclass

<p class="smt-member-path"><code>sandkit.api.ui.navigation.controllerFocusClass()</code></p>

```ts
controllerFocusClass(focused: boolean): string
```

Defined in: [sandkit/api/ui.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L116)

Return CSS class for controller focus ring state.

#### Parameters

##### focused

`boolean`

True when the element has controller focus.

#### Returns

`string`

Class name string for the focus ring.
