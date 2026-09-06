# sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.PlayerCollisionPreparePayload :id=playercollisionpreparepayload

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L177" target="_blank" rel="noopener">events.d.ts:177</a></p>

| Property | Type | Description |
| --- | --- | --- |
| phaseThroughTerrain | boolean | When true, terrain collision is skipped this sub-step. |
| phaseThroughStructures | boolean | When true, structure collision is skipped this sub-step. |
| maxStepCells | number | Max cells the player can step up when blocked horizontally (1–8). |

<div class="smt-member-anchors">

##### phaseThroughTerrain <!-- {docsify-ignore} -->

##### phaseThroughStructures <!-- {docsify-ignore} -->

##### maxStepCells <!-- {docsify-ignore} -->

</div>

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventPayloadMap :id=eventpayloadmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L187" target="_blank" rel="noopener">events.d.ts:187</a></p>

| Property | Type | Description |
| --- | --- | --- |
| item:used | used: object |  |
| frame:render | render: Record<string, unknown> |  |
| scene:game:started | game:started: Record<string, unknown> |  |
| ~~scene:started:game~~ | started:game: Record<string, unknown> |  |
| earlyAccess:completed | completed: Record<string, unknown> |  |
| ~~earlyAccess:complete~~ | complete: Record<string, unknown> |  |
| terrain:destroyed | destroyed: object |  |
| fog:cellRevealed | cellRevealed: object |  |
| upgrade:levelSelected | levelSelected: object |  |
| building:placed | placed: object |  |
| building:removing | removing: object | Fires before `building:removed`. |
| building:removed | removed: object |  |
| structures:placed | placed: object |  |
| structures:removed | removed: object |  |
| structures:moved | moved: object |  |
| game:ready | ready: Record<string, unknown> |  |
| game:started | started: Record<string, unknown> |  |
| tutorial:stepChanged | stepChanged: object |  |
| tutorial:completed | completed: object |  |
| tech:unlocked | unlocked: object |  |
| worldItem:pickedUp | pickedUp: object |  |
| resource:collected | collected: object |  |
| player:collision:prepare | collision:prepare: PlayerCollisionPreparePayload |  |
| player:moved | moved: object |  |

<div class="smt-member-anchors">

##### item:used <!-- {docsify-ignore} -->

##### frame:render <!-- {docsify-ignore} -->

##### scene:game:started <!-- {docsify-ignore} -->

##### ~~scene:started:game~~ <!-- {docsify-ignore} -->

##### earlyAccess:completed <!-- {docsify-ignore} -->

##### ~~earlyAccess:complete~~ <!-- {docsify-ignore} -->

##### terrain:destroyed <!-- {docsify-ignore} -->

##### fog:cellRevealed <!-- {docsify-ignore} -->

##### upgrade:levelSelected <!-- {docsify-ignore} -->

##### building:placed <!-- {docsify-ignore} -->

##### building:removing <!-- {docsify-ignore} -->

##### building:removed <!-- {docsify-ignore} -->

##### structures:placed <!-- {docsify-ignore} -->

##### structures:removed <!-- {docsify-ignore} -->

##### structures:moved <!-- {docsify-ignore} -->

##### game:ready <!-- {docsify-ignore} -->

##### game:started <!-- {docsify-ignore} -->

##### tutorial:stepChanged <!-- {docsify-ignore} -->

##### tutorial:completed <!-- {docsify-ignore} -->

##### tech:unlocked <!-- {docsify-ignore} -->

##### worldItem:pickedUp <!-- {docsify-ignore} -->

##### resource:collected <!-- {docsify-ignore} -->

##### player:collision:prepare <!-- {docsify-ignore} -->

##### player:moved <!-- {docsify-ignore} -->

</div>

Known event payloads. Unlisted ids still use `unknown`.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.EventId :id=eventid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L287" target="_blank" rel="noopener">events.d.ts:287</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventId = LooseString&lt;keyof EventPayloadMap&gt;">

```ts
EventId = LooseString<keyof EventPayloadMap>
```

</div>

Known event names plus any custom string id.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventPayload :id=eventpayload

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L290" target="_blank" rel="noopener">events.d.ts:290</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventPayload&lt;K&gt; = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown">

```ts
sandkit.api.events.EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

</div>

Event payload type for a given event id.

#### Type Parameters

##### K

`K`

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.on :id=on

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L158" target="_blank" rel="noopener">events.d.ts:158</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.on&lt;K *extends* EventId&gt;(eventId: K, callback: (payload: EventPayload&lt;K&gt;) =&gt; void): () =&gt; void">

```ts
sandkit.api.events.on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Registered event name. |
| callback | (`payload`: [`EventPayload`](?id=eventpayload)\<`K`\>) => `void` | Called when the event is emitted. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Subscribes to an event. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`EventId`](?id=eventid)

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

</div>

<div class="smt-member-card">

### sandkit.api.events.emit :id=emit

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L171" target="_blank" rel="noopener">events.d.ts:171</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.emit&lt;K *extends* EventId&gt;(eventId: K, payload: EventPayload&lt;K&gt;): void">

```ts
sandkit.api.events.emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Registered event name. |
| payload | [`EventPayload`](?id=eventpayload)\<`K`\> | Serializable payload passed to listeners. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### payload <!-- {docsify-ignore} -->

</div>

Emits an event with a payload to all subscribers.

#### Type Parameters

##### K

`K` *extends* [`EventId`](?id=eventid)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>
