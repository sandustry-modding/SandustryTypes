# configs

Sandkit mod file schemas: `modinfo.json` and `patches.json`.

These are not runtime `sandkit` properties. Import from
`@sandustry-modding/types/configs` when typing mod folder config files.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Mod file structure

## Interfaces <!-- {docsify-ignore} -->

### ConfigSchemaNumber :id=configschemanumber

<p class="smt-member-path"><code>configs.ConfigSchemaNumber</code></p>

Defined in: configs/modinfo.d.ts:12

Number setting in `modinfo.json` `configSchema`.

#### Properties

##### type

```ts
type: "number"
```

Defined in: configs/modinfo.d.ts:18

Discriminator. Must be `"number"`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### default

```ts
default: number
```

Defined in: configs/modinfo.d.ts:24

Value used when the player has not changed the setting.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### min?

```ts
optional min?: number
```

Defined in: configs/modinfo.d.ts:30

Inclusive lower bound for the setting.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### max?

```ts
optional max?: number
```

Defined in: configs/modinfo.d.ts:36

Inclusive upper bound for the setting.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### step?

```ts
optional step?: number
```

Defined in: configs/modinfo.d.ts:42

UI step size for the number control.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### label?

```ts
optional label?: string
```

Defined in: configs/modinfo.d.ts:48

Plain-text label shown in the settings UI.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: configs/modinfo.d.ts:54

