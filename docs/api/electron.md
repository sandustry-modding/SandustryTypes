# electron

Renderer Electron bridge exposed by `contextBridge` as `window.electron`.

Source of truth: Sandustry `preload.js` (`contextBridge.exposeInMainWorld('electron', …)`).
Main-process handlers live in `main.js`.

Import from `@sandustry-modding/types/electron` for explicit types, or use the ambient
`electron` / `window.electron` bindings from `@sandustry-modding/types`.

Sync methods use `ipcRenderer.sendSync` and are safe during startup.
Async methods use `ipcRenderer.invoke` unless noted (`openDevTools`, `log`).

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### electron.ElectronBridge :id=electronbridge

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L33" target="_blank" rel="noopener">bridge.d.ts:33</a></p>

| Property | Type | Description |
| --- | --- | --- |
| localMods | ElectronLocalModsApi | Local developer mod folder helpers (`electron.localMods`). |
| macRightMouse | ElectronMacRightMouseApi | macOS right-button emulation helpers (`electron.macRightMouse`). |
| platform | ElectronPlatformApi | Cross-store platform helpers (`electron.platform`). |
| customMaps | ElectronCustomMapsApi | Custom map editor persistence helpers (`electron.customMaps`). |

<div class="smt-member-anchors">

##### localMods <!-- {docsify-ignore} -->

##### macRightMouse <!-- {docsify-ignore} -->

##### platform <!-- {docsify-ignore} -->

##### customMaps <!-- {docsify-ignore} -->

</div>

#### Methods

##### getPlatformSync()

```ts
getPlatformSync(): ElectronPlatform
```

Defined in: [electron/bridge.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L41)

Return the active distribution channel.

###### Returns

[`ElectronPlatform`](?id=electronplatform)

`"steam"`, `"msstore"`, `"gog"`, or another platform string.

IPC: `get-platform-sync`.

##### getModdingEnabledSync()

```ts
getModdingEnabledSync(): boolean
```

Defined in: [electron/bridge.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L50)

Return whether local modding is enabled for this build/session.

###### Returns

`boolean`

True when the local mods folder and dev upload paths are enabled.

IPC: `get-modding-enabled-sync`.

##### getIsSteamDeckSync()

```ts
getIsSteamDeckSync(): boolean
```

Defined in: [electron/bridge.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L59)

Return true on Steam Deck / gamescope hosts.

###### Returns

`boolean`

True when running on Steam Deck class hardware.

IPC: `get-is-steam-deck-sync`.

##### getPreferredSystemLanguagesSync()

```ts
getPreferredSystemLanguagesSync(): string[]
```

Defined in: [electron/bridge.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L68)

Return BCP-47 language tags preferred by the OS.

###### Returns

`string`[]

Ordered list of preferred language codes.

IPC: `get-preferred-system-languages-sync`.

##### onAppSuspend()

```ts
onAppSuspend(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L77)

Register a callback for app suspend (sleep / Xbox quick suspend).

###### Parameters

###### callback

[`ElectronIpcListener`](?id=electronipclistener)

Called with IPC event arguments when the app suspends.

IPC: `app-suspend`.

###### Returns

`void`

##### onAppResume()

```ts
onAppResume(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L86)

Register a callback for app resume.

###### Parameters

###### callback

[`ElectronIpcListener`](?id=electronipclistener)

Called with IPC event arguments when the app resumes.

IPC: `app-resume`.

###### Returns

`void`

##### diagnostics()

```ts
diagnostics(): Promise<JsonValueV1>
```

Defined in: [electron/bridge.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L95)

Return platform diagnostics JSON.

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)\>

Diagnostics object from the active platform integration.

IPC: `platform-diagnostics`.

##### checkLicense()

```ts
checkLicense(): Promise<ElectronLicenseCheckResult>
```

Defined in: [electron/bridge.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L106)

Check the MS Store license.

Always returns `{ valid: true }` on Steam when platform checks are unavailable.

###### Returns

`Promise`\<[`ElectronLicenseCheckResult`](?id=electronlicensecheckresult)\>

License validation result.

IPC: `platform-check-license`.

##### writeGameEvent()

```ts
writeGameEvent(eventName: string, dimensions?: Record<string, string>, measurements?: Record<string, number>): Promise<boolean>
```

Defined in: [electron/bridge.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L118)

Send one telemetry event to the platform SDK when available.

###### Parameters

###### eventName

`string`

Telemetry event name.

###### dimensions?

`Record`\<`string`, `string`\>

String key/value dimensions.

###### measurements?

`Record`\<`string`, `number`\>

Numeric measurements.

###### Returns

`Promise`\<`boolean`\>

False when the platform SDK rejects or ignores the event.

IPC: `platform-write-game-event`.

##### platformPrimeAchievements()

```ts
platformPrimeAchievements(ids: string[]): Promise<ElectronPrimeAchievementsResult>
```

Defined in: [electron/bridge.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L134)

Prime the MS Store achievement cache after sign-in.

