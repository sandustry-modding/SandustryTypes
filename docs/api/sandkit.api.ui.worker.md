# sandkit.api.ui (worker)

**`Internal`**

Shared `sandkit.api.ui` base — lightweight UI helpers available on workers.

Main thread adds richer UI APIs on top of this shape.

Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

### I18nTextKey :id=i18ntextkey

<p class="smt-member-path"><code>sandkit.api.ui.I18nTextKey (worker)</code></p>

Defined in: [shared/api/ui.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L28)

Translation key with optional parameter substitution.

#### Properties

##### key

```ts
key: string;
```

Defined in: [shared/api/ui.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L30)

Namespaced translation key (for example `ui|save|save`).

##### params?

```ts
optional params?: Record<string, string | number>
```

Defined in: [shared/api/ui.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L32)

Values merged into the translated string.

---

### I18nTranslatable :id=i18ntranslatable

<p class="smt-member-path"><code>sandkit.api.ui.I18nTranslatable (worker)</code></p>

Defined in: [shared/api/ui.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L36)

Value returned by `sandkit.api.i18n.translatable`.

#### Properties

##### \_\_translatable

```ts
\_\_translatable: true
```

Defined in: [shared/api/ui.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L37)

##### key

```ts
key: string;
```

Defined in: [shared/api/ui.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L38)

##### fallback

```ts
fallback: string;
```

Defined in: [shared/api/ui.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L39)

---

### ToastOptions :id=toastoptions

<p class="smt-member-path"><code>sandkit.api.ui.ToastOptions (worker)</code></p>

Defined in: [shared/api/ui.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L43)

Cooldown, style, and auto-dismiss options for [toast](#toast).

#### Properties

##### cooldown?

```ts
optional cooldown?: number
```

Defined in: [shared/api/ui.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L45)

Minimum ms before the same toast can show again.

##### cooldownKey?

```ts
optional cooldownKey?: string
```

Defined in: [shared/api/ui.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L50)

Dedupe key paired with [ToastOptions.cooldown](#cooldown).
Defaults to the message string or `message.key`.

##### duration?

```ts
optional duration?: number | false
```

Defined in: [shared/api/ui.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L55)

Auto-dismiss delay in ms. Default `5000`.
Set `false` to keep the toast until another toast replaces it.

##### variant?

```ts
optional variant?: string & object | "danger" | "hint" | "hole"
```

Defined in: [shared/api/ui.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L57)

Visual style applied to the toast body.

## Type Aliases <!-- {docsify-ignore} -->

### LocalizedText :id=localizedtext

<p class="smt-member-path"><code>sandkit.api.ui.LocalizedText (worker)</code></p>

```ts
LocalizedText = string | I18nTextKey | I18nTranslatable;
```

Defined in: [shared/api/ui.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L22)

Plain text, translation key object, or i18n translatable value.

## Functions <!-- {docsify-ignore} -->

### toast() :id=toast

<p class="smt-member-path"><code>sandkit.api.ui.toast() (worker)</code></p>

```ts
toast(message: LocalizedText, options?: ToastOptions): void
```

Defined in: [shared/api/ui.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L19)

Show a short on-screen toast message.

#### Parameters

##### message

[`LocalizedText`](#localizedtext)

Plain text, translation key, or translatable value.

##### options?

[`ToastOptions`](#toastoptions)

Cooldown, style, and auto-dismiss options.

#### Returns

`void`

#### Example

**Worker entry**

```ts
api.ui.toast({ key: "mods|example|workerToast" });
```
