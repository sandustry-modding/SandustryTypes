# sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.i18n.I18nNumberFormatOptions :id=i18nnumberformatoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L227" target="_blank" rel="noopener">i18n.d.ts:227</a></p>

| Property | Type | Description |
| --- | --- | --- |
| minimumFractionDigits? | number | Minimum fraction digits. |
| maximumFractionDigits? | number | Maximum fraction digits. |
| useGrouping? | boolean | When true, use grouping separators. |

<div class="smt-member-anchors">

##### minimumFractionDigits? <!-- {docsify-ignore} -->

##### maximumFractionDigits? <!-- {docsify-ignore} -->

##### useGrouping? <!-- {docsify-ignore} -->

</div>

Number format options for [formatNumber](?id=formatnumber).

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.i18n.Locale :id=locale

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L224" target="_blank" rel="noopener">i18n.d.ts:224</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.Locale = LooseString&lt;&quot;en&quot;&gt;">

```ts
Locale = LooseString<"en">
```

</div>

Locale code. `"en"` autocompletes; any locale string is allowed.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.i18n.t :id=t

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L23" target="_blank" rel="noopener">i18n.d.ts:23</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.t(key: string, params?: Record&lt;string, string | number&gt;): string">

```ts
t(key: string, params?: Record<string, string | number>): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Translation key. |
| params? | `Record`\<`string`, `string` \\| `number`\> | Placeholder values for the key template. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### params? <!-- {docsify-ignore} -->

</div>

Translates a key with optional parameter substitution.

#### Example

```ts
const message = api.i18n.t("mods|example|count", {
  count: 3,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L40" target="_blank" rel="noopener">i18n.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.register(locale: Locale, translations: Record&lt;string, string&gt;): void">

```ts
register(locale: Locale, translations: Record<string, string>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| locale | [`Locale`](?id=locale) | Locale code (e.g. `en`). |
| translations | `Record`\<`string`, `string`\> | Map of keys to translated strings. |

<div class="smt-member-anchors">

##### locale <!-- {docsify-ignore} -->

##### translations <!-- {docsify-ignore} -->

</div>

Registers translation strings for a locale.

#### Example

```ts
api.i18n.register("en", {
  "mods|example|title": "Example",
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getLocale :id=getlocale

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L47" target="_blank" rel="noopener">i18n.d.ts:47</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getLocale(): Locale">

```ts
getLocale(): Locale
```

</div>

Returns the active locale code.

[`Locale`](?id=locale)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.hasTranslation :id=hastranslation

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L57" target="_blank" rel="noopener">i18n.d.ts:57</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.hasTranslation(key: string, locale?: Locale): boolean">

```ts
hasTranslation(key: string, locale?: Locale): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Translation key. |
| locale? | [`Locale`](?id=locale) | Optional locale; defaults to the active locale. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### locale? <!-- {docsify-ignore} -->

</div>

Returns true when a translation exists for the key.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.setLocale :id=setlocale

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L66" target="_blank" rel="noopener">i18n.d.ts:66</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.setLocale(locale: Locale): Promise&lt;void&gt;">

```ts
setLocale(locale: Locale): Promise<void>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| locale | [`Locale`](?id=locale) | Locale code to activate. |

<div class="smt-member-anchors">

##### locale <!-- {docsify-ignore} -->

</div>

Sets the active locale.

`Promise`\<`void`\>

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getLanguages :id=getlanguages

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L73" target="_blank" rel="noopener">i18n.d.ts:73</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getLanguages(): object[]">

```ts
getLanguages(): object[]
```

</div>

Returns metadata for all known languages.

`object`[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getAvailableLocales :id=getavailablelocales

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L85" target="_blank" rel="noopener">i18n.d.ts:85</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getAvailableLocales(): Locale[]">

```ts
getAvailableLocales(): Locale[]
```

</div>

Returns locale codes that have registered translations.

[`Locale`](?id=locale)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.formatNumber :id=formatnumber

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L102" target="_blank" rel="noopener">i18n.d.ts:102</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.formatNumber(value: number, options?: I18nNumberFormatOptions): string">

```ts
formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| value | `number` | Number to format. |
| options? | [`I18nNumberFormatOptions`](?id=i18nnumberformatoptions) | Intl-style number format options. |

<div class="smt-member-anchors">

##### value <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Formats a number for the active locale.

#### Example

```ts
const formatted = api.i18n.formatNumber(1234.5, {
  maximumFractionDigits: 1,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.joinKey :id=joinkey

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L111" target="_blank" rel="noopener">i18n.d.ts:111</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.joinKey(...parts: string[]): string">

```ts
joinKey(...parts: string[]): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| parts | ...`string`[] | Key segments joined with `.`. |

<div class="smt-member-anchors">

##### parts <!-- {docsify-ignore} -->

</div>

Joins key parts into a single translation key.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.i18n.key~~ :id=key

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L118" target="_blank" rel="noopener">i18n.d.ts:118</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.key(...parts: string[]): string">

```ts
key(...parts: string[]): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| parts | ...`string`[] |  |

<div class="smt-member-anchors">

##### parts <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [joinKey](?id=joinkey) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getName :id=getname

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L135" target="_blank" rel="noopener">i18n.d.ts:135</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getName(definition: object): string">

```ts
getName(definition: object): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | Object with `nameKey` or `name`. |  |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Returns the display name from a definition with nameKey or name.

#### Example

```ts
const name = api.i18n.getName({
  name: "Example Machine",
  nameKey: "structures|exampleMachine|name",
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getDescription :id=getdescription

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L144" target="_blank" rel="noopener">i18n.d.ts:144</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getDescription(definition: object): string">

```ts
getDescription(definition: object): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | Object with `descriptionKey` or `description`. |  |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Returns the description from a definition with descriptionKey or description.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.createTranslatable :id=createtranslatable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L157" target="_blank" rel="noopener">i18n.d.ts:157</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.createTranslatable(key: string, fallback: string): object">

```ts
createTranslatable(key: string, fallback: string): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Translation key. |
| fallback | `string` | Text used when no translation is registered. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### fallback <!-- {docsify-ignore} -->

</div>

Creates a translatable string object with a fallback.

\_\_translatable: true key: string fallback: string

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.i18n.translatable~~ :id=translatable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L167" target="_blank" rel="noopener">i18n.d.ts:167</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.translatable(key: string, fallback: string): object">

```ts
translatable(key: string, fallback: string): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` |  |
| fallback | `string` |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### fallback <!-- {docsify-ignore} -->

</div>

\_\_translatable: true key: string fallback: string

#### Deprecated

Use [createTranslatable](?id=createtranslatable) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.setGlobal :id=setglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L180" target="_blank" rel="noopener">i18n.d.ts:180</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.setGlobal(key: string, value: string | (() =&gt; string)): void">

```ts
setGlobal(key: string, value: string | (() => string)): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Global helper key. |
| value | `string` \\| (() => `string`) | Static string or function that returns the current value. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

</div>

Sets a global string or lazy resolver used in translations.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getGlobal :id=getglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L189" target="_blank" rel="noopener">i18n.d.ts:189</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getGlobal(key: string): string | undefined">

```ts
getGlobal(key: string): string | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Global helper key. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Returns a global translation helper value.

`string` \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.removeGlobal :id=removeglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L198" target="_blank" rel="noopener">i18n.d.ts:198</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.removeGlobal(key: string): void">

```ts
removeGlobal(key: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Global helper key. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Removes a global translation helper value.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.i18n.clearGlobal~~ :id=clearglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L205" target="_blank" rel="noopener">i18n.d.ts:205</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.clearGlobal(key: string): void">

```ts
clearGlobal(key: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [removeGlobal](?id=removeglobal) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getGlobals :id=getglobals

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L212" target="_blank" rel="noopener">i18n.d.ts:212</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getGlobals(): Record&lt;string, string&gt;">

```ts
getGlobals(): Record<string, string>
```

</div>

Returns all global translation helper values.

`Record`\<`string`, `string`\>

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.formatKeyForDisplay :id=formatkeyfordisplay

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L221" target="_blank" rel="noopener">i18n.d.ts:221</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.formatKeyForDisplay(keyCode: string): string">

```ts
formatKeyForDisplay(keyCode: string): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| keyCode | `string` | Keyboard key code or binding name. |

<div class="smt-member-anchors">

##### keyCode <!-- {docsify-ignore} -->

</div>

Formats a key code for display in UI.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>
