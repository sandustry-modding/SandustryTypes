# sandkit.api.ui.overlays

Overlay slot registration and updates.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.ui.overlays.register() :id=register

```ts
register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void
```

Defined in: [sandkit/api/ui.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L80)

Register a render function in an overlay slot.

#### Parameters

##### slot

[`OverlaySlot`](api/sandkit.api.ui.md#overlayslot)

Slot name (for example `"hotbar"`).

##### overlayId

`string`

Unique id for this overlay within the slot.

##### render

() => `ReactNode`

Function that returns React content.

#### Returns

`void`

***

### sandkit.api.ui.overlays.unregister() :id=unregister

```ts
unregister(slot: OverlaySlot, overlayId: string): void
```

Defined in: [sandkit/api/ui.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L87)

Remove an overlay from a slot.

#### Parameters

##### slot

[`OverlaySlot`](api/sandkit.api.ui.md#overlayslot)

Slot name the overlay was registered in.

##### overlayId

`string`

Overlay id passed to [register](#register).

#### Returns

`void`

***

### sandkit.api.ui.overlays.update() :id=update

```ts
update(slot: OverlaySlot): void
```

Defined in: [sandkit/api/ui.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/ui.d.ts#L93)

Request a re-render for all overlays in a slot.

#### Parameters

##### slot

[`OverlaySlot`](api/sandkit.api.ui.md#overlayslot)

Slot name to refresh.

#### Returns

`void`
