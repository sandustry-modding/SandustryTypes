# sandkit.api.structures.recipes

Structure recipe registration by machine kind.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.structures.recipes.register()</code></p>

#### Call Signature

```ts
register(id: "planterBox", definition: PlanterBoxRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:431](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L431)

Register a planter box recipe.

##### Parameters

###### id

`"planterBox"`

Machine recipe slot id.

###### definition

[`PlanterBoxRecipeDefinitionV1`](api/sandkit.api.processing.md#planterboxrecipedefinitionv1)

Grower recipe definition.

##### Returns

`void`

##### Example

```ts
api.structures.recipes.register("kineticPress", {
  input: "sand",
  outputs: [
    { elementType: "compressedSand", chance: 1 },
  ],
  minimumDownwardVelocityCellsPerSecond: 20,
});
```

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Call Signature

```ts
register(id: "shaker", definition: ShakerRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L441)

Register a shaker recipe.

##### Parameters

###### id

`"shaker"`

Machine recipe slot id.

###### definition

[`ShakerRecipeDefinitionV1`](api/sandkit.api.processing.md#shakerrecipedefinitionv1)

Shaker recipe definition.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Call Signature

```ts
register(id: "kineticPress", definition: KineticPressRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:451](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L451)

Register a kinetic press recipe.

##### Parameters

###### id

`"kineticPress"`

Machine recipe slot id.

###### definition

[`KineticPressRecipeDefinitionV1`](api/sandkit.api.processing.md#kineticpressrecipedefinitionv1)

Kinetic press recipe definition.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Call Signature

```ts
register(id: "condenser" | "steamDryer" | "synthesizer" | "snowmaker" | "smelter", definition: WeightedRefineryRecipeDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:461](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L461)

Register a weighted refinery machine recipe.

##### Parameters

###### id

`"condenser"` \| `"steamDryer"` \| `"synthesizer"` \| `"snowmaker"` \| `"smelter"`

Refinery machine id.

###### definition

[`WeightedRefineryRecipeDefinitionV1`](api/sandkit.api.structures.md#weightedrefineryrecipedefinitionv1)

Weighted input/output recipe.

##### Returns

`void`

##### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
