# sandkit.api.game

Game session start helpers.

Available as `sandkit.api.game`.

## See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.game`

## Interfaces <!-- {docsify-ignore} -->

### GameStartOptions :id=gamestartoptions

<p class="smt-member-path"><code>sandkit.api.game.GameStartOptions</code></p>

Defined in: [sandkit/api/game.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L18)

Options for [start](#start).

#### Properties

##### skipIntro?

```ts
optional skipIntro?: boolean
```

Defined in: [sandkit/api/game.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L20)

When true, skip the intro sequence.

## Functions <!-- {docsify-ignore} -->

### start() :id=start

<p class="smt-member-path"><code>sandkit.api.game.start()</code></p>

```ts
start(options?: GameStartOptions): void
```

Defined in: [sandkit/api/game.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L15)

Start or restart the game session.

#### Parameters

##### options?

[`GameStartOptions`](#gamestartoptions)

Optional session start flags.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.game.start`
