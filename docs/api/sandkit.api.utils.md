# sandkit.api.utils

## Functions <!-- {docsify-ignore} -->

### getDistance() :id=getdistance

```ts
sandkit.api.utils.getDistance(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L19)

Return distance between two points.

#### Parameters

##### pointA

[`Vector2`](api/shared.player.md#vector2)

First point.

##### pointB

[`Vector2`](api/shared.player.md#vector2)

Second point.

#### Returns

`number`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDirection() :id=getdirection

```ts
sandkit.api.utils.getDirection(pointA: Vector2, pointB: Vector2): Vector2
```

Defined in: [sandkit/api/utils.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L29)

Return normalized direction from point A to point B.

#### Parameters

##### pointA

[`Vector2`](api/shared.player.md#vector2)

Origin point.

##### pointB

[`Vector2`](api/shared.player.md#vector2)

Target point.

#### Returns

[`Vector2`](api/shared.player.md#vector2)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getAngle() :id=getangle

```ts
sandkit.api.utils.getAngle(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L39)

Return angle in radians from point A to point B.

#### Parameters

##### pointA

[`Vector2`](api/shared.player.md#vector2)

Origin point.

##### pointB

[`Vector2`](api/shared.player.md#vector2)

Target point.

#### Returns

`number`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getCoordinatesBetweenCells() :id=getcoordinatesbetweencells

```ts
sandkit.api.utils.getCoordinatesBetweenCells(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L49)

Return grid cells along a line between two points.

#### Parameters

##### pointA

[`Vector2`](api/shared.player.md#vector2)

Line start in cell coordinates.

##### pointB

[`Vector2`](api/shared.player.md#vector2)

Line end in cell coordinates.

#### Returns

[`Vector2`](api/shared.player.md#vector2)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~getCoordinatesBetweenPoints()~~ :id=getcoordinatesbetweenpoints

```ts
sandkit.api.utils.getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L56)

#### Parameters

##### pointA

[`Vector2`](api/shared.player.md#vector2)

##### pointB

[`Vector2`](api/shared.player.md#vector2)

#### Returns

[`Vector2`](api/shared.player.md#vector2)[]

#### Deprecated

Use [getCoordinatesBetweenCells](#getcoordinatesbetweencells) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
