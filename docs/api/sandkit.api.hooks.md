# sandkit.api.hooks

`sandkit.api.hooks` — intercept and modify internal game hook points.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.HookContext :id=hookcontext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L395" target="_blank" rel="noopener">hooks.d.ts:395</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cancelled | boolean | True after [cancel](?id=cancel) was called on this context. |

<div class="smt-member-anchors">

##### cancelled <!-- {docsify-ignore} -->

</div>

Context passed to intercept hook callbacks.

#### Methods

##### cancel()

```ts
cancel(): void
```

Defined in: [sandkit/api/hooks.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L397)

When called, the intercepted action is skipped.

###### Returns

`void`

</div>

<div class="smt-member-card">

### sandkit.api.hooks.HookOptions :id=hookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L403" target="_blank" rel="noopener">hooks.d.ts:403</a></p>

| Property | Type | Description |
| --- | --- | --- |
| priority? | number | Run this hook before others with lower priority. |

<div class="smt-member-anchors">

##### priority? <!-- {docsify-ignore} -->

</div>

Options shared by intercept and modify hooks.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookMap :id=intercepthookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L495" target="_blank" rel="noopener">hooks.d.ts:495</a></p>

| Property | Type | Description |
| --- | --- | --- |
| item:use | use: object |  |
| teleport:effect:create | effect:create: Record<string, unknown> |  |
| ~~teleport:effect~~ | effect: Record<string, unknown> |  |
| action:start | start: object & Record<string, unknown> |  |
| ~~action:intercept~~ | intercept: object & Record<string, unknown> |  |
| input:keyDown | keyDown: object |  |
| ~~input:keydown~~ | keydown: object |  |
| input:keyUp | keyUp: object |  |
| ~~input:keyup~~ | keyup: object |  |
| placePoints:suppress | suppress: object & Record<string, unknown> |  |
| ~~placePoints:isSuppressed~~ | isSuppressed: object & Record<string, unknown> |  |
| placePoints:directionalArrows:suppress | directionalArrows:suppress: object & Record<string, unknown> |  |
| ~~placePoints:directionalArrows:isSuppressed~~ | directionalArrows:isSuppressed: object & Record<string, unknown> |  |
| entity:update | update: object |  |
| building:place | place: object |  |
| building:clearShape | clearShape: object |  |
| input:scroll | scroll: object & Record<string, unknown> |  |
| input:boostDown | boostDown: Record<string, unknown> |  |
| ~~input:boost-down~~ | boost-down: Record<string, unknown> |  |
| input:descendDown | descendDown: Record<string, unknown> |  |
| ~~input:descend-down~~ | descend-down: Record<string, unknown> |  |
| input:escape | escape: Record<string, unknown> |  |
| interactable:suppressHover | suppressHover: object & Record<string, unknown> |  |
| fire:element:ignite | element:ignite: object |  |
| projectile:fire:overStructure | fire:overStructure: object |  |
| projectile:hit | hit: object |  |
| player:position:commit | position:commit: object |  |
| progression:purchase | purchase: object |  |

<div class="smt-member-anchors">

##### item:use <!-- {docsify-ignore} -->

##### teleport:effect:create <!-- {docsify-ignore} -->

##### ~~teleport:effect~~ <!-- {docsify-ignore} -->

##### action:start <!-- {docsify-ignore} -->

##### ~~action:intercept~~ <!-- {docsify-ignore} -->

##### input:keyDown <!-- {docsify-ignore} -->

##### ~~input:keydown~~ <!-- {docsify-ignore} -->

##### input:keyUp <!-- {docsify-ignore} -->

##### ~~input:keyup~~ <!-- {docsify-ignore} -->

##### placePoints:suppress <!-- {docsify-ignore} -->

##### ~~placePoints:isSuppressed~~ <!-- {docsify-ignore} -->

##### placePoints:directionalArrows:suppress <!-- {docsify-ignore} -->

##### ~~placePoints:directionalArrows:isSuppressed~~ <!-- {docsify-ignore} -->

##### entity:update <!-- {docsify-ignore} -->

##### building:place <!-- {docsify-ignore} -->

##### building:clearShape <!-- {docsify-ignore} -->

