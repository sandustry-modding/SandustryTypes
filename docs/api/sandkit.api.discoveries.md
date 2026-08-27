# sandkit.api.discoveries

`sandkit.api.discoveries` — unlock element and terrain entries in the discovery log.
Main thread only.

## Functions <!-- {docsify-ignore} -->

### addElementByType() :id=addelementbytype

<p class="smt-member-path"><code>sandkit.api.discoveries.addElementByType()</code></p>

```ts
addElementByType(elementType: ElementType): void
```

Defined in: [sandkit/api/discoveries.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/discoveries.d.ts#L12)

Marks an element type as discovered for the player.

#### Parameters

##### elementType

[`ElementType`](api/sandkit.api.elements.md#elementtype)

Numeric element type id.

#### Returns

`void`

***

### addTerrainByType() :id=addterrainbytype

<p class="smt-member-path"><code>sandkit.api.discoveries.addTerrainByType()</code></p>

```ts
addTerrainByType(terrainType: TerrainType): void
```

Defined in: [sandkit/api/discoveries.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/discoveries.d.ts#L17)

Marks a terrain type as discovered for the player.

#### Parameters

##### terrainType

[`TerrainType`](api/sandkit.api.terrains.worker.md#terraintype)

Numeric terrain type id.

#### Returns

`void`
