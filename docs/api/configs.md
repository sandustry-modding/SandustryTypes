# configs

Sandkit mod file schemas: `modinfo.json`, `patches.json`, and `workshop.json`.

These are not runtime `sandkit` properties. Import from
`@sandustry-modding/types/configs` when typing mod folder config files.

JSON Schema (GitHub Pages):
https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json
https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json

## See

 - [Official docs](https://sandustry.com/sandkit.html#mod-files-heading)
 - [JSON Schema docs](https://sandustry-modding.github.io/SandustryTypes/#/schemas)

## Interfaces <!-- {docsify-ignore} -->

### ConfigSchemaNumber :id=configschemanumber

<p class="smt-member-path"><code>configs.ConfigSchemaNumber</code></p>
Defined in: [configs/modinfo.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L135)

Number setting in `modinfo.json` `configSchema`.

#### Properties

##### type

```ts
type: "number"
```

Defined in: [configs/modinfo.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L141)

Discriminator. Must be `"number"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### default

```ts
default: number
```

Defined in: [configs/modinfo.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L147)

Value used when the player has not changed the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### min?

```ts
optional min?: number
```

Defined in: [configs/modinfo.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L153)

Inclusive lower bound for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### max?

```ts
optional max?: number
```

Defined in: [configs/modinfo.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L159)

Inclusive upper bound for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### step?

```ts
optional step?: number
```

Defined in: [configs/modinfo.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L165)

UI step size for the number control.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L171)

Plain-text label shown in the settings UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L177)

i18n key for the settings label (preferred over [label](#label) when both exist).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L183)

Plain-text help text for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L189)

i18n key for the setting help text.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ConfigSchemaBoolean :id=configschemaboolean

<p class="smt-member-path"><code>configs.ConfigSchemaBoolean</code></p>
Defined in: [configs/modinfo.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L193)

Boolean setting in `modinfo.json` `configSchema`.

#### Properties

##### type

```ts
type: "boolean"
```

Defined in: [configs/modinfo.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L199)

Discriminator. Must be `"boolean"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### default

```ts
default: boolean
```

Defined in: [configs/modinfo.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L205)

Value used when the player has not changed the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:211](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L211)

Plain-text label shown in the settings UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L217)

i18n key for the settings label.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L223)

Plain-text help text for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L229)

i18n key for the setting help text.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ConfigSchemaChoiceOption :id=configschemachoiceoption

<p class="smt-member-path"><code>configs.ConfigSchemaChoiceOption</code></p>
Defined in: [configs/modinfo.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L233)

One option inside a [ConfigSchemaChoice](#configschemachoice).

#### Properties

##### value

```ts
value: string
```

Defined in: [configs/modinfo.d.ts:239](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L239)

Stored value written when the player picks this option.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L245)

Plain-text label for the option.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L251)

i18n key for the option label.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ConfigSchemaChoice :id=configschemachoice

<p class="smt-member-path"><code>configs.ConfigSchemaChoice</code></p>
Defined in: [configs/modinfo.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L255)

Choice setting in `modinfo.json` `configSchema`.

#### Properties

##### type

```ts
type: "choice"
```

Defined in: [configs/modinfo.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L261)