No-op success on Steam.

###### Parameters

###### ids

`string`[]

Achievement ids to seed in the local cache.

###### Returns

`Promise`\<[`ElectronPrimeAchievementsResult`](?id=electronprimeachievementsresult)\>

Prime operation result.

IPC: `platform-prime-achievements`.

##### platformShowReauthPrompt()

```ts
platformShowReauthPrompt(reason: string): Promise<ElectronReauthPromptResult>
```

Defined in: [electron/bridge.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L146)

Show the native MS Store re-auth dialog.

Resolves immediately with `{ dismissed: true }` on Steam.

###### Parameters

###### reason

`string`

`"license-lost"` or `"signed-out"`.

###### Returns

`Promise`\<[`ElectronReauthPromptResult`](?id=electronreauthpromptresult)\>

Dialog button index or dismissed flag.

IPC: `platform-show-reauth-prompt`.

##### appQuit()

```ts
appQuit(): Promise<ElectronSuccessResult>
```

Defined in: [electron/bridge.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L157)

Quit the application.

Works in fullscreen where `window.close()` is unreliable.

###### Returns

`Promise`\<[`ElectronSuccessResult`](?id=electronsuccessresult)\>

`{ success: true }` after scheduling quit.

IPC: `app-quit`.

##### openExternalBrowser()

```ts
openExternalBrowser(url: string): Promise<ElectronOpenUrlResult>
```

Defined in: [electron/bridge.d.ts:167](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L167)

Open an external `https:` URL in the system browser.

###### Parameters

###### url

`string`

Must be an `https:` URL or the call returns `{ success: false, error: 'unsupported-url' }`.

###### Returns

`Promise`\<[`ElectronOpenUrlResult`](?id=electronopenurlresult)\>

URL open result.

IPC: `open-external-browser`.

##### onXboxUserSignedOut()

```ts
onXboxUserSignedOut(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L178)

Register a callback for Xbox user sign-out.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](?id=electronipclistener)

Called when the Xbox user signs out.

IPC: `xbox-user-signed-out`.

###### Returns

`void`

##### onXboxLicenseLost()

```ts
onXboxLicenseLost(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L189)

Register a callback for Game Pass / Store license loss.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](?id=electronipclistener)

Called when the store license is lost.

IPC: `xbox-license-lost`.

###### Returns

`void`

##### onXboxUserSignedIn()

```ts
onXboxUserSignedIn(callback: ElectronIpcListener): void
```

Defined in: [electron/bridge.d.ts:200](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L200)

Register a callback for Xbox user sign-in.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](?id=electronipclistener)

Called when the Xbox user signs in.

IPC: `xbox-user-signed-in`.

###### Returns

`void`

##### save()

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L212)

Write one compressed save file (`.save`).

###### Parameters

###### id

`string`

Save slot id.

###### name

`string`

Display name for the slot.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)

Full serialized save payload.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Save operation result with output path on success.

IPC: `save`.

##### saveSerialized()

```ts
saveSerialized(id: string, name: string, dataJson: string, metadata?: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L225)

Write one save from pre-serialized JSON and metadata.

###### Parameters

###### id

`string`

Save slot id.

###### name

`string`

Display name for the slot.

###### dataJson

`string`

Stringified save body (gzip-compressed by the main process).

###### metadata?

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)

Metadata object merged into the `.save` header line.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Save operation result with output path on success.

IPC: `save-serialized`.

##### load()

```ts
load(id: string): Promise<ElectronLoadResult>
```

Defined in: [electron/bridge.d.ts:240](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L240)

Load one save slot by id.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronLoadResult`](?id=electronloadresult)\>

Parsed save on success, or `{ success: false, error }`.

IPC: `load`.

##### deleteSave()

```ts
deleteSave(id: string): Promise<ElectronSuccessResult | ElectronFailureResult>
```

Defined in: [electron/bridge.d.ts:250](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L250)

Delete one save slot and its backup file.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronSuccessResult`](?id=electronsuccessresult) \| [`ElectronFailureResult`](?id=electronfailureresult)\>

`{ success: true }` after deleting primary and backup files.

IPC: `delete-save`.

##### loadRaw()

```ts
loadRaw(name: string): Promise<ElectronLoadResult | null>
```

Defined in: [electron/bridge.d.ts:260](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L260)

Load a raw save file by filename (including extension).

###### Parameters

###### name

`string`

Filename under the saves folder.

###### Returns

`Promise`\<[`ElectronLoadResult`](?id=electronloadresult) \| `null`\>

Parsed save result, or `null` when the handler cannot resolve the file.

IPC: `load-raw`.

##### exportSave()

```ts
exportSave(id: string): Promise<ElectronExportSaveResult>
```

Defined in: [electron/bridge.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L270)

Export one save slot as raw bytes for backup/sharing.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronExportSaveResult`](?id=electronexportsaveresult)\>

Raw `.save` bytes on success.

IPC: `export-save`.

##### importSave()