##### input:scroll <!-- {docsify-ignore} -->

##### input:boostDown <!-- {docsify-ignore} -->

##### ~~input:boost-down~~ <!-- {docsify-ignore} -->

##### input:descendDown <!-- {docsify-ignore} -->

##### ~~input:descend-down~~ <!-- {docsify-ignore} -->

##### input:escape <!-- {docsify-ignore} -->

##### interactable:suppressHover <!-- {docsify-ignore} -->

##### fire:element:ignite <!-- {docsify-ignore} -->

##### projectile:fire:overStructure <!-- {docsify-ignore} -->

##### projectile:hit <!-- {docsify-ignore} -->

##### player:position:commit <!-- {docsify-ignore} -->

##### progression:purchase <!-- {docsify-ignore} -->

</div>

Intercept hook argument shapes keyed by hook id.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifierHookMap :id=modifierhookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L581" target="_blank" rel="noopener">hooks.d.ts:581</a></p>

| Property | Type | Description |
| --- | --- | --- |
| excavation:prepare | prepare: object |  |
| locator:scan:prepare | scan:prepare: object |  |
| vacuum:prepare | prepare: object |  |
| vacuum:element:prepare | element:prepare: object |  |
| player:movement:prepare | movement:prepare: Record<string, unknown> |  |
| ~~player:movement~~ | movement: Record<string, unknown> |  |
| building:placementLimit:prepare | placementLimit:prepare: object & Record<string, unknown> |  |
| ~~building:placementLimit~~ | placementLimit: object & Record<string, unknown> |  |
| ~~building:placement-limit~~ | placement-limit: object & Record<string, unknown> |  |
| fluxEmanator:processing:prepare | processing:prepare: object & Record<string, unknown> |  |
| ~~fluxEmanator:processing~~ | processing: object & Record<string, unknown> |  |
| ~~flux-emanator:processing~~ | processing: object & Record<string, unknown> |  |
| render:pipes:prepare | pipes:prepare: object & Record<string, unknown> |  |
| ~~render:pipes~~ | pipes: object & Record<string, unknown> |  |
| structures:moved:prepare | moved:prepare: object |  |
| structures:removed:prepare | removed:prepare: object |  |
| weapon:reload:prepare | reload:prepare: object |  |
| projectile:travel:prepare | travel:prepare: object |  |
| projectile:impact:prepare | impact:prepare: object |  |
| player:collision:prepare | collision:prepare: object |  |
| trigger:schedule:prepare | schedule:prepare: object |  |
| progression:cost:prepare | cost:prepare: object |  |
| resource:collection:prepare | collection:prepare: object |  |
| resource:delivery:prepare | delivery:prepare: object |  |
| resource:balance:prepare | balance:prepare: object |  |
| gold:removal:prepare | removal:prepare: object |  |
| gold:removal:settle | removal:settle: object |  |

<div class="smt-member-anchors">

##### excavation:prepare <!-- {docsify-ignore} -->

##### locator:scan:prepare <!-- {docsify-ignore} -->

##### vacuum:prepare <!-- {docsify-ignore} -->

##### vacuum:element:prepare <!-- {docsify-ignore} -->

##### player:movement:prepare <!-- {docsify-ignore} -->

##### ~~player:movement~~ <!-- {docsify-ignore} -->

##### building:placementLimit:prepare <!-- {docsify-ignore} -->

##### ~~building:placementLimit~~ <!-- {docsify-ignore} -->

##### ~~building:placement-limit~~ <!-- {docsify-ignore} -->

##### fluxEmanator:processing:prepare <!-- {docsify-ignore} -->

##### ~~fluxEmanator:processing~~ <!-- {docsify-ignore} -->

##### ~~flux-emanator:processing~~ <!-- {docsify-ignore} -->

##### render:pipes:prepare <!-- {docsify-ignore} -->

##### ~~render:pipes~~ <!-- {docsify-ignore} -->

##### structures:moved:prepare <!-- {docsify-ignore} -->

##### structures:removed:prepare <!-- {docsify-ignore} -->

##### weapon:reload:prepare <!-- {docsify-ignore} -->

##### projectile:travel:prepare <!-- {docsify-ignore} -->