Discriminator. Must be `"choice"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### default

```ts
default: string
```

Defined in: [configs/modinfo.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L267)

Default option [ConfigSchemaChoiceOption.value](#value).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:273](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L273)

Plain-text label shown in the settings UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L279)

i18n key for the settings label.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L285)

Plain-text help text for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:291](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L291)

i18n key for the setting help text.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### options

```ts
options: readonly ConfigSchemaChoiceOption[]
```

Defined in: [configs/modinfo.d.ts:297](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L297)

Allowed choices for this setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### TextureOverride :id=textureoverride

<p class="smt-member-path"><code>configs.TextureOverride</code></p>
Defined in: [configs/modinfo.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L314)

Animated (or static) texture replacement for a vanilla asset id.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### path

```ts
path: string
```

Defined in: [configs/modinfo.d.ts:320](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L320)

Path to the replacement image, relative to the mod root.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### frameWidth?

```ts
optional frameWidth?: number
```

Defined in: [configs/modinfo.d.ts:326](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L326)

Width in pixels of one animation frame.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### frames?

```ts
optional frames?: number
```

Defined in: [configs/modinfo.d.ts:332](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L332)

Number of frames in the spritesheet.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### intervalMs?

```ts
optional intervalMs?: number
```

Defined in: [configs/modinfo.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L338)

Milliseconds between animation frames.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModProvide :id=modprovide

<p class="smt-member-path"><code>configs.ModProvide</code></p>
Defined in: [configs/modinfo.d.ts:346](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L346)

Optional content pack exposed by this mod for other mods or the game to consume.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### kind

```ts
kind: string
```

Defined in: [configs/modinfo.d.ts:352](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L352)

Kind of provided content (for example `"structureTextures"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L358)

Id of this provide entry within its kind.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### textureOverrides?

```ts
optional textureOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L364)

Texture paths keyed by the vanilla or structure texture id they replace.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapBlueprints :id=modmapblueprints

<p class="smt-member-path"><code>configs.ModMapBlueprints</code></p>
Defined in: [configs/modinfo.d.ts:374](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L374)

Blueprint image paths for a custom map pack.

Paths are relative to the mod root.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### terrain?

```ts
optional terrain?: string
```

Defined in: [configs/modinfo.d.ts:380](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L380)

Terrain color map image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### lights?

```ts
optional lights?: string
```

Defined in: [configs/modinfo.d.ts:386](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L386)

Lights layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### sensors?

```ts
optional sensors?: string
```

Defined in: [configs/modinfo.d.ts:392](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L392)

Sensors layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### authorization?

```ts
optional authorization?: string
```

Defined in: [configs/modinfo.d.ts:398](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L398)

Authorization zones image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### wall?

```ts
optional wall?: string
```

Defined in: [configs/modinfo.d.ts:404](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L404)

Wall layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### lightsMeta?

```ts
optional lightsMeta?: string
```

Defined in: [configs/modinfo.d.ts:410](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L410)

Lights metadata image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### decor?

```ts
optional decor?: string
```

Defined in: [configs/modinfo.d.ts:416](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L416)

Decor layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### config?

```ts
optional config?: string
```

Defined in: [configs/modinfo.d.ts:422](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L422)

Map config JSON path.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapPoint :id=modmappoint

<p class="smt-member-path"><code>configs.ModMapPoint</code></p>
Defined in: [configs/modinfo.d.ts:430](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L430)

World-pixel spawn or unstuck point.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### x

```ts
x: number
```

Defined in: [configs/modinfo.d.ts:436](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L436)

World X in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### y

```ts
y: number
```

Defined in: [configs/modinfo.d.ts:442](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L442)

World Y in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapTopBounds :id=modmaptopbounds

<p class="smt-member-path"><code>configs.ModMapTopBounds</code></p>
Defined in: [configs/modinfo.d.ts:450](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L450)

Vertical camera / travel bounds for the custom map.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### hard?

```ts
optional hard?: number
```

Defined in: [configs/modinfo.d.ts:456](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L456)

Hard top bound in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### soft?

```ts
optional soft?: number
```

Defined in: [configs/modinfo.d.ts:462](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L462)

Soft top bound in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapDepthLight :id=modmapdepthlight

<p class="smt-member-path"><code>configs.ModMapDepthLight</code></p>
Defined in: [configs/modinfo.d.ts:470](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L470)

Depth-based light sizing for the custom map.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### startY?

```ts
optional startY?: number
```

Defined in: [configs/modinfo.d.ts:476](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L476)

World Y where depth light scaling starts.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### endY?

```ts
optional endY?: number
```

Defined in: [configs/modinfo.d.ts:482](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L482)

World Y where depth light scaling ends.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### maxSize?

```ts
optional maxSize?: number
```

Defined in: [configs/modinfo.d.ts:488](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L488)

Maximum light size at the shallow end of the range.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### minSize?

```ts
optional minSize?: number
```

Defined in: [configs/modinfo.d.ts:494](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L494)

Minimum light size at the deep end of the range.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapParallax :id=modmapparallax

<p class="smt-member-path"><code>configs.ModMapParallax</code></p>
Defined in: [configs/modinfo.d.ts:502](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L502)

Parallax background tuning for the custom map.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### widthScale?

```ts
optional widthScale?: number
```

Defined in: [configs/modinfo.d.ts:508](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L508)

Horizontal scale of the parallax layer.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### offsetY?

```ts
optional offsetY?: number
```

Defined in: [configs/modinfo.d.ts:514](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L514)

Vertical offset of the parallax layer in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapColorMappingLayers :id=modmapcolormappinglayers

<p class="smt-member-path"><code>configs.ModMapColorMappingLayers</code></p>
Defined in: [configs/modinfo.d.ts:522](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L522)

Color-map cell that paints both background and foreground terrain.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### background?

```ts
optional background?: string
```

Defined in: [configs/modinfo.d.ts:528](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L528)

Background terrain id for this blueprint RGB.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### foreground?

```ts
optional foreground?: string
```

Defined in: [configs/modinfo.d.ts:534](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L534)

Foreground terrain id for this blueprint RGB.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapDefinition :id=modmapdefinition

<p class="smt-member-path"><code>configs.ModMapDefinition</code></p>
Defined in: [configs/modinfo.d.ts:549](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L549)

Custom map pack block in `modinfo.json`.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### blueprints

```ts
blueprints: ModMapBlueprints
```

Defined in: [configs/modinfo.d.ts:555](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L555)

Paths to blueprint images and map config under the mod root.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### width

```ts
width: number
```

Defined in: [configs/modinfo.d.ts:561](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L561)

Map width in cells.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### height

```ts
height: number
```

Defined in: [configs/modinfo.d.ts:567](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L567)

Map height in cells.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### spawn?

```ts
optional spawn?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:573](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L573)

