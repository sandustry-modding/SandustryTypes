# sandkit.api.energy

`sandkit.api.energy` — structure energy networks, storage, and consumption.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### EnergyRegisterTypeOptions :id=energyregistertypeoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyRegisterTypeOptions</code></p>

Defined in: [sandkit/api/energy.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L56)

Options for [registerType](#registertype).

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### capacity?

```ts
optional capacity?: number
```

Defined in: [sandkit/api/energy.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L58)

Maximum stored energy for storage nodes.

##### energyType?

```ts
optional energyType?: string
```

Defined in: [sandkit/api/energy.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L60)

Energy type id when multiple networks exist.

***

### EnergyAddOptions :id=energyaddoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyAddOptions</code></p>

Defined in: [sandkit/api/energy.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L65)

Options for [addAtCell](#addatcell).

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### energyType?

```ts
optional energyType?: string
```

Defined in: [sandkit/api/energy.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L67)

Energy type id when multiple networks exist.

## Functions <!-- {docsify-ignore} -->

### registerType() :id=registertype

<p class="smt-member-path"><code>sandkit.api.energy.registerType()</code></p>

```ts
registerType(structureId: string, type: "storage" | "conductor", options?: EnergyRegisterTypeOptions): void
```

Defined in: [sandkit/api/energy.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L14)

Registers an energy type on a structure as conductor or storage.

#### Parameters

##### structureId

`string`

Structure type id string.

##### type

`"storage"` \| `"conductor"`

`conductor` forwards energy; `storage` holds energy.

##### options?

[`EnergyRegisterTypeOptions`](#energyregistertypeoptions)

Capacity and energy-type options for storage nodes.

#### Returns

`void`

***

### addAtCell() :id=addatcell

<p class="smt-member-path"><code>sandkit.api.energy.addAtCell()</code></p>

```ts
addAtCell(...args: number, number, number, [EnergyAddOptions]): number
```

Defined in: [sandkit/api/energy.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L22)

Adds energy at a cell. Returns the amount actually added.

#### Parameters

##### args

...\[`number`, `number`, `number`, [`EnergyAddOptions`](#energyaddoptions)\]

#### Returns

`number`

***

### consume() :id=consume

<p class="smt-member-path"><code>sandkit.api.energy.consume()</code></p>

```ts
consume(amount: number, options?: object): number
```

Defined in: [sandkit/api/energy.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L28)

Consumes energy from the global pool. Returns the amount consumed.

#### Parameters

##### amount

`number`

Energy amount to consume.

##### options?

When `allOrNothing` is true, consume zero unless the full amount is available.

###### allOrNothing?

`boolean`

#### Returns

`number`

***

### consumeExcludingNetworkAtCell() :id=consumeexcludingnetworkatcell

<p class="smt-member-path"><code>sandkit.api.energy.consumeExcludingNetworkAtCell()</code></p>

```ts
consumeExcludingNetworkAtCell(...args: [number, number, number]): number
```

Defined in: [sandkit/api/energy.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L37)

Consumes energy from networks other than the one at the cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`number`

***

### getNetworkAtCell() :id=getnetworkatcell

<p class="smt-member-path"><code>sandkit.api.energy.getNetworkAtCell()</code></p>

```ts
getNetworkAtCell(...args: CellCoordinates): object[]
```

Defined in: [sandkit/api/energy.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L43)

Returns energy network nodes connected at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`object`[]

***

### getNetworkFreeCapacityAtCell() :id=getnetworkfreecapacityatcell

<p class="smt-member-path"><code>sandkit.api.energy.getNetworkFreeCapacityAtCell()</code></p>

```ts
getNetworkFreeCapacityAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/energy.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L53)

Returns free storage capacity in the network at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`number`
