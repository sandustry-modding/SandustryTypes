# sandkit.api.storage.local

Local session storage without mod id scope.

## Functions <!-- {docsify-ignore} -->

### get() :id=get

<p class="smt-member-path"><code>sandkit.api.storage.local.get()</code></p>

```ts
get(key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/storage.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L42)

Read a local storage value by key.

#### Parameters

##### key

`string`

Storage key.

#### Returns

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1) \| `undefined`

***

### set() :id=set

<p class="smt-member-path"><code>sandkit.api.storage.local.set()</code></p>

```ts
set(key: string, value: JsonValueV1): void
```

Defined in: [sandkit/api/storage.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L48)

Write a local storage value by key.

#### Parameters

##### key

`string`

Storage key.

##### value

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

JSON-serializable value.

#### Returns

`void`

***

### remove() :id=remove

<p class="smt-member-path"><code>sandkit.api.storage.local.remove()</code></p>

```ts
remove(key: string): void
```

Defined in: [sandkit/api/storage.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/storage.d.ts#L53)

Remove a local storage key.

#### Parameters

##### key

`string`

Storage key.

#### Returns

`void`
