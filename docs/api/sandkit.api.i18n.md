# sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

### I18nNumberFormatOptions :id=i18nnumberformatoptions

<p class="smt-member-path"><code>sandkit.api.i18n.I18nNumberFormatOptions</code></p>

Defined in: [sandkit/api/i18n.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L168)

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

Defined in: [sandkit/api/i18n.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L170)

Minimum fraction digits.

##### maximumFractionDigits?

```ts
optional maximumFractionDigits?: number
```

Defined in: [sandkit/api/i18n.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L172)

Maximum fraction digits.

##### useGrouping?

```ts
optional useGrouping?: boolean
```

Defined in: [sandkit/api/i18n.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L174)

When true, use grouping separators.

## Type Aliases <!-- {docsify-ignore} -->

### Locale :id=locale

<p class="smt-member-path"><code>sandkit.api.i18n.Locale</code></p>

```ts
Locale = LooseString<"en">
```

Defined in: [sandkit/api/i18n.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L165)

Locale code. `"en"` autocompletes; any locale string is allowed.

## Functions <!-- {docsify-ignore} -->

### t() :id=t

<p class="smt-member-path"><code>sandkit.api.i18n.t()</code></p>

```ts
t(key: string, params?: Record<string, string | number>): string
```

Defined in: [sandkit/api/i18n.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L15)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.t`

***

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.i18n.register()</code></p>

```ts
register(locale: Locale, translations: Record<string, string>): void
```

Defined in: [sandkit/api/i18n.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L24)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.register`

***

### getLocale() :id=getlocale

<p class="smt-member-path"><code>sandkit.api.i18n.getLocale()</code></p>

```ts
getLocale(): Locale
```

Defined in: [sandkit/api/i18n.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L31)

Returns the active locale code.

#### Returns

[`Locale`](#locale)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getLocale`

***

### hasTranslation() :id=hastranslation

<p class="smt-member-path"><code>sandkit.api.i18n.hasTranslation()</code></p>

```ts
hasTranslation(key: string, locale?: Locale): boolean
```

Defined in: [sandkit/api/i18n.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L40)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.hasTranslation`

***

### setLocale() :id=setlocale

<p class="smt-member-path"><code>sandkit.api.i18n.setLocale()</code></p>

```ts
setLocale(locale: Locale): Promise<void>
```

Defined in: [sandkit/api/i18n.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L48)

Sets the active locale.

#### Parameters

##### locale

[`Locale`](#locale)

Locale code to activate.

#### Returns

`Promise`\<`void`\>

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.setLocale`

***

### getLanguages() :id=getlanguages

<p class="smt-member-path"><code>sandkit.api.i18n.getLanguages()</code></p>

```ts
getLanguages(): object[]
```

Defined in: [sandkit/api/i18n.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L55)

Returns metadata for all known languages.

#### Returns

`object`[]

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getLanguages`

***

### getAvailableLocales() :id=getavailablelocales

<p class="smt-member-path"><code>sandkit.api.i18n.getAvailableLocales()</code></p>

```ts
getAvailableLocales(): Locale[]
```

Defined in: [sandkit/api/i18n.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L62)

Returns locale codes that have registered translations.

#### Returns

[`Locale`](#locale)[]

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getAvailableLocales`

***

### formatNumber() :id=formatnumber

<p class="smt-member-path"><code>sandkit.api.i18n.formatNumber()</code></p>

```ts
formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

Defined in: [sandkit/api/i18n.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L71)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.formatNumber`

***

### joinKey() :id=joinkey

<p class="smt-member-path"><code>sandkit.api.i18n.joinKey()</code></p>

```ts
joinKey(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L79)

Joins key parts into a single translation key.

#### Parameters

##### parts

...`string`[]

Key segments joined with `.`.

#### Returns

`string`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.joinKey`

***

### ~~key()~~

```ts
key(...parts: string[]): string
```

Defined in: [sandkit/api/i18n.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L85)

#### Parameters

##### parts

...`string`[]

#### Returns

`string`

#### Deprecated

Use [joinKey](#joinkey) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.i18n.joinKey`

***

### getName() :id=getname

<p class="smt-member-path"><code>sandkit.api.i18n.getName()</code></p>

```ts
getName(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L93)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getName`

***

### getDescription() :id=getdescription

<p class="smt-member-path"><code>sandkit.api.i18n.getDescription()</code></p>

```ts
getDescription(definition: object): string
```

Defined in: [sandkit/api/i18n.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L101)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getDescription`

***

### createTranslatable() :id=createtranslatable

<p class="smt-member-path"><code>sandkit.api.i18n.createTranslatable()</code></p>

```ts
createTranslatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L110)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.createTranslatable`

***

### ~~translatable()~~

```ts
translatable(key: string, fallback: string): object
```

Defined in: [sandkit/api/i18n.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L116)

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

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.i18n.createTranslatable`

***

### setGlobal() :id=setglobal

<p class="smt-member-path"><code>sandkit.api.i18n.setGlobal()</code></p>

```ts
setGlobal(key: string, value: string | (() => string)): void
```

Defined in: [sandkit/api/i18n.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L125)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.setGlobal`

***

### getGlobal() :id=getglobal

<p class="smt-member-path"><code>sandkit.api.i18n.getGlobal()</code></p>

```ts
getGlobal(key: string): string | undefined
```

Defined in: [sandkit/api/i18n.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L133)

Returns a global translation helper value.

#### Parameters

##### key

`string`

Global helper key.

#### Returns

`string` \| `undefined`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getGlobal`

***

### removeGlobal() :id=removeglobal

<p class="smt-member-path"><code>sandkit.api.i18n.removeGlobal()</code></p>

```ts
removeGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L141)

Removes a global translation helper value.

#### Parameters

##### key

`string`

Global helper key.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.removeGlobal`

***

### ~~clearGlobal()~~

```ts
clearGlobal(key: string): void
```

Defined in: [sandkit/api/i18n.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L147)

#### Parameters

##### key

`string`

#### Returns

`void`

#### Deprecated

Use [removeGlobal](#removeglobal) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.i18n.removeGlobal`

***

### getGlobals() :id=getglobals

<p class="smt-member-path"><code>sandkit.api.i18n.getGlobals()</code></p>

```ts
getGlobals(): Record<string, string>
```

Defined in: [sandkit/api/i18n.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L154)

Returns all global translation helper values.

#### Returns

`Record`\<`string`, `string`\>

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getGlobals`

***

### formatKeyForDisplay() :id=formatkeyfordisplay

<p class="smt-member-path"><code>sandkit.api.i18n.formatKeyForDisplay()</code></p>

```ts
formatKeyForDisplay(keyCode: string): string
```

Defined in: [sandkit/api/i18n.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/i18n.d.ts#L162)

Formats a key code for display in UI.

#### Parameters

##### keyCode

`string`

Keyboard key code or binding name.

#### Returns

`string`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.formatKeyForDisplay`
