# sandkit.api.input

`sandkit.api.input` — key bindings, mouse position, and modifier keys.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### InputBindingHandlers :id=inputbindinghandlers

<p class="smt-member-path"><code>sandkit.api.input.InputBindingHandlers</code></p>

Defined in: [sandkit/api/input.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L113)

Handlers invoked when a binding is pressed or released.

#### Properties

##### down?

```ts
optional down?: () => void
```

Defined in: [sandkit/api/input.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L115)

Called when the binding is pressed.

###### Returns

`void`

##### up?

```ts
optional up?: () => void
```

Defined in: [sandkit/api/input.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L117)

Called when the binding is released.

###### Returns

`void`

---

### InputBindingDefinition :id=inputbindingdefinition

<p class="smt-member-path"><code>sandkit.api.input.InputBindingDefinition</code></p>

Defined in: [sandkit/api/input.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L121)

Definition for a registered input binding.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### displayName

```ts
displayName: string;
```

Defined in: [sandkit/api/input.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L123)

Display name shown in settings.

##### displayNameKey?

```ts
optional displayNameKey?: string
```

Defined in: [sandkit/api/input.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L125)

i18n key for the display name (overrides displayName when set).

##### category

```ts
category: string;
```

Defined in: [sandkit/api/input.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L127)

Settings category for grouping.

##### handlers

```ts
handlers: InputBindingHandlers;
```

Defined in: [sandkit/api/input.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L129)

Press and release handlers.

## Type Aliases <!-- {docsify-ignore} -->

### BindingId :id=bindingid

<p class="smt-member-path"><code>sandkit.api.input.BindingId</code></p>

```ts
BindingId = LooseString<` ${KeyBinding} `>;
```

Defined in: [sandkit/api/input.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L92)

Binding id. Vanilla [KeyBindingEnum](api/sandkit.enums.KeyBinding.md) names autocomplete; custom ids are allowed.

---

### KeyCode :id=keycode

<p class="smt-member-path"><code>sandkit.api.input.KeyCode</code></p>

```ts
KeyCode = LooseString<
  | "Shift"
  | "Alt"
  | "Control"
  | "Meta"
  | "ShiftLeft"
  | "ShiftRight"
  | "AltLeft"
  | "AltRight"
  | "ControlLeft"
  | "ControlRight"
  | "MetaLeft"
  | "MetaRight"
>;
```

Defined in: [sandkit/api/input.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L97)

KeyboardEvent.code, a modifier alias (`Shift`), or a chord (`Control+KeyC`).

## Functions <!-- {docsify-ignore} -->

### registerBinding() :id=registerbinding

<p class="smt-member-path"><code>sandkit.api.input.registerBinding()</code></p>

```ts
registerBinding(bindingId: BindingId, defaultKeys: KeyCode[], definition: InputBindingDefinition): BindingId
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

---

### getMouseCellPosition() :id=getmousecellposition

<p class="smt-member-path"><code>sandkit.api.input.getMouseCellPosition()</code></p>

```ts
getMouseCellPosition(): object
```

Defined in: [sandkit/api/input.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L37)

Return the mouse position in cell coordinates.

#### Returns

`object`

Cell `{ x, y }` under the cursor.

##### x

```ts
x: number;
```

##### y

```ts
y: number;
```

---

### getBoundKeys() :id=getboundkeys

<p class="smt-member-path"><code>sandkit.api.input.getBoundKeys()</code></p>

```ts
getBoundKeys(bindingId: BindingId): KeyCode[]
```

Defined in: [sandkit/api/input.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L46)

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

---

### getDisplayKey() :id=getdisplaykey

<p class="smt-member-path"><code>sandkit.api.input.getDisplayKey()</code></p>

```ts
getDisplayKey(bindingId: BindingId, defaultLabel?: string): string
```

Defined in: [sandkit/api/input.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L54)

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

---

### triggerBinding() :id=triggerbinding

<p class="smt-member-path"><code>sandkit.api.input.triggerBinding()</code></p>

```ts
triggerBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L60)

Fire the binding down handler as if the key was pressed.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

#### Returns

`void`

---

### pressBinding() :id=pressbinding

<p class="smt-member-path"><code>sandkit.api.input.pressBinding()</code></p>

```ts
pressBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L66)

Fire the binding down handler without a matching release.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

#### Returns

`void`

---

### releaseBinding() :id=releasebinding

<p class="smt-member-path"><code>sandkit.api.input.releaseBinding()</code></p>

```ts
releaseBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L72)

Fire the binding up handler.

#### Parameters

##### bindingId

[`BindingId`](#bindingid)

Registered binding id.

#### Returns

`void`

---

### resetMouseState() :id=resetmousestate

<p class="smt-member-path"><code>sandkit.api.input.resetMouseState()</code></p>

```ts
resetMouseState(): void
```

Defined in: [sandkit/api/input.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L75)

Clear internal mouse button state.

#### Returns

`void`

---

### isCtrlHeld() :id=isctrlheld

<p class="smt-member-path"><code>sandkit.api.input.isCtrlHeld()</code></p>

```ts
isCtrlHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L81)

Return true when Ctrl is held.

#### Returns

`boolean`

True when the Ctrl modifier is down.

---

### isAltHeld() :id=isaltheld

<p class="smt-member-path"><code>sandkit.api.input.isAltHeld()</code></p>

```ts
isAltHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L87)

Return true when Alt is held.

#### Returns

`boolean`

True when the Alt modifier is down.