```ts
importSave(bytes: ArrayBuffer | Uint8Array<ArrayBufferLike>): Promise<ElectronImportSaveResult>
```

Defined in: [electron/bridge.d.ts:280](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L280)

Import one save from raw exported bytes.

###### Parameters

###### bytes

`ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\>

Raw `.save` file contents.

###### Returns

`Promise`\<[`ElectronImportSaveResult`](?id=electronimportsaveresult)\>

Import result with parsed header metadata on success.

IPC: `import-save`.

##### getSaveFiles()

```ts
getSaveFiles(): Promise<ElectronSaveFileMetadata[]>
```

Defined in: [electron/bridge.d.ts:289](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L289)

List save slot metadata parsed from each `.save` header line.

###### Returns

`Promise`\<[`ElectronSaveFileMetadata`](?id=electronsavefilemetadata)[]\>

Save metadata objects; corrupt entries are omitted.

IPC: `get-save-files`.

##### getSaveFolder()

```ts
getSaveFolder(): Promise<string>
```

Defined in: [electron/bridge.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L298)

Return the absolute path to the active saves folder.

###### Returns

`Promise`\<`string`\>

Absolute filesystem path to the current user's saves directory.

IPC: `get-save-folder`.

##### getLastPlayedGameSync()

```ts
getLastPlayedGameSync(): string | null
```

Defined in: [electron/bridge.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L310)

Return the last-played save id JSON string.

###### Returns

`string` \| `null`

JSON string shaped like `{ "id": "…" }`, or `null` when unset/unreadable.

IPC: `get-last-played-game-sync`.

##### saveLastPlayedGame()

```ts
saveLastPlayedGame(game: ElectronLastPlayedGame): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:320](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L320)

Persist the last-played save id.

###### Parameters

###### game

[`ElectronLastPlayedGame`](?id=electronlastplayedgame)

Object containing the save slot `id`.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Write result for `lastPlayedGame.json`.

IPC: `save-last-played-game`.

##### clearLastPlayedGame()

```ts
clearLastPlayedGame(): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L329)

Clear the persisted last-played save id.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Delete result for `lastPlayedGame.json`.

IPC: `clear-last-played-game`.

##### saveExistsSync()

```ts
saveExistsSync(id: string): boolean
```

Defined in: [electron/bridge.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L339)

Return whether a save file exists for the given id.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`boolean`

True when `<id>.save` exists in the active saves folder.

IPC: `save-exists-sync`.

##### getSettingsSync()

```ts
getSettingsSync(): string | null
```

Defined in: [electron/bridge.d.ts:348](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L348)

Return the settings JSON string from disk.

###### Returns

`string` \| `null`

Raw `settings.json` contents, or `null` when missing/unreadable.

IPC: `get-settings-sync`.

##### saveSettings()

```ts
saveSettings(settings: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L358)

Persist renderer settings JSON to disk.

###### Parameters

###### settings

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)

Settings object written to `settings.json`.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Write result for the settings file.

IPC: `save-settings`.

##### setFullscreen()

