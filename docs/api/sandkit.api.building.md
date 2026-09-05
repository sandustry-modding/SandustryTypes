# sandkit.api.building

`sandkit.api.building` — structure placement and built-in structure types.
Main thread only.

## Enumerations <!-- {docsify-ignore} -->

- [StructureType](api/sandkit.api.building.StructureType.md)

## Functions <!-- {docsify-ignore} -->

### getSnappedPositionAtCell() :id=getsnappedpositionatcell

<p class="smt-member-path"><code>sandkit.api.building.getSnappedPositionAtCell()</code></p>

```ts
getSnappedPositionAtCell(...args: CellCoordinates): Vector2
```

Defined in: [sandkit/api/building.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L73)

Return the snapped world position for placement at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`Vector2`](api/shared.player.md#vector2)

Snapped world position in pixels.

***

### isBlockedAtCell() :id=isblockedatcell

<p class="smt-member-path"><code>sandkit.api.building.isBlockedAtCell()</code></p>

```ts
isBlockedAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/building.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L81)

Return true when placement is blocked at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when a structure cannot be placed at the cell.

***

### cancelPlacement() :id=cancelplacement

<p class="smt-member-path"><code>sandkit.api.building.cancelPlacement()</code></p>

```ts
cancelPlacement(): void
```

Defined in: [sandkit/api/building.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L84)

Cancel the current structure placement preview.

#### Returns

`void`

***

### selectStructure() :id=selectstructure

<p class="smt-member-path"><code>sandkit.api.building.selectStructure()</code></p>

```ts
selectStructure(structureTypeOrId: StructureRef | StructureType): StructureRef | null
```

Defined in: [sandkit/api/building.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L91)

Select a structure for placement by type or id.

#### Parameters

##### structureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref) \| [`StructureType`](api/sandkit.api.building.StructureType.md)

Built-in [StructureType](api/sandkit.api.building.StructureType.md) value or registered structure id.

#### Returns

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref) \| `null`

Resolved selection, or null when the type or id is invalid.
