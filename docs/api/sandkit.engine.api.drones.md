# sandkit.engine.api.drones

**`Internal`**

`sandkit.engine.api.drones` — drone spawn and removal.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### kill() :id=kill

<p class="smt-member-path"><code>sandkit.engine.api.drones.kill()</code></p>

```ts
kill(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/drones.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/drones.d.ts#L15)

Remove one or more drones.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### spawn() :id=spawn

<p class="smt-member-path"><code>sandkit.engine.api.drones.spawn()</code></p>

```ts
spawn(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/drones.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/drones.d.ts#L20)

Spawn a drone instance.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`
