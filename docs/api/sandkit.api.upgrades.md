# sandkit.api.upgrades

## Interfaces <!-- {docsify-ignore} -->

### UpgradeDefinition :id=upgradedefinition

<p class="smt-member-path"><code>sandkit.api.upgrades.UpgradeDefinition</code></p>

Defined in: [sandkit/api/upgrades.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L50)

Upgrade definition registered for an item.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### itemId

```ts
itemId: string
```

Defined in: [sandkit/api/upgrades.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L51)

##### itemNameKey?

```ts
optional itemNameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L52)

##### categoryId?

```ts
optional categoryId?: string
```

Defined in: [sandkit/api/upgrades.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L53)

##### upgrade

```ts
upgrade: object
```

Defined in: [sandkit/api/upgrades.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L54)

###### id

```ts
id: string
```

###### nameKey?

```ts
optional nameKey?: string
```

###### descriptionKey?

```ts
optional descriptionKey?: string
```

###### maxLevel

```ts
maxLevel: number
```

###### costs

```ts
costs: number[]
```

###### oneOff?

```ts
optional oneOff?: boolean
```

***

### UpgradeCategoryDefinition :id=upgradecategorydefinition

<p class="smt-member-path"><code>sandkit.api.upgrades.UpgradeCategoryDefinition</code></p>

Defined in: [sandkit/api/upgrades.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L66)

Upgrade category definition shape.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string
```

Defined in: [sandkit/api/upgrades.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L68)

Category identifier referenced by upgrades.

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/upgrades.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L70)

Display name translation key.

## Functions <!-- {docsify-ignore} -->

### registerCategory() :id=registercategory

<p class="smt-member-path"><code>sandkit.api.upgrades.registerCategory()</code></p>

```ts
registerCategory(definition: UpgradeCategoryDefinition): void
```

Defined in: [sandkit/api/upgrades.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L13)

Register an upgrade category.

#### Parameters

##### definition

[`UpgradeCategoryDefinition`](#upgradecategorydefinition)

Category id and display metadata.

#### Returns

`void`

***

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.upgrades.register()</code></p>

```ts
register(definition: UpgradeDefinition): void
```

Defined in: [sandkit/api/upgrades.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L18)

Register an upgrade definition.

#### Parameters

##### definition

[`UpgradeDefinition`](#upgradedefinition)

Item id, upgrade id, costs, and level metadata.

#### Returns

`void`

***

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.upgrades.updateDefinition()</code></p>

```ts
updateDefinition(itemId: string, upgradeId: string, partial: Partial<UpgradeDefinition>): void
```

Defined in: [sandkit/api/upgrades.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L25)

Patch fields on an existing upgrade definition.

#### Parameters

##### itemId

`string`

Parent item id.

##### upgradeId

`string`

Upgrade id within the item.

##### partial

`Partial`\<[`UpgradeDefinition`](#upgradedefinition)\>

Fields to merge into the definition.

#### Returns

`void`

***

### getLevelById() :id=getlevelbyid

<p class="smt-member-path"><code>sandkit.api.upgrades.getLevelById()</code></p>

```ts
getLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L31)

Return the current purchased level for an upgrade.

#### Parameters

##### itemId

`string`

Parent item id.

##### upgradeId

`string`

Upgrade id within the item.

#### Returns

`number`

***

### getAvailableLevelById() :id=getavailablelevelbyid

<p class="smt-member-path"><code>sandkit.api.upgrades.getAvailableLevelById()</code></p>

```ts
getAvailableLevelById(itemId: string, upgradeId: string): number
```

Defined in: [sandkit/api/upgrades.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L37)

Return the maximum available level for an upgrade.

#### Parameters

##### itemId

`string`

Parent item id.

##### upgradeId

`string`

Upgrade id within the item.

#### Returns

`number`

***

### setLevelById() :id=setlevelbyid

<p class="smt-member-path"><code>sandkit.api.upgrades.setLevelById()</code></p>

```ts
setLevelById(itemId: string, upgradeId: string, level: number): void
```

Defined in: [sandkit/api/upgrades.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/upgrades.d.ts#L47)

Set the purchased level for an upgrade.

#### Parameters

##### itemId

`string`

Parent item id.

##### upgradeId

`string`

Upgrade id within the item.

##### level

`number`

Level to set.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
