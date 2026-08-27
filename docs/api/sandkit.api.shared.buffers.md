# sandkit.api.shared.buffers

Shared buffer ensure and lookup.

## Functions <!-- {docsify-ignore} -->

### ensure() :id=ensure

<p class="smt-member-path"><code>sandkit.api.shared.buffers.ensure()</code></p>

```ts
ensure(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/shared.d.ts#L21)

Create or return a named shared buffer with type and length.

#### Parameters

##### key

`string`

Buffer name shared across threads.

##### config

Typed array kind and element count.

###### type

[`SharedArrayType`](api/sandkit.api.shared.md#sharedarraytype)

###### length

`number`

#### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.shared.buffers.ensure`

***

### ~~create()~~

```ts
create(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/shared.d.ts#L27)

#### Parameters

##### key

`string`

##### config

###### type

[`SharedArrayType`](api/sandkit.api.shared.md#sharedarraytype)

###### length

`number`

#### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray)

#### Deprecated

Use [ensure](#ensure) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.shared.buffers.ensure`

***

### get() :id=get

<p class="smt-member-path"><code>sandkit.api.shared.buffers.get()</code></p>

```ts
get(key: string): SharedArray | undefined
```

Defined in: [shared/api/shared.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/shared.d.ts#L19)

Look up a named shared buffer without creating it.

#### Parameters

##### key

`string`

Buffer name shared across threads.

#### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray) \| `undefined`

The typed array, or `undefined` when the buffer does not exist.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.shared.buffers.get`