Player spawn position in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### unstuck?

```ts
optional unstuck?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:579](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L579)

Unstuck / rescue position in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### deployment?

```ts
optional deployment?: string
```

Defined in: [configs/modinfo.d.ts:585](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L585)

Deployment mode for the map (for example `"skip"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### topBounds?

```ts
optional topBounds?: ModMapTopBounds
```

Defined in: [configs/modinfo.d.ts:591](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L591)

Vertical travel bounds at the top of the world.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### depthLight?

```ts
optional depthLight?: ModMapDepthLight
```

Defined in: [configs/modinfo.d.ts:597](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L597)

Depth-based light size curve.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### parallax?

```ts
optional parallax?: ModMapParallax
```

Defined in: [configs/modinfo.d.ts:603](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L603)

Parallax background tuning.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### colorMappings?

```ts
optional colorMappings?: Record<string, ModMapColorMapping>
```

Defined in: [configs/modinfo.d.ts:609](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L609)

Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModGameVersion :id=modgameversion

<p class="smt-member-path"><code>configs.ModGameVersion</code></p>
Defined in: [configs/modinfo.d.ts:617](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L617)

Compatible game version range for the mod.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### minimum?

```ts
optional minimum?: string
```

Defined in: [configs/modinfo.d.ts:623](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L623)

Lowest supported game version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### maximum?

```ts
optional maximum?: string
```

Defined in: [configs/modinfo.d.ts:629](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L629)

Highest supported game version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModInfo :id=modinfo

<p class="smt-member-path"><code>configs.ModInfo</code></p>
Defined in: [configs/modinfo.d.ts:645](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L645)

