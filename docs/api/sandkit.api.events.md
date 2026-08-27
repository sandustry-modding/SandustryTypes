# sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.events.PlayerCollisionPreparePayload :id=playercollisionpreparepayload

Defined in: [sandkit/api/events.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L25)

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

#### Properties

##### phaseThroughTerrain

```ts
phaseThroughTerrain: boolean
```

Defined in: [sandkit/api/events.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L27)

When true, terrain collision is skipped this sub-step.

##### phaseThroughStructures

```ts
phaseThroughStructures: boolean
```

Defined in: [sandkit/api/events.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L29)

When true, structure collision is skipped this sub-step.

##### maxStepCells

```ts
maxStepCells: number
```

Defined in: [sandkit/api/events.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L31)

Max cells the player can step up when blocked horizontally (1–8).

***

### sandkit.api.events.EventPayloadMap :id=eventpayloadmap

Defined in: [sandkit/api/events.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L35)

Known event payloads. Unlisted ids still use `unknown`.

#### Properties

##### player:collision:prepare

```ts
player:collision:prepare: PlayerCollisionPreparePayload
```

Defined in: [sandkit/api/events.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L36)

##### player:moved

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

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.events.EventId :id=eventid

```ts
EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [sandkit/api/events.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L49)

Known event names plus any custom string id.

***

### sandkit.api.events.EventPayload :id=eventpayload

```ts
EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [sandkit/api/events.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L52)

Event payload type for a given event id.

#### Type Parameters

##### K

`K`

## Functions <!-- {docsify-ignore} -->

### sandkit.api.events.on() :id=on

```ts
on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

Defined in: [sandkit/api/events.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L13)

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

***

### sandkit.api.events.emit() :id=emit

```ts
emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

Defined in: [sandkit/api/events.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/events.d.ts#L19)

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
