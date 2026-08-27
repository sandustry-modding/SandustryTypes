# sandkit.api.items

`sandkit.api.items` — register custom inventory items and query active items.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.items.ItemDefinition :id=itemdefinition

Defined in: [sandkit/api/items.d.ts:10](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L10)

Definition for a mod-registered inventory item.

#### Type Parameters

##### State

`State` = `unknown`

##### Action

`Action` = `unknown`

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### handleAction?

```ts
optional handleAction?: (state: State, action: Action) => unknown
```

Defined in: [sandkit/api/items.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L12)

Handles item use actions.

###### Parameters

###### state

`State`

###### action

`Action`

###### Returns

`unknown`

##### afterRender?

```ts
optional afterRender?: (state: State) => void
```

Defined in: [sandkit/api/items.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L14)

Called after the item is rendered each frame.

###### Parameters

###### state

`State`

###### Returns

`void`

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.items.ItemId :id=itemid

```ts
ItemId = ItemId | LooseString<never>
```

Defined in: [sandkit/api/items.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L52)

Inventory item id.
Built-in [ItemIdEnum](api/sandkit.enums.ItemId.md) values autocomplete; custom string ids are allowed.

***

### sandkit.api.items.ItemType :id=itemtype

```ts
ItemType = ItemType | TaggedNumber<"itemType">
```

Defined in: [sandkit/api/items.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L57)

Item category handle.
Built-in [ItemTypeEnum](api/sandkit.enums.ItemType.md) values autocomplete.

***

### sandkit.api.items.ModItem :id=moditem

```ts
ModItem = unknown
```

Defined in: [sandkit/api/items.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L59)

Runtime item instance (not yet typed in declarations).

## Functions <!-- {docsify-ignore} -->

### sandkit.api.items.register() :id=register

```ts
register(definition: ItemDefinition): void
```

Defined in: [sandkit/api/items.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L22)

Registers a new item definition.

#### Parameters

##### definition

[`ItemDefinition`](#itemdefinition)

Item id, handlers, and display metadata.

#### Returns

`void`

***

### sandkit.api.items.updateDefinition() :id=updatedefinition

```ts
updateDefinition(itemId: ItemId, partial: Partial<ItemDefinition>): void
```

Defined in: [sandkit/api/items.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L28)

Updates fields on an existing item definition.

#### Parameters

##### itemId

[`ItemId`](#itemid)

Registered item id.

##### partial

`Partial`\<[`ItemDefinition`](#itemdefinition)\>

Fields to merge into the definition.

#### Returns

`void`

***

### sandkit.api.items.getDefinitionById() :id=getdefinitionbyid

```ts
getDefinitionById(itemId: ItemId): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L33)

Returns the item definition for an id, or undefined.

#### Parameters

##### itemId

[`ItemId`](#itemid)

Registered item id.

#### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

### sandkit.api.items.createFromId() :id=createfromid

```ts
createFromId(itemId: ItemId): unknown
```

Defined in: [sandkit/api/items.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L38)

Creates a runtime item instance from an id.

#### Parameters

##### itemId

[`ItemId`](#itemid)

Registered item id.

#### Returns

`unknown`

***

### sandkit.api.items.getActive() :id=getactive

```ts
getActive(): ItemDefinition<unknown, unknown> | undefined
```

Defined in: [sandkit/api/items.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L40)

Returns the item definition for the active hotbar slot.

#### Returns

[`ItemDefinition`](#itemdefinition)\<`unknown`, `unknown`\> \| `undefined`

***

### sandkit.api.items.isActiveById() :id=isactivebyid

```ts
isActiveById(itemId: ItemId, itemType?: ItemType): boolean
```

Defined in: [sandkit/api/items.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/items.d.ts#L46)

Returns true when the given item is the active hotbar item.

#### Parameters

##### itemId

[`ItemId`](#itemid)

Item id or numeric type to compare.

##### itemType?

[`ItemType`](#itemtype)

Optional item type discriminator.

#### Returns

`boolean`
