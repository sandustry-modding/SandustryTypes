# sandkit.api.input

`sandkit.api.input` — key bindings, mouse position, and modifier keys.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### InputBindingHandlers :id=inputbindinghandlers

<p class="smt-member-path"><code>sandkit.api.input.InputBindingHandlers</code></p>
Defined in: [sandkit/api/input.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L117)

Handlers invoked when a binding is pressed or released.

#### Properties

##### down?

```ts
optional down?: () => void
```

Defined in: [sandkit/api/input.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L119)

Called when the binding is pressed.

###### Returns

`void`

##### up?

```ts
optional up?: () => void
```

Defined in: [sandkit/api/input.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L121)

Called when the binding is released.

###### Returns

`void`

***

### InputBindingDefinition :id=inputbindingdefinition

<p class="smt-member-path"><code>sandkit.api.input.InputBindingDefinition</code></p>
Defined in: [sandkit/api/input.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L125)

Definition for a registered input binding.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### displayName

```ts
displayName: string
```

Defined in: [sandkit/api/input.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L127)

Display name shown in settings.

##### displayNameKey?

```ts
optional displayNameKey?: string
```

Defined in: [sandkit/api/input.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L129)

i18n key for the display name (overrides displayName when set).

##### category

```ts
category: string
```

Defined in: [sandkit/api/input.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L131)

Settings category for grouping.

##### handlers

```ts
handlers: InputBindingHandlers
```

Defined in: [sandkit/api/input.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L133)

Press and release handlers.

## Type Aliases <!-- {docsify-ignore} -->

### BindingId :id=bindingid

```ts
sandkit.api.input.BindingId = LooseString<` ${KeyBinding} `>
```

Defined in: [sandkit/api/input.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L96)

Binding id. Vanilla [KeyBindingEnum](api/sandkit.enums.KeyBinding.md) names autocomplete; custom ids are allowed.

***

### KeyCode :id=keycode

```ts
sandkit.api.input.KeyCode = LooseString<"Shift" | "Alt" | "Control" | "Meta" | "ShiftLeft" | "ShiftRight" | "AltLeft" | "AltRight" | "ControlLeft" | "ControlRight" | "MetaLeft" | "MetaRight">
```

Defined in: [sandkit/api/input.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L101)

KeyboardEvent.code, a modifier alias (`Shift`), or a chord (`Control+KeyC`).

## Functions <!-- {docsify-ignore} -->

### registerBinding() :id=registerbinding

```ts
sandkit.api.input.registerBinding(bindingId: BindingId, defaultKeys: KeyCode[], definition: InputBindingDefinition): BindingId
```

Defined in: [sandkit/api/input.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L31)

Register a key binding and return its binding id.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Unique id for the binding (also used in settings).

##### defaultKeys

[`KeyCode`](#keycode)[]

Default key codes (for example `"Control+KeyC"`).

##### definition

[`InputBindingDefinition`](#inputbindingdefinition)

Display metadata and press/release handlers.

#### Returns

[`BindingId`](#bindingid)

The registered binding id.

#### Example

```ts
api.input.registerBinding("ExampleToggle", ["KeyO"], {
  displayName: "Toggle example",
  displayNameKey: "mods|example|toggle",
  subsection: {
    title: "Example controls",
    titleKey: "mods|example|controlsTitle",
    description: "Bindings installed by the example mod.",
    descriptionKey: "mods|example|controlsDescription",
  },
  handlers: { down: toggleExample },
});
```

***

### getMouseCellPosition() :id=getmousecellposition

```ts
sandkit.api.input.getMouseCellPosition(): object
```

Defined in: [sandkit/api/input.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L41)

Return the mouse position in cell coordinates.

#### Returns

`object`

Cell `{ x, y }` under the cursor.

##### x

```ts
x: number
```

##### y

```ts
y: number
```

***

### getBoundKeys() :id=getboundkeys

```ts
sandkit.api.input.getBoundKeys(bindingId: BindingId): KeyCode[]
```

Defined in: [sandkit/api/input.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L50)

Return the keys currently bound to a binding id.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

#### Returns

[`KeyCode`](#keycode)[]

Key strings from settings (for example `"KeyA"` or `"Shift"`).
Session `input.keys` is keyed by `KeyboardEvent.code`. Modifier aliases
(`Shift`, `Alt`, `Control`, `Meta`) expand to `ShiftLeft` / `ShiftRight` and the same for the other modifiers.

***

### getDisplayKey() :id=getdisplaykey

```ts
sandkit.api.input.getDisplayKey(bindingId: BindingId, defaultLabel?: string): string
```

Defined in: [sandkit/api/input.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L58)

Return a display label for the bound key.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### defaultLabel?

`string`

Fallback label when no key is bound.

#### Returns

`string`

Human-readable key label for UI.

***

### triggerBinding() :id=triggerbinding

```ts
sandkit.api.input.triggerBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L64)

Fire the binding down handler as if the key was pressed.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

#### Returns

`void`

***

### pressBinding() :id=pressbinding

```ts
sandkit.api.input.pressBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L70)

Fire the binding down handler without a matching release.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

#### Returns

`void`

***

### releaseBinding() :id=releasebinding

```ts
sandkit.api.input.releaseBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L76)

Fire the binding up handler.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

#### Returns

`void`

***

### resetMouseState() :id=resetmousestate

```ts
sandkit.api.input.resetMouseState(): void
```

Defined in: [sandkit/api/input.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L79)

Clear internal mouse button state.

#### Returns

`void`

***

### isCtrlHeld() :id=isctrlheld

```ts
sandkit.api.input.isCtrlHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L85)

Return true when Ctrl is held.

#### Returns

`boolean`

True when the Ctrl modifier is down.

***

### isAltHeld() :id=isaltheld

```ts
sandkit.api.input.isAltHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L91)

Return true when Alt is held.

#### Returns

`boolean`

True when the Alt modifier is down.
