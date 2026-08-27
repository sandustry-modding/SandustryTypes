# shared.nominal

## Type Aliases <!-- {docsify-ignore} -->

### LooseString :id=loosestring

<p class="smt-member-path"><code>shared.nominal.LooseString</code></p>

```ts
LooseString<T *extends* string> = T | string & object
```

Defined in: [shared/nominal.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L16)

Known string literals plus any other string.
`T | string` collapses to `string` and drops autocomplete.

#### Type Parameters

##### T

`T` *extends* `string`

***

### LooseNumber :id=loosenumber

<p class="smt-member-path"><code>shared.nominal.LooseNumber</code></p>

```ts
LooseNumber<T *extends* number> = T | number & object
```

Defined in: [shared/nominal.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L22)

Known numeric literals plus any other number.
`T | number` collapses to `number` and drops autocomplete.

#### Type Parameters

##### T

`T` *extends* `number`

***

### TaggedNumber :id=taggednumber

<p class="smt-member-path"><code>shared.nominal.TaggedNumber</code></p>

```ts
TaggedNumber<Tag *extends* string> = number & object
```

Defined in: [shared/nominal.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L28)

Number handle that does not mix with a different tag.
Plain `number` is not assignable; numeric literals and enum members are.

#### Type Declaration

##### \_\_tag?

```ts
readonly optional \_\_tag?: Tag
```

#### Type Parameters

##### Tag

`Tag` *extends* `string`

***

### CellId :id=cellid

<p class="smt-member-path"><code>shared.nominal.CellId</code></p>

```ts
CellId = TaggedNumber<"cellId">
```

Defined in: [shared/nominal.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L31)

Packed simulation cell id from `world.getCellIdAtCell`.
