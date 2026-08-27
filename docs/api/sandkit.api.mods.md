# sandkit.api.mods

## Type Aliases <!-- {docsify-ignore} -->

### AssetProviderV1 :id=assetproviderv1

<p class="smt-member-path"><code>sandkit.api.mods.AssetProviderV1</code></p>

```ts
AssetProviderV1 = AssetProviderV1
```

Defined in: [sandkit/api/mods.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/mods.d.ts#L17)

Asset provider entry shape.

## Functions <!-- {docsify-ignore} -->

### getProviders() :id=getproviders

<p class="smt-member-path"><code>sandkit.api.mods.getProviders()</code></p>

```ts
getProviders(kind: string): readonly AssetProviderV1[]
```

Defined in: [sandkit/api/mods.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/mods.d.ts#L15)

Return asset providers registered for a kind string.

#### Parameters

##### kind

`string`

Asset kind identifier (e.g. texture pack category).

#### Returns

readonly [`AssetProviderV1`](api/sandkit.api.assets.md#assetproviderv1)[]
