# shared.jsonvalue

## Interfaces <!-- {docsify-ignore} -->

### JsonObjectV1 :id=jsonobjectv1

<p class="smt-member-path"><code>shared.jsonvalue.JsonObjectV1</code></p>

Defined in: [shared/jsonvalue.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/jsonvalue.d.ts#L15)

JSON object with string keys and [JsonValueV1](#jsonvaluev1) values.

Use for open-ended config bags and serialized mod data.

#### Indexable

```ts
[key: string]: JsonValueV1
```

## Type Aliases <!-- {docsify-ignore} -->

### JsonValueV1 :id=jsonvaluev1

<p class="smt-member-path"><code>shared.jsonvalue.JsonValueV1</code></p>

```ts
JsonValueV1 = string | number | boolean | JsonObjectV1 | JsonValueV1[] | null
```

Defined in: [shared/jsonvalue.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/jsonvalue.d.ts#L24)

JSON value: primitive, object, array, or null.

Does not include `undefined` — omit keys instead.
