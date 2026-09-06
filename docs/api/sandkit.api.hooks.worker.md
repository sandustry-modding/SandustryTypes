# sandkit.api.hooks (worker)

**`Internal`**

Worker-thread `sandkit.api.hooks` — intercept and modify simulation hook points.

 Worker-only surface; do not use main-thread [sandkit.api.hooks](api/sandkit.md?id=hooks).

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.HookContext :id=hookcontext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L112" target="_blank" rel="noopener">hooks.d.ts:112</a></p>

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

Defined in: [worker/api/hooks.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L114)

When called, the intercepted action is skipped.

###### Returns

`void`

</div>

<div class="smt-member-card">

### sandkit.api.hooks.HookGuard :id=hookguard

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L120" target="_blank" rel="noopener">hooks.d.ts:120</a></p>

| Property | Type | Description |
| --- | --- | --- |
| elementType? | ElementType | Required for element-scoped intercept hooks and optional on emit. |
| terrainType? | number | Required for terrain-scoped event guards; optional on emit. |

<div class="smt-member-anchors">

##### elementType? <!-- {docsify-ignore} -->

##### terrainType? <!-- {docsify-ignore} -->

</div>

Guard filter for worker hook registration.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L136" target="_blank" rel="noopener">hooks.d.ts:136</a></p>

| Property | Type | Description |
| --- | --- | --- |
| guard? | HookGuard |  |
| priority? | number |  |

<div class="smt-member-anchors">

##### guard? <!-- {docsify-ignore} -->

##### priority? <!-- {docsify-ignore} -->

</div>

Options for [modify](?id=modify).

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookMap :id=intercepthookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L166" target="_blank" rel="noopener">hooks.d.ts:166</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cell:process | process: Record<string, unknown> |  |
| element:update | update: Record<string, unknown> |  |
| element:move | move: Record<string, unknown> |  |
| element:move:blocked | move:blocked: Record<string, unknown> |  |
| ~~element:blocked~~ | blocked: Record<string, unknown> |  |
| element:duration:expire | duration:expire: Record<string, unknown> |  |
| ~~element:duration~~ | duration: Record<string, unknown> |  |
| fire:element:burn | element:burn: Record<string, unknown> |  |
| fire:terrain:burn | terrain:burn: Record<string, unknown> |  |
| shaker:elementOn | elementOn: Record<string, unknown> |  |

<div class="smt-member-anchors">

##### cell:process <!-- {docsify-ignore} -->

##### element:update <!-- {docsify-ignore} -->

##### element:move <!-- {docsify-ignore} -->

##### element:move:blocked <!-- {docsify-ignore} -->

##### ~~element:blocked~~ <!-- {docsify-ignore} -->

##### element:duration:expire <!-- {docsify-ignore} -->

##### ~~element:duration~~ <!-- {docsify-ignore} -->

##### fire:element:burn <!-- {docsify-ignore} -->

##### fire:terrain:burn <!-- {docsify-ignore} -->

##### shaker:elementOn <!-- {docsify-ignore} -->

</div>

Intercept hook argument shapes keyed by hook id.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L128" target="_blank" rel="noopener">hooks.d.ts:128</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookOptions&lt;K *extends* InterceptHookId&gt; = K *extends* ElementGuardedInterceptHookId ? object : K *extends* TerrainGuardedInterceptHookId ? object : object">

```ts
sandkit.api.hooks.InterceptHookOptions<K *extends* InterceptHookId> = K *extends* ElementGuardedInterceptHookId ? object : K *extends* TerrainGuardedInterceptHookId ? object : object
```

</div>

Options for [intercept](?id=intercept).

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ElementGuardedInterceptHookId :id=elementguardedintercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L142" target="_blank" rel="noopener">hooks.d.ts:142</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ElementGuardedInterceptHookId = &quot;cell:process&quot; | &quot;element:update&quot; | &quot;element:move:blocked&quot; | &quot;element:blocked&quot; | &quot;element:duration:expire&quot; | &quot;element:duration&quot;">

```ts
ElementGuardedInterceptHookId = "cell:process" | "element:update" | "element:move:blocked" | "element:blocked" | "element:duration:expire" | "element:duration"
```

</div>

Intercept hook ids with a required element guard.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.TerrainGuardedInterceptHookId :id=terrainguardedintercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L151" target="_blank" rel="noopener">hooks.d.ts:151</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.TerrainGuardedInterceptHookId = &quot;fire:terrain:burn&quot;">

