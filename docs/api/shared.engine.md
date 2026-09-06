# shared.engine

## Type Aliases <!-- {docsify-ignore} -->

### EngineFn :id=enginefn

```ts
shared.engine.EngineFn = (...args: unknown[]) => unknown
```

Defined in: [shared/engine.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L11)

**`Internal`**

Stub for an unresolved engine method.

#### Parameters

##### args

...`unknown`[]

#### Returns

`unknown`

***

### EngineOverlapNs :id=engineoverlapns

```ts
shared.engine.EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>
```

Defined in: [shared/engine.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L17)

**`Internal`**

Loose bag for namespaces that overlap `sandkit.api` (different names / state-first).
