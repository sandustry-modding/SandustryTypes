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

Defined in: [worker/api/fire.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L18)

Return true when the element at the cell can burn.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.fire.canBurnElementAtCell`

***

### burnElementAtCell() :id=burnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.burnElementAtCell() (worker)</code></p>

```ts
burnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/fire.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L28)

Burn the element at the cell immediately on this worker.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when the burn succeeded.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.fire.burnElementAtCell`