```ts
TerrainGuardedInterceptHookId = "fire:terrain:burn"
```

</div>

Intercept hook ids with a required terrain guard.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookId :id=intercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L154" target="_blank" rel="noopener">hooks.d.ts:154</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookId = LooseString&lt;ElementGuardedInterceptHookId | TerrainGuardedInterceptHookId | &quot;element:move&quot; | &quot;fire:element:burn&quot; | &quot;shaker:elementOn&quot;&gt;">

```ts
InterceptHookId = LooseString<ElementGuardedInterceptHookId | TerrainGuardedInterceptHookId | "element:move" | "fire:element:burn" | "shaker:elementOn">
```

</div>

Known worker intercept hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookId :id=modifyhookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L163" target="_blank" rel="noopener">hooks.d.ts:163</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookId = LooseString&lt;string&gt;">

```ts
ModifyHookId = LooseString<string>
```

</div>

Known worker modify hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookMap :id=modifyhookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L182" target="_blank" rel="noopener">hooks.d.ts:182</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookMap = Record&lt;string, unknown&gt;">

```ts
ModifyHookMap = Record<string, unknown>
```

</div>

Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookArgs :id=intercepthookargs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L185" target="_blank" rel="noopener">hooks.d.ts:185</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L190" target="_blank" rel="noopener">hooks.d.ts:190</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookArgs&lt;K *extends* ModifyHookId&gt; = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown">

```ts
sandkit.api.hooks.ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown
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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L83" target="_blank" rel="noopener">hooks.d.ts:83</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.intercept&lt;K *extends* InterceptHookId&gt;(hookId: K, callback: (args: InterceptHookArgs&lt;K&gt;, context: HookContext) =&gt; void, options?: InterceptHookOptions&lt;K&gt;): () =&gt; void">

```ts
sandkit.api.hooks.intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | (`args`: [`InterceptHookArgs`](?id=intercepthookargs)\<`K`\>, `context`: [`HookContext`](?id=hookcontext)) => `void` | Called with hook arguments and context; may cancel the hook. |
| options? | [`InterceptHookOptions`](?id=intercepthookoptions)\<`K`\> | Optional guard and priority. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Register an intercept hook on this worker. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

() => `void`

#### Examples

**cell:process**

```ts
api.hooks.intercept("cell:process", handleCell, {
  guard: { elementType },
});
```

**element:update**

```ts
api.hooks.intercept("element:update", handleUpdate, {
  guard: { elementType },
});
```

**element:move**

```ts
api.hooks.intercept("element:move", (args, context) => {
  handleElementMove(args, context);
});
```

**element:move:blocked**

```ts
api.hooks.intercept(
  "element:move:blocked",
  (args, context) => {
    handleBlockedMovement(args, context);
  },
  { guard: { elementType } },
);
```

**element:duration:expire**

```ts
api.hooks.intercept(
  "element:duration:expire",
  (args, context) => {
    handleDurationExpiry(args, context);
  },
  { guard: { elementType } },
);
```

**fire:element:burn**

```ts
api.hooks.intercept("fire:element:burn", (args, context) => {
  handleElementBurn(args, context);
});
```

**fire:terrain:burn**

```ts
api.hooks.intercept("fire:terrain:burn", handleTerrainBurn, {
  guard: { terrainType },
});
```

**shaker:elementOn**

```ts
api.hooks.intercept("shaker:elementOn", (args, context) => {
  handleShakerElement(args, context);
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.modify :id=modify

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L105" target="_blank" rel="noopener">hooks.d.ts:105</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.modify&lt;K *extends* ModifyHookId&gt;(hookId: K, callback: (args: ModifyHookArgs&lt;K&gt;) =&gt; void, options?: ModifyHookOptions): () =&gt; void">

```ts
sandkit.api.hooks.modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | (`args`: [`ModifyHookArgs`](?id=modifyhookargs)\<`K`\>) => `void` | Called with hook arguments; may mutate hook payload. |
| options? | [`ModifyHookOptions`](?id=modifyhookoptions) | Optional guard and priority. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Register a modifier hook on this worker. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`ModifyHookId`](?id=modifyhookid)

() => `void`

#### Example

**Worker entry**

```ts
api.hooks.modify("example:prepare", (args) => {
  args.value *= 2;
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>
