# sandkit.api.events (worker)

**`Internal`**

Worker-thread `sandkit.api.events` — subscribe to and emit worker-scoped events.

 Worker-only surface; do not use main-thread [sandkit.api.events](api/sandkit.md#events).

## Interfaces <!-- {docsify-ignore} -->

### EventGuard :id=eventguard

<p class="smt-member-path"><code>sandkit.api.events.EventGuard (worker)</code></p>

Defined in: [worker/api/events.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L68)

Guard filter for worker events.

#### Properties

##### elementType?

```ts
optional elementType?: ElementType
```

Defined in: [worker/api/events.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L70)

Required when subscribing to `element:moved`. Optional on emit.

##### terrainType?

```ts
optional terrainType?: number
```

Defined in: [worker/api/events.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L72)

Required when subscribing to `terrain:updated`. Optional on emit.

***

### EventEmitOptions :id=eventemitoptions

<p class="smt-member-path"><code>sandkit.api.events.EventEmitOptions (worker)</code></p>

Defined in: [worker/api/events.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L84)

Options for [emit](#emit).

#### Properties

##### guard?

```ts
optional guard?: EventGuard
```

Defined in: [worker/api/events.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L85)

***

### EventPayloadMap :id=eventpayloadmap

<p class="smt-member-path"><code>sandkit.api.events.EventPayloadMap (worker)</code></p>

Defined in: [worker/api/events.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L89)

Known worker event payloads. Unlisted ids still use `unknown`.

#### Properties

##### element:moved

```ts
element:moved: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L90)

##### terrain:updated

```ts
terrain:updated: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L91)

##### ~~terrain:update~~

```ts
terrain:update: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L93)

###### Deprecated

Use `"terrain:updated"` instead.

##### worker:update:post

```ts
worker:update:post: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L94)

##### ~~update:post~~

```ts
update:post: Record<string, unknown>
```

Defined in: [worker/api/events.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L96)

###### Deprecated

Use `"worker:update:post"` instead.

## Type Aliases <!-- {docsify-ignore} -->

### EventOnOptions :id=eventonoptions

<p class="smt-member-path"><code>sandkit.api.events.EventOnOptions (worker)</code></p>

```ts
EventOnOptions<K *extends* EventId> = K *extends* "element:moved" ? object : K *extends* "terrain:updated" | "terrain:update" ? object : object
```

Defined in: [worker/api/events.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L76)

Options for [on](#on).

#### Type Parameters

##### K

`K` *extends* [`EventId`](#eventid)

***

### EventId :id=eventid

<p class="smt-member-path"><code>sandkit.api.events.EventId (worker)</code></p>

```ts
EventId = LooseString<keyof EventPayloadMap>
```

Defined in: [worker/api/events.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L100)

Known worker event names plus any custom string id.

***

### EventPayload :id=eventpayload

<p class="smt-member-path"><code>sandkit.api.events.EventPayload (worker)</code></p>

```ts
EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

Defined in: [worker/api/events.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L103)

Event payload type for a given event id.

#### Type Parameters

##### K

`K`

## Functions <!-- {docsify-ignore} -->

### on() :id=on

<p class="smt-member-path"><code>sandkit.api.events.on() (worker)</code></p>

```ts
on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void, options?: EventOnOptions<K>): () => void
```

Defined in: [worker/api/events.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L46)

Subscribe to a worker event. Returns an unsubscribe function.

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

##### options?

[`EventOnOptions`](#eventonoptions)\<`K`\>

Required guard for filtered events.

#### Returns

() => `void`

#### Examples

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

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### emit() :id=emit

<p class="smt-member-path"><code>sandkit.api.events.emit() (worker)</code></p>

```ts
emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>, options?: EventEmitOptions): void
```

Defined in: [worker/api/events.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L61)

Emit a worker event with a payload to subscribers.

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

##### options?

[`EventEmitOptions`](#eventemitoptions)

Optional guard forwarded to filtered listeners.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
