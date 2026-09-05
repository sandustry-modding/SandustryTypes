# sandkit.engine.api.colorPicker

**`Internal`**

`sandkit.engine.api.colorPicker` — structure color palette UI helpers.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Variables <!-- {docsify-ignore} -->

### CYCLE\_COLOR

```ts
const CYCLE\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L12)

Sentinel value for cycling through predefined colors.

---

### NO\_COLOR

```ts
const NO\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L14)

Sentinel value for no color selected.

---

### PREDEFINED\_COLORS

```ts
const PREDEFINED\_COLORS: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L16)

List of predefined palette colors.

---

### RANDOM\_COLOR

```ts
const RANDOM\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L18)

Sentinel value for a random palette color.

## Functions <!-- {docsify-ignore} -->

### closePalette() :id=closepalette

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.closePalette()</code></p>

```ts
closePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L23)

Close the active color palette UI.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getActivePalette() :id=getactivepalette

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.getActivePalette()</code></p>

```ts
getActivePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L28)

Return the active palette identifier.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getCycleColor() :id=getcyclecolor

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.getCycleColor()</code></p>

```ts
getCycleColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L33)

Return the next color in the cycle.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getRandomColor() :id=getrandomcolor

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.getRandomColor()</code></p>

```ts
getRandomColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L38)

Return a random predefined color.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hexToRgba() :id=hextorgba

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.hexToRgba()</code></p>

```ts
hexToRgba(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L43)

Convert a hex color string to RGBA components.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### renderColorButton() :id=rendercolorbutton

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.renderColorButton()</code></p>

```ts
renderColorButton(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L48)

Render a color-picker button in the UI.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### renderColorSection() :id=rendercolorsection

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.renderColorSection()</code></p>

```ts
renderColorSection(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L53)

Render a color section in the UI.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### renderPalette() :id=renderpalette

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.renderPalette()</code></p>

```ts
renderPalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L58)

Render the full color palette UI.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### rgbaToHex() :id=rgbatohex

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.rgbaToHex()</code></p>

```ts
rgbaToHex(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L63)

Convert RGBA components to a hex color string.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### setActivePalette() :id=setactivepalette

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.setActivePalette()</code></p>

```ts
setActivePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L68)

Set the active palette identifier.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### togglePalette() :id=togglepalette

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.togglePalette()</code></p>

```ts
togglePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L73)

Open or close the color palette UI.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`
