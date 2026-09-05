# sandkit.api.maps

## Interfaces <!-- {docsify-ignore} -->

### ArtifactLocation :id=artifactlocation

<p class="smt-member-path"><code>sandkit.api.maps.ArtifactLocation</code></p>

Defined in: [sandkit/api/maps.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L42)

Artifact location entry from [getArtifactLocations](#getartifactlocations).

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### cellX

```ts
cellX: number;
```

Defined in: [sandkit/api/maps.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L43)

##### cellY

```ts
cellY: number;
```

Defined in: [sandkit/api/maps.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L44)

##### name

```ts
name: string;
```

Defined in: [sandkit/api/maps.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L45)

---

### AvailableMapV1 :id=availablemapv1

<p class="smt-member-path"><code>sandkit.api.maps.AvailableMapV1</code></p>

Defined in: [sandkit/api/maps.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L50)

Available map entry shape.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string;
```

Defined in: [sandkit/api/maps.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L52)

Map identifier passed to [start](#start).

##### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/maps.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L54)

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

---

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

---

### getArtifactLocations() :id=getartifactlocations

<p class="smt-member-path"><code>sandkit.api.maps.getArtifactLocations()</code></p>

```ts
getArtifactLocations(): readonly ArtifactLocation[]
```

Defined in: [sandkit/api/maps.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L39)

Return artifact marker locations for the active map.

#### Returns

readonly [`ArtifactLocation`](#artifactlocation)[]

#### Example

```ts
api.events.on("game:ready", () => {
  api.maps.getArtifactLocations().forEach(({ cellX, cellY, name }) => {
    addMarker(cellX, cellY, name);
  });
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## References <!-- {docsify-ignore} -->

### getActive :id=getactive

<p class="smt-member-path"><code>sandkit.api.maps.getActive</code></p>

Re-exports [getActive](api/sandkit.api.maps.worker.md#getactive)

---

### ActiveMapV1 :id=activemapv1

<p class="smt-member-path"><code>sandkit.api.maps.ActiveMapV1</code></p>

Re-exports [ActiveMapV1](api/sandkit.api.maps.worker.md#activemapv1)
