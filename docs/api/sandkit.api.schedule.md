# sandkit.api.schedule

## Functions <!-- {docsify-ignore} -->

### nextTick() :id=nexttick

<p class="smt-member-path"><code>sandkit.api.schedule.nextTick()</code></p>

```ts
nextTick(callback: () => void): void
```

Defined in: [sandkit/api/schedule.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/schedule.d.ts#L20)

Run a callback on the next game tick.

#### Parameters

##### callback

() => `void`

Function invoked once on the next tick.

#### Returns

`void`

#### Example

```ts
api.schedule.nextTick(() => {
  runDeferredWork();
});
```
