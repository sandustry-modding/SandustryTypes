# sandkit.api.maps

## Interfaces <!-- {docsify-ignore} -->

### ArtifactLocation :id=artifactlocation

<p class="smt-member-path"><code>sandkit.api.maps.ArtifactLocation</code></p>

Defined in: [sandkit/api/maps.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L33)

Artifact location entry from [getArtifactLocations](#getartifactlocations).

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### cellX

```ts
cellX: number
```

Defined in: [sandkit/api/maps.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L34)

##### cellY

```ts
cellY: number
```

Defined in: [sandkit/api/maps.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L35)

##### name

```ts
name: string
```

Defined in: [sandkit/api/maps.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L36)

***

### AvailableMapV1 :id=availablemapv1

<p class="smt-member-path"><code>sandkit.api.maps.AvailableMapV1</code></p>

Defined in: [sandkit/api/maps.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L41)

Available map entry shape.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string
```

Defined in: [sandkit/api/maps.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L43)

Map identifier passed to [start](#start).

##### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/maps.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L45)

Display name or translation key.

## Functions <!-- {docsify-ignore} -->

### getAvailable() :id=getavailable

<p class="smt-member-path"><code>sandkit.api.maps.getAvailable()</code></p>

```ts
getAvailable(): readonly Readonly<AvailableMapV1>[]
```

Defined in: [sandkit/api/maps.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L18)

Return maps the player can start.

#### Returns

readonly `Readonly`\<[`AvailableMapV1`](#availablemapv1)\>[]

***

### start() :id=start

<p class="smt-member-path"><code>sandkit.api.maps.start()</code></p>

```ts
start(mapId: string): boolean
```

Defined in: [sandkit/api/maps.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L23)

Start a map by id. Return true when start succeeds.

#### Parameters

##### mapId

`string`

Custom map identifier.

#### Returns

`boolean`

***

### getArtifactLocations() :id=getartifactlocations

<p class="smt-member-path"><code>sandkit.api.maps.getArtifactLocations()</code></p>

```ts
getArtifactLocations(): readonly ArtifactLocation[]
```

Defined in: [sandkit/api/maps.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L30)

Return artifact marker locations for the active map.

#### Returns

readonly [`ArtifactLocation`](#artifactlocation)[]

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.maps.getArtifactLocations`

## References <!-- {docsify-ignore} -->

### getActive :id=getactive

<p class="smt-member-path"><code>sandkit.api.maps.getActive</code></p>

Re-exports [getActive](api/sandkit.api.maps.worker.md#getactive)

***

### ActiveMapV1 :id=activemapv1

<p class="smt-member-path"><code>sandkit.api.maps.ActiveMapV1</code></p>

Re-exports [ActiveMapV1](api/sandkit.api.maps.worker.md#activemapv1)
