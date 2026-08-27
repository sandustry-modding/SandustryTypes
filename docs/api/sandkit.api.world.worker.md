# sandkit.api.world (worker)

**`Internal`**

Shared `sandkit.api.world` base — cell and terrain queries plus excavation.

Main thread adds idle scheduling and fog helpers on top of this shape.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.world.ExcavateOptions (worker) :id=excavateoptions

Defined in: [shared/api/world.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L55)

Flags that control how [excavateAtCell](#excavateatcell) resolves damage and drops.

#### Properties

##### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [shared/api/world.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L57)

Treat the dig as gun fire for terrain resistance checks.

##### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [shared/api/world.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L59)

Treat the dig as rocket or dynamite explosion damage.

##### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [shared/api/world.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L61)

Treat the dig as drill damage.

##### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [shared/api/world.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L63)

Use outVelocity literally instead of deriving ejection speed.

##### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [shared/api/world.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L65)

Allow removing terrain marked non-destructible.

##### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [shared/api/world.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L67)

Force-remove all matched cells regardless of normal rules.

##### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [shared/api/world.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L69)

Extra drill-tier damage when [fromDrill](#fromdrill) is true. Clamped to 0–1000.

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.world.CellId (worker) :id=cellid

```ts
CellId = CellId
```

Defined in: [shared/api/world.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L52)

Packed cell id from [getCellIdAtCell](#getcellidatcell).

## Functions <!-- {docsify-ignore} -->

### sandkit.api.world.getCellIdAtCell() (worker) :id=getcellidatcell

```ts
getCellIdAtCell(...args: CellCoordinates): CellId
```

Defined in: [shared/api/world.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L18)

Return the packed cell id at grid coordinates.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id for the cell.

***

### sandkit.api.world.isCellEmptyAtCell() (worker) :id=iscellemptyatcell

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/world.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L25)

Return true when the cell has no element or terrain content.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

***

### sandkit.api.world.isTerrainAtCell() (worker) :id=isterrainatcell

```ts
isTerrainAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/world.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L32)

Return true when the cell holds terrain (not an element).

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

***

### sandkit.api.world.reportActivityAtCell() (worker) :id=reportactivityatcell

```ts
reportActivityAtCell(...args: CellCoordinates): void
```

Defined in: [shared/api/world.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L39)

Mark the cell active for simulation this tick.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

***

### sandkit.api.world.excavateAtCell() (worker) :id=excavateatcell

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

Defined in: [shared/api/world.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/world.d.ts#L49)

Apply excavation damage and eject velocity at a cell.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](#excavateoptions)\]

#### Returns

`void`
