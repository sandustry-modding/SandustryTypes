# sandkit.api.assets

`sandkit.api.assets` — mod asset URLs and asset provider selection.
Main thread only.

## Type Aliases <!-- {docsify-ignore} -->

### AssetProviderV1 :id=assetproviderv1

<p class="smt-member-path"><code>sandkit.api.assets.AssetProviderV1</code></p>

```ts
AssetProviderV1 = object
```

Defined in: [sandkit/api/assets.d.ts:7](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L7)

Describes a mod or pack that supplies assets for a kind.

#### Properties

##### id

```ts
id: ` ${string}:${string}:${string} `
```

Defined in: [sandkit/api/assets.d.ts:8](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L8)

##### kind

```ts
kind: string
```

Defined in: [sandkit/api/assets.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L9)

##### localId?

```ts
optional localId?: string
```

Defined in: [sandkit/api/assets.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L10)

##### modId?

```ts
optional modId?: number
```

Defined in: [sandkit/api/assets.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L11)

##### modName

```ts
modName: string
```

Defined in: [sandkit/api/assets.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L12)

## Functions <!-- {docsify-ignore} -->

### getUrl() :id=geturl

<p class="smt-member-path"><code>sandkit.api.assets.getUrl()</code></p>

```ts
getUrl(relativePath: string): string
```

Defined in: [sandkit/api/assets.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L18)

Resolves a path under the mod folder to a loadable URL.

#### Parameters

##### relativePath

`string`

Path relative to the calling mod folder.

#### Returns

`string`

***

### getSelectedProvider() :id=getselectedprovider

<p class="smt-member-path"><code>sandkit.api.assets.getSelectedProvider()</code></p>

```ts
getSelectedProvider(kind: string): AssetProviderV1 | null
```

Defined in: [sandkit/api/assets.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L23)

Returns the selected provider for an asset kind, or null.

#### Parameters

##### kind

`string`

Asset kind identifier.

#### Returns

[`AssetProviderV1`](#assetproviderv1) \| `null`

***

### selectProvider() :id=selectprovider

<p class="smt-member-path"><code>sandkit.api.assets.selectProvider()</code></p>

```ts
selectProvider(kind: string, providerId: string | null): boolean
```

Defined in: [sandkit/api/assets.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L29)

Selects a provider for an asset kind. Returns true on success.

#### Parameters

##### kind

`string`

Asset kind identifier.

##### providerId

`string` \| `null`

Provider id from [getSelectedProvider](#getselectedprovider), or null to clear.

#### Returns

`boolean`
