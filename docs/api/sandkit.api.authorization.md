# sandkit.api.authorization

`sandkit.api.authorization` — player permission checks for build, grab, and tools.
Main thread only.

## Functions <!-- {docsify-ignore} -->

### canBuildAtCell() :id=canbuildatcell

```ts
sandkit.api.authorization.canBuildAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/authorization.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L14)

Return true when the player may place a structure at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when building is allowed in the authorization zone.

***

### canGrabAtCell() :id=cangrabatcell

```ts
sandkit.api.authorization.canGrabAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/authorization.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L22)

Return true when the player may grab at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when grabbing is allowed in the authorization zone.

***

### canUseTool() :id=canusetool

```ts
sandkit.api.authorization.canUseTool(player: Player, isFlamethrower?: boolean): boolean
```

Defined in: [sandkit/api/authorization.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L30)

Return true when the player may use a tool.

#### Parameters

##### player

[`Player`](api/shared.player.md#player)

Player state snapshot.

##### isFlamethrower?

`boolean`

When true, apply flamethrower-specific rules.

#### Returns

`boolean`

True when tool use is allowed for the player.

***

### canUseToolAtCell() :id=canusetoolatcell

```ts
sandkit.api.authorization.canUseToolAtCell(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/authorization.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L39)

Return true when the player may use a tool at the cell.

#### Parameters

##### args

...\[`number`, `number`, `boolean`\]

#### Returns

`boolean`

True when tool use is allowed at the cell.

***

### getZoneIdAtCell() :id=getzoneidatcell

```ts
sandkit.api.authorization.getZoneIdAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/authorization.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L49)

Return the authorization zone id at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`number`

Numeric zone id for the cell.

***

### getPlayerZoneId() :id=getplayerzoneid

```ts
sandkit.api.authorization.getPlayerZoneId(): number
```

Defined in: [sandkit/api/authorization.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L55)

Return the authorization zone id for the player.

#### Returns

`number`

Numeric zone id for the player's current position.
