# configs

Sandkit mod file schemas: `modinfo.json` and `patches.json`.

These are not runtime `sandkit` properties. Import from
`@sandustry-modding/types/configs` when typing mod folder config files.

JSON Schema (for editors / validators): [JSON Schema](../schemas.md).

## See

[Official docs](https://sandustry.com/sandkit.html#mod-files-heading)

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

##### options

```ts
options: readonly ConfigSchemaChoiceOption[]
```

Defined in: [configs/modinfo.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L285)

Allowed choices for this setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### TextureOverride :id=textureoverride

<p class="smt-member-path"><code>configs.TextureOverride</code></p>

Defined in: [configs/modinfo.d.ts:305](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L305)

Animated (or static) texture replacement for a vanilla asset id.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### path

```ts
path: string
```

Defined in: [configs/modinfo.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L311)

Path to the replacement image, relative to the mod root.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### frameWidth?

```ts
optional frameWidth?: number
```

Defined in: [configs/modinfo.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L317)

Width in pixels of one animation frame.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### frames?

```ts
optional frames?: number
```

Defined in: [configs/modinfo.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L323)

Number of frames in the spritesheet.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### intervalMs?

```ts
optional intervalMs?: number
```

Defined in: [configs/modinfo.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L329)

Milliseconds between animation frames.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModProvide :id=modprovide

<p class="smt-member-path"><code>configs.ModProvide</code></p>

Defined in: [configs/modinfo.d.ts:337](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L337)

Optional content pack exposed by this mod for other mods or the game to consume.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### kind

```ts
kind: string
```

Defined in: [configs/modinfo.d.ts:343](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L343)

Kind of provided content (for example `"structureTextures"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L349)

Id of this provide entry within its kind.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### textureOverrides?

```ts
optional textureOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:355](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L355)

Texture paths keyed by the vanilla or structure texture id they replace.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapBlueprints :id=modmapblueprints

<p class="smt-member-path"><code>configs.ModMapBlueprints</code></p>

Defined in: [configs/modinfo.d.ts:365](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L365)

Blueprint image paths for a custom map pack.

Paths are relative to the mod root.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### terrain?

```ts
optional terrain?: string
```

Defined in: [configs/modinfo.d.ts:371](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L371)

Terrain color map image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### lights?

```ts
optional lights?: string
```

Defined in: [configs/modinfo.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L377)

Lights layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### sensors?

```ts
optional sensors?: string
```

Defined in: [configs/modinfo.d.ts:383](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L383)

Sensors layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### authorization?

```ts
optional authorization?: string
```

Defined in: [configs/modinfo.d.ts:389](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L389)

Authorization zones image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### wall?

```ts
optional wall?: string
```

Defined in: [configs/modinfo.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L395)

Wall layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### lightsMeta?

```ts
optional lightsMeta?: string
```

Defined in: [configs/modinfo.d.ts:401](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L401)

Lights metadata image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### decor?

```ts
optional decor?: string
```

Defined in: [configs/modinfo.d.ts:407](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L407)

Decor layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### config?

```ts
optional config?: string
```

Defined in: [configs/modinfo.d.ts:413](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L413)

Map config JSON path.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapPoint :id=modmappoint

<p class="smt-member-path"><code>configs.ModMapPoint</code></p>

Defined in: [configs/modinfo.d.ts:421](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L421)

World-pixel spawn or unstuck point.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### x

```ts
x: number
```

Defined in: [configs/modinfo.d.ts:427](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L427)

World X in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### y

```ts
y: number
```

Defined in: [configs/modinfo.d.ts:433](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L433)

World Y in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapTopBounds :id=modmaptopbounds

<p class="smt-member-path"><code>configs.ModMapTopBounds</code></p>

Defined in: [configs/modinfo.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L441)

Vertical camera / travel bounds for the custom map.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### hard?

```ts
optional hard?: number
```

Defined in: [configs/modinfo.d.ts:447](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L447)

Hard top bound in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### soft?

```ts
optional soft?: number
```

Defined in: [configs/modinfo.d.ts:453](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L453)

Soft top bound in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapDepthLight :id=modmapdepthlight

<p class="smt-member-path"><code>configs.ModMapDepthLight</code></p>

Defined in: [configs/modinfo.d.ts:461](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L461)

Depth-based light sizing for the custom map.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### startY?

```ts
optional startY?: number
```

Defined in: [configs/modinfo.d.ts:467](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L467)

World Y where depth light scaling starts.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### endY?

```ts
optional endY?: number
```

Defined in: [configs/modinfo.d.ts:473](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L473)

World Y where depth light scaling ends.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### maxSize?

```ts
optional maxSize?: number
```

Defined in: [configs/modinfo.d.ts:479](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L479)

Maximum light size at the shallow end of the range.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### minSize?

```ts
optional minSize?: number
```

Defined in: [configs/modinfo.d.ts:485](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L485)

Minimum light size at the deep end of the range.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapParallax :id=modmapparallax

<p class="smt-member-path"><code>configs.ModMapParallax</code></p>

Defined in: [configs/modinfo.d.ts:493](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L493)

Parallax background tuning for the custom map.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### widthScale?

```ts
optional widthScale?: number
```

Defined in: [configs/modinfo.d.ts:499](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L499)

Horizontal scale of the parallax layer.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### offsetY?

```ts
optional offsetY?: number
```

Defined in: [configs/modinfo.d.ts:505](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L505)

Vertical offset of the parallax layer in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapColorMappingLayers :id=modmapcolormappinglayers

<p class="smt-member-path"><code>configs.ModMapColorMappingLayers</code></p>

Defined in: [configs/modinfo.d.ts:513](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L513)

Color-map cell that paints both background and foreground terrain.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### background?

```ts
optional background?: string
```

Defined in: [configs/modinfo.d.ts:519](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L519)

Background terrain id for this blueprint RGB.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### foreground?

```ts
optional foreground?: string
```

Defined in: [configs/modinfo.d.ts:525](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L525)

Foreground terrain id for this blueprint RGB.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapDefinition :id=modmapdefinition

<p class="smt-member-path"><code>configs.ModMapDefinition</code></p>

Defined in: [configs/modinfo.d.ts:540](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L540)

Custom map pack block in `modinfo.json`.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### blueprints

```ts
blueprints: ModMapBlueprints
```

Defined in: [configs/modinfo.d.ts:546](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L546)

Paths to blueprint images and map config under the mod root.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### width

```ts
width: number
```

Defined in: [configs/modinfo.d.ts:552](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L552)

Map width in cells.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### height

```ts
height: number
```

Defined in: [configs/modinfo.d.ts:558](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L558)

Map height in cells.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### spawn?

```ts
optional spawn?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:564](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L564)

Player spawn position in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### unstuck?

```ts
optional unstuck?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:570](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L570)

