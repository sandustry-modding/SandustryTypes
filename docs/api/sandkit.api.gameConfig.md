# sandkit.api.gameConfig

`sandkit.api.gameConfig` — read merged game configuration values.
Main thread only.

## Functions <!-- {docsify-ignore} -->

### get() :id=get

<p class="smt-member-path"><code>sandkit.api.gameConfig.get()</code></p>

```ts
get(key: string): JsonValueV1 | undefined
```

Defined in: [sandkit/api/gameconfig.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/gameconfig.d.ts#L12)

Returns a config value by key, or undefined when missing.

#### Parameters

##### key

`string`

Game config key (merged defaults and overrides).

#### Returns

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1) \| `undefined`

---

### getAll() :id=getall

<p class="smt-member-path"><code>sandkit.api.gameConfig.getAll()</code></p>

```ts
getAll(): JsonObjectV1
```

Defined in: [sandkit/api/gameconfig.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/gameconfig.d.ts#L14)

Returns the full config object.

#### Returns

[`JsonObjectV1`](api/shared.jsonvalue.md#jsonobjectv1)