```ts
setFullscreen(shouldBeFullscreen: boolean): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:368](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L368)

Enter or leave fullscreen mode.

###### Parameters

###### shouldBeFullscreen

`boolean`

Target fullscreen state.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Window fullscreen operation result.

IPC: `set-fullscreen`.

##### toggleFullscreen()

```ts
toggleFullscreen(): Promise<ElectronOperationResult>
```

Defined in: [electron/bridge.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L377)

Toggle fullscreen mode.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Window fullscreen operation result.

IPC: `toggle-fullscreen`.

##### openDevTools()

```ts
openDevTools(): void
```

Defined in: [electron/bridge.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L384)

Open Chromium DevTools for the game window.

IPC: `open-devtools` (`send`).

###### Returns

`void`

##### isFilePatchingActiveSync()

```ts
isFilePatchingActiveSync(): boolean
```

Defined in: [electron/bridge.d.ts:393](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L393)

Return true when the Steam patch protocol interceptor is active.

###### Returns

`boolean`

True when patched sources are registered and the interceptor is running.

IPC: `is-file-patching-active-sync`.

##### log()

```ts
log(level: ElectronLogLevel, scope: string, message: string): void
```

Defined in: [electron/bridge.d.ts:412](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L412)

Append one line to the host log file (`logs/main.log`).

Fire-and-forget — never awaits IPC completion.

###### Parameters

###### level

[`ElectronLogLevel`](?id=electronloglevel)

Log severity (`console.log` maps to `"info"` in mod shims).

###### scope

`string`

Category tag (mod id for mod logging).

###### message

`string`

Plain-text log line.

IPC: `log:write` (`send`).

###### Returns

`void`

##### getSystemInfo()

```ts
getSystemInfo(): ElectronSystemInfo
```

Defined in: [electron/bridge.d.ts:421](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/bridge.d.ts#L421)

Return local process/runtime versions.

Useful for bug reports and environment probes.

###### Returns

[`ElectronSystemInfo`](?id=electronsysteminfo)

Version info read from the preload process object.

</div>

<div class="smt-member-card">

### electron.ElectronCustomMapsApi :id=electroncustommapsapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L11" target="_blank" rel="noopener">custom-maps.d.ts:11</a></p>

Custom map editor persistence helpers exposed as `electron.customMaps`.

#### Methods

##### save()

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: [electron/custom-maps.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L22)

Write one custom map file (`.custommap`).

###### Parameters

###### id

`string`

Map id used in the filename.

###### name

`string`

Display name stored in metadata.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)

Full custom map JSON payload.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Operation result with written `path` on success.

IPC: `custom-map-save`.

##### load()

```ts
load(id: string): Promise<JsonValueV1>
```

Defined in: [electron/custom-maps.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L32)

Load one custom map by id.

###### Parameters

###### id

`string`

Map id (filename stem).

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)\>

Parsed map JSON, or `null` when missing or invalid.

IPC: `custom-map-load`.

##### list()

```ts
list(): Promise<JsonValueV1[]>
```

Defined in: [electron/custom-maps.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L41)

List custom map metadata entries (newest first).

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)[]\>

Metadata objects parsed from each `.custommap` header line.

IPC: `custom-map-list`.

##### delete()

```ts
delete(id: string): Promise<ElectronOperationResult>
```

Defined in: [electron/custom-maps.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/custom-maps.d.ts#L51)

Delete one custom map file.

###### Parameters

###### id

`string`

Map id (filename stem).

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Operation result from the delete handler.

IPC: `custom-map-delete`.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsApi :id=electronlocalmodsapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L14" target="_blank" rel="noopener">local-mods.d.ts:14</a></p>

Local developer mod folder helpers exposed as `electron.localMods`.

#### Methods

##### getFolder()

```ts
getFolder(): Promise<string>
```

Defined in: [electron/local-mods.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L22)

Return the absolute path to the OS local-mods folder.

###### Returns

`Promise`\<`string`\>

Absolute filesystem path to the local mods root.

IPC: `get-local-mods-folder`.

##### openFolder()

```ts
openFolder(): Promise<ElectronOperationResult>
```

Defined in: [electron/local-mods.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L31)

Open the local-mods folder in the OS file manager.

###### Returns

`Promise`\<[`ElectronOperationResult`](?id=electronoperationresult)\>

Operation result from the shell open call.

IPC: `open-local-mods-folder`.

##### list()

```ts
list(): Promise<ElectronLocalModsListResult>
```

Defined in: [electron/local-mods.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L42)

List installed local mod summaries.

Steam only — MS Store returns `{ ok: false, errorCode: 'unsupported_platform' }`.

###### Returns

`Promise`\<[`ElectronLocalModsListResult`](?id=electronlocalmodslistresult)\>

Listing result with mod summaries in `data` when `ok` is true.

IPC: `local-mods-list`.

##### upload()

```ts
upload(modId: string): Promise<ElectronLocalModsUploadResult>
```

Defined in: [electron/local-mods.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/local-mods.d.ts#L52)

Upload one local mod folder to Steam Workshop.

###### Parameters

###### modId

`string`

Local mod folder id under the local-mods directory.

###### Returns

`Promise`\<[`ElectronLocalModsUploadResult`](?id=electronlocalmodsuploadresult)\>

Upload result with `errorCode` on failure.

IPC: `local-mods-upload`.

</div>

<div class="smt-member-card">

### electron.ElectronMacRightMouseApi :id=electronmacrightmouseapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L8" target="_blank" rel="noopener">mac-right-mouse.d.ts:8</a></p>

macOS right-button emulation helpers exposed as `electron.macRightMouse`.

#### Methods

##### watch()

```ts
watch(active: boolean, probeScript?: string): void
```

Defined in: [electron/mac-right-mouse.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L17)

Enable or disable global right-button probing on macOS.

###### Parameters

###### active

`boolean`

When true, start watching for synthetic right-click gestures.

###### probeScript?

`string`

Optional probe script forwarded to the main process.

IPC: `mac-right-mouse-watch` (`send`).

###### Returns

`void`

##### onPos()

```ts
onPos(callback: (x: number, y: number) => void): void
```

Defined in: [electron/mac-right-mouse.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L26)

Register a callback for synthetic right-button position updates.

###### Parameters

###### callback

(`x`: `number`, `y`: `number`) => `void`

Receives screen coordinates for the emulated right click.

IPC: `mac-right-mouse-pos`.

###### Returns

`void`

##### onUp()

```ts
onUp(callback: () => void): void
```

Defined in: [electron/mac-right-mouse.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/mac-right-mouse.d.ts#L35)

Register a callback for synthetic right-button release.

###### Parameters

###### callback

() => `void`

Called when the emulated right button is released.

IPC: `mac-right-mouse-up`.

###### Returns

`void`

</div>

<div class="smt-member-card">

### electron.ElectronPlatformOverlayApi :id=electronplatformoverlayapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L11" target="_blank" rel="noopener">platform.d.ts:11</a></p>

Platform overlay browser helpers exposed as `electron.platform.overlay`.

#### Methods

##### openUrl()

```ts
openUrl(url: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L20)