Unstuck / rescue position in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### deployment?

```ts
optional deployment?: string
```

Defined in: [configs/modinfo.d.ts:576](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L576)

Deployment mode for the map (for example `"skip"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### topBounds?

```ts
optional topBounds?: ModMapTopBounds
```

Defined in: [configs/modinfo.d.ts:582](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L582)

Vertical travel bounds at the top of the world.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### depthLight?

```ts
optional depthLight?: ModMapDepthLight
```

Defined in: [configs/modinfo.d.ts:588](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L588)

Depth-based light size curve.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### parallax?

```ts
optional parallax?: ModMapParallax
```

Defined in: [configs/modinfo.d.ts:594](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L594)

Parallax background tuning.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### colorMappings?

```ts
optional colorMappings?: Record<string, ModMapColorMapping>
```

Defined in: [configs/modinfo.d.ts:600](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L600)

Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModGameVersion :id=modgameversion

<p class="smt-member-path"><code>configs.ModGameVersion</code></p>

Defined in: [configs/modinfo.d.ts:608](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L608)

Compatible game version range for the mod.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### minimum?

```ts
optional minimum?: string
```

Defined in: [configs/modinfo.d.ts:614](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L614)

Lowest supported game version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### maximum?

```ts
optional maximum?: string
```

Defined in: [configs/modinfo.d.ts:620](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L620)

Highest supported game version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModInfo :id=modinfo

<p class="smt-member-path"><code>configs.ModInfo</code></p>

Defined in: [configs/modinfo.d.ts:632](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L632)

Sandkit mod manifest (`modinfo.json`).

Required for every mod folder. Minimal mods only need
[manifestVersion](#manifestversion), [id](#id-1), [name](#name), [version](#version),
[apiVersion](#apiversion), and [entry](#entry).

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

#### Properties

##### manifestVersion

```ts
manifestVersion: 1
```

Defined in: [configs/modinfo.d.ts:638](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L638)

Manifest format version. Must be `1` for Sandkit `apiVersion` 1.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:644](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L644)

Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### name

```ts
name: string
```

Defined in: [configs/modinfo.d.ts:650](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L650)

Display name shown in the mod list and Workshop UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### version

```ts
version: string
```

Defined in: [configs/modinfo.d.ts:656](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L656)

Semver-style mod version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### apiVersion

```ts
apiVersion: 1
```

Defined in: [configs/modinfo.d.ts:662](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L662)

Sandkit host API version this mod targets. Must be `1`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### entry

```ts
entry: string
```

Defined in: [configs/modinfo.d.ts:668](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L668)

Main-thread script path relative to the mod root (for example `"main.js"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### workerEntry?

```ts
optional workerEntry?: string
```

Defined in: [configs/modinfo.d.ts:675](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L675)

Simulation-worker script path relative to the mod root.
Required when the mod registers worker hooks or uses worker-only APIs.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### patches?

```ts
optional patches?: string
```

Defined in: [configs/modinfo.d.ts:682](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L682)

Path to the patches file relative to the mod root (usually `"patches.json"`).
When omitted, a present `patches.json` may still auto-load per official docs.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:688](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L688)

