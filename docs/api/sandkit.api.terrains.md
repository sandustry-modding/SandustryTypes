# sandkit.api.terrains

## Interfaces <!-- {docsify-ignore} -->

### TerrainDefinition :id=terraindefinition

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDefinition</code></p>

Defined in: [sandkit/api/terrains.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L53)

Terrain definition shape with typed element interactions.

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.register`

#### Extends

- `Omit`\<[`TerrainDefinition`](api/sandkit.api.terrains.worker.md#terraindefinition), `"interactions"`\>

#### Indexable

```ts
[key: string]: unknown
```

```ts
[key: number]: unknown
```

#### Properties

##### interactions?

```ts
optional interactions?: readonly Interaction[]
```

Defined in: [sandkit/api/terrains.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L55)

Tooltip interactions shown for this terrain.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.terrains.register()</code></p>

```ts
register(definition: TerrainDefinition): object
```

Defined in: [sandkit/api/terrains.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L65)

Register a new terrain definition.

#### Parameters

##### definition

[`TerrainDefinition`](#terraindefinition)

Terrain definition to register.

#### Returns

`object`

Object with the assigned `cellType`.

##### cellType

```ts
cellType: TerrainType
```

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.register`

***

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.terrains.updateDefinition()</code></p>

```ts
updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

Defined in: [sandkit/api/terrains.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L74)

Patch fields on an existing terrain definition.

#### Parameters

##### cellTypeOrId

[`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref)

Numeric cell type or terrain string id.

##### partial

`Partial`\<[`TerrainDefinition`](#terraindefinition)\>

Fields to merge onto the definition.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.updateDefinition`

***

### createAtCell() :id=createatcell

<p class="smt-member-path"><code>sandkit.api.terrains.createAtCell()</code></p>

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L85)

Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.createAtCell`

***

### ~~createAtCellWhenIdle()~~

```ts
createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L91)

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### Deprecated

Use [createAtCell](#createatcell) instead.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.createAtCell`

***

### replaceAtCell() :id=replaceatcell

<p class="smt-member-path"><code>sandkit.api.terrains.replaceAtCell()</code></p>

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L102)

Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.replaceAtCell`

***

### ~~replaceAtCellWhenIdle()~~

```ts
replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L108)

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.replaceAtCell`

***

### removeAtCell() :id=removeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L118)

Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.removeAtCell`

***

### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L124)

#### Parameters

##### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### Deprecated

Use [removeAtCell](#removeatcell) instead.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.removeAtCell`

***

### setHitPointsAtCell() :id=sethitpointsatcell

<p class="smt-member-path"><code>sandkit.api.terrains.setHitPointsAtCell()</code></p>

```ts
setHitPointsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L134)

Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.setHitPointsAtCell`

***

### ~~setHpAtCell()~~

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [sandkit/api/terrains.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L140)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

#### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`

***

### ~~setHpAtCellWhenIdle()~~

```ts
setHpAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L146)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`

## References <!-- {docsify-ignore} -->

### getIdByType :id=getidbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getIdByType</code></p>

Re-exports [getIdByType](api/sandkit.api.terrains.worker.md#getidbytype)

***

### getTypeById :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeById</code></p>

Re-exports [getTypeById](api/sandkit.api.terrains.worker.md#gettypebyid)

***

### getTypeFromId :id=gettypefromid

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeFromId</code></p>

Re-exports [getTypeFromId](api/sandkit.api.terrains.worker.md#gettypefromid)

***

### getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getDefinitionByType</code></p>

Re-exports [getDefinitionByType](api/sandkit.api.terrains.worker.md#getdefinitionbytype)

***

### getTypeAtCell :id=gettypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeAtCell</code></p>

Re-exports [getTypeAtCell](api/sandkit.api.terrains.worker.md#gettypeatcell)

***

### getDataAtCell :id=getdataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getDataAtCell</code></p>

Re-exports [getDataAtCell](api/sandkit.api.terrains.worker.md#getdataatcell)

***

### isAtCell :id=isatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isAtCell</code></p>

Re-exports [isAtCell](api/sandkit.api.terrains.worker.md#isatcell)

***

### isTypeAtCell :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isTypeAtCell</code></p>

Re-exports [isTypeAtCell](api/sandkit.api.terrains.worker.md#istypeatcell)

***

### isCellIdTerrain :id=iscellidterrain

<p class="smt-member-path"><code>sandkit.api.terrains.isCellIdTerrain</code></p>

Re-exports [isCellIdTerrain](api/sandkit.api.terrains.worker.md#iscellidterrain)

***

### damageAtCell :id=damageatcell

<p class="smt-member-path"><code>sandkit.api.terrains.damageAtCell</code></p>

Re-exports [damageAtCell](api/sandkit.api.terrains.worker.md#damageatcell)

***

### TerrainMutationOptions :id=terrainmutationoptions

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainMutationOptions</code></p>

Re-exports [TerrainMutationOptions](api/sandkit.api.terrains.worker.md#terrainmutationoptions)

***

### TerrainType :id=terraintype

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainType</code></p>

Re-exports [TerrainType](api/sandkit.api.terrains.worker.md#terraintype)

***

### TerrainId :id=terrainid

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainId</code></p>

Re-exports [TerrainId](api/sandkit.api.terrains.worker.md#terrainid)

***

### TerrainRef :id=terrainref

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainRef</code></p>

Re-exports [TerrainRef](api/sandkit.api.terrains.worker.md#terrainref)

***

### TerrainDataAtCell :id=terraindataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDataAtCell</code></p>

Re-exports [TerrainDataAtCell](api/sandkit.api.terrains.worker.md#terraindataatcell)
