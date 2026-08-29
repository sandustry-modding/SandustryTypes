# sandkit.api.hooks (worker)

**`Internal`**

Worker-thread `sandkit.api.hooks` — intercept and modify simulation hook points.

 Worker-only surface; do not use main-thread [sandkit.api.hooks](api/sandkit.md#hooks).

## Interfaces <!-- {docsify-ignore} -->

### HookContext :id=hookcontext

<p class="smt-member-path"><code>sandkit.api.hooks.HookContext (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L39)

Context passed to intercept hook callbacks.

#### Properties

##### cancelled

```ts
cancelled: boolean
```

Defined in: [worker/api/hooks.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L43)

True after [cancel](#cancel) was called on this context.

#### Methods

##### cancel()

```ts
cancel(): void
```

Defined in: [worker/api/hooks.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L41)

When called, the intercepted action is skipped.

###### Returns

`void`

***

### HookGuard :id=hookguard

<p class="smt-member-path"><code>sandkit.api.hooks.HookGuard (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L47)

Guard filter for worker hook registration.

#### Properties

##### elementType?

```ts
optional elementType?: ElementType
```

Defined in: [worker/api/hooks.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L49)

Required for element-scoped intercept hooks and optional on emit.

##### terrainType?

```ts
optional terrainType?: number
```

Defined in: [worker/api/hooks.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L51)

Required for terrain-scoped event guards; optional on emit.

***

### ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookOptions (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L61)

Options for [modify](#modify).

#### Properties

##### guard?

```ts
optional guard?: HookGuard
```

Defined in: [worker/api/hooks.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L62)

##### priority?

```ts
optional priority?: number
```

Defined in: [worker/api/hooks.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L63)

***

### InterceptHookMap :id=intercepthookmap

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookMap (worker)</code></p>

Defined in: [worker/api/hooks.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L87)

Intercept hook argument shapes keyed by hook id.

#### Properties

##### cell:process

```ts
cell:process: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L88)

##### element:update

```ts
element:update: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L89)

##### element:move

```ts
element:move: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L90)

##### element:move:blocked

```ts
element:move:blocked: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L91)

##### ~~element:blocked~~

```ts
element:blocked: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L93)

###### Deprecated

Use `"element:move:blocked"` instead.

##### element:duration:expire

```ts
element:duration:expire: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L94)

##### ~~element:duration~~

```ts
element:duration: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L96)

###### Deprecated

Use `"element:duration:expire"` instead.

##### fire:element:burn

```ts
fire:element:burn: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L97)

##### shaker:elementOn

```ts
shaker:elementOn: Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L98)

## Type Aliases <!-- {docsify-ignore} -->

### InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookOptions (worker)</code></p>

```ts
InterceptHookOptions<K *extends* InterceptHookId> = K *extends* ElementGuardedInterceptHookId ? object : object
```

Defined in: [worker/api/hooks.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L55)

Options for [intercept](#intercept).

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

### ElementGuardedInterceptHookId :id=elementguardedintercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.ElementGuardedInterceptHookId (worker)</code></p>

```ts
ElementGuardedInterceptHookId = "cell:process" | "element:update" | "element:move:blocked" | "element:blocked" | "element:duration:expire" | "element:duration"
```

Defined in: [worker/api/hooks.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L67)

Intercept hook ids with a required element guard.

***

### InterceptHookId :id=intercepthookid

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookId (worker)</code></p>

```ts
InterceptHookId = LooseString<ElementGuardedInterceptHookId | "element:move" | "fire:element:burn" | "shaker:elementOn">
```

Defined in: [worker/api/hooks.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L76)

Known worker intercept hook ids plus custom strings.

***

### ModifyHookId :id=modifyhookid

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookId (worker)</code></p>

```ts
ModifyHookId = LooseString<string>
```

Defined in: [worker/api/hooks.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L84)

Known worker modify hook ids plus custom strings.

***

### ModifyHookMap :id=modifyhookmap

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookMap (worker)</code></p>

```ts
ModifyHookMap = Record<string, unknown>
```

Defined in: [worker/api/hooks.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L102)

Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`.

***

### InterceptHookArgs :id=intercepthookargs

<p class="smt-member-path"><code>sandkit.api.hooks.InterceptHookArgs (worker)</code></p>

```ts
InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L105)

Intercept hook args for a given hook id.

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

***

### ModifyHookArgs :id=modifyhookargs

<p class="smt-member-path"><code>sandkit.api.hooks.ModifyHookArgs (worker)</code></p>

```ts
ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown
```

Defined in: [worker/api/hooks.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L109)

Modify hook args for a given hook id.

#### Type Parameters

##### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

## Functions <!-- {docsify-ignore} -->

### intercept() :id=intercept

<p class="smt-member-path"><code>sandkit.api.hooks.intercept() (worker)</code></p>

```ts
intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

Defined in: [worker/api/hooks.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L18)

Register an intercept hook on this worker. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`InterceptHookId`](#intercepthookid)

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

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.hooks.intercept`

***

### modify() :id=modify

<p class="smt-member-path"><code>sandkit.api.hooks.modify() (worker)</code></p>

```ts
modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

Defined in: [worker/api/hooks.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L32)

Register a modifier hook on this worker. Returns an unsubscribe function.

#### Type Parameters

##### K

`K` *extends* [`ModifyHookId`](#modifyhookid)

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

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.hooks.modify`
