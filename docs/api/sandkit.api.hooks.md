# sandkit.api.hooks

`sandkit.api.hooks` — intercept and modify internal game hook points.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### HookContext :id=hookcontext

<p class="smt-member-path"><code>sandkit.api.hooks.HookContext</code></p>

Defined in: [sandkit/api/hooks.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L397)

Context passed to intercept hook callbacks.

#### Properties

##### cancelled

```ts
cancelled: boolean;
```

Defined in: [sandkit/api/hooks.d.ts:401](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L401)

True after [cancel](#cancel) was called on this context.

#### Methods

##### cancel()

```ts
cancel(): void
```

Defined in: [sandkit/api/hooks.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L399)

When called, the intercepted action is skipped.

###### Returns

`void`

---

### HookOptions :id=hookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.HookOptions</code></p>

Defined in: [sandkit/api/hooks.d.ts:405](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L405)

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

Defined in: [sandkit/api/hooks.d.ts:407](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L407)

Run this hook before others with lower priority.

---

### InterceptHookMap :id=intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap</code></p>

Defined in: [sandkit/api/hooks.d.ts:497](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L497)

Intercept hook argument shapes keyed by hook id.

#### Properties

##### item:use

```ts
item: use: object;
```

Defined in: [sandkit/api/hooks.d.ts:498](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L498)

###### itemId

```ts
itemId: string;
```

###### useId

```ts
useId: string;
```

###### kind

```ts
kind: "instant" | "sustained" | "chargeThenFire";
```

###### baseline

```ts
baseline: Readonly<Record<string, unknown>>;
```

###### prepared

```ts
prepared: Record<string, unknown>;
```

##### teleport:effect:create

```ts
teleport: effect: create: Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:505](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L505)

##### ~~teleport:effect~~

```ts
teleport: effect: Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:507](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L507)

###### Deprecated

Use `"teleport:effect:create"` instead.

##### action:start

```ts
action: start: object & Record<string, unknown>;
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

##### ~~action:intercept~~

```ts
action: intercept: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:510](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L510)

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
input: keyDown: object;
```

Defined in: [sandkit/api/hooks.d.ts:511](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L511)

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
input: keydown: object;
```

Defined in: [sandkit/api/hooks.d.ts:513](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L513)

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
input: keyUp: object;
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

##### ~~input:keyup~~

```ts
input: keyup: object;
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

Use `"input:keyUp"` instead.

##### placePoints:suppress

```ts
placePoints: suppress: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:517](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L517)

###### Type Declaration

###### type?

```ts
optional type?: string
```

##### ~~placePoints:isSuppressed~~

```ts
placePoints: isSuppressed: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:519](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L519)

###### Type Declaration

###### ~~type?~~

```ts
optional type?: string
```

###### Deprecated

Use `"placePoints:suppress"` instead.

##### placePoints:directionalArrows:suppress

```ts
placePoints: directionalArrows: suppress: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:520](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L520)

###### Type Declaration

###### type?

```ts
optional type?: string
```

##### ~~placePoints:directionalArrows:isSuppressed~~

```ts
placePoints: directionalArrows: isSuppressed: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:522](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L522)

###### Type Declaration

###### ~~type?~~

```ts
optional type?: string
```

###### Deprecated

Use `"placePoints:directionalArrows:suppress"` instead.

##### entity:update

```ts
entity: update: object;
```

Defined in: [sandkit/api/hooks.d.ts:523](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L523)

###### entityTypeId

```ts
entityTypeId: string;
```

###### entity

```ts
entity: Record<string, unknown>;
```

###### deltaTimeSeconds

```ts
deltaTimeSeconds: number;
```

###### phase

```ts
phase: "normal" | "capturing" | "launching";
```

###### isVisible

```ts
isVisible: boolean;
```

###### playerWorldX

```ts
playerWorldX: number;
```

###### playerWorldY

```ts
playerWorldY: number;
```

###### worldMinX

```ts
worldMinX: number;
```

###### worldMinY

```ts
worldMinY: number;
```

###### worldMaxX

```ts
worldMaxX: number;
```

###### worldMaxY

```ts
worldMaxY: number;
```

###### cellSize

```ts
cellSize: number;
```

###### timeSeconds

```ts
timeSeconds: number;
```

##### building:place

```ts
building: place: object;
```

Defined in: [sandkit/api/hooks.d.ts:538](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L538)

###### structureId

```ts
structureId: string;
```

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

###### data?

```ts
optional data?: Record<string, unknown>
```

##### building:clearShape

```ts
building: clearShape: object;
```

Defined in: [sandkit/api/hooks.d.ts:544](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L544)

###### structure

```ts
structure: Record<string, unknown>;
```

##### input:scroll

```ts
input: scroll: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:545](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L545)

