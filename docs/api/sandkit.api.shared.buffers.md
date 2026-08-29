# sandkit.api.shared.buffers

Shared buffer ensure and lookup.

## Functions <!-- {docsify-ignore} -->

### ensure() :id=ensure

<p class="smt-member-path"><code>sandkit.api.shared.buffers.ensure()</code></p>

```ts
ensure(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L30)

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

#### Example

```ts
const counts = api.shared.buffers.ensure("counts", {
  type: "uint32",
  length: 4,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~create()~~

```ts
create(key: string, config: object): SharedArray
```

Defined in: [sandkit/api/shared.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L37)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### get() :id=get

<p class="smt-member-path"><code>sandkit.api.shared.buffers.get()</code></p>

```ts
get(key: string): SharedArray | undefined
```

Defined in: [shared/api/shared.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L20)

Look up a named shared buffer without creating it.

#### Parameters

##### key

`string`

Buffer name shared across threads.

#### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray) \| `undefined`

The typed array, or `undefined` when the buffer does not exist.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
