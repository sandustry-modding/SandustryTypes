# sandkit.api.structureBehaviors

## Functions <!-- {docsify-ignore} -->

### registerConveyorType() :id=registerconveyortype

<p class="smt-member-path"><code>sandkit.api.structureBehaviors.registerConveyorType()</code></p>

```ts
registerConveyorType(structureId: string, options?: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structureBehaviors.d.ts#L16)

Register conveyor behavior for a structure type.

#### Parameters

##### structureId

`string`

Structure type id string.

##### options?

Transport offset, velocity, distance, and run direction.

###### transportOffset?

[`Vector2`](api/shared.player.md#vector2)

###### velocity?

[`Vector2`](api/shared.player.md#vector2)

###### maxTransportDistance?

`number`

###### transportHeight?

`number`

###### runWith?

`"left"` \| `"right"`

###### skipQueued?

`boolean`

#### Returns

`void`

***

### registerLauncherType() :id=registerlaunchertype

<p class="smt-member-path"><code>sandkit.api.structureBehaviors.registerLauncherType()</code></p>

```ts
registerLauncherType(definition: object): void
```

Defined in: [sandkit/api/structureBehaviors.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structureBehaviors.d.ts#L21)

Register launcher behavior for up, left, and right launcher types.

#### Parameters

##### definition

Launcher type ids, velocities, and optional shared buffer key.

###### upType

`string`

###### leftType

`string`

###### rightType

`string`

###### velocity

\[`number`, `number`\]

###### softDropVelocity

`number`

###### runTickSharedBufferKey?

`string`

#### Returns

`void`
