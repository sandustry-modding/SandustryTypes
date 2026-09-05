# sandkit.api.worker (worker)

**`Internal`**

Worker thread only.

`sandkit.api.worker` — identity of the current simulation worker.

Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md#workersandkitapi). Not the same as
main-thread APIs.

## Functions <!-- {docsify-ignore} -->

### getIndex() :id=getindex

<p class="smt-member-path"><code>sandkit.api.worker.getIndex() (worker)</code></p>

```ts
getIndex(): number
```

Defined in: [worker/api/worker.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/worker.d.ts#L14)

Return the zero-based index of this worker in the worker pool.

#### Returns

`number`

Worker index (`0` … `getCount() - 1`).

---

### getCount() :id=getcount

<p class="smt-member-path"><code>sandkit.api.worker.getCount() (worker)</code></p>

```ts
getCount(): number
```

Defined in: [worker/api/worker.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/worker.d.ts#L19)

Return the total number of simulation workers.

#### Returns

`number`

Worker count for the active simulation.