Open an `https:` URL in the platform overlay browser when available.

###### Parameters

###### url

`string`

External https URL.

###### Returns

`Promise`\<`unknown`\>

Platform-specific overlay open result (`false` when URL is rejected).

IPC: `platform-overlay-open-url`.

</div>

<div class="smt-member-card">

### electron.ElectronPlatformApi :id=electronplatformapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L26" target="_blank" rel="noopener">platform.d.ts:26</a></p>

| Property | Type | Description |
| --- | --- | --- |
| workshop | ElectronWorkshopApi | Steam Workshop helpers (Steam only; MS Store calls fail gracefully). |
| overlay | ElectronPlatformOverlayApi | Platform overlay browser helpers. |

<div class="smt-member-anchors">

##### workshop <!-- {docsify-ignore} -->

##### overlay <!-- {docsify-ignore} -->

</div>

Cross-store platform helpers exposed as `electron.platform`.

#### Methods

##### isInitialized()

```ts
isInitialized(): Promise<boolean>
```

Defined in: [electron/platform.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L34)

Return true when the platform integration finished startup.

###### Returns

`Promise`\<`boolean`\>

Whether Steam / MS Store integration is ready.

IPC: `platform-is-initialized`.

##### getPlayerName()

```ts
getPlayerName(): Promise<string>
```

Defined in: [electron/platform.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L43)

Return the signed-in player display name.

###### Returns

`Promise`\<`string`\>

Platform account display name.

IPC: `platform-get-player-name`.

##### getPlayerId()

```ts
getPlayerId(): Promise<string>
```

Defined in: [electron/platform.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L52)

Return the stable platform player id string.

###### Returns

`Promise`\<`string`\>

Platform-specific player identifier.

IPC: `platform-get-player-id`.

##### getAppId()

```ts
getAppId(): Promise<number>
```

Defined in: [electron/platform.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L61)

Return the platform app id number.

###### Returns

`Promise`\<`number`\>

Steam App ID or MS Store equivalent.

IPC: `platform-get-app-id`.

##### unlockAchievement()

```ts
unlockAchievement(achievementId: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L71)

Unlock one platform achievement.

###### Parameters

###### achievementId

`string`

Platform achievement identifier.

###### Returns

`Promise`\<`unknown`\>

Platform achievement unlock result.

IPC: `platform-unlock-achievement`.

##### isAchievementUnlocked()

```ts
isAchievementUnlocked(achievementId: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L81)

Return whether an achievement is already unlocked.

###### Parameters

###### achievementId

`string`

Platform achievement identifier.

###### Returns

`Promise`\<`unknown`\>

True when the achievement is unlocked on the platform account.

IPC: `platform-is-achievement-unlocked`.

##### clearAchievement()

```ts
clearAchievement(achievementId: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L91)

Clear one platform achievement (debug / QA).

###### Parameters

###### achievementId

`string`

Platform achievement identifier.

###### Returns

`Promise`\<`unknown`\>

Platform achievement clear result.

IPC: `platform-clear-achievement`.

##### cloudSave()

```ts
cloudSave(fileName: string, data: JsonValueV1): Promise<unknown>
```

Defined in: [electron/platform.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L102)

Write one named blob to platform cloud storage.

###### Parameters

###### fileName

`string`

Cloud file key.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)

JSON-serializable payload.

###### Returns

`Promise`\<`unknown`\>

Platform cloud save result.

IPC: `platform-cloud-save`.

##### cloudLoad()

```ts
cloudLoad(fileName: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L112)

Read one named blob from platform cloud storage.

###### Parameters

###### fileName

`string`

Cloud file key.

###### Returns

`Promise`\<`unknown`\>

Parsed cloud payload, or `null` when missing.

IPC: `platform-cloud-load`.

##### cloudFileExists()

