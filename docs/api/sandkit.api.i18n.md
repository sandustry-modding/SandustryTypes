# sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### I18nNumberFormatOptions :id=i18nnumberformatoptions

<p class="smt-member-path"><code>sandkit.api.i18n.I18nNumberFormatOptions</code></p>

Defined in: [sandkit/api/i18n.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L213)

Number format options for [formatNumber](#formatnumber).

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### minimumFractionDigits?

```ts
optional minimumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:215](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L215)

Minimum fraction digits.

##### maximumFractionDigits?

```ts
optional maximumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L217)

Maximum fraction digits.

##### useGrouping?

```ts
optional useGrouping?: boolean
```

Defined in: [sandkit/api/i18n.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L219)

When true, use grouping separators.

## Type Aliases <!-- {docsify-ignore} -->

### Locale :id=locale

<p class="smt-member-path"><code>sandkit.api.i18n.Locale</code></p>

```ts
Locale = LooseString<"en">
```

Defined in: [sandkit/api/i18n.d.ts:210](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L210)

Locale code. `"en"` autocompletes; any locale string is allowed.

## Functions <!-- {docsify-ignore} -->

### t() :id=t

<p class="smt-member-path"><code>sandkit.api.i18n.t()</code></p>

```ts
t(key: string, params?: Record<string, string | number>): string
```

Defined in: [sandkit/api/i18n.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L23)

Translates a key with optional parameter substitution.

#### Parameters

##### key

`string`

Translation key.

##### params?

`Record`\<`string`, `string` \| `number`\>

Placeholder values for the key template.

#### Returns

`string`

#### Example

