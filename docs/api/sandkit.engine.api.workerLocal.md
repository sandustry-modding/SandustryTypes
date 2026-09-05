# sandkit.engine.api.workerLocal

**`Internal`**

`sandkit.engine.api.workerLocal` — per-worker ephemeral key-value storage.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Available on worker threads only. Values do not persist across workers.

## Functions <!-- {docsify-ignore} -->

### clear() :id=clear

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.clear()</code></p>

```ts
clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L14)

Remove all keys from worker-local storage.

#### Parameters

##### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

#### Returns

`unknown`

***

### get() :id=get

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.get()</code></p>

```ts
get(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L19)

Return a value by key, or undefined when missing.

#### Parameters

##### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getOrInit() :id=getorinit

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.getOrInit()</code></p>

```ts
getOrInit(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L24)

Return a value by key, initializing it when missing.

#### Parameters

##### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

#### Returns

`unknown`

***

### set() :id=set

<p class="smt-member-path"><code>sandkit.engine.api.workerLocal.set()</code></p>

```ts
set(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/workerLocal.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L29)

Store a value by key.

#### Parameters

##### args

...`unknown`[]

Worker-local context first on workers; otherwise game state first, then method-specific arguments.

#### Returns

`unknown`
