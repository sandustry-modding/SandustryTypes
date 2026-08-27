# sandkit.api.hooks

`sandkit.api.hooks` — intercept and modify internal game hook points.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### HookContext :id=hookcontext

<p class="smt-member-path"><code>sandkit.api.hooks.HookContext</code></p>

Defined in: [sandkit/api/hooks.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L37)

Context passed to intercept hook callbacks.

#### Properties

##### cancelled

```ts
cancelled: boolean
```

Defined in: [sandkit/api/hooks.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L41)

True after [cancel](#cancel) was called on this context.

#### Methods

##### cancel()

```ts
cancel(): void
```

Defined in: [sandkit/api/hooks.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L39)

When called, the intercepted action is skipped.

###### Returns

`void`

***

### HookOptions :id=hookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.HookOptions</code></p>

Defined in: [sandkit/api/hooks.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L45)

Options shared by intercept and modify hooks.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### priority?

```ts
optional priority?: number
```

Defined in: [sandkit/api/hooks.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L47)

Run this hook before others with lower priority.

***

### InterceptHookMap :id=intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap</code></p>

Defined in: [sandkit/api/hooks.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L137)

Intercept hook argument shapes keyed by hook id.

#### Properties

##### item:use

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

##### teleport:effect:create

```ts
teleport:effect:create: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L145)

##### ~~teleport:effect~~

```ts
teleport:effect: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L147)

###### Deprecated

Use `"teleport:effect:create"` instead.

##### action:start

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

##### ~~action:intercept~~

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

##### input:keyDown

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

##### ~~input:keydown~~

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

##### input:keyUp

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

##### ~~input:keyup~~

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

##### placePoints:suppress

```ts
placePoints:suppress: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L157)

###### Type Declaration

###### type?

```ts
optional type?: string
```

##### ~~placePoints:isSuppressed~~

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

##### placePoints:directionalArrows:suppress

```ts
placePoints:directionalArrows:suppress: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L160)

###### Type Declaration

###### type?

```ts
optional type?: string
```

##### ~~placePoints:directionalArrows:isSuppressed~~

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

##### entity:update

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

##### building:place

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

##### building:clearShape

```ts
building:clearShape: object
```

Defined in: [sandkit/api/hooks.d.ts:184](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L184)

###### structure

```ts
structure: Record<string, unknown>
```

##### input:scroll

```ts
input:scroll: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L185)

###### Type Declaration

###### deltaY

```ts
deltaY: number
```

##### input:boostDown

```ts
input:boostDown: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L186)

##### ~~input:boost-down~~

```ts
input:boost-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L188)

###### Deprecated

Use `"input:boostDown"` instead.

##### input:descendDown

```ts
input:descendDown: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L189)

##### ~~input:descend-down~~

```ts
input:descend-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L191)

###### Deprecated

Use `"input:descendDown"` instead.

##### input:escape

```ts
input:escape: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L192)

##### interactable:suppressHover

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

##### fire:element:ignite

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

##### projectile:fire:overStructure

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

##### projectile:hit

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

##### player:position:commit

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

##### progression:purchase

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

### ModifierHookMap :id=modifierhookmap

<p class="smt-member-path"><code>sandkit.api.hooks.ModifierHookMap</code></p>

Defined in: [sandkit/api/hooks.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L214)

Modify hook argument shapes keyed by hook id.

#### Properties

##### excavation:prepare

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

##### locator:scan:prepare

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

##### vacuum:prepare

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

##### vacuum:element:prepare

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

##### player:movement:prepare

```ts
player:movement:prepare: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:251](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L251)

##### ~~player:movement~~

```ts
player:movement: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L253)

###### Deprecated

Use `"player:movement:prepare"` instead.

##### building:placementLimit:prepare

```ts
building:placementLimit:prepare: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L254)

###### Type Declaration

###### maxCount

```ts
maxCount: number | null
```

##### ~~building:placementLimit~~

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

##### ~~building:placement-limit~~

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

##### fluxEmanator:processing:prepare

```ts
fluxEmanator:processing:prepare: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:259](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L259)

###### Type Declaration

###### speedMultiplier

```ts
speedMultiplier: number
```

##### ~~fluxEmanator:processing~~

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

##### ~~flux-emanator:processing~~

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

##### render:pipes:prepare

