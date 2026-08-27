# sandkit.api.shared.buffers (worker)

Named shared memory buffers for worker threads.

## Functions <!-- {docsify-ignore} -->

### require() :id=require

<p class="smt-member-path"><code>sandkit.api.shared.buffers.require() (worker)</code></p>

```ts
require(key: string, config: object): SharedArray
```

Defined in: [worker/api/shared.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/shared.d.ts#L28)

Attach to a named shared buffer on this worker.

The buffer must already exist on the main thread with the same
[SharedArrayType](api/sandkit.api.shared.md#sharedarraytype) and length as `config`.

#### Parameters

##### key

`string`

Buffer name shared across threads.

##### config

Expected array type and length for validation.

###### type

[`SharedArrayType`](api/sandkit.api.shared.md#sharedarraytype)

###### length

`number`

#### Returns

[`SharedArray`](api/sandkit.api.shared.md#sharedarray)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Worker entry `api.shared.buffers.require`

## References <!-- {docsify-ignore} -->

### get :id=get

<p class="smt-member-path"><code>sandkit.api.shared.buffers.get (worker)</code></p>

Re-exports [get](api/sandkit.api.shared.buffers.md#get)
