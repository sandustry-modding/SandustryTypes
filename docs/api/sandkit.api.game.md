# sandkit.api.game

Game session start helpers.

Available as `sandkit.api.game`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### GameStartOptions :id=gamestartoptions

<p class="smt-member-path"><code>sandkit.api.game.GameStartOptions</code></p>

Defined in: [sandkit/api/game.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L24)

Options for [start](#start).

#### Properties

##### skipIntro?

```ts
optional skipIntro?: boolean
```

Defined in: [sandkit/api/game.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L26)

When true, skip the intro sequence.

## Functions <!-- {docsify-ignore} -->

### start() :id=start

<p class="smt-member-path"><code>sandkit.api.game.start()</code></p>

```ts
start(options?: GameStartOptions): void
```

Defined in: [sandkit/api/game.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L21)

Start or restart the game session.

#### Parameters

##### options?

[`GameStartOptions`](#gamestartoptions)

Optional session start flags.

#### Returns

`void`

#### Example

```ts
api.game.start({ skipIntro: true });
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
