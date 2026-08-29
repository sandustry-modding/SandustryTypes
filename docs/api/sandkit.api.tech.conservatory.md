# sandkit.api.tech.conservatory

Conservatory unlock wiring for built-in tech nodes.

## Functions <!-- {docsify-ignore} -->

### appendUnlock() :id=appendunlock

<p class="smt-member-path"><code>sandkit.api.tech.conservatory.appendUnlock()</code></p>

```ts
appendUnlock(techId: TechGridId, unlocks: ConservatoryUnlocks): void
```

Defined in: [sandkit/api/tech.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L131)

Append structure or item unlocks to a conservatory tech node.

#### Parameters

##### techId

[`TechGridId`](api/sandkit.api.tech.md#techgridid)

Built-in or custom tech id.

##### unlocks

[`ConservatoryUnlocks`](api/sandkit.api.tech.md#conservatoryunlocks)

Optional structure and item ids to unlock.

#### Returns

`void`

#### Example

```ts
api.tech.conservatory.appendUnlock(sandkit.enums.Tech.SignalDevices, {
  structures: ["exampleSensor"],
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