##### projectile:impact:prepare <!-- {docsify-ignore} -->

##### player:collision:prepare <!-- {docsify-ignore} -->

##### trigger:schedule:prepare <!-- {docsify-ignore} -->

##### progression:cost:prepare <!-- {docsify-ignore} -->

##### resource:collection:prepare <!-- {docsify-ignore} -->

##### resource:delivery:prepare <!-- {docsify-ignore} -->

##### resource:balance:prepare <!-- {docsify-ignore} -->

##### gold:removal:prepare <!-- {docsify-ignore} -->

##### gold:removal:settle <!-- {docsify-ignore} -->

</div>

Modify hook argument shapes keyed by hook id.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L410" target="_blank" rel="noopener">hooks.d.ts:410</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookOptions&lt;K *extends* InterceptHookId&gt; = HookOptions &amp; K *extends* &quot;item:use&quot; ? object : K *extends* &quot;entity:update&quot; ? object : K *extends* &quot;building:place&quot; ? object : K *extends* &quot;projectile:fire:overStructure&quot; | &quot;projectile:hit&quot; ? object : Record&lt;string, unknown&gt;">

```ts
sandkit.api.hooks.InterceptHookOptions<K *extends* InterceptHookId> = HookOptions & K *extends* "item:use" ? object : K *extends* "entity:update" ? object : K *extends* "building:place" ? object : K *extends* "projectile:fire:overStructure" | "projectile:hit" ? object : Record<string, unknown>
```

</div>

Options for [intercept](?id=intercept).

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L422" target="_blank" rel="noopener">hooks.d.ts:422</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookOptions = HookOptions &amp; { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record&lt;string, unknown&gt;">

```ts
ModifyHookOptions = HookOptions & { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record<string, unknown>
```

</div>

Options for [modify](?id=modify).

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookId :id=intercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L432" target="_blank" rel="noopener">hooks.d.ts:432</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookId = LooseString&lt;&quot;item:use&quot; | &quot;teleport:effect:create&quot; | &quot;teleport:effect&quot; | &quot;action:start&quot; | &quot;action:intercept&quot; | &quot;input:keyDown&quot; | &quot;input:keydown&quot; | &quot;input:keyUp&quot; | &quot;input:keyup&quot; | &quot;placePoints:suppress&quot; | &quot;placePoints:isSuppressed&quot; | &quot;placePoints:directionalArrows:suppress&quot; | &quot;placePoints:directionalArrows:isSuppressed&quot; | &quot;entity:update&quot; | &quot;building:place&quot; | &quot;building:clearShape&quot; | &quot;input:scroll&quot; | &quot;input:boostDown&quot; | &quot;input:boost-down&quot; | &quot;input:descendDown&quot; | &quot;input:descend-down&quot; | &quot;input:escape&quot; | &quot;interactable:suppressHover&quot; | &quot;fire:element:ignite&quot; | &quot;projectile:fire:overStructure&quot; | &quot;projectile:hit&quot; | &quot;player:position:commit&quot; | &quot;progression:purchase&quot;&gt;">

```ts
InterceptHookId = LooseString<"item:use" | "teleport:effect:create" | "teleport:effect" | "action:start" | "action:intercept" | "input:keyDown" | "input:keydown" | "input:keyUp" | "input:keyup" | "placePoints:suppress" | "placePoints:isSuppressed" | "placePoints:directionalArrows:suppress" | "placePoints:directionalArrows:isSuppressed" | "entity:update" | "building:place" | "building:clearShape" | "input:scroll" | "input:boostDown" | "input:boost-down" | "input:descendDown" | "input:descend-down" | "input:escape" | "interactable:suppressHover" | "fire:element:ignite" | "projectile:fire:overStructure" | "projectile:hit" | "player:position:commit" | "progression:purchase">
```

</div>

