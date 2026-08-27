# sandkit.engine.api.clipboard

**`Internal`**

`sandkit.engine.api.clipboard` — build clipboard copy, paste, and history.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### activate() :id=activate

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.activate()</code></p>

```ts
activate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L15)

Activate the clipboard tool or mode.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### clear() :id=clear

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.clear()</code></p>

```ts
clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L20)

Clear the current clipboard contents.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### get() :id=get

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.get()</code></p>

```ts
get(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L25)

Return the current clipboard payload.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getHistory() :id=gethistory

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.getHistory()</code></p>

```ts
getHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L30)

Return clipboard history entries.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getSignalLinks() :id=getsignallinks

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.getSignalLinks()</code></p>

```ts
getSignalLinks(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L35)

Return signal links stored on the clipboard.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### selectFromHistory() :id=selectfromhistory

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.selectFromHistory()</code></p>

```ts
selectFromHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L40)

Restore a clipboard entry from history.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### set() :id=set

<p class="smt-member-path"><code>sandkit.engine.api.clipboard.set()</code></p>

```ts
set(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/clipboard.d.ts#L45)

Set the clipboard payload.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`
