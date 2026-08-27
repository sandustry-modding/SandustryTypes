# sandkit.api.utils

## Functions <!-- {docsify-ignore} -->

### getDistance() :id=getdistance

<p class="smt-member-path"><code>sandkit.api.utils.getDistance()</code></p>

```ts
getDistance(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L18)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getDistance`

***

### getDirection() :id=getdirection

<p class="smt-member-path"><code>sandkit.api.utils.getDirection()</code></p>

```ts
getDirection(pointA: Vector2, pointB: Vector2): Vector2
```

Defined in: [sandkit/api/utils.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L27)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getDirection`

***

### getAngle() :id=getangle

<p class="smt-member-path"><code>sandkit.api.utils.getAngle()</code></p>

```ts
getAngle(pointA: Vector2, pointB: Vector2): number
```

Defined in: [sandkit/api/utils.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L36)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getAngle`

***

### getCoordinatesBetweenCells() :id=getcoordinatesbetweencells

<p class="smt-member-path"><code>sandkit.api.utils.getCoordinatesBetweenCells()</code></p>

```ts
getCoordinatesBetweenCells(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L45)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getCoordinatesBetweenCells`

***

### ~~getCoordinatesBetweenPoints()~~

```ts
getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[]
```

Defined in: [sandkit/api/utils.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L51)

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

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.utils.getCoordinatesBetweenCells`
