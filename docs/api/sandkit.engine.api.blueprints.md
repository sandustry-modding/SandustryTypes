# sandkit.engine.api.blueprints

**`Internal`**

`sandkit.engine.api.blueprints` — blueprint save, load, and import/export.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### delete() :id=delete

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.delete()</code></p>

```ts
delete(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L15)

Delete a saved blueprint. Runtime property name is `delete`.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### exportAllString() :id=exportallstring

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.exportAllString()</code></p>

```ts
exportAllString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L21)

Export all blueprints as one string.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### exportString() :id=exportstring

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.exportString()</code></p>

```ts
exportString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L26)

Export one blueprint as a string.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getAll() :id=getall

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.getAll()</code></p>

```ts
getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L31)

Return all saved blueprints.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### importString() :id=importstring

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.importString()</code></p>

```ts
importString(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L36)

Import a blueprint from a string.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### load() :id=load

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.load()</code></p>

```ts
load(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L41)

Load a blueprint into the active session.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### save() :id=save

<p class="smt-member-path"><code>sandkit.engine.api.blueprints.save()</code></p>

```ts
save(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/blueprints.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/blueprints.d.ts#L46)

Save the current selection as a blueprint.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`
