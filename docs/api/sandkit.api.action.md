# sandkit.api.action

`sandkit.api.action` — active hotbar action and custom handler data.
Main thread only.

## Type Aliases <!-- {docsify-ignore} -->

### Action :id=action

```ts
sandkit.api.action.Action = AssetRef
```

Defined in: [sandkit/api/action.d.ts:9](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L9)

Hotbar action asset reference.

## Functions <!-- {docsify-ignore} -->

### getActive() :id=getactive

```ts
sandkit.api.action.getActive(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L15)

Return the action slot the player is using.

#### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Active hotbar action reference.

***

### getSelected() :id=getselected

```ts
sandkit.api.action.getSelected(): AssetRef
```

Defined in: [sandkit/api/action.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L21)

Return the action slot selected in the hotbar.

#### Returns

[`AssetRef`](api/shared.asset.md#assetref)

Selected hotbar action reference.

***

### setCustomData() :id=setcustomdata

```ts
sandkit.api.action.setCustomData<Input>(data: Input): void
```

Defined in: [sandkit/api/action.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L32)

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

#### Example

```ts
api.action.setCustomData({ mode: "example" });
```
