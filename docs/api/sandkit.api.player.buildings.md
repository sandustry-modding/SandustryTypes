# sandkit.api.player.buildings

Player building unlock helpers.

## Functions <!-- {docsify-ignore} -->

### unlockById() :id=unlockbyid

<p class="smt-member-path"><code>sandkit.api.player.buildings.unlockById()</code></p>

```ts
unlockById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L137)

Unlock a structure type for building.

#### Parameters

##### structureId

`string`

Registered structure id string.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~unlockByType()~~

```ts
unlockByType(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L144)

#### Parameters

##### structureId

`string`

#### Returns

`void`

#### Deprecated

Use [unlockById](#unlockbyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### removeById() :id=removebyid

<p class="smt-member-path"><code>sandkit.api.player.buildings.removeById()</code></p>

```ts
removeById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L153)

Remove a structure unlock from the player.

#### Parameters

##### structureId

`string`

Registered structure id string.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
