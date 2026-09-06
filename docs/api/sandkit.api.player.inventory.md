# sandkit.api.player.inventory

Player inventory helpers.

## Functions <!-- {docsify-ignore} -->

### addById() :id=addbyid

```ts
sandkit.api.player.inventory.addById(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L117)

Add an item to inventory by item id.

#### Parameters

##### itemId

`string`

Registered item id string.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~addFromId()~~ :id=addfromid

```ts
sandkit.api.player.inventory.addFromId(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L124)

#### Parameters

##### itemId

`string`

#### Returns

`void`

#### Deprecated

Use [addById](#addbyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