Long description shown in the mod list / Workshop.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### author?

```ts
optional author?: string
```

Defined in: [configs/modinfo.d.ts:694](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L694)

Author display name.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### gameVersion?

```ts
optional gameVersion?: ModGameVersion
```

Defined in: [configs/modinfo.d.ts:700](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L700)

Inclusive game version range this mod claims to support.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### dependencies?

```ts
optional dependencies?: string[]
```

Defined in: [configs/modinfo.d.ts:706](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L706)

Other mod ids that should load with this mod.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### loadOrder?

```ts
optional loadOrder?: number
```

Defined in: [configs/modinfo.d.ts:712](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L712)

Relative load priority. Lower values load earlier; higher values load later.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### configSchema?

```ts
optional configSchema?: Record<string, ConfigSchemaEntry>
```

Defined in: [configs/modinfo.d.ts:719](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L719)

Player-facing settings schema. Keys are setting ids; values define type and UI.
Read at runtime with `api.settings.get`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### configOverrides?

```ts
optional configOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:725](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L725)

Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### shaderOverrides?

```ts
optional shaderOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:731](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L731)

Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### textureOverrides?

```ts
optional textureOverrides?: Record<string, string | TextureOverride>
```

Defined in: [configs/modinfo.d.ts:738](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L738)

Texture replacements keyed by vanilla texture id.
A string value is a path; an object adds spritesheet frame metadata.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### provides?

```ts
optional provides?: ModProvide[]
```

Defined in: [configs/modinfo.d.ts:744](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L744)

Optional content this mod publishes for others to consume.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### map?

```ts
optional map?: ModMapDefinition
```

Defined in: [configs/modinfo.d.ts:750](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L750)

Embedded custom map pack definition for this mod.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### BundlePatchRegex :id=bundlepatchregex

<p class="smt-member-path"><code>configs.BundlePatchRegex</code></p>

Defined in: [configs/patches.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L57)