###### Type Declaration

###### deltaY

```ts
deltaY: number;
```

##### input:boostDown

```ts
input: boostDown: Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:546](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L546)

##### ~~input:boost-down~~

```ts
input:boost-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:548](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L548)

###### Deprecated

Use `"input:boostDown"` instead.

##### input:descendDown

```ts
input: descendDown: Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:549](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L549)

##### ~~input:descend-down~~

```ts
input:descend-down: Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:551](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L551)

###### Deprecated

Use `"input:descendDown"` instead.

##### input:escape

```ts
input: escape: Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:552](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L552)

##### interactable:suppressHover

```ts
interactable: suppressHover: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:553](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L553)

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
fire: element: ignite: object;
```

Defined in: [sandkit/api/hooks.d.ts:554](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L554)

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

###### elementType

```ts
elementType: number;
```

##### projectile:fire:overStructure

```ts
projectile: fire: overStructure: object;
```

Defined in: [sandkit/api/hooks.d.ts:555](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L555)

###### projectile

```ts
projectile: Record<string, unknown>;
```

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

##### projectile:hit

```ts
projectile: hit: object;
```

Defined in: [sandkit/api/hooks.d.ts:556](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L556)

###### projectile

```ts
projectile: Record<string, unknown>;
```

###### travelResult

```ts
travelResult: Record<string, unknown>;
```

##### player:position:commit

```ts
player: position: commit: object;
```

Defined in: [sandkit/api/hooks.d.ts:557](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L557)

###### previousWorldX

```ts
previousWorldX: number;
```

###### previousWorldY

```ts
previousWorldY: number;
```

###### proposedWorldX

```ts
proposedWorldX: number;
```

###### proposedWorldY

```ts
proposedWorldY: number;
```

###### velocityX

```ts
velocityX: number;
```

###### velocityY

```ts
velocityY: number;
```

##### progression:purchase

```ts
progression: purchase: object;
```

Defined in: [sandkit/api/hooks.d.ts:565](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L565)

###### domain

```ts
domain: "tech" | "upgrade";
```

###### id

```ts
id: string;
```

###### itemId?

```ts
optional itemId?: string
```

###### costs

```ts
costs: Record<string, unknown>;
```

---

### ModifierHookMap :id=modifierhookmap

<p class="smt-member-path"><code>sandkit.api.hooks.ModifierHookMap</code></p>

Defined in: [sandkit/api/hooks.d.ts:574](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L574)

Modify hook argument shapes keyed by hook id.

#### Properties

##### excavation:prepare

```ts
excavation: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:575](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L575)

###### sourceId

```ts
sourceId: string;
```

###### sourceKind

```ts
sourceKind: "structure" | "tool" | "projectile" | "drone";
```

###### originCellX

```ts
originCellX: number;
```

###### originCellY

```ts
originCellY: number;
```

###### consumedVoid

```ts
consumedVoid: boolean;
```

###### profileId

```ts
profileId: string;
```

###### patternDiameterCells

```ts
patternDiameterCells: number;
```

###### drillTierDamage

```ts
drillTierDamage: number;
```

##### locator:scan:prepare

```ts
locator: scan: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:585](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L585)

###### originWorldX

```ts
originWorldX: number;
```

###### originWorldY

```ts
originWorldY: number;
```

###### hasTarget

```ts
hasTarget: boolean;
```

###### targetCellX

```ts
targetCellX: number;
```

###### targetCellY

```ts
targetCellY: number;
```

###### outerTint

```ts
outerTint: [number, number, number];
```

###### innerTint

```ts
innerTint: [number, number, number];
```

###### noTargetToast

```ts
noTargetToast: string;
```

###### noTargetToastKey

```ts
noTargetToastKey: string;
```

###### triangulationLensOverride

```ts
triangulationLensOverride: boolean | null;
```

##### vacuum:prepare

```ts
vacuum: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:597](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L597)

###### nozzleCellX

```ts
nozzleCellX: number;
```

###### nozzleCellY

```ts
nozzleCellY: number;
```

