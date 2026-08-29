# sandkit.api.player.inventory

Player inventory helpers.

## Functions <!-- {docsify-ignore} -->

### addById() :id=addbyid

<p class="smt-member-path"><code>sandkit.api.player.inventory.addById()</code></p>

```ts
addById(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L108)

Add an item to inventory by item id.

#### Parameters

##### itemId

`string`

Registered item id string.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.inventory.addById`

***

### ~~addFromId()~~

```ts
addFromId(itemId: string): void
```

Defined in: [sandkit/api/player.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L114)

#### Parameters

##### itemId

`string`

#### Returns

`void`

#### Deprecated

Use [addById](#addbyid) instead.

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.inventory.addById`
