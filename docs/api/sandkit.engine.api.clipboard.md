# sandkit.engine.api.clipboard

**`Internal`**

`sandkit.engine.api.clipboard` — build clipboard copy, paste, and history.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### activate() :id=activate

```ts
sandkit.engine.api.clipboard.activate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L15)

Activate the clipboard tool or mode.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### clear() :id=clear

```ts
sandkit.engine.api.clipboard.clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L20)

Clear the current clipboard contents.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### get() :id=get

```ts
sandkit.engine.api.clipboard.get(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L25)

Return the current clipboard payload.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getHistory() :id=gethistory

```ts
sandkit.engine.api.clipboard.getHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L30)

Return clipboard history entries.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getSignalLinks() :id=getsignallinks

```ts
sandkit.engine.api.clipboard.getSignalLinks(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L35)

Return signal links stored on the clipboard.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### selectFromHistory() :id=selectfromhistory

```ts
sandkit.engine.api.clipboard.selectFromHistory(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L40)

Restore a clipboard entry from history.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### set() :id=set

```ts
sandkit.engine.api.clipboard.set(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/clipboard.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/clipboard.d.ts#L45)

Set the clipboard payload.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`
