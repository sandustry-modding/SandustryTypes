# sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.i18n.I18nNumberFormatOptions :id=i18nnumberformatoptions

Defined in: [sandkit/api/i18n.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L92)

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

Defined in: [sandkit/api/i18n.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L94)

Minimum fraction digits.

##### maximumFractionDigits?

```ts
optional maximumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L96)

Maximum fraction digits.

##### useGrouping?

```ts
optional useGrouping?: boolean
```

Defined in: [sandkit/api/i18n.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L98)

When true, use grouping separators.

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.i18n.Locale :id=locale

```ts
Locale = LooseString<"en">
```

Defined in: [sandkit/api/i18n.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L89)

Locale code. `"en"` autocompletes; any locale string is allowed.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.i18n.t() :id=t

```ts
t(key: string, params?: Record<string, string | number>): string
```

Defined in: [sandkit/api/i18n.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L13)

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

***

### sandkit.api.i18n.register() :id=register

```ts
register(locale: Locale, translations: Record<string, string>): void
```

Defined in: [sandkit/api/i18n.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L19)

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

***

### sandkit.api.i18n.getLocale() :id=getlocale

```ts
getLocale(): Locale
```

Defined in: [sandkit/api/i18n.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L21)

Returns the active locale code.

#### Returns

[`Locale`](#locale)

***

### sandkit.api.i18n.hasTranslation() :id=hastranslation

```ts
hasTranslation(key: string, locale?: Locale): boolean
```

Defined in: [sandkit/api/i18n.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L27)

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

***

### sandkit.api.i18n.setLocale() :id=setlocale

```ts
setLocale(locale: Locale): Promise<void>
```

Defined in: [sandkit/api/i18n.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L32)

Sets the active locale.

#### Parameters

##### locale

[`Locale`](#locale)

Locale code to activate.

#### Returns

`Promise`\<`void`\>

***

### sandkit.api.i18n.getLanguages() :id=getlanguages

```ts
getLanguages(): object[]
```

Defined in: [sandkit/api/i18n.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L34)

Returns metadata for all known languages.

#### Returns

`object`[]

***

### sandkit.api.i18n.getAvailableLocales() :id=getavailablelocales

```ts
getAvailableLocales(): Locale[]
```

Defined in: [sandkit/api/i18n.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L36)

Returns locale codes that have registered translations.

#### Returns

[`Locale`](#locale)[]

***

### sandkit.api.i18n.formatNumber() :id=formatnumber

```ts
formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

Defined in: [sandkit/api/i18n.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L42)

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

***

### sandkit.api.i18n.key() :id=key

```ts
key(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L47)

Joins key parts into a single translation key.

#### Parameters

##### parts

...`string`[]

Key segments joined with `.`.

#### Returns

`string`

***

### sandkit.api.i18n.getName() :id=getname

```ts
getName(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L52)

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

***

### sandkit.api.i18n.getDescription() :id=getdescription

```ts
getDescription(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L57)

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

***

### sandkit.api.i18n.translatable() :id=translatable

```ts
translatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L63)

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

***

### sandkit.api.i18n.setGlobal() :id=setglobal

```ts
setGlobal(key: string, value: string | (() => string)): void
```

Defined in: [sandkit/api/i18n.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L69)

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

***

### sandkit.api.i18n.getGlobal() :id=getglobal

```ts
getGlobal(key: string): string | undefined
```

Defined in: [sandkit/api/i18n.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L74)

Returns a global translation helper value.

#### Parameters

##### key

`string`

Global helper key.

#### Returns

`string` \| `undefined`

***

### sandkit.api.i18n.clearGlobal() :id=clearglobal

```ts
clearGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L79)

Removes a global translation helper value.

#### Parameters

##### key

`string`

Global helper key.

#### Returns

`void`

***

### sandkit.api.i18n.getGlobals() :id=getglobals

```ts
getGlobals(): Record<string, string>
```

Defined in: [sandkit/api/i18n.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L81)

Returns all global translation helper values.

#### Returns

`Record`\<`string`, `string`\>

***

### sandkit.api.i18n.formatKeyForDisplay() :id=formatkeyfordisplay

```ts
formatKeyForDisplay(keyCode: string): string
```

Defined in: [sandkit/api/i18n.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L86)

Formats a key code for display in UI.

#### Parameters

##### keyCode

`string`

Keyboard key code or binding name.

#### Returns

`string`