###### targetCellX

```ts
targetCellX: number;
```

###### targetCellY

```ts
targetCellY: number;
```

###### pattern

```ts
pattern: number[][]
```

##### vacuum:element:prepare

```ts
vacuum: element: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:604](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L604)

###### elementType

```ts
elementType: number;
```

###### matterType

```ts
matterType: number;
```

###### isTransportable

```ts
isTransportable: boolean;
```

###### collectable

```ts
collectable: boolean;
```

###### visibleInPicker

```ts
visibleInPicker: boolean;
```

##### player:movement:prepare

```ts
player: movement: prepare: Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:611](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L611)

##### ~~player:movement~~

```ts
player: movement: Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:613](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L613)

###### Deprecated

Use `"player:movement:prepare"` instead.

##### building:placementLimit:prepare

```ts
building: placementLimit: prepare: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:614](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L614)

###### Type Declaration

###### maxCount

```ts
maxCount: number | null;
```

##### ~~building:placementLimit~~

```ts
building: placementLimit: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:616](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L616)

###### Type Declaration

###### ~~maxCount~~

```ts
maxCount: number | null;
```

###### Deprecated

Use `"building:placementLimit:prepare"` instead.

##### ~~building:placement-limit~~

```ts
building:placement-limit: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:618](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L618)

###### Type Declaration

###### ~~maxCount~~

```ts
maxCount: number | null;
```

###### Deprecated

Use `"building:placementLimit:prepare"` instead.

##### fluxEmanator:processing:prepare

```ts
fluxEmanator: processing: prepare: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:619](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L619)

###### Type Declaration

###### speedMultiplier

```ts
speedMultiplier: number;
```

##### ~~fluxEmanator:processing~~

```ts
fluxEmanator: processing: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:621](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L621)

###### Type Declaration

###### ~~speedMultiplier~~

```ts
speedMultiplier: number;
```

###### Deprecated

Use `"fluxEmanator:processing:prepare"` instead.

##### ~~flux-emanator:processing~~

```ts
flux-emanator:processing: object & Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:623](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L623)

###### Type Declaration

###### ~~speedMultiplier~~

```ts
speedMultiplier: number;
```

###### Deprecated

Use `"fluxEmanator:processing:prepare"` instead.

##### render:pipes:prepare

```ts
render: pipes: prepare: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:624](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L624)

###### Type Declaration

###### layer?

```ts
optional layer?: string
```

##### ~~render:pipes~~

```ts
render: pipes: object & Record<string, unknown>;
```

Defined in: [sandkit/api/hooks.d.ts:626](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L626)

###### Type Declaration

###### ~~layer?~~

```ts
optional layer?: string
```

###### Deprecated

Use `"render:pipes:prepare"` instead.

##### structures:moved:prepare

```ts
structures: moved: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:627](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L627)

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
structures: removed: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:631](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L631)

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
byMove: boolean;
```

##### weapon:reload:prepare

```ts
weapon: reload: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:636](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L636)

###### weaponId

```ts
weaponId: string;
```

###### reloadMs

```ts
reloadMs: number;
```

###### maxAmmo

```ts
maxAmmo: number;
```

##### projectile:travel:prepare

```ts
projectile: travel: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:641](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L641)

###### projectileType

```ts
projectileType: string;
```

###### firstCollisionStep

```ts
firstCollisionStep: number;
```

###### maxCollisionSteps

```ts
maxCollisionSteps: number;
```

###### collidesWithTerrain

```ts
collidesWithTerrain: boolean;
```

###### collidesWithStructures

```ts
collidesWithStructures: boolean;
```

##### projectile:impact:prepare

```ts
projectile: impact: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:648](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L648)

###### projectileType

```ts
projectileType: string;
```

###### impactKind

```ts
impactKind: string;
```

###### profileId

```ts
profileId: string;
```

###### power

```ts
power: number;
```

###### centerPower

```ts
centerPower: number;
```

###### radiusCells

```ts
radiusCells: number;
```

###### ~~radius?~~

```ts
optional radius?: number
```

###### Deprecated

Use radiusCells instead.

##### player:collision:prepare

```ts
player: collision: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:658](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L658)

###### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean;
```

###### phaseThroughStructures

```ts
phaseThroughStructures: boolean;
```

###### maxStepCells

```ts
maxStepCells: number;
```

##### trigger:schedule:prepare

```ts
trigger: schedule: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:663](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L663)

