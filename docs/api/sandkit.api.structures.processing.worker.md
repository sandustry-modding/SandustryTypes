# sandkit.api.structures.processing (worker)

Structure processing enablement checks.

## Functions <!-- {docsify-ignore} -->

### isEnabledAtCell() :id=isenabledatcell

<p class="smt-member-path"><code>sandkit.api.structures.processing.isEnabledAtCell() (worker)</code></p>

```ts
isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L190)

Return true when processing is enabled at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~isEnabledAt()~~

```ts
isEnabledAt(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L197)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### Deprecated

Use [isEnabledAtCell](#isenabledatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
