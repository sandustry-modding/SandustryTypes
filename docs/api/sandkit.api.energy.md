# sandkit.api.energy

`sandkit.api.energy` — structure energy networks, storage, and consumption.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### EnergyRegisterTypeOptions :id=energyregistertypeoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyRegisterTypeOptions</code></p>
Defined in: [sandkit/api/energy.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L75)

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

Defined in: [sandkit/api/energy.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L77)

Maximum stored energy for storage nodes.

##### energyType?

```ts
optional energyType?: string
```

Defined in: [sandkit/api/energy.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L79)

Energy type id when multiple networks exist.

***

### EnergyAddOptions :id=energyaddoptions

<p class="smt-member-path"><code>sandkit.api.energy.EnergyAddOptions</code></p>
Defined in: [sandkit/api/energy.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L84)

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

Defined in: [sandkit/api/energy.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L86)

Energy type id when multiple networks exist.

## Functions <!-- {docsify-ignore} -->

### registerType() :id=registertype

```ts
sandkit.api.energy.registerType(structureId: string, type: "storage" | "conductor", options?: EnergyRegisterTypeOptions): void
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

```ts
sandkit.api.energy.addAtCell(...args: number, number, number, [EnergyAddOptions]): number
```

Defined in: [sandkit/api/energy.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L26)

Adds energy at a cell. Returns the amount actually added.

#### Parameters

##### args

...\[`number`, `number`, `number`, [`EnergyAddOptions`](#energyaddoptions)\]

#### Returns

`number`

***

### consume() :id=consume

```ts
sandkit.api.energy.consume(amount: number, options?: object): number
```

Defined in: [sandkit/api/energy.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L34)

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

```ts
sandkit.api.energy.consumeExcludingNetworkAtCell(...args: [number, number, number]): number
```

Defined in: [sandkit/api/energy.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L46)

Consumes energy from networks other than the one at the cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`number`

***

### getNetworkAtCell() :id=getnetworkatcell

```ts
sandkit.api.energy.getNetworkAtCell(...args: CellCoordinates): object[]
```

Defined in: [sandkit/api/energy.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L62)

Returns energy network nodes connected at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`object`[]

#### Example

```ts
const network = api.energy.getNetworkAtCell(cellX, cellY);
for (const entry of network) {
  useNetworkCell(entry.cellX, entry.cellY, entry.type);
}
```

***

### getNetworkFreeCapacityAtCell() :id=getnetworkfreecapacityatcell

```ts
sandkit.api.energy.getNetworkFreeCapacityAtCell(...args: CellCoordinates): number
```

Defined in: [sandkit/api/energy.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L72)

Returns free storage capacity in the network at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`number`
