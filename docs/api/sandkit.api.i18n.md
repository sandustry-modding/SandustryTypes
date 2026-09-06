# sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### I18nNumberFormatOptions :id=i18nnumberformatoptions

<p class="smt-member-path"><code>sandkit.api.i18n.I18nNumberFormatOptions</code></p>
Defined in: [sandkit/api/i18n.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L227)

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

Defined in: [sandkit/api/i18n.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L229)

Minimum fraction digits.

##### maximumFractionDigits?

```ts
optional maximumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:231](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L231)

Maximum fraction digits.

##### useGrouping?

```ts
optional useGrouping?: boolean
```

Defined in: [sandkit/api/i18n.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L233)

When true, use grouping separators.

## Type Aliases <!-- {docsify-ignore} -->

### Locale :id=locale

```ts
sandkit.api.i18n.Locale = LooseString<"en">
```

Defined in: [sandkit/api/i18n.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L224)

Locale code. `"en"` autocompletes; any locale string is allowed.

## Functions <!-- {docsify-ignore} -->

### t() :id=t

```ts
sandkit.api.i18n.t(key: string, params?: Record<string, string | number>): string
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

```ts
sandkit.api.i18n.register(locale: Locale, translations: Record<string, string>): void
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

```ts
sandkit.api.i18n.getLocale(): Locale
```

Defined in: [sandkit/api/i18n.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L47)

Returns the active locale code.

#### Returns

[`Locale`](#locale)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### hasTranslation() :id=hastranslation

```ts
sandkit.api.i18n.hasTranslation(key: string, locale?: Locale): boolean
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

```ts
sandkit.api.i18n.setLocale(locale: Locale): Promise<void>
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

```ts
sandkit.api.i18n.getLanguages(): object[]
```

Defined in: [sandkit/api/i18n.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L73)

Returns metadata for all known languages.

#### Returns

`object`[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getAvailableLocales() :id=getavailablelocales

```ts
sandkit.api.i18n.getAvailableLocales(): Locale[]
```

Defined in: [sandkit/api/i18n.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L85)

Returns locale codes that have registered translations.

#### Returns

[`Locale`](#locale)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### formatNumber() :id=formatnumber

```ts
sandkit.api.i18n.formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

Defined in: [sandkit/api/i18n.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L102)

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

```ts
sandkit.api.i18n.joinKey(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L111)

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

### ~~key()~~ :id=key

```ts
sandkit.api.i18n.key(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L118)

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

```ts
sandkit.api.i18n.getName(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L135)

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

```ts
sandkit.api.i18n.getDescription(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L144)

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

```ts
sandkit.api.i18n.createTranslatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L157)

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

### ~~translatable()~~ :id=translatable

```ts
sandkit.api.i18n.translatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L167)

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

```ts
sandkit.api.i18n.setGlobal(key: string, value: string | (() => string)): void
```

Defined in: [sandkit/api/i18n.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L180)

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

```ts
sandkit.api.i18n.getGlobal(key: string): string | undefined
```

Defined in: [sandkit/api/i18n.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L189)

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

```ts
sandkit.api.i18n.removeGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:198](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L198)

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

### ~~clearGlobal()~~ :id=clearglobal

```ts
sandkit.api.i18n.clearGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L205)

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

```ts
sandkit.api.i18n.getGlobals(): Record<string, string>
```

Defined in: [sandkit/api/i18n.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L212)

Returns all global translation helper values.

#### Returns

`Record`\<`string`, `string`\>

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### formatKeyForDisplay() :id=formatkeyfordisplay

```ts
sandkit.api.i18n.formatKeyForDisplay(keyCode: string): string
```

Defined in: [sandkit/api/i18n.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L221)

Formats a key code for display in UI.

#### Parameters

##### keyCode

`string`

Keyboard key code or binding name.

#### Returns

`string`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
