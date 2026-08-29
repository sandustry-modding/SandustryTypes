# sandkit.api.progression

## Interfaces <!-- {docsify-ignore} -->

### ProgressionCompletionRequestV1 :id=progressioncompletionrequestv1

<p class="smt-member-path"><code>sandkit.api.progression.ProgressionCompletionRequestV1</code></p>

Defined in: [sandkit/api/progression.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L25)

Progression completion request shape.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string
```

Defined in: [sandkit/api/progression.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L27)

Progression step or quest identifier.

## Functions <!-- {docsify-ignore} -->

### complete() :id=complete

<p class="smt-member-path"><code>sandkit.api.progression.complete()</code></p>

```ts
complete(request: ProgressionCompletionRequestV1): boolean
```

Defined in: [sandkit/api/progression.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L22)

Mark a progression step complete. Return true when completion succeeds.

#### Parameters

##### request

[`ProgressionCompletionRequestV1`](#progressioncompletionrequestv1)

Progression id and optional metadata for the step.

#### Returns

`boolean`

#### Example

```ts
const completed = api.progression.complete({
  domain: "objective",
  id: "all",
});
```
