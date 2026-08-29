# sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

## Interfaces <!-- {docsify-ignore} -->

### PlayerCollisionPreparePayload :id=playercollisionpreparepayload

<p class="smt-member-path"><code>sandkit.api.events.PlayerCollisionPreparePayload</code></p>

Defined in: [sandkit/api/events.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L30)

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

#### Properties

##### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean
```

Defined in: [sandkit/api/events.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L32)

When true, terrain collision is skipped this sub-step.

##### phaseThroughStructures

```ts
phaseThroughStructures: boolean
```

Defined in: [sandkit/api/events.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L34)

When true, structure collision is skipped this sub-step.

##### maxStepCells

```ts
maxStepCells: number
```

Defined in: [sandkit/api/events.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L36)

Max cells the player can step up when blocked horizontally (1–8).

***

### EventPayloadMap :id=eventpayloadmap

<p class="smt-member-path"><code>sandkit.api.events.EventPayloadMap</code></p>

Defined in: [sandkit/api/events.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L40)

Known event payloads. Unlisted ids still use `unknown`.

#### Properties

##### item:used

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

##### frame:render

```ts
frame:render: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L49)

##### scene:game:started

```ts
scene:game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L50)

##### ~~scene:started:game~~

```ts
scene:started:game: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L52)

###### Deprecated

Use `"scene:game:started"` instead.

##### earlyAccess:completed

```ts
earlyAccess:completed: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L53)

##### ~~earlyAccess:complete~~

```ts
earlyAccess:complete: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L55)

###### Deprecated

Use `"earlyAccess:completed"` instead.

##### terrain:destroyed

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

##### fog:cellRevealed

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

##### upgrade:levelSelected

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

##### building:placed

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

##### building:removed

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

##### structures:placed

```ts
structures:placed: object
```

Defined in: [sandkit/api/events.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L91)

###### structures

```ts
structures: unknown[]
```

##### structures:removed

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

##### structures:moved

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

##### game:ready

```ts
game:ready: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L101)

##### game:started

```ts
game:started: Record<string, unknown>
```

Defined in: [sandkit/api/events.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L102)

##### tutorial:stepChanged

```ts
tutorial:stepChanged: object
```

Defined in: [sandkit/api/events.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L103)

###### step

```ts
step: unknown
```

##### tutorial:completed

```ts
tutorial:completed: object
```

Defined in: [sandkit/api/events.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L104)

###### skipped

```ts
skipped: boolean
```

##### tech:unlocked

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

##### worldItem:pickedUp

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

##### resource:collected

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

##### player:collision:prepare

```ts
player:collision:prepare: PlayerCollisionPreparePayload
```

Defined in: [sandkit/api/events.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L120)

##### player:moved

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

## Type Aliases <!-- {docsify-ignore} -->

### EventId :id=eventid

<p class="smt-member-path"><code>sandkit.api.events.EventId</code></p>

```ts
EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [sandkit/api/events.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L133)

Known event names plus any custom string id.

***

### EventPayload :id=eventpayload

<p class="smt-member-path"><code>sandkit.api.events.EventPayload</code></p>

```ts
EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [sandkit/api/events.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L136)

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

Defined in: [sandkit/api/events.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L15)

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

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.events.on`

***

### emit() :id=emit

<p class="smt-member-path"><code>sandkit.api.events.emit()</code></p>

```ts
emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

Defined in: [sandkit/api/events.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L24)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.events.emit`
