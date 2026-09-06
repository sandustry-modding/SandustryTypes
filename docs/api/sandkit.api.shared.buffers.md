# sandkit.api.shared.buffers

Shared buffer ensure and lookup.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.shared.buffers.ensure :id=ensure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L30" target="_blank" rel="noopener">shared.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.buffers.ensure(key: string, config: object): SharedArray">

```ts
ensure(key: string, config: object): SharedArray
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Buffer name shared across threads. |
| config | Typed array kind and element count. |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### config <!-- {docsify-ignore} -->

</div>

Create or return a named shared buffer with type and length.

[`SharedArray`](api/sandkit.api.shared.md?id=sharedarray)

#### Example

```ts
const counts = api.shared.buffers.ensure("counts", {
  type: "uint32",
  length: 4,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.shared.buffers.create~~ :id=create

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L40" target="_blank" rel="noopener">shared.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.buffers.create(key: string, config: object): SharedArray">

```ts
create(key: string, config: object): SharedArray
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` |  |
| config |  |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### config <!-- {docsify-ignore} -->

</div>

[`SharedArray`](api/sandkit.api.shared.md?id=sharedarray)

#### Deprecated

Use [ensure](?id=ensure) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.shared.buffers.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L20" target="_blank" rel="noopener">shared.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.buffers.get(key: string): SharedArray | undefined">

```ts
get(key: string): SharedArray | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Buffer name shared across threads. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Look up a named shared buffer without creating it.

[`SharedArray`](api/sandkit.api.shared.md?id=sharedarray) \| `undefined` The typed array, or `undefined` when the buffer does not exist.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>