Known main-thread intercept hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookId :id=modifyhookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L464" target="_blank" rel="noopener">hooks.d.ts:464</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookId = LooseString&lt;&quot;excavation:prepare&quot; | &quot;locator:scan:prepare&quot; | &quot;vacuum:prepare&quot; | &quot;vacuum:element:prepare&quot; | &quot;player:movement:prepare&quot; | &quot;player:movement&quot; | &quot;building:placementLimit:prepare&quot; | &quot;building:placementLimit&quot; | &quot;building:placement-limit&quot; | &quot;fluxEmanator:processing:prepare&quot; | &quot;fluxEmanator:processing&quot; | &quot;flux-emanator:processing&quot; | &quot;render:pipes:prepare&quot; | &quot;render:pipes&quot; | &quot;structures:moved:prepare&quot; | &quot;structures:removed:prepare&quot; | &quot;weapon:reload:prepare&quot; | &quot;projectile:travel:prepare&quot; | &quot;projectile:impact:prepare&quot; | &quot;player:collision:prepare&quot; | &quot;trigger:schedule:prepare&quot; | &quot;progression:cost:prepare&quot; | &quot;resource:collection:prepare&quot; | &quot;resource:delivery:prepare&quot; | &quot;resource:balance:prepare&quot; | &quot;gold:removal:prepare&quot; | &quot;gold:removal:settle&quot;&gt;">

```ts
ModifyHookId = LooseString<"excavation:prepare" | "locator:scan:prepare" | "vacuum:prepare" | "vacuum:element:prepare" | "player:movement:prepare" | "player:movement" | "building:placementLimit:prepare" | "building:placementLimit" | "building:placement-limit" | "fluxEmanator:processing:prepare" | "fluxEmanator:processing" | "flux-emanator:processing" | "render:pipes:prepare" | "render:pipes" | "structures:moved:prepare" | "structures:removed:prepare" | "weapon:reload:prepare" | "projectile:travel:prepare" | "projectile:impact:prepare" | "player:collision:prepare" | "trigger:schedule:prepare" | "progression:cost:prepare" | "resource:collection:prepare" | "resource:delivery:prepare" | "resource:balance:prepare" | "gold:removal:prepare" | "gold:removal:settle">
```

</div>

Known main-thread modify hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookArgs :id=intercepthookargs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L718" target="_blank" rel="noopener">hooks.d.ts:718</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookArgs&lt;K *extends* InterceptHookId&gt; = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown">

```ts
sandkit.api.hooks.InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

</div>

Intercept hook args for a given hook id.

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookArgs :id=modifyhookargs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L723" target="_blank" rel="noopener">hooks.d.ts:723</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookArgs&lt;K *extends* ModifyHookId&gt; = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown">

```ts
sandkit.api.hooks.ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown
```

</div>

Modify hook args for a given hook id.

#### Type Parameters

##### K

`K` *extends* [`ModifyHookId`](?id=modifyhookid)

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.intercept :id=intercept

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L177" target="_blank" rel="noopener">hooks.d.ts:177</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.intercept&lt;K *extends* InterceptHookId&gt;(hookId: K, callback: (args: InterceptHookArgs&lt;K&gt;, context: HookContext) =&gt; void, options?: InterceptHookOptions&lt;K&gt;): () =&gt; void">

```ts
sandkit.api.hooks.intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | (`args`: [`InterceptHookArgs`](?id=intercepthookargs)\<`K`\>, `context`: [`HookContext`](?id=hookcontext)) => `void` | Called with hook arguments and context; may cancel the hook. |
| options? | [`InterceptHookOptions`](?id=intercepthookoptions)\<`K`\> | Optional priority and filter options. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Registers an intercept hook. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

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

</div>

<div class="smt-member-card">

### sandkit.api.hooks.modify :id=modify

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L388" target="_blank" rel="noopener">hooks.d.ts:388</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.modify&lt;K *extends* ModifyHookId&gt;(hookId: K, callback: (args: ModifyHookArgs&lt;K&gt;) =&gt; void, options?: ModifyHookOptions): () =&gt; void">

```ts
sandkit.api.hooks.modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | (`args`: [`ModifyHookArgs`](?id=modifyhookargs)\<`K`\>) => `void` | Called with hook arguments; may mutate hook payload. |
| options? | [`ModifyHookOptions`](?id=modifyhookoptions) | Optional priority and filter options. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Registers a modifier hook. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`ModifyHookId`](?id=modifyhookid)

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

</div>