###### triggerId

```ts
triggerId: string;
```

###### intervalMs

```ts
intervalMs: number;
```

###### sequentialRuns

```ts
sequentialRuns: number;
```

##### progression:cost:prepare

```ts
progression: cost: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:668](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L668)

###### domain

```ts
domain: "tech" | "upgrade";
```

###### id

```ts
id: string;
```

###### itemId?

```ts
optional itemId?: string
```

###### currencyId

```ts
currencyId: string;
```

###### amount

```ts
amount: number;
```

##### resource:collection:prepare

```ts
resource: collection: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:675](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L675)

###### resourceId

```ts
resourceId: string;
```

###### sourceKind

```ts
sourceKind: string;
```

###### cellX

```ts
cellX: number;
```

###### cellY

```ts
cellY: number;
```

###### amount

```ts
amount: number;
```

###### feedback

```ts
feedback: "silent" | "default" | "reduced";
```

##### resource:delivery:prepare

```ts
resource: delivery: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:683](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L683)

###### resourceId

```ts
resourceId: string;
```

###### sourceKind

```ts
sourceKind: string;
```

###### sourceId

```ts
sourceId: string;
```

###### sourceCellX

```ts
sourceCellX: number;
```

###### sourceCellY

```ts
sourceCellY: number;
```

###### targetCellX

```ts
targetCellX: number;
```

###### targetCellY

```ts
targetCellY: number;
```

###### mode

```ts
mode: "world" | "collection";
```

###### amount

```ts
amount: number;
```

###### feedback

```ts
feedback: "silent" | "default";
```

##### resource:balance:prepare

```ts
resource: balance: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:695](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L695)

###### resourceId

```ts
resourceId: string;
```

###### balance

```ts
balance: number;
```

##### gold:removal:prepare

```ts
gold: removal: prepare: object;
```

Defined in: [sandkit/api/hooks.d.ts:699](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L699)

###### requestedAmount

```ts
requestedAmount: number;
```

###### shortfall

```ts
shortfall: number;
```

##### gold:removal:settle

```ts
gold: removal: settle: object;
```

Defined in: [sandkit/api/hooks.d.ts:703](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L703)

###### requestedAmount

```ts
requestedAmount: number;
```

###### physicalRemoved

```ts
physicalRemoved: number;
```

###### shortfall

```ts
shortfall: number;
```

## Type Aliases <!-- {docsify-ignore} -->

### InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookOptions</code></p>

```ts
InterceptHookOptions<K *extends* InterceptHookId> = HookOptions & K *extends* "item:use" ? object : K *extends* "entity:update" ? object : K *extends* "building:place" ? object : K *extends* "projectile:fire:overStructure" | "projectile:hit" ? object : Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:412](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L412)

Options for [intercept](#intercept).

#### Type Parameters

##### K

`K` _extends_ [`InterceptHookId`](#intercepthookid)

---

### ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookOptions</code></p>

```ts
ModifyHookOptions = HookOptions & { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record<string, unknown>
```

Defined in: [sandkit/api/hooks.d.ts:424](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L424)

Options for [modify](#modify).

---

### InterceptHookId :id=intercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookId</code></p>

```ts
InterceptHookId = LooseString<
  | "item:use"
  | "teleport:effect:create"
  | "teleport:effect"
  | "action:start"
  | "action:intercept"
  | "input:keyDown"
  | "input:keydown"
  | "input:keyUp"
  | "input:keyup"
  | "placePoints:suppress"
  | "placePoints:isSuppressed"
  | "placePoints:directionalArrows:suppress"
  | "placePoints:directionalArrows:isSuppressed"
  | "entity:update"
  | "building:place"
  | "building:clearShape"
  | "input:scroll"
  | "input:boostDown"
  | "input:boost-down"
  | "input:descendDown"
  | "input:descend-down"
  | "input:escape"
  | "interactable:suppressHover"
  | "fire:element:ignite"
  | "projectile:fire:overStructure"
  | "projectile:hit"
  | "player:position:commit"
  | "progression:purchase"
>;
```

Defined in: [sandkit/api/hooks.d.ts:434](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L434)

Known main-thread intercept hook ids plus custom strings.

---

### ModifyHookId :id=modifyhookid

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookId</code></p>

```ts
ModifyHookId = LooseString<
  | "excavation:prepare"
  | "locator:scan:prepare"
  | "vacuum:prepare"
  | "vacuum:element:prepare"
  | "player:movement:prepare"
  | "player:movement"
  | "building:placementLimit:prepare"
  | "building:placementLimit"
  | "building:placement-limit"
  | "fluxEmanator:processing:prepare"
  | "fluxEmanator:processing"
  | "flux-emanator:processing"
  | "render:pipes:prepare"
  | "render:pipes"
  | "structures:moved:prepare"
  | "structures:removed:prepare"
  | "weapon:reload:prepare"
  | "projectile:travel:prepare"
  | "projectile:impact:prepare"
  | "player:collision:prepare"
  | "trigger:schedule:prepare"
  | "progression:cost:prepare"
  | "resource:collection:prepare"
  | "resource:delivery:prepare"
  | "resource:balance:prepare"
  | "gold:removal:prepare"
  | "gold:removal:settle"
>;
```

Defined in: [sandkit/api/hooks.d.ts:466](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L466)

Known main-thread modify hook ids plus custom strings.

---

### InterceptHookArgs :id=intercepthookargs

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookArgs</code></p>

```ts
InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:711](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L711)

