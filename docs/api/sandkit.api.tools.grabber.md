# sandkit.api.tools.grabber

Grabber tool size and state.

## Functions <!-- {docsify-ignore} -->

### setSize() :id=setsize

<p class="smt-member-path"><code>sandkit.api.tools.grabber.setSize()</code></p>

```ts
setSize(size: number): void
```

Defined in: [sandkit/api/tools.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L15)

Set grabber radius size.

#### Parameters

##### size

`number`

Grab radius in cells.

#### Returns

`void`

---

### getSize() :id=getsize

<p class="smt-member-path"><code>sandkit.api.tools.grabber.getSize()</code></p>

```ts
getSize(): number
```

Defined in: [sandkit/api/tools.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L21)

Return current grabber radius size.

#### Returns

`number`

Grab radius in cells.

---

### isActive() :id=isactive

<p class="smt-member-path"><code>sandkit.api.tools.grabber.isActive()</code></p>

```ts
isActive(): boolean
```

Defined in: [sandkit/api/tools.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L27)

Return true when grabber tool is active.

#### Returns

`boolean`

True when the grabber is the active tool.

---

### isLoaded() :id=isloaded

<p class="smt-member-path"><code>sandkit.api.tools.grabber.isLoaded()</code></p>

```ts
isLoaded(): boolean
```

Defined in: [sandkit/api/tools.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tools.d.ts#L33)

Return true when grabber holds elements.

#### Returns

`boolean`

True when the grabber buffer is not empty.
