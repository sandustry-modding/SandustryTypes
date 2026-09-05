# sandkit.engine.api.tutorialBuild

**`Internal`**

`sandkit.engine.api.tutorialBuild` — tutorial build-step constraints and targets.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### areAllTargetsBuilt() :id=arealltargetsbuilt

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.areAllTargetsBuilt()</code></p>

```ts
areAllTargetsBuilt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L15)

Return whether all active tutorial targets are built.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### areFamilyTargetsBuilt() :id=arefamilytargetsbuilt

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt()</code></p>

```ts
areFamilyTargetsBuilt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L20)

Return whether all targets in a structure family are built.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### canPlaceAtActiveTarget() :id=canplaceatactivetarget

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget()</code></p>

```ts
canPlaceAtActiveTarget(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L25)

Return whether placement is allowed at the active target.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getFoundationMoveDests() :id=getfoundationmovedests

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.getFoundationMoveDests()</code></p>

```ts
getFoundationMoveDests(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L30)

Return foundation move destination cells for the tutorial step.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getFoundationMoveSources() :id=getfoundationmovesources

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.getFoundationMoveSources()</code></p>

```ts
getFoundationMoveSources(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L35)

Return foundation move source cells for the tutorial step.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getTargets() :id=gettargets

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.getTargets()</code></p>

```ts
getTargets(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L40)

Return build targets for the current tutorial step.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasDefinition() :id=hasdefinition

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.hasDefinition()</code></p>

```ts
hasDefinition(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L45)

Return whether a tutorial build definition exists.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### isStepConstrained() :id=isstepconstrained

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.isStepConstrained()</code></p>

```ts
isStepConstrained(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L50)

Return whether the current step restricts building.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### matchesFoundationMove() :id=matchesfoundationmove

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.matchesFoundationMove()</code></p>

```ts
matchesFoundationMove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L55)

Return whether a foundation move matches tutorial rules.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### matchesFoundationRemove() :id=matchesfoundationremove

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.matchesFoundationRemove()</code></p>

```ts
matchesFoundationRemove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L60)

Return whether a foundation remove matches tutorial rules.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### shouldProtectActiveTargetAt() :id=shouldprotectactivetargetat

<p class="smt-member-path"><code>sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt()</code></p>

```ts
shouldProtectActiveTargetAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/tutorialBuild.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L65)

Return whether the active target should be protected at a cell.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`
