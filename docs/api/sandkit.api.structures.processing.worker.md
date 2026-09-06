# sandkit.api.structures.processing (worker)

Structure processing enablement checks.

## Functions <!-- {docsify-ignore} -->

### isEnabledAtCell() :id=isenabledatcell

```ts
sandkit.api.structures.processing.isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L207)

Return true when processing is enabled at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~isEnabledAt()~~ :id=isenabledat

```ts
sandkit.api.structures.processing.isEnabledAt(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L214)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### Deprecated

Use [isEnabledAtCell](#isenabledatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