```ts
cloudFileExists(fileName: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L122)

Return whether a cloud file key exists.

###### Parameters

###### fileName

`string`

Cloud file key.

###### Returns

`Promise`\<`unknown`\>

True when the cloud file is present.

IPC: `platform-cloud-file-exists`.

##### cloudDelete()

```ts
cloudDelete(fileName: string): Promise<unknown>
```

Defined in: [electron/platform.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L132)

Delete one named cloud file.

###### Parameters

###### fileName

`string`

Cloud file key.

###### Returns

`Promise`\<`unknown`\>

Platform cloud delete result.

IPC: `platform-cloud-delete`.

##### cloudSync()

```ts
cloudSync(): Promise<unknown>
```

Defined in: [electron/platform.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/platform.d.ts#L141)

Sync local saves with platform cloud storage.

###### Returns

`Promise`\<`unknown`\>

Cloud sync summary from the platform integration.

IPC: `platform-cloud-sync`.

</div>

<div class="smt-member-card">

### electron.ElectronSuccessResult :id=electronsuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L10" target="_blank" rel="noopener">results.d.ts:10</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | true | Always `true` for this branch of the result union. |
| path? | string | Absolute path written when a handler persists a file (save/custom map). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### path? <!-- {docsify-ignore} -->

</div>

Successful invoke result from save, settings, and window handlers.

</div>

<div class="smt-member-card">

### electron.ElectronFailureResult :id=electronfailureresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L20" target="_blank" rel="noopener">results.d.ts:20</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | false | Always `false` for this branch of the result union. |
| error | string | Human-readable error message from the main process. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error <!-- {docsify-ignore} -->

</div>

Failed invoke result from save, settings, and window handlers.

</div>

<div class="smt-member-card">

### electron.ElectronLicenseCheckResult :id=electronlicensecheckresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L35" target="_blank" rel="noopener">results.d.ts:35</a></p>

| Property | Type | Description |
| --- | --- | --- |
| valid | boolean | Whether the current license is valid for play. |
| reason | string \| null | Failure reason when `valid` is false; otherwise `null`. |
| networkError | boolean | True when the check failed due to network or platform errors. |
| cached | boolean | True when the result came from a cached license check. |

<div class="smt-member-anchors">

##### valid <!-- {docsify-ignore} -->

##### reason <!-- {docsify-ignore} -->

##### networkError <!-- {docsify-ignore} -->

##### cached <!-- {docsify-ignore} -->

</div>

MS Store license check result from [ElectronBridge.checkLicense](?id=checklicense).

</div>

<div class="smt-member-card">

### electron.ElectronSaveInput :id=electronsaveinput

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L49" target="_blank" rel="noopener">results.d.ts:49</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | string | Save slot id (sanitized filename stem). |
| name | string | Display name shown in the save UI. |
| data | JsonValueV1 | Full serialized game state (`{ store: … }` shape). |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Parsed game save payload passed to [ElectronBridge.save](?id=save).

</div>

<div class="smt-member-card">

### electron.ElectronLoadSuccessResult :id=electronloadsuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L61" target="_blank" rel="noopener">results.d.ts:61</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | true | Always `true` for this branch of the result union. |
| data | JsonValueV1 | Parsed save body (`{ store: … }`). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Successful load result from [ElectronBridge.load](?id=load).

</div>

<div class="smt-member-card">

### electron.ElectronLoadFailureResult :id=electronloadfailureresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L71" target="_blank" rel="noopener">results.d.ts:71</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | false | Always `false` for this branch of the result union. |
| error | string | Human-readable load failure message. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error <!-- {docsify-ignore} -->

</div>

Failed load result from [ElectronBridge.load](?id=load).

</div>

<div class="smt-member-card">

### electron.ElectronSaveFileMetadata :id=electronsavefilemetadata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L86" target="_blank" rel="noopener">results.d.ts:86</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | string | Save slot id (filename stem). |
| name | string | Display name stored in the save header. |
| timestamp | string | ISO timestamp string when the save was written. |
| playTime? | number | Total play time in milliseconds from the save body. |
| worldId? | string \| null | World template id, if present. |
| worldName? | string \| null | World display name, if present. |
| seed? | number \| null | World seed, if present. |
| productionPoints? | number | Factory production points at save time. |
| structureCount? | number | Number of placed structures at save time. |
| resources? | JsonValueV1 | Resource snapshot (`gold`, `fluxite`, `artifacts`, …). |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name <!-- {docsify-ignore} -->

##### timestamp <!-- {docsify-ignore} -->

##### playTime? <!-- {docsify-ignore} -->

##### worldId? <!-- {docsify-ignore} -->

##### worldName? <!-- {docsify-ignore} -->

##### seed? <!-- {docsify-ignore} -->

##### productionPoints? <!-- {docsify-ignore} -->

##### structureCount? <!-- {docsify-ignore} -->

##### resources? <!-- {docsify-ignore} -->

</div>

Metadata parsed from the first line of one `.save` file.

Returned by [ElectronBridge.getSaveFiles](?id=getsavefiles).

</div>

<div class="smt-member-card">

### electron.ElectronExportSaveSuccessResult :id=electronexportsavesuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L112" target="_blank" rel="noopener">results.d.ts:112</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | true | Always `true` for this branch of the result union. |
| data | Uint8Array | Raw `.save` file bytes (metadata line + gzip payload). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Successful export result from [ElectronBridge.exportSave](?id=exportsave).

</div>

<div class="smt-member-card">

### electron.ElectronImportSaveSuccessResult :id=electronimportsavesuccessresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L127" target="_blank" rel="noopener">results.d.ts:127</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | true | Always `true` for this branch of the result union. |
| metaData | JsonValueV1 | Metadata parsed from the imported file header line. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### metaData <!-- {docsify-ignore} -->

</div>

Successful import result from [ElectronBridge.importSave](?id=importsave).

</div>

<div class="smt-member-card">

### electron.ElectronLastPlayedGame :id=electronlastplayedgame

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L140" target="_blank" rel="noopener">results.d.ts:140</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id? | string | Save slot id of the last played game. |

<div class="smt-member-anchors">

##### id? <!-- {docsify-ignore} -->

</div>

Last-played save marker written by [ElectronBridge.saveLastPlayedGame](?id=savelastplayedgame).

</div>

<div class="smt-member-card">

### electron.ElectronSystemInfo :id=electronsysteminfo

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L150" target="_blank" rel="noopener">results.d.ts:150</a></p>

| Property | Type | Description |
| --- | --- | --- |
| platform | string | Node `process.platform` (for example `linux`, `win32`). |
| arch | string | CPU architecture string from `process.arch`. |
| electronVersion | string | Electron runtime version from `process.versions.electron`. |
| chromeVersion | string | Chromium version from `process.versions.chrome`. |
| nodeVersion | string | Node.js version from `process.versions.node`. |

<div class="smt-member-anchors">

##### platform <!-- {docsify-ignore} -->

##### arch <!-- {docsify-ignore} -->

##### electronVersion <!-- {docsify-ignore} -->

##### chromeVersion <!-- {docsify-ignore} -->

##### nodeVersion <!-- {docsify-ignore} -->

</div>

Local process/runtime versions from [ElectronBridge.getSystemInfo](?id=getsysteminfo).

Read directly in the preload script — no IPC round trip.

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsListResult :id=electronlocalmodslistresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L166" target="_blank" rel="noopener">results.d.ts:166</a></p>

| Property | Type | Description |
| --- | --- | --- |
| ok | boolean | True when the listing succeeded. |
| data | JsonValueV1[] | Local mod summary objects when `ok` is true; otherwise `[]`. |
| errorCode? | string | Error code when `ok` is false (for example `unsupported_platform`). |

<div class="smt-member-anchors">

##### ok <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

##### errorCode? <!-- {docsify-ignore} -->

</div>

Result from [ElectronLocalModsApi.list](?id=list-1).

</div>

<div class="smt-member-card">

### electron.ElectronLocalModsUploadResult :id=electronlocalmodsuploadresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L178" target="_blank" rel="noopener">results.d.ts:178</a></p>

| Property | Type | Description |
| --- | --- | --- |
| ok | boolean | True when Workshop upload succeeded. |
| errorCode? | string | Error code when `ok` is false. |
| detail? | string | Extra failure detail logged by the main process. |

<div class="smt-member-anchors">

##### ok <!-- {docsify-ignore} -->

##### errorCode? <!-- {docsify-ignore} -->

##### detail? <!-- {docsify-ignore} -->

</div>

Result from [ElectronLocalModsApi.upload](?id=upload).

</div>

<div class="smt-member-card">

### electron.ElectronOpenUrlResult :id=electronopenurlresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L190" target="_blank" rel="noopener">results.d.ts:190</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | boolean | True when the OS opened the URL. |
| error? | string | Failure reason (for example `unsupported-url`). |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error? <!-- {docsify-ignore} -->

</div>

Result from [ElectronBridge.openExternalBrowser](?id=openexternalbrowser).

</div>

<div class="smt-member-card">

### electron.ElectronPrimeAchievementsResult :id=electronprimeachievementsresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L200" target="_blank" rel="noopener">results.d.ts:200</a></p>

| Property | Type | Description |
| --- | --- | --- |
| success | boolean | True when the cache seed completed. |
| error? | string | Failure message when `success` is false. |

<div class="smt-member-anchors">

##### success <!-- {docsify-ignore} -->

##### error? <!-- {docsify-ignore} -->

</div>

Result from [ElectronBridge.platformPrimeAchievements](?id=platformprimeachievements).

</div>

<div class="smt-member-card">

### electron.ElectronReauthPromptResult :id=electronreauthpromptresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L210" target="_blank" rel="noopener">results.d.ts:210</a></p>

| Property | Type | Description |
| --- | --- | --- |
| response? | number | Button index chosen in the native MS Store dialog. |
| dismissed? | boolean | True on Steam where no dialog is shown. |

<div class="smt-member-anchors">

##### response? <!-- {docsify-ignore} -->

##### dismissed? <!-- {docsify-ignore} -->

</div>

Result from [ElectronBridge.platformShowReauthPrompt](?id=platformshowreauthprompt).

</div>

<div class="smt-member-card">

### electron.ElectronWorkshopApi :id=electronworkshopapi

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L12" target="_blank" rel="noopener">workshop.d.ts:12</a></p>

Steam Workshop helpers exposed as `electron.platform.workshop`.

Steam only — calls fail gracefully on MS Store.

#### Methods

##### subscribe()

```ts
subscribe(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L21)

