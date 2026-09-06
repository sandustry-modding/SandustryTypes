# Sandkit API (full) <!-- {docsify-ignore-all} -->

Every generated API page on one document. Use [Search](search.md) when you only need one namespace.

## sandkit

Live `sandkit` object — shape, ambient binding docs, and nested bags.

Mirrors on-disk `src/sandkit/` and the host free variable: `api`, `engine`,
`enums`, `react`, `state`. Prefer the free name `sandkit` in mod code
(`src/global.d.ts`); do not import a value binding.

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api :id=sandkit.sandkitapi

```ts
SandkitApi = object
```

Defined in: [sandkit/api/sandkit-api.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L8)

Composed main-thread `sandkit.api` object type.

Each property matches a namespace under `sandkit.api.*`.
Namespace members are documented in their module files.
Use this type when typing the host `sandkit.api` value as a whole.

##### Properties

###### action

```ts
action: action
```

Defined in: [sandkit/api/sandkit-api.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L10)

Player action and custom action data.

###### assets

```ts
assets: assets
```

Defined in: [sandkit/api/sandkit-api.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L12)

Mod asset URLs and provider selection.

###### authorization

```ts
authorization: authorization
```

Defined in: [sandkit/api/sandkit-api.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L14)

Build authorization checks.

###### building

```ts
building: building
```

Defined in: [sandkit/api/sandkit-api.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L16)

Building mode and placement.

###### blueprints

```ts
blueprints: blueprints
```

Defined in: [sandkit/api/sandkit-api.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L18)

Structure blueprint serialize and localize helpers.

###### camera

```ts
camera: camera
```

Defined in: [sandkit/api/sandkit-api.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L20)

Camera position and bounds.

###### collector

```ts
collector: collector
```

Defined in: [sandkit/api/sandkit-api.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L22)

Collector machine helpers.

###### constants

```ts
constants: constants
```

Defined in: [sandkit/api/sandkit-api.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L24)

Shared game constants.

###### cooldown

```ts
cooldown: cooldown
```

Defined in: [sandkit/api/sandkit-api.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L26)

Cooldown timers.

###### discoveries

```ts
discoveries: discoveries
```

Defined in: [sandkit/api/sandkit-api.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L28)

Discovery tracking.

###### effects

```ts
effects: effects
```

Defined in: [sandkit/api/sandkit-api.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L30)

Visual and gameplay effects.

###### elements

```ts
elements: elements
```

Defined in: [sandkit/api/sandkit-api.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L32)

Element types and cell mutations.

###### entities

```ts
entities: entities
```

Defined in: [sandkit/api/sandkit-api.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L34)

Entity spawn, capture, and lifecycle.

###### energy

```ts
energy: energy
```

Defined in: [sandkit/api/sandkit-api.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L36)

Energy network helpers.

###### events

```ts
events: events
```

Defined in: [sandkit/api/sandkit-api.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L38)

Game event subscription.

###### excavation

```ts
excavation: excavation
```

Defined in: [sandkit/api/sandkit-api.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L40)

Excavation helpers.

###### fire

```ts
fire: fire
```

Defined in: [sandkit/api/sandkit-api.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L42)

Fire and burning helpers.

###### factory

```ts
factory: factory
```

Defined in: [sandkit/api/sandkit-api.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L44)

Factory progression level and process counters.

###### game

```ts
game: game
```

Defined in: [sandkit/api/sandkit-api.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L46)

Game session start helpers.

###### gameConfig

```ts
gameConfig: gameConfig
```

Defined in: [sandkit/api/sandkit-api.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L48)

Game configuration values.

###### grid

```ts
grid: grid
```

Defined in: [sandkit/api/sandkit-api.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L53)

Cell queries, deferred mutations, fog, and redraw.
Official name for the former `api.world` surface.

###### hooks

```ts
hooks: hooks
```

Defined in: [sandkit/api/sandkit-api.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L55)

Intercept and modify hooks.

###### i18n

```ts
i18n: i18n
```

Defined in: [sandkit/api/sandkit-api.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L57)

Localization strings.

###### input

```ts
input: input
```

Defined in: [sandkit/api/sandkit-api.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L59)

Input state and bindings.

###### items

```ts
items: items
```

Defined in: [sandkit/api/sandkit-api.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L61)

Item definitions and inventory.

###### lights

```ts
lights: lights
```

Defined in: [sandkit/api/sandkit-api.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L63)

Dynamic light sources.

###### maps

```ts
maps: maps
```

Defined in: [sandkit/api/sandkit-api.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L65)

Map selection and session start.

###### mods

```ts
mods: mods
```

Defined in: [sandkit/api/sandkit-api.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L67)

Mod asset provider lookup.

###### patterns

```ts
patterns: patterns
```

Defined in: [sandkit/api/sandkit-api.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L69)

Excavation pattern helpers.

###### pipes

```ts
pipes: pipes
```

Defined in: [sandkit/api/sandkit-api.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L71)

Pipe network queries and enablement.

###### pickups

```ts
pickups: pickups
```

Defined in: [sandkit/api/sandkit-api.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L73)

World pickup spawn, collect, and lookup.

###### player

```ts
player: player
```

Defined in: [sandkit/api/sandkit-api.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L75)

Player position, movement, and inventory.

###### processing

```ts
processing: processing
```

Defined in: [sandkit/api/sandkit-api.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L77)

Processing recipe registration.

###### progression

```ts
progression: progression
```

Defined in: [sandkit/api/sandkit-api.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L79)

Story progression completion.

###### projectiles

```ts
projectiles: projectiles
```

Defined in: [sandkit/api/sandkit-api.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L81)

Projectile spawn and lifecycle.

###### random

```ts
random: random
```

Defined in: [sandkit/api/sandkit-api.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L83)

Game random number helpers.

###### raycast

```ts
raycast: raycast
```

Defined in: [sandkit/api/sandkit-api.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L85)

World raycast queries.

###### reactions

```ts
reactions: reactions
```

Defined in: [sandkit/api/sandkit-api.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L87)

Element contact reactions.

###### rendering

```ts
rendering: rendering
```

Defined in: [sandkit/api/sandkit-api.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L89)

Screen drawing and overlay canvas.

###### resources

```ts
resources: resources
```

Defined in: [sandkit/api/sandkit-api.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L91)

Fluxite and energy resources.

###### scene

```ts
scene: scene
```

Defined in: [sandkit/api/sandkit-api.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L93)

Active game scene.

###### schedule

```ts
schedule: schedule
```

Defined in: [sandkit/api/sandkit-api.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L95)

Next-tick callback scheduling.

###### settings

```ts
settings: settings
```

Defined in: [sandkit/api/sandkit-api.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L97)

Game settings read and change events.

###### shared

```ts
shared: shared
```

Defined in: [sandkit/api/sandkit-api.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L99)

Cross-thread shared buffers.

###### signals

```ts
signals: signals
```

Defined in: [sandkit/api/sandkit-api.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L101)

Signal target registration.

###### sound

```ts
sound: sound
```

Defined in: [sandkit/api/sandkit-api.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L103)

Sound playback and stop controls.

###### sprites

```ts
sprites: sprites
```

Defined in: [sandkit/api/sandkit-api.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L105)

Sprite load and transforms.

###### storage

```ts
storage: storage
```

Defined in: [sandkit/api/sandkit-api.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L107)

Per-mod and local storage.

###### structureBehaviors

```ts
structureBehaviors: structureBehaviors
```

Defined in: [sandkit/api/sandkit-api.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L109)

Conveyor and launcher behaviors.

###### structures

```ts
structures: structures
```

Defined in: [sandkit/api/sandkit-api.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L111)

Structure registration and queries.

###### tech

```ts
tech: tech
```

Defined in: [sandkit/api/sandkit-api.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L113)

Tech tree definitions and locks.

###### terrains

```ts
terrains: terrains
```

Defined in: [sandkit/api/sandkit-api.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L115)

Terrain registration and mutations.

###### time

```ts
time: time
```

Defined in: [sandkit/api/sandkit-api.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L117)

Game time and tick counter.

###### tools

```ts
tools: tools
```

Defined in: [sandkit/api/sandkit-api.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L119)

Tool-specific helpers.

###### triggers

```ts
triggers: triggers
```

Defined in: [sandkit/api/sandkit-api.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L121)

Interval trigger registration.

###### ui

```ts
ui: ui
```

Defined in: [sandkit/api/sandkit-api.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L123)

UI overlays, dialogs, and navigation.

###### upgrades

```ts
upgrades: upgrades
```

Defined in: [sandkit/api/sandkit-api.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L125)

Upgrade categories and levels.

###### utils

```ts
utils: utils
```

Defined in: [sandkit/api/sandkit-api.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L127)

Vector math helpers.

###### workers

```ts
workers: workers
```

Defined in: [sandkit/api/sandkit-api.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L129)

Worker post-update control.

###### ~~world~~

```ts
world: world
```

Defined in: [sandkit/api/sandkit-api.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts#L133)

###### Deprecated

Use [grid](#grid) for cell APIs and [pickups](#pickups) for world items.

***

#### sandkit :id=sandkit.sandkit

```ts
Sandkit = object
```

Defined in: [sandkit/index.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L33)

Shape of the host-injected `sandkit` free variable in mod `main.js`.

##### Example

**Accessing the API**

```ts
const api = sandkit.api; // Stable API

// Unstable engine escape hatch
const engineApi = sandkit.engine.api;
const engineState = sandkit.engine.state;
```

##### Properties

###### api

```ts
api: SandkitApi
```

Defined in: [sandkit/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L35)

Public mod API. See [sandkit.api](#api-1).

###### apiVersion

```ts
apiVersion: number
```

Defined in: [sandkit/index.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L37)

Sandkit API version number (live value is `1`).

###### engine

```ts
engine: SandkitEngine
```

Defined in: [sandkit/index.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L42)

**`Internal`**

State-first internals. See [SandkitEngine](api/sandkit.engine.md#sandkitengine).

###### enums

```ts
enums: SandkitEnums
```

Defined in: [sandkit/index.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L44)

Runtime enum bags. See [sandkit.enums](#enums-1).

###### react

```ts
react: SandkitReact
```

Defined in: [sandkit/index.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L46)

Host React package. See [SandkitReact](api/sandkit.react.md#sandkitreact).

###### state

```ts
state: SandkitState
```

Defined in: [sandkit/index.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L51)

Game state. Same object as `sandkit.engine.state` at runtime.
See [SandkitState](api/sandkit.engine.md#sandkitstate).

### References <!-- {docsify-ignore} -->

#### api :id=sandkit.api

<p class="smt-member-path"><code>sandkit.api</code></p>
Renames and re-exports [sandkit/api](api/sandkit.api.md)

***

#### engine :id=sandkit.engine

<p class="smt-member-path"><code>sandkit.engine</code></p>
Re-exports [engine](api/sandkit.engine.md)

***

#### enums :id=sandkit.enums

<p class="smt-member-path"><code>sandkit.enums</code></p>
Renames and re-exports [sandkit/enums](api/sandkit.enums.md)

***

#### sandkit.engine :id=sandkit.sandkitengine

Re-exports [SandkitEngine](api/sandkit.engine.md#sandkitengine)

***

#### sandkit.engine.api :id=sandkit.sandkitengineapi

Re-exports [SandkitEngineApi](api/sandkit.engine.md#sandkitengineapi)

***

#### RetroConsoleApi :id=sandkit.retroconsoleapi

<p class="smt-member-path"><code>sandkit.RetroConsoleApi</code></p>
Re-exports [RetroConsoleApi](api/sandkit.engine.md#retroconsoleapi)

***

#### sandkit.state :id=sandkit.sandkitstate

Re-exports [SandkitState](api/sandkit.engine.md#sandkitstate)

***

#### sandkit.enums :id=sandkit.sandkitenums

Re-exports [SandkitEnums](api/sandkit.enums.md#sandkitenums)

***

#### sandkit.react :id=sandkit.sandkitreact

Re-exports [SandkitReact](api/sandkit.react.md#sandkitreact)

---

## sandkit.api.action

`sandkit.api.action` — active hotbar action and custom handler data.
Main thread only.

### Type Aliases <!-- {docsify-ignore} -->

#### Action :id=sandkit.api.action.action

```ts
sandkit.api.action.Action = AssetRef
```

Defined in: [sandkit/api/action.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L9)

Hotbar action asset reference.

### Functions <!-- {docsify-ignore} -->

#### getActive() :id=sandkit.api.action.getactive

```ts
sandkit.api.action.getActive(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L15)

Return the action slot the player is using.

##### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Active hotbar action reference.

***

#### getSelected() :id=sandkit.api.action.getselected

```ts
sandkit.api.action.getSelected(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L21)

Return the action slot selected in the hotbar.

##### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Selected hotbar action reference.

***

#### setCustomData() :id=sandkit.api.action.setcustomdata

```ts
sandkit.api.action.setCustomData<Input>(data: Input): void
```

Defined in: [sandkit/api/action.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L32)

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

##### Example

```ts
api.action.setCustomData({ mode: "example" });
```

---

## sandkit.api.assets

`sandkit.api.assets` — mod asset URLs and asset provider selection.
Main thread only.

### Type Aliases <!-- {docsify-ignore} -->

#### AssetProviderV1 :id=sandkit.api.assets.assetproviderv1

```ts
sandkit.api.assets.AssetProviderV1 = object
```

Defined in: [sandkit/api/assets.d.ts:7](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L7)

Describes a mod or pack that supplies assets for a kind.

##### Properties

###### id

```ts
id: ` ${string}:${string}:${string} `
```

Defined in: [sandkit/api/assets.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L8)

###### kind

```ts
kind: string
```

Defined in: [sandkit/api/assets.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L9)

###### localId?

```ts
optional localId?: string
```

Defined in: [sandkit/api/assets.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L10)

###### modId?

```ts
optional modId?: number
```

Defined in: [sandkit/api/assets.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L11)

###### modName

```ts
modName: string
```

Defined in: [sandkit/api/assets.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L12)

### Functions <!-- {docsify-ignore} -->

#### getUrl() :id=sandkit.api.assets.geturl

```ts
sandkit.api.assets.getUrl(relativePath: string): string
```

Defined in: [sandkit/api/assets.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L18)

Resolves a path under the mod folder to a loadable URL.

##### Parameters

###### relativePath

`string`

Path relative to the calling mod folder.

##### Returns

`string`

***

#### getSelectedProvider() :id=sandkit.api.assets.getselectedprovider

```ts
sandkit.api.assets.getSelectedProvider(kind: string): AssetProviderV1 | null
```

Defined in: [sandkit/api/assets.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L23)

Returns the selected provider for an asset kind, or null.

##### Parameters

###### kind

`string`

Asset kind identifier.

##### Returns

[`AssetProviderV1`](#assetproviderv1) \| `null`

***

#### selectProvider() :id=sandkit.api.assets.selectprovider

```ts
sandkit.api.assets.selectProvider(kind: string, providerId: string | null): boolean
```

Defined in: [sandkit/api/assets.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L29)

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

#### canBuildAtCell() :id=sandkit.api.authorization.canbuildatcell

```ts
sandkit.api.authorization.canBuildAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/authorization.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L14)

Return true when the player may place a structure at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when building is allowed in the authorization zone.

***

#### canGrabAtCell() :id=sandkit.api.authorization.cangrabatcell

```ts
sandkit.api.authorization.canGrabAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/authorization.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L22)

Return true when the player may grab at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when grabbing is allowed in the authorization zone.

***

#### canUseTool() :id=sandkit.api.authorization.canusetool

```ts
sandkit.api.authorization.canUseTool(player: Player, isFlamethrower?: boolean): boolean
```

Defined in: [sandkit/api/authorization.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L30)

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

#### canUseToolAtCell() :id=sandkit.api.authorization.canusetoolatcell

```ts
sandkit.api.authorization.canUseToolAtCell(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/authorization.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L39)

Return true when the player may use a tool at the cell.

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`boolean`

True when tool use is allowed at the cell.

***

#### getZoneIdAtCell() :id=sandkit.api.authorization.getzoneidatcell

```ts
sandkit.api.authorization.getZoneIdAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/authorization.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L49)

Return the authorization zone id at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`number`

Numeric zone id for the cell.

***

#### getPlayerZoneId() :id=sandkit.api.authorization.getplayerzoneid

```ts
sandkit.api.authorization.getPlayerZoneId(): number
```

Defined in: [sandkit/api/authorization.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L55)

Return the authorization zone id for the player.

##### Returns

`number`

Numeric zone id for the player's current position.

---

## sandkit.api.blueprints

Structure blueprint serialize and localize helpers.

Available as `sandkit.api.blueprints`.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### BlueprintStructure :id=sandkit.api.blueprints.blueprintstructure

<p class="smt-member-path"><code>sandkit.api.blueprints.BlueprintStructure</code></p>
Defined in: [sandkit/api/blueprints.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L34)

Serialized structure entry used in blueprints.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### x

```ts
x: number
```

Defined in: [sandkit/api/blueprints.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L35)

###### y

```ts
y: number
```

Defined in: [sandkit/api/blueprints.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L36)

### Functions <!-- {docsify-ignore} -->

#### serializeStructures() :id=sandkit.api.blueprints.serializestructures

```ts
sandkit.api.blueprints.serializeStructures(structures: readonly Structure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L18)

Serialize live structure instances into blueprint records.

##### Parameters

###### structures

readonly [`Structure`](api/sandkit.api.structures.worker.md#structure)[]

Structure instances to encode.

##### Returns

[`BlueprintStructure`](#blueprintstructure)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### localizeStructures() :id=sandkit.api.blueprints.localizestructures

```ts
sandkit.api.blueprints.localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L29)

Localize blueprint structure records for placement.

##### Parameters

###### structures

readonly [`BlueprintStructure`](#blueprintstructure)[]

Blueprint structure records to localize.

##### Returns

[`BlueprintStructure`](#blueprintstructure)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.building

`sandkit.api.building` — structure placement and built-in structure types.
Main thread only.

### Enumerations <!-- {docsify-ignore} -->

- [StructureType](api/sandkit.api.building.StructureType.md)

### Functions <!-- {docsify-ignore} -->

#### getSnappedPositionAtCell() :id=sandkit.api.building.getsnappedpositionatcell

```ts
sandkit.api.building.getSnappedPositionAtCell(...args: CellCoordinates): Vector2
```

Defined in: [sandkit/api/building.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L73)

Return the snapped world position for placement at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`Vector2`](api/shared.player.md#vector2)

Snapped world position in pixels.

***

#### isBlockedAtCell() :id=sandkit.api.building.isblockedatcell

```ts
sandkit.api.building.isBlockedAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/building.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L81)

Return true when placement is blocked at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when a structure cannot be placed at the cell.

***

#### cancelPlacement() :id=sandkit.api.building.cancelplacement

```ts
sandkit.api.building.cancelPlacement(): void
```

Defined in: [sandkit/api/building.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L84)

Cancel the current structure placement preview.

##### Returns

`void`

***

#### selectStructure() :id=sandkit.api.building.selectstructure

```ts
sandkit.api.building.selectStructure(structureTypeOrId: StructureRef | StructureType): StructureRef | null
```

Defined in: [sandkit/api/building.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L91)

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

#### snapToPlayer() :id=sandkit.api.camera.snaptoplayer

```ts
sandkit.api.camera.snapToPlayer(): void
```

Defined in: [sandkit/api/camera.d.ts:7](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L7)

Snap the camera to the player position.

##### Returns

`void`

***

#### setFocusAtWorld() :id=sandkit.api.camera.setfocusatworld

```ts
sandkit.api.camera.setFocusAtWorld(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/camera.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L15)

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

#### releaseFocus() :id=sandkit.api.camera.releasefocus

```ts
sandkit.api.camera.releaseFocus(options?: object): boolean
```

Defined in: [sandkit/api/camera.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L27)

Release scripted focus and return control to the player.

##### Parameters

###### options?

Optional transition duration in milliseconds.

###### durationMs?

`number`

##### Returns

`boolean`

True when focus was released.

##### Example

```ts
const released = api.camera.releaseFocus({ durationMs: 250 });
```

---

## sandkit.api.collector

`sandkit.api.collector` — collector structure value and pickup handling.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### getValueFromCellId() :id=sandkit.api.collector.getvaluefromcellid

```ts
sandkit.api.collector.getValueFromCellId(cellId: CellId): number
```

Defined in: [sandkit/api/collector.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L14)

Returns the collector value for a cell id.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

##### Returns

`number`

***

#### getValueByType() :id=sandkit.api.collector.getvaluebytype

```ts
sandkit.api.collector.getValueByType(elementType: ElementType): number
```

Defined in: [sandkit/api/collector.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L19)

Returns the collector value for an element type.

##### Parameters

###### elementType

[`ElementType`](api/sandkit.api.elements.md#elementtype)

Numeric element type id.

##### Returns

`number`

***

#### isCellIdCollectable() :id=sandkit.api.collector.iscellidcollectable

```ts
sandkit.api.collector.isCellIdCollectable(cellId: CellId): boolean
```

Defined in: [sandkit/api/collector.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L24)

Returns true when the cell id can be collected.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

##### Returns

`boolean`

***

#### isCellIdCollectableForSprite() :id=sandkit.api.collector.iscellidcollectableforsprite

```ts
sandkit.api.collector.isCellIdCollectableForSprite(cellId: CellId): boolean
```

Defined in: [sandkit/api/collector.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L29)

Returns true when the cell id can be collected for sprite display.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

##### Returns

`boolean`

***

#### notifyPickupAtCell() :id=sandkit.api.collector.notifypickupatcell

```ts
sandkit.api.collector.notifyPickupAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/collector.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L35)

Notifies collector logic that a pickup happened at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

---

## sandkit.api.constants

### Variables <!-- {docsify-ignore} -->

#### physics :id=sandkit.api.constants.physics

```ts
const physics: Readonly<{ normal: 0; skip: 1; aggressiveSkip: 2; }>
```

Defined in: [sandkit/api/constants.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/constants.d.ts#L13)

Skip-physics modes for element physics fields.

---

## sandkit.api.cooldown

`sandkit.api.cooldown` — reusable cooldown timers for abilities and items.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### Cooldown :id=sandkit.api.cooldown.cooldown

<p class="smt-member-path"><code>sandkit.api.cooldown.Cooldown</code></p>
Defined in: [sandkit/api/cooldown.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L20)

Cooldown state object passed to [check](#check) and [isReady](#isready).

##### Properties

###### last

```ts
last: number
```

Defined in: [sandkit/api/cooldown.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L22)

Timestamp when the cooldown was last triggered (game time).

###### time

```ts
time: number
```

Defined in: [sandkit/api/cooldown.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L24)

Cooldown duration in milliseconds.

### Functions <!-- {docsify-ignore} -->

#### check() :id=sandkit.api.cooldown.check

```ts
sandkit.api.cooldown.check(cooldown: Cooldown, overrideTime?: number): boolean
```

Defined in: [sandkit/api/cooldown.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L11)

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

#### isReady() :id=sandkit.api.cooldown.isready

```ts
sandkit.api.cooldown.isReady(cooldown: Cooldown, overrideTime?: number): boolean
```

Defined in: [sandkit/api/cooldown.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L17)

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

#### addElementByType() :id=sandkit.api.discoveries.addelementbytype

```ts
sandkit.api.discoveries.addElementByType(elementType: ElementType): void
```

Defined in: [sandkit/api/discoveries.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/discoveries.d.ts#L12)

Marks an element type as discovered for the player.

##### Parameters

###### elementType

[`ElementType`](api/sandkit.api.elements.md#elementtype)

Numeric element type id.

##### Returns

`void`

***

#### addTerrainByType() :id=sandkit.api.discoveries.addterrainbytype

```ts
sandkit.api.discoveries.addTerrainByType(terrainType: TerrainType): void
```

Defined in: [sandkit/api/discoveries.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/discoveries.d.ts#L17)

Marks a terrain type as discovered for the player.

##### Parameters

###### terrainType

[`TerrainType`](api/sandkit.api.terrains.worker.md#terraintype)

Numeric terrain type id.

##### Returns

`void`

---

## sandkit.api.effects

`sandkit.api.effects` — visual effects, particles, and lasers at world positions.
Main thread only. Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.md).

### Interfaces <!-- {docsify-ignore} -->

#### LaserEffectOptions :id=sandkit.api.effects.lasereffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.LaserEffectOptions</code></p>
Defined in: [sandkit/api/effects.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L122)

Options for laser beam effects.

##### Properties

###### width?

```ts
optional width?: number
```

Defined in: [sandkit/api/effects.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L124)

Beam width in pixels.

###### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/effects.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L126)

Beam brightness multiplier.

###### color?

```ts
optional color?: number
```

Defined in: [sandkit/api/effects.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L128)

Beam color as a packed integer.

###### glow?

```ts
optional glow?: boolean
```

Defined in: [sandkit/api/effects.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L130)

When true, draws a glow around the beam.

***

#### LaserEffectHandle :id=sandkit.api.effects.lasereffecthandle

<p class="smt-member-path"><code>sandkit.api.effects.LaserEffectHandle</code></p>
Defined in: [sandkit/api/effects.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L134)

Handle returned by createLaserAtWorld.

##### Methods

###### destroy()

```ts
destroy(): void
```

Defined in: [sandkit/api/effects.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L136)

Removes the laser from the scene.

###### Returns

`void`

***

#### DistortionEffectOptions :id=sandkit.api.effects.distortioneffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.DistortionEffectOptions</code></p>
Defined in: [sandkit/api/effects.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L140)

Options for distortion wave effects.

##### Properties

###### style?

```ts
optional style?: "implode" | "explode"
```

Defined in: [sandkit/api/effects.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L142)

Distortion style: implode or explode.

###### duration?

```ts
optional duration?: number
```

Defined in: [sandkit/api/effects.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L144)

Effect duration in seconds.

###### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [sandkit/api/effects.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L146)

Maximum radius of the wave.

###### intensity?

```ts
optional intensity?: number
```

Defined in: [sandkit/api/effects.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L148)

Visual intensity of the distortion.

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/effects.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L150)

RGBA color components for the effect.

***

#### EffectOptions :id=sandkit.api.effects.effectoptions

<p class="smt-member-path"><code>sandkit.api.effects.EffectOptions</code></p>
Defined in: [shared/api/effects.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L48)

Generic duration and radius options for world effects.

##### Properties

###### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L49)

###### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [shared/api/effects.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L50)

###### intensity?

```ts
optional intensity?: number
```

Defined in: [shared/api/effects.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L51)

***

#### TemporaryLightOptions :id=sandkit.api.effects.temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.effects.TemporaryLightOptions</code></p>
Defined in: [shared/api/effects.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L54)

Options for [createLightAtWorld](#createlightatworld).

##### Properties

###### brightness?

```ts
optional brightness?: number
```

Defined in: [shared/api/effects.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L55)

###### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L56)

###### durationMs?

```ts
optional durationMs?: number
```

Defined in: [shared/api/effects.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L57)

###### size?

```ts
optional size?: number
```

Defined in: [shared/api/effects.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L58)

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [shared/api/effects.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L59)

###### decay

```ts
decay: number
```

Defined in: [shared/api/effects.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L61)

Light decay rate after spawn.

###### unclamped?

```ts
optional unclamped?: boolean
```

Defined in: [shared/api/effects.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L62)

###### skipDedup?

```ts
optional skipDedup?: boolean
```

Defined in: [shared/api/effects.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L63)

###### useLightZones?

```ts
optional useLightZones?: boolean
```

Defined in: [shared/api/effects.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L64)

###### noopIfFull?

```ts
optional noopIfFull?: boolean
```

Defined in: [shared/api/effects.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L65)

###### priority?

```ts
optional priority?: number
```

Defined in: [shared/api/effects.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L66)

###### dedupKey

```ts
dedupKey: string
```

Defined in: [shared/api/effects.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L68)

Dedupe key when the light pool is full or dedup is enabled.

***

#### ParticleEffectOptions :id=sandkit.api.effects.particleeffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.ParticleEffectOptions</code></p>
Defined in: [shared/api/effects.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L71)

Options for [createParticlesAtWorld](#createparticlesatworld).

##### Properties

###### count?

```ts
optional count?: number
```

Defined in: [shared/api/effects.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L72)

###### velocity?

```ts
optional velocity?: Vector2
```

Defined in: [shared/api/effects.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L73)

###### minSpeed?

```ts
optional minSpeed?: number
```

Defined in: [shared/api/effects.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L74)

###### maxSpeed?

```ts
optional maxSpeed?: number
```

Defined in: [shared/api/effects.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L75)

###### color?

```ts
optional color?: number
```

Defined in: [shared/api/effects.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L77)

Hex code. No alpha.

###### minSize?

```ts
optional minSize?: number
```

Defined in: [shared/api/effects.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L78)

###### maxSize?

```ts
optional maxSize?: number
```

Defined in: [shared/api/effects.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L79)

###### minLifetime?

```ts
optional minLifetime?: number
```

Defined in: [shared/api/effects.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L80)

###### maxLifetime?

```ts
optional maxLifetime?: number
```

Defined in: [shared/api/effects.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L81)

###### background?

```ts
optional background?: boolean
```

Defined in: [shared/api/effects.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L82)

###### imageName?

```ts
optional imageName?: string
```

Defined in: [shared/api/effects.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L83)

###### fadeOutOnly?

```ts
optional fadeOutOnly?: boolean
```

Defined in: [shared/api/effects.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L84)

###### fadeStart?

```ts
optional fadeStart?: number
```

Defined in: [shared/api/effects.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L85)

###### fadeEnd?

```ts
optional fadeEnd?: number
```

Defined in: [shared/api/effects.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L86)

###### damp?

```ts
optional damp?: number
```

Defined in: [shared/api/effects.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L87)

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.effects.createatworld

```ts
sandkit.api.effects.createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L25)

Creates a named screen effect at world coordinates.

##### Parameters

###### effectId

`string`

Registered effect id (for example `heatWave`).

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

###### options?

[`EffectOptions`](#effectoptions)

Duration, radius, and intensity settings.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~createEffectAtWorld()~~ :id=sandkit.api.effects.createeffectatworld

```ts
sandkit.api.effects.createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L37)

##### Parameters

###### effectId

`string`

###### worldX

`number`

###### worldY

`number`

###### options?

[`EffectOptions`](#effectoptions)

##### Returns

`void`

##### Deprecated

Use [createAtWorld](#createatworld) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~createLightAtWorld()~~ :id=sandkit.api.effects.createlightatworld

```ts
sandkit.api.effects.createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object
```

Defined in: [sandkit/api/effects.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L67)

##### Parameters

###### worldX

`number`

###### worldY

`number`

###### options?

[`TemporaryLightOptions`](#temporarylightoptions)

##### Returns

`object`

###### ~~lightId~~

```ts
lightId: number | null
```

###### ~~index?~~

```ts
optional index?: number | null
```

##### Deprecated

Use [lights.temporary.createAtWorld](api/sandkit.api.lights.temporary.md#createatworld) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### createDistortionWaveAtWorld() :id=sandkit.api.effects.createdistortionwaveatworld

```ts
sandkit.api.effects.createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L89)

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

##### Example

```ts
api.effects.createDistortionWaveAtWorld(worldX, worldY, {
  style: "implode",
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### createLaserAtWorld() :id=sandkit.api.effects.createlaseratworld

```ts
sandkit.api.effects.createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle
```

Defined in: [sandkit/api/effects.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L106)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~removeLightById()~~ :id=sandkit.api.effects.removelightbyid

```ts
sandkit.api.effects.removeLightById(lightId: number): void
```

Defined in: [sandkit/api/effects.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L119)

##### Parameters

###### lightId

`number`

##### Returns

`void`

##### Deprecated

Use [lights.temporary.removeById](api/sandkit.api.lights.temporary.md#removebyid) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### createParticlesAtWorld() :id=sandkit.api.effects.createparticlesatworld

```ts
sandkit.api.effects.createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void
```

Defined in: [shared/api/effects.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L28)

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

---

## sandkit.api.elements

`sandkit.api.elements` — register elements and read or change cells on the main thread.
Main thread only.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Enumerations <!-- {docsify-ignore} -->

- [MatterType](api/sandkit.api.elements.MatterType.md)

### Interfaces <!-- {docsify-ignore} -->

#### InteractionStructureMetadata :id=sandkit.api.elements.interactionstructuremetadata

<p class="smt-member-path"><code>sandkit.api.elements.InteractionStructureMetadata</code></p>
Defined in: [sandkit/api/elements.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L87)

Optional tooltip metadata on structure interactions.

##### Properties

###### textKey?

```ts
optional textKey?: string
```

Defined in: [sandkit/api/elements.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L89)

i18n key for custom interaction label text.

###### crossedOutWhen?

```ts
optional crossedOutWhen?: object
```

Defined in: [sandkit/api/elements.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L91)

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

Defined in: [sandkit/api/elements.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L93)

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

Defined in: [sandkit/api/elements.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L95)

Require the text key to exist in the active locale.

***

#### ElementCreateOptions :id=sandkit.api.elements.elementcreateoptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementCreateOptions</code></p>
Defined in: [shared/api/elements.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L86)

Options for [createAtCell](#createatcell), replace, and related create helpers.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### Properties

###### data?

```ts
optional data?: Record<string, unknown>
```

Defined in: [shared/api/elements.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L88)

Initial element data bag.

###### density?

```ts
optional density?: number
```

Defined in: [shared/api/elements.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L90)

Override element density.

###### durationTicks?

```ts
optional durationTicks?: number
```

Defined in: [shared/api/elements.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L96)

Set both max and remaining duration in simulation ticks.

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

###### ~~duration?~~

```ts
optional duration?: number
```

Defined in: [shared/api/elements.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L102)

###### Deprecated

Use [durationTicks](#durationticks) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### isFreeFalling?

```ts
optional isFreeFalling?: boolean
```

Defined in: [shared/api/elements.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L104)

Override free-fall state on spawn.

###### dataFields?

```ts
optional dataFields?: object
```

Defined in: [shared/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L106)

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

Defined in: [shared/api/elements.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L113)

Spawn as a particle with the given velocity.

###### velocity

```ts
velocity: Vector2
```

###### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L117)

Skip collector accounting when placing the element.

***

#### ElementRemovalOptions :id=sandkit.api.elements.elementremovaloptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementRemovalOptions</code></p>
Defined in: [shared/api/elements.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L125)

Options for element removal helpers.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### Properties

###### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L127)

Skip collector accounting when removing the element.

### Type Aliases <!-- {docsify-ignore} -->

#### InteractionDestroyer :id=sandkit.api.elements.interactiondestroyer

```ts
sandkit.api.elements.InteractionDestroyer = object
```

Defined in: [sandkit/api/elements.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L99)

Interaction that destroys specific items.

##### Properties

###### kind

```ts
kind: "destroyer"
```

Defined in: [sandkit/api/elements.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L100)

###### items

```ts
items: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L102)

Item ids removed by this interaction (for example `"drill"`).

***

#### InteractionStructure :id=sandkit.api.elements.interactionstructure

```ts
sandkit.api.elements.InteractionStructure = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L106)

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

#### InteractionEntity :id=sandkit.api.elements.interactionentity

```ts
sandkit.api.elements.InteractionEntity = object
```

Defined in: [sandkit/api/elements.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L113)

Interaction that affects specific entities.

##### Properties

###### kind

```ts
kind: "entity"
```

Defined in: [sandkit/api/elements.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L114)

###### entities

```ts
entities: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L116)

Entity type ids referenced by the interaction.

***

#### InteractionFlammable :id=sandkit.api.elements.interactionflammable

```ts
sandkit.api.elements.InteractionFlammable = object
```

Defined in: [sandkit/api/elements.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L120)

Interaction that marks the element as flammable.

##### Properties

###### kind

```ts
kind: "flammable"
```

Defined in: [sandkit/api/elements.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L120)

***

#### InteractionMeltable :id=sandkit.api.elements.interactionmeltable

```ts
sandkit.api.elements.InteractionMeltable = object
```

Defined in: [sandkit/api/elements.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L122)

Interaction that marks the element as meltable.

##### Properties

###### kind

```ts
kind: "meltable"
```

Defined in: [sandkit/api/elements.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L122)

***

#### InteractionFreezable :id=sandkit.api.elements.interactionfreezable

```ts
sandkit.api.elements.InteractionFreezable = object
```

Defined in: [sandkit/api/elements.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L124)

Interaction that marks the element as freezable.

##### Properties

###### kind

```ts
kind: "freezable"
```

Defined in: [sandkit/api/elements.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L124)

***

#### InteractionCustom :id=sandkit.api.elements.interactioncustom

```ts
sandkit.api.elements.InteractionCustom = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L126)

Interaction handled by custom mod logic and tooltip text.

##### Type Declaration

###### kind

```ts
kind: "custom"
```

***

#### Interaction :id=sandkit.api.elements.interaction

```ts
sandkit.api.elements.Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

Defined in: [sandkit/api/elements.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L129)

Union of element interaction kinds for tool and structure logic.

***

#### ElementType :id=sandkit.api.elements.elementtype

```ts
sandkit.api.elements.ElementType = ElementType | TaggedNumber<"elementType">
```

Defined in: [shared/api/elements.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L20)

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; [getTypeById](#gettypebyid) returns a tagged handle.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ElementId :id=sandkit.api.elements.elementid

```ts
sandkit.api.elements.ElementId = LooseString<never>
```

Defined in: [shared/api/elements.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L27)

Mod or built-in element string id.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ElementRef :id=sandkit.api.elements.elementref

```ts
sandkit.api.elements.ElementRef = ElementType | ElementId
```

Defined in: [shared/api/elements.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L34)

Type handle or string id accepted by lookup helpers.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ElementDefinition :id=sandkit.api.elements.elementdefinition

```ts
sandkit.api.elements.ElementDefinition = object
```

Defined in: [shared/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L57)

Mod-registered element definition snapshot.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Properties

###### id

```ts
id: string
```

Defined in: [shared/api/elements.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L58)

###### nameKey

```ts
nameKey: string
```

Defined in: [shared/api/elements.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L59)

###### defaultDataFields?

```ts
optional defaultDataFields?: object
```

Defined in: [shared/api/elements.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L60)

###### Index Signature

\[`key`: `string`\]: `number`

###### colors

```ts
colors: object
```

Defined in: [shared/api/elements.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L61)

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

Defined in: [shared/api/elements.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L70)

###### matterType

```ts
matterType: MatterType
```

Defined in: [shared/api/elements.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L71)

###### metaColor?

```ts
optional metaColor?: number
```

Defined in: [shared/api/elements.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L73)

UI/meta color as 0xRRGGBB.

###### isGrabbable?

```ts
optional isGrabbable?: boolean
```

Defined in: [shared/api/elements.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L75)

When true, the grabber can pick up this element.

###### isTransportable?

```ts
optional isTransportable?: boolean
```

Defined in: [shared/api/elements.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L77)

When true, conveyors can move this element.

###### getExtraProps?

```ts
optional getExtraProps?: () => object
```

Defined in: [shared/api/elements.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L78)

###### Returns

`object`

###### data

```ts
data: Record<PropertyKey, any>
```

### Functions <!-- {docsify-ignore} -->

#### getRegisteredTypes() :id=sandkit.api.elements.getregisteredtypes

```ts
sandkit.api.elements.getRegisteredTypes(): ElementType[]
```

Defined in: [sandkit/api/elements.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L143)

Returns all registered element type ids.

##### Returns

[`ElementType`](#elementtype)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### register() :id=sandkit.api.elements.register

```ts
sandkit.api.elements.register(definition: ElementDefinition): object
```

Defined in: [sandkit/api/elements.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L153)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### updateDefinition() :id=sandkit.api.elements.updatedefinition

```ts
sandkit.api.elements.updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

Defined in: [sandkit/api/elements.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L170)

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

##### Example

```ts
api.elements.updateDefinition("exampleElement", {
  showInFilterPicker: false,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### addInteractionInfo() :id=sandkit.api.elements.addinteractioninfo

```ts
sandkit.api.elements.addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

Defined in: [sandkit/api/elements.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L183)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getNameByType() :id=sandkit.api.elements.getnamebytype

```ts
sandkit.api.elements.getNameByType(elementType: ElementType): string
```

Defined in: [sandkit/api/elements.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L192)

Returns the display name for an element type.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

`string`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### findFreeCellInStructure() :id=sandkit.api.elements.findfreecellinstructure

```ts
sandkit.api.elements.findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null
```

Defined in: [sandkit/api/elements.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L204)

Finds a free cell inside a structure footprint, or null.

##### Parameters

###### structureCellX

`number`

Structure anchor cell column.

###### structureCellY

`number`

Structure anchor cell row.

###### structureSizeCells

`number`

Structure footprint size in cells.

##### Returns

[`Vector2`](api/shared.player.md#vector2) \| `null`

Cell coordinates of a free cell, or null when none.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### createAtCell() :id=sandkit.api.elements.createatcell

```ts
sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L234)

Create an element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### Examples

**Main entry**

```ts
api.elements.createAtCell(cellX, cellY, "water", {
  durationTicks: 60,
});
```

**options.durationTicks**

```ts
api.elements.createAtCell(cellX, cellY, "steam", {
  durationTicks: 120,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~createAtCellWhenIdle()~~ :id=sandkit.api.elements.createatcellwhenidle

```ts
sandkit.api.elements.createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:243](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L243)

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### Deprecated

Use [createAtCell](#createatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### replaceAtCell() :id=sandkit.api.elements.replaceatcell

```ts
sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:257](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L257)

Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~replaceAtCellWhenIdle()~~ :id=sandkit.api.elements.replaceatcellwhenidle

```ts
sandkit.api.elements.replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L266)

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### removeAtCell() :id=sandkit.api.elements.removeatcell

```ts
sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L279)

Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~removeAtCellWhenIdle()~~ :id=sandkit.api.elements.removeatcellwhenidle

```ts
sandkit.api.elements.removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:288](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L288)

##### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

##### Returns

`void`

##### Deprecated

Use [removeAtCell](#removeatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### teleportBetweenCells() :id=sandkit.api.elements.teleportbetweencells

```ts
sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L302)

Move an element between cells. Main-entry writes are deferred; reads see the old grid.

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

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~teleportBetweenCellsWhenIdle()~~ :id=sandkit.api.elements.teleportbetweencellswhenidle

```ts
sandkit.api.elements.teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L314)

##### Parameters

###### fromCellX

`number`

###### fromCellY

`number`

###### toCellX

`number`

###### toCellY

`number`

##### Returns

`void`

##### Deprecated

Use [teleportBetweenCells](#teleportbetweencells) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setVelocityAtCell() :id=sandkit.api.elements.setvelocityatcell

```ts
sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L335)

Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### Example

```ts
api.elements.setVelocityAtCell(cellX, cellY, { x: 0, y: -120 });
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~setVelocityAtCellWhenIdle()~~ :id=sandkit.api.elements.setvelocityatcellwhenidle

```ts
sandkit.api.elements.setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:342](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L342)

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### Deprecated

Use [setVelocityAtCell](#setvelocityatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### addParticleVelocityAtCell() :id=sandkit.api.elements.addparticlevelocityatcell

```ts
sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L364)

Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

##### Returns

`void`

##### Example

```ts
api.elements.addParticleVelocityAtCell(
  cellX,
  cellY,
  { x: 4, y: -8 },
  120,
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~addParticleVelocityAtCellWhenIdle()~~ :id=sandkit.api.elements.addparticlevelocityatcellwhenidle

```ts
sandkit.api.elements.addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:373](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L373)

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

##### Returns

`void`

##### Deprecated

Use [addParticleVelocityAtCell](#addparticlevelocityatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### convertToParticleAtCell() :id=sandkit.api.elements.converttoparticleatcell

```ts
sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L395)

Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### Example

```ts
api.elements.convertToParticleAtCell(
  cellX,
  cellY,
  { x: 0, y: -120 },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~convertToParticleAtCellWhenIdle()~~ :id=sandkit.api.elements.converttoparticleatcellwhenidle

```ts
sandkit.api.elements.convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:402](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L402)

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### Deprecated

Use [convertToParticleAtCell](#converttoparticleatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### convertFromParticleAtCell() :id=sandkit.api.elements.convertfromparticleatcell

```ts
sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:414](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L414)

Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~convertFromParticleAtCellWhenIdle()~~ :id=sandkit.api.elements.convertfromparticleatcellwhenidle

```ts
sandkit.api.elements.convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:421](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L421)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### Deprecated

Use [convertFromParticleAtCell](#convertfromparticleatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setDataFieldAtCell() :id=sandkit.api.elements.setdatafieldatcell

```ts
sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:433](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L433)

Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~setDataFieldAtCellWhenIdle()~~ :id=sandkit.api.elements.setdatafieldatcellwhenidle

```ts
sandkit.api.elements.setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:442](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L442)

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

##### Returns

`void`

##### Deprecated

Use [setDataFieldAtCell](#setdatafieldatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### refreshColorAtCell() :id=sandkit.api.elements.refreshcoloratcell

```ts
sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:454](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L454)

Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~refreshColorAtCellWhenIdle()~~ :id=sandkit.api.elements.refreshcoloratcellwhenidle

```ts
sandkit.api.elements.refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:461](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L461)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### Deprecated

Use [refreshColorAtCell](#refreshcoloratcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setPhysicsAtCell() :id=sandkit.api.elements.setphysicsatcell

```ts
sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:472](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L472)

Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~setPhysicsAtCellWhenIdle()~~ :id=sandkit.api.elements.setphysicsatcellwhenidle

```ts
sandkit.api.elements.setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:479](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L479)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### Deprecated

Use [setPhysicsAtCell](#setphysicsatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setDurationAtCell() :id=sandkit.api.elements.setdurationatcell

```ts
sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:503](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L503)

Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `number`, `object`\]

##### Returns

`void`

##### Example

**Main entry**

```ts
api.elements.setDurationAtCell(
  cellX,
  cellY,
  120,
  { updateMax: true },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~setDurationAtCellWhenIdle()~~ :id=sandkit.api.elements.setdurationatcellwhenidle

```ts
sandkit.api.elements.setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:512](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L512)

##### Parameters

###### args

...\[`number`, `number`, `number`, `object`\]

##### Returns

`void`

##### Deprecated

Use [setDurationAtCell](#setdurationatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### getIdByType() :id=sandkit.api.elements.getidbytype

```ts
sandkit.api.elements.getIdByType(elementType: ElementType): string & object
```

Defined in: [shared/api/elements.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L137)

Return the mod string id for a numeric element type.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

`string` & `object`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getTypeById() :id=sandkit.api.elements.gettypebyid

```ts
sandkit.api.elements.getTypeById(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L146)

Resolve a mod element string id to a type handle.

##### Parameters

###### elementId

`string` & `object`

Mod-registered element id.

##### Returns

[`ElementType`](#elementtype)

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~getTypeFromId()~~ :id=sandkit.api.elements.gettypefromid

```ts
sandkit.api.elements.getTypeFromId(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L153)

##### Parameters

###### elementId

`string` & `object`

##### Returns

[`ElementType`](#elementtype)

##### Deprecated

Use [getTypeById](#gettypebyid) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDefinitionByType() :id=sandkit.api.elements.getdefinitionbytype

```ts
sandkit.api.elements.getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

Defined in: [shared/api/elements.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L162)

Look up the definition for a type handle.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

[`ElementDefinition`](#elementdefinition) \| `undefined`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getTypeAtCell() :id=sandkit.api.elements.gettypeatcell

```ts
sandkit.api.elements.getTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L172)

Return the raw element type at a cell (may differ from resolved type).

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`ElementType`](#elementtype) \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getResolvedTypeAtCell() :id=sandkit.api.elements.getresolvedtypeatcell

```ts
sandkit.api.elements.getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L182)

Return the resolved element type after overlays and particles.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`ElementType`](#elementtype) \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getResolvedTypeFromCellId() :id=sandkit.api.elements.getresolvedtypefromcellid

```ts
sandkit.api.elements.getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

Defined in: [shared/api/elements.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L191)

Return the resolved element type from a packed cell id.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

##### Returns

[`ElementType`](#elementtype) \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getInfoAtCell() :id=sandkit.api.elements.getinfoatcell

```ts
sandkit.api.elements.getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

Defined in: [shared/api/elements.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L201)

Return element index, particle flag, and ids at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

\{ `elementType`: [`ElementType`](#elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md#cellid); `elementIndex`: `number`; \} \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getMatterTypeAtCell() :id=sandkit.api.elements.getmattertypeatcell

```ts
sandkit.api.elements.getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

Defined in: [shared/api/elements.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L213)

Return the matter category at a cell, or null when empty.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`MatterType`](api/sandkit.api.elements.MatterType.md) \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isTypeAtCell() :id=sandkit.api.elements.istypeatcell

```ts
sandkit.api.elements.isTypeAtCell(...args: number, number, [ElementRef]): boolean
```

Defined in: [shared/api/elements.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L224)

Return true when the cell holds the given element type or id.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref)\]

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isFreeFallingAtCell() :id=sandkit.api.elements.isfreefallingatcell

```ts
sandkit.api.elements.isFreeFallingAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/elements.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L234)

Return true when the element at the cell is falling.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getVelocityAtCell() :id=sandkit.api.elements.getvelocityatcell

```ts
sandkit.api.elements.getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

Defined in: [shared/api/elements.d.ts:244](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L244)

Return per-cell velocity for moving elements.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

\{ `x`: `number`; `y`: `number`; \} \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDataFieldAtCell() :id=sandkit.api.elements.getdatafieldatcell

```ts
sandkit.api.elements.getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

Defined in: [shared/api/elements.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L255)

Read element data field 1–4 at a cell.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`\]

##### Returns

`number` \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.energy

`sandkit.api.energy` — structure energy networks, storage, and consumption.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### EnergyRegisterTypeOptions :id=sandkit.api.energy.energyregistertypeoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyRegisterTypeOptions</code></p>
Defined in: [sandkit/api/energy.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L75)

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

Defined in: [sandkit/api/energy.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L77)

Maximum stored energy for storage nodes.

###### energyType?

```ts
optional energyType?: string
```

Defined in: [sandkit/api/energy.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L79)

Energy type id when multiple networks exist.

***

#### EnergyAddOptions :id=sandkit.api.energy.energyaddoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyAddOptions</code></p>
Defined in: [sandkit/api/energy.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L84)

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

Defined in: [sandkit/api/energy.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L86)

Energy type id when multiple networks exist.

### Functions <!-- {docsify-ignore} -->

#### registerType() :id=sandkit.api.energy.registertype

```ts
sandkit.api.energy.registerType(structureId: string, type: "storage" | "conductor", options?: EnergyRegisterTypeOptions): void
```

Defined in: [sandkit/api/energy.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L14)

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

#### addAtCell() :id=sandkit.api.energy.addatcell

```ts
sandkit.api.energy.addAtCell(...args: number, number, number, [EnergyAddOptions]): number
```

Defined in: [sandkit/api/energy.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L26)

Adds energy at a cell. Returns the amount actually added.

##### Parameters

###### args

...\[`number`, `number`, `number`, [`EnergyAddOptions`](#energyaddoptions)\]

##### Returns

`number`

***

#### consume() :id=sandkit.api.energy.consume

```ts
sandkit.api.energy.consume(amount: number, options?: object): number
```

Defined in: [sandkit/api/energy.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L34)

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

#### consumeExcludingNetworkAtCell() :id=sandkit.api.energy.consumeexcludingnetworkatcell

```ts
sandkit.api.energy.consumeExcludingNetworkAtCell(...args: [number, number, number]): number
```

Defined in: [sandkit/api/energy.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L46)

Consumes energy from networks other than the one at the cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`number`

***

#### getNetworkAtCell() :id=sandkit.api.energy.getnetworkatcell

```ts
sandkit.api.energy.getNetworkAtCell(...args: CellCoordinates): object[]
```

Defined in: [sandkit/api/energy.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L62)

Returns energy network nodes connected at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`object`[]

##### Example

```ts
const network = api.energy.getNetworkAtCell(cellX, cellY);
for (const entry of network) {
  useNetworkCell(entry.cellX, entry.cellY, entry.type);
}
```

***

#### getNetworkFreeCapacityAtCell() :id=sandkit.api.energy.getnetworkfreecapacityatcell

```ts
sandkit.api.energy.getNetworkFreeCapacityAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/energy.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L72)

Returns free storage capacity in the network at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`number`

---

## sandkit.api.entities

Entity spawn, capture, and lifecycle helpers.

Available as `sandkit.api.entities`.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### Entity :id=sandkit.api.entities.entity

<p class="smt-member-path"><code>sandkit.api.entities.Entity</code></p>
Defined in: [sandkit/api/entities.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L78)

Active entity instance in the world.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: number
```

Defined in: [sandkit/api/entities.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L79)

###### x

```ts
x: number
```

Defined in: [sandkit/api/entities.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L80)

###### y

```ts
y: number
```

Defined in: [sandkit/api/entities.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L81)

###### targetX?

```ts
optional targetX?: number
```

Defined in: [sandkit/api/entities.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L82)

###### targetY?

```ts
optional targetY?: number
```

Defined in: [sandkit/api/entities.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L83)

### Functions <!-- {docsify-ignore} -->

#### getById() :id=sandkit.api.entities.getbyid

```ts
sandkit.api.entities.getById(entityId: number): Entity | undefined
```

Defined in: [sandkit/api/entities.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L16)

Return one live entity by runtime id.

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

[`Entity`](#entity) \| `undefined`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getAllByType() :id=sandkit.api.entities.getallbytype

```ts
sandkit.api.entities.getAllByType(entityTypeId: string): Entity[]
```

Defined in: [sandkit/api/entities.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L25)

Return all live entities of one type.

##### Parameters

###### entityTypeId

`string`

Registered entity type string id.

##### Returns

[`Entity`](#entity)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### spawnAtWorld() :id=sandkit.api.entities.spawnatworld

```ts
sandkit.api.entities.spawnAtWorld(entityTypeId: string, worldX: number, worldY: number): Entity
```

Defined in: [sandkit/api/entities.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L37)

Spawn an entity at world position.

##### Parameters

###### entityTypeId

`string`

Registered entity type string id.

###### worldX

`number`

Spawn x position in world pixels.

###### worldY

`number`

Spawn y position in world pixels.

##### Returns

[`Entity`](#entity)

The spawned entity instance.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### remove() :id=sandkit.api.entities.remove

```ts
sandkit.api.entities.remove(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L46)

Remove an entity from the world.

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### launch() :id=sandkit.api.entities.launch

```ts
sandkit.api.entities.launch(entityId: number, angleRadians: number, speed?: number): void
```

Defined in: [sandkit/api/entities.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L57)

Launch an entity with angle and optional speed.

##### Parameters

###### entityId

`number`

Runtime entity id.

###### angleRadians

`number`

Launch angle in radians.

###### speed?

`number`

Optional launch speed.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### startCapture() :id=sandkit.api.entities.startcapture

```ts
sandkit.api.entities.startCapture(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L66)

Start capture for an entity (for example vacuum capture).

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### collect() :id=sandkit.api.entities.collect

```ts
sandkit.api.entities.collect(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L75)

Collect an entity (for example into inventory or storage).

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

### Interfaces <!-- {docsify-ignore} -->

#### PlayerCollisionPreparePayload :id=sandkit.api.events.playercollisionpreparepayload

<p class="smt-member-path"><code>sandkit.api.events.PlayerCollisionPreparePayload</code></p>
Defined in: [sandkit/api/events.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L177)

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

##### Properties

###### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean
```

Defined in: [sandkit/api/events.d.ts:179](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L179)

When true, terrain collision is skipped this sub-step.

###### phaseThroughStructures

```ts
phaseThroughStructures: boolean
```

Defined in: [sandkit/api/events.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L181)

When true, structure collision is skipped this sub-step.

###### maxStepCells

```ts
maxStepCells: number
```

Defined in: [sandkit/api/events.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L183)

Max cells the player can step up when blocked horizontally (1–8).

***

#### EventPayloadMap :id=sandkit.api.events.eventpayloadmap

<p class="smt-member-path"><code>sandkit.api.events.EventPayloadMap</code></p>
Defined in: [sandkit/api/events.d.ts:187](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L187)

Known event payloads. Unlisted ids still use `unknown`.

##### Properties

###### item:used

```ts
item:used: object
```

Defined in: [sandkit/api/events.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L188)

###### itemId

```ts
itemId: string
```

###### useId

```ts
useId: string
```

###### kind

```ts
kind: string
```

###### cellX

```ts
cellX: number
```

###### cellY

```ts
cellY: number
```

###### prepared

```ts
prepared: Readonly<Record<string, unknown>>
```

###### frame:render

```ts
frame:render: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L196)

###### scene:game:started

```ts
scene:game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L197)

###### ~~scene:started:game~~

```ts
scene:started:game: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L199)

###### Deprecated

Use `"scene:game:started"` instead.

###### earlyAccess:completed

```ts
earlyAccess:completed: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L200)

###### ~~earlyAccess:complete~~

```ts
earlyAccess:complete: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L202)

###### Deprecated

Use `"earlyAccess:completed"` instead.

###### terrain:destroyed

```ts
terrain:destroyed: object
```

Defined in: [sandkit/api/events.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L203)

###### cellX

```ts
cellX: number
```

###### cellY

```ts
cellY: number
```

###### cellType

```ts
cellType: number
```

###### ~~x?~~

```ts
optional x?: number
```

###### Deprecated

Use cellX instead.

###### ~~y?~~

```ts
optional y?: number
```

###### Deprecated

Use cellY instead.

###### fog:cellRevealed

```ts
fog:cellRevealed: object
```

Defined in: [sandkit/api/events.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L212)

###### cellX

```ts
cellX: number
```

###### cellY

```ts
cellY: number
```

###### ~~x?~~

```ts
optional x?: number
```

###### Deprecated

Use cellX instead.

###### ~~y?~~

```ts
optional y?: number
```

###### Deprecated

Use cellY instead.

###### upgrade:levelSelected

```ts
upgrade:levelSelected: object
```

Defined in: [sandkit/api/events.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L220)

###### itemId

```ts
itemId: string
```

###### upgradeId

```ts
upgradeId: string
```

###### level

```ts
level: number
```

###### building:placed

```ts
building:placed: object
```

Defined in: [sandkit/api/events.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L225)

###### structure

```ts
structure: Record<string, unknown>
```

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### isBatch

```ts
isBatch: boolean
```

###### isCopied

```ts
isCopied: boolean
```

###### building:removing

```ts
building:removing: object
```

Defined in: [sandkit/api/events.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L233)

Fires before `building:removed`.

###### structureId

```ts
structureId: string
```

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### byMove

```ts
byMove: boolean
```

###### building:removed

```ts
building:removed: object
```

Defined in: [sandkit/api/events.d.ts:239](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L239)

###### structureId

```ts
structureId: string
```

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### isBatch

```ts
isBatch: boolean
```

###### structures:placed

```ts
structures:placed: object
```

Defined in: [sandkit/api/events.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L245)

###### structures

```ts
structures: unknown[]
```

###### structures:removed

```ts
structures:removed: object
```

Defined in: [sandkit/api/events.d.ts:246](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L246)

###### removed

```ts
removed: unknown[]
```

###### structures?

```ts
optional structures?: unknown[]
```

###### byMove

```ts
byMove: boolean
```

###### structures:moved

```ts
structures:moved: object
```

Defined in: [sandkit/api/events.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L251)

###### moved

```ts
moved: unknown[]
```

###### failedToPlace

```ts
failedToPlace: unknown[]
```

###### game:ready

```ts
game:ready: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L255)

###### game:started

```ts
game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:256](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L256)

###### tutorial:stepChanged

```ts
tutorial:stepChanged: object
```

Defined in: [sandkit/api/events.d.ts:257](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L257)

###### step

```ts
step: unknown
```

###### tutorial:completed

```ts
tutorial:completed: object
```

Defined in: [sandkit/api/events.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L258)

###### skipped

```ts
skipped: boolean
```

###### tech:unlocked

```ts
tech:unlocked: object
```

Defined in: [sandkit/api/events.d.ts:259](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L259)

###### techId

```ts
techId: string
```

###### suppressMusic

```ts
suppressMusic: boolean
```

###### worldItem:pickedUp

```ts
worldItem:pickedUp: object
```

Defined in: [sandkit/api/events.d.ts:263](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L263)

###### worldItemId

```ts
worldItemId: number
```

###### type

```ts
type: string
```

###### resource:collected

```ts
resource:collected: object
```

Defined in: [sandkit/api/events.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L267)

###### resourceId

```ts
resourceId: string
```

###### amount

```ts
amount: number
```

###### sourceKind

```ts
sourceKind: string
```

###### cellX

```ts
cellX: number
```

###### cellY

```ts
cellY: number
```

###### player:collision:prepare

```ts
player:collision:prepare: PlayerCollisionPreparePayload
```

Defined in: [sandkit/api/events.d.ts:274](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L274)

###### player:moved

```ts
player:moved: object
```

Defined in: [sandkit/api/events.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L275)

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

#### EventId :id=sandkit.api.events.eventid

```ts
sandkit.api.events.EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [sandkit/api/events.d.ts:287](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L287)

Known event names plus any custom string id.

***

#### EventPayload :id=sandkit.api.events.eventpayload

```ts
sandkit.api.events.EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [sandkit/api/events.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L290)

Event payload type for a given event id.

##### Type Parameters

###### K

`K`

### Functions <!-- {docsify-ignore} -->

#### on() :id=sandkit.api.events.on

```ts
sandkit.api.events.on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

Defined in: [sandkit/api/events.d.ts:158](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L158)

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

##### Examples

**item:used**

```ts
const unsubscribe = api.events.on("item:used", (payload) => {
  if (payload.itemId !== "laser") return;

  spawnSparklesAtCell(payload.cellX, payload.cellY);
});
```

**frame:render**

```ts
api.events.on("frame:render", () => {
  drawOverlay();
});
```

**scene:game:started**

```ts
api.events.on("scene:game:started", () => {
  initializeGameScene();
});
```

**earlyAccess:completed**

```ts
api.events.on("earlyAccess:completed", (payload) => {
  onEarlyAccessCompleted(payload);
});
```

**terrain:destroyed**

```ts
api.events.on("terrain:destroyed", (payload) => {
  onTerrainDestroyed(payload.cellX, payload.cellY, payload.cellType);
});
```

**fog:cellRevealed**

```ts
api.events.on("fog:cellRevealed", (payload) => {
  onFogCellRevealed(payload.cellX, payload.cellY);
});
```

**upgrade:levelSelected**

```ts
api.events.on("upgrade:levelSelected", (payload) => {
  onLevelSelected(payload.itemId, payload.upgradeId, payload.level);
});
```

**building:placed**

```ts
api.events.on("building:placed", (payload) => {
  onBuildingPlaced(payload.structure, payload.x, payload.y);
});
```

**building:removing**

```ts
api.events.on("building:removing", (payload) => {
  prepareBuildingRemoval(payload.structureId, payload.x, payload.y);
});
```

**building:removed**

```ts
api.events.on("building:removed", (payload) => {
  onBuildingRemoved(payload.structureId, payload.x, payload.y);
});
```

**structures:placed**

```ts
api.events.on("structures:placed", (payload) => {
  onStructuresPlaced(payload.structures);
});
```

**structures:removed**

```ts
api.events.on("structures:removed", (payload) => {
  onStructuresRemoved(payload.removed, payload.byMove);
});
```

**structures:moved**

```ts
api.events.on("structures:moved", (payload) => {
  onStructuresMoved(payload.moved, payload.failedToPlace);
});
```

**game:ready**

```ts
api.events.on("game:ready", () => {
  initializeExample();
});
```

**game:started**

```ts
api.events.on("game:started", () => {
  startExample();
});
```

**tutorial:stepChanged**

```ts
api.events.on("tutorial:stepChanged", (payload) => {
  onTutorialStepChanged(payload.step);
});
```

**tutorial:completed**

```ts
api.events.on("tutorial:completed", (payload) => {
  onTutorialCompleted(payload.skipped);
});
```

**tech:unlocked**

```ts
api.events.on("tech:unlocked", (payload) => {
  onTechUnlocked(payload.techId, payload.suppressMusic);
});
```

**worldItem:pickedUp**

```ts
api.events.on("worldItem:pickedUp", (payload) => {
  onPickup(payload.worldItemId, payload.type);
});
```

**resource:collected**

```ts
api.events.on("resource:collected", (payload) => {
  onResourceCollected(payload.resourceId, payload.amount);
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### emit() :id=sandkit.api.events.emit

```ts
sandkit.api.events.emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

Defined in: [sandkit/api/events.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L171)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.excavation

`sandkit.api.excavation` — register custom excavation tool dig profiles.
Main thread only.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### ExcavationProfileDefinitionV1 :id=sandkit.api.excavation.excavationprofiledefinitionv1

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileDefinitionV1</code></p>
Defined in: [sandkit/api/excavation.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L50)

Excavation tool profile definition.

##### Properties

###### pattern?

```ts
optional pattern?: number[][]
```

Defined in: [sandkit/api/excavation.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L52)

Dig pattern grid; non-zero cells are removed.

###### power

```ts
power: number
```

Defined in: [sandkit/api/excavation.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L54)

Dig strength applied to matched cells. Clamped to 0–1000.

###### options?

```ts
optional options?: ExcavationProfileOptions
```

Defined in: [sandkit/api/excavation.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L56)

Optional profile-specific excavation flags.

###### terrainRules?

```ts
optional terrainRules?: readonly ExcavationTerrainRule[]
```

Defined in: [sandkit/api/excavation.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L58)

Per-terrain output and damage rules.

***

#### ExcavationProfileOptions :id=sandkit.api.excavation.excavationprofileoptions

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileOptions</code></p>
Defined in: [sandkit/api/excavation.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L62)

Options attached to an excavation profile definition.

##### Properties

###### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L63)

###### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L64)

###### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L65)

###### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L66)

###### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L67)

###### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L68)

###### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [sandkit/api/excavation.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L70)

Clamped to 0–1000 when set.

***

#### ExcavationTerrainRule :id=sandkit.api.excavation.excavationterrainrule

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationTerrainRule</code></p>
Defined in: [sandkit/api/excavation.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L74)

Terrain match rule within an excavation profile.

##### Properties

###### cellType

```ts
cellType: TerrainRef
```

Defined in: [sandkit/api/excavation.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L76)

Terrain cell type to match.

###### ~~terrainType?~~

```ts
optional terrainType?: TerrainRef
```

Defined in: [sandkit/api/excavation.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L82)

###### Deprecated

Use [cellType](#celltype) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### damage?

```ts
optional damage?: number
```

Defined in: [sandkit/api/excavation.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L84)

Damage applied when this rule matches.

###### outputElementType?

```ts
optional outputElementType?: ElementRef
```

Defined in: [sandkit/api/excavation.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L86)

Element type produced when this terrain is excavated.

### Functions <!-- {docsify-ignore} -->

#### registerProfile() :id=sandkit.api.excavation.registerprofile

```ts
sandkit.api.excavation.registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void
```

Defined in: [sandkit/api/excavation.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L47)

Registers an excavation profile by id.

##### Parameters

###### id

`string`

Unique profile id (1–128 chars: letters, numbers, `.`, `_`, `:`, `-`).

###### definition

[`ExcavationProfileDefinitionV1`](#excavationprofiledefinitionv1)

Pattern, power, terrain rules, and profile options.

##### Returns

`void`

##### Example

```ts
const profileId = "example:voidGun";
const duneType = api.terrains.getTypeById("dune");
const sandType = api.elements.getTypeById("sand");

api.excavation.registerProfile(profileId, {
  power: 8,
  terrainRules: [
    {
      cellType: duneType,
      outputElementType: sandType,
    },
  ],
});

api.hooks.modify("excavation:prepare", (args) => {
  if (
    args.sourceKind !== "projectile"
    || args.sourceId !== "implosionGun"
  ) {
    return;
  }

  args.profileId = profileId;
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.factory

Factory progression level and process counters.

Available as `sandkit.api.factory`.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Type Aliases <!-- {docsify-ignore} -->

#### FactoryProcessId :id=sandkit.api.factory.factoryprocessid

```ts
sandkit.api.factory.FactoryProcessId = "shakeWetSand" | "pressBurntResidue" | "growFlowers" | "condenseFlorin"
```

Defined in: [sandkit/api/factory.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L35)

Built-in factory process identifiers.

### Functions <!-- {docsify-ignore} -->

#### getLevel() :id=sandkit.api.factory.getlevel

```ts
sandkit.api.factory.getLevel(): number
```

Defined in: [sandkit/api/factory.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L14)

Return the current factory level.

##### Returns

`number`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getProcessCount() :id=sandkit.api.factory.getprocesscount

```ts
sandkit.api.factory.getProcessCount(processId: FactoryProcessId): number
```

Defined in: [sandkit/api/factory.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L23)

Return completed count for a factory process.

##### Parameters

###### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

##### Returns

`number`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getProcessRate() :id=sandkit.api.factory.getprocessrate

```ts
sandkit.api.factory.getProcessRate(processId: FactoryProcessId): number
```

Defined in: [sandkit/api/factory.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L32)

Return completion rate for a factory process.

##### Parameters

###### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

##### Returns

`number`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.fire

`sandkit.api.fire` — ignite and burn elements at grid cells.
Main thread only.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Functions <!-- {docsify-ignore} -->

#### canBurnElementAtCell() :id=sandkit.api.fire.canburnelementatcell

```ts
sandkit.api.fire.canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/fire.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L18)

Returns true when the element at the cell can burn.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### burnElementAtCell() :id=sandkit.api.fire.burnelementatcell

```ts
sandkit.api.fire.burnElementAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L28)

Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~burnElementAtCellWhenIdle()~~ :id=sandkit.api.fire.burnelementatcellwhenidle

```ts
sandkit.api.fire.burnElementAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L35)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### Deprecated

Use [burnElementAtCell](#burnelementatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

---

## sandkit.api.game

Game session start helpers.

Available as `sandkit.api.game`.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### GameStartOptions :id=sandkit.api.game.gamestartoptions

<p class="smt-member-path"><code>sandkit.api.game.GameStartOptions</code></p>
Defined in: [sandkit/api/game.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L24)

Options for [start](#start).

##### Properties

###### skipIntro?

```ts
optional skipIntro?: boolean
```

Defined in: [sandkit/api/game.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L26)

When true, skip the intro sequence.

### Functions <!-- {docsify-ignore} -->

#### start() :id=sandkit.api.game.start

```ts
sandkit.api.game.start(options?: GameStartOptions): void
```

Defined in: [sandkit/api/game.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L21)

Start or restart the game session.

##### Parameters

###### options?

[`GameStartOptions`](#gamestartoptions)

Optional session start flags.

##### Returns

`void`

##### Example

```ts
api.game.start({ skipIntro: true });
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.gameConfig

`sandkit.api.gameConfig` — read merged game configuration values.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### get() :id=sandkit.api.gameConfig.get

```ts
sandkit.api.gameConfig.get(key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/gameconfig.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/gameconfig.d.ts#L12)

Returns a config value by key, or undefined when missing.

##### Parameters

###### key

`string`

Game config key (merged defaults and overrides).

##### Returns

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1) \| `undefined`

***

#### getAll() :id=sandkit.api.gameConfig.getall

```ts
sandkit.api.gameConfig.getAll(): JsonObjectV1
```

Defined in: [sandkit/api/gameconfig.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/gameconfig.d.ts#L14)

Returns the full config object.

##### Returns

[`JsonObjectV1`](api/shared.jsonvalue.md#jsonobjectv1)

---

## sandkit.api.grid

`sandkit.api.grid` — grid cell queries, deferred mutations, and iteration.

Main thread only.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### GridMutationWriter :id=sandkit.api.grid.gridmutationwriter

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriter</code></p>
Defined in: [sandkit/api/grid.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L166)

Deferred element and terrain mutations passed to [mutate](#mutate).

##### Properties

###### elements

```ts
elements: GridMutationWriterElements
```

Defined in: [sandkit/api/grid.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L168)

Element cell mutations inside a [mutate](#mutate) callback.

###### terrains

```ts
terrains: GridMutationWriterTerrains
```

Defined in: [sandkit/api/grid.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L170)

Terrain cell mutations inside a [mutate](#mutate) callback.

***

#### GridMutationWriterElements :id=sandkit.api.grid.gridmutationwriterelements

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterElements</code></p>
Defined in: [sandkit/api/grid.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L174)

Element writers available on [GridMutationWriter.elements](#elements).

##### Methods

###### createAtCell()

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L185)

Create an element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

###### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L203)

Replace the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

###### removeAtCell()

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L220)

Remove the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md#elementremovaloptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### GridMutationWriterTerrains :id=sandkit.api.grid.gridmutationwriterterrains

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterTerrains</code></p>
Defined in: [sandkit/api/grid.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L224)

Terrain writers available on [GridMutationWriter.terrains](#terrains).

##### Methods

###### createAtCell()

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L235)

Create terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

###### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L253)

Replace terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

###### removeAtCell()

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L270)

Remove terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### GridDimensions :id=sandkit.api.grid.griddimensions

<p class="smt-member-path"><code>sandkit.api.grid.GridDimensions</code></p>
Defined in: [shared/api/grid.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L80)

World grid width and height in cells.

##### Properties

###### widthCells

```ts
widthCells: number
```

Defined in: [shared/api/grid.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L82)

Grid width in cells.

###### heightCells

```ts
heightCells: number
```

Defined in: [shared/api/grid.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L84)

Grid height in cells.

***

#### ExcavateOptions :id=sandkit.api.grid.excavateoptions

<p class="smt-member-path"><code>sandkit.api.grid.ExcavateOptions</code></p>
Defined in: [shared/api/grid.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L88)

Flags that control how [excavateAtCell](#excavateatcell) resolves damage and drops.

##### Properties

###### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [shared/api/grid.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L90)

Treat the dig as gun fire for terrain resistance checks.

###### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [shared/api/grid.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L92)

Treat the dig as rocket or dynamite explosion damage.

###### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [shared/api/grid.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L94)

Treat the dig as drill damage.

###### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [shared/api/grid.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L96)

Use outVelocity literally instead of deriving ejection speed.

###### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [shared/api/grid.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L98)

Allow removing terrain marked non-destructible.

###### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [shared/api/grid.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L100)

Force-remove all matched cells regardless of normal rules.

###### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [shared/api/grid.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L102)

Extra drill-tier damage when [fromDrill](#fromdrill) is true. Clamped to 0–1000.

### Type Aliases <!-- {docsify-ignore} -->

#### CellId :id=sandkit.api.grid.cellid

```ts
sandkit.api.grid.CellId = CellId
```

Defined in: [shared/api/grid.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L77)

Packed cell id from [getCellIdAtCell](#getcellidatcell).

### Functions <!-- {docsify-ignore} -->

#### mutate() :id=sandkit.api.grid.mutate

```ts
sandkit.api.grid.mutate(callback: (writer: GridMutationWriter) => void): void
```

Defined in: [sandkit/api/grid.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L91)

Run deferred grid mutations on the main thread. Reads see the old grid until
mutations apply.

##### Parameters

###### callback

(`writer`: [`GridMutationWriter`](#gridmutationwriter)) => `void`

Receives a writer for element and terrain cell mutations.

##### Returns

`void`

##### Examples

**Deferred main-thread mutations**

```ts
api.grid.mutate((writer) => {
  if (api.terrains.isTypeAtCell(cellX, cellY, "ice")) {
    writer.elements.replaceAtCell(cellX, cellY, "water");
  }
});
```

```ts
const waterType = api.elements.getTypeById("water");

api.events.on("item:used", ({ itemId, cellX, cellY }) => {
  if (itemId !== "laser") return;

  api.grid.mutate((writer) => {
    if (!api.terrains.isTypeAtCell(cellX, cellY, "ice")) return;
    writer.elements.replaceAtCell(cellX, cellY, waterType);
  });
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### revealFogAtCell() :id=sandkit.api.grid.revealfogatcell

```ts
sandkit.api.grid.revealFogAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/grid.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L101)

Reveal fog of war at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### redrawAroundCell() :id=sandkit.api.grid.redrawaroundcell

```ts
sandkit.api.grid.redrawAroundCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/grid.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L112)

Request redraw around a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### forEachCellInCircle() :id=sandkit.api.grid.foreachcellincircle

```ts
sandkit.api.grid.forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) => void): void
```

Defined in: [sandkit/api/grid.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L124)

Calls the callback for each cell inside a circle.

##### Parameters

###### centerCellX

`number`

Circle center cell column.

###### centerCellY

`number`

Circle center cell row.

###### radiusCells

`number`

Circle radius in cells.

###### callback

(...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`

Invoked for each cell with `(cellX, cellY)`.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### forEachCellInRectangle() :id=sandkit.api.grid.foreachcellinrectangle

```ts
sandkit.api.grid.forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L142)

Calls the callback for each cell in a rectangle.

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~forEachCellInRect()~~ :id=sandkit.api.grid.foreachcellinrect

```ts
sandkit.api.grid.forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L156)

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

##### Returns

`void`

##### Deprecated

Use [forEachCellInRectangle](#foreachcellinrectangle) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getCellIdAtCell() :id=sandkit.api.grid.getcellidatcell

```ts
sandkit.api.grid.getCellIdAtCell(...args: CellCoordinates): CellId
```

Defined in: [shared/api/grid.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L22)

Return the packed cell id at grid coordinates.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id for the cell.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isCellEmptyAtCell() :id=sandkit.api.grid.iscellemptyatcell

```ts
sandkit.api.grid.isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/grid.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L32)

Return true when the cell has no element or terrain content.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isTerrainAtCell() :id=sandkit.api.grid.isterrainatcell

```ts
sandkit.api.grid.isTerrainAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/grid.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L42)

Return true when the cell holds terrain (not an element).

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### reportActivityAtCell() :id=sandkit.api.grid.reportactivityatcell

```ts
sandkit.api.grid.reportActivityAtCell(...args: CellCoordinates): void
```

Defined in: [shared/api/grid.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L52)

Mark the cell active for simulation this tick.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### excavateAtCell() :id=sandkit.api.grid.excavateatcell

```ts
sandkit.api.grid.excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

Defined in: [shared/api/grid.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L65)

Apply excavation damage and eject velocity at a cell.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](#excavateoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDimensions() :id=sandkit.api.grid.getdimensions

```ts
sandkit.api.grid.getDimensions(): GridDimensions
```

Defined in: [shared/api/grid.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L74)

Return the world grid size in cells.

##### Returns

[`GridDimensions`](#griddimensions)

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.hooks

`sandkit.api.hooks` — intercept and modify internal game hook points.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### HookContext :id=sandkit.api.hooks.hookcontext

<p class="smt-member-path"><code>sandkit.api.hooks.HookContext</code></p>
Defined in: [sandkit/api/hooks.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L397)

Context passed to intercept hook callbacks.

##### Properties

###### cancelled

```ts
cancelled: boolean
```

Defined in: [sandkit/api/hooks.d.ts:401](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L401)

True after [cancel](#cancel) was called on this context.

##### Methods

###### cancel()

```ts
cancel(): void
```

Defined in: [sandkit/api/hooks.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L399)

When called, the intercepted action is skipped.

###### Returns

`void`

***

#### HookOptions :id=sandkit.api.hooks.hookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.HookOptions</code></p>
Defined in: [sandkit/api/hooks.d.ts:405](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L405)

Options shared by intercept and modify hooks.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### priority?

```ts
optional priority?: number
```

Defined in: [sandkit/api/hooks.d.ts:407](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L407)

Run this hook before others with lower priority.

***

#### InterceptHookMap :id=sandkit.api.hooks.intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap</code></p>
Defined in: [sandkit/api/hooks.d.ts:497](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L497)

Intercept hook argument shapes keyed by hook id.

##### Properties

###### item:use

```ts
item:use: object
```

Defined in: [sandkit/api/hooks.d.ts:498](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L498)

###### itemId

```ts
itemId: string
```

###### useId

```ts
useId: string
```

###### kind

```ts
kind: "instant" | "sustained" | "chargeThenFire"
```

###### baseline

```ts
baseline: Readonly<Record<string, unknown>>
```

###### prepared

```ts
prepared: Record<string, unknown>
```

###### teleport:effect:create

```ts
teleport:effect:create: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:505](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L505)

###### ~~teleport:effect~~

```ts
teleport:effect: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:507](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L507)

###### Deprecated

Use `"teleport:effect:create"` instead.

###### action:start

```ts
action:start: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:508](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L508)

###### Type Declaration

###### action?

```ts
optional action?: object & Record<string, unknown>
```

###### Type Declaration

###### id?

```ts
optional id?: string
```

###### ~~action:intercept~~

```ts
action:intercept: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:513](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L513)

###### Type Declaration

###### ~~action?~~

```ts
optional action?: object & Record<string, unknown>
```

###### Type Declaration

###### ~~id?~~

```ts
optional id?: string
```

###### Deprecated

Use `"action:start"` instead.

###### input:keyDown

```ts
input:keyDown: object
```

Defined in: [sandkit/api/hooks.d.ts:514](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L514)

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

###### ~~input:keydown~~

```ts
input:keydown: object
```

Defined in: [sandkit/api/hooks.d.ts:516](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L516)

###### ~~key?~~

```ts
optional key?: string
```

###### ~~code?~~

```ts
optional code?: string
```

###### ~~event?~~

```ts
optional event?: Event
```

###### Deprecated

Use `"input:keyDown"` instead.

###### input:keyUp

```ts
input:keyUp: object
```

Defined in: [sandkit/api/hooks.d.ts:517](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L517)

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

###### ~~input:keyup~~

```ts
input:keyup: object
```

Defined in: [sandkit/api/hooks.d.ts:519](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L519)

###### ~~key?~~

```ts
optional key?: string
```

###### ~~code?~~

```ts
optional code?: string
```

###### ~~event?~~

```ts
optional event?: Event
```

###### Deprecated

Use `"input:keyUp"` instead.

###### placePoints:suppress

```ts
placePoints:suppress: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:520](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L520)

###### Type Declaration

###### type?

```ts
optional type?: string
```

###### ~~placePoints:isSuppressed~~

```ts
placePoints:isSuppressed: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:522](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L522)

###### Type Declaration

###### ~~type?~~

```ts
optional type?: string
```

###### Deprecated

Use `"placePoints:suppress"` instead.

###### placePoints:directionalArrows:suppress

```ts
placePoints:directionalArrows:suppress: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:523](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L523)

###### Type Declaration

###### type?

```ts
optional type?: string
```

###### ~~placePoints:directionalArrows:isSuppressed~~

```ts
placePoints:directionalArrows:isSuppressed: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:525](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L525)

###### Type Declaration

###### ~~type?~~

```ts
optional type?: string
```

###### Deprecated

Use `"placePoints:directionalArrows:suppress"` instead.

###### entity:update

```ts
entity:update: object
```

Defined in: [sandkit/api/hooks.d.ts:526](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L526)

###### entityTypeId

```ts
entityTypeId: string
```

###### entity

```ts
entity: Record<string, unknown>
```

###### deltaTimeSeconds

```ts
deltaTimeSeconds: number
```

###### phase

```ts
phase: "normal" | "capturing" | "launching"
```

###### isVisible

```ts
isVisible: boolean
```

###### playerWorldX

```ts
playerWorldX: number
```

###### playerWorldY

```ts
playerWorldY: number
```

###### worldMinX

```ts
worldMinX: number
```

###### worldMinY

```ts
worldMinY: number
```

###### worldMaxX

```ts
worldMaxX: number
```

###### worldMaxY

```ts
worldMaxY: number
```

###### cellSize

```ts
cellSize: number
```

###### timeSeconds

```ts
timeSeconds: number
```

###### building:place

```ts
building:place: object
```

Defined in: [sandkit/api/hooks.d.ts:541](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L541)

###### structureId

```ts
structureId: string
```

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### data?

```ts
optional data?: Record<string, unknown>
```

###### building:clearShape

```ts
building:clearShape: object
```

Defined in: [sandkit/api/hooks.d.ts:547](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L547)

###### structure

```ts
structure: Record<string, unknown>
```

###### input:scroll

```ts
input:scroll: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:548](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L548)

###### Type Declaration

###### deltaY

```ts
deltaY: number
```

###### input:boostDown

```ts
input:boostDown: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:549](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L549)

###### ~~input:boost-down~~

```ts
input:boost-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:551](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L551)

###### Deprecated

Use `"input:boostDown"` instead.

###### input:descendDown

```ts
input:descendDown: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:552](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L552)

###### ~~input:descend-down~~

```ts
input:descend-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:554](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L554)

###### Deprecated

Use `"input:descendDown"` instead.

###### input:escape

```ts
input:escape: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:555](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L555)

###### interactable:suppressHover

```ts
interactable:suppressHover: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:556](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L556)

###### Type Declaration

###### type?

```ts
optional type?: string
```

###### structure?

```ts
optional structure?: Record<string, unknown>
```

###### fire:element:ignite

```ts
fire:element:ignite: object
```

Defined in: [sandkit/api/hooks.d.ts:560](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L560)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### elementType

```ts
elementType: number
```

###### projectile:fire:overStructure

```ts
projectile:fire:overStructure: object
```

Defined in: [sandkit/api/hooks.d.ts:561](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L561)

###### projectile

```ts
projectile: Record<string, unknown>
```

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### projectile:hit

```ts
projectile:hit: object
```

Defined in: [sandkit/api/hooks.d.ts:562](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L562)

###### projectile

```ts
projectile: Record<string, unknown>
```

###### travelResult

```ts
travelResult: Record<string, unknown>
```

###### player:position:commit

```ts
player:position:commit: object
```

Defined in: [sandkit/api/hooks.d.ts:566](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L566)

###### previousWorldX

```ts
previousWorldX: number
```

###### previousWorldY

```ts
previousWorldY: number
```

###### proposedWorldX

```ts
proposedWorldX: number
```

###### proposedWorldY

```ts
proposedWorldY: number
```

###### velocityX

```ts
velocityX: number
```

###### velocityY

```ts
velocityY: number
```

###### progression:purchase

```ts
progression:purchase: object
```

Defined in: [sandkit/api/hooks.d.ts:574](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L574)

###### domain

```ts
domain: "tech" | "upgrade"
```

###### id

```ts
id: string
```

###### itemId?

```ts
optional itemId?: string
```

###### costs

```ts
costs: Record<string, unknown>
```

***

#### ModifierHookMap :id=sandkit.api.hooks.modifierhookmap

<p class="smt-member-path"><code>sandkit.api.hooks.ModifierHookMap</code></p>
Defined in: [sandkit/api/hooks.d.ts:583](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L583)

Modify hook argument shapes keyed by hook id.

##### Properties

###### excavation:prepare

```ts
excavation:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:584](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L584)

###### sourceId

```ts
sourceId: string
```

###### sourceKind

```ts
sourceKind: "structure" | "tool" | "projectile" | "drone"
```

###### originCellX

```ts
originCellX: number
```

###### originCellY

```ts
originCellY: number
```

###### consumedVoid

```ts
consumedVoid: boolean
```

###### profileId

```ts
profileId: string
```

###### patternDiameterCells

```ts
patternDiameterCells: number
```

###### drillTierDamage

```ts
drillTierDamage: number
```

###### locator:scan:prepare

```ts
locator:scan:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:594](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L594)

###### originWorldX

```ts
originWorldX: number
```

###### originWorldY

```ts
originWorldY: number
```

###### hasTarget

```ts
hasTarget: boolean
```

###### targetCellX

```ts
targetCellX: number
```

###### targetCellY

```ts
targetCellY: number
```

###### outerTint

```ts
outerTint: [number, number, number]
```

###### innerTint

```ts
innerTint: [number, number, number]
```

###### noTargetToast

```ts
noTargetToast: string
```

###### noTargetToastKey

```ts
noTargetToastKey: string
```

###### triangulationLensOverride

```ts
triangulationLensOverride: boolean | null
```

###### vacuum:prepare

```ts
vacuum:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:606](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L606)

###### nozzleCellX

```ts
nozzleCellX: number
```

###### nozzleCellY

```ts
nozzleCellY: number
```

###### targetCellX

```ts
targetCellX: number
```

###### targetCellY

```ts
targetCellY: number
```

###### pattern

```ts
pattern: number[][]
```

###### vacuum:element:prepare

```ts
vacuum:element:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:613](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L613)

###### elementType

```ts
elementType: number
```

###### matterType

```ts
matterType: number
```

###### isTransportable

```ts
isTransportable: boolean
```

###### collectable

```ts
collectable: boolean
```

###### visibleInPicker

```ts
visibleInPicker: boolean
```

###### player:movement:prepare

```ts
player:movement:prepare: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:620](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L620)

###### ~~player:movement~~

```ts
player:movement: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:622](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L622)

###### Deprecated

Use `"player:movement:prepare"` instead.

###### building:placementLimit:prepare

```ts
building:placementLimit:prepare: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:623](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L623)

###### Type Declaration

###### maxCount

```ts
maxCount: number | null
```

###### ~~building:placementLimit~~

```ts
building:placementLimit: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:625](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L625)

###### Type Declaration

###### ~~maxCount~~

```ts
maxCount: number | null
```

###### Deprecated

Use `"building:placementLimit:prepare"` instead.

###### ~~building:placement-limit~~

```ts
building:placement-limit: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:627](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L627)

###### Type Declaration

###### ~~maxCount~~

```ts
maxCount: number | null
```

###### Deprecated

Use `"building:placementLimit:prepare"` instead.

###### fluxEmanator:processing:prepare

```ts
fluxEmanator:processing:prepare: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:628](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L628)

###### Type Declaration

###### speedMultiplier

```ts
speedMultiplier: number
```

###### ~~fluxEmanator:processing~~

```ts
fluxEmanator:processing: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:630](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L630)

###### Type Declaration

###### ~~speedMultiplier~~

```ts
speedMultiplier: number
```

###### Deprecated

Use `"fluxEmanator:processing:prepare"` instead.

###### ~~flux-emanator:processing~~

```ts
flux-emanator:processing: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:632](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L632)

###### Type Declaration

###### ~~speedMultiplier~~

```ts
speedMultiplier: number
```

###### Deprecated

Use `"fluxEmanator:processing:prepare"` instead.

###### render:pipes:prepare

```ts
render:pipes:prepare: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:633](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L633)

###### Type Declaration

###### layer?

```ts
optional layer?: string
```

###### ~~render:pipes~~

```ts
render:pipes: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:635](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L635)

###### Type Declaration

###### ~~layer?~~

```ts
optional layer?: string
```

###### Deprecated

Use `"render:pipes:prepare"` instead.

###### structures:moved:prepare

```ts
structures:moved:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:636](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L636)

###### moved

```ts
moved: unknown[]
```

###### failedToPlace

```ts
failedToPlace: unknown[]
```

###### structures:removed:prepare

```ts
structures:removed:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:640](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L640)

###### removed

```ts
removed: unknown[]
```

###### structures?

```ts
optional structures?: unknown[]
```

###### byMove

```ts
byMove: boolean
```

###### weapon:reload:prepare

```ts
weapon:reload:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:645](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L645)

###### weaponId

```ts
weaponId: string
```

###### reloadMs

```ts
reloadMs: number
```

###### maxAmmo

```ts
maxAmmo: number
```

###### projectile:travel:prepare

```ts
projectile:travel:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:650](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L650)

###### projectileType

```ts
projectileType: string
```

###### firstCollisionStep

```ts
firstCollisionStep: number
```

###### maxCollisionSteps

```ts
maxCollisionSteps: number
```

###### collidesWithTerrain

```ts
collidesWithTerrain: boolean
```

###### collidesWithStructures

```ts
collidesWithStructures: boolean
```

###### projectile:impact:prepare

```ts
projectile:impact:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:657](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L657)

###### projectileType

```ts
projectileType: string
```

###### impactKind

```ts
impactKind: string
```

###### profileId

```ts
profileId: string
```

###### power

```ts
power: number
```

###### centerPower

```ts
centerPower: number
```

###### radiusCells

```ts
radiusCells: number
```

###### ~~radius?~~

```ts
optional radius?: number
```

###### Deprecated

Use radiusCells instead.

###### player:collision:prepare

```ts
player:collision:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:667](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L667)

###### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean
```

###### phaseThroughStructures

```ts
phaseThroughStructures: boolean
```

###### maxStepCells

```ts
maxStepCells: number
```

###### trigger:schedule:prepare

```ts
trigger:schedule:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:672](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L672)

###### triggerId

```ts
triggerId: string
```

###### intervalMs

```ts
intervalMs: number
```

###### sequentialRuns

```ts
sequentialRuns: number
```

###### progression:cost:prepare

```ts
progression:cost:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:677](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L677)

###### domain

```ts
domain: "tech" | "upgrade"
```

###### id

```ts
id: string
```

###### itemId?

```ts
optional itemId?: string
```

###### currencyId

```ts
currencyId: string
```

###### amount

```ts
amount: number
```

###### resource:collection:prepare

```ts
resource:collection:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:684](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L684)

###### resourceId

```ts
resourceId: string
```

###### sourceKind

```ts
sourceKind: string
```

###### cellX

```ts
cellX: number
```

###### cellY

```ts
cellY: number
```

###### amount

```ts
amount: number
```

###### feedback

```ts
feedback: "silent" | "default" | "reduced"
```

###### resource:delivery:prepare

```ts
resource:delivery:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:692](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L692)

###### resourceId

```ts
resourceId: string
```

###### sourceKind

```ts
sourceKind: string
```

###### sourceId

```ts
sourceId: string
```

###### sourceCellX

```ts
sourceCellX: number
```

###### sourceCellY

```ts
sourceCellY: number
```

###### targetCellX

```ts
targetCellX: number
```

###### targetCellY

```ts
targetCellY: number
```

###### mode

```ts
mode: "world" | "collection"
```

###### amount

```ts
amount: number
```

###### feedback

```ts
feedback: "silent" | "default"
```

###### resource:balance:prepare

```ts
resource:balance:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:704](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L704)

###### resourceId

```ts
resourceId: string
```

###### balance

```ts
balance: number
```

###### gold:removal:prepare

```ts
gold:removal:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:708](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L708)

###### requestedAmount

```ts
requestedAmount: number
```

###### shortfall

```ts
shortfall: number
```

###### gold:removal:settle

```ts
gold:removal:settle: object
```

Defined in: [sandkit/api/hooks.d.ts:712](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L712)

###### requestedAmount

```ts
requestedAmount: number
```

###### physicalRemoved

```ts
physicalRemoved: number
```

###### shortfall

```ts
shortfall: number
```

### Type Aliases <!-- {docsify-ignore} -->

#### InterceptHookOptions :id=sandkit.api.hooks.intercepthookoptions

```ts
sandkit.api.hooks.InterceptHookOptions<K *extends* InterceptHookId> = HookOptions & K *extends* "item:use" ? object : K *extends* "entity:update" ? object : K *extends* "building:place" ? object : K *extends* "projectile:fire:overStructure" | "projectile:hit" ? object : Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:412](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L412)

Options for [intercept](#intercept).

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ModifyHookOptions :id=sandkit.api.hooks.modifyhookoptions

```ts
sandkit.api.hooks.ModifyHookOptions = HookOptions & { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:424](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L424)

Options for [modify](#modify).

***

#### InterceptHookId :id=sandkit.api.hooks.intercepthookid

```ts
sandkit.api.hooks.InterceptHookId = LooseString<"item:use" | "teleport:effect:create" | "teleport:effect" | "action:start" | "action:intercept" | "input:keyDown" | "input:keydown" | "input:keyUp" | "input:keyup" | "placePoints:suppress" | "placePoints:isSuppressed" | "placePoints:directionalArrows:suppress" | "placePoints:directionalArrows:isSuppressed" | "entity:update" | "building:place" | "building:clearShape" | "input:scroll" | "input:boostDown" | "input:boost-down" | "input:descendDown" | "input:descend-down" | "input:escape" | "interactable:suppressHover" | "fire:element:ignite" | "projectile:fire:overStructure" | "projectile:hit" | "player:position:commit" | "progression:purchase">
```

Defined in: [sandkit/api/hooks.d.ts:434](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L434)

Known main-thread intercept hook ids plus custom strings.

***

#### ModifyHookId :id=sandkit.api.hooks.modifyhookid

```ts
sandkit.api.hooks.ModifyHookId = LooseString<"excavation:prepare" | "locator:scan:prepare" | "vacuum:prepare" | "vacuum:element:prepare" | "player:movement:prepare" | "player:movement" | "building:placementLimit:prepare" | "building:placementLimit" | "building:placement-limit" | "fluxEmanator:processing:prepare" | "fluxEmanator:processing" | "flux-emanator:processing" | "render:pipes:prepare" | "render:pipes" | "structures:moved:prepare" | "structures:removed:prepare" | "weapon:reload:prepare" | "projectile:travel:prepare" | "projectile:impact:prepare" | "player:collision:prepare" | "trigger:schedule:prepare" | "progression:cost:prepare" | "resource:collection:prepare" | "resource:delivery:prepare" | "resource:balance:prepare" | "gold:removal:prepare" | "gold:removal:settle">
```

Defined in: [sandkit/api/hooks.d.ts:466](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L466)

Known main-thread modify hook ids plus custom strings.

***

#### InterceptHookArgs :id=sandkit.api.hooks.intercepthookargs

```ts
sandkit.api.hooks.InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:720](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L720)

Intercept hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ModifyHookArgs :id=sandkit.api.hooks.modifyhookargs

```ts
sandkit.api.hooks.ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:725](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L725)

Modify hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

### Functions <!-- {docsify-ignore} -->

#### intercept() :id=sandkit.api.hooks.intercept

```ts
sandkit.api.hooks.intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [sandkit/api/hooks.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L178)

Registers an intercept hook. Returns an unsubscribe function.

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

##### Parameters

###### hookId

`K`

Registered hook identifier.

###### callback

(`args`: [`InterceptHookArgs`](#intercepthookargs)\<`K`\>, `context`: [`HookContext`](#hookcontext)) => `void`

Called with hook arguments and context; may cancel the hook.

###### options?

[`InterceptHookOptions`](#intercepthookoptions)\<`K`\>

Optional priority and filter options.

##### Returns

() => `void`

##### Examples

**item:use**

```ts
const unsubscribe = api.hooks.intercept(
  "item:use",
  (args, context) => {
    args.prepared.energyCost = Number(args.baseline.energyCost) * 2;

    if (args.prepared.energyCost > 1000) {
      context.cancel();
    }
  },
  { itemIds: ["laser"], priority: 0 },
);
```

**teleport:effect:create**

```ts
api.hooks.intercept("teleport:effect:create", (args, context) => {
  context.cancel();
});
```

**action:start**

```ts
api.hooks.intercept("action:start", (args, context) => {
  if (args.action?.id === "example") context.cancel();
});
```

**input:keyDown**

```ts
api.hooks.intercept("input:keyDown", (args, context) => {
  if (args.code === "KeyK") context.cancel();
});
```

**input:keyUp**

```ts
api.hooks.intercept("input:keyUp", (args, context) => {
  if (args.code === "KeyK") context.cancel();
});
```

**placePoints:suppress**

```ts
api.hooks.intercept("placePoints:suppress", (args, context) => {
  if (args.type === "exampleStructure") context.cancel();
});
```

**placePoints:directionalArrows:suppress**

```ts
api.hooks.intercept(
  "placePoints:directionalArrows:suppress",
  (args, context) => {
    if (args.type === "exampleStructure") context.cancel();
  },
);
```

**entity:update**

```ts
const unsubscribe = api.hooks.intercept(
  "entity:update",
  (args) => {
    if (args.phase !== "normal") return;
    args.entity.targetX = args.playerWorldX;
    args.entity.targetY = args.playerWorldY;
  },
  { entityTypes: ["lumling"], priority: 0 },
);
```

**building:place**

```ts
api.hooks.intercept("building:place", (args, context) => {
  if (args.structureId === "exampleStructure") context.cancel();
});
```

**building:clearShape**

```ts
api.hooks.intercept("building:clearShape", (args, context) => {
  if (args.structure.data?.protected) context.cancel();
});
```

**input:scroll**

```ts
api.hooks.intercept("input:scroll", (args, context) => {
  if (args.deltaY !== 0) context.cancel();
});
```

**input:boostDown**

```ts
api.hooks.intercept("input:boostDown", (args, context) => {
  context.cancel();
});
```

**input:descendDown**

```ts
api.hooks.intercept("input:descendDown", (args, context) => {
  context.cancel();
});
```

**input:escape**

```ts
api.hooks.intercept("input:escape", (args, context) => {
  context.cancel();
});
```

**interactable:suppressHover**

```ts
api.hooks.intercept("interactable:suppressHover", (args, context) => {
  if (args.type === "exampleStructure") context.cancel();
});
```

**fire:element:ignite**

```ts
api.hooks.intercept("fire:element:ignite", (args, context) => {
  if (args.elementType === exampleElementType) context.cancel();
});
```

**projectile:fire:overStructure**

```ts
api.hooks.intercept(
  "projectile:fire:overStructure",
  (args, context) => {
    if (args.projectile.type === "exampleProjectile") context.cancel();
  },
);
```

**projectile:hit**

```ts
api.hooks.intercept("projectile:hit", (args, context) => {
  if (args.projectile.type === "exampleProjectile") context.cancel();
});
```

**player:position:commit**

```ts
api.hooks.intercept("player:position:commit", (args) => {
  args.velocityX *= 0.5;
  args.velocityY *= 0.5;
});
```

**progression:purchase**

```ts
api.hooks.intercept("progression:purchase", (args, context) => {
  if (args.id === "exampleTech") context.cancel();
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### modify() :id=sandkit.api.hooks.modify

```ts
sandkit.api.hooks.modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [sandkit/api/hooks.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L390)

Registers a modifier hook. Returns an unsubscribe function.

##### Type Parameters

###### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

##### Parameters

###### hookId

`K`

Registered hook identifier.

###### callback

(`args`: [`ModifyHookArgs`](#modifyhookargs)\<`K`\>) => `void`

Called with hook arguments; may mutate hook payload.

###### options?

[`ModifyHookOptions`](#modifyhookoptions)

Optional priority and filter options.

##### Returns

() => `void`

##### Examples

**excavation:prepare**

```ts
const unsubscribe = api.hooks.modify(
  "excavation:prepare",
  (args) => {
    if (args.sourceId !== "implosionGun") return;

    args.profileId = "example:voidGun";
    args.patternDiameterCells = 21;
    args.drillTierDamage = 8;
  },
  { priority: 0 },
);
```

**locator:scan:prepare**

```ts
const unsubscribe = api.hooks.modify(
  "locator:scan:prepare",
  (args) => {
    const target = findNearestTarget(args.originWorldX, args.originWorldY);
    args.hasTarget = target !== null;

    if (!target) {
      args.noTargetToast = "No example target was found.";
      args.noTargetToastKey = "mods|example|noTarget";
      return;
    }

    args.targetCellX = target.cellX;
    args.targetCellY = target.cellY;
    args.outerTint[0] = 103;
    args.outerTint[1] = 232;
    args.outerTint[2] = 249;
    args.triangulationLensOverride = true;
  },
  { priority: 0 },
);
```

**vacuum:prepare**

```ts
const vacuumPattern = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
];

const unsubscribe = api.hooks.modify(
  "vacuum:prepare",
  (args) => {
    const target = api.input.getMousePositionAtCell();
    args.targetCellX = target.x;
    args.targetCellY = target.y;
    args.pattern = vacuumPattern;
  },
  { priority: 0 },
);
```

**vacuum:element:prepare**

```ts
const unsubscribe = api.hooks.modify(
  "vacuum:element:prepare",
  (args) => {
    if (args.matterType !== sandkit.enums.MatterType.Liquid) return;

    args.collectable = true;
    args.visibleInPicker = true;
  },
  { priority: 0 },
);
```

**player:movement:prepare**

```ts
api.hooks.modify("player:movement:prepare", (args) => {
  args.horizontalMaxSpeed *= 1.25;
});
```

**building:placementLimit:prepare**

```ts
api.hooks.modify("building:placementLimit:prepare", (args) => {
  args.maxCount = args.maxCount === null ? 10 : args.maxCount + 10;
});
```

**fluxEmanator:processing:prepare**

```ts
api.hooks.modify("fluxEmanator:processing:prepare", (args) => {
  args.speedMultiplier *= 2;
});
```

**render:pipes:prepare**

```ts
api.hooks.modify("render:pipes:prepare", (args) => {
  args.layer = "foreground";
});
```

**structures:moved:prepare**

```ts
api.hooks.modify("structures:moved:prepare", (args) => {
  prepareMovedStructures(args.moved, args.failedToPlace);
});
```

**structures:removed:prepare**

```ts
api.hooks.modify("structures:removed:prepare", (args) => {
  prepareRemovedStructures(args.removed, args.byMove);
});
```

**weapon:reload:prepare**

```ts
api.hooks.modify("weapon:reload:prepare", (args) => {
  args.reloadMs *= 0.8;
}, { weaponIds: ["exampleWeapon"] });
```

**projectile:travel:prepare**

```ts
api.hooks.modify("projectile:travel:prepare", (args) => {
  args.collidesWithStructures = false;
}, { projectileTypes: ["exampleProjectile"] });
```

**projectile:impact:prepare**

```ts
api.hooks.modify("projectile:impact:prepare", (args) => {
  args.radiusCells = 8;
}, { projectileTypes: ["exampleProjectile"] });
```

**player:collision:prepare**

```ts
api.hooks.modify("player:collision:prepare", (args) => {
  args.maxStepCells = 4;
});
```

**trigger:schedule:prepare**

```ts
api.hooks.modify("trigger:schedule:prepare", (args) => {
  args.intervalMs *= 0.5;
}, { triggerIds: ["pump"] });
```

**progression:cost:prepare**

```ts
api.hooks.modify("progression:cost:prepare", (args) => {
  if (args.currencyId === "gold") args.amount *= 0.9;
});
```

**resource:collection:prepare**

```ts
api.hooks.modify("resource:collection:prepare", (args) => {
  args.amount *= 2;
}, { resourceIds: ["fluxite"] });
```

**resource:delivery:prepare**

```ts
api.hooks.modify("resource:delivery:prepare", (args) => {
  args.mode = "collection";
}, { resourceIds: ["fluxite"] });
```

**resource:balance:prepare**

```ts
api.hooks.modify("resource:balance:prepare", (args) => {
  args.balance += api.storage.get("example", "gold") ?? 0;
}, { resourceIds: ["gold"] });
```

**gold:removal:prepare**

```ts
api.hooks.modify("gold:removal:prepare", (args) => {
  const banked = api.storage.get("example", "gold") ?? 0;
  args.shortfall = Math.max(0, args.shortfall - banked);
});
```

**gold:removal:settle**

```ts
api.hooks.modify("gold:removal:settle", (args) => {
  const banked = api.storage.get("example", "gold") ?? 0;
  const covered = Math.min(banked, args.shortfall);
  api.storage.set("example", "gold", banked - covered);
  args.shortfall -= covered;
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### I18nNumberFormatOptions :id=sandkit.api.i18n.i18nnumberformatoptions

<p class="smt-member-path"><code>sandkit.api.i18n.I18nNumberFormatOptions</code></p>
Defined in: [sandkit/api/i18n.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L227)

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

Defined in: [sandkit/api/i18n.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L229)

Minimum fraction digits.

###### maximumFractionDigits?

```ts
optional maximumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:231](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L231)

Maximum fraction digits.

###### useGrouping?

```ts
optional useGrouping?: boolean
```

Defined in: [sandkit/api/i18n.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L233)

When true, use grouping separators.

### Type Aliases <!-- {docsify-ignore} -->

#### Locale :id=sandkit.api.i18n.locale

```ts
sandkit.api.i18n.Locale = LooseString<"en">
```

Defined in: [sandkit/api/i18n.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L224)

Locale code. `"en"` autocompletes; any locale string is allowed.

### Functions <!-- {docsify-ignore} -->

#### t() :id=sandkit.api.i18n.t

```ts
sandkit.api.i18n.t(key: string, params?: Record<string, string | number>): string
```

Defined in: [sandkit/api/i18n.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L23)

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

##### Example

```ts
const message = api.i18n.t("mods|example|count", {
  count: 3,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### register() :id=sandkit.api.i18n.register

```ts
sandkit.api.i18n.register(locale: Locale, translations: Record<string, string>): void
```

Defined in: [sandkit/api/i18n.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L40)

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

##### Example

```ts
api.i18n.register("en", {
  "mods|example|title": "Example",
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getLocale() :id=sandkit.api.i18n.getlocale

```ts
sandkit.api.i18n.getLocale(): Locale
```

Defined in: [sandkit/api/i18n.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L47)

Returns the active locale code.

##### Returns

[`Locale`](#locale)

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### hasTranslation() :id=sandkit.api.i18n.hastranslation

```ts
sandkit.api.i18n.hasTranslation(key: string, locale?: Locale): boolean
```

Defined in: [sandkit/api/i18n.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L57)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setLocale() :id=sandkit.api.i18n.setlocale

```ts
sandkit.api.i18n.setLocale(locale: Locale): Promise<void>
```

Defined in: [sandkit/api/i18n.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L66)

Sets the active locale.

##### Parameters

###### locale

[`Locale`](#locale)

Locale code to activate.

##### Returns

`Promise`\<`void`\>

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getLanguages() :id=sandkit.api.i18n.getlanguages

```ts
sandkit.api.i18n.getLanguages(): object[]
```

Defined in: [sandkit/api/i18n.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L73)

Returns metadata for all known languages.

##### Returns

`object`[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getAvailableLocales() :id=sandkit.api.i18n.getavailablelocales

```ts
sandkit.api.i18n.getAvailableLocales(): Locale[]
```

Defined in: [sandkit/api/i18n.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L85)

Returns locale codes that have registered translations.

##### Returns

[`Locale`](#locale)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### formatNumber() :id=sandkit.api.i18n.formatnumber

```ts
sandkit.api.i18n.formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

Defined in: [sandkit/api/i18n.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L102)

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

##### Example

```ts
const formatted = api.i18n.formatNumber(1234.5, {
  maximumFractionDigits: 1,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### joinKey() :id=sandkit.api.i18n.joinkey

```ts
sandkit.api.i18n.joinKey(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L111)

Joins key parts into a single translation key.

##### Parameters

###### parts

...`string`[]

Key segments joined with `.`.

##### Returns

`string`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~key()~~ :id=sandkit.api.i18n.key

```ts
sandkit.api.i18n.key(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L118)

##### Parameters

###### parts

...`string`[]

##### Returns

`string`

##### Deprecated

Use [joinKey](#joinkey) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getName() :id=sandkit.api.i18n.getname

```ts
sandkit.api.i18n.getName(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L135)

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

##### Example

```ts
const name = api.i18n.getName({
  name: "Example Machine",
  nameKey: "structures|exampleMachine|name",
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDescription() :id=sandkit.api.i18n.getdescription

```ts
sandkit.api.i18n.getDescription(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L144)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### createTranslatable() :id=sandkit.api.i18n.createtranslatable

```ts
sandkit.api.i18n.createTranslatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L157)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~translatable()~~ :id=sandkit.api.i18n.translatable

```ts
sandkit.api.i18n.translatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L167)

##### Parameters

###### key

`string`

###### fallback

`string`

##### Returns

`object`

###### ~~\_\_translatable~~

```ts
\_\_translatable: true
```

###### ~~key~~

```ts
key: string
```

###### ~~fallback~~

```ts
fallback: string
```

##### Deprecated

Use [createTranslatable](#createtranslatable) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setGlobal() :id=sandkit.api.i18n.setglobal

```ts
sandkit.api.i18n.setGlobal(key: string, value: string | (() => string)): void
```

Defined in: [sandkit/api/i18n.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L180)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getGlobal() :id=sandkit.api.i18n.getglobal

```ts
sandkit.api.i18n.getGlobal(key: string): string | undefined
```

Defined in: [sandkit/api/i18n.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L189)

Returns a global translation helper value.

##### Parameters

###### key

`string`

Global helper key.

##### Returns

`string` \| `undefined`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### removeGlobal() :id=sandkit.api.i18n.removeglobal

```ts
sandkit.api.i18n.removeGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:198](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L198)

Removes a global translation helper value.

##### Parameters

###### key

`string`

Global helper key.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~clearGlobal()~~ :id=sandkit.api.i18n.clearglobal

```ts
sandkit.api.i18n.clearGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L205)

##### Parameters

###### key

`string`

##### Returns

`void`

##### Deprecated

Use [removeGlobal](#removeglobal) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getGlobals() :id=sandkit.api.i18n.getglobals

```ts
sandkit.api.i18n.getGlobals(): Record<string, string>
```

Defined in: [sandkit/api/i18n.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L212)

Returns all global translation helper values.

##### Returns

`Record`\<`string`, `string`\>

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### formatKeyForDisplay() :id=sandkit.api.i18n.formatkeyfordisplay

```ts
sandkit.api.i18n.formatKeyForDisplay(keyCode: string): string
```

Defined in: [sandkit/api/i18n.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L221)

Formats a key code for display in UI.

##### Parameters

###### keyCode

`string`

Keyboard key code or binding name.

##### Returns

`string`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.input

`sandkit.api.input` — key bindings, mouse position, and modifier keys.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### InputBindingHandlers :id=sandkit.api.input.inputbindinghandlers

<p class="smt-member-path"><code>sandkit.api.input.InputBindingHandlers</code></p>
Defined in: [sandkit/api/input.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L117)

Handlers invoked when a binding is pressed or released.

##### Properties

###### down?

```ts
optional down?: () => void
```

Defined in: [sandkit/api/input.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L119)

Called when the binding is pressed.

###### Returns

`void`

###### up?

```ts
optional up?: () => void
```

Defined in: [sandkit/api/input.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L121)

Called when the binding is released.

###### Returns

`void`

***

#### InputBindingDefinition :id=sandkit.api.input.inputbindingdefinition

<p class="smt-member-path"><code>sandkit.api.input.InputBindingDefinition</code></p>
Defined in: [sandkit/api/input.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L125)

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

Defined in: [sandkit/api/input.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L127)

Display name shown in settings.

###### displayNameKey?

```ts
optional displayNameKey?: string
```

Defined in: [sandkit/api/input.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L129)

i18n key for the display name (overrides displayName when set).

###### category

```ts
category: string
```

Defined in: [sandkit/api/input.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L131)

Settings category for grouping.

###### handlers

```ts
handlers: InputBindingHandlers
```

Defined in: [sandkit/api/input.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L133)

Press and release handlers.

### Type Aliases <!-- {docsify-ignore} -->

#### BindingId :id=sandkit.api.input.bindingid

```ts
sandkit.api.input.BindingId = LooseString<` ${KeyBinding} `>
```

Defined in: [sandkit/api/input.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L96)

Binding id. Vanilla [KeyBindingEnum](api/sandkit.enums.KeyBinding.md) names autocomplete; custom ids are allowed.

***

#### KeyCode :id=sandkit.api.input.keycode

```ts
sandkit.api.input.KeyCode = LooseString<"Shift" | "Alt" | "Control" | "Meta" | "ShiftLeft" | "ShiftRight" | "AltLeft" | "AltRight" | "ControlLeft" | "ControlRight" | "MetaLeft" | "MetaRight">
```

Defined in: [sandkit/api/input.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L101)

KeyboardEvent.code, a modifier alias (`Shift`), or a chord (`Control+KeyC`).

### Functions <!-- {docsify-ignore} -->

#### registerBinding() :id=sandkit.api.input.registerbinding

```ts
sandkit.api.input.registerBinding(bindingId: BindingId, defaultKeys: KeyCode[], definition: InputBindingDefinition): BindingId
```

Defined in: [sandkit/api/input.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L31)

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

##### Example

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

#### getMouseCellPosition() :id=sandkit.api.input.getmousecellposition

```ts
sandkit.api.input.getMouseCellPosition(): object
```

Defined in: [sandkit/api/input.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L41)

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

#### getBoundKeys() :id=sandkit.api.input.getboundkeys

```ts
sandkit.api.input.getBoundKeys(bindingId: BindingId): KeyCode[]
```

Defined in: [sandkit/api/input.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L50)

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

#### getDisplayKey() :id=sandkit.api.input.getdisplaykey

```ts
sandkit.api.input.getDisplayKey(bindingId: BindingId, defaultLabel?: string): string
```

Defined in: [sandkit/api/input.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L58)

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

#### triggerBinding() :id=sandkit.api.input.triggerbinding

```ts
sandkit.api.input.triggerBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L64)

Fire the binding down handler as if the key was pressed.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### pressBinding() :id=sandkit.api.input.pressbinding

```ts
sandkit.api.input.pressBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L70)

Fire the binding down handler without a matching release.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### releaseBinding() :id=sandkit.api.input.releasebinding

```ts
sandkit.api.input.releaseBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L76)

Fire the binding up handler.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### resetMouseState() :id=sandkit.api.input.resetmousestate

```ts
sandkit.api.input.resetMouseState(): void
```

Defined in: [sandkit/api/input.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L79)

Clear internal mouse button state.

##### Returns

`void`

***

#### isCtrlHeld() :id=sandkit.api.input.isctrlheld

```ts
sandkit.api.input.isCtrlHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L85)

Return true when Ctrl is held.

##### Returns

`boolean`

True when the Ctrl modifier is down.

***

#### isAltHeld() :id=sandkit.api.input.isaltheld

```ts
sandkit.api.input.isAltHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L91)

Return true when Alt is held.

##### Returns

`boolean`

True when the Alt modifier is down.

---

## sandkit.api.items

`sandkit.api.items` — register custom inventory items and query active items.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### ItemDefinition :id=sandkit.api.items.itemdefinition

<p class="smt-member-path"><code>sandkit.api.items.ItemDefinition</code></p>
Defined in: [sandkit/api/items.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L10)

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

Defined in: [sandkit/api/items.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L12)

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

Defined in: [sandkit/api/items.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L14)

Called after the item is rendered each frame.

###### Parameters

###### state

`State`

###### Returns

`void`

### Type Aliases <!-- {docsify-ignore} -->

#### ItemId :id=sandkit.api.items.itemid

```ts
sandkit.api.items.ItemId = ItemId | LooseString<never>
```

Defined in: [sandkit/api/items.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L59)

Inventory item id.
Built-in [ItemIdEnum](api/sandkit.enums.ItemId.md) values autocomplete; custom string ids are allowed.

***

#### ItemType :id=sandkit.api.items.itemtype

```ts
sandkit.api.items.ItemType = ItemType | TaggedNumber<"itemType">
```

Defined in: [sandkit/api/items.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L64)

Item category handle.
Built-in [ItemTypeEnum](api/sandkit.enums.ItemType.md) values autocomplete.

***

#### ModItem :id=sandkit.api.items.moditem

```ts
sandkit.api.items.ModItem = unknown
```

Defined in: [sandkit/api/items.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L66)

Runtime item instance (not yet typed in declarations).

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.items.register

```ts
sandkit.api.items.register(definition: ItemDefinition): void
```

Defined in: [sandkit/api/items.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L22)

Registers a new item definition.

##### Parameters

###### definition

[`ItemDefinition`](#itemdefinition)

Item id, handlers, and display metadata.

##### Returns

`void`

***

#### updateDefinition() :id=sandkit.api.items.updatedefinition

```ts
sandkit.api.items.updateDefinition(itemId: ItemId, partial: Partial<ItemDefinition>): void
```

Defined in: [sandkit/api/items.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L35)

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

##### Example

```ts
api.items.updateDefinition("exampleTool", {
  name: "Updated Example Tool",
});
```

***

#### getDefinitionById() :id=sandkit.api.items.getdefinitionbyid

```ts
sandkit.api.items.getDefinitionById(itemId: ItemId): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L40)

Returns the item definition for an id, or undefined.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Registered item id.

##### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

#### createFromId() :id=sandkit.api.items.createfromid

```ts
sandkit.api.items.createFromId(itemId: ItemId): unknown
```

Defined in: [sandkit/api/items.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L45)

Creates a runtime item instance from an id.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Registered item id.

##### Returns

`unknown`

***

#### getActive() :id=sandkit.api.items.getactive

```ts
sandkit.api.items.getActive(): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L47)

Returns the item definition for the active hotbar slot.

##### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

#### isActiveById() :id=sandkit.api.items.isactivebyid

```ts
sandkit.api.items.isActiveById(itemId: ItemId, itemType?: ItemType): boolean
```

Defined in: [sandkit/api/items.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L53)

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

`sandkit.api.lights` — temporary lights and persistent world lights.
Main thread only.

### Namespaces <!-- {docsify-ignore} -->

- [temporary](api/sandkit.api.lights.temporary.md)
- [persistent](api/sandkit.api.lights.persistent.md)

### Interfaces <!-- {docsify-ignore} -->

#### TemporaryLightHandle :id=sandkit.api.lights.temporarylighthandle

<p class="smt-member-path"><code>sandkit.api.lights.TemporaryLightHandle</code></p>
Defined in: [sandkit/api/lights.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L129)

Handle returned from [temporary.createAtWorld](api/sandkit.api.lights.temporary.md#createatworld).

##### Properties

###### lightId

```ts
lightId: number | null
```

Defined in: [sandkit/api/lights.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L131)

Assigned temporary light id, or null when creation failed.

###### ~~index~~

```ts
index: number | null
```

Defined in: [sandkit/api/lights.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L137)

###### Deprecated

Use [lightId](#lightid) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### PersistentLightOptions :id=sandkit.api.lights.persistentlightoptions

<p class="smt-member-path"><code>sandkit.api.lights.PersistentLightOptions</code></p>
Defined in: [sandkit/api/lights.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L144)

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

Defined in: [sandkit/api/lights.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L146)

Light brightness multiplier.

###### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/lights.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L148)

Light radius in pixels.

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/lights.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L150)

RGBA color components.

### Type Aliases <!-- {docsify-ignore} -->

#### TemporaryLightOptions :id=sandkit.api.lights.temporarylightoptions

```ts
sandkit.api.lights.TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [sandkit/api/lights.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L141)

Options for temporary lights.

***

#### PersistentLightHandle :id=sandkit.api.lights.persistentlighthandle

```ts
sandkit.api.lights.PersistentLightHandle = unknown
```

Defined in: [sandkit/api/lights.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L155)

Handle returned from [persistent.createAtWorld](api/sandkit.api.lights.persistent.md#createatworld).

### References <!-- {docsify-ignore} -->

#### vfx :id=sandkit.api.lights.vfx

<p class="smt-member-path"><code>sandkit.api.lights.vfx</code></p>
Renames and re-exports [temporary](api/sandkit.api.lights.temporary.md)

---

## sandkit.api.lights.persistent

Lights that persist in the world save.

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.lights.persistent.createatworld

```ts
sandkit.api.lights.persistent.createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): unknown
```

Defined in: [sandkit/api/lights.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L93)

Create a persistent light at world coordinates.

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

##### Example

```ts
const light = api.lights.persistent.createAtWorld(
  worldX,
  worldY,
  { brightness: 1, size: 80 },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### removeAtWorld() :id=sandkit.api.lights.persistent.removeatworld

```ts
sandkit.api.lights.persistent.removeAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/lights.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L107)

Remove the persistent light at world coordinates.

##### Parameters

###### worldX

`number`

World X coordinate in pixels.

###### worldY

`number`

World Y coordinate in pixels.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### fadeAtWorld() :id=sandkit.api.lights.persistent.fadeatworld

```ts
sandkit.api.lights.persistent.fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void
```

Defined in: [sandkit/api/lights.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L118)

Fade out the persistent light at world coordinates over durationMs.

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### markDirty() :id=sandkit.api.lights.persistent.markdirty

```ts
sandkit.api.lights.persistent.markDirty(): void
```

Defined in: [sandkit/api/lights.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L125)

Mark persistent lights dirty so they are saved on the next flush.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.lights.temporary

Short-lived visual effect lights.

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.lights.temporary.createatworld

```ts
sandkit.api.lights.temporary.createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: [sandkit/api/lights.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L43)

Create a temporary light at world coordinates.

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

[`TemporaryLightHandle`](api/sandkit.api.lights.md#temporarylighthandle)

##### Examples

**Main entry**

```ts
const light = api.lights.temporary.createAtWorld(worldX, worldY, {
  brightness: 1,
  durationMs: 250,
  size: 80,
});
const lightId = light.lightId;
```

**options.durationTicks**

```ts
api.lights.temporary.createAtWorld(worldX, worldY, {
  durationTicks: 15,
});
```

**options.durationMs**

```ts
api.lights.temporary.createAtWorld(worldX, worldY, {
  durationMs: 250,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### removeById() :id=sandkit.api.lights.temporary.removebyid

```ts
sandkit.api.lights.temporary.removeById(lightId: number): void
```

Defined in: [sandkit/api/lights.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L63)

Remove a temporary light by its id.

##### Parameters

###### lightId

`number`

Light id returned from [createAtWorld](#createatworld).

##### Returns

`void`

##### Example

```ts
if (light.lightId !== null) {
  api.lights.temporary.removeById(light.lightId);
}
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.maps

### Interfaces <!-- {docsify-ignore} -->

#### ArtifactLocation :id=sandkit.api.maps.artifactlocation

<p class="smt-member-path"><code>sandkit.api.maps.ArtifactLocation</code></p>
Defined in: [sandkit/api/maps.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L42)

Artifact location entry from [getArtifactLocations](#getartifactlocations).

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### cellX

```ts
cellX: number
```

Defined in: [sandkit/api/maps.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L43)

###### cellY

```ts
cellY: number
```

Defined in: [sandkit/api/maps.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L44)

###### name

```ts
name: string
```

Defined in: [sandkit/api/maps.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L45)

***

#### AvailableMapV1 :id=sandkit.api.maps.availablemapv1

<p class="smt-member-path"><code>sandkit.api.maps.AvailableMapV1</code></p>
Defined in: [sandkit/api/maps.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L50)

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

Defined in: [sandkit/api/maps.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L52)

Map identifier passed to [start](#start).

###### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/maps.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L54)

Display name or translation key.

### Functions <!-- {docsify-ignore} -->

#### getAvailable() :id=sandkit.api.maps.getavailable

```ts
sandkit.api.maps.getAvailable(): readonly Readonly<AvailableMapV1>[]
```

Defined in: [sandkit/api/maps.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L18)

Return maps the player can start.

##### Returns

readonly `Readonly`\<[`AvailableMapV1`](#availablemapv1)\>[]

***

#### start() :id=sandkit.api.maps.start

```ts
sandkit.api.maps.start(mapId: string): boolean
```

Defined in: [sandkit/api/maps.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L23)

Start a map by id. Return true when start succeeds.

##### Parameters

###### mapId

`string`

Custom map identifier.

##### Returns

`boolean`

***

#### getArtifactLocations() :id=sandkit.api.maps.getartifactlocations

```ts
sandkit.api.maps.getArtifactLocations(): readonly ArtifactLocation[]
```

Defined in: [sandkit/api/maps.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L39)

Return artifact marker locations for the active map.

##### Returns

readonly [`ArtifactLocation`](#artifactlocation)[]

##### Example

```ts
api.events.on("game:ready", () => {
  api.maps.getArtifactLocations().forEach(({ cellX, cellY, name }) => {
    addMarker(cellX, cellY, name);
  });
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### getActive :id=sandkit.api.maps.getactive

<p class="smt-member-path"><code>sandkit.api.maps.getActive</code></p>
Re-exports [getActive](api/sandkit.api.maps.worker.md#getactive)

***

#### ActiveMapV1 :id=sandkit.api.maps.activemapv1

<p class="smt-member-path"><code>sandkit.api.maps.ActiveMapV1</code></p>
Re-exports [ActiveMapV1](api/sandkit.api.maps.worker.md#activemapv1)

---

## sandkit.api.mods

### Type Aliases <!-- {docsify-ignore} -->

#### AssetProviderV1 :id=sandkit.api.mods.assetproviderv1

```ts
sandkit.api.mods.AssetProviderV1 = AssetProviderV1
```

Defined in: [sandkit/api/mods.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/mods.d.ts#L17)

Asset provider entry shape.

### Functions <!-- {docsify-ignore} -->

#### getProviders() :id=sandkit.api.mods.getproviders

```ts
sandkit.api.mods.getProviders(kind: string): readonly AssetProviderV1[]
```

Defined in: [sandkit/api/mods.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/mods.d.ts#L15)

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

#### PatternExcavateOptions :id=sandkit.api.patterns.patternexcavateoptions

```ts
sandkit.api.patterns.PatternExcavateOptions = ExcavateOptions
```

Defined in: [sandkit/api/patterns.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L61)

Options for pattern-based excavation. Same shape as [shared.api.world.ExcavateOptions](api/sandkit.api.grid.md#excavateoptions).

### Functions <!-- {docsify-ignore} -->

#### createCircle() :id=sandkit.api.patterns.createcircle

```ts
sandkit.api.patterns.createCircle(size: number): number[][]
```

Defined in: [sandkit/api/patterns.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L17)

Build a circular excavation pattern matrix for the given size.

##### Parameters

###### size

`number`

Pattern width and height in cells.

##### Returns

`number`[][]

Square matrix with `1` inside the circle and `0` outside.

***

#### excavateAtCell() :id=sandkit.api.patterns.excavateatcell

```ts
sandkit.api.patterns.excavateAtCell(...args: [number, number, number[][], Vector2, number, ExcavateOptions]): void
```

Defined in: [sandkit/api/patterns.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L50)

Excavate at a cell using a pattern matrix and output velocity.

##### Parameters

###### args

...\[`number`, `number`, `number`[][], [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](api/sandkit.api.grid.md#excavateoptions)\]

##### Returns

`void`

##### Examples

**Main entry**

```ts
api.patterns.excavateAtCell(
  cellX,
  cellY,
  api.patterns.createCircle(5),
  { x: 0, y: -120 },
  2,
);
```

**Worker entry**

```ts
api.patterns.excavateAtCell(
  cellX,
  cellY,
  pattern,
  { x: 0, y: -1 },
  10,
);
```

---

## sandkit.api.pickups

World pickups — spawn, collect, and query pickup instances.

Available as `sandkit.api.pickups`.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### WorldItemLight :id=sandkit.api.pickups.worlditemlight

<p class="smt-member-path"><code>sandkit.api.pickups.WorldItemLight</code></p>
Defined in: [sandkit/api/pickups.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L22)

Optional point light attached when spawning a pickup.

##### Properties

###### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/pickups.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L24)

Light brightness multiplier. Default 1.

###### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/pickups.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L26)

Light radius in world pixels. Default 100.

###### color?

```ts
optional color?: [number, number, number] | [number, number, number, number]
```

Defined in: [sandkit/api/pickups.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L28)

RGB or RGBA color components in 0–1 range.

***

#### WorldItem :id=sandkit.api.pickups.worlditem

<p class="smt-member-path"><code>sandkit.api.pickups.WorldItem</code></p>
Defined in: [sandkit/api/pickups.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L32)

Active world pickup instance.

##### Properties

###### id

```ts
id: number
```

Defined in: [sandkit/api/pickups.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L33)

###### x

```ts
x: number
```

Defined in: [sandkit/api/pickups.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L34)

###### y

```ts
y: number
```

Defined in: [sandkit/api/pickups.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L35)

###### type

```ts
type: PickupType
```

Defined in: [sandkit/api/pickups.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L36)

###### data

```ts
data: Record<string, unknown>
```

Defined in: [sandkit/api/pickups.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L37)

### Type Aliases <!-- {docsify-ignore} -->

#### PickupType :id=sandkit.api.pickups.pickuptype

```ts
sandkit.api.pickups.PickupType = PickupType
```

Defined in: [sandkit/api/pickups.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L12)

Official pickup type discriminator.

***

#### ~~WorldItemType~~ :id=sandkit.api.pickups.worlditemtype

```ts
sandkit.api.pickups.WorldItemType = PickupType
```

Defined in: [sandkit/api/pickups.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L19)

##### Deprecated

Use [PickupType](#pickuptype) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Functions <!-- {docsify-ignore} -->

#### spawnAtWorld() :id=sandkit.api.pickups.spawnatworld

```ts
sandkit.api.pickups.spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record<string, unknown>, light?: WorldItemLight): WorldItem
```

Defined in: [sandkit/api/pickups.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L52)

Spawn a pickup at world position.

##### Parameters

###### type

[`PickupType`](api/sandkit.enums.PickupType.md)

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

[`WorldItemLight`](#worlditemlight)

Optional point light spawned with the pickup.

##### Returns

[`WorldItem`](#worlditem)

The spawned pickup instance.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### remove() :id=sandkit.api.pickups.remove

```ts
sandkit.api.pickups.remove(pickup: WorldItem): void
```

Defined in: [sandkit/api/pickups.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L67)

Remove a pickup instance from the world.

##### Parameters

###### pickup

[`WorldItem`](#worlditem)

Pickup returned from spawn or lookup helpers.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~destroy()~~ :id=sandkit.api.pickups.destroy

```ts
sandkit.api.pickups.destroy(pickup: WorldItem): void
```

Defined in: [sandkit/api/pickups.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L74)

##### Parameters

###### pickup

[`WorldItem`](#worlditem)

##### Returns

`void`

##### Deprecated

Use [remove](#remove) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### pickUp() :id=sandkit.api.pickups.pickup

```ts
sandkit.api.pickups.pickUp(pickup: WorldItem): boolean
```

Defined in: [sandkit/api/pickups.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L84)

Pick up a world item into inventory.

##### Parameters

###### pickup

[`WorldItem`](#worlditem)

Pickup to collect.

##### Returns

`boolean`

True when the item was collected.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getAll() :id=sandkit.api.pickups.getall

```ts
sandkit.api.pickups.getAll(): WorldItem[]
```

Defined in: [sandkit/api/pickups.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L91)

Return all active pickups.

##### Returns

[`WorldItem`](#worlditem)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getById() :id=sandkit.api.pickups.getbyid

```ts
sandkit.api.pickups.getById(pickupId: number): WorldItem | undefined
```

Defined in: [sandkit/api/pickups.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L100)

Return a pickup by numeric id.

##### Parameters

###### pickupId

`number`

Runtime pickup id.

##### Returns

[`WorldItem`](#worlditem) \| `undefined`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.pipes

Pipe network queries and enablement at grid cells.

Available as `sandkit.api.pipes`.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### PipeVentCell :id=sandkit.api.pipes.pipeventcell

<p class="smt-member-path"><code>sandkit.api.pipes.PipeVentCell</code></p>
Defined in: [sandkit/api/pipes.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L53)

Connected vent cell position.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### cellX

```ts
cellX: number
```

Defined in: [sandkit/api/pipes.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L54)

###### cellY

```ts
cellY: number
```

Defined in: [sandkit/api/pipes.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L55)

### Functions <!-- {docsify-ignore} -->

#### isAtCell() :id=sandkit.api.pipes.isatcell

```ts
sandkit.api.pipes.isAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L19)

Return true when a pipe occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isEnabledAtCell() :id=sandkit.api.pipes.isenabledatcell

```ts
sandkit.api.pipes.isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L29)

Return true when pipe flow is enabled at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getConnectedVentsAtCell() :id=sandkit.api.pipes.getconnectedventsatcell

```ts
sandkit.api.pipes.getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[]
```

Defined in: [sandkit/api/pipes.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L39)

Return connected liquid vent cell positions for the pipe at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

readonly [`PipeVentCell`](#pipeventcell)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setEnabledAtCell() :id=sandkit.api.pipes.setenabledatcell

```ts
sandkit.api.pipes.setEnabledAtCell(...args: [number, number, boolean]): void
```

Defined in: [sandkit/api/pipes.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L50)

Enable or disable pipe flow at a cell.

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.player

### Namespaces <!-- {docsify-ignore} -->

- [inventory](api/sandkit.api.player.inventory.md)
- [buildings](api/sandkit.api.player.buildings.md)

### Functions <!-- {docsify-ignore} -->

#### setPositionAtWorld() :id=sandkit.api.player.setpositionatworld

```ts
sandkit.api.player.setPositionAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L33)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~setWorldPosition()~~ :id=sandkit.api.player.setworldposition

```ts
sandkit.api.player.setWorldPosition(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L40)

##### Parameters

###### worldX

`number`

###### worldY

`number`

##### Returns

`void`

##### Deprecated

Use [setPositionAtWorld](#setpositionatworld) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setVelocity() :id=sandkit.api.player.setvelocity

```ts
sandkit.api.player.setVelocity(velocityX: number, velocityY: number): void
```

Defined in: [sandkit/api/player.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L50)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setMovementSpeedMultiplier() :id=sandkit.api.player.setmovementspeedmultiplier

```ts
sandkit.api.player.setMovementSpeedMultiplier(multiplier: number): void
```

Defined in: [sandkit/api/player.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L60)

Set the movement speed multiplier.

##### Parameters

###### multiplier

`number`

Speed scale factor (`1` is default walk). `0` freezes movement.
Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setMovementMode() :id=sandkit.api.player.setmovementmode

```ts
sandkit.api.player.setMovementMode(mode: "normal" | "hover"): boolean
```

Defined in: [sandkit/api/player.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L70)

Set movement mode to normal or hover.

##### Parameters

###### mode

`"normal"` \| `"hover"`

`"normal"` for default physics, or `"hover"` for hover flight.

##### Returns

`boolean`

True when the mode changes.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isOnGround() :id=sandkit.api.player.isonground

```ts
sandkit.api.player.isOnGround(): boolean
```

Defined in: [sandkit/api/player.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L81)

Return true when the player is on ground.
Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
on the store snapshot — that flag is not updated during play.

##### Returns

`boolean`

True when the player touches solid ground.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### teleportToGround() :id=sandkit.api.player.teleporttoground

```ts
sandkit.api.player.teleportToGround(): void
```

Defined in: [sandkit/api/player.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L88)

Move the player down until ground is found.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isPositionClearAtWorld() :id=sandkit.api.player.ispositionclearatworld

```ts
sandkit.api.player.isPositionClearAtWorld(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L99)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~isWorldPositionClear()~~ :id=sandkit.api.player.isworldpositionclear

```ts
sandkit.api.player.isWorldPositionClear(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L106)

##### Parameters

###### worldX

`number`

###### worldY

`number`

##### Returns

`boolean`

##### Deprecated

Use [isPositionClearAtWorld](#ispositionclearatworld) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### getPositionAtWorld :id=sandkit.api.player.getpositionatworld

<p class="smt-member-path"><code>sandkit.api.player.getPositionAtWorld</code></p>
Re-exports [getPositionAtWorld](api/sandkit.api.player.worker.md#getpositionatworld)

***

#### isCollidingWithCell :id=sandkit.api.player.iscollidingwithcell

<p class="smt-member-path"><code>sandkit.api.player.isCollidingWithCell</code></p>
Re-exports [isCollidingWithCell](api/sandkit.api.player.worker.md#iscollidingwithcell)

***

#### isWithinRadiusOfCell :id=sandkit.api.player.iswithinradiusofcell

<p class="smt-member-path"><code>sandkit.api.player.isWithinRadiusOfCell</code></p>
Re-exports [isWithinRadiusOfCell](api/sandkit.api.player.worker.md#iswithinradiusofcell)

***

#### getWorldPosition :id=sandkit.api.player.getworldposition

<p class="smt-member-path"><code>sandkit.api.player.getWorldPosition</code></p>
Re-exports [getWorldPosition](api/sandkit.api.player.worker.md#getworldposition)

---

## sandkit.api.player.buildings

Player building unlock helpers.

### Functions <!-- {docsify-ignore} -->

#### unlockById() :id=sandkit.api.player.buildings.unlockbyid

```ts
sandkit.api.player.buildings.unlockById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L136)

Unlock a structure type for building.

##### Parameters

###### structureId

`string`

Registered structure id string.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~unlockByType()~~ :id=sandkit.api.player.buildings.unlockbytype

```ts
sandkit.api.player.buildings.unlockByType(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L143)

##### Parameters

###### structureId

`string`

##### Returns

`void`

##### Deprecated

Use [unlockById](#unlockbyid) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### removeById() :id=sandkit.api.player.buildings.removebyid

```ts
sandkit.api.player.buildings.removeById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:152](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L152)

Remove a structure unlock from the player.

##### Parameters

###### structureId

`string`

Registered structure id string.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.player.inventory

Player inventory helpers.

### Functions <!-- {docsify-ignore} -->

#### addById() :id=sandkit.api.player.inventory.addbyid

```ts
sandkit.api.player.inventory.addById(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L117)

Add an item to inventory by item id.

##### Parameters

###### itemId

`string`

Registered item id string.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~addFromId()~~ :id=sandkit.api.player.inventory.addfromid

```ts
sandkit.api.player.inventory.addFromId(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L124)

##### Parameters

###### itemId

`string`

##### Returns

`void`

##### Deprecated

Use [addById](#addbyid) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.processing

### Interfaces <!-- {docsify-ignore} -->

#### WeightedRecipeOutput :id=sandkit.api.processing.weightedrecipeoutput

<p class="smt-member-path"><code>sandkit.api.processing.WeightedRecipeOutput</code></p>
Defined in: [sandkit/api/processing.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L30)

Weighted element output entry shared by machine recipes.

##### Properties

###### elementType

```ts
elementType: ElementType
```

Defined in: [sandkit/api/processing.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L32)

Output element type (1–255).

###### chance

```ts
chance: number
```

Defined in: [sandkit/api/processing.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L34)

Output probability from 0 to 1.

***

#### PlanterBoxRecipeDefinitionV1 :id=sandkit.api.processing.planterboxrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.processing.PlanterBoxRecipeDefinitionV1</code></p>
Defined in: [sandkit/api/processing.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L38)

Planter box grower recipe definition.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/processing.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L40)

Input element type placed on the grower.

###### output

```ts
output: ElementType
```

Defined in: [sandkit/api/processing.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L42)

Output element type produced by the grower.

###### chance?

```ts
optional chance?: number
```

Defined in: [sandkit/api/processing.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L44)

Success chance from 0 to 1. Default 1.

***

#### ShakerRecipeDefinitionV1 :id=sandkit.api.processing.shakerrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.processing.ShakerRecipeDefinitionV1</code></p>
Defined in: [sandkit/api/processing.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L48)

Shaker recipe definition.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/processing.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L50)

Input element type dropped on the shaker.

###### outputsAbove

```ts
outputsAbove: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/processing.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L52)

Weighted outputs ejected upward.

###### outputsBelow

```ts
outputsBelow: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/processing.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L54)

Weighted outputs ejected downward.

***

#### KineticPressRecipeDefinitionV1 :id=sandkit.api.processing.kineticpressrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.processing.KineticPressRecipeDefinitionV1</code></p>
Defined in: [sandkit/api/processing.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L58)

Kinetic press recipe definition.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/processing.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L60)

Input element type processed by the press.

###### minimumDownwardVelocity

```ts
minimumDownwardVelocity: number
```

Defined in: [sandkit/api/processing.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L62)

Minimum downward velocity required to trigger the press.

###### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/processing.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L64)

Weighted outputs produced by the press.

### Functions <!-- {docsify-ignore} -->

#### registerGrower() :id=sandkit.api.processing.registergrower

```ts
sandkit.api.processing.registerGrower(definition: PlanterBoxRecipeDefinitionV1): void
```

Defined in: [sandkit/api/processing.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L15)

Register a planter box grower recipe.

##### Parameters

###### definition

[`PlanterBoxRecipeDefinitionV1`](#planterboxrecipedefinitionv1)

Grower input/output recipe.

##### Returns

`void`

***

#### registerShaker() :id=sandkit.api.processing.registershaker

```ts
sandkit.api.processing.registerShaker(definition: ShakerRecipeDefinitionV1): void
```

Defined in: [sandkit/api/processing.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L21)

Register a shaker recipe.

##### Parameters

###### definition

[`ShakerRecipeDefinitionV1`](#shakerrecipedefinitionv1)

Shaker input and weighted outputs.

##### Returns

`void`

***

#### registerKineticPress() :id=sandkit.api.processing.registerkineticpress

```ts
sandkit.api.processing.registerKineticPress(definition: KineticPressRecipeDefinitionV1): void
```

Defined in: [sandkit/api/processing.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L27)

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

#### ProgressionCompletionRequestV1 :id=sandkit.api.progression.progressioncompletionrequestv1

<p class="smt-member-path"><code>sandkit.api.progression.ProgressionCompletionRequestV1</code></p>
Defined in: [sandkit/api/progression.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L25)

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

Defined in: [sandkit/api/progression.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L27)

Progression step or quest identifier.

### Functions <!-- {docsify-ignore} -->

#### complete() :id=sandkit.api.progression.complete

```ts
sandkit.api.progression.complete(request: ProgressionCompletionRequestV1): boolean
```

Defined in: [sandkit/api/progression.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L22)

Mark a progression step complete. Return true when completion succeeds.

##### Parameters

###### request

[`ProgressionCompletionRequestV1`](#progressioncompletionrequestv1)

Progression id and optional metadata for the step.

##### Returns

`boolean`

##### Example

```ts
const completed = api.progression.complete({
  domain: "objective",
  id: "all",
});
```

---

## sandkit.api.projectiles

### Interfaces <!-- {docsify-ignore} -->

#### ProjectileDefinition :id=sandkit.api.projectiles.projectiledefinition

<p class="smt-member-path"><code>sandkit.api.projectiles.ProjectileDefinition</code></p>
Defined in: [sandkit/api/projectiles.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L59)

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

Defined in: [sandkit/api/projectiles.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L60)

###### sprite

```ts
sprite: object
```

Defined in: [sandkit/api/projectiles.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L61)

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

Defined in: [sandkit/api/projectiles.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L66)

Returns spawn-time physics and visual options.

###### Returns

`Record`\<`string`, `unknown`\>

###### getModData?

```ts
optional getModData?: (state: unknown, projectile: Projectile) => Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L68)

Optional per-projectile mutable data factory.

###### Parameters

###### state

`unknown`

###### projectile

[`Projectile`](#projectile)

###### Returns

`Record`\<`string`, `unknown`\>

***

#### ProjectileBlueprint :id=sandkit.api.projectiles.projectileblueprint

<p class="smt-member-path"><code>sandkit.api.projectiles.ProjectileBlueprint</code></p>
Defined in: [sandkit/api/projectiles.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L73)

Blueprint used to spawn a projectile.

##### Properties

###### opts

```ts
opts: Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L74)

###### type

```ts
type: unknown
```

Defined in: [sandkit/api/projectiles.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L75)

***

#### Projectile :id=sandkit.api.projectiles.projectile

<p class="smt-member-path"><code>sandkit.api.projectiles.Projectile</code></p>
Defined in: [sandkit/api/projectiles.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L79)

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

Defined in: [sandkit/api/projectiles.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L80)

###### x

```ts
x: number
```

Defined in: [sandkit/api/projectiles.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L81)

###### y

```ts
y: number
```

Defined in: [sandkit/api/projectiles.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L82)

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.projectiles.register

```ts
sandkit.api.projectiles.register(definition: ProjectileDefinition): void
```

Defined in: [sandkit/api/projectiles.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L13)

Register a projectile definition.

##### Parameters

###### definition

[`ProjectileDefinition`](#projectiledefinition)

Projectile id, sprite, and runtime options factory.

##### Returns

`void`

***

#### getDefinitionById() :id=sandkit.api.projectiles.getdefinitionbyid

```ts
sandkit.api.projectiles.getDefinitionById(projectileId: string): ProjectileDefinition | undefined
```

Defined in: [sandkit/api/projectiles.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L19)

Return a projectile definition by string id.

##### Parameters

###### projectileId

`string`

Registered projectile id.

##### Returns

[`ProjectileDefinition`](#projectiledefinition) \| `undefined`

***

#### createBlueprintFromId() :id=sandkit.api.projectiles.createblueprintfromid

```ts
sandkit.api.projectiles.createBlueprintFromId(projectileId: string): ProjectileBlueprint
```

Defined in: [sandkit/api/projectiles.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L26)

Build a spawn blueprint from a projectile string id.

##### Parameters

###### projectileId

`string`

Registered projectile id.

##### Returns

[`ProjectileBlueprint`](#projectileblueprint)

Blueprint passed to [spawnAtWorld](#spawnatworld).

***

#### getAll() :id=sandkit.api.projectiles.getall

```ts
sandkit.api.projectiles.getAll(): Projectile[]
```

Defined in: [sandkit/api/projectiles.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L29)

Return all active projectiles.

##### Returns

[`Projectile`](#projectile)[]

***

#### getById() :id=sandkit.api.projectiles.getbyid

```ts
sandkit.api.projectiles.getById(projectileId: number): Projectile | undefined
```

Defined in: [sandkit/api/projectiles.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L35)

Return a projectile by numeric id.

##### Parameters

###### projectileId

`number`

Runtime projectile id.

##### Returns

[`Projectile`](#projectile) \| `undefined`

***

#### remove() :id=sandkit.api.projectiles.remove

```ts
sandkit.api.projectiles.remove(projectile: Projectile): void
```

Defined in: [sandkit/api/projectiles.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L41)

Remove a projectile from the world.

##### Parameters

###### projectile

[`Projectile`](#projectile)

Projectile instance to remove.

##### Returns

`void`

***

#### spawnAtWorld() :id=sandkit.api.projectiles.spawnatworld

```ts
sandkit.api.projectiles.spawnAtWorld(worldX: number, worldY: number, angle: number, blueprint: ProjectileBlueprint): Projectile
```

Defined in: [sandkit/api/projectiles.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L51)

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

#### int() :id=sandkit.api.random.int

```ts
sandkit.api.random.int(min: number, max: number): number
```

Defined in: [sandkit/api/random.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/random.d.ts#L14)

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

#### float() :id=sandkit.api.random.float

```ts
sandkit.api.random.float(min: number, max: number): number
```

Defined in: [sandkit/api/random.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/random.d.ts#L20)

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

#### castFromWorld() :id=sandkit.api.raycast.castfromworld

```ts
sandkit.api.raycast.castFromWorld(startWorldX: number, startWorldY: number, angle: number, maxDistance: number): Vector2 & object | null
```

Defined in: [sandkit/api/raycast.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/raycast.d.ts#L18)

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

#### ContactRecipeDefinitionV1 :id=sandkit.api.reactions.contactrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.reactions.ContactRecipeDefinitionV1</code></p>
Defined in: [sandkit/api/reactions.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L29)

Contact reaction recipe definition.

##### Properties

###### inputA

```ts
inputA: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L31)

First reacting element type.

###### inputB

```ts
inputB: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L33)

Second reacting element type.

###### outputA

```ts
outputA: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L35)

Element type produced from input A, or null for no output.

###### outputB

```ts
outputB: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L37)

Element type produced from input B, or null for no output.

###### orientation?

```ts
optional orientation?: "any" | "stacked"
```

Defined in: [sandkit/api/reactions.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L39)

Contact layout requirement. Default `"any"`.

### Functions <!-- {docsify-ignore} -->

#### registerContact() :id=sandkit.api.reactions.registercontact

```ts
sandkit.api.reactions.registerContact(definition: ContactRecipeDefinitionV1): void
```

Defined in: [sandkit/api/reactions.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L26)

Register a contact reaction between elements.

##### Parameters

###### definition

[`ContactRecipeDefinitionV1`](#contactrecipedefinitionv1)

Contact recipe inputs, outputs, and orientation.

##### Returns

`void`

##### Example

```ts
api.reactions.registerContact({
  inputA: "water",
  inputB: "examplePowder",
  outputA: "steam",
  outputB: null,
  orientation: "any",
});
```

---

## sandkit.api.rendering

### Functions <!-- {docsify-ignore} -->

#### getDrawPositionAtCell() :id=sandkit.api.rendering.getdrawpositionatcell

```ts
sandkit.api.rendering.getDrawPositionAtCell(...args: CellCoordinates): Vector2
```

Defined in: [sandkit/api/rendering.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L16)

Return screen draw position for a grid cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`Vector2`](api/shared.player.md#vector2)

***

#### getDrawPositionAtWorld() :id=sandkit.api.rendering.getdrawpositionatworld

```ts
sandkit.api.rendering.getDrawPositionAtWorld(worldX: number, worldY: number): Vector2
```

Defined in: [sandkit/api/rendering.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L33)

Return screen draw position for a world-space point.

##### Parameters

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

##### Returns

[`Vector2`](api/shared.player.md#vector2)

##### Example

```ts
api.events.on("frame:render", () => {
  const drawPos = api.rendering.getDrawPositionAtWorld(worldX, worldY);
  drawMarker(drawPos.x, drawPos.y);
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getGridMetrics() :id=sandkit.api.rendering.getgridmetrics

```ts
sandkit.api.rendering.getGridMetrics(): object
```

Defined in: [sandkit/api/rendering.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L42)

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

##### Example

```ts
const { cellSize, snapGridCellSize } = api.rendering.getGridMetrics();
```

***

#### getOverlayViewportSize() :id=sandkit.api.rendering.getoverlayviewportsize

```ts
sandkit.api.rendering.getOverlayViewportSize(): object
```

Defined in: [sandkit/api/rendering.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L44)

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

#### withOverlayContext() :id=sandkit.api.rendering.withoverlaycontext

```ts
sandkit.api.rendering.withOverlayContext<T>(callback: (context: CanvasRenderingContext2D) => T): T
```

Defined in: [sandkit/api/rendering.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L56)

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

##### Example

```ts
api.rendering.withOverlayContext((context) => {
  context.fillRect(0, 0, 16, 16);
});
```

---

## sandkit.api.resources

### Functions <!-- {docsify-ignore} -->

#### collectFluxiteAtCell() :id=sandkit.api.resources.collectfluxiteatcell

```ts
sandkit.api.resources.collectFluxiteAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/resources.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/resources.d.ts#L16)

Collect fluxite at the given cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

***

#### updateEnergy() :id=sandkit.api.resources.updateenergy

```ts
sandkit.api.resources.updateEnergy(amount: number, options?: object): void
```

Defined in: [sandkit/api/resources.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/resources.d.ts#L27)

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

##### Example

**Official \`api.resources.adjustEnergy\` (typed deprecated alias: updateEnergy)**

```ts
api.resources.adjustEnergy(100, { deferUi: true });
```

---

## sandkit.api.scene

### Functions <!-- {docsify-ignore} -->

#### getActive() :id=sandkit.api.scene.getactive

```ts
sandkit.api.scene.getActive(): Scene
```

Defined in: [sandkit/api/scene.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/scene.d.ts#L14)

Return the active scene.

##### Returns

[`Scene`](api/sandkit.enums.Scene.md)

### References <!-- {docsify-ignore} -->

#### Scene :id=sandkit.api.scene.scene

<p class="smt-member-path"><code>sandkit.api.scene.Scene</code></p>
Re-exports [Scene](api/sandkit.enums.Scene.md)

---

## sandkit.api.schedule

### Functions <!-- {docsify-ignore} -->

#### nextTick() :id=sandkit.api.schedule.nexttick

```ts
sandkit.api.schedule.nextTick(callback: () => void): void
```

Defined in: [sandkit/api/schedule.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/schedule.d.ts#L20)

Run a callback on the next game tick.

##### Parameters

###### callback

() => `void`

Function invoked once on the next tick.

##### Returns

`void`

##### Example

```ts
api.schedule.nextTick(() => {
  runDeferredWork();
});
```

---

## sandkit.api.settings

### Type Aliases <!-- {docsify-ignore} -->

#### FieldId :id=sandkit.api.settings.fieldid

```ts
sandkit.api.settings.FieldId = LooseString<never>
```

Defined in: [sandkit/api/settings.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L34)

Settings field id. Any string is allowed.

***

#### ConfigValueV1 :id=sandkit.api.settings.configvaluev1

```ts
sandkit.api.settings.ConfigValueV1 = string | number | boolean | null
```

Defined in: [sandkit/api/settings.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L37)

Settings field value shape.

### Functions <!-- {docsify-ignore} -->

#### get() :id=sandkit.api.settings.get

```ts
sandkit.api.settings.get(fieldId: string & object): ConfigValueV1 | undefined
```

Defined in: [sandkit/api/settings.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L15)

Return a settings field value by id.

##### Parameters

###### fieldId

`string` & `object`

Settings field identifier.

##### Returns

[`ConfigValueV1`](#configvaluev1) \| `undefined`

***

#### getAll() :id=sandkit.api.settings.getall

```ts
sandkit.api.settings.getAll(): Readonly<Record<string, ConfigValueV1>>
```

Defined in: [sandkit/api/settings.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L17)

Return all settings as a read-only map.

##### Returns

`Readonly`\<`Record`\<`string`, [`ConfigValueV1`](#configvaluev1)\>\>

***

#### onChange() :id=sandkit.api.settings.onchange

```ts
sandkit.api.settings.onChange(callback: (values: Readonly<Record<string, ConfigValueV1>>) => void): () => void
```

Defined in: [sandkit/api/settings.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L29)

Subscribe to settings changes. Return an unsubscribe function.

##### Parameters

###### callback

(`values`: `Readonly`\<`Record`\<`string`, [`ConfigValueV1`](#configvaluev1)\>\>) => `void`

Called with the full settings map after a change.

##### Returns

() => `void`

##### Example

```ts
const unsubscribe = api.settings.onChange((values) => {
  applySettings(values);
});
```

---

## sandkit.api.shared

### Namespaces <!-- {docsify-ignore} -->

- [buffers](api/sandkit.api.shared.buffers.md)

### Type Aliases <!-- {docsify-ignore} -->

#### SharedArray :id=sandkit.api.shared.sharedarray

```ts
sandkit.api.shared.SharedArray = Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array
```

Defined in: [shared/api/shared.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L29)

Typed array backing a shared buffer.

Use [SharedArrayType](#sharedarraytype) when creating or requiring a buffer. The runtime
returns the matching `*Array` constructor for the configured type.

***

#### SharedArrayType :id=sandkit.api.shared.sharedarraytype

```ts
sandkit.api.shared.SharedArrayType = "uint8" | "uint16" | "uint32" | "int8" | "int16" | "int32" | "float32" | "float64"
```

Defined in: [shared/api/shared.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L40)

Discriminator for the underlying typed array kind.

---

## sandkit.api.shared.buffers

Shared buffer ensure and lookup.

### Functions <!-- {docsify-ignore} -->

#### ensure() :id=sandkit.api.shared.buffers.ensure

```ts
sandkit.api.shared.buffers.ensure(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L30)

Create or return a named shared buffer with type and length.

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

##### Example

```ts
const counts = api.shared.buffers.ensure("counts", {
  type: "uint32",
  length: 4,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~create()~~ :id=sandkit.api.shared.buffers.create

```ts
sandkit.api.shared.buffers.create(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L40)

##### Parameters

###### key

`string`

###### config

###### type

[`SharedArrayType`](api/sandkit.api.shared.md#sharedarraytype)

###### length

`number`

##### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray)

##### Deprecated

Use [ensure](#ensure) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### get() :id=sandkit.api.shared.buffers.get

```ts
sandkit.api.shared.buffers.get(key: string): SharedArray | undefined
```

Defined in: [shared/api/shared.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L20)

Look up a named shared buffer without creating it.

##### Parameters

###### key

`string`

Buffer name shared across threads.

##### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray) \| `undefined`

The typed array, or `undefined` when the buffer does not exist.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.signals

### Namespaces <!-- {docsify-ignore} -->

- [targets](api/sandkit.api.signals.targets.md)

### Type Aliases <!-- {docsify-ignore} -->

#### StructureType :id=sandkit.api.signals.structuretype

```ts
sandkit.api.signals.StructureType = unknown
```

Defined in: [sandkit/api/signals.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L52)

Structure type id or enum value.

***

#### Structure :id=sandkit.api.signals.structure

```ts
sandkit.api.signals.Structure = unknown
```

Defined in: [sandkit/api/signals.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L54)

Structure instance in the world.

***

#### SignalTargetPayloadV1 :id=sandkit.api.signals.signaltargetpayloadv1

```ts
sandkit.api.signals.SignalTargetPayloadV1 = unknown
```

Defined in: [sandkit/api/signals.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L56)

Payload delivered to a signal target handler.

---

## sandkit.api.signals.targets

Signal target registration for structure types.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.signals.targets.register

```ts
sandkit.api.signals.targets.register(structureTypeOrId: unknown, apply: (structure: unknown, payload: unknown) => void): void
```

Defined in: [sandkit/api/signals.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L45)

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

##### Example

```ts
api.signals.targets.register("exampleMachine", (structure, payload) => {
  api.structures.processing.setEnabledAtCell(structure.x, structure.y, payload.combined);
});
```

---

## sandkit.api.sound

### Interfaces <!-- {docsify-ignore} -->

#### SoundHandle :id=sandkit.api.sound.soundhandle

<p class="smt-member-path"><code>sandkit.api.sound.SoundHandle</code></p>
Defined in: [sandkit/api/sound.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L85)

Handle returned from a play call.

##### Methods

###### stop()

```ts
stop(): void
```

Defined in: [sandkit/api/sound.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L87)

Stop this sound instance.

###### Returns

`void`

***

#### SoundLayer :id=sandkit.api.sound.soundlayer

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayer</code></p>
Defined in: [sandkit/api/sound.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L91)

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

Defined in: [sandkit/api/sound.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L93)

Sound id for this layer.

###### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L95)

Layer volume multiplier.

###### delay?

```ts
optional delay?: number
```

Defined in: [sandkit/api/sound.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L97)

Delay in milliseconds before this layer plays.

###### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L99)

Playback rate for this layer.

***

#### SoundOptions :id=sandkit.api.sound.soundoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundOptions</code></p>
Defined in: [sandkit/api/sound.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L104)

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

Defined in: [sandkit/api/sound.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L106)

Volume multiplier (0–1 typical).

###### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L108)

Playback rate multiplier.

###### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L110)

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

Defined in: [sandkit/api/sound.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L112)

When true, loop until stopped.

###### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L114)

Key used with rateLimitMs to dedupe rapid replays.

###### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L116)

Minimum ms between plays with the same rateLimitKey.

***

#### SoundLayersOptions :id=sandkit.api.sound.soundlayersoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayersOptions</code></p>
Defined in: [sandkit/api/sound.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L121)

Shared options for [playLayers](#playlayers).

##### Properties

###### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L123)

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

Defined in: [sandkit/api/sound.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L125)

Volume multiplier applied to all layers.

###### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L127)

Key used with rateLimitMs to dedupe rapid replays.

###### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L129)

Minimum ms between plays with the same rateLimitKey.

### Functions <!-- {docsify-ignore} -->

#### play() :id=sandkit.api.sound.play

```ts
sandkit.api.sound.play(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L17)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### playActive() :id=sandkit.api.sound.playactive

```ts
sandkit.api.sound.playActive(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L27)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### playLayers() :id=sandkit.api.sound.playlayers

```ts
sandkit.api.sound.playLayers(layers: SoundLayer[], options?: SoundLayersOptions): SoundHandle[]
```

Defined in: [sandkit/api/sound.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L37)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### calculateDistanceOptionsAtWorld() :id=sandkit.api.sound.calculatedistanceoptionsatworld

```ts
sandkit.api.sound.calculateDistanceOptionsAtWorld(worldX: number, worldY: number, baseVolume?: number): SoundOptions
```

Defined in: [sandkit/api/sound.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L48)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### stopBySoundId() :id=sandkit.api.sound.stopbysoundid

```ts
sandkit.api.sound.stopBySoundId(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L61)

Stop a sound by id.

##### Parameters

###### soundId

`string`

Registered sound identifier to stop.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~stopById()~~ :id=sandkit.api.sound.stopbyid

```ts
sandkit.api.sound.stopById(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L68)

##### Parameters

###### soundId

`string`

##### Returns

`void`

##### Deprecated

Use [stopBySoundId](#stopbysoundid) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### stopActive() :id=sandkit.api.sound.stopactive

```ts
sandkit.api.sound.stopActive(): void
```

Defined in: [sandkit/api/sound.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L75)

Stop the active sound channel.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### stopAll() :id=sandkit.api.sound.stopall

```ts
sandkit.api.sound.stopAll(): void
```

Defined in: [sandkit/api/sound.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L82)

Stop all playing sounds.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.sprites

### Interfaces <!-- {docsify-ignore} -->

#### SpriteLoadOptions :id=sandkit.api.sprites.spriteloadoptions

<p class="smt-member-path"><code>sandkit.api.sprites.SpriteLoadOptions</code></p>
Defined in: [sandkit/api/sprites.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L44)

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

Defined in: [sandkit/api/sprites.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L46)

Packed RGB tint applied after load.

### Type Aliases <!-- {docsify-ignore} -->

#### LoadedSprite :id=sandkit.api.sprites.loadedsprite

```ts
sandkit.api.sprites.LoadedSprite = unknown
```

Defined in: [sandkit/api/sprites.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L41)

Loaded sprite handle (runtime texture or display object).

### Functions <!-- {docsify-ignore} -->

#### load() :id=sandkit.api.sprites.load

```ts
sandkit.api.sprites.load(spriteId: string, path: string, options?: SpriteLoadOptions): Promise<void>
```

Defined in: [sandkit/api/sprites.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L15)

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

#### loadFromMod() :id=sandkit.api.sprites.loadfrommod

```ts
sandkit.api.sprites.loadFromMod(spriteId: string, relativePath: string, options?: SpriteLoadOptions): Promise<void>
```

Defined in: [sandkit/api/sprites.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L22)

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

#### getById() :id=sandkit.api.sprites.getbyid

```ts
sandkit.api.sprites.getById(spriteId: string): unknown
```

Defined in: [sandkit/api/sprites.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L31)

Return a loaded sprite by id.

##### Parameters

###### spriteId

`string`

Sprite id from [load](#load) or [loadFromMod](#loadfrommod).

##### Returns

`unknown`

***

#### hideAllPlayerModSprites() :id=sandkit.api.sprites.hideallplayermodsprites

```ts
sandkit.api.sprites.hideAllPlayerModSprites(): void
```

Defined in: [sandkit/api/sprites.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L33)

Hide all player mod-attached sprites.

##### Returns

`void`

***

#### rotatePlayerModSprites() :id=sandkit.api.sprites.rotateplayermodsprites

```ts
sandkit.api.sprites.rotatePlayerModSprites(angle: number): void
```

Defined in: [sandkit/api/sprites.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L38)

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

#### ensure() :id=sandkit.api.storage.ensure

```ts
sandkit.api.storage.ensure(modId: string): JsonObjectV1
```

Defined in: [sandkit/api/storage.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L15)

Ensure storage exists for a mod id.

##### Parameters

###### modId

`string`

Mod identifier (typically `modinfo.id`).

##### Returns

[`JsonObjectV1`](api/shared.jsonvalue.md#jsonobjectv1)

***

#### get() :id=sandkit.api.storage.get

```ts
sandkit.api.storage.get(modId: string, key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/storage.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L21)

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

#### set() :id=sandkit.api.storage.set

```ts
sandkit.api.storage.set(modId: string, key: string, value: JsonValueV1): void
```

Defined in: [sandkit/api/storage.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L28)

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

#### remove() :id=sandkit.api.storage.remove

```ts
sandkit.api.storage.remove(modId: string, key: string): void
```

Defined in: [sandkit/api/storage.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L34)

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

#### get() :id=sandkit.api.storage.local.get

```ts
sandkit.api.storage.local.get(key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/storage.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L42)

Read a local storage value by key.

##### Parameters

###### key

`string`

Storage key.

##### Returns

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1) \| `undefined`

***

#### set() :id=sandkit.api.storage.local.set

```ts
sandkit.api.storage.local.set(key: string, value: JsonValueV1): void
```

Defined in: [sandkit/api/storage.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L48)

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

#### remove() :id=sandkit.api.storage.local.remove

```ts
sandkit.api.storage.local.remove(key: string): void
```

Defined in: [sandkit/api/storage.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L53)

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

#### registerConveyorType() :id=sandkit.api.structureBehaviors.registerconveyortype

```ts
sandkit.api.structureBehaviors.registerConveyorType(structureId: string, options?: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structureBehaviors.d.ts#L24)

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

##### Example

```ts
api.structureBehaviors.registerConveyorType(
  "exampleConveyor",
  { runWith: "right" },
);
```

***

#### registerLauncherType() :id=sandkit.api.structureBehaviors.registerlaunchertype

```ts
sandkit.api.structureBehaviors.registerLauncherType(definition: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structureBehaviors.d.ts#L39)

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

#### StructureBuildMode :id=sandkit.api.structures.structurebuildmode

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildMode</code></p>
Defined in: [sandkit/api/structures.d.ts:567](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L567)

Build mode entry for a structure definition.

##### Properties

###### type

```ts
type: string
```

Defined in: [sandkit/api/structures.d.ts:568](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L568)

###### directions?

```ts
optional directions?: string[]
```

Defined in: [sandkit/api/structures.d.ts:569](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L569)

###### spanTiles?

```ts
optional spanTiles?: number
```

Defined in: [sandkit/api/structures.d.ts:575](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L575)

Fixed span length in tiles for line-linked structures.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### StructureVariant :id=sandkit.api.structures.structurevariant

<p class="smt-member-path"><code>sandkit.api.structures.StructureVariant</code></p>
Defined in: [sandkit/api/structures.d.ts:579](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L579)

Rotated variant entry for a structure definition.

##### Properties

###### id

```ts
id: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:580](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L580)

###### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:581](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L581)

***

#### StructureTooltipHover :id=sandkit.api.structures.structuretooltiphover

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHover</code></p>
Defined in: [sandkit/api/structures.d.ts:612](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L612)

Custom hover tooltip driven by structure `data` fields.

##### Example

**Official example**

```ts
tooltipHover: {
  type: "custom",
  dataFieldMessage: {
    message: "Mode {mode}; channel {channel}.",
    messageKey: "mods|example|machineTooltip",
    fields: [
      {
        param: "mode",
        field: "mode",
        valueLabels: { input: "Receiving", output: "Sending" },
        valueKeys: {
          input: "mods|example|receiving",
          output: "mods|example|sending",
        },
      },
      { param: "channel", field: "channel", fallback: 1, round: true },
    ],
  },
}
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Properties

###### type

```ts
type: "custom"
```

Defined in: [sandkit/api/structures.d.ts:613](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L613)

###### dataFieldMessage

```ts
dataFieldMessage: object
```

Defined in: [sandkit/api/structures.d.ts:614](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L614)

###### message?

```ts
optional message?: string
```

###### messageKey?

```ts
optional messageKey?: string
```

###### fields

```ts
fields: readonly StructureTooltipHoverField[]
```

***

#### StructureTooltipHoverField :id=sandkit.api.structures.structuretooltiphoverfield

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHoverField</code></p>
Defined in: [sandkit/api/structures.d.ts:622](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L622)

One interpolated field in a [StructureTooltipHover](#structuretooltiphover) message.

##### Properties

###### param

```ts
param: string
```

Defined in: [sandkit/api/structures.d.ts:623](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L623)

###### field

```ts
field: string
```

Defined in: [sandkit/api/structures.d.ts:624](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L624)

###### fallback?

```ts
optional fallback?: string | number
```

Defined in: [sandkit/api/structures.d.ts:625](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L625)

###### round?

```ts
optional round?: boolean
```

Defined in: [sandkit/api/structures.d.ts:626](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L626)

###### valueLabels?

```ts
optional valueLabels?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:627](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L627)

###### valueKeys?

```ts
optional valueKeys?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:628](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L628)

***

#### StructureSpritesheet :id=sandkit.api.structures.structurespritesheet

<p class="smt-member-path"><code>sandkit.api.structures.StructureSpritesheet</code></p>
Defined in: [sandkit/api/structures.d.ts:632](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L632)

Spritesheet animation on a structure render block.

##### Properties

###### frameSize

```ts
frameSize: object
```

Defined in: [sandkit/api/structures.d.ts:633](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L633)

###### width

```ts
width: number
```

###### height

```ts
height: number
```

###### frames

```ts
frames: number
```

Defined in: [sandkit/api/structures.d.ts:634](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L634)

###### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:635](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L635)

###### rowDataField?

```ts
optional rowDataField?: string
```

Defined in: [sandkit/api/structures.d.ts:637](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L637)

When set, frame row follows this structure `data` field.

***

#### StructureRenderUi :id=sandkit.api.structures.structurerenderui

<p class="smt-member-path"><code>sandkit.api.structures.StructureRenderUi</code></p>
Defined in: [sandkit/api/structures.d.ts:641](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L641)

Hotbar / build-menu UI sprite settings.

##### Properties

###### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:642](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L642)

###### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:643](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L643)

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

Defined in: [sandkit/api/structures.d.ts:644](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L644)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### outline?

```ts
optional outline?: boolean
```

Defined in: [sandkit/api/structures.d.ts:645](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L645)

###### width?

```ts
optional width?: string
```

Defined in: [sandkit/api/structures.d.ts:646](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L646)

###### height?

```ts
optional height?: string
```

Defined in: [sandkit/api/structures.d.ts:647](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L647)

###### clipToBounds?

```ts
optional clipToBounds?: boolean
```

Defined in: [sandkit/api/structures.d.ts:648](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L648)

***

#### StructureRender :id=sandkit.api.structures.structurerender

<p class="smt-member-path"><code>sandkit.api.structures.StructureRender</code></p>
Defined in: [sandkit/api/structures.d.ts:652](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L652)

Render settings for a structure definition.

##### Properties

###### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:653](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L653)

###### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:654](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L654)

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

Defined in: [sandkit/api/structures.d.ts:655](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L655)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

###### z?

```ts
optional z?: number
```

Defined in: [sandkit/api/structures.d.ts:656](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L656)

###### ambienceGroup?

```ts
optional ambienceGroup?: string
```

Defined in: [sandkit/api/structures.d.ts:657](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L657)

###### ui?

```ts
optional ui?: StructureRenderUi
```

Defined in: [sandkit/api/structures.d.ts:658](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L658)

###### spritesheet?

```ts
optional spritesheet?: StructureSpritesheet
```

Defined in: [sandkit/api/structures.d.ts:659](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L659)

***

#### SandkitStructureDefinition :id=sandkit.api.structures.sandkitstructuredefinition

<p class="smt-member-path"><code>sandkit.api.structures.SandkitStructureDefinition</code></p>
Defined in: [sandkit/api/structures.d.ts:663](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L663)

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

Defined in: [sandkit/api/structures.d.ts:664](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L664)

###### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/structures.d.ts:665](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L665)

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:666](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L666)

###### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/structures.d.ts:667](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L667)

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:668](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L668)

###### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:669](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L669)

###### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:670](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L670)

###### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:671](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L671)

###### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:672](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L672)

###### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:673](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L673)

###### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:674](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L674)

###### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:675](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L675)

###### linkedClearance?

```ts
optional linkedClearance?: string
```

Defined in: [sandkit/api/structures.d.ts:681](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L681)

Linked placement clearance mode (for example `"allOrNothing"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### tooltipHover?

```ts
optional tooltipHover?: StructureTooltipHover
```

Defined in: [sandkit/api/structures.d.ts:687](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L687)

Custom hover tooltip over the built structure.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### rejectWhenBlocked?

```ts
optional rejectWhenBlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:689](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L689)

Reject placement when the footprint is blocked.

###### alwaysUnlocked?

```ts
optional alwaysUnlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:691](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L691)

Show in the build menu without research unlock.

###### descriptionParams?

```ts
optional descriptionParams?: Record<string, string | number>
```

Defined in: [sandkit/api/structures.d.ts:693](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L693)

Values interpolated into the structure description string.

***

#### StructureBuildOptions :id=sandkit.api.structures.structurebuildoptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildOptions</code></p>
Defined in: [sandkit/api/structures.d.ts:698](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L698)

Options passed to [buildAtCell](#buildatcell).

##### Indexable

```ts
[key: string]: unknown
```

***

#### StructureRemovalOptions :id=sandkit.api.structures.structureremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureRemovalOptions</code></p>
Defined in: [sandkit/api/structures.d.ts:703](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L703)

Options passed to [removeAtCell](#removeatcell).

##### Properties

###### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:705](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L705)

Also remove underlying terrain cells in the footprint.

###### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:707](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L707)

Skip visual teardown effects.

***

#### StructureBulkRemovalOptions :id=sandkit.api.structures.structurebulkremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBulkRemovalOptions</code></p>
Defined in: [sandkit/api/structures.d.ts:711](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L711)

Options passed to bulk structure removal helpers.

##### Properties

###### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:712](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L712)

###### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:713](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L713)

###### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:715](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L715)

When set, only remove structures at these positions.

###### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:716](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L716)

***

#### StructureProcessingContext :id=sandkit.api.structures.structureprocessingcontext

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingContext</code></p>
Defined in: [sandkit/api/structures.d.ts:724](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L724)

Context passed to structure processing callbacks.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Methods

###### getResolvedTypeAtCell()

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:730](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L730)

Return the resolved element type at a cell, or null.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### ~~getElementTypeAtCell()~~

```ts
getElementTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:737](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L737)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### Deprecated

Use [getResolvedTypeAtCell](#getresolvedtypeatcell) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### isCellEmptyAtCell()

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:744](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L744)

Return true when the cell has no element or terrain.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### ~~isCellEmpty()~~

```ts
isCellEmpty(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:751](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L751)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### Deprecated

Use [isCellEmptyAtCell](#iscellemptyatcell) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### commit()

```ts
commit(mutations: unknown): void
```

Defined in: [sandkit/api/structures.d.ts:760](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L760)

Commit batched grid mutations from the processing callback.

###### Parameters

###### mutations

`unknown`

Mutation writer payload accepted by the runtime.

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~StructureProcessorDefinitionV1~~ :id=sandkit.api.structures.structureprocessordefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessorDefinitionV1</code></p>
Defined in: [sandkit/api/structures.d.ts:768](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L768)

##### Deprecated

Use [StructureProcessingDefinitionV1](#structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md#register) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Properties

###### ~~intervalMs~~

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:770](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L770)

Tick interval in milliseconds. Must be > 0.

###### ~~process~~

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:772](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L772)

Synchronous callback invoked for each structure instance.

###### Parameters

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### context

[`StructureProcessingContext`](#structureprocessingcontext)

###### Returns

`void`

***

#### PlacementConfigIntegerField :id=sandkit.api.structures.placementconfigintegerfield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigIntegerField</code></p>
Defined in: [sandkit/api/structures.d.ts:779](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L779)

Integer placement field with optional bounds.

##### Properties

###### type

```ts
type: "integer"
```

Defined in: [sandkit/api/structures.d.ts:780](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L780)

###### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:781](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L781)

###### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:782](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L782)

###### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:783](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L783)

###### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:784](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L784)

###### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:785](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L785)

***

#### PlacementConfigChoiceField :id=sandkit.api.structures.placementconfigchoicefield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigChoiceField</code></p>
Defined in: [sandkit/api/structures.d.ts:789](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L789)

Choice placement field with labeled options.

##### Properties

###### type

```ts
type: "choice"
```

Defined in: [sandkit/api/structures.d.ts:790](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L790)

###### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:791](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L791)

###### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:792](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L792)

###### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:793](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L793)

***

#### PlacementConfigDefinition :id=sandkit.api.structures.placementconfigdefinition

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigDefinition</code></p>
Defined in: [sandkit/api/structures.d.ts:800](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L800)

Placement rule definition for a structure type.

##### Properties

###### structureId

```ts
structureId: string & object
```

Defined in: [sandkit/api/structures.d.ts:801](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L801)

###### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:802](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L802)

***

#### WeightedRefineryRecipeDefinitionV1 :id=sandkit.api.structures.weightedrefineryrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.WeightedRefineryRecipeDefinitionV1</code></p>
Defined in: [sandkit/api/structures.d.ts:813](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L813)

Weighted refinery recipe definition shape.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/structures.d.ts:814](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L814)

###### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:815](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L815)

***

#### StructureProcessingDefinitionV1 :id=sandkit.api.structures.structureprocessingdefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingDefinitionV1</code></p>
Defined in: [sandkit/api/structures.d.ts:819](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L819)

Custom structure processing definition shape.

##### Properties

###### structureType

```ts
structureType: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:820](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L820)

###### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:821](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L821)

###### process

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:822](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L822)

###### Parameters

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### context

[`StructureProcessingContext`](#structureprocessingcontext)

###### Returns

`void`

### Type Aliases <!-- {docsify-ignore} -->

#### PlacementConfigField :id=sandkit.api.structures.placementconfigfield

```ts
sandkit.api.structures.PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

Defined in: [sandkit/api/structures.d.ts:776](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L776)

Placement hotbar field definition.

***

#### PlanterBoxRecipeDefinitionV1 :id=sandkit.api.structures.planterboxrecipedefinitionv1

```ts
sandkit.api.structures.PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:806](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L806)

Planter box recipe definition shape.

***

#### ShakerRecipeDefinitionV1 :id=sandkit.api.structures.shakerrecipedefinitionv1

```ts
sandkit.api.structures.ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:808](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L808)

Shaker recipe definition shape.

***

#### KineticPressRecipeDefinitionV1 :id=sandkit.api.structures.kineticpressrecipedefinitionv1

```ts
sandkit.api.structures.KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:810](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L810)

Kinetic press recipe definition shape.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.structures.register

```ts
sandkit.api.structures.register(definition: SandkitStructureDefinition, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:152](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L152)

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

##### Example

```ts
api.structures.register({
  id: "exampleJunction",
  name: "Example Junction",
  nameKey: "structures|exampleJunction|name",
  description: "Links two fixed-span endpoints.",
  descriptionKey: "structures|exampleJunction|description",
  categoryKey: "logistics",
  buildModes: [{
    type: "line",
    directions: ["horizontal", "vertical"],
    spanTiles: 4,
  }],
  linkedClearance: "allOrNothing",
  tooltipHover,
  variants: [{
    id: "exampleJunction",
    angles: [-180, -90, 0, 90, 180],
  }],
  render: {
    imageName: "exampleJunction",
    size: { width: 16, height: 16 },
  },
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### updateDefinition() :id=sandkit.api.structures.updatedefinition

```ts
sandkit.api.structures.updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L177)

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

##### Example

```ts
api.structures.updateDefinition("exampleJunction", {
  buildModes: [{
    type: "line",
    directions: ["horizontal", "vertical"],
    spanTiles: 6,
  }],
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### registerVariant() :id=sandkit.api.structures.registervariant

```ts
sandkit.api.structures.registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:210](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L210)

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

##### Example

```ts
api.structures.registerVariant(
  "exampleStructure",
  {
    id: "exampleStructureVertical",
    angles: [-90, 90],
  },
  {
    addBuildMode: {
      type: "line",
      directions: ["vertical"],
      spanTiles: 4,
    },
  },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~addVariant()~~ :id=sandkit.api.structures.addvariant

```ts
sandkit.api.structures.addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L221)

##### Parameters

###### baseStructureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

###### variant

###### id

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

###### angles

`number`[]

###### options?

###### addBuildMode?

`unknown`

##### Returns

`void`

##### Deprecated

Use [registerVariant](#registervariant) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### registerPlacementConfig() :id=sandkit.api.structures.registerplacementconfig

```ts
sandkit.api.structures.registerPlacementConfig(definition: PlacementConfigDefinition): void
```

Defined in: [sandkit/api/structures.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L261)

Register placement rules for a structure.

##### Parameters

###### definition

[`PlacementConfigDefinition`](#placementconfigdefinition)

Hotbar placement field configuration.

##### Returns

`void`

##### Example

```ts
api.structures.registerPlacementConfig({
  structureId: "exampleStructure",
  fields: [
    {
      type: "integer",
      id: "channel",
      label: "Channel",
      default: 1,
      min: 1,
      max: 8,
    },
    {
      type: "choice",
      id: "mode",
      labelKey: "structures|exampleStructure|mode",
      default: "input",
      options: [
        { value: "input", label: "Input" },
        { value: "output", labelKey: "structures|exampleStructure|output" },
      ],
    },
  ],
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getAvailableTypes() :id=sandkit.api.structures.getavailabletypes

```ts
sandkit.api.structures.getAvailableTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:268](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L268)

Return structure types available for building.

##### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~getUnlockedTypes()~~ :id=sandkit.api.structures.getunlockedtypes

```ts
sandkit.api.structures.getUnlockedTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L275)

##### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

##### Deprecated

Use [getAvailableTypes](#getavailabletypes) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isBlockedByPlayerAtCell() :id=sandkit.api.structures.isblockedbyplayeratcell

```ts
sandkit.api.structures.isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L285)

Return true when the player blocks building at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isLauncherAtCell() :id=sandkit.api.structures.islauncheratcell

```ts
sandkit.api.structures.isLauncherAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:295](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L295)

Return true when a launcher structure is at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isLockedByType() :id=sandkit.api.structures.islockedbytype

```ts
sandkit.api.structures.isLockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L307)

Return structure lock state for a type.

Official docs list [isUnlockedByType](#isunlockedbytype) as a deprecated alias of this
function (same implementation and return value; names differ only).

##### Parameters

###### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type value or string id.

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~isUnlockedByType()~~ :id=sandkit.api.structures.isunlockedbytype

```ts
sandkit.api.structures.isUnlockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L314)

##### Parameters

###### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

##### Returns

`boolean`

##### Deprecated

Use [isLockedByType](#islockedbytype) instead. Same function as [isLockedByType](#islockedbytype); return value is not inverted.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### mapValueToSpritesheetIndex() :id=sandkit.api.structures.mapvaluetospritesheetindex

```ts
sandkit.api.structures.mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

Defined in: [sandkit/api/structures.d.ts:333](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L333)

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

##### Example

```ts
const index = api.structures.mapValueToSpritesheetIndex(
  pressure,
  [0, 25, 50, 75],
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### buildAtCell() :id=sandkit.api.structures.buildatcell

```ts
sandkit.api.structures.buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:345](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L345)

Build a structure at a cell. Main-thread writes are deferred.

##### Parameters

###### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~buildAtCellWhenIdle()~~ :id=sandkit.api.structures.buildatcellwhenidle

```ts
sandkit.api.structures.buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:354](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L354)

##### Parameters

###### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

##### Returns

`void`

##### Deprecated

Use [buildAtCell](#buildatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### removeAtCell() :id=sandkit.api.structures.removeatcell

```ts
sandkit.api.structures.removeAtCell(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L367)

Remove a structure at a cell. Main-thread writes are deferred.

##### Parameters

###### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~removeAtCellWhenIdle()~~ :id=sandkit.api.structures.removeatcellwhenidle

```ts
sandkit.api.structures.removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:376](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L376)

##### Parameters

###### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

##### Returns

`void`

##### Deprecated

Use [removeAtCell](#removeatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### removeBetweenCells() :id=sandkit.api.structures.removebetweencells

```ts
sandkit.api.structures.removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:391](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L391)

Remove structures between two cells. Main-thread writes are deferred.

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~removeBetweenCellsWhenIdle()~~ :id=sandkit.api.structures.removebetweencellswhenidle

```ts
sandkit.api.structures.removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:404](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L404)

##### Parameters

###### startCellX

`number`

###### startCellY

`number`

###### endCellX

`number`

###### endCellY

`number`

###### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

##### Returns

`void`

##### Deprecated

Use [removeBetweenCells](#removebetweencells) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### removeAtCells() :id=sandkit.api.structures.removeatcells

```ts
sandkit.api.structures.removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:428](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L428)

Remove structures at many cells. Main-thread writes are deferred.

##### Parameters

###### positions

[`Vector2`](api/shared.player.md#vector2)[]

Cell positions to clear.

###### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

Optional bulk-removal flags.

##### Returns

`void`

##### Example

```ts
api.structures.removeAtCells([
  { x: firstCellX, y: firstCellY },
  { x: secondCellX, y: secondCellY },
]);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~removeAtCellsWhenIdle()~~ :id=sandkit.api.structures.removeatcellswhenidle

```ts
sandkit.api.structures.removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:435](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L435)

##### Parameters

###### positions

[`Vector2`](api/shared.player.md#vector2)[]

###### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

##### Returns

`void`

##### Deprecated

Use [removeAtCells](#removeatcells) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~addProcessor()~~ :id=sandkit.api.structures.addprocessor

```ts
sandkit.api.structures.addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:445](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L445)

##### Parameters

###### structureId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

###### definition

[`StructureProcessorDefinitionV1`](#structureprocessordefinitionv1)

##### Returns

`void`

##### Deprecated

Use [processing.register](api/sandkit.api.structures.processing.md#register) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### forEachOfType :id=sandkit.api.structures.foreachoftype

<p class="smt-member-path"><code>sandkit.api.structures.forEachOfType</code></p>
Re-exports [forEachOfType](api/sandkit.api.structures.worker.md#foreachoftype)

***

#### getAtCell :id=sandkit.api.structures.getatcell

<p class="smt-member-path"><code>sandkit.api.structures.getAtCell</code></p>
Re-exports [getAtCell](api/sandkit.api.structures.worker.md#getatcell)

***

#### getDefinitionByType :id=sandkit.api.structures.getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.structures.getDefinitionByType</code></p>
Re-exports [getDefinitionByType](api/sandkit.api.structures.worker.md#getdefinitionbytype)

***

#### getTypeById :id=sandkit.api.structures.gettypebyid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeById</code></p>
Re-exports [getTypeById](api/sandkit.api.structures.worker.md#gettypebyid)

***

#### hasBuiltAtCell :id=sandkit.api.structures.hasbuiltatcell

<p class="smt-member-path"><code>sandkit.api.structures.hasBuiltAtCell</code></p>
Re-exports [hasBuiltAtCell](api/sandkit.api.structures.worker.md#hasbuiltatcell)

***

#### isType :id=sandkit.api.structures.istype

<p class="smt-member-path"><code>sandkit.api.structures.isType</code></p>
Re-exports [isType](api/sandkit.api.structures.worker.md#istype)

***

#### isTypeAtCell :id=sandkit.api.structures.istypeatcell

<p class="smt-member-path"><code>sandkit.api.structures.isTypeAtCell</code></p>
Re-exports [isTypeAtCell](api/sandkit.api.structures.worker.md#istypeatcell)

***

#### setSpritesheetIndex :id=sandkit.api.structures.setspritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndex</code></p>
Re-exports [setSpritesheetIndex](api/sandkit.api.structures.worker.md#setspritesheetindex)

***

#### setSpritesheetIndexAtCell :id=sandkit.api.structures.setspritesheetindexatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexAtCell</code></p>
Re-exports [setSpritesheetIndexAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexatcell)

***

#### setSpritesheetIndexByValue :id=sandkit.api.structures.setspritesheetindexbyvalue

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValue</code></p>
Re-exports [setSpritesheetIndexByValue](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalue)

***

#### setSpritesheetIndexByValueAtCell :id=sandkit.api.structures.setspritesheetindexbyvalueatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValueAtCell</code></p>
Re-exports [setSpritesheetIndexByValueAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalueatcell)

***

#### update :id=sandkit.api.structures.update

<p class="smt-member-path"><code>sandkit.api.structures.update</code></p>
Re-exports [update](api/sandkit.api.structures.worker.md#update)

***

#### updateData :id=sandkit.api.structures.updatedata

<p class="smt-member-path"><code>sandkit.api.structures.updateData</code></p>
Re-exports [updateData](api/sandkit.api.structures.worker.md#updatedata)

***

#### Structure :id=sandkit.api.structures.structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure</code></p>
Re-exports [Structure](api/sandkit.api.structures.worker.md#structure)

***

#### StructureType :id=sandkit.api.structures.structuretype

<p class="smt-member-path"><code>sandkit.api.structures.StructureType</code></p>
Re-exports [StructureType](api/sandkit.api.structures.worker.md#structuretype)

***

#### StructureId :id=sandkit.api.structures.structureid

<p class="smt-member-path"><code>sandkit.api.structures.StructureId</code></p>
Re-exports [StructureId](api/sandkit.api.structures.worker.md#structureid)

***

#### StructureRef :id=sandkit.api.structures.structureref

<p class="smt-member-path"><code>sandkit.api.structures.StructureRef</code></p>
Re-exports [StructureRef](api/sandkit.api.structures.worker.md#structureref)

***

#### getTypeFromId :id=sandkit.api.structures.gettypefromid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeFromId</code></p>
Re-exports [getTypeFromId](api/sandkit.api.structures.worker.md#gettypefromid)

***

#### setData :id=sandkit.api.structures.setdata

<p class="smt-member-path"><code>sandkit.api.structures.setData</code></p>
Re-exports [setData](api/sandkit.api.structures.worker.md#setdata)

---

## sandkit.api.structures.processing

Per-structure processing enablement and registration.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.structures.processing.register

```ts
sandkit.api.structures.processing.register(id: string & object, definition: StructureProcessingDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:544](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L544)

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

##### Example

```ts
api.structures.processing.register(
  "exampleStructure:process",
  {
    structureType: "exampleStructure",
    intervalMs: 250,
    process: (structure, context) => {
      const empty = context.isCellEmptyAtCell(
        structure.x,
        structure.y,
      );
    },
  },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setEnabledAtCell() :id=sandkit.api.structures.processing.setenabledatcell

```ts
sandkit.api.structures.processing.setEnabledAtCell(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:556](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L556)

Enable or disable processing at a cell.

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`boolean`

True when the enabled state changed.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~setEnabledAt()~~ :id=sandkit.api.structures.processing.setenabledat

```ts
sandkit.api.structures.processing.setEnabledAt(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:563](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L563)

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`boolean`

##### Deprecated

Use [setEnabledAtCell](#setenabledatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### isEnabledAtCell :id=sandkit.api.structures.processing.isenabledatcell

<p class="smt-member-path"><code>sandkit.api.structures.processing.isEnabledAtCell</code></p>
Re-exports [isEnabledAtCell](api/sandkit.api.structures.processing.worker.md#isenabledatcell)

***

#### isEnabledAt :id=sandkit.api.structures.processing.isenabledat

<p class="smt-member-path"><code>sandkit.api.structures.processing.isEnabledAt</code></p>
Re-exports [isEnabledAt](api/sandkit.api.structures.processing.worker.md#isenabledat)

---

## sandkit.api.structures.recipes

Structure recipe registration by machine kind.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.structures.recipes.register

<p class="smt-member-path"><code>sandkit.api.structures.recipes.register()</code></p>
##### Call Signature

```ts
register(id: "planterBox", definition: PlanterBoxRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:471](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L471)

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

###### Example

```ts
api.structures.recipes.register("kineticPress", {
  input: "sand",
  outputs: [
    { elementType: "compressedSand", chance: 1 },
  ],
  minimumDownwardVelocityCellsPerSecond: 20,
});
```

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Call Signature

```ts
register(id: "shaker", definition: ShakerRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:481](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L481)

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

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Call Signature

```ts
register(id: "kineticPress", definition: KineticPressRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:491](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L491)

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

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Call Signature

```ts
register(id: "condenser" | "steamDryer" | "synthesizer" | "snowmaker" | "smelter", definition: WeightedRefineryRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:501](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L501)

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

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.tech

### Namespaces <!-- {docsify-ignore} -->

- [conservatory](api/sandkit.api.tech.conservatory.md)

### Interfaces <!-- {docsify-ignore} -->

#### TechDefinition :id=sandkit.api.tech.techdefinition

<p class="smt-member-path"><code>sandkit.api.tech.TechDefinition</code></p>
Defined in: [sandkit/api/tech.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L145)

Tech definition shape.

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/tech.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L147)

Plain display name (when not using [nameKey](#namekey)).

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/tech.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L149)

Display name translation key.

###### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/tech.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L151)

Plain description (when not using [descriptionKey](#descriptionkey)).

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/tech.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L153)

Description translation key.

###### cost?

```ts
optional cost?: number
```

Defined in: [sandkit/api/tech.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L159)

Research cost.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### currencyType?

```ts
optional currencyType?: string
```

Defined in: [sandkit/api/tech.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L161)

Currency used for [cost](#cost) (for example `"gold"`).

###### branch?

```ts
optional branch?: string
```

Defined in: [sandkit/api/tech.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L163)

Tech tree branch id (often copied from the parent node).

###### unlocks?

```ts
optional unlocks?: object
```

Defined in: [sandkit/api/tech.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L165)

Content unlocked when this tech is researched.

###### structures?

```ts
optional structures?: readonly string[]
```

###### items?

```ts
optional items?: readonly string[]
```

###### requires?

```ts
optional requires?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L170)

Prerequisite tech ids.

***

#### TechGridPosition :id=sandkit.api.tech.techgridposition

<p class="smt-member-path"><code>sandkit.api.tech.TechGridPosition</code></p>
Defined in: [sandkit/api/tech.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L175)

Position on the tech grid.

##### Properties

###### x

```ts
x: number
```

Defined in: [sandkit/api/tech.d.ts:176](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L176)

###### y

```ts
y: number
```

Defined in: [sandkit/api/tech.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L177)

***

#### ConservatoryUnlocks :id=sandkit.api.tech.conservatoryunlocks

<p class="smt-member-path"><code>sandkit.api.tech.ConservatoryUnlocks</code></p>
Defined in: [sandkit/api/tech.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L181)

Unlock payload for [conservatory.appendUnlock](api/sandkit.api.tech.conservatory.md#appendunlock).

##### Properties

###### structures?

```ts
optional structures?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L183)

Structure ids to unlock.

###### items?

```ts
optional items?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L185)

Item ids to unlock.

### Type Aliases <!-- {docsify-ignore} -->

#### TechGridId :id=sandkit.api.tech.techgridid

```ts
sandkit.api.tech.TechGridId = Tech | LooseString<never> | TaggedNumber<"tech">
```

Defined in: [sandkit/api/tech.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L142)

Tech grid node id.
Built-in [TechEnum](api/sandkit.enums.Tech.md) values autocomplete; custom string ids and tagged handles are allowed.

### Functions <!-- {docsify-ignore} -->

#### getDefinitionById() :id=sandkit.api.tech.getdefinitionbyid

```ts
sandkit.api.tech.getDefinitionById(techId: TechGridId): TechDefinition | undefined
```

Defined in: [sandkit/api/tech.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L19)

Return a tech definition by string id.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

##### Returns

[`TechDefinition`](#techdefinition) \| `undefined`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### updateDefinition() :id=sandkit.api.tech.updatedefinition

```ts
sandkit.api.tech.updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void
```

Defined in: [sandkit/api/tech.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L36)

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

##### Example

```ts
api.tech.updateDefinition("exampleTech", {
  cost: 200,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### registerDefinition() :id=sandkit.api.tech.registerdefinition

```ts
sandkit.api.tech.registerDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L57)

Register a new tech definition by id.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

###### definition

[`TechDefinition`](#techdefinition)

Full tech definition to register.

##### Returns

`void`

##### Example

```ts
api.tech.registerDefinition("exampleTech", {
  name: "Example research",
  nameKey: "mods|example|techName",
  description: "Unlocks the example machine.",
  descriptionKey: "mods|example|techDescription",
  cost: 100,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~addDefinition()~~ :id=sandkit.api.tech.adddefinition

```ts
sandkit.api.tech.addDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L64)

##### Parameters

###### techId

[`TechGridId`](#techgridid)

###### definition

[`TechDefinition`](#techdefinition)

##### Returns

`void`

##### Deprecated

Use [registerDefinition](#registerdefinition) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### registerNode() :id=sandkit.api.tech.registernode

```ts
sandkit.api.tech.registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition
```

Defined in: [sandkit/api/tech.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L84)

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

##### Example

```ts
const position = api.tech.registerNode(
  "exampleTech",
  techDefinition,
  { parentId: parentTechId },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isLockedById() :id=sandkit.api.tech.islockedbyid

```ts
sandkit.api.tech.isLockedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L97)

Return true when a tech entry is locked.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setLockedById() :id=sandkit.api.tech.setlockedbyid

```ts
sandkit.api.tech.setLockedById(techId: TechGridId, locked: boolean): void
```

Defined in: [sandkit/api/tech.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L107)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isResearchedById() :id=sandkit.api.tech.isresearchedbyid

```ts
sandkit.api.tech.isResearchedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L116)

Return true when a tech entry has been researched.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.tech.conservatory

Conservatory unlock wiring for built-in tech nodes.

### Functions <!-- {docsify-ignore} -->

#### appendUnlock() :id=sandkit.api.tech.conservatory.appendunlock

```ts
sandkit.api.tech.conservatory.appendUnlock(techId: TechGridId, unlocks: ConservatoryUnlocks): void
```

Defined in: [sandkit/api/tech.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L135)

Append structure or item unlocks to a conservatory tech node.

##### Parameters

###### techId

[`TechGridId`](api/sandkit.api.tech.md#techgridid)

Built-in or custom tech id.

###### unlocks

[`ConservatoryUnlocks`](api/sandkit.api.tech.md#conservatoryunlocks)

Optional structure and item ids to unlock.

##### Returns

`void`

##### Example

```ts
api.tech.conservatory.appendUnlock(sandkit.enums.Tech.SignalDevices, {
  structures: ["exampleSensor"],
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.terrains

### Interfaces <!-- {docsify-ignore} -->

#### TerrainDefinition :id=sandkit.api.terrains.terraindefinition

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDefinition</code></p>
Defined in: [sandkit/api/terrains.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L55)

Terrain definition shape with typed element interactions.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Extends

- `Omit`\<[`TerrainDefinition`](api/sandkit.api.terrains.worker.md#terraindefinition), `"interactions"`\>

##### Indexable

```ts
[key: string]: unknown
```

```ts
[key: number]: unknown
```

##### Properties

###### interactions?

```ts
optional interactions?: readonly Interaction[]
```

Defined in: [sandkit/api/terrains.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L60)

Tooltip interactions shown for this terrain.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.terrains.register

```ts
sandkit.api.terrains.register(definition: TerrainDefinition): object
```

Defined in: [sandkit/api/terrains.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L71)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### updateDefinition() :id=sandkit.api.terrains.updatedefinition

```ts
sandkit.api.terrains.updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

Defined in: [sandkit/api/terrains.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L81)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### createAtCell() :id=sandkit.api.terrains.createatcell

```ts
sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L96)

Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~createAtCellWhenIdle()~~ :id=sandkit.api.terrains.createatcellwhenidle

```ts
sandkit.api.terrains.createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L105)

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### Deprecated

Use [createAtCell](#createatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### replaceAtCell() :id=sandkit.api.terrains.replaceatcell

```ts
sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L119)

Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~replaceAtCellWhenIdle()~~ :id=sandkit.api.terrains.replaceatcellwhenidle

```ts
sandkit.api.terrains.replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L128)

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### removeAtCell() :id=sandkit.api.terrains.removeatcell

```ts
sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L141)

Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~removeAtCellWhenIdle()~~ :id=sandkit.api.terrains.removeatcellwhenidle

```ts
sandkit.api.terrains.removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L150)

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### Deprecated

Use [removeAtCell](#removeatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setHitPointsAtCell() :id=sandkit.api.terrains.sethitpointsatcell

```ts
sandkit.api.terrains.setHitPointsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L163)

Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~setHpAtCell()~~ :id=sandkit.api.terrains.sethpatcell

```ts
sandkit.api.terrains.setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [sandkit/api/terrains.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L170)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

##### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~setHpAtCellWhenIdle()~~ :id=sandkit.api.terrains.sethpatcellwhenidle

```ts
sandkit.api.terrains.setHpAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L177)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

### References <!-- {docsify-ignore} -->

#### getIdByType :id=sandkit.api.terrains.getidbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getIdByType</code></p>
Re-exports [getIdByType](api/sandkit.api.terrains.worker.md#getidbytype)

***

#### getTypeById :id=sandkit.api.terrains.gettypebyid

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeById</code></p>
Re-exports [getTypeById](api/sandkit.api.terrains.worker.md#gettypebyid)

***

#### getTypeFromId :id=sandkit.api.terrains.gettypefromid

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeFromId</code></p>
Re-exports [getTypeFromId](api/sandkit.api.terrains.worker.md#gettypefromid)

***

#### getDefinitionByType :id=sandkit.api.terrains.getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getDefinitionByType</code></p>
Re-exports [getDefinitionByType](api/sandkit.api.terrains.worker.md#getdefinitionbytype)

***

#### getTypeAtCell :id=sandkit.api.terrains.gettypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeAtCell</code></p>
Re-exports [getTypeAtCell](api/sandkit.api.terrains.worker.md#gettypeatcell)

***

#### getDataAtCell :id=sandkit.api.terrains.getdataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getDataAtCell</code></p>
Re-exports [getDataAtCell](api/sandkit.api.terrains.worker.md#getdataatcell)

***

#### isAtCell :id=sandkit.api.terrains.isatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isAtCell</code></p>
Re-exports [isAtCell](api/sandkit.api.terrains.worker.md#isatcell)

***

#### isTypeAtCell :id=sandkit.api.terrains.istypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isTypeAtCell</code></p>
Re-exports [isTypeAtCell](api/sandkit.api.terrains.worker.md#istypeatcell)

***

#### isCellIdTerrain :id=sandkit.api.terrains.iscellidterrain

<p class="smt-member-path"><code>sandkit.api.terrains.isCellIdTerrain</code></p>
Re-exports [isCellIdTerrain](api/sandkit.api.terrains.worker.md#iscellidterrain)

***

#### damageAtCell :id=sandkit.api.terrains.damageatcell

<p class="smt-member-path"><code>sandkit.api.terrains.damageAtCell</code></p>
Re-exports [damageAtCell](api/sandkit.api.terrains.worker.md#damageatcell)

***

#### meltAtCell :id=sandkit.api.terrains.meltatcell

<p class="smt-member-path"><code>sandkit.api.terrains.meltAtCell</code></p>
Re-exports [meltAtCell](api/sandkit.api.terrains.worker.md#meltatcell)

***

#### TerrainMutationOptions :id=sandkit.api.terrains.terrainmutationoptions

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainMutationOptions</code></p>
Re-exports [TerrainMutationOptions](api/sandkit.api.terrains.worker.md#terrainmutationoptions)

***

#### TerrainType :id=sandkit.api.terrains.terraintype

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainType</code></p>
Re-exports [TerrainType](api/sandkit.api.terrains.worker.md#terraintype)

***

#### TerrainId :id=sandkit.api.terrains.terrainid

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainId</code></p>
Re-exports [TerrainId](api/sandkit.api.terrains.worker.md#terrainid)

***

#### TerrainRef :id=sandkit.api.terrains.terrainref

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainRef</code></p>
Re-exports [TerrainRef](api/sandkit.api.terrains.worker.md#terrainref)

***

#### TerrainDataAtCell :id=sandkit.api.terrains.terraindataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDataAtCell</code></p>
Re-exports [TerrainDataAtCell](api/sandkit.api.terrains.worker.md#terraindataatcell)

---

## sandkit.api.time

### Functions <!-- {docsify-ignore} -->

#### getTimeMs() :id=sandkit.api.time.gettimems

```ts
sandkit.api.time.getTimeMs(): number
```

Defined in: [sandkit/api/time.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/time.d.ts#L10)

Return elapsed game time in milliseconds.

##### Returns

`number`

***

#### getTick() :id=sandkit.api.time.gettick

```ts
sandkit.api.time.getTick(): number
```

Defined in: [sandkit/api/time.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/time.d.ts#L12)

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

#### setSize() :id=sandkit.api.tools.grabber.setsize

```ts
sandkit.api.tools.grabber.setSize(size: number): void
```

Defined in: [sandkit/api/tools.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L15)

Set grabber radius size.

##### Parameters

###### size

`number`

Grab radius in cells.

##### Returns

`void`

***

#### getSize() :id=sandkit.api.tools.grabber.getsize

```ts
sandkit.api.tools.grabber.getSize(): number
```

Defined in: [sandkit/api/tools.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L21)

Return current grabber radius size.

##### Returns

`number`

Grab radius in cells.

***

#### isActive() :id=sandkit.api.tools.grabber.isactive

```ts
sandkit.api.tools.grabber.isActive(): boolean
```

Defined in: [sandkit/api/tools.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L27)

Return true when grabber tool is active.

##### Returns

`boolean`

True when the grabber is the active tool.

***

#### isLoaded() :id=sandkit.api.tools.grabber.isloaded

```ts
sandkit.api.tools.grabber.isLoaded(): boolean
```

Defined in: [sandkit/api/tools.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L33)

Return true when grabber holds elements.

##### Returns

`boolean`

True when the grabber buffer is not empty.

---

## sandkit.api.triggers

### Interfaces <!-- {docsify-ignore} -->

#### MainTriggerDefinition :id=sandkit.api.triggers.maintriggerdefinition

<p class="smt-member-path"><code>sandkit.api.triggers.MainTriggerDefinition</code></p>
Defined in: [sandkit/api/triggers.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L27)

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

Defined in: [sandkit/api/triggers.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L29)

Interval between callbacks in simulation ticks.

###### callback

```ts
callback: () => void
```

Defined in: [sandkit/api/triggers.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L31)

Called each time the trigger fires.

###### Returns

`void`

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.triggers.register

```ts
sandkit.api.triggers.register(triggerId: string, definition: MainTriggerDefinition): void
```

Defined in: [sandkit/api/triggers.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L24)

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

##### Example

```ts
api.triggers.register("example:update", {
  intervalMs: 250,
  callback: (trigger, deltaTimeMs) => {
    updateExample(trigger, deltaTimeMs);
  },
});
```

---

## sandkit.api.ui

### Examples

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

### Namespaces <!-- {docsify-ignore} -->

- [overlays](api/sandkit.api.ui.overlays.md)
- [navigation](api/sandkit.api.ui.navigation.md)

### Interfaces <!-- {docsify-ignore} -->

#### TooltipMessageData :id=sandkit.api.ui.tooltipmessagedata

<p class="smt-member-path"><code>sandkit.api.ui.TooltipMessageData</code></p>
Defined in: [sandkit/api/ui.d.ts:299](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L299)

Message tooltip with localized body text.

##### Properties

###### type

```ts
type: "message"
```

Defined in: [sandkit/api/ui.d.ts:301](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L301)

Discriminator for tooltip renderer selection.

###### text

```ts
text: LocalizedText
```

Defined in: [sandkit/api/ui.d.ts:303](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L303)

Message body as localized text.

***

#### Focusable :id=sandkit.api.ui.focusable

<p class="smt-member-path"><code>sandkit.api.ui.Focusable</code></p>
Defined in: [sandkit/api/ui.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L307)

Focusable element state from useFocusable.

##### Type Parameters

###### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

##### Properties

###### ref

```ts
readonly ref: RefObject<T>
```

Defined in: [sandkit/api/ui.d.ts:309](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L309)

Ref to attach to the focusable element.

###### focused

```ts
readonly focused: boolean
```

Defined in: [sandkit/api/ui.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L311)

True when the element has controller focus.

###### focus

```ts
readonly focus: () => void
```

Defined in: [sandkit/api/ui.d.ts:313](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L313)

Move controller focus to this element.

###### Returns

`void`

***

#### FocusOptions :id=sandkit.api.ui.focusoptions

<p class="smt-member-path"><code>sandkit.api.ui.FocusOptions</code></p>
Defined in: [sandkit/api/ui.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L317)

Options for useFocusable registration.

##### Properties

###### id

```ts
readonly id: string
```

Defined in: [sandkit/api/ui.d.ts:319](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L319)

Unique id within the focus scope.

###### scope

```ts
readonly scope: string
```

Defined in: [sandkit/api/ui.d.ts:321](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L321)

Focus scope id this element belongs to.

###### onActivate

```ts
readonly onActivate: (element?: HTMLElement) => void
```

Defined in: [sandkit/api/ui.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L323)

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

Defined in: [sandkit/api/ui.d.ts:325](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L325)

Called when the element receives focus.

###### Returns

`void`

###### disabled?

```ts
readonly optional disabled?: boolean
```

Defined in: [sandkit/api/ui.d.ts:327](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L327)

When true, skip this element during navigation.

###### x?

```ts
readonly optional x?: number
```

Defined in: [sandkit/api/ui.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L329)

Optional grid column for spatial navigation.

###### y?

```ts
readonly optional y?: number
```

Defined in: [sandkit/api/ui.d.ts:331](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L331)

Optional grid row for spatial navigation.

###### neighbors?

```ts
readonly optional neighbors?: Partial<Record<"left" | "right" | "up" | "down", string>>
```

Defined in: [sandkit/api/ui.d.ts:333](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L333)

Neighbor ids for directional navigation.

###### scrollIntoView?

```ts
readonly optional scrollIntoView?: boolean
```

Defined in: [sandkit/api/ui.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L335)

When true, scroll the element into view on focus.

### Type Aliases <!-- {docsify-ignore} -->

#### OverlaySlot :id=sandkit.api.ui.overlayslot

```ts
sandkit.api.ui.OverlaySlot = LooseString<"hotbar" | "global">
```

Defined in: [sandkit/api/ui.d.ts:284](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L284)

Overlay slot name. Known vanilla slots autocomplete; any string is allowed.

***

#### ComponentId :id=sandkit.api.ui.componentid

```ts
sandkit.api.ui.ComponentId = ComponentId | LooseString<never>
```

Defined in: [sandkit/api/ui.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L290)

Registered UI component id.
Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) values autocomplete; custom string ids are allowed.

***

#### ComponentUpdateOptions :id=sandkit.api.ui.componentupdateoptions

```ts
sandkit.api.ui.ComponentUpdateOptions = Record<string, unknown>
```

Defined in: [sandkit/api/ui.d.ts:293](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L293)

Component-specific update payload passed to [update](#update).

***

#### TooltipData :id=sandkit.api.ui.tooltipdata

```ts
sandkit.api.ui.TooltipData = TooltipMessageData
```

Defined in: [sandkit/api/ui.d.ts:296](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L296)

Tooltip payload shown near the cursor or UI target.

### Functions <!-- {docsify-ignore} -->

#### update() :id=sandkit.api.ui.update

```ts
sandkit.api.ui.update(componentId: ComponentId, options?: ComponentUpdateOptions): void
```

Defined in: [sandkit/api/ui.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L130)

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

#### openPauseMenu() :id=sandkit.api.ui.openpausemenu

```ts
sandkit.api.ui.openPauseMenu(): void
```

Defined in: [sandkit/api/ui.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L133)

Open the pause menu.

##### Returns

`void`

***

#### showTooltip() :id=sandkit.api.ui.showtooltip

```ts
sandkit.api.ui.showTooltip(data: TooltipMessageData): void
```

Defined in: [sandkit/api/ui.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L139)

Show a tooltip with the given data.

##### Parameters

###### data

[`TooltipMessageData`](#tooltipmessagedata)

Tooltip type and localized content.

##### Returns

`void`

***

#### alert() :id=sandkit.api.ui.alert

```ts
sandkit.api.ui.alert(message: LocalizedText, title?: LocalizedText): Promise<void>
```

Defined in: [sandkit/api/ui.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L155)

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

##### Example

```ts
await api.ui.alert(
  { key: "mods|example|details" },
  { key: "mods|example|title" },
);
```

***

#### confirm() :id=sandkit.api.ui.confirm

```ts
sandkit.api.ui.confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>
```

Defined in: [sandkit/api/ui.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L170)

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

##### Example

```ts
const confirmed = await api.ui.confirm(
  { key: "mods|example|confirm" },
);
```

***

#### prompt() :id=sandkit.api.ui.prompt

```ts
sandkit.api.ui.prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>
```

Defined in: [sandkit/api/ui.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L189)

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

##### Example

```ts
const value = await api.ui.prompt(
  { key: "mods|example|enterValue" },
  "",
);
```

***

#### inject() :id=sandkit.api.ui.inject

```ts
sandkit.api.ui.inject(componentId: ComponentId, component: ComponentType<Record<string, never>>): () => void
```

Defined in: [sandkit/api/ui.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L203)

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

#### toast :id=sandkit.api.ui.toast

<p class="smt-member-path"><code>sandkit.api.ui.toast</code></p>
Re-exports [toast](api/sandkit.api.ui.worker.md#toast)

***

#### LocalizedText :id=sandkit.api.ui.localizedtext

<p class="smt-member-path"><code>sandkit.api.ui.LocalizedText</code></p>
Re-exports [LocalizedText](api/sandkit.api.ui.worker.md#localizedtext)

***

#### ToastOptions :id=sandkit.api.ui.toastoptions

<p class="smt-member-path"><code>sandkit.api.ui.ToastOptions</code></p>
Re-exports [ToastOptions](api/sandkit.api.ui.worker.md#toastoptions)

---

## sandkit.api.ui.navigation

Controller focus and scope navigation hooks.

### Functions <!-- {docsify-ignore} -->

#### useFocusable() :id=sandkit.api.ui.navigation.usefocusable

```ts
sandkit.api.ui.navigation.useFocusable<T *extends* HTMLElement = HTMLDivElement>(options: FocusOptions): Focusable<T>
```

Defined in: [sandkit/api/ui.d.ts:248](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L248)

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

##### Example

```ts
const focusable = api.ui.navigation.useFocusable({
  id: "example-button",
  scope: "example-scope",
  onActivate: openExample,
});
```

***

#### useFocusScope() :id=sandkit.api.ui.navigation.usefocusscope

```ts
sandkit.api.ui.navigation.useFocusScope(options: object): void
```

Defined in: [sandkit/api/ui.d.ts:265](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L265)

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

##### Example

```ts
api.ui.navigation.useFocusScope({
  id: "example-scope",
  active: true,
  priority: 10,
});
```

***

#### controllerFocusClass() :id=sandkit.api.ui.navigation.controllerfocusclass

```ts
sandkit.api.ui.navigation.controllerFocusClass(focused: boolean): string
```

Defined in: [sandkit/api/ui.d.ts:278](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L278)

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

#### register() :id=sandkit.api.ui.overlays.register

```ts
sandkit.api.ui.overlays.register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void
```

Defined in: [sandkit/api/ui.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L216)

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

#### unregister() :id=sandkit.api.ui.overlays.unregister

```ts
sandkit.api.ui.overlays.unregister(slot: OverlaySlot, overlayId: string): void
```

Defined in: [sandkit/api/ui.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L223)

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

#### update() :id=sandkit.api.ui.overlays.update

```ts
sandkit.api.ui.overlays.update(slot: OverlaySlot): void
```

Defined in: [sandkit/api/ui.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L229)

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

#### UpgradeDefinition :id=sandkit.api.upgrades.upgradedefinition

<p class="smt-member-path"><code>sandkit.api.upgrades.UpgradeDefinition</code></p>
Defined in: [sandkit/api/upgrades.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L54)

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

Defined in: [sandkit/api/upgrades.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L55)

###### itemNameKey?

```ts
optional itemNameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L56)

###### categoryId?

```ts
optional categoryId?: string
```

Defined in: [sandkit/api/upgrades.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L57)

###### upgrade

```ts
upgrade: object
```

Defined in: [sandkit/api/upgrades.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L58)

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

#### UpgradeCategoryDefinition :id=sandkit.api.upgrades.upgradecategorydefinition

<p class="smt-member-path"><code>sandkit.api.upgrades.UpgradeCategoryDefinition</code></p>
Defined in: [sandkit/api/upgrades.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L70)

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

Defined in: [sandkit/api/upgrades.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L72)

Category identifier referenced by upgrades.

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L74)

Display name translation key.

### Functions <!-- {docsify-ignore} -->

#### registerCategory() :id=sandkit.api.upgrades.registercategory

```ts
sandkit.api.upgrades.registerCategory(definition: UpgradeCategoryDefinition): void
```

Defined in: [sandkit/api/upgrades.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L13)

Register an upgrade category.

##### Parameters

###### definition

[`UpgradeCategoryDefinition`](#upgradecategorydefinition)

Category id and display metadata.

##### Returns

`void`

***

#### register() :id=sandkit.api.upgrades.register

```ts
sandkit.api.upgrades.register(definition: UpgradeDefinition): void
```

Defined in: [sandkit/api/upgrades.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L18)

Register an upgrade definition.

##### Parameters

###### definition

[`UpgradeDefinition`](#upgradedefinition)

Item id, upgrade id, costs, and level metadata.

##### Returns

`void`

***

#### updateDefinition() :id=sandkit.api.upgrades.updatedefinition

```ts
sandkit.api.upgrades.updateDefinition(itemId: string, upgradeId: string, partial: Partial<UpgradeDefinition>): void
```

Defined in: [sandkit/api/upgrades.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L25)

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

#### getLevelById() :id=sandkit.api.upgrades.getlevelbyid

```ts
sandkit.api.upgrades.getLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L35)

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

#### getAvailableLevelById() :id=sandkit.api.upgrades.getavailablelevelbyid

```ts
sandkit.api.upgrades.getAvailableLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L41)

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

***

#### setLevelById() :id=sandkit.api.upgrades.setlevelbyid

```ts
sandkit.api.upgrades.setLevelById(itemId: string, upgradeId: string, level: number): void
```

Defined in: [sandkit/api/upgrades.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L51)

Set the purchased level for an upgrade.

##### Parameters

###### itemId

`string`

Parent item id.

###### upgradeId

`string`

Upgrade id within the item.

###### level

`number`

Level to set.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.utils

### Functions <!-- {docsify-ignore} -->

#### getDistance() :id=sandkit.api.utils.getdistance

```ts
sandkit.api.utils.getDistance(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L19)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDirection() :id=sandkit.api.utils.getdirection

```ts
sandkit.api.utils.getDirection(pointA: Vector2, pointB: Vector2): Vector2
```

Defined in: [sandkit/api/utils.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L29)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getAngle() :id=sandkit.api.utils.getangle

```ts
sandkit.api.utils.getAngle(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L39)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getCoordinatesBetweenCells() :id=sandkit.api.utils.getcoordinatesbetweencells

```ts
sandkit.api.utils.getCoordinatesBetweenCells(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L49)

Return grid cells along a line between two points.

##### Parameters

###### pointA

[`Vector2`](api/shared.player.md#vector2)

Line start in cell coordinates.

###### pointB

[`Vector2`](api/shared.player.md#vector2)

Line end in cell coordinates.

##### Returns

[`Vector2`](api/shared.player.md#vector2)[]

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~getCoordinatesBetweenPoints()~~ :id=sandkit.api.utils.getcoordinatesbetweenpoints

```ts
sandkit.api.utils.getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L56)

##### Parameters

###### pointA

[`Vector2`](api/shared.player.md#vector2)

###### pointB

[`Vector2`](api/shared.player.md#vector2)

##### Returns

[`Vector2`](api/shared.player.md#vector2)[]

##### Deprecated

Use [getCoordinatesBetweenCells](#getcoordinatesbetweencells) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.workers

### Functions <!-- {docsify-ignore} -->

#### setPostUpdateEnabled() :id=sandkit.api.workers.setpostupdateenabled

```ts
sandkit.api.workers.setPostUpdateEnabled(enabled: boolean): void
```

Defined in: [sandkit/api/workers.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/workers.d.ts#L13)

Enable or disable worker post-update callbacks.

##### Parameters

###### enabled

`boolean`

When true, workers run post-update hooks each tick.

##### Returns

`void`

---

## sandkit.api.world

### Deprecated

Use [grid](api/sandkit.api.grid.md) instead.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Namespaces <!-- {docsify-ignore} -->

- [~~pickups~~](api/sandkit.api.world.pickups.md)

### Functions <!-- {docsify-ignore} -->

#### ~~runWhenSimulationIdle()~~ :id=sandkit.api.world.runwhensimulationidle

```ts
sandkit.api.world.runWhenSimulationIdle(callback: () => void): void
```

Defined in: [sandkit/api/world.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/world.d.ts#L66)

##### Parameters

###### callback

() => `void`

##### Returns

`void`

##### Deprecated

Use [grid.mutate](api/sandkit.api.grid.md#mutate) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~redrawAroundCellWhenIdle()~~ :id=sandkit.api.world.redrawaroundcellwhenidle

```ts
sandkit.api.world.redrawAroundCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/world.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/world.d.ts#L73)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### Deprecated

Use [grid.redrawAroundCell](api/sandkit.api.grid.md#redrawaroundcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### ~~getCellIdAtCell~~ :id=sandkit.api.world.getcellidatcell

<p class="smt-member-path"><code>sandkit.api.world.getCellIdAtCell</code></p>
Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

***

#### ~~isCellEmptyAtCell~~ :id=sandkit.api.world.iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.world.isCellEmptyAtCell</code></p>
Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

***

#### ~~isTerrainAtCell~~ :id=sandkit.api.world.isterrainatcell

<p class="smt-member-path"><code>sandkit.api.world.isTerrainAtCell</code></p>
Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

***

#### ~~reportActivityAtCell~~ :id=sandkit.api.world.reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.world.reportActivityAtCell</code></p>
Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

***

#### ~~excavateAtCell~~ :id=sandkit.api.world.excavateatcell

<p class="smt-member-path"><code>sandkit.api.world.excavateAtCell</code></p>
Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

***

#### ~~getDimensions~~ :id=sandkit.api.world.getdimensions

<p class="smt-member-path"><code>sandkit.api.world.getDimensions</code></p>
Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

***

#### ~~ExcavateOptions~~ :id=sandkit.api.world.excavateoptions

<p class="smt-member-path"><code>sandkit.api.world.ExcavateOptions</code></p>
Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

***

#### ~~CellId~~ :id=sandkit.api.world.cellid

<p class="smt-member-path"><code>sandkit.api.world.CellId</code></p>
Re-exports [CellId](api/sandkit.api.grid.md#cellid)

***

#### ~~GridDimensions~~ :id=sandkit.api.world.griddimensions

<p class="smt-member-path"><code>sandkit.api.world.GridDimensions</code></p>
Re-exports [GridDimensions](api/sandkit.api.grid.md#griddimensions)

***

#### ~~revealFogAtCell~~ :id=sandkit.api.world.revealfogatcell

<p class="smt-member-path"><code>sandkit.api.world.revealFogAtCell</code></p>
Re-exports [revealFogAtCell](api/sandkit.api.grid.md#revealfogatcell)

***

#### ~~WorldItemType~~ :id=sandkit.api.world.worlditemtype

<p class="smt-member-path"><code>sandkit.api.world.WorldItemType</code></p>
Re-exports [WorldItemType](api/sandkit.api.pickups.md#worlditemtype)

***

#### ~~PickupType~~ :id=sandkit.api.world.pickuptype

<p class="smt-member-path"><code>sandkit.api.world.PickupType</code></p>
Re-exports [PickupType](api/sandkit.api.pickups.md#pickuptype)

***

#### ~~WorldItemLight~~ :id=sandkit.api.world.worlditemlight

<p class="smt-member-path"><code>sandkit.api.world.WorldItemLight</code></p>
Re-exports [WorldItemLight](api/sandkit.api.pickups.md#worlditemlight)

***

#### ~~WorldItem~~ :id=sandkit.api.world.worlditem

<p class="smt-member-path"><code>sandkit.api.world.WorldItem</code></p>
Re-exports [WorldItem](api/sandkit.api.pickups.md#worlditem)

---

## sandkit.api.world.pickups

### Deprecated

Use pickups instead.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### ~~spawnAtWorld~~ :id=sandkit.api.world.pickups.spawnatworld

<p class="smt-member-path"><code>sandkit.api.world.pickups.spawnAtWorld</code></p>
Re-exports [spawnAtWorld](api/sandkit.api.pickups.md#spawnatworld)

***

#### ~~destroy~~ :id=sandkit.api.world.pickups.destroy

<p class="smt-member-path"><code>sandkit.api.world.pickups.destroy</code></p>
Re-exports [destroy](api/sandkit.api.pickups.md#destroy)

***

#### ~~pickUp~~ :id=sandkit.api.world.pickups.pickup

<p class="smt-member-path"><code>sandkit.api.world.pickups.pickUp</code></p>
Re-exports [pickUp](api/sandkit.api.pickups.md#pickup)

***

#### ~~getAll~~ :id=sandkit.api.world.pickups.getall

<p class="smt-member-path"><code>sandkit.api.world.pickups.getAll</code></p>
Re-exports [getAll](api/sandkit.api.pickups.md#getall)

***

#### ~~getById~~ :id=sandkit.api.world.pickups.getbyid

<p class="smt-member-path"><code>sandkit.api.world.pickups.getById</code></p>
Re-exports [getById](api/sandkit.api.pickups.md#getbyid)

***

#### ~~remove~~ :id=sandkit.api.world.pickups.remove

<p class="smt-member-path"><code>sandkit.api.world.pickups.remove</code></p>
Re-exports [remove](api/sandkit.api.pickups.md#remove)

---

## sandkit.api.effects (worker)

**`Internal`**

Worker-thread `sandkit.api.effects` — world-space visual effects on workers.

Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.worker.md), not here.

 Worker-only surface; main thread exposes additional effect helpers.

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.effects.worker.createatworld

```ts
sandkit.api.effects.createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [worker/api/effects.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L26)

Spawn a named screen-space or world effect.

##### Parameters

###### effectId

`string`

Registered effect id.

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

###### options?

[`EffectOptions`](api/sandkit.api.effects.md#effectoptions)

Duration, radius, and intensity settings.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~createEffectAtWorld()~~ :id=sandkit.api.effects.worker.createeffectatworld

```ts
sandkit.api.effects.createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [worker/api/effects.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L38)

##### Parameters

###### effectId

`string`

###### worldX

`number`

###### worldY

`number`

###### options?

[`EffectOptions`](api/sandkit.api.effects.md#effectoptions)

##### Returns

`void`

##### Deprecated

Use [createAtWorld](#createatworld) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### EffectOptions :id=sandkit.api.effects.worker.effectoptions

<p class="smt-member-path"><code>sandkit.api.effects.EffectOptions (worker)</code></p>
Re-exports [EffectOptions](api/sandkit.api.effects.md#effectoptions)

***

#### ParticleEffectOptions :id=sandkit.api.effects.worker.particleeffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.ParticleEffectOptions (worker)</code></p>
Re-exports [ParticleEffectOptions](api/sandkit.api.effects.md#particleeffectoptions)

***

#### createParticlesAtWorld :id=sandkit.api.effects.worker.createparticlesatworld

<p class="smt-member-path"><code>sandkit.api.effects.createParticlesAtWorld (worker)</code></p>
Re-exports [createParticlesAtWorld](api/sandkit.api.effects.md#createparticlesatworld)

---

## sandkit.api.elements (worker)

**`Internal`**

Worker-thread `sandkit.api.elements` — shared reads plus immediate grid mutations.

Worker-entry mutations apply immediately. Main thread defers matching helpers in
`sandkit.api.elements`.

 Worker extension; not interchangeable with main-thread
`sandkit.api.elements`.

### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

### Functions <!-- {docsify-ignore} -->

#### createAtCell() :id=sandkit.api.elements.worker.createatcell

```ts
sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [worker/api/elements.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L79)

Create an element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

##### Returns

`void`

##### Example

**Worker entry**

```ts
api.elements.createAtCell(cellX, cellY, "water", {
  durationTicks: 60,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### replaceAtCell() :id=sandkit.api.elements.worker.replaceatcell

```ts
sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [worker/api/elements.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L93)

Replace the element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### removeAtCell() :id=sandkit.api.elements.worker.removeatcell

```ts
sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [worker/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L106)

Remove the element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md#elementremovaloptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### moveBetweenCells() :id=sandkit.api.elements.worker.movebetweencells

```ts
sandkit.api.elements.moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L121)

Move an element between cells immediately on this worker.

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

`boolean`

True when the move succeeded.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### teleportBetweenCells() :id=sandkit.api.elements.worker.teleportbetweencells

```ts
sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [worker/api/elements.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L138)

Teleport an element between cells immediately on this worker.

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

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### swapBetweenCells() :id=sandkit.api.elements.worker.swapbetweencells

```ts
sandkit.api.elements.swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L156)

Swap elements between two cells immediately on this worker.

##### Parameters

###### firstCellX

`number`

First cell column.

###### firstCellY

`number`

First cell row.

###### secondCellX

`number`

Second cell column.

###### secondCellY

`number`

Second cell row.

##### Returns

`boolean`

True when the swap succeeded.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~swapCells()~~ :id=sandkit.api.elements.worker.swapcells

```ts
sandkit.api.elements.swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L168)

##### Parameters

###### firstCellX

`number`

###### firstCellY

`number`

###### secondCellX

`number`

###### secondCellY

`number`

##### Returns

`boolean`

##### Deprecated

Use [swapBetweenCells](#swapbetweencells) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### markMovementBlockedByIndex() :id=sandkit.api.elements.worker.markmovementblockedbyindex

```ts
sandkit.api.elements.markMovementBlockedByIndex(elementIndex: number): void
```

Defined in: [worker/api/elements.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L182)

Mark an element index as movement-blocked for this tick.

##### Parameters

###### elementIndex

`number`

Element index from [getInfoAtCell](api/sandkit.api.elements.md#getinfoatcell).

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~markMovementBlockedByElementIndex()~~ :id=sandkit.api.elements.worker.markmovementblockedbyelementindex

```ts
sandkit.api.elements.markMovementBlockedByElementIndex(elementIndex: number): void
```

Defined in: [worker/api/elements.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L189)

##### Parameters

###### elementIndex

`number`

##### Returns

`void`

##### Deprecated

Use [markMovementBlockedByIndex](#markmovementblockedbyindex) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setVelocityAtCell() :id=sandkit.api.elements.worker.setvelocityatcell

```ts
sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): boolean
```

Defined in: [worker/api/elements.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L201)

Set particle velocity at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`boolean`

True when velocity was set.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### addParticleVelocityAtCell() :id=sandkit.api.elements.worker.addparticlevelocityatcell

```ts
sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean
```

Defined in: [worker/api/elements.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L214)

Add velocity to a particle at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

##### Returns

`boolean`

True when velocity was updated.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### convertToParticleAtCell() :id=sandkit.api.elements.worker.converttoparticleatcell

```ts
sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): boolean
```

Defined in: [worker/api/elements.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L228)

Convert a cell element to a particle immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`boolean`

True when conversion succeeded.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### convertFromParticleAtCell() :id=sandkit.api.elements.worker.convertfromparticleatcell

```ts
sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/elements.d.ts:241](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L241)

Convert a particle back to a solid element immediately on this worker.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when conversion succeeded.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setDataFieldAtCell() :id=sandkit.api.elements.worker.setdatafieldatcell

```ts
sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean
```

Defined in: [worker/api/elements.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L254)

Set a data field on the element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

##### Returns

`boolean`

True when the field was set.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### refreshColorAtCell() :id=sandkit.api.elements.worker.refreshcoloratcell

```ts
sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [worker/api/elements.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L266)

Refresh the rendered color at a cell immediately on this worker.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setPhysicsAtCell() :id=sandkit.api.elements.worker.setphysicsatcell

```ts
sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [worker/api/elements.d.ts:277](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L277)

Set the physics skip mode at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setDurationAtCell() :id=sandkit.api.elements.worker.setdurationatcell

```ts
sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): boolean
```

Defined in: [worker/api/elements.d.ts:300](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L300)

Set element duration at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, `number`, `object`\]

##### Returns

`boolean`

True when duration was updated.

##### Example

**Worker entry**

```ts
const updated = api.elements.setDurationAtCell(
  cellX,
  cellY,
  120,
  { updateMax: true },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

### References <!-- {docsify-ignore} -->

#### ElementType :id=sandkit.api.elements.worker.elementtype

<p class="smt-member-path"><code>sandkit.api.elements.ElementType (worker)</code></p>
Re-exports [ElementType](api/sandkit.api.elements.md#elementtype)

***

#### ElementId :id=sandkit.api.elements.worker.elementid

<p class="smt-member-path"><code>sandkit.api.elements.ElementId (worker)</code></p>
Re-exports [ElementId](api/sandkit.api.elements.md#elementid)

***

#### ElementRef :id=sandkit.api.elements.worker.elementref

<p class="smt-member-path"><code>sandkit.api.elements.ElementRef (worker)</code></p>
Re-exports [ElementRef](api/sandkit.api.elements.md#elementref)

***

#### MatterType :id=sandkit.api.elements.worker.mattertype

<p class="smt-member-path"><code>sandkit.api.elements.MatterType (worker)</code></p>
Re-exports [MatterType](api/sandkit.api.elements.MatterType.md)

***

#### ElementDefinition :id=sandkit.api.elements.worker.elementdefinition

<p class="smt-member-path"><code>sandkit.api.elements.ElementDefinition (worker)</code></p>
Re-exports [ElementDefinition](api/sandkit.api.elements.md#elementdefinition)

***

#### ElementCreateOptions :id=sandkit.api.elements.worker.elementcreateoptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementCreateOptions (worker)</code></p>
Re-exports [ElementCreateOptions](api/sandkit.api.elements.md#elementcreateoptions)

***

#### ElementRemovalOptions :id=sandkit.api.elements.worker.elementremovaloptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementRemovalOptions (worker)</code></p>
Re-exports [ElementRemovalOptions](api/sandkit.api.elements.md#elementremovaloptions)

***

#### getIdByType :id=sandkit.api.elements.worker.getidbytype

<p class="smt-member-path"><code>sandkit.api.elements.getIdByType (worker)</code></p>
Re-exports [getIdByType](api/sandkit.api.elements.md#getidbytype)

***

#### getTypeById :id=sandkit.api.elements.worker.gettypebyid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeById (worker)</code></p>
Re-exports [getTypeById](api/sandkit.api.elements.md#gettypebyid)

***

#### getTypeFromId :id=sandkit.api.elements.worker.gettypefromid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeFromId (worker)</code></p>
Re-exports [getTypeFromId](api/sandkit.api.elements.md#gettypefromid)

***

#### getDefinitionByType :id=sandkit.api.elements.worker.getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.elements.getDefinitionByType (worker)</code></p>
Re-exports [getDefinitionByType](api/sandkit.api.elements.md#getdefinitionbytype)

***

#### getTypeAtCell :id=sandkit.api.elements.worker.gettypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getTypeAtCell (worker)</code></p>
Re-exports [getTypeAtCell](api/sandkit.api.elements.md#gettypeatcell)

***

#### getResolvedTypeAtCell :id=sandkit.api.elements.worker.getresolvedtypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeAtCell (worker)</code></p>
Re-exports [getResolvedTypeAtCell](api/sandkit.api.elements.md#getresolvedtypeatcell)

***

#### getResolvedTypeFromCellId :id=sandkit.api.elements.worker.getresolvedtypefromcellid

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeFromCellId (worker)</code></p>
Re-exports [getResolvedTypeFromCellId](api/sandkit.api.elements.md#getresolvedtypefromcellid)

***

#### getInfoAtCell :id=sandkit.api.elements.worker.getinfoatcell

<p class="smt-member-path"><code>sandkit.api.elements.getInfoAtCell (worker)</code></p>
Re-exports [getInfoAtCell](api/sandkit.api.elements.md#getinfoatcell)

***

#### getMatterTypeAtCell :id=sandkit.api.elements.worker.getmattertypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getMatterTypeAtCell (worker)</code></p>
Re-exports [getMatterTypeAtCell](api/sandkit.api.elements.md#getmattertypeatcell)

***

#### isTypeAtCell :id=sandkit.api.elements.worker.istypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.isTypeAtCell (worker)</code></p>
Re-exports [isTypeAtCell](api/sandkit.api.elements.md#istypeatcell)

***

#### isFreeFallingAtCell :id=sandkit.api.elements.worker.isfreefallingatcell

<p class="smt-member-path"><code>sandkit.api.elements.isFreeFallingAtCell (worker)</code></p>
Re-exports [isFreeFallingAtCell](api/sandkit.api.elements.md#isfreefallingatcell)

***

#### getVelocityAtCell :id=sandkit.api.elements.worker.getvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.getVelocityAtCell (worker)</code></p>
Re-exports [getVelocityAtCell](api/sandkit.api.elements.md#getvelocityatcell)

***

#### getDataFieldAtCell :id=sandkit.api.elements.worker.getdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.getDataFieldAtCell (worker)</code></p>
Re-exports [getDataFieldAtCell](api/sandkit.api.elements.md#getdatafieldatcell)

---

## sandkit.api.events (worker)

**`Internal`**

Worker-thread `sandkit.api.events` — subscribe to and emit worker-scoped events.

 Worker-only surface; do not use main-thread [sandkit.api.events](api/sandkit.md#events).

### Interfaces <!-- {docsify-ignore} -->

#### EventGuard :id=sandkit.api.events.worker.eventguard

<p class="smt-member-path"><code>sandkit.api.events.EventGuard (worker)</code></p>
Defined in: [worker/api/events.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L68)

Guard filter for worker events.

##### Properties

###### elementType?

```ts
optional elementType?: ElementType
```

Defined in: [worker/api/events.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L70)

Required when subscribing to `element:moved`. Optional on emit.

###### terrainType?

```ts
optional terrainType?: number
```

Defined in: [worker/api/events.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L72)

Required when subscribing to `terrain:updated`. Optional on emit.

***

#### EventEmitOptions :id=sandkit.api.events.worker.eventemitoptions

<p class="smt-member-path"><code>sandkit.api.events.EventEmitOptions (worker)</code></p>
Defined in: [worker/api/events.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L83)

Options for [emit](#emit).

##### Properties

###### guard?

```ts
optional guard?: EventGuard
```

Defined in: [worker/api/events.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L84)

***

#### EventPayloadMap :id=sandkit.api.events.worker.eventpayloadmap

<p class="smt-member-path"><code>sandkit.api.events.EventPayloadMap (worker)</code></p>
Defined in: [worker/api/events.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L88)

Known worker event payloads. Unlisted ids still use `unknown`.

##### Properties

###### element:moved

```ts
element:moved: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L89)

###### terrain:updated

```ts
terrain:updated: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L90)

###### ~~terrain:update~~

```ts
terrain:update: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L92)

###### Deprecated

Use `"terrain:updated"` instead.

###### worker:update:post

```ts
worker:update:post: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L93)

###### ~~update:post~~

```ts
update:post: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L95)

###### Deprecated

Use `"worker:update:post"` instead.

### Type Aliases <!-- {docsify-ignore} -->

#### EventOnOptions :id=sandkit.api.events.worker.eventonoptions

```ts
sandkit.api.events.EventOnOptions<K *extends* EventId> = K *extends* "element:moved" ? object : K *extends* "terrain:updated" | "terrain:update" ? object : object
```

Defined in: [worker/api/events.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L76)

Options for [on](#on).

##### Type Parameters

###### K

`K` *extends* [`EventId`](#eventid)

***

#### EventId :id=sandkit.api.events.worker.eventid

```ts
sandkit.api.events.EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [worker/api/events.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L99)

Known worker event names plus any custom string id.

***

#### EventPayload :id=sandkit.api.events.worker.eventpayload

```ts
sandkit.api.events.EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [worker/api/events.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L102)

Event payload type for a given event id.

##### Type Parameters

###### K

`K`

### Functions <!-- {docsify-ignore} -->

#### on() :id=sandkit.api.events.worker.on

```ts
sandkit.api.events.on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void, options?: EventOnOptions<K>): () => void
```

Defined in: [worker/api/events.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L46)

Subscribe to a worker event. Returns an unsubscribe function.

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

###### options?

[`EventOnOptions`](#eventonoptions)\<`K`\>

Required guard for filtered events.

##### Returns

() => `void`

##### Examples

**element:moved**

```ts
api.events.on(
  "element:moved",
  (payload) => handleElementMoved(payload),
  { guard: { elementType } },
);
```

**terrain:updated**

```ts
api.events.on(
  "terrain:updated",
  (payload) => {
    handleTerrainUpdate(payload);
  },
  { guard: { terrainType } },
);
```

**worker:update:post**

```ts
api.events.on("worker:update:post", (payload) => {
  runPostUpdate(payload);
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### emit() :id=sandkit.api.events.worker.emit

```ts
sandkit.api.events.emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>, options?: EventEmitOptions): void
```

Defined in: [worker/api/events.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L61)

Emit a worker event with a payload to subscribers.

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

###### options?

[`EventEmitOptions`](#eventemitoptions)

Optional guard forwarded to filtered listeners.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.fire (worker)

**`Internal`**

Worker-thread `sandkit.api.fire` — ignite and burn elements at grid cells.

Worker burns are immediate. Main thread defers burns with `burnElementAtCell`.

 Worker-only surface; do not use main-thread [sandkit.api.fire](api/sandkit.md#fire).

### Functions <!-- {docsify-ignore} -->

#### canBurnElementAtCell() :id=sandkit.api.fire.worker.canburnelementatcell

```ts
sandkit.api.fire.canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/fire.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L19)

Return true when the element at the cell can burn.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### burnElementAtCell() :id=sandkit.api.fire.worker.burnelementatcell

```ts
sandkit.api.fire.burnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/fire.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L30)

Burn the element at the cell immediately on this worker.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when the burn succeeded.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

---

## sandkit.api.grid (worker)

**`Internal`**

Worker-thread `sandkit.api.grid` — grid reads, activity, and excavation.

Worker mutations are immediate. Main thread defers grid writes through `api.grid.mutate`.

 Worker subset; do not import main-thread [sandkit.api.grid](api/sandkit.md#grid) iteration helpers here.

### References <!-- {docsify-ignore} -->

#### getCellIdAtCell :id=sandkit.api.grid.worker.getcellidatcell

<p class="smt-member-path"><code>sandkit.api.grid.getCellIdAtCell (worker)</code></p>
Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

***

#### isCellEmptyAtCell :id=sandkit.api.grid.worker.iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.grid.isCellEmptyAtCell (worker)</code></p>
Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

***

#### isTerrainAtCell :id=sandkit.api.grid.worker.isterrainatcell

<p class="smt-member-path"><code>sandkit.api.grid.isTerrainAtCell (worker)</code></p>
Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

***

#### reportActivityAtCell :id=sandkit.api.grid.worker.reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.grid.reportActivityAtCell (worker)</code></p>
Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

***

#### excavateAtCell :id=sandkit.api.grid.worker.excavateatcell

<p class="smt-member-path"><code>sandkit.api.grid.excavateAtCell (worker)</code></p>
Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

***

#### getDimensions :id=sandkit.api.grid.worker.getdimensions

<p class="smt-member-path"><code>sandkit.api.grid.getDimensions (worker)</code></p>
Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

***

#### ExcavateOptions :id=sandkit.api.grid.worker.excavateoptions

<p class="smt-member-path"><code>sandkit.api.grid.ExcavateOptions (worker)</code></p>
Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

***

#### CellId :id=sandkit.api.grid.worker.cellid

<p class="smt-member-path"><code>sandkit.api.grid.CellId (worker)</code></p>
Re-exports [CellId](api/sandkit.api.grid.md#cellid)

***

#### GridDimensions :id=sandkit.api.grid.worker.griddimensions

<p class="smt-member-path"><code>sandkit.api.grid.GridDimensions (worker)</code></p>
Re-exports [GridDimensions](api/sandkit.api.grid.md#griddimensions)

---

## sandkit.api.hooks (worker)

**`Internal`**

Worker-thread `sandkit.api.hooks` — intercept and modify simulation hook points.

 Worker-only surface; do not use main-thread [sandkit.api.hooks](api/sandkit.md#hooks).

### Interfaces <!-- {docsify-ignore} -->

#### HookContext :id=sandkit.api.hooks.worker.hookcontext

<p class="smt-member-path"><code>sandkit.api.hooks.HookContext (worker)</code></p>
Defined in: [worker/api/hooks.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L112)

Context passed to intercept hook callbacks.

##### Properties

###### cancelled

```ts
cancelled: boolean
```

Defined in: [worker/api/hooks.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L116)

True after [cancel](#cancel) was called on this context.

##### Methods

###### cancel()

```ts
cancel(): void
```

Defined in: [worker/api/hooks.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L114)

When called, the intercepted action is skipped.

###### Returns

`void`

***

#### HookGuard :id=sandkit.api.hooks.worker.hookguard

<p class="smt-member-path"><code>sandkit.api.hooks.HookGuard (worker)</code></p>
Defined in: [worker/api/hooks.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L120)

Guard filter for worker hook registration.

##### Properties

###### elementType?

```ts
optional elementType?: ElementType
```

Defined in: [worker/api/hooks.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L122)

Required for element-scoped intercept hooks and optional on emit.

###### terrainType?

```ts
optional terrainType?: number
```

Defined in: [worker/api/hooks.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L124)

Required for terrain-scoped event guards; optional on emit.

***

#### ModifyHookOptions :id=sandkit.api.hooks.worker.modifyhookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookOptions (worker)</code></p>
Defined in: [worker/api/hooks.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L136)

Options for [modify](#modify).

##### Properties

###### guard?

```ts
optional guard?: HookGuard
```

Defined in: [worker/api/hooks.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L137)

###### priority?

```ts
optional priority?: number
```

Defined in: [worker/api/hooks.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L138)

***

#### InterceptHookMap :id=sandkit.api.hooks.worker.intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap (worker)</code></p>
Defined in: [worker/api/hooks.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L166)

Intercept hook argument shapes keyed by hook id.

##### Properties

###### cell:process

```ts
cell:process: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L167)

###### element:update

```ts
element:update: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L168)

###### element:move

```ts
element:move: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L169)

###### element:move:blocked

```ts
element:move:blocked: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L170)

###### ~~element:blocked~~

```ts
element:blocked: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L172)

###### Deprecated

Use `"element:move:blocked"` instead.

###### element:duration:expire

```ts
element:duration:expire: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L173)

###### ~~element:duration~~

```ts
element:duration: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L175)

###### Deprecated

Use `"element:duration:expire"` instead.

###### fire:element:burn

```ts
fire:element:burn: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:176](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L176)

###### fire:terrain:burn

```ts
fire:terrain:burn: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L177)

###### shaker:elementOn

```ts
shaker:elementOn: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L178)

### Type Aliases <!-- {docsify-ignore} -->

#### InterceptHookOptions :id=sandkit.api.hooks.worker.intercepthookoptions

```ts
sandkit.api.hooks.InterceptHookOptions<K *extends* InterceptHookId> = K *extends* ElementGuardedInterceptHookId ? object : K *extends* TerrainGuardedInterceptHookId ? object : object
```

Defined in: [worker/api/hooks.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L128)

Options for [intercept](#intercept).

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ElementGuardedInterceptHookId :id=sandkit.api.hooks.worker.elementguardedintercepthookid

```ts
sandkit.api.hooks.ElementGuardedInterceptHookId = "cell:process" | "element:update" | "element:move:blocked" | "element:blocked" | "element:duration:expire" | "element:duration"
```

Defined in: [worker/api/hooks.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L142)

Intercept hook ids with a required element guard.

***

#### TerrainGuardedInterceptHookId :id=sandkit.api.hooks.worker.terrainguardedintercepthookid

```ts
sandkit.api.hooks.TerrainGuardedInterceptHookId = "fire:terrain:burn"
```

Defined in: [worker/api/hooks.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L151)

Intercept hook ids with a required terrain guard.

***

#### InterceptHookId :id=sandkit.api.hooks.worker.intercepthookid

```ts
sandkit.api.hooks.InterceptHookId = LooseString<ElementGuardedInterceptHookId | TerrainGuardedInterceptHookId | "element:move" | "fire:element:burn" | "shaker:elementOn">
```

Defined in: [worker/api/hooks.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L154)

Known worker intercept hook ids plus custom strings.

***

#### ModifyHookId :id=sandkit.api.hooks.worker.modifyhookid

```ts
sandkit.api.hooks.ModifyHookId = LooseString<string>
```

Defined in: [worker/api/hooks.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L163)

Known worker modify hook ids plus custom strings.

***

#### ModifyHookMap :id=sandkit.api.hooks.worker.modifyhookmap

```ts
sandkit.api.hooks.ModifyHookMap = Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L182)

Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`.

***

#### InterceptHookArgs :id=sandkit.api.hooks.worker.intercepthookargs

```ts
sandkit.api.hooks.InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L185)

Intercept hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ModifyHookArgs :id=sandkit.api.hooks.worker.modifyhookargs

```ts
sandkit.api.hooks.ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L190)

Modify hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

### Functions <!-- {docsify-ignore} -->

#### intercept() :id=sandkit.api.hooks.worker.intercept

```ts
sandkit.api.hooks.intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [worker/api/hooks.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L83)

Register an intercept hook on this worker. Returns an unsubscribe function.

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

##### Parameters

###### hookId

`K`

Registered hook identifier.

###### callback

(`args`: [`InterceptHookArgs`](#intercepthookargs)\<`K`\>, `context`: [`HookContext`](#hookcontext)) => `void`

Called with hook arguments and context; may cancel the hook.

###### options?

[`InterceptHookOptions`](#intercepthookoptions)\<`K`\>

Optional guard and priority.

##### Returns

() => `void`

##### Examples

**cell:process**

```ts
api.hooks.intercept("cell:process", handleCell, {
  guard: { elementType },
});
```

**element:update**

```ts
api.hooks.intercept("element:update", handleUpdate, {
  guard: { elementType },
});
```

**element:move**

```ts
api.hooks.intercept("element:move", (args, context) => {
  handleElementMove(args, context);
});
```

**element:move:blocked**

```ts
api.hooks.intercept(
  "element:move:blocked",
  (args, context) => {
    handleBlockedMovement(args, context);
  },
  { guard: { elementType } },
);
```

**element:duration:expire**

```ts
api.hooks.intercept(
  "element:duration:expire",
  (args, context) => {
    handleDurationExpiry(args, context);
  },
  { guard: { elementType } },
);
```

**fire:element:burn**

```ts
api.hooks.intercept("fire:element:burn", (args, context) => {
  handleElementBurn(args, context);
});
```

**fire:terrain:burn**

```ts
api.hooks.intercept("fire:terrain:burn", handleTerrainBurn, {
  guard: { terrainType },
});
```

**shaker:elementOn**

```ts
api.hooks.intercept("shaker:elementOn", (args, context) => {
  handleShakerElement(args, context);
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### modify() :id=sandkit.api.hooks.worker.modify

```ts
sandkit.api.hooks.modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [worker/api/hooks.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L105)

Register a modifier hook on this worker. Returns an unsubscribe function.

##### Type Parameters

###### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

##### Parameters

###### hookId

`K`

Registered hook identifier.

###### callback

(`args`: [`ModifyHookArgs`](#modifyhookargs)\<`K`\>) => `void`

Called with hook arguments; may mutate hook payload.

###### options?

[`ModifyHookOptions`](#modifyhookoptions)

Optional guard and priority.

##### Returns

() => `void`

##### Example

**Worker entry**

```ts
api.hooks.modify("example:prepare", (args) => {
  args.value *= 2;
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.lights (worker)

**`Internal`**

Worker-thread `sandkit.api.lights` — temporary visual effect lights.

 Worker exposes only [temporary](api/sandkit.api.lights.temporary.worker.md); persistent lights are main-thread only.

### Namespaces <!-- {docsify-ignore} -->

- [temporary](api/sandkit.api.lights.temporary.worker.md)

---

## sandkit.api.lights.temporary (worker)

Short-lived visual effect lights.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Interfaces <!-- {docsify-ignore} -->

#### TemporaryLightHandle :id=sandkit.api.lights.temporary.worker.temporarylighthandle

<p class="smt-member-path"><code>sandkit.api.lights.temporary.TemporaryLightHandle (worker)</code></p>
Defined in: [worker/api/lights.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L19)

Handle returned by [createAtWorld](#createatworld).

##### Properties

###### lightId

```ts
lightId: number | null
```

Defined in: [worker/api/lights.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L21)

Runtime light id, or null when the pool is full.

###### ~~index?~~

```ts
optional index?: number | null
```

Defined in: [worker/api/lights.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L27)

###### Deprecated

Use [lightId](#lightid) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Type Aliases <!-- {docsify-ignore} -->

#### TemporaryLightOptions :id=sandkit.api.lights.temporary.worker.temporarylightoptions

```ts
sandkit.api.lights.temporary.TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [worker/api/lights.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L16)

Options for [createAtWorld](#createatworld).

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.lights.temporary.worker.createatworld

```ts
sandkit.api.lights.temporary.createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: [worker/api/lights.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L47)

Create a temporary light at world coordinates.

##### Parameters

###### worldX

`number`

World x position in pixels.

###### worldY

`number`

World y position in pixels.

###### options?

[`TemporaryLightOptions`](api/sandkit.api.effects.md#temporarylightoptions)

Brightness, duration, colour, and dedup settings.

##### Returns

[`TemporaryLightHandle`](#temporarylighthandle)

##### Example

**Worker entry**

```ts
const light = api.lights.temporary.createAtWorld(worldX, worldY, {
  durationTicks: 15,
});
const lightId = light.lightId;
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.main (worker)

**`Internal`**

Worker thread only.

`sandkit.api.main` — send events to the main thread.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md#workersandkitapi). Main thread has a
larger `sandkit.api` surface; do not assume parity.

### Functions <!-- {docsify-ignore} -->

#### emitEvent() :id=sandkit.api.main.worker.emitevent

```ts
sandkit.api.main.emitEvent<Payload = any>(eventId: string, payload: Payload): void
```

Defined in: [worker/api/main.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/main.d.ts#L15)

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

#### ActiveMapV1 :id=sandkit.api.maps.worker.activemapv1

<p class="smt-member-path"><code>sandkit.api.maps.ActiveMapV1 (worker)</code></p>
Defined in: [shared/api/maps.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L18)

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

Defined in: [shared/api/maps.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L19)

###### deployment?

```ts
optional deployment?: unknown
```

Defined in: [shared/api/maps.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L20)

###### spawn?

```ts
optional spawn?: unknown
```

Defined in: [shared/api/maps.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L21)

###### topBounds?

```ts
optional topBounds?: object
```

Defined in: [shared/api/maps.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L22)

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

Defined in: [shared/api/maps.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L26)

###### depthLight?

```ts
optional depthLight?: unknown
```

Defined in: [shared/api/maps.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L27)

### Functions <!-- {docsify-ignore} -->

#### getActive() :id=sandkit.api.maps.worker.getactive

```ts
sandkit.api.maps.getActive(): Readonly<ActiveMapV1> | null
```

Defined in: [shared/api/maps.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L11)

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

#### getPositionAtWorld() :id=sandkit.api.player.worker.getpositionatworld

```ts
sandkit.api.player.getPositionAtWorld(): Vector2
```

Defined in: [shared/api/player.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L16)

Return the player center position in world pixels.

##### Returns

[`Vector2`](api/shared.player.md#vector2)

World position as `{ x, y }` in pixels.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~getWorldPosition()~~ :id=sandkit.api.player.worker.getworldposition

```ts
sandkit.api.player.getWorldPosition(): Vector2
```

Defined in: [shared/api/player.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L23)

##### Returns

[`Vector2`](api/shared.player.md#vector2)

##### Deprecated

Use [getPositionAtWorld](#getpositionatworld) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isCollidingWithCell() :id=sandkit.api.player.worker.iscollidingwithcell

```ts
sandkit.api.player.isCollidingWithCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/player.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L34)

Return true when the player hitbox overlaps the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when the player overlaps the cell.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isWithinRadiusOfCell() :id=sandkit.api.player.worker.iswithinradiusofcell

```ts
sandkit.api.player.isWithinRadiusOfCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/player.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L46)

Return true when the player is within `radius` cells of the point.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

True when the player is inside the radius.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

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

#### SharedArray :id=sandkit.api.shared.worker.sharedarray

<p class="smt-member-path"><code>sandkit.api.shared.SharedArray (worker)</code></p>
Re-exports [SharedArray](api/sandkit.api.shared.md#sharedarray)

***

#### SharedArrayType :id=sandkit.api.shared.worker.sharedarraytype

<p class="smt-member-path"><code>sandkit.api.shared.SharedArrayType (worker)</code></p>
Re-exports [SharedArrayType](api/sandkit.api.shared.md#sharedarraytype)

---

## sandkit.api.shared.buffers (worker)

Named shared memory buffers for worker threads.

### Functions <!-- {docsify-ignore} -->

#### require() :id=sandkit.api.shared.buffers.worker.require

```ts
sandkit.api.shared.buffers.require(key: string, config: object): SharedArray
```

Defined in: [worker/api/shared.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/shared.d.ts#L37)

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

##### Example

```ts
const counts = api.shared.buffers.require("counts", {
  type: "uint32",
  length: 4,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### get :id=sandkit.api.shared.buffers.worker.get

<p class="smt-member-path"><code>sandkit.api.shared.buffers.get (worker)</code></p>
Re-exports [get](api/sandkit.api.shared.buffers.md#get)

---

## sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

### Namespaces <!-- {docsify-ignore} -->

- [processing](api/sandkit.api.structures.processing.worker.md)

### Interfaces <!-- {docsify-ignore} -->

#### StructureData :id=sandkit.api.structures.worker.structuredata

<p class="smt-member-path"><code>sandkit.api.structures.StructureData (worker)</code></p>
Defined in: [shared/api/structures.d.ts:218](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L218)

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

Defined in: [shared/api/structures.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L219)

###### elementType?

```ts
optional elementType?: TaggedNumber<"elementType"> | null
```

Defined in: [shared/api/structures.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L220)

***

#### Structure :id=sandkit.api.structures.worker.structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure (worker)</code></p>
Defined in: [shared/api/structures.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L225)

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

Defined in: [shared/api/structures.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L226)

###### y

```ts
y: number
```

Defined in: [shared/api/structures.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L227)

###### trapped?

```ts
optional trapped?: boolean
```

Defined in: [shared/api/structures.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L228)

###### data?

```ts
optional data?: StructureData
```

Defined in: [shared/api/structures.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L229)

### Type Aliases <!-- {docsify-ignore} -->

#### StructureType :id=sandkit.api.structures.worker.structuretype

```ts
sandkit.api.structures.StructureType = StructureType | TaggedNumber<"structureType">
```

Defined in: [shared/api/structures.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L234)

Numeric structure type handle. Built-in enum values autocomplete.

***

#### StructureId :id=sandkit.api.structures.worker.structureid

```ts
sandkit.api.structures.StructureId = LooseString<never>
```

Defined in: [shared/api/structures.d.ts:236](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L236)

Mod or built-in structure string id.

***

#### StructureRef :id=sandkit.api.structures.worker.structureref

```ts
sandkit.api.structures.StructureRef = StructureType | StructureId
```

Defined in: [shared/api/structures.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L238)

Type handle or string id accepted by lookup helpers.

### Functions <!-- {docsify-ignore} -->

#### forEachOfType() :id=sandkit.api.structures.worker.foreachoftype

```ts
sandkit.api.structures.forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

Defined in: [shared/api/structures.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L26)

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

##### Example

**Worker entry**

```ts
api.structures.forEachOfType("exampleStructure", (structure) => {
  processStructure(structure);
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getAtCell() :id=sandkit.api.structures.worker.getatcell

```ts
sandkit.api.structures.getAtCell(...args: CellCoordinates): Structure | null
```

Defined in: [shared/api/structures.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L39)

Return the structure at a cell, or null when none.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`Structure`](#structure) \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDefinitionByType() :id=sandkit.api.structures.worker.getdefinitionbytype

```ts
sandkit.api.structures.getDefinitionByType(structureType: StructureRef): any
```

Defined in: [shared/api/structures.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L48)

Return the mod-registered or built-in definition for a structure type.

##### Parameters

###### structureType

[`StructureRef`](#structureref)

Structure type value or string id.

##### Returns

`any`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getTypeById() :id=sandkit.api.structures.worker.gettypebyid

```ts
sandkit.api.structures.getTypeById(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L57)

Map a structure string id to its runtime type value.

##### Parameters

###### structureId

`string` & `object`

Structure string id.

##### Returns

[`StructureType`](#structuretype)

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~getTypeFromId()~~ :id=sandkit.api.structures.worker.gettypefromid

```ts
sandkit.api.structures.getTypeFromId(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L64)

##### Parameters

###### structureId

`string` & `object`

##### Returns

[`StructureType`](#structuretype)

##### Deprecated

Use [getTypeById](#gettypebyid) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### hasBuiltAtCell() :id=sandkit.api.structures.worker.hasbuiltatcell

```ts
sandkit.api.structures.hasBuiltAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L74)

Return true when a completed structure occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isType() :id=sandkit.api.structures.worker.istype

```ts
sandkit.api.structures.isType(structure: Structure | null, structureId: string & object): boolean
```

Defined in: [shared/api/structures.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L84)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isTypeAtCell() :id=sandkit.api.structures.worker.istypeatcell

```ts
sandkit.api.structures.isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/structures.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L95)

Return true when the cell structure matches the given id.

##### Parameters

###### args

...\[`number`, `number`, `string` & `object`\]

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setSpritesheetIndex() :id=sandkit.api.structures.worker.setspritesheetindex

```ts
sandkit.api.structures.setSpritesheetIndex(structure: Structure, index: number): void
```

Defined in: [shared/api/structures.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L105)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setSpritesheetIndexAtCell() :id=sandkit.api.structures.worker.setspritesheetindexatcell

```ts
sandkit.api.structures.setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/structures.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L116)

Set spritesheet frame index for the structure at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setSpritesheetIndexByValue() :id=sandkit.api.structures.worker.setspritesheetindexbyvalue

```ts
sandkit.api.structures.setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

Defined in: [shared/api/structures.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L127)

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

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### setSpritesheetIndexByValueAtCell() :id=sandkit.api.structures.worker.setspritesheetindexbyvalueatcell

```ts
sandkit.api.structures.setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

Defined in: [shared/api/structures.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L143)

Same as [setSpritesheetIndexByValue](#setspritesheetindexbyvalue) for the structure at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`[]\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### update() :id=sandkit.api.structures.worker.update

```ts
sandkit.api.structures.update(structure: Structure, options?: object): void
```

Defined in: [shared/api/structures.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L160)

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

##### Example

**Worker entry**

```ts
api.structures.update(structure, { propagateToWorkers: true });
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### updateData() :id=sandkit.api.structures.worker.updatedata

```ts
sandkit.api.structures.updateData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L180)

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

##### Example

**Worker entry**

```ts
api.structures.updateData(
  structure,
  { mode: "allow" },
  { propagateToWorkers: true },
);
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~setData()~~ :id=sandkit.api.structures.worker.setdata

```ts
sandkit.api.structures.setData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L191)

##### Parameters

###### structure

[`Structure`](#structure)

###### partial

`any`

###### options?

###### propagateToWorkers?

`boolean`

##### Returns

`void`

##### Deprecated

Use [updateData](#updatedata) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.structures.processing (worker)

Structure processing enablement checks.

### Functions <!-- {docsify-ignore} -->

#### isEnabledAtCell() :id=sandkit.api.structures.processing.worker.isenabledatcell

```ts
sandkit.api.structures.processing.isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L207)

Return true when processing is enabled at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~isEnabledAt()~~ :id=sandkit.api.structures.processing.worker.isenabledat

```ts
sandkit.api.structures.processing.isEnabledAt(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L214)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### Deprecated

Use [isEnabledAtCell](#isenabledatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

## sandkit.api.terrains (worker)

**`Internal`**

Shared `sandkit.api.terrains` base — terrain type lookup and cell mutation.

Worker-entry mutations are immediate. Main thread defers matching helpers in
`sandkit.api.terrains`.

 Base namespace reused by main and worker declarations.

### Interfaces <!-- {docsify-ignore} -->

#### TerrainDefinition :id=sandkit.api.terrains.worker.terraindefinition

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDefinition (worker)</code></p>
Defined in: [shared/api/terrains.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L20)

Terrain definition shape for register and [getDefinitionByType](#getdefinitionbytype).

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Indexable

```ts
[key: string]: unknown
```

##### Properties

###### id

```ts
id: string
```

Defined in: [shared/api/terrains.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L22)

Unique mod-scoped terrain id.

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [shared/api/terrains.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L24)

i18n key for the terrain display name.

###### hp?

```ts
optional hp?: number
```

Defined in: [shared/api/terrains.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L26)

Default terrain hit points.

###### materialId?

```ts
optional materialId?: number
```

Defined in: [shared/api/terrains.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L28)

Material id used for rendering. Must be > obstacle breakpoint and < 150.

###### metaColor?

```ts
optional metaColor?: number
```

Defined in: [shared/api/terrains.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L30)

UI/meta color as 0xRRGGBB.

###### colorHSL?

```ts
optional colorHSL?: [number, number, number]
```

Defined in: [shared/api/terrains.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L32)

Base terrain color as HSL components.

###### excavationRequirements?

```ts
optional excavationRequirements?: readonly string[]
```

Defined in: [shared/api/terrains.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L34)

Tool item ids required to excavate this terrain.

###### interactions?

```ts
optional interactions?: readonly object[]
```

Defined in: [shared/api/terrains.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L36)

Tooltip interactions shown for this terrain.

###### output?

```ts
optional output?: object
```

Defined in: [shared/api/terrains.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L38)

Default element drop when the terrain is destroyed.

###### elementType

```ts
elementType: ElementType
```

###### chance

```ts
chance: number
```

***

#### TerrainDataAtCell :id=sandkit.api.terrains.worker.terraindataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDataAtCell (worker)</code></p>
Defined in: [shared/api/terrains.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L50)

Terrain cell data returned by [getDataAtCell](#getdataatcell).

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### Properties

###### cellType

```ts
cellType: TerrainType
```

Defined in: [shared/api/terrains.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L52)

Numeric terrain cell type.

###### hitPoints

```ts
hitPoints: number | null
```

Defined in: [shared/api/terrains.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L58)

Current hit points, or null when the terrain has no hp.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

###### ~~hp?~~

```ts
optional hp?: number | null
```

Defined in: [shared/api/terrains.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L64)

###### Deprecated

Use [hitPoints](#hitpoints) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### TerrainMutationOptions :id=sandkit.api.terrains.worker.terrainmutationoptions

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainMutationOptions (worker)</code></p>
Defined in: [shared/api/terrains.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L238)

Options for terrain create, replace, or remove calls.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### Properties

###### skipShadow?

```ts
optional skipShadow?: boolean
```

Defined in: [shared/api/terrains.d.ts:240](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L240)

Skip shadow updates around the changed cell.

### Type Aliases <!-- {docsify-ignore} -->

#### TerrainType :id=sandkit.api.terrains.worker.terraintype

```ts
sandkit.api.terrains.TerrainType = CellType | TaggedNumber<"terrainType">
```

Defined in: [shared/api/terrains.d.ts:248](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L248)

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### TerrainId :id=sandkit.api.terrains.worker.terrainid

```ts
sandkit.api.terrains.TerrainId = LooseString<never>
```

Defined in: [shared/api/terrains.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L255)

Mod or built-in terrain string id.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### TerrainRef :id=sandkit.api.terrains.worker.terrainref

```ts
sandkit.api.terrains.TerrainRef = TerrainType | TerrainId
```

Defined in: [shared/api/terrains.d.ts:262](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L262)

Type handle or string id accepted by mutation helpers.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Functions <!-- {docsify-ignore} -->

#### getIdByType() :id=sandkit.api.terrains.worker.getidbytype

```ts
sandkit.api.terrains.getIdByType(terrainType: TerrainType): string & object
```

Defined in: [shared/api/terrains.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L74)

Return the mod string id for a numeric terrain type.

##### Parameters

###### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

##### Returns

`string` & `object`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getTypeById() :id=sandkit.api.terrains.worker.gettypebyid

```ts
sandkit.api.terrains.getTypeById(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L83)

Resolve a terrain string id to a numeric cell type.

##### Parameters

###### terrainId

`string` & `object`

Mod-registered or built-in terrain id.

##### Returns

[`TerrainType`](#terraintype)

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### ~~getTypeFromId()~~ :id=sandkit.api.terrains.worker.gettypefromid

```ts
sandkit.api.terrains.getTypeFromId(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L90)

##### Parameters

###### terrainId

`string` & `object`

##### Returns

[`TerrainType`](#terraintype)

##### Deprecated

Use [getTypeById](#gettypebyid) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDefinitionByType() :id=sandkit.api.terrains.worker.getdefinitionbytype

```ts
sandkit.api.terrains.getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined
```

Defined in: [shared/api/terrains.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L99)

Look up the definition for a terrain type.

##### Parameters

###### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

##### Returns

[`TerrainDefinition`](#terraindefinition) \| `undefined`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getTypeAtCell() :id=sandkit.api.terrains.worker.gettypeatcell

```ts
sandkit.api.terrains.getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

Defined in: [shared/api/terrains.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L109)

Return the terrain cell type at a cell, or null when none.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`TerrainType`](#terraintype) \| `null`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### getDataAtCell() :id=sandkit.api.terrains.worker.getdataatcell

```ts
sandkit.api.terrains.getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null
```

Defined in: [shared/api/terrains.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L120)

Return terrain cell type and hit points at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`TerrainDataAtCell`](#terraindataatcell) \| `null`

Cell type and hit points, or null when the cell is not terrain.

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isAtCell() :id=sandkit.api.terrains.worker.isatcell

```ts
sandkit.api.terrains.isAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/terrains.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L130)

Return true when any terrain occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isTypeAtCell() :id=sandkit.api.terrains.worker.istypeatcell

```ts
sandkit.api.terrains.isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/terrains.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L141)

Return true when the cell terrain matches the given id.

##### Parameters

###### args

...\[`number`, `number`, `string` & `object`\]

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### isCellIdTerrain() :id=sandkit.api.terrains.worker.iscellidterrain

```ts
sandkit.api.terrains.isCellIdTerrain(cellId: CellId): boolean
```

Defined in: [shared/api/terrains.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L150)

Return true when a packed cell id refers to terrain.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

##### Returns

`boolean`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### damageAtCell() :id=sandkit.api.terrains.worker.damageatcell

```ts
sandkit.api.terrains.damageAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/terrains.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L161)

Apply damage to terrain at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

#### meltAtCell() :id=sandkit.api.terrains.worker.meltatcell

```ts
sandkit.api.terrains.meltAtCell(...args: CellCoordinates): void
```

Defined in: [shared/api/terrains.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L171)

Melt terrain at a cell (for example ice to water). Worker-entry writes are immediate.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### createAtCell() :id=sandkit.api.terrains.worker.createatcell

```ts
sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L183)

Place terrain at an empty cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### replaceAtCell() :id=sandkit.api.terrains.worker.replaceatcell

```ts
sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L197)

Replace existing terrain at a cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### removeAtCell() :id=sandkit.api.terrains.worker.removeatcell

```ts
sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:210](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L210)

Remove terrain from a cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### setHitPointsAtCell() :id=sandkit.api.terrains.worker.sethitpointsatcell

```ts
sandkit.api.terrains.setHitPointsAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L224)

Set terrain hit points at a cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

True when hit points changed or the terrain was removed.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

#### ~~setHpAtCell()~~ :id=sandkit.api.terrains.worker.sethpatcell

```ts
sandkit.api.terrains.setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:231](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L231)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

##### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

##### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

---

## sandkit.api.ui (worker)

**`Internal`**

Shared `sandkit.api.ui` base — lightweight UI helpers available on workers.

Main thread adds richer UI APIs on top of this shape.

 Base namespace reused by main and worker declarations.

### Interfaces <!-- {docsify-ignore} -->

#### I18nTextKey :id=sandkit.api.ui.worker.i18ntextkey

<p class="smt-member-path"><code>sandkit.api.ui.I18nTextKey (worker)</code></p>
Defined in: [shared/api/ui.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L25)

Translation key with optional parameter substitution.

##### Properties

###### key

```ts
key: string
```

Defined in: [shared/api/ui.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L27)

Namespaced translation key (for example `ui|save|save`).

###### params?

```ts
optional params?: Record<string, string | number>
```

Defined in: [shared/api/ui.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L29)

Values merged into the translated string.

***

#### I18nTranslatable :id=sandkit.api.ui.worker.i18ntranslatable

<p class="smt-member-path"><code>sandkit.api.ui.I18nTranslatable (worker)</code></p>
Defined in: [shared/api/ui.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L33)

Value returned by `sandkit.api.i18n.translatable`.

##### Properties

###### \_\_translatable

```ts
\_\_translatable: true
```

Defined in: [shared/api/ui.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L34)

###### key

```ts
key: string
```

Defined in: [shared/api/ui.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L35)

###### fallback

```ts
fallback: string
```

Defined in: [shared/api/ui.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L36)

***

#### ToastOptions :id=sandkit.api.ui.worker.toastoptions

<p class="smt-member-path"><code>sandkit.api.ui.ToastOptions (worker)</code></p>
Defined in: [shared/api/ui.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L40)

Cooldown, style, and auto-dismiss options for [toast](#toast).

##### Properties

###### cooldown?

```ts
optional cooldown?: number
```

Defined in: [shared/api/ui.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L42)

Minimum ms before the same toast can show again.

###### cooldownKey?

```ts
optional cooldownKey?: string
```

Defined in: [shared/api/ui.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L47)

Dedupe key paired with [ToastOptions.cooldown](#cooldown).
Defaults to the message string or `message.key`.

###### duration?

```ts
optional duration?: number | false
```

Defined in: [shared/api/ui.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L52)

Auto-dismiss delay in ms. Default `5000`.
Set `false` to keep the toast until another toast replaces it.

###### variant?

```ts
optional variant?: string & object | "danger" | "hint" | "hole"
```

Defined in: [shared/api/ui.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L54)

Visual style applied to the toast body.

### Type Aliases <!-- {docsify-ignore} -->

#### LocalizedText :id=sandkit.api.ui.worker.localizedtext

```ts
sandkit.api.ui.LocalizedText = string | I18nTextKey | I18nTranslatable
```

Defined in: [shared/api/ui.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L22)

Plain text, translation key object, or i18n translatable value.

### Functions <!-- {docsify-ignore} -->

#### toast() :id=sandkit.api.ui.worker.toast

```ts
sandkit.api.ui.toast(message: LocalizedText, options?: ToastOptions): void
```

Defined in: [shared/api/ui.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L19)

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

##### Example

**Worker entry**

```ts
api.ui.toast({ key: "mods|example|workerToast" });
```

---

## sandkit.api.worker (worker)

**`Internal`**

Worker thread only.

`sandkit.api.worker` — identity of the current simulation worker.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md#workersandkitapi). Not the same as
main-thread APIs.

### Functions <!-- {docsify-ignore} -->

#### getIndex() :id=sandkit.api.worker.worker.getindex

```ts
sandkit.api.worker.getIndex(): number
```

Defined in: [worker/api/worker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/worker.d.ts#L14)

Return the zero-based index of this worker in the worker pool.

##### Returns

`number`

Worker index (`0` … `getCount() - 1`).

***

#### getCount() :id=sandkit.api.worker.worker.getcount

```ts
sandkit.api.worker.getCount(): number
```

Defined in: [worker/api/worker.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/worker.d.ts#L19)

Return the total number of simulation workers.

##### Returns

`number`

Worker count for the active simulation.

---

## sandkit.api.world (worker)

### Deprecated

Use [grid](api/sandkit.api.grid.worker.md) instead.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### ~~getCellIdAtCell~~ :id=sandkit.api.world.worker.getcellidatcell

<p class="smt-member-path"><code>sandkit.api.world.getCellIdAtCell (worker)</code></p>
Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

***

#### ~~isCellEmptyAtCell~~ :id=sandkit.api.world.worker.iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.world.isCellEmptyAtCell (worker)</code></p>
Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

***

#### ~~isTerrainAtCell~~ :id=sandkit.api.world.worker.isterrainatcell

<p class="smt-member-path"><code>sandkit.api.world.isTerrainAtCell (worker)</code></p>
Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

***

#### ~~reportActivityAtCell~~ :id=sandkit.api.world.worker.reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.world.reportActivityAtCell (worker)</code></p>
Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

***

#### ~~excavateAtCell~~ :id=sandkit.api.world.worker.excavateatcell

<p class="smt-member-path"><code>sandkit.api.world.excavateAtCell (worker)</code></p>
Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

***

#### ~~getDimensions~~ :id=sandkit.api.world.worker.getdimensions

<p class="smt-member-path"><code>sandkit.api.world.getDimensions (worker)</code></p>
Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

***

#### ~~ExcavateOptions~~ :id=sandkit.api.world.worker.excavateoptions

<p class="smt-member-path"><code>sandkit.api.world.ExcavateOptions (worker)</code></p>
Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

***

#### ~~CellId~~ :id=sandkit.api.world.worker.cellid

<p class="smt-member-path"><code>sandkit.api.world.CellId (worker)</code></p>
Re-exports [CellId](api/sandkit.api.grid.md#cellid)

***

#### ~~GridDimensions~~ :id=sandkit.api.world.worker.griddimensions

<p class="smt-member-path"><code>sandkit.api.world.GridDimensions (worker)</code></p>
Re-exports [GridDimensions](api/sandkit.api.grid.md#griddimensions)

---

## sandkit.engine.api.augments

**`Internal`**

`sandkit.engine.api.augments` — player augment levels and unlocked perks.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

### Functions <!-- {docsify-ignore} -->

#### getDigLevel() :id=sandkit.engine.api.augments.getdiglevel

```ts
sandkit.engine.api.augments.getDigLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L15)

Return the current dig augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getGunLevel() :id=sandkit.engine.api.augments.getgunlevel

```ts
sandkit.engine.api.augments.getGunLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L20)

Return the current gun augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getPhaseLevel() :id=sandkit.engine.api.augments.getphaselevel

```ts
sandkit.engine.api.augments.getPhaseLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L25)

Return the current phase augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getRocketAmmoLevel() :id=sandkit.engine.api.augments.getrocketammolevel

```ts
sandkit.engine.api.augments.getRocketAmmoLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L30)

Return the current rocket ammo augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getRocketReloadLevel() :id=sandkit.engine.api.augments.getrocketreloadlevel

```ts
sandkit.engine.api.augments.getRocketReloadLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L35)

Return the current rocket reload augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getSprintCapLevel() :id=sandkit.engine.api.augments.getsprintcaplevel

```ts
sandkit.engine.api.augments.getSprintCapLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L40)

Return the current sprint cap augment level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasBigDig() :id=sandkit.engine.api.augments.hasbigdig

```ts
sandkit.engine.api.augments.hasBigDig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L45)

Return whether the big-dig augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasBulletSpeed() :id=sandkit.engine.api.augments.hasbulletspeed

```ts
sandkit.engine.api.augments.hasBulletSpeed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L50)

Return whether the bullet-speed augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasBulletTracer() :id=sandkit.engine.api.augments.hasbullettracer

```ts
sandkit.engine.api.augments.hasBulletTracer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L55)

Return whether the bullet-tracer augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasKickstartBoost() :id=sandkit.engine.api.augments.haskickstartboost

```ts
sandkit.engine.api.augments.hasKickstartBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L60)

Return whether the kickstart-boost augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasPhaseDash() :id=sandkit.engine.api.augments.hasphasedash

```ts
sandkit.engine.api.augments.hasPhaseDash(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L65)

Return whether the phase-dash augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasPhaseDashCharge() :id=sandkit.engine.api.augments.hasphasedashcharge

```ts
sandkit.engine.api.augments.hasPhaseDashCharge(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L70)

Return whether the phase-dash-charge augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasRideBoost() :id=sandkit.engine.api.augments.hasrideboost

```ts
sandkit.engine.api.augments.hasRideBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L75)

Return whether the ride-boost augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasRocketDamage() :id=sandkit.engine.api.augments.hasrocketdamage

```ts
sandkit.engine.api.augments.hasRocketDamage(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L80)

Return whether the rocket-damage augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasRocketWarhead() :id=sandkit.engine.api.augments.hasrocketwarhead

```ts
sandkit.engine.api.augments.hasRocketWarhead(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L85)

Return whether the rocket-warhead augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasSprintPower() :id=sandkit.engine.api.augments.hassprintpower

```ts
sandkit.engine.api.augments.hasSprintPower(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L90)

Return whether the sprint-power augment is unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasTripleShot() :id=sandkit.engine.api.augments.hastripleshot

```ts
sandkit.engine.api.augments.hasTripleShot(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L95)

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

#### ensureProducedAtLeast() :id=sandkit.engine.api.auralite.ensureproducedatleast

```ts
sandkit.engine.api.auralite.ensureProducedAtLeast(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/auralite.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/auralite.d.ts#L15)

Ensure at least the given amount of auralite has been produced.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getProduced() :id=sandkit.engine.api.auralite.getproduced

```ts
sandkit.engine.api.auralite.getProduced(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/auralite.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/auralite.d.ts#L20)

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

#### delete() :id=sandkit.engine.api.blueprints.delete

```ts
sandkit.engine.api.blueprints.delete(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L15)

Delete a saved blueprint. Runtime property name is `delete`.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### exportAllString() :id=sandkit.engine.api.blueprints.exportallstring

```ts
sandkit.engine.api.blueprints.exportAllString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L21)

Export all blueprints as one string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### exportString() :id=sandkit.engine.api.blueprints.exportstring

```ts
sandkit.engine.api.blueprints.exportString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L26)

Export one blueprint as a string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAll() :id=sandkit.engine.api.blueprints.getall

```ts
sandkit.engine.api.blueprints.getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L31)

Return all saved blueprints.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### importString() :id=sandkit.engine.api.blueprints.importstring

```ts
sandkit.engine.api.blueprints.importString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L36)

Import a blueprint from a string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### load() :id=sandkit.engine.api.blueprints.load

```ts
sandkit.engine.api.blueprints.load(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L41)

Load a blueprint into the active session.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### save() :id=sandkit.engine.api.blueprints.save

```ts
sandkit.engine.api.blueprints.save(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L46)

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

#### activate() :id=sandkit.engine.api.clipboard.activate

```ts
sandkit.engine.api.clipboard.activate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L15)

Activate the clipboard tool or mode.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### clear() :id=sandkit.engine.api.clipboard.clear

```ts
sandkit.engine.api.clipboard.clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L20)

Clear the current clipboard contents.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### get() :id=sandkit.engine.api.clipboard.get

```ts
sandkit.engine.api.clipboard.get(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L25)

Return the current clipboard payload.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getHistory() :id=sandkit.engine.api.clipboard.gethistory

```ts
sandkit.engine.api.clipboard.getHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L30)

Return clipboard history entries.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getSignalLinks() :id=sandkit.engine.api.clipboard.getsignallinks

```ts
sandkit.engine.api.clipboard.getSignalLinks(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L35)

Return signal links stored on the clipboard.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### selectFromHistory() :id=sandkit.engine.api.clipboard.selectfromhistory

```ts
sandkit.engine.api.clipboard.selectFromHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L40)

Restore a clipboard entry from history.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### set() :id=sandkit.engine.api.clipboard.set

```ts
sandkit.engine.api.clipboard.set(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L45)

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

#### colorStructure() :id=sandkit.engine.api.coloringTool.colorstructure

```ts
sandkit.engine.api.coloringTool.colorStructure(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L15)

Apply a color to one structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### floodFillColor() :id=sandkit.engine.api.coloringTool.floodfillcolor

```ts
sandkit.engine.api.coloringTool.floodFillColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L20)

Flood-fill connected structures with a color.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getColor() :id=sandkit.engine.api.coloringTool.getcolor

```ts
sandkit.engine.api.coloringTool.getColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L25)

Return the color on a structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### isColorableStructure() :id=sandkit.engine.api.coloringTool.iscolorablestructure

```ts
sandkit.engine.api.coloringTool.isColorableStructure(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L30)

Return whether a structure can be colored.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### isMatchColorMode() :id=sandkit.engine.api.coloringTool.ismatchcolormode

```ts
sandkit.engine.api.coloringTool.isMatchColorMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L35)

Return whether match-color mode is active.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### isPaintBucketMode() :id=sandkit.engine.api.coloringTool.ispaintbucketmode

```ts
sandkit.engine.api.coloringTool.isPaintBucketMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L40)

Return whether paint-bucket mode is active.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### setColor() :id=sandkit.engine.api.coloringTool.setcolor

```ts
sandkit.engine.api.coloringTool.setColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L45)

Set the color on a structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### toggleMatchColorMode() :id=sandkit.engine.api.coloringTool.togglematchcolormode

```ts
sandkit.engine.api.coloringTool.toggleMatchColorMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L50)

Toggle match-color mode on or off.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### togglePaintBucketMode() :id=sandkit.engine.api.coloringTool.togglepaintbucketmode

```ts
sandkit.engine.api.coloringTool.togglePaintBucketMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L55)

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

Defined in: [sandkit/engine/api/colorPicker.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L12)

Sentinel value for cycling through predefined colors.

***

#### NO\_COLOR

```ts
const NO\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L14)

Sentinel value for no color selected.

***

#### PREDEFINED\_COLORS

```ts
const PREDEFINED\_COLORS: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L16)

List of predefined palette colors.

***

#### RANDOM\_COLOR

```ts
const RANDOM\_COLOR: unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L18)

Sentinel value for a random palette color.

### Functions <!-- {docsify-ignore} -->

#### closePalette() :id=sandkit.engine.api.colorPicker.closepalette

```ts
sandkit.engine.api.colorPicker.closePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L23)

Close the active color palette UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getActivePalette() :id=sandkit.engine.api.colorPicker.getactivepalette

```ts
sandkit.engine.api.colorPicker.getActivePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L28)

Return the active palette identifier.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getCycleColor() :id=sandkit.engine.api.colorPicker.getcyclecolor

```ts
sandkit.engine.api.colorPicker.getCycleColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L33)

Return the next color in the cycle.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getRandomColor() :id=sandkit.engine.api.colorPicker.getrandomcolor

```ts
sandkit.engine.api.colorPicker.getRandomColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L38)

Return a random predefined color.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hexToRgba() :id=sandkit.engine.api.colorPicker.hextorgba

```ts
sandkit.engine.api.colorPicker.hexToRgba(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L43)

Convert a hex color string to RGBA components.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### renderColorButton() :id=sandkit.engine.api.colorPicker.rendercolorbutton

```ts
sandkit.engine.api.colorPicker.renderColorButton(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L48)

Render a color-picker button in the UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### renderColorSection() :id=sandkit.engine.api.colorPicker.rendercolorsection

```ts
sandkit.engine.api.colorPicker.renderColorSection(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L53)

Render a color section in the UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### renderPalette() :id=sandkit.engine.api.colorPicker.renderpalette

```ts
sandkit.engine.api.colorPicker.renderPalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L58)

Render the full color palette UI.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### rgbaToHex() :id=sandkit.engine.api.colorPicker.rgbatohex

```ts
sandkit.engine.api.colorPicker.rgbaToHex(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L63)

Convert RGBA components to a hex color string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### setActivePalette() :id=sandkit.engine.api.colorPicker.setactivepalette

```ts
sandkit.engine.api.colorPicker.setActivePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L68)

Set the active palette identifier.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### togglePalette() :id=sandkit.engine.api.colorPicker.togglepalette

```ts
sandkit.engine.api.colorPicker.togglePalette(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/colorPicker.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/colorPicker.d.ts#L73)

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

#### registerType() :id=sandkit.engine.api.conveyors.registertype

```ts
sandkit.engine.api.conveyors.registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/conveyors.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/conveyors.d.ts#L15)

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

#### register() :id=sandkit.engine.api.debug.register

```ts
sandkit.engine.api.debug.register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/debug.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/debug.d.ts#L15)

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

#### kill() :id=sandkit.engine.api.drones.kill

```ts
sandkit.engine.api.drones.kill(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/drones.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/drones.d.ts#L15)

Remove one or more drones.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### spawn() :id=sandkit.engine.api.drones.spawn

```ts
sandkit.engine.api.drones.spawn(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/drones.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/drones.d.ts#L20)

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

#### createLight() :id=sandkit.engine.api.entities.createlight

```ts
sandkit.engine.api.entities.createLight(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L15)

Create a light entity attached to a parent.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAll() :id=sandkit.engine.api.entities.getall

```ts
sandkit.engine.api.entities.getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L20)

Return all live entities.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAllByType() :id=sandkit.engine.api.entities.getallbytype

```ts
sandkit.engine.api.entities.getAllByType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L25)

Return all entities of one type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAllTypeDefs() :id=sandkit.engine.api.entities.getalltypedefs

```ts
sandkit.engine.api.entities.getAllTypeDefs(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L30)

Return all registered entity type definitions.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getSprite() :id=sandkit.engine.api.entities.getsprite

```ts
sandkit.engine.api.entities.getSprite(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L35)

Return the sprite for an entity.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getTypeDef() :id=sandkit.engine.api.entities.gettypedef

```ts
sandkit.engine.api.entities.getTypeDef(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L40)

Return one entity type definition by id.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### launch() :id=sandkit.engine.api.entities.launch

```ts
sandkit.engine.api.entities.launch(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L45)

Launch an entity with velocity or trajectory.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### registerSpawner() :id=sandkit.engine.api.entities.registerspawner

```ts
sandkit.engine.api.entities.registerSpawner(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L50)

Register an entity spawner behavior.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### registerType() :id=sandkit.engine.api.entities.registertype

```ts
sandkit.engine.api.entities.registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L55)

Register a custom entity type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### spawn() :id=sandkit.engine.api.entities.spawn

```ts
sandkit.engine.api.entities.spawn(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L60)

Spawn an entity instance.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### startCapture() :id=sandkit.engine.api.entities.startcapture

```ts
sandkit.engine.api.entities.startCapture(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/entities.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/entities.d.ts#L65)

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

#### define() :id=sandkit.engine.api.extensions.define

```ts
sandkit.engine.api.extensions.define(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/extensions.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/extensions.d.ts#L15)

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

#### addViabilityGold() :id=sandkit.engine.api.factory.addviabilitygold

```ts
sandkit.engine.api.factory.addViabilityGold(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L15)

Add viability gold toward the next factory tier.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### canUnlockNextTier() :id=sandkit.engine.api.factory.canunlocknexttier

```ts
sandkit.engine.api.factory.canUnlockNextTier(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L20)

Return whether the next factory tier can be unlocked.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### ensureProcessAtLeast() :id=sandkit.engine.api.factory.ensureprocessatleast

```ts
sandkit.engine.api.factory.ensureProcessAtLeast(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L25)

Ensure at least the given process count has been recorded.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### flushDeferredLevelUps() :id=sandkit.engine.api.factory.flushdeferredlevelups

```ts
sandkit.engine.api.factory.flushDeferredLevelUps(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L30)

Apply deferred factory level-ups.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getLevel() :id=sandkit.engine.api.factory.getlevel

```ts
sandkit.engine.api.factory.getLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L35)

Return the current factory level.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getProcessCount() :id=sandkit.engine.api.factory.getprocesscount

```ts
sandkit.engine.api.factory.getProcessCount(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L40)

Return total recorded process count.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getProcessRate() :id=sandkit.engine.api.factory.getprocessrate

```ts
sandkit.engine.api.factory.getProcessRate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L45)

Return the current process rate.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### recordProcess() :id=sandkit.engine.api.factory.recordprocess

```ts
sandkit.engine.api.factory.recordProcess(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L50)

Record one factory process event.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### unlockNextTier() :id=sandkit.engine.api.factory.unlocknexttier

```ts
sandkit.engine.api.factory.unlockNextTier(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/factory.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L55)

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

#### generate() :id=sandkit.engine.api.foliage.generate

```ts
sandkit.engine.api.foliage.generate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L15)

Generate foliage for a region or world chunk.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getClusters() :id=sandkit.engine.api.foliage.getclusters

```ts
sandkit.engine.api.foliage.getClusters(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L20)

Return foliage cluster data.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getContainer() :id=sandkit.engine.api.foliage.getcontainer

```ts
sandkit.engine.api.foliage.getContainer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L25)

Return the foliage render container.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasProcgenData() :id=sandkit.engine.api.foliage.hasprocgendata

```ts
sandkit.engine.api.foliage.hasProcgenData(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L30)

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

#### getColor() :id=sandkit.engine.api.foundationColorPicker.getcolor

```ts
sandkit.engine.api.foundationColorPicker.getColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foundationColorPicker.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foundationColorPicker.d.ts#L15)

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

#### load() :id=sandkit.engine.api.game.load

```ts
sandkit.engine.api.game.load(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/game.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/game.d.ts#L15)

Load a saved game into the session.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### save() :id=sandkit.engine.api.game.save

```ts
sandkit.engine.api.game.save(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/game.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/game.d.ts#L20)

Save the current session.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### start() :id=sandkit.engine.api.game.start

```ts
sandkit.engine.api.game.start(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/game.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/game.d.ts#L25)

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

#### absorbAdjacentElements() :id=sandkit.engine.api.heatTransfer.absorbadjacentelements

```ts
sandkit.engine.api.heatTransfer.absorbAdjacentElements(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L15)

Absorb heat from adjacent elements into a cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### addTemperature() :id=sandkit.engine.api.heatTransfer.addtemperature

```ts
sandkit.engine.api.heatTransfer.addTemperature(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L20)

Add temperature to a cell or region.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### computeDiffusedTemperatures() :id=sandkit.engine.api.heatTransfer.computediffusedtemperatures

```ts
sandkit.engine.api.heatTransfer.computeDiffusedTemperatures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L25)

Compute diffused temperatures for connected cells.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### computeEqualizedTemperature() :id=sandkit.engine.api.heatTransfer.computeequalizedtemperature

```ts
sandkit.engine.api.heatTransfer.computeEqualizedTemperature(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L30)

Compute one equalized temperature across connected cells.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### consumeTemperatureNear() :id=sandkit.engine.api.heatTransfer.consumetemperaturenear

```ts
sandkit.engine.api.heatTransfer.consumeTemperatureNear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L35)

Consume temperature near a point or cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### ensureTemperature() :id=sandkit.engine.api.heatTransfer.ensuretemperature

```ts
sandkit.engine.api.heatTransfer.ensureTemperature(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L40)

Ensure a cell has at least the given temperature.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### equalizeConnected() :id=sandkit.engine.api.heatTransfer.equalizeconnected

```ts
sandkit.engine.api.heatTransfer.equalizeConnected(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/heatTransfer.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L45)

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

#### registerType() :id=sandkit.engine.api.launchers.registertype

```ts
sandkit.engine.api.launchers.registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/launchers.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/launchers.d.ts#L15)

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

#### getColor() :id=sandkit.engine.api.lightColorPicker.getcolor

```ts
sandkit.engine.api.lightColorPicker.getColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/lightColorPicker.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/lightColorPicker.d.ts#L15)

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

#### getMatterTypeFromId() :id=sandkit.engine.api.matters.getmattertypefromid

```ts
sandkit.engine.api.matters.getMatterTypeFromId(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/matters.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/matters.d.ts#L15)

Resolve a matter type from an id string.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### register() :id=sandkit.engine.api.matters.register

```ts
sandkit.engine.api.matters.register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/matters.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/matters.d.ts#L20)

Register a custom matter type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### runSolidUpdate() :id=sandkit.engine.api.matters.runsolidupdate

```ts
sandkit.engine.api.matters.runSolidUpdate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/matters.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/matters.d.ts#L25)

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

#### register() :id=sandkit.engine.api.misc.register

```ts
sandkit.engine.api.misc.register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/misc.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/misc.d.ts#L15)

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

#### getMarkers() :id=sandkit.engine.api.portals.getmarkers

```ts
sandkit.engine.api.portals.getMarkers(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/portals.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/portals.d.ts#L15)

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

#### getAll() :id=sandkit.engine.api.prefabData.getall

```ts
sandkit.engine.api.prefabData.getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L15)

Return all prefab data entries.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAllMetadata() :id=sandkit.engine.api.prefabData.getallmetadata

```ts
sandkit.engine.api.prefabData.getAllMetadata(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L20)

Return metadata for all prefabs.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getArtifactLocations() :id=sandkit.engine.api.prefabData.getartifactlocations

```ts
sandkit.engine.api.prefabData.getArtifactLocations(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L25)

Return artifact locations for prefabs.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAtCell() :id=sandkit.engine.api.prefabData.getatcell

```ts
sandkit.engine.api.prefabData.getAtCell(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L30)

Return prefab data at one grid cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getMetadata() :id=sandkit.engine.api.prefabData.getmetadata

```ts
sandkit.engine.api.prefabData.getMetadata(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L35)

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

#### getPlacementByName() :id=sandkit.engine.api.prefabDecor.getplacementbyname

```ts
sandkit.engine.api.prefabDecor.getPlacementByName(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabDecor.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabDecor.d.ts#L15)

Return a decor placement definition by name.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### replaceDecor() :id=sandkit.engine.api.prefabDecor.replacedecor

```ts
sandkit.engine.api.prefabDecor.replaceDecor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabDecor.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabDecor.d.ts#L20)

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

#### localizeBlueprintStructures() :id=sandkit.engine.api.prefabulator.localizeblueprintstructures

```ts
sandkit.engine.api.prefabulator.localizeBlueprintStructures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabulator.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabulator.d.ts#L15)

Convert serialized blueprint structures to world-local coordinates.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### serializeBlueprintStructures() :id=sandkit.engine.api.prefabulator.serializeblueprintstructures

```ts
sandkit.engine.api.prefabulator.serializeBlueprintStructures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabulator.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabulator.d.ts#L20)

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

#### consume() :id=sandkit.engine.api.prismaline.consume

```ts
sandkit.engine.api.prismaline.consume(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L15)

Consume prismaline from the player or world.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAvailable() :id=sandkit.engine.api.prismaline.getavailable

```ts
sandkit.engine.api.prismaline.getAvailable(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L20)

Return available prismaline amount.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getConsumed() :id=sandkit.engine.api.prismaline.getconsumed

```ts
sandkit.engine.api.prismaline.getConsumed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L25)

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

#### consume() :id=sandkit.engine.api.prismite.consume

```ts
sandkit.engine.api.prismite.consume(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L15)

Consume prismite from the player or world.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAvailable() :id=sandkit.engine.api.prismite.getavailable

```ts
sandkit.engine.api.prismite.getAvailable(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L20)

Return available prismite amount.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getConsumed() :id=sandkit.engine.api.prismite.getconsumed

```ts
sandkit.engine.api.prismite.getConsumed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L25)

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

#### enqueue() :id=sandkit.engine.api.queue.enqueue

```ts
sandkit.engine.api.queue.enqueue(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L15)

Enqueue work to run on a future tick.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### enqueueInTicks() :id=sandkit.engine.api.queue.enqueueinticks

```ts
sandkit.engine.api.queue.enqueueInTicks(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L20)

Enqueue work to run after a tick delay.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### enqueueSkipTick() :id=sandkit.engine.api.queue.enqueueskiptick

```ts
sandkit.engine.api.queue.enqueueSkipTick(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L25)

Enqueue work that skips the current tick.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### process() :id=sandkit.engine.api.queue.process

```ts
sandkit.engine.api.queue.process(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L30)

Process pending queue items for the current tick.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### registerHandler() :id=sandkit.engine.api.queue.registerhandler

```ts
sandkit.engine.api.queue.registerHandler(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L35)

Register a handler for a queue item type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### removeByKey() :id=sandkit.engine.api.queue.removebykey

```ts
sandkit.engine.api.queue.removeByKey(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/queue.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L40)

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

#### refresh() :id=sandkit.engine.api.shadows.refresh

```ts
sandkit.engine.api.shadows.refresh(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L15)

Refresh shadows for the whole visible area.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### refreshRadius() :id=sandkit.engine.api.shadows.refreshradius

```ts
sandkit.engine.api.shadows.refreshRadius(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L20)

Refresh shadows within a circular radius.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### refreshRect() :id=sandkit.engine.api.shadows.refreshrect

```ts
sandkit.engine.api.shadows.refreshRect(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L25)

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

#### getDefaultConfig() :id=sandkit.engine.api.strataform.getdefaultconfig

```ts
sandkit.engine.api.strataform.getDefaultConfig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L15)

Return the default strataform configuration.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getRegisteredTypes() :id=sandkit.engine.api.strataform.getregisteredtypes

```ts
sandkit.engine.api.strataform.getRegisteredTypes(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L20)

Return all registered strataform types.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### registerType() :id=sandkit.engine.api.strataform.registertype

```ts
sandkit.engine.api.strataform.registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L25)

Register a custom strataform type.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### trigger() :id=sandkit.engine.api.strataform.trigger

```ts
sandkit.engine.api.strataform.trigger(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L30)

Trigger a strataform event at a location.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### triggerByType() :id=sandkit.engine.api.strataform.triggerbytype

```ts
sandkit.engine.api.strataform.triggerByType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L35)

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

#### decrementConvergenceBuffer() :id=sandkit.engine.api.swarmConsole.decrementconvergencebuffer

```ts
sandkit.engine.api.swarmConsole.decrementConvergenceBuffer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L15)

Decrease the convergence buffer by one step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getCrystalMined() :id=sandkit.engine.api.swarmConsole.getcrystalmined

```ts
sandkit.engine.api.swarmConsole.getCrystalMined(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L20)

Return total crystal mined for swarm consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getDiskRadiusCells() :id=sandkit.engine.api.swarmConsole.getdiskradiuscells

```ts
sandkit.engine.api.swarmConsole.getDiskRadiusCells(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L25)

Return the disk radius in cells for a console.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getEntityType() :id=sandkit.engine.api.swarmConsole.getentitytype

```ts
sandkit.engine.api.swarmConsole.getEntityType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L30)

Return the entity type used by swarm consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getNearestConvergence() :id=sandkit.engine.api.swarmConsole.getnearestconvergence

```ts
sandkit.engine.api.swarmConsole.getNearestConvergence(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L35)

Return the nearest convergence point.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getPendingConvergence() :id=sandkit.engine.api.swarmConsole.getpendingconvergence

```ts
sandkit.engine.api.swarmConsole.getPendingConvergence(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L40)

Return the pending convergence target.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getPlacedConsoles() :id=sandkit.engine.api.swarmConsole.getplacedconsoles

```ts
sandkit.engine.api.swarmConsole.getPlacedConsoles(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L45)

Return all placed swarm console structures.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getRadiusPx() :id=sandkit.engine.api.swarmConsole.getradiuspx

```ts
sandkit.engine.api.swarmConsole.getRadiusPx(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L50)

Return the console effect radius in pixels.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### isSpawnJammed() :id=sandkit.engine.api.swarmConsole.isspawnjammed

```ts
sandkit.engine.api.swarmConsole.isSpawnJammed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L55)

Return whether swarm spawn is currently jammed.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### registerEntityType() :id=sandkit.engine.api.swarmConsole.registerentitytype

```ts
sandkit.engine.api.swarmConsole.registerEntityType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L60)

Register the entity type for swarm consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### resetAllConvergenceBuffers() :id=sandkit.engine.api.swarmConsole.resetallconvergencebuffers

```ts
sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L65)

Reset convergence buffers on all consoles.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### setSpawnJammed() :id=sandkit.engine.api.swarmConsole.setspawnjammed

```ts
sandkit.engine.api.swarmConsole.setSpawnJammed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L70)

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

#### cancelSelection() :id=sandkit.engine.api.sweeperDrone.cancelselection

```ts
sandkit.engine.api.sweeperDrone.cancelSelection(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/sweeperDrone.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/sweeperDrone.d.ts#L15)

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

#### add() :id=sandkit.engine.api.teleportZones.add

```ts
sandkit.engine.api.teleportZones.add(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L15)

Add a teleport zone to the world.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAll() :id=sandkit.engine.api.teleportZones.getall

```ts
sandkit.engine.api.teleportZones.getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L20)

Return all teleport zones.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getAtCell() :id=sandkit.engine.api.teleportZones.getatcell

```ts
sandkit.engine.api.teleportZones.getAtCell(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L25)

Return the teleport zone at one grid cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getById() :id=sandkit.engine.api.teleportZones.getbyid

```ts
sandkit.engine.api.teleportZones.getById(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L30)

Return one teleport zone by id.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### remove() :id=sandkit.engine.api.teleportZones.remove

```ts
sandkit.engine.api.teleportZones.remove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L35)

Remove a teleport zone.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### spawnDefaultParticles() :id=sandkit.engine.api.teleportZones.spawndefaultparticles

```ts
sandkit.engine.api.teleportZones.spawnDefaultParticles(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L40)

Spawn default particles at a teleport zone.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### teleportPlayerTo() :id=sandkit.engine.api.teleportZones.teleportplayerto

```ts
sandkit.engine.api.teleportZones.teleportPlayerTo(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L45)

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

#### areAllTargetsBuilt() :id=sandkit.engine.api.tutorialBuild.arealltargetsbuilt

```ts
sandkit.engine.api.tutorialBuild.areAllTargetsBuilt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L15)

Return whether all active tutorial targets are built.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### areFamilyTargetsBuilt() :id=sandkit.engine.api.tutorialBuild.arefamilytargetsbuilt

```ts
sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L20)

Return whether all targets in a structure family are built.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### canPlaceAtActiveTarget() :id=sandkit.engine.api.tutorialBuild.canplaceatactivetarget

```ts
sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L25)

Return whether placement is allowed at the active target.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getFoundationMoveDests() :id=sandkit.engine.api.tutorialBuild.getfoundationmovedests

```ts
sandkit.engine.api.tutorialBuild.getFoundationMoveDests(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L30)

Return foundation move destination cells for the tutorial step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getFoundationMoveSources() :id=sandkit.engine.api.tutorialBuild.getfoundationmovesources

```ts
sandkit.engine.api.tutorialBuild.getFoundationMoveSources(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L35)

Return foundation move source cells for the tutorial step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getTargets() :id=sandkit.engine.api.tutorialBuild.gettargets

```ts
sandkit.engine.api.tutorialBuild.getTargets(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L40)

Return build targets for the current tutorial step.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### hasDefinition() :id=sandkit.engine.api.tutorialBuild.hasdefinition

```ts
sandkit.engine.api.tutorialBuild.hasDefinition(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L45)

Return whether a tutorial build definition exists.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### isStepConstrained() :id=sandkit.engine.api.tutorialBuild.isstepconstrained

```ts
sandkit.engine.api.tutorialBuild.isStepConstrained(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L50)

Return whether the current step restricts building.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### matchesFoundationMove() :id=sandkit.engine.api.tutorialBuild.matchesfoundationmove

```ts
sandkit.engine.api.tutorialBuild.matchesFoundationMove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L55)

Return whether a foundation move matches tutorial rules.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### matchesFoundationRemove() :id=sandkit.engine.api.tutorialBuild.matchesfoundationremove

```ts
sandkit.engine.api.tutorialBuild.matchesFoundationRemove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L60)

Return whether a foundation remove matches tutorial rules.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### shouldProtectActiveTargetAt() :id=sandkit.engine.api.tutorialBuild.shouldprotectactivetargetat

```ts
sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L65)

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

#### clear() :id=sandkit.engine.api.usageTracker.clear

```ts
sandkit.engine.api.usageTracker.clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L15)

Clear recorded usage statistics.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getLatest() :id=sandkit.engine.api.usageTracker.getlatest

```ts
sandkit.engine.api.usageTracker.getLatest(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L20)

Return the most recently used item or structure.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getMostUsed() :id=sandkit.engine.api.usageTracker.getmostused

```ts
sandkit.engine.api.usageTracker.getMostUsed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L25)

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

#### getPaletteData() :id=sandkit.engine.api.wall.getpalettedata

```ts
sandkit.engine.api.wall.getPaletteData(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L15)

Return wall palette data for rendering.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getWallDataAt() :id=sandkit.engine.api.wall.getwalldataat

```ts
sandkit.engine.api.wall.getWallDataAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L20)

Return wall tile data at one cell.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getWallDataSize() :id=sandkit.engine.api.wall.getwalldatasize

```ts
sandkit.engine.api.wall.getWallDataSize(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L25)

Return the byte size of wall tile data.

##### Parameters

###### args

...`unknown`[]

Game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### setWallDataAt() :id=sandkit.engine.api.wall.setwalldataat

```ts
sandkit.engine.api.wall.setWallDataAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L30)

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

#### clear() :id=sandkit.engine.api.workerLocal.clear

```ts
sandkit.engine.api.workerLocal.clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L14)

Remove all keys from worker-local storage.

##### Parameters

###### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### get() :id=sandkit.engine.api.workerLocal.get

```ts
sandkit.engine.api.workerLocal.get(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L19)

Return a value by key, or undefined when missing.

##### Parameters

###### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### getOrInit() :id=sandkit.engine.api.workerLocal.getorinit

```ts
sandkit.engine.api.workerLocal.getOrInit(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L24)

Return a value by key, initializing it when missing.

##### Parameters

###### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

##### Returns

`unknown`

***

#### set() :id=sandkit.engine.api.workerLocal.set

```ts
sandkit.engine.api.workerLocal.set(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L29)

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
- [PickupType](api/sandkit.enums.PickupType.md)
- [~~WorldItemType~~](api/sandkit.enums.WorldItemType.md)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.enums :id=sandkit.enums.sandkitenums

```ts
SandkitEnums = object
```

Defined in: [sandkit/enums/index.d.ts:431](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L431)

Composed `sandkit.enums` object.

##### Properties

###### AbilityType

```ts
AbilityType: *typeof* AbilityType
```

Defined in: [sandkit/enums/index.d.ts:432](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L432)

###### ActionState

```ts
ActionState: *typeof* ActionState
```

Defined in: [sandkit/enums/index.d.ts:433](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L433)

###### ActionType

```ts
ActionType: *typeof* ActionType
```

Defined in: [sandkit/enums/index.d.ts:434](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L434)

###### AuthorizationType

```ts
AuthorizationType: *typeof* AuthorizationType
```

Defined in: [sandkit/enums/index.d.ts:435](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L435)

###### BuildMode

```ts
BuildMode: *typeof* BuildMode
```

Defined in: [sandkit/enums/index.d.ts:436](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L436)

###### BuildingClearance

```ts
BuildingClearance: *typeof* BuildingClearance
```

Defined in: [sandkit/enums/index.d.ts:437](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L437)

###### CellType

```ts
CellType: *typeof* CellType
```

Defined in: [sandkit/enums/index.d.ts:438](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L438)

###### ComponentId

```ts
ComponentId: *typeof* ComponentId
```

Defined in: [sandkit/enums/index.d.ts:439](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L439)

###### DroneType

```ts
DroneType: *typeof* DroneType
```

Defined in: [sandkit/enums/index.d.ts:440](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L440)

###### ElementType

```ts
ElementType: *typeof* ElementType
```

Defined in: [sandkit/enums/index.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L441)

###### ItemId

```ts
ItemId: *typeof* ItemId
```

Defined in: [sandkit/enums/index.d.ts:442](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L442)

###### ItemType

```ts
ItemType: *typeof* ItemType
```

Defined in: [sandkit/enums/index.d.ts:443](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L443)

###### KeyBinding

```ts
KeyBinding: *typeof* KeyBinding
```

Defined in: [sandkit/enums/index.d.ts:444](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L444)

###### KeyState

```ts
KeyState: *typeof* KeyState
```

Defined in: [sandkit/enums/index.d.ts:445](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L445)

###### MatterType

```ts
MatterType: *typeof* MatterType
```

Defined in: [sandkit/enums/index.d.ts:446](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L446)

###### ProjectileType

```ts
ProjectileType: *typeof* ProjectileType
```

Defined in: [sandkit/enums/index.d.ts:447](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L447)

###### ReloadType

```ts
ReloadType: *typeof* ReloadType
```

Defined in: [sandkit/enums/index.d.ts:448](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L448)

###### Scene

```ts
Scene: *typeof* Scene
```

Defined in: [sandkit/enums/index.d.ts:449](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L449)

###### StructureType

```ts
StructureType: *typeof* StructureType
```

Defined in: [sandkit/enums/index.d.ts:450](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L450)

###### Tech

```ts
Tech: *typeof* Tech
```

Defined in: [sandkit/enums/index.d.ts:451](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L451)

###### TechStatus

```ts
TechStatus: *typeof* TechStatus
```

Defined in: [sandkit/enums/index.d.ts:452](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L452)

###### PickupType

```ts
PickupType: *typeof* PickupType
```

Defined in: [sandkit/enums/index.d.ts:453](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L453)

###### ~~WorldItemType~~

```ts
WorldItemType: *typeof* WorldItemType
```

Defined in: [sandkit/enums/index.d.ts:457](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L457)

###### Deprecated

Use [PickupType](api/sandkit.enums.PickupType.md) instead.

---

## sandkit.enums.AbilityType

Defined in: [sandkit/enums/index.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L9)

Item ability categories (dig, shoot, spray, laser).

### Enumeration Members <!-- {docsify-ignore} -->

#### Dig :id=sandkit.enums.AbilityType.dig

```ts
sandkit.enums.AbilityType.Dig: 1
```

Defined in: [sandkit/enums/index.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L10)

***

#### Shoot :id=sandkit.enums.AbilityType.shoot

```ts
sandkit.enums.AbilityType.Shoot: 2
```

Defined in: [sandkit/enums/index.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L11)

***

#### Spray :id=sandkit.enums.AbilityType.spray

```ts
sandkit.enums.AbilityType.Spray: 3
```

Defined in: [sandkit/enums/index.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L12)

***

#### Laser :id=sandkit.enums.AbilityType.laser

```ts
sandkit.enums.AbilityType.Laser: 4
```

Defined in: [sandkit/enums/index.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L13)

---

## sandkit.enums.ActionState

Defined in: [sandkit/enums/index.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L17)

Phases of a held or repeated player action.

### Enumeration Members <!-- {docsify-ignore} -->

#### Start :id=sandkit.enums.ActionState.start

```ts
sandkit.enums.ActionState.Start: 1
```

Defined in: [sandkit/enums/index.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L18)

***

#### Active :id=sandkit.enums.ActionState.active

```ts
sandkit.enums.ActionState.Active: 2
```

Defined in: [sandkit/enums/index.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L19)

***

#### End :id=sandkit.enums.ActionState.end

```ts
sandkit.enums.ActionState.End: 3
```

Defined in: [sandkit/enums/index.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L20)

---

## sandkit.enums.ActionType

Defined in: [sandkit/enums/index.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L24)

High-level action channel (weapon, building, tool, mod).

### Enumeration Members <!-- {docsify-ignore} -->

#### Weapon :id=sandkit.enums.ActionType.weapon

```ts
sandkit.enums.ActionType.Weapon: 1
```

Defined in: [sandkit/enums/index.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L25)

***

#### Building :id=sandkit.enums.ActionType.building

```ts
sandkit.enums.ActionType.Building: 2
```

Defined in: [sandkit/enums/index.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L26)

***

#### Tool :id=sandkit.enums.ActionType.tool

```ts
sandkit.enums.ActionType.Tool: 3
```

Defined in: [sandkit/enums/index.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L27)

***

#### Mod :id=sandkit.enums.ActionType.mod

```ts
sandkit.enums.ActionType.Mod: 4
```

Defined in: [sandkit/enums/index.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L28)

---

## sandkit.enums.AuthorizationType

Defined in: [sandkit/enums/index.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L32)

Zone rules that restrict player abilities.

### Enumeration Members <!-- {docsify-ignore} -->

#### NoJetpack :id=sandkit.enums.AuthorizationType.nojetpack

```ts
sandkit.enums.AuthorizationType.NoJetpack: 1
```

Defined in: [sandkit/enums/index.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L33)

***

#### NoGrab :id=sandkit.enums.AuthorizationType.nograb

```ts
sandkit.enums.AuthorizationType.NoGrab: 2
```

Defined in: [sandkit/enums/index.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L34)

***

#### NoBuild :id=sandkit.enums.AuthorizationType.nobuild

```ts
sandkit.enums.AuthorizationType.NoBuild: 3
```

Defined in: [sandkit/enums/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L35)

***

#### NoTool :id=sandkit.enums.AuthorizationType.notool

```ts
sandkit.enums.AuthorizationType.NoTool: 4
```

Defined in: [sandkit/enums/index.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L36)

***

#### NoExcavation :id=sandkit.enums.AuthorizationType.noexcavation

```ts
sandkit.enums.AuthorizationType.NoExcavation: 5
```

Defined in: [sandkit/enums/index.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L37)

***

#### NoToolExceptFlamethrower :id=sandkit.enums.AuthorizationType.notoolexceptflamethrower

```ts
sandkit.enums.AuthorizationType.NoToolExceptFlamethrower: 6
```

Defined in: [sandkit/enums/index.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L38)

---

## sandkit.enums.BuildingClearance

Defined in: [sandkit/enums/index.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L48)

Result of a build placement check.

### Enumeration Members <!-- {docsify-ignore} -->

#### Available :id=sandkit.enums.BuildingClearance.available

```ts
sandkit.enums.BuildingClearance.Available: 1
```

Defined in: [sandkit/enums/index.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L49)

***

#### FullyBlocked :id=sandkit.enums.BuildingClearance.fullyblocked

```ts
sandkit.enums.BuildingClearance.FullyBlocked: 2
```

Defined in: [sandkit/enums/index.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L50)

***

#### PartiallyBlocked :id=sandkit.enums.BuildingClearance.partiallyblocked

```ts
sandkit.enums.BuildingClearance.PartiallyBlocked: 3
```

Defined in: [sandkit/enums/index.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L51)

***

#### CanBeReplaced :id=sandkit.enums.BuildingClearance.canbereplaced

```ts
sandkit.enums.BuildingClearance.CanBeReplaced: 4
```

Defined in: [sandkit/enums/index.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L52)

---

## sandkit.enums.BuildMode

Defined in: [sandkit/enums/index.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L42)

Linear vs rectangular structure placement.

### Enumeration Members <!-- {docsify-ignore} -->

#### Linear :id=sandkit.enums.BuildMode.linear

```ts
sandkit.enums.BuildMode.Linear: 1
```

Defined in: [sandkit/enums/index.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L43)

***

#### Rectangular :id=sandkit.enums.BuildMode.rectangular

```ts
sandkit.enums.BuildMode.Rectangular: 2
```

Defined in: [sandkit/enums/index.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L44)

---

## sandkit.enums.CellType

Defined in: [sandkit/enums/index.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L56)

Terrain / special cell kinds in the simulation grid.

### Enumeration Members <!-- {docsify-ignore} -->

#### Empty :id=sandkit.enums.CellType.empty

```ts
sandkit.enums.CellType.Empty: 0
```

Defined in: [sandkit/enums/index.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L57)

***

#### Element :id=sandkit.enums.CellType.element

```ts
sandkit.enums.CellType.Element: 1
```

Defined in: [sandkit/enums/index.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L58)

***

#### Dirt :id=sandkit.enums.CellType.dirt

```ts
sandkit.enums.CellType.Dirt: 2
```

Defined in: [sandkit/enums/index.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L59)

***

#### SporeSoil :id=sandkit.enums.CellType.sporesoil

```ts
sandkit.enums.CellType.SporeSoil: 3
```

Defined in: [sandkit/enums/index.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L60)

***

#### Fog :id=sandkit.enums.CellType.fog

```ts
sandkit.enums.CellType.Fog: 4
```

Defined in: [sandkit/enums/index.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L61)

***

#### FogJetpackBlock :id=sandkit.enums.CellType.fogjetpackblock

```ts
sandkit.enums.CellType.FogJetpackBlock: 5
```

Defined in: [sandkit/enums/index.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L62)

***

#### FogWater :id=sandkit.enums.CellType.fogwater

```ts
sandkit.enums.CellType.FogWater: 6
```

Defined in: [sandkit/enums/index.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L63)

***

#### FreezingIceSoil :id=sandkit.enums.CellType.freezingicesoil

```ts
sandkit.enums.CellType.FreezingIceSoil: 7
```

Defined in: [sandkit/enums/index.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L64)

***

#### Divider :id=sandkit.enums.CellType.divider

```ts
sandkit.enums.CellType.Divider: 8
```

Defined in: [sandkit/enums/index.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L65)

***

#### Grass :id=sandkit.enums.CellType.grass

```ts
sandkit.enums.CellType.Grass: 9
```

Defined in: [sandkit/enums/index.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L66)

***

#### Moss :id=sandkit.enums.CellType.moss

```ts
sandkit.enums.CellType.Moss: 10
```

Defined in: [sandkit/enums/index.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L67)

***

#### GoldSoil :id=sandkit.enums.CellType.goldsoil

```ts
sandkit.enums.CellType.GoldSoil: 11
```

Defined in: [sandkit/enums/index.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L68)

***

#### Petal :id=sandkit.enums.CellType.petal

```ts
sandkit.enums.CellType.Petal: 12
```

Defined in: [sandkit/enums/index.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L69)

***

#### FogLava :id=sandkit.enums.CellType.foglava

```ts
sandkit.enums.CellType.FogLava: 13
```

Defined in: [sandkit/enums/index.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L70)

***

#### Fluxite :id=sandkit.enums.CellType.fluxite

```ts
sandkit.enums.CellType.Fluxite: 14
```

Defined in: [sandkit/enums/index.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L71)

***

#### Block :id=sandkit.enums.CellType.block

```ts
sandkit.enums.CellType.Block: 15
```

Defined in: [sandkit/enums/index.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L72)

***

#### SlidingBlock :id=sandkit.enums.CellType.slidingblock

```ts
sandkit.enums.CellType.SlidingBlock: 16
```

Defined in: [sandkit/enums/index.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L73)

***

#### SlidingBlockLeft :id=sandkit.enums.CellType.slidingblockleft

```ts
sandkit.enums.CellType.SlidingBlockLeft: 17
```

Defined in: [sandkit/enums/index.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L74)

***

#### SlidingBlockRight :id=sandkit.enums.CellType.slidingblockright

```ts
sandkit.enums.CellType.SlidingBlockRight: 18
```

Defined in: [sandkit/enums/index.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L75)

***

#### ConveyorLeft :id=sandkit.enums.CellType.conveyorleft

```ts
sandkit.enums.CellType.ConveyorLeft: 19
```

Defined in: [sandkit/enums/index.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L76)

***

#### ConveyorRight :id=sandkit.enums.CellType.conveyorright

```ts
sandkit.enums.CellType.ConveyorRight: 20
```

Defined in: [sandkit/enums/index.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L77)

***

#### ShakerLeft :id=sandkit.enums.CellType.shakerleft

```ts
sandkit.enums.CellType.ShakerLeft: 21
```

Defined in: [sandkit/enums/index.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L78)

***

#### ShakerRight :id=sandkit.enums.CellType.shakerright

```ts
sandkit.enums.CellType.ShakerRight: 22
```

Defined in: [sandkit/enums/index.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L79)

***

#### Stone :id=sandkit.enums.CellType.stone

```ts
sandkit.enums.CellType.Stone: 23
```

Defined in: [sandkit/enums/index.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L80)

***

#### VelocitySoaker :id=sandkit.enums.CellType.velocitysoaker

```ts
sandkit.enums.CellType.VelocitySoaker: 24
```

Defined in: [sandkit/enums/index.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L81)

***

#### Ice :id=sandkit.enums.CellType.ice

```ts
sandkit.enums.CellType.Ice: 25
```

Defined in: [sandkit/enums/index.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L82)

***

#### Grower :id=sandkit.enums.CellType.grower

```ts
sandkit.enums.CellType.Grower: 26
```

Defined in: [sandkit/enums/index.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L83)

***

#### NascentWater :id=sandkit.enums.CellType.nascentwater

```ts
sandkit.enums.CellType.NascentWater: 27
```

Defined in: [sandkit/enums/index.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L84)

***

#### SandiumSoil :id=sandkit.enums.CellType.sandiumsoil

```ts
sandkit.enums.CellType.SandiumSoil: 28
```

Defined in: [sandkit/enums/index.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L85)

***

#### Obsidian :id=sandkit.enums.CellType.obsidian

```ts
sandkit.enums.CellType.Obsidian: 29
```

Defined in: [sandkit/enums/index.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L86)

***

#### Crackstone :id=sandkit.enums.CellType.crackstone

```ts
sandkit.enums.CellType.Crackstone: 30
```

Defined in: [sandkit/enums/index.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L87)

---

## sandkit.enums.ComponentId

Defined in: [sandkit/enums/index.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L91)

UI component ids for HUD and menu routing.

### Enumeration Members <!-- {docsify-ignore} -->

#### Hotbar :id=sandkit.enums.ComponentId.hotbar

```ts
sandkit.enums.ComponentId.Hotbar: 1
```

Defined in: [sandkit/enums/index.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L92)

***

#### SoundBoxConfig :id=sandkit.enums.ComponentId.soundboxconfig

```ts
sandkit.enums.ComponentId.SoundBoxConfig: 2
```

Defined in: [sandkit/enums/index.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L93)

***

#### Root :id=sandkit.enums.ComponentId.root

```ts
sandkit.enums.ComponentId.Root: 4
```

Defined in: [sandkit/enums/index.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L94)

***

#### Menu :id=sandkit.enums.ComponentId.menu

```ts
sandkit.enums.ComponentId.Menu: 5
```

Defined in: [sandkit/enums/index.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L95)

***

#### Management :id=sandkit.enums.ComponentId.management

```ts
sandkit.enums.ComponentId.Management: 6
```

Defined in: [sandkit/enums/index.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L96)

***

#### FilterConfig :id=sandkit.enums.ComponentId.filterconfig

```ts
sandkit.enums.ComponentId.FilterConfig: 7
```

Defined in: [sandkit/enums/index.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L97)

***

#### Resources :id=sandkit.enums.ComponentId.resources

```ts
sandkit.enums.ComponentId.Resources: 8
```

Defined in: [sandkit/enums/index.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L98)

***

#### TechTree :id=sandkit.enums.ComponentId.techtree

```ts
sandkit.enums.ComponentId.TechTree: 9
```

Defined in: [sandkit/enums/index.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L99)

***

#### Tutorial :id=sandkit.enums.ComponentId.tutorial

```ts
sandkit.enums.ComponentId.Tutorial: 10
```

Defined in: [sandkit/enums/index.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L100)

***

#### Loader :id=sandkit.enums.ComponentId.loader

```ts
sandkit.enums.ComponentId.Loader: 11
```

Defined in: [sandkit/enums/index.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L101)

***

#### Options :id=sandkit.enums.ComponentId.options

```ts
sandkit.enums.ComponentId.Options: 12
```

Defined in: [sandkit/enums/index.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L102)

***

#### ShortcutHelper :id=sandkit.enums.ComponentId.shortcuthelper

```ts
sandkit.enums.ComponentId.ShortcutHelper: 13
```

Defined in: [sandkit/enums/index.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L103)

***

#### Upgrades :id=sandkit.enums.ComponentId.upgrades

```ts
sandkit.enums.ComponentId.Upgrades: 14
```

Defined in: [sandkit/enums/index.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L104)

***

#### Tooltip :id=sandkit.enums.ComponentId.tooltip

```ts
sandkit.enums.ComponentId.Tooltip: 15
```

Defined in: [sandkit/enums/index.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L105)

***

#### Notifications :id=sandkit.enums.ComponentId.notifications

```ts
sandkit.enums.ComponentId.Notifications: 16
```

Defined in: [sandkit/enums/index.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L106)

***

#### Objectives :id=sandkit.enums.ComponentId.objectives

```ts
sandkit.enums.ComponentId.Objectives: 17
```

Defined in: [sandkit/enums/index.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L107)

***

#### DroneAdminList :id=sandkit.enums.ComponentId.droneadminlist

```ts
sandkit.enums.ComponentId.DroneAdminList: 18
```

Defined in: [sandkit/enums/index.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L108)

***

#### HotbarOverlays :id=sandkit.enums.ComponentId.hotbaroverlays

```ts
sandkit.enums.ComponentId.HotbarOverlays: 19
```

Defined in: [sandkit/enums/index.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L109)

***

#### IntroScreen :id=sandkit.enums.ComponentId.introscreen

```ts
sandkit.enums.ComponentId.IntroScreen: 20
```

Defined in: [sandkit/enums/index.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L110)

***

#### StoryNotifications :id=sandkit.enums.ComponentId.storynotifications

```ts
sandkit.enums.ComponentId.StoryNotifications: 21
```

Defined in: [sandkit/enums/index.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L111)

***

#### FactoryProgress :id=sandkit.enums.ComponentId.factoryprogress

```ts
sandkit.enums.ComponentId.FactoryProgress: 22
```

Defined in: [sandkit/enums/index.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L112)

***

#### Dialogs :id=sandkit.enums.ComponentId.dialogs

```ts
sandkit.enums.ComponentId.Dialogs: 23
```

Defined in: [sandkit/enums/index.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L113)

***

#### GlobalOverlays :id=sandkit.enums.ComponentId.globaloverlays

```ts
sandkit.enums.ComponentId.GlobalOverlays: 24
```

Defined in: [sandkit/enums/index.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L114)

***

#### Lexicon :id=sandkit.enums.ComponentId.lexicon

```ts
sandkit.enums.ComponentId.Lexicon: 25
```

Defined in: [sandkit/enums/index.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L115)

***

#### ModsScreen :id=sandkit.enums.ComponentId.modsscreen

```ts
sandkit.enums.ComponentId.ModsScreen: 26
```

Defined in: [sandkit/enums/index.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L116)

***

#### CustomMapsScreen :id=sandkit.enums.ComponentId.custommapsscreen

```ts
sandkit.enums.ComponentId.CustomMapsScreen: 27
```

Defined in: [sandkit/enums/index.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L117)

***

#### CinematicPanel :id=sandkit.enums.ComponentId.cinematicpanel

```ts
sandkit.enums.ComponentId.CinematicPanel: 28
```

Defined in: [sandkit/enums/index.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L118)

***

#### Feedback :id=sandkit.enums.ComponentId.feedback

```ts
sandkit.enums.ComponentId.Feedback: 29
```

Defined in: [sandkit/enums/index.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L119)

---

## sandkit.enums.DroneType

Defined in: [sandkit/enums/index.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L123)

Autonomous drone kinds.

### Enumeration Members <!-- {docsify-ignore} -->

#### Digger :id=sandkit.enums.DroneType.digger

```ts
sandkit.enums.DroneType.Digger: 1
```

Defined in: [sandkit/enums/index.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L124)

***

#### Hauler :id=sandkit.enums.DroneType.hauler

```ts
sandkit.enums.DroneType.Hauler: 2
```

Defined in: [sandkit/enums/index.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L125)

---

## sandkit.enums.ElementType

Defined in: [sandkit/enums/index.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L129)

Built-in element type ids (prefer API string ids when registering mods).

### Enumeration Members <!-- {docsify-ignore} -->

#### Sand :id=sandkit.enums.ElementType.sand

```ts
sandkit.enums.ElementType.Sand: 1
```

Defined in: [sandkit/enums/index.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L130)

***

#### Particle :id=sandkit.enums.ElementType.particle

```ts
sandkit.enums.ElementType.Particle: 2
```

Defined in: [sandkit/enums/index.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L131)

***

#### Water :id=sandkit.enums.ElementType.water

```ts
sandkit.enums.ElementType.Water: 3
```

Defined in: [sandkit/enums/index.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L132)

***

#### WetSand :id=sandkit.enums.ElementType.wetsand

```ts
sandkit.enums.ElementType.WetSand: 4
```

Defined in: [sandkit/enums/index.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L133)

***

#### Sandium :id=sandkit.enums.ElementType.sandium

```ts
sandkit.enums.ElementType.Sandium: 5
```

Defined in: [sandkit/enums/index.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L134)

***

#### Residue :id=sandkit.enums.ElementType.residue

```ts
sandkit.enums.ElementType.Residue: 6
```

Defined in: [sandkit/enums/index.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L135)

***

#### Gold :id=sandkit.enums.ElementType.gold

```ts
sandkit.enums.ElementType.Gold: 7
```

Defined in: [sandkit/enums/index.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L136)

***

#### Gloom :id=sandkit.enums.ElementType.gloom

```ts
sandkit.enums.ElementType.Gloom: 8
```

Defined in: [sandkit/enums/index.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L137)

***

#### Shake :id=sandkit.enums.ElementType.shake

```ts
sandkit.enums.ElementType.Shake: 9
```

Defined in: [sandkit/enums/index.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L138)

***

#### Steam :id=sandkit.enums.ElementType.steam

```ts
sandkit.enums.ElementType.Steam: 10
```

Defined in: [sandkit/enums/index.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L139)

***

#### Fire :id=sandkit.enums.ElementType.fire

```ts
sandkit.enums.ElementType.Fire: 11
```

Defined in: [sandkit/enums/index.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L140)

***

#### FreezingIce :id=sandkit.enums.ElementType.freezingice

```ts
sandkit.enums.ElementType.FreezingIce: 12
```

Defined in: [sandkit/enums/index.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L141)

***

#### Flame :id=sandkit.enums.ElementType.flame

```ts
sandkit.enums.ElementType.Flame: 13
```

Defined in: [sandkit/enums/index.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L142)

***

#### BurntResidue :id=sandkit.enums.ElementType.burntresidue

```ts
sandkit.enums.ElementType.BurntResidue: 14
```

Defined in: [sandkit/enums/index.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L143)

***

#### Seed :id=sandkit.enums.ElementType.seed

```ts
sandkit.enums.ElementType.Seed: 15
```

Defined in: [sandkit/enums/index.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L144)

***

#### WetSeed :id=sandkit.enums.ElementType.wetseed

```ts
sandkit.enums.ElementType.WetSeed: 16
```

Defined in: [sandkit/enums/index.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L145)

***

#### Seedling :id=sandkit.enums.ElementType.seedling

```ts
sandkit.enums.ElementType.Seedling: 17
```

Defined in: [sandkit/enums/index.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L146)

***

#### Petalium :id=sandkit.enums.ElementType.petalium

```ts
sandkit.enums.ElementType.Petalium: 18
```

Defined in: [sandkit/enums/index.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L147)

***

#### Lava :id=sandkit.enums.ElementType.lava

```ts
sandkit.enums.ElementType.Lava: 19
```

Defined in: [sandkit/enums/index.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L148)

***

#### Basalt :id=sandkit.enums.ElementType.basalt

```ts
sandkit.enums.ElementType.Basalt: 20
```

Defined in: [sandkit/enums/index.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L149)

---

## sandkit.enums.ItemId

Defined in: [sandkit/enums/index.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L153)

Built-in hotbar item ids.

### Enumeration Members <!-- {docsify-ignore} -->

#### Shovel :id=sandkit.enums.ItemId.shovel

```ts
sandkit.enums.ItemId.Shovel: 1
```

Defined in: [sandkit/enums/index.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L154)

***

#### Grabber :id=sandkit.enums.ItemId.grabber

```ts
sandkit.enums.ItemId.Grabber: 2
```

Defined in: [sandkit/enums/index.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L155)

***

#### Demolisher :id=sandkit.enums.ItemId.demolisher

```ts
sandkit.enums.ItemId.Demolisher: 3
```

Defined in: [sandkit/enums/index.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L156)

***

#### GrapplingHook :id=sandkit.enums.ItemId.grapplinghook

```ts
sandkit.enums.ItemId.GrapplingHook: 4
```

Defined in: [sandkit/enums/index.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L157)

***

#### Vacuum :id=sandkit.enums.ItemId.vacuum

```ts
sandkit.enums.ItemId.Vacuum: 5
```

Defined in: [sandkit/enums/index.d.ts:158](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L158)

***

#### Gun :id=sandkit.enums.ItemId.gun

```ts
sandkit.enums.ItemId.Gun: 6
```

Defined in: [sandkit/enums/index.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L159)

***

#### Copier :id=sandkit.enums.ItemId.copier

```ts
sandkit.enums.ItemId.Copier: 7
```

Defined in: [sandkit/enums/index.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L160)

***

#### RocketLauncher :id=sandkit.enums.ItemId.rocketlauncher

```ts
sandkit.enums.ItemId.RocketLauncher: 8
```

Defined in: [sandkit/enums/index.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L161)

***

#### Digger :id=sandkit.enums.ItemId.digger

```ts
sandkit.enums.ItemId.Digger: 9
```

Defined in: [sandkit/enums/index.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L162)

***

#### Shotgun :id=sandkit.enums.ItemId.shotgun

```ts
sandkit.enums.ItemId.Shotgun: 10
```

Defined in: [sandkit/enums/index.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L163)

***

#### Teleporter :id=sandkit.enums.ItemId.teleporter

```ts
sandkit.enums.ItemId.Teleporter: 11
```

Defined in: [sandkit/enums/index.d.ts:164](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L164)

***

#### Flamethrower :id=sandkit.enums.ItemId.flamethrower

```ts
sandkit.enums.ItemId.Flamethrower: 12
```

Defined in: [sandkit/enums/index.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L165)

***

#### PipeRemover :id=sandkit.enums.ItemId.piperemover

```ts
sandkit.enums.ItemId.PipeRemover: 13
```

Defined in: [sandkit/enums/index.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L166)

***

#### Hauler :id=sandkit.enums.ItemId.hauler

```ts
sandkit.enums.ItemId.Hauler: 14
```

Defined in: [sandkit/enums/index.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L167)

***

#### Cryoblaster :id=sandkit.enums.ItemId.cryoblaster

```ts
sandkit.enums.ItemId.Cryoblaster: 15
```

Defined in: [sandkit/enums/index.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L168)

***

#### MegaShotgun :id=sandkit.enums.ItemId.megashotgun

```ts
sandkit.enums.ItemId.MegaShotgun: 16
```

Defined in: [sandkit/enums/index.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L169)

---

## sandkit.enums.ItemType

Defined in: [sandkit/enums/index.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L173)

Item category (weapon, tool, consumable, mod).

### Enumeration Members <!-- {docsify-ignore} -->

#### Weapon :id=sandkit.enums.ItemType.weapon

```ts
sandkit.enums.ItemType.Weapon: 1
```

Defined in: [sandkit/enums/index.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L174)

***

#### Tool :id=sandkit.enums.ItemType.tool

```ts
sandkit.enums.ItemType.Tool: 2
```

Defined in: [sandkit/enums/index.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L175)

***

#### Consumable :id=sandkit.enums.ItemType.consumable

```ts
sandkit.enums.ItemType.Consumable: 3
```

Defined in: [sandkit/enums/index.d.ts:176](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L176)

***

#### Mod :id=sandkit.enums.ItemType.mod

```ts
sandkit.enums.ItemType.Mod: 4
```

Defined in: [sandkit/enums/index.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L177)

---

## sandkit.enums.KeyBinding

Defined in: [sandkit/enums/index.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L181)

Named input bindings (settings keys).

### Enumeration Members <!-- {docsify-ignore} -->

#### OpenBuildMenu :id=sandkit.enums.KeyBinding.openbuildmenu

```ts
sandkit.enums.KeyBinding.OpenBuildMenu: "OpenBuildMenu"
```

Defined in: [sandkit/enums/index.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L182)

***

#### GrapplingHook :id=sandkit.enums.KeyBinding.grapplinghook

```ts
sandkit.enums.KeyBinding.GrapplingHook: "GrapplingHook"
```

Defined in: [sandkit/enums/index.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L183)

***

#### Escape :id=sandkit.enums.KeyBinding.escape

```ts
sandkit.enums.KeyBinding.Escape: "Escape"
```

Defined in: [sandkit/enums/index.d.ts:184](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L184)

***

#### OpenTechTree :id=sandkit.enums.KeyBinding.opentechtree

```ts
sandkit.enums.KeyBinding.OpenTechTree: "OpenTechTree"
```

Defined in: [sandkit/enums/index.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L185)

***

#### OpenInventory :id=sandkit.enums.KeyBinding.openinventory

```ts
sandkit.enums.KeyBinding.OpenInventory: "OpenInventory"
```

Defined in: [sandkit/enums/index.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L186)

***

#### ReverseBuildDirection :id=sandkit.enums.KeyBinding.reversebuilddirection

```ts
sandkit.enums.KeyBinding.ReverseBuildDirection: "ReverseBuildDirection"
```

Defined in: [sandkit/enums/index.d.ts:187](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L187)

***

#### Marquee :id=sandkit.enums.KeyBinding.marquee

```ts
sandkit.enums.KeyBinding.Marquee: "Marquee"
```

Defined in: [sandkit/enums/index.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L188)

***

#### Pause :id=sandkit.enums.KeyBinding.pause

```ts
sandkit.enums.KeyBinding.Pause: "Pause"
```

Defined in: [sandkit/enums/index.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L189)

***

#### Copy :id=sandkit.enums.KeyBinding.copy

```ts
sandkit.enums.KeyBinding.Copy: "Copy"
```

Defined in: [sandkit/enums/index.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L190)

***

#### Paste :id=sandkit.enums.KeyBinding.paste

```ts
sandkit.enums.KeyBinding.Paste: "Paste"
```

Defined in: [sandkit/enums/index.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L191)

***

#### Flip :id=sandkit.enums.KeyBinding.flip

```ts
sandkit.enums.KeyBinding.Flip: "Flip"
```

Defined in: [sandkit/enums/index.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L192)

***

#### Delete :id=sandkit.enums.KeyBinding.delete

```ts
sandkit.enums.KeyBinding.Delete: "Delete"
```

Defined in: [sandkit/enums/index.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L193)

***

#### PauseCamera :id=sandkit.enums.KeyBinding.pausecamera

```ts
sandkit.enums.KeyBinding.PauseCamera: "PauseCamera"
```

Defined in: [sandkit/enums/index.d.ts:194](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L194)

***

#### OpenUpgrades :id=sandkit.enums.KeyBinding.openupgrades

```ts
sandkit.enums.KeyBinding.OpenUpgrades: "OpenUpgrades"
```

Defined in: [sandkit/enums/index.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L195)

***

#### BuildMode :id=sandkit.enums.KeyBinding.buildmode

```ts
sandkit.enums.KeyBinding.BuildMode: "BuildMode"
```

Defined in: [sandkit/enums/index.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L196)

***

#### Demolish :id=sandkit.enums.KeyBinding.demolish

```ts
sandkit.enums.KeyBinding.Demolish: "Demolish"
```

Defined in: [sandkit/enums/index.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L197)

***

#### Hover :id=sandkit.enums.KeyBinding.hover

```ts
sandkit.enums.KeyBinding.Hover: "Hover"
```

Defined in: [sandkit/enums/index.d.ts:198](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L198)

***

#### Ruler :id=sandkit.enums.KeyBinding.ruler

```ts
sandkit.enums.KeyBinding.Ruler: "Ruler"
```

Defined in: [sandkit/enums/index.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L199)

***

#### Left :id=sandkit.enums.KeyBinding.left

```ts
sandkit.enums.KeyBinding.Left: "Left"
```

Defined in: [sandkit/enums/index.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L200)

***

#### Right :id=sandkit.enums.KeyBinding.right

```ts
sandkit.enums.KeyBinding.Right: "Right"
```

Defined in: [sandkit/enums/index.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L201)

***

#### Boost :id=sandkit.enums.KeyBinding.boost

```ts
sandkit.enums.KeyBinding.Boost: "Boost"
```

Defined in: [sandkit/enums/index.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L202)

***

#### Descend :id=sandkit.enums.KeyBinding.descend

```ts
sandkit.enums.KeyBinding.Descend: "Descend"
```

Defined in: [sandkit/enums/index.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L203)

***

#### SprintBoost :id=sandkit.enums.KeyBinding.sprintboost

```ts
sandkit.enums.KeyBinding.SprintBoost: "SprintBoost"
```

Defined in: [sandkit/enums/index.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L204)

***

#### OverrideReplaceStructures :id=sandkit.enums.KeyBinding.overridereplacestructures

```ts
sandkit.enums.KeyBinding.OverrideReplaceStructures: "OverrideReplaceStructures"
```

Defined in: [sandkit/enums/index.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L205)

***

#### QuickSave :id=sandkit.enums.KeyBinding.quicksave

```ts
sandkit.enums.KeyBinding.QuickSave: "QuickSave"
```

Defined in: [sandkit/enums/index.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L206)

***

#### QuickLoad :id=sandkit.enums.KeyBinding.quickload

```ts
sandkit.enums.KeyBinding.QuickLoad: "QuickLoad"
```

Defined in: [sandkit/enums/index.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L207)

***

#### ToggleGameHud :id=sandkit.enums.KeyBinding.togglegamehud

```ts
sandkit.enums.KeyBinding.ToggleGameHud: "ToggleGameHud"
```

Defined in: [sandkit/enums/index.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L208)

---

## sandkit.enums.KeyState

Defined in: [sandkit/enums/index.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L212)

Key transition state for input polling.

### Enumeration Members <!-- {docsify-ignore} -->

#### Up :id=sandkit.enums.KeyState.up

```ts
sandkit.enums.KeyState.Up: 1
```

Defined in: [sandkit/enums/index.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L213)

***

#### Down :id=sandkit.enums.KeyState.down

```ts
sandkit.enums.KeyState.Down: 2
```

Defined in: [sandkit/enums/index.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L214)

***

#### Pressed :id=sandkit.enums.KeyState.pressed

```ts
sandkit.enums.KeyState.Pressed: 3
```

Defined in: [sandkit/enums/index.d.ts:215](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L215)

***

#### Released :id=sandkit.enums.KeyState.released

```ts
sandkit.enums.KeyState.Released: 4
```

Defined in: [sandkit/enums/index.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L216)

***

#### All :id=sandkit.enums.KeyState.all

```ts
sandkit.enums.KeyState.All: 5
```

Defined in: [sandkit/enums/index.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L217)

---

## sandkit.enums.MatterType

Defined in: [sandkit/enums/index.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L221)

Physical behaviour category for elements (mirrors shared API enum).

### Enumeration Members <!-- {docsify-ignore} -->

#### Solid :id=sandkit.enums.MatterType.solid

```ts
sandkit.enums.MatterType.Solid: 1
```

Defined in: [sandkit/enums/index.d.ts:222](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L222)

***

#### Liquid :id=sandkit.enums.MatterType.liquid

```ts
sandkit.enums.MatterType.Liquid: 2
```

Defined in: [sandkit/enums/index.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L223)

***

#### Particle :id=sandkit.enums.MatterType.particle

```ts
sandkit.enums.MatterType.Particle: 3
```

Defined in: [sandkit/enums/index.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L224)

***

#### Gas :id=sandkit.enums.MatterType.gas

```ts
sandkit.enums.MatterType.Gas: 4
```

Defined in: [sandkit/enums/index.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L225)

***

#### Static :id=sandkit.enums.MatterType.static

```ts
sandkit.enums.MatterType.Static: 5
```

Defined in: [sandkit/enums/index.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L226)

***

#### Slushy :id=sandkit.enums.MatterType.slushy

```ts
sandkit.enums.MatterType.Slushy: 6
```

Defined in: [sandkit/enums/index.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L227)

***

#### Wisp :id=sandkit.enums.MatterType.wisp

```ts
sandkit.enums.MatterType.Wisp: 7
```

Defined in: [sandkit/enums/index.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L228)

***

#### Powder :id=sandkit.enums.MatterType.powder

```ts
sandkit.enums.MatterType.Powder: 8
```

Defined in: [sandkit/enums/index.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L229)

---

## sandkit.enums.PickupType

Defined in: [sandkit/enums/index.d.ts:413](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L413)

Pickups and interactable world items.

### Enumeration Members <!-- {docsify-ignore} -->

#### Artifact :id=sandkit.enums.PickupType.artifact

```ts
sandkit.enums.PickupType.Artifact: 1
```

Defined in: [sandkit/enums/index.d.ts:414](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L414)

***

#### GlyphKey :id=sandkit.enums.PickupType.glyphkey

```ts
sandkit.enums.PickupType.GlyphKey: 2
```

Defined in: [sandkit/enums/index.d.ts:415](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L415)

***

#### Stratacore :id=sandkit.enums.PickupType.stratacore

```ts
sandkit.enums.PickupType.Stratacore: 3
```

Defined in: [sandkit/enums/index.d.ts:416](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L416)

***

#### Orb :id=sandkit.enums.PickupType.orb

```ts
sandkit.enums.PickupType.Orb: 4
```

Defined in: [sandkit/enums/index.d.ts:417](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L417)

---

## sandkit.enums.ProjectileType

Defined in: [sandkit/enums/index.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L233)

Projectile kinds spawned by weapons and tools.

### Enumeration Members <!-- {docsify-ignore} -->

#### Bullet :id=sandkit.enums.ProjectileType.bullet

```ts
sandkit.enums.ProjectileType.Bullet: 1
```

Defined in: [sandkit/enums/index.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L234)

***

#### Rocket :id=sandkit.enums.ProjectileType.rocket

```ts
sandkit.enums.ProjectileType.Rocket: 2
```

Defined in: [sandkit/enums/index.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L235)

***

#### GrapplingHook :id=sandkit.enums.ProjectileType.grapplinghook

```ts
sandkit.enums.ProjectileType.GrapplingHook: 3
```

Defined in: [sandkit/enums/index.d.ts:236](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L236)

***

#### Fire :id=sandkit.enums.ProjectileType.fire

```ts
sandkit.enums.ProjectileType.Fire: 4
```

Defined in: [sandkit/enums/index.d.ts:237](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L237)

***

#### Digger :id=sandkit.enums.ProjectileType.digger

```ts
sandkit.enums.ProjectileType.Digger: 5
```

Defined in: [sandkit/enums/index.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L238)

***

#### Mod :id=sandkit.enums.ProjectileType.mod

```ts
sandkit.enums.ProjectileType.Mod: 6
```

Defined in: [sandkit/enums/index.d.ts:239](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L239)

---

## sandkit.enums.ReloadType

Defined in: [sandkit/enums/index.d.ts:243](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L243)

Weapon reload behaviour.

### Enumeration Members <!-- {docsify-ignore} -->

#### Clip :id=sandkit.enums.ReloadType.clip

```ts
sandkit.enums.ReloadType.Clip: 1
```

Defined in: [sandkit/enums/index.d.ts:244](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L244)

***

#### Single :id=sandkit.enums.ReloadType.single

```ts
sandkit.enums.ReloadType.Single: 2
```

Defined in: [sandkit/enums/index.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L245)

***

#### OverTime :id=sandkit.enums.ReloadType.overtime

```ts
sandkit.enums.ReloadType.OverTime: 3
```

Defined in: [sandkit/enums/index.d.ts:246](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L246)

---

## sandkit.enums.Scene

Defined in: [sandkit/enums/index.d.ts:250](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L250)

Top-level game scene (menu, intro, deploy, in-game).

### Enumeration Members <!-- {docsify-ignore} -->

#### MainMenu :id=sandkit.enums.Scene.mainmenu

```ts
sandkit.enums.Scene.MainMenu: 1
```

Defined in: [sandkit/enums/index.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L251)

***

#### Intro :id=sandkit.enums.Scene.intro

```ts
sandkit.enums.Scene.Intro: 2
```

Defined in: [sandkit/enums/index.d.ts:252](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L252)

***

#### Deploy :id=sandkit.enums.Scene.deploy

```ts
sandkit.enums.Scene.Deploy: 3
```

Defined in: [sandkit/enums/index.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L253)

***

#### Game :id=sandkit.enums.Scene.game

```ts
sandkit.enums.Scene.Game: 4
```

Defined in: [sandkit/enums/index.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L254)

---

## sandkit.enums.StructureType

Defined in: [sandkit/enums/index.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L258)

Built-in structure type ids.

### Enumeration Members <!-- {docsify-ignore} -->

#### ConveyorLeft :id=sandkit.enums.StructureType.conveyorleft

```ts
sandkit.enums.StructureType.ConveyorLeft: 1
```

Defined in: [sandkit/enums/index.d.ts:259](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L259)

***

#### ConveyorRight :id=sandkit.enums.StructureType.conveyorright

```ts
sandkit.enums.StructureType.ConveyorRight: 2
```

Defined in: [sandkit/enums/index.d.ts:260](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L260)

***

#### ShakerLeft :id=sandkit.enums.StructureType.shakerleft

```ts
sandkit.enums.StructureType.ShakerLeft: 3
```

Defined in: [sandkit/enums/index.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L261)

***

#### ShakerRight :id=sandkit.enums.StructureType.shakerright

```ts
sandkit.enums.StructureType.ShakerRight: 4
```

Defined in: [sandkit/enums/index.d.ts:262](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L262)

***

#### LauncherUp :id=sandkit.enums.StructureType.launcherup

```ts
sandkit.enums.StructureType.LauncherUp: 5
```

Defined in: [sandkit/enums/index.d.ts:263](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L263)

***

#### LauncherLeft :id=sandkit.enums.StructureType.launcherleft

```ts
sandkit.enums.StructureType.LauncherLeft: 6
```

Defined in: [sandkit/enums/index.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L264)

***

#### LauncherRight :id=sandkit.enums.StructureType.launcherright

```ts
sandkit.enums.StructureType.LauncherRight: 7
```

Defined in: [sandkit/enums/index.d.ts:265](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L265)

***

#### SplitterLeft :id=sandkit.enums.StructureType.splitterleft

```ts
sandkit.enums.StructureType.SplitterLeft: 8
```

Defined in: [sandkit/enums/index.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L266)

***

#### SplitterRight :id=sandkit.enums.StructureType.splitterright

```ts
sandkit.enums.StructureType.SplitterRight: 9
```

Defined in: [sandkit/enums/index.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L267)

***

#### Dropper :id=sandkit.enums.StructureType.dropper

```ts
sandkit.enums.StructureType.Dropper: 10
```

Defined in: [sandkit/enums/index.d.ts:268](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L268)

***

#### Foundation :id=sandkit.enums.StructureType.foundation

```ts
sandkit.enums.StructureType.Foundation: 11
```

Defined in: [sandkit/enums/index.d.ts:269](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L269)

***

#### FoundationAngledLeft :id=sandkit.enums.StructureType.foundationangledleft

```ts
sandkit.enums.StructureType.FoundationAngledLeft: 12
```

Defined in: [sandkit/enums/index.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L270)

***

#### FoundationTriangleLeftDel :id=sandkit.enums.StructureType.foundationtriangleleftdel

```ts
sandkit.enums.StructureType.FoundationTriangleLeftDel: 13
```

Defined in: [sandkit/enums/index.d.ts:271](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L271)

***

#### FoundationAngledRight :id=sandkit.enums.StructureType.foundationangledright

```ts
sandkit.enums.StructureType.FoundationAngledRight: 14
```

Defined in: [sandkit/enums/index.d.ts:272](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L272)

***

#### FoundationTriangleRightDel :id=sandkit.enums.StructureType.foundationtrianglerightdel

```ts
sandkit.enums.StructureType.FoundationTriangleRightDel: 15
```

Defined in: [sandkit/enums/index.d.ts:273](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L273)

***

#### Collector :id=sandkit.enums.StructureType.collector

```ts
sandkit.enums.StructureType.Collector: 16
```

Defined in: [sandkit/enums/index.d.ts:274](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L274)

***

#### FilterLeft :id=sandkit.enums.StructureType.filterleft

```ts
sandkit.enums.StructureType.FilterLeft: 17
```

Defined in: [sandkit/enums/index.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L275)

***

#### FilterRight :id=sandkit.enums.StructureType.filterright

```ts
sandkit.enums.StructureType.FilterRight: 18
```

Defined in: [sandkit/enums/index.d.ts:276](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L276)

***

#### SlidingFoundation :id=sandkit.enums.StructureType.slidingfoundation

```ts
sandkit.enums.StructureType.SlidingFoundation: 19
```

Defined in: [sandkit/enums/index.d.ts:277](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L277)

***

#### VelocitySoaker :id=sandkit.enums.StructureType.velocitysoaker

```ts
sandkit.enums.StructureType.VelocitySoaker: 20
```

Defined in: [sandkit/enums/index.d.ts:278](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L278)

***

#### Grower :id=sandkit.enums.StructureType.grower

```ts
sandkit.enums.StructureType.Grower: 21
```

Defined in: [sandkit/enums/index.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L279)

***

#### SoundBox :id=sandkit.enums.StructureType.soundbox

```ts
sandkit.enums.StructureType.SoundBox: 22
```

Defined in: [sandkit/enums/index.d.ts:280](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L280)

***

#### Pipe :id=sandkit.enums.StructureType.pipe

```ts
sandkit.enums.StructureType.Pipe: 23
```

Defined in: [sandkit/enums/index.d.ts:281](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L281)

***

#### Pump :id=sandkit.enums.StructureType.pump

```ts
sandkit.enums.StructureType.Pump: 24
```

Defined in: [sandkit/enums/index.d.ts:282](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L282)

***

#### LiquidVent :id=sandkit.enums.StructureType.liquidvent

```ts
sandkit.enums.StructureType.LiquidVent: 25
```

Defined in: [sandkit/enums/index.d.ts:283](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L283)

***

#### Light :id=sandkit.enums.StructureType.light

```ts
sandkit.enums.StructureType.Light: 26
```

Defined in: [sandkit/enums/index.d.ts:284](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L284)

***

#### FluxEmanator :id=sandkit.enums.StructureType.fluxemanator

```ts
sandkit.enums.StructureType.FluxEmanator: 27
```

Defined in: [sandkit/enums/index.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L285)

---

## sandkit.enums.Tech

Defined in: [sandkit/enums/index.d.ts:289](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L289)

Tech tree node ids (mixed numeric and string keys).

### Enumeration Members <!-- {docsify-ignore} -->

#### Shaker :id=sandkit.enums.Tech.shaker

```ts
sandkit.enums.Tech.Shaker: 1
```

Defined in: [sandkit/enums/index.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L290)

***

#### Conveyors :id=sandkit.enums.Tech.conveyors

```ts
sandkit.enums.Tech.Conveyors: 2
```

Defined in: [sandkit/enums/index.d.ts:291](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L291)

***

#### Guns1 :id=sandkit.enums.Tech.guns1

```ts
sandkit.enums.Tech.Guns1: 3
```

Defined in: [sandkit/enums/index.d.ts:292](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L292)

***

#### Filters1 :id=sandkit.enums.Tech.filters1

```ts
sandkit.enums.Tech.Filters1: 4
```

Defined in: [sandkit/enums/index.d.ts:293](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L293)

***

#### Flamethrower :id=sandkit.enums.Tech.flamethrower

```ts
sandkit.enums.Tech.Flamethrower: 5
```

Defined in: [sandkit/enums/index.d.ts:294](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L294)

***

#### Gun :id=sandkit.enums.Tech.gun

```ts
sandkit.enums.Tech.Gun: 6
```

Defined in: [sandkit/enums/index.d.ts:295](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L295)

***

#### KineticPress :id=sandkit.enums.Tech.kineticpress

```ts
sandkit.enums.Tech.KineticPress: 7
```

Defined in: [sandkit/enums/index.d.ts:296](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L296)

***

#### Guns2 :id=sandkit.enums.Tech.guns2

```ts
sandkit.enums.Tech.Guns2: 8
```

Defined in: [sandkit/enums/index.d.ts:297](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L297)

***

#### Drones1 :id=sandkit.enums.Tech.drones1

```ts
sandkit.enums.Tech.Drones1: 9
```

Defined in: [sandkit/enums/index.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L298)

***

#### Upgrading2 :id=sandkit.enums.Tech.upgrading2

```ts
sandkit.enums.Tech.Upgrading2: 10
```

Defined in: [sandkit/enums/index.d.ts:299](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L299)

***

#### Filters2 :id=sandkit.enums.Tech.filters2

```ts
sandkit.enums.Tech.Filters2: 11
```

Defined in: [sandkit/enums/index.d.ts:300](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L300)

***

#### Upgrading3 :id=sandkit.enums.Tech.upgrading3

```ts
sandkit.enums.Tech.Upgrading3: 12
```

Defined in: [sandkit/enums/index.d.ts:301](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L301)

***

#### Upgrading4 :id=sandkit.enums.Tech.upgrading4

```ts
sandkit.enums.Tech.Upgrading4: 13
```

Defined in: [sandkit/enums/index.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L302)

***

#### Upgrading5 :id=sandkit.enums.Tech.upgrading5

```ts
sandkit.enums.Tech.Upgrading5: 14
```

Defined in: [sandkit/enums/index.d.ts:303](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L303)

***

#### Upgrading6 :id=sandkit.enums.Tech.upgrading6

```ts
sandkit.enums.Tech.Upgrading6: 15
```

Defined in: [sandkit/enums/index.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L304)

***

#### Upgrading7 :id=sandkit.enums.Tech.upgrading7

```ts
sandkit.enums.Tech.Upgrading7: 16
```

Defined in: [sandkit/enums/index.d.ts:305](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L305)

***

#### Upgrading8 :id=sandkit.enums.Tech.upgrading8

```ts
sandkit.enums.Tech.Upgrading8: 17
```

Defined in: [sandkit/enums/index.d.ts:306](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L306)

***

#### Upgrading9 :id=sandkit.enums.Tech.upgrading9

```ts
sandkit.enums.Tech.Upgrading9: 18
```

Defined in: [sandkit/enums/index.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L307)

***

#### Upgrading10 :id=sandkit.enums.Tech.upgrading10

```ts
sandkit.enums.Tech.Upgrading10: 19
```

Defined in: [sandkit/enums/index.d.ts:308](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L308)

***

#### PlanterBox :id=sandkit.enums.Tech.planterbox

```ts
sandkit.enums.Tech.PlanterBox: 20
```

Defined in: [sandkit/enums/index.d.ts:309](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L309)

***

#### Thermo :id=sandkit.enums.Tech.thermo

```ts
sandkit.enums.Tech.Thermo: 21
```

Defined in: [sandkit/enums/index.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L310)

***

#### Rocket :id=sandkit.enums.Tech.rocket

```ts
sandkit.enums.Tech.Rocket: 22
```

Defined in: [sandkit/enums/index.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L311)

***

#### Pipes :id=sandkit.enums.Tech.pipes

```ts
sandkit.enums.Tech.Pipes: 23
```

Defined in: [sandkit/enums/index.d.ts:312](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L312)

***

#### StaticLights :id=sandkit.enums.Tech.staticlights

```ts
sandkit.enums.Tech.StaticLights: 24
```

Defined in: [sandkit/enums/index.d.ts:313](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L313)

***

#### Drones2 :id=sandkit.enums.Tech.drones2

```ts
sandkit.enums.Tech.Drones2: 25
```

Defined in: [sandkit/enums/index.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L314)

***

#### Smelter :id=sandkit.enums.Tech.smelter

```ts
sandkit.enums.Tech.Smelter: 26
```

Defined in: [sandkit/enums/index.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L315)

***

#### Tools4 :id=sandkit.enums.Tech.tools4

```ts
sandkit.enums.Tech.Tools4: 27
```

Defined in: [sandkit/enums/index.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L316)

***

#### Guns3 :id=sandkit.enums.Tech.guns3

```ts
sandkit.enums.Tech.Guns3: 28
```

Defined in: [sandkit/enums/index.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L317)

***

#### Pipes2 :id=sandkit.enums.Tech.pipes2

```ts
sandkit.enums.Tech.Pipes2: 29
```

Defined in: [sandkit/enums/index.d.ts:318](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L318)

***

#### ConveyorsMk2 :id=sandkit.enums.Tech.conveyorsmk2

```ts
sandkit.enums.Tech.ConveyorsMk2: 30
```

Defined in: [sandkit/enums/index.d.ts:319](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L319)

***

#### Lights2 :id=sandkit.enums.Tech.lights2

```ts
sandkit.enums.Tech.Lights2: 31
```

Defined in: [sandkit/enums/index.d.ts:320](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L320)

***

#### Refining6 :id=sandkit.enums.Tech.refining6

```ts
sandkit.enums.Tech.Refining6: 32
```

Defined in: [sandkit/enums/index.d.ts:321](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L321)

***

#### Refining7 :id=sandkit.enums.Tech.refining7

```ts
sandkit.enums.Tech.Refining7: 33
```

Defined in: [sandkit/enums/index.d.ts:322](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L322)

***

#### Guns4 :id=sandkit.enums.Tech.guns4

```ts
sandkit.enums.Tech.Guns4: 34
```

Defined in: [sandkit/enums/index.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L323)

***

#### Guns5 :id=sandkit.enums.Tech.guns5

```ts
sandkit.enums.Tech.Guns5: 35
```

Defined in: [sandkit/enums/index.d.ts:324](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L324)

***

#### Tools5 :id=sandkit.enums.Tech.tools5

```ts
sandkit.enums.Tech.Tools5: 36
```

Defined in: [sandkit/enums/index.d.ts:325](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L325)

***

#### Tools6 :id=sandkit.enums.Tech.tools6

```ts
sandkit.enums.Tech.Tools6: 37
```

Defined in: [sandkit/enums/index.d.ts:326](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L326)

***

#### Filters3 :id=sandkit.enums.Tech.filters3

```ts
sandkit.enums.Tech.Filters3: 38
```

Defined in: [sandkit/enums/index.d.ts:327](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L327)

***

#### Filters4 :id=sandkit.enums.Tech.filters4

```ts
sandkit.enums.Tech.Filters4: 39
```

Defined in: [sandkit/enums/index.d.ts:328](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L328)

***

#### Pipes3 :id=sandkit.enums.Tech.pipes3

```ts
sandkit.enums.Tech.Pipes3: 40
```

Defined in: [sandkit/enums/index.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L329)

***

#### Pipes4 :id=sandkit.enums.Tech.pipes4

```ts
sandkit.enums.Tech.Pipes4: 41
```

Defined in: [sandkit/enums/index.d.ts:330](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L330)

***

#### Logistics3 :id=sandkit.enums.Tech.logistics3

```ts
sandkit.enums.Tech.Logistics3: 42
```

Defined in: [sandkit/enums/index.d.ts:331](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L331)

***

#### Logistics4 :id=sandkit.enums.Tech.logistics4

```ts
sandkit.enums.Tech.Logistics4: 43
```

Defined in: [sandkit/enums/index.d.ts:332](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L332)

***

#### Lights3 :id=sandkit.enums.Tech.lights3

```ts
sandkit.enums.Tech.Lights3: 44
```

Defined in: [sandkit/enums/index.d.ts:333](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L333)

***

#### Lights4 :id=sandkit.enums.Tech.lights4

```ts
sandkit.enums.Tech.Lights4: 45
```

Defined in: [sandkit/enums/index.d.ts:334](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L334)

***

#### Drones3 :id=sandkit.enums.Tech.drones3

```ts
sandkit.enums.Tech.Drones3: 46
```

Defined in: [sandkit/enums/index.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L335)

***

#### Drones4 :id=sandkit.enums.Tech.drones4

```ts
sandkit.enums.Tech.Drones4: 47
```

Defined in: [sandkit/enums/index.d.ts:336](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L336)

***

#### Alien :id=sandkit.enums.Tech.alien

```ts
sandkit.enums.Tech.Alien: 48
```

Defined in: [sandkit/enums/index.d.ts:337](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L337)

***

#### Electricity :id=sandkit.enums.Tech.electricity

```ts
sandkit.enums.Tech.Electricity: 49
```

Defined in: [sandkit/enums/index.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L338)

***

#### AlienCore :id=sandkit.enums.Tech.aliencore

```ts
sandkit.enums.Tech.AlienCore: 50
```

Defined in: [sandkit/enums/index.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L339)

***

#### Emanators1 :id=sandkit.enums.Tech.emanators1

```ts
sandkit.enums.Tech.Emanators1: 51
```

Defined in: [sandkit/enums/index.d.ts:340](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L340)

***

#### AlienPlasmaConduits :id=sandkit.enums.Tech.alienplasmaconduits

```ts
sandkit.enums.Tech.AlienPlasmaConduits: 52
```

Defined in: [sandkit/enums/index.d.ts:341](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L341)

***

#### AlienQuantumMatrix :id=sandkit.enums.Tech.alienquantummatrix

```ts
sandkit.enums.Tech.AlienQuantumMatrix: 53
```

Defined in: [sandkit/enums/index.d.ts:342](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L342)

***

#### AlienPlasmaCore :id=sandkit.enums.Tech.alienplasmacore

```ts
sandkit.enums.Tech.AlienPlasmaCore: 54
```

Defined in: [sandkit/enums/index.d.ts:343](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L343)

***

#### AlienVoidEngine :id=sandkit.enums.Tech.alienvoidengine

```ts
sandkit.enums.Tech.AlienVoidEngine: 55
```

Defined in: [sandkit/enums/index.d.ts:344](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L344)

***

#### FlareGun :id=sandkit.enums.Tech.flaregun

```ts
sandkit.enums.Tech.FlareGun: 56
```

Defined in: [sandkit/enums/index.d.ts:345](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L345)

***

#### Sweeper :id=sandkit.enums.Tech.sweeper

```ts
sandkit.enums.Tech.Sweeper: 57
```

Defined in: [sandkit/enums/index.d.ts:346](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L346)

***

#### Utilities3 :id=sandkit.enums.Tech.utilities3

```ts
sandkit.enums.Tech.Utilities3: 58
```

Defined in: [sandkit/enums/index.d.ts:347](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L347)

***

#### Cryoblaster :id=sandkit.enums.Tech.cryoblaster

```ts
sandkit.enums.Tech.Cryoblaster: 59
```

Defined in: [sandkit/enums/index.d.ts:348](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L348)

***

#### Vacuum :id=sandkit.enums.Tech.vacuum

```ts
sandkit.enums.Tech.Vacuum: 60
```

Defined in: [sandkit/enums/index.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L349)

***

#### Utilities6 :id=sandkit.enums.Tech.utilities6

```ts
sandkit.enums.Tech.Utilities6: 61
```

Defined in: [sandkit/enums/index.d.ts:350](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L350)

***

#### Utilities7 :id=sandkit.enums.Tech.utilities7

```ts
sandkit.enums.Tech.Utilities7: 62
```

Defined in: [sandkit/enums/index.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L351)

***

#### Filters :id=sandkit.enums.Tech.filters

```ts
sandkit.enums.Tech.Filters: 63
```

Defined in: [sandkit/enums/index.d.ts:352](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L352)

***

#### AdvancedFilters :id=sandkit.enums.Tech.advancedfilters

```ts
sandkit.enums.Tech.AdvancedFilters: 64
```

Defined in: [sandkit/enums/index.d.ts:353](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L353)

***

#### Infrastructure3 :id=sandkit.enums.Tech.infrastructure3

```ts
sandkit.enums.Tech.Infrastructure3: 65
```

Defined in: [sandkit/enums/index.d.ts:354](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L354)

***

#### Decorations1 :id=sandkit.enums.Tech.decorations1

```ts
sandkit.enums.Tech.Decorations1: 66
```

Defined in: [sandkit/enums/index.d.ts:355](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L355)

***

#### Decorations2 :id=sandkit.enums.Tech.decorations2

```ts
sandkit.enums.Tech.Decorations2: 67
```

Defined in: [sandkit/enums/index.d.ts:356](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L356)

***

#### Decorations3 :id=sandkit.enums.Tech.decorations3

```ts
sandkit.enums.Tech.Decorations3: 68
```

Defined in: [sandkit/enums/index.d.ts:357](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L357)

***

#### Blocks1 :id=sandkit.enums.Tech.blocks1

```ts
sandkit.enums.Tech.Blocks1: 69
```

Defined in: [sandkit/enums/index.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L358)

***

#### Drill :id=sandkit.enums.Tech.drill

```ts
sandkit.enums.Tech.Drill: 70
```

Defined in: [sandkit/enums/index.d.ts:359](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L359)

***

#### SteamTurbine :id=sandkit.enums.Tech.steamturbine

```ts
sandkit.enums.Tech.SteamTurbine: 71
```

Defined in: [sandkit/enums/index.d.ts:360](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L360)

***

#### Electricity3 :id=sandkit.enums.Tech.electricity3

```ts
sandkit.enums.Tech.Electricity3: 72
```

Defined in: [sandkit/enums/index.d.ts:361](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L361)

***

#### Electricity4 :id=sandkit.enums.Tech.electricity4

```ts
sandkit.enums.Tech.Electricity4: 73
```

Defined in: [sandkit/enums/index.d.ts:362](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L362)

***

#### Logic1 :id=sandkit.enums.Tech.logic1

```ts
sandkit.enums.Tech.Logic1: 74
```

Defined in: [sandkit/enums/index.d.ts:363](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L363)

***

#### Logic2 :id=sandkit.enums.Tech.logic2

```ts
sandkit.enums.Tech.Logic2: 75
```

Defined in: [sandkit/enums/index.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L364)

***

#### Logic3 :id=sandkit.enums.Tech.logic3

```ts
sandkit.enums.Tech.Logic3: 76
```

Defined in: [sandkit/enums/index.d.ts:365](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L365)

***

#### Logic4 :id=sandkit.enums.Tech.logic4

```ts
sandkit.enums.Tech.Logic4: 77
```

Defined in: [sandkit/enums/index.d.ts:366](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L366)

***

#### Various1 :id=sandkit.enums.Tech.various1

```ts
sandkit.enums.Tech.Various1: 78
```

Defined in: [sandkit/enums/index.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L367)

***

#### Various2 :id=sandkit.enums.Tech.various2

```ts
sandkit.enums.Tech.Various2: 79
```

Defined in: [sandkit/enums/index.d.ts:368](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L368)

***

#### Various3 :id=sandkit.enums.Tech.various3

```ts
sandkit.enums.Tech.Various3: 80
```

Defined in: [sandkit/enums/index.d.ts:369](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L369)

***

#### Locator :id=sandkit.enums.Tech.locator

```ts
sandkit.enums.Tech.Locator: 81
```

Defined in: [sandkit/enums/index.d.ts:370](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L370)

***

#### QuantumPortal :id=sandkit.enums.Tech.quantumportal

```ts
sandkit.enums.Tech.QuantumPortal: 82
```

Defined in: [sandkit/enums/index.d.ts:371](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L371)

***

#### VoidRift :id=sandkit.enums.Tech.voidrift

```ts
sandkit.enums.Tech.VoidRift: 83
```

Defined in: [sandkit/enums/index.d.ts:372](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L372)

***

#### Blink :id=sandkit.enums.Tech.blink

```ts
sandkit.enums.Tech.Blink: 84
```

Defined in: [sandkit/enums/index.d.ts:373](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L373)

***

#### Recall :id=sandkit.enums.Tech.recall

```ts
sandkit.enums.Tech.Recall: 85
```

Defined in: [sandkit/enums/index.d.ts:374](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L374)

***

#### ImplosionGun :id=sandkit.enums.Tech.implosiongun

```ts
sandkit.enums.Tech.ImplosionGun: 86
```

Defined in: [sandkit/enums/index.d.ts:375](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L375)

***

#### Refining8 :id=sandkit.enums.Tech.refining8

```ts
sandkit.enums.Tech.Refining8: 87
```

Defined in: [sandkit/enums/index.d.ts:376](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L376)

***

#### Tools7 :id=sandkit.enums.Tech.tools7

```ts
sandkit.enums.Tech.Tools7: 88
```

Defined in: [sandkit/enums/index.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L377)

***

#### Diggers :id=sandkit.enums.Tech.diggers

```ts
sandkit.enums.Tech.Diggers: 89
```

Defined in: [sandkit/enums/index.d.ts:378](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L378)

***

#### Haulers :id=sandkit.enums.Tech.haulers

```ts
sandkit.enums.Tech.Haulers: 90
```

Defined in: [sandkit/enums/index.d.ts:379](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L379)

***

#### Map :id=sandkit.enums.Tech.map

```ts
sandkit.enums.Tech.Map: 91
```

Defined in: [sandkit/enums/index.d.ts:380](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L380)

***

#### ColoringTool :id=sandkit.enums.Tech.coloringtool

```ts
sandkit.enums.Tech.ColoringTool: 92
```

Defined in: [sandkit/enums/index.d.ts:381](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L381)

***

#### SignalGate :id=sandkit.enums.Tech.signalgate

```ts
sandkit.enums.Tech.SignalGate: 93
```

Defined in: [sandkit/enums/index.d.ts:382](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L382)

***

#### GrapplingHook :id=sandkit.enums.Tech.grapplinghook

```ts
sandkit.enums.Tech.GrapplingHook: 94
```

Defined in: [sandkit/enums/index.d.ts:383](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L383)

***

#### GlassFoundation :id=sandkit.enums.Tech.glassfoundation

```ts
sandkit.enums.Tech.GlassFoundation: 95
```

Defined in: [sandkit/enums/index.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L384)

***

#### PrecisionTools :id=sandkit.enums.Tech.precisiontools

```ts
sandkit.enums.Tech.PrecisionTools: 96
```

Defined in: [sandkit/enums/index.d.ts:385](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L385)

***

#### SignalDevices :id=sandkit.enums.Tech.signaldevices

```ts
sandkit.enums.Tech.SignalDevices: 97
```

Defined in: [sandkit/enums/index.d.ts:386](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L386)

***

#### SignalControls :id=sandkit.enums.Tech.signalcontrols

```ts
sandkit.enums.Tech.SignalControls: 98
```

Defined in: [sandkit/enums/index.d.ts:387](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L387)

***

#### LogicGates :id=sandkit.enums.Tech.logicgates

```ts
sandkit.enums.Tech.LogicGates: 99
```

Defined in: [sandkit/enums/index.d.ts:388](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L388)

***

#### RetroConsole :id=sandkit.enums.Tech.retroconsole

```ts
sandkit.enums.Tech.RetroConsole: 100
```

Defined in: [sandkit/enums/index.d.ts:389](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L389)

***

#### WallTool :id=sandkit.enums.Tech.walltool

```ts
sandkit.enums.Tech.WallTool: 101
```

Defined in: [sandkit/enums/index.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L390)

***

#### Corraller :id=sandkit.enums.Tech.corraller

```ts
sandkit.enums.Tech.Corraller: 102
```

Defined in: [sandkit/enums/index.d.ts:391](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L391)

***

#### PlainFoundation :id=sandkit.enums.Tech.plainfoundation

```ts
sandkit.enums.Tech.PlainFoundation: 103
```

Defined in: [sandkit/enums/index.d.ts:392](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L392)

***

#### ClearingFrame :id=sandkit.enums.Tech.clearingframe

```ts
sandkit.enums.Tech.ClearingFrame: 104
```

Defined in: [sandkit/enums/index.d.ts:393](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L393)

***

#### Heatmap :id=sandkit.enums.Tech.heatmap

```ts
sandkit.enums.Tech.Heatmap: 105
```

Defined in: [sandkit/enums/index.d.ts:394](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L394)

***

#### MiningLaser :id=sandkit.enums.Tech.mininglaser

```ts
sandkit.enums.Tech.MiningLaser: 106
```

Defined in: [sandkit/enums/index.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L395)

***

#### GoldBattery :id=sandkit.enums.Tech.goldbattery

```ts
sandkit.enums.Tech.GoldBattery: 107
```

Defined in: [sandkit/enums/index.d.ts:396](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L396)

***

#### Hover :id=sandkit.enums.Tech.hover

```ts
sandkit.enums.Tech.Hover: 108
```

Defined in: [sandkit/enums/index.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L397)

***

#### SprintBoost :id=sandkit.enums.Tech.sprintboost

```ts
sandkit.enums.Tech.SprintBoost: 109
```

Defined in: [sandkit/enums/index.d.ts:398](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L398)

***

#### CritterFence :id=sandkit.enums.Tech.critterfence

```ts
sandkit.enums.Tech.CritterFence: 110
```

Defined in: [sandkit/enums/index.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L399)

***

#### FluxEmanator :id=sandkit.enums.Tech.fluxemanator

```ts
sandkit.enums.Tech.FluxEmanator: "fluxEmanator"
```

Defined in: [sandkit/enums/index.d.ts:400](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L400)

---

## sandkit.enums.TechStatus

Defined in: [sandkit/enums/index.d.ts:404](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L404)

Visibility and research state of a tech node.

### Enumeration Members <!-- {docsify-ignore} -->

#### Available :id=sandkit.enums.TechStatus.available

```ts
sandkit.enums.TechStatus.Available: 0
```

Defined in: [sandkit/enums/index.d.ts:405](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L405)

***

#### Visible :id=sandkit.enums.TechStatus.visible

```ts
sandkit.enums.TechStatus.Visible: 1
```

Defined in: [sandkit/enums/index.d.ts:406](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L406)

***

#### Researched :id=sandkit.enums.TechStatus.researched

```ts
sandkit.enums.TechStatus.Researched: 2
```

Defined in: [sandkit/enums/index.d.ts:407](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L407)

***

#### Unknown :id=sandkit.enums.TechStatus.unknown

```ts
sandkit.enums.TechStatus.Unknown: 3
```

Defined in: [sandkit/enums/index.d.ts:408](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L408)

***

#### Hidden :id=sandkit.enums.TechStatus.hidden

```ts
sandkit.enums.TechStatus.Hidden: 4
```

Defined in: [sandkit/enums/index.d.ts:409](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L409)

---

## sandkit.enums.WorldItemType

Defined in: [sandkit/enums/index.d.ts:423](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L423)

### Deprecated

Use [PickupType](api/sandkit.enums.PickupType.md) instead.

### Enumeration Members <!-- {docsify-ignore} -->

#### ~~Artifact~~ :id=sandkit.enums.WorldItemType.artifact

```ts
sandkit.enums.WorldItemType.Artifact: 1
```

Defined in: [sandkit/enums/index.d.ts:424](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L424)

***

#### ~~GlyphKey~~ :id=sandkit.enums.WorldItemType.glyphkey

```ts
sandkit.enums.WorldItemType.GlyphKey: 2
```

Defined in: [sandkit/enums/index.d.ts:425](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L425)

***

#### ~~Stratacore~~ :id=sandkit.enums.WorldItemType.stratacore

```ts
sandkit.enums.WorldItemType.Stratacore: 3
```

Defined in: [sandkit/enums/index.d.ts:426](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L426)

***

#### ~~Orb~~ :id=sandkit.enums.WorldItemType.orb

```ts
sandkit.enums.WorldItemType.Orb: 4
```

Defined in: [sandkit/enums/index.d.ts:427](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L427)

---

## sandkit.react

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.react :id=sandkit.react.sandkitreact

```ts
SandkitReact = object
```

Defined in: [sandkit/react.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L8)

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

Defined in: [sandkit/react.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L36)

Fragment symbol (host copy).

###### Component?

```ts
optional Component?: unknown
```

Defined in: [sandkit/react.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L38)

Base class component (host copy).

###### PureComponent?

```ts
optional PureComponent?: unknown
```

Defined in: [sandkit/react.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L40)

Pure class component (host copy).

###### StrictMode?

```ts
optional StrictMode?: unknown
```

Defined in: [sandkit/react.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L42)

Strict mode wrapper (host copy).

###### Suspense?

```ts
optional Suspense?: unknown
```

Defined in: [sandkit/react.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L44)

Suspense boundary (host copy).

###### version?

```ts
optional version?: string
```

Defined in: [sandkit/react.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L46)

React version string from the host bundle.

##### Methods

###### createElement()?

```ts
optional createElement(...args: unknown[]): unknown
```

Defined in: [sandkit/react.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L10)

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

Defined in: [sandkit/react.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L12)

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

Defined in: [sandkit/react.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L14)

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

Defined in: [sandkit/react.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L16)

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

Defined in: [sandkit/react.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L18)

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

Defined in: [sandkit/react.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L20)

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

Defined in: [sandkit/react.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L22)

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

Defined in: [sandkit/react.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L24)

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

Defined in: [sandkit/react.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L26)

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

Defined in: [sandkit/react.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L28)

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

Defined in: [sandkit/react.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L30)

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

Defined in: [sandkit/react.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L32)

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

Defined in: [sandkit/react.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/react.d.ts#L34)

Context hook (host copy).

###### Parameters

###### args

...`unknown`[]

###### Returns

`unknown`

---

## configs

Sandkit mod file schemas: `modinfo.json`, `patches.json`, and `workshop.json`.

These are not runtime `sandkit` properties. Import from
`@sandustry-modding/types/configs` when typing mod folder config files.

JSON Schema (GitHub Pages):
https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json
https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json

### See

 - [Official docs](https://sandustry.com/sandkit.html#mod-files-heading)
 - [JSON Schema docs](https://sandustry-modding.github.io/SandustryTypes/#/schemas)

### Interfaces <!-- {docsify-ignore} -->

#### ConfigSchemaNumber :id=configs.configschemanumber

<p class="smt-member-path"><code>configs.ConfigSchemaNumber</code></p>
Defined in: [configs/modinfo.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L135)

Number setting in `modinfo.json` `configSchema`.

##### Properties

###### type

```ts
type: "number"
```

Defined in: [configs/modinfo.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L141)

Discriminator. Must be `"number"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### default

```ts
default: number
```

Defined in: [configs/modinfo.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L147)

Value used when the player has not changed the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### min?

```ts
optional min?: number
```

Defined in: [configs/modinfo.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L153)

Inclusive lower bound for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### max?

```ts
optional max?: number
```

Defined in: [configs/modinfo.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L159)

Inclusive upper bound for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### step?

```ts
optional step?: number
```

Defined in: [configs/modinfo.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L165)

UI step size for the number control.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L171)

Plain-text label shown in the settings UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L177)

i18n key for the settings label (preferred over [label](#label) when both exist).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L183)

Plain-text help text for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L189)

i18n key for the setting help text.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ConfigSchemaBoolean :id=configs.configschemaboolean

<p class="smt-member-path"><code>configs.ConfigSchemaBoolean</code></p>
Defined in: [configs/modinfo.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L193)

Boolean setting in `modinfo.json` `configSchema`.

##### Properties

###### type

```ts
type: "boolean"
```

Defined in: [configs/modinfo.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L199)

Discriminator. Must be `"boolean"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### default

```ts
default: boolean
```

Defined in: [configs/modinfo.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L205)

Value used when the player has not changed the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:211](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L211)

Plain-text label shown in the settings UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L217)

i18n key for the settings label.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L223)

Plain-text help text for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L229)

i18n key for the setting help text.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ConfigSchemaChoiceOption :id=configs.configschemachoiceoption

<p class="smt-member-path"><code>configs.ConfigSchemaChoiceOption</code></p>
Defined in: [configs/modinfo.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L233)

One option inside a [ConfigSchemaChoice](#configschemachoice).

##### Properties

###### value

```ts
value: string
```

Defined in: [configs/modinfo.d.ts:239](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L239)

Stored value written when the player picks this option.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L245)

Plain-text label for the option.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L251)

i18n key for the option label.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ConfigSchemaChoice :id=configs.configschemachoice

<p class="smt-member-path"><code>configs.ConfigSchemaChoice</code></p>
Defined in: [configs/modinfo.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L255)

Choice setting in `modinfo.json` `configSchema`.

##### Properties

###### type

```ts
type: "choice"
```

Defined in: [configs/modinfo.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L261)

Discriminator. Must be `"choice"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### default

```ts
default: string
```

Defined in: [configs/modinfo.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L267)

Default option [ConfigSchemaChoiceOption.value](#value).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:273](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L273)

Plain-text label shown in the settings UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L279)

i18n key for the settings label.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L285)

Plain-text help text for the setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:291](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L291)

i18n key for the setting help text.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### options

```ts
options: readonly ConfigSchemaChoiceOption[]
```

Defined in: [configs/modinfo.d.ts:297](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L297)

Allowed choices for this setting.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### TextureOverride :id=configs.textureoverride

<p class="smt-member-path"><code>configs.TextureOverride</code></p>
Defined in: [configs/modinfo.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L314)

Animated (or static) texture replacement for a vanilla asset id.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### path

```ts
path: string
```

Defined in: [configs/modinfo.d.ts:320](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L320)

Path to the replacement image, relative to the mod root.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### frameWidth?

```ts
optional frameWidth?: number
```

Defined in: [configs/modinfo.d.ts:326](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L326)

Width in pixels of one animation frame.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### frames?

```ts
optional frames?: number
```

Defined in: [configs/modinfo.d.ts:332](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L332)

Number of frames in the spritesheet.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### intervalMs?

```ts
optional intervalMs?: number
```

Defined in: [configs/modinfo.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L338)

Milliseconds between animation frames.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModProvide :id=configs.modprovide

<p class="smt-member-path"><code>configs.ModProvide</code></p>
Defined in: [configs/modinfo.d.ts:346](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L346)

Optional content pack exposed by this mod for other mods or the game to consume.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### kind

```ts
kind: string
```

Defined in: [configs/modinfo.d.ts:352](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L352)

Kind of provided content (for example `"structureTextures"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L358)

Id of this provide entry within its kind.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### textureOverrides?

```ts
optional textureOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L364)

Texture paths keyed by the vanilla or structure texture id they replace.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapBlueprints :id=configs.modmapblueprints

<p class="smt-member-path"><code>configs.ModMapBlueprints</code></p>
Defined in: [configs/modinfo.d.ts:374](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L374)

Blueprint image paths for a custom map pack.

Paths are relative to the mod root.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### terrain?

```ts
optional terrain?: string
```

Defined in: [configs/modinfo.d.ts:380](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L380)

Terrain color map image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### lights?

```ts
optional lights?: string
```

Defined in: [configs/modinfo.d.ts:386](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L386)

Lights layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### sensors?

```ts
optional sensors?: string
```

Defined in: [configs/modinfo.d.ts:392](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L392)

Sensors layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### authorization?

```ts
optional authorization?: string
```

Defined in: [configs/modinfo.d.ts:398](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L398)

Authorization zones image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### wall?

```ts
optional wall?: string
```

Defined in: [configs/modinfo.d.ts:404](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L404)

Wall layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### lightsMeta?

```ts
optional lightsMeta?: string
```

Defined in: [configs/modinfo.d.ts:410](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L410)

Lights metadata image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### decor?

```ts
optional decor?: string
```

Defined in: [configs/modinfo.d.ts:416](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L416)

Decor layout image.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### config?

```ts
optional config?: string
```

Defined in: [configs/modinfo.d.ts:422](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L422)

Map config JSON path.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapPoint :id=configs.modmappoint

<p class="smt-member-path"><code>configs.ModMapPoint</code></p>
Defined in: [configs/modinfo.d.ts:430](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L430)

World-pixel spawn or unstuck point.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### x

```ts
x: number
```

Defined in: [configs/modinfo.d.ts:436](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L436)

World X in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### y

```ts
y: number
```

Defined in: [configs/modinfo.d.ts:442](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L442)

World Y in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapTopBounds :id=configs.modmaptopbounds

<p class="smt-member-path"><code>configs.ModMapTopBounds</code></p>
Defined in: [configs/modinfo.d.ts:450](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L450)

Vertical camera / travel bounds for the custom map.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### hard?

```ts
optional hard?: number
```

Defined in: [configs/modinfo.d.ts:456](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L456)

Hard top bound in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### soft?

```ts
optional soft?: number
```

Defined in: [configs/modinfo.d.ts:462](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L462)

Soft top bound in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapDepthLight :id=configs.modmapdepthlight

<p class="smt-member-path"><code>configs.ModMapDepthLight</code></p>
Defined in: [configs/modinfo.d.ts:470](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L470)

Depth-based light sizing for the custom map.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### startY?

```ts
optional startY?: number
```

Defined in: [configs/modinfo.d.ts:476](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L476)

World Y where depth light scaling starts.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### endY?

```ts
optional endY?: number
```

Defined in: [configs/modinfo.d.ts:482](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L482)

World Y where depth light scaling ends.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### maxSize?

```ts
optional maxSize?: number
```

Defined in: [configs/modinfo.d.ts:488](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L488)

Maximum light size at the shallow end of the range.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### minSize?

```ts
optional minSize?: number
```

Defined in: [configs/modinfo.d.ts:494](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L494)

Minimum light size at the deep end of the range.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapParallax :id=configs.modmapparallax

<p class="smt-member-path"><code>configs.ModMapParallax</code></p>
Defined in: [configs/modinfo.d.ts:502](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L502)

Parallax background tuning for the custom map.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### widthScale?

```ts
optional widthScale?: number
```

Defined in: [configs/modinfo.d.ts:508](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L508)

Horizontal scale of the parallax layer.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### offsetY?

```ts
optional offsetY?: number
```

Defined in: [configs/modinfo.d.ts:514](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L514)

Vertical offset of the parallax layer in pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapColorMappingLayers :id=configs.modmapcolormappinglayers

<p class="smt-member-path"><code>configs.ModMapColorMappingLayers</code></p>
Defined in: [configs/modinfo.d.ts:522](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L522)

Color-map cell that paints both background and foreground terrain.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### background?

```ts
optional background?: string
```

Defined in: [configs/modinfo.d.ts:528](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L528)

Background terrain id for this blueprint RGB.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### foreground?

```ts
optional foreground?: string
```

Defined in: [configs/modinfo.d.ts:534](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L534)

Foreground terrain id for this blueprint RGB.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapDefinition :id=configs.modmapdefinition

<p class="smt-member-path"><code>configs.ModMapDefinition</code></p>
Defined in: [configs/modinfo.d.ts:549](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L549)

Custom map pack block in `modinfo.json`.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### blueprints

```ts
blueprints: ModMapBlueprints
```

Defined in: [configs/modinfo.d.ts:555](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L555)

Paths to blueprint images and map config under the mod root.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### width

```ts
width: number
```

Defined in: [configs/modinfo.d.ts:561](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L561)

Map width in cells.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### height

```ts
height: number
```

Defined in: [configs/modinfo.d.ts:567](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L567)

Map height in cells.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### spawn?

```ts
optional spawn?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:573](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L573)

Player spawn position in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### unstuck?

```ts
optional unstuck?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:579](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L579)

Unstuck / rescue position in world pixels.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### deployment?

```ts
optional deployment?: string
```

Defined in: [configs/modinfo.d.ts:585](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L585)

Deployment mode for the map (for example `"skip"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### topBounds?

```ts
optional topBounds?: ModMapTopBounds
```

Defined in: [configs/modinfo.d.ts:591](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L591)

Vertical travel bounds at the top of the world.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### depthLight?

```ts
optional depthLight?: ModMapDepthLight
```

Defined in: [configs/modinfo.d.ts:597](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L597)

Depth-based light size curve.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### parallax?

```ts
optional parallax?: ModMapParallax
```

Defined in: [configs/modinfo.d.ts:603](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L603)

Parallax background tuning.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### colorMappings?

```ts
optional colorMappings?: Record<string, ModMapColorMapping>
```

Defined in: [configs/modinfo.d.ts:609](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L609)

Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModGameVersion :id=configs.modgameversion

<p class="smt-member-path"><code>configs.ModGameVersion</code></p>
Defined in: [configs/modinfo.d.ts:617](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L617)

Compatible game version range for the mod.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### minimum?

```ts
optional minimum?: string
```

Defined in: [configs/modinfo.d.ts:623](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L623)

Lowest supported game version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### maximum?

```ts
optional maximum?: string
```

Defined in: [configs/modinfo.d.ts:629](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L629)

Highest supported game version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModInfo :id=configs.modinfo

<p class="smt-member-path"><code>configs.ModInfo</code></p>
Defined in: [configs/modinfo.d.ts:645](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L645)

Sandkit mod manifest (`modinfo.json`).

Required for every mod folder. Minimal script mods need
[manifestVersion](#manifestversion), [id](#id-1), [name](#name), [version](#version),
[apiVersion](#apiversion), and [entry](#entry).

At least one capability is required: [entry](#entry), [workerEntry](#workerentry),
[configOverrides](#configoverrides), [textureOverrides](#textureoverrides-1), [provides](#provides), or
[map](#map). `configSchema` alone does not count.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

##### Properties

###### $schema?

```ts
optional $schema?: string
```

Defined in: [configs/modinfo.d.ts:650](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L650)

Optional JSON Schema URL for editors (for example VS Code).
Not read by the game loader.

###### manifestVersion

```ts
manifestVersion: 1
```

Defined in: [configs/modinfo.d.ts:656](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L656)

Manifest format version. Must be `1` for Sandkit `apiVersion` 1.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:662](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L662)

Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### name

```ts
name: string
```

Defined in: [configs/modinfo.d.ts:668](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L668)

Display name shown in the mod list and Workshop UI.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### version

```ts
version: string
```

Defined in: [configs/modinfo.d.ts:674](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L674)

Semver-style mod version string.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### apiVersion

```ts
apiVersion: 1
```

Defined in: [configs/modinfo.d.ts:680](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L680)

Sandkit host API version this mod targets. Must be `1`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### entry?

```ts
optional entry?: string
```

Defined in: [configs/modinfo.d.ts:688](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L688)

Main-thread script path relative to the mod root (for example `"main.js"`).
Omit for texture-only, map-only, or config-only mods that declare another
capability instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### workerEntry?

```ts
optional workerEntry?: string
```

Defined in: [configs/modinfo.d.ts:695](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L695)

Simulation-worker script path relative to the mod root.
Required when the mod registers worker hooks or uses worker-only APIs.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### patches?

```ts
optional patches?: string
```

Defined in: [configs/modinfo.d.ts:702](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L702)

Path to the patches file relative to the mod root (usually `"patches.json"`).
When omitted, a present `patches.json` may still auto-load per official docs.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:708](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L708)

Long description shown in the mod list / Workshop.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### author?

```ts
optional author?: string
```

Defined in: [configs/modinfo.d.ts:714](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L714)

Author display name.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### gameVersion?

```ts
optional gameVersion?: ModGameVersion
```

Defined in: [configs/modinfo.d.ts:720](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L720)

Inclusive game version range this mod claims to support.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### dependencies?

```ts
optional dependencies?: string[]
```

Defined in: [configs/modinfo.d.ts:726](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L726)

Other mod ids that should load with this mod.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### loadOrder?

```ts
optional loadOrder?: number
```

Defined in: [configs/modinfo.d.ts:732](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L732)

Relative load priority. Lower values load earlier; higher values load later.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### configSchema?

```ts
optional configSchema?: Record<string, ConfigSchemaEntry>
```

Defined in: [configs/modinfo.d.ts:739](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L739)

Player-facing settings schema. Keys are setting ids; values define type and UI.
Read at runtime with `api.settings.get`.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### configOverrides?

```ts
optional configOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:745](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L745)

Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### shaderOverrides?

```ts
optional shaderOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:751](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L751)

Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### textureOverrides?

```ts
optional textureOverrides?: Record<string, string | TextureOverride>
```

Defined in: [configs/modinfo.d.ts:758](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L758)

Texture replacements keyed by vanilla texture id.
A string value is a path; an object adds spritesheet frame metadata.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### provides?

```ts
optional provides?: ModProvide[]
```

Defined in: [configs/modinfo.d.ts:764](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L764)

Optional content this mod publishes for others to consume.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

###### map?

```ts
optional map?: ModMapDefinition
```

Defined in: [configs/modinfo.d.ts:770](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L770)

Embedded custom map pack definition for this mod.

###### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### BundlePatchRegex :id=configs.bundlepatchregex

<p class="smt-member-path"><code>configs.BundlePatchRegex</code></p>
Defined in: [configs/patches.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L52)

Regex finder when the target is not a plain [BundlePatch.find](#find) string.

##### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### Properties

###### pattern

```ts
pattern: string
```

Defined in: [configs/patches.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L59)

JavaScript regex pattern source (without surrounding `/` delimiters).
Capture groups may be referenced from [BundlePatch.code](#code) as `$1`, `$2`, …

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### flags?

```ts
optional flags?: string
```

Defined in: [configs/patches.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L65)

Optional regex flags (for example `"g"` or `"m"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

***

#### BundlePatch :id=configs.bundlepatch

<p class="smt-member-path"><code>configs.BundlePatch</code></p>
Defined in: [configs/patches.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L107)

One entry in `patches.json`.

The file is an array of these objects. Prefer `expectedMatches` so a missed
or duplicated match fails loudly. When several patches must succeed together
(for example main + worker), set the same [atomicGroup](#atomicgroup) on each.

##### Example

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

##### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

##### Properties

###### file

```ts
file: PatchTargetFile
```

Defined in: [configs/patches.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L113)

Compiled bundle to modify.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### find?

```ts
optional find?: string
```

Defined in: [configs/patches.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L120)

Exact source substring to locate in the bundle.
Mutually exclusive with [regex](#regex) in typical patches.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### code?

```ts
optional code?: string
```

Defined in: [configs/patches.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L127)

Replacement or inserted source text.
Official examples use `code`; some loaders also accept [replace](#replace).

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### replace?

```ts
optional replace?: string
```

Defined in: [configs/patches.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L133)

Alias of [code](#code) used by some patch loaders and workshop mods.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### operation?

```ts
optional operation?: PatchOperation
```

Defined in: [configs/patches.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L140)

How to apply the match. Defaults to replace-style behaviour when omitted
in common workshop patches.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### expectedMatches?

```ts
optional expectedMatches?: number | "any"
```

Defined in: [configs/patches.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L148)

How many times `find` / `regex` must match.
Use a number (often `1`) so the load fails on miss or over-match.
Some loaders accept `"any"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### regex?

```ts
optional regex?: BundlePatchRegex
```

Defined in: [configs/patches.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L154)

Regex-based locator instead of a literal [find](#find) string.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### before?

```ts
optional before?: string
```

Defined in: [configs/patches.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L160)

Text inserted before the match when [operation](#operation) is `"wrap"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### after?

```ts
optional after?: string
```

Defined in: [configs/patches.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L166)

Text inserted after the match when [operation](#operation) is `"wrap"`.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### id?

```ts
optional id?: string
```

Defined in: [configs/patches.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L172)

Optional stable id for logging and tooling.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### atomicGroup?

```ts
optional atomicGroup?: string
```

Defined in: [configs/patches.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L178)

Group id shared by patches that must all succeed or all fail together.
Use the same string on paired main (`js/bundle.js`) and worker
(`js/simulation-worker.js`) patches.

###### occurrence?

```ts
optional occurrence?: number | "all"
```

Defined in: [configs/patches.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L186)

Which match to rewrite when `find` / `regex` hits more than once.
`"all"` (default when omitted in the loader) or a 1-based index.
Must not exceed [expectedMatches](#expectedmatches) when both are numbers.

###### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

###### description?

```ts
optional description?: string
```

Defined in: [configs/patches.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L190)

Human-readable note for maintainers. Not required by the official schema.

***

#### BundlePatchesDocument :id=configs.bundlepatchesdocument

<p class="smt-member-path"><code>configs.BundlePatchesDocument</code></p>
Defined in: [configs/patches.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L199)

Editor-friendly `patches.json` wrapper with an optional `$schema` URL.

The game loader expects a bare [BundlePatch](#bundlepatch) array. Prefer that array in
shipped mods. Use this object shape only when your editor needs inline `$schema`.

##### Properties

###### $schema?

```ts
optional $schema?: string
```

Defined in: [configs/patches.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L204)

Optional JSON Schema URL for editors (for example VS Code).
Not read by the game loader.

###### patches

```ts
patches: BundlePatch[]
```

Defined in: [configs/patches.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L208)

Ordered patch list (same as the bare-array game format).

***

#### WorkshopJson :id=configs.workshopjson

<p class="smt-member-path"><code>configs.WorkshopJson</code></p>
Defined in: [configs/workshop.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/workshop.d.ts#L21)

Links a local mod folder to its Steam Workshop item.

##### Example

**workshop.json**

```json
{
  "schemaVersion": 1,
  "publishedFileId": "1234567890"
}
```

##### Properties

###### schemaVersion

```ts
schemaVersion: 1
```

Defined in: [configs/workshop.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/workshop.d.ts#L23)

File format version. Must be `1`.

###### publishedFileId

```ts
publishedFileId: string
```

Defined in: [configs/workshop.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/workshop.d.ts#L25)

Steam Workshop published file id. Managed by the publisher.

### Type Aliases <!-- {docsify-ignore} -->

#### ConfigSchemaEntry :id=configs.configschemaentry

```ts
configs.ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice
```

Defined in: [configs/modinfo.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L307)

One entry under `modinfo.json` `configSchema`.

Keys of `configSchema` are setting ids read via `api.settings.get`.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### ModMapColorMapping :id=configs.modmapcolormapping

```ts
configs.ModMapColorMapping = string | ModMapColorMappingLayers
```

Defined in: [configs/modinfo.d.ts:542](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L542)

One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.

##### See

[Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)

***

#### PatchTargetFile :id=configs.patchtargetfile

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

##### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

***

#### PatchOperation :id=configs.patchoperation

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

##### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

***

#### BundlePatchesFile :id=configs.bundlepatchesfile

```ts
configs.BundlePatchesFile = BundlePatch[] | BundlePatchesDocument
```

Defined in: [configs/patches.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L217)

Root shape of `patches.json`: a bare [BundlePatch](#bundlepatch) array (game format),
or a [BundlePatchesDocument](#bundlepatchesdocument) object when the file includes `$schema`.

##### See

[Official docs](https://sandustry.com/sandkit.html#patches-heading)

---

## electron

Renderer Electron bridge exposed by `contextBridge` as `window.electron`.

Source of truth: Sandustry `preload.js` (`contextBridge.exposeInMainWorld('electron', …)`).
Main-process handlers live in `main.js`.

Import from `@sandustry-modding/types/electron` for explicit types, or use the ambient
`electron` / `window.electron` bindings from `@sandustry-modding/types`.

Sync methods use `ipcRenderer.sendSync` and are safe during startup.
Async methods use `ipcRenderer.invoke` unless noted (`openDevTools`, `log`).

### Interfaces <!-- {docsify-ignore} -->

#### ElectronBridge :id=electron.electronbridge

<p class="smt-member-path"><code>electron.ElectronBridge</code></p>
Defined in: [electron/bridge.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L33)

##### Properties

###### localMods

```ts
localMods: ElectronLocalModsApi
```

Defined in: [electron/bridge.d.ts:301](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L301)

Local developer mod folder helpers (`electron.localMods`).

###### macRightMouse

```ts
macRightMouse: ElectronMacRightMouseApi
```

Defined in: [electron/bridge.d.ts:396](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L396)

macOS right-button emulation helpers (`electron.macRightMouse`).

###### platform

```ts
platform: ElectronPlatformApi
```

Defined in: [electron/bridge.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L399)

Cross-store platform helpers (`electron.platform`).

###### customMaps

```ts
customMaps: ElectronCustomMapsApi
```

Defined in: [electron/bridge.d.ts:424](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L424)

Custom map editor persistence helpers (`electron.customMaps`).

##### Methods

###### getPlatformSync()

```ts
getPlatformSync(): ElectronPlatform
```

Defined in: [electron/bridge.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L41)

Return the active distribution channel.

###### Returns

[`ElectronPlatform`](#electronplatform)

`"steam"`, `"msstore"`, `"gog"`, or another platform string.

IPC: `get-platform-sync`.

###### getModdingEnabledSync()

```ts
getModdingEnabledSync(): boolean
```

Defined in: [electron/bridge.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L50)

Return whether local modding is enabled for this build/session.

###### Returns

`boolean`

True when the local mods folder and dev upload paths are enabled.

IPC: `get-modding-enabled-sync`.

###### getIsSteamDeckSync()

```ts
getIsSteamDeckSync(): boolean
```

Defined in: [electron/bridge.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L59)

Return true on Steam Deck / gamescope hosts.

###### Returns

`boolean`

True when running on Steam Deck class hardware.

IPC: `get-is-steam-deck-sync`.

###### getPreferredSystemLanguagesSync()

```ts
getPreferredSystemLanguagesSync(): string[]
```

Defined in: [electron/bridge.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L68)

Return BCP-47 language tags preferred by the OS.

###### Returns

`string`[]

Ordered list of preferred language codes.

IPC: `get-preferred-system-languages-sync`.

###### onAppSuspend()

```ts
onAppSuspend(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L77)

Register a callback for app suspend (sleep / Xbox quick suspend).

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called with IPC event arguments when the app suspends.

IPC: `app-suspend`.

###### Returns

`void`

###### onAppResume()

```ts
onAppResume(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L86)

Register a callback for app resume.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called with IPC event arguments when the app resumes.

IPC: `app-resume`.

###### Returns

`void`

###### diagnostics()

```ts
diagnostics(): Promise<JsonValueV1>
```

Defined in: [electron/bridge.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L95)

Return platform diagnostics JSON.

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)\>

Diagnostics object from the active platform integration.

IPC: `platform-diagnostics`.

###### checkLicense()

```ts
checkLicense(): Promise<ElectronLicenseCheckResult>
```

Defined in: [electron/bridge.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L106)

Check the MS Store license.

Always returns `{ valid: true }` on Steam when platform checks are unavailable.

###### Returns

`Promise`\<[`ElectronLicenseCheckResult`](#electronlicensecheckresult)\>

License validation result.

IPC: `platform-check-license`.

###### writeGameEvent()

```ts
writeGameEvent(eventName: string, dimensions?: Record<string, string>, measurements?: Record<string, number>): Promise<boolean>
```

Defined in: [electron/bridge.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L118)

Send one telemetry event to the platform SDK when available.

###### Parameters

###### eventName

`string`

Telemetry event name.

###### dimensions?

`Record`\<`string`, `string`\>

String key/value dimensions.

###### measurements?

`Record`\<`string`, `number`\>

Numeric measurements.

###### Returns

`Promise`\<`boolean`\>

False when the platform SDK rejects or ignores the event.

IPC: `platform-write-game-event`.

###### platformPrimeAchievements()

```ts
platformPrimeAchievements(ids: string[]): Promise<ElectronPrimeAchievementsResult>
```

Defined in: [electron/bridge.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L134)

Prime the MS Store achievement cache after sign-in.

No-op success on Steam.

###### Parameters

###### ids

`string`[]

Achievement ids to seed in the local cache.

###### Returns

`Promise`\<[`ElectronPrimeAchievementsResult`](#electronprimeachievementsresult)\>

Prime operation result.

IPC: `platform-prime-achievements`.

###### platformShowReauthPrompt()

```ts
platformShowReauthPrompt(reason: string): Promise<ElectronReauthPromptResult>
```

Defined in: [electron/bridge.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L146)

Show the native MS Store re-auth dialog.

Resolves immediately with `{ dismissed: true }` on Steam.

###### Parameters

###### reason

`string`

`"license-lost"` or `"signed-out"`.

###### Returns

`Promise`\<[`ElectronReauthPromptResult`](#electronreauthpromptresult)\>

Dialog button index or dismissed flag.

IPC: `platform-show-reauth-prompt`.

###### appQuit()

```ts
appQuit(): Promise<ElectronSuccessResult>
```

Defined in: [electron/bridge.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L157)

Quit the application.

Works in fullscreen where `window.close()` is unreliable.

###### Returns

`Promise`\<[`ElectronSuccessResult`](#electronsuccessresult)\>

`{ success: true }` after scheduling quit.

IPC: `app-quit`.

###### openExternalBrowser()

```ts
openExternalBrowser(url: string): Promise<ElectronOpenUrlResult>
```

Defined in: [electron/bridge.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L167)

Open an external `https:` URL in the system browser.

###### Parameters

###### url

`string`

Must be an `https:` URL or the call returns `{ success: false, error: 'unsupported-url' }`.

###### Returns

`Promise`\<[`ElectronOpenUrlResult`](#electronopenurlresult)\>

URL open result.

IPC: `open-external-browser`.

###### onXboxUserSignedOut()

```ts
onXboxUserSignedOut(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L178)

Register a callback for Xbox user sign-out.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called when the Xbox user signs out.

IPC: `xbox-user-signed-out`.

###### Returns

`void`

###### onXboxLicenseLost()

```ts
onXboxLicenseLost(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L189)

Register a callback for Game Pass / Store license loss.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called when the store license is lost.

IPC: `xbox-license-lost`.

###### Returns

`void`

###### onXboxUserSignedIn()

```ts
onXboxUserSignedIn(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L200)

Register a callback for Xbox user sign-in.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called when the Xbox user signs in.

IPC: `xbox-user-signed-in`.

###### Returns

`void`

###### save()

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L212)

Write one compressed save file (`.save`).

###### Parameters

###### id

`string`

Save slot id.

###### name

`string`

Display name for the slot.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Full serialized save payload.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Save operation result with output path on success.

IPC: `save`.

###### saveSerialized()

```ts
saveSerialized(id: string, name: string, dataJson: string, metadata?: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L225)

Write one save from pre-serialized JSON and metadata.

###### Parameters

###### id

`string`

Save slot id.

###### name

`string`

Display name for the slot.

###### dataJson

`string`

Stringified save body (gzip-compressed by the main process).

###### metadata?

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Metadata object merged into the `.save` header line.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Save operation result with output path on success.

IPC: `save-serialized`.

###### load()

```ts
load(id: string): Promise<ElectronLoadResult>
```

Defined in: [electron/bridge.d.ts:240](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L240)

Load one save slot by id.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronLoadResult`](#electronloadresult)\>

Parsed save on success, or `{ success: false, error }`.

IPC: `load`.

###### deleteSave()

```ts
deleteSave(id: string): Promise<ElectronSuccessResult | ElectronFailureResult>
```

Defined in: [electron/bridge.d.ts:250](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L250)

Delete one save slot and its backup file.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronSuccessResult`](#electronsuccessresult) \| [`ElectronFailureResult`](#electronfailureresult)\>

`{ success: true }` after deleting primary and backup files.

IPC: `delete-save`.

###### loadRaw()

```ts
loadRaw(name: string): Promise<ElectronLoadResult | null>
```

Defined in: [electron/bridge.d.ts:260](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L260)

Load a raw save file by filename (including extension).

###### Parameters

###### name

`string`

Filename under the saves folder.

###### Returns

`Promise`\<[`ElectronLoadResult`](#electronloadresult) \| `null`\>

Parsed save result, or `null` when the handler cannot resolve the file.

IPC: `load-raw`.

###### exportSave()

```ts
exportSave(id: string): Promise<ElectronExportSaveResult>
```

Defined in: [electron/bridge.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L270)

Export one save slot as raw bytes for backup/sharing.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronExportSaveResult`](#electronexportsaveresult)\>

Raw `.save` bytes on success.

IPC: `export-save`.

###### importSave()

```ts
importSave(bytes: ArrayBuffer | Uint8Array<ArrayBufferLike>): Promise<ElectronImportSaveResult>
```

Defined in: [electron/bridge.d.ts:280](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L280)

Import one save from raw exported bytes.

###### Parameters

###### bytes

`ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\>

Raw `.save` file contents.

###### Returns

`Promise`\<[`ElectronImportSaveResult`](#electronimportsaveresult)\>

Import result with parsed header metadata on success.

IPC: `import-save`.

###### getSaveFiles()

```ts
getSaveFiles(): Promise<ElectronSaveFileMetadata[]>
```

Defined in: [electron/bridge.d.ts:289](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L289)

List save slot metadata parsed from each `.save` header line.

###### Returns

`Promise`\<[`ElectronSaveFileMetadata`](#electronsavefilemetadata)[]\>

Save metadata objects; corrupt entries are omitted.

IPC: `get-save-files`.

###### getSaveFolder()

```ts
getSaveFolder(): Promise<string>
```

Defined in: [electron/bridge.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L298)

Return the absolute path to the active saves folder.

###### Returns

`Promise`\<`string`\>

Absolute filesystem path to the current user's saves directory.

IPC: `get-save-folder`.

###### getLastPlayedGameSync()

```ts
getLastPlayedGameSync(): string | null
```

Defined in: [electron/bridge.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L310)

Return the last-played save id JSON string.

###### Returns

`string` \| `null`

JSON string shaped like `{ "id": "…" }`, or `null` when unset/unreadable.

IPC: `get-last-played-game-sync`.

###### saveLastPlayedGame()

```ts
saveLastPlayedGame(game: ElectronLastPlayedGame): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:320](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L320)

Persist the last-played save id.

###### Parameters

###### game

[`ElectronLastPlayedGame`](#electronlastplayedgame)

Object containing the save slot `id`.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Write result for `lastPlayedGame.json`.

IPC: `save-last-played-game`.

###### clearLastPlayedGame()

```ts
clearLastPlayedGame(): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L329)

Clear the persisted last-played save id.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Delete result for `lastPlayedGame.json`.

IPC: `clear-last-played-game`.

###### saveExistsSync()

```ts
saveExistsSync(id: string): boolean
```

Defined in: [electron/bridge.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L339)

Return whether a save file exists for the given id.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`boolean`

True when `<id>.save` exists in the active saves folder.

IPC: `save-exists-sync`.

###### getSettingsSync()

```ts
getSettingsSync(): string | null
```

Defined in: [electron/bridge.d.ts:348](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L348)

Return the settings JSON string from disk.

###### Returns

`string` \| `null`

Raw `settings.json` contents, or `null` when missing/unreadable.

IPC: `get-settings-sync`.

###### saveSettings()

```ts
saveSettings(settings: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L358)

Persist renderer settings JSON to disk.

###### Parameters

###### settings

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Settings object written to `settings.json`.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Write result for the settings file.

IPC: `save-settings`.

###### setFullscreen()

```ts
setFullscreen(shouldBeFullscreen: boolean): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:368](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L368)

Enter or leave fullscreen mode.

###### Parameters

###### shouldBeFullscreen

`boolean`

Target fullscreen state.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Window fullscreen operation result.

IPC: `set-fullscreen`.

###### toggleFullscreen()

```ts
toggleFullscreen(): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L377)

Toggle fullscreen mode.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Window fullscreen operation result.

IPC: `toggle-fullscreen`.

###### openDevTools()

```ts
openDevTools(): void
```

Defined in: [electron/bridge.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L384)

Open Chromium DevTools for the game window.

IPC: `open-devtools` (`send`).

###### Returns

`void`

###### isFilePatchingActiveSync()

```ts
isFilePatchingActiveSync(): boolean
```

Defined in: [electron/bridge.d.ts:393](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L393)

Return true when the Steam patch protocol interceptor is active.

###### Returns

`boolean`

True when patched sources are registered and the interceptor is running.

IPC: `is-file-patching-active-sync`.

###### log()

```ts
log(level: ElectronLogLevel, scope: string, message: string): void
```

Defined in: [electron/bridge.d.ts:412](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L412)

Append one line to the host log file (`logs/main.log`).

Fire-and-forget — never awaits IPC completion.

###### Parameters

###### level

[`ElectronLogLevel`](#electronloglevel)

Log severity (`console.log` maps to `"info"` in mod shims).

###### scope

`string`

Category tag (mod id for mod logging).

###### message

`string`

Plain-text log line.

IPC: `log:write` (`send`).

###### Returns

`void`

###### getSystemInfo()

```ts
getSystemInfo(): ElectronSystemInfo
```

Defined in: [electron/bridge.d.ts:421](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L421)

Return local process/runtime versions.

Useful for bug reports and environment probes.

###### Returns

[`ElectronSystemInfo`](#electronsysteminfo)

Version info read from the preload process object.

***

#### ElectronCustomMapsApi :id=electron.electroncustommapsapi

<p class="smt-member-path"><code>electron.ElectronCustomMapsApi</code></p>
Defined in: [electron/custom-maps.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L11)

Custom map editor persistence helpers exposed as `electron.customMaps`.

##### Methods

###### save()

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/custom-maps.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L22)

Write one custom map file (`.custommap`).

###### Parameters

###### id

`string`

Map id used in the filename.

###### name

`string`

Display name stored in metadata.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Full custom map JSON payload.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Operation result with written `path` on success.

IPC: `custom-map-save`.

###### load()

```ts
load(id: string): Promise<JsonValueV1>
```

Defined in: [electron/custom-maps.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L32)

Load one custom map by id.

###### Parameters

###### id

`string`

Map id (filename stem).

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)\>

Parsed map JSON, or `null` when missing or invalid.

IPC: `custom-map-load`.

###### list()

```ts
list(): Promise<JsonValueV1[]>
```

Defined in: [electron/custom-maps.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L41)

List custom map metadata entries (newest first).

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)[]\>

Metadata objects parsed from each `.custommap` header line.

IPC: `custom-map-list`.

###### delete()

```ts
delete(id: string): Promise<ElectronOperationResult>
```

Defined in: [electron/custom-maps.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L51)

Delete one custom map file.

###### Parameters

###### id

`string`

Map id (filename stem).

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Operation result from the delete handler.

IPC: `custom-map-delete`.

***

#### ElectronLocalModsApi :id=electron.electronlocalmodsapi

<p class="smt-member-path"><code>electron.ElectronLocalModsApi</code></p>
Defined in: [electron/local-mods.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L14)

Local developer mod folder helpers exposed as `electron.localMods`.

##### Methods

###### getFolder()

```ts
getFolder(): Promise<string>
```

Defined in: [electron/local-mods.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L22)

Return the absolute path to the OS local-mods folder.

###### Returns

`Promise`\<`string`\>

Absolute filesystem path to the local mods root.

IPC: `get-local-mods-folder`.

###### openFolder()

```ts
openFolder(): Promise<ElectronOperationResult>
```

Defined in: [electron/local-mods.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L31)

Open the local-mods folder in the OS file manager.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Operation result from the shell open call.

IPC: `open-local-mods-folder`.

###### list()

```ts
list(): Promise<ElectronLocalModsListResult>
```

Defined in: [electron/local-mods.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L42)

List installed local mod summaries.

Steam only — MS Store returns `{ ok: false, errorCode: 'unsupported_platform' }`.

###### Returns

`Promise`\<[`ElectronLocalModsListResult`](#electronlocalmodslistresult)\>

Listing result with mod summaries in `data` when `ok` is true.

IPC: `local-mods-list`.

###### upload()

```ts
upload(modId: string): Promise<ElectronLocalModsUploadResult>
```

Defined in: [electron/local-mods.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L52)

Upload one local mod folder to Steam Workshop.

###### Parameters

###### modId

`string`

Local mod folder id under the local-mods directory.

###### Returns

`Promise`\<[`ElectronLocalModsUploadResult`](#electronlocalmodsuploadresult)\>

Upload result with `errorCode` on failure.

IPC: `local-mods-upload`.

***

#### ElectronMacRightMouseApi :id=electron.electronmacrightmouseapi

<p class="smt-member-path"><code>electron.ElectronMacRightMouseApi</code></p>
Defined in: [electron/mac-right-mouse.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L8)

macOS right-button emulation helpers exposed as `electron.macRightMouse`.

##### Methods

###### watch()

```ts
watch(active: boolean, probeScript?: string): void
```

Defined in: [electron/mac-right-mouse.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L17)

Enable or disable global right-button probing on macOS.

###### Parameters

###### active

`boolean`

When true, start watching for synthetic right-click gestures.

###### probeScript?

`string`

Optional probe script forwarded to the main process.

IPC: `mac-right-mouse-watch` (`send`).

###### Returns

`void`

###### onPos()

```ts
onPos(callback: (x: number, y: number) => void): void
```

Defined in: [electron/mac-right-mouse.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L26)

Register a callback for synthetic right-button position updates.

###### Parameters

###### callback

(`x`: `number`, `y`: `number`) => `void`

Receives screen coordinates for the emulated right click.

IPC: `mac-right-mouse-pos`.

###### Returns

`void`

###### onUp()

```ts
onUp(callback: () => void): void
```

Defined in: [electron/mac-right-mouse.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L35)

Register a callback for synthetic right-button release.

###### Parameters

###### callback

() => `void`

Called when the emulated right button is released.

IPC: `mac-right-mouse-up`.

###### Returns

`void`

***

#### ElectronPlatformOverlayApi :id=electron.electronplatformoverlayapi

<p class="smt-member-path"><code>electron.ElectronPlatformOverlayApi</code></p>
Defined in: [electron/platform.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L11)

Platform overlay browser helpers exposed as `electron.platform.overlay`.

##### Methods

###### openUrl()

```ts
openUrl(url: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L20)

Open an `https:` URL in the platform overlay browser when available.

###### Parameters

###### url

`string`

External https URL.

###### Returns

`Promise`\<`unknown`\>

Platform-specific overlay open result (`false` when URL is rejected).

IPC: `platform-overlay-open-url`.

***

#### ElectronPlatformApi :id=electron.electronplatformapi

<p class="smt-member-path"><code>electron.ElectronPlatformApi</code></p>
Defined in: [electron/platform.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L26)

Cross-store platform helpers exposed as `electron.platform`.

##### Properties

###### workshop

```ts
workshop: ElectronWorkshopApi
```

Defined in: [electron/platform.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L144)

Steam Workshop helpers (Steam only; MS Store calls fail gracefully).

###### overlay

```ts
overlay: ElectronPlatformOverlayApi
```

Defined in: [electron/platform.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L147)

Platform overlay browser helpers.

##### Methods

###### isInitialized()

```ts
isInitialized(): Promise<boolean>
```

Defined in: [electron/platform.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L34)

Return true when the platform integration finished startup.

###### Returns

`Promise`\<`boolean`\>

Whether Steam / MS Store integration is ready.

IPC: `platform-is-initialized`.

###### getPlayerName()

```ts
getPlayerName(): Promise<string>
```

Defined in: [electron/platform.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L43)

Return the signed-in player display name.

###### Returns

`Promise`\<`string`\>

Platform account display name.

IPC: `platform-get-player-name`.

###### getPlayerId()

```ts
getPlayerId(): Promise<string>
```

Defined in: [electron/platform.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L52)

Return the stable platform player id string.

###### Returns

`Promise`\<`string`\>

Platform-specific player identifier.

IPC: `platform-get-player-id`.

###### getAppId()

```ts
getAppId(): Promise<number>
```

Defined in: [electron/platform.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L61)

Return the platform app id number.

###### Returns

`Promise`\<`number`\>

Steam App ID or MS Store equivalent.

IPC: `platform-get-app-id`.

###### unlockAchievement()

```ts
unlockAchievement(achievementId: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L71)

Unlock one platform achievement.

###### Parameters

###### achievementId

`string`

Platform achievement identifier.

###### Returns

`Promise`\<`unknown`\>

Platform achievement unlock result.

IPC: `platform-unlock-achievement`.

###### isAchievementUnlocked()

```ts
isAchievementUnlocked(achievementId: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L81)

Return whether an achievement is already unlocked.

###### Parameters

###### achievementId

`string`

Platform achievement identifier.

###### Returns

`Promise`\<`unknown`\>

True when the achievement is unlocked on the platform account.

IPC: `platform-is-achievement-unlocked`.

###### clearAchievement()

```ts
clearAchievement(achievementId: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L91)

Clear one platform achievement (debug / QA).

###### Parameters

###### achievementId

`string`

Platform achievement identifier.

###### Returns

`Promise`\<`unknown`\>

Platform achievement clear result.

IPC: `platform-clear-achievement`.

###### cloudSave()

```ts
cloudSave(fileName: string, data: JsonValueV1): Promise<unknown>
```

Defined in: [electron/platform.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L102)

Write one named blob to platform cloud storage.

###### Parameters

###### fileName

`string`

Cloud file key.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

JSON-serializable payload.

###### Returns

`Promise`\<`unknown`\>

Platform cloud save result.

IPC: `platform-cloud-save`.

###### cloudLoad()

```ts
cloudLoad(fileName: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L112)

Read one named blob from platform cloud storage.

###### Parameters

###### fileName

`string`

Cloud file key.

###### Returns

`Promise`\<`unknown`\>

Parsed cloud payload, or `null` when missing.

IPC: `platform-cloud-load`.

###### cloudFileExists()

```ts
cloudFileExists(fileName: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L122)

Return whether a cloud file key exists.

###### Parameters

###### fileName

`string`

Cloud file key.

###### Returns

`Promise`\<`unknown`\>

True when the cloud file is present.

IPC: `platform-cloud-file-exists`.

###### cloudDelete()

```ts
cloudDelete(fileName: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L132)

Delete one named cloud file.

###### Parameters

###### fileName

`string`

Cloud file key.

###### Returns

`Promise`\<`unknown`\>

Platform cloud delete result.

IPC: `platform-cloud-delete`.

###### cloudSync()

```ts
cloudSync(): Promise<unknown>
```

Defined in: [electron/platform.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L141)

Sync local saves with platform cloud storage.

###### Returns

`Promise`\<`unknown`\>

Cloud sync summary from the platform integration.

IPC: `platform-cloud-sync`.

***

#### ElectronSuccessResult :id=electron.electronsuccessresult

<p class="smt-member-path"><code>electron.ElectronSuccessResult</code></p>
Defined in: [electron/results.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L10)

Successful invoke result from save, settings, and window handlers.

##### Properties

###### success

```ts
success: true
```

Defined in: [electron/results.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L12)

Always `true` for this branch of the result union.

###### path?

```ts
optional path?: string
```

Defined in: [electron/results.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L14)

Absolute path written when a handler persists a file (save/custom map).

***

#### ElectronFailureResult :id=electron.electronfailureresult

<p class="smt-member-path"><code>electron.ElectronFailureResult</code></p>
Defined in: [electron/results.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L20)

Failed invoke result from save, settings, and window handlers.

##### Properties

###### success

```ts
success: false
```

Defined in: [electron/results.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L22)

Always `false` for this branch of the result union.

###### error

```ts
error: string
```

Defined in: [electron/results.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L24)

Human-readable error message from the main process.

***

#### ElectronLicenseCheckResult :id=electron.electronlicensecheckresult

<p class="smt-member-path"><code>electron.ElectronLicenseCheckResult</code></p>
Defined in: [electron/results.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L35)

MS Store license check result from [ElectronBridge.checkLicense](#checklicense).

##### Properties

###### valid

```ts
valid: boolean
```

Defined in: [electron/results.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L37)

Whether the current license is valid for play.

###### reason

```ts
reason: string | null
```

Defined in: [electron/results.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L39)

Failure reason when `valid` is false; otherwise `null`.

###### networkError

```ts
networkError: boolean
```

Defined in: [electron/results.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L41)

True when the check failed due to network or platform errors.

###### cached

```ts
cached: boolean
```

Defined in: [electron/results.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L43)

True when the result came from a cached license check.

***

#### ElectronSaveInput :id=electron.electronsaveinput

<p class="smt-member-path"><code>electron.ElectronSaveInput</code></p>
Defined in: [electron/results.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L49)

Parsed game save payload passed to [ElectronBridge.save](#save).

##### Properties

###### id

```ts
id: string
```

Defined in: [electron/results.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L51)

Save slot id (sanitized filename stem).

###### name

```ts
name: string
```

Defined in: [electron/results.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L53)

Display name shown in the save UI.

###### data

```ts
data: JsonValueV1
```

Defined in: [electron/results.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L55)

Full serialized game state (`{ store: … }` shape).

***

#### ElectronLoadSuccessResult :id=electron.electronloadsuccessresult

<p class="smt-member-path"><code>electron.ElectronLoadSuccessResult</code></p>
Defined in: [electron/results.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L61)

Successful load result from [ElectronBridge.load](#load).

##### Properties

###### success

```ts
success: true
```

Defined in: [electron/results.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L63)

Always `true` for this branch of the result union.

###### data

```ts
data: JsonValueV1
```

Defined in: [electron/results.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L65)

Parsed save body (`{ store: … }`).

***

#### ElectronLoadFailureResult :id=electron.electronloadfailureresult

<p class="smt-member-path"><code>electron.ElectronLoadFailureResult</code></p>
Defined in: [electron/results.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L71)

Failed load result from [ElectronBridge.load](#load).

##### Properties

###### success

```ts
success: false
```

Defined in: [electron/results.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L73)

Always `false` for this branch of the result union.

###### error

```ts
error: string
```

Defined in: [electron/results.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L75)

Human-readable load failure message.

***

#### ElectronSaveFileMetadata :id=electron.electronsavefilemetadata

<p class="smt-member-path"><code>electron.ElectronSaveFileMetadata</code></p>
Defined in: [electron/results.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L86)

Metadata parsed from the first line of one `.save` file.

Returned by [ElectronBridge.getSaveFiles](#getsavefiles).

##### Properties

###### id

```ts
id: string
```

Defined in: [electron/results.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L88)

Save slot id (filename stem).

###### name

```ts
name: string
```

Defined in: [electron/results.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L90)

Display name stored in the save header.

###### timestamp

```ts
timestamp: string
```

Defined in: [electron/results.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L92)

ISO timestamp string when the save was written.

###### playTime?

```ts
optional playTime?: number
```

Defined in: [electron/results.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L94)

Total play time in milliseconds from the save body.

###### worldId?

```ts
optional worldId?: string | null
```

Defined in: [electron/results.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L96)

World template id, if present.

###### worldName?

```ts
optional worldName?: string | null
```

Defined in: [electron/results.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L98)

World display name, if present.

###### seed?

```ts
optional seed?: number | null
```

Defined in: [electron/results.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L100)

World seed, if present.

###### productionPoints?

```ts
optional productionPoints?: number
```

Defined in: [electron/results.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L102)

Factory production points at save time.

###### structureCount?

```ts
optional structureCount?: number
```

Defined in: [electron/results.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L104)

Number of placed structures at save time.

###### resources?

```ts
optional resources?: JsonValueV1
```

Defined in: [electron/results.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L106)

Resource snapshot (`gold`, `fluxite`, `artifacts`, …).

***

#### ElectronExportSaveSuccessResult :id=electron.electronexportsavesuccessresult

<p class="smt-member-path"><code>electron.ElectronExportSaveSuccessResult</code></p>
Defined in: [electron/results.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L112)

Successful export result from [ElectronBridge.exportSave](#exportsave).

##### Properties

###### success

```ts
success: true
```

Defined in: [electron/results.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L114)

Always `true` for this branch of the result union.

###### data

```ts
data: Uint8Array
```

Defined in: [electron/results.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L116)

Raw `.save` file bytes (metadata line + gzip payload).

***

#### ElectronImportSaveSuccessResult :id=electron.electronimportsavesuccessresult

<p class="smt-member-path"><code>electron.ElectronImportSaveSuccessResult</code></p>
Defined in: [electron/results.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L127)

Successful import result from [ElectronBridge.importSave](#importsave).

##### Properties

###### success

```ts
success: true
```

Defined in: [electron/results.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L129)

Always `true` for this branch of the result union.

###### metaData

```ts
metaData: JsonValueV1
```

Defined in: [electron/results.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L131)

Metadata parsed from the imported file header line.

***

#### ElectronLastPlayedGame :id=electron.electronlastplayedgame

<p class="smt-member-path"><code>electron.ElectronLastPlayedGame</code></p>
Defined in: [electron/results.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L140)

Last-played save marker written by [ElectronBridge.saveLastPlayedGame](#savelastplayedgame).

##### Properties

###### id?

```ts
optional id?: string
```

Defined in: [electron/results.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L142)

Save slot id of the last played game.

***

#### ElectronSystemInfo :id=electron.electronsysteminfo

<p class="smt-member-path"><code>electron.ElectronSystemInfo</code></p>
Defined in: [electron/results.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L150)

Local process/runtime versions from [ElectronBridge.getSystemInfo](#getsysteminfo).

Read directly in the preload script — no IPC round trip.

##### Properties

###### platform

```ts
platform: string
```

Defined in: [electron/results.d.ts:152](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L152)

Node `process.platform` (for example `linux`, `win32`).

###### arch

```ts
arch: string
```

Defined in: [electron/results.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L154)

CPU architecture string from `process.arch`.

###### electronVersion

```ts
electronVersion: string
```

Defined in: [electron/results.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L156)

Electron runtime version from `process.versions.electron`.

###### chromeVersion

```ts
chromeVersion: string
```

Defined in: [electron/results.d.ts:158](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L158)

Chromium version from `process.versions.chrome`.

###### nodeVersion

```ts
nodeVersion: string
```

Defined in: [electron/results.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L160)

Node.js version from `process.versions.node`.

***

#### ElectronLocalModsListResult :id=electron.electronlocalmodslistresult

<p class="smt-member-path"><code>electron.ElectronLocalModsListResult</code></p>
Defined in: [electron/results.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L166)

Result from [ElectronLocalModsApi.list](#list-1).

##### Properties

###### ok

```ts
ok: boolean
```

Defined in: [electron/results.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L168)

True when the listing succeeded.

###### data

```ts
data: JsonValueV1[]
```

Defined in: [electron/results.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L170)

Local mod summary objects when `ok` is true; otherwise `[]`.

###### errorCode?

```ts
optional errorCode?: string
```

Defined in: [electron/results.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L172)

Error code when `ok` is false (for example `unsupported_platform`).

***

#### ElectronLocalModsUploadResult :id=electron.electronlocalmodsuploadresult

<p class="smt-member-path"><code>electron.ElectronLocalModsUploadResult</code></p>
Defined in: [electron/results.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L178)

Result from [ElectronLocalModsApi.upload](#upload).

##### Properties

###### ok

```ts
ok: boolean
```

Defined in: [electron/results.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L180)

True when Workshop upload succeeded.

###### errorCode?

```ts
optional errorCode?: string
```

Defined in: [electron/results.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L182)

Error code when `ok` is false.

###### detail?

```ts
optional detail?: string
```

Defined in: [electron/results.d.ts:184](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L184)

Extra failure detail logged by the main process.

***

#### ElectronOpenUrlResult :id=electron.electronopenurlresult

<p class="smt-member-path"><code>electron.ElectronOpenUrlResult</code></p>
Defined in: [electron/results.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L190)

Result from [ElectronBridge.openExternalBrowser](#openexternalbrowser).

##### Properties

###### success

```ts
success: boolean
```

Defined in: [electron/results.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L192)

True when the OS opened the URL.

###### error?

```ts
optional error?: string
```

Defined in: [electron/results.d.ts:194](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L194)

Failure reason (for example `unsupported-url`).

***

#### ElectronPrimeAchievementsResult :id=electron.electronprimeachievementsresult

<p class="smt-member-path"><code>electron.ElectronPrimeAchievementsResult</code></p>
Defined in: [electron/results.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L200)

Result from [ElectronBridge.platformPrimeAchievements](#platformprimeachievements).

##### Properties

###### success

```ts
success: boolean
```

Defined in: [electron/results.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L202)

True when the cache seed completed.

###### error?

```ts
optional error?: string
```

Defined in: [electron/results.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L204)

Failure message when `success` is false.

***

#### ElectronReauthPromptResult :id=electron.electronreauthpromptresult

<p class="smt-member-path"><code>electron.ElectronReauthPromptResult</code></p>
Defined in: [electron/results.d.ts:210](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L210)

Result from [ElectronBridge.platformShowReauthPrompt](#platformshowreauthprompt).

##### Properties

###### response?

```ts
optional response?: number
```

Defined in: [electron/results.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L212)

Button index chosen in the native MS Store dialog.

###### dismissed?

```ts
optional dismissed?: boolean
```

Defined in: [electron/results.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L214)

True on Steam where no dialog is shown.

***

#### ElectronWorkshopApi :id=electron.electronworkshopapi

<p class="smt-member-path"><code>electron.ElectronWorkshopApi</code></p>
Defined in: [electron/workshop.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L12)

Steam Workshop helpers exposed as `electron.platform.workshop`.

Steam only — calls fail gracefully on MS Store.

##### Methods

###### subscribe()

```ts
subscribe(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L21)

Subscribe to a Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Platform workshop subscribe result.

IPC: `platform-workshop-subscribe`.

###### unsubscribe()

```ts
unsubscribe(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L31)

Unsubscribe from a Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Platform workshop unsubscribe result.

IPC: `platform-workshop-unsubscribe`.

###### installInfo()

```ts
installInfo(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L41)

Return install state for a subscribed Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Install info object from the Steam workshop API wrapper.

IPC: `platform-workshop-install-info`.

###### downloadInfo()

```ts
downloadInfo(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L51)

Return download progress for a Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Download info object from the Steam workshop API wrapper.

IPC: `platform-workshop-download-info`.

###### getState()

```ts
getState(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L61)

Return the Steam Workshop item state flags.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Numeric workshop item state from the Steam API wrapper.

IPC: `platform-workshop-state`.

###### getSubscribedItems()

```ts
getSubscribedItems(): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L70)

Return all subscribed Workshop item ids.

###### Returns

`Promise`\<`unknown`\>

Array of subscribed published file ids.

IPC: `platform-workshop-subscribed-list`.

###### getItem()

```ts
getItem(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L80)

Fetch Workshop item metadata.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Workshop item details from the Steam API wrapper.

IPC: `platform-workshop-get-item`.

###### download()

```ts
download(itemId: string | number, highPriority?: boolean): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L91)

Queue or prioritize a Workshop item download.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### highPriority?

`boolean`

When true, request a high-priority download queue slot.

###### Returns

`Promise`\<`unknown`\>

Download request result from the Steam API wrapper.

IPC: `platform-workshop-download`.

###### getSandkitMods()

```ts
getSandkitMods(): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L100)

Discover Sandkit Workshop mods installed for the current session.

###### Returns

`Promise`\<`unknown`\>

`{ ok, data: { mods, diagnostics }, error }` discovery payload.

IPC: `platform-workshop-sandkit-mods`.

### Type Aliases <!-- {docsify-ignore} -->

#### ElectronPlatform :id=electron.electronplatform

```ts
electron.ElectronPlatform = "steam" | "msstore" | "gog" | string & object
```

Defined in: [electron/primitives.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L10)

Sandustry distribution channel string.

Returned by [ElectronBridge.getPlatformSync](#getplatformsync).

***

#### ElectronLogLevel :id=electron.electronloglevel

```ts
electron.ElectronLogLevel = "debug" | "info" | "warn" | "error"
```

Defined in: [electron/primitives.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L17)

Severity level written through [ElectronBridge.log](#log).

Maps to the main-process file logger (`logs/main.log`).

***

#### ElectronIpcListener :id=electron.electronipclistener

```ts
electron.ElectronIpcListener = (...args: unknown[]) => void
```

Defined in: [electron/primitives.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L24)

Callback registered on IPC event channels such as `app-suspend`.

##### Parameters

###### args

...`unknown`[]

Event-specific payload from the main process (often empty).

##### Returns

`void`

***

#### ElectronOperationResult :id=electron.electronoperationresult

```ts
electron.ElectronOperationResult = ElectronSuccessResult | ElectronFailureResult
```

Defined in: [electron/results.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L30)

Result union returned by most save, settings, and window invoke handlers.

***

#### ElectronLoadResult :id=electron.electronloadresult

```ts
electron.ElectronLoadResult = ElectronLoadSuccessResult | ElectronLoadFailureResult
```

Defined in: [electron/results.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L79)

Result from [ElectronBridge.load](#load).

***

#### ElectronExportSaveResult :id=electron.electronexportsaveresult

```ts
electron.ElectronExportSaveResult = ElectronExportSaveSuccessResult | ElectronFailureResult
```

Defined in: [electron/results.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L120)

Result from [ElectronBridge.exportSave](#exportsave).

***

#### ElectronImportSaveResult :id=electron.electronimportsaveresult

```ts
electron.ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult
```

Defined in: [electron/results.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L135)

Result from [ElectronBridge.importSave](#importsave).

---

## shared.asset

### Interfaces <!-- {docsify-ignore} -->

#### AssetRef :id=shared.asset.assetref

<p class="smt-member-path"><code>shared.asset.AssetRef</code></p>
Defined in: [shared/asset.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/asset.d.ts#L9)

Reference to a loaded sprite or texture asset.

##### Properties

###### id

```ts
id: number
```

Defined in: [shared/asset.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/asset.d.ts#L11)

Runtime asset id.

###### type

```ts
type: number
```

Defined in: [shared/asset.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/asset.d.ts#L13)

Asset category discriminator used by the renderer.

---

## shared.engine

### Type Aliases <!-- {docsify-ignore} -->

#### EngineFn :id=shared.engine.enginefn

```ts
shared.engine.EngineFn = (...args: unknown[]) => unknown
```

Defined in: [shared/engine.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L11)

**`Internal`**

Stub for an unresolved engine method.

##### Parameters

###### args

...`unknown`[]

##### Returns

`unknown`

***

#### EngineOverlapNs :id=shared.engine.engineoverlapns

```ts
shared.engine.EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>
```

Defined in: [shared/engine.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L17)

**`Internal`**

Loose bag for namespaces that overlap `sandkit.api` (different names / state-first).

---

## shared.jsonvalue

### Interfaces <!-- {docsify-ignore} -->

#### JsonObjectV1 :id=shared.jsonvalue.jsonobjectv1

<p class="smt-member-path"><code>shared.jsonvalue.JsonObjectV1</code></p>
Defined in: [shared/jsonvalue.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/jsonvalue.d.ts#L15)

JSON object with string keys and [JsonValueV1](#jsonvaluev1) values.

Use for open-ended config bags and serialized mod data.

##### Indexable

```ts
[key: string]: JsonValueV1
```

### Type Aliases <!-- {docsify-ignore} -->

#### JsonValueV1 :id=shared.jsonvalue.jsonvaluev1

```ts
shared.jsonvalue.JsonValueV1 = string | number | boolean | JsonObjectV1 | JsonValueV1[] | null
```

Defined in: [shared/jsonvalue.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/jsonvalue.d.ts#L24)

JSON value: primitive, object, array, or null.

Does not include `undefined` — omit keys instead.

---

## shared.nominal

### Type Aliases <!-- {docsify-ignore} -->

#### LooseString :id=shared.nominal.loosestring

```ts
shared.nominal.LooseString<T *extends* string> = T | string & object
```

Defined in: [shared/nominal.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L16)

Known string literals plus any other string.
`T | string` collapses to `string` and drops autocomplete.

##### Type Parameters

###### T

`T` *extends* `string`

***

#### LooseNumber :id=shared.nominal.loosenumber

```ts
shared.nominal.LooseNumber<T *extends* number> = T | number & object
```

Defined in: [shared/nominal.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L22)

Known numeric literals plus any other number.
`T | number` collapses to `number` and drops autocomplete.

##### Type Parameters

###### T

`T` *extends* `number`

***

#### TaggedNumber :id=shared.nominal.taggednumber

```ts
shared.nominal.TaggedNumber<Tag *extends* string> = number & object
```

Defined in: [shared/nominal.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L28)

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

#### CellId :id=shared.nominal.cellid

```ts
shared.nominal.CellId = TaggedNumber<"cellId">
```

Defined in: [shared/nominal.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L31)

Packed simulation cell id from `world.getCellIdAtCell`.

---

## shared.player

### Interfaces <!-- {docsify-ignore} -->

#### Player :id=shared.player.player

<p class="smt-member-path"><code>shared.player.Player</code></p>
Defined in: [shared/player.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L34)

Live player state snapshot (read-only shape for mods).

Reflects `sandkit.engine.state` / store player fields exposed to mods.

##### Properties

###### x

```ts
x: number
```

Defined in: [shared/player.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L36)

Player hitbox left edge in world pixels.

###### y

```ts
y: number
```

Defined in: [shared/player.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L38)

Player hitbox top edge in world pixels.

###### width

```ts
width: number
```

Defined in: [shared/player.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L40)

Player hitbox width in world pixels.

###### height

```ts
height: number
```

Defined in: [shared/player.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L42)

Player hitbox height in world pixels.

###### velocity

```ts
velocity: Vector2
```

Defined in: [shared/player.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L44)

Current movement velocity in pixels per second.

###### threshold

```ts
threshold: Vector2
```

Defined in: [shared/player.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L46)

Movement threshold accumulator used by physics.

###### onGround

```ts
onGround: boolean
```

Defined in: [shared/player.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L51)

Spawn flag. Live physics does not update this field.
Use `sandkit.api.player.isOnGround()` (solid cells 1px below the hitbox).

###### speedCapOverdrive

```ts
speedCapOverdrive: object
```

Defined in: [shared/player.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L53)

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

Defined in: [shared/player.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L70)

Items currently held in the player inventory.

###### buildings

```ts
buildings: number[]
```

Defined in: [shared/player.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L72)

Structure type ids the player has unlocked for building.

###### tech

```ts
tech: object
```

Defined in: [shared/player.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L74)

Tech tree nodes and their unlock metadata.

###### Index Signature

\[`key`: `string` \| `number`\]: `object`

###### lockedTechs

```ts
lockedTechs: object
```

Defined in: [shared/player.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L104)

Tech ids explicitly locked for this save.

###### Index Signature

\[`key`: `string`\]: `boolean`

###### action

```ts
action: null
```

Defined in: [shared/player.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L106)

Active world action, or null when idle.

###### hotbar

```ts
hotbar: object
```

Defined in: [shared/player.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L108)

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

Defined in: [shared/player.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L114)

True when the grappling hook is equipped or active.

###### cooldowns

```ts
cooldowns: object
```

Defined in: [shared/player.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L116)

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

Defined in: [shared/player.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L130)

True when hover movement mode is active.

###### weaponsMeta

```ts
weaponsMeta: object
```

Defined in: [shared/player.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L132)

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

#### InventoryItem :id=shared.player.inventoryitem

<p class="smt-member-path"><code>shared.player.InventoryItem</code></p>
Defined in: [shared/player.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L146)

One hotbar or inventory item entry.

##### Properties

###### id

```ts
id: number
```

Defined in: [shared/player.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L147)

###### itemType

```ts
itemType: number
```

Defined in: [shared/player.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L148)

###### abilities

```ts
abilities: object[]
```

Defined in: [shared/player.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L149)

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

Defined in: [shared/player.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L169)

###### descriptionKey

```ts
descriptionKey: string
```

Defined in: [shared/player.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L170)

###### categoryKey

```ts
categoryKey: "excavation" | "utility" | "drones"
```

Defined in: [shared/player.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L171)

###### sprite?

```ts
optional sprite?: AssetRef
```

Defined in: [shared/player.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L172)

### Type Aliases <!-- {docsify-ignore} -->

#### CellCoordinates :id=shared.player.cellcoordinates

```ts
shared.player.CellCoordinates = [number, number]
```

Defined in: [shared/player.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L14)

Grid cell position as `[cellX, cellY]`.

Cell coordinates match `sandkit.api.*AtCell` helpers: column first, then row.

***

#### Vector2 :id=shared.player.vector2

```ts
shared.player.Vector2 = object
```

Defined in: [shared/player.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L22)

2D vector in world or cell space.

World positions use pixels. Cell helpers may return pixel or cell units
depending on the API.

##### Properties

###### x

```ts
x: number
```

Defined in: [shared/player.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L24)

Horizontal component.

###### y

```ts
y: number
```

Defined in: [shared/player.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L26)

Vertical component.

---

## sandkit.api.building.StructureType

Defined in: [sandkit/api/building.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L10)

Built-in structure type ids used during placement.

### Enumeration Members <!-- {docsify-ignore} -->

#### ConveyorLeft :id=sandkit.api.building.StructureType.conveyorleft

```ts
sandkit.api.building.StructureType.ConveyorLeft: 1
```

Defined in: [sandkit/api/building.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L12)

Left-facing conveyor belt.

***

#### ConveyorRight :id=sandkit.api.building.StructureType.conveyorright

```ts
sandkit.api.building.StructureType.ConveyorRight: 2
```

Defined in: [sandkit/api/building.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L14)

Right-facing conveyor belt.

***

#### ShakerLeft :id=sandkit.api.building.StructureType.shakerleft

```ts
sandkit.api.building.StructureType.ShakerLeft: 3
```

Defined in: [sandkit/api/building.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L16)

Left-facing shaker.

***

#### ShakerRight :id=sandkit.api.building.StructureType.shakerright

```ts
sandkit.api.building.StructureType.ShakerRight: 4
```

Defined in: [sandkit/api/building.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L18)

Right-facing shaker.

***

#### LauncherUp :id=sandkit.api.building.StructureType.launcherup

```ts
sandkit.api.building.StructureType.LauncherUp: 5
```

Defined in: [sandkit/api/building.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L20)

Up-facing launcher.

***

#### LauncherLeft :id=sandkit.api.building.StructureType.launcherleft

```ts
sandkit.api.building.StructureType.LauncherLeft: 6
```

Defined in: [sandkit/api/building.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L22)

Left-facing launcher.

***

#### LauncherRight :id=sandkit.api.building.StructureType.launcherright

```ts
sandkit.api.building.StructureType.LauncherRight: 7
```

Defined in: [sandkit/api/building.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L24)

Right-facing launcher.

***

#### SplitterLeft :id=sandkit.api.building.StructureType.splitterleft

```ts
sandkit.api.building.StructureType.SplitterLeft: 8
```

Defined in: [sandkit/api/building.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L26)

Left-facing splitter.

***

#### SplitterRight :id=sandkit.api.building.StructureType.splitterright

```ts
sandkit.api.building.StructureType.SplitterRight: 9
```

Defined in: [sandkit/api/building.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L28)

Right-facing splitter.

***

#### Dropper :id=sandkit.api.building.StructureType.dropper

```ts
sandkit.api.building.StructureType.Dropper: 10
```

Defined in: [sandkit/api/building.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L30)

Dropper structure.

***

#### Foundation :id=sandkit.api.building.StructureType.foundation

```ts
sandkit.api.building.StructureType.Foundation: 11
```

Defined in: [sandkit/api/building.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L32)

Foundation block.

***

#### FoundationAngledLeft :id=sandkit.api.building.StructureType.foundationangledleft

```ts
sandkit.api.building.StructureType.FoundationAngledLeft: 12
```

Defined in: [sandkit/api/building.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L34)

Angled foundation facing left.

***

#### FoundationTriangleLeftDel :id=sandkit.api.building.StructureType.foundationtriangleleftdel

```ts
sandkit.api.building.StructureType.FoundationTriangleLeftDel: 13
```

Defined in: [sandkit/api/building.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L36)

Left triangle foundation (deprecated id).

***

#### FoundationAngledRight :id=sandkit.api.building.StructureType.foundationangledright

```ts
sandkit.api.building.StructureType.FoundationAngledRight: 14
```

Defined in: [sandkit/api/building.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L38)

Angled foundation facing right.

***

#### FoundationTriangleRightDel :id=sandkit.api.building.StructureType.foundationtrianglerightdel

```ts
sandkit.api.building.StructureType.FoundationTriangleRightDel: 15
```

Defined in: [sandkit/api/building.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L40)

Right triangle foundation (deprecated id).

***

#### Collector :id=sandkit.api.building.StructureType.collector

```ts
sandkit.api.building.StructureType.Collector: 16
```

Defined in: [sandkit/api/building.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L42)

Collector structure.

***

#### FilterLeft :id=sandkit.api.building.StructureType.filterleft

```ts
sandkit.api.building.StructureType.FilterLeft: 17
```

Defined in: [sandkit/api/building.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L44)

Left-facing filter.

***

#### FilterRight :id=sandkit.api.building.StructureType.filterright

```ts
sandkit.api.building.StructureType.FilterRight: 18
```

Defined in: [sandkit/api/building.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L46)

Right-facing filter.

***

#### SlidingFoundation :id=sandkit.api.building.StructureType.slidingfoundation

```ts
sandkit.api.building.StructureType.SlidingFoundation: 19
```

Defined in: [sandkit/api/building.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L48)

Sliding foundation block.

***

#### VelocitySoaker :id=sandkit.api.building.StructureType.velocitysoaker

```ts
sandkit.api.building.StructureType.VelocitySoaker: 20
```

Defined in: [sandkit/api/building.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L50)

Velocity soaker structure.

***

#### Grower :id=sandkit.api.building.StructureType.grower

```ts
sandkit.api.building.StructureType.Grower: 21
```

Defined in: [sandkit/api/building.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L52)

Grower structure.

***

#### SoundBox :id=sandkit.api.building.StructureType.soundbox

```ts
sandkit.api.building.StructureType.SoundBox: 22
```

Defined in: [sandkit/api/building.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L54)

Sound box structure.

***

#### Pipe :id=sandkit.api.building.StructureType.pipe

```ts
sandkit.api.building.StructureType.Pipe: 23
```

Defined in: [sandkit/api/building.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L56)

Pipe segment.

***

#### Pump :id=sandkit.api.building.StructureType.pump

```ts
sandkit.api.building.StructureType.Pump: 24
```

Defined in: [sandkit/api/building.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L58)

Pump structure.

***

#### LiquidVent :id=sandkit.api.building.StructureType.liquidvent

```ts
sandkit.api.building.StructureType.LiquidVent: 25
```

Defined in: [sandkit/api/building.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L60)

Liquid vent structure.

***

#### Light :id=sandkit.api.building.StructureType.light

```ts
sandkit.api.building.StructureType.Light: 26
```

Defined in: [sandkit/api/building.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L62)

Light structure.

***

#### GloomEmitter :id=sandkit.api.building.StructureType.gloomemitter

```ts
sandkit.api.building.StructureType.GloomEmitter: 27
```

Defined in: [sandkit/api/building.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L64)

Gloom emitter structure.

---

## sandkit.api.elements.MatterType

Defined in: [shared/api/elements.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L41)

Physical behaviour category for an element.

### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### Enumeration Members <!-- {docsify-ignore} -->

#### Solid :id=sandkit.api.elements.MatterType.solid

```ts
sandkit.api.elements.MatterType.Solid: 1
```

Defined in: [shared/api/elements.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L42)

***

#### Liquid :id=sandkit.api.elements.MatterType.liquid

```ts
sandkit.api.elements.MatterType.Liquid: 2
```

Defined in: [shared/api/elements.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L43)

***

#### Particle :id=sandkit.api.elements.MatterType.particle

```ts
sandkit.api.elements.MatterType.Particle: 3
```

Defined in: [shared/api/elements.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L44)

***

#### Gas :id=sandkit.api.elements.MatterType.gas

```ts
sandkit.api.elements.MatterType.Gas: 4
```

Defined in: [shared/api/elements.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L45)

***

#### Static :id=sandkit.api.elements.MatterType.static

```ts
sandkit.api.elements.MatterType.Static: 5
```

Defined in: [shared/api/elements.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L46)

***

#### Slushy :id=sandkit.api.elements.MatterType.slushy

```ts
sandkit.api.elements.MatterType.Slushy: 6
```

Defined in: [shared/api/elements.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L47)

***

#### Wisp :id=sandkit.api.elements.MatterType.wisp

```ts
sandkit.api.elements.MatterType.Wisp: 7
```

Defined in: [shared/api/elements.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L48)

***

#### Powder :id=sandkit.api.elements.MatterType.powder

```ts
sandkit.api.elements.MatterType.Powder: 8
```

Defined in: [shared/api/elements.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L49)

---

## sandkit.api

Main-thread `sandkit.api` barrel.

Re-exports all namespaces available as `sandkit.api.*` on the main thread.
Prefer these methods over [sandkit.engine](api/sandkit.md#engine-1) when both exist.

### Namespaces <!-- {docsify-ignore} -->

- [action](api/sandkit.api.action.md)
- [assets](api/sandkit.api.assets.md)
- [authorization](api/sandkit.api.authorization.md)
- [blueprints](api/sandkit.api.blueprints.md)
- [building](api/sandkit.api.building.md)
- [camera](api/sandkit.api.camera.md)
- [collector](api/sandkit.api.collector.md)
- [constants](api/sandkit.api.constants.md)
- [cooldown](api/sandkit.api.cooldown.md)
- [discoveries](api/sandkit.api.discoveries.md)
- [effects](api/sandkit.api.effects.md)
- [elements](api/sandkit.api.elements.md)
- [energy](api/sandkit.api.energy.md)
- [entities](api/sandkit.api.entities.md)
- [events](api/sandkit.api.events.md)
- [excavation](api/sandkit.api.excavation.md)
- [factory](api/sandkit.api.factory.md)
- [fire](api/sandkit.api.fire.md)
- [game](api/sandkit.api.game.md)
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
- [pickups](api/sandkit.api.pickups.md)
- [pipes](api/sandkit.api.pipes.md)
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
- [~~world~~](api/sandkit.api.world.md)

### References <!-- {docsify-ignore} -->

#### sandkit.api :id=sandkit.api.sandkitapi

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
- [effects](api/sandkit.api.effects.worker.md)
- [elements](api/sandkit.api.elements.worker.md)
- [events](api/sandkit.api.events.worker.md)
- [fire](api/sandkit.api.fire.worker.md)
- [grid](api/sandkit.api.grid.worker.md)
- [~~world~~](api/sandkit.api.world.worker.md)
- [hooks](api/sandkit.api.hooks.worker.md)
- [lights](api/sandkit.api.lights.worker.md)
- [main](api/sandkit.api.main.worker.md)
- [shared](api/sandkit.api.shared.worker.md)
- [worker](api/sandkit.api.worker.worker.md)

### Type Aliases <!-- {docsify-ignore} -->

#### sandkit.api (worker) :id=sandkit.api.worker.workersandkitapi

```ts
WorkerSandkitApi = object
```

Defined in: [worker/sandkit-api.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L14)

Composed worker-thread `sandkit.api` object.

Namespace members are documented under [worker](api/sandkit.api.worker.worker.md). Use this type in
`worker.js` / `worker.ts`:

```ts
const api = sandkit.api as unknown as WorkerSandkitApi;
```

Main and worker surfaces overlap but are not interchangeable. Do not use
[sandkit.SandkitApi](api/sandkit.md#sandkitapi) on worker threads.

##### Properties

###### constants

```ts
constants: constants
```

Defined in: [worker/sandkit-api.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L15)

###### collector

```ts
collector: collector
```

Defined in: [worker/sandkit-api.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L16)

###### effects

```ts
effects: effects
```

Defined in: [worker/sandkit-api.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L17)

###### elements

```ts
elements: elements
```

Defined in: [worker/sandkit-api.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L18)

###### events

```ts
events: events
```

Defined in: [worker/sandkit-api.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L19)

###### fire

```ts
fire: fire
```

Defined in: [worker/sandkit-api.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L20)

###### grid

```ts
grid: grid
```

Defined in: [worker/sandkit-api.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L21)

###### hooks

```ts
hooks: hooks
```

Defined in: [worker/sandkit-api.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L22)

###### lights

```ts
lights: lights
```

Defined in: [worker/sandkit-api.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L23)

###### main

```ts
main: main
```

Defined in: [worker/sandkit-api.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L24)

###### maps

```ts
maps: maps
```

Defined in: [worker/sandkit-api.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L25)

###### patterns

```ts
patterns: patterns
```

Defined in: [worker/sandkit-api.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L26)

###### player

```ts
player: player
```

Defined in: [worker/sandkit-api.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L27)

###### random

```ts
random: random
```

Defined in: [worker/sandkit-api.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L28)

###### shared

```ts
shared: shared
```

Defined in: [worker/sandkit-api.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L29)

###### structures

```ts
structures: structures
```

Defined in: [worker/sandkit-api.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L30)

###### terrains

```ts
terrains: terrains
```

Defined in: [worker/sandkit-api.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L31)

###### ui

```ts
ui: ui
```

Defined in: [worker/sandkit-api.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L32)

###### utils

```ts
utils: utils
```

Defined in: [worker/sandkit-api.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L33)

###### worker

```ts
worker: worker
```

Defined in: [worker/sandkit-api.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L34)

###### ~~world~~

```ts
world: world
```

Defined in: [worker/sandkit-api.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L40)

###### Deprecated

Use [grid](api/sandkit.api.grid.worker.md) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

### References <!-- {docsify-ignore} -->

#### collector :id=sandkit.api.worker.collector

<p class="smt-member-path"><code>sandkit.api.collector (worker)</code></p>
Re-exports [collector](api/sandkit.api.collector.md)

***

#### constants :id=sandkit.api.worker.constants

<p class="smt-member-path"><code>sandkit.api.constants (worker)</code></p>
Re-exports [constants](api/sandkit.api.constants.md)

***

#### patterns :id=sandkit.api.worker.patterns

<p class="smt-member-path"><code>sandkit.api.patterns (worker)</code></p>
Re-exports [patterns](api/sandkit.api.patterns.md)

***

#### random :id=sandkit.api.worker.random

<p class="smt-member-path"><code>sandkit.api.random (worker)</code></p>
Re-exports [random](api/sandkit.api.random.md)

***

#### utils :id=sandkit.api.worker.utils

<p class="smt-member-path"><code>sandkit.api.utils (worker)</code></p>
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

#### sandkit.engine :id=sandkit.engine.sandkitengine

Defined in: [sandkit/engine/index.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L132)

**`Internal`**

Host `sandkit.engine` object (main and worker).

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
At runtime `sandkit.engine.state === sandkit.state`.

##### Properties

###### api

```ts
api: SandkitEngineApi
```

Defined in: [sandkit/engine/index.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L133)

###### state

```ts
state: SandkitState
```

Defined in: [sandkit/engine/index.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L134)

***

#### RetroConsoleDisplay :id=sandkit.engine.retroconsoledisplay

<p class="smt-member-path"><code>sandkit.engine.RetroConsoleDisplay</code></p>
Defined in: [sandkit/engine/retro-console.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L14)

**`Internal`**

Low-resolution display buffer for a Retro Console game.

##### Properties

###### width

```ts
width: number
```

Defined in: [sandkit/engine/retro-console.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L15)

###### height

```ts
height: number
```

Defined in: [sandkit/engine/retro-console.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L16)

##### Methods

###### clearScreen()

```ts
clearScreen(value?: RetroConsolePixel): void
```

Defined in: [sandkit/engine/retro-console.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L18)

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

Defined in: [sandkit/engine/retro-console.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L20)

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

#### RetroConsoleInput :id=sandkit.engine.retroconsoleinput

<p class="smt-member-path"><code>sandkit.engine.RetroConsoleInput</code></p>
Defined in: [sandkit/engine/retro-console.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L24)

**`Internal`**

Directional input from the Retro Console controls.

##### Properties

###### x

```ts
x: number
```

Defined in: [sandkit/engine/retro-console.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L25)

###### y

```ts
y: number
```

Defined in: [sandkit/engine/retro-console.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L26)

***

#### RetroConsoleGameOptions :id=sandkit.engine.retroconsolegameoptions

<p class="smt-member-path"><code>sandkit.engine.RetroConsoleGameOptions</code></p>
Defined in: [sandkit/engine/retro-console.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L30)

**`Internal`**

Display size options for a registered Retro Console game.

##### Properties

###### width

```ts
width: number
```

Defined in: [sandkit/engine/retro-console.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L31)

###### height

```ts
height: number
```

Defined in: [sandkit/engine/retro-console.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L32)

***

#### RetroConsoleGame :id=sandkit.engine.retroconsolegame

<p class="smt-member-path"><code>sandkit.engine.RetroConsoleGame</code></p>
Defined in: [sandkit/engine/retro-console.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L36)

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

Defined in: [sandkit/engine/retro-console.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L37)

###### name

```ts
name: string
```

Defined in: [sandkit/engine/retro-console.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L38)

###### options?

```ts
optional options?: RetroConsoleGameOptions
```

Defined in: [sandkit/engine/retro-console.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L39)

##### Methods

###### init()

```ts
init(display: RetroConsoleDisplay): TState
```

Defined in: [sandkit/engine/retro-console.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L41)

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

Defined in: [sandkit/engine/retro-console.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L43)

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

Defined in: [sandkit/engine/retro-console.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L45)

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

#### RetroConsoleApi :id=sandkit.engine.retroconsoleapi

<p class="smt-member-path"><code>sandkit.engine.RetroConsoleApi</code></p>
Defined in: [sandkit/engine/retro-console.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L49)

**`Internal`**

`sandkit.engine.api.retroConsole` registration API.

##### Methods

###### registerGame()

```ts
registerGame<TState>(game: RetroConsoleGame<TState>): void
```

Defined in: [sandkit/engine/retro-console.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L51)

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

#### sandkit.engine.api :id=sandkit.engine.sandkitengineapi

```ts
SandkitEngineApi = object
```

Defined in: [sandkit/engine/index.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L32)

**`Internal`**

Composed `sandkit.engine.api` shape.

Overlap namespaces mirror [sandkit.api](api/sandkit.md#api-1) with state-first signatures.
Engine-only namespaces are declared under `api/`.

##### Properties

###### action

```ts
action: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L34)

###### authorization

```ts
authorization: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L35)

###### building

```ts
building: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L36)

###### camera

```ts
camera: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L37)

###### collector

```ts
collector: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L38)

###### constants

```ts
constants: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L39)

###### cooldown

```ts
cooldown: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L40)

###### discoveries

```ts
discoveries: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L41)

###### effects

```ts
effects: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L42)

###### elements

```ts
elements: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L43)

###### energy

```ts
energy: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L44)

###### events

```ts
events: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L45)

###### excavation

```ts
excavation: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L46)

###### fire

```ts
fire: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L47)

###### grid

```ts
grid: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L48)

###### hooks

```ts
hooks: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L49)

###### i18n

```ts
i18n: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L50)

###### input

```ts
input: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L51)

###### items

```ts
items: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L52)

###### lights

```ts
lights: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L53)

###### maps

```ts
maps: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L54)

###### patterns

```ts
patterns: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L55)

###### player

```ts
player: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L56)

###### processing

```ts
processing: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L57)

###### progression

```ts
progression: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L58)

###### projectiles

```ts
projectiles: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L59)

###### random

```ts
random: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L60)

###### raycast

```ts
raycast: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L61)

###### reactions

```ts
reactions: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L62)

###### rendering

```ts
rendering: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L63)

###### resources

```ts
resources: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L64)

###### scene

```ts
scene: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L65)

###### schedule

```ts
schedule: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L66)

###### signals

```ts
signals: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L67)

###### sound

```ts
sound: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L68)

###### sprites

```ts
sprites: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L69)

###### storage

```ts
storage: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L70)

###### structures

```ts
structures: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L71)

###### tech

```ts
tech: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L72)

###### terrains

```ts
terrains: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L73)

###### tools

```ts
tools: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L74)

###### triggers

```ts
triggers: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L75)

###### ui

```ts
ui: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L76)

###### upgrades

```ts
upgrades: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L77)

###### utils

```ts
utils: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L78)

###### workers

```ts
workers: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L79)

###### world

```ts
world: EngineOverlapNs
```

Defined in: [sandkit/engine/index.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L80)

###### augments

```ts
augments: augments
```

Defined in: [sandkit/engine/index.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L83)

###### auralite

```ts
auralite: auralite
```

Defined in: [sandkit/engine/index.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L84)

###### blueprints

```ts
blueprints: blueprints
```

Defined in: [sandkit/engine/index.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L85)

###### clipboard

```ts
clipboard: clipboard
```

Defined in: [sandkit/engine/index.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L86)

###### colorPicker

```ts
colorPicker: colorPicker
```

Defined in: [sandkit/engine/index.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L87)

###### coloringTool

```ts
coloringTool: coloringTool
```

Defined in: [sandkit/engine/index.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L88)

###### conveyors

```ts
conveyors: conveyors
```

Defined in: [sandkit/engine/index.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L89)

###### debug

```ts
debug: debug
```

Defined in: [sandkit/engine/index.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L90)

###### drones

```ts
drones: drones
```

Defined in: [sandkit/engine/index.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L91)

###### entities

```ts
entities: entities
```

Defined in: [sandkit/engine/index.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L92)

###### extensions

```ts
extensions: extensions
```

Defined in: [sandkit/engine/index.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L93)

###### factory

```ts
factory: factory
```

Defined in: [sandkit/engine/index.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L94)

###### foliage

```ts
foliage: foliage
```

Defined in: [sandkit/engine/index.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L95)

###### foundationColorPicker

```ts
foundationColorPicker: foundationColorPicker
```

Defined in: [sandkit/engine/index.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L96)

###### game

```ts
game: game
```

Defined in: [sandkit/engine/index.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L97)

###### heatTransfer

```ts
heatTransfer: heatTransfer
```

Defined in: [sandkit/engine/index.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L98)

###### launchers

```ts
launchers: launchers
```

Defined in: [sandkit/engine/index.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L99)

###### lightColorPicker

```ts
lightColorPicker: lightColorPicker
```

Defined in: [sandkit/engine/index.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L100)

###### matters

```ts
matters: matters
```

Defined in: [sandkit/engine/index.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L101)

###### misc

```ts
misc: misc
```

Defined in: [sandkit/engine/index.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L102)

###### portals

```ts
portals: portals
```

Defined in: [sandkit/engine/index.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L103)

###### prefabData

```ts
prefabData: prefabData
```

Defined in: [sandkit/engine/index.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L104)

###### prefabDecor

```ts
prefabDecor: prefabDecor
```

Defined in: [sandkit/engine/index.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L105)

###### prefabulator

```ts
prefabulator: prefabulator
```

Defined in: [sandkit/engine/index.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L106)

###### prismaline

```ts
prismaline: prismaline
```

Defined in: [sandkit/engine/index.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L107)

###### prismite

```ts
prismite: prismite
```

Defined in: [sandkit/engine/index.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L108)

###### queue

```ts
queue: queue
```

Defined in: [sandkit/engine/index.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L109)

###### shadows

```ts
shadows: shadows
```

Defined in: [sandkit/engine/index.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L110)

###### strataform

```ts
strataform: strataform
```

Defined in: [sandkit/engine/index.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L111)

###### swarmConsole

```ts
swarmConsole: swarmConsole
```

Defined in: [sandkit/engine/index.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L112)

###### sweeperDrone

```ts
sweeperDrone: sweeperDrone
```

Defined in: [sandkit/engine/index.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L113)

###### teleportZones

```ts
teleportZones: teleportZones
```

Defined in: [sandkit/engine/index.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L114)

###### tutorialBuild

```ts
tutorialBuild: tutorialBuild
```

Defined in: [sandkit/engine/index.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L115)

###### usageTracker

```ts
usageTracker: usageTracker
```

Defined in: [sandkit/engine/index.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L116)

###### wall

```ts
wall: wall
```

Defined in: [sandkit/engine/index.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L117)

###### workerLocal

```ts
workerLocal: workerLocal
```

Defined in: [sandkit/engine/index.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L118)

###### config

```ts
config: EngineFn
```

Defined in: [sandkit/engine/index.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L119)

###### extend

```ts
extend: EngineFn
```

Defined in: [sandkit/engine/index.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L120)

###### retroConsole

```ts
retroConsole: RetroConsoleApi
```

Defined in: [sandkit/engine/index.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/index.d.ts#L121)

***

#### RetroConsolePixel :id=sandkit.engine.retroconsolepixel

```ts
sandkit.engine.RetroConsolePixel = boolean | number
```

Defined in: [sandkit/engine/retro-console.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L11)

**`Internal`**

Pixel value for the Retro Console framebuffer.

***

#### sandkit.state :id=sandkit.engine.sandkitstate

```ts
SandkitState = object
```

Defined in: [sandkit/engine/state.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L12)

**`Internal`**

Live game state exposed on `sandkit.engine.state`.

##### Properties

###### environment

```ts
environment: object
```

Defined in: [sandkit/engine/state.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L13)

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

Defined in: [sandkit/engine/state.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L18)

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

Defined in: [sandkit/engine/state.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L28)

###### shared

```ts
shared: unknown
```

Defined in: [sandkit/engine/state.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L29)

###### store

```ts
store: unknown
```

Defined in: [sandkit/engine/state.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/state.d.ts#L30)

---

## Sandkit API types

TypeScript declarations and community docs for the live Sandustry `sandkit` modding API.
Package name: `@sandustry-modding/types`.

Originally a fork of [flamableassassin/sandustry-modding-types](https://github.com/flamableassassin/sandustry-modding-types/).

The [docs site](https://sandustry-modding.github.io/SandustryTypes/) ships API reference pages, modding guides, and JSON Schema for `modinfo.json` / `patches.json`.
Folder layout mirrors runtime shape so you can jump from code to the matching `.d.ts` path.

### Runtime map

| Path                            | Runtime object                                                          |
| ------------------------------- | ----------------------------------------------------------------------- |
| `src/sandkit/api/`              | `sandkit.api` (main thread)                                             |
| `src/sandkit/engine/api/`       | `sandkit.engine.api`                                                    |
| `src/sandkit/engine/state.d.ts` | `sandkit.engine.state` / `sandkit.state`                                |
| `src/sandkit/enums/`            | `sandkit.enums`                                                         |
| `src/sandkit/react.d.ts`        | `sandkit.react`                                                         |
| `src/sandkit/index.d.ts`        | Composed `Sandkit` root type                                            |
| `src/global.d.ts`               | Ambient `sandkit` free variable and type aliases                        |
| `src/worker/`                   | Worker-thread `sandkit.api` (see `WorkerSandkitApi`)                    |
| `src/shared/`                   | Internal base shapes reused by main and worker declarations             |
| `src/configs/`                  | `modinfo.json` / `patches.json` TypeScript types (not a runtime object) |
| `src/electron/`                 | Renderer preload bridge (`window.electron`; not a runtime `sandkit` object) |

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

#### Ambient types (preferred)

Pull the host `sandkit` ambient into your project with a triple-slash reference. Put it at the top of `main.js` / `worker.js`, or in a small ambient `.d.ts` that your `tsconfig` / `jsconfig` includes:

```ts
/// <reference types="@sandustry-modding/types" />
```

That works in `.ts` and `.js` (including checked JS with `checkJs`).

Do **not** list `@sandustry-modding/types` under `compilerOptions.types`. That list only loads packages from `node_modules/@types` (for example `"react"` or `"node"`).

Deep declaration modules are also available, for example:

```ts
import type { RetroConsoleGame } from "@sandustry-modding/types/sandkit/engine";
import type { ModInfo, BundlePatch } from "@sandustry-modding/types/configs";
```

### Usage

- **Main mod (`main.js`):** use the ambient free name `sandkit`. Type aliases such as `SandkitApi` are global; do not import a value binding.
- **Worker mod (`worker.js`):** type `sandkit.api` as `WorkerSandkitApi`. Worker and main APIs overlap but are not interchangeable.
- **Shared folder:** not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend.
- **Configs folder:** `modinfo.json` and `patches.json` TypeScript types (`@sandustry-modding/types/configs`). Not part of the live `sandkit` object. JSON Schema: https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json and https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json
- **Electron folder:** renderer preload bridge (`@sandustry-modding/types/electron`). Ambient `electron` on `@sandustry-modding/types`. Docs: [Electron bridge](https://sandustry-modding.github.io/SandustryTypes/#/electron-bridge).

### Maintaining types

Edit `.d.ts` files under `src/`. Regenerate the Docsify API reference and JSON Schema after JSDoc or config-type changes.

`npm run generate` merges `scripts/api-gen/overrides.json`, the official [Sandkit API](https://sandustry.com/sandkit.html) HTML, and `src/sandkit/api/` declarations.
It writes `scripts/api-gen/generated/api-catalog.json`, refreshes `scripts/api-gen/generated/namespace-summaries.json`, and reports gaps in `docs/generated/api-gaps.md`.
Edit namespace descriptions and alias mappings in `scripts/api-gen/overrides.json`.

### Docs site

Guides live under `docs/guides/` (getting started, mod lifecycle, manifest, patches, workers, Workshop).
Regenerate the Docsify API reference and JSON Schema from these declarations:

```bash
npm run generate                  # catalog + API markdown + docs/schemas/*.json
npm run generate -- --catalog     # overrides + official HTML + declarations → catalog + gaps
npm run generate -- --schemas     # JSON Schema only
npm run docs:archive-sandkit      # Fetch official sandkit.html into docs/official-api/
```

Output lands in `docs/api/` and `docs/schemas/`.
Browse namespaces from Search on the docs site.
The combined page is `docs/full.md`.
`npm run docs` runs that step, then serves the docs site.
`npm run validate` fails when committed schemas do not match `src/configs/`.

`npm run docs:archive-sandkit` asks for a base file name, then writes `docs/official-api/<name>.md` from https://sandustry.com/sandkit.html.

---
