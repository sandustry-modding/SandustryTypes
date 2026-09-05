# sandkit.api.hooks (worker)

**`Internal`**

Worker-thread `sandkit.api.hooks` — intercept and modify simulation hook points.

Worker-only surface; do not use main-thread [sandkit.api.hooks](api/sandkit.md#hooks).

## Interfaces <!-- {docsify-ignore} -->

### HookContext :id=hookcontext

<p class="smt-member-path"><code>sandkit.api.hooks.HookContext (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L112)

Context passed to intercept hook callbacks.

#### Properties

##### cancelled

```ts
cancelled: boolean;
```

Defined in: [worker/api/hooks.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L116)

True after [cancel](#cancel) was called on this context.

#### Methods

##### cancel()

```ts
cancel(): void
```

Defined in: [worker/api/hooks.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L114)

When called, the intercepted action is skipped.

###### Returns

`void`

---

### HookGuard :id=hookguard

<p class="smt-member-path"><code>sandkit.api.hooks.HookGuard (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L120)

Guard filter for worker hook registration.

#### Properties

##### elementType?

```ts
optional elementType?: ElementType
```

Defined in: [worker/api/hooks.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L122)

Required for element-scoped intercept hooks and optional on emit.

##### terrainType?

```ts
optional terrainType?: number
```

Defined in: [worker/api/hooks.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L124)

Required for terrain-scoped event guards; optional on emit.

---

### ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookOptions (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L136)

Options for [modify](#modify).

#### Properties

##### guard?

```ts
optional guard?: HookGuard
```

Defined in: [worker/api/hooks.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L137)

##### priority?

```ts
optional priority?: number
```

Defined in: [worker/api/hooks.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L138)

---

### InterceptHookMap :id=intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L166)

Intercept hook argument shapes keyed by hook id.

#### Properties

##### cell:process

```ts
cell: process: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L167)

##### element:update

```ts
element: update: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L168)

##### element:move

```ts
element: move: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L169)

##### element:move:blocked

```ts
element: move: blocked: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L170)

##### ~~element:blocked~~

```ts
element: blocked: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L172)

###### Deprecated

Use `"element:move:blocked"` instead.

##### element:duration:expire

```ts
element: duration: expire: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L173)

##### ~~element:duration~~

```ts
element: duration: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L175)

###### Deprecated

Use `"element:duration:expire"` instead.

##### fire:element:burn

```ts
fire: element: burn: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:176](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L176)

##### fire:terrain:burn

```ts
fire: terrain: burn: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L177)

##### shaker:elementOn

```ts
shaker: elementOn: Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L178)

## Type Aliases <!-- {docsify-ignore} -->

### InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookOptions (worker)</code></p>

```ts
InterceptHookOptions<K *extends* InterceptHookId> = K *extends* ElementGuardedInterceptHookId ? object : K *extends* TerrainGuardedInterceptHookId ? object : object
```

Defined in: [worker/api/hooks.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L128)

Options for [intercept](#intercept).

#### Type Parameters

##### K

`K` _extends_ [`InterceptHookId`](#intercepthookid)

---

### ElementGuardedInterceptHookId :id=elementguardedintercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.ElementGuardedInterceptHookId (worker)</code></p>

```ts
ElementGuardedInterceptHookId =
  "cell:process" |
  "element:update" |
  "element:move:blocked" |
  "element:blocked" |
  "element:duration:expire" |
  "element:duration";
```

Defined in: [worker/api/hooks.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L142)

Intercept hook ids with a required element guard.

---

### TerrainGuardedInterceptHookId :id=terrainguardedintercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.TerrainGuardedInterceptHookId (worker)</code></p>

```ts
TerrainGuardedInterceptHookId = "fire:terrain:burn";
```

Defined in: [worker/api/hooks.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L151)

Intercept hook ids with a required terrain guard.

---

### InterceptHookId :id=intercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookId (worker)</code></p>

```ts
InterceptHookId = LooseString<
  | ElementGuardedInterceptHookId
  | TerrainGuardedInterceptHookId
  | "element:move"
  | "fire:element:burn"
  | "shaker:elementOn"
>;
```

Defined in: [worker/api/hooks.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L154)

Known worker intercept hook ids plus custom strings.

---

### ModifyHookId :id=modifyhookid

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookId (worker)</code></p>

```ts
ModifyHookId = LooseString<string>;
```

Defined in: [worker/api/hooks.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L163)

Known worker modify hook ids plus custom strings.

---

### ModifyHookMap :id=modifyhookmap

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookMap (worker)</code></p>

```ts
ModifyHookMap = Record<string, unknown>;
```

Defined in: [worker/api/hooks.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L182)

Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`.

---

### InterceptHookArgs :id=intercepthookargs

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookArgs (worker)</code></p>

```ts
InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L185)

Intercept hook args for a given hook id.

#### Type Parameters

##### K

`K` _extends_ [`InterceptHookId`](#intercepthookid)

---

### ModifyHookArgs :id=modifyhookargs

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookArgs (worker)</code></p>

```ts
ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L189)

Modify hook args for a given hook id.

#### Type Parameters

##### K

`K` _extends_ [`ModifyHookId`](#modifyhookid)

## Functions <!-- {docsify-ignore} -->

### intercept() :id=intercept

<p class="smt-member-path"><code>sandkit.api.hooks.intercept() (worker)</code></p>

```ts
intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [worker/api/hooks.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L83)

Register an intercept hook on this worker. Returns an unsubscribe function.

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

Optional guard and priority.

#### Returns

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

---

### modify() :id=modify

<p class="smt-member-path"><code>sandkit.api.hooks.modify() (worker)</code></p>

```ts
modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [worker/api/hooks.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L105)

Register a modifier hook on this worker. Returns an unsubscribe function.

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

Optional guard and priority.

#### Returns

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