Sandkit mod manifest (`modinfo.json`).

Required for every mod folder. Minimal script mods need
[manifestVersion](#manifestversion), [id](#id-1), [name](#name), [version](#version),
[apiVersion](#apiversion), and [entry](#entry).

At least one capability is required: [entry](#entry), [workerEntry](#workerentry),
[configOverrides](#configoverrides), [textureOverrides](#textureoverrides-1), [provides](#provides), or
[map](#map). `configSchema` alone does not count.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### $schema?

```ts
optional $schema?: string
```

Defined in: [configs/modinfo.d.ts:650](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L650)

Optional JSON Schema URL for editors (for example VS Code).
Not read by the game loader.

##### manifestVersion

```ts
manifestVersion: 1
```

Defined in: [configs/modinfo.d.ts:656](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L656)

Manifest format version. Must be `1` for Sandkit `apiVersion` 1.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:662](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L662)

Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### name

```ts
name: string
```

Defined in: [configs/modinfo.d.ts:668](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L668)

Display name shown in the mod list and Workshop UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### version

```ts
version: string
```

Defined in: [configs/modinfo.d.ts:674](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L674)

Semver-style mod version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### apiVersion

```ts
apiVersion: 1
```

Defined in: [configs/modinfo.d.ts:680](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L680)

Sandkit host API version this mod targets. Must be `1`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### entry?

```ts
optional entry?: string
```

Defined in: [configs/modinfo.d.ts:688](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L688)

Main-thread script path relative to the mod root (for example `"main.js"`).
Omit for texture-only, map-only, or config-only mods that declare another
capability instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### workerEntry?

```ts
optional workerEntry?: string
```

Defined in: [configs/modinfo.d.ts:695](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L695)

Simulation-worker script path relative to the mod root.
Required when the mod registers worker hooks or uses worker-only APIs.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### patches?

```ts
optional patches?: string
```

Defined in: [configs/modinfo.d.ts:702](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L702)

Path to the patches file relative to the mod root (usually `"patches.json"`).
When omitted, a present `patches.json` may still auto-load per official docs.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:708](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L708)

Long description shown in the mod list / Workshop.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### author?

```ts
optional author?: string
```

Defined in: [configs/modinfo.d.ts:714](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L714)

Author display name.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### gameVersion?

```ts
optional gameVersion?: ModGameVersion
```

Defined in: [configs/modinfo.d.ts:720](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L720)

Inclusive game version range this mod claims to support.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### dependencies?

```ts
optional dependencies?: string[]
```

Defined in: [configs/modinfo.d.ts:726](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L726)

Other mod ids that should load with this mod.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### loadOrder?

```ts
optional loadOrder?: number
```

Defined in: [configs/modinfo.d.ts:732](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L732)

Relative load priority. Lower values load earlier; higher values load later.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### configSchema?

```ts
optional configSchema?: Record<string, ConfigSchemaEntry>
```

Defined in: [configs/modinfo.d.ts:739](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L739)

Player-facing settings schema. Keys are setting ids; values define type and UI.
Read at runtime with `api.settings.get`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### configOverrides?

```ts
optional configOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:745](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L745)

Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### shaderOverrides?

```ts
optional shaderOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:751](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L751)

Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### textureOverrides?

```ts
optional textureOverrides?: Record<string, string | TextureOverride>
```

Defined in: [configs/modinfo.d.ts:758](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L758)

Texture replacements keyed by vanilla texture id.
A string value is a path; an object adds spritesheet frame metadata.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### provides?

```ts
optional provides?: ModProvide[]
```

Defined in: [configs/modinfo.d.ts:764](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L764)

Optional content this mod publishes for others to consume.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### map?

```ts
optional map?: ModMapDefinition
```

Defined in: [configs/modinfo.d.ts:770](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L770)

Embedded custom map pack definition for this mod.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### BundlePatchRegex :id=bundlepatchregex

<p class="smt-member-path"><code>configs.BundlePatchRegex</code></p>
Defined in: [configs/patches.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L52)

Regex finder when the target is not a plain [BundlePatch.find](#find) string.

#### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

#### Properties

##### pattern

```ts
pattern: string
```

Defined in: [configs/patches.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L59)

JavaScript regex pattern source (without surrounding `/` delimiters).
Capture groups may be referenced from [BundlePatch.code](#code) as `$1`, `$2`, …

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### flags?

```ts
optional flags?: string
```

Defined in: [configs/patches.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L65)

Optional regex flags (for example `"g"` or `"m"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

***

### BundlePatch :id=bundlepatch

<p class="smt-member-path"><code>configs.BundlePatch</code></p>
Defined in: [configs/patches.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L107)

One entry in `patches.json`.

The file is an array of these objects. Prefer `expectedMatches` so a missed
or duplicated match fails loudly. When several patches must succeed together
(for example main + worker), set the same [atomicGroup](#atomicgroup) on each.

#### Example

**patches.json example**

```ts
[
  {
    "file": "js/bundle.js",
    "find": "const message = 'Hello';",
    "operation": "replace",
    "code": "const message = 'Hello from my mod';",
    "expectedMatches": 1
  },
  {
    "file": "js/simulation-worker.js",
    "regex": {
      "pattern": "const ([a-z]+) = false;"
    },
    "operation": "replace",
    "code": "const $1 = true;",
    "expectedMatches": 1
  },
  {
    "file": "js/bundle.js",
    "find": "doThing();",
    "operation": "wrap",
    "before": "if (enabled) { ",
    "after": " }",
    "expectedMatches": 1
  }
]
```

#### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

#### Properties

##### file

```ts
file: PatchTargetFile
```

Defined in: [configs/patches.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L113)

Compiled bundle to modify.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### find?

```ts
optional find?: string
```

Defined in: [configs/patches.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L120)

Exact source substring to locate in the bundle.
Mutually exclusive with [regex](#regex) in typical patches.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### code?

```ts
optional code?: string
```

Defined in: [configs/patches.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L127)

Replacement or inserted source text.
Official examples use `code`; some loaders also accept [replace](#replace).

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### replace?

```ts
optional replace?: string
```

Defined in: [configs/patches.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L133)

Alias of [code](#code) used by some patch loaders and workshop mods.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### operation?

```ts
optional operation?: PatchOperation
```

Defined in: [configs/patches.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L140)

How to apply the match. Defaults to replace-style behaviour when omitted
in common workshop patches.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### expectedMatches?

```ts
optional expectedMatches?: number | "any"
```

Defined in: [configs/patches.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L148)

How many times `find` / `regex` must match.
Use a number (often `1`) so the load fails on miss or over-match.
Some loaders accept `"any"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### regex?

```ts
optional regex?: BundlePatchRegex
```

Defined in: [configs/patches.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L154)

Regex-based locator instead of a literal [find](#find) string.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### before?

```ts
optional before?: string
```

Defined in: [configs/patches.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L160)

Text inserted before the match when [operation](#operation) is `"wrap"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### after?

```ts
optional after?: string
```

Defined in: [configs/patches.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L166)

Text inserted after the match when [operation](#operation) is `"wrap"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### id?

```ts
optional id?: string
```

Defined in: [configs/patches.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L172)

Optional stable id for logging and tooling.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### atomicGroup?

```ts
optional atomicGroup?: string
```

Defined in: [configs/patches.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L178)

Group id shared by patches that must all succeed or all fail together.
Use the same string on paired main (`js/bundle.js`) and worker
(`js/simulation-worker.js`) patches.

##### occurrence?

```ts
optional occurrence?: number | "all"
```

Defined in: [configs/patches.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L186)

Which match to rewrite when `find` / `regex` hits more than once.
`"all"` (default when omitted in the loader) or a 1-based index.
Must not exceed [expectedMatches](#expectedmatches) when both are numbers.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### description?

```ts
optional description?: string
```

Defined in: [configs/patches.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L190)

Human-readable note for maintainers. Not required by the official schema.

***

### BundlePatchesDocument :id=bundlepatchesdocument

<p class="smt-member-path"><code>configs.BundlePatchesDocument</code></p>
Defined in: [configs/patches.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L199)

Editor-friendly `patches.json` wrapper with an optional `$schema` URL.

The game loader expects a bare [BundlePatch](#bundlepatch) array. Prefer that array in
shipped mods. Use this object shape only when your editor needs inline `$schema`.

#### Properties

##### $schema?

```ts
optional $schema?: string
```

Defined in: [configs/patches.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L204)

Optional JSON Schema URL for editors (for example VS Code).
Not read by the game loader.

##### patches

```ts
patches: BundlePatch[]
```

Defined in: [configs/patches.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L208)

Ordered patch list (same as the bare-array game format).

***

### WorkshopJson :id=workshopjson

<p class="smt-member-path"><code>configs.WorkshopJson</code></p>
Defined in: [configs/workshop.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/workshop.d.ts#L21)

Links a local mod folder to its Steam Workshop item.

#### Example

**workshop.json**

```json
{
  "schemaVersion": 1,
  "publishedFileId": "1234567890"
}
```

#### Properties

##### schemaVersion

```ts
schemaVersion: 1
```

Defined in: [configs/workshop.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/workshop.d.ts#L23)

File format version. Must be `1`.

##### publishedFileId

```ts
publishedFileId: string
```

Defined in: [configs/workshop.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/workshop.d.ts#L25)

Steam Workshop published file id. Managed by the publisher.

## Type Aliases <!-- {docsify-ignore} -->

### ConfigSchemaEntry :id=configschemaentry

```ts
configs.ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice
```

Defined in: [configs/modinfo.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L307)

One entry under `modinfo.json` `configSchema`.

Keys of `configSchema` are setting ids read via `api.settings.get`.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapColorMapping :id=modmapcolormapping

```ts
configs.ModMapColorMapping = string | ModMapColorMappingLayers
```

Defined in: [configs/modinfo.d.ts:542](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L542)

One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### PatchTargetFile :id=patchtargetfile

```ts
configs.PatchTargetFile = "js/bundle.js" | "js/simulation-worker.js" | "js/manager-worker.js" | "js/utility-worker.js" | string & object
```

Defined in: [configs/patches.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L25)

Known compiled bundle paths the loader can patch.

| Value | Role |
| --- | --- |
| `js/bundle.js` | Main renderer |
| `js/manager-worker.js` | Manager worker |
| `js/simulation-worker.js` | Simulation workers |
| `js/utility-worker.js` | Utility worker |

#### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

***

### PatchOperation :id=patchoperation

```ts
configs.PatchOperation = "replace" | "remove" | "insertBefore" | "insertAfter" | "wrap"
```

Defined in: [configs/patches.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L45)

Supported patch operations.

| Value | Behaviour |
| --- | --- |
| `replace` | Replace the matched text with [BundlePatch.code](#code) / [BundlePatch.replace](#replace) |
| `remove` | Delete the matched text |
| `insertBefore` | Insert [BundlePatch.code](#code) before the match |
| `insertAfter` | Insert [BundlePatch.code](#code) after the match |
| `wrap` | Surround the match with [BundlePatch.before](#before) and [BundlePatch.after](#after) |

#### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

***

### BundlePatchesFile :id=bundlepatchesfile

```ts
configs.BundlePatchesFile = BundlePatch[] | BundlePatchesDocument
```

Defined in: [configs/patches.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L217)

Root shape of `patches.json`: a bare [BundlePatch](#bundlepatch) array (game format),
or a [BundlePatchesDocument](#bundlepatchesdocument) object when the file includes `$schema`.

#### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)
