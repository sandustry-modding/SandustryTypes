# sandkit.api.shared (worker)

**`Internal`**

Worker thread only.

`sandkit.api.shared` — shared memory buffers for workers.

Workers **require** buffers created on the main thread. Main thread only
**gets** existing buffers. See shared for the shared base declarations.

 Worker extension of shared; not interchangeable with
main-thread `sandkit.api.shared`.

## Namespaces <!-- {docsify-ignore} -->

- [buffers](api/sandkit.api.shared.buffers.worker.md)

## References <!-- {docsify-ignore} -->

### SharedArray :id=sharedarray

<p class="smt-member-path"><code>sandkit.api.shared.SharedArray (worker)</code></p>

Re-exports [SharedArray](api/sandkit.api.shared.md#sharedarray)

***

### SharedArrayType :id=sharedarraytype

<p class="smt-member-path"><code>sandkit.api.shared.SharedArrayType (worker)</code></p>

Re-exports [SharedArrayType](api/sandkit.api.shared.md#sharedarraytype)