```ts
render:pipes:prepare: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L264)

###### Type Declaration

###### layer?

```ts
optional layer?: string
```

##### ~~render:pipes~~

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

##### structures:moved:prepare

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

##### structures:removed:prepare

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

##### weapon:reload:prepare

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

##### projectile:travel:prepare

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

##### projectile:impact:prepare

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

##### player:collision:prepare

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

##### trigger:schedule:prepare

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

##### progression:cost:prepare

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

##### resource:collection:prepare

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

##### resource:delivery:prepare

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

##### resource:balance:prepare

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

##### gold:removal:prepare

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

##### gold:removal:settle

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

## Type Aliases <!-- {docsify-ignore} -->

### InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookOptions</code></p>

```ts
InterceptHookOptions<K *extends* InterceptHookId> = HookOptions & K *extends* "item:use" ? object : K *extends* "entity:update" ? object : K *extends* "building:place" ? object : K *extends* "projectile:fire:overStructure" | "projectile:hit" ? object : Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L52)

Options for [intercept](#intercept).

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

### ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookOptions</code></p>

```ts
ModifyHookOptions = HookOptions & { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L64)

Options for [modify](#modify).

***

### InterceptHookId :id=intercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookId</code></p>

```ts
InterceptHookId = LooseString<"item:use" | "teleport:effect:create" | "teleport:effect" | "action:start" | "action:intercept" | "input:keyDown" | "input:keydown" | "input:keyUp" | "input:keyup" | "placePoints:suppress" | "placePoints:isSuppressed" | "placePoints:directionalArrows:suppress" | "placePoints:directionalArrows:isSuppressed" | "entity:update" | "building:place" | "building:clearShape" | "input:scroll" | "input:boostDown" | "input:boost-down" | "input:descendDown" | "input:descend-down" | "input:escape" | "interactable:suppressHover" | "fire:element:ignite" | "projectile:fire:overStructure" | "projectile:hit" | "player:position:commit" | "progression:purchase">
```

Defined in: [sandkit/api/hooks.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L74)

Known main-thread intercept hook ids plus custom strings.

***

### ModifyHookId :id=modifyhookid

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookId</code></p>

```ts
ModifyHookId = LooseString<"excavation:prepare" | "locator:scan:prepare" | "vacuum:prepare" | "vacuum:element:prepare" | "player:movement:prepare" | "player:movement" | "building:placementLimit:prepare" | "building:placementLimit" | "building:placement-limit" | "fluxEmanator:processing:prepare" | "fluxEmanator:processing" | "flux-emanator:processing" | "render:pipes:prepare" | "render:pipes" | "structures:moved:prepare" | "structures:removed:prepare" | "weapon:reload:prepare" | "projectile:travel:prepare" | "projectile:impact:prepare" | "player:collision:prepare" | "trigger:schedule:prepare" | "progression:cost:prepare" | "resource:collection:prepare" | "resource:delivery:prepare" | "resource:balance:prepare" | "gold:removal:prepare" | "gold:removal:settle">
```

Defined in: [sandkit/api/hooks.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L106)

Known main-thread modify hook ids plus custom strings.

***

### InterceptHookArgs :id=intercepthookargs

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookArgs</code></p>

```ts
InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L351)

Intercept hook args for a given hook id.

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

### ModifyHookArgs :id=modifyhookargs

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookArgs</code></p>

```ts
ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:355](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L355)

Modify hook args for a given hook id.

#### Type Parameters

##### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

## Functions <!-- {docsify-ignore} -->

### intercept() :id=intercept

<p class="smt-member-path"><code>sandkit.api.hooks.intercept()</code></p>

```ts
intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [sandkit/api/hooks.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L16)

Registers an intercept hook. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

#### Parameters

##### hookId

`K`

Registered hook identifier.

##### callback

(`args`: [`InterceptHookArgs`](#intercepthookargs)\<`K`\>, `context`: [`HookContext`](#hookcontext)) => `void`

Called with hook arguments and context; may cancel the hook.

##### options?

[`InterceptHookOptions`](#intercepthookoptions)\<`K`\>

Optional priority and filter options.

#### Returns

() => `void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.hooks.intercept`

***

### modify() :id=modify

<p class="smt-member-path"><code>sandkit.api.hooks.modify()</code></p>

```ts
modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [sandkit/api/hooks.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L30)

Registers a modifier hook. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

#### Parameters

##### hookId

`K`

Registered hook identifier.

##### callback

(`args`: [`ModifyHookArgs`](#modifyhookargs)\<`K`\>) => `void`

Called with hook arguments; may mutate hook payload.

##### options?

[`ModifyHookOptions`](#modifyhookoptions)

Optional priority and filter options.

#### Returns

() => `void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.hooks.modify`
