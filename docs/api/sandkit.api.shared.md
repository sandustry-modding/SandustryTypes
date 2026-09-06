# sandkit.api.shared

## Namespaces <!-- {docsify-ignore} -->

- [buffers](api/sandkit.api.shared.buffers.md)

## Type Aliases <!-- {docsify-ignore} -->

### SharedArray :id=sharedarray

```ts
sandkit.api.shared.SharedArray = Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array
```

Defined in: [shared/api/shared.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L29)

Typed array backing a shared buffer.

Use [SharedArrayType](#sharedarraytype) when creating or requiring a buffer. The runtime
returns the matching `*Array` constructor for the configured type.

***

### SharedArrayType :id=sharedarraytype

```ts
sandkit.api.shared.SharedArrayType = "uint8" | "uint16" | "uint32" | "int8" | "int16" | "int32" | "float32" | "float64"
```

Defined in: [shared/api/shared.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L40)

Discriminator for the underlying typed array kind.
