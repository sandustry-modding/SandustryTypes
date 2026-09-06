# sandkit.api.building

`sandkit.api.building` — structure placement and built-in structure types.
Main thread only.

## Enumerations <!-- {docsify-ignore} -->

- [StructureType](api/sandkit.api.building.StructureType.md)

## Functions <!-- {docsify-ignore} -->

### getSnappedPositionAtCell() :id=getsnappedpositionatcell

```ts
sandkit.api.building.getSnappedPositionAtCell(...args: CellCoordinates): Vector2
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

```ts
sandkit.api.building.isBlockedAtCell(...args: CellCoordinates): boolean
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

```ts
sandkit.api.building.cancelPlacement(): void
```

Defined in: [sandkit/api/building.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L84)

Cancel the current structure placement preview.

#### Returns

`void`

***

### selectStructure() :id=selectstructure

```ts
sandkit.api.building.selectStructure(structureTypeOrId: StructureRef | StructureType): StructureRef | null
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
