# Sandkit API (everything) <!-- {docsify-ignore-all} -->

Every generated API page on one document. Use the [Module index](api/modules.md) when you only need one namespace.

## sandkit

Live `sandkit` object — shape, ambient binding docs, and nested bags.

Mirrors on-disk `src/sandkit/` and the host free variable: `api`, `engine`,
`enums`, `react`, `state`. Prefer the free name `sandkit` in mod code
(`src/global.d.ts`); do not import a value binding.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.SandkitApi :id=sandkit.sandkitapi

```ts
SandkitApi = object
```

Defined in: [sandkit/api/sandkit-api.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L8)

Composed main-thread `sandkit.api` object type.

Each property matches a namespace under `sandkit.api.*`.
Namespace members are documented in their module files.
Use this type when typing the host `sandkit.api` value as a whole.

##### Properties

###### action

```ts
action: action
```

Defined in: [sandkit/api/sandkit-api.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L10)

Player action and custom action data.

###### assets

```ts
assets: assets
```

Defined in: [sandkit/api/sandkit-api.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L12)

Mod asset URLs and provider selection.

###### authorization

```ts
authorization: authorization
```

Defined in: [sandkit/api/sandkit-api.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L14)

Build authorization checks.

###### building

```ts
building: building
```

Defined in: [sandkit/api/sandkit-api.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L16)

Building mode and placement.

###### camera

```ts
camera: camera
```

Defined in: [sandkit/api/sandkit-api.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L18)

Camera position and bounds.

###### collector

```ts
collector: collector
```

Defined in: [sandkit/api/sandkit-api.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L20)

Collector machine helpers.

###### constants

```ts
constants: constants
```

Defined in: [sandkit/api/sandkit-api.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L22)

Shared game constants.

###### cooldown

```ts
cooldown: cooldown
```

Defined in: [sandkit/api/sandkit-api.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L24)

Cooldown timers.

###### discoveries

```ts
discoveries: discoveries
```

Defined in: [sandkit/api/sandkit-api.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L26)

Discovery tracking.

###### effects

```ts
effects: effects
```

Defined in: [sandkit/api/sandkit-api.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L28)

Visual and gameplay effects.

###### elements

```ts
elements: elements
```

Defined in: [sandkit/api/sandkit-api.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L30)

Element types and cell mutations.

###### energy

```ts
energy: energy
```

Defined in: [sandkit/api/sandkit-api.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L32)

Energy network helpers.

###### events

```ts
events: events
```

Defined in: [sandkit/api/sandkit-api.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L34)

Game event subscription.

###### excavation

```ts
excavation: excavation
```

Defined in: [sandkit/api/sandkit-api.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L36)

Excavation helpers.

###### fire

```ts
fire: fire
```

Defined in: [sandkit/api/sandkit-api.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L38)

Fire and burning helpers.

###### gameConfig

```ts
gameConfig: gameConfig
```

Defined in: [sandkit/api/sandkit-api.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L40)

Game configuration values.

###### grid

```ts
grid: grid
```

Defined in: [sandkit/api/sandkit-api.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L42)

Grid metrics and cell helpers.

###### hooks

```ts
hooks: hooks
```

Defined in: [sandkit/api/sandkit-api.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L44)

Intercept and modify hooks.

###### i18n

```ts
i18n: i18n
```

Defined in: [sandkit/api/sandkit-api.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L46)

Localization strings.

###### input

```ts
input: input
```

Defined in: [sandkit/api/sandkit-api.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L48)

Input state and bindings.

###### items

```ts
items: items
```

Defined in: [sandkit/api/sandkit-api.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L50)

Item definitions and inventory.

###### lights

```ts
lights: lights
```

Defined in: [sandkit/api/sandkit-api.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L52)

Dynamic light sources.

###### maps

```ts
maps: maps
```

Defined in: [sandkit/api/sandkit-api.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L54)

Map selection and session start.

###### mods

```ts
mods: mods
```

Defined in: [sandkit/api/sandkit-api.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L56)

Mod asset provider lookup.

###### patterns

```ts
patterns: patterns
```

Defined in: [sandkit/api/sandkit-api.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L58)

Excavation pattern helpers.

###### player

```ts
player: player
```

Defined in: [sandkit/api/sandkit-api.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L60)

Player position, movement, and inventory.

###### processing

```ts
processing: processing
```

Defined in: [sandkit/api/sandkit-api.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L62)

Processing recipe registration.

###### progression

```ts
progression: progression
```

Defined in: [sandkit/api/sandkit-api.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L64)

Story progression completion.

###### projectiles

```ts
projectiles: projectiles
```

Defined in: [sandkit/api/sandkit-api.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L66)

Projectile spawn and lifecycle.

###### random

```ts
random: random
```

Defined in: [sandkit/api/sandkit-api.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L68)

Game random number helpers.

###### raycast

```ts
raycast: raycast
```

Defined in: [sandkit/api/sandkit-api.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L70)

World raycast queries.

###### reactions

```ts
reactions: reactions
```

Defined in: [sandkit/api/sandkit-api.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L72)

Element contact reactions.

###### rendering

```ts
rendering: rendering
```

Defined in: [sandkit/api/sandkit-api.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L74)

Screen drawing and overlay canvas.

###### resources

```ts
resources: resources
```

Defined in: [sandkit/api/sandkit-api.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L76)

Fluxite and energy resources.

###### scene

```ts
scene: scene
```

Defined in: [sandkit/api/sandkit-api.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L78)

Active game scene.

###### schedule

```ts
schedule: schedule
```

Defined in: [sandkit/api/sandkit-api.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L80)

Next-tick callback scheduling.

###### settings

```ts
settings: settings
```

Defined in: [sandkit/api/sandkit-api.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L82)

Game settings read and change events.

###### shared

```ts
shared: shared
```

Defined in: [sandkit/api/sandkit-api.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L84)

Cross-thread shared buffers.

###### signals

```ts
signals: signals
```

Defined in: [sandkit/api/sandkit-api.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L86)

Signal target registration.

###### sound

```ts
sound: sound
```

Defined in: [sandkit/api/sandkit-api.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L88)

Sound playback and stop controls.

###### sprites

```ts
sprites: sprites
```

Defined in: [sandkit/api/sandkit-api.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L90)

Sprite load and transforms.

###### storage

```ts
storage: storage
```

Defined in: [sandkit/api/sandkit-api.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L92)

Per-mod and local storage.

###### structureBehaviors

```ts
structureBehaviors: structureBehaviors
```

Defined in: [sandkit/api/sandkit-api.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L94)

Conveyor and launcher behaviors.

###### structures

```ts
structures: structures
```

Defined in: [sandkit/api/sandkit-api.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L96)

Structure registration and queries.

###### tech

```ts
tech: tech
```

Defined in: [sandkit/api/sandkit-api.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L98)

Tech tree definitions and locks.

###### terrains

```ts
terrains: terrains
```

Defined in: [sandkit/api/sandkit-api.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L100)

Terrain registration and mutations.

###### time

```ts
time: time
```

Defined in: [sandkit/api/sandkit-api.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L102)

Game time and tick counter.

###### tools

```ts
tools: tools
```

Defined in: [sandkit/api/sandkit-api.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L104)

Tool-specific helpers.

###### triggers

```ts
triggers: triggers
```

Defined in: [sandkit/api/sandkit-api.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L106)

Interval trigger registration.

###### ui

```ts
ui: ui
```

Defined in: [sandkit/api/sandkit-api.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L108)

UI overlays, dialogs, and navigation.

###### upgrades

```ts
upgrades: upgrades
```

Defined in: [sandkit/api/sandkit-api.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L110)

Upgrade categories and levels.

###### utils

```ts
utils: utils
```

Defined in: [sandkit/api/sandkit-api.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L112)

Vector math helpers.

###### workers

```ts
workers: workers
```

Defined in: [sandkit/api/sandkit-api.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L114)

Worker post-update control.

###### world

```ts
world: world
```

Defined in: [sandkit/api/sandkit-api.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sandkit-api.d.ts#L116)

World cells, fog, redraw, and pickups.

***

#### sandkit.Sandkit :id=sandkit.sandkit

```ts
Sandkit = object
```

Defined in: [sandkit/index.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/index.d.ts#L22)

Shape of the host-injected `sandkit` free variable in mod `main.js`.

##### Properties

###### api

```ts
api: SandkitApi
```

Defined in: [sandkit/index.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/index.d.ts#L24)

Public mod API. See [sandkit.api](#api-1).

###### apiVersion

```ts
apiVersion: number
```

Defined in: [sandkit/index.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/index.d.ts#L26)

Sandkit API version number (live value is `1`).

###### engine

```ts
engine: SandkitEngine
```

Defined in: [sandkit/index.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/index.d.ts#L31)

**`Internal`**

State-first internals. See [SandkitEngine](api/sandkit.engine.md#sandkitengine).

###### enums

```ts
enums: SandkitEnums
```

Defined in: [sandkit/index.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/index.d.ts#L33)

Runtime enum bags. See [sandkit.enums](#enums-1).

###### react

```ts
react: SandkitReact
```

Defined in: [sandkit/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/index.d.ts#L35)

Host React package. See [SandkitReact](api/sandkit.react.md#sandkitreact).

###### state

```ts
state: SandkitState
```

Defined in: [sandkit/index.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/index.d.ts#L40)

Game state. Same object as `sandkit.engine.state` at runtime.
See [SandkitState](api/sandkit.engine.md#sandkitstate).

### References <!-- {docsify-ignore} -->

#### sandkit.api :id=sandkit.api

Renames and re-exports [sandkit/api](api/sandkit.api.md)

***

#### sandkit.engine :id=sandkit.engine

Re-exports [engine](api/sandkit.engine.md)

***

#### sandkit.enums :id=sandkit.enums

Renames and re-exports [sandkit/enums](api/sandkit.enums.md)

***

#### sandkit.SandkitEngine :id=sandkit.sandkitengine

Re-exports [SandkitEngine](api/sandkit.engine.md#sandkitengine)

***

#### sandkit.SandkitEngineApi :id=sandkit.sandkitengineapi

Re-exports [SandkitEngineApi](api/sandkit.engine.md#sandkitengineapi)

***

#### sandkit.RetroConsoleApi :id=sandkit.retroconsoleapi

Re-exports [RetroConsoleApi](api/sandkit.engine.md#retroconsoleapi)

***

#### sandkit.SandkitState :id=sandkit.sandkitstate

Re-exports [SandkitState](api/sandkit.engine.md#sandkitstate)

***

#### sandkit.SandkitEnums :id=sandkit.sandkitenums

Re-exports [SandkitEnums](api/sandkit.enums.md#sandkitenums)

***

#### sandkit.SandkitReact :id=sandkit.sandkitreact

Re-exports [SandkitReact](api/sandkit.react.md#sandkitreact)

---

## sandkit.api.action

`sandkit.api.action` — active hotbar action and custom handler data.
Main thread only.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.action.Action :id=sandkit.api.action.action

```ts
Action = AssetRef
```

Defined in: [sandkit/api/action.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/action.d.ts#L9)

Hotbar action asset reference.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.action.getActive() :id=sandkit.api.action.getactive

```ts
getActive(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/action.d.ts#L15)

Return the action slot the player is using.

##### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Active hotbar action reference.

***

#### sandkit.api.action.getSelected() :id=sandkit.api.action.getselected

```ts
getSelected(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/action.d.ts#L21)

Return the action slot selected in the hotbar.

##### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Selected hotbar action reference.

***

#### sandkit.api.action.setCustomData() :id=sandkit.api.action.setcustomdata

```ts
setCustomData<Input>(data: Input): void
```

Defined in: [sandkit/api/action.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/action.d.ts#L27)

Store custom data on the active action handler.

##### Type Parameters

###### Input

`Input`

##### Parameters

###### data

`Input`

Serializable payload attached to the active action.

##### Returns

`void`

---

## sandkit.api.assets

`sandkit.api.assets` — mod asset URLs and asset provider selection.
Main thread only.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.assets.AssetProviderV1 :id=sandkit.api.assets.assetproviderv1

```ts
AssetProviderV1 = object
```

Defined in: [sandkit/api/assets.d.ts:7](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L7)

Describes a mod or pack that supplies assets for a kind.

##### Properties

###### id

```ts
id: ` ${string}:${string}:${string} `
```

Defined in: [sandkit/api/assets.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L8)

###### kind

```ts
kind: string
```

Defined in: [sandkit/api/assets.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L9)

###### localId?

```ts
optional localId?: string
```

Defined in: [sandkit/api/assets.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L10)

###### modId?

```ts
optional modId?: number
```

Defined in: [sandkit/api/assets.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L11)

###### modName

```ts
modName: string
```

Defined in: [sandkit/api/assets.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L12)

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.assets.getUrl() :id=sandkit.api.assets.geturl

```ts
getUrl(relativePath: string): string
```

Defined in: [sandkit/api/assets.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L18)

Resolves a path under the mod folder to a loadable URL.

##### Parameters

###### relativePath

`string`

Path relative to the calling mod folder.

##### Returns

`string`

***

#### sandkit.api.assets.getSelectedProvider() :id=sandkit.api.assets.getselectedprovider

```ts
getSelectedProvider(kind: string): AssetProviderV1 | null
```

Defined in: [sandkit/api/assets.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L23)

Returns the selected provider for an asset kind, or null.

##### Parameters

###### kind

`string`

Asset kind identifier.

##### Returns

[`AssetProviderV1`](#assetproviderv1) \| `null`

***

#### sandkit.api.assets.selectProvider() :id=sandkit.api.assets.selectprovider

```ts
selectProvider(kind: string, providerId: string | null): boolean
```

Defined in: [sandkit/api/assets.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/assets.d.ts#L29)

Selects a provider for an asset kind. Returns true on success.

##### Parameters

###### kind

`string`

Asset kind identifier.

###### providerId

`string` \| `null`

Provider id from [getSelectedProvider](#getselectedprovider), or null to clear.

##### Returns

`boolean`

---

## sandkit.api.authorization

`sandkit.api.authorization` — player permission checks for build, grab, and tools.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.authorization.canBuildAtCell() :id=sandkit.api.authorization.canbuildatcell

```ts
canBuildAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/authorization.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/authorization.d.ts#L14)

Return true when the player may place a structure at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when building is allowed in the authorization zone.

***

#### sandkit.api.authorization.canGrabAtCell() :id=sandkit.api.authorization.cangrabatcell

```ts
canGrabAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/authorization.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/authorization.d.ts#L22)

Return true when the player may grab at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when grabbing is allowed in the authorization zone.

***

#### sandkit.api.authorization.canUseTool() :id=sandkit.api.authorization.canusetool

```ts
canUseTool(player: Player, isFlamethrower?: boolean): boolean
```

Defined in: [sandkit/api/authorization.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/authorization.d.ts#L30)

Return true when the player may use a tool.

##### Parameters

###### player

[`Player`](api/shared.player.md#player)

Player state snapshot.

###### isFlamethrower?

`boolean`

When true, apply flamethrower-specific rules.

##### Returns

`boolean`

True when tool use is allowed for the player.

***

#### sandkit.api.authorization.canUseToolAtCell() :id=sandkit.api.authorization.canusetoolatcell

```ts
canUseToolAtCell(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/authorization.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/authorization.d.ts#L39)

Return true when the player may use a tool at the cell.

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`boolean`

True when tool use is allowed at the cell.

***

#### sandkit.api.authorization.getZoneIdAtCell() :id=sandkit.api.authorization.getzoneidatcell

```ts
getZoneIdAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/authorization.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/authorization.d.ts#L47)

Return the authorization zone id at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`number`

Numeric zone id for the cell.

***

#### sandkit.api.authorization.getPlayerZoneId() :id=sandkit.api.authorization.getplayerzoneid

```ts
getPlayerZoneId(): number
```

Defined in: [sandkit/api/authorization.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/authorization.d.ts#L53)

Return the authorization zone id for the player.

##### Returns

`number`

Numeric zone id for the player's current position.

---

## sandkit.api.building

`sandkit.api.building` — structure placement and built-in structure types.
Main thread only.

### Enumerations <!-- {docsify-ignore} -->

- [StructureType](api/sandkit.api.building.StructureType.md)

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.building.getSnappedPositionAtCell() :id=sandkit.api.building.getsnappedpositionatcell

```ts
getSnappedPositionAtCell(...args: CellCoordinates): Vector2
```

Defined in: [sandkit/api/building.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L73)

Return the snapped world position for placement at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`Vector2`](api/shared.player.md#vector2)

Snapped world position in pixels.

***

#### sandkit.api.building.isBlockedAtCell() :id=sandkit.api.building.isblockedatcell

```ts
isBlockedAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/building.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L81)

Return true when placement is blocked at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when a structure cannot be placed at the cell.

***

#### sandkit.api.building.cancelPlacement() :id=sandkit.api.building.cancelplacement

```ts
cancelPlacement(): void
```

Defined in: [sandkit/api/building.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L84)

Cancel the current structure placement preview.

##### Returns

`void`

***

#### sandkit.api.building.selectStructure() :id=sandkit.api.building.selectstructure

```ts
selectStructure(structureTypeOrId: StructureRef | StructureType): StructureRef | null
```

Defined in: [sandkit/api/building.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L91)

Select a structure for placement by type or id.

##### Parameters

###### structureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref) \| [`StructureType`](api/sandkit.api.building.StructureType.md)

Built-in [StructureType](api/sandkit.api.building.StructureType.md) value or registered structure id.

##### Returns

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref) \| `null`

Resolved selection, or null when the type or id is invalid.

---

## sandkit.api.camera

`sandkit.api.camera` — camera focus and follow control.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.camera.snapToPlayer() :id=sandkit.api.camera.snaptoplayer

```ts
snapToPlayer(): void
```

Defined in: [sandkit/api/camera.d.ts:7](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/camera.d.ts#L7)

Snap the camera to the player position.

##### Returns

`void`

***

#### sandkit.api.camera.setFocusAtWorld() :id=sandkit.api.camera.setfocusatworld

```ts
setFocusAtWorld(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/camera.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/camera.d.ts#L15)

Move camera focus to world coordinates.

##### Parameters

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

##### Returns

`boolean`

True when focus was applied.

***

#### sandkit.api.camera.releaseFocus() :id=sandkit.api.camera.releasefocus

```ts
releaseFocus(options?: object): boolean
```

Defined in: [sandkit/api/camera.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/camera.d.ts#L22)

Release scripted focus and return control to the player.

##### Parameters

###### options?

Optional transition duration in milliseconds.

###### durationMs?

`number`

##### Returns

`boolean`

True when focus was released.

---

## sandkit.api.collector

`sandkit.api.collector` — collector structure value and pickup handling.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.collector.getValueFromCellId() :id=sandkit.api.collector.getvaluefromcellid

```ts
getValueFromCellId(cellId: CellId): number
```

Defined in: [sandkit/api/collector.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/collector.d.ts#L14)

Returns the collector value for a cell id.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

##### Returns

`number`

***

#### sandkit.api.collector.getValueByType() :id=sandkit.api.collector.getvaluebytype

```ts
getValueByType(elementType: ElementType): number
```

Defined in: [sandkit/api/collector.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/collector.d.ts#L19)

Returns the collector value for an element type.

##### Parameters

###### elementType

[`ElementType`](api/sandkit.api.elements.md#elementtype)

Numeric element type id.

##### Returns

`number`

***

#### sandkit.api.collector.isCellIdCollectable() :id=sandkit.api.collector.iscellidcollectable

```ts
isCellIdCollectable(cellId: CellId): boolean
```

Defined in: [sandkit/api/collector.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/collector.d.ts#L24)

Returns true when the cell id can be collected.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

##### Returns

`boolean`

***

#### sandkit.api.collector.isCellIdCollectableForSprite() :id=sandkit.api.collector.iscellidcollectableforsprite

```ts
isCellIdCollectableForSprite(cellId: CellId): boolean
```

Defined in: [sandkit/api/collector.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/collector.d.ts#L29)

Returns true when the cell id can be collected for sprite display.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

##### Returns

`boolean`

***

#### sandkit.api.collector.notifyPickupAtCell() :id=sandkit.api.collector.notifypickupatcell

```ts
notifyPickupAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/collector.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/collector.d.ts#L35)

Notifies collector logic that a pickup happened at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

---

## sandkit.api.constants

### Variables <!-- {docsify-ignore} -->

#### sandkit.api.constants.physics :id=sandkit.api.constants.physics

```ts
const physics: Readonly<{ normal: 0; skip: 1; aggressiveSkip: 2; }>
```

Defined in: [sandkit/api/constants.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/constants.d.ts#L13)

Skip-physics modes for element physics fields.

---

## sandkit.api.cooldown

`sandkit.api.cooldown` — reusable cooldown timers for abilities and items.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.cooldown.Cooldown :id=sandkit.api.cooldown.cooldown

Defined in: [sandkit/api/cooldown.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/cooldown.d.ts#L20)

Cooldown state object passed to [check](#check) and [isReady](#isready).

##### Properties

###### last

```ts
last: number
```

Defined in: [sandkit/api/cooldown.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/cooldown.d.ts#L22)

Timestamp when the cooldown was last triggered (game time).

###### time

```ts
time: number
```

Defined in: [sandkit/api/cooldown.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/cooldown.d.ts#L24)

Cooldown duration in milliseconds.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.cooldown.check() :id=sandkit.api.cooldown.check

```ts
check(cooldown: Cooldown, overrideTime?: number): boolean
```

Defined in: [sandkit/api/cooldown.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/cooldown.d.ts#L11)

Starts the cooldown when ready and returns true; otherwise returns false.

##### Parameters

###### cooldown

[`Cooldown`](#cooldown)

Cooldown state object to check and update.

###### overrideTime?

`number`

Optional timestamp (ms) instead of current game time.

##### Returns

`boolean`

***

#### sandkit.api.cooldown.isReady() :id=sandkit.api.cooldown.isready

```ts
isReady(cooldown: Cooldown, overrideTime?: number): boolean
```

Defined in: [sandkit/api/cooldown.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/cooldown.d.ts#L17)

Returns true when the cooldown has elapsed.

##### Parameters

###### cooldown

[`Cooldown`](#cooldown)

Cooldown state object to check.

###### overrideTime?

`number`

Optional timestamp (ms) instead of current game time.

##### Returns

`boolean`

---

## sandkit.api.discoveries

`sandkit.api.discoveries` — unlock element and terrain entries in the discovery log.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.discoveries.addElementByType() :id=sandkit.api.discoveries.addelementbytype

```ts
addElementByType(elementType: ElementType): void
```

Defined in: [sandkit/api/discoveries.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/discoveries.d.ts#L12)

Marks an element type as discovered for the player.

##### Parameters

###### elementType

[`ElementType`](api/sandkit.api.elements.md#elementtype)

Numeric element type id.

##### Returns

`void`

***

#### sandkit.api.discoveries.addTerrainByType() :id=sandkit.api.discoveries.addterrainbytype

```ts
addTerrainByType(terrainType: TerrainType): void
```

Defined in: [sandkit/api/discoveries.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/discoveries.d.ts#L17)

Marks a terrain type as discovered for the player.

##### Parameters

###### terrainType

[`TerrainType`](api/sandkit.api.terrains.worker.md#terraintype)

Numeric terrain type id.

##### Returns

`void`

---

## sandkit.api.effects

`sandkit.api.effects` — visual effects, particles, lights, and lasers at world positions.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.effects.LaserEffectOptions :id=sandkit.api.effects.lasereffectoptions

Defined in: [sandkit/api/effects.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L46)

Options for laser beam effects.

##### Properties

###### width?

```ts
optional width?: number
```

Defined in: [sandkit/api/effects.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L48)

Beam width in pixels.

###### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/effects.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L50)

Beam brightness multiplier.

###### color?

```ts
optional color?: number
```

Defined in: [sandkit/api/effects.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L52)

Beam color as a packed integer.

###### glow?

```ts
optional glow?: boolean
```

Defined in: [sandkit/api/effects.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L54)

When true, draws a glow around the beam.

***

#### sandkit.api.effects.LaserEffectHandle :id=sandkit.api.effects.lasereffecthandle

Defined in: [sandkit/api/effects.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L58)

Handle returned by createLaserAtWorld.

##### Methods

###### destroy()

```ts
destroy(): void
```

Defined in: [sandkit/api/effects.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L60)

Removes the laser from the scene.

###### Returns

`void`

***

#### sandkit.api.effects.DistortionEffectOptions :id=sandkit.api.effects.distortioneffectoptions

Defined in: [sandkit/api/effects.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L64)

Options for distortion wave effects.

##### Properties

###### style?

```ts
optional style?: "implode" | "explode"
```

Defined in: [sandkit/api/effects.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L66)

Distortion style: implode or explode.

###### duration?

```ts
optional duration?: number
```

Defined in: [sandkit/api/effects.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L68)

Effect duration in seconds.

###### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [sandkit/api/effects.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L70)

Maximum radius of the wave.

###### intensity?

```ts
optional intensity?: number
```

Defined in: [sandkit/api/effects.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L72)

Visual intensity of the distortion.

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/effects.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L74)

RGBA color components for the effect.

***

#### sandkit.api.effects.EffectOptions :id=sandkit.api.effects.effectoptions

Defined in: [shared/api/effects.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L35)

Generic duration and radius options for world effects.

##### Properties

###### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L36)

###### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [shared/api/effects.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L37)

###### intensity?

```ts
optional intensity?: number
```

Defined in: [shared/api/effects.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L38)

***

#### sandkit.api.effects.TemporaryLightOptions :id=sandkit.api.effects.temporarylightoptions

Defined in: [shared/api/effects.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L41)

Options for [createLightAtWorld](#createlightatworld).

##### Properties

###### brightness?

```ts
optional brightness?: number
```

Defined in: [shared/api/effects.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L42)

###### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L43)

###### durationMs?

```ts
optional durationMs?: number
```

Defined in: [shared/api/effects.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L44)

###### size?

```ts
optional size?: number
```

Defined in: [shared/api/effects.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L45)

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [shared/api/effects.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L46)

###### decay

```ts
decay: number
```

Defined in: [shared/api/effects.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L48)

Light decay rate after spawn.

###### unclamped?

```ts
optional unclamped?: boolean
```

Defined in: [shared/api/effects.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L49)

###### skipDedup?

```ts
optional skipDedup?: boolean
```

Defined in: [shared/api/effects.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L50)

###### useLightZones?

```ts
optional useLightZones?: boolean
```

Defined in: [shared/api/effects.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L51)

###### noopIfFull?

```ts
optional noopIfFull?: boolean
```

Defined in: [shared/api/effects.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L52)

###### priority?

```ts
optional priority?: number
```

Defined in: [shared/api/effects.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L53)

###### dedupKey

```ts
dedupKey: string
```

Defined in: [shared/api/effects.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L55)

Dedupe key when the light pool is full or dedup is enabled.

***

#### sandkit.api.effects.ParticleEffectOptions :id=sandkit.api.effects.particleeffectoptions

Defined in: [shared/api/effects.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L58)

Options for [createParticlesAtWorld](#createparticlesatworld).

##### Properties

###### count?

```ts
optional count?: number
```

Defined in: [shared/api/effects.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L59)

###### velocity?

```ts
optional velocity?: Vector2
```

Defined in: [shared/api/effects.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L60)

###### minSpeed?

```ts
optional minSpeed?: number
```

Defined in: [shared/api/effects.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L61)

###### maxSpeed?

```ts
optional maxSpeed?: number
```

Defined in: [shared/api/effects.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L62)

###### color?

```ts
optional color?: number
```

Defined in: [shared/api/effects.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L64)

Hex code. No alpha.

###### minSize?

```ts
optional minSize?: number
```

Defined in: [shared/api/effects.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L65)

###### maxSize?

```ts
optional maxSize?: number
```

Defined in: [shared/api/effects.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L66)

###### minLifetime?

```ts
optional minLifetime?: number
```

Defined in: [shared/api/effects.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L67)

###### maxLifetime?

```ts
optional maxLifetime?: number
```

Defined in: [shared/api/effects.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L68)

###### background?

```ts
optional background?: boolean
```

Defined in: [shared/api/effects.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L69)

###### imageName?

```ts
optional imageName?: string
```

Defined in: [shared/api/effects.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L70)

###### fadeOutOnly?

```ts
optional fadeOutOnly?: boolean
```

Defined in: [shared/api/effects.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L71)

###### fadeStart?

```ts
optional fadeStart?: number
```

Defined in: [shared/api/effects.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L72)

###### fadeEnd?

```ts
optional fadeEnd?: number
```

Defined in: [shared/api/effects.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L73)

###### damp?

```ts
optional damp?: number
```

Defined in: [shared/api/effects.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L74)

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.effects.createDistortionWaveAtWorld() :id=sandkit.api.effects.createdistortionwaveatworld

```ts
createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L29)

Creates a distortion wave effect at world coordinates.

##### Parameters

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

###### options?

[`DistortionEffectOptions`](#distortioneffectoptions)

Style, duration, radius, intensity, and color.

##### Returns

`void`

***

#### sandkit.api.effects.createLaserAtWorld() :id=sandkit.api.effects.createlaseratworld

```ts
createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle
```

Defined in: [sandkit/api/effects.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L38)

Creates a laser beam between two world points. Returns a handle to destroy it.

##### Parameters

###### startWorldX

`number`

Beam start world X in pixels.

###### startWorldY

`number`

Beam start world Y in pixels.

###### endWorldX

`number`

Beam end world X in pixels.

###### endWorldY

`number`

Beam end world Y in pixels.

###### options?

[`LaserEffectOptions`](#lasereffectoptions)

Width, brightness, color, and glow options.

##### Returns

[`LaserEffectHandle`](#lasereffecthandle)

***

#### sandkit.api.effects.removeLightById() :id=sandkit.api.effects.removelightbyid

```ts
removeLightById(lightId: number): void
```

Defined in: [sandkit/api/effects.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/effects.d.ts#L43)

Removes a temporary light by its id.

##### Parameters

###### lightId

`number`

Light index from [createLightAtWorld](#createlightatworld).

##### Returns

`void`

***

#### sandkit.api.effects.createLightAtWorld() :id=sandkit.api.effects.createlightatworld

```ts
createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object
```

Defined in: [shared/api/effects.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L17)

Spawn a temporary light at world coordinates.

##### Parameters

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

###### options?

[`TemporaryLightOptions`](#temporarylightoptions)

Brightness, colour, and lifetime settings.

##### Returns

`object`

###### index

```ts
index: number | null
```

***

#### sandkit.api.effects.createParticlesAtWorld() :id=sandkit.api.effects.createparticlesatworld

```ts
createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void
```

Defined in: [shared/api/effects.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L24)

Emit particles at world coordinates.

##### Parameters

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

###### options?

[`ParticleEffectOptions`](#particleeffectoptions)

Count, velocity, colour, and lifetime settings.

##### Returns

`void`

***

#### sandkit.api.effects.createEffectAtWorld() :id=sandkit.api.effects.createeffectatworld

```ts
createEffectAtWorld(effectId: "heatWave", worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [shared/api/effects.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/effects.d.ts#L32)

Spawn a named screen-space or world effect.

##### Parameters

###### effectId

`"heatWave"`

Registered effect id (for example `heatWave`).

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

###### options?

[`EffectOptions`](#effectoptions)

Duration, radius, and intensity settings.

##### Returns

`void`

---

## sandkit.api.elements

`sandkit.api.elements` — register elements and read or change cells when idle.
Main thread only.

### Enumerations <!-- {docsify-ignore} -->

- [MatterType](api/sandkit.api.elements.MatterType.md)

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.elements.InteractionStructureMetadata :id=sandkit.api.elements.interactionstructuremetadata

Defined in: [sandkit/api/elements.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L49)

Optional tooltip metadata on structure interactions.

##### Properties

###### textKey?

```ts
optional textKey?: string
```

Defined in: [sandkit/api/elements.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L51)

i18n key for custom interaction label text.

###### crossedOutWhen?

```ts
optional crossedOutWhen?: object
```

Defined in: [sandkit/api/elements.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L53)

Hide the label when a data field matches a value.

###### dataField

```ts
dataField: number
```

###### equals

```ts
equals: number
```

###### visibleWhen?

```ts
optional visibleWhen?: object
```

Defined in: [sandkit/api/elements.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L55)

Show the label only when a data field matches a value.

###### dataField

```ts
dataField: number
```

###### equals

```ts
equals: number
```

###### onlyWhenTranslated?

```ts
optional onlyWhenTranslated?: boolean
```

Defined in: [sandkit/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L57)

Require the text key to exist in the active locale.

***

#### sandkit.api.elements.ElementCreateOptions :id=sandkit.api.elements.elementcreateoptions

Defined in: [shared/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L57)

Options for createAtCell, replace, and idle create helpers.

##### Properties

###### data?

```ts
optional data?: Record<string, unknown>
```

Defined in: [shared/api/elements.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L59)

Initial element data bag.

###### density?

```ts
optional density?: number
```

Defined in: [shared/api/elements.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L61)

Override element density.

###### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/elements.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L63)

Set both max and remaining duration.

###### isFreeFalling?

```ts
optional isFreeFalling?: boolean
```

Defined in: [shared/api/elements.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L65)

Override free-fall state on spawn.

###### dataFields?

```ts
optional dataFields?: object
```

Defined in: [shared/api/elements.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L67)

Override default data fields 1–4.

###### field1?

```ts
optional field1?: number
```

###### field2?

```ts
optional field2?: number
```

###### field3?

```ts
optional field3?: number
```

###### field4?

```ts
optional field4?: number
```

###### particle?

```ts
optional particle?: object
```

Defined in: [shared/api/elements.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L74)

Spawn as a particle with the given velocity.

###### velocity

```ts
velocity: Vector2
```

###### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L78)

Skip collector accounting when placing the element.

***

#### sandkit.api.elements.ElementRemovalOptions :id=sandkit.api.elements.elementremovaloptions

Defined in: [shared/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L82)

Options for element removal helpers.

##### Properties

###### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L84)

Skip collector accounting when removing the element.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.elements.InteractionDestroyer :id=sandkit.api.elements.interactiondestroyer

```ts
InteractionDestroyer = object
```

Defined in: [sandkit/api/elements.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L61)

Interaction that destroys specific items.

##### Properties

###### kind

```ts
kind: "destroyer"
```

Defined in: [sandkit/api/elements.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L62)

###### items

```ts
items: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L64)

Item ids removed by this interaction (for example `"drill"`).

***

#### sandkit.api.elements.InteractionStructure :id=sandkit.api.elements.interactionstructure

```ts
InteractionStructure = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L68)

Interaction that affects specific structures.

##### Type Declaration

###### kind

```ts
kind: "structure"
```

###### structures

```ts
structures: readonly string[]
```

Structure ids shown in the interaction tooltip.

***

#### sandkit.api.elements.InteractionEntity :id=sandkit.api.elements.interactionentity

```ts
InteractionEntity = object
```

Defined in: [sandkit/api/elements.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L75)

Interaction that affects specific entities.

##### Properties

###### kind

```ts
kind: "entity"
```

Defined in: [sandkit/api/elements.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L76)

###### entities

```ts
entities: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L78)

Entity type ids referenced by the interaction.

***

#### sandkit.api.elements.InteractionFlammable :id=sandkit.api.elements.interactionflammable

```ts
InteractionFlammable = object
```

Defined in: [sandkit/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L82)

Interaction that marks the element as flammable.

##### Properties

###### kind

```ts
kind: "flammable"
```

Defined in: [sandkit/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L82)

***

#### sandkit.api.elements.InteractionMeltable :id=sandkit.api.elements.interactionmeltable

```ts
InteractionMeltable = object
```

Defined in: [sandkit/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L84)

Interaction that marks the element as meltable.

##### Properties

###### kind

```ts
kind: "meltable"
```

Defined in: [sandkit/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L84)

***

#### sandkit.api.elements.InteractionFreezable :id=sandkit.api.elements.interactionfreezable

```ts
InteractionFreezable = object
```

Defined in: [sandkit/api/elements.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L86)

Interaction that marks the element as freezable.

##### Properties

###### kind

```ts
kind: "freezable"
```

Defined in: [sandkit/api/elements.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L86)

***

#### sandkit.api.elements.InteractionCustom :id=sandkit.api.elements.interactioncustom

```ts
InteractionCustom = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L88)

Interaction handled by custom mod logic and tooltip text.

##### Type Declaration

###### kind

```ts
kind: "custom"
```

***

#### sandkit.api.elements.Interaction :id=sandkit.api.elements.interaction

```ts
Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

Defined in: [sandkit/api/elements.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L91)

Union of element interaction kinds for tool and structure logic.

***

#### sandkit.api.elements.ElementType :id=sandkit.api.elements.elementtype

```ts
ElementType = ElementType | TaggedNumber<"elementType">
```

Defined in: [shared/api/elements.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L18)

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; `getTypeFromId` returns a tagged handle.

***

#### sandkit.api.elements.ElementId :id=sandkit.api.elements.elementid

```ts
ElementId = LooseString<never>
```

Defined in: [shared/api/elements.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L21)

Mod or built-in element string id.

***

#### sandkit.api.elements.ElementRef :id=sandkit.api.elements.elementref

```ts
ElementRef = ElementType | ElementId
```

Defined in: [shared/api/elements.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L23)

Type handle or string id accepted by lookup helpers.

***

#### sandkit.api.elements.ElementDefinition :id=sandkit.api.elements.elementdefinition

```ts
ElementDefinition = object
```

Defined in: [shared/api/elements.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L38)

Mod-registered element definition snapshot.

##### Properties

###### id

```ts
id: string
```

Defined in: [shared/api/elements.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L39)

###### nameKey

```ts
nameKey: string
```

Defined in: [shared/api/elements.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L40)

###### defaultDataFields?

```ts
optional defaultDataFields?: object
```

Defined in: [shared/api/elements.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L41)

###### Index Signature

\[`key`: `string`\]: `number`

###### colors

```ts
colors: object
```

Defined in: [shared/api/elements.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L42)

###### variantFromDataField1?

```ts
optional variantFromDataField1?: object
```

###### variantFromDataField1.rangeMin?

```ts
optional rangeMin?: number
```

###### variantFromDataField1.rangeMax?

```ts
optional rangeMax?: number
```

###### variantFromDataField1.invert?

```ts
optional invert?: boolean
```

###### variantFromDataField1.useGradient?

```ts
optional useGradient?: boolean
```

###### variants

```ts
variants: [number, number, number][]
```

###### density

```ts
density: number
```

Defined in: [shared/api/elements.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L51)

###### matterType

```ts
matterType: MatterType
```

Defined in: [shared/api/elements.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L52)

###### getExtraProps?

```ts
optional getExtraProps?: () => object
```

Defined in: [shared/api/elements.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L53)

###### Returns

`object`

###### data

```ts
data: Record<PropertyKey, any>
```

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.elements.getRegisteredTypes() :id=sandkit.api.elements.getregisteredtypes

```ts
getRegisteredTypes(): ElementType[]
```

Defined in: [sandkit/api/elements.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L100)

Returns all registered element type ids.

##### Returns

[`ElementType`](#elementtype)[]

***

#### sandkit.api.elements.register() :id=sandkit.api.elements.register

```ts
register(definition: ElementDefinition): object
```

Defined in: [sandkit/api/elements.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L107)

Registers a new element and returns its assigned type id.

##### Parameters

###### definition

[`ElementDefinition`](#elementdefinition)

Full element definition to register.

##### Returns

`object`

Object with the assigned `elementType`.

###### elementType

```ts
elementType: ElementType
```

***

#### sandkit.api.elements.updateDefinition() :id=sandkit.api.elements.updatedefinition

```ts
updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

Defined in: [sandkit/api/elements.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L114)

Updates fields on an existing element definition.

##### Parameters

###### elementTypeOrId

[`ElementRef`](#elementref)

Numeric type or string id.

###### partial

`Partial`\<[`ElementDefinition`](#elementdefinition)\>

Fields to merge onto the definition.

##### Returns

`void`

***

#### sandkit.api.elements.addInteractionInfo() :id=sandkit.api.elements.addinteractioninfo

```ts
addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

Defined in: [sandkit/api/elements.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L121)

Adds an interaction entry to an element definition.

##### Parameters

###### elementTypeOrId

[`ElementRef`](#elementref)

Numeric type or string id.

###### interaction

[`Interaction`](#interaction)

Interaction entry to append.

##### Returns

`void`

***

#### sandkit.api.elements.getNameByType() :id=sandkit.api.elements.getnamebytype

```ts
getNameByType(elementType: ElementType): string
```

Defined in: [sandkit/api/elements.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L127)

Returns the display name for an element type.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

`string`

***

#### sandkit.api.elements.findFreeCellInStructure() :id=sandkit.api.elements.findfreecellinstructure

```ts
findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSize: number): Vector2 | null
```

Defined in: [sandkit/api/elements.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L136)

Finds a free cell inside a structure footprint, or null.

##### Parameters

###### structureCellX

`number`

Structure anchor cell column.

###### structureCellY

`number`

Structure anchor cell row.

###### structureSize

`number`

Structure footprint size in cells.

##### Returns

[`Vector2`](api/shared.player.md#vector2) \| `null`

Cell coordinates of a free cell, or null when none.

***

#### sandkit.api.elements.createAtCellWhenIdle() :id=sandkit.api.elements.createatcellwhenidle

```ts
createAtCellWhenIdle(...args: number, number, [ElementType, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L145)

Creates an element at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`ElementType`](#elementtype), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

***

#### sandkit.api.elements.replaceAtCellWhenIdle() :id=sandkit.api.elements.replaceatcellwhenidle

```ts
replaceAtCellWhenIdle(...args: number, number, [ElementType, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L154)

Replaces the element at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`ElementType`](#elementtype), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

***

#### sandkit.api.elements.removeAtCellWhenIdle() :id=sandkit.api.elements.removeatcellwhenidle

```ts
removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L162)

Removes the element at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

##### Returns

`void`

***

#### sandkit.api.elements.teleportBetweenCellsWhenIdle() :id=sandkit.api.elements.teleportbetweencellswhenidle

```ts
teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L171)

Moves an element between cells when the simulation is idle.

##### Parameters

###### fromCellX

`number`

Source cell column.

###### fromCellY

`number`

Source cell row.

###### toCellX

`number`

Destination cell column.

###### toCellY

`number`

Destination cell row.

##### Returns

`void`

***

#### sandkit.api.elements.setVelocityAtCellWhenIdle() :id=sandkit.api.elements.setvelocityatcellwhenidle

```ts
setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:179](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L179)

Sets particle velocity at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

***

#### sandkit.api.elements.addParticleVelocityAtCellWhenIdle() :id=sandkit.api.elements.addparticlevelocityatcellwhenidle

```ts
addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L188)

Adds velocity to a particle at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

##### Returns

`void`

***

#### sandkit.api.elements.convertToParticleAtCellWhenIdle() :id=sandkit.api.elements.converttoparticleatcellwhenidle

```ts
convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L196)

Converts a cell element to a particle when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

***

#### sandkit.api.elements.convertFromParticleAtCellWhenIdle() :id=sandkit.api.elements.convertfromparticleatcellwhenidle

```ts
convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L203)

Converts a particle back to a solid element when the simulation is idle.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

***

#### sandkit.api.elements.setDataFieldAtCellWhenIdle() :id=sandkit.api.elements.setdatafieldatcellwhenidle

```ts
setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L212)

Sets a data field on the element at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

##### Returns

`void`

***

#### sandkit.api.elements.refreshColorAtCellWhenIdle() :id=sandkit.api.elements.refreshcoloratcellwhenidle

```ts
refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L219)

Refreshes the rendered color at a cell when the simulation is idle.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

***

#### sandkit.api.elements.setPhysicsAtCellWhenIdle() :id=sandkit.api.elements.setphysicsatcellwhenidle

```ts
setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L227)

Sets the physics skip mode at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

***

#### sandkit.api.elements.setDurationAtCellWhenIdle() :id=sandkit.api.elements.setdurationatcellwhenidle

```ts
setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:236](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L236)

Sets element duration at a cell when the simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, `number`, `object`\]

##### Returns

`void`

***

#### sandkit.api.elements.getTypeFromId() :id=sandkit.api.elements.gettypefromid

```ts
getTypeFromId(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L91)

Resolve a mod element string id to a type handle.

##### Parameters

###### elementId

`string` & `object`

Mod-registered element id.

##### Returns

[`ElementType`](#elementtype)

***

#### sandkit.api.elements.getDefinitionByType() :id=sandkit.api.elements.getdefinitionbytype

```ts
getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

Defined in: [shared/api/elements.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L97)

Look up the definition for a type handle.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

[`ElementDefinition`](#elementdefinition) \| `undefined`

***

#### sandkit.api.elements.getTypeAtCell() :id=sandkit.api.elements.gettypeatcell

```ts
getTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L104)

Return the raw element type at a cell (may differ from resolved type).

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`ElementType`](#elementtype) \| `null`

***

#### sandkit.api.elements.getResolvedTypeAtCell() :id=sandkit.api.elements.getresolvedtypeatcell

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L111)

Return the resolved element type after overlays and particles.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`ElementType`](#elementtype) \| `null`

***

#### sandkit.api.elements.getResolvedTypeFromCellId() :id=sandkit.api.elements.getresolvedtypefromcellid

```ts
getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

Defined in: [shared/api/elements.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L117)

Return the resolved element type from a packed cell id.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.world.worker.md#getcellidatcell).

##### Returns

[`ElementType`](#elementtype) \| `null`

***

#### sandkit.api.elements.getInfoAtCell() :id=sandkit.api.elements.getinfoatcell

```ts
getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

Defined in: [shared/api/elements.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L124)

Return element index, particle flag, and ids at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

\{ `elementType`: [`ElementType`](#elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md#cellid); `elementIndex`: `number`; \} \| `null`

***

#### sandkit.api.elements.getMatterTypeAtCell() :id=sandkit.api.elements.getmattertypeatcell

```ts
getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

Defined in: [shared/api/elements.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L131)

Return the matter category at a cell, or null when empty.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`MatterType`](api/sandkit.api.elements.MatterType.md) \| `null`

***

#### sandkit.api.elements.isTypeAtCell() :id=sandkit.api.elements.istypeatcell

```ts
isTypeAtCell(...args: number, number, [ElementType]): boolean
```

Defined in: [shared/api/elements.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L139)

Return true when the cell holds the given element type.

##### Parameters

###### args

...\[`number`, `number`, [`ElementType`](#elementtype)\]

##### Returns

`boolean`

***

#### sandkit.api.elements.isFreeFallingAtCell() :id=sandkit.api.elements.isfreefallingatcell

```ts
isFreeFallingAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/elements.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L146)

Return true when the element at the cell is falling.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.elements.getVelocityAtCell() :id=sandkit.api.elements.getvelocityatcell

```ts
getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

Defined in: [shared/api/elements.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L153)

Return per-cell velocity for moving elements.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

\{ `x`: `number`; `y`: `number`; \} \| `null`

***

#### sandkit.api.elements.getDataFieldAtCell() :id=sandkit.api.elements.getdatafieldatcell

```ts
getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

Defined in: [shared/api/elements.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L161)

Read element data field 1–4 at a cell.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`\]

##### Returns

`number` \| `null`

---

## sandkit.api.energy

`sandkit.api.energy` — structure energy networks, storage, and consumption.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.energy.EnergyRegisterTypeOptions :id=sandkit.api.energy.energyregistertypeoptions

Defined in: [sandkit/api/energy.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L56)

Options for [registerType](#registertype).

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### capacity?

```ts
optional capacity?: number
```

Defined in: [sandkit/api/energy.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L58)

Maximum stored energy for storage nodes.

###### energyType?

```ts
optional energyType?: string
```

Defined in: [sandkit/api/energy.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L60)

Energy type id when multiple networks exist.

***

#### sandkit.api.energy.EnergyAddOptions :id=sandkit.api.energy.energyaddoptions

Defined in: [sandkit/api/energy.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L65)

Options for [addAtCell](#addatcell).

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### energyType?

```ts
optional energyType?: string
```

Defined in: [sandkit/api/energy.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L67)

Energy type id when multiple networks exist.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.energy.registerType() :id=sandkit.api.energy.registertype

```ts
registerType(structureId: string, type: "storage" | "conductor", options?: EnergyRegisterTypeOptions): void
```

Defined in: [sandkit/api/energy.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L14)

Registers an energy type on a structure as conductor or storage.

##### Parameters

###### structureId

`string`

Structure type id string.

###### type

`"storage"` \| `"conductor"`

`conductor` forwards energy; `storage` holds energy.

###### options?

[`EnergyRegisterTypeOptions`](#energyregistertypeoptions)

Capacity and energy-type options for storage nodes.

##### Returns

`void`

***

#### sandkit.api.energy.addAtCell() :id=sandkit.api.energy.addatcell

```ts
addAtCell(...args: number, number, number, [EnergyAddOptions]): number
```

Defined in: [sandkit/api/energy.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L22)

Adds energy at a cell. Returns the amount actually added.

##### Parameters

###### args

...\[`number`, `number`, `number`, [`EnergyAddOptions`](#energyaddoptions)\]

##### Returns

`number`

***

#### sandkit.api.energy.consume() :id=sandkit.api.energy.consume

```ts
consume(amount: number, options?: object): number
```

Defined in: [sandkit/api/energy.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L28)

Consumes energy from the global pool. Returns the amount consumed.

##### Parameters

###### amount

`number`

Energy amount to consume.

###### options?

When `allOrNothing` is true, consume zero unless the full amount is available.

###### allOrNothing?

`boolean`

##### Returns

`number`

***

#### sandkit.api.energy.consumeExcludingNetworkAtCell() :id=sandkit.api.energy.consumeexcludingnetworkatcell

```ts
consumeExcludingNetworkAtCell(...args: [number, number, number]): number
```

Defined in: [sandkit/api/energy.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L37)

Consumes energy from networks other than the one at the cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`number`

***

#### sandkit.api.energy.getNetworkAtCell() :id=sandkit.api.energy.getnetworkatcell

```ts
getNetworkAtCell(...args: CellCoordinates): object[]
```

Defined in: [sandkit/api/energy.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L43)

Returns energy network nodes connected at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`object`[]

***

#### sandkit.api.energy.getNetworkFreeCapacityAtCell() :id=sandkit.api.energy.getnetworkfreecapacityatcell

```ts
getNetworkFreeCapacityAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/energy.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/energy.d.ts#L53)

Returns free storage capacity in the network at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`number`

---

## sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.events.PlayerCollisionPreparePayload :id=sandkit.api.events.playercollisionpreparepayload

Defined in: [sandkit/api/events.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L25)

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

##### Properties

###### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean
```

Defined in: [sandkit/api/events.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L27)

When true, terrain collision is skipped this sub-step.

###### phaseThroughStructures

```ts
phaseThroughStructures: boolean
```

Defined in: [sandkit/api/events.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L29)

When true, structure collision is skipped this sub-step.

###### maxStepCells

```ts
maxStepCells: number
```

Defined in: [sandkit/api/events.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L31)

Max cells the player can step up when blocked horizontally (1–8).

***

#### sandkit.api.events.EventPayloadMap :id=sandkit.api.events.eventpayloadmap

Defined in: [sandkit/api/events.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L35)

Known event payloads. Unlisted ids still use `unknown`.

##### Properties

###### player:collision:prepare

```ts
player:collision:prepare: PlayerCollisionPreparePayload
```

Defined in: [sandkit/api/events.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L36)

###### player:moved

```ts
player:moved: object
```

Defined in: [sandkit/api/events.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L37)

###### dt?

```ts
optional dt?: number
```

Simulation step duration in seconds.
`0` on teleports. The event runs after collision; landing already
zeroes `velocity.y`. Vanilla gravity is applied after this event.

###### state?

```ts
optional state?: unknown
```

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.events.EventId :id=sandkit.api.events.eventid

```ts
EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [sandkit/api/events.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L49)

Known event names plus any custom string id.

***

#### sandkit.api.events.EventPayload :id=sandkit.api.events.eventpayload

```ts
EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [sandkit/api/events.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L52)

Event payload type for a given event id.

##### Type Parameters

###### K

`K`

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.events.on() :id=sandkit.api.events.on

```ts
on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

Defined in: [sandkit/api/events.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L13)

Subscribes to an event. Returns an unsubscribe function.

##### Type Parameters

###### K

`K` *extends* [`EventId`](#eventid)

##### Parameters

###### eventId

`K`

Registered event name.

###### callback

(`payload`: [`EventPayload`](#eventpayload)\<`K`\>) => `void`

Called when the event is emitted.

##### Returns

() => `void`

***

#### sandkit.api.events.emit() :id=sandkit.api.events.emit

```ts
emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

Defined in: [sandkit/api/events.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L19)

Emits an event with a payload to all subscribers.

##### Type Parameters

###### K

`K` *extends* [`EventId`](#eventid)

##### Parameters

###### eventId

`K`

Registered event name.

###### payload

[`EventPayload`](#eventpayload)\<`K`\>

Serializable payload passed to listeners.

##### Returns

`void`

---

## sandkit.api.excavation

`sandkit.api.excavation` — register custom excavation tool dig profiles.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.excavation.ExcavationProfileDefinitionV1 :id=sandkit.api.excavation.excavationprofiledefinitionv1

Defined in: [sandkit/api/excavation.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L14)

Excavation tool profile definition.

##### Properties

###### pattern

```ts
pattern: number[][]
```

Defined in: [sandkit/api/excavation.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L16)

Dig pattern grid; non-zero cells are removed.

###### power

```ts
power: number
```

Defined in: [sandkit/api/excavation.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L18)

Dig strength applied to matched cells. Clamped to 0–1000.

###### options?

```ts
optional options?: ExcavationProfileOptions
```

Defined in: [sandkit/api/excavation.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L20)

Optional profile-specific excavation flags.

***

#### sandkit.api.excavation.ExcavationProfileOptions :id=sandkit.api.excavation.excavationprofileoptions

Defined in: [sandkit/api/excavation.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L24)

Options attached to an excavation profile definition.

##### Properties

###### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L25)

###### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L26)

###### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L27)

###### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L28)

###### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L29)

###### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L30)

###### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [sandkit/api/excavation.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L32)

Clamped to 0–1000 when set.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.excavation.registerProfile() :id=sandkit.api.excavation.registerprofile

```ts
registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void
```

Defined in: [sandkit/api/excavation.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L11)

Registers an excavation profile by id.

##### Parameters

###### id

`string`

Unique profile id (1–128 chars: letters, numbers, `.`, `_`, `:`, `-`).

###### definition

[`ExcavationProfileDefinitionV1`](#excavationprofiledefinitionv1)

Pattern, power, and profile options.

##### Returns

`void`

---

## sandkit.api.fire

`sandkit.api.fire` — ignite and burn elements at grid cells.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.fire.canBurnElementAtCell() :id=sandkit.api.fire.canburnelementatcell

```ts
canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/fire.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/fire.d.ts#L13)

Returns true when the element at the cell can burn.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.fire.burnElementAtCellWhenIdle() :id=sandkit.api.fire.burnelementatcellwhenidle

```ts
burnElementAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/fire.d.ts#L19)

Queues a burn at the cell when the simulation is idle.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

***

#### sandkit.api.fire.burnElementAtCell() :id=sandkit.api.fire.burnelementatcell

```ts
burnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/fire.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/fire.d.ts#L25)

Burns the element at the cell immediately. Returns true on success.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

---

## sandkit.api.gameConfig

`sandkit.api.gameConfig` — read merged game configuration values.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.gameConfig.get() :id=sandkit.api.gameConfig.get

```ts
get(key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/gameconfig.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/gameconfig.d.ts#L12)

Returns a config value by key, or undefined when missing.

##### Parameters

###### key

`string`

Game config key (merged defaults and overrides).

##### Returns

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1) \| `undefined`

***

#### sandkit.api.gameConfig.getAll() :id=sandkit.api.gameConfig.getall

```ts
getAll(): JsonObjectV1
```

Defined in: [sandkit/api/gameconfig.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/gameconfig.d.ts#L14)

Returns the full config object.

##### Returns

[`JsonObjectV1`](api/shared.jsonvalue.md#jsonobjectv1)

---

## sandkit.api.grid

`sandkit.api.grid` — iterate cells in rectangular and circular regions.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.grid.forEachCellInRect() :id=sandkit.api.grid.foreachcellinrect

```ts
forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L16)

Calls the callback for each cell in a rectangle.

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

##### Returns

`void`

***

#### sandkit.api.grid.forEachCellInCircle() :id=sandkit.api.grid.foreachcellincircle

```ts
forEachCellInCircle(centerCellX: number, centerCellY: number, radius: number, callback: (...args: CellCoordinates) => void): void
```

Defined in: [sandkit/api/grid.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L25)

Calls the callback for each cell inside a circle.

##### Parameters

###### centerCellX

`number`

Circle center cell column.

###### centerCellY

`number`

Circle center cell row.

###### radius

`number`

Circle radius in cells.

###### callback

(...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`

Invoked for each cell with `(cellX, cellY)`.

##### Returns

`void`

---

## sandkit.api.hooks

`sandkit.api.hooks` — intercept and modify internal game hook points.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.hooks.InterceptHookMap :id=sandkit.api.hooks.intercepthookmap

Defined in: [sandkit/api/hooks.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L22)

Map of intercept hook ids to argument shapes (not yet typed in declarations).

##### Properties

###### input:boost-down

```ts
input:boost-down: Record<string, never>
```

Defined in: [sandkit/api/hooks.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L23)

###### input:descend-down

```ts
input:descend-down: Record<string, never>
```

Defined in: [sandkit/api/hooks.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L24)

###### input:keydown

```ts
input:keydown: object
```

Defined in: [sandkit/api/hooks.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L25)

###### key?

```ts
optional key?: string
```

###### code?

```ts
optional code?: string
```

###### event?

```ts
optional event?: Event
```

###### input:keyup

```ts
input:keyup: object
```

Defined in: [sandkit/api/hooks.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L30)

###### key?

```ts
optional key?: string
```

###### code?

```ts
optional code?: string
```

###### event?

```ts
optional event?: Event
```

###### input:escape

```ts
input:escape: Record<string, never>
```

Defined in: [sandkit/api/hooks.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L35)

###### input:scroll

```ts
input:scroll: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L36)

***

#### sandkit.api.hooks.HookContext :id=sandkit.api.hooks.hookcontext

Defined in: [sandkit/api/hooks.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L40)

Context passed to intercept hook callbacks.

##### Methods

###### cancel()

```ts
cancel(): void
```

Defined in: [sandkit/api/hooks.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L42)

When called, the intercepted action is skipped.

###### Returns

`void`

***

#### sandkit.api.hooks.HookOptions :id=sandkit.api.hooks.hookoptions

Defined in: [sandkit/api/hooks.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L47)

Options for hook registration.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### priority?

```ts
optional priority?: number
```

Defined in: [sandkit/api/hooks.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L49)

Run this hook before others with lower priority.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.hooks.ModifierHookMap :id=sandkit.api.hooks.modifierhookmap

```ts
ModifierHookMap = unknown
```

Defined in: [sandkit/api/hooks.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L45)

Map of modifier hook ids to argument shapes (not yet typed in declarations).

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.hooks.intercept() :id=sandkit.api.hooks.intercept

```ts
intercept<K *extends* keyof InterceptHookMap>(hookId: K, callback: (args: InterceptHookMap[K], context: HookContext) => void, options?: HookOptions): () => void
```

Defined in: [sandkit/api/hooks.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L12)

Registers an intercept hook. Returns an unsubscribe function.

##### Type Parameters

###### K

`K` *extends* keyof [`InterceptHookMap`](#intercepthookmap)

##### Parameters

###### hookId

`K`

Registered hook identifier.

###### callback

(`args`: [`InterceptHookMap`](#intercepthookmap)\[`K`\], `context`: [`HookContext`](#hookcontext)) => `void`

Called with hook arguments and context; may cancel the hook.

###### options?

[`HookOptions`](#hookoptions)

Optional priority and filter options.

##### Returns

() => `void`

***

#### sandkit.api.hooks.modify() :id=sandkit.api.hooks.modify

```ts
modify<K *extends* never>(hookId: K, callback: (args: unknown) => void, options?: HookOptions): () => void
```

Defined in: [sandkit/api/hooks.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/hooks.d.ts#L19)

Registers a modifier hook. Returns an unsubscribe function.

##### Type Parameters

###### K

`K` *extends* `never`

##### Parameters

###### hookId

`K`

Registered hook identifier.

###### callback

(`args`: `unknown`) => `void`

Called with hook arguments; may mutate hook payload.

###### options?

[`HookOptions`](#hookoptions)

Optional priority and filter options.

##### Returns

() => `void`

---

## sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.i18n.I18nNumberFormatOptions :id=sandkit.api.i18n.i18nnumberformatoptions

Defined in: [sandkit/api/i18n.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L92)

Number format options for [formatNumber](#formatnumber).

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### minimumFractionDigits?

```ts
optional minimumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L94)

Minimum fraction digits.

###### maximumFractionDigits?

```ts
optional maximumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L96)

Maximum fraction digits.

###### useGrouping?

```ts
optional useGrouping?: boolean
```

Defined in: [sandkit/api/i18n.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L98)

When true, use grouping separators.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.i18n.Locale :id=sandkit.api.i18n.locale

```ts
Locale = LooseString<"en">
```

Defined in: [sandkit/api/i18n.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L89)

Locale code. `"en"` autocompletes; any locale string is allowed.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.i18n.t() :id=sandkit.api.i18n.t

```ts
t(key: string, params?: Record<string, string | number>): string
```

Defined in: [sandkit/api/i18n.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L13)

Translates a key with optional parameter substitution.

##### Parameters

###### key

`string`

Translation key.

###### params?

`Record`\<`string`, `string` \| `number`\>

Placeholder values for the key template.

##### Returns

`string`

***

#### sandkit.api.i18n.register() :id=sandkit.api.i18n.register

```ts
register(locale: Locale, translations: Record<string, string>): void
```

Defined in: [sandkit/api/i18n.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L19)

Registers translation strings for a locale.

##### Parameters

###### locale

[`Locale`](#locale)

Locale code (e.g. `en`).

###### translations

`Record`\<`string`, `string`\>

Map of keys to translated strings.

##### Returns

`void`

***

#### sandkit.api.i18n.getLocale() :id=sandkit.api.i18n.getlocale

```ts
getLocale(): Locale
```

Defined in: [sandkit/api/i18n.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L21)

Returns the active locale code.

##### Returns

[`Locale`](#locale)

***

#### sandkit.api.i18n.hasTranslation() :id=sandkit.api.i18n.hastranslation

```ts
hasTranslation(key: string, locale?: Locale): boolean
```

Defined in: [sandkit/api/i18n.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L27)

Returns true when a translation exists for the key.

##### Parameters

###### key

`string`

Translation key.

###### locale?

[`Locale`](#locale)

Optional locale; defaults to the active locale.

##### Returns

`boolean`

***

#### sandkit.api.i18n.setLocale() :id=sandkit.api.i18n.setlocale

```ts
setLocale(locale: Locale): Promise<void>
```

Defined in: [sandkit/api/i18n.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L32)

Sets the active locale.

##### Parameters

###### locale

[`Locale`](#locale)

Locale code to activate.

##### Returns

`Promise`\<`void`\>

***

#### sandkit.api.i18n.getLanguages() :id=sandkit.api.i18n.getlanguages

```ts
getLanguages(): object[]
```

Defined in: [sandkit/api/i18n.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L34)

Returns metadata for all known languages.

##### Returns

`object`[]

***

#### sandkit.api.i18n.getAvailableLocales() :id=sandkit.api.i18n.getavailablelocales

```ts
getAvailableLocales(): Locale[]
```

Defined in: [sandkit/api/i18n.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L36)

Returns locale codes that have registered translations.

##### Returns

[`Locale`](#locale)[]

***

#### sandkit.api.i18n.formatNumber() :id=sandkit.api.i18n.formatnumber

```ts
formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

Defined in: [sandkit/api/i18n.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L42)

Formats a number for the active locale.

##### Parameters

###### value

`number`

Number to format.

###### options?

[`I18nNumberFormatOptions`](#i18nnumberformatoptions)

Intl-style number format options.

##### Returns

`string`

***

#### sandkit.api.i18n.key() :id=sandkit.api.i18n.key

```ts
key(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L47)

Joins key parts into a single translation key.

##### Parameters

###### parts

...`string`[]

Key segments joined with `.`.

##### Returns

`string`

***

#### sandkit.api.i18n.getName() :id=sandkit.api.i18n.getname

```ts
getName(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L52)

Returns the display name from a definition with nameKey or name.

##### Parameters

###### definition

Object with `nameKey` or `name`.

###### nameKey?

`string`

###### name?

`string`

##### Returns

`string`

***

#### sandkit.api.i18n.getDescription() :id=sandkit.api.i18n.getdescription

```ts
getDescription(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L57)

Returns the description from a definition with descriptionKey or description.

##### Parameters

###### definition

Object with `descriptionKey` or `description`.

###### descriptionKey?

`string`

###### description?

`string`

##### Returns

`string`

***

#### sandkit.api.i18n.translatable() :id=sandkit.api.i18n.translatable

```ts
translatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L63)

Creates a translatable string object with a fallback.

##### Parameters

###### key

`string`

Translation key.

###### fallback

`string`

Text used when no translation is registered.

##### Returns

`object`

###### \_\_translatable

```ts
\_\_translatable: true
```

###### key

```ts
key: string
```

###### fallback

```ts
fallback: string
```

***

#### sandkit.api.i18n.setGlobal() :id=sandkit.api.i18n.setglobal

```ts
setGlobal(key: string, value: string | (() => string)): void
```

Defined in: [sandkit/api/i18n.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L69)

Sets a global string or lazy resolver used in translations.

##### Parameters

###### key

`string`

Global helper key.

###### value

`string` \| (() => `string`)

Static string or function that returns the current value.

##### Returns

`void`

***

#### sandkit.api.i18n.getGlobal() :id=sandkit.api.i18n.getglobal

```ts
getGlobal(key: string): string | undefined
```

Defined in: [sandkit/api/i18n.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L74)

Returns a global translation helper value.

##### Parameters

###### key

`string`

Global helper key.

##### Returns

`string` \| `undefined`

***

#### sandkit.api.i18n.clearGlobal() :id=sandkit.api.i18n.clearglobal

```ts
clearGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L79)

Removes a global translation helper value.

##### Parameters

###### key

`string`

Global helper key.

##### Returns

`void`

***

#### sandkit.api.i18n.getGlobals() :id=sandkit.api.i18n.getglobals

```ts
getGlobals(): Record<string, string>
```

Defined in: [sandkit/api/i18n.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L81)

Returns all global translation helper values.

##### Returns

`Record`\<`string`, `string`\>

***

#### sandkit.api.i18n.formatKeyForDisplay() :id=sandkit.api.i18n.formatkeyfordisplay

```ts
formatKeyForDisplay(keyCode: string): string
```

Defined in: [sandkit/api/i18n.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L86)

Formats a key code for display in UI.

##### Parameters

###### keyCode

`string`

Keyboard key code or binding name.

##### Returns

`string`

---

## sandkit.api.input

`sandkit.api.input` — key bindings, mouse position, and modifier keys.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.input.InputBindingHandlers :id=sandkit.api.input.inputbindinghandlers

Defined in: [sandkit/api/input.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L98)

Handlers invoked when a binding is pressed or released.

##### Properties

###### down?

```ts
optional down?: () => void
```

Defined in: [sandkit/api/input.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L100)

Called when the binding is pressed.

###### Returns

`void`

###### up?

```ts
optional up?: () => void
```

Defined in: [sandkit/api/input.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L102)

Called when the binding is released.

###### Returns

`void`

***

#### sandkit.api.input.InputBindingDefinition :id=sandkit.api.input.inputbindingdefinition

Defined in: [sandkit/api/input.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L106)

Definition for a registered input binding.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### displayName

```ts
displayName: string
```

Defined in: [sandkit/api/input.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L108)

Display name shown in settings.

###### displayNameKey?

```ts
optional displayNameKey?: string
```

Defined in: [sandkit/api/input.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L110)

i18n key for the display name (overrides displayName when set).

###### category

```ts
category: string
```

Defined in: [sandkit/api/input.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L112)

Settings category for grouping.

###### handlers

```ts
handlers: InputBindingHandlers
```

Defined in: [sandkit/api/input.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L114)

Press and release handlers.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.input.BindingId :id=sandkit.api.input.bindingid

```ts
BindingId = LooseString<` ${KeyBinding} `>
```

Defined in: [sandkit/api/input.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L77)

Binding id. Vanilla [KeyBindingEnum](api/sandkit.enums.KeyBinding.md) names autocomplete; custom ids are allowed.

***

#### sandkit.api.input.KeyCode :id=sandkit.api.input.keycode

```ts
KeyCode = LooseString<"Shift" | "Alt" | "Control" | "Meta" | "ShiftLeft" | "ShiftRight" | "AltLeft" | "AltRight" | "ControlLeft" | "ControlRight" | "MetaLeft" | "MetaRight">
```

Defined in: [sandkit/api/input.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L82)

KeyboardEvent.code, a modifier alias (`Shift`), or a chord (`Control+KeyC`).

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.input.registerBinding() :id=sandkit.api.input.registerbinding

```ts
registerBinding(bindingId: BindingId, defaultKeys: KeyCode[], definition: InputBindingDefinition): BindingId
```

Defined in: [sandkit/api/input.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L16)

Register a key binding and return its binding id.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Unique id for the binding (also used in settings).

###### defaultKeys

[`KeyCode`](#keycode)[]

Default key codes (for example `"Control+KeyC"`).

###### definition

[`InputBindingDefinition`](#inputbindingdefinition)

Display metadata and press/release handlers.

##### Returns

[`BindingId`](#bindingid)

The registered binding id.

***

#### sandkit.api.input.getMouseCellPosition() :id=sandkit.api.input.getmousecellposition

```ts
getMouseCellPosition(): object
```

Defined in: [sandkit/api/input.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L22)

Return the mouse position in cell coordinates.

##### Returns

`object`

Cell `{ x, y }` under the cursor.

###### x

```ts
x: number
```

###### y

```ts
y: number
```

***

#### sandkit.api.input.getBoundKeys() :id=sandkit.api.input.getboundkeys

```ts
getBoundKeys(bindingId: BindingId): KeyCode[]
```

Defined in: [sandkit/api/input.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L31)

Return the keys currently bound to a binding id.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

[`KeyCode`](#keycode)[]

Key strings from settings (for example `"KeyA"` or `"Shift"`).
Session `input.keys` is keyed by `KeyboardEvent.code`. Modifier aliases
(`Shift`, `Alt`, `Control`, `Meta`) expand to `ShiftLeft` / `ShiftRight` and the same for the other modifiers.

***

#### sandkit.api.input.getDisplayKey() :id=sandkit.api.input.getdisplaykey

```ts
getDisplayKey(bindingId: BindingId, defaultLabel?: string): string
```

Defined in: [sandkit/api/input.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L39)

Return a display label for the bound key.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

###### defaultLabel?

`string`

Fallback label when no key is bound.

##### Returns

`string`

Human-readable key label for UI.

***

#### sandkit.api.input.triggerBinding() :id=sandkit.api.input.triggerbinding

```ts
triggerBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L45)

Fire the binding down handler as if the key was pressed.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### sandkit.api.input.pressBinding() :id=sandkit.api.input.pressbinding

```ts
pressBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L51)

Fire the binding down handler without a matching release.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### sandkit.api.input.releaseBinding() :id=sandkit.api.input.releasebinding

```ts
releaseBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L57)

Fire the binding up handler.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### sandkit.api.input.resetMouseState() :id=sandkit.api.input.resetmousestate

```ts
resetMouseState(): void
```

Defined in: [sandkit/api/input.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L60)

Clear internal mouse button state.

##### Returns

`void`

***

#### sandkit.api.input.isCtrlHeld() :id=sandkit.api.input.isctrlheld

```ts
isCtrlHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L66)

Return true when Ctrl is held.

##### Returns

`boolean`

True when the Ctrl modifier is down.

***

#### sandkit.api.input.isAltHeld() :id=sandkit.api.input.isaltheld

```ts
isAltHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/input.d.ts#L72)

Return true when Alt is held.

##### Returns

`boolean`

True when the Alt modifier is down.

---

## sandkit.api.items

`sandkit.api.items` — register custom inventory items and query active items.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.items.ItemDefinition :id=sandkit.api.items.itemdefinition

Defined in: [sandkit/api/items.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L10)

Definition for a mod-registered inventory item.

##### Type Parameters

###### State

`State` = `unknown`

###### Action

`Action` = `unknown`

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### handleAction?

```ts
optional handleAction?: (state: State, action: Action) => unknown
```

Defined in: [sandkit/api/items.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L12)

Handles item use actions.

###### Parameters

###### state

`State`

###### action

`Action`

###### Returns

`unknown`

###### afterRender?

```ts
optional afterRender?: (state: State) => void
```

Defined in: [sandkit/api/items.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L14)

Called after the item is rendered each frame.

###### Parameters

###### state

`State`

###### Returns

`void`

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.items.ItemId :id=sandkit.api.items.itemid

```ts
ItemId = ItemId | LooseString<never>
```

Defined in: [sandkit/api/items.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L52)

Inventory item id.
Built-in [ItemIdEnum](api/sandkit.enums.ItemId.md) values autocomplete; custom string ids are allowed.

***

#### sandkit.api.items.ItemType :id=sandkit.api.items.itemtype

```ts
ItemType = ItemType | TaggedNumber<"itemType">
```

Defined in: [sandkit/api/items.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L57)

Item category handle.
Built-in [ItemTypeEnum](api/sandkit.enums.ItemType.md) values autocomplete.

***

#### sandkit.api.items.ModItem :id=sandkit.api.items.moditem

```ts
ModItem = unknown
```

Defined in: [sandkit/api/items.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L59)

Runtime item instance (not yet typed in declarations).

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.items.register() :id=sandkit.api.items.register

```ts
register(definition: ItemDefinition): void
```

Defined in: [sandkit/api/items.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L22)

Registers a new item definition.

##### Parameters

###### definition

[`ItemDefinition`](#itemdefinition)

Item id, handlers, and display metadata.

##### Returns

`void`

***

#### sandkit.api.items.updateDefinition() :id=sandkit.api.items.updatedefinition

```ts
updateDefinition(itemId: ItemId, partial: Partial<ItemDefinition>): void
```

Defined in: [sandkit/api/items.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L28)

Updates fields on an existing item definition.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Registered item id.

###### partial

`Partial`\<[`ItemDefinition`](#itemdefinition)\>

Fields to merge into the definition.

##### Returns

`void`

***

#### sandkit.api.items.getDefinitionById() :id=sandkit.api.items.getdefinitionbyid

```ts
getDefinitionById(itemId: ItemId): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L33)

Returns the item definition for an id, or undefined.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Registered item id.

##### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

#### sandkit.api.items.createFromId() :id=sandkit.api.items.createfromid

```ts
createFromId(itemId: ItemId): unknown
```

Defined in: [sandkit/api/items.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L38)

Creates a runtime item instance from an id.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Registered item id.

##### Returns

`unknown`

***

#### sandkit.api.items.getActive() :id=sandkit.api.items.getactive

```ts
getActive(): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L40)

Returns the item definition for the active hotbar slot.

##### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

#### sandkit.api.items.isActiveById() :id=sandkit.api.items.isactivebyid

```ts
isActiveById(itemId: ItemId, itemType?: ItemType): boolean
```

Defined in: [sandkit/api/items.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L46)

Returns true when the given item is the active hotbar item.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Item id or numeric type to compare.

###### itemType?

[`ItemType`](#itemtype)

Optional item type discriminator.

##### Returns

`boolean`

---

## sandkit.api.lights

`sandkit.api.lights` — temporary VFX lights and persistent world lights.
Main thread only.

### Namespaces <!-- {docsify-ignore} -->

- [vfx](api/sandkit.api.lights.vfx.md)
- [persistent](api/sandkit.api.lights.persistent.md)

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.lights.PersistentLightOptions :id=sandkit.api.lights.persistentlightoptions

Defined in: [sandkit/api/lights.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L54)

Options for persistent world lights.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/lights.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L56)

Light brightness multiplier.

###### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/lights.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L58)

Light radius in pixels.

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/lights.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L60)

RGBA color components.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.lights.TemporaryLightOptions :id=sandkit.api.lights.temporarylightoptions

```ts
TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [sandkit/api/lights.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L51)

Options for temporary VFX lights.

***

#### sandkit.api.lights.PersistentLightHandle :id=sandkit.api.lights.persistentlighthandle

```ts
PersistentLightHandle = unknown
```

Defined in: [sandkit/api/lights.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L65)

Handle returned from [persistent.createAtWorld](api/sandkit.api.lights.persistent.md#createatworld).

---

## sandkit.api.lights.persistent

Lights that persist in the world save.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.lights.persistent.createAtWorld() :id=sandkit.api.lights.persistent.createatworld

```ts
createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): unknown
```

Defined in: [sandkit/api/lights.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L32)

Creates a persistent light at world coordinates.

##### Parameters

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

###### options?

[`PersistentLightOptions`](api/sandkit.api.lights.md#persistentlightoptions)

Brightness, size, color, and persistence options.

##### Returns

`unknown`

***

#### sandkit.api.lights.persistent.removeAtWorld() :id=sandkit.api.lights.persistent.removeatworld

```ts
removeAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/lights.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L38)

Removes the persistent light at world coordinates.

##### Parameters

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

##### Returns

`void`

***

#### sandkit.api.lights.persistent.fadeAtWorld() :id=sandkit.api.lights.persistent.fadeatworld

```ts
fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void
```

Defined in: [sandkit/api/lights.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L45)

Fades out the persistent light at world coordinates over durationMs.

##### Parameters

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

###### durationMs?

`number`

Fade duration in milliseconds.

##### Returns

`void`

***

#### sandkit.api.lights.persistent.markDirty() :id=sandkit.api.lights.persistent.markdirty

```ts
markDirty(): void
```

Defined in: [sandkit/api/lights.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L47)

Marks persistent lights dirty so they are saved on the next flush.

##### Returns

`void`

---

## sandkit.api.lights.vfx

Short-lived visual effect lights.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.lights.vfx.createAtWorld() :id=sandkit.api.lights.vfx.createatworld

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object
```

Defined in: [sandkit/api/lights.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L16)

Creates a temporary light at world coordinates.

##### Parameters

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

###### options?

[`TemporaryLightOptions`](api/sandkit.api.effects.md#temporarylightoptions)

Brightness, duration, color, and dedup options.

##### Returns

`object`

###### index

```ts
index: number | null
```

***

#### sandkit.api.lights.vfx.removeById() :id=sandkit.api.lights.vfx.removebyid

```ts
removeById(lightId: number): void
```

Defined in: [sandkit/api/lights.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L21)

Removes a temporary light by its id.

##### Parameters

###### lightId

`number`

Light index returned from [createAtWorld](#createatworld).

##### Returns

`void`

---

## sandkit.api.maps

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.maps.AvailableMapV1 :id=sandkit.api.maps.availablemapv1

Defined in: [sandkit/api/maps.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/maps.d.ts#L26)

Available map entry shape.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: string
```

Defined in: [sandkit/api/maps.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/maps.d.ts#L28)

Map identifier passed to [start](#start).

###### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/maps.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/maps.d.ts#L30)

Display name or translation key.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.maps.getAvailable() :id=sandkit.api.maps.getavailable

```ts
getAvailable(): readonly Readonly<AvailableMapV1>[]
```

Defined in: [sandkit/api/maps.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/maps.d.ts#L18)

Return maps the player can start.

##### Returns

readonly `Readonly`\<[`AvailableMapV1`](#availablemapv1)\>[]

***

#### sandkit.api.maps.start() :id=sandkit.api.maps.start

```ts
start(mapId: string): boolean
```

Defined in: [sandkit/api/maps.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/maps.d.ts#L23)

Start a map by id. Return true when start succeeds.

##### Parameters

###### mapId

`string`

Custom map identifier.

##### Returns

`boolean`

### References <!-- {docsify-ignore} -->

#### sandkit.api.maps.getActive :id=sandkit.api.maps.getactive

Re-exports [getActive](api/sandkit.api.maps.worker.md#getactive)

***

#### sandkit.api.maps.ActiveMapV1 :id=sandkit.api.maps.activemapv1

Re-exports [ActiveMapV1](api/sandkit.api.maps.worker.md#activemapv1)

---

## sandkit.api.mods

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.mods.AssetProviderV1 :id=sandkit.api.mods.assetproviderv1

```ts
AssetProviderV1 = AssetProviderV1
```

Defined in: [sandkit/api/mods.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/mods.d.ts#L17)

Asset provider entry shape.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.mods.getProviders() :id=sandkit.api.mods.getproviders

```ts
getProviders(kind: string): readonly AssetProviderV1[]
```

Defined in: [sandkit/api/mods.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/mods.d.ts#L15)

Return asset providers registered for a kind string.

##### Parameters

###### kind

`string`

Asset kind identifier (e.g. texture pack category).

##### Returns

readonly [`AssetProviderV1`](api/sandkit.api.assets.md#assetproviderv1)[]

---

## sandkit.api.patterns

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.patterns.PatternExcavateOptions :id=sandkit.api.patterns.patternexcavateoptions

```ts
PatternExcavateOptions = ExcavateOptions
```

Defined in: [sandkit/api/patterns.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/patterns.d.ts#L31)

Options for pattern-based excavation. Same shape as [shared.api.world.ExcavateOptions](api/sandkit.api.world.worker.md#excavateoptions).

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.patterns.createCircle() :id=sandkit.api.patterns.createcircle

```ts
createCircle(size: number): number[][]
```

Defined in: [sandkit/api/patterns.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/patterns.d.ts#L17)

Build a circular excavation pattern matrix for the given size.

##### Parameters

###### size

`number`

Pattern width and height in cells.

##### Returns

`number`[][]

Square matrix with `1` inside the circle and `0` outside.

***

#### sandkit.api.patterns.excavateAtCell() :id=sandkit.api.patterns.excavateatcell

```ts
excavateAtCell(...args: [number, number, number[][], Vector2, number, ExcavateOptions]): void
```

Defined in: [sandkit/api/patterns.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/patterns.d.ts#L28)

Excavate at a cell using a pattern matrix and output velocity.

##### Parameters

###### args

...\[`number`, `number`, `number`[][], [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](api/sandkit.api.world.worker.md#excavateoptions)\]

##### Returns

`void`

---

## sandkit.api.player

### Namespaces <!-- {docsify-ignore} -->

- [inventory](api/sandkit.api.player.inventory.md)
- [buildings](api/sandkit.api.player.buildings.md)

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.player.setWorldPosition() :id=sandkit.api.player.setworldposition

```ts
setWorldPosition(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L25)

Set the player world position.

##### Parameters

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

##### Returns

`void`

***

#### sandkit.api.player.setVelocity() :id=sandkit.api.player.setvelocity

```ts
setVelocity(velocityX: number, velocityY: number): void
```

Defined in: [sandkit/api/player.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L32)

Set the player velocity.

##### Parameters

###### velocityX

`number`

Horizontal velocity in pixels per second.

###### velocityY

`number`

Vertical velocity in pixels per second.

##### Returns

`void`

***

#### sandkit.api.player.setMovementSpeedMultiplier() :id=sandkit.api.player.setmovementspeedmultiplier

```ts
setMovementSpeedMultiplier(multiplier: number): void
```

Defined in: [sandkit/api/player.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L39)

Set the movement speed multiplier.

##### Parameters

###### multiplier

`number`

Speed scale factor (`1` is default walk). `0` freezes movement.
Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`.

##### Returns

`void`

***

#### sandkit.api.player.setMovementMode() :id=sandkit.api.player.setmovementmode

```ts
setMovementMode(mode: "normal" | "hover"): boolean
```

Defined in: [sandkit/api/player.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L46)

Set movement mode to normal or hover.

##### Parameters

###### mode

`"normal"` \| `"hover"`

`"normal"` for default physics, or `"hover"` for hover flight.

##### Returns

`boolean`

True when the mode changes.

***

#### sandkit.api.player.isOnGround() :id=sandkit.api.player.isonground

```ts
isOnGround(): boolean
```

Defined in: [sandkit/api/player.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L54)

Return true when the player is on ground.
Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
on the store snapshot — that flag is not updated during play.

##### Returns

`boolean`

True when the player touches solid ground.

***

#### sandkit.api.player.teleportToGround() :id=sandkit.api.player.teleporttoground

```ts
teleportToGround(): void
```

Defined in: [sandkit/api/player.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L57)

Move the player down until ground is found.

##### Returns

`void`

***

#### sandkit.api.player.isWorldPositionClear() :id=sandkit.api.player.isworldpositionclear

```ts
isWorldPositionClear(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L65)

Return true when the world position has no collision.

##### Parameters

###### worldX

`number`

World x position in pixels to test.

###### worldY

`number`

World y position in pixels to test.

##### Returns

`boolean`

True when the player hitbox fits at the position.

### References <!-- {docsify-ignore} -->

#### sandkit.api.player.getWorldPosition :id=sandkit.api.player.getworldposition

Re-exports [getWorldPosition](api/sandkit.api.player.worker.md#getworldposition)

***

#### sandkit.api.player.isCollidingWithCell :id=sandkit.api.player.iscollidingwithcell

Re-exports [isCollidingWithCell](api/sandkit.api.player.worker.md#iscollidingwithcell)

***

#### sandkit.api.player.isWithinRadiusOfCell :id=sandkit.api.player.iswithinradiusofcell

Re-exports [isWithinRadiusOfCell](api/sandkit.api.player.worker.md#iswithinradiusofcell)

---

## sandkit.api.player.buildings

Player building unlock helpers.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.player.buildings.unlockByType() :id=sandkit.api.player.buildings.unlockbytype

```ts
unlockByType(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L82)

Unlock a structure type for building.

##### Parameters

###### structureId

`string`

Registered structure id string.

##### Returns

`void`

---

## sandkit.api.player.inventory

Player inventory helpers.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.player.inventory.addFromId() :id=sandkit.api.player.inventory.addfromid

```ts
addFromId(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L73)

Add an item to inventory by item id.

##### Parameters

###### itemId

`string`

Registered item id string.

##### Returns

`void`

---

## sandkit.api.processing

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.processing.WeightedRecipeOutput :id=sandkit.api.processing.weightedrecipeoutput

Defined in: [sandkit/api/processing.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L30)

Weighted element output entry shared by machine recipes.

##### Properties

###### elementType

```ts
elementType: ElementType
```

Defined in: [sandkit/api/processing.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L32)

Output element type (1–255).

###### chance

```ts
chance: number
```

Defined in: [sandkit/api/processing.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L34)

Output probability from 0 to 1.

***

#### sandkit.api.processing.PlanterBoxRecipeDefinitionV1 :id=sandkit.api.processing.planterboxrecipedefinitionv1

Defined in: [sandkit/api/processing.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L38)

Planter box grower recipe definition.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/processing.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L40)

Input element type placed on the grower.

###### output

```ts
output: ElementType
```

Defined in: [sandkit/api/processing.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L42)

Output element type produced by the grower.

###### chance?

```ts
optional chance?: number
```

Defined in: [sandkit/api/processing.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L44)

Success chance from 0 to 1. Default 1.

***

#### sandkit.api.processing.ShakerRecipeDefinitionV1 :id=sandkit.api.processing.shakerrecipedefinitionv1

Defined in: [sandkit/api/processing.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L48)

Shaker recipe definition.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/processing.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L50)

Input element type dropped on the shaker.

###### outputsAbove

```ts
outputsAbove: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/processing.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L52)

Weighted outputs ejected upward.

###### outputsBelow

```ts
outputsBelow: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/processing.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L54)

Weighted outputs ejected downward.

***

#### sandkit.api.processing.KineticPressRecipeDefinitionV1 :id=sandkit.api.processing.kineticpressrecipedefinitionv1

Defined in: [sandkit/api/processing.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L58)

Kinetic press recipe definition.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/processing.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L60)

Input element type processed by the press.

###### minimumDownwardVelocity

```ts
minimumDownwardVelocity: number
```

Defined in: [sandkit/api/processing.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L62)

Minimum downward velocity required to trigger the press.

###### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/processing.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L64)

Weighted outputs produced by the press.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.processing.registerGrower() :id=sandkit.api.processing.registergrower

```ts
registerGrower(definition: PlanterBoxRecipeDefinitionV1): void
```

Defined in: [sandkit/api/processing.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L15)

Register a planter box grower recipe.

##### Parameters

###### definition

[`PlanterBoxRecipeDefinitionV1`](#planterboxrecipedefinitionv1)

Grower input/output recipe.

##### Returns

`void`

***

#### sandkit.api.processing.registerShaker() :id=sandkit.api.processing.registershaker

```ts
registerShaker(definition: ShakerRecipeDefinitionV1): void
```

Defined in: [sandkit/api/processing.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L21)

Register a shaker recipe.

##### Parameters

###### definition

[`ShakerRecipeDefinitionV1`](#shakerrecipedefinitionv1)

Shaker input and weighted outputs.

##### Returns

`void`

***

#### sandkit.api.processing.registerKineticPress() :id=sandkit.api.processing.registerkineticpress

```ts
registerKineticPress(definition: KineticPressRecipeDefinitionV1): void
```

Defined in: [sandkit/api/processing.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/processing.d.ts#L27)

Register a kinetic press recipe.

##### Parameters

###### definition

[`KineticPressRecipeDefinitionV1`](#kineticpressrecipedefinitionv1)

Press input, velocity threshold, and outputs.

##### Returns

`void`

---

## sandkit.api.progression

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.progression.ProgressionCompletionRequestV1 :id=sandkit.api.progression.progressioncompletionrequestv1

Defined in: [sandkit/api/progression.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/progression.d.ts#L17)

Progression completion request shape.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: string
```

Defined in: [sandkit/api/progression.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/progression.d.ts#L19)

Progression step or quest identifier.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.progression.complete() :id=sandkit.api.progression.complete

```ts
complete(request: ProgressionCompletionRequestV1): boolean
```

Defined in: [sandkit/api/progression.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/progression.d.ts#L14)

Mark a progression step complete. Return true when completion succeeds.

##### Parameters

###### request

[`ProgressionCompletionRequestV1`](#progressioncompletionrequestv1)

Progression id and optional metadata for the step.

##### Returns

`boolean`

---

## sandkit.api.projectiles

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.projectiles.ProjectileDefinition :id=sandkit.api.projectiles.projectiledefinition

Defined in: [sandkit/api/projectiles.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L54)

Mod-registered projectile definition.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: string
```

Defined in: [sandkit/api/projectiles.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L55)

###### sprite

```ts
sprite: object
```

Defined in: [sandkit/api/projectiles.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L56)

###### id

```ts
id: string
```

###### tint?

```ts
optional tint?: number
```

###### getOptions

```ts
getOptions: () => Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L61)

Returns spawn-time physics and visual options.

###### Returns

`Record`\<`string`, `unknown`\>

###### getModData?

```ts
optional getModData?: (state: unknown, projectile: Projectile) => Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L63)

Optional per-projectile mutable data factory.

###### Parameters

###### state

`unknown`

###### projectile

[`Projectile`](#projectile)

###### Returns

`Record`\<`string`, `unknown`\>

***

#### sandkit.api.projectiles.ProjectileBlueprint :id=sandkit.api.projectiles.projectileblueprint

Defined in: [sandkit/api/projectiles.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L68)

Blueprint used to spawn a projectile.

##### Properties

###### opts

```ts
opts: Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L69)

###### type

```ts
type: unknown
```

Defined in: [sandkit/api/projectiles.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L70)

***

#### sandkit.api.projectiles.Projectile :id=sandkit.api.projectiles.projectile

Defined in: [sandkit/api/projectiles.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L74)

Active projectile instance.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: number
```

Defined in: [sandkit/api/projectiles.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L75)

###### x

```ts
x: number
```

Defined in: [sandkit/api/projectiles.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L76)

###### y

```ts
y: number
```

Defined in: [sandkit/api/projectiles.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L77)

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.projectiles.register() :id=sandkit.api.projectiles.register

```ts
register(definition: ProjectileDefinition): void
```

Defined in: [sandkit/api/projectiles.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L13)

Register a projectile definition.

##### Parameters

###### definition

[`ProjectileDefinition`](#projectiledefinition)

Projectile id, sprite, and runtime options factory.

##### Returns

`void`

***

#### sandkit.api.projectiles.getDefinitionById() :id=sandkit.api.projectiles.getdefinitionbyid

```ts
getDefinitionById(projectileId: string): ProjectileDefinition | undefined
```

Defined in: [sandkit/api/projectiles.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L19)

Return a projectile definition by string id.

##### Parameters

###### projectileId

`string`

Registered projectile id.

##### Returns

[`ProjectileDefinition`](#projectiledefinition) \| `undefined`

***

#### sandkit.api.projectiles.createBlueprintFromId() :id=sandkit.api.projectiles.createblueprintfromid

```ts
createBlueprintFromId(projectileId: string): ProjectileBlueprint
```

Defined in: [sandkit/api/projectiles.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L26)

Build a spawn blueprint from a projectile string id.

##### Parameters

###### projectileId

`string`

Registered projectile id.

##### Returns

[`ProjectileBlueprint`](#projectileblueprint)

Blueprint passed to [spawnAtWorld](#spawnatworld).

***

#### sandkit.api.projectiles.getAll() :id=sandkit.api.projectiles.getall

```ts
getAll(): Projectile[]
```

Defined in: [sandkit/api/projectiles.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L29)

Return all active projectiles.

##### Returns

[`Projectile`](#projectile)[]

***

#### sandkit.api.projectiles.getById() :id=sandkit.api.projectiles.getbyid

```ts
getById(projectileId: number): Projectile | undefined
```

Defined in: [sandkit/api/projectiles.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L35)

Return a projectile by numeric id.

##### Parameters

###### projectileId

`number`

Runtime projectile id.

##### Returns

[`Projectile`](#projectile) \| `undefined`

***

#### sandkit.api.projectiles.remove() :id=sandkit.api.projectiles.remove

```ts
remove(projectile: Projectile): void
```

Defined in: [sandkit/api/projectiles.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L41)

Remove a projectile from the world.

##### Parameters

###### projectile

[`Projectile`](#projectile)

Projectile instance to remove.

##### Returns

`void`

***

#### sandkit.api.projectiles.spawnAtWorld() :id=sandkit.api.projectiles.spawnatworld

```ts
spawnAtWorld(worldX: number, worldY: number, angle: number, blueprint: ProjectileBlueprint): Projectile
```

Defined in: [sandkit/api/projectiles.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/projectiles.d.ts#L51)

Spawn a projectile at world position with angle and blueprint.

##### Parameters

###### worldX

`number`

Spawn x position in world pixels.

###### worldY

`number`

Spawn y position in world pixels.

###### angle

`number`

Launch angle in radians.

###### blueprint

[`ProjectileBlueprint`](#projectileblueprint)

Blueprint from [createBlueprintFromId](#createblueprintfromid).

##### Returns

[`Projectile`](#projectile)

The spawned projectile instance.

---

## sandkit.api.random

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.random.int() :id=sandkit.api.random.int

```ts
int(min: number, max: number): number
```

Defined in: [sandkit/api/random.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/random.d.ts#L14)

Return a random integer in the inclusive range.

##### Parameters

###### min

`number`

Minimum value (inclusive).

###### max

`number`

Maximum value (inclusive).

##### Returns

`number`

***

#### sandkit.api.random.float() :id=sandkit.api.random.float

```ts
float(min: number, max: number): number
```

Defined in: [sandkit/api/random.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/random.d.ts#L20)

Return a random float in the inclusive range.

##### Parameters

###### min

`number`

Minimum value (inclusive).

###### max

`number`

Maximum value (inclusive).

##### Returns

`number`

---

## sandkit.api.raycast

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.raycast.castFromWorld() :id=sandkit.api.raycast.castfromworld

```ts
castFromWorld(startWorldX: number, startWorldY: number, angle: number, maxDistance: number): Vector2 & object | null
```

Defined in: [sandkit/api/raycast.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/raycast.d.ts#L18)

Cast a ray from world position. Return hit point and distance, or null.

##### Parameters

###### startWorldX

`number`

Ray origin world X in pixels.

###### startWorldY

`number`

Ray origin world Y in pixels.

###### angle

`number`

Ray direction in radians.

###### maxDistance

`number`

Maximum ray length in pixels.

##### Returns

[`Vector2`](api/shared.player.md#vector2) & `object` \| `null`

---

## sandkit.api.reactions

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.reactions.ContactRecipeDefinitionV1 :id=sandkit.api.reactions.contactrecipedefinitionv1

Defined in: [sandkit/api/reactions.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/reactions.d.ts#L18)

Contact reaction recipe definition.

##### Properties

###### inputA

```ts
inputA: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/reactions.d.ts#L20)

First reacting element type.

###### inputB

```ts
inputB: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/reactions.d.ts#L22)

Second reacting element type.

###### outputA

```ts
outputA: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/reactions.d.ts#L24)

Element type produced from input A, or null for no output.

###### outputB

```ts
outputB: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/reactions.d.ts#L26)

Element type produced from input B, or null for no output.

###### orientation?

```ts
optional orientation?: "any" | "stacked"
```

Defined in: [sandkit/api/reactions.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/reactions.d.ts#L28)

Contact layout requirement. Default `"any"`.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.reactions.registerContact() :id=sandkit.api.reactions.registercontact

```ts
registerContact(definition: ContactRecipeDefinitionV1): void
```

Defined in: [sandkit/api/reactions.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/reactions.d.ts#L15)

Register a contact reaction between elements.

##### Parameters

###### definition

[`ContactRecipeDefinitionV1`](#contactrecipedefinitionv1)

Contact recipe inputs, outputs, and orientation.

##### Returns

`void`

---

## sandkit.api.rendering

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.rendering.getDrawPositionAtCell() :id=sandkit.api.rendering.getdrawpositionatcell

```ts
getDrawPositionAtCell(...args: CellCoordinates): Vector2
```

Defined in: [sandkit/api/rendering.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/rendering.d.ts#L16)

Return screen draw position for a grid cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`Vector2`](api/shared.player.md#vector2)

***

#### sandkit.api.rendering.getGridMetrics() :id=sandkit.api.rendering.getgridmetrics

```ts
getGridMetrics(): object
```

Defined in: [sandkit/api/rendering.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/rendering.d.ts#L18)

Return cell size and snap grid metrics.

##### Returns

`object`

###### cellSize

```ts
cellSize: number
```

###### snapGridCellSize

```ts
snapGridCellSize: number
```

***

#### sandkit.api.rendering.getOverlayViewportSize() :id=sandkit.api.rendering.getoverlayviewportsize

```ts
getOverlayViewportSize(): object
```

Defined in: [sandkit/api/rendering.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/rendering.d.ts#L20)

Return overlay viewport width and height in pixels.

##### Returns

`object`

###### width

```ts
width: number
```

###### height

```ts
height: number
```

***

#### sandkit.api.rendering.withOverlayContext() :id=sandkit.api.rendering.withoverlaycontext

```ts
withOverlayContext<T>(callback: (context: CanvasRenderingContext2D) => T): T
```

Defined in: [sandkit/api/rendering.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/rendering.d.ts#L25)

Run a callback with the overlay canvas context.

##### Type Parameters

###### T

`T`

##### Parameters

###### callback

(`context`: `CanvasRenderingContext2D`) => `T`

Receives the overlay 2D context; return value is passed through.

##### Returns

`T`

---

## sandkit.api.resources

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.resources.collectFluxiteAtCell() :id=sandkit.api.resources.collectfluxiteatcell

```ts
collectFluxiteAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/resources.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/resources.d.ts#L16)

Collect fluxite at the given cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

***

#### sandkit.api.resources.updateEnergy() :id=sandkit.api.resources.updateenergy

```ts
updateEnergy(amount: number, options?: object): void
```

Defined in: [sandkit/api/resources.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/resources.d.ts#L22)

Update stored energy by amount with optional UI deferral.

##### Parameters

###### amount

`number`

Energy delta (positive or negative).

###### options?

When `deferUi` is true, skip immediate UI refresh.

###### deferUi?

`boolean`

##### Returns

`void`

---

## sandkit.api.scene

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.scene.getActive() :id=sandkit.api.scene.getactive

```ts
getActive(): Scene
```

Defined in: [sandkit/api/scene.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/scene.d.ts#L14)

Return the active scene.

##### Returns

[`Scene`](api/sandkit.enums.Scene.md)

### References <!-- {docsify-ignore} -->

#### sandkit.api.scene.Scene :id=sandkit.api.scene.scene

Re-exports [Scene](api/sandkit.enums.Scene.md)

---

## sandkit.api.schedule

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.schedule.nextTick() :id=sandkit.api.schedule.nexttick

```ts
nextTick(callback: () => void): void
```

Defined in: [sandkit/api/schedule.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/schedule.d.ts#L13)

Run a callback on the next game tick.

##### Parameters

###### callback

() => `void`

Function invoked once on the next tick.

##### Returns

`void`

---

## sandkit.api.settings

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.settings.FieldId :id=sandkit.api.settings.fieldid

```ts
FieldId = LooseString<never>
```

Defined in: [sandkit/api/settings.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/settings.d.ts#L25)

Settings field id. Any string is allowed.

***

#### sandkit.api.settings.ConfigValueV1 :id=sandkit.api.settings.configvaluev1

```ts
ConfigValueV1 = string | number | boolean | null
```

Defined in: [sandkit/api/settings.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/settings.d.ts#L28)

Settings field value shape.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.settings.get() :id=sandkit.api.settings.get

```ts
get(fieldId: string & object): ConfigValueV1 | undefined
```

Defined in: [sandkit/api/settings.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/settings.d.ts#L15)

Return a settings field value by id.

##### Parameters

###### fieldId

`string` & `object`

Settings field identifier.

##### Returns

[`ConfigValueV1`](#configvaluev1) \| `undefined`

***

#### sandkit.api.settings.getAll() :id=sandkit.api.settings.getall

```ts
getAll(): Readonly<Record<string, ConfigValueV1>>
```

Defined in: [sandkit/api/settings.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/settings.d.ts#L17)

Return all settings as a read-only map.

##### Returns

`Readonly`\<`Record`\<`string`, [`ConfigValueV1`](#configvaluev1)\>\>

***

#### sandkit.api.settings.onChange() :id=sandkit.api.settings.onchange

```ts
onChange(callback: (values: Readonly<Record<string, ConfigValueV1>>) => void): () => void
```

Defined in: [sandkit/api/settings.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/settings.d.ts#L22)

Subscribe to settings changes. Return an unsubscribe function.

##### Parameters

###### callback

(`values`: `Readonly`\<`Record`\<`string`, [`ConfigValueV1`](#configvaluev1)\>\>) => `void`

Called with the full settings map after a change.

##### Returns

() => `void`

---

## sandkit.api.shared

### Namespaces <!-- {docsify-ignore} -->

- [buffers](api/sandkit.api.shared.buffers.md)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.shared.SharedArray :id=sandkit.api.shared.sharedarray

```ts
SharedArray = Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array
```

Defined in: [shared/api/shared.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/shared.d.ts#L26)

Typed array backing a shared buffer.

Use [SharedArrayType](#sharedarraytype) when creating or requiring a buffer. The runtime
returns the matching `*Array` constructor for the configured type.

***

#### sandkit.api.shared.SharedArrayType :id=sandkit.api.shared.sharedarraytype

```ts
SharedArrayType = "uint8" | "uint16" | "uint32" | "int8" | "int16" | "int32" | "float32" | "float64"
```

Defined in: [shared/api/shared.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/shared.d.ts#L37)

Discriminator for the underlying typed array kind.

---

## sandkit.api.shared.buffers

Shared buffer create and lookup.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.shared.buffers.create() :id=sandkit.api.shared.buffers.create

```ts
create(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/shared.d.ts#L19)

Create a named shared buffer with type and length.

##### Parameters

###### key

`string`

Buffer name shared across threads.

###### config

Typed array kind and element count.

###### type

[`SharedArrayType`](api/sandkit.api.shared.md#sharedarraytype)

###### length

`number`

##### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray)

***

#### sandkit.api.shared.buffers.get() :id=sandkit.api.shared.buffers.get

```ts
get(key: string): SharedArray | undefined
```

Defined in: [shared/api/shared.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/shared.d.ts#L17)

Look up a named shared buffer without creating it.

##### Parameters

###### key

`string`

Buffer name shared across threads.

##### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray) \| `undefined`

The typed array, or `undefined` when the buffer does not exist.

---

## sandkit.api.signals

### Namespaces <!-- {docsify-ignore} -->

- [targets](api/sandkit.api.signals.targets.md)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.signals.StructureType :id=sandkit.api.signals.structuretype

```ts
StructureType = unknown
```

Defined in: [sandkit/api/signals.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/signals.d.ts#L20)

Structure type id or enum value.

***

#### sandkit.api.signals.Structure :id=sandkit.api.signals.structure

```ts
Structure = unknown
```

Defined in: [sandkit/api/signals.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/signals.d.ts#L22)

Structure instance in the world.

***

#### sandkit.api.signals.SignalTargetPayloadV1 :id=sandkit.api.signals.signaltargetpayloadv1

```ts
SignalTargetPayloadV1 = unknown
```

Defined in: [sandkit/api/signals.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/signals.d.ts#L24)

Payload delivered to a signal target handler.

---

## sandkit.api.signals.targets

Signal target registration for structure types.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.signals.targets.register() :id=sandkit.api.signals.targets.register

```ts
register(structureTypeOrId: unknown, apply: (structure: unknown, payload: unknown) => void): void
```

Defined in: [sandkit/api/signals.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/signals.d.ts#L16)

Register a handler when a signal targets a structure type.

##### Parameters

###### structureTypeOrId

`unknown`

Structure type id or enum value.

###### apply

(`structure`: `unknown`, `payload`: `unknown`) => `void`

Called when a signal reaches a matching structure.

##### Returns

`void`

---

## sandkit.api.sound

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.sound.SoundHandle :id=sandkit.api.sound.soundhandle

Defined in: [sandkit/api/sound.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L45)

Handle returned from a play call.

##### Methods

###### stop()

```ts
stop(): void
```

Defined in: [sandkit/api/sound.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L47)

Stop this sound instance.

###### Returns

`void`

***

#### sandkit.api.sound.SoundLayer :id=sandkit.api.sound.soundlayer

Defined in: [sandkit/api/sound.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L51)

One layer in a layered sound.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### soundId

```ts
soundId: string
```

Defined in: [sandkit/api/sound.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L53)

Sound id for this layer.

###### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L55)

Layer volume multiplier.

###### delay?

```ts
optional delay?: number
```

Defined in: [sandkit/api/sound.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L57)

Delay in milliseconds before this layer plays.

###### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L59)

Playback rate for this layer.

***

#### sandkit.api.sound.SoundOptions :id=sandkit.api.sound.soundoptions

Defined in: [sandkit/api/sound.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L64)

Options passed to sound play helpers.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L66)

Volume multiplier (0–1 typical).

###### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L68)

Playback rate multiplier.

###### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L70)

World position for distance attenuation.

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### loop?

```ts
optional loop?: boolean
```

Defined in: [sandkit/api/sound.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L72)

When true, loop until stopped.

###### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L74)

Key used with rateLimitMs to dedupe rapid replays.

###### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L76)

Minimum ms between plays with the same rateLimitKey.

***

#### sandkit.api.sound.SoundLayersOptions :id=sandkit.api.sound.soundlayersoptions

Defined in: [sandkit/api/sound.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L81)

Shared options for [playLayers](#playlayers).

##### Properties

###### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L83)

World position applied to all layers.

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L85)

Volume multiplier applied to all layers.

###### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L87)

Key used with rateLimitMs to dedupe rapid replays.

###### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L89)

Minimum ms between plays with the same rateLimitKey.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.sound.play() :id=sandkit.api.sound.play

```ts
play(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L14)

Play a sound by id with optional options.

##### Parameters

###### soundId

`string`

Registered sound identifier.

###### options?

[`SoundOptions`](#soundoptions)

Volume, position, playback rate, and rate-limit options.

##### Returns

[`SoundHandle`](#soundhandle)

***

#### sandkit.api.sound.playActive() :id=sandkit.api.sound.playactive

```ts
playActive(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L20)

Play a sound on the active sound channel.

##### Parameters

###### soundId

`string`

Registered sound identifier.

###### options?

[`SoundOptions`](#soundoptions)

Volume, position, playback rate, and rate-limit options.

##### Returns

[`SoundHandle`](#soundhandle)

***

#### sandkit.api.sound.playLayers() :id=sandkit.api.sound.playlayers

```ts
playLayers(layers: SoundLayer[], options?: SoundLayersOptions): SoundHandle[]
```

Defined in: [sandkit/api/sound.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L26)

Play multiple sound layers with shared options.

##### Parameters

###### layers

[`SoundLayer`](#soundlayer)[]

Layer definitions (sound id, volume, delay, and per-layer options).

###### options?

[`SoundLayersOptions`](#soundlayersoptions)

Shared position, volume, and rate-limit options for all layers.

##### Returns

[`SoundHandle`](#soundhandle)[]

***

#### sandkit.api.sound.calculateDistanceOptionsAtWorld() :id=sandkit.api.sound.calculatedistanceoptionsatworld

```ts
calculateDistanceOptionsAtWorld(worldX: number, worldY: number, baseVolume?: number): SoundOptions
```

Defined in: [sandkit/api/sound.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L33)

Build distance-based volume options for a world position.

##### Parameters

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

###### baseVolume?

`number`

Base volume before distance attenuation.

##### Returns

[`SoundOptions`](#soundoptions)

***

#### sandkit.api.sound.stopById() :id=sandkit.api.sound.stopbyid

```ts
stopById(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L38)

Stop a sound by id.

##### Parameters

###### soundId

`string`

Registered sound identifier to stop.

##### Returns

`void`

***

#### sandkit.api.sound.stopActive() :id=sandkit.api.sound.stopactive

```ts
stopActive(): void
```

Defined in: [sandkit/api/sound.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L40)

Stop the active sound channel.

##### Returns

`void`

***

#### sandkit.api.sound.stopAll() :id=sandkit.api.sound.stopall

```ts
stopAll(): void
```

Defined in: [sandkit/api/sound.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L42)

Stop all playing sounds.

##### Returns

`void`

---

## sandkit.api.sprites

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.sprites.SpriteLoadOptions :id=sandkit.api.sprites.spriteloadoptions

Defined in: [sandkit/api/sprites.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L40)

Options for [load](#load) and [loadFromMod](#loadfrommod).

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### tint?

```ts
optional tint?: number
```

Defined in: [sandkit/api/sprites.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L42)

Packed RGB tint applied after load.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.sprites.LoadedSprite :id=sandkit.api.sprites.loadedsprite

```ts
LoadedSprite = unknown
```

Defined in: [sandkit/api/sprites.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L37)

Loaded sprite handle (runtime texture or display object).

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.sprites.load() :id=sandkit.api.sprites.load

```ts
load(spriteId: string, path: string, options?: SpriteLoadOptions): Promise<void>
```

Defined in: [sandkit/api/sprites.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L15)

Load a sprite from a URL path.

##### Parameters

###### spriteId

`string`

Id used with [getById](#getbyid).

###### path

`string`

URL or asset path to load.

###### options?

[`SpriteLoadOptions`](#spriteloadoptions)

Optional tint and load options.

##### Returns

`Promise`\<`void`\>

***

#### sandkit.api.sprites.loadFromMod() :id=sandkit.api.sprites.loadfrommod

```ts
loadFromMod(spriteId: string, relativePath: string, options?: SpriteLoadOptions): Promise<void>
```

Defined in: [sandkit/api/sprites.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L22)

Load a sprite from the calling mod folder.

##### Parameters

###### spriteId

`string`

Id used with [getById](#getbyid).

###### relativePath

`string`

Path relative to the mod folder.

###### options?

[`SpriteLoadOptions`](#spriteloadoptions)

Optional tint and load options.

##### Returns

`Promise`\<`void`\>

***

#### sandkit.api.sprites.getById() :id=sandkit.api.sprites.getbyid

```ts
getById(spriteId: string): unknown
```

Defined in: [sandkit/api/sprites.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L27)

Return a loaded sprite by id.

##### Parameters

###### spriteId

`string`

Sprite id from [load](#load) or [loadFromMod](#loadfrommod).

##### Returns

`unknown`

***

#### sandkit.api.sprites.hideAllPlayerModSprites() :id=sandkit.api.sprites.hideallplayermodsprites

```ts
hideAllPlayerModSprites(): void
```

Defined in: [sandkit/api/sprites.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L29)

Hide all player mod-attached sprites.

##### Returns

`void`

***

#### sandkit.api.sprites.rotatePlayerModSprites() :id=sandkit.api.sprites.rotateplayermodsprites

```ts
rotatePlayerModSprites(angle: number): void
```

Defined in: [sandkit/api/sprites.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sprites.d.ts#L34)

Rotate all player mod-attached sprites by angle.

##### Parameters

###### angle

`number`

Rotation in radians.

##### Returns

`void`

---

## sandkit.api.storage

### Namespaces <!-- {docsify-ignore} -->

- [local](api/sandkit.api.storage.local.md)

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.storage.ensure() :id=sandkit.api.storage.ensure

```ts
ensure(modId: string): JsonObjectV1
```

Defined in: [sandkit/api/storage.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L15)

Ensure storage exists for a mod id.

##### Parameters

###### modId

`string`

Mod identifier (typically `modinfo.id`).

##### Returns

[`JsonObjectV1`](api/shared.jsonvalue.md#jsonobjectv1)

***

#### sandkit.api.storage.get() :id=sandkit.api.storage.get

```ts
get(modId: string, key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/storage.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L21)

Read a value from mod storage by key.

##### Parameters

###### modId

`string`

Mod identifier.

###### key

`string`

Storage key.

##### Returns

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1) \| `undefined`

***

#### sandkit.api.storage.set() :id=sandkit.api.storage.set

```ts
set(modId: string, key: string, value: JsonValueV1): void
```

Defined in: [sandkit/api/storage.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L28)

Write a value to mod storage by key.

##### Parameters

###### modId

`string`

Mod identifier.

###### key

`string`

Storage key.

###### value

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

JSON-serializable value.

##### Returns

`void`

***

#### sandkit.api.storage.remove() :id=sandkit.api.storage.remove

```ts
remove(modId: string, key: string): void
```

Defined in: [sandkit/api/storage.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L34)

Remove a key from mod storage.

##### Parameters

###### modId

`string`

Mod identifier.

###### key

`string`

Storage key.

##### Returns

`void`

---

## sandkit.api.storage.local

Local session storage without mod id scope.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.storage.local.get() :id=sandkit.api.storage.local.get

```ts
get(key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/storage.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L42)

Read a local storage value by key.

##### Parameters

###### key

`string`

Storage key.

##### Returns

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1) \| `undefined`

***

#### sandkit.api.storage.local.set() :id=sandkit.api.storage.local.set

```ts
set(key: string, value: JsonValueV1): void
```

Defined in: [sandkit/api/storage.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L48)

Write a local storage value by key.

##### Parameters

###### key

`string`

Storage key.

###### value

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

JSON-serializable value.

##### Returns

`void`

***

#### sandkit.api.storage.local.remove() :id=sandkit.api.storage.local.remove

```ts
remove(key: string): void
```

Defined in: [sandkit/api/storage.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L53)

Remove a local storage key.

##### Parameters

###### key

`string`

Storage key.

##### Returns

`void`

---

## sandkit.api.structureBehaviors

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.structureBehaviors.registerConveyorType() :id=sandkit.api.structureBehaviors.registerconveyortype

```ts
registerConveyorType(structureId: string, options?: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structureBehaviors.d.ts#L16)

Register conveyor behavior for a structure type.

##### Parameters

###### structureId

`string`

Structure type id string.

###### options?

Transport offset, velocity, distance, and run direction.

###### transportOffset?

[`Vector2`](api/shared.player.md#vector2)

###### velocity?

[`Vector2`](api/shared.player.md#vector2)

###### maxTransportDistance?

`number`

###### transportHeight?

`number`

###### runWith?

`"left"` \| `"right"`

###### skipQueued?

`boolean`

##### Returns

`void`

***

#### sandkit.api.structureBehaviors.registerLauncherType() :id=sandkit.api.structureBehaviors.registerlaunchertype

```ts
registerLauncherType(definition: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structureBehaviors.d.ts#L21)

Register launcher behavior for up, left, and right launcher types.

##### Parameters

###### definition

Launcher type ids, velocities, and optional shared buffer key.

###### upType

`string`

###### leftType

`string`

###### rightType

`string`

###### velocity

\[`number`, `number`\]

###### softDropVelocity

`number`

###### runTickSharedBufferKey?

`string`

##### Returns

`void`

---

## sandkit.api.structures

### Namespaces <!-- {docsify-ignore} -->

- [recipes](api/sandkit.api.structures.recipes.md)
- [processing](api/sandkit.api.structures.processing.md)

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.structures.StructureBuildMode :id=sandkit.api.structures.structurebuildmode

Defined in: [sandkit/api/structures.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L206)

Build mode entry for a structure definition.

##### Properties

###### type

```ts
type: string
```

Defined in: [sandkit/api/structures.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L207)

###### directions?

```ts
optional directions?: string[]
```

Defined in: [sandkit/api/structures.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L208)

***

#### sandkit.api.structures.StructureVariant :id=sandkit.api.structures.structurevariant

Defined in: [sandkit/api/structures.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L212)

Rotated variant entry for a structure definition.

##### Properties

###### id

```ts
id: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L213)

###### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L214)

***

#### sandkit.api.structures.StructureRender :id=sandkit.api.structures.structurerender

Defined in: [sandkit/api/structures.d.ts:218](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L218)

Render settings for a structure definition.

##### Properties

###### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L219)

###### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L220)

###### width

```ts
width: number
```

###### height

```ts
height: number
```

###### offset?

```ts
optional offset?: object
```

Defined in: [sandkit/api/structures.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L221)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

***

#### sandkit.api.structures.SandkitStructureDefinition :id=sandkit.api.structures.sandkitstructuredefinition

Defined in: [sandkit/api/structures.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L225)

Full structure definition registered with the game.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: string & object
```

Defined in: [sandkit/api/structures.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L226)

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L227)

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L228)

###### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L229)

###### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:230](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L230)

###### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:231](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L231)

###### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:232](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L232)

###### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L233)

###### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L234)

###### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L235)

***

#### sandkit.api.structures.StructureBuildOptions :id=sandkit.api.structures.structurebuildoptions

Defined in: [sandkit/api/structures.d.ts:240](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L240)

Options passed to [buildAtCellWhenIdle](#buildatcellwhenidle).

##### Indexable

```ts
[key: string]: unknown
```

***

#### sandkit.api.structures.StructureRemovalOptions :id=sandkit.api.structures.structureremovaloptions

Defined in: [sandkit/api/structures.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L245)

Options passed to [removeAtCellWhenIdle](#removeatcellwhenidle).

##### Properties

###### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:247](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L247)

Also remove underlying terrain cells in the footprint.

###### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:249](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L249)

Skip visual teardown effects.

***

#### sandkit.api.structures.StructureBulkRemovalOptions :id=sandkit.api.structures.structurebulkremovaloptions

Defined in: [sandkit/api/structures.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L253)

Options passed to bulk structure removal helpers.

##### Properties

###### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L254)

###### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L255)

###### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:257](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L257)

When set, only remove structures at these positions.

###### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L258)

***

#### sandkit.api.structures.StructureProcessorDefinitionV1 :id=sandkit.api.structures.structureprocessordefinitionv1

Defined in: [sandkit/api/structures.d.ts:262](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L262)

Periodic structure processor attached with [addProcessor](#addprocessor).

##### Properties

###### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L264)

Tick interval in milliseconds. Must be > 0.

###### process

```ts
process: (state: unknown, structure: Structure) => void
```

Defined in: [sandkit/api/structures.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L266)

Synchronous callback invoked for each structure instance.

###### Parameters

###### state

`unknown`

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### Returns

`void`

***

#### sandkit.api.structures.PlacementConfigIntegerField :id=sandkit.api.structures.placementconfigintegerfield

Defined in: [sandkit/api/structures.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L275)

Integer placement field with optional bounds.

##### Properties

###### type

```ts
type: "integer"
```

Defined in: [sandkit/api/structures.d.ts:276](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L276)

###### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:277](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L277)

###### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:278](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L278)

###### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L279)

###### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:280](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L280)

###### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:281](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L281)

***

#### sandkit.api.structures.PlacementConfigChoiceField :id=sandkit.api.structures.placementconfigchoicefield

Defined in: [sandkit/api/structures.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L285)

Choice placement field with labeled options.

##### Properties

###### type

```ts
type: "choice"
```

Defined in: [sandkit/api/structures.d.ts:286](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L286)

###### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:287](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L287)

###### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:288](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L288)

###### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:289](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L289)

***

#### sandkit.api.structures.PlacementConfigDefinition :id=sandkit.api.structures.placementconfigdefinition

Defined in: [sandkit/api/structures.d.ts:296](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L296)

Placement rule definition for a structure type.

##### Properties

###### structureId

```ts
structureId: string & object
```

Defined in: [sandkit/api/structures.d.ts:297](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L297)

###### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L298)

***

#### sandkit.api.structures.WeightedRefineryRecipeDefinitionV1 :id=sandkit.api.structures.weightedrefineryrecipedefinitionv1

Defined in: [sandkit/api/structures.d.ts:309](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L309)

Weighted refinery recipe definition shape.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/structures.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L310)

###### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L311)

***

#### sandkit.api.structures.StructureProcessingDefinitionV1 :id=sandkit.api.structures.structureprocessingdefinitionv1

Defined in: [sandkit/api/structures.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L315)

Custom structure processing definition shape.

##### Properties

###### structureType

```ts
structureType: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L316)

###### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L317)

###### process

```ts
process: (state: unknown, structure: Structure) => void
```

Defined in: [sandkit/api/structures.d.ts:318](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L318)

###### Parameters

###### state

`unknown`

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### Returns

`void`

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.structures.PlacementConfigField :id=sandkit.api.structures.placementconfigfield

```ts
PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

Defined in: [sandkit/api/structures.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L270)

Placement hotbar field definition.

***

#### sandkit.api.structures.PlanterBoxRecipeDefinitionV1 :id=sandkit.api.structures.planterboxrecipedefinitionv1

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L302)

Planter box recipe definition shape.

***

#### sandkit.api.structures.ShakerRecipeDefinitionV1 :id=sandkit.api.structures.shakerrecipedefinitionv1

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L304)

Shaker recipe definition shape.

***

#### sandkit.api.structures.KineticPressRecipeDefinitionV1 :id=sandkit.api.structures.kineticpressrecipedefinitionv1

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:306](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L306)

Kinetic press recipe definition shape.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.structures.addProcessor() :id=sandkit.api.structures.addprocessor

```ts
addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L56)

Register a structure processor handler.

##### Parameters

###### structureId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type or string id to attach the processor to.

###### definition

[`StructureProcessorDefinitionV1`](#structureprocessordefinitionv1)

Periodic processing interval and callback.

##### Returns

`void`

***

#### sandkit.api.structures.register() :id=sandkit.api.structures.register

```ts
register(definition: SandkitStructureDefinition, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L63)

Register a new structure definition.

##### Parameters

###### definition

[`SandkitStructureDefinition`](#sandkitstructuredefinition)

Full structure definition.

###### options?

When `useRawShape` is true, keep the shape matrix as-is.

###### useRawShape?

`boolean`

##### Returns

`void`

***

#### sandkit.api.structures.updateDefinition() :id=sandkit.api.structures.updatedefinition

```ts
updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L71)

Patch fields on an existing structure definition.

##### Parameters

###### structureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type value or string id.

###### partial

`Partial`\<[`SandkitStructureDefinition`](#sandkitstructuredefinition)\>

Fields to merge onto the definition.

###### options?

When `useRawShape` is true, keep the shape matrix as-is.

###### useRawShape?

`boolean`

##### Returns

`void`

***

#### sandkit.api.structures.addVariant() :id=sandkit.api.structures.addvariant

```ts
addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L79)

Add a rotated variant to a base structure type.

##### Parameters

###### baseStructureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Base structure type or id.

###### variant

Variant id and supported rotation angles.

###### id

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

###### angles

`number`[]

###### options?

Optional build-mode wiring for the variant.

###### addBuildMode?

`unknown`

##### Returns

`void`

***

#### sandkit.api.structures.registerPlacementConfig() :id=sandkit.api.structures.registerplacementconfig

```ts
registerPlacementConfig(definition: PlacementConfigDefinition): void
```

Defined in: [sandkit/api/structures.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L85)

Register placement rules for a structure.

##### Parameters

###### definition

[`PlacementConfigDefinition`](#placementconfigdefinition)

Hotbar placement field configuration.

##### Returns

`void`

***

#### sandkit.api.structures.getUnlockedTypes() :id=sandkit.api.structures.getunlockedtypes

```ts
getUnlockedTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L88)

Return structure types unlocked for building.

##### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

***

#### sandkit.api.structures.isBlockedByPlayerAtCell() :id=sandkit.api.structures.isblockedbyplayeratcell

```ts
isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L95)

Return true when the player blocks building at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.structures.isLauncherAtCell() :id=sandkit.api.structures.islauncheratcell

```ts
isLauncherAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L102)

Return true when a launcher structure is at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.structures.isUnlockedByType() :id=sandkit.api.structures.isunlockedbytype

```ts
isUnlockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L108)

Return true when a structure type is unlocked.

##### Parameters

###### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type value or string id.

##### Returns

`boolean`

***

#### sandkit.api.structures.mapValueToSpritesheetIndex() :id=sandkit.api.structures.mapvaluetospritesheetindex

```ts
mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

Defined in: [sandkit/api/structures.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L116)

Map a numeric value through thresholds to a spritesheet index.

##### Parameters

###### value

`number`

Numeric value to map.

###### thresholds

`number`[]

Ascending threshold values.

##### Returns

`number`

Spritesheet frame index.

***

#### sandkit.api.structures.buildAtCellWhenIdle() :id=sandkit.api.structures.buildatcellwhenidle

```ts
buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L125)

Build a structure at a cell when simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

##### Returns

`void`

***

#### sandkit.api.structures.removeAtCellWhenIdle() :id=sandkit.api.structures.removeatcellwhenidle

```ts
removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L133)

Remove a structure at a cell when simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

##### Returns

`void`

***

#### sandkit.api.structures.removeBetweenCellsWhenIdle() :id=sandkit.api.structures.removebetweencellswhenidle

```ts
removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L143)

Remove structures between two cells when simulation is idle.

##### Parameters

###### startCellX

`number`

Start cell column.

###### startCellY

`number`

Start cell row.

###### endCellX

`number`

End cell column.

###### endCellY

`number`

End cell row.

###### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

Optional bulk-removal flags.

##### Returns

`void`

***

#### sandkit.api.structures.removeAtCellsWhenIdle() :id=sandkit.api.structures.removeatcellswhenidle

```ts
removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L150)

Remove structures at many cells when simulation is idle.

##### Parameters

###### positions

[`Vector2`](api/shared.player.md#vector2)[]

Cell positions to clear.

###### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

Optional bulk-removal flags.

##### Returns

`void`

### References <!-- {docsify-ignore} -->

#### sandkit.api.structures.forEachOfType :id=sandkit.api.structures.foreachoftype

Re-exports [forEachOfType](api/sandkit.api.structures.worker.md#foreachoftype)

***

#### sandkit.api.structures.getAtCell :id=sandkit.api.structures.getatcell

Re-exports [getAtCell](api/sandkit.api.structures.worker.md#getatcell)

***

#### sandkit.api.structures.getDefinitionByType :id=sandkit.api.structures.getdefinitionbytype

Re-exports [getDefinitionByType](api/sandkit.api.structures.worker.md#getdefinitionbytype)

***

#### sandkit.api.structures.getTypeFromId :id=sandkit.api.structures.gettypefromid

Re-exports [getTypeFromId](api/sandkit.api.structures.worker.md#gettypefromid)

***

#### sandkit.api.structures.hasBuiltAtCell :id=sandkit.api.structures.hasbuiltatcell

Re-exports [hasBuiltAtCell](api/sandkit.api.structures.worker.md#hasbuiltatcell)

***

#### sandkit.api.structures.isType :id=sandkit.api.structures.istype

Re-exports [isType](api/sandkit.api.structures.worker.md#istype)

***

#### sandkit.api.structures.isTypeAtCell :id=sandkit.api.structures.istypeatcell

Re-exports [isTypeAtCell](api/sandkit.api.structures.worker.md#istypeatcell)

***

#### sandkit.api.structures.setSpritesheetIndex :id=sandkit.api.structures.setspritesheetindex

Re-exports [setSpritesheetIndex](api/sandkit.api.structures.worker.md#setspritesheetindex)

***

#### sandkit.api.structures.setSpritesheetIndexAtCell :id=sandkit.api.structures.setspritesheetindexatcell

Re-exports [setSpritesheetIndexAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexatcell)

***

#### sandkit.api.structures.setSpritesheetIndexByValue :id=sandkit.api.structures.setspritesheetindexbyvalue

Re-exports [setSpritesheetIndexByValue](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalue)

***

#### sandkit.api.structures.setSpritesheetIndexByValueAtCell :id=sandkit.api.structures.setspritesheetindexbyvalueatcell

Re-exports [setSpritesheetIndexByValueAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalueatcell)

***

#### sandkit.api.structures.update :id=sandkit.api.structures.update

Re-exports [update](api/sandkit.api.structures.worker.md#update)

***

#### sandkit.api.structures.setData :id=sandkit.api.structures.setdata

Re-exports [setData](api/sandkit.api.structures.worker.md#setdata)

***

#### sandkit.api.structures.Structure :id=sandkit.api.structures.structure

Re-exports [Structure](api/sandkit.api.structures.worker.md#structure)

***

#### sandkit.api.structures.StructureType :id=sandkit.api.structures.structuretype

Re-exports [StructureType](api/sandkit.api.structures.worker.md#structuretype)

***

#### sandkit.api.structures.StructureId :id=sandkit.api.structures.structureid

Re-exports [StructureId](api/sandkit.api.structures.worker.md#structureid)

***

#### sandkit.api.structures.StructureRef :id=sandkit.api.structures.structureref

Re-exports [StructureRef](api/sandkit.api.structures.worker.md#structureref)

---

## sandkit.api.structures.processing

Per-structure processing enablement and registration.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.structures.processing.register() :id=sandkit.api.structures.processing.register

```ts
register(id: string & object, definition: StructureProcessingDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L193)

Register a custom processing definition by id.

##### Parameters

###### id

`string` & `object`

Unique processing registration id.

###### definition

[`StructureProcessingDefinitionV1`](api/sandkit.api.structures.md#structureprocessingdefinitionv1)

Structure type, interval, and callback.

##### Returns

`void`

***

#### sandkit.api.structures.processing.setEnabledAt() :id=sandkit.api.structures.processing.setenabledat

```ts
setEnabledAt(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L202)

Enable or disable processing at a cell.

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`boolean`

True when the enabled state changed.

### References <!-- {docsify-ignore} -->

#### sandkit.api.structures.processing.isEnabledAt :id=sandkit.api.structures.processing.isenabledat

Re-exports [isEnabledAt](api/sandkit.api.structures.processing.worker.md#isenabledat)

---

## sandkit.api.structures.recipes

Structure recipe registration by machine kind.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.structures.recipes.register() :id=sandkit.api.structures.recipes.register

##### Call Signature

```ts
register(id: "planterBox", definition: PlanterBoxRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L159)

Register a planter box recipe.

###### Parameters

###### id

`"planterBox"`

Machine recipe slot id.

###### definition

[`PlanterBoxRecipeDefinitionV1`](api/sandkit.api.processing.md#planterboxrecipedefinitionv1)

Grower recipe definition.

###### Returns

`void`

##### Call Signature

```ts
register(id: "shaker", definition: ShakerRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L166)

Register a shaker recipe.

###### Parameters

###### id

`"shaker"`

Machine recipe slot id.

###### definition

[`ShakerRecipeDefinitionV1`](api/sandkit.api.processing.md#shakerrecipedefinitionv1)

Shaker recipe definition.

###### Returns

`void`

##### Call Signature

```ts
register(id: "kineticPress", definition: KineticPressRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L173)

Register a kinetic press recipe.

###### Parameters

###### id

`"kineticPress"`

Machine recipe slot id.

###### definition

[`KineticPressRecipeDefinitionV1`](api/sandkit.api.processing.md#kineticpressrecipedefinitionv1)

Kinetic press recipe definition.

###### Returns

`void`

##### Call Signature

```ts
register(id: "condenser" | "steamDryer" | "synthesizer" | "snowmaker" | "smelter", definition: WeightedRefineryRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L180)

Register a weighted refinery machine recipe.

###### Parameters

###### id

`"condenser"` \| `"steamDryer"` \| `"synthesizer"` \| `"snowmaker"` \| `"smelter"`

Refinery machine id.

###### definition

[`WeightedRefineryRecipeDefinitionV1`](api/sandkit.api.structures.md#weightedrefineryrecipedefinitionv1)

Weighted input/output recipe.

###### Returns

`void`

---

## sandkit.api.tech

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.tech.TechDefinition :id=sandkit.api.tech.techdefinition

Defined in: [sandkit/api/tech.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L54)

Tech definition shape.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/tech.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L56)

Display name translation key.

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/tech.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L58)

Description translation key.

***

#### sandkit.api.tech.TechGridPosition :id=sandkit.api.tech.techgridposition

Defined in: [sandkit/api/tech.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L62)

Position on the tech grid.

##### Properties

###### x

```ts
x: number
```

Defined in: [sandkit/api/tech.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L63)

###### y

```ts
y: number
```

Defined in: [sandkit/api/tech.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L64)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.tech.TechGridId :id=sandkit.api.tech.techgridid

```ts
TechGridId = Tech | LooseString<never> | TaggedNumber<"tech">
```

Defined in: [sandkit/api/tech.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L52)

Tech grid node id.
Built-in [TechEnum](api/sandkit.enums.Tech.md) values autocomplete; custom string ids and tagged handles are allowed.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.tech.getDefinitionById() :id=sandkit.api.tech.getdefinitionbyid

```ts
getDefinitionById(techId: TechGridId): TechDefinition | undefined
```

Defined in: [sandkit/api/tech.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L16)

Return a tech definition by string id.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

##### Returns

[`TechDefinition`](#techdefinition) \| `undefined`

***

#### sandkit.api.tech.updateDefinition() :id=sandkit.api.tech.updatedefinition

```ts
updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void
```

Defined in: [sandkit/api/tech.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L22)

Patch fields on an existing tech definition.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

###### updates

`Partial`\<[`TechDefinition`](#techdefinition)\>

Fields to merge into the definition.

##### Returns

`void`

***

#### sandkit.api.tech.addDefinition() :id=sandkit.api.tech.adddefinition

```ts
addDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L28)

Add a new tech definition by id.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

###### definition

[`TechDefinition`](#techdefinition)

Full tech definition to register.

##### Returns

`void`

***

#### sandkit.api.tech.registerNode() :id=sandkit.api.tech.registernode

```ts
registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition
```

Defined in: [sandkit/api/tech.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L35)

Register a tech node on the grid with parent and position options.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech grid node id.

###### definition

[`TechDefinition`](#techdefinition)

Tech definition for the node.

###### options

Parent node id and optional preferred grid position.

###### parentId

[`TechGridId`](#techgridid)

###### preferredPosition?

[`TechGridPosition`](#techgridposition)

##### Returns

[`TechGridPosition`](#techgridposition)

***

#### sandkit.api.tech.isLockedById() :id=sandkit.api.tech.islockedbyid

```ts
isLockedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L40)

Return true when a tech entry is locked.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

##### Returns

`boolean`

***

#### sandkit.api.tech.setLockedById() :id=sandkit.api.tech.setlockedbyid

```ts
setLockedById(techId: TechGridId, locked: boolean): void
```

Defined in: [sandkit/api/tech.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L46)

Set locked state for a tech entry by id.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

###### locked

`boolean`

When true, the tech cannot be purchased.

##### Returns

`void`

---

## sandkit.api.terrains

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.terrains.TerrainDefinition :id=sandkit.api.terrains.terraindefinition

Defined in: [sandkit/api/terrains.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L101)

Terrain definition shape for [register](#register) and [updateDefinition](#updatedefinition).

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: string
```

Defined in: [sandkit/api/terrains.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L103)

Unique mod-scoped terrain id.

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/terrains.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L105)

i18n key for the terrain display name.

###### hp?

```ts
optional hp?: number
```

Defined in: [sandkit/api/terrains.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L107)

Default terrain hit points.

###### materialId?

```ts
optional materialId?: number
```

Defined in: [sandkit/api/terrains.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L109)

Material id used for rendering. Must be > obstacle breakpoint and < 150.

###### metaColor?

```ts
optional metaColor?: number
```

Defined in: [sandkit/api/terrains.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L111)

UI/meta color as 0xRRGGBB.

###### colorHSL?

```ts
optional colorHSL?: [number, number, number]
```

Defined in: [sandkit/api/terrains.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L113)

Base terrain color as HSL components.

###### excavationRequirements?

```ts
optional excavationRequirements?: readonly string[]
```

Defined in: [sandkit/api/terrains.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L115)

Tool item ids required to excavate this terrain.

###### interactions?

```ts
optional interactions?: readonly Interaction[]
```

Defined in: [sandkit/api/terrains.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L117)

Tooltip interactions shown for this terrain.

###### output?

```ts
optional output?: object
```

Defined in: [sandkit/api/terrains.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L119)

Default element drop when the terrain is destroyed.

###### elementType

```ts
elementType: ElementType
```

###### chance

```ts
chance: number
```

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.terrains.register() :id=sandkit.api.terrains.register

```ts
register(definition: TerrainDefinition): object
```

Defined in: [sandkit/api/terrains.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L48)

Register a new terrain definition.

##### Parameters

###### definition

[`TerrainDefinition`](#terraindefinition)

Terrain definition to register.

##### Returns

`object`

Object with the assigned `cellType`.

###### cellType

```ts
cellType: TerrainType
```

***

#### sandkit.api.terrains.updateDefinition() :id=sandkit.api.terrains.updatedefinition

```ts
updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

Defined in: [sandkit/api/terrains.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L55)

Patch fields on an existing terrain definition.

##### Parameters

###### cellTypeOrId

[`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref)

Numeric cell type or terrain string id.

###### partial

`Partial`\<[`TerrainDefinition`](#terraindefinition)\>

Fields to merge onto the definition.

##### Returns

`void`

***

#### sandkit.api.terrains.createAtCellWhenIdle() :id=sandkit.api.terrains.createatcellwhenidle

```ts
createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L64)

Create terrain at a cell when simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

***

#### sandkit.api.terrains.replaceAtCellWhenIdle() :id=sandkit.api.terrains.replaceatcellwhenidle

```ts
replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L73)

Replace terrain at a cell when simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

***

#### sandkit.api.terrains.removeAtCellWhenIdle() :id=sandkit.api.terrains.removeatcellwhenidle

```ts
removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L81)

Remove terrain at a cell when simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

***

#### sandkit.api.terrains.setHpAtCellWhenIdle() :id=sandkit.api.terrains.sethpatcellwhenidle

```ts
setHpAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L89)

Set terrain hit points at a cell when simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

***

#### sandkit.api.terrains.setHpAtCell() :id=sandkit.api.terrains.sethpatcell

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [sandkit/api/terrains.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/terrains.d.ts#L98)

Set terrain hit points at a cell immediately.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

True when hp changed or the terrain was removed.

### References <!-- {docsify-ignore} -->

#### sandkit.api.terrains.getTypeFromId :id=sandkit.api.terrains.gettypefromid

Re-exports [getTypeFromId](api/sandkit.api.terrains.worker.md#gettypefromid)

***

#### sandkit.api.terrains.getTypeAtCell :id=sandkit.api.terrains.gettypeatcell

Re-exports [getTypeAtCell](api/sandkit.api.terrains.worker.md#gettypeatcell)

***

#### sandkit.api.terrains.getDataAtCell :id=sandkit.api.terrains.getdataatcell

Re-exports [getDataAtCell](api/sandkit.api.terrains.worker.md#getdataatcell)

***

#### sandkit.api.terrains.isAtCell :id=sandkit.api.terrains.isatcell

Re-exports [isAtCell](api/sandkit.api.terrains.worker.md#isatcell)

***

#### sandkit.api.terrains.isTypeAtCell :id=sandkit.api.terrains.istypeatcell

Re-exports [isTypeAtCell](api/sandkit.api.terrains.worker.md#istypeatcell)

***

#### sandkit.api.terrains.isCellIdTerrain :id=sandkit.api.terrains.iscellidterrain

Re-exports [isCellIdTerrain](api/sandkit.api.terrains.worker.md#iscellidterrain)

***

#### sandkit.api.terrains.damageAtCell :id=sandkit.api.terrains.damageatcell

Re-exports [damageAtCell](api/sandkit.api.terrains.worker.md#damageatcell)

***

#### sandkit.api.terrains.createAtCell :id=sandkit.api.terrains.createatcell

Re-exports [createAtCell](api/sandkit.api.terrains.worker.md#createatcell)

***

#### sandkit.api.terrains.replaceAtCell :id=sandkit.api.terrains.replaceatcell

Re-exports [replaceAtCell](api/sandkit.api.terrains.worker.md#replaceatcell)

***

#### sandkit.api.terrains.removeAtCell :id=sandkit.api.terrains.removeatcell

Re-exports [removeAtCell](api/sandkit.api.terrains.worker.md#removeatcell)

***

#### sandkit.api.terrains.TerrainMutationOptions :id=sandkit.api.terrains.terrainmutationoptions

Re-exports [TerrainMutationOptions](api/sandkit.api.terrains.worker.md#terrainmutationoptions)

***

#### sandkit.api.terrains.TerrainType :id=sandkit.api.terrains.terraintype

Re-exports [TerrainType](api/sandkit.api.terrains.worker.md#terraintype)

***

#### sandkit.api.terrains.TerrainId :id=sandkit.api.terrains.terrainid

Re-exports [TerrainId](api/sandkit.api.terrains.worker.md#terrainid)

***

#### sandkit.api.terrains.TerrainRef :id=sandkit.api.terrains.terrainref

Re-exports [TerrainRef](api/sandkit.api.terrains.worker.md#terrainref)

---

## sandkit.api.time

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.time.getTimeMs() :id=sandkit.api.time.gettimems

```ts
getTimeMs(): number
```

Defined in: [sandkit/api/time.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/time.d.ts#L10)

Return elapsed game time in milliseconds.

##### Returns

`number`

***

#### sandkit.api.time.getTick() :id=sandkit.api.time.gettick

```ts
getTick(): number
```

Defined in: [sandkit/api/time.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/time.d.ts#L12)

Return the current simulation tick number.

##### Returns

`number`

---

## sandkit.api.tools

### Namespaces <!-- {docsify-ignore} -->

- [grabber](api/sandkit.api.tools.grabber.md)

---

## sandkit.api.tools.grabber

Grabber tool size and state.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.tools.grabber.setSize() :id=sandkit.api.tools.grabber.setsize

```ts
setSize(size: number): void
```

Defined in: [sandkit/api/tools.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tools.d.ts#L15)

Set grabber radius size.

##### Parameters

###### size

`number`

Grab radius in cells.

##### Returns

`void`

***

#### sandkit.api.tools.grabber.getSize() :id=sandkit.api.tools.grabber.getsize

```ts
getSize(): number
```

Defined in: [sandkit/api/tools.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tools.d.ts#L21)

Return current grabber radius size.

##### Returns

`number`

Grab radius in cells.

***

#### sandkit.api.tools.grabber.isActive() :id=sandkit.api.tools.grabber.isactive

```ts
isActive(): boolean
```

Defined in: [sandkit/api/tools.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tools.d.ts#L27)

Return true when grabber tool is active.

##### Returns

`boolean`

True when the grabber is the active tool.

***

#### sandkit.api.tools.grabber.isLoaded() :id=sandkit.api.tools.grabber.isloaded

```ts
isLoaded(): boolean
```

Defined in: [sandkit/api/tools.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tools.d.ts#L33)

Return true when grabber holds elements.

##### Returns

`boolean`

True when the grabber buffer is not empty.

---

## sandkit.api.triggers

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.triggers.MainTriggerDefinition :id=sandkit.api.triggers.maintriggerdefinition

Defined in: [sandkit/api/triggers.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/triggers.d.ts#L17)

Main-thread trigger definition shape.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### interval

```ts
interval: number
```

Defined in: [sandkit/api/triggers.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/triggers.d.ts#L19)

Interval between callbacks in simulation ticks.

###### callback

```ts
callback: () => void
```

Defined in: [sandkit/api/triggers.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/triggers.d.ts#L21)

Called each time the trigger fires.

###### Returns

`void`

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.triggers.register() :id=sandkit.api.triggers.register

```ts
register(triggerId: string, definition: MainTriggerDefinition): void
```

Defined in: [sandkit/api/triggers.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/triggers.d.ts#L14)

Register a repeating trigger with interval and callback.

##### Parameters

###### triggerId

`string`

Unique trigger identifier.

###### definition

[`MainTriggerDefinition`](#maintriggerdefinition)

Interval in ticks and callback to invoke.

##### Returns

`void`

---

## sandkit.api.ui

### Namespaces <!-- {docsify-ignore} -->

- [overlays](api/sandkit.api.ui.overlays.md)
- [navigation](api/sandkit.api.ui.navigation.md)

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.ui.TooltipMessageData :id=sandkit.api.ui.tooltipmessagedata

Defined in: [sandkit/api/ui.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L137)

Message tooltip with localized body text.

##### Properties

###### type

```ts
type: "message"
```

Defined in: [sandkit/api/ui.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L139)

Discriminator for tooltip renderer selection.

###### text

```ts
text: LocalizedText
```

Defined in: [sandkit/api/ui.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L141)

Message body as localized text.

***

#### sandkit.api.ui.Focusable :id=sandkit.api.ui.focusable

Defined in: [sandkit/api/ui.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L145)

Focusable element state from useFocusable.

##### Type Parameters

###### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

##### Properties

###### ref

```ts
readonly ref: RefObject<T>
```

Defined in: [sandkit/api/ui.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L147)

Ref to attach to the focusable element.

###### focused

```ts
readonly focused: boolean
```

Defined in: [sandkit/api/ui.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L149)

True when the element has controller focus.

###### focus

```ts
readonly focus: () => void
```

Defined in: [sandkit/api/ui.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L151)

Move controller focus to this element.

###### Returns

`void`

***

#### sandkit.api.ui.FocusOptions :id=sandkit.api.ui.focusoptions

Defined in: [sandkit/api/ui.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L155)

Options for useFocusable registration.

##### Properties

###### id

```ts
readonly id: string
```

Defined in: [sandkit/api/ui.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L157)

Unique id within the focus scope.

###### scope

```ts
readonly scope: string
```

Defined in: [sandkit/api/ui.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L159)

Focus scope id this element belongs to.

###### onActivate

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

###### onFocus?

```ts
readonly optional onFocus?: () => void
```

Defined in: [sandkit/api/ui.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L163)

Called when the element receives focus.

###### Returns

`void`

###### disabled?

```ts
readonly optional disabled?: boolean
```

Defined in: [sandkit/api/ui.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L165)

When true, skip this element during navigation.

###### x?

```ts
readonly optional x?: number
```

Defined in: [sandkit/api/ui.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L167)

Optional grid column for spatial navigation.

###### y?

```ts
readonly optional y?: number
```

Defined in: [sandkit/api/ui.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L169)

Optional grid row for spatial navigation.

###### neighbors?

```ts
readonly optional neighbors?: Partial<Record<"left" | "right" | "up" | "down", string>>
```

Defined in: [sandkit/api/ui.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L171)

Neighbor ids for directional navigation.

###### scrollIntoView?

```ts
readonly optional scrollIntoView?: boolean
```

Defined in: [sandkit/api/ui.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L173)

When true, scroll the element into view on focus.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.ui.OverlaySlot :id=sandkit.api.ui.overlayslot

```ts
OverlaySlot = LooseString<"hotbar" | "global">
```

Defined in: [sandkit/api/ui.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L122)

Overlay slot name. Known vanilla slots autocomplete; any string is allowed.

***

#### sandkit.api.ui.ComponentId :id=sandkit.api.ui.componentid

```ts
ComponentId = ComponentId | LooseString<never>
```

Defined in: [sandkit/api/ui.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L128)

Registered UI component id.
Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) values autocomplete; custom string ids are allowed.

***

#### sandkit.api.ui.ComponentUpdateOptions :id=sandkit.api.ui.componentupdateoptions

```ts
ComponentUpdateOptions = Record<string, unknown>
```

Defined in: [sandkit/api/ui.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L131)

Component-specific update payload passed to [update](#update).

***

#### sandkit.api.ui.TooltipData :id=sandkit.api.ui.tooltipdata

```ts
TooltipData = TooltipMessageData
```

Defined in: [sandkit/api/ui.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L134)

Tooltip payload shown near the cursor or UI target.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.ui.update() :id=sandkit.api.ui.update

```ts
update(componentId: ComponentId, options?: ComponentUpdateOptions): void
```

Defined in: [sandkit/api/ui.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L26)

Update a registered UI component by id.

##### Parameters

###### componentId

[`ComponentId`](#componentid)

Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) value or custom string id.

###### options?

[`ComponentUpdateOptions`](#componentupdateoptions)

Component-specific update payload.

##### Returns

`void`

***

#### sandkit.api.ui.openPauseMenu() :id=sandkit.api.ui.openpausemenu

```ts
openPauseMenu(): void
```

Defined in: [sandkit/api/ui.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L29)

Open the pause menu.

##### Returns

`void`

***

#### sandkit.api.ui.showTooltip() :id=sandkit.api.ui.showtooltip

```ts
showTooltip(data: TooltipMessageData): void
```

Defined in: [sandkit/api/ui.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L35)

Show a tooltip with the given data.

##### Parameters

###### data

[`TooltipMessageData`](#tooltipmessagedata)

Tooltip type and localized content.

##### Returns

`void`

***

#### sandkit.api.ui.alert() :id=sandkit.api.ui.alert

```ts
alert(message: LocalizedText, title?: LocalizedText): Promise<void>
```

Defined in: [sandkit/api/ui.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L43)

Show an alert dialog.

##### Parameters

###### message

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Dialog body text.

###### title?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Optional dialog title.

##### Returns

`Promise`\<`void`\>

Promise that resolves when the user dismisses the dialog.

***

#### sandkit.api.ui.confirm() :id=sandkit.api.ui.confirm

```ts
confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>
```

Defined in: [sandkit/api/ui.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L51)

Show a confirm dialog.

##### Parameters

###### message

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Dialog body text.

###### title?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Optional dialog title.

##### Returns

`Promise`\<`boolean`\>

Promise that resolves with true when confirmed, or false when cancelled.

***

#### sandkit.api.ui.prompt() :id=sandkit.api.ui.prompt

```ts
prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>
```

Defined in: [sandkit/api/ui.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L62)

Show a prompt dialog.

##### Parameters

###### message

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Dialog body text.

###### defaultValue?

`string`

Initial input value.

###### placeholder?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Placeholder text in the input field.

###### title?

[`LocalizedText`](api/sandkit.api.ui.worker.md#localizedtext)

Optional dialog title.

###### allowCopy?

`boolean`

When true, allow copying the result from the dialog.

##### Returns

`Promise`\<`string` \| `null`\>

Promise that resolves with entered text, or null when cancelled.

***

#### sandkit.api.ui.inject() :id=sandkit.api.ui.inject

```ts
inject(componentId: ComponentId, component: ComponentType<Record<string, never>>): () => void
```

Defined in: [sandkit/api/ui.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L70)

Mount a React component by id.

##### Parameters

###### componentId

[`ComponentId`](#componentid)

Overlay slot or custom mount point id.

###### component

`ComponentType`\<`Record`\<`string`, `never`\>\>

React component to render.

##### Returns

Function that unmounts the injected component.

() => `void`

### References <!-- {docsify-ignore} -->

#### sandkit.api.ui.toast :id=sandkit.api.ui.toast

Re-exports [toast](api/sandkit.api.ui.worker.md#toast)

***

#### sandkit.api.ui.LocalizedText :id=sandkit.api.ui.localizedtext

Re-exports [LocalizedText](api/sandkit.api.ui.worker.md#localizedtext)

***

#### sandkit.api.ui.ToastOptions :id=sandkit.api.ui.toastoptions

Re-exports [ToastOptions](api/sandkit.api.ui.worker.md#toastoptions)

---

## sandkit.api.ui.navigation

Controller focus and scope navigation hooks.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.ui.navigation.useFocusable() :id=sandkit.api.ui.navigation.usefocusable

```ts
useFocusable<T *extends* HTMLElement = HTMLDivElement>(options: FocusOptions): Focusable<T>
```

Defined in: [sandkit/api/ui.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L103)

React hook for a focusable UI element in a scope.

##### Type Parameters

###### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

##### Parameters

###### options

[`FocusOptions`](api/sandkit.api.ui.md#focusoptions)

Focus registration and neighbor wiring.

##### Returns

[`Focusable`](api/sandkit.api.ui.md#focusable)\<`T`\>

Ref, focus state, and a focus helper.

***

#### sandkit.api.ui.navigation.useFocusScope() :id=sandkit.api.ui.navigation.usefocusscope

```ts
useFocusScope(options: object): void
```

Defined in: [sandkit/api/ui.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L109)

React hook to register a focus scope with back handling.

##### Parameters

###### options

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

##### Returns

`void`

***

#### sandkit.api.ui.navigation.controllerFocusClass() :id=sandkit.api.ui.navigation.controllerfocusclass

```ts
controllerFocusClass(focused: boolean): string
```

Defined in: [sandkit/api/ui.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L116)

Return CSS class for controller focus ring state.

##### Parameters

###### focused

`boolean`

True when the element has controller focus.

##### Returns

`string`

Class name string for the focus ring.

---

## sandkit.api.ui.overlays

Overlay slot registration and updates.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.ui.overlays.register() :id=sandkit.api.ui.overlays.register

```ts
register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void
```

Defined in: [sandkit/api/ui.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L80)

Register a render function in an overlay slot.

##### Parameters

###### slot

[`OverlaySlot`](api/sandkit.api.ui.md#overlayslot)

Slot name (for example `"hotbar"`).

###### overlayId

`string`

Unique id for this overlay within the slot.

###### render

() => `ReactNode`

Function that returns React content.

##### Returns

`void`

***

#### sandkit.api.ui.overlays.unregister() :id=sandkit.api.ui.overlays.unregister

```ts
unregister(slot: OverlaySlot, overlayId: string): void
```

Defined in: [sandkit/api/ui.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L87)

Remove an overlay from a slot.

##### Parameters

###### slot

[`OverlaySlot`](api/sandkit.api.ui.md#overlayslot)

Slot name the overlay was registered in.

###### overlayId

`string`

Overlay id passed to [register](#register).

##### Returns

`void`

***

#### sandkit.api.ui.overlays.update() :id=sandkit.api.ui.overlays.update

```ts
update(slot: OverlaySlot): void
```

Defined in: [sandkit/api/ui.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L93)

Request a re-render for all overlays in a slot.

##### Parameters

###### slot

[`OverlaySlot`](api/sandkit.api.ui.md#overlayslot)

Slot name to refresh.

##### Returns

`void`

---

## sandkit.api.upgrades

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.upgrades.UpgradeDefinition :id=sandkit.api.upgrades.upgradedefinition

Defined in: [sandkit/api/upgrades.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L40)

Upgrade definition registered for an item.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### itemId

```ts
itemId: string
```

Defined in: [sandkit/api/upgrades.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L41)

###### itemNameKey?

```ts
optional itemNameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L42)

###### categoryId?

```ts
optional categoryId?: string
```

Defined in: [sandkit/api/upgrades.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L43)

###### upgrade

```ts
upgrade: object
```

Defined in: [sandkit/api/upgrades.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L44)

###### id

```ts
id: string
```

###### nameKey?

```ts
optional nameKey?: string
```

###### descriptionKey?

```ts
optional descriptionKey?: string
```

###### maxLevel

```ts
maxLevel: number
```

###### costs

```ts
costs: number[]
```

###### oneOff?

```ts
optional oneOff?: boolean
```

***

#### sandkit.api.upgrades.UpgradeCategoryDefinition :id=sandkit.api.upgrades.upgradecategorydefinition

Defined in: [sandkit/api/upgrades.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L56)

Upgrade category definition shape.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: string
```

Defined in: [sandkit/api/upgrades.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L58)

Category identifier referenced by upgrades.

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L60)

Display name translation key.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.upgrades.registerCategory() :id=sandkit.api.upgrades.registercategory

```ts
registerCategory(definition: UpgradeCategoryDefinition): void
```

Defined in: [sandkit/api/upgrades.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L13)

Register an upgrade category.

##### Parameters

###### definition

[`UpgradeCategoryDefinition`](#upgradecategorydefinition)

Category id and display metadata.

##### Returns

`void`

***

#### sandkit.api.upgrades.register() :id=sandkit.api.upgrades.register

```ts
register(definition: UpgradeDefinition): void
```

Defined in: [sandkit/api/upgrades.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L18)

Register an upgrade definition.

##### Parameters

###### definition

[`UpgradeDefinition`](#upgradedefinition)

Item id, upgrade id, costs, and level metadata.

##### Returns

`void`

***

#### sandkit.api.upgrades.updateDefinition() :id=sandkit.api.upgrades.updatedefinition

```ts
updateDefinition(itemId: string, upgradeId: string, partial: Partial<UpgradeDefinition>): void
```

Defined in: [sandkit/api/upgrades.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L25)

Patch fields on an existing upgrade definition.

##### Parameters

###### itemId

`string`

Parent item id.

###### upgradeId

`string`

Upgrade id within the item.

###### partial

`Partial`\<[`UpgradeDefinition`](#upgradedefinition)\>

Fields to merge into the definition.

##### Returns

`void`

***

#### sandkit.api.upgrades.getLevelById() :id=sandkit.api.upgrades.getlevelbyid

```ts
getLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L31)

Return the current purchased level for an upgrade.

##### Parameters

###### itemId

`string`

Parent item id.

###### upgradeId

`string`

Upgrade id within the item.

##### Returns

`number`

***

#### sandkit.api.upgrades.getAvailableLevelById() :id=sandkit.api.upgrades.getavailablelevelbyid

```ts
getAvailableLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/upgrades.d.ts#L37)

Return the maximum available level for an upgrade.

##### Parameters

###### itemId

`string`

Parent item id.

###### upgradeId

`string`

Upgrade id within the item.

##### Returns

`number`

---

## sandkit.api.utils

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.utils.getDistance() :id=sandkit.api.utils.getdistance

```ts
getDistance(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/utils.d.ts#L16)

Return distance between two points.

##### Parameters

###### pointA

[`Vector2`](api/shared.player.md#vector2)

First point.

###### pointB

[`Vector2`](api/shared.player.md#vector2)

Second point.

##### Returns

`number`

***

#### sandkit.api.utils.getDirection() :id=sandkit.api.utils.getdirection

```ts
getDirection(pointA: Vector2, pointB: Vector2): Vector2
```

Defined in: [sandkit/api/utils.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/utils.d.ts#L22)

Return normalized direction from point A to point B.

##### Parameters

###### pointA

[`Vector2`](api/shared.player.md#vector2)

Origin point.

###### pointB

[`Vector2`](api/shared.player.md#vector2)

Target point.

##### Returns

[`Vector2`](api/shared.player.md#vector2)

***

#### sandkit.api.utils.getAngle() :id=sandkit.api.utils.getangle

```ts
getAngle(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/utils.d.ts#L28)

Return angle in radians from point A to point B.

##### Parameters

###### pointA

[`Vector2`](api/shared.player.md#vector2)

Origin point.

###### pointB

[`Vector2`](api/shared.player.md#vector2)

Target point.

##### Returns

`number`

***

#### sandkit.api.utils.getCoordinatesBetweenPoints() :id=sandkit.api.utils.getcoordinatesbetweenpoints

```ts
getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/utils.d.ts#L34)

Return grid cells along a line between two points.

##### Parameters

###### pointA

[`Vector2`](api/shared.player.md#vector2)

Line start in cell or world coordinates.

###### pointB

[`Vector2`](api/shared.player.md#vector2)

Line end in cell or world coordinates.

##### Returns

[`Vector2`](api/shared.player.md#vector2)[]

---

## sandkit.api.workers

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.workers.setPostUpdateEnabled() :id=sandkit.api.workers.setpostupdateenabled

```ts
setPostUpdateEnabled(enabled: boolean): void
```

Defined in: [sandkit/api/workers.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/workers.d.ts#L13)

Enable or disable worker post-update callbacks.

##### Parameters

###### enabled

`boolean`

When true, workers run post-update hooks each tick.

##### Returns

`void`

---

## sandkit.api.world

### Namespaces <!-- {docsify-ignore} -->

- [pickups](api/sandkit.api.world.pickups.md)

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.world.WorldItemLight :id=sandkit.api.world.worlditemlight

Defined in: [sandkit/api/world.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L90)

Optional point light attached when spawning a pickup.

##### Properties

###### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/world.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L92)

Light brightness multiplier. Default 1.

###### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/world.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L94)

Light radius in world pixels. Default 100.

###### color?

```ts
optional color?: [number, number, number] | [number, number, number, number]
```

Defined in: [sandkit/api/world.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L96)

RGB or RGBA color components in 0–1 range.

***

#### sandkit.api.world.WorldItem :id=sandkit.api.world.worlditem

Defined in: [sandkit/api/world.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L100)

Active world pickup instance.

##### Properties

###### id

```ts
id: number
```

Defined in: [sandkit/api/world.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L101)

###### x

```ts
x: number
```

Defined in: [sandkit/api/world.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L102)

###### y

```ts
y: number
```

Defined in: [sandkit/api/world.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L103)

###### type

```ts
type: WorldItemType
```

Defined in: [sandkit/api/world.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L104)

###### data

```ts
data: Record<string, unknown>
```

Defined in: [sandkit/api/world.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L105)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.world.WorldItemType :id=sandkit.api.world.worlditemtype

```ts
WorldItemType = WorldItemType
```

Defined in: [sandkit/api/world.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L87)

World pickup type discriminator.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.world.runWhenSimulationIdle() :id=sandkit.api.world.runwhensimulationidle

```ts
runWhenSimulationIdle(callback: () => void): void
```

Defined in: [sandkit/api/world.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L33)

Run a callback when simulation is idle.

##### Parameters

###### callback

() => `void`

Function invoked on the main thread when workers are idle.

##### Returns

`void`

***

#### sandkit.api.world.revealFogAtCell() :id=sandkit.api.world.revealfogatcell

```ts
revealFogAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/world.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L40)

Reveal fog of war at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

***

#### sandkit.api.world.redrawAroundCellWhenIdle() :id=sandkit.api.world.redrawaroundcellwhenidle

```ts
redrawAroundCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/world.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L48)

Request redraw around a cell when simulation is idle.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

### References <!-- {docsify-ignore} -->

#### sandkit.api.world.getCellIdAtCell :id=sandkit.api.world.getcellidatcell

Re-exports [getCellIdAtCell](api/sandkit.api.world.worker.md#getcellidatcell)

***

#### sandkit.api.world.isCellEmptyAtCell :id=sandkit.api.world.iscellemptyatcell

Re-exports [isCellEmptyAtCell](api/sandkit.api.world.worker.md#iscellemptyatcell)

***

#### sandkit.api.world.isTerrainAtCell :id=sandkit.api.world.isterrainatcell

Re-exports [isTerrainAtCell](api/sandkit.api.world.worker.md#isterrainatcell)

***

#### sandkit.api.world.reportActivityAtCell :id=sandkit.api.world.reportactivityatcell

Re-exports [reportActivityAtCell](api/sandkit.api.world.worker.md#reportactivityatcell)

***

#### sandkit.api.world.excavateAtCell :id=sandkit.api.world.excavateatcell

Re-exports [excavateAtCell](api/sandkit.api.world.worker.md#excavateatcell)

***

#### sandkit.api.world.ExcavateOptions :id=sandkit.api.world.excavateoptions

Re-exports [ExcavateOptions](api/sandkit.api.world.worker.md#excavateoptions)

***

#### sandkit.api.world.CellId :id=sandkit.api.world.cellid

Re-exports [CellId](api/sandkit.api.world.worker.md#cellid)

---

## sandkit.api.world.pickups

World item spawn, pickup, and lookup.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.world.pickups.spawnAtWorld() :id=sandkit.api.world.pickups.spawnatworld

```ts
spawnAtWorld(type: WorldItemType, worldX: number, worldY: number, data?: Record<string, unknown>, light?: WorldItemLight): WorldItem
```

Defined in: [sandkit/api/world.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L61)

Spawn a world pickup at world position.

##### Parameters

###### type

[`WorldItemType`](api/sandkit.enums.WorldItemType.md)

Pickup type discriminator.

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

###### data?

`Record`\<`string`, `unknown`\>

Optional per-item data bag copied onto the instance.

###### light?

[`WorldItemLight`](api/sandkit.api.world.md#worlditemlight)

Optional point light spawned with the pickup.

##### Returns

[`WorldItem`](api/sandkit.api.world.md#worlditem)

The spawned world item instance.

***

#### sandkit.api.world.pickups.destroy() :id=sandkit.api.world.pickups.destroy

```ts
destroy(worldItem: WorldItem): void
```

Defined in: [sandkit/api/world.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L67)

Destroy a world pickup instance.

##### Parameters

###### worldItem

[`WorldItem`](api/sandkit.api.world.md#worlditem)

World item returned from spawn or lookup helpers.

##### Returns

`void`

***

#### sandkit.api.world.pickups.pickUp() :id=sandkit.api.world.pickups.pickup

```ts
pickUp(worldItem: WorldItem): boolean
```

Defined in: [sandkit/api/world.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L74)

Pick up a world item into inventory.

##### Parameters

###### worldItem

[`WorldItem`](api/sandkit.api.world.md#worlditem)

World item to pick up.

##### Returns

`boolean`

True when the item was collected.

***

#### sandkit.api.world.pickups.getAll() :id=sandkit.api.world.pickups.getall

```ts
getAll(): WorldItem[]
```

Defined in: [sandkit/api/world.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L77)

Return all active world pickups.

##### Returns

[`WorldItem`](api/sandkit.api.world.md#worlditem)[]

***

#### sandkit.api.world.pickups.getById() :id=sandkit.api.world.pickups.getbyid

```ts
getById(worldItemId: number): WorldItem | undefined
```

Defined in: [sandkit/api/world.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L83)

Return a world pickup by numeric id.

##### Parameters

###### worldItemId

`number`

Runtime world item id.

##### Returns

[`WorldItem`](api/sandkit.api.world.md#worlditem) \| `undefined`

---

## sandkit.api.elements (worker)

**`Internal`**

Worker-thread `sandkit.api.elements` — shared reads plus direct mutations.

Main thread uses `*WhenIdle` helpers instead of `createAtCell` /
`replaceAtCell` / `removeAtCell`. Built on elements base shapes.

 Worker extension; not interchangeable with main-thread
`sandkit.api.elements`.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.elements.createAtCell() (worker) :id=sandkit.api.elements.worker.createatcell

```ts
createAtCell(...args: number, number, [ElementType, ElementCreateOptions]): void
```

Defined in: [worker/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/api/elements.d.ts#L57)

Create an element at a cell immediately on this worker.
Main thread: use `createAtCellWhenIdle`.

##### Parameters

###### args

...\[`number`, `number`, [`ElementType`](api/sandkit.api.elements.md#elementtype), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

##### Returns

`void`

### References <!-- {docsify-ignore} -->

#### sandkit.api.elements.ElementType (worker) :id=sandkit.api.elements.worker.elementtype

Re-exports [ElementType](api/sandkit.api.elements.md#elementtype)

***

#### sandkit.api.elements.ElementId (worker) :id=sandkit.api.elements.worker.elementid

Re-exports [ElementId](api/sandkit.api.elements.md#elementid)

***

#### sandkit.api.elements.ElementRef (worker) :id=sandkit.api.elements.worker.elementref

Re-exports [ElementRef](api/sandkit.api.elements.md#elementref)

***

#### sandkit.api.elements.MatterType (worker) :id=sandkit.api.elements.worker.mattertype

Re-exports [MatterType](api/sandkit.api.elements.MatterType.md)

***

#### sandkit.api.elements.ElementDefinition (worker) :id=sandkit.api.elements.worker.elementdefinition

Re-exports [ElementDefinition](api/sandkit.api.elements.md#elementdefinition)

***

#### sandkit.api.elements.ElementCreateOptions (worker) :id=sandkit.api.elements.worker.elementcreateoptions

Re-exports [ElementCreateOptions](api/sandkit.api.elements.md#elementcreateoptions)

***

#### sandkit.api.elements.getTypeFromId (worker) :id=sandkit.api.elements.worker.gettypefromid

Re-exports [getTypeFromId](api/sandkit.api.elements.md#gettypefromid)

***

#### sandkit.api.elements.getDefinitionByType (worker) :id=sandkit.api.elements.worker.getdefinitionbytype

Re-exports [getDefinitionByType](api/sandkit.api.elements.md#getdefinitionbytype)

***

#### sandkit.api.elements.getTypeAtCell (worker) :id=sandkit.api.elements.worker.gettypeatcell

Re-exports [getTypeAtCell](api/sandkit.api.elements.md#gettypeatcell)

***

#### sandkit.api.elements.getResolvedTypeAtCell (worker) :id=sandkit.api.elements.worker.getresolvedtypeatcell

Re-exports [getResolvedTypeAtCell](api/sandkit.api.elements.md#getresolvedtypeatcell)

***

#### sandkit.api.elements.getResolvedTypeFromCellId (worker) :id=sandkit.api.elements.worker.getresolvedtypefromcellid

Re-exports [getResolvedTypeFromCellId](api/sandkit.api.elements.md#getresolvedtypefromcellid)

***

#### sandkit.api.elements.getInfoAtCell (worker) :id=sandkit.api.elements.worker.getinfoatcell

Re-exports [getInfoAtCell](api/sandkit.api.elements.md#getinfoatcell)

***

#### sandkit.api.elements.getMatterTypeAtCell (worker) :id=sandkit.api.elements.worker.getmattertypeatcell

Re-exports [getMatterTypeAtCell](api/sandkit.api.elements.md#getmattertypeatcell)

***

#### sandkit.api.elements.isTypeAtCell (worker) :id=sandkit.api.elements.worker.istypeatcell

Re-exports [isTypeAtCell](api/sandkit.api.elements.md#istypeatcell)

***

#### sandkit.api.elements.isFreeFallingAtCell (worker) :id=sandkit.api.elements.worker.isfreefallingatcell

Re-exports [isFreeFallingAtCell](api/sandkit.api.elements.md#isfreefallingatcell)

***

#### sandkit.api.elements.getVelocityAtCell (worker) :id=sandkit.api.elements.worker.getvelocityatcell

Re-exports [getVelocityAtCell](api/sandkit.api.elements.md#getvelocityatcell)

***

#### sandkit.api.elements.getDataFieldAtCell (worker) :id=sandkit.api.elements.worker.getdatafieldatcell

Re-exports [getDataFieldAtCell](api/sandkit.api.elements.md#getdatafieldatcell)

---

## sandkit.api.main (worker)

**`Internal`**

Worker thread only.

`sandkit.api.main` — send events to the main thread.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md#workersandkitapi). Main thread has a
larger `sandkit.api` surface; do not assume parity.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.main.emitEvent() (worker) :id=sandkit.api.main.worker.emitevent

```ts
emitEvent<Payload = any>(eventId: string, payload: Payload): void
```

Defined in: [worker/api/main.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/api/main.d.ts#L15)

Emit a custom event on the main thread.

##### Type Parameters

###### Payload

`Payload` = `any`

##### Parameters

###### eventId

`string`

Registered event name.

###### payload

`Payload`

Serializable payload passed to main-thread listeners.

##### Returns

`void`

---

## sandkit.api.maps (worker)

**`Internal`**

Shared `sandkit.api.maps` base — active custom map metadata.

 Base namespace reused by main and worker declarations.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.maps.ActiveMapV1 (worker) :id=sandkit.api.maps.worker.activemapv1

Defined in: [shared/api/maps.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L18)

Active custom map record (version 1 schema).

Shape varies by map. Known fields are optional; additional keys may exist.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id?

```ts
optional id?: string
```

Defined in: [shared/api/maps.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L19)

###### deployment?

```ts
optional deployment?: unknown
```

Defined in: [shared/api/maps.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L20)

###### spawn?

```ts
optional spawn?: unknown
```

Defined in: [shared/api/maps.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L21)

###### topBounds?

```ts
optional topBounds?: object
```

Defined in: [shared/api/maps.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L22)

###### soft?

```ts
optional soft?: number
```

###### hard?

```ts
optional hard?: number
```

###### parallax?

```ts
optional parallax?: unknown
```

Defined in: [shared/api/maps.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L26)

###### depthLight?

```ts
optional depthLight?: unknown
```

Defined in: [shared/api/maps.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L27)

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.maps.getActive() (worker) :id=sandkit.api.maps.worker.getactive

```ts
getActive(): Readonly<ActiveMapV1> | null
```

Defined in: [shared/api/maps.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/maps.d.ts#L11)

Return the currently loaded custom map definition.

##### Returns

`Readonly`\<[`ActiveMapV1`](#activemapv1)\> \| `null`

Active map metadata, or `null` outside custom maps.

---

## sandkit.api.player (worker)

**`Internal`**

Shared `sandkit.api.player` base — player position and collision queries.

 Base namespace reused by main and worker declarations.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.player.getWorldPosition() (worker) :id=sandkit.api.player.worker.getworldposition

```ts
getWorldPosition(): Vector2
```

Defined in: [shared/api/player.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/player.d.ts#L13)

Return the player center position in world pixels.

##### Returns

[`Vector2`](api/shared.player.md#vector2)

World position as `{ x, y }` in pixels.

***

#### sandkit.api.player.isCollidingWithCell() (worker) :id=sandkit.api.player.worker.iscollidingwithcell

```ts
isCollidingWithCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/player.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/player.d.ts#L21)

Return true when the player hitbox overlaps the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when the player overlaps the cell.

***

#### sandkit.api.player.isWithinRadiusOfCell() (worker) :id=sandkit.api.player.worker.iswithinradiusofcell

```ts
isWithinRadiusOfCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/player.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/player.d.ts#L30)

Return true when the player is within `radius` cells of the point.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

True when the player is inside the radius.

---

## sandkit.api.shared (worker)

**`Internal`**

Worker thread only.

`sandkit.api.shared` — shared memory buffers for workers.

Workers **require** buffers created on the main thread. Main thread only
**gets** existing buffers. See shared for the shared base declarations.

 Worker extension of shared; not interchangeable with
main-thread `sandkit.api.shared`.

### Namespaces <!-- {docsify-ignore} -->

- [buffers](api/sandkit.api.shared.buffers.worker.md)

### References <!-- {docsify-ignore} -->

#### sandkit.api.shared.SharedArray (worker) :id=sandkit.api.shared.worker.sharedarray

Re-exports [SharedArray](api/sandkit.api.shared.md#sharedarray)

***

#### sandkit.api.shared.SharedArrayType (worker) :id=sandkit.api.shared.worker.sharedarraytype

Re-exports [SharedArrayType](api/sandkit.api.shared.md#sharedarraytype)

---

## sandkit.api.shared.buffers (worker)

Named shared memory buffers for worker threads.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.shared.buffers.require() (worker) :id=sandkit.api.shared.buffers.worker.require

```ts
require(key: string, config: object): SharedArray
```

Defined in: [worker/api/shared.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/api/shared.d.ts#L27)

Attach to a named shared buffer on this worker.

The buffer must already exist on the main thread with the same
[SharedArrayType](api/sandkit.api.shared.md#sharedarraytype) and length as `config`.

##### Parameters

###### key

`string`

Buffer name shared across threads.

###### config

Expected array type and length for validation.

###### type

[`SharedArrayType`](api/sandkit.api.shared.md#sharedarraytype)

###### length

`number`

##### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray)

### References <!-- {docsify-ignore} -->

#### sandkit.api.shared.buffers.get (worker) :id=sandkit.api.shared.buffers.worker.get

Re-exports [get](api/sandkit.api.shared.buffers.md#get)

---

## sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

### Namespaces <!-- {docsify-ignore} -->

- [processing](api/sandkit.api.structures.processing.worker.md)

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.structures.StructureData (worker) :id=sandkit.api.structures.worker.structuredata

Defined in: [shared/api/structures.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L117)

Per-structure custom data bag.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### elementId?

```ts
optional elementId?: string | null
```

Defined in: [shared/api/structures.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L118)

###### elementType?

```ts
optional elementType?: TaggedNumber<"elementType"> | null
```

Defined in: [shared/api/structures.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L119)

***

#### sandkit.api.structures.Structure (worker) :id=sandkit.api.structures.worker.structure

Defined in: [shared/api/structures.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L124)

Live structure instance in the world grid.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### x

```ts
x: number
```

Defined in: [shared/api/structures.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L125)

###### y

```ts
y: number
```

Defined in: [shared/api/structures.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L126)

###### trapped?

```ts
optional trapped?: boolean
```

Defined in: [shared/api/structures.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L127)

###### data?

```ts
optional data?: StructureData
```

Defined in: [shared/api/structures.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L128)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.structures.StructureType (worker) :id=sandkit.api.structures.worker.structuretype

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

Defined in: [shared/api/structures.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L133)

Numeric structure type handle. Built-in enum values autocomplete.

***

#### sandkit.api.structures.StructureId (worker) :id=sandkit.api.structures.worker.structureid

```ts
StructureId = LooseString<never>
```

Defined in: [shared/api/structures.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L135)

Mod or built-in structure string id.

***

#### sandkit.api.structures.StructureRef (worker) :id=sandkit.api.structures.worker.structureref

```ts
StructureRef = StructureType | StructureId
```

Defined in: [shared/api/structures.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L137)

Type handle or string id accepted by lookup helpers.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.structures.forEachOfType() (worker) :id=sandkit.api.structures.worker.foreachoftype

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

Defined in: [shared/api/structures.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L16)

Invoke a callback for every structure of the given type.

##### Parameters

###### structureTypeOrId

[`StructureRef`](#structureref)

Structure type value or string id.

###### callback

(`structure`: [`Structure`](#structure)) => `void`

Called once per matching structure instance.

##### Returns

`void`

***

#### sandkit.api.structures.getAtCell() (worker) :id=sandkit.api.structures.worker.getatcell

```ts
getAtCell(...args: CellCoordinates): Structure | null
```

Defined in: [shared/api/structures.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L23)

Return the structure at a cell, or null when none.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`Structure`](#structure) \| `null`

***

#### sandkit.api.structures.getDefinitionByType() (worker) :id=sandkit.api.structures.worker.getdefinitionbytype

```ts
getDefinitionByType(structureType: StructureRef): any
```

Defined in: [shared/api/structures.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L29)

Return the mod-registered or built-in definition for a structure type.

##### Parameters

###### structureType

[`StructureRef`](#structureref)

Structure type value or string id.

##### Returns

`any`

***

#### sandkit.api.structures.getTypeFromId() (worker) :id=sandkit.api.structures.worker.gettypefromid

```ts
getTypeFromId(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L35)

Map a structure string id to its runtime type value.

##### Parameters

###### structureId

`string` & `object`

Structure string id.

##### Returns

[`StructureType`](#structuretype)

***

#### sandkit.api.structures.hasBuiltAtCell() (worker) :id=sandkit.api.structures.worker.hasbuiltatcell

```ts
hasBuiltAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L42)

Return true when a completed structure occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.structures.isType() (worker) :id=sandkit.api.structures.worker.istype

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

Defined in: [shared/api/structures.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L49)

Return true when the structure matches the given id.

##### Parameters

###### structure

[`Structure`](#structure) \| `null`

Structure instance, or null.

###### structureId

`string` & `object`

Structure string id to compare.

##### Returns

`boolean`

***

#### sandkit.api.structures.isTypeAtCell() (worker) :id=sandkit.api.structures.worker.istypeatcell

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/structures.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L57)

Return true when the cell structure matches the given id.

##### Parameters

###### args

...\[`number`, `number`, `string` & `object`\]

##### Returns

`boolean`

***

#### sandkit.api.structures.setSpritesheetIndex() (worker) :id=sandkit.api.structures.worker.setspritesheetindex

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

Defined in: [shared/api/structures.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L64)

Set the spritesheet frame index on a structure instance.

##### Parameters

###### structure

[`Structure`](#structure)

Target structure instance.

###### index

`number`

Spritesheet frame index.

##### Returns

`void`

***

#### sandkit.api.structures.setSpritesheetIndexAtCell() (worker) :id=sandkit.api.structures.worker.setspritesheetindexatcell

```ts
setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/structures.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L72)

Set spritesheet frame index for the structure at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

***

#### sandkit.api.structures.setSpritesheetIndexByValue() (worker) :id=sandkit.api.structures.worker.setspritesheetindexbyvalue

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

Defined in: [shared/api/structures.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L80)

Pick spritesheet index from a value and threshold table on a structure.

##### Parameters

###### structure

[`Structure`](#structure)

Target structure instance.

###### value

`number`

Numeric value mapped through thresholds.

###### thresholds

`number`[]

Ascending threshold values.

##### Returns

`void`

***

#### sandkit.api.structures.setSpritesheetIndexByValueAtCell() (worker) :id=sandkit.api.structures.worker.setspritesheetindexbyvalueatcell

```ts
setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

Defined in: [shared/api/structures.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L89)

Same as [setSpritesheetIndexByValue](#setspritesheetindexbyvalue) for the structure at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`[]\]

##### Returns

`void`

***

#### sandkit.api.structures.update() (worker) :id=sandkit.api.structures.worker.update

```ts
update(structure: Structure, options?: object): void
```

Defined in: [shared/api/structures.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L96)

Push structure field changes to simulation.

##### Parameters

###### structure

[`Structure`](#structure)

Structure instance to update.

###### options?

When `propagateToWorkers` is true, sync to worker threads.

###### propagateToWorkers?

`boolean`

##### Returns

`void`

***

#### sandkit.api.structures.setData() (worker) :id=sandkit.api.structures.worker.setdata

```ts
setData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L104)

Merge partial data onto a structure.

##### Parameters

###### structure

[`Structure`](#structure)

Structure instance to update.

###### partial

`any`

Fields to merge onto `structure.data`.

###### options?

When `propagateToWorkers` is true, sync to worker threads.

###### propagateToWorkers?

`boolean`

##### Returns

`void`

---

## sandkit.api.structures.processing (worker)

Structure processing enablement checks.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.structures.processing.isEnabledAt() (worker) :id=sandkit.api.structures.processing.worker.isenabledat

```ts
isEnabledAt(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L113)

Return true when processing is enabled at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

---

## sandkit.api.terrains (worker)

**`Internal`**

Shared `sandkit.api.terrains` base — terrain type lookup and cell mutation.

 Base namespace reused by main and worker declarations.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.terrains.TerrainMutationOptions (worker) :id=sandkit.api.terrains.worker.terrainmutationoptions

Defined in: [shared/api/terrains.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L89)

Options for terrain create, replace, or remove calls.

##### Properties

###### skipShadow?

```ts
optional skipShadow?: boolean
```

Defined in: [shared/api/terrains.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L91)

Skip shadow updates around the changed cell.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.terrains.TerrainType (worker) :id=sandkit.api.terrains.worker.terraintype

```ts
TerrainType = CellType | TaggedNumber<"terrainType">
```

Defined in: [shared/api/terrains.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L95)

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

***

#### sandkit.api.terrains.TerrainId (worker) :id=sandkit.api.terrains.worker.terrainid

```ts
TerrainId = LooseString<never>
```

Defined in: [shared/api/terrains.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L97)

Mod or built-in terrain string id.

***

#### sandkit.api.terrains.TerrainRef (worker) :id=sandkit.api.terrains.worker.terrainref

```ts
TerrainRef = TerrainType | TerrainId
```

Defined in: [shared/api/terrains.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L99)

Type handle or string id accepted by mutation helpers.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.terrains.getTypeFromId() (worker) :id=sandkit.api.terrains.worker.gettypefromid

```ts
getTypeFromId(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L16)

Resolve a terrain string id to a numeric cell type.

##### Parameters

###### terrainId

`string` & `object`

Mod-registered or built-in terrain id.

##### Returns

[`TerrainType`](#terraintype)

Numeric terrain cell type.

***

#### sandkit.api.terrains.getTypeAtCell() (worker) :id=sandkit.api.terrains.worker.gettypeatcell

```ts
getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

Defined in: [shared/api/terrains.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L23)

Return the terrain cell type at a cell, or null when none.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`TerrainType`](#terraintype) \| `null`

***

#### sandkit.api.terrains.getDataAtCell() (worker) :id=sandkit.api.terrains.worker.getdataatcell

```ts
getDataAtCell(...args: CellCoordinates): { cellType: TerrainType; hp: number | null; } | null
```

Defined in: [shared/api/terrains.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L31)

Return terrain cell type and hit points at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

\{ `cellType`: [`TerrainType`](#terraintype); `hp`: `number` \| `null`; \} \| `null`

Cell type and hp, or null when the cell is not terrain.

***

#### sandkit.api.terrains.isAtCell() (worker) :id=sandkit.api.terrains.worker.isatcell

```ts
isAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/terrains.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L38)

Return true when any terrain occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.terrains.isTypeAtCell() (worker) :id=sandkit.api.terrains.worker.istypeatcell

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/terrains.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L46)

Return true when the cell terrain matches the given id.

##### Parameters

###### args

...\[`number`, `number`, `string` & `object`\]

##### Returns

`boolean`

***

#### sandkit.api.terrains.isCellIdTerrain() (worker) :id=sandkit.api.terrains.worker.iscellidterrain

```ts
isCellIdTerrain(cellId: CellId): boolean
```

Defined in: [shared/api/terrains.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L52)

Return true when a packed cell id refers to terrain.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.world.worker.md#getcellidatcell).

##### Returns

`boolean`

***

#### sandkit.api.terrains.damageAtCell() (worker) :id=sandkit.api.terrains.worker.damageatcell

```ts
damageAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/terrains.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L60)

Apply damage to terrain at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

***

#### sandkit.api.terrains.createAtCell() (worker) :id=sandkit.api.terrains.worker.createatcell

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L69)

Place terrain at an empty cell.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

***

#### sandkit.api.terrains.replaceAtCell() (worker) :id=sandkit.api.terrains.worker.replaceatcell

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L78)

Replace existing terrain at a cell.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

***

#### sandkit.api.terrains.removeAtCell() (worker) :id=sandkit.api.terrains.worker.removeatcell

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L86)

Remove terrain from a cell.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

---

## sandkit.api.ui (worker)

**`Internal`**

Shared `sandkit.api.ui` base — lightweight UI helpers available on workers.

Main thread adds richer UI APIs on top of this shape.

 Base namespace reused by main and worker declarations.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.ui.I18nTextKey (worker) :id=sandkit.api.ui.worker.i18ntextkey

Defined in: [shared/api/ui.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L23)

Translation key with optional parameter substitution.

##### Properties

###### key

```ts
key: string
```

Defined in: [shared/api/ui.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L25)

Namespaced translation key (for example `ui|save|save`).

###### params?

```ts
optional params?: Record<string, string | number>
```

Defined in: [shared/api/ui.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L27)

Values merged into the translated string.

***

#### sandkit.api.ui.I18nTranslatable (worker) :id=sandkit.api.ui.worker.i18ntranslatable

Defined in: [shared/api/ui.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L31)

Value returned by `sandkit.api.i18n.translatable`.

##### Properties

###### \_\_translatable

```ts
\_\_translatable: true
```

Defined in: [shared/api/ui.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L32)

###### key

```ts
key: string
```

Defined in: [shared/api/ui.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L33)

###### fallback

```ts
fallback: string
```

Defined in: [shared/api/ui.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L34)

***

#### sandkit.api.ui.ToastOptions (worker) :id=sandkit.api.ui.worker.toastoptions

Defined in: [shared/api/ui.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L38)

Cooldown, style, and auto-dismiss options for [toast](#toast).

##### Properties

###### cooldown?

```ts
optional cooldown?: number
```

Defined in: [shared/api/ui.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L40)

Minimum ms before the same toast can show again.

###### cooldownKey?

```ts
optional cooldownKey?: string
```

Defined in: [shared/api/ui.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L45)

Dedupe key paired with [ToastOptions.cooldown](#cooldown).
Defaults to the message string or `message.key`.

###### duration?

```ts
optional duration?: number | false
```

Defined in: [shared/api/ui.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L50)

Auto-dismiss delay in ms. Default `5000`.
Set `false` to keep the toast until another toast replaces it.

###### variant?

```ts
optional variant?: string & object | "danger" | "hint" | "hole"
```

Defined in: [shared/api/ui.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L52)

Visual style applied to the toast body.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.ui.LocalizedText (worker) :id=sandkit.api.ui.worker.localizedtext

```ts
LocalizedText = string | I18nTextKey | I18nTranslatable
```

Defined in: [shared/api/ui.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L17)

Plain text, translation key object, or i18n translatable value.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.ui.toast() (worker) :id=sandkit.api.ui.worker.toast

```ts
toast(message: LocalizedText, options?: ToastOptions): void
```

Defined in: [shared/api/ui.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/ui.d.ts#L14)

Show a short on-screen toast message.

##### Parameters

###### message

[`LocalizedText`](#localizedtext)

Plain text, translation key, or translatable value.

###### options?

[`ToastOptions`](#toastoptions)

Cooldown, style, and auto-dismiss options.

##### Returns

`void`

---

## sandkit.api.worker (worker)

**`Internal`**

Worker thread only.

`sandkit.api.worker` — identity of the current simulation worker.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md#workersandkitapi). Not the same as
main-thread APIs.

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.worker.getIndex() (worker) :id=sandkit.api.worker.worker.getindex

```ts
getIndex(): number
```

Defined in: [worker/api/worker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/api/worker.d.ts#L14)

Return the zero-based index of this worker in the worker pool.

##### Returns

`number`

Worker index (`0` … `getCount() - 1`).

***

#### sandkit.api.worker.getCount() (worker) :id=sandkit.api.worker.worker.getcount

```ts
getCount(): number
```

Defined in: [worker/api/worker.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/api/worker.d.ts#L19)

Return the total number of simulation workers.

##### Returns

`number`

Worker count for the active simulation.

---

## sandkit.api.world (worker)

**`Internal`**

Shared `sandkit.api.world` base — cell and terrain queries plus excavation.

Main thread adds idle scheduling and fog helpers on top of this shape.

 Base namespace reused by main and worker declarations.

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.api.world.ExcavateOptions (worker) :id=sandkit.api.world.worker.excavateoptions

Defined in: [shared/api/world.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L55)

Flags that control how [excavateAtCell](#excavateatcell) resolves damage and drops.

##### Properties

###### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [shared/api/world.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L57)

Treat the dig as gun fire for terrain resistance checks.

###### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [shared/api/world.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L59)

Treat the dig as rocket or dynamite explosion damage.

###### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [shared/api/world.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L61)

Treat the dig as drill damage.

###### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [shared/api/world.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L63)

Use outVelocity literally instead of deriving ejection speed.

###### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [shared/api/world.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L65)

Allow removing terrain marked non-destructible.

###### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [shared/api/world.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L67)

Force-remove all matched cells regardless of normal rules.

###### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [shared/api/world.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L69)

Extra drill-tier damage when [fromDrill](#fromdrill) is true. Clamped to 0–1000.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.world.CellId (worker) :id=sandkit.api.world.worker.cellid

```ts
CellId = CellId
```

Defined in: [shared/api/world.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L52)

Packed cell id from [getCellIdAtCell](#getcellidatcell).

### Functions <!-- {docsify-ignore} -->

#### sandkit.api.world.getCellIdAtCell() (worker) :id=sandkit.api.world.worker.getcellidatcell

```ts
getCellIdAtCell(...args: CellCoordinates): CellId
```

Defined in: [shared/api/world.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L18)

Return the packed cell id at grid coordinates.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id for the cell.

***

#### sandkit.api.world.isCellEmptyAtCell() (worker) :id=sandkit.api.world.worker.iscellemptyatcell

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/world.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L25)

Return true when the cell has no element or terrain content.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.world.isTerrainAtCell() (worker) :id=sandkit.api.world.worker.isterrainatcell

```ts
isTerrainAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/world.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L32)

Return true when the cell holds terrain (not an element).

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

***

#### sandkit.api.world.reportActivityAtCell() (worker) :id=sandkit.api.world.worker.reportactivityatcell

```ts
reportActivityAtCell(...args: CellCoordinates): void
```

Defined in: [shared/api/world.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L39)

Mark the cell active for simulation this tick.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

***

#### sandkit.api.world.excavateAtCell() (worker) :id=sandkit.api.world.worker.excavateatcell

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

Defined in: [shared/api/world.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L49)

Apply excavation damage and eject velocity at a cell.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](#excavateoptions)\]

##### Returns

`void`

---

## sandkit.engine.api.augments

**`Internal`**

`sandkit.engine.api.augments` — player augment levels and unlocked perks.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.augments.getDigLevel() :id=sandkit.engine.api.augments.getdiglevel

```ts
getDigLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L15)

Return the current dig augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.getGunLevel() :id=sandkit.engine.api.augments.getgunlevel

```ts
getGunLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L20)

Return the current gun augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.getPhaseLevel() :id=sandkit.engine.api.augments.getphaselevel

```ts
getPhaseLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L25)

Return the current phase augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.getRocketAmmoLevel() :id=sandkit.engine.api.augments.getrocketammolevel

```ts
getRocketAmmoLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L30)

Return the current rocket ammo augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.getRocketReloadLevel() :id=sandkit.engine.api.augments.getrocketreloadlevel

```ts
getRocketReloadLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L35)

Return the current rocket reload augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.getSprintCapLevel() :id=sandkit.engine.api.augments.getsprintcaplevel

```ts
getSprintCapLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L40)

Return the current sprint cap augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasBigDig() :id=sandkit.engine.api.augments.hasbigdig

```ts
hasBigDig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L45)

Return whether the big-dig augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasBulletSpeed() :id=sandkit.engine.api.augments.hasbulletspeed

```ts
hasBulletSpeed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L50)

Return whether the bullet-speed augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasBulletTracer() :id=sandkit.engine.api.augments.hasbullettracer

```ts
hasBulletTracer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L55)

Return whether the bullet-tracer augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasKickstartBoost() :id=sandkit.engine.api.augments.haskickstartboost

```ts
hasKickstartBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L60)

Return whether the kickstart-boost augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasPhaseDash() :id=sandkit.engine.api.augments.hasphasedash

```ts
hasPhaseDash(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L65)

Return whether the phase-dash augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasPhaseDashCharge() :id=sandkit.engine.api.augments.hasphasedashcharge

```ts
hasPhaseDashCharge(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L70)

Return whether the phase-dash-charge augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasRideBoost() :id=sandkit.engine.api.augments.hasrideboost

```ts
hasRideBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L75)

Return whether the ride-boost augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasRocketDamage() :id=sandkit.engine.api.augments.hasrocketdamage

```ts
hasRocketDamage(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L80)

Return whether the rocket-damage augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasRocketWarhead() :id=sandkit.engine.api.augments.hasrocketwarhead

```ts
hasRocketWarhead(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L85)

Return whether the rocket-warhead augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasSprintPower() :id=sandkit.engine.api.augments.hassprintpower

```ts
hasSprintPower(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L90)

Return whether the sprint-power augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.augments.hasTripleShot() :id=sandkit.engine.api.augments.hastripleshot

```ts
hasTripleShot(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/augments.d.ts#L95)

Return whether the triple-shot augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.auralite

**`Internal`**

`sandkit.engine.api.auralite` — auralite production tracking.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.auralite.ensureProducedAtLeast() :id=sandkit.engine.api.auralite.ensureproducedatleast

```ts
ensureProducedAtLeast(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/auralite.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/auralite.d.ts#L15)

Ensure at least the given amount of auralite has been produced.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.auralite.getProduced() :id=sandkit.engine.api.auralite.getproduced

```ts
getProduced(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/auralite.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/auralite.d.ts#L20)

Return total auralite produced so far.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.blueprints

**`Internal`**

`sandkit.engine.api.blueprints` — blueprint save, load, and import/export.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.blueprints.delete() :id=sandkit.engine.api.blueprints.delete

```ts
delete(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/blueprints.d.ts#L15)

Delete a saved blueprint. Runtime property name is `delete`.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.blueprints.exportAllString() :id=sandkit.engine.api.blueprints.exportallstring

```ts
exportAllString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/blueprints.d.ts#L21)

Export all blueprints as one string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.blueprints.exportString() :id=sandkit.engine.api.blueprints.exportstring

```ts
exportString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/blueprints.d.ts#L26)

Export one blueprint as a string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.blueprints.getAll() :id=sandkit.engine.api.blueprints.getall

```ts
getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/blueprints.d.ts#L31)

Return all saved blueprints.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.blueprints.importString() :id=sandkit.engine.api.blueprints.importstring

```ts
importString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/blueprints.d.ts#L36)

Import a blueprint from a string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.blueprints.load() :id=sandkit.engine.api.blueprints.load

```ts
load(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/blueprints.d.ts#L41)

Load a blueprint into the active session.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.blueprints.save() :id=sandkit.engine.api.blueprints.save

```ts
save(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/blueprints.d.ts#L46)

Save the current selection as a blueprint.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.clipboard

**`Internal`**

`sandkit.engine.api.clipboard` — build clipboard copy, paste, and history.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.clipboard.activate() :id=sandkit.engine.api.clipboard.activate

```ts
activate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L15)

Activate the clipboard tool or mode.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.clipboard.clear() :id=sandkit.engine.api.clipboard.clear

```ts
clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L20)

Clear the current clipboard contents.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.clipboard.get() :id=sandkit.engine.api.clipboard.get

```ts
get(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L25)

Return the current clipboard payload.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.clipboard.getHistory() :id=sandkit.engine.api.clipboard.gethistory

```ts
getHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L30)

Return clipboard history entries.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.clipboard.getSignalLinks() :id=sandkit.engine.api.clipboard.getsignallinks

```ts
getSignalLinks(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L35)

Return signal links stored on the clipboard.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.clipboard.selectFromHistory() :id=sandkit.engine.api.clipboard.selectfromhistory

```ts
selectFromHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L40)

Restore a clipboard entry from history.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.clipboard.set() :id=sandkit.engine.api.clipboard.set

```ts
set(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L45)

Set the clipboard payload.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.coloringTool

**`Internal`**

`sandkit.engine.api.coloringTool` — paint-bucket and flood-fill structure coloring.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.coloringTool.colorStructure() :id=sandkit.engine.api.coloringTool.colorstructure

```ts
colorStructure(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L15)

Apply a color to one structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.floodFillColor() :id=sandkit.engine.api.coloringTool.floodfillcolor

```ts
floodFillColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L20)

Flood-fill connected structures with a color.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.getColor() :id=sandkit.engine.api.coloringTool.getcolor

```ts
getColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L25)

Return the color on a structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.isColorableStructure() :id=sandkit.engine.api.coloringTool.iscolorablestructure

```ts
isColorableStructure(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L30)

Return whether a structure can be colored.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.isMatchColorMode() :id=sandkit.engine.api.coloringTool.ismatchcolormode

```ts
isMatchColorMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L35)

Return whether match-color mode is active.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.isPaintBucketMode() :id=sandkit.engine.api.coloringTool.ispaintbucketmode

```ts
isPaintBucketMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L40)

Return whether paint-bucket mode is active.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.setColor() :id=sandkit.engine.api.coloringTool.setcolor

```ts
setColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L45)

Set the color on a structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.toggleMatchColorMode() :id=sandkit.engine.api.coloringTool.togglematchcolormode

```ts
toggleMatchColorMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L50)

Toggle match-color mode on or off.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.coloringTool.togglePaintBucketMode() :id=sandkit.engine.api.coloringTool.togglepaintbucketmode

```ts
togglePaintBucketMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/coloringTool.d.ts#L55)

Toggle paint-bucket mode on or off.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.colorPicker

**`Internal`**

`sandkit.engine.api.colorPicker` — structure color palette UI helpers.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Variables <!-- {docsify-ignore} -->

#### CYCLE\_COLOR

```ts
const CYCLE\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L12)

Sentinel value for cycling through predefined colors.

***

#### NO\_COLOR

```ts
const NO\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L14)

Sentinel value for no color selected.

***

#### PREDEFINED\_COLORS

```ts
const PREDEFINED\_COLORS: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L16)

List of predefined palette colors.

***

#### RANDOM\_COLOR

```ts
const RANDOM\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L18)

Sentinel value for a random palette color.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.colorPicker.closePalette() :id=sandkit.engine.api.colorPicker.closepalette

```ts
closePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L23)

Close the active color palette UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.getActivePalette() :id=sandkit.engine.api.colorPicker.getactivepalette

```ts
getActivePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L28)

Return the active palette identifier.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.getCycleColor() :id=sandkit.engine.api.colorPicker.getcyclecolor

```ts
getCycleColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L33)

Return the next color in the cycle.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.getRandomColor() :id=sandkit.engine.api.colorPicker.getrandomcolor

```ts
getRandomColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L38)

Return a random predefined color.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.hexToRgba() :id=sandkit.engine.api.colorPicker.hextorgba

```ts
hexToRgba(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L43)

Convert a hex color string to RGBA components.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.renderColorButton() :id=sandkit.engine.api.colorPicker.rendercolorbutton

```ts
renderColorButton(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L48)

Render a color-picker button in the UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.renderColorSection() :id=sandkit.engine.api.colorPicker.rendercolorsection

```ts
renderColorSection(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L53)

Render a color section in the UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.renderPalette() :id=sandkit.engine.api.colorPicker.renderpalette

```ts
renderPalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L58)

Render the full color palette UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.rgbaToHex() :id=sandkit.engine.api.colorPicker.rgbatohex

```ts
rgbaToHex(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L63)

Convert RGBA components to a hex color string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.setActivePalette() :id=sandkit.engine.api.colorPicker.setactivepalette

```ts
setActivePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L68)

Set the active palette identifier.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.colorPicker.togglePalette() :id=sandkit.engine.api.colorPicker.togglepalette

```ts
togglePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/colorPicker.d.ts#L73)

Open or close the color palette UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.conveyors

**`Internal`**

`sandkit.engine.api.conveyors` — conveyor type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.conveyors.registerType() :id=sandkit.engine.api.conveyors.registertype

```ts
registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/conveyors.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/conveyors.d.ts#L15)

Register a custom conveyor type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.debug

**`Internal`**

`sandkit.engine.api.debug` — debug overlay registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.debug.register() :id=sandkit.engine.api.debug.register

```ts
register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/debug.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/debug.d.ts#L15)

Register a debug overlay or helper.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.drones

**`Internal`**

`sandkit.engine.api.drones` — drone spawn and removal.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.drones.kill() :id=sandkit.engine.api.drones.kill

```ts
kill(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/drones.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/drones.d.ts#L15)

Remove one or more drones.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.drones.spawn() :id=sandkit.engine.api.drones.spawn

```ts
spawn(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/drones.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/drones.d.ts#L20)

Spawn a drone instance.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.entities

**`Internal`**

`sandkit.engine.api.entities` — entity type registration, spawn, and queries.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.entities.createLight() :id=sandkit.engine.api.entities.createlight

```ts
createLight(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L15)

Create a light entity attached to a parent.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.getAll() :id=sandkit.engine.api.entities.getall

```ts
getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L20)

Return all live entities.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.getAllByType() :id=sandkit.engine.api.entities.getallbytype

```ts
getAllByType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L25)

Return all entities of one type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.getAllTypeDefs() :id=sandkit.engine.api.entities.getalltypedefs

```ts
getAllTypeDefs(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L30)

Return all registered entity type definitions.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.getSprite() :id=sandkit.engine.api.entities.getsprite

```ts
getSprite(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L35)

Return the sprite for an entity.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.getTypeDef() :id=sandkit.engine.api.entities.gettypedef

```ts
getTypeDef(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L40)

Return one entity type definition by id.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.launch() :id=sandkit.engine.api.entities.launch

```ts
launch(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L45)

Launch an entity with velocity or trajectory.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.registerSpawner() :id=sandkit.engine.api.entities.registerspawner

```ts
registerSpawner(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L50)

Register an entity spawner behavior.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.registerType() :id=sandkit.engine.api.entities.registertype

```ts
registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L55)

Register a custom entity type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.spawn() :id=sandkit.engine.api.entities.spawn

```ts
spawn(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L60)

Spawn an entity instance.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.entities.startCapture() :id=sandkit.engine.api.entities.startcapture

```ts
startCapture(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/entities.d.ts#L65)

Start capturing entities for a tool or effect.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.extensions

**`Internal`**

`sandkit.engine.api.extensions` — structure extension definitions.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.extensions.define() :id=sandkit.engine.api.extensions.define

```ts
define(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/extensions.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/extensions.d.ts#L15)

Define a structure extension type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.factory

**`Internal`**

`sandkit.engine.api.factory` — factory tier progression and process tracking.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.factory.addViabilityGold() :id=sandkit.engine.api.factory.addviabilitygold

```ts
addViabilityGold(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L15)

Add viability gold toward the next factory tier.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.canUnlockNextTier() :id=sandkit.engine.api.factory.canunlocknexttier

```ts
canUnlockNextTier(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L20)

Return whether the next factory tier can be unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.ensureProcessAtLeast() :id=sandkit.engine.api.factory.ensureprocessatleast

```ts
ensureProcessAtLeast(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L25)

Ensure at least the given process count has been recorded.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.flushDeferredLevelUps() :id=sandkit.engine.api.factory.flushdeferredlevelups

```ts
flushDeferredLevelUps(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L30)

Apply deferred factory level-ups.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.getLevel() :id=sandkit.engine.api.factory.getlevel

```ts
getLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L35)

Return the current factory level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.getProcessCount() :id=sandkit.engine.api.factory.getprocesscount

```ts
getProcessCount(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L40)

Return total recorded process count.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.getProcessRate() :id=sandkit.engine.api.factory.getprocessrate

```ts
getProcessRate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L45)

Return the current process rate.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.recordProcess() :id=sandkit.engine.api.factory.recordprocess

```ts
recordProcess(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L50)

Record one factory process event.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.factory.unlockNextTier() :id=sandkit.engine.api.factory.unlocknexttier

```ts
unlockNextTier(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/factory.d.ts#L55)

Unlock the next factory tier.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.foliage

**`Internal`**

`sandkit.engine.api.foliage` — procedural foliage generation and clusters.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.foliage.generate() :id=sandkit.engine.api.foliage.generate

```ts
generate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/foliage.d.ts#L15)

Generate foliage for a region or world chunk.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.foliage.getClusters() :id=sandkit.engine.api.foliage.getclusters

```ts
getClusters(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/foliage.d.ts#L20)

Return foliage cluster data.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.foliage.getContainer() :id=sandkit.engine.api.foliage.getcontainer

```ts
getContainer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/foliage.d.ts#L25)

Return the foliage render container.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.foliage.hasProcgenData() :id=sandkit.engine.api.foliage.hasprocgendata

```ts
hasProcgenData(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/foliage.d.ts#L30)

Return whether procgen foliage data exists for a location.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.foundationColorPicker

**`Internal`**

`sandkit.engine.api.foundationColorPicker` — foundation tile color lookup.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.foundationColorPicker.getColor() :id=sandkit.engine.api.foundationColorPicker.getcolor

```ts
getColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foundationColorPicker.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/foundationColorPicker.d.ts#L15)

Return the color on a foundation tile.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.game

**`Internal`**

`sandkit.engine.api.game` — game session start, save, and load.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.game.load() :id=sandkit.engine.api.game.load

```ts
load(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/game.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/game.d.ts#L15)

Load a saved game into the session.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.game.save() :id=sandkit.engine.api.game.save

```ts
save(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/game.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/game.d.ts#L20)

Save the current session.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.game.start() :id=sandkit.engine.api.game.start

```ts
start(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/game.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/game.d.ts#L25)

Start a new game session.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.heatTransfer

**`Internal`**

`sandkit.engine.api.heatTransfer` — temperature diffusion and absorption.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.heatTransfer.absorbAdjacentElements() :id=sandkit.engine.api.heatTransfer.absorbadjacentelements

```ts
absorbAdjacentElements(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/heatTransfer.d.ts#L15)

Absorb heat from adjacent elements into a cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.heatTransfer.addTemperature() :id=sandkit.engine.api.heatTransfer.addtemperature

```ts
addTemperature(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/heatTransfer.d.ts#L20)

Add temperature to a cell or region.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.heatTransfer.computeDiffusedTemperatures() :id=sandkit.engine.api.heatTransfer.computediffusedtemperatures

```ts
computeDiffusedTemperatures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/heatTransfer.d.ts#L25)

Compute diffused temperatures for connected cells.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.heatTransfer.computeEqualizedTemperature() :id=sandkit.engine.api.heatTransfer.computeequalizedtemperature

```ts
computeEqualizedTemperature(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/heatTransfer.d.ts#L30)

Compute one equalized temperature across connected cells.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.heatTransfer.consumeTemperatureNear() :id=sandkit.engine.api.heatTransfer.consumetemperaturenear

```ts
consumeTemperatureNear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/heatTransfer.d.ts#L35)

Consume temperature near a point or cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.heatTransfer.ensureTemperature() :id=sandkit.engine.api.heatTransfer.ensuretemperature

```ts
ensureTemperature(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/heatTransfer.d.ts#L40)

Ensure a cell has at least the given temperature.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.heatTransfer.equalizeConnected() :id=sandkit.engine.api.heatTransfer.equalizeconnected

```ts
equalizeConnected(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/heatTransfer.d.ts#L45)

Equalize temperature across a connected component.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.launchers

**`Internal`**

`sandkit.engine.api.launchers` — launcher type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.launchers.registerType() :id=sandkit.engine.api.launchers.registertype

```ts
registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/launchers.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/launchers.d.ts#L15)

Register a custom launcher type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.lightColorPicker

**`Internal`**

`sandkit.engine.api.lightColorPicker` — light color lookup.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.lightColorPicker.getColor() :id=sandkit.engine.api.lightColorPicker.getcolor

```ts
getColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/lightColorPicker.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/lightColorPicker.d.ts#L15)

Return the color on a light structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.matters

**`Internal`**

`sandkit.engine.api.matters` — matter type registration and solid updates.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.matters.getMatterTypeFromId() :id=sandkit.engine.api.matters.getmattertypefromid

```ts
getMatterTypeFromId(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/matters.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/matters.d.ts#L15)

Resolve a matter type from an id string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.matters.register() :id=sandkit.engine.api.matters.register

```ts
register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/matters.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/matters.d.ts#L20)

Register a custom matter type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.matters.runSolidUpdate() :id=sandkit.engine.api.matters.runsolidupdate

```ts
runSolidUpdate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/matters.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/matters.d.ts#L25)

Run one solid-matter update step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.misc

**`Internal`**

`sandkit.engine.api.misc` — miscellaneous structure behavior registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.misc.register() :id=sandkit.engine.api.misc.register

```ts
register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/misc.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/misc.d.ts#L15)

Register a miscellaneous structure behavior.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.portals

**`Internal`**

`sandkit.engine.api.portals` — portal marker queries.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.portals.getMarkers() :id=sandkit.engine.api.portals.getmarkers

```ts
getMarkers(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/portals.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/portals.d.ts#L15)

Return portal markers in the world.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.prefabData

**`Internal`**

`sandkit.engine.api.prefabData` — prefab artifact and metadata lookup.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.prefabData.getAll() :id=sandkit.engine.api.prefabData.getall

```ts
getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L15)

Return all prefab data entries.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prefabData.getAllMetadata() :id=sandkit.engine.api.prefabData.getallmetadata

```ts
getAllMetadata(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L20)

Return metadata for all prefabs.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prefabData.getArtifactLocations() :id=sandkit.engine.api.prefabData.getartifactlocations

```ts
getArtifactLocations(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L25)

Return artifact locations for prefabs.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prefabData.getAtCell() :id=sandkit.engine.api.prefabData.getatcell

```ts
getAtCell(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L30)

Return prefab data at one grid cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prefabData.getMetadata() :id=sandkit.engine.api.prefabData.getmetadata

```ts
getMetadata(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L35)

Return metadata for one prefab.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.prefabDecor

**`Internal`**

`sandkit.engine.api.prefabDecor` — prefab decorative placement.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.prefabDecor.getPlacementByName() :id=sandkit.engine.api.prefabDecor.getplacementbyname

```ts
getPlacementByName(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabDecor.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabDecor.d.ts#L15)

Return a decor placement definition by name.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prefabDecor.replaceDecor() :id=sandkit.engine.api.prefabDecor.replacedecor

```ts
replaceDecor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabDecor.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabDecor.d.ts#L20)

Replace decor instances in a region or prefab.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.prefabulator

**`Internal`**

`sandkit.engine.api.prefabulator` — blueprint structure serialization for prefabs.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.prefabulator.localizeBlueprintStructures() :id=sandkit.engine.api.prefabulator.localizeblueprintstructures

```ts
localizeBlueprintStructures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabulator.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabulator.d.ts#L15)

Convert serialized blueprint structures to world-local coordinates.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prefabulator.serializeBlueprintStructures() :id=sandkit.engine.api.prefabulator.serializeblueprintstructures

```ts
serializeBlueprintStructures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabulator.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabulator.d.ts#L20)

Serialize blueprint structures for prefab storage.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.prismaline

**`Internal`**

`sandkit.engine.api.prismaline` — prismaline resource consume and availability.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.prismaline.consume() :id=sandkit.engine.api.prismaline.consume

```ts
consume(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismaline.d.ts#L15)

Consume prismaline from the player or world.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prismaline.getAvailable() :id=sandkit.engine.api.prismaline.getavailable

```ts
getAvailable(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismaline.d.ts#L20)

Return available prismaline amount.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prismaline.getConsumed() :id=sandkit.engine.api.prismaline.getconsumed

```ts
getConsumed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismaline.d.ts#L25)

Return total prismaline consumed so far.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.prismite

**`Internal`**

`sandkit.engine.api.prismite` — prismite resource consume and availability.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.prismite.consume() :id=sandkit.engine.api.prismite.consume

```ts
consume(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismite.d.ts#L15)

Consume prismite from the player or world.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prismite.getAvailable() :id=sandkit.engine.api.prismite.getavailable

```ts
getAvailable(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismite.d.ts#L20)

Return available prismite amount.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.prismite.getConsumed() :id=sandkit.engine.api.prismite.getconsumed

```ts
getConsumed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismite.d.ts#L25)

Return total prismite consumed so far.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.queue

**`Internal`**

`sandkit.engine.api.queue` — deferred tick queue with handlers.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.queue.enqueue() :id=sandkit.engine.api.queue.enqueue

```ts
enqueue(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/queue.d.ts#L15)

Enqueue work to run on a future tick.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.queue.enqueueInTicks() :id=sandkit.engine.api.queue.enqueueinticks

```ts
enqueueInTicks(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/queue.d.ts#L20)

Enqueue work to run after a tick delay.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.queue.enqueueSkipTick() :id=sandkit.engine.api.queue.enqueueskiptick

```ts
enqueueSkipTick(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/queue.d.ts#L25)

Enqueue work that skips the current tick.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.queue.process() :id=sandkit.engine.api.queue.process

```ts
process(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/queue.d.ts#L30)

Process pending queue items for the current tick.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.queue.registerHandler() :id=sandkit.engine.api.queue.registerhandler

```ts
registerHandler(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/queue.d.ts#L35)

Register a handler for a queue item type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.queue.removeByKey() :id=sandkit.engine.api.queue.removebykey

```ts
removeByKey(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/queue.d.ts#L40)

Remove queued items by key.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.shadows

**`Internal`**

`sandkit.engine.api.shadows` — shadow map refresh for regions.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.shadows.refresh() :id=sandkit.engine.api.shadows.refresh

```ts
refresh(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/shadows.d.ts#L15)

Refresh shadows for the whole visible area.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.shadows.refreshRadius() :id=sandkit.engine.api.shadows.refreshradius

```ts
refreshRadius(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/shadows.d.ts#L20)

Refresh shadows within a circular radius.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.shadows.refreshRect() :id=sandkit.engine.api.shadows.refreshrect

```ts
refreshRect(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/shadows.d.ts#L25)

Refresh shadows within a rectangle.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.strataform

**`Internal`**

`sandkit.engine.api.strataform` — strataform event triggers and type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.strataform.getDefaultConfig() :id=sandkit.engine.api.strataform.getdefaultconfig

```ts
getDefaultConfig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L15)

Return the default strataform configuration.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.strataform.getRegisteredTypes() :id=sandkit.engine.api.strataform.getregisteredtypes

```ts
getRegisteredTypes(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L20)

Return all registered strataform types.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.strataform.registerType() :id=sandkit.engine.api.strataform.registertype

```ts
registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L25)

Register a custom strataform type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.strataform.trigger() :id=sandkit.engine.api.strataform.trigger

```ts
trigger(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L30)

Trigger a strataform event at a location.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.strataform.triggerByType() :id=sandkit.engine.api.strataform.triggerbytype

```ts
triggerByType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L35)

Trigger a strataform event by type id.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.swarmConsole

**`Internal`**

`sandkit.engine.api.swarmConsole` — swarm convergence console state.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.swarmConsole.decrementConvergenceBuffer() :id=sandkit.engine.api.swarmConsole.decrementconvergencebuffer

```ts
decrementConvergenceBuffer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L15)

Decrease the convergence buffer by one step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.getCrystalMined() :id=sandkit.engine.api.swarmConsole.getcrystalmined

```ts
getCrystalMined(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L20)

Return total crystal mined for swarm consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.getDiskRadiusCells() :id=sandkit.engine.api.swarmConsole.getdiskradiuscells

```ts
getDiskRadiusCells(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L25)

Return the disk radius in cells for a console.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.getEntityType() :id=sandkit.engine.api.swarmConsole.getentitytype

```ts
getEntityType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L30)

Return the entity type used by swarm consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.getNearestConvergence() :id=sandkit.engine.api.swarmConsole.getnearestconvergence

```ts
getNearestConvergence(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L35)

Return the nearest convergence point.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.getPendingConvergence() :id=sandkit.engine.api.swarmConsole.getpendingconvergence

```ts
getPendingConvergence(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L40)

Return the pending convergence target.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.getPlacedConsoles() :id=sandkit.engine.api.swarmConsole.getplacedconsoles

```ts
getPlacedConsoles(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L45)

Return all placed swarm console structures.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.getRadiusPx() :id=sandkit.engine.api.swarmConsole.getradiuspx

```ts
getRadiusPx(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L50)

Return the console effect radius in pixels.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.isSpawnJammed() :id=sandkit.engine.api.swarmConsole.isspawnjammed

```ts
isSpawnJammed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L55)

Return whether swarm spawn is currently jammed.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.registerEntityType() :id=sandkit.engine.api.swarmConsole.registerentitytype

```ts
registerEntityType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L60)

Register the entity type for swarm consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers() :id=sandkit.engine.api.swarmConsole.resetallconvergencebuffers

```ts
resetAllConvergenceBuffers(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L65)

Reset convergence buffers on all consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.swarmConsole.setSpawnJammed() :id=sandkit.engine.api.swarmConsole.setspawnjammed

```ts
setSpawnJammed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/swarmConsole.d.ts#L70)

Set whether swarm spawn is jammed.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.sweeperDrone

**`Internal`**

`sandkit.engine.api.sweeperDrone` — sweeper drone selection control.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.sweeperDrone.cancelSelection() :id=sandkit.engine.api.sweeperDrone.cancelselection

```ts
cancelSelection(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/sweeperDrone.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/sweeperDrone.d.ts#L15)

Cancel the active sweeper drone selection.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.teleportZones

**`Internal`**

`sandkit.engine.api.teleportZones` — player teleport zone management.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.teleportZones.add() :id=sandkit.engine.api.teleportZones.add

```ts
add(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/teleportZones.d.ts#L15)

Add a teleport zone to the world.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.teleportZones.getAll() :id=sandkit.engine.api.teleportZones.getall

```ts
getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/teleportZones.d.ts#L20)

Return all teleport zones.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.teleportZones.getAtCell() :id=sandkit.engine.api.teleportZones.getatcell

```ts
getAtCell(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/teleportZones.d.ts#L25)

Return the teleport zone at one grid cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.teleportZones.getById() :id=sandkit.engine.api.teleportZones.getbyid

```ts
getById(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/teleportZones.d.ts#L30)

Return one teleport zone by id.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.teleportZones.remove() :id=sandkit.engine.api.teleportZones.remove

```ts
remove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/teleportZones.d.ts#L35)

Remove a teleport zone.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.teleportZones.spawnDefaultParticles() :id=sandkit.engine.api.teleportZones.spawndefaultparticles

```ts
spawnDefaultParticles(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/teleportZones.d.ts#L40)

Spawn default particles at a teleport zone.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.teleportZones.teleportPlayerTo() :id=sandkit.engine.api.teleportZones.teleportplayerto

```ts
teleportPlayerTo(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/teleportZones.d.ts#L45)

Teleport the player to a zone or position.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.tutorialBuild

**`Internal`**

`sandkit.engine.api.tutorialBuild` — tutorial build-step constraints and targets.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.tutorialBuild.areAllTargetsBuilt() :id=sandkit.engine.api.tutorialBuild.arealltargetsbuilt

```ts
areAllTargetsBuilt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L15)

Return whether all active tutorial targets are built.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt() :id=sandkit.engine.api.tutorialBuild.arefamilytargetsbuilt

```ts
areFamilyTargetsBuilt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L20)

Return whether all targets in a structure family are built.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget() :id=sandkit.engine.api.tutorialBuild.canplaceatactivetarget

```ts
canPlaceAtActiveTarget(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L25)

Return whether placement is allowed at the active target.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.getFoundationMoveDests() :id=sandkit.engine.api.tutorialBuild.getfoundationmovedests

```ts
getFoundationMoveDests(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L30)

Return foundation move destination cells for the tutorial step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.getFoundationMoveSources() :id=sandkit.engine.api.tutorialBuild.getfoundationmovesources

```ts
getFoundationMoveSources(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L35)

Return foundation move source cells for the tutorial step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.getTargets() :id=sandkit.engine.api.tutorialBuild.gettargets

```ts
getTargets(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L40)

Return build targets for the current tutorial step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.hasDefinition() :id=sandkit.engine.api.tutorialBuild.hasdefinition

```ts
hasDefinition(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L45)

Return whether a tutorial build definition exists.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.isStepConstrained() :id=sandkit.engine.api.tutorialBuild.isstepconstrained

```ts
isStepConstrained(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L50)

Return whether the current step restricts building.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.matchesFoundationMove() :id=sandkit.engine.api.tutorialBuild.matchesfoundationmove

```ts
matchesFoundationMove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L55)

Return whether a foundation move matches tutorial rules.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.matchesFoundationRemove() :id=sandkit.engine.api.tutorialBuild.matchesfoundationremove

```ts
matchesFoundationRemove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L60)

Return whether a foundation remove matches tutorial rules.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt() :id=sandkit.engine.api.tutorialBuild.shouldprotectactivetargetat

```ts
shouldProtectActiveTargetAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/tutorialBuild.d.ts#L65)

Return whether the active target should be protected at a cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.usageTracker

**`Internal`**

`sandkit.engine.api.usageTracker` — tool and structure usage statistics.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.usageTracker.clear() :id=sandkit.engine.api.usageTracker.clear

```ts
clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/usageTracker.d.ts#L15)

Clear recorded usage statistics.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.usageTracker.getLatest() :id=sandkit.engine.api.usageTracker.getlatest

```ts
getLatest(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/usageTracker.d.ts#L20)

Return the most recently used item or structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.usageTracker.getMostUsed() :id=sandkit.engine.api.usageTracker.getmostused

```ts
getMostUsed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/usageTracker.d.ts#L25)

Return the most frequently used item or structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.wall

**`Internal`**

`sandkit.engine.api.wall` — wall tile palette and cell data.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.wall.getPaletteData() :id=sandkit.engine.api.wall.getpalettedata

```ts
getPaletteData(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/wall.d.ts#L15)

Return wall palette data for rendering.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.wall.getWallDataAt() :id=sandkit.engine.api.wall.getwalldataat

```ts
getWallDataAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/wall.d.ts#L20)

Return wall tile data at one cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.wall.getWallDataSize() :id=sandkit.engine.api.wall.getwalldatasize

```ts
getWallDataSize(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/wall.d.ts#L25)

Return the byte size of wall tile data.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.wall.setWallDataAt() :id=sandkit.engine.api.wall.setwalldataat

```ts
setWallDataAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/wall.d.ts#L30)

Set wall tile data at one cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.engine.api.workerLocal

**`Internal`**

`sandkit.engine.api.workerLocal` — per-worker ephemeral key-value storage.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Available on worker threads only. Values do not persist across workers.

### Functions <!-- {docsify-ignore} -->

#### sandkit.engine.api.workerLocal.clear() :id=sandkit.engine.api.workerLocal.clear

```ts
clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/workerLocal.d.ts#L14)

Remove all keys from worker-local storage.

##### Parameters

###### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.workerLocal.get() :id=sandkit.engine.api.workerLocal.get

```ts
get(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/workerLocal.d.ts#L19)

Return a value by key, or undefined when missing.

##### Parameters

###### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.workerLocal.getOrInit() :id=sandkit.engine.api.workerLocal.getorinit

```ts
getOrInit(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/workerLocal.d.ts#L24)

Return a value by key, initializing it when missing.

##### Parameters

###### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### sandkit.engine.api.workerLocal.set() :id=sandkit.engine.api.workerLocal.set

```ts
set(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/workerLocal.d.ts#L29)

Store a value by key.

##### Parameters

###### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

##### Returns

`unknown`

---

## sandkit.enums

### Enumerations <!-- {docsify-ignore} -->

- [AbilityType](api/sandkit.enums.AbilityType.md)
- [ActionState](api/sandkit.enums.ActionState.md)
- [ActionType](api/sandkit.enums.ActionType.md)
- [AuthorizationType](api/sandkit.enums.AuthorizationType.md)
- [BuildMode](api/sandkit.enums.BuildMode.md)
- [BuildingClearance](api/sandkit.enums.BuildingClearance.md)
- [CellType](api/sandkit.enums.CellType.md)
- [ComponentId](api/sandkit.enums.ComponentId.md)
- [DroneType](api/sandkit.enums.DroneType.md)
- [ElementType](api/sandkit.enums.ElementType.md)
- [ItemId](api/sandkit.enums.ItemId.md)
- [ItemType](api/sandkit.enums.ItemType.md)
- [KeyBinding](api/sandkit.enums.KeyBinding.md)
- [KeyState](api/sandkit.enums.KeyState.md)
- [MatterType](api/sandkit.enums.MatterType.md)
- [ProjectileType](api/sandkit.enums.ProjectileType.md)
- [ReloadType](api/sandkit.enums.ReloadType.md)
- [Scene](api/sandkit.enums.Scene.md)
- [StructureType](api/sandkit.enums.StructureType.md)
- [Tech](api/sandkit.enums.Tech.md)
- [TechStatus](api/sandkit.enums.TechStatus.md)
- [WorldItemType](api/sandkit.enums.WorldItemType.md)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.enums.SandkitEnums :id=sandkit.enums.sandkitenums

```ts
SandkitEnums = object
```

Defined in: [sandkit/enums/index.d.ts:421](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L421)

Composed `sandkit.enums` object.

##### Properties

###### AbilityType

```ts
AbilityType: *typeof* AbilityType
```

Defined in: [sandkit/enums/index.d.ts:422](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L422)

###### ActionState

```ts
ActionState: *typeof* ActionState
```

Defined in: [sandkit/enums/index.d.ts:423](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L423)

###### ActionType

```ts
ActionType: *typeof* ActionType
```

Defined in: [sandkit/enums/index.d.ts:424](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L424)

###### AuthorizationType

```ts
AuthorizationType: *typeof* AuthorizationType
```

Defined in: [sandkit/enums/index.d.ts:425](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L425)

###### BuildMode

```ts
BuildMode: *typeof* BuildMode
```

Defined in: [sandkit/enums/index.d.ts:426](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L426)

###### BuildingClearance

```ts
BuildingClearance: *typeof* BuildingClearance
```

Defined in: [sandkit/enums/index.d.ts:427](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L427)

###### CellType

```ts
CellType: *typeof* CellType
```

Defined in: [sandkit/enums/index.d.ts:428](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L428)

###### ComponentId

```ts
ComponentId: *typeof* ComponentId
```

Defined in: [sandkit/enums/index.d.ts:429](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L429)

###### DroneType

```ts
DroneType: *typeof* DroneType
```

Defined in: [sandkit/enums/index.d.ts:430](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L430)

###### ElementType

```ts
ElementType: *typeof* ElementType
```

Defined in: [sandkit/enums/index.d.ts:431](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L431)

###### ItemId

```ts
ItemId: *typeof* ItemId
```

Defined in: [sandkit/enums/index.d.ts:432](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L432)

###### ItemType

```ts
ItemType: *typeof* ItemType
```

Defined in: [sandkit/enums/index.d.ts:433](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L433)

###### KeyBinding

```ts
KeyBinding: *typeof* KeyBinding
```

Defined in: [sandkit/enums/index.d.ts:434](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L434)

###### KeyState

```ts
KeyState: *typeof* KeyState
```

Defined in: [sandkit/enums/index.d.ts:435](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L435)

###### MatterType

```ts
MatterType: *typeof* MatterType
```

Defined in: [sandkit/enums/index.d.ts:436](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L436)

###### ProjectileType

```ts
ProjectileType: *typeof* ProjectileType
```

Defined in: [sandkit/enums/index.d.ts:437](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L437)

###### ReloadType

```ts
ReloadType: *typeof* ReloadType
```

Defined in: [sandkit/enums/index.d.ts:438](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L438)

###### Scene

```ts
Scene: *typeof* Scene
```

Defined in: [sandkit/enums/index.d.ts:439](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L439)

###### StructureType

```ts
StructureType: *typeof* StructureType
```

Defined in: [sandkit/enums/index.d.ts:440](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L440)

###### Tech

```ts
Tech: *typeof* Tech
```

Defined in: [sandkit/enums/index.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L441)

###### TechStatus

```ts
TechStatus: *typeof* TechStatus
```

Defined in: [sandkit/enums/index.d.ts:442](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L442)

###### WorldItemType

```ts
WorldItemType: *typeof* WorldItemType
```

Defined in: [sandkit/enums/index.d.ts:443](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L443)

---

## sandkit.enums.AbilityType

Defined in: [sandkit/enums/index.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L9)

Item ability categories (dig, shoot, spray, laser).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.AbilityType.Dig :id=sandkit.enums.AbilityType.dig

```ts
Dig: 1
```

Defined in: [sandkit/enums/index.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L10)

***

#### sandkit.enums.AbilityType.Shoot :id=sandkit.enums.AbilityType.shoot

```ts
Shoot: 2
```

Defined in: [sandkit/enums/index.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L11)

***

#### sandkit.enums.AbilityType.Spray :id=sandkit.enums.AbilityType.spray

```ts
Spray: 3
```

Defined in: [sandkit/enums/index.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L12)

***

#### sandkit.enums.AbilityType.Laser :id=sandkit.enums.AbilityType.laser

```ts
Laser: 4
```

Defined in: [sandkit/enums/index.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L13)

---

## sandkit.enums.ActionState

Defined in: [sandkit/enums/index.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L17)

Phases of a held or repeated player action.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ActionState.Start :id=sandkit.enums.ActionState.start

```ts
Start: 1
```

Defined in: [sandkit/enums/index.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L18)

***

#### sandkit.enums.ActionState.Active :id=sandkit.enums.ActionState.active

```ts
Active: 2
```

Defined in: [sandkit/enums/index.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L19)

***

#### sandkit.enums.ActionState.End :id=sandkit.enums.ActionState.end

```ts
End: 3
```

Defined in: [sandkit/enums/index.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L20)

---

## sandkit.enums.ActionType

Defined in: [sandkit/enums/index.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L24)

High-level action channel (weapon, building, tool, mod).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ActionType.Weapon :id=sandkit.enums.ActionType.weapon

```ts
Weapon: 1
```

Defined in: [sandkit/enums/index.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L25)

***

#### sandkit.enums.ActionType.Building :id=sandkit.enums.ActionType.building

```ts
Building: 2
```

Defined in: [sandkit/enums/index.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L26)

***

#### sandkit.enums.ActionType.Tool :id=sandkit.enums.ActionType.tool

```ts
Tool: 3
```

Defined in: [sandkit/enums/index.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L27)

***

#### sandkit.enums.ActionType.Mod :id=sandkit.enums.ActionType.mod

```ts
Mod: 4
```

Defined in: [sandkit/enums/index.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L28)

---

## sandkit.enums.AuthorizationType

Defined in: [sandkit/enums/index.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L32)

Zone rules that restrict player abilities.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.AuthorizationType.NoJetpack :id=sandkit.enums.AuthorizationType.nojetpack

```ts
NoJetpack: 1
```

Defined in: [sandkit/enums/index.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L33)

***

#### sandkit.enums.AuthorizationType.NoGrab :id=sandkit.enums.AuthorizationType.nograb

```ts
NoGrab: 2
```

Defined in: [sandkit/enums/index.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L34)

***

#### sandkit.enums.AuthorizationType.NoBuild :id=sandkit.enums.AuthorizationType.nobuild

```ts
NoBuild: 3
```

Defined in: [sandkit/enums/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L35)

***

#### sandkit.enums.AuthorizationType.NoTool :id=sandkit.enums.AuthorizationType.notool

```ts
NoTool: 4
```

Defined in: [sandkit/enums/index.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L36)

***

#### sandkit.enums.AuthorizationType.NoExcavation :id=sandkit.enums.AuthorizationType.noexcavation

```ts
NoExcavation: 5
```

Defined in: [sandkit/enums/index.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L37)

***

#### sandkit.enums.AuthorizationType.NoToolExceptFlamethrower :id=sandkit.enums.AuthorizationType.notoolexceptflamethrower

```ts
NoToolExceptFlamethrower: 6
```

Defined in: [sandkit/enums/index.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L38)

---

## sandkit.enums.BuildingClearance

Defined in: [sandkit/enums/index.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L48)

Result of a build placement check.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.BuildingClearance.Available :id=sandkit.enums.BuildingClearance.available

```ts
Available: 1
```

Defined in: [sandkit/enums/index.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L49)

***

#### sandkit.enums.BuildingClearance.FullyBlocked :id=sandkit.enums.BuildingClearance.fullyblocked

```ts
FullyBlocked: 2
```

Defined in: [sandkit/enums/index.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L50)

***

#### sandkit.enums.BuildingClearance.PartiallyBlocked :id=sandkit.enums.BuildingClearance.partiallyblocked

```ts
PartiallyBlocked: 3
```

Defined in: [sandkit/enums/index.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L51)

***

#### sandkit.enums.BuildingClearance.CanBeReplaced :id=sandkit.enums.BuildingClearance.canbereplaced

```ts
CanBeReplaced: 4
```

Defined in: [sandkit/enums/index.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L52)

---

## sandkit.enums.BuildMode

Defined in: [sandkit/enums/index.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L42)

Linear vs rectangular structure placement.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.BuildMode.Linear :id=sandkit.enums.BuildMode.linear

```ts
Linear: 1
```

Defined in: [sandkit/enums/index.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L43)

***

#### sandkit.enums.BuildMode.Rectangular :id=sandkit.enums.BuildMode.rectangular

```ts
Rectangular: 2
```

Defined in: [sandkit/enums/index.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L44)

---

## sandkit.enums.CellType

Defined in: [sandkit/enums/index.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L56)

Terrain / special cell kinds in the simulation grid.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.CellType.Empty :id=sandkit.enums.CellType.empty

```ts
Empty: 0
```

Defined in: [sandkit/enums/index.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L57)

***

#### sandkit.enums.CellType.Element :id=sandkit.enums.CellType.element

```ts
Element: 1
```

Defined in: [sandkit/enums/index.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L58)

***

#### sandkit.enums.CellType.Dirt :id=sandkit.enums.CellType.dirt

```ts
Dirt: 2
```

Defined in: [sandkit/enums/index.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L59)

***

#### sandkit.enums.CellType.SporeSoil :id=sandkit.enums.CellType.sporesoil

```ts
SporeSoil: 3
```

Defined in: [sandkit/enums/index.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L60)

***

#### sandkit.enums.CellType.Fog :id=sandkit.enums.CellType.fog

```ts
Fog: 4
```

Defined in: [sandkit/enums/index.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L61)

***

#### sandkit.enums.CellType.FogJetpackBlock :id=sandkit.enums.CellType.fogjetpackblock

```ts
FogJetpackBlock: 5
```

Defined in: [sandkit/enums/index.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L62)

***

#### sandkit.enums.CellType.FogWater :id=sandkit.enums.CellType.fogwater

```ts
FogWater: 6
```

Defined in: [sandkit/enums/index.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L63)

***

#### sandkit.enums.CellType.FreezingIceSoil :id=sandkit.enums.CellType.freezingicesoil

```ts
FreezingIceSoil: 7
```

Defined in: [sandkit/enums/index.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L64)

***

#### sandkit.enums.CellType.Divider :id=sandkit.enums.CellType.divider

```ts
Divider: 8
```

Defined in: [sandkit/enums/index.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L65)

***

#### sandkit.enums.CellType.Grass :id=sandkit.enums.CellType.grass

```ts
Grass: 9
```

Defined in: [sandkit/enums/index.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L66)

***

#### sandkit.enums.CellType.Moss :id=sandkit.enums.CellType.moss

```ts
Moss: 10
```

Defined in: [sandkit/enums/index.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L67)

***

#### sandkit.enums.CellType.GoldSoil :id=sandkit.enums.CellType.goldsoil

```ts
GoldSoil: 11
```

Defined in: [sandkit/enums/index.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L68)

***

#### sandkit.enums.CellType.Petal :id=sandkit.enums.CellType.petal

```ts
Petal: 12
```

Defined in: [sandkit/enums/index.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L69)

***

#### sandkit.enums.CellType.FogLava :id=sandkit.enums.CellType.foglava

```ts
FogLava: 13
```

Defined in: [sandkit/enums/index.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L70)

***

#### sandkit.enums.CellType.Fluxite :id=sandkit.enums.CellType.fluxite

```ts
Fluxite: 14
```

Defined in: [sandkit/enums/index.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L71)

***

#### sandkit.enums.CellType.Block :id=sandkit.enums.CellType.block

```ts
Block: 15
```

Defined in: [sandkit/enums/index.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L72)

***

#### sandkit.enums.CellType.SlidingBlock :id=sandkit.enums.CellType.slidingblock

```ts
SlidingBlock: 16
```

Defined in: [sandkit/enums/index.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L73)

***

#### sandkit.enums.CellType.SlidingBlockLeft :id=sandkit.enums.CellType.slidingblockleft

```ts
SlidingBlockLeft: 17
```

Defined in: [sandkit/enums/index.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L74)

***

#### sandkit.enums.CellType.SlidingBlockRight :id=sandkit.enums.CellType.slidingblockright

```ts
SlidingBlockRight: 18
```

Defined in: [sandkit/enums/index.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L75)

***

#### sandkit.enums.CellType.ConveyorLeft :id=sandkit.enums.CellType.conveyorleft

```ts
ConveyorLeft: 19
```

Defined in: [sandkit/enums/index.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L76)

***

#### sandkit.enums.CellType.ConveyorRight :id=sandkit.enums.CellType.conveyorright

```ts
ConveyorRight: 20
```

Defined in: [sandkit/enums/index.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L77)

***

#### sandkit.enums.CellType.ShakerLeft :id=sandkit.enums.CellType.shakerleft

```ts
ShakerLeft: 21
```

Defined in: [sandkit/enums/index.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L78)

***

#### sandkit.enums.CellType.ShakerRight :id=sandkit.enums.CellType.shakerright

```ts
ShakerRight: 22
```

Defined in: [sandkit/enums/index.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L79)

***

#### sandkit.enums.CellType.Stone :id=sandkit.enums.CellType.stone

```ts
Stone: 23
```

Defined in: [sandkit/enums/index.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L80)

***

#### sandkit.enums.CellType.VelocitySoaker :id=sandkit.enums.CellType.velocitysoaker

```ts
VelocitySoaker: 24
```

Defined in: [sandkit/enums/index.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L81)

***

#### sandkit.enums.CellType.Ice :id=sandkit.enums.CellType.ice

```ts
Ice: 25
```

Defined in: [sandkit/enums/index.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L82)

***

#### sandkit.enums.CellType.Grower :id=sandkit.enums.CellType.grower

```ts
Grower: 26
```

Defined in: [sandkit/enums/index.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L83)

***

#### sandkit.enums.CellType.NascentWater :id=sandkit.enums.CellType.nascentwater

```ts
NascentWater: 27
```

Defined in: [sandkit/enums/index.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L84)

***

#### sandkit.enums.CellType.SandiumSoil :id=sandkit.enums.CellType.sandiumsoil

```ts
SandiumSoil: 28
```

Defined in: [sandkit/enums/index.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L85)

***

#### sandkit.enums.CellType.Obsidian :id=sandkit.enums.CellType.obsidian

```ts
Obsidian: 29
```

Defined in: [sandkit/enums/index.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L86)

***

#### sandkit.enums.CellType.Crackstone :id=sandkit.enums.CellType.crackstone

```ts
Crackstone: 30
```

Defined in: [sandkit/enums/index.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L87)

---

## sandkit.enums.ComponentId

Defined in: [sandkit/enums/index.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L91)

UI component ids for HUD and menu routing.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ComponentId.Hotbar :id=sandkit.enums.ComponentId.hotbar

```ts
Hotbar: 1
```

Defined in: [sandkit/enums/index.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L92)

***

#### sandkit.enums.ComponentId.SoundBoxConfig :id=sandkit.enums.ComponentId.soundboxconfig

```ts
SoundBoxConfig: 2
```

Defined in: [sandkit/enums/index.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L93)

***

#### sandkit.enums.ComponentId.Root :id=sandkit.enums.ComponentId.root

```ts
Root: 4
```

Defined in: [sandkit/enums/index.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L94)

***

#### sandkit.enums.ComponentId.Menu :id=sandkit.enums.ComponentId.menu

```ts
Menu: 5
```

Defined in: [sandkit/enums/index.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L95)

***

#### sandkit.enums.ComponentId.Management :id=sandkit.enums.ComponentId.management

```ts
Management: 6
```

Defined in: [sandkit/enums/index.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L96)

***

#### sandkit.enums.ComponentId.FilterConfig :id=sandkit.enums.ComponentId.filterconfig

```ts
FilterConfig: 7
```

Defined in: [sandkit/enums/index.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L97)

***

#### sandkit.enums.ComponentId.Resources :id=sandkit.enums.ComponentId.resources

```ts
Resources: 8
```

Defined in: [sandkit/enums/index.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L98)

***

#### sandkit.enums.ComponentId.TechTree :id=sandkit.enums.ComponentId.techtree

```ts
TechTree: 9
```

Defined in: [sandkit/enums/index.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L99)

***

#### sandkit.enums.ComponentId.Tutorial :id=sandkit.enums.ComponentId.tutorial

```ts
Tutorial: 10
```

Defined in: [sandkit/enums/index.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L100)

***

#### sandkit.enums.ComponentId.Loader :id=sandkit.enums.ComponentId.loader

```ts
Loader: 11
```

Defined in: [sandkit/enums/index.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L101)

***

#### sandkit.enums.ComponentId.Options :id=sandkit.enums.ComponentId.options

```ts
Options: 12
```

Defined in: [sandkit/enums/index.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L102)

***

#### sandkit.enums.ComponentId.ShortcutHelper :id=sandkit.enums.ComponentId.shortcuthelper

```ts
ShortcutHelper: 13
```

Defined in: [sandkit/enums/index.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L103)

***

#### sandkit.enums.ComponentId.Upgrades :id=sandkit.enums.ComponentId.upgrades

```ts
Upgrades: 14
```

Defined in: [sandkit/enums/index.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L104)

***

#### sandkit.enums.ComponentId.Tooltip :id=sandkit.enums.ComponentId.tooltip

```ts
Tooltip: 15
```

Defined in: [sandkit/enums/index.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L105)

***

#### sandkit.enums.ComponentId.Notifications :id=sandkit.enums.ComponentId.notifications

```ts
Notifications: 16
```

Defined in: [sandkit/enums/index.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L106)

***

#### sandkit.enums.ComponentId.Objectives :id=sandkit.enums.ComponentId.objectives

```ts
Objectives: 17
```

Defined in: [sandkit/enums/index.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L107)

***

#### sandkit.enums.ComponentId.DroneAdminList :id=sandkit.enums.ComponentId.droneadminlist

```ts
DroneAdminList: 18
```

Defined in: [sandkit/enums/index.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L108)

***

#### sandkit.enums.ComponentId.HotbarOverlays :id=sandkit.enums.ComponentId.hotbaroverlays

```ts
HotbarOverlays: 19
```

Defined in: [sandkit/enums/index.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L109)

***

#### sandkit.enums.ComponentId.IntroScreen :id=sandkit.enums.ComponentId.introscreen

```ts
IntroScreen: 20
```

Defined in: [sandkit/enums/index.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L110)

***

#### sandkit.enums.ComponentId.StoryNotifications :id=sandkit.enums.ComponentId.storynotifications

```ts
StoryNotifications: 21
```

Defined in: [sandkit/enums/index.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L111)

***

#### sandkit.enums.ComponentId.FactoryProgress :id=sandkit.enums.ComponentId.factoryprogress

```ts
FactoryProgress: 22
```

Defined in: [sandkit/enums/index.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L112)

***

#### sandkit.enums.ComponentId.Dialogs :id=sandkit.enums.ComponentId.dialogs

```ts
Dialogs: 23
```

Defined in: [sandkit/enums/index.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L113)

***

#### sandkit.enums.ComponentId.GlobalOverlays :id=sandkit.enums.ComponentId.globaloverlays

```ts
GlobalOverlays: 24
```

Defined in: [sandkit/enums/index.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L114)

***

#### sandkit.enums.ComponentId.Lexicon :id=sandkit.enums.ComponentId.lexicon

```ts
Lexicon: 25
```

Defined in: [sandkit/enums/index.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L115)

***

#### sandkit.enums.ComponentId.ModsScreen :id=sandkit.enums.ComponentId.modsscreen

```ts
ModsScreen: 26
```

Defined in: [sandkit/enums/index.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L116)

***

#### sandkit.enums.ComponentId.CustomMapsScreen :id=sandkit.enums.ComponentId.custommapsscreen

```ts
CustomMapsScreen: 27
```

Defined in: [sandkit/enums/index.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L117)

***

#### sandkit.enums.ComponentId.CinematicPanel :id=sandkit.enums.ComponentId.cinematicpanel

```ts
CinematicPanel: 28
```

Defined in: [sandkit/enums/index.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L118)

***

#### sandkit.enums.ComponentId.Feedback :id=sandkit.enums.ComponentId.feedback

```ts
Feedback: 29
```

Defined in: [sandkit/enums/index.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L119)

---

## sandkit.enums.DroneType

Defined in: [sandkit/enums/index.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L123)

Autonomous drone kinds.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.DroneType.Digger :id=sandkit.enums.DroneType.digger

```ts
Digger: 1
```

Defined in: [sandkit/enums/index.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L124)

***

#### sandkit.enums.DroneType.Hauler :id=sandkit.enums.DroneType.hauler

```ts
Hauler: 2
```

Defined in: [sandkit/enums/index.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L125)

---

## sandkit.enums.ElementType

Defined in: [sandkit/enums/index.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L129)

Built-in element type ids (prefer API string ids when registering mods).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ElementType.Sand :id=sandkit.enums.ElementType.sand

```ts
Sand: 1
```

Defined in: [sandkit/enums/index.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L130)

***

#### sandkit.enums.ElementType.Particle :id=sandkit.enums.ElementType.particle

```ts
Particle: 2
```

Defined in: [sandkit/enums/index.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L131)

***

#### sandkit.enums.ElementType.Water :id=sandkit.enums.ElementType.water

```ts
Water: 3
```

Defined in: [sandkit/enums/index.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L132)

***

#### sandkit.enums.ElementType.WetSand :id=sandkit.enums.ElementType.wetsand

```ts
WetSand: 4
```

Defined in: [sandkit/enums/index.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L133)

***

#### sandkit.enums.ElementType.Sandium :id=sandkit.enums.ElementType.sandium

```ts
Sandium: 5
```

Defined in: [sandkit/enums/index.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L134)

***

#### sandkit.enums.ElementType.Residue :id=sandkit.enums.ElementType.residue

```ts
Residue: 6
```

Defined in: [sandkit/enums/index.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L135)

***

#### sandkit.enums.ElementType.Gold :id=sandkit.enums.ElementType.gold

```ts
Gold: 7
```

Defined in: [sandkit/enums/index.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L136)

***

#### sandkit.enums.ElementType.Gloom :id=sandkit.enums.ElementType.gloom

```ts
Gloom: 8
```

Defined in: [sandkit/enums/index.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L137)

***

#### sandkit.enums.ElementType.Shake :id=sandkit.enums.ElementType.shake

```ts
Shake: 9
```

Defined in: [sandkit/enums/index.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L138)

***

#### sandkit.enums.ElementType.Steam :id=sandkit.enums.ElementType.steam

```ts
Steam: 10
```

Defined in: [sandkit/enums/index.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L139)

***

#### sandkit.enums.ElementType.Fire :id=sandkit.enums.ElementType.fire

```ts
Fire: 11
```

Defined in: [sandkit/enums/index.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L140)

***

#### sandkit.enums.ElementType.FreezingIce :id=sandkit.enums.ElementType.freezingice

```ts
FreezingIce: 12
```

Defined in: [sandkit/enums/index.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L141)

***

#### sandkit.enums.ElementType.Flame :id=sandkit.enums.ElementType.flame

```ts
Flame: 13
```

Defined in: [sandkit/enums/index.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L142)

***

#### sandkit.enums.ElementType.BurntResidue :id=sandkit.enums.ElementType.burntresidue

```ts
BurntResidue: 14
```

Defined in: [sandkit/enums/index.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L143)

***

#### sandkit.enums.ElementType.Seed :id=sandkit.enums.ElementType.seed

```ts
Seed: 15
```

Defined in: [sandkit/enums/index.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L144)

***

#### sandkit.enums.ElementType.WetSeed :id=sandkit.enums.ElementType.wetseed

```ts
WetSeed: 16
```

Defined in: [sandkit/enums/index.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L145)

***

#### sandkit.enums.ElementType.Seedling :id=sandkit.enums.ElementType.seedling

```ts
Seedling: 17
```

Defined in: [sandkit/enums/index.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L146)

***

#### sandkit.enums.ElementType.Petalium :id=sandkit.enums.ElementType.petalium

```ts
Petalium: 18
```

Defined in: [sandkit/enums/index.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L147)

***

#### sandkit.enums.ElementType.Lava :id=sandkit.enums.ElementType.lava

```ts
Lava: 19
```

Defined in: [sandkit/enums/index.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L148)

***

#### sandkit.enums.ElementType.Basalt :id=sandkit.enums.ElementType.basalt

```ts
Basalt: 20
```

Defined in: [sandkit/enums/index.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L149)

---

## sandkit.enums.ItemId

Defined in: [sandkit/enums/index.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L153)

Built-in hotbar item ids.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ItemId.Shovel :id=sandkit.enums.ItemId.shovel

```ts
Shovel: 1
```

Defined in: [sandkit/enums/index.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L154)

***

#### sandkit.enums.ItemId.Grabber :id=sandkit.enums.ItemId.grabber

```ts
Grabber: 2
```

Defined in: [sandkit/enums/index.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L155)

***

#### sandkit.enums.ItemId.Demolisher :id=sandkit.enums.ItemId.demolisher

```ts
Demolisher: 3
```

Defined in: [sandkit/enums/index.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L156)

***

#### sandkit.enums.ItemId.GrapplingHook :id=sandkit.enums.ItemId.grapplinghook

```ts
GrapplingHook: 4
```

Defined in: [sandkit/enums/index.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L157)

***

#### sandkit.enums.ItemId.Vacuum :id=sandkit.enums.ItemId.vacuum

```ts
Vacuum: 5
```

Defined in: [sandkit/enums/index.d.ts:158](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L158)

***

#### sandkit.enums.ItemId.Gun :id=sandkit.enums.ItemId.gun

```ts
Gun: 6
```

Defined in: [sandkit/enums/index.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L159)

***

#### sandkit.enums.ItemId.Copier :id=sandkit.enums.ItemId.copier

```ts
Copier: 7
```

Defined in: [sandkit/enums/index.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L160)

***

#### sandkit.enums.ItemId.RocketLauncher :id=sandkit.enums.ItemId.rocketlauncher

```ts
RocketLauncher: 8
```

Defined in: [sandkit/enums/index.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L161)

***

#### sandkit.enums.ItemId.Digger :id=sandkit.enums.ItemId.digger

```ts
Digger: 9
```

Defined in: [sandkit/enums/index.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L162)

***

#### sandkit.enums.ItemId.Shotgun :id=sandkit.enums.ItemId.shotgun

```ts
Shotgun: 10
```

Defined in: [sandkit/enums/index.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L163)

***

#### sandkit.enums.ItemId.Teleporter :id=sandkit.enums.ItemId.teleporter

```ts
Teleporter: 11
```

Defined in: [sandkit/enums/index.d.ts:164](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L164)

***

#### sandkit.enums.ItemId.Flamethrower :id=sandkit.enums.ItemId.flamethrower

```ts
Flamethrower: 12
```

Defined in: [sandkit/enums/index.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L165)

***

#### sandkit.enums.ItemId.PipeRemover :id=sandkit.enums.ItemId.piperemover

```ts
PipeRemover: 13
```

Defined in: [sandkit/enums/index.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L166)

***

#### sandkit.enums.ItemId.Hauler :id=sandkit.enums.ItemId.hauler

```ts
Hauler: 14
```

Defined in: [sandkit/enums/index.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L167)

***

#### sandkit.enums.ItemId.Cryoblaster :id=sandkit.enums.ItemId.cryoblaster

```ts
Cryoblaster: 15
```

Defined in: [sandkit/enums/index.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L168)

***

#### sandkit.enums.ItemId.MegaShotgun :id=sandkit.enums.ItemId.megashotgun

```ts
MegaShotgun: 16
```

Defined in: [sandkit/enums/index.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L169)

---

## sandkit.enums.ItemType

Defined in: [sandkit/enums/index.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L173)

Item category (weapon, tool, consumable, mod).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ItemType.Weapon :id=sandkit.enums.ItemType.weapon

```ts
Weapon: 1
```

Defined in: [sandkit/enums/index.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L174)

***

#### sandkit.enums.ItemType.Tool :id=sandkit.enums.ItemType.tool

```ts
Tool: 2
```

Defined in: [sandkit/enums/index.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L175)

***

#### sandkit.enums.ItemType.Consumable :id=sandkit.enums.ItemType.consumable

```ts
Consumable: 3
```

Defined in: [sandkit/enums/index.d.ts:176](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L176)

***

#### sandkit.enums.ItemType.Mod :id=sandkit.enums.ItemType.mod

```ts
Mod: 4
```

Defined in: [sandkit/enums/index.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L177)

---

## sandkit.enums.KeyBinding

Defined in: [sandkit/enums/index.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L181)

Named input bindings (settings keys).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.KeyBinding.OpenBuildMenu :id=sandkit.enums.KeyBinding.openbuildmenu

```ts
OpenBuildMenu: "OpenBuildMenu"
```

Defined in: [sandkit/enums/index.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L182)

***

#### sandkit.enums.KeyBinding.GrapplingHook :id=sandkit.enums.KeyBinding.grapplinghook

```ts
GrapplingHook: "GrapplingHook"
```

Defined in: [sandkit/enums/index.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L183)

***

#### sandkit.enums.KeyBinding.Escape :id=sandkit.enums.KeyBinding.escape

```ts
Escape: "Escape"
```

Defined in: [sandkit/enums/index.d.ts:184](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L184)

***

#### sandkit.enums.KeyBinding.OpenTechTree :id=sandkit.enums.KeyBinding.opentechtree

```ts
OpenTechTree: "OpenTechTree"
```

Defined in: [sandkit/enums/index.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L185)

***

#### sandkit.enums.KeyBinding.OpenInventory :id=sandkit.enums.KeyBinding.openinventory

```ts
OpenInventory: "OpenInventory"
```

Defined in: [sandkit/enums/index.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L186)

***

#### sandkit.enums.KeyBinding.ReverseBuildDirection :id=sandkit.enums.KeyBinding.reversebuilddirection

```ts
ReverseBuildDirection: "ReverseBuildDirection"
```

Defined in: [sandkit/enums/index.d.ts:187](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L187)

***

#### sandkit.enums.KeyBinding.Marquee :id=sandkit.enums.KeyBinding.marquee

```ts
Marquee: "Marquee"
```

Defined in: [sandkit/enums/index.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L188)

***

#### sandkit.enums.KeyBinding.Pause :id=sandkit.enums.KeyBinding.pause

```ts
Pause: "Pause"
```

Defined in: [sandkit/enums/index.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L189)

***

#### sandkit.enums.KeyBinding.Copy :id=sandkit.enums.KeyBinding.copy

```ts
Copy: "Copy"
```

Defined in: [sandkit/enums/index.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L190)

***

#### sandkit.enums.KeyBinding.Paste :id=sandkit.enums.KeyBinding.paste

```ts
Paste: "Paste"
```

Defined in: [sandkit/enums/index.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L191)

***

#### sandkit.enums.KeyBinding.Flip :id=sandkit.enums.KeyBinding.flip

```ts
Flip: "Flip"
```

Defined in: [sandkit/enums/index.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L192)

***

#### sandkit.enums.KeyBinding.Delete :id=sandkit.enums.KeyBinding.delete

```ts
Delete: "Delete"
```

Defined in: [sandkit/enums/index.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L193)

***

#### sandkit.enums.KeyBinding.PauseCamera :id=sandkit.enums.KeyBinding.pausecamera

```ts
PauseCamera: "PauseCamera"
```

Defined in: [sandkit/enums/index.d.ts:194](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L194)

***

#### sandkit.enums.KeyBinding.OpenUpgrades :id=sandkit.enums.KeyBinding.openupgrades

```ts
OpenUpgrades: "OpenUpgrades"
```

Defined in: [sandkit/enums/index.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L195)

***

#### sandkit.enums.KeyBinding.BuildMode :id=sandkit.enums.KeyBinding.buildmode

```ts
BuildMode: "BuildMode"
```

Defined in: [sandkit/enums/index.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L196)

***

#### sandkit.enums.KeyBinding.Demolish :id=sandkit.enums.KeyBinding.demolish

```ts
Demolish: "Demolish"
```

Defined in: [sandkit/enums/index.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L197)

***

#### sandkit.enums.KeyBinding.Hover :id=sandkit.enums.KeyBinding.hover

```ts
Hover: "Hover"
```

Defined in: [sandkit/enums/index.d.ts:198](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L198)

***

#### sandkit.enums.KeyBinding.Ruler :id=sandkit.enums.KeyBinding.ruler

```ts
Ruler: "Ruler"
```

Defined in: [sandkit/enums/index.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L199)

***

#### sandkit.enums.KeyBinding.Left :id=sandkit.enums.KeyBinding.left

```ts
Left: "Left"
```

Defined in: [sandkit/enums/index.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L200)

***

#### sandkit.enums.KeyBinding.Right :id=sandkit.enums.KeyBinding.right

```ts
Right: "Right"
```

Defined in: [sandkit/enums/index.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L201)

***

#### sandkit.enums.KeyBinding.Boost :id=sandkit.enums.KeyBinding.boost

```ts
Boost: "Boost"
```

Defined in: [sandkit/enums/index.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L202)

***

#### sandkit.enums.KeyBinding.Descend :id=sandkit.enums.KeyBinding.descend

```ts
Descend: "Descend"
```

Defined in: [sandkit/enums/index.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L203)

***

#### sandkit.enums.KeyBinding.SprintBoost :id=sandkit.enums.KeyBinding.sprintboost

```ts
SprintBoost: "SprintBoost"
```

Defined in: [sandkit/enums/index.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L204)

***

#### sandkit.enums.KeyBinding.OverrideReplaceStructures :id=sandkit.enums.KeyBinding.overridereplacestructures

```ts
OverrideReplaceStructures: "OverrideReplaceStructures"
```

Defined in: [sandkit/enums/index.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L205)

***

#### sandkit.enums.KeyBinding.QuickSave :id=sandkit.enums.KeyBinding.quicksave

```ts
QuickSave: "QuickSave"
```

Defined in: [sandkit/enums/index.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L206)

***

#### sandkit.enums.KeyBinding.QuickLoad :id=sandkit.enums.KeyBinding.quickload

```ts
QuickLoad: "QuickLoad"
```

Defined in: [sandkit/enums/index.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L207)

***

#### sandkit.enums.KeyBinding.ToggleGameHud :id=sandkit.enums.KeyBinding.togglegamehud

```ts
ToggleGameHud: "ToggleGameHud"
```

Defined in: [sandkit/enums/index.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L208)

---

## sandkit.enums.KeyState

Defined in: [sandkit/enums/index.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L212)

Key transition state for input polling.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.KeyState.Up :id=sandkit.enums.KeyState.up

```ts
Up: 1
```

Defined in: [sandkit/enums/index.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L213)

***

#### sandkit.enums.KeyState.Down :id=sandkit.enums.KeyState.down

```ts
Down: 2
```

Defined in: [sandkit/enums/index.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L214)

***

#### sandkit.enums.KeyState.Pressed :id=sandkit.enums.KeyState.pressed

```ts
Pressed: 3
```

Defined in: [sandkit/enums/index.d.ts:215](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L215)

***

#### sandkit.enums.KeyState.Released :id=sandkit.enums.KeyState.released

```ts
Released: 4
```

Defined in: [sandkit/enums/index.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L216)

***

#### sandkit.enums.KeyState.All :id=sandkit.enums.KeyState.all

```ts
All: 5
```

Defined in: [sandkit/enums/index.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L217)

---

## sandkit.enums.MatterType

Defined in: [sandkit/enums/index.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L221)

Physical behaviour category for elements (mirrors shared API enum).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.MatterType.Solid :id=sandkit.enums.MatterType.solid

```ts
Solid: 1
```

Defined in: [sandkit/enums/index.d.ts:222](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L222)

***

#### sandkit.enums.MatterType.Liquid :id=sandkit.enums.MatterType.liquid

```ts
Liquid: 2
```

Defined in: [sandkit/enums/index.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L223)

***

#### sandkit.enums.MatterType.Particle :id=sandkit.enums.MatterType.particle

```ts
Particle: 3
```

Defined in: [sandkit/enums/index.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L224)

***

#### sandkit.enums.MatterType.Gas :id=sandkit.enums.MatterType.gas

```ts
Gas: 4
```

Defined in: [sandkit/enums/index.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L225)

***

#### sandkit.enums.MatterType.Static :id=sandkit.enums.MatterType.static

```ts
Static: 5
```

Defined in: [sandkit/enums/index.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L226)

***

#### sandkit.enums.MatterType.Slushy :id=sandkit.enums.MatterType.slushy

```ts
Slushy: 6
```

Defined in: [sandkit/enums/index.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L227)

***

#### sandkit.enums.MatterType.Wisp :id=sandkit.enums.MatterType.wisp

```ts
Wisp: 7
```

Defined in: [sandkit/enums/index.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L228)

***

#### sandkit.enums.MatterType.Powder :id=sandkit.enums.MatterType.powder

```ts
Powder: 8
```

Defined in: [sandkit/enums/index.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L229)

---

## sandkit.enums.ProjectileType

Defined in: [sandkit/enums/index.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L233)

Projectile kinds spawned by weapons and tools.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ProjectileType.Bullet :id=sandkit.enums.ProjectileType.bullet

```ts
Bullet: 1
```

Defined in: [sandkit/enums/index.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L234)

***

#### sandkit.enums.ProjectileType.Rocket :id=sandkit.enums.ProjectileType.rocket

```ts
Rocket: 2
```

Defined in: [sandkit/enums/index.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L235)

***

#### sandkit.enums.ProjectileType.GrapplingHook :id=sandkit.enums.ProjectileType.grapplinghook

```ts
GrapplingHook: 3
```

Defined in: [sandkit/enums/index.d.ts:236](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L236)

***

#### sandkit.enums.ProjectileType.Fire :id=sandkit.enums.ProjectileType.fire

```ts
Fire: 4
```

Defined in: [sandkit/enums/index.d.ts:237](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L237)

***

#### sandkit.enums.ProjectileType.Digger :id=sandkit.enums.ProjectileType.digger

```ts
Digger: 5
```

Defined in: [sandkit/enums/index.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L238)

***

#### sandkit.enums.ProjectileType.Mod :id=sandkit.enums.ProjectileType.mod

```ts
Mod: 6
```

Defined in: [sandkit/enums/index.d.ts:239](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L239)

---

## sandkit.enums.ReloadType

Defined in: [sandkit/enums/index.d.ts:243](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L243)

Weapon reload behaviour.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.ReloadType.Clip :id=sandkit.enums.ReloadType.clip

```ts
Clip: 1
```

Defined in: [sandkit/enums/index.d.ts:244](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L244)

***

#### sandkit.enums.ReloadType.Single :id=sandkit.enums.ReloadType.single

```ts
Single: 2
```

Defined in: [sandkit/enums/index.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L245)

***

#### sandkit.enums.ReloadType.OverTime :id=sandkit.enums.ReloadType.overtime

```ts
OverTime: 3
```

Defined in: [sandkit/enums/index.d.ts:246](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L246)

---

## sandkit.enums.Scene

Defined in: [sandkit/enums/index.d.ts:250](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L250)

Top-level game scene (menu, intro, deploy, in-game).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.Scene.MainMenu :id=sandkit.enums.Scene.mainmenu

```ts
MainMenu: 1
```

Defined in: [sandkit/enums/index.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L251)

***

#### sandkit.enums.Scene.Intro :id=sandkit.enums.Scene.intro

```ts
Intro: 2
```

Defined in: [sandkit/enums/index.d.ts:252](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L252)

***

#### sandkit.enums.Scene.Deploy :id=sandkit.enums.Scene.deploy

```ts
Deploy: 3
```

Defined in: [sandkit/enums/index.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L253)

***

#### sandkit.enums.Scene.Game :id=sandkit.enums.Scene.game

```ts
Game: 4
```

Defined in: [sandkit/enums/index.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L254)

---

## sandkit.enums.StructureType

Defined in: [sandkit/enums/index.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L258)

Built-in structure type ids.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.StructureType.ConveyorLeft :id=sandkit.enums.StructureType.conveyorleft

```ts
ConveyorLeft: 1
```

Defined in: [sandkit/enums/index.d.ts:259](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L259)

***

#### sandkit.enums.StructureType.ConveyorRight :id=sandkit.enums.StructureType.conveyorright

```ts
ConveyorRight: 2
```

Defined in: [sandkit/enums/index.d.ts:260](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L260)

***

#### sandkit.enums.StructureType.ShakerLeft :id=sandkit.enums.StructureType.shakerleft

```ts
ShakerLeft: 3
```

Defined in: [sandkit/enums/index.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L261)

***

#### sandkit.enums.StructureType.ShakerRight :id=sandkit.enums.StructureType.shakerright

```ts
ShakerRight: 4
```

Defined in: [sandkit/enums/index.d.ts:262](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L262)

***

#### sandkit.enums.StructureType.LauncherUp :id=sandkit.enums.StructureType.launcherup

```ts
LauncherUp: 5
```

Defined in: [sandkit/enums/index.d.ts:263](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L263)

***

#### sandkit.enums.StructureType.LauncherLeft :id=sandkit.enums.StructureType.launcherleft

```ts
LauncherLeft: 6
```

Defined in: [sandkit/enums/index.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L264)

***

#### sandkit.enums.StructureType.LauncherRight :id=sandkit.enums.StructureType.launcherright

```ts
LauncherRight: 7
```

Defined in: [sandkit/enums/index.d.ts:265](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L265)

***

#### sandkit.enums.StructureType.SplitterLeft :id=sandkit.enums.StructureType.splitterleft

```ts
SplitterLeft: 8
```

Defined in: [sandkit/enums/index.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L266)

***

#### sandkit.enums.StructureType.SplitterRight :id=sandkit.enums.StructureType.splitterright

```ts
SplitterRight: 9
```

Defined in: [sandkit/enums/index.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L267)

***

#### sandkit.enums.StructureType.Dropper :id=sandkit.enums.StructureType.dropper

```ts
Dropper: 10
```

Defined in: [sandkit/enums/index.d.ts:268](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L268)

***

#### sandkit.enums.StructureType.Foundation :id=sandkit.enums.StructureType.foundation

```ts
Foundation: 11
```

Defined in: [sandkit/enums/index.d.ts:269](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L269)

***

#### sandkit.enums.StructureType.FoundationAngledLeft :id=sandkit.enums.StructureType.foundationangledleft

```ts
FoundationAngledLeft: 12
```

Defined in: [sandkit/enums/index.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L270)

***

#### sandkit.enums.StructureType.FoundationTriangleLeftDel :id=sandkit.enums.StructureType.foundationtriangleleftdel

```ts
FoundationTriangleLeftDel: 13
```

Defined in: [sandkit/enums/index.d.ts:271](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L271)

***

#### sandkit.enums.StructureType.FoundationAngledRight :id=sandkit.enums.StructureType.foundationangledright

```ts
FoundationAngledRight: 14
```

Defined in: [sandkit/enums/index.d.ts:272](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L272)

***

#### sandkit.enums.StructureType.FoundationTriangleRightDel :id=sandkit.enums.StructureType.foundationtrianglerightdel

```ts
FoundationTriangleRightDel: 15
```

Defined in: [sandkit/enums/index.d.ts:273](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L273)

***

#### sandkit.enums.StructureType.Collector :id=sandkit.enums.StructureType.collector

```ts
Collector: 16
```

Defined in: [sandkit/enums/index.d.ts:274](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L274)

***

#### sandkit.enums.StructureType.FilterLeft :id=sandkit.enums.StructureType.filterleft

```ts
FilterLeft: 17
```

Defined in: [sandkit/enums/index.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L275)

***

#### sandkit.enums.StructureType.FilterRight :id=sandkit.enums.StructureType.filterright

```ts
FilterRight: 18
```

Defined in: [sandkit/enums/index.d.ts:276](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L276)

***

#### sandkit.enums.StructureType.SlidingFoundation :id=sandkit.enums.StructureType.slidingfoundation

```ts
SlidingFoundation: 19
```

Defined in: [sandkit/enums/index.d.ts:277](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L277)

***

#### sandkit.enums.StructureType.VelocitySoaker :id=sandkit.enums.StructureType.velocitysoaker

```ts
VelocitySoaker: 20
```

Defined in: [sandkit/enums/index.d.ts:278](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L278)

***

#### sandkit.enums.StructureType.Grower :id=sandkit.enums.StructureType.grower

```ts
Grower: 21
```

Defined in: [sandkit/enums/index.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L279)

***

#### sandkit.enums.StructureType.SoundBox :id=sandkit.enums.StructureType.soundbox

```ts
SoundBox: 22
```

Defined in: [sandkit/enums/index.d.ts:280](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L280)

***

#### sandkit.enums.StructureType.Pipe :id=sandkit.enums.StructureType.pipe

```ts
Pipe: 23
```

Defined in: [sandkit/enums/index.d.ts:281](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L281)

***

#### sandkit.enums.StructureType.Pump :id=sandkit.enums.StructureType.pump

```ts
Pump: 24
```

Defined in: [sandkit/enums/index.d.ts:282](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L282)

***

#### sandkit.enums.StructureType.LiquidVent :id=sandkit.enums.StructureType.liquidvent

```ts
LiquidVent: 25
```

Defined in: [sandkit/enums/index.d.ts:283](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L283)

***

#### sandkit.enums.StructureType.Light :id=sandkit.enums.StructureType.light

```ts
Light: 26
```

Defined in: [sandkit/enums/index.d.ts:284](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L284)

***

#### sandkit.enums.StructureType.FluxEmanator :id=sandkit.enums.StructureType.fluxemanator

```ts
FluxEmanator: 27
```

Defined in: [sandkit/enums/index.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L285)

---

## sandkit.enums.Tech

Defined in: [sandkit/enums/index.d.ts:289](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L289)

Tech tree node ids (mixed numeric and string keys).

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.Tech.Shaker :id=sandkit.enums.Tech.shaker

```ts
Shaker: 1
```

Defined in: [sandkit/enums/index.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L290)

***

#### sandkit.enums.Tech.Conveyors :id=sandkit.enums.Tech.conveyors

```ts
Conveyors: 2
```

Defined in: [sandkit/enums/index.d.ts:291](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L291)

***

#### sandkit.enums.Tech.Guns1 :id=sandkit.enums.Tech.guns1

```ts
Guns1: 3
```

Defined in: [sandkit/enums/index.d.ts:292](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L292)

***

#### sandkit.enums.Tech.Filters1 :id=sandkit.enums.Tech.filters1

```ts
Filters1: 4
```

Defined in: [sandkit/enums/index.d.ts:293](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L293)

***

#### sandkit.enums.Tech.Flamethrower :id=sandkit.enums.Tech.flamethrower

```ts
Flamethrower: 5
```

Defined in: [sandkit/enums/index.d.ts:294](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L294)

***

#### sandkit.enums.Tech.Gun :id=sandkit.enums.Tech.gun

```ts
Gun: 6
```

Defined in: [sandkit/enums/index.d.ts:295](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L295)

***

#### sandkit.enums.Tech.KineticPress :id=sandkit.enums.Tech.kineticpress

```ts
KineticPress: 7
```

Defined in: [sandkit/enums/index.d.ts:296](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L296)

***

#### sandkit.enums.Tech.Guns2 :id=sandkit.enums.Tech.guns2

```ts
Guns2: 8
```

Defined in: [sandkit/enums/index.d.ts:297](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L297)

***

#### sandkit.enums.Tech.Drones1 :id=sandkit.enums.Tech.drones1

```ts
Drones1: 9
```

Defined in: [sandkit/enums/index.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L298)

***

#### sandkit.enums.Tech.Upgrading2 :id=sandkit.enums.Tech.upgrading2

```ts
Upgrading2: 10
```

Defined in: [sandkit/enums/index.d.ts:299](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L299)

***

#### sandkit.enums.Tech.Filters2 :id=sandkit.enums.Tech.filters2

```ts
Filters2: 11
```

Defined in: [sandkit/enums/index.d.ts:300](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L300)

***

#### sandkit.enums.Tech.Upgrading3 :id=sandkit.enums.Tech.upgrading3

```ts
Upgrading3: 12
```

Defined in: [sandkit/enums/index.d.ts:301](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L301)

***

#### sandkit.enums.Tech.Upgrading4 :id=sandkit.enums.Tech.upgrading4

```ts
Upgrading4: 13
```

Defined in: [sandkit/enums/index.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L302)

***

#### sandkit.enums.Tech.Upgrading5 :id=sandkit.enums.Tech.upgrading5

```ts
Upgrading5: 14
```

Defined in: [sandkit/enums/index.d.ts:303](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L303)

***

#### sandkit.enums.Tech.Upgrading6 :id=sandkit.enums.Tech.upgrading6

```ts
Upgrading6: 15
```

Defined in: [sandkit/enums/index.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L304)

***

#### sandkit.enums.Tech.Upgrading7 :id=sandkit.enums.Tech.upgrading7

```ts
Upgrading7: 16
```

Defined in: [sandkit/enums/index.d.ts:305](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L305)

***

#### sandkit.enums.Tech.Upgrading8 :id=sandkit.enums.Tech.upgrading8

```ts
Upgrading8: 17
```

Defined in: [sandkit/enums/index.d.ts:306](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L306)

***

#### sandkit.enums.Tech.Upgrading9 :id=sandkit.enums.Tech.upgrading9

```ts
Upgrading9: 18
```

Defined in: [sandkit/enums/index.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L307)

***

#### sandkit.enums.Tech.Upgrading10 :id=sandkit.enums.Tech.upgrading10

```ts
Upgrading10: 19
```

Defined in: [sandkit/enums/index.d.ts:308](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L308)

***

#### sandkit.enums.Tech.PlanterBox :id=sandkit.enums.Tech.planterbox

```ts
PlanterBox: 20
```

Defined in: [sandkit/enums/index.d.ts:309](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L309)

***

#### sandkit.enums.Tech.Thermo :id=sandkit.enums.Tech.thermo

```ts
Thermo: 21
```

Defined in: [sandkit/enums/index.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L310)

***

#### sandkit.enums.Tech.Rocket :id=sandkit.enums.Tech.rocket

```ts
Rocket: 22
```

Defined in: [sandkit/enums/index.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L311)

***

#### sandkit.enums.Tech.Pipes :id=sandkit.enums.Tech.pipes

```ts
Pipes: 23
```

Defined in: [sandkit/enums/index.d.ts:312](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L312)

***

#### sandkit.enums.Tech.StaticLights :id=sandkit.enums.Tech.staticlights

```ts
StaticLights: 24
```

Defined in: [sandkit/enums/index.d.ts:313](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L313)

***

#### sandkit.enums.Tech.Drones2 :id=sandkit.enums.Tech.drones2

```ts
Drones2: 25
```

Defined in: [sandkit/enums/index.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L314)

***

#### sandkit.enums.Tech.Smelter :id=sandkit.enums.Tech.smelter

```ts
Smelter: 26
```

Defined in: [sandkit/enums/index.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L315)

***

#### sandkit.enums.Tech.Tools4 :id=sandkit.enums.Tech.tools4

```ts
Tools4: 27
```

Defined in: [sandkit/enums/index.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L316)

***

#### sandkit.enums.Tech.Guns3 :id=sandkit.enums.Tech.guns3

```ts
Guns3: 28
```

Defined in: [sandkit/enums/index.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L317)

***

#### sandkit.enums.Tech.Pipes2 :id=sandkit.enums.Tech.pipes2

```ts
Pipes2: 29
```

Defined in: [sandkit/enums/index.d.ts:318](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L318)

***

#### sandkit.enums.Tech.ConveyorsMk2 :id=sandkit.enums.Tech.conveyorsmk2

```ts
ConveyorsMk2: 30
```

Defined in: [sandkit/enums/index.d.ts:319](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L319)

***

#### sandkit.enums.Tech.Lights2 :id=sandkit.enums.Tech.lights2

```ts
Lights2: 31
```

Defined in: [sandkit/enums/index.d.ts:320](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L320)

***

#### sandkit.enums.Tech.Refining6 :id=sandkit.enums.Tech.refining6

```ts
Refining6: 32
```

Defined in: [sandkit/enums/index.d.ts:321](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L321)

***

#### sandkit.enums.Tech.Refining7 :id=sandkit.enums.Tech.refining7

```ts
Refining7: 33
```

Defined in: [sandkit/enums/index.d.ts:322](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L322)

***

#### sandkit.enums.Tech.Guns4 :id=sandkit.enums.Tech.guns4

```ts
Guns4: 34
```

Defined in: [sandkit/enums/index.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L323)

***

#### sandkit.enums.Tech.Guns5 :id=sandkit.enums.Tech.guns5

```ts
Guns5: 35
```

Defined in: [sandkit/enums/index.d.ts:324](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L324)

***

#### sandkit.enums.Tech.Tools5 :id=sandkit.enums.Tech.tools5

```ts
Tools5: 36
```

Defined in: [sandkit/enums/index.d.ts:325](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L325)

***

#### sandkit.enums.Tech.Tools6 :id=sandkit.enums.Tech.tools6

```ts
Tools6: 37
```

Defined in: [sandkit/enums/index.d.ts:326](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L326)

***

#### sandkit.enums.Tech.Filters3 :id=sandkit.enums.Tech.filters3

```ts
Filters3: 38
```

Defined in: [sandkit/enums/index.d.ts:327](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L327)

***

#### sandkit.enums.Tech.Filters4 :id=sandkit.enums.Tech.filters4

```ts
Filters4: 39
```

Defined in: [sandkit/enums/index.d.ts:328](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L328)

***

#### sandkit.enums.Tech.Pipes3 :id=sandkit.enums.Tech.pipes3

```ts
Pipes3: 40
```

Defined in: [sandkit/enums/index.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L329)

***

#### sandkit.enums.Tech.Pipes4 :id=sandkit.enums.Tech.pipes4

```ts
Pipes4: 41
```

Defined in: [sandkit/enums/index.d.ts:330](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L330)

***

#### sandkit.enums.Tech.Logistics3 :id=sandkit.enums.Tech.logistics3

```ts
Logistics3: 42
```

Defined in: [sandkit/enums/index.d.ts:331](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L331)

***

#### sandkit.enums.Tech.Logistics4 :id=sandkit.enums.Tech.logistics4

```ts
Logistics4: 43
```

Defined in: [sandkit/enums/index.d.ts:332](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L332)

***

#### sandkit.enums.Tech.Lights3 :id=sandkit.enums.Tech.lights3

```ts
Lights3: 44
```

Defined in: [sandkit/enums/index.d.ts:333](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L333)

***

#### sandkit.enums.Tech.Lights4 :id=sandkit.enums.Tech.lights4

```ts
Lights4: 45
```

Defined in: [sandkit/enums/index.d.ts:334](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L334)

***

#### sandkit.enums.Tech.Drones3 :id=sandkit.enums.Tech.drones3

```ts
Drones3: 46
```

Defined in: [sandkit/enums/index.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L335)

***

#### sandkit.enums.Tech.Drones4 :id=sandkit.enums.Tech.drones4

```ts
Drones4: 47
```

Defined in: [sandkit/enums/index.d.ts:336](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L336)

***

#### sandkit.enums.Tech.Alien :id=sandkit.enums.Tech.alien

```ts
Alien: 48
```

Defined in: [sandkit/enums/index.d.ts:337](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L337)

***

#### sandkit.enums.Tech.Electricity :id=sandkit.enums.Tech.electricity

```ts
Electricity: 49
```

Defined in: [sandkit/enums/index.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L338)

***

#### sandkit.enums.Tech.AlienCore :id=sandkit.enums.Tech.aliencore

```ts
AlienCore: 50
```

Defined in: [sandkit/enums/index.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L339)

***

#### sandkit.enums.Tech.Emanators1 :id=sandkit.enums.Tech.emanators1

```ts
Emanators1: 51
```

Defined in: [sandkit/enums/index.d.ts:340](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L340)

***

#### sandkit.enums.Tech.AlienPlasmaConduits :id=sandkit.enums.Tech.alienplasmaconduits

```ts
AlienPlasmaConduits: 52
```

Defined in: [sandkit/enums/index.d.ts:341](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L341)

***

#### sandkit.enums.Tech.AlienQuantumMatrix :id=sandkit.enums.Tech.alienquantummatrix

```ts
AlienQuantumMatrix: 53
```

Defined in: [sandkit/enums/index.d.ts:342](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L342)

***

#### sandkit.enums.Tech.AlienPlasmaCore :id=sandkit.enums.Tech.alienplasmacore

```ts
AlienPlasmaCore: 54
```

Defined in: [sandkit/enums/index.d.ts:343](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L343)

***

#### sandkit.enums.Tech.AlienVoidEngine :id=sandkit.enums.Tech.alienvoidengine

```ts
AlienVoidEngine: 55
```

Defined in: [sandkit/enums/index.d.ts:344](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L344)

***

#### sandkit.enums.Tech.FlareGun :id=sandkit.enums.Tech.flaregun

```ts
FlareGun: 56
```

Defined in: [sandkit/enums/index.d.ts:345](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L345)

***

#### sandkit.enums.Tech.Sweeper :id=sandkit.enums.Tech.sweeper

```ts
Sweeper: 57
```

Defined in: [sandkit/enums/index.d.ts:346](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L346)

***

#### sandkit.enums.Tech.Utilities3 :id=sandkit.enums.Tech.utilities3

```ts
Utilities3: 58
```

Defined in: [sandkit/enums/index.d.ts:347](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L347)

***

#### sandkit.enums.Tech.Cryoblaster :id=sandkit.enums.Tech.cryoblaster

```ts
Cryoblaster: 59
```

Defined in: [sandkit/enums/index.d.ts:348](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L348)

***

#### sandkit.enums.Tech.Vacuum :id=sandkit.enums.Tech.vacuum

```ts
Vacuum: 60
```

Defined in: [sandkit/enums/index.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L349)

***

#### sandkit.enums.Tech.Utilities6 :id=sandkit.enums.Tech.utilities6

```ts
Utilities6: 61
```

Defined in: [sandkit/enums/index.d.ts:350](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L350)

***

#### sandkit.enums.Tech.Utilities7 :id=sandkit.enums.Tech.utilities7

```ts
Utilities7: 62
```

Defined in: [sandkit/enums/index.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L351)

***

#### sandkit.enums.Tech.Filters :id=sandkit.enums.Tech.filters

```ts
Filters: 63
```

Defined in: [sandkit/enums/index.d.ts:352](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L352)

***

#### sandkit.enums.Tech.AdvancedFilters :id=sandkit.enums.Tech.advancedfilters

```ts
AdvancedFilters: 64
```

Defined in: [sandkit/enums/index.d.ts:353](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L353)

***

#### sandkit.enums.Tech.Infrastructure3 :id=sandkit.enums.Tech.infrastructure3

```ts
Infrastructure3: 65
```

Defined in: [sandkit/enums/index.d.ts:354](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L354)

***

#### sandkit.enums.Tech.Decorations1 :id=sandkit.enums.Tech.decorations1

```ts
Decorations1: 66
```

Defined in: [sandkit/enums/index.d.ts:355](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L355)

***

#### sandkit.enums.Tech.Decorations2 :id=sandkit.enums.Tech.decorations2

```ts
Decorations2: 67
```

Defined in: [sandkit/enums/index.d.ts:356](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L356)

***

#### sandkit.enums.Tech.Decorations3 :id=sandkit.enums.Tech.decorations3

```ts
Decorations3: 68
```

Defined in: [sandkit/enums/index.d.ts:357](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L357)

***

#### sandkit.enums.Tech.Blocks1 :id=sandkit.enums.Tech.blocks1

```ts
Blocks1: 69
```

Defined in: [sandkit/enums/index.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L358)

***

#### sandkit.enums.Tech.Drill :id=sandkit.enums.Tech.drill

```ts
Drill: 70
```

Defined in: [sandkit/enums/index.d.ts:359](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L359)

***

#### sandkit.enums.Tech.SteamTurbine :id=sandkit.enums.Tech.steamturbine

```ts
SteamTurbine: 71
```

Defined in: [sandkit/enums/index.d.ts:360](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L360)

***

#### sandkit.enums.Tech.Electricity3 :id=sandkit.enums.Tech.electricity3

```ts
Electricity3: 72
```

Defined in: [sandkit/enums/index.d.ts:361](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L361)

***

#### sandkit.enums.Tech.Electricity4 :id=sandkit.enums.Tech.electricity4

```ts
Electricity4: 73
```

Defined in: [sandkit/enums/index.d.ts:362](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L362)

***

#### sandkit.enums.Tech.Logic1 :id=sandkit.enums.Tech.logic1

```ts
Logic1: 74
```

Defined in: [sandkit/enums/index.d.ts:363](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L363)

***

#### sandkit.enums.Tech.Logic2 :id=sandkit.enums.Tech.logic2

```ts
Logic2: 75
```

Defined in: [sandkit/enums/index.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L364)

***

#### sandkit.enums.Tech.Logic3 :id=sandkit.enums.Tech.logic3

```ts
Logic3: 76
```

Defined in: [sandkit/enums/index.d.ts:365](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L365)

***

#### sandkit.enums.Tech.Logic4 :id=sandkit.enums.Tech.logic4

```ts
Logic4: 77
```

Defined in: [sandkit/enums/index.d.ts:366](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L366)

***

#### sandkit.enums.Tech.Various1 :id=sandkit.enums.Tech.various1

```ts
Various1: 78
```

Defined in: [sandkit/enums/index.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L367)

***

#### sandkit.enums.Tech.Various2 :id=sandkit.enums.Tech.various2

```ts
Various2: 79
```

Defined in: [sandkit/enums/index.d.ts:368](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L368)

***

#### sandkit.enums.Tech.Various3 :id=sandkit.enums.Tech.various3

```ts
Various3: 80
```

Defined in: [sandkit/enums/index.d.ts:369](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L369)

***

#### sandkit.enums.Tech.Locator :id=sandkit.enums.Tech.locator

```ts
Locator: 81
```

Defined in: [sandkit/enums/index.d.ts:370](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L370)

***

#### sandkit.enums.Tech.QuantumPortal :id=sandkit.enums.Tech.quantumportal

```ts
QuantumPortal: 82
```

Defined in: [sandkit/enums/index.d.ts:371](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L371)

***

#### sandkit.enums.Tech.VoidRift :id=sandkit.enums.Tech.voidrift

```ts
VoidRift: 83
```

Defined in: [sandkit/enums/index.d.ts:372](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L372)

***

#### sandkit.enums.Tech.Blink :id=sandkit.enums.Tech.blink

```ts
Blink: 84
```

Defined in: [sandkit/enums/index.d.ts:373](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L373)

***

#### sandkit.enums.Tech.Recall :id=sandkit.enums.Tech.recall

```ts
Recall: 85
```

Defined in: [sandkit/enums/index.d.ts:374](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L374)

***

#### sandkit.enums.Tech.ImplosionGun :id=sandkit.enums.Tech.implosiongun

```ts
ImplosionGun: 86
```

Defined in: [sandkit/enums/index.d.ts:375](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L375)

***

#### sandkit.enums.Tech.Refining8 :id=sandkit.enums.Tech.refining8

```ts
Refining8: 87
```

Defined in: [sandkit/enums/index.d.ts:376](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L376)

***

#### sandkit.enums.Tech.Tools7 :id=sandkit.enums.Tech.tools7

```ts
Tools7: 88
```

Defined in: [sandkit/enums/index.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L377)

***

#### sandkit.enums.Tech.Diggers :id=sandkit.enums.Tech.diggers

```ts
Diggers: 89
```

Defined in: [sandkit/enums/index.d.ts:378](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L378)

***

#### sandkit.enums.Tech.Haulers :id=sandkit.enums.Tech.haulers

```ts
Haulers: 90
```

Defined in: [sandkit/enums/index.d.ts:379](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L379)

***

#### sandkit.enums.Tech.Map :id=sandkit.enums.Tech.map

```ts
Map: 91
```

Defined in: [sandkit/enums/index.d.ts:380](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L380)

***

#### sandkit.enums.Tech.ColoringTool :id=sandkit.enums.Tech.coloringtool

```ts
ColoringTool: 92
```

Defined in: [sandkit/enums/index.d.ts:381](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L381)

***

#### sandkit.enums.Tech.SignalGate :id=sandkit.enums.Tech.signalgate

```ts
SignalGate: 93
```

Defined in: [sandkit/enums/index.d.ts:382](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L382)

***

#### sandkit.enums.Tech.GrapplingHook :id=sandkit.enums.Tech.grapplinghook

```ts
GrapplingHook: 94
```

Defined in: [sandkit/enums/index.d.ts:383](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L383)

***

#### sandkit.enums.Tech.GlassFoundation :id=sandkit.enums.Tech.glassfoundation

```ts
GlassFoundation: 95
```

Defined in: [sandkit/enums/index.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L384)

***

#### sandkit.enums.Tech.PrecisionTools :id=sandkit.enums.Tech.precisiontools

```ts
PrecisionTools: 96
```

Defined in: [sandkit/enums/index.d.ts:385](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L385)

***

#### sandkit.enums.Tech.SignalDevices :id=sandkit.enums.Tech.signaldevices

```ts
SignalDevices: 97
```

Defined in: [sandkit/enums/index.d.ts:386](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L386)

***

#### sandkit.enums.Tech.SignalControls :id=sandkit.enums.Tech.signalcontrols

```ts
SignalControls: 98
```

Defined in: [sandkit/enums/index.d.ts:387](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L387)

***

#### sandkit.enums.Tech.LogicGates :id=sandkit.enums.Tech.logicgates

```ts
LogicGates: 99
```

Defined in: [sandkit/enums/index.d.ts:388](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L388)

***

#### sandkit.enums.Tech.RetroConsole :id=sandkit.enums.Tech.retroconsole

```ts
RetroConsole: 100
```

Defined in: [sandkit/enums/index.d.ts:389](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L389)

***

#### sandkit.enums.Tech.WallTool :id=sandkit.enums.Tech.walltool

```ts
WallTool: 101
```

Defined in: [sandkit/enums/index.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L390)

***

#### sandkit.enums.Tech.Corraller :id=sandkit.enums.Tech.corraller

```ts
Corraller: 102
```

Defined in: [sandkit/enums/index.d.ts:391](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L391)

***

#### sandkit.enums.Tech.PlainFoundation :id=sandkit.enums.Tech.plainfoundation

```ts
PlainFoundation: 103
```

Defined in: [sandkit/enums/index.d.ts:392](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L392)

***

#### sandkit.enums.Tech.ClearingFrame :id=sandkit.enums.Tech.clearingframe

```ts
ClearingFrame: 104
```

Defined in: [sandkit/enums/index.d.ts:393](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L393)

***

#### sandkit.enums.Tech.Heatmap :id=sandkit.enums.Tech.heatmap

```ts
Heatmap: 105
```

Defined in: [sandkit/enums/index.d.ts:394](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L394)

***

#### sandkit.enums.Tech.MiningLaser :id=sandkit.enums.Tech.mininglaser

```ts
MiningLaser: 106
```

Defined in: [sandkit/enums/index.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L395)

***

#### sandkit.enums.Tech.GoldBattery :id=sandkit.enums.Tech.goldbattery

```ts
GoldBattery: 107
```

Defined in: [sandkit/enums/index.d.ts:396](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L396)

***

#### sandkit.enums.Tech.Hover :id=sandkit.enums.Tech.hover

```ts
Hover: 108
```

Defined in: [sandkit/enums/index.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L397)

***

#### sandkit.enums.Tech.SprintBoost :id=sandkit.enums.Tech.sprintboost

```ts
SprintBoost: 109
```

Defined in: [sandkit/enums/index.d.ts:398](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L398)

***

#### sandkit.enums.Tech.CritterFence :id=sandkit.enums.Tech.critterfence

```ts
CritterFence: 110
```

Defined in: [sandkit/enums/index.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L399)

***

#### sandkit.enums.Tech.FluxEmanator :id=sandkit.enums.Tech.fluxemanator

```ts
FluxEmanator: "fluxEmanator"
```

Defined in: [sandkit/enums/index.d.ts:400](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L400)

---

## sandkit.enums.TechStatus

Defined in: [sandkit/enums/index.d.ts:404](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L404)

Visibility and research state of a tech node.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.TechStatus.Available :id=sandkit.enums.TechStatus.available

```ts
Available: 0
```

Defined in: [sandkit/enums/index.d.ts:405](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L405)

***

#### sandkit.enums.TechStatus.Visible :id=sandkit.enums.TechStatus.visible

```ts
Visible: 1
```

Defined in: [sandkit/enums/index.d.ts:406](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L406)

***

#### sandkit.enums.TechStatus.Researched :id=sandkit.enums.TechStatus.researched

```ts
Researched: 2
```

Defined in: [sandkit/enums/index.d.ts:407](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L407)

***

#### sandkit.enums.TechStatus.Unknown :id=sandkit.enums.TechStatus.unknown

```ts
Unknown: 3
```

Defined in: [sandkit/enums/index.d.ts:408](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L408)

***

#### sandkit.enums.TechStatus.Hidden :id=sandkit.enums.TechStatus.hidden

```ts
Hidden: 4
```

Defined in: [sandkit/enums/index.d.ts:409](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L409)

---

## sandkit.enums.WorldItemType

Defined in: [sandkit/enums/index.d.ts:413](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L413)

Pickups and interactable world items.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.enums.WorldItemType.Artifact :id=sandkit.enums.WorldItemType.artifact

```ts
Artifact: 1
```

Defined in: [sandkit/enums/index.d.ts:414](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L414)

***

#### sandkit.enums.WorldItemType.GlyphKey :id=sandkit.enums.WorldItemType.glyphkey

```ts
GlyphKey: 2
```

Defined in: [sandkit/enums/index.d.ts:415](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L415)

***

#### sandkit.enums.WorldItemType.Stratacore :id=sandkit.enums.WorldItemType.stratacore

```ts
Stratacore: 3
```

Defined in: [sandkit/enums/index.d.ts:416](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L416)

***

#### sandkit.enums.WorldItemType.Orb :id=sandkit.enums.WorldItemType.orb

```ts
Orb: 4
```

Defined in: [sandkit/enums/index.d.ts:417](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/enums/index.d.ts#L417)

---

## sandkit.react

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.react.SandkitReact :id=sandkit.react.sandkitreact

```ts
SandkitReact = object
```

Defined in: [sandkit/react.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L8)

Host React runtime at `sandkit.react`.

Kept intentionally shallow so TypeDoc does not ingest `@types/react` / DOM.
Mods should import `react` through the template JSX runtime, not this bag
directly, unless you need to reach the host copy at runtime.

##### Indexable

```ts
[key: string]: unknown
```

Additional host exports not listed here.

##### Properties

###### Fragment?

```ts
optional Fragment?: unknown
```

Defined in: [sandkit/react.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L36)

Fragment symbol (host copy).

###### Component?

```ts
optional Component?: unknown
```

Defined in: [sandkit/react.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L38)

Base class component (host copy).

###### PureComponent?

```ts
optional PureComponent?: unknown
```

Defined in: [sandkit/react.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L40)

Pure class component (host copy).

###### StrictMode?

```ts
optional StrictMode?: unknown
```

Defined in: [sandkit/react.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L42)

Strict mode wrapper (host copy).

###### Suspense?

```ts
optional Suspense?: unknown
```

Defined in: [sandkit/react.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L44)

Suspense boundary (host copy).

###### version?

```ts
optional version?: string
```

Defined in: [sandkit/react.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L46)

React version string from the host bundle.

##### Methods

###### createElement()?

```ts
optional createElement(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L10)

Create a React element (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### createContext()?

```ts
optional createContext(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L12)

Create a React context (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### createRef()?

```ts
optional createRef(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L14)

Create a ref object (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### forwardRef()?

```ts
optional forwardRef(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L16)

Wrap a component to forward refs (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### memo()?

```ts
optional memo(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L18)

Memoize a component (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### lazy()?

```ts
optional lazy(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L20)

Lazy-load a component (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### useState()?

```ts
optional useState(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L22)

State hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### useEffect()?

```ts
optional useEffect(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L24)

Effect hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### useLayoutEffect()?

```ts
optional useLayoutEffect(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L26)

Layout effect hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### useMemo()?

```ts
optional useMemo(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L28)

Memo hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### useCallback()?

```ts
optional useCallback(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L30)

Callback hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### useRef()?

```ts
optional useRef(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L32)

Ref hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

###### useContext()?

```ts
optional useContext(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/react.d.ts#L34)

Context hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

---

## shared.asset

### Interfaces <!-- {docsify-ignore} -->

#### shared.asset.AssetRef :id=shared.asset.assetref

Defined in: [shared/asset.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/asset.d.ts#L9)

Reference to a loaded sprite or texture asset.

##### Properties

###### id

```ts
id: number
```

Defined in: [shared/asset.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/asset.d.ts#L11)

Runtime asset id.

###### type

```ts
type: number
```

Defined in: [shared/asset.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/asset.d.ts#L13)

Asset category discriminator used by the renderer.

---

## shared.engine

### Type Aliases <!-- {docsify-ignore} -->

#### shared.engine.EngineFn :id=shared.engine.enginefn

```ts
EngineFn = (...args: unknown[]) => unknown
```

Defined in: [shared/engine.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/engine.d.ts#L11)

**`Internal`**

Stub for an unresolved engine method.

##### Parameters

###### args

...`unknown`[]

##### Returns

`unknown`

***

#### shared.engine.EngineOverlapNs :id=shared.engine.engineoverlapns

```ts
EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>
```

Defined in: [shared/engine.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/engine.d.ts#L17)

**`Internal`**

Loose bag for namespaces that overlap `sandkit.api` (different names / state-first).

---

## shared.jsonvalue

### Interfaces <!-- {docsify-ignore} -->

#### shared.jsonvalue.JsonObjectV1 :id=shared.jsonvalue.jsonobjectv1

Defined in: [shared/jsonvalue.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/jsonvalue.d.ts#L15)

JSON object with string keys and [JsonValueV1](#jsonvaluev1) values.

Use for open-ended config bags and serialized mod data.

##### Indexable

```ts
[key: string]: JsonValueV1
```

### Type Aliases <!-- {docsify-ignore} -->

#### shared.jsonvalue.JsonValueV1 :id=shared.jsonvalue.jsonvaluev1

```ts
JsonValueV1 = string | number | boolean | JsonObjectV1 | JsonValueV1[] | null
```

Defined in: [shared/jsonvalue.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/jsonvalue.d.ts#L24)

JSON value: primitive, object, array, or null.

Does not include `undefined` — omit keys instead.

---

## shared.player

### Interfaces <!-- {docsify-ignore} -->

#### shared.player.Player :id=shared.player.player

Defined in: [shared/player.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L34)

Live player state snapshot (read-only shape for mods).

Reflects `sandkit.engine.state` / store player fields exposed to mods.

##### Properties

###### x

```ts
x: number
```

Defined in: [shared/player.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L36)

Player hitbox left edge in world pixels.

###### y

```ts
y: number
```

Defined in: [shared/player.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L38)

Player hitbox top edge in world pixels.

###### width

```ts
width: number
```

Defined in: [shared/player.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L40)

Player hitbox width in world pixels.

###### height

```ts
height: number
```

Defined in: [shared/player.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L42)

Player hitbox height in world pixels.

###### velocity

```ts
velocity: Vector2
```

Defined in: [shared/player.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L44)

Current movement velocity in pixels per second.

###### threshold

```ts
threshold: Vector2
```

Defined in: [shared/player.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L46)

Movement threshold accumulator used by physics.

###### onGround

```ts
onGround: boolean
```

Defined in: [shared/player.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L51)

Spawn flag. Live physics does not update this field.
Use `sandkit.api.player.isOnGround()` (solid cells 1px below the hitbox).

###### speedCapOverdrive

```ts
speedCapOverdrive: object
```

Defined in: [shared/player.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L53)

Temporary speed-cap bonuses applied on each axis.

###### x

```ts
x: object
```

###### x.dir

```ts
dir: null
```

###### x.active

```ts
active: boolean
```

###### x.bonus

```ts
bonus: number
```

###### x.releaseTime

```ts
releaseTime: number
```

###### x.releaseBonus

```ts
releaseBonus: number
```

###### y

```ts
y: object
```

###### y.dir

```ts
dir: null
```

###### y.active

```ts
active: boolean
```

###### y.bonus

```ts
bonus: number
```

###### y.releaseTime

```ts
releaseTime: number
```

###### y.releaseBonus

```ts
releaseBonus: number
```

###### inventory

```ts
inventory: InventoryItem[]
```

Defined in: [shared/player.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L70)

Items currently held in the player inventory.

###### buildings

```ts
buildings: number[]
```

Defined in: [shared/player.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L72)

Structure type ids the player has unlocked for building.

###### tech

```ts
tech: object
```

Defined in: [shared/player.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L74)

Tech tree nodes and their unlock metadata.

###### Index Signature

\[`key`: `string` \| `number`\]: `object`

###### lockedTechs

```ts
lockedTechs: object
```

Defined in: [shared/player.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L104)

Tech ids explicitly locked for this save.

###### Index Signature

\[`key`: `string`\]: `boolean`

###### action

```ts
action: null
```

Defined in: [shared/player.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L106)

Active world action, or null when idle.

###### hotbar

```ts
hotbar: object
```

Defined in: [shared/player.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L108)

Hotbar slots, active indices, and item sprites.

###### activeSlotIndex

```ts
activeSlotIndex: number
```

###### hotbarIndex

```ts
hotbarIndex: number
```

###### bars

```ts
bars: AssetRef[][]
```

###### grapplingHook

```ts
grapplingHook: boolean
```

Defined in: [shared/player.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L114)

True when the grappling hook is equipped or active.

###### cooldowns

```ts
cooldowns: object
```

Defined in: [shared/player.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L116)

Cooldown timestamps for movement particles and slowdown.

###### boostParticle

```ts
boostParticle: object
```

###### boostParticle.time

```ts
time: number
```

###### boostParticle.last

```ts
last: number
```

###### hoverParticle

```ts
hoverParticle: object
```

###### hoverParticle.time

```ts
time: number
```

###### hoverParticle.last

```ts
last: number
```

###### slowdown

```ts
slowdown: object
```

###### slowdown.last

```ts
last: number
```

###### isHovering

```ts
isHovering: boolean
```

Defined in: [shared/player.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L130)

True when hover movement mode is active.

###### weaponsMeta

```ts
weaponsMeta: object
```

Defined in: [shared/player.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L132)

Per-weapon runtime metadata.

###### rocketLauncher

```ts
rocketLauncher: object
```

###### rocketLauncher.ammo

```ts
ammo: object
```

###### rocketLauncher.ammo.current

```ts
current: number
```

###### rocketLauncher.ammo.reload

```ts
reload: object
```

###### rocketLauncher.ammo.reload.last

```ts
last: number
```

###### rocketLauncher.ammo.reloading

```ts
reloading: boolean
```

***

#### shared.player.InventoryItem :id=shared.player.inventoryitem

Defined in: [shared/player.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L146)

One hotbar or inventory item entry.

##### Properties

###### id

```ts
id: number
```

Defined in: [shared/player.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L147)

###### itemType

```ts
itemType: number
```

Defined in: [shared/player.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L148)

###### abilities

```ts
abilities: object[]
```

Defined in: [shared/player.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L149)

###### type

```ts
type: number
```

###### levelRequirement?

```ts
optional levelRequirement?: number
```

###### attributes

```ts
attributes: object
```

###### Index Signature

\[`key`: `string`\]: `object`

###### cooldown

```ts
cooldown: object
```

###### cooldown.time

```ts
time: number
```

###### cooldown.last

```ts
last: number
```

###### nameKey

```ts
nameKey: string
```

Defined in: [shared/player.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L169)

###### descriptionKey

```ts
descriptionKey: string
```

Defined in: [shared/player.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L170)

###### categoryKey

```ts
categoryKey: "excavation" | "utility" | "drones"
```

Defined in: [shared/player.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L171)

###### sprite?

```ts
optional sprite?: AssetRef
```

Defined in: [shared/player.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L172)

### Type Aliases <!-- {docsify-ignore} -->

#### shared.player.CellCoordinates :id=shared.player.cellcoordinates

```ts
CellCoordinates = [number, number]
```

Defined in: [shared/player.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L14)

Grid cell position as `[cellX, cellY]`.

Cell coordinates match `sandkit.api.*AtCell` helpers: column first, then row.

***

#### shared.player.Vector2 :id=shared.player.vector2

```ts
Vector2 = object
```

Defined in: [shared/player.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L22)

2D vector in world or cell space.

World positions use pixels. Cell helpers may return pixel or cell units
depending on the API.

##### Properties

###### x

```ts
x: number
```

Defined in: [shared/player.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L24)

Horizontal component.

###### y

```ts
y: number
```

Defined in: [shared/player.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/player.d.ts#L26)

Vertical component.

---

## sandkit.api.building.StructureType

Defined in: [sandkit/api/building.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L10)

Built-in structure type ids used during placement.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.api.building.StructureType.ConveyorLeft :id=sandkit.api.building.StructureType.conveyorleft

```ts
ConveyorLeft: 1
```

Defined in: [sandkit/api/building.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L12)

Left-facing conveyor belt.

***

#### sandkit.api.building.StructureType.ConveyorRight :id=sandkit.api.building.StructureType.conveyorright

```ts
ConveyorRight: 2
```

Defined in: [sandkit/api/building.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L14)

Right-facing conveyor belt.

***

#### sandkit.api.building.StructureType.ShakerLeft :id=sandkit.api.building.StructureType.shakerleft

```ts
ShakerLeft: 3
```

Defined in: [sandkit/api/building.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L16)

Left-facing shaker.

***

#### sandkit.api.building.StructureType.ShakerRight :id=sandkit.api.building.StructureType.shakerright

```ts
ShakerRight: 4
```

Defined in: [sandkit/api/building.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L18)

Right-facing shaker.

***

#### sandkit.api.building.StructureType.LauncherUp :id=sandkit.api.building.StructureType.launcherup

```ts
LauncherUp: 5
```

Defined in: [sandkit/api/building.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L20)

Up-facing launcher.

***

#### sandkit.api.building.StructureType.LauncherLeft :id=sandkit.api.building.StructureType.launcherleft

```ts
LauncherLeft: 6
```

Defined in: [sandkit/api/building.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L22)

Left-facing launcher.

***

#### sandkit.api.building.StructureType.LauncherRight :id=sandkit.api.building.StructureType.launcherright

```ts
LauncherRight: 7
```

Defined in: [sandkit/api/building.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L24)

Right-facing launcher.

***

#### sandkit.api.building.StructureType.SplitterLeft :id=sandkit.api.building.StructureType.splitterleft

```ts
SplitterLeft: 8
```

Defined in: [sandkit/api/building.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L26)

Left-facing splitter.

***

#### sandkit.api.building.StructureType.SplitterRight :id=sandkit.api.building.StructureType.splitterright

```ts
SplitterRight: 9
```

Defined in: [sandkit/api/building.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L28)

Right-facing splitter.

***

#### sandkit.api.building.StructureType.Dropper :id=sandkit.api.building.StructureType.dropper

```ts
Dropper: 10
```

Defined in: [sandkit/api/building.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L30)

Dropper structure.

***

#### sandkit.api.building.StructureType.Foundation :id=sandkit.api.building.StructureType.foundation

```ts
Foundation: 11
```

Defined in: [sandkit/api/building.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L32)

Foundation block.

***

#### sandkit.api.building.StructureType.FoundationAngledLeft :id=sandkit.api.building.StructureType.foundationangledleft

```ts
FoundationAngledLeft: 12
```

Defined in: [sandkit/api/building.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L34)

Angled foundation facing left.

***

#### sandkit.api.building.StructureType.FoundationTriangleLeftDel :id=sandkit.api.building.StructureType.foundationtriangleleftdel

```ts
FoundationTriangleLeftDel: 13
```

Defined in: [sandkit/api/building.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L36)

Left triangle foundation (deprecated id).

***

#### sandkit.api.building.StructureType.FoundationAngledRight :id=sandkit.api.building.StructureType.foundationangledright

```ts
FoundationAngledRight: 14
```

Defined in: [sandkit/api/building.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L38)

Angled foundation facing right.

***

#### sandkit.api.building.StructureType.FoundationTriangleRightDel :id=sandkit.api.building.StructureType.foundationtrianglerightdel

```ts
FoundationTriangleRightDel: 15
```

Defined in: [sandkit/api/building.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L40)

Right triangle foundation (deprecated id).

***

#### sandkit.api.building.StructureType.Collector :id=sandkit.api.building.StructureType.collector

```ts
Collector: 16
```

Defined in: [sandkit/api/building.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L42)

Collector structure.

***

#### sandkit.api.building.StructureType.FilterLeft :id=sandkit.api.building.StructureType.filterleft

```ts
FilterLeft: 17
```

Defined in: [sandkit/api/building.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L44)

Left-facing filter.

***

#### sandkit.api.building.StructureType.FilterRight :id=sandkit.api.building.StructureType.filterright

```ts
FilterRight: 18
```

Defined in: [sandkit/api/building.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L46)

Right-facing filter.

***

#### sandkit.api.building.StructureType.SlidingFoundation :id=sandkit.api.building.StructureType.slidingfoundation

```ts
SlidingFoundation: 19
```

Defined in: [sandkit/api/building.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L48)

Sliding foundation block.

***

#### sandkit.api.building.StructureType.VelocitySoaker :id=sandkit.api.building.StructureType.velocitysoaker

```ts
VelocitySoaker: 20
```

Defined in: [sandkit/api/building.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L50)

Velocity soaker structure.

***

#### sandkit.api.building.StructureType.Grower :id=sandkit.api.building.StructureType.grower

```ts
Grower: 21
```

Defined in: [sandkit/api/building.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L52)

Grower structure.

***

#### sandkit.api.building.StructureType.SoundBox :id=sandkit.api.building.StructureType.soundbox

```ts
SoundBox: 22
```

Defined in: [sandkit/api/building.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L54)

Sound box structure.

***

#### sandkit.api.building.StructureType.Pipe :id=sandkit.api.building.StructureType.pipe

```ts
Pipe: 23
```

Defined in: [sandkit/api/building.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L56)

Pipe segment.

***

#### sandkit.api.building.StructureType.Pump :id=sandkit.api.building.StructureType.pump

```ts
Pump: 24
```

Defined in: [sandkit/api/building.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L58)

Pump structure.

***

#### sandkit.api.building.StructureType.LiquidVent :id=sandkit.api.building.StructureType.liquidvent

```ts
LiquidVent: 25
```

Defined in: [sandkit/api/building.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L60)

Liquid vent structure.

***

#### sandkit.api.building.StructureType.Light :id=sandkit.api.building.StructureType.light

```ts
Light: 26
```

Defined in: [sandkit/api/building.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L62)

Light structure.

***

#### sandkit.api.building.StructureType.GloomEmitter :id=sandkit.api.building.StructureType.gloomemitter

```ts
GloomEmitter: 27
```

Defined in: [sandkit/api/building.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/building.d.ts#L64)

Gloom emitter structure.

---

## sandkit.api.elements.MatterType

Defined in: [shared/api/elements.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L26)

Physical behaviour category for an element.

### Enumeration Members <!-- {docsify-ignore} -->

#### sandkit.api.elements.MatterType.Solid :id=sandkit.api.elements.MatterType.solid

```ts
Solid: 1
```

Defined in: [shared/api/elements.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L27)

***

#### sandkit.api.elements.MatterType.Liquid :id=sandkit.api.elements.MatterType.liquid

```ts
Liquid: 2
```

Defined in: [shared/api/elements.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L28)

***

#### sandkit.api.elements.MatterType.Particle :id=sandkit.api.elements.MatterType.particle

```ts
Particle: 3
```

Defined in: [shared/api/elements.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L29)

***

#### sandkit.api.elements.MatterType.Gas :id=sandkit.api.elements.MatterType.gas

```ts
Gas: 4
```

Defined in: [shared/api/elements.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L30)

***

#### sandkit.api.elements.MatterType.Static :id=sandkit.api.elements.MatterType.static

```ts
Static: 5
```

Defined in: [shared/api/elements.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L31)

***

#### sandkit.api.elements.MatterType.Slushy :id=sandkit.api.elements.MatterType.slushy

```ts
Slushy: 6
```

Defined in: [shared/api/elements.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L32)

***

#### sandkit.api.elements.MatterType.Wisp :id=sandkit.api.elements.MatterType.wisp

```ts
Wisp: 7
```

Defined in: [shared/api/elements.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L33)

***

#### sandkit.api.elements.MatterType.Powder :id=sandkit.api.elements.MatterType.powder

```ts
Powder: 8
```

Defined in: [shared/api/elements.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L34)

---

## sandkit.api

Main-thread `sandkit.api` barrel.

Re-exports all namespaces available as `sandkit.api.*` on the main thread.
Prefer these methods over [sandkit.engine](api/sandkit.md#engine-1) when both exist.

### Namespaces <!-- {docsify-ignore} -->

- [action](api/sandkit.api.action.md)
- [assets](api/sandkit.api.assets.md)
- [authorization](api/sandkit.api.authorization.md)
- [building](api/sandkit.api.building.md)
- [camera](api/sandkit.api.camera.md)
- [collector](api/sandkit.api.collector.md)
- [constants](api/sandkit.api.constants.md)
- [cooldown](api/sandkit.api.cooldown.md)
- [discoveries](api/sandkit.api.discoveries.md)
- [effects](api/sandkit.api.effects.md)
- [elements](api/sandkit.api.elements.md)
- [energy](api/sandkit.api.energy.md)
- [events](api/sandkit.api.events.md)
- [excavation](api/sandkit.api.excavation.md)
- [fire](api/sandkit.api.fire.md)
- [gameConfig](api/sandkit.api.gameConfig.md)
- [grid](api/sandkit.api.grid.md)
- [hooks](api/sandkit.api.hooks.md)
- [i18n](api/sandkit.api.i18n.md)
- [input](api/sandkit.api.input.md)
- [items](api/sandkit.api.items.md)
- [lights](api/sandkit.api.lights.md)
- [maps](api/sandkit.api.maps.md)
- [mods](api/sandkit.api.mods.md)
- [patterns](api/sandkit.api.patterns.md)
- [player](api/sandkit.api.player.md)
- [processing](api/sandkit.api.processing.md)
- [progression](api/sandkit.api.progression.md)
- [projectiles](api/sandkit.api.projectiles.md)
- [random](api/sandkit.api.random.md)
- [raycast](api/sandkit.api.raycast.md)
- [reactions](api/sandkit.api.reactions.md)
- [rendering](api/sandkit.api.rendering.md)
- [resources](api/sandkit.api.resources.md)
- [scene](api/sandkit.api.scene.md)
- [schedule](api/sandkit.api.schedule.md)
- [settings](api/sandkit.api.settings.md)
- [shared](api/sandkit.api.shared.md)
- [signals](api/sandkit.api.signals.md)
- [sound](api/sandkit.api.sound.md)
- [sprites](api/sandkit.api.sprites.md)
- [storage](api/sandkit.api.storage.md)
- [structureBehaviors](api/sandkit.api.structureBehaviors.md)
- [structures](api/sandkit.api.structures.md)
- [tech](api/sandkit.api.tech.md)
- [terrains](api/sandkit.api.terrains.md)
- [time](api/sandkit.api.time.md)
- [tools](api/sandkit.api.tools.md)
- [triggers](api/sandkit.api.triggers.md)
- [ui](api/sandkit.api.ui.md)
- [upgrades](api/sandkit.api.upgrades.md)
- [utils](api/sandkit.api.utils.md)
- [workers](api/sandkit.api.workers.md)
- [world](api/sandkit.api.world.md)

### References <!-- {docsify-ignore} -->

#### sandkit.api.SandkitApi :id=sandkit.api.sandkitapi

Re-exports [SandkitApi](api/sandkit.md#sandkitapi)

---

## sandkit.api (worker)

Worker-thread `sandkit.api` namespaces.

Prefer these declarations in `worker.js`. Type `sandkit.api` as
[WorkerSandkitApi](#workersandkitapi). Do not assume main-thread methods exist here.
See [sandkit.api](api/sandkit.md#api-1) for the main-thread public API.

### Namespaces <!-- {docsify-ignore} -->

- [maps](api/sandkit.api.maps.worker.md)
- [player](api/sandkit.api.player.worker.md)
- [structures](api/sandkit.api.structures.worker.md)
- [terrains](api/sandkit.api.terrains.worker.md)
- [ui](api/sandkit.api.ui.worker.md)
- [world](api/sandkit.api.world.worker.md)
- [elements](api/sandkit.api.elements.worker.md)
- [main](api/sandkit.api.main.worker.md)
- [shared](api/sandkit.api.shared.worker.md)
- [worker](api/sandkit.api.worker.worker.md)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api.WorkerSandkitApi (worker) :id=sandkit.api.worker.workersandkitapi

```ts
WorkerSandkitApi = object
```

Defined in: [worker/sandkit-api.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L14)

Composed worker-thread `sandkit.api` object.

Namespace members are documented under [worker](api/sandkit.api.worker.worker.md). Use this type in
`worker.js` / `worker.ts`:

```ts
const api = sandkit.api as unknown as WorkerSandkitApi;
```

Main and worker surfaces overlap but are not interchangeable. Do not use
[sandkit.SandkitApi](api/sandkit.md#sandkitapi) on worker threads.

##### Properties

###### collector

```ts
collector: collector
```

Defined in: [worker/sandkit-api.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L15)

###### elements

```ts
elements: elements
```

Defined in: [worker/sandkit-api.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L16)

###### fire

```ts
fire: fire
```

Defined in: [worker/sandkit-api.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L17)

###### hooks

```ts
hooks: hooks
```

Defined in: [worker/sandkit-api.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L18)

###### main

```ts
main: main
```

Defined in: [worker/sandkit-api.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L19)

###### maps

```ts
maps: maps
```

Defined in: [worker/sandkit-api.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L20)

###### patterns

```ts
patterns: patterns
```

Defined in: [worker/sandkit-api.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L21)

###### player

```ts
player: player
```

Defined in: [worker/sandkit-api.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L22)

###### random

```ts
random: random
```

Defined in: [worker/sandkit-api.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L23)

###### shared

```ts
shared: shared
```

Defined in: [worker/sandkit-api.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L24)

###### structures

```ts
structures: structures
```

Defined in: [worker/sandkit-api.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L25)

###### terrains

```ts
terrains: terrains
```

Defined in: [worker/sandkit-api.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L26)

###### ui

```ts
ui: ui
```

Defined in: [worker/sandkit-api.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L27)

###### utils

```ts
utils: utils
```

Defined in: [worker/sandkit-api.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L28)

###### worker

```ts
worker: worker
```

Defined in: [worker/sandkit-api.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L29)

###### world

```ts
world: world
```

Defined in: [worker/sandkit-api.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/worker/sandkit-api.d.ts#L30)

### References <!-- {docsify-ignore} -->

#### sandkit.api.collector (worker) :id=sandkit.api.worker.collector

Re-exports [collector](api/sandkit.api.collector.md)

***

#### sandkit.api.fire (worker) :id=sandkit.api.worker.fire

Re-exports [fire](api/sandkit.api.fire.md)

***

#### sandkit.api.hooks (worker) :id=sandkit.api.worker.hooks

Re-exports [hooks](api/sandkit.api.hooks.md)

***

#### sandkit.api.patterns (worker) :id=sandkit.api.worker.patterns

Re-exports [patterns](api/sandkit.api.patterns.md)

***

#### sandkit.api.random (worker) :id=sandkit.api.worker.random

Re-exports [random](api/sandkit.api.random.md)

***

#### sandkit.api.utils (worker) :id=sandkit.api.worker.utils

Re-exports [utils](api/sandkit.api.utils.md)

---

## sandkit.engine

**`Internal`**

`sandkit.engine` — state-first engine APIs and Retro Console.

Runtime paths: `sandkit.engine.api.<name>` and `sandkit.engine.state`
(same object as `sandkit.state`). Available on both the main thread
(`main.js`) and worker thread (`worker.js`). The public `sandkit.api`
surface still differs by runtime.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
These declarations are best-effort stubs. There is no guarantee they are
complete or correct.

### Namespaces <!-- {docsify-ignore} -->

- [augments](api/sandkit.engine.api.augments.md)
- [auralite](api/sandkit.engine.api.auralite.md)
- [blueprints](api/sandkit.engine.api.blueprints.md)
- [clipboard](api/sandkit.engine.api.clipboard.md)
- [colorPicker](api/sandkit.engine.api.colorPicker.md)
- [coloringTool](api/sandkit.engine.api.coloringTool.md)
- [conveyors](api/sandkit.engine.api.conveyors.md)
- [debug](api/sandkit.engine.api.debug.md)
- [drones](api/sandkit.engine.api.drones.md)
- [entities](api/sandkit.engine.api.entities.md)
- [extensions](api/sandkit.engine.api.extensions.md)
- [factory](api/sandkit.engine.api.factory.md)
- [foliage](api/sandkit.engine.api.foliage.md)
- [foundationColorPicker](api/sandkit.engine.api.foundationColorPicker.md)
- [game](api/sandkit.engine.api.game.md)
- [heatTransfer](api/sandkit.engine.api.heatTransfer.md)
- [launchers](api/sandkit.engine.api.launchers.md)
- [lightColorPicker](api/sandkit.engine.api.lightColorPicker.md)
- [matters](api/sandkit.engine.api.matters.md)
- [misc](api/sandkit.engine.api.misc.md)
- [portals](api/sandkit.engine.api.portals.md)
- [prefabData](api/sandkit.engine.api.prefabData.md)
- [prefabDecor](api/sandkit.engine.api.prefabDecor.md)
- [prefabulator](api/sandkit.engine.api.prefabulator.md)
- [prismaline](api/sandkit.engine.api.prismaline.md)
- [prismite](api/sandkit.engine.api.prismite.md)
- [queue](api/sandkit.engine.api.queue.md)
- [shadows](api/sandkit.engine.api.shadows.md)
- [strataform](api/sandkit.engine.api.strataform.md)
- [swarmConsole](api/sandkit.engine.api.swarmConsole.md)
- [sweeperDrone](api/sandkit.engine.api.sweeperDrone.md)
- [teleportZones](api/sandkit.engine.api.teleportZones.md)
- [tutorialBuild](api/sandkit.engine.api.tutorialBuild.md)
- [usageTracker](api/sandkit.engine.api.usageTracker.md)
- [wall](api/sandkit.engine.api.wall.md)
- [workerLocal](api/sandkit.engine.api.workerLocal.md)

### Interfaces <!-- {docsify-ignore} -->

#### sandkit.engine.SandkitEngine :id=sandkit.engine.sandkitengine

Defined in: [sandkit/engine/index.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L132)

**`Internal`**

Host `sandkit.engine` object (main and worker).

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
At runtime `sandkit.engine.state === sandkit.state`.

##### Properties

###### api

```ts
api: SandkitEngineApi
```

Defined in: [sandkit/engine/index.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L133)

###### state

```ts
state: SandkitState
```

Defined in: [sandkit/engine/index.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L134)

***

#### sandkit.engine.RetroConsoleDisplay :id=sandkit.engine.retroconsoledisplay

Defined in: [sandkit/engine/retro-console.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L14)

**`Internal`**

Low-resolution display buffer for a Retro Console game.

##### Properties

###### width

```ts
width: number
```

Defined in: [sandkit/engine/retro-console.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L15)

###### height

```ts
height: number
```

Defined in: [sandkit/engine/retro-console.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L16)

##### Methods

###### clearScreen()

```ts
clearScreen(value?: RetroConsolePixel): void
```

Defined in: [sandkit/engine/retro-console.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L18)

Clear the framebuffer. Optional fill value defaults to off.

###### Parameters

###### value?

[`RetroConsolePixel`](#retroconsolepixel)

###### Returns

`void`

###### drawPixel()

```ts
drawPixel(x: number, y: number, value: RetroConsolePixel): void
```

Defined in: [sandkit/engine/retro-console.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L20)

Set one pixel in the framebuffer.

###### Parameters

###### x

`number`

###### y

`number`

###### value

[`RetroConsolePixel`](#retroconsolepixel)

###### Returns

`void`

***

#### sandkit.engine.RetroConsoleInput :id=sandkit.engine.retroconsoleinput

Defined in: [sandkit/engine/retro-console.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L24)

**`Internal`**

Directional input from the Retro Console controls.

##### Properties

###### x

```ts
x: number
```

Defined in: [sandkit/engine/retro-console.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L25)

###### y

```ts
y: number
```

Defined in: [sandkit/engine/retro-console.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L26)

***

#### sandkit.engine.RetroConsoleGameOptions :id=sandkit.engine.retroconsolegameoptions

Defined in: [sandkit/engine/retro-console.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L30)

**`Internal`**

Display size options for a registered Retro Console game.

##### Properties

###### width

```ts
width: number
```

Defined in: [sandkit/engine/retro-console.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L31)

###### height

```ts
height: number
```

Defined in: [sandkit/engine/retro-console.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L32)

***

#### sandkit.engine.RetroConsoleGame :id=sandkit.engine.retroconsolegame

Defined in: [sandkit/engine/retro-console.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L36)

**`Internal`**

Retro Console game definition passed to [RetroConsoleApi.registerGame](#registergame).

##### Type Parameters

###### TState

`TState` = `unknown`

##### Properties

###### id

```ts
id: string
```

Defined in: [sandkit/engine/retro-console.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L37)

###### name

```ts
name: string
```

Defined in: [sandkit/engine/retro-console.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L38)

###### options?

```ts
optional options?: RetroConsoleGameOptions
```

Defined in: [sandkit/engine/retro-console.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L39)

##### Methods

###### init()

```ts
init(display: RetroConsoleDisplay): TState
```

Defined in: [sandkit/engine/retro-console.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L41)

Create initial game state and draw the first frame.

###### Parameters

###### display

[`RetroConsoleDisplay`](#retroconsoledisplay)

###### Returns

`TState`

###### update()

```ts
update(display: RetroConsoleDisplay, state: TState): TState
```

Defined in: [sandkit/engine/retro-console.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L43)

Advance one frame and return updated game state.

###### Parameters

###### display

[`RetroConsoleDisplay`](#retroconsoledisplay)

###### state

`TState`

###### Returns

`TState`

###### handleInput()?

```ts
optional handleInput(display: RetroConsoleDisplay, state: TState, input: RetroConsoleInput): TState
```

Defined in: [sandkit/engine/retro-console.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L45)

Handle player input when provided.

###### Parameters

###### display

[`RetroConsoleDisplay`](#retroconsoledisplay)

###### state

`TState`

###### input

[`RetroConsoleInput`](#retroconsoleinput)

###### Returns

`TState`

***

#### sandkit.engine.RetroConsoleApi :id=sandkit.engine.retroconsoleapi

Defined in: [sandkit/engine/retro-console.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L49)

**`Internal`**

`sandkit.engine.api.retroConsole` registration API.

##### Methods

###### registerGame()

```ts
registerGame<TState>(game: RetroConsoleGame<TState>): void
```

Defined in: [sandkit/engine/retro-console.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L51)

Register a Retro Console mini-game.

###### Type Parameters

###### TState

`TState`

###### Parameters

###### game

[`RetroConsoleGame`](#retroconsolegame)\<`TState`\>

###### Returns

`void`

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.engine.SandkitEngineApi :id=sandkit.engine.sandkitengineapi

```ts
SandkitEngineApi = object
```

Defined in: [sandkit/engine/index.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L32)

**`Internal`**

Composed `sandkit.engine.api` shape.

Overlap namespaces mirror [sandkit.api](api/sandkit.md#api-1) with state-first signatures.
Engine-only namespaces are declared under `api/`.

##### Properties

###### action

```ts
action: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L34)

###### authorization

```ts
authorization: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L35)

###### building

```ts
building: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L36)

###### camera

```ts
camera: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L37)

###### collector

```ts
collector: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L38)

###### constants

```ts
constants: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L39)

###### cooldown

```ts
cooldown: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L40)

###### discoveries

```ts
discoveries: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L41)

###### effects

```ts
effects: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L42)

###### elements

```ts
elements: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L43)

###### energy

```ts
energy: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L44)

###### events

```ts
events: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L45)

###### excavation

```ts
excavation: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L46)

###### fire

```ts
fire: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L47)

###### grid

```ts
grid: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L48)

###### hooks

```ts
hooks: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L49)

###### i18n

```ts
i18n: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L50)

###### input

```ts
input: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L51)

###### items

```ts
items: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L52)

###### lights

```ts
lights: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L53)

###### maps

```ts
maps: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L54)

###### patterns

```ts
patterns: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L55)

###### player

```ts
player: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L56)

###### processing

```ts
processing: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L57)

###### progression

```ts
progression: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L58)

###### projectiles

```ts
projectiles: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L59)

###### random

```ts
random: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L60)

###### raycast

```ts
raycast: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L61)

###### reactions

```ts
reactions: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L62)

###### rendering

```ts
rendering: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L63)

###### resources

```ts
resources: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L64)

###### scene

```ts
scene: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L65)

###### schedule

```ts
schedule: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L66)

###### signals

```ts
signals: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L67)

###### sound

```ts
sound: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L68)

###### sprites

```ts
sprites: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L69)

###### storage

```ts
storage: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L70)

###### structures

```ts
structures: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L71)

###### tech

```ts
tech: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L72)

###### terrains

```ts
terrains: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L73)

###### tools

```ts
tools: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L74)

###### triggers

```ts
triggers: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L75)

###### ui

```ts
ui: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L76)

###### upgrades

```ts
upgrades: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L77)

###### utils

```ts
utils: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L78)

###### workers

```ts
workers: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L79)

###### world

```ts
world: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L80)

###### augments

```ts
augments: augments
```

Defined in: [sandkit/engine/index.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L83)

###### auralite

```ts
auralite: auralite
```

Defined in: [sandkit/engine/index.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L84)

###### blueprints

```ts
blueprints: blueprints
```

Defined in: [sandkit/engine/index.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L85)

###### clipboard

```ts
clipboard: clipboard
```

Defined in: [sandkit/engine/index.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L86)

###### colorPicker

```ts
colorPicker: colorPicker
```

Defined in: [sandkit/engine/index.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L87)

###### coloringTool

```ts
coloringTool: coloringTool
```

Defined in: [sandkit/engine/index.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L88)

###### conveyors

```ts
conveyors: conveyors
```

Defined in: [sandkit/engine/index.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L89)

###### debug

```ts
debug: debug
```

Defined in: [sandkit/engine/index.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L90)

###### drones

```ts
drones: drones
```

Defined in: [sandkit/engine/index.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L91)

###### entities

```ts
entities: entities
```

Defined in: [sandkit/engine/index.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L92)

###### extensions

```ts
extensions: extensions
```

Defined in: [sandkit/engine/index.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L93)

###### factory

```ts
factory: factory
```

Defined in: [sandkit/engine/index.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L94)

###### foliage

```ts
foliage: foliage
```

Defined in: [sandkit/engine/index.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L95)

###### foundationColorPicker

```ts
foundationColorPicker: foundationColorPicker
```

Defined in: [sandkit/engine/index.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L96)

###### game

```ts
game: game
```

Defined in: [sandkit/engine/index.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L97)

###### heatTransfer

```ts
heatTransfer: heatTransfer
```

Defined in: [sandkit/engine/index.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L98)

###### launchers

```ts
launchers: launchers
```

Defined in: [sandkit/engine/index.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L99)

###### lightColorPicker

```ts
lightColorPicker: lightColorPicker
```

Defined in: [sandkit/engine/index.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L100)

###### matters

```ts
matters: matters
```

Defined in: [sandkit/engine/index.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L101)

###### misc

```ts
misc: misc
```

Defined in: [sandkit/engine/index.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L102)

###### portals

```ts
portals: portals
```

Defined in: [sandkit/engine/index.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L103)

###### prefabData

```ts
prefabData: prefabData
```

Defined in: [sandkit/engine/index.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L104)

###### prefabDecor

```ts
prefabDecor: prefabDecor
```

Defined in: [sandkit/engine/index.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L105)

###### prefabulator

```ts
prefabulator: prefabulator
```

Defined in: [sandkit/engine/index.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L106)

###### prismaline

```ts
prismaline: prismaline
```

Defined in: [sandkit/engine/index.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L107)

###### prismite

```ts
prismite: prismite
```

Defined in: [sandkit/engine/index.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L108)

###### queue

```ts
queue: queue
```

Defined in: [sandkit/engine/index.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L109)

###### shadows

```ts
shadows: shadows
```

Defined in: [sandkit/engine/index.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L110)

###### strataform

```ts
strataform: strataform
```

Defined in: [sandkit/engine/index.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L111)

###### swarmConsole

```ts
swarmConsole: swarmConsole
```

Defined in: [sandkit/engine/index.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L112)

###### sweeperDrone

```ts
sweeperDrone: sweeperDrone
```

Defined in: [sandkit/engine/index.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L113)

###### teleportZones

```ts
teleportZones: teleportZones
```

Defined in: [sandkit/engine/index.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L114)

###### tutorialBuild

```ts
tutorialBuild: tutorialBuild
```

Defined in: [sandkit/engine/index.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L115)

###### usageTracker

```ts
usageTracker: usageTracker
```

Defined in: [sandkit/engine/index.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L116)

###### wall

```ts
wall: wall
```

Defined in: [sandkit/engine/index.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L117)

###### workerLocal

```ts
workerLocal: workerLocal
```

Defined in: [sandkit/engine/index.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L118)

###### config

```ts
config: EngineFn
```

Defined in: [sandkit/engine/index.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L119)

###### extend

```ts
extend: EngineFn
```

Defined in: [sandkit/engine/index.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L120)

###### retroConsole

```ts
retroConsole: RetroConsoleApi
```

Defined in: [sandkit/engine/index.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/index.d.ts#L121)

***

#### sandkit.engine.RetroConsolePixel :id=sandkit.engine.retroconsolepixel

```ts
RetroConsolePixel = boolean | number
```

Defined in: [sandkit/engine/retro-console.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/retro-console.d.ts#L11)

**`Internal`**

Pixel value for the Retro Console framebuffer.

***

#### sandkit.engine.SandkitState :id=sandkit.engine.sandkitstate

```ts
SandkitState = object
```

Defined in: [sandkit/engine/state.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/state.d.ts#L12)

**`Internal`**

Live game state exposed on `sandkit.engine.state`.

##### Properties

###### environment

```ts
environment: object
```

Defined in: [sandkit/engine/state.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/state.d.ts#L13)

###### Index Signature

\[`key`: `string`\]: `unknown`

###### context

```ts
context: number
```

###### multithreading

```ts
multithreading: unknown
```

###### sandkit

```ts
sandkit: object
```

Defined in: [sandkit/engine/state.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/state.d.ts#L18)

###### Index Signature

\[`key`: `string`\]: `unknown`

###### events

```ts
events: unknown
```

###### gameReady

```ts
gameReady: boolean
```

###### graphics

```ts
graphics: unknown
```

###### hooks

```ts
hooks: unknown
```

###### keyBindings

```ts
keyBindings: unknown
```

###### mods

```ts
mods: unknown
```

###### registeredLauncherTypes

```ts
registeredLauncherTypes: unknown
```

###### session

```ts
session: unknown
```

Defined in: [sandkit/engine/state.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/state.d.ts#L28)

###### shared

```ts
shared: unknown
```

Defined in: [sandkit/engine/state.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/state.d.ts#L29)

###### store

```ts
store: unknown
```

Defined in: [sandkit/engine/state.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/state.d.ts#L30)

---

## shared.nominal

### Type Aliases <!-- {docsify-ignore} -->

#### shared.nominal.LooseString :id=shared.nominal.loosestring

```ts
LooseString<T *extends* string> = T | string & object
```

Defined in: [shared/nominal.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/nominal.d.ts#L16)

Known string literals plus any other string.
`T | string` collapses to `string` and drops autocomplete.

##### Type Parameters

###### T

`T` *extends* `string`

***

#### shared.nominal.LooseNumber :id=shared.nominal.loosenumber

```ts
LooseNumber<T *extends* number> = T | number & object
```

Defined in: [shared/nominal.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/nominal.d.ts#L22)

Known numeric literals plus any other number.
`T | number` collapses to `number` and drops autocomplete.

##### Type Parameters

###### T

`T` *extends* `number`

***

#### shared.nominal.TaggedNumber :id=shared.nominal.taggednumber

```ts
TaggedNumber<Tag *extends* string> = number & object
```

Defined in: [shared/nominal.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/nominal.d.ts#L28)

Number handle that does not mix with a different tag.
Plain `number` is not assignable; numeric literals and enum members are.

##### Type Declaration

###### \_\_tag?

```ts
readonly optional \_\_tag?: Tag
```

##### Type Parameters

###### Tag

`Tag` *extends* `string`

***

#### shared.nominal.CellId :id=shared.nominal.cellid

```ts
CellId = TaggedNumber<"cellId">
```

Defined in: [shared/nominal.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/nominal.d.ts#L31)

Packed simulation cell id from `world.getCellIdAtCell`.

---

## Sandkit API types

TypeScript declarations and Docsify API docs for the live Sandustry `sandkit` object. Package name: `@sandustry-modding/types`.

Folder layout mirrors runtime shape so you can jump from code to the matching `.d.ts` path.

### Runtime map

| Path | Runtime object |
| --- | --- |
| `sandkit/api/` | `sandkit.api` (main thread) |
| `sandkit/engine/api/` | `sandkit.engine.api` |
| `sandkit/engine/state.d.ts` | `sandkit.engine.state` / `sandkit.state` |
| `sandkit/enums/` | `sandkit.enums` |
| `sandkit/react.d.ts` | `sandkit.react` |
| `sandkit/index.d.ts` | Composed `Sandkit` root type |
| `global.d.ts` | Ambient `sandkit` free variable and type aliases |
| `worker/` | Worker-thread `sandkit.api` (see `WorkerSandkitApi`) |
| `shared/` | Internal base shapes reused by main and worker declarations |

### Runtime shape vs `export namespace`

At runtime, every API bag is a **plain object** with function properties — not a TypeScript `namespace`. MCP checks on a live game session show:

- `sandkit.api`, `sandkit.api.ui`, `sandkit.api.ui.overlays`, and `sandkit.engine.api.game` are all `typeof "object"` with `Object.prototype`
- Nested keys hold functions or further plain objects

Declaration files use `export namespace` because it is the usual `.d.ts` pattern for nested object APIs. It matches how you call the API (`sandkit.api.ui.update`) and supports `export import` when main and worker share base shapes under `shared/`.

`interface` or `type` object literals would also work for runtime shape, but they do not support the `export import` re-export style used across main, worker, and shared modules.

### Install

```bash
npm install @sandustry-modding/types
```

In `tsconfig.json`, include the package types (or reference them from an ambient file):

```json
{
  "compilerOptions": {
    "types": ["@sandustry-modding/types"]
  }
}
```

### Usage

- **Main mod (`main.js`):** use the ambient free name `sandkit`. Type aliases such as `SandkitApi` are global; do not import a value binding.
- **Worker mod (`worker.js`):** type `sandkit.api` as `WorkerSandkitApi`. Worker and main APIs overlap but are not interchangeable.
- **Shared folder:** not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend.

### Maintaining types

Edit `.d.ts` files here. Regenerate the Docsify API reference after JSDoc changes.

### Docs site

Regenerate the Docsify API reference from these declarations:

```bash
npm run docs:api
```

Output lands in `docs/api/`. `npm run docs` runs that step, then serves the docs site.

---
