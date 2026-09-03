# sandkit.api.terrains

## Interfaces <!-- {docsify-ignore} -->

### TerrainDefinition :id=terraindefinition

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDefinition</code></p>

Defined in: [sandkit/api/terrains.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L56)

Terrain definition shape with typed element interactions.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

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

Defined in: [sandkit/api/terrains.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L58)

Tooltip interactions shown for this terrain.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.terrains.register()</code></p>

```ts
register(definition: TerrainDefinition): object
```

Defined in: [sandkit/api/terrains.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L69)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.terrains.updateDefinition()</code></p>

```ts
updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

Defined in: [sandkit/api/terrains.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L79)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### createAtCell() :id=createatcell

<p class="smt-member-path"><code>sandkit.api.terrains.createAtCell()</code></p>

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L91)

Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~createAtCellWhenIdle()~~

```ts
createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L98)

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### Deprecated

Use [createAtCell](#createatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### replaceAtCell() :id=replaceatcell

<p class="smt-member-path"><code>sandkit.api.terrains.replaceAtCell()</code></p>

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L110)

Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~replaceAtCellWhenIdle()~~

```ts
replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L117)

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### removeAtCell() :id=removeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L128)

Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/terrains.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L135)

#### Parameters

##### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

#### Returns

`void`

#### Deprecated

Use [removeAtCell](#removeatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setHitPointsAtCell() :id=sethitpointsatcell

<p class="smt-member-path"><code>sandkit.api.terrains.setHitPointsAtCell()</code></p>

```ts
setHitPointsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L146)

Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~setHpAtCell()~~

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [sandkit/api/terrains.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L153)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

#### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~setHpAtCellWhenIdle()~~

```ts
setHpAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/terrains.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L160)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

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

### meltAtCell :id=meltatcell

<p class="smt-member-path"><code>sandkit.api.terrains.meltAtCell</code></p>

Re-exports [meltAtCell](api/sandkit.api.terrains.worker.md#meltatcell)

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
