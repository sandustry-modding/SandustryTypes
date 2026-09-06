# sandkit.api.ui.overlays

Overlay slot registration and updates.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.overlays.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L216" target="_blank" rel="noopener">ui.d.ts:216</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.overlays.register(slot: OverlaySlot, overlayId: string, render: () =&gt; ReactNode): void">

```ts
register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| slot | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | [`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot) Slot name (for example `"hotbar"`). |
| overlayId | `string` | `string` Unique id for this overlay within the slot. |
| render | <code>() =&gt; `ReactNode`</code> | () => `ReactNode` Function that returns React content. |

<div class="smt-member-anchors">

##### slot <!-- {docsify-ignore} -->

##### overlayId <!-- {docsify-ignore} -->

##### render <!-- {docsify-ignore} -->

</div>

Register a render function in an overlay slot.

</div>

<div class="smt-member-card">

### sandkit.api.ui.overlays.unregister :id=unregister

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L223" target="_blank" rel="noopener">ui.d.ts:223</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.overlays.unregister(slot: OverlaySlot, overlayId: string): void">

```ts
unregister(slot: OverlaySlot, overlayId: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| slot | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | [`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot) Slot name the overlay was registered in. |
| overlayId | `string` | `string` Overlay id passed to [register](?id=register). |

<div class="smt-member-anchors">

##### slot <!-- {docsify-ignore} -->

##### overlayId <!-- {docsify-ignore} -->

</div>

Remove an overlay from a slot.

</div>

<div class="smt-member-card">

### sandkit.api.ui.overlays.update :id=update

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L229" target="_blank" rel="noopener">ui.d.ts:229</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.overlays.update(slot: OverlaySlot): void">

```ts
update(slot: OverlaySlot): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| slot | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | [`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot) Slot name to refresh. |

<div class="smt-member-anchors">

##### slot <!-- {docsify-ignore} -->

</div>

Request a re-render for all overlays in a slot.

</div>
