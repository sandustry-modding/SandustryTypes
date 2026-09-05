# shared.engine

## Type Aliases <!-- {docsify-ignore} -->

### EngineFn :id=enginefn

<p class="smt-member-path"><code>shared.engine.EngineFn</code></p>

```ts
EngineFn = (...args: unknown[]) => unknown;
```

Defined in: [shared/engine.d.ts:11](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L11)

**`Internal`**

Stub for an unresolved engine method.

#### Parameters

##### args

...`unknown`[]

#### Returns

`unknown`

---

### EngineOverlapNs :id=engineoverlapns

<p class="smt-member-path"><code>shared.engine.EngineOverlapNs</code></p>

```ts
EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>;
```

Defined in: [shared/engine.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L17)

**`Internal`**

Loose bag for namespaces that overlap `sandkit.api` (different names / state-first).