Regex finder when the target is not a plain [BundlePatch.find](#find) string.

#### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

#### Properties

##### pattern

```ts
pattern: string
```

Defined in: [configs/patches.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L64)

JavaScript regex pattern source (without surrounding `/` delimiters).
Capture groups may be referenced from [BundlePatch.code](#code) as `$1`, `$2`, …

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### flags?

```ts
optional flags?: string
```

Defined in: [configs/patches.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L70)

Optional regex flags (for example `"g"` or `"m"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

***

### BundlePatch :id=bundlepatch

<p class="smt-member-path"><code>configs.BundlePatch</code></p>

Defined in: [configs/patches.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L112)

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

Defined in: [configs/patches.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L118)

Compiled bundle to modify.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### find?

```ts
optional find?: string
```

Defined in: [configs/patches.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L125)

Exact source substring to locate in the bundle.
Mutually exclusive with [regex](#regex) in typical patches.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### code?

```ts
optional code?: string
```

Defined in: [configs/patches.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L132)

Replacement or inserted source text.
Official examples use `code`; some loaders also accept [replace](#replace).

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### replace?

```ts
optional replace?: string
```

Defined in: [configs/patches.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L138)

Alias of [code](#code) used by some patch loaders and workshop mods.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### operation?

```ts
optional operation?: PatchOperation
```

Defined in: [configs/patches.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L145)

How to apply the match. Defaults to replace-style behaviour when omitted
in common workshop patches.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### expectedMatches?

```ts
optional expectedMatches?: number | "any"
```

Defined in: [configs/patches.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L153)

How many times `find` / `regex` must match.
Use a number (often `1`) so the load fails on miss or over-match.
Some loaders accept `"any"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### regex?

```ts
optional regex?: BundlePatchRegex
```

Defined in: [configs/patches.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L159)

Regex-based locator instead of a literal [find](#find) string.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### before?

```ts
optional before?: string
```

Defined in: [configs/patches.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L165)

Text inserted before the match when [operation](#operation) is `"wrap"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### after?

```ts
optional after?: string
```

Defined in: [configs/patches.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L171)

Text inserted after the match when [operation](#operation) is `"wrap"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### id?

```ts
optional id?: string
```

Defined in: [configs/patches.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L177)

Optional stable id for logging and tooling.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### atomicGroup?

```ts
optional atomicGroup?: string
```

Defined in: [configs/patches.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L183)

Group id shared by patches that must all succeed or all fail together.
Use the same string on paired main (`js/bundle.js`) and worker
(`js/simulation-worker.js`) patches.

##### description?

```ts
optional description?: string
```

Defined in: [configs/patches.d.ts:187](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L187)

Human-readable note for maintainers. Not required by the official schema.

## Type Aliases <!-- {docsify-ignore} -->

### ConfigSchemaEntry :id=configschemaentry

<p class="smt-member-path"><code>configs.ConfigSchemaEntry</code></p>

```ts
ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice
```

Defined in: [configs/modinfo.d.ts:295](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L295)

One entry under `modinfo.json` `configSchema`.

Keys of `configSchema` are setting ids read via `api.settings.get`.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### ModMapColorMapping :id=modmapcolormapping

<p class="smt-member-path"><code>configs.ModMapColorMapping</code></p>

```ts
ModMapColorMapping = string | ModMapColorMappingLayers
```

Defined in: [configs/modinfo.d.ts:533](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L533)

One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.

#### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

### PatchTargetFile :id=patchtargetfile

<p class="smt-member-path"><code>configs.PatchTargetFile</code></p>

```ts
PatchTargetFile = "js/bundle.js" | "js/simulation-worker.js" | "js/manager-worker.js" | "js/utility-worker.js" | string & object
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

<p class="smt-member-path"><code>configs.PatchOperation</code></p>

```ts
PatchOperation = "replace" | "remove" | "insertBefore" | "insertAfter" | "wrap"
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

<p class="smt-member-path"><code>configs.BundlePatchesFile</code></p>

```ts
BundlePatchesFile = BundlePatch[]
```

Defined in: [configs/patches.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L195)

Root shape of `patches.json`: an ordered list of [BundlePatch](#bundlepatch) entries.

#### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)
