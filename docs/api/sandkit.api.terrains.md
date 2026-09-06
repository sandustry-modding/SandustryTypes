# sandkit.api.terrains

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDefinition :id=terraindefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L55" target="_blank" rel="noopener">terrains.d.ts:55</a></p>

| Property | Type | Description |
| --- | --- | --- |
| interactions? | readonly Interaction[] | Tooltip interactions shown for this terrain. |

<div class="smt-member-anchors">

##### interactions? <!-- {docsify-ignore} -->

</div>

Terrain definition shape with typed element interactions.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Extends

- `Omit`\<[`TerrainDefinition`](api/sandkit.api.terrains.worker.md?id=terraindefinition), `"interactions"`\>

#### Indexable

```ts
[key: string]: unknown
```

```ts
[key: number]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L71" target="_blank" rel="noopener">terrains.d.ts:71</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.register(definition: TerrainDefinition): object">

```ts
register(definition: TerrainDefinition): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`TerrainDefinition`](?id=terraindefinition) | Terrain definition to register. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register a new terrain definition.

Object with the assigned `cellType`. cellType: TerrainType

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L81" target="_blank" rel="noopener">terrains.d.ts:81</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.updateDefinition(cellTypeOrId: TerrainRef, partial: Partial&lt;TerrainDefinition&gt;): void">

```ts
updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellTypeOrId | [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref) | Numeric cell type or terrain string id. |
| partial | `Partial`\<[`TerrainDefinition`](?id=terraindefinition)\> | Fields to merge onto the definition. |

<div class="smt-member-anchors">

##### cellTypeOrId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

</div>

Patch fields on an existing terrain definition.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L96" target="_blank" rel="noopener">terrains.d.ts:96</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.terrains.createAtCellWhenIdle~~ :id=createatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L105" target="_blank" rel="noopener">terrains.d.ts:105</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
createAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [createAtCell](?id=createatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L119" target="_blank" rel="noopener">terrains.d.ts:119</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.terrains.replaceAtCellWhenIdle~~ :id=replaceatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L128" target="_blank" rel="noopener">terrains.d.ts:128</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
replaceAtCellWhenIdle(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [replaceAtCell](?id=replaceatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L141" target="_blank" rel="noopener">terrains.d.ts:141</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void">

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.terrains.removeAtCellWhenIdle~~ :id=removeatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L150" target="_blank" rel="noopener">terrains.d.ts:150</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void">

```ts
removeAtCellWhenIdle(...args: number, number, [TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [removeAtCell](?id=removeatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.setHitPointsAtCell :id=sethitpointsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L163" target="_blank" rel="noopener">terrains.d.ts:163</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHitPointsAtCell(...args: [number, number, number]): void">

```ts
setHitPointsAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.terrains.setHpAtCell~~ :id=sethpatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L170" target="_blank" rel="noopener">terrains.d.ts:170</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHpAtCell(...args: [number, number, number]): boolean">

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setHitPointsAtCell](?id=sethitpointsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.terrains.setHpAtCellWhenIdle~~ :id=sethpatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/terrains.d.ts#L177" target="_blank" rel="noopener">terrains.d.ts:177</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHpAtCellWhenIdle(...args: [number, number, number]): void">

```ts
setHpAtCellWhenIdle(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setHitPointsAtCell](?id=sethitpointsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>