i18n key for the settings label (preferred over [label](#label) when both exist).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### description?

```ts
optional description?: string
```

Defined in: configs/modinfo.d.ts:60

Plain-text help text for the setting.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: configs/modinfo.d.ts:66

i18n key for the setting help text.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

***

### ConfigSchemaBoolean :id=configschemaboolean

<p class="smt-member-path"><code>configs.ConfigSchemaBoolean</code></p>

Defined in: configs/modinfo.d.ts:70

Boolean setting in `modinfo.json` `configSchema`.

#### Properties

##### type

```ts
type: "boolean"
```

Defined in: configs/modinfo.d.ts:76

Discriminator. Must be `"boolean"`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### default

```ts
default: boolean
```

Defined in: configs/modinfo.d.ts:82

Value used when the player has not changed the setting.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### label?

```ts
optional label?: string
```

Defined in: configs/modinfo.d.ts:88

Plain-text label shown in the settings UI.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: configs/modinfo.d.ts:94

i18n key for the settings label.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### description?

```ts
optional description?: string
```

Defined in: configs/modinfo.d.ts:100

Plain-text help text for the setting.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: configs/modinfo.d.ts:106

i18n key for the setting help text.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

***

### ConfigSchemaChoiceOption :id=configschemachoiceoption

<p class="smt-member-path"><code>configs.ConfigSchemaChoiceOption</code></p>

Defined in: configs/modinfo.d.ts:110

One option inside a [ConfigSchemaChoice](#configschemachoice).

#### Properties

##### value

```ts
value: string
```

Defined in: configs/modinfo.d.ts:116

Stored value written when the player picks this option.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### label?

```ts
optional label?: string
```

Defined in: configs/modinfo.d.ts:122

Plain-text label for the option.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: configs/modinfo.d.ts:128

i18n key for the option label.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

***

### ConfigSchemaChoice :id=configschemachoice

<p class="smt-member-path"><code>configs.ConfigSchemaChoice</code></p>

Defined in: configs/modinfo.d.ts:132

Choice setting in `modinfo.json` `configSchema`.

#### Properties

##### type

```ts
type: "choice"
```

Defined in: configs/modinfo.d.ts:138

Discriminator. Must be `"choice"`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### default

```ts
default: string
```

Defined in: configs/modinfo.d.ts:144

Default option [ConfigSchemaChoiceOption.value](#value).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### label?

```ts
optional label?: string
```

Defined in: configs/modinfo.d.ts:150

Plain-text label shown in the settings UI.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### labelKey?

```ts
optional labelKey?: string
```

Defined in: configs/modinfo.d.ts:156

i18n key for the settings label.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### options

```ts
options: readonly ConfigSchemaChoiceOption[]
```

Defined in: configs/modinfo.d.ts:162

Allowed choices for this setting.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

***

### TextureOverride :id=textureoverride

<p class="smt-member-path"><code>configs.TextureOverride</code></p>

Defined in: configs/modinfo.d.ts:182

Animated (or static) texture replacement for a vanilla asset id.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`

#### Properties

##### path

```ts
path: string
```

Defined in: configs/modinfo.d.ts:188

Path to the replacement image, relative to the mod root.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`

##### frameWidth?

```ts
optional frameWidth?: number
```

Defined in: configs/modinfo.d.ts:194

Width in pixels of one animation frame.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`

##### frames?

```ts
optional frames?: number
```

Defined in: configs/modinfo.d.ts:200

Number of frames in the spritesheet.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`

##### intervalMs?

```ts
optional intervalMs?: number
```

Defined in: configs/modinfo.d.ts:206

Milliseconds between animation frames.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`

***

### ModProvide :id=modprovide

<p class="smt-member-path"><code>configs.ModProvide</code></p>

Defined in: configs/modinfo.d.ts:214

Optional content pack exposed by this mod for other mods or the game to consume.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`

#### Properties

##### kind

```ts
kind: string
```

Defined in: configs/modinfo.d.ts:220

Kind of provided content (for example `"structureTextures"`).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`

##### id

```ts
id: string
```

Defined in: configs/modinfo.d.ts:226

Id of this provide entry within its kind.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`

##### textureOverrides?

```ts
optional textureOverrides?: Record<string, string>
```

Defined in: configs/modinfo.d.ts:232

Texture paths keyed by the vanilla or structure texture id they replace.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`

***

### ModMapBlueprints :id=modmapblueprints

<p class="smt-member-path"><code>configs.ModMapBlueprints</code></p>

Defined in: configs/modinfo.d.ts:242

Blueprint image paths for a custom map pack.

Paths are relative to the mod root.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

#### Properties

##### terrain?

```ts
optional terrain?: string
```

Defined in: configs/modinfo.d.ts:248

Terrain color map image.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### lights?

```ts
optional lights?: string
```

Defined in: configs/modinfo.d.ts:254

Lights layout image.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### sensors?

```ts
optional sensors?: string
```

Defined in: configs/modinfo.d.ts:260

Sensors layout image.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### authorization?

```ts
optional authorization?: string
```

Defined in: configs/modinfo.d.ts:266

Authorization zones image.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### wall?

```ts
optional wall?: string
```

Defined in: configs/modinfo.d.ts:272

Wall layout image.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### lightsMeta?

```ts
optional lightsMeta?: string
```

Defined in: configs/modinfo.d.ts:278

Lights metadata image.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### decor?

```ts
optional decor?: string
```

Defined in: configs/modinfo.d.ts:284

Decor layout image.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### config?

```ts
optional config?: string
```

Defined in: configs/modinfo.d.ts:290

Map config JSON path.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

***

### ModMapPoint :id=modmappoint

<p class="smt-member-path"><code>configs.ModMapPoint</code></p>

Defined in: configs/modinfo.d.ts:298

World-pixel spawn or unstuck point.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

#### Properties

##### x

```ts
x: number
```

Defined in: configs/modinfo.d.ts:304

World X in pixels.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

##### y

```ts
y: number
```

Defined in: configs/modinfo.d.ts:310

World Y in pixels.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

***

### ModMapTopBounds :id=modmaptopbounds

<p class="smt-member-path"><code>configs.ModMapTopBounds</code></p>

Defined in: configs/modinfo.d.ts:318

Vertical camera / travel bounds for the custom map.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`

#### Properties

##### hard?

```ts
optional hard?: number
```

Defined in: configs/modinfo.d.ts:324

Hard top bound in world pixels.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`

##### soft?

```ts
optional soft?: number
```

Defined in: configs/modinfo.d.ts:330

Soft top bound in world pixels.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`

***

### ModMapDepthLight :id=modmapdepthlight

<p class="smt-member-path"><code>configs.ModMapDepthLight</code></p>

Defined in: configs/modinfo.d.ts:338

Depth-based light sizing for the custom map.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`

#### Properties

##### startY?

```ts
optional startY?: number
```

Defined in: configs/modinfo.d.ts:344

World Y where depth light scaling starts.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`

##### endY?

```ts
optional endY?: number
```

Defined in: configs/modinfo.d.ts:350

World Y where depth light scaling ends.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`

##### maxSize?

```ts
optional maxSize?: number
```

Defined in: configs/modinfo.d.ts:356

Maximum light size at the shallow end of the range.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`

##### minSize?

```ts
optional minSize?: number
```

Defined in: configs/modinfo.d.ts:362

Minimum light size at the deep end of the range.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`

***

### ModMapParallax :id=modmapparallax

<p class="smt-member-path"><code>configs.ModMapParallax</code></p>

Defined in: configs/modinfo.d.ts:370

Parallax background tuning for the custom map.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`

#### Properties

##### widthScale?

```ts
optional widthScale?: number
```

Defined in: configs/modinfo.d.ts:376

Horizontal scale of the parallax layer.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`

##### offsetY?

```ts
optional offsetY?: number
```

Defined in: configs/modinfo.d.ts:382

Vertical offset of the parallax layer in pixels.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`

***

### ModMapColorMappingLayers :id=modmapcolormappinglayers

<p class="smt-member-path"><code>configs.ModMapColorMappingLayers</code></p>

Defined in: configs/modinfo.d.ts:390

Color-map cell that paints both background and foreground terrain.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`

#### Properties

##### background?

```ts
optional background?: string
```

Defined in: configs/modinfo.d.ts:396

Background terrain id for this blueprint RGB.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`

##### foreground?

```ts
optional foreground?: string
```

Defined in: configs/modinfo.d.ts:402

Foreground terrain id for this blueprint RGB.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`

***

### ModMapDefinition :id=modmapdefinition

<p class="smt-member-path"><code>configs.ModMapDefinition</code></p>

Defined in: configs/modinfo.d.ts:417

Custom map pack block in `modinfo.json`.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

#### Properties

##### blueprints

```ts
blueprints: ModMapBlueprints
```

Defined in: configs/modinfo.d.ts:423

Paths to blueprint images and map config under the mod root.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`

##### width

```ts
width: number
```

Defined in: configs/modinfo.d.ts:429

Map width in cells.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

##### height

```ts
height: number
```

Defined in: configs/modinfo.d.ts:435

Map height in cells.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

##### spawn?

```ts
optional spawn?: ModMapPoint
```

Defined in: configs/modinfo.d.ts:441

Player spawn position in world pixels.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

##### unstuck?

```ts
optional unstuck?: ModMapPoint
```

Defined in: configs/modinfo.d.ts:447

Unstuck / rescue position in world pixels.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

##### deployment?

```ts
optional deployment?: string
```

Defined in: configs/modinfo.d.ts:453

Deployment mode for the map (for example `"skip"`).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

##### topBounds?

```ts
optional topBounds?: ModMapTopBounds
```

Defined in: configs/modinfo.d.ts:459

Vertical travel bounds at the top of the world.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`

##### depthLight?

```ts
optional depthLight?: ModMapDepthLight
```

Defined in: configs/modinfo.d.ts:465

Depth-based light size curve.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`

##### parallax?

```ts
optional parallax?: ModMapParallax
```

Defined in: configs/modinfo.d.ts:471

Parallax background tuning.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`

##### colorMappings?

```ts
optional colorMappings?: Record<string, ModMapColorMapping>
```

Defined in: configs/modinfo.d.ts:477

Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`

***

### ModGameVersion :id=modgameversion

<p class="smt-member-path"><code>configs.ModGameVersion</code></p>

Defined in: configs/modinfo.d.ts:485

Compatible game version range for the mod.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`

#### Properties

##### minimum?

```ts
optional minimum?: string
```

Defined in: configs/modinfo.d.ts:491

Lowest supported game version string.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`

##### maximum?

```ts
optional maximum?: string
```

Defined in: configs/modinfo.d.ts:497

Highest supported game version string.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`

***

### ModInfo :id=modinfo

<p class="smt-member-path"><code>configs.ModInfo</code></p>

Defined in: configs/modinfo.d.ts:509

Sandkit mod manifest (`modinfo.json`).

Required for every mod folder. Minimal mods only need
[manifestVersion](#manifestversion), [id](#id-1), [name](#name), [version](#version),
[apiVersion](#apiversion), and [entry](#entry).

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

#### Properties

##### manifestVersion

```ts
manifestVersion: 1
```

Defined in: configs/modinfo.d.ts:515

Manifest format version. Must be `1` for Sandkit `apiVersion` 1.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### id

```ts
id: string
```

Defined in: configs/modinfo.d.ts:521

Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### name

```ts
name: string
```

Defined in: configs/modinfo.d.ts:527

Display name shown in the mod list and Workshop UI.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### version

```ts
version: string
```

Defined in: configs/modinfo.d.ts:533

Semver-style mod version string.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### apiVersion

```ts
apiVersion: 1
```

Defined in: configs/modinfo.d.ts:539

Sandkit host API version this mod targets. Must be `1`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### entry

```ts
entry: string
```

Defined in: configs/modinfo.d.ts:545

Main-thread script path relative to the mod root (for example `"main.js"`).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### workerEntry?

```ts
optional workerEntry?: string
```

Defined in: configs/modinfo.d.ts:552

Simulation-worker script path relative to the mod root.
Required when the mod registers worker hooks or uses worker-only APIs.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### patches?

```ts
optional patches?: string
```

Defined in: configs/modinfo.d.ts:559

Path to the patches file relative to the mod root (usually `"patches.json"`).
When omitted, a present `patches.json` may still auto-load per official docs.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### description?

```ts
optional description?: string
```

Defined in: configs/modinfo.d.ts:565

Long description shown in the mod list / Workshop.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### author?

```ts
optional author?: string
```

Defined in: configs/modinfo.d.ts:571

Author display name.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### gameVersion?

```ts
optional gameVersion?: ModGameVersion
```

Defined in: configs/modinfo.d.ts:577

Inclusive game version range this mod claims to support.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`

##### dependencies?

```ts
optional dependencies?: string[]
```

Defined in: configs/modinfo.d.ts:583

Other mod ids that should load with this mod.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### loadOrder?

```ts
optional loadOrder?: number
```

Defined in: configs/modinfo.d.ts:589

Relative load priority. Lower values load earlier; higher values load later.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest

##### configSchema?

```ts
optional configSchema?: Record<string, ConfigSchemaEntry>
```

Defined in: configs/modinfo.d.ts:596

Player-facing settings schema. Keys are setting ids; values define type and UI.
Read at runtime with `api.settings.get`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

##### configOverrides?

```ts
optional configOverrides?: Record<string, string>
```

Defined in: configs/modinfo.d.ts:602

Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configOverrides`

##### shaderOverrides?

```ts
optional shaderOverrides?: Record<string, string>
```

Defined in: configs/modinfo.d.ts:608

Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `shaderOverrides`

##### textureOverrides?

```ts
optional textureOverrides?: Record<string, string | TextureOverride>
```

Defined in: configs/modinfo.d.ts:615

Texture replacements keyed by vanilla texture id.
A string value is a path; an object adds spritesheet frame metadata.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`

##### provides?

```ts
optional provides?: ModProvide[]
```

Defined in: configs/modinfo.d.ts:621

Optional content this mod publishes for others to consume.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`

##### map?

```ts
optional map?: ModMapDefinition
```

Defined in: configs/modinfo.d.ts:627

Embedded custom map pack definition for this mod.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`

***

### BundlePatchRegex :id=bundlepatchregex

<p class="smt-member-path"><code>configs.BundlePatchRegex</code></p>

Defined in: configs/patches.d.ts:56

Regex finder when the target is not a plain [BundlePatch.find](#find) string.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

#### Properties

##### pattern

```ts
pattern: string
```

Defined in: configs/patches.d.ts:63

JavaScript regex pattern source (without surrounding `/` delimiters).
Capture groups may be referenced from [BundlePatch.code](#code) as `$1`, `$2`, …

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### flags?

```ts
optional flags?: string
```

Defined in: configs/patches.d.ts:69

Optional regex flags (for example `"g"` or `"m"`).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

***

### BundlePatch :id=bundlepatch

<p class="smt-member-path"><code>configs.BundlePatch</code></p>

Defined in: configs/patches.d.ts:81

One entry in `patches.json`.

The file is an array of these objects. Prefer `expectedMatches` so a missed
or duplicated match fails loudly. When several patches must succeed together
(for example main + worker), set the same [atomicGroup](#atomicgroup) on each.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

#### Properties

##### file

```ts
file: PatchTargetFile
```

Defined in: configs/patches.d.ts:87

Compiled bundle to modify.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### find?

```ts
optional find?: string
```

Defined in: configs/patches.d.ts:94

Exact source substring to locate in the bundle.
Mutually exclusive with [regex](#regex) in typical patches.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### code?

```ts
optional code?: string
```

Defined in: configs/patches.d.ts:101

Replacement or inserted source text.
Official examples use `code`; some loaders also accept [replace](#replace).

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### replace?

```ts
optional replace?: string
```

Defined in: configs/patches.d.ts:107

Alias of [code](#code) used by some patch loaders and workshop mods.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### operation?

```ts
optional operation?: PatchOperation
```

Defined in: configs/patches.d.ts:114

How to apply the match. Defaults to replace-style behaviour when omitted
in common workshop patches.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### expectedMatches?

```ts
optional expectedMatches?: number | "any"
```

Defined in: configs/patches.d.ts:122

How many times `find` / `regex` must match.
Use a number (often `1`) so the load fails on miss or over-match.
Some loaders accept `"any"`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### regex?

```ts
optional regex?: BundlePatchRegex
```

Defined in: configs/patches.d.ts:128

Regex-based locator instead of a literal [find](#find) string.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### before?

```ts
optional before?: string
```

Defined in: configs/patches.d.ts:134

Text inserted before the match when [operation](#operation) is `"wrap"`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### after?

```ts
optional after?: string
```

Defined in: configs/patches.d.ts:140

Text inserted after the match when [operation](#operation) is `"wrap"`.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### id?

```ts
optional id?: string
```

Defined in: configs/patches.d.ts:146

Optional stable id for logging and tooling.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

##### atomicGroup?

```ts
optional atomicGroup?: string
```

Defined in: configs/patches.d.ts:152

Group id shared by patches that must all succeed or all fail together.
Use the same string on paired main (`js/bundle.js`) and worker
(`js/simulation-worker.js`) patches.

##### description?

```ts
optional description?: string
```

Defined in: configs/patches.d.ts:156

Human-readable note for maintainers. Not required by the official schema.

## Type Aliases <!-- {docsify-ignore} -->

### ConfigSchemaEntry :id=configschemaentry

<p class="smt-member-path"><code>configs.ConfigSchemaEntry</code></p>

```ts
ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice
```

Defined in: configs/modinfo.d.ts:172

One entry under `modinfo.json` `configSchema`.

Keys of `configSchema` are setting ids read via `api.settings.get`.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`

***

### ModMapColorMapping :id=modmapcolormapping

<p class="smt-member-path"><code>configs.ModMapColorMapping</code></p>

```ts
ModMapColorMapping = string | ModMapColorMappingLayers
```

Defined in: configs/modinfo.d.ts:410

One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`

***

### PatchTargetFile :id=patchtargetfile

<p class="smt-member-path"><code>configs.PatchTargetFile</code></p>

```ts
PatchTargetFile = "js/bundle.js" | "js/simulation-worker.js" | "js/manager-worker.js" | "js/utility-worker.js" | string & object
```

Defined in: configs/patches.d.ts:24

Known compiled bundle paths the loader can patch.

| Value | Role |
| --- | --- |
| `js/bundle.js` | Main renderer |
| `js/manager-worker.js` | Manager worker |
| `js/simulation-worker.js` | Simulation workers |
| `js/utility-worker.js` | Utility worker |

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

***

### PatchOperation :id=patchoperation

<p class="smt-member-path"><code>configs.PatchOperation</code></p>

```ts
PatchOperation = "replace" | "remove" | "insertBefore" | "insertAfter" | "wrap"
```

Defined in: configs/patches.d.ts:44

Supported patch operations.

| Value | Behaviour |
| --- | --- |
| `replace` | Replace the matched text with [BundlePatch.code](#code) / [BundlePatch.replace](#replace) |
| `remove` | Delete the matched text |
| `insertBefore` | Insert [BundlePatch.code](#code) before the match |
| `insertAfter` | Insert [BundlePatch.code](#code) after the match |
| `wrap` | Surround the match with [BundlePatch.before](#before) and [BundlePatch.after](#after) |

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript

***

### BundlePatchesFile :id=bundlepatchesfile

<p class="smt-member-path"><code>configs.BundlePatchesFile</code></p>

```ts
BundlePatchesFile = BundlePatch[]
```

Defined in: configs/patches.d.ts:164

Root shape of `patches.json`: an ordered list of [BundlePatch](#bundlepatch) entries.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
