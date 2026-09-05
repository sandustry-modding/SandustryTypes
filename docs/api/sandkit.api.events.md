# sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

## Interfaces <!-- {docsify-ignore} -->

### PlayerCollisionPreparePayload :id=playercollisionpreparepayload

<p class="smt-member-path"><code>sandkit.api.events.PlayerCollisionPreparePayload</code></p>

Defined in: [sandkit/api/events.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L177)

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

#### Properties

##### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean
```

Defined in: [sandkit/api/events.d.ts:179](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L179)

When true, terrain collision is skipped this sub-step.

##### phaseThroughStructures

```ts
phaseThroughStructures: boolean
```

Defined in: [sandkit/api/events.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L181)

When true, structure collision is skipped this sub-step.

##### maxStepCells

```ts
maxStepCells: number
```

Defined in: [sandkit/api/events.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L183)

Max cells the player can step up when blocked horizontally (1–8).

***

### EventPayloadMap :id=eventpayloadmap

<p class="smt-member-path"><code>sandkit.api.events.EventPayloadMap</code></p>

Defined in: [sandkit/api/events.d.ts:187](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L187)

Known event payloads. Unlisted ids still use `unknown`.

#### Properties

##### item:used

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

##### frame:render

```ts
frame:render: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L196)

##### scene:game:started

```ts
scene:game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L197)

##### ~~scene:started:game~~

```ts
scene:started:game: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L199)

###### Deprecated

Use `"scene:game:started"` instead.

##### earlyAccess:completed

```ts
earlyAccess:completed: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L200)

##### ~~earlyAccess:complete~~

```ts
earlyAccess:complete: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L202)

###### Deprecated

Use `"earlyAccess:completed"` instead.

##### terrain:destroyed

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

##### fog:cellRevealed

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

##### upgrade:levelSelected

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

##### building:placed

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

##### building:removing

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

##### building:removed

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

##### structures:placed

```ts
structures:placed: object
```

Defined in: [sandkit/api/events.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L245)

###### structures

```ts
structures: unknown[]
```

##### structures:removed

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

##### structures:moved

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

##### game:ready

```ts
game:ready: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L255)

##### game:started

```ts
game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:256](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L256)

##### tutorial:stepChanged

```ts
tutorial:stepChanged: object
```

Defined in: [sandkit/api/events.d.ts:257](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L257)

###### step

```ts
step: unknown
```

##### tutorial:completed

```ts
tutorial:completed: object
```

Defined in: [sandkit/api/events.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L258)

###### skipped

```ts
skipped: boolean
```

##### tech:unlocked

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

##### worldItem:pickedUp

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

##### resource:collected

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

##### player:collision:prepare

```ts
player:collision:prepare: PlayerCollisionPreparePayload
```

Defined in: [sandkit/api/events.d.ts:274](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L274)

##### player:moved

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

## Type Aliases <!-- {docsify-ignore} -->

### EventId :id=eventid

<p class="smt-member-path"><code>sandkit.api.events.EventId</code></p>

```ts
EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [sandkit/api/events.d.ts:287](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L287)

Known event names plus any custom string id.

***

### EventPayload :id=eventpayload

<p class="smt-member-path"><code>sandkit.api.events.EventPayload</code></p>

```ts
EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [sandkit/api/events.d.ts:290](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L290)

Event payload type for a given event id.

#### Type Parameters

##### K

`K`

## Functions <!-- {docsify-ignore} -->

### on() :id=on

<p class="smt-member-path"><code>sandkit.api.events.on()</code></p>

```ts
on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

Defined in: [sandkit/api/events.d.ts:158](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L158)

Subscribes to an event. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`EventId`](#eventid)

#### Parameters

##### eventId

`K`

Registered event name.

##### callback

(`payload`: [`EventPayload`](#eventpayload)\<`K`\>) => `void`

Called when the event is emitted.

#### Returns

() => `void`

#### Examples

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

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### emit() :id=emit

<p class="smt-member-path"><code>sandkit.api.events.emit()</code></p>

```ts
emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

Defined in: [sandkit/api/events.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L171)

Emits an event with a payload to all subscribers.

#### Type Parameters

##### K

`K` *extends* [`EventId`](#eventid)

#### Parameters

##### eventId

`K`

Registered event name.

##### payload

[`EventPayload`](#eventpayload)\<`K`\>

Serializable payload passed to listeners.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
