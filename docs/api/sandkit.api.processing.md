# sandkit.api.processing

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.processing.WeightedRecipeOutput :id=weightedrecipeoutput

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L30" target="_blank" rel="noopener">processing.d.ts:30</a></p>

| Property | Type | Description |
| --- | --- | --- |
| elementType | ElementType | Output element type (1–255). |
| chance | number | Output probability from 0 to 1. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

##### chance <!-- {docsify-ignore} -->

</div>

Weighted element output entry shared by machine recipes.

</div>

<div class="smt-member-card">

### sandkit.api.processing.PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L38" target="_blank" rel="noopener">processing.d.ts:38</a></p>

| Property | Type | Description |
| --- | --- | --- |
| input | ElementType | Input element type placed on the grower. |
| output | ElementType | Output element type produced by the grower. |
| chance? | number | Success chance from 0 to 1. Default 1. |

<div class="smt-member-anchors">

##### input <!-- {docsify-ignore} -->

##### output <!-- {docsify-ignore} -->

##### chance? <!-- {docsify-ignore} -->

</div>

Planter box grower recipe definition.

</div>

<div class="smt-member-card">

### sandkit.api.processing.ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L48" target="_blank" rel="noopener">processing.d.ts:48</a></p>

| Property | Type | Description |
| --- | --- | --- |
| input | ElementType | Input element type dropped on the shaker. |
| outputsAbove | WeightedRecipeOutput[] | Weighted outputs ejected upward. |
| outputsBelow | WeightedRecipeOutput[] | Weighted outputs ejected downward. |

<div class="smt-member-anchors">

##### input <!-- {docsify-ignore} -->

##### outputsAbove <!-- {docsify-ignore} -->

##### outputsBelow <!-- {docsify-ignore} -->

</div>

Shaker recipe definition.

</div>

<div class="smt-member-card">

### sandkit.api.processing.KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L58" target="_blank" rel="noopener">processing.d.ts:58</a></p>

| Property | Type | Description |
| --- | --- | --- |
| input | ElementType | Input element type processed by the press. |
| minimumDownwardVelocity | number | Minimum downward velocity required to trigger the press. |
| outputs | WeightedRecipeOutput[] | Weighted outputs produced by the press. |

<div class="smt-member-anchors">

##### input <!-- {docsify-ignore} -->

##### minimumDownwardVelocity <!-- {docsify-ignore} -->

##### outputs <!-- {docsify-ignore} -->

</div>

Kinetic press recipe definition.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.processing.registerGrower :id=registergrower

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L15" target="_blank" rel="noopener">processing.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.processing.registerGrower(definition: PlanterBoxRecipeDefinitionV1): void">

```ts
registerGrower(definition: PlanterBoxRecipeDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`PlanterBoxRecipeDefinitionV1`](?id=planterboxrecipedefinitionv1) | Grower input/output recipe. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register a planter box grower recipe.

</div>

<div class="smt-member-card">

### sandkit.api.processing.registerShaker :id=registershaker

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L21" target="_blank" rel="noopener">processing.d.ts:21</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.processing.registerShaker(definition: ShakerRecipeDefinitionV1): void">

```ts
registerShaker(definition: ShakerRecipeDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`ShakerRecipeDefinitionV1`](?id=shakerrecipedefinitionv1) | Shaker input and weighted outputs. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register a shaker recipe.

</div>

<div class="smt-member-card">

### sandkit.api.processing.registerKineticPress :id=registerkineticpress

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/processing.d.ts#L27" target="_blank" rel="noopener">processing.d.ts:27</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.processing.registerKineticPress(definition: KineticPressRecipeDefinitionV1): void">

```ts
registerKineticPress(definition: KineticPressRecipeDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`KineticPressRecipeDefinitionV1`](?id=kineticpressrecipedefinitionv1) | Press input, velocity threshold, and outputs. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register a kinetic press recipe.

</div>
