# sandkit.api.resources

## Functions <!-- {docsify-ignore} -->

### collectFluxiteAtCell() :id=collectfluxiteatcell

```ts
sandkit.api.resources.collectFluxiteAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/resources.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/resources.d.ts#L16)

Collect fluxite at the given cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

***

### updateEnergy() :id=updateenergy

```ts
sandkit.api.resources.updateEnergy(amount: number, options?: object): void
```

Defined in: [sandkit/api/resources.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/resources.d.ts#L27)

Update stored energy by amount with optional UI deferral.

#### Parameters

##### amount

`number`

Energy delta (positive or negative).

##### options?

When `deferUi` is true, skip immediate UI refresh.

###### deferUi?

`boolean`

#### Returns

`void`

#### Example

**Official \`api.resources.adjustEnergy\` (typed deprecated alias: updateEnergy)**

```ts
api.resources.adjustEnergy(100, { deferUi: true });
```