Subscribe to a Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Platform workshop subscribe result.

IPC: `platform-workshop-subscribe`.

##### unsubscribe()

```ts
unsubscribe(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L31)

Unsubscribe from a Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Platform workshop unsubscribe result.

IPC: `platform-workshop-unsubscribe`.

##### installInfo()

```ts
installInfo(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L41)

Return install state for a subscribed Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Install info object from the Steam workshop API wrapper.

IPC: `platform-workshop-install-info`.

##### downloadInfo()

```ts
downloadInfo(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L51)

Return download progress for a Workshop item.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Download info object from the Steam workshop API wrapper.

IPC: `platform-workshop-download-info`.

##### getState()

```ts
getState(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L61)

Return the Steam Workshop item state flags.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Numeric workshop item state from the Steam API wrapper.

IPC: `platform-workshop-state`.

##### getSubscribedItems()

```ts
getSubscribedItems(): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L70)

Return all subscribed Workshop item ids.

###### Returns

`Promise`\<`unknown`\>

Array of subscribed published file ids.

IPC: `platform-workshop-subscribed-list`.

##### getItem()

```ts
getItem(itemId: string | number): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L80)

Fetch Workshop item metadata.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### Returns

`Promise`\<`unknown`\>

Workshop item details from the Steam API wrapper.

IPC: `platform-workshop-get-item`.

