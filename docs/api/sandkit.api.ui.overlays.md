# sandkit.api.ui.overlays

Overlay slot registration and updates.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.ui.overlays.register()</code></p>

```ts
register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void
```

Defined in: [sandkit/api/ui.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L207)

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

### unregister() :id=unregister

<p class="smt-member-path"><code>sandkit.api.ui.overlays.unregister()</code></p>

```ts
unregister(slot: OverlaySlot, overlayId: string): void
```

Defined in: [sandkit/api/ui.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L214)

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

### update() :id=update

<p class="smt-member-path"><code>sandkit.api.ui.overlays.update()</code></p>

```ts
update(slot: OverlaySlot): void
```

Defined in: [sandkit/api/ui.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L220)

Request a re-render for all overlays in a slot.

#### Parameters

##### slot

[`OverlaySlot`](api/sandkit.api.ui.md#overlayslot)

Slot name to refresh.

#### Returns

`void`
