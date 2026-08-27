# sandkit.api.action

`sandkit.api.action` — active hotbar action and custom handler data.
Main thread only.

## Type Aliases <!-- {docsify-ignore} -->

### Action :id=action

<p class="smt-member-path"><code>sandkit.api.action.Action</code></p>

```ts
Action = AssetRef
```

Defined in: [sandkit/api/action.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L9)

Hotbar action asset reference.

## Functions <!-- {docsify-ignore} -->

### getActive() :id=getactive

<p class="smt-member-path"><code>sandkit.api.action.getActive()</code></p>

```ts
getActive(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L15)

Return the action slot the player is using.

#### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Active hotbar action reference.

***

### getSelected() :id=getselected

<p class="smt-member-path"><code>sandkit.api.action.getSelected()</code></p>

```ts
getSelected(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L21)

Return the action slot selected in the hotbar.

#### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Selected hotbar action reference.

***

### setCustomData() :id=setcustomdata

<p class="smt-member-path"><code>sandkit.api.action.setCustomData()</code></p>

```ts
setCustomData<Input>(data: Input): void
```

Defined in: [sandkit/api/action.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L27)

Store custom data on the active action handler.

#### Type Parameters

##### Input

`Input`

#### Parameters

##### data

`Input`

Serializable payload attached to the active action.

#### Returns

`void`
