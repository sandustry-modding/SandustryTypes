# sandkit.api.settings

## Type Aliases <!-- {docsify-ignore} -->

### FieldId :id=fieldid

<p class="smt-member-path"><code>sandkit.api.settings.FieldId</code></p>

```ts
FieldId = LooseString<never>
```

Defined in: [sandkit/api/settings.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L25)

Settings field id. Any string is allowed.

***

### ConfigValueV1 :id=configvaluev1

<p class="smt-member-path"><code>sandkit.api.settings.ConfigValueV1</code></p>

```ts
ConfigValueV1 = string | number | boolean | null
```

Defined in: [sandkit/api/settings.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L28)

Settings field value shape.

## Functions <!-- {docsify-ignore} -->

### get() :id=get

<p class="smt-member-path"><code>sandkit.api.settings.get()</code></p>

```ts
get(fieldId: string & object): ConfigValueV1 | undefined
```

Defined in: [sandkit/api/settings.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L15)

Return a settings field value by id.

#### Parameters

##### fieldId

`string` & `object`

Settings field identifier.

#### Returns

[`ConfigValueV1`](#configvaluev1) \| `undefined`

***

### getAll() :id=getall

<p class="smt-member-path"><code>sandkit.api.settings.getAll()</code></p>

```ts
getAll(): Readonly<Record<string, ConfigValueV1>>
```

Defined in: [sandkit/api/settings.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L17)

Return all settings as a read-only map.

#### Returns

`Readonly`\<`Record`\<`string`, [`ConfigValueV1`](#configvaluev1)\>\>

***

### onChange() :id=onchange

<p class="smt-member-path"><code>sandkit.api.settings.onChange()</code></p>

```ts
onChange(callback: (values: Readonly<Record<string, ConfigValueV1>>) => void): () => void
```

Defined in: [sandkit/api/settings.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L22)

Subscribe to settings changes. Return an unsubscribe function.

#### Parameters

##### callback

(`values`: `Readonly`\<`Record`\<`string`, [`ConfigValueV1`](#configvaluev1)\>\>) => `void`

Called with the full settings map after a change.

#### Returns

() => `void`
