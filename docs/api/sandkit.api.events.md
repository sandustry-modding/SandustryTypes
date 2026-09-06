# sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.PlayerCollisionPreparePayload :id=playercollisionpreparepayload

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L175" target="_blank" rel="noopener">events.d.ts:175</a></p>

| Property | Type | Description |
| --- | --- | --- |
| phaseThroughTerrain | <code>boolean</code> | When true, terrain collision is skipped this sub-step. |
| phaseThroughStructures | <code>boolean</code> | When true, structure collision is skipped this sub-step. |
| maxStepCells | <code>number</code> | Max cells the player can step up when blocked horizontally (1–8). |

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L185" target="_blank" rel="noopener">events.d.ts:185</a></p>

| Hook | Args | Notes |
| --- | --- | --- |
| `item:used` | <code>{ itemId: string; useId: string; kind: string; cellX: number; cellY: number; prepared: Readonly&lt;Record&lt;string, unknown&gt;&gt; }</code> |  |
| `frame:render` | <code>Record&lt;string, unknown&gt;</code> |  |
| `scene:game:started` | <code>Record&lt;string, unknown&gt;</code> |  |
| ~~`scene:started:game`~~ | <code>Record&lt;string, unknown&gt;</code> | Deprecated alias. |
| `earlyAccess:completed` | <code>Record&lt;string, unknown&gt;</code> |  |
| ~~`earlyAccess:complete`~~ | <code>Record&lt;string, unknown&gt;</code> | Deprecated alias. |
| `terrain:destroyed` | <code>{ cellX: number; cellY: number; cellType: number; x: number; y: number }</code> |  |
| `fog:cellRevealed` | <code>{ cellX: number; cellY: number; x: number; y: number }</code> |  |
| `upgrade:levelSelected` | <code>{ itemId: string; upgradeId: string; level: number }</code> |  |
| `building:placed` | <code>{ structure: Record&lt;string, unknown&gt;; x: number; y: number; isBatch: boolean; isCopied: boolean }</code> |  |
| `building:removing` | <code>{ structureId: string; x: number; y: number; byMove: boolean }</code> | Fires before `building:removed`. |
| `building:removed` | <code>{ structureId: string; x: number; y: number; isBatch: boolean }</code> |  |
| `structures:placed` | <code>{ structures: unknown[] }</code> |  |
| `structures:removed` | <code>{ removed: unknown[]; structures: unknown[]; byMove: boolean }</code> |  |
| `structures:moved` | <code>{ moved: unknown[]; failedToPlace: unknown[] }</code> |  |
| `game:ready` | <code>Record&lt;string, unknown&gt;</code> |  |
| `game:started` | <code>Record&lt;string, unknown&gt;</code> |  |
| `tutorial:stepChanged` | <code>{ step: unknown }</code> |  |
| `tutorial:completed` | <code>{ skipped: boolean }</code> |  |
| `tech:unlocked` | <code>{ techId: string; suppressMusic: boolean }</code> |  |
| `worldItem:pickedUp` | <code>{ worldItemId: number; type: string }</code> |  |
| `resource:collected` | <code>{ resourceId: string; amount: number; sourceKind: string; cellX: number; cellY: number }</code> |  |
| `player:collision:prepare` | <code>PlayerCollisionPreparePayload</code> |  |
| `player:moved` | <code>{ dt: number; state: unknown }</code> |  |

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L285" target="_blank" rel="noopener">events.d.ts:285</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventId = LooseString&lt;keyof EventPayloadMap&gt;">

```ts
EventId = LooseString<keyof EventPayloadMap>
```

</div>

Known event names plus any custom string id.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventPayload :id=eventpayload

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L288" target="_blank" rel="noopener">events.d.ts:288</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventPayload&lt;K&gt; = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown">

```ts
sandkit.api.events.EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

</div>

Event payload type for a given event id.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.on :id=on

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L157" target="_blank" rel="noopener">events.d.ts:157</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.on&lt;K *extends* EventId&gt;(eventId: K, callback: (payload: EventPayload&lt;K&gt;) =&gt; void): () =&gt; void">

```ts
sandkit.api.events.on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | `K` Registered event name. |
| callback | <code>(`payload`: [`EventPayload`](?id=eventpayload)\&lt;`K`\&gt;) =&gt; `void`</code> | (`payload`: [`EventPayload`](?id=eventpayload)\<`K`\>) => `void` Called when the event is emitted. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Subscribes to an event. Returns an unsubscribe function.

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

</div>

<div class="smt-member-card">

### sandkit.api.events.emit :id=emit

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L169" target="_blank" rel="noopener">events.d.ts:169</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.emit&lt;K *extends* EventId&gt;(eventId: K, payload: EventPayload&lt;K&gt;): void">

```ts
sandkit.api.events.emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | `K` Registered event name. |
| payload | <code>[`EventPayload`](?id=eventpayload)\&lt;`K`\&gt;</code> | [`EventPayload`](?id=eventpayload)\<`K`\> Serializable payload passed to listeners. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### payload <!-- {docsify-ignore} -->

</div>

Emits an event with a payload to all subscribers.

`K` *extends* [`EventId`](?id=eventid)

</div>
