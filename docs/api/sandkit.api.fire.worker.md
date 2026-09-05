# sandkit.api.fire (worker)

**`Internal`**

Worker-thread `sandkit.api.fire` — ignite and burn elements at grid cells.

Worker burns are immediate. Main thread defers burns with `burnElementAtCell`.

Worker-only surface; do not use main-thread [sandkit.api.fire](api/sandkit.md#fire).

## Functions <!-- {docsify-ignore} -->

### canBurnElementAtCell() :id=canburnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.canBurnElementAtCell() (worker)</code></p>

```ts
canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/fire.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L19)

Return true when the element at the cell can burn.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### burnElementAtCell() :id=burnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.burnElementAtCell() (worker)</code></p>

```ts
burnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/fire.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L30)

Burn the element at the cell immediately on this worker.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when the burn succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)
