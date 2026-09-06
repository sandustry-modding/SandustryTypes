# sandkit.api.excavation

`sandkit.api.excavation` — register custom excavation tool dig profiles.
Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.excavation.ExcavationProfileDefinitionV1 :id=excavationprofiledefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L50" target="_blank" rel="noopener">excavation.d.ts:50</a></p>

| Property | Type | Description |
| --- | --- | --- |
| pattern? | number[][] | Dig pattern grid; non-zero cells are removed. |
| power | number | Dig strength applied to matched cells. Clamped to 0–1000. |
| options? | ExcavationProfileOptions | Optional profile-specific excavation flags. |
| terrainRules? | readonly ExcavationTerrainRule[] | Per-terrain output and damage rules. |

<div class="smt-member-anchors">

##### pattern? <!-- {docsify-ignore} -->

##### power <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

##### terrainRules? <!-- {docsify-ignore} -->

</div>

Excavation tool profile definition.

</div>

<div class="smt-member-card">

### sandkit.api.excavation.ExcavationProfileOptions :id=excavationprofileoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L62" target="_blank" rel="noopener">excavation.d.ts:62</a></p>

| Property | Type | Description |
| --- | --- | --- |
| fromGun? | boolean |  |
| fromRocketExplosion? | boolean |  |
| fromDrill? | boolean |  |
| useLiteralOutVelocity? | boolean |  |
| destroyNonDestructible? | boolean |  |
| forceRemoveAll? | boolean |  |
| drillTierDamage? | number | Clamped to 0–1000 when set. |

<div class="smt-member-anchors">

##### fromGun? <!-- {docsify-ignore} -->

##### fromRocketExplosion? <!-- {docsify-ignore} -->

##### fromDrill? <!-- {docsify-ignore} -->

##### useLiteralOutVelocity? <!-- {docsify-ignore} -->

##### destroyNonDestructible? <!-- {docsify-ignore} -->

##### forceRemoveAll? <!-- {docsify-ignore} -->

##### drillTierDamage? <!-- {docsify-ignore} -->

</div>

Options attached to an excavation profile definition.

</div>

<div class="smt-member-card">

### sandkit.api.excavation.ExcavationTerrainRule :id=excavationterrainrule

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L74" target="_blank" rel="noopener">excavation.d.ts:74</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cellType | TerrainRef | Terrain cell type to match. |
| ~~terrainType?~~ | TerrainRef |  |
| damage? | number | Damage applied when this rule matches. |
| outputElementType? | ElementRef | Element type produced when this terrain is excavated. |

<div class="smt-member-anchors">

##### cellType <!-- {docsify-ignore} -->

##### ~~terrainType?~~ <!-- {docsify-ignore} -->

##### damage? <!-- {docsify-ignore} -->

##### outputElementType? <!-- {docsify-ignore} -->

</div>

Terrain match rule within an excavation profile.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.excavation.registerProfile :id=registerprofile

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L47" target="_blank" rel="noopener">excavation.d.ts:47</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.excavation.registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void">

```ts
registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| id | `string` | Unique profile id (1–128 chars: letters, numbers, `.`, `_`, `:`, `-`). |
| definition | [`ExcavationProfileDefinitionV1`](?id=excavationprofiledefinitionv1) | Pattern, power, terrain rules, and profile options. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

Registers an excavation profile by id.

#### Example

```ts
const profileId = "example:voidGun";
const duneType = api.terrains.getTypeById("dune");
const sandType = api.elements.getTypeById("sand");

api.excavation.registerProfile(profileId, {
  power: 8,
  terrainRules: [
    {
      cellType: duneType,
      outputElementType: sandType,
    },
  ],
});

api.hooks.modify("excavation:prepare", (args) => {
  if (
    args.sourceKind !== "projectile"
    || args.sourceId !== "implosionGun"
  ) {
    return;
  }

  args.profileId = profileId;
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>