##### download()

```ts
download(itemId: string | number, highPriority?: boolean): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L91)

Queue or prioritize a Workshop item download.

###### Parameters

###### itemId

`string` \| `number`

Steam Workshop published file id.

###### highPriority?

`boolean`

When true, request a high-priority download queue slot.

###### Returns

`Promise`\<`unknown`\>

Download request result from the Steam API wrapper.

IPC: `platform-workshop-download`.

##### getSandkitMods()

```ts
getSandkitMods(): Promise<unknown>
```

Defined in: [electron/workshop.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/workshop.d.ts#L100)

Discover Sandkit Workshop mods installed for the current session.

###### Returns

`Promise`\<`unknown`\>

`{ ok, data: { mods, diagnostics }, error }` discovery payload.

IPC: `platform-workshop-sandkit-mods`.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### electron.ElectronPlatform :id=electronplatform

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L10" target="_blank" rel="noopener">primitives.d.ts:10</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronPlatform = &quot;steam&quot; | &quot;msstore&quot; | &quot;gog&quot; | string &amp; object">

```ts
ElectronPlatform = "steam" | "msstore" | "gog" | string & object
```

</div>

Sandustry distribution channel string.

Returned by [ElectronBridge.getPlatformSync](?id=getplatformsync).

</div>

<div class="smt-member-card">

### electron.ElectronLogLevel :id=electronloglevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L17" target="_blank" rel="noopener">primitives.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronLogLevel = &quot;debug&quot; | &quot;info&quot; | &quot;warn&quot; | &quot;error&quot;">

```ts
ElectronLogLevel = "debug" | "info" | "warn" | "error"
```

</div>

Severity level written through [ElectronBridge.log](?id=log).

Maps to the main-process file logger (`logs/main.log`).

</div>

<div class="smt-member-card">

### electron.ElectronIpcListener :id=electronipclistener

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/primitives.d.ts#L24" target="_blank" rel="noopener">primitives.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronIpcListener = (...args: unknown[]) =&gt; void">

```ts
ElectronIpcListener = (...args: unknown[]) => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...`unknown`[] | Event-specific payload from the main process (often empty). |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Callback registered on IPC event channels such as `app-suspend`.

</div>

<div class="smt-member-card">

### electron.ElectronOperationResult :id=electronoperationresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L30" target="_blank" rel="noopener">results.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronOperationResult = ElectronSuccessResult | ElectronFailureResult">

```ts
ElectronOperationResult = ElectronSuccessResult | ElectronFailureResult
```

</div>

Result union returned by most save, settings, and window invoke handlers.

</div>

<div class="smt-member-card">

### electron.ElectronLoadResult :id=electronloadresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L79" target="_blank" rel="noopener">results.d.ts:79</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronLoadResult = ElectronLoadSuccessResult | ElectronLoadFailureResult">

```ts
ElectronLoadResult = ElectronLoadSuccessResult | ElectronLoadFailureResult
```

</div>

Result from [ElectronBridge.load](?id=load).

</div>

<div class="smt-member-card">

### electron.ElectronExportSaveResult :id=electronexportsaveresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L120" target="_blank" rel="noopener">results.d.ts:120</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronExportSaveResult = ElectronExportSaveSuccessResult | ElectronFailureResult">

```ts
ElectronExportSaveResult = ElectronExportSaveSuccessResult | ElectronFailureResult
```

</div>

Result from [ElectronBridge.exportSave](?id=exportsave).

</div>

<div class="smt-member-card">

### electron.ElectronImportSaveResult :id=electronimportsaveresult

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/electron/results.d.ts#L135" target="_blank" rel="noopener">results.d.ts:135</a></p>

<div class="smt-member-sig" data-sig="electron.ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult">

```ts
ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult
```

</div>

Result from [ElectronBridge.importSave](?id=importsave).

</div>