Intercept hook args for a given hook id.

#### Type Parameters

##### K

`K` _extends_ [`InterceptHookId`](#intercepthookid)

---

### ModifyHookArgs :id=modifyhookargs

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookArgs</code></p>

```ts
ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown
```

Defined in: [sandkit/api/hooks.d.ts:715](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L715)

Modify hook args for a given hook id.

#### Type Parameters

##### K

`K` _extends_ [`ModifyHookId`](#modifyhookid)

## Functions <!-- {docsify-ignore} -->

### intercept() :id=intercept

<p class="smt-member-path"><code>sandkit.api.hooks.intercept()</code></p>

```ts
intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [sandkit/api/hooks.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L178)

Registers an intercept hook. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` _extends_ [`InterceptHookId`](#intercepthookid)

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

#### Examples

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
api.hooks.intercept("placePoints:directionalArrows:suppress", (args, context) => {
  if (args.type === "exampleStructure") context.cancel();
});
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
api.hooks.intercept("projectile:fire:overStructure", (args, context) => {
  if (args.projectile.type === "exampleProjectile") context.cancel();
});
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

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### modify() :id=modify

<p class="smt-member-path"><code>sandkit.api.hooks.modify()</code></p>

```ts
modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [sandkit/api/hooks.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L390)

Registers a modifier hook. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` _extends_ [`ModifyHookId`](#modifyhookid)

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

#### Examples

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
api.hooks.modify(
  "weapon:reload:prepare",
  (args) => {
    args.reloadMs *= 0.8;
  },
  { weaponIds: ["exampleWeapon"] },
);
```

**projectile:travel:prepare**

```ts
api.hooks.modify(
  "projectile:travel:prepare",
  (args) => {
    args.collidesWithStructures = false;
  },
  { projectileTypes: ["exampleProjectile"] },
);
```

**projectile:impact:prepare**

```ts
api.hooks.modify(
  "projectile:impact:prepare",
  (args) => {
    args.radiusCells = 8;
  },
  { projectileTypes: ["exampleProjectile"] },
);
```

**player:collision:prepare**

```ts
api.hooks.modify("player:collision:prepare", (args) => {
  args.maxStepCells = 4;
});
```

**trigger:schedule:prepare**

```ts
api.hooks.modify(
  "trigger:schedule:prepare",
  (args) => {
    args.intervalMs *= 0.5;
  },
  { triggerIds: ["pump"] },
);
```

**progression:cost:prepare**

```ts
api.hooks.modify("progression:cost:prepare", (args) => {
  if (args.currencyId === "gold") args.amount *= 0.9;
});
```

**resource:collection:prepare**

```ts
api.hooks.modify(
  "resource:collection:prepare",
  (args) => {
    args.amount *= 2;
  },
  { resourceIds: ["fluxite"] },
);
```

**resource:delivery:prepare**

```ts
api.hooks.modify(
  "resource:delivery:prepare",
  (args) => {
    args.mode = "collection";
  },
  { resourceIds: ["fluxite"] },
);
```

**resource:balance:prepare**

```ts
api.hooks.modify(
  "resource:balance:prepare",
  (args) => {
    args.balance += api.storage.get("example", "gold") ?? 0;
  },
  { resourceIds: ["gold"] },
);
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

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
