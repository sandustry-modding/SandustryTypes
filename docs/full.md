# Sandkit API (full) <!-- {docsify-ignore-all} -->

Every generated API page on one document. Use the [Module index](modules.md) when you only need one namespace.

## sandkit

Live `sandkit` object — shape, ambient binding docs, and nested bags.

Mirrors on-disk `src/sandkit/` and the host free variable: `api`, `engine`,
`enums`, `react`, `state`. Prefer the free name `sandkit` in mod code
(`src/global.d.ts`); do not import a value binding.

### Type Aliases <!-- {docsify-ignore} -->

#### SandkitApi :id=sandkit.sandkitapi

<p class="smt-member-path"><code>sandkit.SandkitApi</code></p>

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

#### Sandkit :id=sandkit.sandkit

<p class="smt-member-path"><code>sandkit.Sandkit</code></p>

```ts
Sandkit = object
```

Defined in: [sandkit/index.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L22)

Shape of the host-injected `sandkit` free variable in mod `main.js`.

##### Properties

###### api

```ts
api: SandkitApi
```

Defined in: [sandkit/index.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L24)

Public mod API. See [sandkit.api](#api-1).

###### apiVersion

```ts
apiVersion: number
```

Defined in: [sandkit/index.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L26)

Sandkit API version number (live value is `1`).

###### engine

```ts
engine: SandkitEngine
```

Defined in: [sandkit/index.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L31)

**`Internal`**

State-first internals. See [SandkitEngine](api/sandkit.engine.md#sandkitengine).

###### enums

```ts
enums: SandkitEnums
```

Defined in: [sandkit/index.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L33)

Runtime enum bags. See [sandkit.enums](#enums-1).

###### react

```ts
react: SandkitReact
```

Defined in: [sandkit/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L35)

Host React package. See [SandkitReact](api/sandkit.react.md#sandkitreact).

###### state

```ts
state: SandkitState
```

Defined in: [sandkit/index.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/index.d.ts#L40)

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

#### SandkitEngine :id=sandkit.sandkitengine

<p class="smt-member-path"><code>sandkit.SandkitEngine</code></p>

Re-exports [SandkitEngine](api/sandkit.engine.md#sandkitengine)

***

#### SandkitEngineApi :id=sandkit.sandkitengineapi

<p class="smt-member-path"><code>sandkit.SandkitEngineApi</code></p>

Re-exports [SandkitEngineApi](api/sandkit.engine.md#sandkitengineapi)

***

#### RetroConsoleApi :id=sandkit.retroconsoleapi

<p class="smt-member-path"><code>sandkit.RetroConsoleApi</code></p>

Re-exports [RetroConsoleApi](api/sandkit.engine.md#retroconsoleapi)

***

#### SandkitState :id=sandkit.sandkitstate

<p class="smt-member-path"><code>sandkit.SandkitState</code></p>

Re-exports [SandkitState](api/sandkit.engine.md#sandkitstate)

***

#### SandkitEnums :id=sandkit.sandkitenums

<p class="smt-member-path"><code>sandkit.SandkitEnums</code></p>

Re-exports [SandkitEnums](api/sandkit.enums.md#sandkitenums)

***

#### SandkitReact :id=sandkit.sandkitreact

<p class="smt-member-path"><code>sandkit.SandkitReact</code></p>

Re-exports [SandkitReact](api/sandkit.react.md#sandkitreact)

---

## sandkit.api.action

`sandkit.api.action` — active hotbar action and custom handler data.
Main thread only.

### Type Aliases <!-- {docsify-ignore} -->

#### Action :id=sandkit.api.action.action

<p class="smt-member-path"><code>sandkit.api.action.Action</code></p>

```ts
Action = AssetRef
```

Defined in: [sandkit/api/action.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L9)

Hotbar action asset reference.

### Functions <!-- {docsify-ignore} -->

#### getActive() :id=sandkit.api.action.getactive

<p class="smt-member-path"><code>sandkit.api.action.getActive()</code></p>

```ts
getActive(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L15)

Return the action slot the player is using.

##### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Active hotbar action reference.

***

#### getSelected() :id=sandkit.api.action.getselected

<p class="smt-member-path"><code>sandkit.api.action.getSelected()</code></p>

```ts
getSelected(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L21)

Return the action slot selected in the hotbar.

##### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Selected hotbar action reference.

***

#### setCustomData() :id=sandkit.api.action.setcustomdata

<p class="smt-member-path"><code>sandkit.api.action.setCustomData()</code></p>

```ts
setCustomData<Input>(data: Input): void
```

Defined in: [sandkit/api/action.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L27)

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

#### AssetProviderV1 :id=sandkit.api.assets.assetproviderv1

<p class="smt-member-path"><code>sandkit.api.assets.AssetProviderV1</code></p>

```ts
AssetProviderV1 = object
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

<p class="smt-member-path"><code>sandkit.api.assets.getUrl()</code></p>

```ts
getUrl(relativePath: string): string
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

<p class="smt-member-path"><code>sandkit.api.assets.getSelectedProvider()</code></p>

```ts
getSelectedProvider(kind: string): AssetProviderV1 | null
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

<p class="smt-member-path"><code>sandkit.api.assets.selectProvider()</code></p>

```ts
selectProvider(kind: string, providerId: string | null): boolean
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

<p class="smt-member-path"><code>sandkit.api.authorization.canBuildAtCell()</code></p>

```ts
canBuildAtCell(...args: CellCoordinates): boolean
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

<p class="smt-member-path"><code>sandkit.api.authorization.canGrabAtCell()</code></p>

```ts
canGrabAtCell(...args: CellCoordinates): boolean
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

<p class="smt-member-path"><code>sandkit.api.authorization.canUseTool()</code></p>

```ts
canUseTool(player: Player, isFlamethrower?: boolean): boolean
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

<p class="smt-member-path"><code>sandkit.api.authorization.canUseToolAtCell()</code></p>

```ts
canUseToolAtCell(...args: [number, number, boolean]): boolean
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

<p class="smt-member-path"><code>sandkit.api.authorization.getZoneIdAtCell()</code></p>

```ts
getZoneIdAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/authorization.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L47)

Return the authorization zone id at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`number`

Numeric zone id for the cell.

***

#### getPlayerZoneId() :id=sandkit.api.authorization.getplayerzoneid

<p class="smt-member-path"><code>sandkit.api.authorization.getPlayerZoneId()</code></p>

```ts
getPlayerZoneId(): number
```

Defined in: [sandkit/api/authorization.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L53)

Return the authorization zone id for the player.

##### Returns

`number`

Numeric zone id for the player's current position.

---

## sandkit.api.blueprints

Structure blueprint serialize and localize helpers.

Available as `sandkit.api.blueprints`.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.blueprints`

### Interfaces <!-- {docsify-ignore} -->

#### BlueprintStructure :id=sandkit.api.blueprints.blueprintstructure

<p class="smt-member-path"><code>sandkit.api.blueprints.BlueprintStructure</code></p>

Defined in: [sandkit/api/blueprints.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L28)

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

Defined in: [sandkit/api/blueprints.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L29)

###### y

```ts
y: number
```

Defined in: [sandkit/api/blueprints.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L30)

### Functions <!-- {docsify-ignore} -->

#### serializeStructures() :id=sandkit.api.blueprints.serializestructures

<p class="smt-member-path"><code>sandkit.api.blueprints.serializeStructures()</code></p>

```ts
serializeStructures(structures: readonly Structure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L17)

Serialize live structure instances into blueprint records.

##### Parameters

###### structures

readonly [`Structure`](api/sandkit.api.structures.worker.md#structure)[]

Structure instances to encode.

##### Returns

[`BlueprintStructure`](#blueprintstructure)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.blueprints.serializeStructures`

***

#### localizeStructures() :id=sandkit.api.blueprints.localizestructures

<p class="smt-member-path"><code>sandkit.api.blueprints.localizeStructures()</code></p>

```ts
localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L25)

Localize blueprint structure records for placement.

##### Parameters

###### structures

readonly [`BlueprintStructure`](#blueprintstructure)[]

Blueprint structure records to localize.

##### Returns

[`BlueprintStructure`](#blueprintstructure)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.blueprints.localizeStructures`

---

## sandkit.api.building

`sandkit.api.building` — structure placement and built-in structure types.
Main thread only.

### Enumerations <!-- {docsify-ignore} -->

- [StructureType](api/sandkit.api.building.StructureType.md)

### Functions <!-- {docsify-ignore} -->

#### getSnappedPositionAtCell() :id=sandkit.api.building.getsnappedpositionatcell

<p class="smt-member-path"><code>sandkit.api.building.getSnappedPositionAtCell()</code></p>

```ts
getSnappedPositionAtCell(...args: CellCoordinates): Vector2
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

<p class="smt-member-path"><code>sandkit.api.building.isBlockedAtCell()</code></p>

```ts
isBlockedAtCell(...args: CellCoordinates): boolean
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

<p class="smt-member-path"><code>sandkit.api.building.cancelPlacement()</code></p>

```ts
cancelPlacement(): void
```

Defined in: [sandkit/api/building.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L84)

Cancel the current structure placement preview.

##### Returns

`void`

***

#### selectStructure() :id=sandkit.api.building.selectstructure

<p class="smt-member-path"><code>sandkit.api.building.selectStructure()</code></p>

```ts
selectStructure(structureTypeOrId: StructureRef | StructureType): StructureRef | null
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

<p class="smt-member-path"><code>sandkit.api.camera.snapToPlayer()</code></p>

```ts
snapToPlayer(): void
```

Defined in: [sandkit/api/camera.d.ts:7](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L7)

Snap the camera to the player position.

##### Returns

`void`

***

#### setFocusAtWorld() :id=sandkit.api.camera.setfocusatworld

<p class="smt-member-path"><code>sandkit.api.camera.setFocusAtWorld()</code></p>

```ts
setFocusAtWorld(worldX: number, worldY: number): boolean
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

<p class="smt-member-path"><code>sandkit.api.camera.releaseFocus()</code></p>

```ts
releaseFocus(options?: object): boolean
```

Defined in: [sandkit/api/camera.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L22)

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

#### getValueFromCellId() :id=sandkit.api.collector.getvaluefromcellid

<p class="smt-member-path"><code>sandkit.api.collector.getValueFromCellId()</code></p>

```ts
getValueFromCellId(cellId: CellId): number
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

<p class="smt-member-path"><code>sandkit.api.collector.getValueByType()</code></p>

```ts
getValueByType(elementType: ElementType): number
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

<p class="smt-member-path"><code>sandkit.api.collector.isCellIdCollectable()</code></p>

```ts
isCellIdCollectable(cellId: CellId): boolean
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

<p class="smt-member-path"><code>sandkit.api.collector.isCellIdCollectableForSprite()</code></p>

```ts
isCellIdCollectableForSprite(cellId: CellId): boolean
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

<p class="smt-member-path"><code>sandkit.api.collector.notifyPickupAtCell()</code></p>

```ts
notifyPickupAtCell(...args: CellCoordinates): void
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

<p class="smt-member-path"><code>sandkit.api.constants.physics</code></p>

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

<p class="smt-member-path"><code>sandkit.api.cooldown.check()</code></p>

```ts
check(cooldown: Cooldown, overrideTime?: number): boolean
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

<p class="smt-member-path"><code>sandkit.api.cooldown.isReady()</code></p>

```ts
isReady(cooldown: Cooldown, overrideTime?: number): boolean
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

<p class="smt-member-path"><code>sandkit.api.discoveries.addElementByType()</code></p>

```ts
addElementByType(elementType: ElementType): void
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

<p class="smt-member-path"><code>sandkit.api.discoveries.addTerrainByType()</code></p>

```ts
addTerrainByType(terrainType: TerrainType): void
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

Defined in: [sandkit/api/effects.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L97)

Options for laser beam effects.

##### Properties

###### width?

```ts
optional width?: number
```

Defined in: [sandkit/api/effects.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L99)

Beam width in pixels.

###### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/effects.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L101)

Beam brightness multiplier.

###### color?

```ts
optional color?: number
```

Defined in: [sandkit/api/effects.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L103)

Beam color as a packed integer.

###### glow?

```ts
optional glow?: boolean
```

Defined in: [sandkit/api/effects.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L105)

When true, draws a glow around the beam.

***

#### LaserEffectHandle :id=sandkit.api.effects.lasereffecthandle

<p class="smt-member-path"><code>sandkit.api.effects.LaserEffectHandle</code></p>

Defined in: [sandkit/api/effects.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L109)

Handle returned by createLaserAtWorld.

##### Methods

###### destroy()

```ts
destroy(): void
```

Defined in: [sandkit/api/effects.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L111)

Removes the laser from the scene.

###### Returns

`void`

***

#### DistortionEffectOptions :id=sandkit.api.effects.distortioneffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.DistortionEffectOptions</code></p>

Defined in: [sandkit/api/effects.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L115)

Options for distortion wave effects.

##### Properties

###### style?

```ts
optional style?: "implode" | "explode"
```

Defined in: [sandkit/api/effects.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L117)

Distortion style: implode or explode.

###### duration?

```ts
optional duration?: number
```

Defined in: [sandkit/api/effects.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L119)

Effect duration in seconds.

###### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [sandkit/api/effects.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L121)

Maximum radius of the wave.

###### intensity?

```ts
optional intensity?: number
```

Defined in: [sandkit/api/effects.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L123)

Visual intensity of the distortion.

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/effects.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L125)

RGBA color components for the effect.

***

#### EffectOptions :id=sandkit.api.effects.effectoptions

<p class="smt-member-path"><code>sandkit.api.effects.EffectOptions</code></p>

Defined in: [shared/api/effects.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L35)

Generic duration and radius options for world effects.

##### Properties

###### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L36)

###### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [shared/api/effects.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L37)

###### intensity?

```ts
optional intensity?: number
```

Defined in: [shared/api/effects.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L38)

***

#### TemporaryLightOptions :id=sandkit.api.effects.temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.effects.TemporaryLightOptions</code></p>

Defined in: [shared/api/effects.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L41)

Options for [createLightAtWorld](#createlightatworld).

##### Properties

###### brightness?

```ts
optional brightness?: number
```

Defined in: [shared/api/effects.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L42)

###### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L43)

###### durationMs?

```ts
optional durationMs?: number
```

Defined in: [shared/api/effects.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L44)

###### size?

```ts
optional size?: number
```

Defined in: [shared/api/effects.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L45)

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [shared/api/effects.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L46)

###### decay

```ts
decay: number
```

Defined in: [shared/api/effects.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L48)

Light decay rate after spawn.

###### unclamped?

```ts
optional unclamped?: boolean
```

Defined in: [shared/api/effects.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L49)

###### skipDedup?

```ts
optional skipDedup?: boolean
```

Defined in: [shared/api/effects.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L50)

###### useLightZones?

```ts
optional useLightZones?: boolean
```

Defined in: [shared/api/effects.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L51)

###### noopIfFull?

```ts
optional noopIfFull?: boolean
```

Defined in: [shared/api/effects.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L52)

###### priority?

```ts
optional priority?: number
```

Defined in: [shared/api/effects.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L53)

###### dedupKey

```ts
dedupKey: string
```

Defined in: [shared/api/effects.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L55)

Dedupe key when the light pool is full or dedup is enabled.

***

#### ParticleEffectOptions :id=sandkit.api.effects.particleeffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.ParticleEffectOptions</code></p>

Defined in: [shared/api/effects.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L58)

Options for [createParticlesAtWorld](#createparticlesatworld).

##### Properties

###### count?

```ts
optional count?: number
```

Defined in: [shared/api/effects.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L59)

###### velocity?

```ts
optional velocity?: Vector2
```

Defined in: [shared/api/effects.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L60)

###### minSpeed?

```ts
optional minSpeed?: number
```

Defined in: [shared/api/effects.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L61)

###### maxSpeed?

```ts
optional maxSpeed?: number
```

Defined in: [shared/api/effects.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L62)

###### color?

```ts
optional color?: number
```

Defined in: [shared/api/effects.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L64)

Hex code. No alpha.

###### minSize?

```ts
optional minSize?: number
```

Defined in: [shared/api/effects.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L65)

###### maxSize?

```ts
optional maxSize?: number
```

Defined in: [shared/api/effects.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L66)

###### minLifetime?

```ts
optional minLifetime?: number
```

Defined in: [shared/api/effects.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L67)

###### maxLifetime?

```ts
optional maxLifetime?: number
```

Defined in: [shared/api/effects.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L68)

###### background?

```ts
optional background?: boolean
```

Defined in: [shared/api/effects.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L69)

###### imageName?

```ts
optional imageName?: string
```

Defined in: [shared/api/effects.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L70)

###### fadeOutOnly?

```ts
optional fadeOutOnly?: boolean
```

Defined in: [shared/api/effects.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L71)

###### fadeStart?

```ts
optional fadeStart?: number
```

Defined in: [shared/api/effects.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L72)

###### fadeEnd?

```ts
optional fadeEnd?: number
```

Defined in: [shared/api/effects.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L73)

###### damp?

```ts
optional damp?: number
```

Defined in: [shared/api/effects.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L74)

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.effects.createatworld

<p class="smt-member-path"><code>sandkit.api.effects.createAtWorld()</code></p>

```ts
createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L24)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.effects.createAtWorld`

***

#### ~~createEffectAtWorld()~~

```ts
createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L35)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.effects.createAtWorld`

***

#### ~~createLightAtWorld()~~

```ts
createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object
```

Defined in: [sandkit/api/effects.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L56)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.lights.temporary.createAtWorld`

***

#### createDistortionWaveAtWorld() :id=sandkit.api.effects.createdistortionwaveatworld

<p class="smt-member-path"><code>sandkit.api.effects.createDistortionWaveAtWorld()</code></p>

```ts
createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L70)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.effects.createDistortionWaveAtWorld`

***

#### createLaserAtWorld() :id=sandkit.api.effects.createlaseratworld

<p class="smt-member-path"><code>sandkit.api.effects.createLaserAtWorld()</code></p>

```ts
createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle
```

Defined in: [sandkit/api/effects.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L82)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.effects.createLaserAtWorld`

***

#### ~~removeLightById()~~

```ts
removeLightById(lightId: number): void
```

Defined in: [sandkit/api/effects.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L94)

##### Parameters

###### lightId

`number`

##### Returns

`void`

##### Deprecated

Use [lights.temporary.removeById](api/sandkit.api.lights.temporary.md#removebyid) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.lights.temporary.removeById`

***

#### createParticlesAtWorld() :id=sandkit.api.effects.createparticlesatworld

<p class="smt-member-path"><code>sandkit.api.effects.createParticlesAtWorld()</code></p>

```ts
createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void
```

Defined in: [shared/api/effects.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L24)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements`

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

Defined in: [shared/api/elements.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L80)

Options for [createAtCell](#createatcell), replace, and related create helpers.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.createAtCell`

##### Properties

###### data?

```ts
optional data?: Record<string, unknown>
```

Defined in: [shared/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L82)

Initial element data bag.

###### density?

```ts
optional density?: number
```

Defined in: [shared/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L84)

Override element density.

###### durationTicks?

```ts
optional durationTicks?: number
```

Defined in: [shared/api/elements.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L90)

Set both max and remaining duration in simulation ticks.

###### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.createAtCell`

###### ~~duration?~~

```ts
optional duration?: number
```

Defined in: [shared/api/elements.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L95)

###### Deprecated

Use [durationTicks](#durationticks) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `options.durationTicks`

###### isFreeFalling?

```ts
optional isFreeFalling?: boolean
```

Defined in: [shared/api/elements.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L97)

Override free-fall state on spawn.

###### dataFields?

```ts
optional dataFields?: object
```

Defined in: [shared/api/elements.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L99)

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

Defined in: [shared/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L106)

Spawn as a particle with the given velocity.

###### velocity

```ts
velocity: Vector2
```

###### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L110)

Skip collector accounting when placing the element.

***

#### ElementRemovalOptions :id=sandkit.api.elements.elementremovaloptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementRemovalOptions</code></p>

Defined in: [shared/api/elements.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L118)

Options for element removal helpers.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.removeAtCell`

##### Properties

###### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L120)

Skip collector accounting when removing the element.

### Type Aliases <!-- {docsify-ignore} -->

#### InteractionDestroyer :id=sandkit.api.elements.interactiondestroyer

<p class="smt-member-path"><code>sandkit.api.elements.InteractionDestroyer</code></p>

```ts
InteractionDestroyer = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionStructure</code></p>

```ts
InteractionStructure = InteractionStructureMetadata & object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionEntity</code></p>

```ts
InteractionEntity = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionFlammable</code></p>

```ts
InteractionFlammable = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionMeltable</code></p>

```ts
InteractionMeltable = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionFreezable</code></p>

```ts
InteractionFreezable = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionCustom</code></p>

```ts
InteractionCustom = InteractionStructureMetadata & object
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

<p class="smt-member-path"><code>sandkit.api.elements.Interaction</code></p>

```ts
Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

Defined in: [sandkit/api/elements.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L129)

Union of element interaction kinds for tool and structure logic.

***

#### ElementType :id=sandkit.api.elements.elementtype

<p class="smt-member-path"><code>sandkit.api.elements.ElementType</code></p>

```ts
ElementType = ElementType | TaggedNumber<"elementType">
```

Defined in: [shared/api/elements.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L20)

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; [getTypeById](#gettypebyid) returns a tagged handle.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements`

***

#### ElementId :id=sandkit.api.elements.elementid

<p class="smt-member-path"><code>sandkit.api.elements.ElementId</code></p>

```ts
ElementId = LooseString<never>
```

Defined in: [shared/api/elements.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L27)

Mod or built-in element string id.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements`

***

#### ElementRef :id=sandkit.api.elements.elementref

<p class="smt-member-path"><code>sandkit.api.elements.ElementRef</code></p>

```ts
ElementRef = ElementType | ElementId
```

Defined in: [shared/api/elements.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L34)

Type handle or string id accepted by lookup helpers.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements`

***

#### ElementDefinition :id=sandkit.api.elements.elementdefinition

<p class="smt-member-path"><code>sandkit.api.elements.ElementDefinition</code></p>

```ts
ElementDefinition = object
```

Defined in: [shared/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L57)

Mod-registered element definition snapshot.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.register`

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

###### getExtraProps?

```ts
optional getExtraProps?: () => object
```

Defined in: [shared/api/elements.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L72)

###### Returns

`object`

###### data

```ts
data: Record<PropertyKey, any>
```

### Functions <!-- {docsify-ignore} -->

#### getRegisteredTypes() :id=sandkit.api.elements.getregisteredtypes

<p class="smt-member-path"><code>sandkit.api.elements.getRegisteredTypes()</code></p>

```ts
getRegisteredTypes(): ElementType[]
```

Defined in: [sandkit/api/elements.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L142)

Returns all registered element type ids.

##### Returns

[`ElementType`](#elementtype)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getRegisteredTypes`

***

#### register() :id=sandkit.api.elements.register

<p class="smt-member-path"><code>sandkit.api.elements.register()</code></p>

```ts
register(definition: ElementDefinition): object
```

Defined in: [sandkit/api/elements.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L151)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.register`

***

#### updateDefinition() :id=sandkit.api.elements.updatedefinition

<p class="smt-member-path"><code>sandkit.api.elements.updateDefinition()</code></p>

```ts
updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

Defined in: [sandkit/api/elements.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L160)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.updateDefinition`

***

#### addInteractionInfo() :id=sandkit.api.elements.addinteractioninfo

<p class="smt-member-path"><code>sandkit.api.elements.addInteractionInfo()</code></p>

```ts
addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

Defined in: [sandkit/api/elements.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L169)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.addInteractionInfo`

***

#### getNameByType() :id=sandkit.api.elements.getnamebytype

<p class="smt-member-path"><code>sandkit.api.elements.getNameByType()</code></p>

```ts
getNameByType(elementType: ElementType): string
```

Defined in: [sandkit/api/elements.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L177)

Returns the display name for an element type.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

`string`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getNameByType`

***

#### findFreeCellInStructure() :id=sandkit.api.elements.findfreecellinstructure

<p class="smt-member-path"><code>sandkit.api.elements.findFreeCellInStructure()</code></p>

```ts
findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null
```

Defined in: [sandkit/api/elements.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L188)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.findFreeCellInStructure`

***

#### createAtCell() :id=sandkit.api.elements.createatcell

<p class="smt-member-path"><code>sandkit.api.elements.createAtCell()</code></p>

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L199)

Create an element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.createAtCell`

***

#### ~~createAtCellWhenIdle()~~

```ts
createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L205)

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### Deprecated

Use [createAtCell](#createatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.createAtCell`

***

#### replaceAtCell() :id=sandkit.api.elements.replaceatcell

<p class="smt-member-path"><code>sandkit.api.elements.replaceAtCell()</code></p>

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L216)

Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.replaceAtCell`

***

#### ~~replaceAtCellWhenIdle()~~

```ts
replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:222](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L222)

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

##### Returns

`void`

##### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.replaceAtCell`

***

#### removeAtCell() :id=sandkit.api.elements.removeatcell

<p class="smt-member-path"><code>sandkit.api.elements.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:232](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L232)

Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.removeAtCell`

***

#### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L238)

##### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

##### Returns

`void`

##### Deprecated

Use [removeAtCell](#removeatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.removeAtCell`

***

#### teleportBetweenCells() :id=sandkit.api.elements.teleportbetweencells

<p class="smt-member-path"><code>sandkit.api.elements.teleportBetweenCells()</code></p>

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:249](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L249)

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.teleportBetweenCells`

***

#### ~~teleportBetweenCellsWhenIdle()~~

```ts
teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L255)

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.teleportBetweenCells`

***

#### setVelocityAtCell() :id=sandkit.api.elements.setvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.setVelocityAtCell()</code></p>

```ts
setVelocityAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:265](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L265)

Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setVelocityAtCell`

***

#### ~~setVelocityAtCellWhenIdle()~~

```ts
setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:271](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L271)

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### Deprecated

Use [setVelocityAtCell](#setvelocityatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.setVelocityAtCell`

***

#### addParticleVelocityAtCell() :id=sandkit.api.elements.addparticlevelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.addParticleVelocityAtCell()</code></p>

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:282](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L282)

Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.addParticleVelocityAtCell`

***

#### ~~addParticleVelocityAtCellWhenIdle()~~

```ts
addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:288](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L288)

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

##### Returns

`void`

##### Deprecated

Use [addParticleVelocityAtCell](#addparticlevelocityatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.addParticleVelocityAtCell`

***

#### convertToParticleAtCell() :id=sandkit.api.elements.converttoparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertToParticleAtCell()</code></p>

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L298)

Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.convertToParticleAtCell`

***

#### ~~convertToParticleAtCellWhenIdle()~~

```ts
convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L304)

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`void`

##### Deprecated

Use [convertToParticleAtCell](#converttoparticleatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.convertToParticleAtCell`

***

#### convertFromParticleAtCell() :id=sandkit.api.elements.convertfromparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertFromParticleAtCell()</code></p>

```ts
convertFromParticleAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:313](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L313)

Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.convertFromParticleAtCell`

***

#### ~~convertFromParticleAtCellWhenIdle()~~

```ts
convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:319](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L319)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### Deprecated

Use [convertFromParticleAtCell](#convertfromparticleatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.convertFromParticleAtCell`

***

#### setDataFieldAtCell() :id=sandkit.api.elements.setdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDataFieldAtCell()</code></p>

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:330](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L330)

Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setDataFieldAtCell`

***

#### ~~setDataFieldAtCellWhenIdle()~~

```ts
setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:336](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L336)

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

##### Returns

`void`

##### Deprecated

Use [setDataFieldAtCell](#setdatafieldatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.setDataFieldAtCell`

***

#### refreshColorAtCell() :id=sandkit.api.elements.refreshcoloratcell

<p class="smt-member-path"><code>sandkit.api.elements.refreshColorAtCell()</code></p>

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:345](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L345)

Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.refreshColorAtCell`

***

#### ~~refreshColorAtCellWhenIdle()~~

```ts
refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L351)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### Deprecated

Use [refreshColorAtCell](#refreshcoloratcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.refreshColorAtCell`

***

#### setPhysicsAtCell() :id=sandkit.api.elements.setphysicsatcell

<p class="smt-member-path"><code>sandkit.api.elements.setPhysicsAtCell()</code></p>

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:361](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L361)

Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setPhysicsAtCell`

***

#### ~~setPhysicsAtCellWhenIdle()~~

```ts
setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L367)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### Deprecated

Use [setPhysicsAtCell](#setphysicsatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.setPhysicsAtCell`

***

#### setDurationAtCell() :id=sandkit.api.elements.setdurationatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDurationAtCell()</code></p>

```ts
setDurationAtCell(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:378](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L378)

Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `number`, `object`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setDurationAtCell`

***

#### ~~setDurationAtCellWhenIdle()~~

```ts
setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L384)

##### Parameters

###### args

...\[`number`, `number`, `number`, `object`\]

##### Returns

`void`

##### Deprecated

Use [setDurationAtCell](#setdurationatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.setDurationAtCell`

***

#### getIdByType() :id=sandkit.api.elements.getidbytype

<p class="smt-member-path"><code>sandkit.api.elements.getIdByType()</code></p>

```ts
getIdByType(elementType: ElementType): string & object
```

Defined in: [shared/api/elements.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L129)

Return the mod string id for a numeric element type.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

`string` & `object`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getIdByType`

***

#### getTypeById() :id=sandkit.api.elements.gettypebyid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeById()</code></p>

```ts
getTypeById(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L137)

Resolve a mod element string id to a type handle.

##### Parameters

###### elementId

`string` & `object`

Mod-registered element id.

##### Returns

[`ElementType`](#elementtype)

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getTypeById`

***

#### ~~getTypeFromId()~~

```ts
getTypeFromId(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L143)

##### Parameters

###### elementId

`string` & `object`

##### Returns

[`ElementType`](#elementtype)

##### Deprecated

Use [getTypeById](#gettypebyid) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.elements.getTypeById`

***

#### getDefinitionByType() :id=sandkit.api.elements.getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.elements.getDefinitionByType()</code></p>

```ts
getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

Defined in: [shared/api/elements.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L151)

Look up the definition for a type handle.

##### Parameters

###### elementType

[`ElementType`](#elementtype)

Numeric element type.

##### Returns

[`ElementDefinition`](#elementdefinition) \| `undefined`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getDefinitionByType`

***

#### getTypeAtCell() :id=sandkit.api.elements.gettypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getTypeAtCell()</code></p>

```ts
getTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L160)

Return the raw element type at a cell (may differ from resolved type).

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`ElementType`](#elementtype) \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getTypeAtCell`

***

#### getResolvedTypeAtCell() :id=sandkit.api.elements.getresolvedtypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeAtCell()</code></p>

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L169)

Return the resolved element type after overlays and particles.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`ElementType`](#elementtype) \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getResolvedTypeAtCell`

***

#### getResolvedTypeFromCellId() :id=sandkit.api.elements.getresolvedtypefromcellid

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeFromCellId()</code></p>

```ts
getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

Defined in: [shared/api/elements.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L177)

Return the resolved element type from a packed cell id.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

##### Returns

[`ElementType`](#elementtype) \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getResolvedTypeFromCellId`

***

#### getInfoAtCell() :id=sandkit.api.elements.getinfoatcell

<p class="smt-member-path"><code>sandkit.api.elements.getInfoAtCell()</code></p>

```ts
getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

Defined in: [shared/api/elements.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L186)

Return element index, particle flag, and ids at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

\{ `elementType`: [`ElementType`](#elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md#cellid); `elementIndex`: `number`; \} \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getInfoAtCell`

***

#### getMatterTypeAtCell() :id=sandkit.api.elements.getmattertypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getMatterTypeAtCell()</code></p>

```ts
getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

Defined in: [shared/api/elements.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L195)

Return the matter category at a cell, or null when empty.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`MatterType`](api/sandkit.api.elements.MatterType.md) \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getMatterTypeAtCell`

***

#### isTypeAtCell() :id=sandkit.api.elements.istypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.isTypeAtCell()</code></p>

```ts
isTypeAtCell(...args: number, number, [ElementRef]): boolean
```

Defined in: [shared/api/elements.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L205)

Return true when the cell holds the given element type or id.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](#elementref)\]

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.isTypeAtCell`

***

#### isFreeFallingAtCell() :id=sandkit.api.elements.isfreefallingatcell

<p class="smt-member-path"><code>sandkit.api.elements.isFreeFallingAtCell()</code></p>

```ts
isFreeFallingAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/elements.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L214)

Return true when the element at the cell is falling.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.isFreeFallingAtCell`

***

#### getVelocityAtCell() :id=sandkit.api.elements.getvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.getVelocityAtCell()</code></p>

```ts
getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

Defined in: [shared/api/elements.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L223)

Return per-cell velocity for moving elements.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

\{ `x`: `number`; `y`: `number`; \} \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getVelocityAtCell`

***

#### getDataFieldAtCell() :id=sandkit.api.elements.getdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.getDataFieldAtCell()</code></p>

```ts
getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

Defined in: [shared/api/elements.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L233)

Read element data field 1–4 at a cell.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`\]

##### Returns

`number` \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements.getDataFieldAtCell`

---

## sandkit.api.energy

`sandkit.api.energy` — structure energy networks, storage, and consumption.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### EnergyRegisterTypeOptions :id=sandkit.api.energy.energyregistertypeoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyRegisterTypeOptions</code></p>

Defined in: [sandkit/api/energy.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L56)

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

Defined in: [sandkit/api/energy.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L58)

Maximum stored energy for storage nodes.

###### energyType?

```ts
optional energyType?: string
```

Defined in: [sandkit/api/energy.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L60)

Energy type id when multiple networks exist.

***

#### EnergyAddOptions :id=sandkit.api.energy.energyaddoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyAddOptions</code></p>

Defined in: [sandkit/api/energy.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L65)

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

Defined in: [sandkit/api/energy.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L67)

Energy type id when multiple networks exist.

### Functions <!-- {docsify-ignore} -->

#### registerType() :id=sandkit.api.energy.registertype

<p class="smt-member-path"><code>sandkit.api.energy.registerType()</code></p>

```ts
registerType(structureId: string, type: "storage" | "conductor", options?: EnergyRegisterTypeOptions): void
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

<p class="smt-member-path"><code>sandkit.api.energy.addAtCell()</code></p>

```ts
addAtCell(...args: number, number, number, [EnergyAddOptions]): number
```

Defined in: [sandkit/api/energy.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L22)

Adds energy at a cell. Returns the amount actually added.

##### Parameters

###### args

...\[`number`, `number`, `number`, [`EnergyAddOptions`](#energyaddoptions)\]

##### Returns

`number`

***

#### consume() :id=sandkit.api.energy.consume

<p class="smt-member-path"><code>sandkit.api.energy.consume()</code></p>

```ts
consume(amount: number, options?: object): number
```

Defined in: [sandkit/api/energy.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L28)

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

<p class="smt-member-path"><code>sandkit.api.energy.consumeExcludingNetworkAtCell()</code></p>

```ts
consumeExcludingNetworkAtCell(...args: [number, number, number]): number
```

Defined in: [sandkit/api/energy.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L37)

Consumes energy from networks other than the one at the cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`number`

***

#### getNetworkAtCell() :id=sandkit.api.energy.getnetworkatcell

<p class="smt-member-path"><code>sandkit.api.energy.getNetworkAtCell()</code></p>

```ts
getNetworkAtCell(...args: CellCoordinates): object[]
```

Defined in: [sandkit/api/energy.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L43)

Returns energy network nodes connected at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`object`[]

***

#### getNetworkFreeCapacityAtCell() :id=sandkit.api.energy.getnetworkfreecapacityatcell

<p class="smt-member-path"><code>sandkit.api.energy.getNetworkFreeCapacityAtCell()</code></p>

```ts
getNetworkFreeCapacityAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/energy.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L53)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities`

### Interfaces <!-- {docsify-ignore} -->

#### Entity :id=sandkit.api.entities.entity

<p class="smt-member-path"><code>sandkit.api.entities.Entity</code></p>

Defined in: [sandkit/api/entities.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L71)

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

Defined in: [sandkit/api/entities.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L72)

###### x

```ts
x: number
```

Defined in: [sandkit/api/entities.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L73)

###### y

```ts
y: number
```

Defined in: [sandkit/api/entities.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L74)

###### targetX?

```ts
optional targetX?: number
```

Defined in: [sandkit/api/entities.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L75)

###### targetY?

```ts
optional targetY?: number
```

Defined in: [sandkit/api/entities.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L76)

### Functions <!-- {docsify-ignore} -->

#### getById() :id=sandkit.api.entities.getbyid

<p class="smt-member-path"><code>sandkit.api.entities.getById()</code></p>

```ts
getById(entityId: number): Entity | undefined
```

Defined in: [sandkit/api/entities.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L15)

Return one live entity by runtime id.

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

[`Entity`](#entity) \| `undefined`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities.getById`

***

#### getAllByType() :id=sandkit.api.entities.getallbytype

<p class="smt-member-path"><code>sandkit.api.entities.getAllByType()</code></p>

```ts
getAllByType(entityTypeId: string): Entity[]
```

Defined in: [sandkit/api/entities.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L23)

Return all live entities of one type.

##### Parameters

###### entityTypeId

`string`

Registered entity type string id.

##### Returns

[`Entity`](#entity)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities.getAllByType`

***

#### spawnAtWorld() :id=sandkit.api.entities.spawnatworld

<p class="smt-member-path"><code>sandkit.api.entities.spawnAtWorld()</code></p>

```ts
spawnAtWorld(entityTypeId: string, worldX: number, worldY: number): Entity
```

Defined in: [sandkit/api/entities.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L34)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities.spawnAtWorld`

***

#### remove() :id=sandkit.api.entities.remove

<p class="smt-member-path"><code>sandkit.api.entities.remove()</code></p>

```ts
remove(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L42)

Remove an entity from the world.

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities.remove`

***

#### launch() :id=sandkit.api.entities.launch

<p class="smt-member-path"><code>sandkit.api.entities.launch()</code></p>

```ts
launch(entityId: number, angleRadians: number, speed?: number): void
```

Defined in: [sandkit/api/entities.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L52)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities.launch`

***

#### startCapture() :id=sandkit.api.entities.startcapture

<p class="smt-member-path"><code>sandkit.api.entities.startCapture()</code></p>

```ts
startCapture(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L60)

Start capture for an entity (for example vacuum capture).

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities.startCapture`

***

#### collect() :id=sandkit.api.entities.collect

<p class="smt-member-path"><code>sandkit.api.entities.collect()</code></p>

```ts
collect(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L68)

Collect an entity (for example into inventory or storage).

##### Parameters

###### entityId

`number`

Runtime entity id.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.entities.collect`

---

## sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

### Interfaces <!-- {docsify-ignore} -->

#### PlayerCollisionPreparePayload :id=sandkit.api.events.playercollisionpreparepayload

<p class="smt-member-path"><code>sandkit.api.events.PlayerCollisionPreparePayload</code></p>

Defined in: [sandkit/api/events.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L30)

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

##### Properties

###### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean
```

Defined in: [sandkit/api/events.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L32)

When true, terrain collision is skipped this sub-step.

###### phaseThroughStructures

```ts
phaseThroughStructures: boolean
```

Defined in: [sandkit/api/events.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L34)

When true, structure collision is skipped this sub-step.

###### maxStepCells

```ts
maxStepCells: number
```

Defined in: [sandkit/api/events.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L36)

Max cells the player can step up when blocked horizontally (1–8).

***

#### EventPayloadMap :id=sandkit.api.events.eventpayloadmap

<p class="smt-member-path"><code>sandkit.api.events.EventPayloadMap</code></p>

Defined in: [sandkit/api/events.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L40)

Known event payloads. Unlisted ids still use `unknown`.

##### Properties

###### item:used

```ts
item:used: object
```

Defined in: [sandkit/api/events.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L41)

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

Defined in: [sandkit/api/events.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L49)

###### scene:game:started

```ts
scene:game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L50)

###### ~~scene:started:game~~

```ts
scene:started:game: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L52)

###### Deprecated

Use `"scene:game:started"` instead.

###### earlyAccess:completed

```ts
earlyAccess:completed: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L53)

###### ~~earlyAccess:complete~~

```ts
earlyAccess:complete: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L55)

###### Deprecated

Use `"earlyAccess:completed"` instead.

###### terrain:destroyed

```ts
terrain:destroyed: object
```

Defined in: [sandkit/api/events.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L56)

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

Defined in: [sandkit/api/events.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L65)

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

Defined in: [sandkit/api/events.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L73)

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

Defined in: [sandkit/api/events.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L78)

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

###### building:removed

```ts
building:removed: object
```

Defined in: [sandkit/api/events.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L85)

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

Defined in: [sandkit/api/events.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L91)

###### structures

```ts
structures: unknown[]
```

###### structures:removed

```ts
structures:removed: object
```

Defined in: [sandkit/api/events.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L92)

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

Defined in: [sandkit/api/events.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L97)

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

Defined in: [sandkit/api/events.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L101)

###### game:started

```ts
game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L102)

###### tutorial:stepChanged

```ts
tutorial:stepChanged: object
```

Defined in: [sandkit/api/events.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L103)

###### step

```ts
step: unknown
```

###### tutorial:completed

```ts
tutorial:completed: object
```

Defined in: [sandkit/api/events.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L104)

###### skipped

```ts
skipped: boolean
```

###### tech:unlocked

```ts
tech:unlocked: object
```

Defined in: [sandkit/api/events.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L105)

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

Defined in: [sandkit/api/events.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L109)

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

Defined in: [sandkit/api/events.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L113)

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

Defined in: [sandkit/api/events.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L120)

###### player:moved

```ts
player:moved: object
```

Defined in: [sandkit/api/events.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L121)

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

<p class="smt-member-path"><code>sandkit.api.events.EventId</code></p>

```ts
EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [sandkit/api/events.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L133)

Known event names plus any custom string id.

***

#### EventPayload :id=sandkit.api.events.eventpayload

<p class="smt-member-path"><code>sandkit.api.events.EventPayload</code></p>

```ts
EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [sandkit/api/events.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L136)

Event payload type for a given event id.

##### Type Parameters

###### K

`K`

### Functions <!-- {docsify-ignore} -->

#### on() :id=sandkit.api.events.on

<p class="smt-member-path"><code>sandkit.api.events.on()</code></p>

```ts
on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

Defined in: [sandkit/api/events.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L15)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.events.on`

***

#### emit() :id=sandkit.api.events.emit

<p class="smt-member-path"><code>sandkit.api.events.emit()</code></p>

```ts
emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

Defined in: [sandkit/api/events.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L24)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.events.emit`

---

## sandkit.api.excavation

`sandkit.api.excavation` — register custom excavation tool dig profiles.
Main thread only.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.excavation`

### Interfaces <!-- {docsify-ignore} -->

#### ExcavationProfileDefinitionV1 :id=sandkit.api.excavation.excavationprofiledefinitionv1

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileDefinitionV1</code></p>

Defined in: [sandkit/api/excavation.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L21)

Excavation tool profile definition.

##### Properties

###### pattern?

```ts
optional pattern?: number[][]
```

Defined in: [sandkit/api/excavation.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L23)

Dig pattern grid; non-zero cells are removed.

###### power

```ts
power: number
```

Defined in: [sandkit/api/excavation.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L25)

Dig strength applied to matched cells. Clamped to 0–1000.

###### options?

```ts
optional options?: ExcavationProfileOptions
```

Defined in: [sandkit/api/excavation.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L27)

Optional profile-specific excavation flags.

###### terrainRules?

```ts
optional terrainRules?: readonly ExcavationTerrainRule[]
```

Defined in: [sandkit/api/excavation.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L29)

Per-terrain output and damage rules.

***

#### ExcavationProfileOptions :id=sandkit.api.excavation.excavationprofileoptions

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileOptions</code></p>

Defined in: [sandkit/api/excavation.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L33)

Options attached to an excavation profile definition.

##### Properties

###### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L34)

###### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L35)

###### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L36)

###### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L37)

###### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L38)

###### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L39)

###### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [sandkit/api/excavation.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L41)

Clamped to 0–1000 when set.

***

#### ExcavationTerrainRule :id=sandkit.api.excavation.excavationterrainrule

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationTerrainRule</code></p>

Defined in: [sandkit/api/excavation.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L45)

Terrain match rule within an excavation profile.

##### Properties

###### cellType

```ts
cellType: TerrainRef
```

Defined in: [sandkit/api/excavation.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L47)

Terrain cell type to match.

###### ~~terrainType?~~

```ts
optional terrainType?: TerrainRef
```

Defined in: [sandkit/api/excavation.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L52)

###### Deprecated

Use [cellType](#celltype) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias in `api.excavation.registerProfile` terrain rules

###### damage?

```ts
optional damage?: number
```

Defined in: [sandkit/api/excavation.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L54)

Damage applied when this rule matches.

###### outputElementType?

```ts
optional outputElementType?: ElementRef
```

Defined in: [sandkit/api/excavation.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L56)

Element type produced when this terrain is excavated.

### Functions <!-- {docsify-ignore} -->

#### registerProfile() :id=sandkit.api.excavation.registerprofile

<p class="smt-member-path"><code>sandkit.api.excavation.registerProfile()</code></p>

```ts
registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void
```

Defined in: [sandkit/api/excavation.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L18)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.excavation.registerProfile`

---

## sandkit.api.factory

Factory progression level and process counters.

Available as `sandkit.api.factory`.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.factory`

### Type Aliases <!-- {docsify-ignore} -->

#### FactoryProcessId :id=sandkit.api.factory.factoryprocessid

<p class="smt-member-path"><code>sandkit.api.factory.FactoryProcessId</code></p>

```ts
FactoryProcessId = "shakeWetSand" | "pressBurntResidue" | "growFlowers" | "condenseFlorin"
```

Defined in: [sandkit/api/factory.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L33)

Built-in factory process identifiers.

### Functions <!-- {docsify-ignore} -->

#### getLevel() :id=sandkit.api.factory.getlevel

<p class="smt-member-path"><code>sandkit.api.factory.getLevel()</code></p>

```ts
getLevel(): number
```

Defined in: [sandkit/api/factory.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L14)

Return the current factory level.

##### Returns

`number`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.factory.getLevel`

***

#### getProcessCount() :id=sandkit.api.factory.getprocesscount

<p class="smt-member-path"><code>sandkit.api.factory.getProcessCount()</code></p>

```ts
getProcessCount(processId: FactoryProcessId): number
```

Defined in: [sandkit/api/factory.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L22)

Return completed count for a factory process.

##### Parameters

###### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

##### Returns

`number`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.factory.getProcessCount`

***

#### getProcessRate() :id=sandkit.api.factory.getprocessrate

<p class="smt-member-path"><code>sandkit.api.factory.getProcessRate()</code></p>

```ts
getProcessRate(processId: FactoryProcessId): number
```

Defined in: [sandkit/api/factory.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L30)

Return completion rate for a factory process.

##### Parameters

###### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

##### Returns

`number`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.factory.getProcessRate`

---

## sandkit.api.fire

`sandkit.api.fire` — ignite and burn elements at grid cells.
Main thread only.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.fire`

### Functions <!-- {docsify-ignore} -->

#### canBurnElementAtCell() :id=sandkit.api.fire.canburnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.canBurnElementAtCell()</code></p>

```ts
canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/fire.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L17)

Returns true when the element at the cell can burn.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.fire.canBurnElementAtCell`

***

#### burnElementAtCell() :id=sandkit.api.fire.burnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.burnElementAtCell()</code></p>

```ts
burnElementAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L26)

Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.fire.burnElementAtCell`

***

#### ~~burnElementAtCellWhenIdle()~~

```ts
burnElementAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L32)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### Deprecated

Use [burnElementAtCell](#burnelementatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.fire.burnElementAtCell`

---

## sandkit.api.game

Game session start helpers.

Available as `sandkit.api.game`.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.game`

### Interfaces <!-- {docsify-ignore} -->

#### GameStartOptions :id=sandkit.api.game.gamestartoptions

<p class="smt-member-path"><code>sandkit.api.game.GameStartOptions</code></p>

Defined in: [sandkit/api/game.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L18)

Options for [start](#start).

##### Properties

###### skipIntro?

```ts
optional skipIntro?: boolean
```

Defined in: [sandkit/api/game.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L20)

When true, skip the intro sequence.

### Functions <!-- {docsify-ignore} -->

#### start() :id=sandkit.api.game.start

<p class="smt-member-path"><code>sandkit.api.game.start()</code></p>

```ts
start(options?: GameStartOptions): void
```

Defined in: [sandkit/api/game.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L15)

Start or restart the game session.

##### Parameters

###### options?

[`GameStartOptions`](#gamestartoptions)

Optional session start flags.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.game.start`

---

## sandkit.api.gameConfig

`sandkit.api.gameConfig` — read merged game configuration values.
Main thread only.

### Functions <!-- {docsify-ignore} -->

#### get() :id=sandkit.api.gameConfig.get

<p class="smt-member-path"><code>sandkit.api.gameConfig.get()</code></p>

```ts
get(key: string): JsonValueV1 | undefined
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

<p class="smt-member-path"><code>sandkit.api.gameConfig.getAll()</code></p>

```ts
getAll(): JsonObjectV1
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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid`

### Interfaces <!-- {docsify-ignore} -->

#### GridMutationWriter :id=sandkit.api.grid.gridmutationwriter

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriter</code></p>

Defined in: [sandkit/api/grid.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L104)

Deferred element and terrain mutations passed to [mutate](#mutate).

##### Properties

###### elements

```ts
elements: GridMutationWriterElements
```

Defined in: [sandkit/api/grid.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L106)

Element cell mutations inside a [mutate](#mutate) callback.

###### terrains

```ts
terrains: GridMutationWriterTerrains
```

Defined in: [sandkit/api/grid.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L108)

Terrain cell mutations inside a [mutate](#mutate) callback.

***

#### GridMutationWriterElements :id=sandkit.api.grid.gridmutationwriterelements

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterElements</code></p>

Defined in: [sandkit/api/grid.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L112)

Element writers available on [GridMutationWriter.elements](#elements).

##### Methods

###### createAtCell()

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L122)

Create an element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.grid.mutate` writer `elements.createAtCell`

###### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L133)

Replace the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.grid.mutate` writer `elements.replaceAtCell`

###### removeAtCell()

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L143)

Remove the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md#elementremovaloptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.grid.mutate` writer `elements.removeAtCell`

***

#### GridMutationWriterTerrains :id=sandkit.api.grid.gridmutationwriterterrains

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterTerrains</code></p>

Defined in: [sandkit/api/grid.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L147)

Terrain writers available on [GridMutationWriter.terrains](#terrains).

##### Methods

###### createAtCell()

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L157)

Create terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.createAtCell`

###### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L168)

Replace terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.replaceAtCell`

###### removeAtCell()

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L178)

Remove terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.removeAtCell`

***

#### GridDimensions :id=sandkit.api.grid.griddimensions

<p class="smt-member-path"><code>sandkit.api.grid.GridDimensions</code></p>

Defined in: [shared/api/grid.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L73)

World grid width and height in cells.

##### Properties

###### widthCells

```ts
widthCells: number
```

Defined in: [shared/api/grid.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L75)

Grid width in cells.

###### heightCells

```ts
heightCells: number
```

Defined in: [shared/api/grid.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L77)

Grid height in cells.

***

#### ExcavateOptions :id=sandkit.api.grid.excavateoptions

<p class="smt-member-path"><code>sandkit.api.grid.ExcavateOptions</code></p>

Defined in: [shared/api/grid.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L81)

Flags that control how [excavateAtCell](#excavateatcell) resolves damage and drops.

##### Properties

###### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [shared/api/grid.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L83)

Treat the dig as gun fire for terrain resistance checks.

###### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [shared/api/grid.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L85)

Treat the dig as rocket or dynamite explosion damage.

###### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [shared/api/grid.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L87)

Treat the dig as drill damage.

###### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [shared/api/grid.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L89)

Use outVelocity literally instead of deriving ejection speed.

###### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [shared/api/grid.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L91)

Allow removing terrain marked non-destructible.

###### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [shared/api/grid.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L93)

Force-remove all matched cells regardless of normal rules.

###### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [shared/api/grid.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L95)

Extra drill-tier damage when [fromDrill](#fromdrill) is true. Clamped to 0–1000.

### Type Aliases <!-- {docsify-ignore} -->

#### CellId :id=sandkit.api.grid.cellid

<p class="smt-member-path"><code>sandkit.api.grid.CellId</code></p>

```ts
CellId = CellId
```

Defined in: [shared/api/grid.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L70)

Packed cell id from [getCellIdAtCell](#getcellidatcell).

### Functions <!-- {docsify-ignore} -->

#### mutate() :id=sandkit.api.grid.mutate

<p class="smt-member-path"><code>sandkit.api.grid.mutate()</code></p>

```ts
mutate(callback: (writer: GridMutationWriter) => void): void
```

Defined in: [sandkit/api/grid.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L53)

Run deferred grid mutations on the main thread. Reads see the old grid until
mutations apply.

##### Parameters

###### callback

(`writer`: [`GridMutationWriter`](#gridmutationwriter)) => `void`

Receives a writer for element and terrain cell mutations.

##### Returns

`void`

##### See

 - https://sandustry.com/sandkit.html#mutations-heading
 - https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.grid.mutate`

***

#### revealFogAtCell() :id=sandkit.api.grid.revealfogatcell

<p class="smt-member-path"><code>sandkit.api.grid.revealFogAtCell()</code></p>

```ts
revealFogAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/grid.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L62)

Reveal fog of war at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.revealFogAtCell`

***

#### redrawAroundCell() :id=sandkit.api.grid.redrawaroundcell

<p class="smt-member-path"><code>sandkit.api.grid.redrawAroundCell()</code></p>

```ts
redrawAroundCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/grid.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L72)

Request redraw around a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.redrawAroundCell`

***

#### forEachCellInCircle() :id=sandkit.api.grid.foreachcellincircle

<p class="smt-member-path"><code>sandkit.api.grid.forEachCellInCircle()</code></p>

```ts
forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) => void): void
```

Defined in: [sandkit/api/grid.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L83)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.forEachCellInCircle`

***

#### forEachCellInRectangle() :id=sandkit.api.grid.foreachcellinrectangle

<p class="smt-member-path"><code>sandkit.api.grid.forEachCellInRectangle()</code></p>

```ts
forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L95)

Calls the callback for each cell in a rectangle.

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.forEachCellInRectangle`

***

#### ~~forEachCellInRect()~~

```ts
forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L101)

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

##### Returns

`void`

##### Deprecated

Use [forEachCellInRectangle](#foreachcellinrectangle) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.forEachCellInRectangle`

***

#### getCellIdAtCell() :id=sandkit.api.grid.getcellidatcell

<p class="smt-member-path"><code>sandkit.api.grid.getCellIdAtCell()</code></p>

```ts
getCellIdAtCell(...args: CellCoordinates): CellId
```

Defined in: [shared/api/grid.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L21)

Return the packed cell id at grid coordinates.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id for the cell.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.getCellIdAtCell` / Worker entry `api.grid.getCellIdAtCell`

***

#### isCellEmptyAtCell() :id=sandkit.api.grid.iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.grid.isCellEmptyAtCell()</code></p>

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/grid.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L30)

Return true when the cell has no element or terrain content.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.isCellEmptyAtCell` / Worker entry `api.grid.isCellEmptyAtCell`

***

#### isTerrainAtCell() :id=sandkit.api.grid.isterrainatcell

<p class="smt-member-path"><code>sandkit.api.grid.isTerrainAtCell()</code></p>

```ts
isTerrainAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/grid.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L39)

Return true when the cell holds terrain (not an element).

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.isTerrainAtCell` / Worker entry `api.grid.isTerrainAtCell`

***

#### reportActivityAtCell() :id=sandkit.api.grid.reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.grid.reportActivityAtCell()</code></p>

```ts
reportActivityAtCell(...args: CellCoordinates): void
```

Defined in: [shared/api/grid.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L48)

Mark the cell active for simulation this tick.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.reportActivityAtCell` / Worker entry `api.grid.reportActivityAtCell`

***

#### excavateAtCell() :id=sandkit.api.grid.excavateatcell

<p class="smt-member-path"><code>sandkit.api.grid.excavateAtCell()</code></p>

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

Defined in: [shared/api/grid.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L60)

Apply excavation damage and eject velocity at a cell.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](#excavateoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.excavateAtCell` / Worker entry `api.grid.excavateAtCell`

***

#### getDimensions() :id=sandkit.api.grid.getdimensions

<p class="smt-member-path"><code>sandkit.api.grid.getDimensions()</code></p>

```ts
getDimensions(): GridDimensions
```

Defined in: [shared/api/grid.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L67)

Return the world grid size in cells.

##### Returns

[`GridDimensions`](#griddimensions)

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.grid.getDimensions` / Worker entry `api.grid.getDimensions`

---

## sandkit.api.hooks

`sandkit.api.hooks` — intercept and modify internal game hook points.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### HookContext :id=sandkit.api.hooks.hookcontext

<p class="smt-member-path"><code>sandkit.api.hooks.HookContext</code></p>

Defined in: [sandkit/api/hooks.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L37)

Context passed to intercept hook callbacks.

##### Properties

###### cancelled

```ts
cancelled: boolean
```

Defined in: [sandkit/api/hooks.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L41)

True after [cancel](#cancel) was called on this context.

##### Methods

###### cancel()

```ts
cancel(): void
```

Defined in: [sandkit/api/hooks.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L39)

When called, the intercepted action is skipped.

###### Returns

`void`

***

#### HookOptions :id=sandkit.api.hooks.hookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.HookOptions</code></p>

Defined in: [sandkit/api/hooks.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L45)

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

Defined in: [sandkit/api/hooks.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L47)

Run this hook before others with lower priority.

***

#### InterceptHookMap :id=sandkit.api.hooks.intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap</code></p>

Defined in: [sandkit/api/hooks.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L137)

Intercept hook argument shapes keyed by hook id.

##### Properties

###### item:use

```ts
item:use: object
```

Defined in: [sandkit/api/hooks.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L138)

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

Defined in: [sandkit/api/hooks.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L145)

###### ~~teleport:effect~~

```ts
teleport:effect: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L147)

###### Deprecated

Use `"teleport:effect:create"` instead.

###### action:start

```ts
action:start: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L148)

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

Defined in: [sandkit/api/hooks.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L150)

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

Defined in: [sandkit/api/hooks.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L151)

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

Defined in: [sandkit/api/hooks.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L153)

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

Defined in: [sandkit/api/hooks.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L154)

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

Defined in: [sandkit/api/hooks.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L156)

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

Defined in: [sandkit/api/hooks.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L157)

###### Type Declaration

###### type?

```ts
optional type?: string
```

###### ~~placePoints:isSuppressed~~

```ts
placePoints:isSuppressed: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L159)

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

Defined in: [sandkit/api/hooks.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L160)

###### Type Declaration

###### type?

```ts
optional type?: string
```

###### ~~placePoints:directionalArrows:isSuppressed~~

```ts
placePoints:directionalArrows:isSuppressed: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L162)

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

Defined in: [sandkit/api/hooks.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L163)

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

Defined in: [sandkit/api/hooks.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L178)

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

Defined in: [sandkit/api/hooks.d.ts:184](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L184)

###### structure

```ts
structure: Record<string, unknown>
```

###### input:scroll

```ts
input:scroll: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L185)

###### Type Declaration

###### deltaY

```ts
deltaY: number
```

###### input:boostDown

```ts
input:boostDown: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L186)

###### ~~input:boost-down~~

```ts
input:boost-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L188)

###### Deprecated

Use `"input:boostDown"` instead.

###### input:descendDown

```ts
input:descendDown: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L189)

###### ~~input:descend-down~~

```ts
input:descend-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L191)

###### Deprecated

Use `"input:descendDown"` instead.

###### input:escape

```ts
input:escape: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L192)

###### interactable:suppressHover

```ts
interactable:suppressHover: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L193)

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

Defined in: [sandkit/api/hooks.d.ts:194](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L194)

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

Defined in: [sandkit/api/hooks.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L195)

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

Defined in: [sandkit/api/hooks.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L196)

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

Defined in: [sandkit/api/hooks.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L197)

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

Defined in: [sandkit/api/hooks.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L205)

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

Defined in: [sandkit/api/hooks.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L214)

Modify hook argument shapes keyed by hook id.

##### Properties

###### excavation:prepare

```ts
excavation:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:215](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L215)

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

Defined in: [sandkit/api/hooks.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L225)

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

Defined in: [sandkit/api/hooks.d.ts:237](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L237)

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

Defined in: [sandkit/api/hooks.d.ts:244](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L244)

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

Defined in: [sandkit/api/hooks.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L251)

###### ~~player:movement~~

```ts
player:movement: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L253)

###### Deprecated

Use `"player:movement:prepare"` instead.

###### building:placementLimit:prepare

```ts
building:placementLimit:prepare: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L254)

###### Type Declaration

###### maxCount

```ts
maxCount: number | null
```

###### ~~building:placementLimit~~

```ts
building:placementLimit: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:256](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L256)

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

Defined in: [sandkit/api/hooks.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L258)

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

Defined in: [sandkit/api/hooks.d.ts:259](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L259)

###### Type Declaration

###### speedMultiplier

```ts
speedMultiplier: number
```

###### ~~fluxEmanator:processing~~

```ts
fluxEmanator:processing: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L261)

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

Defined in: [sandkit/api/hooks.d.ts:263](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L263)

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

Defined in: [sandkit/api/hooks.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L264)

###### Type Declaration

###### layer?

```ts
optional layer?: string
```

###### ~~render:pipes~~

```ts
render:pipes: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L266)

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

Defined in: [sandkit/api/hooks.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L267)

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

Defined in: [sandkit/api/hooks.d.ts:271](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L271)

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

Defined in: [sandkit/api/hooks.d.ts:276](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L276)

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

Defined in: [sandkit/api/hooks.d.ts:281](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L281)

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

Defined in: [sandkit/api/hooks.d.ts:288](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L288)

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

Defined in: [sandkit/api/hooks.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L298)

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

Defined in: [sandkit/api/hooks.d.ts:303](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L303)

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

Defined in: [sandkit/api/hooks.d.ts:308](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L308)

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

Defined in: [sandkit/api/hooks.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L315)

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
feedback: "silent" | "default"
```

###### resource:delivery:prepare

```ts
resource:delivery:prepare: object
```

Defined in: [sandkit/api/hooks.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L323)

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

Defined in: [sandkit/api/hooks.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L335)

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

Defined in: [sandkit/api/hooks.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L339)

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

Defined in: [sandkit/api/hooks.d.ts:343](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L343)

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

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookOptions</code></p>

```ts
InterceptHookOptions<K *extends* InterceptHookId> = HookOptions & K *extends* "item:use" ? object : K *extends* "entity:update" ? object : K *extends* "building:place" ? object : K *extends* "projectile:fire:overStructure" | "projectile:hit" ? object : Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L52)

Options for [intercept](#intercept).

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ModifyHookOptions :id=sandkit.api.hooks.modifyhookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookOptions</code></p>

```ts
ModifyHookOptions = HookOptions & { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L64)

Options for [modify](#modify).

***

#### InterceptHookId :id=sandkit.api.hooks.intercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookId</code></p>

```ts
InterceptHookId = LooseString<"item:use" | "teleport:effect:create" | "teleport:effect" | "action:start" | "action:intercept" | "input:keyDown" | "input:keydown" | "input:keyUp" | "input:keyup" | "placePoints:suppress" | "placePoints:isSuppressed" | "placePoints:directionalArrows:suppress" | "placePoints:directionalArrows:isSuppressed" | "entity:update" | "building:place" | "building:clearShape" | "input:scroll" | "input:boostDown" | "input:boost-down" | "input:descendDown" | "input:descend-down" | "input:escape" | "interactable:suppressHover" | "fire:element:ignite" | "projectile:fire:overStructure" | "projectile:hit" | "player:position:commit" | "progression:purchase">
```

Defined in: [sandkit/api/hooks.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L74)

Known main-thread intercept hook ids plus custom strings.

***

#### ModifyHookId :id=sandkit.api.hooks.modifyhookid

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookId</code></p>

```ts
ModifyHookId = LooseString<"excavation:prepare" | "locator:scan:prepare" | "vacuum:prepare" | "vacuum:element:prepare" | "player:movement:prepare" | "player:movement" | "building:placementLimit:prepare" | "building:placementLimit" | "building:placement-limit" | "fluxEmanator:processing:prepare" | "fluxEmanator:processing" | "flux-emanator:processing" | "render:pipes:prepare" | "render:pipes" | "structures:moved:prepare" | "structures:removed:prepare" | "weapon:reload:prepare" | "projectile:travel:prepare" | "projectile:impact:prepare" | "player:collision:prepare" | "trigger:schedule:prepare" | "progression:cost:prepare" | "resource:collection:prepare" | "resource:delivery:prepare" | "resource:balance:prepare" | "gold:removal:prepare" | "gold:removal:settle">
```

Defined in: [sandkit/api/hooks.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L106)

Known main-thread modify hook ids plus custom strings.

***

#### InterceptHookArgs :id=sandkit.api.hooks.intercepthookargs

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookArgs</code></p>

```ts
InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L351)

Intercept hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ModifyHookArgs :id=sandkit.api.hooks.modifyhookargs

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookArgs</code></p>

```ts
ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:355](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L355)

Modify hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

### Functions <!-- {docsify-ignore} -->

#### intercept() :id=sandkit.api.hooks.intercept

<p class="smt-member-path"><code>sandkit.api.hooks.intercept()</code></p>

```ts
intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [sandkit/api/hooks.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L16)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.hooks.intercept`

***

#### modify() :id=sandkit.api.hooks.modify

<p class="smt-member-path"><code>sandkit.api.hooks.modify()</code></p>

```ts
modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [sandkit/api/hooks.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L30)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.hooks.modify`

---

## sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### I18nNumberFormatOptions :id=sandkit.api.i18n.i18nnumberformatoptions

<p class="smt-member-path"><code>sandkit.api.i18n.I18nNumberFormatOptions</code></p>

Defined in: [sandkit/api/i18n.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L168)

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

Defined in: [sandkit/api/i18n.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L170)

Minimum fraction digits.

###### maximumFractionDigits?

```ts
optional maximumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L172)

Maximum fraction digits.

###### useGrouping?

```ts
optional useGrouping?: boolean
```

Defined in: [sandkit/api/i18n.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L174)

When true, use grouping separators.

### Type Aliases <!-- {docsify-ignore} -->

#### Locale :id=sandkit.api.i18n.locale

<p class="smt-member-path"><code>sandkit.api.i18n.Locale</code></p>

```ts
Locale = LooseString<"en">
```

Defined in: [sandkit/api/i18n.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L165)

Locale code. `"en"` autocompletes; any locale string is allowed.

### Functions <!-- {docsify-ignore} -->

#### t() :id=sandkit.api.i18n.t

<p class="smt-member-path"><code>sandkit.api.i18n.t()</code></p>

```ts
t(key: string, params?: Record<string, string | number>): string
```

Defined in: [sandkit/api/i18n.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L15)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.t`

***

#### register() :id=sandkit.api.i18n.register

<p class="smt-member-path"><code>sandkit.api.i18n.register()</code></p>

```ts
register(locale: Locale, translations: Record<string, string>): void
```

Defined in: [sandkit/api/i18n.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L24)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.register`

***

#### getLocale() :id=sandkit.api.i18n.getlocale

<p class="smt-member-path"><code>sandkit.api.i18n.getLocale()</code></p>

```ts
getLocale(): Locale
```

Defined in: [sandkit/api/i18n.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L31)

Returns the active locale code.

##### Returns

[`Locale`](#locale)

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.getLocale`

***

#### hasTranslation() :id=sandkit.api.i18n.hastranslation

<p class="smt-member-path"><code>sandkit.api.i18n.hasTranslation()</code></p>

```ts
hasTranslation(key: string, locale?: Locale): boolean
```

Defined in: [sandkit/api/i18n.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L40)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.hasTranslation`

***

#### setLocale() :id=sandkit.api.i18n.setlocale

<p class="smt-member-path"><code>sandkit.api.i18n.setLocale()</code></p>

```ts
setLocale(locale: Locale): Promise<void>
```

Defined in: [sandkit/api/i18n.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L48)

Sets the active locale.

##### Parameters

###### locale

[`Locale`](#locale)

Locale code to activate.

##### Returns

`Promise`\<`void`\>

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.setLocale`

***

#### getLanguages() :id=sandkit.api.i18n.getlanguages

<p class="smt-member-path"><code>sandkit.api.i18n.getLanguages()</code></p>

```ts
getLanguages(): object[]
```

Defined in: [sandkit/api/i18n.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L55)

Returns metadata for all known languages.

##### Returns

`object`[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.getLanguages`

***

#### getAvailableLocales() :id=sandkit.api.i18n.getavailablelocales

<p class="smt-member-path"><code>sandkit.api.i18n.getAvailableLocales()</code></p>

```ts
getAvailableLocales(): Locale[]
```

Defined in: [sandkit/api/i18n.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L62)

Returns locale codes that have registered translations.

##### Returns

[`Locale`](#locale)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.getAvailableLocales`

***

#### formatNumber() :id=sandkit.api.i18n.formatnumber

<p class="smt-member-path"><code>sandkit.api.i18n.formatNumber()</code></p>

```ts
formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

Defined in: [sandkit/api/i18n.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L71)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.formatNumber`

***

#### joinKey() :id=sandkit.api.i18n.joinkey

<p class="smt-member-path"><code>sandkit.api.i18n.joinKey()</code></p>

```ts
joinKey(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L79)

Joins key parts into a single translation key.

##### Parameters

###### parts

...`string`[]

Key segments joined with `.`.

##### Returns

`string`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.joinKey`

***

#### ~~key()~~

```ts
key(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L85)

##### Parameters

###### parts

...`string`[]

##### Returns

`string`

##### Deprecated

Use [joinKey](#joinkey) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.i18n.joinKey`

***

#### getName() :id=sandkit.api.i18n.getname

<p class="smt-member-path"><code>sandkit.api.i18n.getName()</code></p>

```ts
getName(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L93)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.getName`

***

#### getDescription() :id=sandkit.api.i18n.getdescription

<p class="smt-member-path"><code>sandkit.api.i18n.getDescription()</code></p>

```ts
getDescription(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L101)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.getDescription`

***

#### createTranslatable() :id=sandkit.api.i18n.createtranslatable

<p class="smt-member-path"><code>sandkit.api.i18n.createTranslatable()</code></p>

```ts
createTranslatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L110)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.createTranslatable`

***

#### ~~translatable()~~

```ts
translatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L116)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.i18n.createTranslatable`

***

#### setGlobal() :id=sandkit.api.i18n.setglobal

<p class="smt-member-path"><code>sandkit.api.i18n.setGlobal()</code></p>

```ts
setGlobal(key: string, value: string | (() => string)): void
```

Defined in: [sandkit/api/i18n.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L125)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.setGlobal`

***

#### getGlobal() :id=sandkit.api.i18n.getglobal

<p class="smt-member-path"><code>sandkit.api.i18n.getGlobal()</code></p>

```ts
getGlobal(key: string): string | undefined
```

Defined in: [sandkit/api/i18n.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L133)

Returns a global translation helper value.

##### Parameters

###### key

`string`

Global helper key.

##### Returns

`string` \| `undefined`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.getGlobal`

***

#### removeGlobal() :id=sandkit.api.i18n.removeglobal

<p class="smt-member-path"><code>sandkit.api.i18n.removeGlobal()</code></p>

```ts
removeGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L141)

Removes a global translation helper value.

##### Parameters

###### key

`string`

Global helper key.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.removeGlobal`

***

#### ~~clearGlobal()~~

```ts
clearGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L147)

##### Parameters

###### key

`string`

##### Returns

`void`

##### Deprecated

Use [removeGlobal](#removeglobal) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.i18n.removeGlobal`

***

#### getGlobals() :id=sandkit.api.i18n.getglobals

<p class="smt-member-path"><code>sandkit.api.i18n.getGlobals()</code></p>

```ts
getGlobals(): Record<string, string>
```

Defined in: [sandkit/api/i18n.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L154)

Returns all global translation helper values.

##### Returns

`Record`\<`string`, `string`\>

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.getGlobals`

***

#### formatKeyForDisplay() :id=sandkit.api.i18n.formatkeyfordisplay

<p class="smt-member-path"><code>sandkit.api.i18n.formatKeyForDisplay()</code></p>

```ts
formatKeyForDisplay(keyCode: string): string
```

Defined in: [sandkit/api/i18n.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L162)

Formats a key code for display in UI.

##### Parameters

###### keyCode

`string`

Keyboard key code or binding name.

##### Returns

`string`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.i18n.formatKeyForDisplay`

---

## sandkit.api.input

`sandkit.api.input` — key bindings, mouse position, and modifier keys.
Main thread only.

### Interfaces <!-- {docsify-ignore} -->

#### InputBindingHandlers :id=sandkit.api.input.inputbindinghandlers

<p class="smt-member-path"><code>sandkit.api.input.InputBindingHandlers</code></p>

Defined in: [sandkit/api/input.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L98)

Handlers invoked when a binding is pressed or released.

##### Properties

###### down?

```ts
optional down?: () => void
```

Defined in: [sandkit/api/input.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L100)

Called when the binding is pressed.

###### Returns

`void`

###### up?

```ts
optional up?: () => void
```

Defined in: [sandkit/api/input.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L102)

Called when the binding is released.

###### Returns

`void`

***

#### InputBindingDefinition :id=sandkit.api.input.inputbindingdefinition

<p class="smt-member-path"><code>sandkit.api.input.InputBindingDefinition</code></p>

Defined in: [sandkit/api/input.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L106)

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

Defined in: [sandkit/api/input.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L108)

Display name shown in settings.

###### displayNameKey?

```ts
optional displayNameKey?: string
```

Defined in: [sandkit/api/input.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L110)

i18n key for the display name (overrides displayName when set).

###### category

```ts
category: string
```

Defined in: [sandkit/api/input.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L112)

Settings category for grouping.

###### handlers

```ts
handlers: InputBindingHandlers
```

Defined in: [sandkit/api/input.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L114)

Press and release handlers.

### Type Aliases <!-- {docsify-ignore} -->

#### BindingId :id=sandkit.api.input.bindingid

<p class="smt-member-path"><code>sandkit.api.input.BindingId</code></p>

```ts
BindingId = LooseString<` ${KeyBinding} `>
```

Defined in: [sandkit/api/input.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L77)

Binding id. Vanilla [KeyBindingEnum](api/sandkit.enums.KeyBinding.md) names autocomplete; custom ids are allowed.

***

#### KeyCode :id=sandkit.api.input.keycode

<p class="smt-member-path"><code>sandkit.api.input.KeyCode</code></p>

```ts
KeyCode = LooseString<"Shift" | "Alt" | "Control" | "Meta" | "ShiftLeft" | "ShiftRight" | "AltLeft" | "AltRight" | "ControlLeft" | "ControlRight" | "MetaLeft" | "MetaRight">
```

Defined in: [sandkit/api/input.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L82)

KeyboardEvent.code, a modifier alias (`Shift`), or a chord (`Control+KeyC`).

### Functions <!-- {docsify-ignore} -->

#### registerBinding() :id=sandkit.api.input.registerbinding

<p class="smt-member-path"><code>sandkit.api.input.registerBinding()</code></p>

```ts
registerBinding(bindingId: BindingId, defaultKeys: KeyCode[], definition: InputBindingDefinition): BindingId
```

Defined in: [sandkit/api/input.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L16)

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

#### getMouseCellPosition() :id=sandkit.api.input.getmousecellposition

<p class="smt-member-path"><code>sandkit.api.input.getMouseCellPosition()</code></p>

```ts
getMouseCellPosition(): object
```

Defined in: [sandkit/api/input.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L22)

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

<p class="smt-member-path"><code>sandkit.api.input.getBoundKeys()</code></p>

```ts
getBoundKeys(bindingId: BindingId): KeyCode[]
```

Defined in: [sandkit/api/input.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L31)

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

<p class="smt-member-path"><code>sandkit.api.input.getDisplayKey()</code></p>

```ts
getDisplayKey(bindingId: BindingId, defaultLabel?: string): string
```

Defined in: [sandkit/api/input.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L39)

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

<p class="smt-member-path"><code>sandkit.api.input.triggerBinding()</code></p>

```ts
triggerBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L45)

Fire the binding down handler as if the key was pressed.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### pressBinding() :id=sandkit.api.input.pressbinding

<p class="smt-member-path"><code>sandkit.api.input.pressBinding()</code></p>

```ts
pressBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L51)

Fire the binding down handler without a matching release.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### releaseBinding() :id=sandkit.api.input.releasebinding

<p class="smt-member-path"><code>sandkit.api.input.releaseBinding()</code></p>

```ts
releaseBinding(bindingId: BindingId): void
```

Defined in: [sandkit/api/input.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L57)

Fire the binding up handler.

##### Parameters

###### bindingId

[`BindingId`](#bindingid)

Registered binding id.

##### Returns

`void`

***

#### resetMouseState() :id=sandkit.api.input.resetmousestate

<p class="smt-member-path"><code>sandkit.api.input.resetMouseState()</code></p>

```ts
resetMouseState(): void
```

Defined in: [sandkit/api/input.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L60)

Clear internal mouse button state.

##### Returns

`void`

***

#### isCtrlHeld() :id=sandkit.api.input.isctrlheld

<p class="smt-member-path"><code>sandkit.api.input.isCtrlHeld()</code></p>

```ts
isCtrlHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L66)

Return true when Ctrl is held.

##### Returns

`boolean`

True when the Ctrl modifier is down.

***

#### isAltHeld() :id=sandkit.api.input.isaltheld

<p class="smt-member-path"><code>sandkit.api.input.isAltHeld()</code></p>

```ts
isAltHeld(): boolean
```

Defined in: [sandkit/api/input.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L72)

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

<p class="smt-member-path"><code>sandkit.api.items.ItemId</code></p>

```ts
ItemId = ItemId | LooseString<never>
```

Defined in: [sandkit/api/items.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L52)

Inventory item id.
Built-in [ItemIdEnum](api/sandkit.enums.ItemId.md) values autocomplete; custom string ids are allowed.

***

#### ItemType :id=sandkit.api.items.itemtype

<p class="smt-member-path"><code>sandkit.api.items.ItemType</code></p>

```ts
ItemType = ItemType | TaggedNumber<"itemType">
```

Defined in: [sandkit/api/items.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L57)

Item category handle.
Built-in [ItemTypeEnum](api/sandkit.enums.ItemType.md) values autocomplete.

***

#### ModItem :id=sandkit.api.items.moditem

<p class="smt-member-path"><code>sandkit.api.items.ModItem</code></p>

```ts
ModItem = unknown
```

Defined in: [sandkit/api/items.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L59)

Runtime item instance (not yet typed in declarations).

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.items.register

<p class="smt-member-path"><code>sandkit.api.items.register()</code></p>

```ts
register(definition: ItemDefinition): void
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

<p class="smt-member-path"><code>sandkit.api.items.updateDefinition()</code></p>

```ts
updateDefinition(itemId: ItemId, partial: Partial<ItemDefinition>): void
```

Defined in: [sandkit/api/items.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L28)

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

#### getDefinitionById() :id=sandkit.api.items.getdefinitionbyid

<p class="smt-member-path"><code>sandkit.api.items.getDefinitionById()</code></p>

```ts
getDefinitionById(itemId: ItemId): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L33)

Returns the item definition for an id, or undefined.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Registered item id.

##### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

#### createFromId() :id=sandkit.api.items.createfromid

<p class="smt-member-path"><code>sandkit.api.items.createFromId()</code></p>

```ts
createFromId(itemId: ItemId): unknown
```

Defined in: [sandkit/api/items.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L38)

Creates a runtime item instance from an id.

##### Parameters

###### itemId

[`ItemId`](#itemid)

Registered item id.

##### Returns

`unknown`

***

#### getActive() :id=sandkit.api.items.getactive

<p class="smt-member-path"><code>sandkit.api.items.getActive()</code></p>

```ts
getActive(): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L40)

Returns the item definition for the active hotbar slot.

##### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

#### isActiveById() :id=sandkit.api.items.isactivebyid

<p class="smt-member-path"><code>sandkit.api.items.isActiveById()</code></p>

```ts
isActiveById(itemId: ItemId, itemType?: ItemType): boolean
```

Defined in: [sandkit/api/items.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/items.d.ts#L46)

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

Defined in: [sandkit/api/lights.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L75)

Handle returned from [temporary.createAtWorld](api/sandkit.api.lights.temporary.md#createatworld).

##### Properties

###### lightId

```ts
lightId: number | null
```

Defined in: [sandkit/api/lights.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L77)

Assigned temporary light id, or null when creation failed.

###### ~~index~~

```ts
index: number | null
```

Defined in: [sandkit/api/lights.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L82)

###### Deprecated

Use [lightId](#lightid) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias on `api.lights.temporary.createAtWorld` return value

***

#### PersistentLightOptions :id=sandkit.api.lights.persistentlightoptions

<p class="smt-member-path"><code>sandkit.api.lights.PersistentLightOptions</code></p>

Defined in: [sandkit/api/lights.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L89)

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

Defined in: [sandkit/api/lights.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L91)

Light brightness multiplier.

###### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/lights.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L93)

Light radius in pixels.

###### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/lights.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L95)

RGBA color components.

### Type Aliases <!-- {docsify-ignore} -->

#### TemporaryLightOptions :id=sandkit.api.lights.temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.lights.TemporaryLightOptions</code></p>

```ts
TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [sandkit/api/lights.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L86)

Options for temporary lights.

***

#### PersistentLightHandle :id=sandkit.api.lights.persistentlighthandle

<p class="smt-member-path"><code>sandkit.api.lights.PersistentLightHandle</code></p>

```ts
PersistentLightHandle = unknown
```

Defined in: [sandkit/api/lights.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L100)

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

<p class="smt-member-path"><code>sandkit.api.lights.persistent.createAtWorld()</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): unknown
```

Defined in: [sandkit/api/lights.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L45)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.createAtWorld`

***

#### removeAtWorld() :id=sandkit.api.lights.persistent.removeatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.removeAtWorld()</code></p>

```ts
removeAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/lights.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L54)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.removeAtWorld`

***

#### fadeAtWorld() :id=sandkit.api.lights.persistent.fadeatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.fadeAtWorld()</code></p>

```ts
fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void
```

Defined in: [sandkit/api/lights.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L64)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.fadeAtWorld`

***

#### markDirty() :id=sandkit.api.lights.persistent.markdirty

<p class="smt-member-path"><code>sandkit.api.lights.persistent.markDirty()</code></p>

```ts
markDirty(): void
```

Defined in: [sandkit/api/lights.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L71)

Mark persistent lights dirty so they are saved on the next flush.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.markDirty`

---

## sandkit.api.lights.temporary

Short-lived visual effect lights.

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.lights.temporary.createatworld

<p class="smt-member-path"><code>sandkit.api.lights.temporary.createAtWorld()</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: [sandkit/api/lights.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L18)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.temporary.createAtWorld`

***

#### removeById() :id=sandkit.api.lights.temporary.removebyid

<p class="smt-member-path"><code>sandkit.api.lights.temporary.removeById()</code></p>

```ts
removeById(lightId: number): void
```

Defined in: [sandkit/api/lights.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L26)

Remove a temporary light by its id.

##### Parameters

###### lightId

`number`

Light id returned from [createAtWorld](#createatworld).

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.temporary.removeById`

---

## sandkit.api.maps

### Interfaces <!-- {docsify-ignore} -->

#### ArtifactLocation :id=sandkit.api.maps.artifactlocation

<p class="smt-member-path"><code>sandkit.api.maps.ArtifactLocation</code></p>

Defined in: [sandkit/api/maps.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L33)

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

Defined in: [sandkit/api/maps.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L34)

###### cellY

```ts
cellY: number
```

Defined in: [sandkit/api/maps.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L35)

###### name

```ts
name: string
```

Defined in: [sandkit/api/maps.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L36)

***

#### AvailableMapV1 :id=sandkit.api.maps.availablemapv1

<p class="smt-member-path"><code>sandkit.api.maps.AvailableMapV1</code></p>

Defined in: [sandkit/api/maps.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L41)

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

Defined in: [sandkit/api/maps.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L43)

Map identifier passed to [start](#start).

###### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/maps.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L45)

Display name or translation key.

### Functions <!-- {docsify-ignore} -->

#### getAvailable() :id=sandkit.api.maps.getavailable

<p class="smt-member-path"><code>sandkit.api.maps.getAvailable()</code></p>

```ts
getAvailable(): readonly Readonly<AvailableMapV1>[]
```

Defined in: [sandkit/api/maps.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L18)

Return maps the player can start.

##### Returns

readonly `Readonly`\<[`AvailableMapV1`](#availablemapv1)\>[]

***

#### start() :id=sandkit.api.maps.start

<p class="smt-member-path"><code>sandkit.api.maps.start()</code></p>

```ts
start(mapId: string): boolean
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

<p class="smt-member-path"><code>sandkit.api.maps.getArtifactLocations()</code></p>

```ts
getArtifactLocations(): readonly ArtifactLocation[]
```

Defined in: [sandkit/api/maps.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L30)

Return artifact marker locations for the active map.

##### Returns

readonly [`ArtifactLocation`](#artifactlocation)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.maps.getArtifactLocations`

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

<p class="smt-member-path"><code>sandkit.api.mods.AssetProviderV1</code></p>

```ts
AssetProviderV1 = AssetProviderV1
```

Defined in: [sandkit/api/mods.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/mods.d.ts#L17)

Asset provider entry shape.

### Functions <!-- {docsify-ignore} -->

#### getProviders() :id=sandkit.api.mods.getproviders

<p class="smt-member-path"><code>sandkit.api.mods.getProviders()</code></p>

```ts
getProviders(kind: string): readonly AssetProviderV1[]
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

<p class="smt-member-path"><code>sandkit.api.patterns.PatternExcavateOptions</code></p>

```ts
PatternExcavateOptions = ExcavateOptions
```

Defined in: [sandkit/api/patterns.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L31)

Options for pattern-based excavation. Same shape as [shared.api.world.ExcavateOptions](api/sandkit.api.grid.md#excavateoptions).

### Functions <!-- {docsify-ignore} -->

#### createCircle() :id=sandkit.api.patterns.createcircle

<p class="smt-member-path"><code>sandkit.api.patterns.createCircle()</code></p>

```ts
createCircle(size: number): number[][]
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

<p class="smt-member-path"><code>sandkit.api.patterns.excavateAtCell()</code></p>

```ts
excavateAtCell(...args: [number, number, number[][], Vector2, number, ExcavateOptions]): void
```

Defined in: [sandkit/api/patterns.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L28)

Excavate at a cell using a pattern matrix and output velocity.

##### Parameters

###### args

...\[`number`, `number`, `number`[][], [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](api/sandkit.api.grid.md#excavateoptions)\]

##### Returns

`void`

---

## sandkit.api.pickups

World pickups — spawn, collect, and query pickup instances.

Available as `sandkit.api.pickups`.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups`

### Interfaces <!-- {docsify-ignore} -->

#### WorldItemLight :id=sandkit.api.pickups.worlditemlight

<p class="smt-member-path"><code>sandkit.api.pickups.WorldItemLight</code></p>

Defined in: [sandkit/api/pickups.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L21)

Optional point light attached when spawning a pickup.

##### Properties

###### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/pickups.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L23)

Light brightness multiplier. Default 1.

###### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/pickups.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L25)

Light radius in world pixels. Default 100.

###### color?

```ts
optional color?: [number, number, number] | [number, number, number, number]
```

Defined in: [sandkit/api/pickups.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L27)

RGB or RGBA color components in 0–1 range.

***

#### WorldItem :id=sandkit.api.pickups.worlditem

<p class="smt-member-path"><code>sandkit.api.pickups.WorldItem</code></p>

Defined in: [sandkit/api/pickups.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L31)

Active world pickup instance.

##### Properties

###### id

```ts
id: number
```

Defined in: [sandkit/api/pickups.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L32)

###### x

```ts
x: number
```

Defined in: [sandkit/api/pickups.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L33)

###### y

```ts
y: number
```

Defined in: [sandkit/api/pickups.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L34)

###### type

```ts
type: PickupType
```

Defined in: [sandkit/api/pickups.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L35)

###### data

```ts
data: Record<string, unknown>
```

Defined in: [sandkit/api/pickups.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L36)

### Type Aliases <!-- {docsify-ignore} -->

#### PickupType :id=sandkit.api.pickups.pickuptype

<p class="smt-member-path"><code>sandkit.api.pickups.PickupType</code></p>

```ts
PickupType = PickupType
```

Defined in: [sandkit/api/pickups.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L12)

Official pickup type discriminator.

***

#### ~~WorldItemType~~

```ts
WorldItemType = PickupType
```

Defined in: [sandkit/api/pickups.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L18)

##### Deprecated

Use [PickupType](#pickuptype) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.PickupType`

### Functions <!-- {docsify-ignore} -->

#### spawnAtWorld() :id=sandkit.api.pickups.spawnatworld

<p class="smt-member-path"><code>sandkit.api.pickups.spawnAtWorld()</code></p>

```ts
spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record<string, unknown>, light?: WorldItemLight): WorldItem
```

Defined in: [sandkit/api/pickups.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L50)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.spawnAtWorld`

***

#### remove() :id=sandkit.api.pickups.remove

<p class="smt-member-path"><code>sandkit.api.pickups.remove()</code></p>

```ts
remove(pickup: WorldItem): void
```

Defined in: [sandkit/api/pickups.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L58)

Remove a pickup instance from the world.

##### Parameters

###### pickup

[`WorldItem`](#worlditem)

Pickup returned from spawn or lookup helpers.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.remove`

***

#### ~~destroy()~~

```ts
destroy(pickup: WorldItem): void
```

Defined in: [sandkit/api/pickups.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L64)

##### Parameters

###### pickup

[`WorldItem`](#worlditem)

##### Returns

`void`

##### Deprecated

Use [remove](#remove) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.remove`

***

#### pickUp() :id=sandkit.api.pickups.pickup

<p class="smt-member-path"><code>sandkit.api.pickups.pickUp()</code></p>

```ts
pickUp(pickup: WorldItem): boolean
```

Defined in: [sandkit/api/pickups.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L73)

Pick up a world item into inventory.

##### Parameters

###### pickup

[`WorldItem`](#worlditem)

Pickup to collect.

##### Returns

`boolean`

True when the item was collected.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.pickUp`

***

#### getAll() :id=sandkit.api.pickups.getall

<p class="smt-member-path"><code>sandkit.api.pickups.getAll()</code></p>

```ts
getAll(): WorldItem[]
```

Defined in: [sandkit/api/pickups.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L80)

Return all active pickups.

##### Returns

[`WorldItem`](#worlditem)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.getAll`

***

#### getById() :id=sandkit.api.pickups.getbyid

<p class="smt-member-path"><code>sandkit.api.pickups.getById()</code></p>

```ts
getById(pickupId: number): WorldItem | undefined
```

Defined in: [sandkit/api/pickups.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L88)

Return a pickup by numeric id.

##### Parameters

###### pickupId

`number`

Runtime pickup id.

##### Returns

[`WorldItem`](#worlditem) \| `undefined`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.getById`

---

## sandkit.api.pipes

Pipe network queries and enablement at grid cells.

Available as `sandkit.api.pipes`.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes`

### Interfaces <!-- {docsify-ignore} -->

#### PipeVentCell :id=sandkit.api.pipes.pipeventcell

<p class="smt-member-path"><code>sandkit.api.pipes.PipeVentCell</code></p>

Defined in: [sandkit/api/pipes.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L49)

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

Defined in: [sandkit/api/pipes.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L50)

###### cellY

```ts
cellY: number
```

Defined in: [sandkit/api/pipes.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L51)

### Functions <!-- {docsify-ignore} -->

#### isAtCell() :id=sandkit.api.pipes.isatcell

<p class="smt-member-path"><code>sandkit.api.pipes.isAtCell()</code></p>

```ts
isAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L18)

Return true when a pipe occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.isAtCell`

***

#### isEnabledAtCell() :id=sandkit.api.pipes.isenabledatcell

<p class="smt-member-path"><code>sandkit.api.pipes.isEnabledAtCell()</code></p>

```ts
isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L27)

Return true when pipe flow is enabled at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.isEnabledAtCell`

***

#### getConnectedVentsAtCell() :id=sandkit.api.pipes.getconnectedventsatcell

<p class="smt-member-path"><code>sandkit.api.pipes.getConnectedVentsAtCell()</code></p>

```ts
getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[]
```

Defined in: [sandkit/api/pipes.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L36)

Return connected liquid vent cell positions for the pipe at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

readonly [`PipeVentCell`](#pipeventcell)[]

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.getConnectedVentsAtCell`

***

#### setEnabledAtCell() :id=sandkit.api.pipes.setenabledatcell

<p class="smt-member-path"><code>sandkit.api.pipes.setEnabledAtCell()</code></p>

```ts
setEnabledAtCell(...args: [number, number, boolean]): void
```

Defined in: [sandkit/api/pipes.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L46)

Enable or disable pipe flow at a cell.

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.setEnabledAtCell`

---

## sandkit.api.player

### Namespaces <!-- {docsify-ignore} -->

- [inventory](api/sandkit.api.player.inventory.md)
- [buildings](api/sandkit.api.player.buildings.md)

### Functions <!-- {docsify-ignore} -->

#### setPositionAtWorld() :id=sandkit.api.player.setpositionatworld

<p class="smt-member-path"><code>sandkit.api.player.setPositionAtWorld()</code></p>

```ts
setPositionAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L32)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setPositionAtWorld`

***

#### ~~setWorldPosition()~~

```ts
setWorldPosition(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L38)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.setPositionAtWorld`

***

#### setVelocity() :id=sandkit.api.player.setvelocity

<p class="smt-member-path"><code>sandkit.api.player.setVelocity()</code></p>

```ts
setVelocity(velocityX: number, velocityY: number): void
```

Defined in: [sandkit/api/player.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L47)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setVelocity`

***

#### setMovementSpeedMultiplier() :id=sandkit.api.player.setmovementspeedmultiplier

<p class="smt-member-path"><code>sandkit.api.player.setMovementSpeedMultiplier()</code></p>

```ts
setMovementSpeedMultiplier(multiplier: number): void
```

Defined in: [sandkit/api/player.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L56)

Set the movement speed multiplier.

##### Parameters

###### multiplier

`number`

Speed scale factor (`1` is default walk). `0` freezes movement.
Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setMovementSpeedMultiplier`

***

#### setMovementMode() :id=sandkit.api.player.setmovementmode

<p class="smt-member-path"><code>sandkit.api.player.setMovementMode()</code></p>

```ts
setMovementMode(mode: "normal" | "hover"): boolean
```

Defined in: [sandkit/api/player.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L65)

Set movement mode to normal or hover.

##### Parameters

###### mode

`"normal"` \| `"hover"`

`"normal"` for default physics, or `"hover"` for hover flight.

##### Returns

`boolean`

True when the mode changes.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setMovementMode`

***

#### isOnGround() :id=sandkit.api.player.isonground

<p class="smt-member-path"><code>sandkit.api.player.isOnGround()</code></p>

```ts
isOnGround(): boolean
```

Defined in: [sandkit/api/player.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L75)

Return true when the player is on ground.
Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
on the store snapshot — that flag is not updated during play.

##### Returns

`boolean`

True when the player touches solid ground.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.isOnGround`

***

#### teleportToGround() :id=sandkit.api.player.teleporttoground

<p class="smt-member-path"><code>sandkit.api.player.teleportToGround()</code></p>

```ts
teleportToGround(): void
```

Defined in: [sandkit/api/player.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L82)

Move the player down until ground is found.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.teleportToGround`

***

#### isPositionClearAtWorld() :id=sandkit.api.player.ispositionclearatworld

<p class="smt-member-path"><code>sandkit.api.player.isPositionClearAtWorld()</code></p>

```ts
isPositionClearAtWorld(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L92)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.isPositionClearAtWorld`

***

#### ~~isWorldPositionClear()~~

```ts
isWorldPositionClear(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L98)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.isPositionClearAtWorld`

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

<p class="smt-member-path"><code>sandkit.api.player.buildings.unlockById()</code></p>

```ts
unlockById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L125)

Unlock a structure type for building.

##### Parameters

###### structureId

`string`

Registered structure id string.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.buildings.unlockById`

***

#### ~~unlockByType()~~

```ts
unlockByType(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L131)

##### Parameters

###### structureId

`string`

##### Returns

`void`

##### Deprecated

Use [unlockById](#unlockbyid) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.buildings.unlockById`

***

#### removeById() :id=sandkit.api.player.buildings.removebyid

<p class="smt-member-path"><code>sandkit.api.player.buildings.removeById()</code></p>

```ts
removeById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L139)

Remove a structure unlock from the player.

##### Parameters

###### structureId

`string`

Registered structure id string.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.buildings.removeById`

---

## sandkit.api.player.inventory

Player inventory helpers.

### Functions <!-- {docsify-ignore} -->

#### addById() :id=sandkit.api.player.inventory.addbyid

<p class="smt-member-path"><code>sandkit.api.player.inventory.addById()</code></p>

```ts
addById(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L108)

Add an item to inventory by item id.

##### Parameters

###### itemId

`string`

Registered item id string.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.inventory.addById`

***

#### ~~addFromId()~~

```ts
addFromId(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L114)

##### Parameters

###### itemId

`string`

##### Returns

`void`

##### Deprecated

Use [addById](#addbyid) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.inventory.addById`

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

<p class="smt-member-path"><code>sandkit.api.processing.registerGrower()</code></p>

```ts
registerGrower(definition: PlanterBoxRecipeDefinitionV1): void
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

<p class="smt-member-path"><code>sandkit.api.processing.registerShaker()</code></p>

```ts
registerShaker(definition: ShakerRecipeDefinitionV1): void
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

<p class="smt-member-path"><code>sandkit.api.processing.registerKineticPress()</code></p>

```ts
registerKineticPress(definition: KineticPressRecipeDefinitionV1): void
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

Defined in: [sandkit/api/progression.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L17)

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

Defined in: [sandkit/api/progression.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L19)

Progression step or quest identifier.

### Functions <!-- {docsify-ignore} -->

#### complete() :id=sandkit.api.progression.complete

<p class="smt-member-path"><code>sandkit.api.progression.complete()</code></p>

```ts
complete(request: ProgressionCompletionRequestV1): boolean
```

Defined in: [sandkit/api/progression.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L14)

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

#### ProjectileDefinition :id=sandkit.api.projectiles.projectiledefinition

<p class="smt-member-path"><code>sandkit.api.projectiles.ProjectileDefinition</code></p>

Defined in: [sandkit/api/projectiles.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L54)

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

Defined in: [sandkit/api/projectiles.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L55)

###### sprite

```ts
sprite: object
```

Defined in: [sandkit/api/projectiles.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L56)

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

Defined in: [sandkit/api/projectiles.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L61)

Returns spawn-time physics and visual options.

###### Returns

`Record`\<`string`, `unknown`\>

###### getModData?

```ts
optional getModData?: (state: unknown, projectile: Projectile) => Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L63)

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

Defined in: [sandkit/api/projectiles.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L68)

Blueprint used to spawn a projectile.

##### Properties

###### opts

```ts
opts: Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L69)

###### type

```ts
type: unknown
```

Defined in: [sandkit/api/projectiles.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L70)

***

#### Projectile :id=sandkit.api.projectiles.projectile

<p class="smt-member-path"><code>sandkit.api.projectiles.Projectile</code></p>

Defined in: [sandkit/api/projectiles.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L74)

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

Defined in: [sandkit/api/projectiles.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L75)

###### x

```ts
x: number
```

Defined in: [sandkit/api/projectiles.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L76)

###### y

```ts
y: number
```

Defined in: [sandkit/api/projectiles.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L77)

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.projectiles.register

<p class="smt-member-path"><code>sandkit.api.projectiles.register()</code></p>

```ts
register(definition: ProjectileDefinition): void
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

<p class="smt-member-path"><code>sandkit.api.projectiles.getDefinitionById()</code></p>

```ts
getDefinitionById(projectileId: string): ProjectileDefinition | undefined
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

<p class="smt-member-path"><code>sandkit.api.projectiles.createBlueprintFromId()</code></p>

```ts
createBlueprintFromId(projectileId: string): ProjectileBlueprint
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

<p class="smt-member-path"><code>sandkit.api.projectiles.getAll()</code></p>

```ts
getAll(): Projectile[]
```

Defined in: [sandkit/api/projectiles.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L29)

Return all active projectiles.

##### Returns

[`Projectile`](#projectile)[]

***

#### getById() :id=sandkit.api.projectiles.getbyid

<p class="smt-member-path"><code>sandkit.api.projectiles.getById()</code></p>

```ts
getById(projectileId: number): Projectile | undefined
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

<p class="smt-member-path"><code>sandkit.api.projectiles.remove()</code></p>

```ts
remove(projectile: Projectile): void
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

<p class="smt-member-path"><code>sandkit.api.projectiles.spawnAtWorld()</code></p>

```ts
spawnAtWorld(worldX: number, worldY: number, angle: number, blueprint: ProjectileBlueprint): Projectile
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

<p class="smt-member-path"><code>sandkit.api.random.int()</code></p>

```ts
int(min: number, max: number): number
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

<p class="smt-member-path"><code>sandkit.api.random.float()</code></p>

```ts
float(min: number, max: number): number
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

<p class="smt-member-path"><code>sandkit.api.raycast.castFromWorld()</code></p>

```ts
castFromWorld(startWorldX: number, startWorldY: number, angle: number, maxDistance: number): Vector2 & object | null
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

Defined in: [sandkit/api/reactions.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L18)

Contact reaction recipe definition.

##### Properties

###### inputA

```ts
inputA: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L20)

First reacting element type.

###### inputB

```ts
inputB: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L22)

Second reacting element type.

###### outputA

```ts
outputA: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L24)

Element type produced from input A, or null for no output.

###### outputB

```ts
outputB: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L26)

Element type produced from input B, or null for no output.

###### orientation?

```ts
optional orientation?: "any" | "stacked"
```

Defined in: [sandkit/api/reactions.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L28)

Contact layout requirement. Default `"any"`.

### Functions <!-- {docsify-ignore} -->

#### registerContact() :id=sandkit.api.reactions.registercontact

<p class="smt-member-path"><code>sandkit.api.reactions.registerContact()</code></p>

```ts
registerContact(definition: ContactRecipeDefinitionV1): void
```

Defined in: [sandkit/api/reactions.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L15)

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

#### getDrawPositionAtCell() :id=sandkit.api.rendering.getdrawpositionatcell

<p class="smt-member-path"><code>sandkit.api.rendering.getDrawPositionAtCell()</code></p>

```ts
getDrawPositionAtCell(...args: CellCoordinates): Vector2
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

<p class="smt-member-path"><code>sandkit.api.rendering.getDrawPositionAtWorld()</code></p>

```ts
getDrawPositionAtWorld(worldX: number, worldY: number): Vector2
```

Defined in: [sandkit/api/rendering.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L24)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.rendering.getDrawPositionAtWorld`

***

#### getGridMetrics() :id=sandkit.api.rendering.getgridmetrics

<p class="smt-member-path"><code>sandkit.api.rendering.getGridMetrics()</code></p>

```ts
getGridMetrics(): object
```

Defined in: [sandkit/api/rendering.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L26)

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

#### getOverlayViewportSize() :id=sandkit.api.rendering.getoverlayviewportsize

<p class="smt-member-path"><code>sandkit.api.rendering.getOverlayViewportSize()</code></p>

```ts
getOverlayViewportSize(): object
```

Defined in: [sandkit/api/rendering.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L28)

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

<p class="smt-member-path"><code>sandkit.api.rendering.withOverlayContext()</code></p>

```ts
withOverlayContext<T>(callback: (context: CanvasRenderingContext2D) => T): T
```

Defined in: [sandkit/api/rendering.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L33)

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

#### collectFluxiteAtCell() :id=sandkit.api.resources.collectfluxiteatcell

<p class="smt-member-path"><code>sandkit.api.resources.collectFluxiteAtCell()</code></p>

```ts
collectFluxiteAtCell(...args: CellCoordinates): void
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

<p class="smt-member-path"><code>sandkit.api.resources.updateEnergy()</code></p>

```ts
updateEnergy(amount: number, options?: object): void
```

Defined in: [sandkit/api/resources.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/resources.d.ts#L22)

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

#### getActive() :id=sandkit.api.scene.getactive

<p class="smt-member-path"><code>sandkit.api.scene.getActive()</code></p>

```ts
getActive(): Scene
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

<p class="smt-member-path"><code>sandkit.api.schedule.nextTick()</code></p>

```ts
nextTick(callback: () => void): void
```

Defined in: [sandkit/api/schedule.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/schedule.d.ts#L13)

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

#### FieldId :id=sandkit.api.settings.fieldid

<p class="smt-member-path"><code>sandkit.api.settings.FieldId</code></p>

```ts
FieldId = LooseString<never>
```

Defined in: [sandkit/api/settings.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L25)

Settings field id. Any string is allowed.

***

#### ConfigValueV1 :id=sandkit.api.settings.configvaluev1

<p class="smt-member-path"><code>sandkit.api.settings.ConfigValueV1</code></p>

```ts
ConfigValueV1 = string | number | boolean | null
```

Defined in: [sandkit/api/settings.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L28)

Settings field value shape.

### Functions <!-- {docsify-ignore} -->

#### get() :id=sandkit.api.settings.get

<p class="smt-member-path"><code>sandkit.api.settings.get()</code></p>

```ts
get(fieldId: string & object): ConfigValueV1 | undefined
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

<p class="smt-member-path"><code>sandkit.api.settings.getAll()</code></p>

```ts
getAll(): Readonly<Record<string, ConfigValueV1>>
```

Defined in: [sandkit/api/settings.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L17)

Return all settings as a read-only map.

##### Returns

`Readonly`\<`Record`\<`string`, [`ConfigValueV1`](#configvaluev1)\>\>

***

#### onChange() :id=sandkit.api.settings.onchange

<p class="smt-member-path"><code>sandkit.api.settings.onChange()</code></p>

```ts
onChange(callback: (values: Readonly<Record<string, ConfigValueV1>>) => void): () => void
```

Defined in: [sandkit/api/settings.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L22)

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

#### SharedArray :id=sandkit.api.shared.sharedarray

<p class="smt-member-path"><code>sandkit.api.shared.SharedArray</code></p>

```ts
SharedArray = Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array
```

Defined in: [shared/api/shared.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L28)

Typed array backing a shared buffer.

Use [SharedArrayType](#sharedarraytype) when creating or requiring a buffer. The runtime
returns the matching `*Array` constructor for the configured type.

***

#### SharedArrayType :id=sandkit.api.shared.sharedarraytype

<p class="smt-member-path"><code>sandkit.api.shared.SharedArrayType</code></p>

```ts
SharedArrayType = "uint8" | "uint16" | "uint32" | "int8" | "int16" | "int32" | "float32" | "float64"
```

Defined in: [shared/api/shared.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L39)

Discriminator for the underlying typed array kind.

---

## sandkit.api.shared.buffers

Shared buffer ensure and lookup.

### Functions <!-- {docsify-ignore} -->

#### ensure() :id=sandkit.api.shared.buffers.ensure

<p class="smt-member-path"><code>sandkit.api.shared.buffers.ensure()</code></p>

```ts
ensure(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L21)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.shared.buffers.ensure`

***

#### ~~create()~~

```ts
create(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L27)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.shared.buffers.ensure`

***

#### get() :id=sandkit.api.shared.buffers.get

<p class="smt-member-path"><code>sandkit.api.shared.buffers.get()</code></p>

```ts
get(key: string): SharedArray | undefined
```

Defined in: [shared/api/shared.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L19)

Look up a named shared buffer without creating it.

##### Parameters

###### key

`string`

Buffer name shared across threads.

##### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray) \| `undefined`

The typed array, or `undefined` when the buffer does not exist.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.shared.buffers.get`

---

## sandkit.api.signals

### Namespaces <!-- {docsify-ignore} -->

- [targets](api/sandkit.api.signals.targets.md)

### Type Aliases <!-- {docsify-ignore} -->

#### StructureType :id=sandkit.api.signals.structuretype

<p class="smt-member-path"><code>sandkit.api.signals.StructureType</code></p>

```ts
StructureType = unknown
```

Defined in: [sandkit/api/signals.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L20)

Structure type id or enum value.

***

#### Structure :id=sandkit.api.signals.structure

<p class="smt-member-path"><code>sandkit.api.signals.Structure</code></p>

```ts
Structure = unknown
```

Defined in: [sandkit/api/signals.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L22)

Structure instance in the world.

***

#### SignalTargetPayloadV1 :id=sandkit.api.signals.signaltargetpayloadv1

<p class="smt-member-path"><code>sandkit.api.signals.SignalTargetPayloadV1</code></p>

```ts
SignalTargetPayloadV1 = unknown
```

Defined in: [sandkit/api/signals.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L24)

Payload delivered to a signal target handler.

---

## sandkit.api.signals.targets

Signal target registration for structure types.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.signals.targets.register

<p class="smt-member-path"><code>sandkit.api.signals.targets.register()</code></p>

```ts
register(structureTypeOrId: unknown, apply: (structure: unknown, payload: unknown) => void): void
```

Defined in: [sandkit/api/signals.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L16)

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

#### SoundHandle :id=sandkit.api.sound.soundhandle

<p class="smt-member-path"><code>sandkit.api.sound.SoundHandle</code></p>

Defined in: [sandkit/api/sound.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L75)

Handle returned from a play call.

##### Methods

###### stop()

```ts
stop(): void
```

Defined in: [sandkit/api/sound.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L77)

Stop this sound instance.

###### Returns

`void`

***

#### SoundLayer :id=sandkit.api.sound.soundlayer

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayer</code></p>

Defined in: [sandkit/api/sound.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L81)

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

Defined in: [sandkit/api/sound.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L83)

Sound id for this layer.

###### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L85)

Layer volume multiplier.

###### delay?

```ts
optional delay?: number
```

Defined in: [sandkit/api/sound.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L87)

Delay in milliseconds before this layer plays.

###### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L89)

Playback rate for this layer.

***

#### SoundOptions :id=sandkit.api.sound.soundoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundOptions</code></p>

Defined in: [sandkit/api/sound.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L94)

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

Defined in: [sandkit/api/sound.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L96)

Volume multiplier (0–1 typical).

###### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L98)

Playback rate multiplier.

###### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L100)

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

Defined in: [sandkit/api/sound.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L102)

When true, loop until stopped.

###### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L104)

Key used with rateLimitMs to dedupe rapid replays.

###### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L106)

Minimum ms between plays with the same rateLimitKey.

***

#### SoundLayersOptions :id=sandkit.api.sound.soundlayersoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayersOptions</code></p>

Defined in: [sandkit/api/sound.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L111)

Shared options for [playLayers](#playlayers).

##### Properties

###### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L113)

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

Defined in: [sandkit/api/sound.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L115)

Volume multiplier applied to all layers.

###### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L117)

Key used with rateLimitMs to dedupe rapid replays.

###### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L119)

Minimum ms between plays with the same rateLimitKey.

### Functions <!-- {docsify-ignore} -->

#### play() :id=sandkit.api.sound.play

<p class="smt-member-path"><code>sandkit.api.sound.play()</code></p>

```ts
play(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L16)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.sound.play`

***

#### playActive() :id=sandkit.api.sound.playactive

<p class="smt-member-path"><code>sandkit.api.sound.playActive()</code></p>

```ts
playActive(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L25)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.sound.playActive`

***

#### playLayers() :id=sandkit.api.sound.playlayers

<p class="smt-member-path"><code>sandkit.api.sound.playLayers()</code></p>

```ts
playLayers(layers: SoundLayer[], options?: SoundLayersOptions): SoundHandle[]
```

Defined in: [sandkit/api/sound.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L34)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.sound.playLayers`

***

#### calculateDistanceOptionsAtWorld() :id=sandkit.api.sound.calculatedistanceoptionsatworld

<p class="smt-member-path"><code>sandkit.api.sound.calculateDistanceOptionsAtWorld()</code></p>

```ts
calculateDistanceOptionsAtWorld(worldX: number, worldY: number, baseVolume?: number): SoundOptions
```

Defined in: [sandkit/api/sound.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L44)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.sound.calculateDistanceOptionsAtWorld`

***

#### stopBySoundId() :id=sandkit.api.sound.stopbysoundid

<p class="smt-member-path"><code>sandkit.api.sound.stopBySoundId()</code></p>

```ts
stopBySoundId(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L52)

Stop a sound by id.

##### Parameters

###### soundId

`string`

Registered sound identifier to stop.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.sound.stopBySoundId`

***

#### ~~stopById()~~

```ts
stopById(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L58)

##### Parameters

###### soundId

`string`

##### Returns

`void`

##### Deprecated

Use [stopBySoundId](#stopbysoundid) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.sound.stopBySoundId`

***

#### stopActive() :id=sandkit.api.sound.stopactive

<p class="smt-member-path"><code>sandkit.api.sound.stopActive()</code></p>

```ts
stopActive(): void
```

Defined in: [sandkit/api/sound.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L65)

Stop the active sound channel.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.sound.stopActive`

***

#### stopAll() :id=sandkit.api.sound.stopall

<p class="smt-member-path"><code>sandkit.api.sound.stopAll()</code></p>

```ts
stopAll(): void
```

Defined in: [sandkit/api/sound.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L72)

Stop all playing sounds.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.sound.stopAll`

---

## sandkit.api.sprites

### Interfaces <!-- {docsify-ignore} -->

#### SpriteLoadOptions :id=sandkit.api.sprites.spriteloadoptions

<p class="smt-member-path"><code>sandkit.api.sprites.SpriteLoadOptions</code></p>

Defined in: [sandkit/api/sprites.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L40)

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

Defined in: [sandkit/api/sprites.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L42)

Packed RGB tint applied after load.

### Type Aliases <!-- {docsify-ignore} -->

#### LoadedSprite :id=sandkit.api.sprites.loadedsprite

<p class="smt-member-path"><code>sandkit.api.sprites.LoadedSprite</code></p>

```ts
LoadedSprite = unknown
```

Defined in: [sandkit/api/sprites.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L37)

Loaded sprite handle (runtime texture or display object).

### Functions <!-- {docsify-ignore} -->

#### load() :id=sandkit.api.sprites.load

<p class="smt-member-path"><code>sandkit.api.sprites.load()</code></p>

```ts
load(spriteId: string, path: string, options?: SpriteLoadOptions): Promise<void>
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

<p class="smt-member-path"><code>sandkit.api.sprites.loadFromMod()</code></p>

```ts
loadFromMod(spriteId: string, relativePath: string, options?: SpriteLoadOptions): Promise<void>
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

<p class="smt-member-path"><code>sandkit.api.sprites.getById()</code></p>

```ts
getById(spriteId: string): unknown
```

Defined in: [sandkit/api/sprites.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L27)

Return a loaded sprite by id.

##### Parameters

###### spriteId

`string`

Sprite id from [load](#load) or [loadFromMod](#loadfrommod).

##### Returns

`unknown`

***

#### hideAllPlayerModSprites() :id=sandkit.api.sprites.hideallplayermodsprites

<p class="smt-member-path"><code>sandkit.api.sprites.hideAllPlayerModSprites()</code></p>

```ts
hideAllPlayerModSprites(): void
```

Defined in: [sandkit/api/sprites.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L29)

Hide all player mod-attached sprites.

##### Returns

`void`

***

#### rotatePlayerModSprites() :id=sandkit.api.sprites.rotateplayermodsprites

<p class="smt-member-path"><code>sandkit.api.sprites.rotatePlayerModSprites()</code></p>

```ts
rotatePlayerModSprites(angle: number): void
```

Defined in: [sandkit/api/sprites.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L34)

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

<p class="smt-member-path"><code>sandkit.api.storage.ensure()</code></p>

```ts
ensure(modId: string): JsonObjectV1
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

<p class="smt-member-path"><code>sandkit.api.storage.get()</code></p>

```ts
get(modId: string, key: string): JsonValueV1 | undefined
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

<p class="smt-member-path"><code>sandkit.api.storage.set()</code></p>

```ts
set(modId: string, key: string, value: JsonValueV1): void
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

<p class="smt-member-path"><code>sandkit.api.storage.remove()</code></p>

```ts
remove(modId: string, key: string): void
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

<p class="smt-member-path"><code>sandkit.api.storage.local.get()</code></p>

```ts
get(key: string): JsonValueV1 | undefined
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

<p class="smt-member-path"><code>sandkit.api.storage.local.set()</code></p>

```ts
set(key: string, value: JsonValueV1): void
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

<p class="smt-member-path"><code>sandkit.api.storage.local.remove()</code></p>

```ts
remove(key: string): void
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

<p class="smt-member-path"><code>sandkit.api.structureBehaviors.registerConveyorType()</code></p>

```ts
registerConveyorType(structureId: string, options?: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structureBehaviors.d.ts#L16)

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

#### registerLauncherType() :id=sandkit.api.structureBehaviors.registerlaunchertype

<p class="smt-member-path"><code>sandkit.api.structureBehaviors.registerLauncherType()</code></p>

```ts
registerLauncherType(definition: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structureBehaviors.d.ts#L21)

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

Defined in: [sandkit/api/structures.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L315)

Build mode entry for a structure definition.

##### Properties

###### type

```ts
type: string
```

Defined in: [sandkit/api/structures.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L316)

###### directions?

```ts
optional directions?: string[]
```

Defined in: [sandkit/api/structures.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L317)

###### spanTiles?

```ts
optional spanTiles?: number
```

Defined in: [sandkit/api/structures.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L323)

Fixed span length in tiles for line-linked structures.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

***

#### StructureVariant :id=sandkit.api.structures.structurevariant

<p class="smt-member-path"><code>sandkit.api.structures.StructureVariant</code></p>

Defined in: [sandkit/api/structures.d.ts:327](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L327)

Rotated variant entry for a structure definition.

##### Properties

###### id

```ts
id: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:328](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L328)

###### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L329)

***

#### StructureTooltipHover :id=sandkit.api.structures.structuretooltiphover

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHover</code></p>

Defined in: [sandkit/api/structures.d.ts:337](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L337)

Custom hover tooltip driven by structure `data` fields.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

##### Properties

###### type

```ts
type: "custom"
```

Defined in: [sandkit/api/structures.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L338)

###### dataFieldMessage

```ts
dataFieldMessage: object
```

Defined in: [sandkit/api/structures.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L339)

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

Defined in: [sandkit/api/structures.d.ts:347](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L347)

One interpolated field in a [StructureTooltipHover](#structuretooltiphover) message.

##### Properties

###### param

```ts
param: string
```

Defined in: [sandkit/api/structures.d.ts:348](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L348)

###### field

```ts
field: string
```

Defined in: [sandkit/api/structures.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L349)

###### fallback?

```ts
optional fallback?: string | number
```

Defined in: [sandkit/api/structures.d.ts:350](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L350)

###### round?

```ts
optional round?: boolean
```

Defined in: [sandkit/api/structures.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L351)

###### valueLabels?

```ts
optional valueLabels?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:352](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L352)

###### valueKeys?

```ts
optional valueKeys?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:353](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L353)

***

#### StructureSpritesheet :id=sandkit.api.structures.structurespritesheet

<p class="smt-member-path"><code>sandkit.api.structures.StructureSpritesheet</code></p>

Defined in: [sandkit/api/structures.d.ts:357](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L357)

Spritesheet animation on a structure render block.

##### Properties

###### frameSize

```ts
frameSize: object
```

Defined in: [sandkit/api/structures.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L358)

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

Defined in: [sandkit/api/structures.d.ts:359](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L359)

###### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:360](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L360)

###### rowDataField?

```ts
optional rowDataField?: string
```

Defined in: [sandkit/api/structures.d.ts:362](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L362)

When set, frame row follows this structure `data` field.

***

#### StructureRenderUi :id=sandkit.api.structures.structurerenderui

<p class="smt-member-path"><code>sandkit.api.structures.StructureRenderUi</code></p>

Defined in: [sandkit/api/structures.d.ts:366](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L366)

Hotbar / build-menu UI sprite settings.

##### Properties

###### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L367)

###### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:368](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L368)

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

Defined in: [sandkit/api/structures.d.ts:369](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L369)

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

Defined in: [sandkit/api/structures.d.ts:370](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L370)

###### width?

```ts
optional width?: string
```

Defined in: [sandkit/api/structures.d.ts:371](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L371)

###### height?

```ts
optional height?: string
```

Defined in: [sandkit/api/structures.d.ts:372](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L372)

###### clipToBounds?

```ts
optional clipToBounds?: boolean
```

Defined in: [sandkit/api/structures.d.ts:373](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L373)

***

#### StructureRender :id=sandkit.api.structures.structurerender

<p class="smt-member-path"><code>sandkit.api.structures.StructureRender</code></p>

Defined in: [sandkit/api/structures.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L377)

Render settings for a structure definition.

##### Properties

###### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:378](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L378)

###### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:379](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L379)

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

Defined in: [sandkit/api/structures.d.ts:380](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L380)

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

Defined in: [sandkit/api/structures.d.ts:381](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L381)

###### ambienceGroup?

```ts
optional ambienceGroup?: string
```

Defined in: [sandkit/api/structures.d.ts:382](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L382)

###### ui?

```ts
optional ui?: StructureRenderUi
```

Defined in: [sandkit/api/structures.d.ts:383](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L383)

###### spritesheet?

```ts
optional spritesheet?: StructureSpritesheet
```

Defined in: [sandkit/api/structures.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L384)

***

#### SandkitStructureDefinition :id=sandkit.api.structures.sandkitstructuredefinition

<p class="smt-member-path"><code>sandkit.api.structures.SandkitStructureDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:388](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L388)

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

Defined in: [sandkit/api/structures.d.ts:389](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L389)

###### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/structures.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L390)

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:391](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L391)

###### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/structures.d.ts:392](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L392)

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:393](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L393)

###### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:394](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L394)

###### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L395)

###### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:396](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L396)

###### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L397)

###### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:398](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L398)

###### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L399)

###### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:400](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L400)

###### linkedClearance?

```ts
optional linkedClearance?: string
```

Defined in: [sandkit/api/structures.d.ts:406](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L406)

Linked placement clearance mode (for example `"allOrNothing"`).

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

###### tooltipHover?

```ts
optional tooltipHover?: StructureTooltipHover
```

Defined in: [sandkit/api/structures.d.ts:412](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L412)

Custom hover tooltip over the built structure.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

###### rejectWhenBlocked?

```ts
optional rejectWhenBlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:414](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L414)

Reject placement when the footprint is blocked.

###### alwaysUnlocked?

```ts
optional alwaysUnlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:416](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L416)

Show in the build menu without research unlock.

###### descriptionParams?

```ts
optional descriptionParams?: Record<string, string | number>
```

Defined in: [sandkit/api/structures.d.ts:418](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L418)

Values interpolated into the structure description string.

***

#### StructureBuildOptions :id=sandkit.api.structures.structurebuildoptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:423](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L423)

Options passed to [buildAtCell](#buildatcell).

##### Indexable

```ts
[key: string]: unknown
```

***

#### StructureRemovalOptions :id=sandkit.api.structures.structureremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:428](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L428)

Options passed to [removeAtCell](#removeatcell).

##### Properties

###### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:430](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L430)

Also remove underlying terrain cells in the footprint.

###### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:432](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L432)

Skip visual teardown effects.

***

#### StructureBulkRemovalOptions :id=sandkit.api.structures.structurebulkremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBulkRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:436](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L436)

Options passed to bulk structure removal helpers.

##### Properties

###### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:437](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L437)

###### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:438](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L438)

###### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:440](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L440)

When set, only remove structures at these positions.

###### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L441)

***

#### StructureProcessingContext :id=sandkit.api.structures.structureprocessingcontext

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingContext</code></p>

Defined in: [sandkit/api/structures.d.ts:449](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L449)

Context passed to structure processing callbacks.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

##### Methods

###### getResolvedTypeAtCell()

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:455](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L455)

Return the resolved element type at a cell, or null.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

###### ~~getElementTypeAtCell()~~

```ts
getElementTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:461](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L461)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### Deprecated

Use [getResolvedTypeAtCell](#getresolvedtypeatcell) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias in `api.structures.processing.register` context

###### isCellEmptyAtCell()

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:468](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L468)

Return true when the cell has no element or terrain.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

###### ~~isCellEmpty()~~

```ts
isCellEmpty(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:474](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L474)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### Deprecated

Use [isCellEmptyAtCell](#iscellemptyatcell) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias in `api.structures.processing.register` context

###### commit()

```ts
commit(mutations: unknown): void
```

Defined in: [sandkit/api/structures.d.ts:482](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L482)

Commit batched grid mutations from the processing callback.

###### Parameters

###### mutations

`unknown`

Mutation writer payload accepted by the runtime.

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

***

#### ~~StructureProcessorDefinitionV1~~

Defined in: [sandkit/api/structures.d.ts:489](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L489)

##### Deprecated

Use [StructureProcessingDefinitionV1](#structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md#register) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.processing.register`

##### Properties

###### ~~intervalMs~~

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:491](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L491)

Tick interval in milliseconds. Must be > 0.

###### ~~process~~

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:493](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L493)

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

Defined in: [sandkit/api/structures.d.ts:502](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L502)

Integer placement field with optional bounds.

##### Properties

###### type

```ts
type: "integer"
```

Defined in: [sandkit/api/structures.d.ts:503](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L503)

###### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:504](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L504)

###### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:505](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L505)

###### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:506](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L506)

###### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:507](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L507)

###### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:508](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L508)

***

#### PlacementConfigChoiceField :id=sandkit.api.structures.placementconfigchoicefield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigChoiceField</code></p>

Defined in: [sandkit/api/structures.d.ts:512](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L512)

Choice placement field with labeled options.

##### Properties

###### type

```ts
type: "choice"
```

Defined in: [sandkit/api/structures.d.ts:513](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L513)

###### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:514](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L514)

###### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:515](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L515)

###### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:516](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L516)

***

#### PlacementConfigDefinition :id=sandkit.api.structures.placementconfigdefinition

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:523](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L523)

Placement rule definition for a structure type.

##### Properties

###### structureId

```ts
structureId: string & object
```

Defined in: [sandkit/api/structures.d.ts:524](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L524)

###### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:525](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L525)

***

#### WeightedRefineryRecipeDefinitionV1 :id=sandkit.api.structures.weightedrefineryrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.WeightedRefineryRecipeDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:536](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L536)

Weighted refinery recipe definition shape.

##### Properties

###### input

```ts
input: ElementType
```

Defined in: [sandkit/api/structures.d.ts:537](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L537)

###### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:538](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L538)

***

#### StructureProcessingDefinitionV1 :id=sandkit.api.structures.structureprocessingdefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:542](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L542)

Custom structure processing definition shape.

##### Properties

###### structureType

```ts
structureType: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:543](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L543)

###### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:544](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L544)

###### process

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:545](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L545)

###### Parameters

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### context

[`StructureProcessingContext`](#structureprocessingcontext)

###### Returns

`void`

### Type Aliases <!-- {docsify-ignore} -->

#### PlacementConfigField :id=sandkit.api.structures.placementconfigfield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigField</code></p>

```ts
PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

Defined in: [sandkit/api/structures.d.ts:497](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L497)

Placement hotbar field definition.

***

#### PlanterBoxRecipeDefinitionV1 :id=sandkit.api.structures.planterboxrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.PlanterBoxRecipeDefinitionV1</code></p>

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:529](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L529)

Planter box recipe definition shape.

***

#### ShakerRecipeDefinitionV1 :id=sandkit.api.structures.shakerrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.ShakerRecipeDefinitionV1</code></p>

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:531](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L531)

Shaker recipe definition shape.

***

#### KineticPressRecipeDefinitionV1 :id=sandkit.api.structures.kineticpressrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.KineticPressRecipeDefinitionV1</code></p>

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:533](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L533)

Kinetic press recipe definition shape.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.structures.register

<p class="smt-member-path"><code>sandkit.api.structures.register()</code></p>

```ts
register(definition: SandkitStructureDefinition, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L71)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

***

#### updateDefinition() :id=sandkit.api.structures.updatedefinition

<p class="smt-member-path"><code>sandkit.api.structures.updateDefinition()</code></p>

```ts
updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L81)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.updateDefinition`

***

#### registerVariant() :id=sandkit.api.structures.registervariant

<p class="smt-member-path"><code>sandkit.api.structures.registerVariant()</code></p>

```ts
registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L91)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.registerVariant`

***

#### ~~addVariant()~~

```ts
addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L97)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.registerVariant`

***

#### registerPlacementConfig() :id=sandkit.api.structures.registerplacementconfig

<p class="smt-member-path"><code>sandkit.api.structures.registerPlacementConfig()</code></p>

```ts
registerPlacementConfig(definition: PlacementConfigDefinition): void
```

Defined in: [sandkit/api/structures.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L105)

Register placement rules for a structure.

##### Parameters

###### definition

[`PlacementConfigDefinition`](#placementconfigdefinition)

Hotbar placement field configuration.

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.registerPlacementConfig`

***

#### getAvailableTypes() :id=sandkit.api.structures.getavailabletypes

<p class="smt-member-path"><code>sandkit.api.structures.getAvailableTypes()</code></p>

```ts
getAvailableTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L112)

Return structure types available for building.

##### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getAvailableTypes`

***

#### ~~getUnlockedTypes()~~

```ts
getUnlockedTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L118)

##### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

##### Deprecated

Use [getAvailableTypes](#getavailabletypes) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.getAvailableTypes`

***

#### isBlockedByPlayerAtCell() :id=sandkit.api.structures.isblockedbyplayeratcell

<p class="smt-member-path"><code>sandkit.api.structures.isBlockedByPlayerAtCell()</code></p>

```ts
isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L127)

Return true when the player blocks building at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isBlockedByPlayerAtCell`

***

#### isLauncherAtCell() :id=sandkit.api.structures.islauncheratcell

<p class="smt-member-path"><code>sandkit.api.structures.isLauncherAtCell()</code></p>

```ts
isLauncherAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L136)

Return true when a launcher structure is at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isLauncherAtCell`

***

#### isLockedByType() :id=sandkit.api.structures.islockedbytype

<p class="smt-member-path"><code>sandkit.api.structures.isLockedByType()</code></p>

```ts
isLockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L147)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isLockedByType`

***

#### ~~isUnlockedByType()~~

```ts
isUnlockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L153)

##### Parameters

###### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

##### Returns

`boolean`

##### Deprecated

Use [isLockedByType](#islockedbytype) instead. Same function as [isLockedByType](#islockedbytype); return value is not inverted.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.isLockedByType`

***

#### mapValueToSpritesheetIndex() :id=sandkit.api.structures.mapvaluetospritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.mapValueToSpritesheetIndex()</code></p>

```ts
mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

Defined in: [sandkit/api/structures.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L163)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.mapValueToSpritesheetIndex`

***

#### buildAtCell() :id=sandkit.api.structures.buildatcell

<p class="smt-member-path"><code>sandkit.api.structures.buildAtCell()</code></p>

```ts
buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L174)

Build a structure at a cell. Main-thread writes are deferred.

##### Parameters

###### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.buildAtCell`

***

#### ~~buildAtCellWhenIdle()~~

```ts
buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L180)

##### Parameters

###### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

##### Returns

`void`

##### Deprecated

Use [buildAtCell](#buildatcell) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.buildAtCell`

***

#### removeAtCell() :id=sandkit.api.structures.removeatcell

<p class="smt-member-path"><code>sandkit.api.structures.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L190)

Remove a structure at a cell. Main-thread writes are deferred.

##### Parameters

###### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.removeAtCell`

***

#### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L196)

##### Parameters

###### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

##### Returns

`void`

##### Deprecated

Use [removeAtCell](#removeatcell) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.removeAtCell`

***

#### removeBetweenCells() :id=sandkit.api.structures.removebetweencells

<p class="smt-member-path"><code>sandkit.api.structures.removeBetweenCells()</code></p>

```ts
removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L208)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.removeBetweenCells`

***

#### ~~removeBetweenCellsWhenIdle()~~

```ts
removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L214)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.removeBetweenCells`

***

#### removeAtCells() :id=sandkit.api.structures.removeatcells

<p class="smt-member-path"><code>sandkit.api.structures.removeAtCells()</code></p>

```ts
removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L223)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.removeAtCells`

***

#### ~~removeAtCellsWhenIdle()~~

```ts
removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L229)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.removeAtCells`

***

#### ~~addProcessor()~~

```ts
addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L235)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.processing.register`

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

<p class="smt-member-path"><code>sandkit.api.structures.processing.register()</code></p>

```ts
register(id: string & object, definition: StructureProcessingDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:294](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L294)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

***

#### setEnabledAtCell() :id=sandkit.api.structures.processing.setenabledatcell

<p class="smt-member-path"><code>sandkit.api.structures.processing.setEnabledAtCell()</code></p>

```ts
setEnabledAtCell(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:305](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L305)

Enable or disable processing at a cell.

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`boolean`

True when the enabled state changed.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.setEnabledAtCell`

***

#### ~~setEnabledAt()~~

```ts
setEnabledAt(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L311)

##### Parameters

###### args

...\[`number`, `number`, `boolean`\]

##### Returns

`boolean`

##### Deprecated

Use [setEnabledAtCell](#setenabledatcell) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.processing.setEnabledAtCell`

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

Defined in: [sandkit/api/structures.d.ts:246](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L246)

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

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.recipes.register`

##### Call Signature

```ts
register(id: "shaker", definition: ShakerRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L255)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.recipes.register`

##### Call Signature

```ts
register(id: "kineticPress", definition: KineticPressRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L264)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.recipes.register`

##### Call Signature

```ts
register(id: "condenser" | "steamDryer" | "synthesizer" | "snowmaker" | "smelter", definition: WeightedRefineryRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:273](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L273)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.recipes.register`

---

## sandkit.api.tech

### Namespaces <!-- {docsify-ignore} -->

- [conservatory](api/sandkit.api.tech.conservatory.md)

### Interfaces <!-- {docsify-ignore} -->

#### TechDefinition :id=sandkit.api.tech.techdefinition

<p class="smt-member-path"><code>sandkit.api.tech.TechDefinition</code></p>

Defined in: [sandkit/api/tech.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L98)

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

Defined in: [sandkit/api/tech.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L100)

Plain display name (when not using [nameKey](#namekey)).

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/tech.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L102)

Display name translation key.

###### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/tech.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L104)

Plain description (when not using [descriptionKey](#descriptionkey)).

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/tech.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L106)

Description translation key.

###### cost?

```ts
optional cost?: number
```

Defined in: [sandkit/api/tech.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L112)

Research cost.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.registerDefinition`

###### currencyType?

```ts
optional currencyType?: string
```

Defined in: [sandkit/api/tech.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L114)

Currency used for [cost](#cost) (for example `"gold"`).

###### branch?

```ts
optional branch?: string
```

Defined in: [sandkit/api/tech.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L116)

Tech tree branch id (often copied from the parent node).

###### unlocks?

```ts
optional unlocks?: object
```

Defined in: [sandkit/api/tech.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L118)

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

Defined in: [sandkit/api/tech.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L123)

Prerequisite tech ids.

***

#### TechGridPosition :id=sandkit.api.tech.techgridposition

<p class="smt-member-path"><code>sandkit.api.tech.TechGridPosition</code></p>

Defined in: [sandkit/api/tech.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L128)

Position on the tech grid.

##### Properties

###### x

```ts
x: number
```

Defined in: [sandkit/api/tech.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L129)

###### y

```ts
y: number
```

Defined in: [sandkit/api/tech.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L130)

***

#### ConservatoryUnlocks :id=sandkit.api.tech.conservatoryunlocks

<p class="smt-member-path"><code>sandkit.api.tech.ConservatoryUnlocks</code></p>

Defined in: [sandkit/api/tech.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L134)

Unlock payload for [conservatory.appendUnlock](api/sandkit.api.tech.conservatory.md#appendunlock).

##### Properties

###### structures?

```ts
optional structures?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L136)

Structure ids to unlock.

###### items?

```ts
optional items?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L138)

Item ids to unlock.

### Type Aliases <!-- {docsify-ignore} -->

#### TechGridId :id=sandkit.api.tech.techgridid

<p class="smt-member-path"><code>sandkit.api.tech.TechGridId</code></p>

```ts
TechGridId = Tech | LooseString<never> | TaggedNumber<"tech">
```

Defined in: [sandkit/api/tech.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L95)

Tech grid node id.
Built-in [TechEnum](api/sandkit.enums.Tech.md) values autocomplete; custom string ids and tagged handles are allowed.

### Functions <!-- {docsify-ignore} -->

#### getDefinitionById() :id=sandkit.api.tech.getdefinitionbyid

<p class="smt-member-path"><code>sandkit.api.tech.getDefinitionById()</code></p>

```ts
getDefinitionById(techId: TechGridId): TechDefinition | undefined
```

Defined in: [sandkit/api/tech.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L18)

Return a tech definition by string id.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

##### Returns

[`TechDefinition`](#techdefinition) \| `undefined`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.getDefinitionById`

***

#### updateDefinition() :id=sandkit.api.tech.updatedefinition

<p class="smt-member-path"><code>sandkit.api.tech.updateDefinition()</code></p>

```ts
updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void
```

Defined in: [sandkit/api/tech.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L27)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.updateDefinition`

***

#### registerDefinition() :id=sandkit.api.tech.registerdefinition

<p class="smt-member-path"><code>sandkit.api.tech.registerDefinition()</code></p>

```ts
registerDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L36)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.registerDefinition`

***

#### ~~addDefinition()~~

```ts
addDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L42)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.tech.registerDefinition`

***

#### registerNode() :id=sandkit.api.tech.registernode

<p class="smt-member-path"><code>sandkit.api.tech.registerNode()</code></p>

```ts
registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition
```

Defined in: [sandkit/api/tech.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L52)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.registerNode`

***

#### isLockedById() :id=sandkit.api.tech.islockedbyid

<p class="smt-member-path"><code>sandkit.api.tech.isLockedById()</code></p>

```ts
isLockedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L60)

Return true when a tech entry is locked.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.isLockedById`

***

#### setLockedById() :id=sandkit.api.tech.setlockedbyid

<p class="smt-member-path"><code>sandkit.api.tech.setLockedById()</code></p>

```ts
setLockedById(techId: TechGridId, locked: boolean): void
```

Defined in: [sandkit/api/tech.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L69)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.setLockedById`

***

#### isResearchedById() :id=sandkit.api.tech.isresearchedbyid

<p class="smt-member-path"><code>sandkit.api.tech.isResearchedById()</code></p>

```ts
isResearchedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L77)

Return true when a tech entry has been researched.

##### Parameters

###### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.isResearchedById`

---

## sandkit.api.tech.conservatory

Conservatory unlock wiring for built-in tech nodes.

### Functions <!-- {docsify-ignore} -->

#### appendUnlock() :id=sandkit.api.tech.conservatory.appendunlock

<p class="smt-member-path"><code>sandkit.api.tech.conservatory.appendUnlock()</code></p>

```ts
appendUnlock(techId: TechGridId, unlocks: ConservatoryUnlocks): void
```

Defined in: [sandkit/api/tech.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L88)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.tech.conservatory.appendUnlock`

---

## sandkit.api.terrains

### Interfaces <!-- {docsify-ignore} -->

#### TerrainDefinition :id=sandkit.api.terrains.terraindefinition

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDefinition</code></p>

Defined in: [sandkit/api/terrains.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L53)

Terrain definition shape with typed element interactions.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.register`

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

Defined in: [sandkit/api/terrains.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L55)

Tooltip interactions shown for this terrain.

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.terrains.register

<p class="smt-member-path"><code>sandkit.api.terrains.register()</code></p>

```ts
register(definition: TerrainDefinition): object
```

Defined in: [sandkit/api/terrains.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L65)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.register`

***

#### updateDefinition() :id=sandkit.api.terrains.updatedefinition

<p class="smt-member-path"><code>sandkit.api.terrains.updateDefinition()</code></p>

```ts
updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

Defined in: [sandkit/api/terrains.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L74)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.updateDefinition`

***

#### createAtCell() :id=sandkit.api.terrains.createatcell

<p class="smt-member-path"><code>sandkit.api.terrains.createAtCell()</code></p>

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L85)

Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.createAtCell`

***

#### ~~createAtCellWhenIdle()~~

```ts
createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L91)

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### Deprecated

Use [createAtCell](#createatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.createAtCell`

***

#### replaceAtCell() :id=sandkit.api.terrains.replaceatcell

<p class="smt-member-path"><code>sandkit.api.terrains.replaceAtCell()</code></p>

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L102)

Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.replaceAtCell`

***

#### ~~replaceAtCellWhenIdle()~~

```ts
replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L108)

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.replaceAtCell`

***

#### removeAtCell() :id=sandkit.api.terrains.removeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L118)

Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.removeAtCell`

***

#### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L124)

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

##### Returns

`void`

##### Deprecated

Use [removeAtCell](#removeatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.removeAtCell`

***

#### setHitPointsAtCell() :id=sandkit.api.terrains.sethitpointsatcell

<p class="smt-member-path"><code>sandkit.api.terrains.setHitPointsAtCell()</code></p>

```ts
setHitPointsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L134)

Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.setHitPointsAtCell`

***

#### ~~setHpAtCell()~~

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [sandkit/api/terrains.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L140)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

##### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`

***

#### ~~setHpAtCellWhenIdle()~~

```ts
setHpAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L146)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`

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

<p class="smt-member-path"><code>sandkit.api.time.getTimeMs()</code></p>

```ts
getTimeMs(): number
```

Defined in: [sandkit/api/time.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/time.d.ts#L10)

Return elapsed game time in milliseconds.

##### Returns

`number`

***

#### getTick() :id=sandkit.api.time.gettick

<p class="smt-member-path"><code>sandkit.api.time.getTick()</code></p>

```ts
getTick(): number
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

<p class="smt-member-path"><code>sandkit.api.tools.grabber.setSize()</code></p>

```ts
setSize(size: number): void
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

<p class="smt-member-path"><code>sandkit.api.tools.grabber.getSize()</code></p>

```ts
getSize(): number
```

Defined in: [sandkit/api/tools.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L21)

Return current grabber radius size.

##### Returns

`number`

Grab radius in cells.

***

#### isActive() :id=sandkit.api.tools.grabber.isactive

<p class="smt-member-path"><code>sandkit.api.tools.grabber.isActive()</code></p>

```ts
isActive(): boolean
```

Defined in: [sandkit/api/tools.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L27)

Return true when grabber tool is active.

##### Returns

`boolean`

True when the grabber is the active tool.

***

#### isLoaded() :id=sandkit.api.tools.grabber.isloaded

<p class="smt-member-path"><code>sandkit.api.tools.grabber.isLoaded()</code></p>

```ts
isLoaded(): boolean
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

Defined in: [sandkit/api/triggers.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L17)

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

Defined in: [sandkit/api/triggers.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L19)

Interval between callbacks in simulation ticks.

###### callback

```ts
callback: () => void
```

Defined in: [sandkit/api/triggers.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L21)

Called each time the trigger fires.

###### Returns

`void`

### Functions <!-- {docsify-ignore} -->

#### register() :id=sandkit.api.triggers.register

<p class="smt-member-path"><code>sandkit.api.triggers.register()</code></p>

```ts
register(triggerId: string, definition: MainTriggerDefinition): void
```

Defined in: [sandkit/api/triggers.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L14)

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

#### TooltipMessageData :id=sandkit.api.ui.tooltipmessagedata

<p class="smt-member-path"><code>sandkit.api.ui.TooltipMessageData</code></p>

Defined in: [sandkit/api/ui.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L137)

Message tooltip with localized body text.

##### Properties

###### type

```ts
type: "message"
```

Defined in: [sandkit/api/ui.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L139)

Discriminator for tooltip renderer selection.

###### text

```ts
text: LocalizedText
```

Defined in: [sandkit/api/ui.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L141)

Message body as localized text.

***

#### Focusable :id=sandkit.api.ui.focusable

<p class="smt-member-path"><code>sandkit.api.ui.Focusable</code></p>

Defined in: [sandkit/api/ui.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L145)

Focusable element state from useFocusable.

##### Type Parameters

###### T

`T` *extends* `HTMLElement` = `HTMLDivElement`

##### Properties

###### ref

```ts
readonly ref: RefObject<T>
```

Defined in: [sandkit/api/ui.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L147)

Ref to attach to the focusable element.

###### focused

```ts
readonly focused: boolean
```

Defined in: [sandkit/api/ui.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L149)

True when the element has controller focus.

###### focus

```ts
readonly focus: () => void
```

Defined in: [sandkit/api/ui.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L151)

Move controller focus to this element.

###### Returns

`void`

***

#### FocusOptions :id=sandkit.api.ui.focusoptions

<p class="smt-member-path"><code>sandkit.api.ui.FocusOptions</code></p>

Defined in: [sandkit/api/ui.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L155)

Options for useFocusable registration.

##### Properties

###### id

```ts
readonly id: string
```

Defined in: [sandkit/api/ui.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L157)

Unique id within the focus scope.

###### scope

```ts
readonly scope: string
```

Defined in: [sandkit/api/ui.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L159)

Focus scope id this element belongs to.

###### onActivate

```ts
readonly onActivate: (element?: HTMLElement) => void
```

Defined in: [sandkit/api/ui.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L161)

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

Defined in: [sandkit/api/ui.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L163)

Called when the element receives focus.

###### Returns

`void`

###### disabled?

```ts
readonly optional disabled?: boolean
```

Defined in: [sandkit/api/ui.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L165)

When true, skip this element during navigation.

###### x?

```ts
readonly optional x?: number
```

Defined in: [sandkit/api/ui.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L167)

Optional grid column for spatial navigation.

###### y?

```ts
readonly optional y?: number
```

Defined in: [sandkit/api/ui.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L169)

Optional grid row for spatial navigation.

###### neighbors?

```ts
readonly optional neighbors?: Partial<Record<"left" | "right" | "up" | "down", string>>
```

Defined in: [sandkit/api/ui.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L171)

Neighbor ids for directional navigation.

###### scrollIntoView?

```ts
readonly optional scrollIntoView?: boolean
```

Defined in: [sandkit/api/ui.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L173)

When true, scroll the element into view on focus.

### Type Aliases <!-- {docsify-ignore} -->

#### OverlaySlot :id=sandkit.api.ui.overlayslot

<p class="smt-member-path"><code>sandkit.api.ui.OverlaySlot</code></p>

```ts
OverlaySlot = LooseString<"hotbar" | "global">
```

Defined in: [sandkit/api/ui.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L122)

Overlay slot name. Known vanilla slots autocomplete; any string is allowed.

***

#### ComponentId :id=sandkit.api.ui.componentid

<p class="smt-member-path"><code>sandkit.api.ui.ComponentId</code></p>

```ts
ComponentId = ComponentId | LooseString<never>
```

Defined in: [sandkit/api/ui.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L128)

Registered UI component id.
Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) values autocomplete; custom string ids are allowed.

***

#### ComponentUpdateOptions :id=sandkit.api.ui.componentupdateoptions

<p class="smt-member-path"><code>sandkit.api.ui.ComponentUpdateOptions</code></p>

```ts
ComponentUpdateOptions = Record<string, unknown>
```

Defined in: [sandkit/api/ui.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L131)

Component-specific update payload passed to [update](#update).

***

#### TooltipData :id=sandkit.api.ui.tooltipdata

<p class="smt-member-path"><code>sandkit.api.ui.TooltipData</code></p>

```ts
TooltipData = TooltipMessageData
```

Defined in: [sandkit/api/ui.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L134)

Tooltip payload shown near the cursor or UI target.

### Functions <!-- {docsify-ignore} -->

#### update() :id=sandkit.api.ui.update

<p class="smt-member-path"><code>sandkit.api.ui.update()</code></p>

```ts
update(componentId: ComponentId, options?: ComponentUpdateOptions): void
```

Defined in: [sandkit/api/ui.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L26)

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

<p class="smt-member-path"><code>sandkit.api.ui.openPauseMenu()</code></p>

```ts
openPauseMenu(): void
```

Defined in: [sandkit/api/ui.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L29)

Open the pause menu.

##### Returns

`void`

***

#### showTooltip() :id=sandkit.api.ui.showtooltip

<p class="smt-member-path"><code>sandkit.api.ui.showTooltip()</code></p>

```ts
showTooltip(data: TooltipMessageData): void
```

Defined in: [sandkit/api/ui.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L35)

Show a tooltip with the given data.

##### Parameters

###### data

[`TooltipMessageData`](#tooltipmessagedata)

Tooltip type and localized content.

##### Returns

`void`

***

#### alert() :id=sandkit.api.ui.alert

<p class="smt-member-path"><code>sandkit.api.ui.alert()</code></p>

```ts
alert(message: LocalizedText, title?: LocalizedText): Promise<void>
```

Defined in: [sandkit/api/ui.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L43)

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

#### confirm() :id=sandkit.api.ui.confirm

<p class="smt-member-path"><code>sandkit.api.ui.confirm()</code></p>

```ts
confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>
```

Defined in: [sandkit/api/ui.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L51)

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

#### prompt() :id=sandkit.api.ui.prompt

<p class="smt-member-path"><code>sandkit.api.ui.prompt()</code></p>

```ts
prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>
```

Defined in: [sandkit/api/ui.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L62)

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

#### inject() :id=sandkit.api.ui.inject

<p class="smt-member-path"><code>sandkit.api.ui.inject()</code></p>

```ts
inject(componentId: ComponentId, component: ComponentType<Record<string, never>>): () => void
```

Defined in: [sandkit/api/ui.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L70)

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

<p class="smt-member-path"><code>sandkit.api.ui.navigation.useFocusable()</code></p>

```ts
useFocusable<T *extends* HTMLElement = HTMLDivElement>(options: FocusOptions): Focusable<T>
```

Defined in: [sandkit/api/ui.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L103)

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

#### useFocusScope() :id=sandkit.api.ui.navigation.usefocusscope

<p class="smt-member-path"><code>sandkit.api.ui.navigation.useFocusScope()</code></p>

```ts
useFocusScope(options: object): void
```

Defined in: [sandkit/api/ui.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L109)

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

#### controllerFocusClass() :id=sandkit.api.ui.navigation.controllerfocusclass

<p class="smt-member-path"><code>sandkit.api.ui.navigation.controllerFocusClass()</code></p>

```ts
controllerFocusClass(focused: boolean): string
```

Defined in: [sandkit/api/ui.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L116)

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

<p class="smt-member-path"><code>sandkit.api.ui.overlays.register()</code></p>

```ts
register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void
```

Defined in: [sandkit/api/ui.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L80)

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

<p class="smt-member-path"><code>sandkit.api.ui.overlays.unregister()</code></p>

```ts
unregister(slot: OverlaySlot, overlayId: string): void
```

Defined in: [sandkit/api/ui.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L87)

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

<p class="smt-member-path"><code>sandkit.api.ui.overlays.update()</code></p>

```ts
update(slot: OverlaySlot): void
```

Defined in: [sandkit/api/ui.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L93)

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

Defined in: [sandkit/api/upgrades.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L49)

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

Defined in: [sandkit/api/upgrades.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L50)

###### itemNameKey?

```ts
optional itemNameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L51)

###### categoryId?

```ts
optional categoryId?: string
```

Defined in: [sandkit/api/upgrades.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L52)

###### upgrade

```ts
upgrade: object
```

Defined in: [sandkit/api/upgrades.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L53)

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

Defined in: [sandkit/api/upgrades.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L65)

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

Defined in: [sandkit/api/upgrades.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L67)

Category identifier referenced by upgrades.

###### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L69)

Display name translation key.

### Functions <!-- {docsify-ignore} -->

#### registerCategory() :id=sandkit.api.upgrades.registercategory

<p class="smt-member-path"><code>sandkit.api.upgrades.registerCategory()</code></p>

```ts
registerCategory(definition: UpgradeCategoryDefinition): void
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

<p class="smt-member-path"><code>sandkit.api.upgrades.register()</code></p>

```ts
register(definition: UpgradeDefinition): void
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

<p class="smt-member-path"><code>sandkit.api.upgrades.updateDefinition()</code></p>

```ts
updateDefinition(itemId: string, upgradeId: string, partial: Partial<UpgradeDefinition>): void
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

<p class="smt-member-path"><code>sandkit.api.upgrades.getLevelById()</code></p>

```ts
getLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L31)

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

<p class="smt-member-path"><code>sandkit.api.upgrades.getAvailableLevelById()</code></p>

```ts
getAvailableLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L37)

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

<p class="smt-member-path"><code>sandkit.api.upgrades.setLevelById()</code></p>

```ts
setLevelById(itemId: string, upgradeId: string, level: number): void
```

Defined in: [sandkit/api/upgrades.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L46)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.upgrades.setLevelById`

---

## sandkit.api.utils

### Functions <!-- {docsify-ignore} -->

#### getDistance() :id=sandkit.api.utils.getdistance

<p class="smt-member-path"><code>sandkit.api.utils.getDistance()</code></p>

```ts
getDistance(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L18)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.utils.getDistance`

***

#### getDirection() :id=sandkit.api.utils.getdirection

<p class="smt-member-path"><code>sandkit.api.utils.getDirection()</code></p>

```ts
getDirection(pointA: Vector2, pointB: Vector2): Vector2
```

Defined in: [sandkit/api/utils.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L27)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.utils.getDirection`

***

#### getAngle() :id=sandkit.api.utils.getangle

<p class="smt-member-path"><code>sandkit.api.utils.getAngle()</code></p>

```ts
getAngle(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L36)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.utils.getAngle`

***

#### getCoordinatesBetweenCells() :id=sandkit.api.utils.getcoordinatesbetweencells

<p class="smt-member-path"><code>sandkit.api.utils.getCoordinatesBetweenCells()</code></p>

```ts
getCoordinatesBetweenCells(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L45)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.utils.getCoordinatesBetweenCells`

***

#### ~~getCoordinatesBetweenPoints()~~

```ts
getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L51)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.utils.getCoordinatesBetweenCells`

---

## sandkit.api.workers

### Functions <!-- {docsify-ignore} -->

#### setPostUpdateEnabled() :id=sandkit.api.workers.setpostupdateenabled

<p class="smt-member-path"><code>sandkit.api.workers.setPostUpdateEnabled()</code></p>

```ts
setPostUpdateEnabled(enabled: boolean): void
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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid`

### Namespaces <!-- {docsify-ignore} -->

- [~~pickups~~](api/sandkit.api.world.pickups.md)

### Functions <!-- {docsify-ignore} -->

#### ~~runWhenSimulationIdle()~~

```ts
runWhenSimulationIdle(callback: () => void): void
```

Defined in: [sandkit/api/world.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/world.d.ts#L64)

##### Parameters

###### callback

() => `void`

##### Returns

`void`

##### Deprecated

Use [grid.mutate](api/sandkit.api.grid.md#mutate) instead.

##### See

 - https://sandustry.com/sandkit.html#mutations-heading
 - https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.grid.mutate`

***

#### ~~redrawAroundCellWhenIdle()~~

```ts
redrawAroundCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/world.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/world.d.ts#L70)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### Deprecated

Use [grid.redrawAroundCell](api/sandkit.api.grid.md#redrawaroundcell) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.redrawAroundCell`

### References <!-- {docsify-ignore} -->

#### ~~getCellIdAtCell~~

Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

***

#### ~~isCellEmptyAtCell~~

Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

***

#### ~~isTerrainAtCell~~

Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

***

#### ~~reportActivityAtCell~~

Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

***

#### ~~excavateAtCell~~

Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

***

#### ~~getDimensions~~

Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

***

#### ~~ExcavateOptions~~

Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

***

#### ~~CellId~~

Re-exports [CellId](api/sandkit.api.grid.md#cellid)

***

#### ~~GridDimensions~~

Re-exports [GridDimensions](api/sandkit.api.grid.md#griddimensions)

***

#### ~~revealFogAtCell~~

Re-exports [revealFogAtCell](api/sandkit.api.grid.md#revealfogatcell)

***

#### ~~WorldItemType~~

Re-exports [WorldItemType](api/sandkit.api.pickups.md#worlditemtype)

***

#### ~~PickupType~~

Re-exports [PickupType](api/sandkit.api.pickups.md#pickuptype)

***

#### ~~WorldItemLight~~

Re-exports [WorldItemLight](api/sandkit.api.pickups.md#worlditemlight)

***

#### ~~WorldItem~~

Re-exports [WorldItem](api/sandkit.api.pickups.md#worlditem)

---

## sandkit.api.world.pickups

### Deprecated

Use pickups instead.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups`

### References <!-- {docsify-ignore} -->

#### ~~spawnAtWorld~~

Re-exports [spawnAtWorld](api/sandkit.api.pickups.md#spawnatworld)

***

#### ~~destroy~~

Re-exports [destroy](api/sandkit.api.pickups.md#destroy)

***

#### ~~pickUp~~

Re-exports [pickUp](api/sandkit.api.pickups.md#pickup)

***

#### ~~getAll~~

Re-exports [getAll](api/sandkit.api.pickups.md#getall)

***

#### ~~getById~~

Re-exports [getById](api/sandkit.api.pickups.md#getbyid)

***

#### ~~remove~~

Re-exports [remove](api/sandkit.api.pickups.md#remove)

---

## sandkit.api.effects (worker)

**`Internal`**

Worker-thread `sandkit.api.effects` — world-space visual effects on workers.

Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.worker.md), not here.

 Worker-only surface; main thread exposes additional effect helpers.

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.effects.worker.createatworld

<p class="smt-member-path"><code>sandkit.api.effects.createAtWorld() (worker)</code></p>

```ts
createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [worker/api/effects.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L25)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.effects.createAtWorld`

***

#### ~~createEffectAtWorld()~~

```ts
createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [worker/api/effects.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L36)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.effects.createAtWorld`

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements`

### Functions <!-- {docsify-ignore} -->

#### createAtCell() :id=sandkit.api.elements.worker.createatcell

<p class="smt-member-path"><code>sandkit.api.elements.createAtCell() (worker)</code></p>

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [worker/api/elements.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L70)

Create an element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.createAtCell`

***

#### replaceAtCell() :id=sandkit.api.elements.worker.replaceatcell

<p class="smt-member-path"><code>sandkit.api.elements.replaceAtCell() (worker)</code></p>

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [worker/api/elements.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L83)

Replace the element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.replaceAtCell`

***

#### removeAtCell() :id=sandkit.api.elements.worker.removeatcell

<p class="smt-member-path"><code>sandkit.api.elements.removeAtCell() (worker)</code></p>

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [worker/api/elements.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L95)

Remove the element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md#elementremovaloptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.removeAtCell`

***

#### moveBetweenCells() :id=sandkit.api.elements.worker.movebetweencells

<p class="smt-member-path"><code>sandkit.api.elements.moveBetweenCells() (worker)</code></p>

```ts
moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L109)

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.moveBetweenCells`

***

#### teleportBetweenCells() :id=sandkit.api.elements.worker.teleportbetweencells

<p class="smt-member-path"><code>sandkit.api.elements.teleportBetweenCells() (worker)</code></p>

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [worker/api/elements.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L125)

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.teleportBetweenCells`

***

#### swapBetweenCells() :id=sandkit.api.elements.worker.swapbetweencells

<p class="smt-member-path"><code>sandkit.api.elements.swapBetweenCells() (worker)</code></p>

```ts
swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L142)

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.swapBetweenCells`

***

#### ~~swapCells()~~

```ts
swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L153)

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.swapBetweenCells`

***

#### markMovementBlockedByIndex() :id=sandkit.api.elements.worker.markmovementblockedbyindex

<p class="smt-member-path"><code>sandkit.api.elements.markMovementBlockedByIndex() (worker)</code></p>

```ts
markMovementBlockedByIndex(elementIndex: number): void
```

Defined in: [worker/api/elements.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L166)

Mark an element index as movement-blocked for this tick.

##### Parameters

###### elementIndex

`number`

Element index from [getInfoAtCell](api/sandkit.api.elements.md#getinfoatcell).

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.elements.markMovementBlockedByIndex`

***

#### ~~markMovementBlockedByElementIndex()~~

```ts
markMovementBlockedByElementIndex(elementIndex: number): void
```

Defined in: [worker/api/elements.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L172)

##### Parameters

###### elementIndex

`number`

##### Returns

`void`

##### Deprecated

Use [markMovementBlockedByIndex](#markmovementblockedbyindex) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.elements.markMovementBlockedByIndex`

***

#### setVelocityAtCell() :id=sandkit.api.elements.worker.setvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.setVelocityAtCell() (worker)</code></p>

```ts
setVelocityAtCell(...args: number, number, [Vector2]): boolean
```

Defined in: [worker/api/elements.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L183)

Set particle velocity at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`boolean`

True when velocity was set.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setVelocityAtCell`

***

#### addParticleVelocityAtCell() :id=sandkit.api.elements.worker.addparticlevelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.addParticleVelocityAtCell() (worker)</code></p>

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean
```

Defined in: [worker/api/elements.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L195)

Add velocity to a particle at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

##### Returns

`boolean`

True when velocity was updated.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.addParticleVelocityAtCell`

***

#### convertToParticleAtCell() :id=sandkit.api.elements.worker.converttoparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertToParticleAtCell() (worker)</code></p>

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): boolean
```

Defined in: [worker/api/elements.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L208)

Convert a cell element to a particle immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

##### Returns

`boolean`

True when conversion succeeded.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.convertToParticleAtCell`

***

#### convertFromParticleAtCell() :id=sandkit.api.elements.worker.convertfromparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertFromParticleAtCell() (worker)</code></p>

```ts
convertFromParticleAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/elements.d.ts:218](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L218)

Convert a particle back to a solid element immediately on this worker.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when conversion succeeded.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.convertFromParticleAtCell`

***

#### setDataFieldAtCell() :id=sandkit.api.elements.worker.setdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDataFieldAtCell() (worker)</code></p>

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean
```

Defined in: [worker/api/elements.d.ts:230](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L230)

Set a data field on the element at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

##### Returns

`boolean`

True when the field was set.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setDataFieldAtCell`

***

#### refreshColorAtCell() :id=sandkit.api.elements.worker.refreshcoloratcell

<p class="smt-member-path"><code>sandkit.api.elements.refreshColorAtCell() (worker)</code></p>

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [worker/api/elements.d.ts:241](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L241)

Refresh the rendered color at a cell immediately on this worker.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.refreshColorAtCell`

***

#### setPhysicsAtCell() :id=sandkit.api.elements.worker.setphysicsatcell

<p class="smt-member-path"><code>sandkit.api.elements.setPhysicsAtCell() (worker)</code></p>

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [worker/api/elements.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L251)

Set the physics skip mode at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setPhysicsAtCell`

***

#### setDurationAtCell() :id=sandkit.api.elements.worker.setdurationatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDurationAtCell() (worker)</code></p>

```ts
setDurationAtCell(...args: [number, number, number, object]): boolean
```

Defined in: [worker/api/elements.d.ts:263](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L263)

Set element duration at a cell immediately on this worker.

##### Parameters

###### args

...\[`number`, `number`, `number`, `object`\]

##### Returns

`boolean`

True when duration was updated.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setDurationAtCell`

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

Defined in: [worker/api/events.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L39)

Guard filter for worker events.

##### Properties

###### elementType?

```ts
optional elementType?: ElementType
```

Defined in: [worker/api/events.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L41)

Required when subscribing to `element:moved`. Optional on emit.

###### terrainType?

```ts
optional terrainType?: number
```

Defined in: [worker/api/events.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L43)

Required when subscribing to `terrain:updated`. Optional on emit.

***

#### EventEmitOptions :id=sandkit.api.events.worker.eventemitoptions

<p class="smt-member-path"><code>sandkit.api.events.EventEmitOptions (worker)</code></p>

Defined in: [worker/api/events.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L55)

Options for [emit](#emit).

##### Properties

###### guard?

```ts
optional guard?: EventGuard
```

Defined in: [worker/api/events.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L56)

***

#### EventPayloadMap :id=sandkit.api.events.worker.eventpayloadmap

<p class="smt-member-path"><code>sandkit.api.events.EventPayloadMap (worker)</code></p>

Defined in: [worker/api/events.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L60)

Known worker event payloads. Unlisted ids still use `unknown`.

##### Properties

###### element:moved

```ts
element:moved: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L61)

###### terrain:updated

```ts
terrain:updated: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L62)

###### ~~terrain:update~~

```ts
terrain:update: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L64)

###### Deprecated

Use `"terrain:updated"` instead.

###### worker:update:post

```ts
worker:update:post: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L65)

###### ~~update:post~~

```ts
update:post: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L67)

###### Deprecated

Use `"worker:update:post"` instead.

### Type Aliases <!-- {docsify-ignore} -->

#### EventOnOptions :id=sandkit.api.events.worker.eventonoptions

<p class="smt-member-path"><code>sandkit.api.events.EventOnOptions (worker)</code></p>

```ts
EventOnOptions<K *extends* EventId> = K *extends* "element:moved" ? object : K *extends* "terrain:updated" | "terrain:update" ? object : object
```

Defined in: [worker/api/events.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L47)

Options for [on](#on).

##### Type Parameters

###### K

`K` *extends* [`EventId`](#eventid)

***

#### EventId :id=sandkit.api.events.worker.eventid

<p class="smt-member-path"><code>sandkit.api.events.EventId (worker)</code></p>

```ts
EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [worker/api/events.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L71)

Known worker event names plus any custom string id.

***

#### EventPayload :id=sandkit.api.events.worker.eventpayload

<p class="smt-member-path"><code>sandkit.api.events.EventPayload (worker)</code></p>

```ts
EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [worker/api/events.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L74)

Event payload type for a given event id.

##### Type Parameters

###### K

`K`

### Functions <!-- {docsify-ignore} -->

#### on() :id=sandkit.api.events.worker.on

<p class="smt-member-path"><code>sandkit.api.events.on() (worker)</code></p>

```ts
on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void, options?: EventOnOptions<K>): () => void
```

Defined in: [worker/api/events.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L18)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.events.on`

***

#### emit() :id=sandkit.api.events.worker.emit

<p class="smt-member-path"><code>sandkit.api.events.emit() (worker)</code></p>

```ts
emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>, options?: EventEmitOptions): void
```

Defined in: [worker/api/events.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L32)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.events.emit`

---

## sandkit.api.fire (worker)

**`Internal`**

Worker-thread `sandkit.api.fire` — ignite and burn elements at grid cells.

Worker burns are immediate. Main thread defers burns with `burnElementAtCell`.

 Worker-only surface; do not use main-thread [sandkit.api.fire](api/sandkit.md#fire).

### Functions <!-- {docsify-ignore} -->

#### canBurnElementAtCell() :id=sandkit.api.fire.worker.canburnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.canBurnElementAtCell() (worker)</code></p>

```ts
canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/fire.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L18)

Return true when the element at the cell can burn.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.fire.canBurnElementAtCell`

***

#### burnElementAtCell() :id=sandkit.api.fire.worker.burnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.burnElementAtCell() (worker)</code></p>

```ts
burnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/fire.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L28)

Burn the element at the cell immediately on this worker.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when the burn succeeded.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.fire.burnElementAtCell`

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

Defined in: [worker/api/hooks.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L39)

Context passed to intercept hook callbacks.

##### Properties

###### cancelled

```ts
cancelled: boolean
```

Defined in: [worker/api/hooks.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L43)

True after [cancel](#cancel) was called on this context.

##### Methods

###### cancel()

```ts
cancel(): void
```

Defined in: [worker/api/hooks.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L41)

When called, the intercepted action is skipped.

###### Returns

`void`

***

#### HookGuard :id=sandkit.api.hooks.worker.hookguard

<p class="smt-member-path"><code>sandkit.api.hooks.HookGuard (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L47)

Guard filter for worker hook registration.

##### Properties

###### elementType?

```ts
optional elementType?: ElementType
```

Defined in: [worker/api/hooks.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L49)

Required for element-scoped intercept hooks and optional on emit.

###### terrainType?

```ts
optional terrainType?: number
```

Defined in: [worker/api/hooks.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L51)

Required for terrain-scoped event guards; optional on emit.

***

#### ModifyHookOptions :id=sandkit.api.hooks.worker.modifyhookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookOptions (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L61)

Options for [modify](#modify).

##### Properties

###### guard?

```ts
optional guard?: HookGuard
```

Defined in: [worker/api/hooks.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L62)

###### priority?

```ts
optional priority?: number
```

Defined in: [worker/api/hooks.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L63)

***

#### InterceptHookMap :id=sandkit.api.hooks.worker.intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L87)

Intercept hook argument shapes keyed by hook id.

##### Properties

###### cell:process

```ts
cell:process: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L88)

###### element:update

```ts
element:update: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L89)

###### element:move

```ts
element:move: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L90)

###### element:move:blocked

```ts
element:move:blocked: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L91)

###### ~~element:blocked~~

```ts
element:blocked: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L93)

###### Deprecated

Use `"element:move:blocked"` instead.

###### element:duration:expire

```ts
element:duration:expire: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L94)

###### ~~element:duration~~

```ts
element:duration: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L96)

###### Deprecated

Use `"element:duration:expire"` instead.

###### fire:element:burn

```ts
fire:element:burn: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L97)

###### shaker:elementOn

```ts
shaker:elementOn: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L98)

### Type Aliases <!-- {docsify-ignore} -->

#### InterceptHookOptions :id=sandkit.api.hooks.worker.intercepthookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookOptions (worker)</code></p>

```ts
InterceptHookOptions<K *extends* InterceptHookId> = K *extends* ElementGuardedInterceptHookId ? object : object
```

Defined in: [worker/api/hooks.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L55)

Options for [intercept](#intercept).

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ElementGuardedInterceptHookId :id=sandkit.api.hooks.worker.elementguardedintercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.ElementGuardedInterceptHookId (worker)</code></p>

```ts
ElementGuardedInterceptHookId = "cell:process" | "element:update" | "element:move:blocked" | "element:blocked" | "element:duration:expire" | "element:duration"
```

Defined in: [worker/api/hooks.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L67)

Intercept hook ids with a required element guard.

***

#### InterceptHookId :id=sandkit.api.hooks.worker.intercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookId (worker)</code></p>

```ts
InterceptHookId = LooseString<ElementGuardedInterceptHookId | "element:move" | "fire:element:burn" | "shaker:elementOn">
```

Defined in: [worker/api/hooks.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L76)

Known worker intercept hook ids plus custom strings.

***

#### ModifyHookId :id=sandkit.api.hooks.worker.modifyhookid

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookId (worker)</code></p>

```ts
ModifyHookId = LooseString<string>
```

Defined in: [worker/api/hooks.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L84)

Known worker modify hook ids plus custom strings.

***

#### ModifyHookMap :id=sandkit.api.hooks.worker.modifyhookmap

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookMap (worker)</code></p>

```ts
ModifyHookMap = Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L102)

Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`.

***

#### InterceptHookArgs :id=sandkit.api.hooks.worker.intercepthookargs

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookArgs (worker)</code></p>

```ts
InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L105)

Intercept hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

#### ModifyHookArgs :id=sandkit.api.hooks.worker.modifyhookargs

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookArgs (worker)</code></p>

```ts
ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L109)

Modify hook args for a given hook id.

##### Type Parameters

###### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

### Functions <!-- {docsify-ignore} -->

#### intercept() :id=sandkit.api.hooks.worker.intercept

<p class="smt-member-path"><code>sandkit.api.hooks.intercept() (worker)</code></p>

```ts
intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [worker/api/hooks.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L18)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.hooks.intercept`

***

#### modify() :id=sandkit.api.hooks.worker.modify

<p class="smt-member-path"><code>sandkit.api.hooks.modify() (worker)</code></p>

```ts
modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [worker/api/hooks.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L32)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.hooks.modify`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.lights.temporary`

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

Defined in: [worker/api/lights.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L26)

###### Deprecated

Use [lightId](#lightid) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `light.lightId`

### Type Aliases <!-- {docsify-ignore} -->

#### TemporaryLightOptions :id=sandkit.api.lights.temporary.worker.temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.lights.temporary.TemporaryLightOptions (worker)</code></p>

```ts
TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [worker/api/lights.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L16)

Options for [createAtWorld](#createatworld).

### Functions <!-- {docsify-ignore} -->

#### createAtWorld() :id=sandkit.api.lights.temporary.worker.createatworld

<p class="smt-member-path"><code>sandkit.api.lights.temporary.createAtWorld() (worker)</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: [worker/api/lights.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L37)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.lights.temporary.createAtWorld`

---

## sandkit.api.main (worker)

**`Internal`**

Worker thread only.

`sandkit.api.main` — send events to the main thread.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md#workersandkitapi). Main thread has a
larger `sandkit.api` surface; do not assume parity.

### Functions <!-- {docsify-ignore} -->

#### emitEvent() :id=sandkit.api.main.worker.emitevent

<p class="smt-member-path"><code>sandkit.api.main.emitEvent() (worker)</code></p>

```ts
emitEvent<Payload = any>(eventId: string, payload: Payload): void
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

<p class="smt-member-path"><code>sandkit.api.maps.getActive() (worker)</code></p>

```ts
getActive(): Readonly<ActiveMapV1> | null
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

<p class="smt-member-path"><code>sandkit.api.player.getPositionAtWorld() (worker)</code></p>

```ts
getPositionAtWorld(): Vector2
```

Defined in: [shared/api/player.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L15)

Return the player center position in world pixels.

##### Returns

[`Vector2`](api/shared.player.md#vector2)

World position as `{ x, y }` in pixels.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.getPositionAtWorld`

***

#### ~~getWorldPosition()~~

```ts
getWorldPosition(): Vector2
```

Defined in: [shared/api/player.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L21)

##### Returns

[`Vector2`](api/shared.player.md#vector2)

##### Deprecated

Use [getPositionAtWorld](#getpositionatworld) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.getPositionAtWorld`

***

#### isCollidingWithCell() :id=sandkit.api.player.worker.iscollidingwithcell

<p class="smt-member-path"><code>sandkit.api.player.isCollidingWithCell() (worker)</code></p>

```ts
isCollidingWithCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/player.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L31)

Return true when the player hitbox overlaps the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

True when the player overlaps the cell.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.isCollidingWithCell`

***

#### isWithinRadiusOfCell() :id=sandkit.api.player.worker.iswithinradiusofcell

<p class="smt-member-path"><code>sandkit.api.player.isWithinRadiusOfCell() (worker)</code></p>

```ts
isWithinRadiusOfCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/player.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L42)

Return true when the player is within `radius` cells of the point.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

True when the player is inside the radius.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.isWithinRadiusOfCell`

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

<p class="smt-member-path"><code>sandkit.api.shared.buffers.require() (worker)</code></p>

```ts
require(key: string, config: object): SharedArray
```

Defined in: [worker/api/shared.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/shared.d.ts#L28)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.shared.buffers.require`

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

Defined in: [shared/api/structures.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L163)

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

Defined in: [shared/api/structures.d.ts:164](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L164)

###### elementType?

```ts
optional elementType?: TaggedNumber<"elementType"> | null
```

Defined in: [shared/api/structures.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L165)

***

#### Structure :id=sandkit.api.structures.worker.structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure (worker)</code></p>

Defined in: [shared/api/structures.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L170)

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

Defined in: [shared/api/structures.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L171)

###### y

```ts
y: number
```

Defined in: [shared/api/structures.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L172)

###### trapped?

```ts
optional trapped?: boolean
```

Defined in: [shared/api/structures.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L173)

###### data?

```ts
optional data?: StructureData
```

Defined in: [shared/api/structures.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L174)

### Type Aliases <!-- {docsify-ignore} -->

#### StructureType :id=sandkit.api.structures.worker.structuretype

<p class="smt-member-path"><code>sandkit.api.structures.StructureType (worker)</code></p>

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

Defined in: [shared/api/structures.d.ts:179](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L179)

Numeric structure type handle. Built-in enum values autocomplete.

***

#### StructureId :id=sandkit.api.structures.worker.structureid

<p class="smt-member-path"><code>sandkit.api.structures.StructureId (worker)</code></p>

```ts
StructureId = LooseString<never>
```

Defined in: [shared/api/structures.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L181)

Mod or built-in structure string id.

***

#### StructureRef :id=sandkit.api.structures.worker.structureref

<p class="smt-member-path"><code>sandkit.api.structures.StructureRef (worker)</code></p>

```ts
StructureRef = StructureType | StructureId
```

Defined in: [shared/api/structures.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L183)

Type handle or string id accepted by lookup helpers.

### Functions <!-- {docsify-ignore} -->

#### forEachOfType() :id=sandkit.api.structures.worker.foreachoftype

<p class="smt-member-path"><code>sandkit.api.structures.forEachOfType() (worker)</code></p>

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

Defined in: [shared/api/structures.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L18)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.forEachOfType`

***

#### getAtCell() :id=sandkit.api.structures.worker.getatcell

<p class="smt-member-path"><code>sandkit.api.structures.getAtCell() (worker)</code></p>

```ts
getAtCell(...args: CellCoordinates): Structure | null
```

Defined in: [shared/api/structures.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L27)

Return the structure at a cell, or null when none.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`Structure`](#structure) \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getAtCell`

***

#### getDefinitionByType() :id=sandkit.api.structures.worker.getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.structures.getDefinitionByType() (worker)</code></p>

```ts
getDefinitionByType(structureType: StructureRef): any
```

Defined in: [shared/api/structures.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L35)

Return the mod-registered or built-in definition for a structure type.

##### Parameters

###### structureType

[`StructureRef`](#structureref)

Structure type value or string id.

##### Returns

`any`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getDefinitionByType`

***

#### getTypeById() :id=sandkit.api.structures.worker.gettypebyid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeById() (worker)</code></p>

```ts
getTypeById(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L43)

Map a structure string id to its runtime type value.

##### Parameters

###### structureId

`string` & `object`

Structure string id.

##### Returns

[`StructureType`](#structuretype)

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getTypeById`

***

#### ~~getTypeFromId()~~

```ts
getTypeFromId(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L49)

##### Parameters

###### structureId

`string` & `object`

##### Returns

[`StructureType`](#structuretype)

##### Deprecated

Use [getTypeById](#gettypebyid) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.getTypeById`

***

#### hasBuiltAtCell() :id=sandkit.api.structures.worker.hasbuiltatcell

<p class="smt-member-path"><code>sandkit.api.structures.hasBuiltAtCell() (worker)</code></p>

```ts
hasBuiltAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L58)

Return true when a completed structure occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.hasBuiltAtCell`

***

#### isType() :id=sandkit.api.structures.worker.istype

<p class="smt-member-path"><code>sandkit.api.structures.isType() (worker)</code></p>

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

Defined in: [shared/api/structures.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L67)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isType`

***

#### isTypeAtCell() :id=sandkit.api.structures.worker.istypeatcell

<p class="smt-member-path"><code>sandkit.api.structures.isTypeAtCell() (worker)</code></p>

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/structures.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L77)

Return true when the cell structure matches the given id.

##### Parameters

###### args

...\[`number`, `number`, `string` & `object`\]

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isTypeAtCell`

***

#### setSpritesheetIndex() :id=sandkit.api.structures.worker.setspritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndex() (worker)</code></p>

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

Defined in: [shared/api/structures.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L86)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndex`

***

#### setSpritesheetIndexAtCell() :id=sandkit.api.structures.worker.setspritesheetindexatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexAtCell() (worker)</code></p>

```ts
setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/structures.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L96)

Set spritesheet frame index for the structure at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndexAtCell`

***

#### setSpritesheetIndexByValue() :id=sandkit.api.structures.worker.setspritesheetindexbyvalue

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValue() (worker)</code></p>

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

Defined in: [shared/api/structures.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L106)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndexByValue`

***

#### setSpritesheetIndexByValueAtCell() :id=sandkit.api.structures.worker.setspritesheetindexbyvalueatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValueAtCell() (worker)</code></p>

```ts
setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

Defined in: [shared/api/structures.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L117)

Same as [setSpritesheetIndexByValue](#setspritesheetindexbyvalue) for the structure at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`, `number`[]\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndexByValueAtCell`

***

#### update() :id=sandkit.api.structures.worker.update

<p class="smt-member-path"><code>sandkit.api.structures.update() (worker)</code></p>

```ts
update(structure: Structure, options?: object): void
```

Defined in: [shared/api/structures.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L126)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.update`

***

#### updateData() :id=sandkit.api.structures.worker.updatedata

<p class="smt-member-path"><code>sandkit.api.structures.updateData() (worker)</code></p>

```ts
updateData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L136)

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

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.updateData`

***

#### ~~setData()~~

```ts
setData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L142)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.updateData`

---

## sandkit.api.structures.processing (worker)

Structure processing enablement checks.

### Functions <!-- {docsify-ignore} -->

#### isEnabledAtCell() :id=sandkit.api.structures.processing.worker.isenabledatcell

<p class="smt-member-path"><code>sandkit.api.structures.processing.isEnabledAtCell() (worker)</code></p>

```ts
isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L153)

Return true when processing is enabled at the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.structures.processing.isEnabledAtCell`

***

#### ~~isEnabledAt()~~

```ts
isEnabledAt(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L159)

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### Deprecated

Use [isEnabledAtCell](#isenabledatcell) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.processing.isEnabledAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.register`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.getDataAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.getDataAtCell`

###### ~~hp?~~

```ts
optional hp?: number | null
```

Defined in: [shared/api/terrains.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L63)

###### Deprecated

Use [hitPoints](#hitpoints) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `result.hitPoints`

***

#### TerrainMutationOptions :id=sandkit.api.terrains.worker.terrainmutationoptions

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainMutationOptions (worker)</code></p>

Defined in: [shared/api/terrains.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L206)

Options for terrain create, replace, or remove calls.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.createAtCell`

##### Properties

###### skipShadow?

```ts
optional skipShadow?: boolean
```

Defined in: [shared/api/terrains.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L208)

Skip shadow updates around the changed cell.

### Type Aliases <!-- {docsify-ignore} -->

#### TerrainType :id=sandkit.api.terrains.worker.terraintype

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainType (worker)</code></p>

```ts
TerrainType = CellType | TaggedNumber<"terrainType">
```

Defined in: [shared/api/terrains.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L216)

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains`

***

#### TerrainId :id=sandkit.api.terrains.worker.terrainid

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainId (worker)</code></p>

```ts
TerrainId = LooseString<never>
```

Defined in: [shared/api/terrains.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L223)

Mod or built-in terrain string id.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains`

***

#### TerrainRef :id=sandkit.api.terrains.worker.terrainref

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainRef (worker)</code></p>

```ts
TerrainRef = TerrainType | TerrainId
```

Defined in: [shared/api/terrains.d.ts:230](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L230)

Type handle or string id accepted by mutation helpers.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains`

### Functions <!-- {docsify-ignore} -->

#### getIdByType() :id=sandkit.api.terrains.worker.getidbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getIdByType() (worker)</code></p>

```ts
getIdByType(terrainType: TerrainType): string & object
```

Defined in: [shared/api/terrains.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L72)

Return the mod string id for a numeric terrain type.

##### Parameters

###### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

##### Returns

`string` & `object`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.getIdByType`

***

#### getTypeById() :id=sandkit.api.terrains.worker.gettypebyid

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeById() (worker)</code></p>

```ts
getTypeById(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L80)

Resolve a terrain string id to a numeric cell type.

##### Parameters

###### terrainId

`string` & `object`

Mod-registered or built-in terrain id.

##### Returns

[`TerrainType`](#terraintype)

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.getTypeById`

***

#### ~~getTypeFromId()~~

```ts
getTypeFromId(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L86)

##### Parameters

###### terrainId

`string` & `object`

##### Returns

[`TerrainType`](#terraintype)

##### Deprecated

Use [getTypeById](#gettypebyid) instead.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.terrains.getTypeById`

***

#### getDefinitionByType() :id=sandkit.api.terrains.worker.getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getDefinitionByType() (worker)</code></p>

```ts
getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined
```

Defined in: [shared/api/terrains.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L94)

Look up the definition for a terrain type.

##### Parameters

###### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

##### Returns

[`TerrainDefinition`](#terraindefinition) \| `undefined`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.getDefinitionByType`

***

#### getTypeAtCell() :id=sandkit.api.terrains.worker.gettypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeAtCell() (worker)</code></p>

```ts
getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

Defined in: [shared/api/terrains.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L103)

Return the terrain cell type at a cell, or null when none.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`TerrainType`](#terraintype) \| `null`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.getTypeAtCell`

***

#### getDataAtCell() :id=sandkit.api.terrains.worker.getdataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getDataAtCell() (worker)</code></p>

```ts
getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null
```

Defined in: [shared/api/terrains.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L113)

Return terrain cell type and hit points at a cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

[`TerrainDataAtCell`](#terraindataatcell) \| `null`

Cell type and hit points, or null when the cell is not terrain.

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.getDataAtCell`

***

#### isAtCell() :id=sandkit.api.terrains.worker.isatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isAtCell() (worker)</code></p>

```ts
isAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/terrains.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L122)

Return true when any terrain occupies the cell.

##### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.isAtCell`

***

#### isTypeAtCell() :id=sandkit.api.terrains.worker.istypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isTypeAtCell() (worker)</code></p>

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/terrains.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L132)

Return true when the cell terrain matches the given id.

##### Parameters

###### args

...\[`number`, `number`, `string` & `object`\]

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.isTypeAtCell`

***

#### isCellIdTerrain() :id=sandkit.api.terrains.worker.iscellidterrain

<p class="smt-member-path"><code>sandkit.api.terrains.isCellIdTerrain() (worker)</code></p>

```ts
isCellIdTerrain(cellId: CellId): boolean
```

Defined in: [shared/api/terrains.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L140)

Return true when a packed cell id refers to terrain.

##### Parameters

###### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

##### Returns

`boolean`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.isCellIdTerrain`

***

#### damageAtCell() :id=sandkit.api.terrains.worker.damageatcell

<p class="smt-member-path"><code>sandkit.api.terrains.damageAtCell() (worker)</code></p>

```ts
damageAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/terrains.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L150)

Apply damage to terrain at a cell.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.damageAtCell`

***

#### createAtCell() :id=sandkit.api.terrains.worker.createatcell

<p class="smt-member-path"><code>sandkit.api.terrains.createAtCell() (worker)</code></p>

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L161)

Place terrain at an empty cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.createAtCell`

***

#### replaceAtCell() :id=sandkit.api.terrains.worker.replaceatcell

<p class="smt-member-path"><code>sandkit.api.terrains.replaceAtCell() (worker)</code></p>

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L172)

Replace existing terrain at a cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.replaceAtCell`

***

#### removeAtCell() :id=sandkit.api.terrains.worker.removeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.removeAtCell() (worker)</code></p>

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L182)

Remove terrain from a cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](#terrainmutationoptions)\]

##### Returns

`void`

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.removeAtCell`

***

#### setHitPointsAtCell() :id=sandkit.api.terrains.worker.sethitpointsatcell

<p class="smt-member-path"><code>sandkit.api.terrains.setHitPointsAtCell() (worker)</code></p>

```ts
setHitPointsAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L193)

Set terrain hit points at a cell. Worker-entry writes are immediate.

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

True when hit points changed or the terrain was removed.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.setHitPointsAtCell`

***

#### ~~setHpAtCell()~~

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L199)

##### Parameters

###### args

...\[`number`, `number`, `number`\]

##### Returns

`boolean`

##### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

##### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`

---

## sandkit.api.ui (worker)

**`Internal`**

Shared `sandkit.api.ui` base — lightweight UI helpers available on workers.

Main thread adds richer UI APIs on top of this shape.

 Base namespace reused by main and worker declarations.

### Interfaces <!-- {docsify-ignore} -->

#### I18nTextKey :id=sandkit.api.ui.worker.i18ntextkey

<p class="smt-member-path"><code>sandkit.api.ui.I18nTextKey (worker)</code></p>

Defined in: [shared/api/ui.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L23)

Translation key with optional parameter substitution.

##### Properties

###### key

```ts
key: string
```

Defined in: [shared/api/ui.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L25)

Namespaced translation key (for example `ui|save|save`).

###### params?

```ts
optional params?: Record<string, string | number>
```

Defined in: [shared/api/ui.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L27)

Values merged into the translated string.

***

#### I18nTranslatable :id=sandkit.api.ui.worker.i18ntranslatable

<p class="smt-member-path"><code>sandkit.api.ui.I18nTranslatable (worker)</code></p>

Defined in: [shared/api/ui.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L31)

Value returned by `sandkit.api.i18n.translatable`.

##### Properties

###### \_\_translatable

```ts
\_\_translatable: true
```

Defined in: [shared/api/ui.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L32)

###### key

```ts
key: string
```

Defined in: [shared/api/ui.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L33)

###### fallback

```ts
fallback: string
```

Defined in: [shared/api/ui.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L34)

***

#### ToastOptions :id=sandkit.api.ui.worker.toastoptions

<p class="smt-member-path"><code>sandkit.api.ui.ToastOptions (worker)</code></p>

Defined in: [shared/api/ui.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L38)

Cooldown, style, and auto-dismiss options for [toast](#toast).

##### Properties

###### cooldown?

```ts
optional cooldown?: number
```

Defined in: [shared/api/ui.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L40)

Minimum ms before the same toast can show again.

###### cooldownKey?

```ts
optional cooldownKey?: string
```

Defined in: [shared/api/ui.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L45)

Dedupe key paired with [ToastOptions.cooldown](#cooldown).
Defaults to the message string or `message.key`.

###### duration?

```ts
optional duration?: number | false
```

Defined in: [shared/api/ui.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L50)

Auto-dismiss delay in ms. Default `5000`.
Set `false` to keep the toast until another toast replaces it.

###### variant?

```ts
optional variant?: string & object | "danger" | "hint" | "hole"
```

Defined in: [shared/api/ui.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L52)

Visual style applied to the toast body.

### Type Aliases <!-- {docsify-ignore} -->

#### LocalizedText :id=sandkit.api.ui.worker.localizedtext

<p class="smt-member-path"><code>sandkit.api.ui.LocalizedText (worker)</code></p>

```ts
LocalizedText = string | I18nTextKey | I18nTranslatable
```

Defined in: [shared/api/ui.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L17)

Plain text, translation key object, or i18n translatable value.

### Functions <!-- {docsify-ignore} -->

#### toast() :id=sandkit.api.ui.worker.toast

<p class="smt-member-path"><code>sandkit.api.ui.toast() (worker)</code></p>

```ts
toast(message: LocalizedText, options?: ToastOptions): void
```

Defined in: [shared/api/ui.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L14)

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

#### getIndex() :id=sandkit.api.worker.worker.getindex

<p class="smt-member-path"><code>sandkit.api.worker.getIndex() (worker)</code></p>

```ts
getIndex(): number
```

Defined in: [worker/api/worker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/worker.d.ts#L14)

Return the zero-based index of this worker in the worker pool.

##### Returns

`number`

Worker index (`0` … `getCount() - 1`).

***

#### getCount() :id=sandkit.api.worker.worker.getcount

<p class="smt-member-path"><code>sandkit.api.worker.getCount() (worker)</code></p>

```ts
getCount(): number
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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid`

### References <!-- {docsify-ignore} -->

#### ~~getCellIdAtCell~~

Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

***

#### ~~isCellEmptyAtCell~~

Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

***

#### ~~isTerrainAtCell~~

Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

***

#### ~~reportActivityAtCell~~

Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

***

#### ~~excavateAtCell~~

Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

***

#### ~~getDimensions~~

Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

***

#### ~~ExcavateOptions~~

Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

***

#### ~~CellId~~

Re-exports [CellId](api/sandkit.api.grid.md#cellid)

***

#### ~~GridDimensions~~

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

<p class="smt-member-path"><code>sandkit.engine.api.augments.getDigLevel()</code></p>

```ts
getDigLevel(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.getGunLevel()</code></p>

```ts
getGunLevel(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.getPhaseLevel()</code></p>

```ts
getPhaseLevel(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.getRocketAmmoLevel()</code></p>

```ts
getRocketAmmoLevel(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.getRocketReloadLevel()</code></p>

```ts
getRocketReloadLevel(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.getSprintCapLevel()</code></p>

```ts
getSprintCapLevel(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasBigDig()</code></p>

```ts
hasBigDig(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasBulletSpeed()</code></p>

```ts
hasBulletSpeed(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasBulletTracer()</code></p>

```ts
hasBulletTracer(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasKickstartBoost()</code></p>

```ts
hasKickstartBoost(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasPhaseDash()</code></p>

```ts
hasPhaseDash(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasPhaseDashCharge()</code></p>

```ts
hasPhaseDashCharge(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasRideBoost()</code></p>

```ts
hasRideBoost(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasRocketDamage()</code></p>

```ts
hasRocketDamage(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasRocketWarhead()</code></p>

```ts
hasRocketWarhead(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasSprintPower()</code></p>

```ts
hasSprintPower(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasTripleShot()</code></p>

```ts
hasTripleShot(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.auralite.ensureProducedAtLeast()</code></p>

```ts
ensureProducedAtLeast(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.auralite.getProduced()</code></p>

```ts
getProduced(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.delete()</code></p>

```ts
delete(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.exportAllString()</code></p>

```ts
exportAllString(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.exportString()</code></p>

```ts
exportString(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.getAll()</code></p>

```ts
getAll(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.importString()</code></p>

```ts
importString(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.load()</code></p>

```ts
load(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.save()</code></p>

```ts
save(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.activate()</code></p>

```ts
activate(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.clear()</code></p>

```ts
clear(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.get()</code></p>

```ts
get(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.getHistory()</code></p>

```ts
getHistory(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.getSignalLinks()</code></p>

```ts
getSignalLinks(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.selectFromHistory()</code></p>

```ts
selectFromHistory(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.set()</code></p>

```ts
set(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.colorStructure()</code></p>

```ts
colorStructure(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.floodFillColor()</code></p>

```ts
floodFillColor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.getColor()</code></p>

```ts
getColor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.isColorableStructure()</code></p>

```ts
isColorableStructure(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.isMatchColorMode()</code></p>

```ts
isMatchColorMode(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.isPaintBucketMode()</code></p>

```ts
isPaintBucketMode(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.setColor()</code></p>

```ts
setColor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.toggleMatchColorMode()</code></p>

```ts
toggleMatchColorMode(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.coloringTool.togglePaintBucketMode()</code></p>

```ts
togglePaintBucketMode(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.closePalette()</code></p>

```ts
closePalette(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.getActivePalette()</code></p>

```ts
getActivePalette(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.getCycleColor()</code></p>

```ts
getCycleColor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.getRandomColor()</code></p>

```ts
getRandomColor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.hexToRgba()</code></p>

```ts
hexToRgba(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.renderColorButton()</code></p>

```ts
renderColorButton(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.renderColorSection()</code></p>

```ts
renderColorSection(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.renderPalette()</code></p>

```ts
renderPalette(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.rgbaToHex()</code></p>

```ts
rgbaToHex(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.setActivePalette()</code></p>

```ts
setActivePalette(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.colorPicker.togglePalette()</code></p>

```ts
togglePalette(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.conveyors.registerType()</code></p>

```ts
registerType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.debug.register()</code></p>

```ts
register(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.drones.kill()</code></p>

```ts
kill(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.drones.spawn()</code></p>

```ts
spawn(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.createLight()</code></p>

```ts
createLight(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.getAll()</code></p>

```ts
getAll(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.getAllByType()</code></p>

```ts
getAllByType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.getAllTypeDefs()</code></p>

```ts
getAllTypeDefs(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.getSprite()</code></p>

```ts
getSprite(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.getTypeDef()</code></p>

```ts
getTypeDef(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.launch()</code></p>

```ts
launch(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.registerSpawner()</code></p>

```ts
registerSpawner(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.registerType()</code></p>

```ts
registerType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.spawn()</code></p>

```ts
spawn(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.entities.startCapture()</code></p>

```ts
startCapture(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.extensions.define()</code></p>

```ts
define(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.addViabilityGold()</code></p>

```ts
addViabilityGold(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.canUnlockNextTier()</code></p>

```ts
canUnlockNextTier(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.ensureProcessAtLeast()</code></p>

```ts
ensureProcessAtLeast(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.flushDeferredLevelUps()</code></p>

```ts
flushDeferredLevelUps(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.getLevel()</code></p>

```ts
getLevel(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.getProcessCount()</code></p>

```ts
getProcessCount(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.getProcessRate()</code></p>

```ts
getProcessRate(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.recordProcess()</code></p>

```ts
recordProcess(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.factory.unlockNextTier()</code></p>

```ts
unlockNextTier(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.foliage.generate()</code></p>

```ts
generate(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.foliage.getClusters()</code></p>

```ts
getClusters(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.foliage.getContainer()</code></p>

```ts
getContainer(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.foliage.hasProcgenData()</code></p>

```ts
hasProcgenData(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.foundationColorPicker.getColor()</code></p>

```ts
getColor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.game.load()</code></p>

```ts
load(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.game.save()</code></p>

```ts
save(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.game.start()</code></p>

```ts
start(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.heatTransfer.absorbAdjacentElements()</code></p>

```ts
absorbAdjacentElements(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.heatTransfer.addTemperature()</code></p>

```ts
addTemperature(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.heatTransfer.computeDiffusedTemperatures()</code></p>

```ts
computeDiffusedTemperatures(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.heatTransfer.computeEqualizedTemperature()</code></p>

```ts
computeEqualizedTemperature(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.heatTransfer.consumeTemperatureNear()</code></p>

```ts
consumeTemperatureNear(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.heatTransfer.ensureTemperature()</code></p>

```ts
ensureTemperature(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.heatTransfer.equalizeConnected()</code></p>

```ts
equalizeConnected(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.launchers.registerType()</code></p>

```ts
registerType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.lightColorPicker.getColor()</code></p>

```ts
getColor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.matters.getMatterTypeFromId()</code></p>

```ts
getMatterTypeFromId(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.matters.register()</code></p>

```ts
register(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.matters.runSolidUpdate()</code></p>

```ts
runSolidUpdate(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.misc.register()</code></p>

```ts
register(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.portals.getMarkers()</code></p>

```ts
getMarkers(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getAll()</code></p>

```ts
getAll(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getAllMetadata()</code></p>

```ts
getAllMetadata(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getArtifactLocations()</code></p>

```ts
getArtifactLocations(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getAtCell()</code></p>

```ts
getAtCell(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getMetadata()</code></p>

```ts
getMetadata(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabDecor.getPlacementByName()</code></p>

```ts
getPlacementByName(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabDecor.replaceDecor()</code></p>

```ts
replaceDecor(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabulator.localizeBlueprintStructures()</code></p>

```ts
localizeBlueprintStructures(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prefabulator.serializeBlueprintStructures()</code></p>

```ts
serializeBlueprintStructures(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prismaline.consume()</code></p>

```ts
consume(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prismaline.getAvailable()</code></p>

```ts
getAvailable(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prismaline.getConsumed()</code></p>

```ts
getConsumed(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prismite.consume()</code></p>

```ts
consume(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prismite.getAvailable()</code></p>

```ts
getAvailable(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.prismite.getConsumed()</code></p>

```ts
getConsumed(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.queue.enqueue()</code></p>

```ts
enqueue(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.queue.enqueueInTicks()</code></p>

```ts
enqueueInTicks(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.queue.enqueueSkipTick()</code></p>

```ts
enqueueSkipTick(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.queue.process()</code></p>

```ts
process(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.queue.registerHandler()</code></p>

```ts
registerHandler(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.queue.removeByKey()</code></p>

```ts
removeByKey(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.shadows.refresh()</code></p>

```ts
refresh(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.shadows.refreshRadius()</code></p>

```ts
refreshRadius(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.shadows.refreshRect()</code></p>

```ts
refreshRect(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.strataform.getDefaultConfig()</code></p>

```ts
getDefaultConfig(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.strataform.getRegisteredTypes()</code></p>

```ts
getRegisteredTypes(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.strataform.registerType()</code></p>

```ts
registerType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.strataform.trigger()</code></p>

```ts
trigger(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.strataform.triggerByType()</code></p>

```ts
triggerByType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.decrementConvergenceBuffer()</code></p>

```ts
decrementConvergenceBuffer(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.getCrystalMined()</code></p>

```ts
getCrystalMined(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.getDiskRadiusCells()</code></p>

```ts
getDiskRadiusCells(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.getEntityType()</code></p>

```ts
getEntityType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.getNearestConvergence()</code></p>

```ts
getNearestConvergence(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.getPendingConvergence()</code></p>

```ts
getPendingConvergence(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.getPlacedConsoles()</code></p>

```ts
getPlacedConsoles(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.getRadiusPx()</code></p>

```ts
getRadiusPx(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.isSpawnJammed()</code></p>

```ts
isSpawnJammed(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.registerEntityType()</code></p>

```ts
registerEntityType(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers()</code></p>

```ts
resetAllConvergenceBuffers(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.swarmConsole.setSpawnJammed()</code></p>

```ts
setSpawnJammed(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.sweeperDrone.cancelSelection()</code></p>

```ts
cancelSelection(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.teleportZones.add()</code></p>

```ts
add(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.teleportZones.getAll()</code></p>

```ts
getAll(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.teleportZones.getAtCell()</code></p>

```ts
getAtCell(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.teleportZones.getById()</code></p>

```ts
getById(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.teleportZones.remove()</code></p>

```ts
remove(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.teleportZones.spawnDefaultParticles()</code></p>

```ts
spawnDefaultParticles(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.teleportZones.teleportPlayerTo()</code></p>

```ts
teleportPlayerTo(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.areAllTargetsBuilt()</code></p>

```ts
areAllTargetsBuilt(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt()</code></p>

```ts
areFamilyTargetsBuilt(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget()</code></p>

```ts
canPlaceAtActiveTarget(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.getFoundationMoveDests()</code></p>

```ts
getFoundationMoveDests(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.getFoundationMoveSources()</code></p>

```ts
getFoundationMoveSources(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.getTargets()</code></p>

```ts
getTargets(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.hasDefinition()</code></p>

```ts
hasDefinition(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.isStepConstrained()</code></p>

```ts
isStepConstrained(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.matchesFoundationMove()</code></p>

```ts
matchesFoundationMove(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.matchesFoundationRemove()</code></p>

```ts
matchesFoundationRemove(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt()</code></p>

```ts
shouldProtectActiveTargetAt(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.usageTracker.clear()</code></p>

```ts
clear(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.usageTracker.getLatest()</code></p>

```ts
getLatest(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.usageTracker.getMostUsed()</code></p>

```ts
getMostUsed(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.wall.getPaletteData()</code></p>

```ts
getPaletteData(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.wall.getWallDataAt()</code></p>

```ts
getWallDataAt(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.wall.getWallDataSize()</code></p>

```ts
getWallDataSize(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.wall.setWallDataAt()</code></p>

```ts
setWallDataAt(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.clear()</code></p>

```ts
clear(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.get()</code></p>

```ts
get(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.getOrInit()</code></p>

```ts
getOrInit(...args: unknown[]): unknown
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

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.set()</code></p>

```ts
set(...args: unknown[]): unknown
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

#### SandkitEnums :id=sandkit.enums.sandkitenums

<p class="smt-member-path"><code>sandkit.enums.SandkitEnums</code></p>

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

<p class="smt-member-path"><code>sandkit.enums.AbilityType.Dig</code></p>

```ts
Dig: 1
```

Defined in: [sandkit/enums/index.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L10)

***

#### Shoot :id=sandkit.enums.AbilityType.shoot

<p class="smt-member-path"><code>sandkit.enums.AbilityType.Shoot</code></p>

```ts
Shoot: 2
```

Defined in: [sandkit/enums/index.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L11)

***

#### Spray :id=sandkit.enums.AbilityType.spray

<p class="smt-member-path"><code>sandkit.enums.AbilityType.Spray</code></p>

```ts
Spray: 3
```

Defined in: [sandkit/enums/index.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L12)

***

#### Laser :id=sandkit.enums.AbilityType.laser

<p class="smt-member-path"><code>sandkit.enums.AbilityType.Laser</code></p>

```ts
Laser: 4
```

Defined in: [sandkit/enums/index.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L13)

---

## sandkit.enums.ActionState

Defined in: [sandkit/enums/index.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L17)

Phases of a held or repeated player action.

### Enumeration Members <!-- {docsify-ignore} -->

#### Start :id=sandkit.enums.ActionState.start

<p class="smt-member-path"><code>sandkit.enums.ActionState.Start</code></p>

```ts
Start: 1
```

Defined in: [sandkit/enums/index.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L18)

***

#### Active :id=sandkit.enums.ActionState.active

<p class="smt-member-path"><code>sandkit.enums.ActionState.Active</code></p>

```ts
Active: 2
```

Defined in: [sandkit/enums/index.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L19)

***

#### End :id=sandkit.enums.ActionState.end

<p class="smt-member-path"><code>sandkit.enums.ActionState.End</code></p>

```ts
End: 3
```

Defined in: [sandkit/enums/index.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L20)

---

## sandkit.enums.ActionType

Defined in: [sandkit/enums/index.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L24)

High-level action channel (weapon, building, tool, mod).

### Enumeration Members <!-- {docsify-ignore} -->

#### Weapon :id=sandkit.enums.ActionType.weapon

<p class="smt-member-path"><code>sandkit.enums.ActionType.Weapon</code></p>

```ts
Weapon: 1
```

Defined in: [sandkit/enums/index.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L25)

***

#### Building :id=sandkit.enums.ActionType.building

<p class="smt-member-path"><code>sandkit.enums.ActionType.Building</code></p>

```ts
Building: 2
```

Defined in: [sandkit/enums/index.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L26)

***

#### Tool :id=sandkit.enums.ActionType.tool

<p class="smt-member-path"><code>sandkit.enums.ActionType.Tool</code></p>

```ts
Tool: 3
```

Defined in: [sandkit/enums/index.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L27)

***

#### Mod :id=sandkit.enums.ActionType.mod

<p class="smt-member-path"><code>sandkit.enums.ActionType.Mod</code></p>

```ts
Mod: 4
```

Defined in: [sandkit/enums/index.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L28)

---

## sandkit.enums.AuthorizationType

Defined in: [sandkit/enums/index.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L32)

Zone rules that restrict player abilities.

### Enumeration Members <!-- {docsify-ignore} -->

#### NoJetpack :id=sandkit.enums.AuthorizationType.nojetpack

<p class="smt-member-path"><code>sandkit.enums.AuthorizationType.NoJetpack</code></p>

```ts
NoJetpack: 1
```

Defined in: [sandkit/enums/index.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L33)

***

#### NoGrab :id=sandkit.enums.AuthorizationType.nograb

<p class="smt-member-path"><code>sandkit.enums.AuthorizationType.NoGrab</code></p>

```ts
NoGrab: 2
```

Defined in: [sandkit/enums/index.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L34)

***

#### NoBuild :id=sandkit.enums.AuthorizationType.nobuild

<p class="smt-member-path"><code>sandkit.enums.AuthorizationType.NoBuild</code></p>

```ts
NoBuild: 3
```

Defined in: [sandkit/enums/index.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L35)

***

#### NoTool :id=sandkit.enums.AuthorizationType.notool

<p class="smt-member-path"><code>sandkit.enums.AuthorizationType.NoTool</code></p>

```ts
NoTool: 4
```

Defined in: [sandkit/enums/index.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L36)

***

#### NoExcavation :id=sandkit.enums.AuthorizationType.noexcavation

<p class="smt-member-path"><code>sandkit.enums.AuthorizationType.NoExcavation</code></p>

```ts
NoExcavation: 5
```

Defined in: [sandkit/enums/index.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L37)

***

#### NoToolExceptFlamethrower :id=sandkit.enums.AuthorizationType.notoolexceptflamethrower

<p class="smt-member-path"><code>sandkit.enums.AuthorizationType.NoToolExceptFlamethrower</code></p>

```ts
NoToolExceptFlamethrower: 6
```

Defined in: [sandkit/enums/index.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L38)

---

## sandkit.enums.BuildingClearance

Defined in: [sandkit/enums/index.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L48)

Result of a build placement check.

### Enumeration Members <!-- {docsify-ignore} -->

#### Available :id=sandkit.enums.BuildingClearance.available

<p class="smt-member-path"><code>sandkit.enums.BuildingClearance.Available</code></p>

```ts
Available: 1
```

Defined in: [sandkit/enums/index.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L49)

***

#### FullyBlocked :id=sandkit.enums.BuildingClearance.fullyblocked

<p class="smt-member-path"><code>sandkit.enums.BuildingClearance.FullyBlocked</code></p>

```ts
FullyBlocked: 2
```

Defined in: [sandkit/enums/index.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L50)

***

#### PartiallyBlocked :id=sandkit.enums.BuildingClearance.partiallyblocked

<p class="smt-member-path"><code>sandkit.enums.BuildingClearance.PartiallyBlocked</code></p>

```ts
PartiallyBlocked: 3
```

Defined in: [sandkit/enums/index.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L51)

***

#### CanBeReplaced :id=sandkit.enums.BuildingClearance.canbereplaced

<p class="smt-member-path"><code>sandkit.enums.BuildingClearance.CanBeReplaced</code></p>

```ts
CanBeReplaced: 4
```

Defined in: [sandkit/enums/index.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L52)

---

## sandkit.enums.BuildMode

Defined in: [sandkit/enums/index.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L42)

Linear vs rectangular structure placement.

### Enumeration Members <!-- {docsify-ignore} -->

#### Linear :id=sandkit.enums.BuildMode.linear

<p class="smt-member-path"><code>sandkit.enums.BuildMode.Linear</code></p>

```ts
Linear: 1
```

Defined in: [sandkit/enums/index.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L43)

***

#### Rectangular :id=sandkit.enums.BuildMode.rectangular

<p class="smt-member-path"><code>sandkit.enums.BuildMode.Rectangular</code></p>

```ts
Rectangular: 2
```

Defined in: [sandkit/enums/index.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L44)

---

## sandkit.enums.CellType

Defined in: [sandkit/enums/index.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L56)

Terrain / special cell kinds in the simulation grid.

### Enumeration Members <!-- {docsify-ignore} -->

#### Empty :id=sandkit.enums.CellType.empty

<p class="smt-member-path"><code>sandkit.enums.CellType.Empty</code></p>

```ts
Empty: 0
```

Defined in: [sandkit/enums/index.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L57)

***

#### Element :id=sandkit.enums.CellType.element

<p class="smt-member-path"><code>sandkit.enums.CellType.Element</code></p>

```ts
Element: 1
```

Defined in: [sandkit/enums/index.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L58)

***

#### Dirt :id=sandkit.enums.CellType.dirt

<p class="smt-member-path"><code>sandkit.enums.CellType.Dirt</code></p>

```ts
Dirt: 2
```

Defined in: [sandkit/enums/index.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L59)

***

#### SporeSoil :id=sandkit.enums.CellType.sporesoil

<p class="smt-member-path"><code>sandkit.enums.CellType.SporeSoil</code></p>

```ts
SporeSoil: 3
```

Defined in: [sandkit/enums/index.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L60)

***

#### Fog :id=sandkit.enums.CellType.fog

<p class="smt-member-path"><code>sandkit.enums.CellType.Fog</code></p>

```ts
Fog: 4
```

Defined in: [sandkit/enums/index.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L61)

***

#### FogJetpackBlock :id=sandkit.enums.CellType.fogjetpackblock

<p class="smt-member-path"><code>sandkit.enums.CellType.FogJetpackBlock</code></p>

```ts
FogJetpackBlock: 5
```

Defined in: [sandkit/enums/index.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L62)

***

#### FogWater :id=sandkit.enums.CellType.fogwater

<p class="smt-member-path"><code>sandkit.enums.CellType.FogWater</code></p>

```ts
FogWater: 6
```

Defined in: [sandkit/enums/index.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L63)

***

#### FreezingIceSoil :id=sandkit.enums.CellType.freezingicesoil

<p class="smt-member-path"><code>sandkit.enums.CellType.FreezingIceSoil</code></p>

```ts
FreezingIceSoil: 7
```

Defined in: [sandkit/enums/index.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L64)

***

#### Divider :id=sandkit.enums.CellType.divider

<p class="smt-member-path"><code>sandkit.enums.CellType.Divider</code></p>

```ts
Divider: 8
```

Defined in: [sandkit/enums/index.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L65)

***

#### Grass :id=sandkit.enums.CellType.grass

<p class="smt-member-path"><code>sandkit.enums.CellType.Grass</code></p>

```ts
Grass: 9
```

Defined in: [sandkit/enums/index.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L66)

***

#### Moss :id=sandkit.enums.CellType.moss

<p class="smt-member-path"><code>sandkit.enums.CellType.Moss</code></p>

```ts
Moss: 10
```

Defined in: [sandkit/enums/index.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L67)

***

#### GoldSoil :id=sandkit.enums.CellType.goldsoil

<p class="smt-member-path"><code>sandkit.enums.CellType.GoldSoil</code></p>

```ts
GoldSoil: 11
```

Defined in: [sandkit/enums/index.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L68)

***

#### Petal :id=sandkit.enums.CellType.petal

<p class="smt-member-path"><code>sandkit.enums.CellType.Petal</code></p>

```ts
Petal: 12
```

Defined in: [sandkit/enums/index.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L69)

***

#### FogLava :id=sandkit.enums.CellType.foglava

<p class="smt-member-path"><code>sandkit.enums.CellType.FogLava</code></p>

```ts
FogLava: 13
```

Defined in: [sandkit/enums/index.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L70)

***

#### Fluxite :id=sandkit.enums.CellType.fluxite

<p class="smt-member-path"><code>sandkit.enums.CellType.Fluxite</code></p>

```ts
Fluxite: 14
```

Defined in: [sandkit/enums/index.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L71)

***

#### Block :id=sandkit.enums.CellType.block

<p class="smt-member-path"><code>sandkit.enums.CellType.Block</code></p>

```ts
Block: 15
```

Defined in: [sandkit/enums/index.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L72)

***

#### SlidingBlock :id=sandkit.enums.CellType.slidingblock

<p class="smt-member-path"><code>sandkit.enums.CellType.SlidingBlock</code></p>

```ts
SlidingBlock: 16
```

Defined in: [sandkit/enums/index.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L73)

***

#### SlidingBlockLeft :id=sandkit.enums.CellType.slidingblockleft

<p class="smt-member-path"><code>sandkit.enums.CellType.SlidingBlockLeft</code></p>

```ts
SlidingBlockLeft: 17
```

Defined in: [sandkit/enums/index.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L74)

***

#### SlidingBlockRight :id=sandkit.enums.CellType.slidingblockright

<p class="smt-member-path"><code>sandkit.enums.CellType.SlidingBlockRight</code></p>

```ts
SlidingBlockRight: 18
```

Defined in: [sandkit/enums/index.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L75)

***

#### ConveyorLeft :id=sandkit.enums.CellType.conveyorleft

<p class="smt-member-path"><code>sandkit.enums.CellType.ConveyorLeft</code></p>

```ts
ConveyorLeft: 19
```

Defined in: [sandkit/enums/index.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L76)

***

#### ConveyorRight :id=sandkit.enums.CellType.conveyorright

<p class="smt-member-path"><code>sandkit.enums.CellType.ConveyorRight</code></p>

```ts
ConveyorRight: 20
```

Defined in: [sandkit/enums/index.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L77)

***

#### ShakerLeft :id=sandkit.enums.CellType.shakerleft

<p class="smt-member-path"><code>sandkit.enums.CellType.ShakerLeft</code></p>

```ts
ShakerLeft: 21
```

Defined in: [sandkit/enums/index.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L78)

***

#### ShakerRight :id=sandkit.enums.CellType.shakerright

<p class="smt-member-path"><code>sandkit.enums.CellType.ShakerRight</code></p>

```ts
ShakerRight: 22
```

Defined in: [sandkit/enums/index.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L79)

***

#### Stone :id=sandkit.enums.CellType.stone

<p class="smt-member-path"><code>sandkit.enums.CellType.Stone</code></p>

```ts
Stone: 23
```

Defined in: [sandkit/enums/index.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L80)

***

#### VelocitySoaker :id=sandkit.enums.CellType.velocitysoaker

<p class="smt-member-path"><code>sandkit.enums.CellType.VelocitySoaker</code></p>

```ts
VelocitySoaker: 24
```

Defined in: [sandkit/enums/index.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L81)

***

#### Ice :id=sandkit.enums.CellType.ice

<p class="smt-member-path"><code>sandkit.enums.CellType.Ice</code></p>

```ts
Ice: 25
```

Defined in: [sandkit/enums/index.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L82)

***

#### Grower :id=sandkit.enums.CellType.grower

<p class="smt-member-path"><code>sandkit.enums.CellType.Grower</code></p>

```ts
Grower: 26
```

Defined in: [sandkit/enums/index.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L83)

***

#### NascentWater :id=sandkit.enums.CellType.nascentwater

<p class="smt-member-path"><code>sandkit.enums.CellType.NascentWater</code></p>

```ts
NascentWater: 27
```

Defined in: [sandkit/enums/index.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L84)

***

#### SandiumSoil :id=sandkit.enums.CellType.sandiumsoil

<p class="smt-member-path"><code>sandkit.enums.CellType.SandiumSoil</code></p>

```ts
SandiumSoil: 28
```

Defined in: [sandkit/enums/index.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L85)

***

#### Obsidian :id=sandkit.enums.CellType.obsidian

<p class="smt-member-path"><code>sandkit.enums.CellType.Obsidian</code></p>

```ts
Obsidian: 29
```

Defined in: [sandkit/enums/index.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L86)

***

#### Crackstone :id=sandkit.enums.CellType.crackstone

<p class="smt-member-path"><code>sandkit.enums.CellType.Crackstone</code></p>

```ts
Crackstone: 30
```

Defined in: [sandkit/enums/index.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L87)

---

## sandkit.enums.ComponentId

Defined in: [sandkit/enums/index.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L91)

UI component ids for HUD and menu routing.

### Enumeration Members <!-- {docsify-ignore} -->

#### Hotbar :id=sandkit.enums.ComponentId.hotbar

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Hotbar</code></p>

```ts
Hotbar: 1
```

Defined in: [sandkit/enums/index.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L92)

***

#### SoundBoxConfig :id=sandkit.enums.ComponentId.soundboxconfig

<p class="smt-member-path"><code>sandkit.enums.ComponentId.SoundBoxConfig</code></p>

```ts
SoundBoxConfig: 2
```

Defined in: [sandkit/enums/index.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L93)

***

#### Root :id=sandkit.enums.ComponentId.root

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Root</code></p>

```ts
Root: 4
```

Defined in: [sandkit/enums/index.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L94)

***

#### Menu :id=sandkit.enums.ComponentId.menu

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Menu</code></p>

```ts
Menu: 5
```

Defined in: [sandkit/enums/index.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L95)

***

#### Management :id=sandkit.enums.ComponentId.management

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Management</code></p>

```ts
Management: 6
```

Defined in: [sandkit/enums/index.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L96)

***

#### FilterConfig :id=sandkit.enums.ComponentId.filterconfig

<p class="smt-member-path"><code>sandkit.enums.ComponentId.FilterConfig</code></p>

```ts
FilterConfig: 7
```

Defined in: [sandkit/enums/index.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L97)

***

#### Resources :id=sandkit.enums.ComponentId.resources

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Resources</code></p>

```ts
Resources: 8
```

Defined in: [sandkit/enums/index.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L98)

***

#### TechTree :id=sandkit.enums.ComponentId.techtree

<p class="smt-member-path"><code>sandkit.enums.ComponentId.TechTree</code></p>

```ts
TechTree: 9
```

Defined in: [sandkit/enums/index.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L99)

***

#### Tutorial :id=sandkit.enums.ComponentId.tutorial

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Tutorial</code></p>

```ts
Tutorial: 10
```

Defined in: [sandkit/enums/index.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L100)

***

#### Loader :id=sandkit.enums.ComponentId.loader

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Loader</code></p>

```ts
Loader: 11
```

Defined in: [sandkit/enums/index.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L101)

***

#### Options :id=sandkit.enums.ComponentId.options

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Options</code></p>

```ts
Options: 12
```

Defined in: [sandkit/enums/index.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L102)

***

#### ShortcutHelper :id=sandkit.enums.ComponentId.shortcuthelper

<p class="smt-member-path"><code>sandkit.enums.ComponentId.ShortcutHelper</code></p>

```ts
ShortcutHelper: 13
```

Defined in: [sandkit/enums/index.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L103)

***

#### Upgrades :id=sandkit.enums.ComponentId.upgrades

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Upgrades</code></p>

```ts
Upgrades: 14
```

Defined in: [sandkit/enums/index.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L104)

***

#### Tooltip :id=sandkit.enums.ComponentId.tooltip

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Tooltip</code></p>

```ts
Tooltip: 15
```

Defined in: [sandkit/enums/index.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L105)

***

#### Notifications :id=sandkit.enums.ComponentId.notifications

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Notifications</code></p>

```ts
Notifications: 16
```

Defined in: [sandkit/enums/index.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L106)

***

#### Objectives :id=sandkit.enums.ComponentId.objectives

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Objectives</code></p>

```ts
Objectives: 17
```

Defined in: [sandkit/enums/index.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L107)

***

#### DroneAdminList :id=sandkit.enums.ComponentId.droneadminlist

<p class="smt-member-path"><code>sandkit.enums.ComponentId.DroneAdminList</code></p>

```ts
DroneAdminList: 18
```

Defined in: [sandkit/enums/index.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L108)

***

#### HotbarOverlays :id=sandkit.enums.ComponentId.hotbaroverlays

<p class="smt-member-path"><code>sandkit.enums.ComponentId.HotbarOverlays</code></p>

```ts
HotbarOverlays: 19
```

Defined in: [sandkit/enums/index.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L109)

***

#### IntroScreen :id=sandkit.enums.ComponentId.introscreen

<p class="smt-member-path"><code>sandkit.enums.ComponentId.IntroScreen</code></p>

```ts
IntroScreen: 20
```

Defined in: [sandkit/enums/index.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L110)

***

#### StoryNotifications :id=sandkit.enums.ComponentId.storynotifications

<p class="smt-member-path"><code>sandkit.enums.ComponentId.StoryNotifications</code></p>

```ts
StoryNotifications: 21
```

Defined in: [sandkit/enums/index.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L111)

***

#### FactoryProgress :id=sandkit.enums.ComponentId.factoryprogress

<p class="smt-member-path"><code>sandkit.enums.ComponentId.FactoryProgress</code></p>

```ts
FactoryProgress: 22
```

Defined in: [sandkit/enums/index.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L112)

***

#### Dialogs :id=sandkit.enums.ComponentId.dialogs

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Dialogs</code></p>

```ts
Dialogs: 23
```

Defined in: [sandkit/enums/index.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L113)

***

#### GlobalOverlays :id=sandkit.enums.ComponentId.globaloverlays

<p class="smt-member-path"><code>sandkit.enums.ComponentId.GlobalOverlays</code></p>

```ts
GlobalOverlays: 24
```

Defined in: [sandkit/enums/index.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L114)

***

#### Lexicon :id=sandkit.enums.ComponentId.lexicon

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Lexicon</code></p>

```ts
Lexicon: 25
```

Defined in: [sandkit/enums/index.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L115)

***

#### ModsScreen :id=sandkit.enums.ComponentId.modsscreen

<p class="smt-member-path"><code>sandkit.enums.ComponentId.ModsScreen</code></p>

```ts
ModsScreen: 26
```

Defined in: [sandkit/enums/index.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L116)

***

#### CustomMapsScreen :id=sandkit.enums.ComponentId.custommapsscreen

<p class="smt-member-path"><code>sandkit.enums.ComponentId.CustomMapsScreen</code></p>

```ts
CustomMapsScreen: 27
```

Defined in: [sandkit/enums/index.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L117)

***

#### CinematicPanel :id=sandkit.enums.ComponentId.cinematicpanel

<p class="smt-member-path"><code>sandkit.enums.ComponentId.CinematicPanel</code></p>

```ts
CinematicPanel: 28
```

Defined in: [sandkit/enums/index.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L118)

***

#### Feedback :id=sandkit.enums.ComponentId.feedback

<p class="smt-member-path"><code>sandkit.enums.ComponentId.Feedback</code></p>

```ts
Feedback: 29
```

Defined in: [sandkit/enums/index.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L119)

---

## sandkit.enums.DroneType

Defined in: [sandkit/enums/index.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L123)

Autonomous drone kinds.

### Enumeration Members <!-- {docsify-ignore} -->

#### Digger :id=sandkit.enums.DroneType.digger

<p class="smt-member-path"><code>sandkit.enums.DroneType.Digger</code></p>

```ts
Digger: 1
```

Defined in: [sandkit/enums/index.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L124)

***

#### Hauler :id=sandkit.enums.DroneType.hauler

<p class="smt-member-path"><code>sandkit.enums.DroneType.Hauler</code></p>

```ts
Hauler: 2
```

Defined in: [sandkit/enums/index.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L125)

---

## sandkit.enums.ElementType

Defined in: [sandkit/enums/index.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L129)

Built-in element type ids (prefer API string ids when registering mods).

### Enumeration Members <!-- {docsify-ignore} -->

#### Sand :id=sandkit.enums.ElementType.sand

<p class="smt-member-path"><code>sandkit.enums.ElementType.Sand</code></p>

```ts
Sand: 1
```

Defined in: [sandkit/enums/index.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L130)

***

#### Particle :id=sandkit.enums.ElementType.particle

<p class="smt-member-path"><code>sandkit.enums.ElementType.Particle</code></p>

```ts
Particle: 2
```

Defined in: [sandkit/enums/index.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L131)

***

#### Water :id=sandkit.enums.ElementType.water

<p class="smt-member-path"><code>sandkit.enums.ElementType.Water</code></p>

```ts
Water: 3
```

Defined in: [sandkit/enums/index.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L132)

***

#### WetSand :id=sandkit.enums.ElementType.wetsand

<p class="smt-member-path"><code>sandkit.enums.ElementType.WetSand</code></p>

```ts
WetSand: 4
```

Defined in: [sandkit/enums/index.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L133)

***

#### Sandium :id=sandkit.enums.ElementType.sandium

<p class="smt-member-path"><code>sandkit.enums.ElementType.Sandium</code></p>

```ts
Sandium: 5
```

Defined in: [sandkit/enums/index.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L134)

***

#### Residue :id=sandkit.enums.ElementType.residue

<p class="smt-member-path"><code>sandkit.enums.ElementType.Residue</code></p>

```ts
Residue: 6
```

Defined in: [sandkit/enums/index.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L135)

***

#### Gold :id=sandkit.enums.ElementType.gold

<p class="smt-member-path"><code>sandkit.enums.ElementType.Gold</code></p>

```ts
Gold: 7
```

Defined in: [sandkit/enums/index.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L136)

***

#### Gloom :id=sandkit.enums.ElementType.gloom

<p class="smt-member-path"><code>sandkit.enums.ElementType.Gloom</code></p>

```ts
Gloom: 8
```

Defined in: [sandkit/enums/index.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L137)

***

#### Shake :id=sandkit.enums.ElementType.shake

<p class="smt-member-path"><code>sandkit.enums.ElementType.Shake</code></p>

```ts
Shake: 9
```

Defined in: [sandkit/enums/index.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L138)

***

#### Steam :id=sandkit.enums.ElementType.steam

<p class="smt-member-path"><code>sandkit.enums.ElementType.Steam</code></p>

```ts
Steam: 10
```

Defined in: [sandkit/enums/index.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L139)

***

#### Fire :id=sandkit.enums.ElementType.fire

<p class="smt-member-path"><code>sandkit.enums.ElementType.Fire</code></p>

```ts
Fire: 11
```

Defined in: [sandkit/enums/index.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L140)

***

#### FreezingIce :id=sandkit.enums.ElementType.freezingice

<p class="smt-member-path"><code>sandkit.enums.ElementType.FreezingIce</code></p>

```ts
FreezingIce: 12
```

Defined in: [sandkit/enums/index.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L141)

***

#### Flame :id=sandkit.enums.ElementType.flame

<p class="smt-member-path"><code>sandkit.enums.ElementType.Flame</code></p>

```ts
Flame: 13
```

Defined in: [sandkit/enums/index.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L142)

***

#### BurntResidue :id=sandkit.enums.ElementType.burntresidue

<p class="smt-member-path"><code>sandkit.enums.ElementType.BurntResidue</code></p>

```ts
BurntResidue: 14
```

Defined in: [sandkit/enums/index.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L143)

***

#### Seed :id=sandkit.enums.ElementType.seed

<p class="smt-member-path"><code>sandkit.enums.ElementType.Seed</code></p>

```ts
Seed: 15
```

Defined in: [sandkit/enums/index.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L144)

***

#### WetSeed :id=sandkit.enums.ElementType.wetseed

<p class="smt-member-path"><code>sandkit.enums.ElementType.WetSeed</code></p>

```ts
WetSeed: 16
```

Defined in: [sandkit/enums/index.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L145)

***

#### Seedling :id=sandkit.enums.ElementType.seedling

<p class="smt-member-path"><code>sandkit.enums.ElementType.Seedling</code></p>

```ts
Seedling: 17
```

Defined in: [sandkit/enums/index.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L146)

***

#### Petalium :id=sandkit.enums.ElementType.petalium

<p class="smt-member-path"><code>sandkit.enums.ElementType.Petalium</code></p>

```ts
Petalium: 18
```

Defined in: [sandkit/enums/index.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L147)

***

#### Lava :id=sandkit.enums.ElementType.lava

<p class="smt-member-path"><code>sandkit.enums.ElementType.Lava</code></p>

```ts
Lava: 19
```

Defined in: [sandkit/enums/index.d.ts:148](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L148)

***

#### Basalt :id=sandkit.enums.ElementType.basalt

<p class="smt-member-path"><code>sandkit.enums.ElementType.Basalt</code></p>

```ts
Basalt: 20
```

Defined in: [sandkit/enums/index.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L149)

---

## sandkit.enums.ItemId

Defined in: [sandkit/enums/index.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L153)

Built-in hotbar item ids.

### Enumeration Members <!-- {docsify-ignore} -->

#### Shovel :id=sandkit.enums.ItemId.shovel

<p class="smt-member-path"><code>sandkit.enums.ItemId.Shovel</code></p>

```ts
Shovel: 1
```

Defined in: [sandkit/enums/index.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L154)

***

#### Grabber :id=sandkit.enums.ItemId.grabber

<p class="smt-member-path"><code>sandkit.enums.ItemId.Grabber</code></p>

```ts
Grabber: 2
```

Defined in: [sandkit/enums/index.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L155)

***

#### Demolisher :id=sandkit.enums.ItemId.demolisher

<p class="smt-member-path"><code>sandkit.enums.ItemId.Demolisher</code></p>

```ts
Demolisher: 3
```

Defined in: [sandkit/enums/index.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L156)

***

#### GrapplingHook :id=sandkit.enums.ItemId.grapplinghook

<p class="smt-member-path"><code>sandkit.enums.ItemId.GrapplingHook</code></p>

```ts
GrapplingHook: 4
```

Defined in: [sandkit/enums/index.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L157)

***

#### Vacuum :id=sandkit.enums.ItemId.vacuum

<p class="smt-member-path"><code>sandkit.enums.ItemId.Vacuum</code></p>

```ts
Vacuum: 5
```

Defined in: [sandkit/enums/index.d.ts:158](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L158)

***

#### Gun :id=sandkit.enums.ItemId.gun

<p class="smt-member-path"><code>sandkit.enums.ItemId.Gun</code></p>

```ts
Gun: 6
```

Defined in: [sandkit/enums/index.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L159)

***

#### Copier :id=sandkit.enums.ItemId.copier

<p class="smt-member-path"><code>sandkit.enums.ItemId.Copier</code></p>

```ts
Copier: 7
```

Defined in: [sandkit/enums/index.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L160)

***

#### RocketLauncher :id=sandkit.enums.ItemId.rocketlauncher

<p class="smt-member-path"><code>sandkit.enums.ItemId.RocketLauncher</code></p>

```ts
RocketLauncher: 8
```

Defined in: [sandkit/enums/index.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L161)

***

#### Digger :id=sandkit.enums.ItemId.digger

<p class="smt-member-path"><code>sandkit.enums.ItemId.Digger</code></p>

```ts
Digger: 9
```

Defined in: [sandkit/enums/index.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L162)

***

#### Shotgun :id=sandkit.enums.ItemId.shotgun

<p class="smt-member-path"><code>sandkit.enums.ItemId.Shotgun</code></p>

```ts
Shotgun: 10
```

Defined in: [sandkit/enums/index.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L163)

***

#### Teleporter :id=sandkit.enums.ItemId.teleporter

<p class="smt-member-path"><code>sandkit.enums.ItemId.Teleporter</code></p>

```ts
Teleporter: 11
```

Defined in: [sandkit/enums/index.d.ts:164](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L164)

***

#### Flamethrower :id=sandkit.enums.ItemId.flamethrower

<p class="smt-member-path"><code>sandkit.enums.ItemId.Flamethrower</code></p>

```ts
Flamethrower: 12
```

Defined in: [sandkit/enums/index.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L165)

***

#### PipeRemover :id=sandkit.enums.ItemId.piperemover

<p class="smt-member-path"><code>sandkit.enums.ItemId.PipeRemover</code></p>

```ts
PipeRemover: 13
```

Defined in: [sandkit/enums/index.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L166)

***

#### Hauler :id=sandkit.enums.ItemId.hauler

<p class="smt-member-path"><code>sandkit.enums.ItemId.Hauler</code></p>

```ts
Hauler: 14
```

Defined in: [sandkit/enums/index.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L167)

***

#### Cryoblaster :id=sandkit.enums.ItemId.cryoblaster

<p class="smt-member-path"><code>sandkit.enums.ItemId.Cryoblaster</code></p>

```ts
Cryoblaster: 15
```

Defined in: [sandkit/enums/index.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L168)

***

#### MegaShotgun :id=sandkit.enums.ItemId.megashotgun

<p class="smt-member-path"><code>sandkit.enums.ItemId.MegaShotgun</code></p>

```ts
MegaShotgun: 16
```

Defined in: [sandkit/enums/index.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L169)

---

## sandkit.enums.ItemType

Defined in: [sandkit/enums/index.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L173)

Item category (weapon, tool, consumable, mod).

### Enumeration Members <!-- {docsify-ignore} -->

#### Weapon :id=sandkit.enums.ItemType.weapon

<p class="smt-member-path"><code>sandkit.enums.ItemType.Weapon</code></p>

```ts
Weapon: 1
```

Defined in: [sandkit/enums/index.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L174)

***

#### Tool :id=sandkit.enums.ItemType.tool

<p class="smt-member-path"><code>sandkit.enums.ItemType.Tool</code></p>

```ts
Tool: 2
```

Defined in: [sandkit/enums/index.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L175)

***

#### Consumable :id=sandkit.enums.ItemType.consumable

<p class="smt-member-path"><code>sandkit.enums.ItemType.Consumable</code></p>

```ts
Consumable: 3
```

Defined in: [sandkit/enums/index.d.ts:176](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L176)

***

#### Mod :id=sandkit.enums.ItemType.mod

<p class="smt-member-path"><code>sandkit.enums.ItemType.Mod</code></p>

```ts
Mod: 4
```

Defined in: [sandkit/enums/index.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L177)

---

## sandkit.enums.KeyBinding

Defined in: [sandkit/enums/index.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L181)

Named input bindings (settings keys).

### Enumeration Members <!-- {docsify-ignore} -->

#### OpenBuildMenu :id=sandkit.enums.KeyBinding.openbuildmenu

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.OpenBuildMenu</code></p>

```ts
OpenBuildMenu: "OpenBuildMenu"
```

Defined in: [sandkit/enums/index.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L182)

***

#### GrapplingHook :id=sandkit.enums.KeyBinding.grapplinghook

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.GrapplingHook</code></p>

```ts
GrapplingHook: "GrapplingHook"
```

Defined in: [sandkit/enums/index.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L183)

***

#### Escape :id=sandkit.enums.KeyBinding.escape

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Escape</code></p>

```ts
Escape: "Escape"
```

Defined in: [sandkit/enums/index.d.ts:184](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L184)

***

#### OpenTechTree :id=sandkit.enums.KeyBinding.opentechtree

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.OpenTechTree</code></p>

```ts
OpenTechTree: "OpenTechTree"
```

Defined in: [sandkit/enums/index.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L185)

***

#### OpenInventory :id=sandkit.enums.KeyBinding.openinventory

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.OpenInventory</code></p>

```ts
OpenInventory: "OpenInventory"
```

Defined in: [sandkit/enums/index.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L186)

***

#### ReverseBuildDirection :id=sandkit.enums.KeyBinding.reversebuilddirection

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.ReverseBuildDirection</code></p>

```ts
ReverseBuildDirection: "ReverseBuildDirection"
```

Defined in: [sandkit/enums/index.d.ts:187](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L187)

***

#### Marquee :id=sandkit.enums.KeyBinding.marquee

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Marquee</code></p>

```ts
Marquee: "Marquee"
```

Defined in: [sandkit/enums/index.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L188)

***

#### Pause :id=sandkit.enums.KeyBinding.pause

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Pause</code></p>

```ts
Pause: "Pause"
```

Defined in: [sandkit/enums/index.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L189)

***

#### Copy :id=sandkit.enums.KeyBinding.copy

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Copy</code></p>

```ts
Copy: "Copy"
```

Defined in: [sandkit/enums/index.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L190)

***

#### Paste :id=sandkit.enums.KeyBinding.paste

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Paste</code></p>

```ts
Paste: "Paste"
```

Defined in: [sandkit/enums/index.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L191)

***

#### Flip :id=sandkit.enums.KeyBinding.flip

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Flip</code></p>

```ts
Flip: "Flip"
```

Defined in: [sandkit/enums/index.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L192)

***

#### Delete :id=sandkit.enums.KeyBinding.delete

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Delete</code></p>

```ts
Delete: "Delete"
```

Defined in: [sandkit/enums/index.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L193)

***

#### PauseCamera :id=sandkit.enums.KeyBinding.pausecamera

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.PauseCamera</code></p>

```ts
PauseCamera: "PauseCamera"
```

Defined in: [sandkit/enums/index.d.ts:194](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L194)

***

#### OpenUpgrades :id=sandkit.enums.KeyBinding.openupgrades

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.OpenUpgrades</code></p>

```ts
OpenUpgrades: "OpenUpgrades"
```

Defined in: [sandkit/enums/index.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L195)

***

#### BuildMode :id=sandkit.enums.KeyBinding.buildmode

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.BuildMode</code></p>

```ts
BuildMode: "BuildMode"
```

Defined in: [sandkit/enums/index.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L196)

***

#### Demolish :id=sandkit.enums.KeyBinding.demolish

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Demolish</code></p>

```ts
Demolish: "Demolish"
```

Defined in: [sandkit/enums/index.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L197)

***

#### Hover :id=sandkit.enums.KeyBinding.hover

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Hover</code></p>

```ts
Hover: "Hover"
```

Defined in: [sandkit/enums/index.d.ts:198](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L198)

***

#### Ruler :id=sandkit.enums.KeyBinding.ruler

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Ruler</code></p>

```ts
Ruler: "Ruler"
```

Defined in: [sandkit/enums/index.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L199)

***

#### Left :id=sandkit.enums.KeyBinding.left

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Left</code></p>

```ts
Left: "Left"
```

Defined in: [sandkit/enums/index.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L200)

***

#### Right :id=sandkit.enums.KeyBinding.right

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Right</code></p>

```ts
Right: "Right"
```

Defined in: [sandkit/enums/index.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L201)

***

#### Boost :id=sandkit.enums.KeyBinding.boost

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Boost</code></p>

```ts
Boost: "Boost"
```

Defined in: [sandkit/enums/index.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L202)

***

#### Descend :id=sandkit.enums.KeyBinding.descend

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.Descend</code></p>

```ts
Descend: "Descend"
```

Defined in: [sandkit/enums/index.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L203)

***

#### SprintBoost :id=sandkit.enums.KeyBinding.sprintboost

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.SprintBoost</code></p>

```ts
SprintBoost: "SprintBoost"
```

Defined in: [sandkit/enums/index.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L204)

***

#### OverrideReplaceStructures :id=sandkit.enums.KeyBinding.overridereplacestructures

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.OverrideReplaceStructures</code></p>

```ts
OverrideReplaceStructures: "OverrideReplaceStructures"
```

Defined in: [sandkit/enums/index.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L205)

***

#### QuickSave :id=sandkit.enums.KeyBinding.quicksave

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.QuickSave</code></p>

```ts
QuickSave: "QuickSave"
```

Defined in: [sandkit/enums/index.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L206)

***

#### QuickLoad :id=sandkit.enums.KeyBinding.quickload

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.QuickLoad</code></p>

```ts
QuickLoad: "QuickLoad"
```

Defined in: [sandkit/enums/index.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L207)

***

#### ToggleGameHud :id=sandkit.enums.KeyBinding.togglegamehud

<p class="smt-member-path"><code>sandkit.enums.KeyBinding.ToggleGameHud</code></p>

```ts
ToggleGameHud: "ToggleGameHud"
```

Defined in: [sandkit/enums/index.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L208)

---

## sandkit.enums.KeyState

Defined in: [sandkit/enums/index.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L212)

Key transition state for input polling.

### Enumeration Members <!-- {docsify-ignore} -->

#### Up :id=sandkit.enums.KeyState.up

<p class="smt-member-path"><code>sandkit.enums.KeyState.Up</code></p>

```ts
Up: 1
```

Defined in: [sandkit/enums/index.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L213)

***

#### Down :id=sandkit.enums.KeyState.down

<p class="smt-member-path"><code>sandkit.enums.KeyState.Down</code></p>

```ts
Down: 2
```

Defined in: [sandkit/enums/index.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L214)

***

#### Pressed :id=sandkit.enums.KeyState.pressed

<p class="smt-member-path"><code>sandkit.enums.KeyState.Pressed</code></p>

```ts
Pressed: 3
```

Defined in: [sandkit/enums/index.d.ts:215](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L215)

***

#### Released :id=sandkit.enums.KeyState.released

<p class="smt-member-path"><code>sandkit.enums.KeyState.Released</code></p>

```ts
Released: 4
```

Defined in: [sandkit/enums/index.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L216)

***

#### All :id=sandkit.enums.KeyState.all

<p class="smt-member-path"><code>sandkit.enums.KeyState.All</code></p>

```ts
All: 5
```

Defined in: [sandkit/enums/index.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L217)

---

## sandkit.enums.MatterType

Defined in: [sandkit/enums/index.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L221)

Physical behaviour category for elements (mirrors shared API enum).

### Enumeration Members <!-- {docsify-ignore} -->

#### Solid :id=sandkit.enums.MatterType.solid

<p class="smt-member-path"><code>sandkit.enums.MatterType.Solid</code></p>

```ts
Solid: 1
```

Defined in: [sandkit/enums/index.d.ts:222](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L222)

***

#### Liquid :id=sandkit.enums.MatterType.liquid

<p class="smt-member-path"><code>sandkit.enums.MatterType.Liquid</code></p>

```ts
Liquid: 2
```

Defined in: [sandkit/enums/index.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L223)

***

#### Particle :id=sandkit.enums.MatterType.particle

<p class="smt-member-path"><code>sandkit.enums.MatterType.Particle</code></p>

```ts
Particle: 3
```

Defined in: [sandkit/enums/index.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L224)

***

#### Gas :id=sandkit.enums.MatterType.gas

<p class="smt-member-path"><code>sandkit.enums.MatterType.Gas</code></p>

```ts
Gas: 4
```

Defined in: [sandkit/enums/index.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L225)

***

#### Static :id=sandkit.enums.MatterType.static

<p class="smt-member-path"><code>sandkit.enums.MatterType.Static</code></p>

```ts
Static: 5
```

Defined in: [sandkit/enums/index.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L226)

***

#### Slushy :id=sandkit.enums.MatterType.slushy

<p class="smt-member-path"><code>sandkit.enums.MatterType.Slushy</code></p>

```ts
Slushy: 6
```

Defined in: [sandkit/enums/index.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L227)

***

#### Wisp :id=sandkit.enums.MatterType.wisp

<p class="smt-member-path"><code>sandkit.enums.MatterType.Wisp</code></p>

```ts
Wisp: 7
```

Defined in: [sandkit/enums/index.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L228)

***

#### Powder :id=sandkit.enums.MatterType.powder

<p class="smt-member-path"><code>sandkit.enums.MatterType.Powder</code></p>

```ts
Powder: 8
```

Defined in: [sandkit/enums/index.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L229)

---

## sandkit.enums.PickupType

Defined in: [sandkit/enums/index.d.ts:413](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L413)

Pickups and interactable world items.

### Enumeration Members <!-- {docsify-ignore} -->

#### Artifact :id=sandkit.enums.PickupType.artifact

<p class="smt-member-path"><code>sandkit.enums.PickupType.Artifact</code></p>

```ts
Artifact: 1
```

Defined in: [sandkit/enums/index.d.ts:414](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L414)

***

#### GlyphKey :id=sandkit.enums.PickupType.glyphkey

<p class="smt-member-path"><code>sandkit.enums.PickupType.GlyphKey</code></p>

```ts
GlyphKey: 2
```

Defined in: [sandkit/enums/index.d.ts:415](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L415)

***

#### Stratacore :id=sandkit.enums.PickupType.stratacore

<p class="smt-member-path"><code>sandkit.enums.PickupType.Stratacore</code></p>

```ts
Stratacore: 3
```

Defined in: [sandkit/enums/index.d.ts:416](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L416)

***

#### Orb :id=sandkit.enums.PickupType.orb

<p class="smt-member-path"><code>sandkit.enums.PickupType.Orb</code></p>

```ts
Orb: 4
```

Defined in: [sandkit/enums/index.d.ts:417](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L417)

---

## sandkit.enums.ProjectileType

Defined in: [sandkit/enums/index.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L233)

Projectile kinds spawned by weapons and tools.

### Enumeration Members <!-- {docsify-ignore} -->

#### Bullet :id=sandkit.enums.ProjectileType.bullet

<p class="smt-member-path"><code>sandkit.enums.ProjectileType.Bullet</code></p>

```ts
Bullet: 1
```

Defined in: [sandkit/enums/index.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L234)

***

#### Rocket :id=sandkit.enums.ProjectileType.rocket

<p class="smt-member-path"><code>sandkit.enums.ProjectileType.Rocket</code></p>

```ts
Rocket: 2
```

Defined in: [sandkit/enums/index.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L235)

***

#### GrapplingHook :id=sandkit.enums.ProjectileType.grapplinghook

<p class="smt-member-path"><code>sandkit.enums.ProjectileType.GrapplingHook</code></p>

```ts
GrapplingHook: 3
```

Defined in: [sandkit/enums/index.d.ts:236](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L236)

***

#### Fire :id=sandkit.enums.ProjectileType.fire

<p class="smt-member-path"><code>sandkit.enums.ProjectileType.Fire</code></p>

```ts
Fire: 4
```

Defined in: [sandkit/enums/index.d.ts:237](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L237)

***

#### Digger :id=sandkit.enums.ProjectileType.digger

<p class="smt-member-path"><code>sandkit.enums.ProjectileType.Digger</code></p>

```ts
Digger: 5
```

Defined in: [sandkit/enums/index.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L238)

***

#### Mod :id=sandkit.enums.ProjectileType.mod

<p class="smt-member-path"><code>sandkit.enums.ProjectileType.Mod</code></p>

```ts
Mod: 6
```

Defined in: [sandkit/enums/index.d.ts:239](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L239)

---

## sandkit.enums.ReloadType

Defined in: [sandkit/enums/index.d.ts:243](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L243)

Weapon reload behaviour.

### Enumeration Members <!-- {docsify-ignore} -->

#### Clip :id=sandkit.enums.ReloadType.clip

<p class="smt-member-path"><code>sandkit.enums.ReloadType.Clip</code></p>

```ts
Clip: 1
```

Defined in: [sandkit/enums/index.d.ts:244](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L244)

***

#### Single :id=sandkit.enums.ReloadType.single

<p class="smt-member-path"><code>sandkit.enums.ReloadType.Single</code></p>

```ts
Single: 2
```

Defined in: [sandkit/enums/index.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L245)

***

#### OverTime :id=sandkit.enums.ReloadType.overtime

<p class="smt-member-path"><code>sandkit.enums.ReloadType.OverTime</code></p>

```ts
OverTime: 3
```

Defined in: [sandkit/enums/index.d.ts:246](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L246)

---

## sandkit.enums.Scene

Defined in: [sandkit/enums/index.d.ts:250](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L250)

Top-level game scene (menu, intro, deploy, in-game).

### Enumeration Members <!-- {docsify-ignore} -->

#### MainMenu :id=sandkit.enums.Scene.mainmenu

<p class="smt-member-path"><code>sandkit.enums.Scene.MainMenu</code></p>

```ts
MainMenu: 1
```

Defined in: [sandkit/enums/index.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L251)

***

#### Intro :id=sandkit.enums.Scene.intro

<p class="smt-member-path"><code>sandkit.enums.Scene.Intro</code></p>

```ts
Intro: 2
```

Defined in: [sandkit/enums/index.d.ts:252](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L252)

***

#### Deploy :id=sandkit.enums.Scene.deploy

<p class="smt-member-path"><code>sandkit.enums.Scene.Deploy</code></p>

```ts
Deploy: 3
```

Defined in: [sandkit/enums/index.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L253)

***

#### Game :id=sandkit.enums.Scene.game

<p class="smt-member-path"><code>sandkit.enums.Scene.Game</code></p>

```ts
Game: 4
```

Defined in: [sandkit/enums/index.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L254)

---

## sandkit.enums.StructureType

Defined in: [sandkit/enums/index.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L258)

Built-in structure type ids.

### Enumeration Members <!-- {docsify-ignore} -->

#### ConveyorLeft :id=sandkit.enums.StructureType.conveyorleft

<p class="smt-member-path"><code>sandkit.enums.StructureType.ConveyorLeft</code></p>

```ts
ConveyorLeft: 1
```

Defined in: [sandkit/enums/index.d.ts:259](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L259)

***

#### ConveyorRight :id=sandkit.enums.StructureType.conveyorright

<p class="smt-member-path"><code>sandkit.enums.StructureType.ConveyorRight</code></p>

```ts
ConveyorRight: 2
```

Defined in: [sandkit/enums/index.d.ts:260](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L260)

***

#### ShakerLeft :id=sandkit.enums.StructureType.shakerleft

<p class="smt-member-path"><code>sandkit.enums.StructureType.ShakerLeft</code></p>

```ts
ShakerLeft: 3
```

Defined in: [sandkit/enums/index.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L261)

***

#### ShakerRight :id=sandkit.enums.StructureType.shakerright

<p class="smt-member-path"><code>sandkit.enums.StructureType.ShakerRight</code></p>

```ts
ShakerRight: 4
```

Defined in: [sandkit/enums/index.d.ts:262](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L262)

***

#### LauncherUp :id=sandkit.enums.StructureType.launcherup

<p class="smt-member-path"><code>sandkit.enums.StructureType.LauncherUp</code></p>

```ts
LauncherUp: 5
```

Defined in: [sandkit/enums/index.d.ts:263](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L263)

***

#### LauncherLeft :id=sandkit.enums.StructureType.launcherleft

<p class="smt-member-path"><code>sandkit.enums.StructureType.LauncherLeft</code></p>

```ts
LauncherLeft: 6
```

Defined in: [sandkit/enums/index.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L264)

***

#### LauncherRight :id=sandkit.enums.StructureType.launcherright

<p class="smt-member-path"><code>sandkit.enums.StructureType.LauncherRight</code></p>

```ts
LauncherRight: 7
```

Defined in: [sandkit/enums/index.d.ts:265](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L265)

***

#### SplitterLeft :id=sandkit.enums.StructureType.splitterleft

<p class="smt-member-path"><code>sandkit.enums.StructureType.SplitterLeft</code></p>

```ts
SplitterLeft: 8
```

Defined in: [sandkit/enums/index.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L266)

***

#### SplitterRight :id=sandkit.enums.StructureType.splitterright

<p class="smt-member-path"><code>sandkit.enums.StructureType.SplitterRight</code></p>

```ts
SplitterRight: 9
```

Defined in: [sandkit/enums/index.d.ts:267](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L267)

***

#### Dropper :id=sandkit.enums.StructureType.dropper

<p class="smt-member-path"><code>sandkit.enums.StructureType.Dropper</code></p>

```ts
Dropper: 10
```

Defined in: [sandkit/enums/index.d.ts:268](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L268)

***

#### Foundation :id=sandkit.enums.StructureType.foundation

<p class="smt-member-path"><code>sandkit.enums.StructureType.Foundation</code></p>

```ts
Foundation: 11
```

Defined in: [sandkit/enums/index.d.ts:269](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L269)

***

#### FoundationAngledLeft :id=sandkit.enums.StructureType.foundationangledleft

<p class="smt-member-path"><code>sandkit.enums.StructureType.FoundationAngledLeft</code></p>

```ts
FoundationAngledLeft: 12
```

Defined in: [sandkit/enums/index.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L270)

***

#### FoundationTriangleLeftDel :id=sandkit.enums.StructureType.foundationtriangleleftdel

<p class="smt-member-path"><code>sandkit.enums.StructureType.FoundationTriangleLeftDel</code></p>

```ts
FoundationTriangleLeftDel: 13
```

Defined in: [sandkit/enums/index.d.ts:271](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L271)

***

#### FoundationAngledRight :id=sandkit.enums.StructureType.foundationangledright

<p class="smt-member-path"><code>sandkit.enums.StructureType.FoundationAngledRight</code></p>

```ts
FoundationAngledRight: 14
```

Defined in: [sandkit/enums/index.d.ts:272](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L272)

***

#### FoundationTriangleRightDel :id=sandkit.enums.StructureType.foundationtrianglerightdel

<p class="smt-member-path"><code>sandkit.enums.StructureType.FoundationTriangleRightDel</code></p>

```ts
FoundationTriangleRightDel: 15
```

Defined in: [sandkit/enums/index.d.ts:273](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L273)

***

#### Collector :id=sandkit.enums.StructureType.collector

<p class="smt-member-path"><code>sandkit.enums.StructureType.Collector</code></p>

```ts
Collector: 16
```

Defined in: [sandkit/enums/index.d.ts:274](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L274)

***

#### FilterLeft :id=sandkit.enums.StructureType.filterleft

<p class="smt-member-path"><code>sandkit.enums.StructureType.FilterLeft</code></p>

```ts
FilterLeft: 17
```

Defined in: [sandkit/enums/index.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L275)

***

#### FilterRight :id=sandkit.enums.StructureType.filterright

<p class="smt-member-path"><code>sandkit.enums.StructureType.FilterRight</code></p>

```ts
FilterRight: 18
```

Defined in: [sandkit/enums/index.d.ts:276](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L276)

***

#### SlidingFoundation :id=sandkit.enums.StructureType.slidingfoundation

<p class="smt-member-path"><code>sandkit.enums.StructureType.SlidingFoundation</code></p>

```ts
SlidingFoundation: 19
```

Defined in: [sandkit/enums/index.d.ts:277](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L277)

***

#### VelocitySoaker :id=sandkit.enums.StructureType.velocitysoaker

<p class="smt-member-path"><code>sandkit.enums.StructureType.VelocitySoaker</code></p>

```ts
VelocitySoaker: 20
```

Defined in: [sandkit/enums/index.d.ts:278](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L278)

***

#### Grower :id=sandkit.enums.StructureType.grower

<p class="smt-member-path"><code>sandkit.enums.StructureType.Grower</code></p>

```ts
Grower: 21
```

Defined in: [sandkit/enums/index.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L279)

***

#### SoundBox :id=sandkit.enums.StructureType.soundbox

<p class="smt-member-path"><code>sandkit.enums.StructureType.SoundBox</code></p>

```ts
SoundBox: 22
```

Defined in: [sandkit/enums/index.d.ts:280](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L280)

***

#### Pipe :id=sandkit.enums.StructureType.pipe

<p class="smt-member-path"><code>sandkit.enums.StructureType.Pipe</code></p>

```ts
Pipe: 23
```

Defined in: [sandkit/enums/index.d.ts:281](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L281)

***

#### Pump :id=sandkit.enums.StructureType.pump

<p class="smt-member-path"><code>sandkit.enums.StructureType.Pump</code></p>

```ts
Pump: 24
```

Defined in: [sandkit/enums/index.d.ts:282](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L282)

***

#### LiquidVent :id=sandkit.enums.StructureType.liquidvent

<p class="smt-member-path"><code>sandkit.enums.StructureType.LiquidVent</code></p>

```ts
LiquidVent: 25
```

Defined in: [sandkit/enums/index.d.ts:283](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L283)

***

#### Light :id=sandkit.enums.StructureType.light

<p class="smt-member-path"><code>sandkit.enums.StructureType.Light</code></p>

```ts
Light: 26
```

Defined in: [sandkit/enums/index.d.ts:284](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L284)

***

#### FluxEmanator :id=sandkit.enums.StructureType.fluxemanator

<p class="smt-member-path"><code>sandkit.enums.StructureType.FluxEmanator</code></p>

```ts
FluxEmanator: 27
```

Defined in: [sandkit/enums/index.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L285)

---

## sandkit.enums.Tech

Defined in: [sandkit/enums/index.d.ts:289](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L289)

Tech tree node ids (mixed numeric and string keys).

### Enumeration Members <!-- {docsify-ignore} -->

#### Shaker :id=sandkit.enums.Tech.shaker

<p class="smt-member-path"><code>sandkit.enums.Tech.Shaker</code></p>

```ts
Shaker: 1
```

Defined in: [sandkit/enums/index.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L290)

***

#### Conveyors :id=sandkit.enums.Tech.conveyors

<p class="smt-member-path"><code>sandkit.enums.Tech.Conveyors</code></p>

```ts
Conveyors: 2
```

Defined in: [sandkit/enums/index.d.ts:291](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L291)

***

#### Guns1 :id=sandkit.enums.Tech.guns1

<p class="smt-member-path"><code>sandkit.enums.Tech.Guns1</code></p>

```ts
Guns1: 3
```

Defined in: [sandkit/enums/index.d.ts:292](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L292)

***

#### Filters1 :id=sandkit.enums.Tech.filters1

<p class="smt-member-path"><code>sandkit.enums.Tech.Filters1</code></p>

```ts
Filters1: 4
```

Defined in: [sandkit/enums/index.d.ts:293](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L293)

***

#### Flamethrower :id=sandkit.enums.Tech.flamethrower

<p class="smt-member-path"><code>sandkit.enums.Tech.Flamethrower</code></p>

```ts
Flamethrower: 5
```

Defined in: [sandkit/enums/index.d.ts:294](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L294)

***

#### Gun :id=sandkit.enums.Tech.gun

<p class="smt-member-path"><code>sandkit.enums.Tech.Gun</code></p>

```ts
Gun: 6
```

Defined in: [sandkit/enums/index.d.ts:295](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L295)

***

#### KineticPress :id=sandkit.enums.Tech.kineticpress

<p class="smt-member-path"><code>sandkit.enums.Tech.KineticPress</code></p>

```ts
KineticPress: 7
```

Defined in: [sandkit/enums/index.d.ts:296](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L296)

***

#### Guns2 :id=sandkit.enums.Tech.guns2

<p class="smt-member-path"><code>sandkit.enums.Tech.Guns2</code></p>

```ts
Guns2: 8
```

Defined in: [sandkit/enums/index.d.ts:297](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L297)

***

#### Drones1 :id=sandkit.enums.Tech.drones1

<p class="smt-member-path"><code>sandkit.enums.Tech.Drones1</code></p>

```ts
Drones1: 9
```

Defined in: [sandkit/enums/index.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L298)

***

#### Upgrading2 :id=sandkit.enums.Tech.upgrading2

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading2</code></p>

```ts
Upgrading2: 10
```

Defined in: [sandkit/enums/index.d.ts:299](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L299)

***

#### Filters2 :id=sandkit.enums.Tech.filters2

<p class="smt-member-path"><code>sandkit.enums.Tech.Filters2</code></p>

```ts
Filters2: 11
```

Defined in: [sandkit/enums/index.d.ts:300](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L300)

***

#### Upgrading3 :id=sandkit.enums.Tech.upgrading3

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading3</code></p>

```ts
Upgrading3: 12
```

Defined in: [sandkit/enums/index.d.ts:301](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L301)

***

#### Upgrading4 :id=sandkit.enums.Tech.upgrading4

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading4</code></p>

```ts
Upgrading4: 13
```

Defined in: [sandkit/enums/index.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L302)

***

#### Upgrading5 :id=sandkit.enums.Tech.upgrading5

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading5</code></p>

```ts
Upgrading5: 14
```

Defined in: [sandkit/enums/index.d.ts:303](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L303)

***

#### Upgrading6 :id=sandkit.enums.Tech.upgrading6

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading6</code></p>

```ts
Upgrading6: 15
```

Defined in: [sandkit/enums/index.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L304)

***

#### Upgrading7 :id=sandkit.enums.Tech.upgrading7

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading7</code></p>

```ts
Upgrading7: 16
```

Defined in: [sandkit/enums/index.d.ts:305](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L305)

***

#### Upgrading8 :id=sandkit.enums.Tech.upgrading8

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading8</code></p>

```ts
Upgrading8: 17
```

Defined in: [sandkit/enums/index.d.ts:306](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L306)

***

#### Upgrading9 :id=sandkit.enums.Tech.upgrading9

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading9</code></p>

```ts
Upgrading9: 18
```

Defined in: [sandkit/enums/index.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L307)

***

#### Upgrading10 :id=sandkit.enums.Tech.upgrading10

<p class="smt-member-path"><code>sandkit.enums.Tech.Upgrading10</code></p>

```ts
Upgrading10: 19
```

Defined in: [sandkit/enums/index.d.ts:308](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L308)

***

#### PlanterBox :id=sandkit.enums.Tech.planterbox

<p class="smt-member-path"><code>sandkit.enums.Tech.PlanterBox</code></p>

```ts
PlanterBox: 20
```

Defined in: [sandkit/enums/index.d.ts:309](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L309)

***

#### Thermo :id=sandkit.enums.Tech.thermo

<p class="smt-member-path"><code>sandkit.enums.Tech.Thermo</code></p>

```ts
Thermo: 21
```

Defined in: [sandkit/enums/index.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L310)

***

#### Rocket :id=sandkit.enums.Tech.rocket

<p class="smt-member-path"><code>sandkit.enums.Tech.Rocket</code></p>

```ts
Rocket: 22
```

Defined in: [sandkit/enums/index.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L311)

***

#### Pipes :id=sandkit.enums.Tech.pipes

<p class="smt-member-path"><code>sandkit.enums.Tech.Pipes</code></p>

```ts
Pipes: 23
```

Defined in: [sandkit/enums/index.d.ts:312](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L312)

***

#### StaticLights :id=sandkit.enums.Tech.staticlights

<p class="smt-member-path"><code>sandkit.enums.Tech.StaticLights</code></p>

```ts
StaticLights: 24
```

Defined in: [sandkit/enums/index.d.ts:313](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L313)

***

#### Drones2 :id=sandkit.enums.Tech.drones2

<p class="smt-member-path"><code>sandkit.enums.Tech.Drones2</code></p>

```ts
Drones2: 25
```

Defined in: [sandkit/enums/index.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L314)

***

#### Smelter :id=sandkit.enums.Tech.smelter

<p class="smt-member-path"><code>sandkit.enums.Tech.Smelter</code></p>

```ts
Smelter: 26
```

Defined in: [sandkit/enums/index.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L315)

***

#### Tools4 :id=sandkit.enums.Tech.tools4

<p class="smt-member-path"><code>sandkit.enums.Tech.Tools4</code></p>

```ts
Tools4: 27
```

Defined in: [sandkit/enums/index.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L316)

***

#### Guns3 :id=sandkit.enums.Tech.guns3

<p class="smt-member-path"><code>sandkit.enums.Tech.Guns3</code></p>

```ts
Guns3: 28
```

Defined in: [sandkit/enums/index.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L317)

***

#### Pipes2 :id=sandkit.enums.Tech.pipes2

<p class="smt-member-path"><code>sandkit.enums.Tech.Pipes2</code></p>

```ts
Pipes2: 29
```

Defined in: [sandkit/enums/index.d.ts:318](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L318)

***

#### ConveyorsMk2 :id=sandkit.enums.Tech.conveyorsmk2

<p class="smt-member-path"><code>sandkit.enums.Tech.ConveyorsMk2</code></p>

```ts
ConveyorsMk2: 30
```

Defined in: [sandkit/enums/index.d.ts:319](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L319)

***

#### Lights2 :id=sandkit.enums.Tech.lights2

<p class="smt-member-path"><code>sandkit.enums.Tech.Lights2</code></p>

```ts
Lights2: 31
```

Defined in: [sandkit/enums/index.d.ts:320](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L320)

***

#### Refining6 :id=sandkit.enums.Tech.refining6

<p class="smt-member-path"><code>sandkit.enums.Tech.Refining6</code></p>

```ts
Refining6: 32
```

Defined in: [sandkit/enums/index.d.ts:321](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L321)

***

#### Refining7 :id=sandkit.enums.Tech.refining7

<p class="smt-member-path"><code>sandkit.enums.Tech.Refining7</code></p>

```ts
Refining7: 33
```

Defined in: [sandkit/enums/index.d.ts:322](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L322)

***

#### Guns4 :id=sandkit.enums.Tech.guns4

<p class="smt-member-path"><code>sandkit.enums.Tech.Guns4</code></p>

```ts
Guns4: 34
```

Defined in: [sandkit/enums/index.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L323)

***

#### Guns5 :id=sandkit.enums.Tech.guns5

<p class="smt-member-path"><code>sandkit.enums.Tech.Guns5</code></p>

```ts
Guns5: 35
```

Defined in: [sandkit/enums/index.d.ts:324](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L324)

***

#### Tools5 :id=sandkit.enums.Tech.tools5

<p class="smt-member-path"><code>sandkit.enums.Tech.Tools5</code></p>

```ts
Tools5: 36
```

Defined in: [sandkit/enums/index.d.ts:325](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L325)

***

#### Tools6 :id=sandkit.enums.Tech.tools6

<p class="smt-member-path"><code>sandkit.enums.Tech.Tools6</code></p>

```ts
Tools6: 37
```

Defined in: [sandkit/enums/index.d.ts:326](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L326)

***

#### Filters3 :id=sandkit.enums.Tech.filters3

<p class="smt-member-path"><code>sandkit.enums.Tech.Filters3</code></p>

```ts
Filters3: 38
```

Defined in: [sandkit/enums/index.d.ts:327](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L327)

***

#### Filters4 :id=sandkit.enums.Tech.filters4

<p class="smt-member-path"><code>sandkit.enums.Tech.Filters4</code></p>

```ts
Filters4: 39
```

Defined in: [sandkit/enums/index.d.ts:328](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L328)

***

#### Pipes3 :id=sandkit.enums.Tech.pipes3

<p class="smt-member-path"><code>sandkit.enums.Tech.Pipes3</code></p>

```ts
Pipes3: 40
```

Defined in: [sandkit/enums/index.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L329)

***

#### Pipes4 :id=sandkit.enums.Tech.pipes4

<p class="smt-member-path"><code>sandkit.enums.Tech.Pipes4</code></p>

```ts
Pipes4: 41
```

Defined in: [sandkit/enums/index.d.ts:330](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L330)

***

#### Logistics3 :id=sandkit.enums.Tech.logistics3

<p class="smt-member-path"><code>sandkit.enums.Tech.Logistics3</code></p>

```ts
Logistics3: 42
```

Defined in: [sandkit/enums/index.d.ts:331](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L331)

***

#### Logistics4 :id=sandkit.enums.Tech.logistics4

<p class="smt-member-path"><code>sandkit.enums.Tech.Logistics4</code></p>

```ts
Logistics4: 43
```

Defined in: [sandkit/enums/index.d.ts:332](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L332)

***

#### Lights3 :id=sandkit.enums.Tech.lights3

<p class="smt-member-path"><code>sandkit.enums.Tech.Lights3</code></p>

```ts
Lights3: 44
```

Defined in: [sandkit/enums/index.d.ts:333](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L333)

***

#### Lights4 :id=sandkit.enums.Tech.lights4

<p class="smt-member-path"><code>sandkit.enums.Tech.Lights4</code></p>

```ts
Lights4: 45
```

Defined in: [sandkit/enums/index.d.ts:334](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L334)

***

#### Drones3 :id=sandkit.enums.Tech.drones3

<p class="smt-member-path"><code>sandkit.enums.Tech.Drones3</code></p>

```ts
Drones3: 46
```

Defined in: [sandkit/enums/index.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L335)

***

#### Drones4 :id=sandkit.enums.Tech.drones4

<p class="smt-member-path"><code>sandkit.enums.Tech.Drones4</code></p>

```ts
Drones4: 47
```

Defined in: [sandkit/enums/index.d.ts:336](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L336)

***

#### Alien :id=sandkit.enums.Tech.alien

<p class="smt-member-path"><code>sandkit.enums.Tech.Alien</code></p>

```ts
Alien: 48
```

Defined in: [sandkit/enums/index.d.ts:337](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L337)

***

#### Electricity :id=sandkit.enums.Tech.electricity

<p class="smt-member-path"><code>sandkit.enums.Tech.Electricity</code></p>

```ts
Electricity: 49
```

Defined in: [sandkit/enums/index.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L338)

***

#### AlienCore :id=sandkit.enums.Tech.aliencore

<p class="smt-member-path"><code>sandkit.enums.Tech.AlienCore</code></p>

```ts
AlienCore: 50
```

Defined in: [sandkit/enums/index.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L339)

***

#### Emanators1 :id=sandkit.enums.Tech.emanators1

<p class="smt-member-path"><code>sandkit.enums.Tech.Emanators1</code></p>

```ts
Emanators1: 51
```

Defined in: [sandkit/enums/index.d.ts:340](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L340)

***

#### AlienPlasmaConduits :id=sandkit.enums.Tech.alienplasmaconduits

<p class="smt-member-path"><code>sandkit.enums.Tech.AlienPlasmaConduits</code></p>

```ts
AlienPlasmaConduits: 52
```

Defined in: [sandkit/enums/index.d.ts:341](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L341)

***

#### AlienQuantumMatrix :id=sandkit.enums.Tech.alienquantummatrix

<p class="smt-member-path"><code>sandkit.enums.Tech.AlienQuantumMatrix</code></p>

```ts
AlienQuantumMatrix: 53
```

Defined in: [sandkit/enums/index.d.ts:342](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L342)

***

#### AlienPlasmaCore :id=sandkit.enums.Tech.alienplasmacore

<p class="smt-member-path"><code>sandkit.enums.Tech.AlienPlasmaCore</code></p>

```ts
AlienPlasmaCore: 54
```

Defined in: [sandkit/enums/index.d.ts:343](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L343)

***

#### AlienVoidEngine :id=sandkit.enums.Tech.alienvoidengine

<p class="smt-member-path"><code>sandkit.enums.Tech.AlienVoidEngine</code></p>

```ts
AlienVoidEngine: 55
```

Defined in: [sandkit/enums/index.d.ts:344](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L344)

***

#### FlareGun :id=sandkit.enums.Tech.flaregun

<p class="smt-member-path"><code>sandkit.enums.Tech.FlareGun</code></p>

```ts
FlareGun: 56
```

Defined in: [sandkit/enums/index.d.ts:345](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L345)

***

#### Sweeper :id=sandkit.enums.Tech.sweeper

<p class="smt-member-path"><code>sandkit.enums.Tech.Sweeper</code></p>

```ts
Sweeper: 57
```

Defined in: [sandkit/enums/index.d.ts:346](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L346)

***

#### Utilities3 :id=sandkit.enums.Tech.utilities3

<p class="smt-member-path"><code>sandkit.enums.Tech.Utilities3</code></p>

```ts
Utilities3: 58
```

Defined in: [sandkit/enums/index.d.ts:347](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L347)

***

#### Cryoblaster :id=sandkit.enums.Tech.cryoblaster

<p class="smt-member-path"><code>sandkit.enums.Tech.Cryoblaster</code></p>

```ts
Cryoblaster: 59
```

Defined in: [sandkit/enums/index.d.ts:348](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L348)

***

#### Vacuum :id=sandkit.enums.Tech.vacuum

<p class="smt-member-path"><code>sandkit.enums.Tech.Vacuum</code></p>

```ts
Vacuum: 60
```

Defined in: [sandkit/enums/index.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L349)

***

#### Utilities6 :id=sandkit.enums.Tech.utilities6

<p class="smt-member-path"><code>sandkit.enums.Tech.Utilities6</code></p>

```ts
Utilities6: 61
```

Defined in: [sandkit/enums/index.d.ts:350](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L350)

***

#### Utilities7 :id=sandkit.enums.Tech.utilities7

<p class="smt-member-path"><code>sandkit.enums.Tech.Utilities7</code></p>

```ts
Utilities7: 62
```

Defined in: [sandkit/enums/index.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L351)

***

#### Filters :id=sandkit.enums.Tech.filters

<p class="smt-member-path"><code>sandkit.enums.Tech.Filters</code></p>

```ts
Filters: 63
```

Defined in: [sandkit/enums/index.d.ts:352](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L352)

***

#### AdvancedFilters :id=sandkit.enums.Tech.advancedfilters

<p class="smt-member-path"><code>sandkit.enums.Tech.AdvancedFilters</code></p>

```ts
AdvancedFilters: 64
```

Defined in: [sandkit/enums/index.d.ts:353](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L353)

***

#### Infrastructure3 :id=sandkit.enums.Tech.infrastructure3

<p class="smt-member-path"><code>sandkit.enums.Tech.Infrastructure3</code></p>

```ts
Infrastructure3: 65
```

Defined in: [sandkit/enums/index.d.ts:354](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L354)

***

#### Decorations1 :id=sandkit.enums.Tech.decorations1

<p class="smt-member-path"><code>sandkit.enums.Tech.Decorations1</code></p>

```ts
Decorations1: 66
```

Defined in: [sandkit/enums/index.d.ts:355](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L355)

***

#### Decorations2 :id=sandkit.enums.Tech.decorations2

<p class="smt-member-path"><code>sandkit.enums.Tech.Decorations2</code></p>

```ts
Decorations2: 67
```

Defined in: [sandkit/enums/index.d.ts:356](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L356)

***

#### Decorations3 :id=sandkit.enums.Tech.decorations3

<p class="smt-member-path"><code>sandkit.enums.Tech.Decorations3</code></p>

```ts
Decorations3: 68
```

Defined in: [sandkit/enums/index.d.ts:357](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L357)

***

#### Blocks1 :id=sandkit.enums.Tech.blocks1

<p class="smt-member-path"><code>sandkit.enums.Tech.Blocks1</code></p>

```ts
Blocks1: 69
```

Defined in: [sandkit/enums/index.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L358)

***

#### Drill :id=sandkit.enums.Tech.drill

<p class="smt-member-path"><code>sandkit.enums.Tech.Drill</code></p>

```ts
Drill: 70
```

Defined in: [sandkit/enums/index.d.ts:359](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L359)

***

#### SteamTurbine :id=sandkit.enums.Tech.steamturbine

<p class="smt-member-path"><code>sandkit.enums.Tech.SteamTurbine</code></p>

```ts
SteamTurbine: 71
```

Defined in: [sandkit/enums/index.d.ts:360](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L360)

***

#### Electricity3 :id=sandkit.enums.Tech.electricity3

<p class="smt-member-path"><code>sandkit.enums.Tech.Electricity3</code></p>

```ts
Electricity3: 72
```

Defined in: [sandkit/enums/index.d.ts:361](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L361)

***

#### Electricity4 :id=sandkit.enums.Tech.electricity4

<p class="smt-member-path"><code>sandkit.enums.Tech.Electricity4</code></p>

```ts
Electricity4: 73
```

Defined in: [sandkit/enums/index.d.ts:362](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L362)

***

#### Logic1 :id=sandkit.enums.Tech.logic1

<p class="smt-member-path"><code>sandkit.enums.Tech.Logic1</code></p>

```ts
Logic1: 74
```

Defined in: [sandkit/enums/index.d.ts:363](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L363)

***

#### Logic2 :id=sandkit.enums.Tech.logic2

<p class="smt-member-path"><code>sandkit.enums.Tech.Logic2</code></p>

```ts
Logic2: 75
```

Defined in: [sandkit/enums/index.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L364)

***

#### Logic3 :id=sandkit.enums.Tech.logic3

<p class="smt-member-path"><code>sandkit.enums.Tech.Logic3</code></p>

```ts
Logic3: 76
```

Defined in: [sandkit/enums/index.d.ts:365](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L365)

***

#### Logic4 :id=sandkit.enums.Tech.logic4

<p class="smt-member-path"><code>sandkit.enums.Tech.Logic4</code></p>

```ts
Logic4: 77
```

Defined in: [sandkit/enums/index.d.ts:366](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L366)

***

#### Various1 :id=sandkit.enums.Tech.various1

<p class="smt-member-path"><code>sandkit.enums.Tech.Various1</code></p>

```ts
Various1: 78
```

Defined in: [sandkit/enums/index.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L367)

***

#### Various2 :id=sandkit.enums.Tech.various2

<p class="smt-member-path"><code>sandkit.enums.Tech.Various2</code></p>

```ts
Various2: 79
```

Defined in: [sandkit/enums/index.d.ts:368](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L368)

***

#### Various3 :id=sandkit.enums.Tech.various3

<p class="smt-member-path"><code>sandkit.enums.Tech.Various3</code></p>

```ts
Various3: 80
```

Defined in: [sandkit/enums/index.d.ts:369](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L369)

***

#### Locator :id=sandkit.enums.Tech.locator

<p class="smt-member-path"><code>sandkit.enums.Tech.Locator</code></p>

```ts
Locator: 81
```

Defined in: [sandkit/enums/index.d.ts:370](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L370)

***

#### QuantumPortal :id=sandkit.enums.Tech.quantumportal

<p class="smt-member-path"><code>sandkit.enums.Tech.QuantumPortal</code></p>

```ts
QuantumPortal: 82
```

Defined in: [sandkit/enums/index.d.ts:371](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L371)

***

#### VoidRift :id=sandkit.enums.Tech.voidrift

<p class="smt-member-path"><code>sandkit.enums.Tech.VoidRift</code></p>

```ts
VoidRift: 83
```

Defined in: [sandkit/enums/index.d.ts:372](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L372)

***

#### Blink :id=sandkit.enums.Tech.blink

<p class="smt-member-path"><code>sandkit.enums.Tech.Blink</code></p>

```ts
Blink: 84
```

Defined in: [sandkit/enums/index.d.ts:373](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L373)

***

#### Recall :id=sandkit.enums.Tech.recall

<p class="smt-member-path"><code>sandkit.enums.Tech.Recall</code></p>

```ts
Recall: 85
```

Defined in: [sandkit/enums/index.d.ts:374](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L374)

***

#### ImplosionGun :id=sandkit.enums.Tech.implosiongun

<p class="smt-member-path"><code>sandkit.enums.Tech.ImplosionGun</code></p>

```ts
ImplosionGun: 86
```

Defined in: [sandkit/enums/index.d.ts:375](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L375)

***

#### Refining8 :id=sandkit.enums.Tech.refining8

<p class="smt-member-path"><code>sandkit.enums.Tech.Refining8</code></p>

```ts
Refining8: 87
```

Defined in: [sandkit/enums/index.d.ts:376](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L376)

***

#### Tools7 :id=sandkit.enums.Tech.tools7

<p class="smt-member-path"><code>sandkit.enums.Tech.Tools7</code></p>

```ts
Tools7: 88
```

Defined in: [sandkit/enums/index.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L377)

***

#### Diggers :id=sandkit.enums.Tech.diggers

<p class="smt-member-path"><code>sandkit.enums.Tech.Diggers</code></p>

```ts
Diggers: 89
```

Defined in: [sandkit/enums/index.d.ts:378](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L378)

***

#### Haulers :id=sandkit.enums.Tech.haulers

<p class="smt-member-path"><code>sandkit.enums.Tech.Haulers</code></p>

```ts
Haulers: 90
```

Defined in: [sandkit/enums/index.d.ts:379](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L379)

***

#### Map :id=sandkit.enums.Tech.map

<p class="smt-member-path"><code>sandkit.enums.Tech.Map</code></p>

```ts
Map: 91
```

Defined in: [sandkit/enums/index.d.ts:380](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L380)

***

#### ColoringTool :id=sandkit.enums.Tech.coloringtool

<p class="smt-member-path"><code>sandkit.enums.Tech.ColoringTool</code></p>

```ts
ColoringTool: 92
```

Defined in: [sandkit/enums/index.d.ts:381](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L381)

***

#### SignalGate :id=sandkit.enums.Tech.signalgate

<p class="smt-member-path"><code>sandkit.enums.Tech.SignalGate</code></p>

```ts
SignalGate: 93
```

Defined in: [sandkit/enums/index.d.ts:382](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L382)

***

#### GrapplingHook :id=sandkit.enums.Tech.grapplinghook

<p class="smt-member-path"><code>sandkit.enums.Tech.GrapplingHook</code></p>

```ts
GrapplingHook: 94
```

Defined in: [sandkit/enums/index.d.ts:383](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L383)

***

#### GlassFoundation :id=sandkit.enums.Tech.glassfoundation

<p class="smt-member-path"><code>sandkit.enums.Tech.GlassFoundation</code></p>

```ts
GlassFoundation: 95
```

Defined in: [sandkit/enums/index.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L384)

***

#### PrecisionTools :id=sandkit.enums.Tech.precisiontools

<p class="smt-member-path"><code>sandkit.enums.Tech.PrecisionTools</code></p>

```ts
PrecisionTools: 96
```

Defined in: [sandkit/enums/index.d.ts:385](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L385)

***

#### SignalDevices :id=sandkit.enums.Tech.signaldevices

<p class="smt-member-path"><code>sandkit.enums.Tech.SignalDevices</code></p>

```ts
SignalDevices: 97
```

Defined in: [sandkit/enums/index.d.ts:386](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L386)

***

#### SignalControls :id=sandkit.enums.Tech.signalcontrols

<p class="smt-member-path"><code>sandkit.enums.Tech.SignalControls</code></p>

```ts
SignalControls: 98
```

Defined in: [sandkit/enums/index.d.ts:387](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L387)

***

#### LogicGates :id=sandkit.enums.Tech.logicgates

<p class="smt-member-path"><code>sandkit.enums.Tech.LogicGates</code></p>

```ts
LogicGates: 99
```

Defined in: [sandkit/enums/index.d.ts:388](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L388)

***

#### RetroConsole :id=sandkit.enums.Tech.retroconsole

<p class="smt-member-path"><code>sandkit.enums.Tech.RetroConsole</code></p>

```ts
RetroConsole: 100
```

Defined in: [sandkit/enums/index.d.ts:389](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L389)

***

#### WallTool :id=sandkit.enums.Tech.walltool

<p class="smt-member-path"><code>sandkit.enums.Tech.WallTool</code></p>

```ts
WallTool: 101
```

Defined in: [sandkit/enums/index.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L390)

***

#### Corraller :id=sandkit.enums.Tech.corraller

<p class="smt-member-path"><code>sandkit.enums.Tech.Corraller</code></p>

```ts
Corraller: 102
```

Defined in: [sandkit/enums/index.d.ts:391](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L391)

***

#### PlainFoundation :id=sandkit.enums.Tech.plainfoundation

<p class="smt-member-path"><code>sandkit.enums.Tech.PlainFoundation</code></p>

```ts
PlainFoundation: 103
```

Defined in: [sandkit/enums/index.d.ts:392](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L392)

***

#### ClearingFrame :id=sandkit.enums.Tech.clearingframe

<p class="smt-member-path"><code>sandkit.enums.Tech.ClearingFrame</code></p>

```ts
ClearingFrame: 104
```

Defined in: [sandkit/enums/index.d.ts:393](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L393)

***

#### Heatmap :id=sandkit.enums.Tech.heatmap

<p class="smt-member-path"><code>sandkit.enums.Tech.Heatmap</code></p>

```ts
Heatmap: 105
```

Defined in: [sandkit/enums/index.d.ts:394](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L394)

***

#### MiningLaser :id=sandkit.enums.Tech.mininglaser

<p class="smt-member-path"><code>sandkit.enums.Tech.MiningLaser</code></p>

```ts
MiningLaser: 106
```

Defined in: [sandkit/enums/index.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L395)

***

#### GoldBattery :id=sandkit.enums.Tech.goldbattery

<p class="smt-member-path"><code>sandkit.enums.Tech.GoldBattery</code></p>

```ts
GoldBattery: 107
```

Defined in: [sandkit/enums/index.d.ts:396](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L396)

***

#### Hover :id=sandkit.enums.Tech.hover

<p class="smt-member-path"><code>sandkit.enums.Tech.Hover</code></p>

```ts
Hover: 108
```

Defined in: [sandkit/enums/index.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L397)

***

#### SprintBoost :id=sandkit.enums.Tech.sprintboost

<p class="smt-member-path"><code>sandkit.enums.Tech.SprintBoost</code></p>

```ts
SprintBoost: 109
```

Defined in: [sandkit/enums/index.d.ts:398](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L398)

***

#### CritterFence :id=sandkit.enums.Tech.critterfence

<p class="smt-member-path"><code>sandkit.enums.Tech.CritterFence</code></p>

```ts
CritterFence: 110
```

Defined in: [sandkit/enums/index.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L399)

***

#### FluxEmanator :id=sandkit.enums.Tech.fluxemanator

<p class="smt-member-path"><code>sandkit.enums.Tech.FluxEmanator</code></p>

```ts
FluxEmanator: "fluxEmanator"
```

Defined in: [sandkit/enums/index.d.ts:400](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L400)

---

## sandkit.enums.TechStatus

Defined in: [sandkit/enums/index.d.ts:404](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L404)

Visibility and research state of a tech node.

### Enumeration Members <!-- {docsify-ignore} -->

#### Available :id=sandkit.enums.TechStatus.available

<p class="smt-member-path"><code>sandkit.enums.TechStatus.Available</code></p>

```ts
Available: 0
```

Defined in: [sandkit/enums/index.d.ts:405](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L405)

***

#### Visible :id=sandkit.enums.TechStatus.visible

<p class="smt-member-path"><code>sandkit.enums.TechStatus.Visible</code></p>

```ts
Visible: 1
```

Defined in: [sandkit/enums/index.d.ts:406](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L406)

***

#### Researched :id=sandkit.enums.TechStatus.researched

<p class="smt-member-path"><code>sandkit.enums.TechStatus.Researched</code></p>

```ts
Researched: 2
```

Defined in: [sandkit/enums/index.d.ts:407](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L407)

***

#### Unknown :id=sandkit.enums.TechStatus.unknown

<p class="smt-member-path"><code>sandkit.enums.TechStatus.Unknown</code></p>

```ts
Unknown: 3
```

Defined in: [sandkit/enums/index.d.ts:408](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L408)

***

#### Hidden :id=sandkit.enums.TechStatus.hidden

<p class="smt-member-path"><code>sandkit.enums.TechStatus.Hidden</code></p>

```ts
Hidden: 4
```

Defined in: [sandkit/enums/index.d.ts:409](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L409)

---

## sandkit.enums.WorldItemType

Defined in: [sandkit/enums/index.d.ts:423](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L423)

### Deprecated

Use [PickupType](api/sandkit.enums.PickupType.md) instead.

### Enumeration Members <!-- {docsify-ignore} -->

#### ~~Artifact~~

```ts
Artifact: 1
```

Defined in: [sandkit/enums/index.d.ts:424](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L424)

***

#### ~~GlyphKey~~

```ts
GlyphKey: 2
```

Defined in: [sandkit/enums/index.d.ts:425](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L425)

***

#### ~~Stratacore~~

```ts
Stratacore: 3
```

Defined in: [sandkit/enums/index.d.ts:426](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L426)

***

#### ~~Orb~~

```ts
Orb: 4
```

Defined in: [sandkit/enums/index.d.ts:427](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/enums/index.d.ts#L427)

---

## sandkit.react

### Type Aliases <!-- {docsify-ignore} -->

#### SandkitReact :id=sandkit.react.sandkitreact

<p class="smt-member-path"><code>sandkit.react.SandkitReact</code></p>

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

Sandkit mod file schemas: `modinfo.json` and `patches.json`.

These are not runtime `sandkit` properties. Import from
`@sandustry-modding/types/configs` when typing mod folder config files.

### See

https://sandustry.com/sandkit.html#mod-files-heading Official Sandkit API — Mod file structure

### Interfaces <!-- {docsify-ignore} -->

#### ConfigSchemaNumber :id=configs.configschemanumber

<p class="smt-member-path"><code>configs.ConfigSchemaNumber</code></p>

Defined in: [configs/modinfo.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L12)

Number setting in `modinfo.json` `configSchema`.

##### Properties

###### type

```ts
type: "number"
```

Defined in: [configs/modinfo.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L18)

Discriminator. Must be `"number"`.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### default

```ts
default: number
```

Defined in: [configs/modinfo.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L24)

Value used when the player has not changed the setting.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### min?

```ts
optional min?: number
```

Defined in: [configs/modinfo.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L30)

Inclusive lower bound for the setting.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### max?

```ts
optional max?: number
```

Defined in: [configs/modinfo.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L36)

Inclusive upper bound for the setting.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### step?

```ts
optional step?: number
```

Defined in: [configs/modinfo.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L42)

UI step size for the number control.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L48)

Plain-text label shown in the settings UI.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L54)

i18n key for the settings label (preferred over [label](#label) when both exist).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L60)

Plain-text help text for the setting.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L66)

i18n key for the setting help text.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

***

#### ConfigSchemaBoolean :id=configs.configschemaboolean

<p class="smt-member-path"><code>configs.ConfigSchemaBoolean</code></p>

Defined in: [configs/modinfo.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L70)

Boolean setting in `modinfo.json` `configSchema`.

##### Properties

###### type

```ts
type: "boolean"
```

Defined in: [configs/modinfo.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L76)

Discriminator. Must be `"boolean"`.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### default

```ts
default: boolean
```

Defined in: [configs/modinfo.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L82)

Value used when the player has not changed the setting.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L88)

Plain-text label shown in the settings UI.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L94)

i18n key for the settings label.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L100)

Plain-text help text for the setting.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [configs/modinfo.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L106)

i18n key for the setting help text.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

***

#### ConfigSchemaChoiceOption :id=configs.configschemachoiceoption

<p class="smt-member-path"><code>configs.ConfigSchemaChoiceOption</code></p>

Defined in: [configs/modinfo.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L110)

One option inside a [ConfigSchemaChoice](#configschemachoice).

##### Properties

###### value

```ts
value: string
```

Defined in: [configs/modinfo.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L116)

Stored value written when the player picks this option.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L122)

Plain-text label for the option.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L128)

i18n key for the option label.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

***

#### ConfigSchemaChoice :id=configs.configschemachoice

<p class="smt-member-path"><code>configs.ConfigSchemaChoice</code></p>

Defined in: [configs/modinfo.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L132)

Choice setting in `modinfo.json` `configSchema`.

##### Properties

###### type

```ts
type: "choice"
```

Defined in: [configs/modinfo.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L138)

Discriminator. Must be `"choice"`.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### default

```ts
default: string
```

Defined in: [configs/modinfo.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L144)

Default option [ConfigSchemaChoiceOption.value](#value).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### label?

```ts
optional label?: string
```

Defined in: [configs/modinfo.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L150)

Plain-text label shown in the settings UI.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### labelKey?

```ts
optional labelKey?: string
```

Defined in: [configs/modinfo.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L156)

i18n key for the settings label.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### options

```ts
options: readonly ConfigSchemaChoiceOption[]
```

Defined in: [configs/modinfo.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L162)

Allowed choices for this setting.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

***

#### TextureOverride :id=configs.textureoverride

<p class="smt-member-path"><code>configs.TextureOverride</code></p>

Defined in: [configs/modinfo.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L182)

Animated (or static) texture replacement for a vanilla asset id.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `textureOverrides`

##### Properties

###### path

```ts
path: string
```

Defined in: [configs/modinfo.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L188)

Path to the replacement image, relative to the mod root.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `textureOverrides`

###### frameWidth?

```ts
optional frameWidth?: number
```

Defined in: [configs/modinfo.d.ts:194](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L194)

Width in pixels of one animation frame.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `textureOverrides`

###### frames?

```ts
optional frames?: number
```

Defined in: [configs/modinfo.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L200)

Number of frames in the spritesheet.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `textureOverrides`

###### intervalMs?

```ts
optional intervalMs?: number
```

Defined in: [configs/modinfo.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L206)

Milliseconds between animation frames.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `textureOverrides`

***

#### ModProvide :id=configs.modprovide

<p class="smt-member-path"><code>configs.ModProvide</code></p>

Defined in: [configs/modinfo.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L214)

Optional content pack exposed by this mod for other mods or the game to consume.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `provides`

##### Properties

###### kind

```ts
kind: string
```

Defined in: [configs/modinfo.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L220)

Kind of provided content (for example `"structureTextures"`).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `provides`

###### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L226)

Id of this provide entry within its kind.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `provides`

###### textureOverrides?

```ts
optional textureOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:232](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L232)

Texture paths keyed by the vanilla or structure texture id they replace.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `provides`

***

#### ModMapBlueprints :id=configs.modmapblueprints

<p class="smt-member-path"><code>configs.ModMapBlueprints</code></p>

Defined in: [configs/modinfo.d.ts:242](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L242)

Blueprint image paths for a custom map pack.

Paths are relative to the mod root.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

##### Properties

###### terrain?

```ts
optional terrain?: string
```

Defined in: [configs/modinfo.d.ts:248](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L248)

Terrain color map image.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### lights?

```ts
optional lights?: string
```

Defined in: [configs/modinfo.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L254)

Lights layout image.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### sensors?

```ts
optional sensors?: string
```

Defined in: [configs/modinfo.d.ts:260](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L260)

Sensors layout image.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### authorization?

```ts
optional authorization?: string
```

Defined in: [configs/modinfo.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L266)

Authorization zones image.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### wall?

```ts
optional wall?: string
```

Defined in: [configs/modinfo.d.ts:272](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L272)

Wall layout image.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### lightsMeta?

```ts
optional lightsMeta?: string
```

Defined in: [configs/modinfo.d.ts:278](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L278)

Lights metadata image.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### decor?

```ts
optional decor?: string
```

Defined in: [configs/modinfo.d.ts:284](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L284)

Decor layout image.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### config?

```ts
optional config?: string
```

Defined in: [configs/modinfo.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L290)

Map config JSON path.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

***

#### ModMapPoint :id=configs.modmappoint

<p class="smt-member-path"><code>configs.ModMapPoint</code></p>

Defined in: [configs/modinfo.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L298)

World-pixel spawn or unstuck point.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

##### Properties

###### x

```ts
x: number
```

Defined in: [configs/modinfo.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L304)

World X in pixels.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

###### y

```ts
y: number
```

Defined in: [configs/modinfo.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L310)

World Y in pixels.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

***

#### ModMapTopBounds :id=configs.modmaptopbounds

<p class="smt-member-path"><code>configs.ModMapTopBounds</code></p>

Defined in: [configs/modinfo.d.ts:318](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L318)

Vertical camera / travel bounds for the custom map.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.topBounds`

##### Properties

###### hard?

```ts
optional hard?: number
```

Defined in: [configs/modinfo.d.ts:324](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L324)

Hard top bound in world pixels.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.topBounds`

###### soft?

```ts
optional soft?: number
```

Defined in: [configs/modinfo.d.ts:330](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L330)

Soft top bound in world pixels.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.topBounds`

***

#### ModMapDepthLight :id=configs.modmapdepthlight

<p class="smt-member-path"><code>configs.ModMapDepthLight</code></p>

Defined in: [configs/modinfo.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L338)

Depth-based light sizing for the custom map.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.depthLight`

##### Properties

###### startY?

```ts
optional startY?: number
```

Defined in: [configs/modinfo.d.ts:344](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L344)

World Y where depth light scaling starts.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.depthLight`

###### endY?

```ts
optional endY?: number
```

Defined in: [configs/modinfo.d.ts:350](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L350)

World Y where depth light scaling ends.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.depthLight`

###### maxSize?

```ts
optional maxSize?: number
```

Defined in: [configs/modinfo.d.ts:356](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L356)

Maximum light size at the shallow end of the range.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.depthLight`

###### minSize?

```ts
optional minSize?: number
```

Defined in: [configs/modinfo.d.ts:362](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L362)

Minimum light size at the deep end of the range.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.depthLight`

***

#### ModMapParallax :id=configs.modmapparallax

<p class="smt-member-path"><code>configs.ModMapParallax</code></p>

Defined in: [configs/modinfo.d.ts:370](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L370)

Parallax background tuning for the custom map.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.parallax`

##### Properties

###### widthScale?

```ts
optional widthScale?: number
```

Defined in: [configs/modinfo.d.ts:376](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L376)

Horizontal scale of the parallax layer.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.parallax`

###### offsetY?

```ts
optional offsetY?: number
```

Defined in: [configs/modinfo.d.ts:382](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L382)

Vertical offset of the parallax layer in pixels.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.parallax`

***

#### ModMapColorMappingLayers :id=configs.modmapcolormappinglayers

<p class="smt-member-path"><code>configs.ModMapColorMappingLayers</code></p>

Defined in: [configs/modinfo.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L390)

Color-map cell that paints both background and foreground terrain.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.colorMappings`

##### Properties

###### background?

```ts
optional background?: string
```

Defined in: [configs/modinfo.d.ts:396](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L396)

Background terrain id for this blueprint RGB.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.colorMappings`

###### foreground?

```ts
optional foreground?: string
```

Defined in: [configs/modinfo.d.ts:402](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L402)

Foreground terrain id for this blueprint RGB.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.colorMappings`

***

#### ModMapDefinition :id=configs.modmapdefinition

<p class="smt-member-path"><code>configs.ModMapDefinition</code></p>

Defined in: [configs/modinfo.d.ts:417](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L417)

Custom map pack block in `modinfo.json`.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

##### Properties

###### blueprints

```ts
blueprints: ModMapBlueprints
```

Defined in: [configs/modinfo.d.ts:423](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L423)

Paths to blueprint images and map config under the mod root.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.blueprints`

###### width

```ts
width: number
```

Defined in: [configs/modinfo.d.ts:429](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L429)

Map width in cells.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

###### height

```ts
height: number
```

Defined in: [configs/modinfo.d.ts:435](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L435)

Map height in cells.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

###### spawn?

```ts
optional spawn?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L441)

Player spawn position in world pixels.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

###### unstuck?

```ts
optional unstuck?: ModMapPoint
```

Defined in: [configs/modinfo.d.ts:447](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L447)

Unstuck / rescue position in world pixels.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

###### deployment?

```ts
optional deployment?: string
```

Defined in: [configs/modinfo.d.ts:453](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L453)

Deployment mode for the map (for example `"skip"`).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

###### topBounds?

```ts
optional topBounds?: ModMapTopBounds
```

Defined in: [configs/modinfo.d.ts:459](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L459)

Vertical travel bounds at the top of the world.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.topBounds`

###### depthLight?

```ts
optional depthLight?: ModMapDepthLight
```

Defined in: [configs/modinfo.d.ts:465](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L465)

Depth-based light size curve.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.depthLight`

###### parallax?

```ts
optional parallax?: ModMapParallax
```

Defined in: [configs/modinfo.d.ts:471](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L471)

Parallax background tuning.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.parallax`

###### colorMappings?

```ts
optional colorMappings?: Record<string, ModMapColorMapping>
```

Defined in: [configs/modinfo.d.ts:477](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L477)

Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.colorMappings`

***

#### ModGameVersion :id=configs.modgameversion

<p class="smt-member-path"><code>configs.ModGameVersion</code></p>

Defined in: [configs/modinfo.d.ts:485](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L485)

Compatible game version range for the mod.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `gameVersion`

##### Properties

###### minimum?

```ts
optional minimum?: string
```

Defined in: [configs/modinfo.d.ts:491](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L491)

Lowest supported game version string.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `gameVersion`

###### maximum?

```ts
optional maximum?: string
```

Defined in: [configs/modinfo.d.ts:497](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L497)

Highest supported game version string.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `gameVersion`

***

#### ModInfo :id=configs.modinfo

<p class="smt-member-path"><code>configs.ModInfo</code></p>

Defined in: [configs/modinfo.d.ts:509](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L509)

Sandkit mod manifest (`modinfo.json`).

Required for every mod folder. Minimal mods only need
[manifestVersion](#manifestversion), [id](#id-1), [name](#name), [version](#version),
[apiVersion](#apiversion), and [entry](#entry).

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

##### Properties

###### manifestVersion

```ts
manifestVersion: 1
```

Defined in: [configs/modinfo.d.ts:515](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L515)

Manifest format version. Must be `1` for Sandkit `apiVersion` 1.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### id

```ts
id: string
```

Defined in: [configs/modinfo.d.ts:521](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L521)

Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### name

```ts
name: string
```

Defined in: [configs/modinfo.d.ts:527](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L527)

Display name shown in the mod list and Workshop UI.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### version

```ts
version: string
```

Defined in: [configs/modinfo.d.ts:533](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L533)

Semver-style mod version string.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### apiVersion

```ts
apiVersion: 1
```

Defined in: [configs/modinfo.d.ts:539](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L539)

Sandkit host API version this mod targets. Must be `1`.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### entry

```ts
entry: string
```

Defined in: [configs/modinfo.d.ts:545](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L545)

Main-thread script path relative to the mod root (for example `"main.js"`).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### workerEntry?

```ts
optional workerEntry?: string
```

Defined in: [configs/modinfo.d.ts:552](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L552)

Simulation-worker script path relative to the mod root.
Required when the mod registers worker hooks or uses worker-only APIs.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### patches?

```ts
optional patches?: string
```

Defined in: [configs/modinfo.d.ts:559](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L559)

Path to the patches file relative to the mod root (usually `"patches.json"`).
When omitted, a present `patches.json` may still auto-load per official docs.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### description?

```ts
optional description?: string
```

Defined in: [configs/modinfo.d.ts:565](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L565)

Long description shown in the mod list / Workshop.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### author?

```ts
optional author?: string
```

Defined in: [configs/modinfo.d.ts:571](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L571)

Author display name.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### gameVersion?

```ts
optional gameVersion?: ModGameVersion
```

Defined in: [configs/modinfo.d.ts:577](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L577)

Inclusive game version range this mod claims to support.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `gameVersion`

###### dependencies?

```ts
optional dependencies?: string[]
```

Defined in: [configs/modinfo.d.ts:583](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L583)

Other mod ids that should load with this mod.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### loadOrder?

```ts
optional loadOrder?: number
```

Defined in: [configs/modinfo.d.ts:589](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L589)

Relative load priority. Lower values load earlier; higher values load later.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest

###### configSchema?

```ts
optional configSchema?: Record<string, ConfigSchemaEntry>
```

Defined in: [configs/modinfo.d.ts:596](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L596)

Player-facing settings schema. Keys are setting ids; values define type and UI.
Read at runtime with `api.settings.get`.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

###### configOverrides?

```ts
optional configOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:602](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L602)

Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configOverrides`

###### shaderOverrides?

```ts
optional shaderOverrides?: Record<string, string>
```

Defined in: [configs/modinfo.d.ts:608](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L608)

Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `shaderOverrides`

###### textureOverrides?

```ts
optional textureOverrides?: Record<string, string | TextureOverride>
```

Defined in: [configs/modinfo.d.ts:615](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L615)

Texture replacements keyed by vanilla texture id.
A string value is a path; an object adds spritesheet frame metadata.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `textureOverrides`

###### provides?

```ts
optional provides?: ModProvide[]
```

Defined in: [configs/modinfo.d.ts:621](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L621)

Optional content this mod publishes for others to consume.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `provides`

###### map?

```ts
optional map?: ModMapDefinition
```

Defined in: [configs/modinfo.d.ts:627](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L627)

Embedded custom map pack definition for this mod.

###### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map`

***

#### BundlePatchRegex :id=configs.bundlepatchregex

<p class="smt-member-path"><code>configs.BundlePatchRegex</code></p>

Defined in: [configs/patches.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L56)

Regex finder when the target is not a plain [BundlePatch.find](#find) string.

##### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

##### Properties

###### pattern

```ts
pattern: string
```

Defined in: [configs/patches.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L63)

JavaScript regex pattern source (without surrounding `/` delimiters).
Capture groups may be referenced from [BundlePatch.code](#code) as `$1`, `$2`, …

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### flags?

```ts
optional flags?: string
```

Defined in: [configs/patches.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L69)

Optional regex flags (for example `"g"` or `"m"`).

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

***

#### BundlePatch :id=configs.bundlepatch

<p class="smt-member-path"><code>configs.BundlePatch</code></p>

Defined in: [configs/patches.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L81)

One entry in `patches.json`.

The file is an array of these objects. Prefer `expectedMatches` so a missed
or duplicated match fails loudly. When several patches must succeed together
(for example main + worker), set the same [atomicGroup](#atomicgroup) on each.

##### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

##### Properties

###### file

```ts
file: PatchTargetFile
```

Defined in: [configs/patches.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L87)

Compiled bundle to modify.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### find?

```ts
optional find?: string
```

Defined in: [configs/patches.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L94)

Exact source substring to locate in the bundle.
Mutually exclusive with [regex](#regex) in typical patches.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### code?

```ts
optional code?: string
```

Defined in: [configs/patches.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L101)

Replacement or inserted source text.
Official examples use `code`; some loaders also accept [replace](#replace).

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### replace?

```ts
optional replace?: string
```

Defined in: [configs/patches.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L107)

Alias of [code](#code) used by some patch loaders and workshop mods.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### operation?

```ts
optional operation?: PatchOperation
```

Defined in: [configs/patches.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L114)

How to apply the match. Defaults to replace-style behaviour when omitted
in common workshop patches.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### expectedMatches?

```ts
optional expectedMatches?: number | "any"
```

Defined in: [configs/patches.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L122)

How many times `find` / `regex` must match.
Use a number (often `1`) so the load fails on miss or over-match.
Some loaders accept `"any"`.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### regex?

```ts
optional regex?: BundlePatchRegex
```

Defined in: [configs/patches.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L128)

Regex-based locator instead of a literal [find](#find) string.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### before?

```ts
optional before?: string
```

Defined in: [configs/patches.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L134)

Text inserted before the match when [operation](#operation) is `"wrap"`.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### after?

```ts
optional after?: string
```

Defined in: [configs/patches.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L140)

Text inserted after the match when [operation](#operation) is `"wrap"`.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### id?

```ts
optional id?: string
```

Defined in: [configs/patches.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L146)

Optional stable id for logging and tooling.

###### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

###### atomicGroup?

```ts
optional atomicGroup?: string
```

Defined in: [configs/patches.d.ts:152](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L152)

Group id shared by patches that must all succeed or all fail together.
Use the same string on paired main (`js/bundle.js`) and worker
(`js/simulation-worker.js`) patches.

###### description?

```ts
optional description?: string
```

Defined in: [configs/patches.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L156)

Human-readable note for maintainers. Not required by the official schema.

### Type Aliases <!-- {docsify-ignore} -->

#### ConfigSchemaEntry :id=configs.configschemaentry

<p class="smt-member-path"><code>configs.ConfigSchemaEntry</code></p>

```ts
ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice
```

Defined in: [configs/modinfo.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L172)

One entry under `modinfo.json` `configSchema`.

Keys of `configSchema` are setting ids read via `api.settings.get`.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `configSchema`

***

#### ModMapColorMapping :id=configs.modmapcolormapping

<p class="smt-member-path"><code>configs.ModMapColorMapping</code></p>

```ts
ModMapColorMapping = string | ModMapColorMappingLayers
```

Defined in: [configs/modinfo.d.ts:410](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/modinfo.d.ts#L410)

One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.

##### See

https://sandustry.com/sandkit.html#mod-manifest-heading Official Sandkit API — Mod manifest `map.colorMappings`

***

#### PatchTargetFile :id=configs.patchtargetfile

<p class="smt-member-path"><code>configs.PatchTargetFile</code></p>

```ts
PatchTargetFile = "js/bundle.js" | "js/simulation-worker.js" | "js/manager-worker.js" | "js/utility-worker.js" | string & object
```

Defined in: [configs/patches.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L24)

Known compiled bundle paths the loader can patch.

| Value | Role |
| --- | --- |
| `js/bundle.js` | Main renderer |
| `js/manager-worker.js` | Manager worker |
| `js/simulation-worker.js` | Simulation workers |
| `js/utility-worker.js` | Utility worker |

##### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

***

#### PatchOperation :id=configs.patchoperation

<p class="smt-member-path"><code>configs.PatchOperation</code></p>

```ts
PatchOperation = "replace" | "remove" | "insertBefore" | "insertAfter" | "wrap"
```

Defined in: [configs/patches.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L44)

Supported patch operations.

| Value | Behaviour |
| --- | --- |
| `replace` | Replace the matched text with [BundlePatch.code](#code) / [BundlePatch.replace](#replace) |
| `remove` | Delete the matched text |
| `insertBefore` | Insert [BundlePatch.code](#code) before the match |
| `insertAfter` | Insert [BundlePatch.code](#code) after the match |
| `wrap` | Surround the match with [BundlePatch.before](#before) and [BundlePatch.after](#after) |

##### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

***

#### BundlePatchesFile :id=configs.bundlepatchesfile

<p class="smt-member-path"><code>configs.BundlePatchesFile</code></p>

```ts
BundlePatchesFile = BundlePatch[]
```

Defined in: [configs/patches.d.ts:164](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/configs/patches.d.ts#L164)

Root shape of `patches.json`: an ordered list of [BundlePatch](#bundlepatch) entries.

##### See

https://sandustry.com/sandkit.html#patches-heading Official Sandkit API — Patching compiled JavaScript

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

<p class="smt-member-path"><code>shared.engine.EngineFn</code></p>

```ts
EngineFn = (...args: unknown[]) => unknown
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

<p class="smt-member-path"><code>shared.engine.EngineOverlapNs</code></p>

```ts
EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>
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

<p class="smt-member-path"><code>shared.jsonvalue.JsonValueV1</code></p>

```ts
JsonValueV1 = string | number | boolean | JsonObjectV1 | JsonValueV1[] | null
```

Defined in: [shared/jsonvalue.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/jsonvalue.d.ts#L24)

JSON value: primitive, object, array, or null.

Does not include `undefined` — omit keys instead.

---

## shared.nominal

### Type Aliases <!-- {docsify-ignore} -->

#### LooseString :id=shared.nominal.loosestring

<p class="smt-member-path"><code>shared.nominal.LooseString</code></p>

```ts
LooseString<T *extends* string> = T | string & object
```

Defined in: [shared/nominal.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L16)

Known string literals plus any other string.
`T | string` collapses to `string` and drops autocomplete.

##### Type Parameters

###### T

`T` *extends* `string`

***

#### LooseNumber :id=shared.nominal.loosenumber

<p class="smt-member-path"><code>shared.nominal.LooseNumber</code></p>

```ts
LooseNumber<T *extends* number> = T | number & object
```

Defined in: [shared/nominal.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L22)

Known numeric literals plus any other number.
`T | number` collapses to `number` and drops autocomplete.

##### Type Parameters

###### T

`T` *extends* `number`

***

#### TaggedNumber :id=shared.nominal.taggednumber

<p class="smt-member-path"><code>shared.nominal.TaggedNumber</code></p>

```ts
TaggedNumber<Tag *extends* string> = number & object
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

<p class="smt-member-path"><code>shared.nominal.CellId</code></p>

```ts
CellId = TaggedNumber<"cellId">
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

<p class="smt-member-path"><code>shared.player.CellCoordinates</code></p>

```ts
CellCoordinates = [number, number]
```

Defined in: [shared/player.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L14)

Grid cell position as `[cellX, cellY]`.

Cell coordinates match `sandkit.api.*AtCell` helpers: column first, then row.

***

#### Vector2 :id=shared.player.vector2

<p class="smt-member-path"><code>shared.player.Vector2</code></p>

```ts
Vector2 = object
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

<p class="smt-member-path"><code>sandkit.api.building.StructureType.ConveyorLeft</code></p>

```ts
ConveyorLeft: 1
```

Defined in: [sandkit/api/building.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L12)

Left-facing conveyor belt.

***

#### ConveyorRight :id=sandkit.api.building.StructureType.conveyorright

<p class="smt-member-path"><code>sandkit.api.building.StructureType.ConveyorRight</code></p>

```ts
ConveyorRight: 2
```

Defined in: [sandkit/api/building.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L14)

Right-facing conveyor belt.

***

#### ShakerLeft :id=sandkit.api.building.StructureType.shakerleft

<p class="smt-member-path"><code>sandkit.api.building.StructureType.ShakerLeft</code></p>

```ts
ShakerLeft: 3
```

Defined in: [sandkit/api/building.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L16)

Left-facing shaker.

***

#### ShakerRight :id=sandkit.api.building.StructureType.shakerright

<p class="smt-member-path"><code>sandkit.api.building.StructureType.ShakerRight</code></p>

```ts
ShakerRight: 4
```

Defined in: [sandkit/api/building.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L18)

Right-facing shaker.

***

#### LauncherUp :id=sandkit.api.building.StructureType.launcherup

<p class="smt-member-path"><code>sandkit.api.building.StructureType.LauncherUp</code></p>

```ts
LauncherUp: 5
```

Defined in: [sandkit/api/building.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L20)

Up-facing launcher.

***

#### LauncherLeft :id=sandkit.api.building.StructureType.launcherleft

<p class="smt-member-path"><code>sandkit.api.building.StructureType.LauncherLeft</code></p>

```ts
LauncherLeft: 6
```

Defined in: [sandkit/api/building.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L22)

Left-facing launcher.

***

#### LauncherRight :id=sandkit.api.building.StructureType.launcherright

<p class="smt-member-path"><code>sandkit.api.building.StructureType.LauncherRight</code></p>

```ts
LauncherRight: 7
```

Defined in: [sandkit/api/building.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L24)

Right-facing launcher.

***

#### SplitterLeft :id=sandkit.api.building.StructureType.splitterleft

<p class="smt-member-path"><code>sandkit.api.building.StructureType.SplitterLeft</code></p>

```ts
SplitterLeft: 8
```

Defined in: [sandkit/api/building.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L26)

Left-facing splitter.

***

#### SplitterRight :id=sandkit.api.building.StructureType.splitterright

<p class="smt-member-path"><code>sandkit.api.building.StructureType.SplitterRight</code></p>

```ts
SplitterRight: 9
```

Defined in: [sandkit/api/building.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L28)

Right-facing splitter.

***

#### Dropper :id=sandkit.api.building.StructureType.dropper

<p class="smt-member-path"><code>sandkit.api.building.StructureType.Dropper</code></p>

```ts
Dropper: 10
```

Defined in: [sandkit/api/building.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L30)

Dropper structure.

***

#### Foundation :id=sandkit.api.building.StructureType.foundation

<p class="smt-member-path"><code>sandkit.api.building.StructureType.Foundation</code></p>

```ts
Foundation: 11
```

Defined in: [sandkit/api/building.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L32)

Foundation block.

***

#### FoundationAngledLeft :id=sandkit.api.building.StructureType.foundationangledleft

<p class="smt-member-path"><code>sandkit.api.building.StructureType.FoundationAngledLeft</code></p>

```ts
FoundationAngledLeft: 12
```

Defined in: [sandkit/api/building.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L34)

Angled foundation facing left.

***

#### FoundationTriangleLeftDel :id=sandkit.api.building.StructureType.foundationtriangleleftdel

<p class="smt-member-path"><code>sandkit.api.building.StructureType.FoundationTriangleLeftDel</code></p>

```ts
FoundationTriangleLeftDel: 13
```

Defined in: [sandkit/api/building.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L36)

Left triangle foundation (deprecated id).

***

#### FoundationAngledRight :id=sandkit.api.building.StructureType.foundationangledright

<p class="smt-member-path"><code>sandkit.api.building.StructureType.FoundationAngledRight</code></p>

```ts
FoundationAngledRight: 14
```

Defined in: [sandkit/api/building.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L38)

Angled foundation facing right.

***

#### FoundationTriangleRightDel :id=sandkit.api.building.StructureType.foundationtrianglerightdel

<p class="smt-member-path"><code>sandkit.api.building.StructureType.FoundationTriangleRightDel</code></p>

```ts
FoundationTriangleRightDel: 15
```

Defined in: [sandkit/api/building.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L40)

Right triangle foundation (deprecated id).

***

#### Collector :id=sandkit.api.building.StructureType.collector

<p class="smt-member-path"><code>sandkit.api.building.StructureType.Collector</code></p>

```ts
Collector: 16
```

Defined in: [sandkit/api/building.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L42)

Collector structure.

***

#### FilterLeft :id=sandkit.api.building.StructureType.filterleft

<p class="smt-member-path"><code>sandkit.api.building.StructureType.FilterLeft</code></p>

```ts
FilterLeft: 17
```

Defined in: [sandkit/api/building.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L44)

Left-facing filter.

***

#### FilterRight :id=sandkit.api.building.StructureType.filterright

<p class="smt-member-path"><code>sandkit.api.building.StructureType.FilterRight</code></p>

```ts
FilterRight: 18
```

Defined in: [sandkit/api/building.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L46)

Right-facing filter.

***

#### SlidingFoundation :id=sandkit.api.building.StructureType.slidingfoundation

<p class="smt-member-path"><code>sandkit.api.building.StructureType.SlidingFoundation</code></p>

```ts
SlidingFoundation: 19
```

Defined in: [sandkit/api/building.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L48)

Sliding foundation block.

***

#### VelocitySoaker :id=sandkit.api.building.StructureType.velocitysoaker

<p class="smt-member-path"><code>sandkit.api.building.StructureType.VelocitySoaker</code></p>

```ts
VelocitySoaker: 20
```

Defined in: [sandkit/api/building.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L50)

Velocity soaker structure.

***

#### Grower :id=sandkit.api.building.StructureType.grower

<p class="smt-member-path"><code>sandkit.api.building.StructureType.Grower</code></p>

```ts
Grower: 21
```

Defined in: [sandkit/api/building.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L52)

Grower structure.

***

#### SoundBox :id=sandkit.api.building.StructureType.soundbox

<p class="smt-member-path"><code>sandkit.api.building.StructureType.SoundBox</code></p>

```ts
SoundBox: 22
```

Defined in: [sandkit/api/building.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L54)

Sound box structure.

***

#### Pipe :id=sandkit.api.building.StructureType.pipe

<p class="smt-member-path"><code>sandkit.api.building.StructureType.Pipe</code></p>

```ts
Pipe: 23
```

Defined in: [sandkit/api/building.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L56)

Pipe segment.

***

#### Pump :id=sandkit.api.building.StructureType.pump

<p class="smt-member-path"><code>sandkit.api.building.StructureType.Pump</code></p>

```ts
Pump: 24
```

Defined in: [sandkit/api/building.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L58)

Pump structure.

***

#### LiquidVent :id=sandkit.api.building.StructureType.liquidvent

<p class="smt-member-path"><code>sandkit.api.building.StructureType.LiquidVent</code></p>

```ts
LiquidVent: 25
```

Defined in: [sandkit/api/building.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L60)

Liquid vent structure.

***

#### Light :id=sandkit.api.building.StructureType.light

<p class="smt-member-path"><code>sandkit.api.building.StructureType.Light</code></p>

```ts
Light: 26
```

Defined in: [sandkit/api/building.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L62)

Light structure.

***

#### GloomEmitter :id=sandkit.api.building.StructureType.gloomemitter

<p class="smt-member-path"><code>sandkit.api.building.StructureType.GloomEmitter</code></p>

```ts
GloomEmitter: 27
```

Defined in: [sandkit/api/building.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L64)

Gloom emitter structure.

---

## sandkit.api.elements.MatterType

Defined in: [shared/api/elements.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L41)

Physical behaviour category for an element.

### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.elements`

### Enumeration Members <!-- {docsify-ignore} -->

#### Solid :id=sandkit.api.elements.MatterType.solid

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Solid</code></p>

```ts
Solid: 1
```

Defined in: [shared/api/elements.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L42)

***

#### Liquid :id=sandkit.api.elements.MatterType.liquid

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Liquid</code></p>

```ts
Liquid: 2
```

Defined in: [shared/api/elements.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L43)

***

#### Particle :id=sandkit.api.elements.MatterType.particle

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Particle</code></p>

```ts
Particle: 3
```

Defined in: [shared/api/elements.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L44)

***

#### Gas :id=sandkit.api.elements.MatterType.gas

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Gas</code></p>

```ts
Gas: 4
```

Defined in: [shared/api/elements.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L45)

***

#### Static :id=sandkit.api.elements.MatterType.static

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Static</code></p>

```ts
Static: 5
```

Defined in: [shared/api/elements.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L46)

***

#### Slushy :id=sandkit.api.elements.MatterType.slushy

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Slushy</code></p>

```ts
Slushy: 6
```

Defined in: [shared/api/elements.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L47)

***

#### Wisp :id=sandkit.api.elements.MatterType.wisp

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Wisp</code></p>

```ts
Wisp: 7
```

Defined in: [shared/api/elements.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L48)

***

#### Powder :id=sandkit.api.elements.MatterType.powder

<p class="smt-member-path"><code>sandkit.api.elements.MatterType.Powder</code></p>

```ts
Powder: 8
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

#### SandkitApi :id=sandkit.api.sandkitapi

<p class="smt-member-path"><code>sandkit.api.SandkitApi</code></p>

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

#### WorkerSandkitApi :id=sandkit.api.worker.workersandkitapi

<p class="smt-member-path"><code>sandkit.api.WorkerSandkitApi (worker)</code></p>

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

Defined in: [worker/sandkit-api.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L39)

###### Deprecated

Use [grid](api/sandkit.api.grid.worker.md) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid`

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

#### SandkitEngine :id=sandkit.engine.sandkitengine

<p class="smt-member-path"><code>sandkit.engine.SandkitEngine</code></p>

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

#### SandkitEngineApi :id=sandkit.engine.sandkitengineapi

<p class="smt-member-path"><code>sandkit.engine.SandkitEngineApi</code></p>

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

<p class="smt-member-path"><code>sandkit.engine.RetroConsolePixel</code></p>

```ts
RetroConsolePixel = boolean | number
```

Defined in: [sandkit/engine/retro-console.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/retro-console.d.ts#L11)

**`Internal`**

Pixel value for the Retro Console framebuffer.

***

#### SandkitState :id=sandkit.engine.sandkitstate

<p class="smt-member-path"><code>sandkit.engine.SandkitState</code></p>

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

TypeScript declarations and Docsify API docs for the live Sandustry `sandkit` object. Package name: `@sandustry-modding/types`.

Originally a fork of [flamableassassin/sandustry-modding-types](https://github.com/flamableassassin/sandustry-modding-types/).

Folder layout mirrors runtime shape so you can jump from code to the matching `.d.ts` path.

### Runtime map

| Path | Runtime object |
| --- | --- |
| `src/sandkit/api/` | `sandkit.api` (main thread) |
| `src/sandkit/engine/api/` | `sandkit.engine.api` |
| `src/sandkit/engine/state.d.ts` | `sandkit.engine.state` / `sandkit.state` |
| `src/sandkit/enums/` | `sandkit.enums` |
| `src/sandkit/react.d.ts` | `sandkit.react` |
| `src/sandkit/index.d.ts` | Composed `Sandkit` root type |
| `src/global.d.ts` | Ambient `sandkit` free variable and type aliases |
| `src/worker/` | Worker-thread `sandkit.api` (see `WorkerSandkitApi`) |
| `src/shared/` | Internal base shapes reused by main and worker declarations |
| `src/configs/` | `modinfo.json` / `patches.json` schemas (not a runtime object) |

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
- **Configs folder:** `modinfo.json` and `patches.json` schemas (`@sandustry-modding/types/configs`). Not part of the live `sandkit` object.

### Maintaining types

Edit `.d.ts` files under `src/`. Regenerate the Docsify API reference after JSDoc changes.

### Docs site

Regenerate the Docsify API reference from these declarations:

```bash
npm run docs:api
```

Output lands in `docs/api/`. The namespace index is `docs/modules.md` and the combined page is `docs/full.md`. `npm run docs` runs that step, then serves the docs site.

---