```ts
const message = api.i18n.t("mods|example|count", {
  count: 3,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.i18n.register()</code></p>

```ts
register(locale: Locale, translations: Record<string, string>): void
```

Defined in: [sandkit/api/i18n.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L40)

Registers translation strings for a locale.

#### Parameters

##### locale

[`Locale`](#locale)

Locale code (e.g. `en`).

##### translations

`Record`\<`string`, `string`\>

Map of keys to translated strings.

#### Returns

`void`

#### Example

```ts
api.i18n.register("en", {
  "mods|example|title": "Example",
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getLocale() :id=getlocale

<p class="smt-member-path"><code>sandkit.api.i18n.getLocale()</code></p>

```ts
getLocale(): Locale
```

Defined in: [sandkit/api/i18n.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L47)

Returns the active locale code.

#### Returns

[`Locale`](#locale)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### hasTranslation() :id=hastranslation

<p class="smt-member-path"><code>sandkit.api.i18n.hasTranslation()</code></p>

```ts
hasTranslation(key: string, locale?: Locale): boolean
```

Defined in: [sandkit/api/i18n.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L57)

Returns true when a translation exists for the key.

#### Parameters

##### key

`string`

Translation key.

##### locale?

[`Locale`](#locale)

Optional locale; defaults to the active locale.

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setLocale() :id=setlocale

<p class="smt-member-path"><code>sandkit.api.i18n.setLocale()</code></p>

```ts
setLocale(locale: Locale): Promise<void>
```

Defined in: [sandkit/api/i18n.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L66)

Sets the active locale.

#### Parameters

##### locale

[`Locale`](#locale)

Locale code to activate.

#### Returns

`Promise`\<`void`\>

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getLanguages() :id=getlanguages

<p class="smt-member-path"><code>sandkit.api.i18n.getLanguages()</code></p>

```ts
getLanguages(): object[]
```

Defined in: [sandkit/api/i18n.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L73)

Returns metadata for all known languages.

#### Returns

`object`[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getAvailableLocales() :id=getavailablelocales

<p class="smt-member-path"><code>sandkit.api.i18n.getAvailableLocales()</code></p>

```ts
getAvailableLocales(): Locale[]
```

Defined in: [sandkit/api/i18n.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L80)

Returns locale codes that have registered translations.

#### Returns

[`Locale`](#locale)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### formatNumber() :id=formatnumber

<p class="smt-member-path"><code>sandkit.api.i18n.formatNumber()</code></p>

```ts
formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

Defined in: [sandkit/api/i18n.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L97)

Formats a number for the active locale.

#### Parameters

##### value

`number`

Number to format.

##### options?

[`I18nNumberFormatOptions`](#i18nnumberformatoptions)

Intl-style number format options.

#### Returns

`string`

#### Example

```ts
const formatted = api.i18n.formatNumber(1234.5, {
  maximumFractionDigits: 1,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### joinKey() :id=joinkey

<p class="smt-member-path"><code>sandkit.api.i18n.joinKey()</code></p>

```ts
joinKey(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L106)

Joins key parts into a single translation key.

#### Parameters

##### parts

...`string`[]

Key segments joined with `.`.

#### Returns

`string`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~key()~~

```ts
key(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L113)

#### Parameters

##### parts

...`string`[]

#### Returns

`string`

#### Deprecated

Use [joinKey](#joinkey) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getName() :id=getname

<p class="smt-member-path"><code>sandkit.api.i18n.getName()</code></p>

```ts
getName(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L130)

Returns the display name from a definition with nameKey or name.

#### Parameters

##### definition

Object with `nameKey` or `name`.

###### nameKey?

`string`

###### name?

`string`

#### Returns

`string`

#### Example

```ts
const name = api.i18n.getName({
  name: "Example Machine",
  nameKey: "structures|exampleMachine|name",
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDescription() :id=getdescription

<p class="smt-member-path"><code>sandkit.api.i18n.getDescription()</code></p>

```ts
getDescription(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L139)

Returns the description from a definition with descriptionKey or description.

#### Parameters

##### definition

Object with `descriptionKey` or `description`.

###### descriptionKey?

`string`

###### description?

`string`

#### Returns

`string`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### createTranslatable() :id=createtranslatable

<p class="smt-member-path"><code>sandkit.api.i18n.createTranslatable()</code></p>

```ts
createTranslatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L149)

Creates a translatable string object with a fallback.

#### Parameters

##### key

`string`

Translation key.

##### fallback

`string`

Text used when no translation is registered.

#### Returns

`object`

##### \_\_translatable

```ts
\_\_translatable: true
```

##### key

```ts
key: string
```

##### fallback

```ts
fallback: string
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~translatable()~~

```ts
translatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L156)

#### Parameters

##### key

`string`

##### fallback

`string`

#### Returns

`object`

##### ~~\_\_translatable~~

```ts
\_\_translatable: true
```

##### ~~key~~

```ts
key: string
```

##### ~~fallback~~

```ts
fallback: string
```

#### Deprecated

Use [createTranslatable](#createtranslatable) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setGlobal() :id=setglobal

<p class="smt-member-path"><code>sandkit.api.i18n.setGlobal()</code></p>

```ts
setGlobal(key: string, value: string | (() => string)): void
```

Defined in: [sandkit/api/i18n.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L166)

Sets a global string or lazy resolver used in translations.

#### Parameters

##### key

`string`

Global helper key.

##### value

`string` \| (() => `string`)

Static string or function that returns the current value.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getGlobal() :id=getglobal

<p class="smt-member-path"><code>sandkit.api.i18n.getGlobal()</code></p>

```ts
getGlobal(key: string): string | undefined
```

Defined in: [sandkit/api/i18n.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L175)

Returns a global translation helper value.

#### Parameters

##### key

`string`

Global helper key.

#### Returns

`string` \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### removeGlobal() :id=removeglobal

<p class="smt-member-path"><code>sandkit.api.i18n.removeGlobal()</code></p>

```ts
removeGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:184](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L184)

Removes a global translation helper value.

#### Parameters

##### key

`string`

Global helper key.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~clearGlobal()~~

```ts
clearGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L191)

#### Parameters

##### key

`string`

#### Returns

`void`

#### Deprecated

Use [removeGlobal](#removeglobal) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getGlobals() :id=getglobals

<p class="smt-member-path"><code>sandkit.api.i18n.getGlobals()</code></p>

```ts
getGlobals(): Record<string, string>
```

Defined in: [sandkit/api/i18n.d.ts:198](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L198)

Returns all global translation helper values.

#### Returns

`Record`\<`string`, `string`\>

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### formatKeyForDisplay() :id=formatkeyfordisplay

<p class="smt-member-path"><code>sandkit.api.i18n.formatKeyForDisplay()</code></p>

```ts
formatKeyForDisplay(keyCode: string): string
```

Defined in: [sandkit/api/i18n.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L207)

Formats a key code for display in UI.

#### Parameters

##### keyCode

`string`

Keyboard key code or binding name.

#### Returns

`string`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
