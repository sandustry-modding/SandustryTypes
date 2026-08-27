# sandkit.api.structures.processing (worker)

Structure processing enablement checks.

## Functions <!-- {docsify-ignore} -->

### isEnabledAtCell() :id=isenabledatcell

<p class="smt-member-path"><code>sandkit.api.structures.processing.isEnabledAtCell() (worker)</code></p>

```ts
isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L153)

Return true when processing is enabled at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Worker entry `api.structures.processing.isEnabledAtCell`

***

### ~~isEnabledAt()~~

```ts
isEnabledAt(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L159)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### Deprecated

Use [isEnabledAtCell](#isenabledatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.processing.isEnabledAtCell`
