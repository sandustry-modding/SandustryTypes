# electron

Renderer Electron bridge exposed by `contextBridge` as `window.electron`.

Source of truth: Sandustry `preload.js` (`contextBridge.exposeInMainWorld('electron', …)`).
Main-process handlers live in `main.js`.

Import from `@sandustry-modding/types/electron` for explicit types, or use the ambient
`electron` / `window.electron` bindings from `@sandustry-modding/types`.

Sync methods use `ipcRenderer.sendSync` and are safe during startup.
Async methods use `ipcRenderer.invoke` unless noted (`openDevTools`, `log`).

## Interfaces <!-- {docsify-ignore} -->

### ElectronBridge :id=electronbridge

<p class="smt-member-path"><code>electron.ElectronBridge</code></p>

Defined in: electron/bridge.d.ts:33

#### Properties

##### localMods

```ts
localMods: ElectronLocalModsApi
```

Defined in: electron/bridge.d.ts:301

Local developer mod folder helpers (`electron.localMods`).

##### macRightMouse

```ts
macRightMouse: ElectronMacRightMouseApi
```

Defined in: electron/bridge.d.ts:396

macOS right-button emulation helpers (`electron.macRightMouse`).

##### platform

```ts
platform: ElectronPlatformApi
```

Defined in: electron/bridge.d.ts:399

Cross-store platform helpers (`electron.platform`).

##### customMaps

```ts
customMaps: ElectronCustomMapsApi
```

Defined in: electron/bridge.d.ts:424

Custom map editor persistence helpers (`electron.customMaps`).

#### Methods

##### getPlatformSync()

```ts
getPlatformSync(): ElectronPlatform
```

Defined in: electron/bridge.d.ts:41

Return the active distribution channel.

###### Returns

[`ElectronPlatform`](#electronplatform)

`"steam"`, `"msstore"`, `"gog"`, or another platform string.

IPC: `get-platform-sync`.

##### getModdingEnabledSync()

```ts
getModdingEnabledSync(): boolean
```

Defined in: electron/bridge.d.ts:50

Return whether local modding is enabled for this build/session.

###### Returns

`boolean`

True when the local mods folder and dev upload paths are enabled.

IPC: `get-modding-enabled-sync`.

##### getIsSteamDeckSync()

```ts
getIsSteamDeckSync(): boolean
```

Defined in: electron/bridge.d.ts:59

Return true on Steam Deck / gamescope hosts.

###### Returns

`boolean`

True when running on Steam Deck class hardware.

IPC: `get-is-steam-deck-sync`.

##### getPreferredSystemLanguagesSync()

```ts
getPreferredSystemLanguagesSync(): string[]
```

Defined in: electron/bridge.d.ts:68

Return BCP-47 language tags preferred by the OS.

###### Returns

`string`[]

Ordered list of preferred language codes.

IPC: `get-preferred-system-languages-sync`.

##### onAppSuspend()

```ts
onAppSuspend(callback: ElectronIpcListener): void
```

Defined in: electron/bridge.d.ts:77

Register a callback for app suspend (sleep / Xbox quick suspend).

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called with IPC event arguments when the app suspends.

IPC: `app-suspend`.

###### Returns

`void`

##### onAppResume()

```ts
onAppResume(callback: ElectronIpcListener): void
```

Defined in: electron/bridge.d.ts:86

Register a callback for app resume.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called with IPC event arguments when the app resumes.

IPC: `app-resume`.

###### Returns

`void`

##### diagnostics()

```ts
diagnostics(): Promise<JsonValueV1>
```

Defined in: electron/bridge.d.ts:95

Return platform diagnostics JSON.

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)\>

Diagnostics object from the active platform integration.

IPC: `platform-diagnostics`.

##### checkLicense()

```ts
checkLicense(): Promise<ElectronLicenseCheckResult>
```

Defined in: electron/bridge.d.ts:106

Check the MS Store license.

Always returns `{ valid: true }` on Steam when platform checks are unavailable.

###### Returns

`Promise`\<[`ElectronLicenseCheckResult`](#electronlicensecheckresult)\>

License validation result.

IPC: `platform-check-license`.

##### writeGameEvent()

```ts
writeGameEvent(eventName: string, dimensions?: Record<string, string>, measurements?: Record<string, number>): Promise<boolean>
```

Defined in: electron/bridge.d.ts:118

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

Defined in: electron/bridge.d.ts:134

Prime the MS Store achievement cache after sign-in.

No-op success on Steam.

###### Parameters

###### ids

`string`[]

Achievement ids to seed in the local cache.

###### Returns

`Promise`\<[`ElectronPrimeAchievementsResult`](#electronprimeachievementsresult)\>

Prime operation result.

IPC: `platform-prime-achievements`.

##### platformShowReauthPrompt()

```ts
platformShowReauthPrompt(reason: string): Promise<ElectronReauthPromptResult>
```

Defined in: electron/bridge.d.ts:146

Show the native MS Store re-auth dialog.

Resolves immediately with `{ dismissed: true }` on Steam.

###### Parameters

###### reason

`string`

`"license-lost"` or `"signed-out"`.

###### Returns

`Promise`\<[`ElectronReauthPromptResult`](#electronreauthpromptresult)\>

Dialog button index or dismissed flag.

IPC: `platform-show-reauth-prompt`.

##### appQuit()

```ts
appQuit(): Promise<ElectronSuccessResult>
```

Defined in: electron/bridge.d.ts:157

Quit the application.

Works in fullscreen where `window.close()` is unreliable.

###### Returns

`Promise`\<[`ElectronSuccessResult`](#electronsuccessresult)\>

`{ success: true }` after scheduling quit.

IPC: `app-quit`.

##### openExternalBrowser()

```ts
openExternalBrowser(url: string): Promise<ElectronOpenUrlResult>
```

Defined in: electron/bridge.d.ts:167

Open an external `https:` URL in the system browser.

###### Parameters

###### url

`string`

Must be an `https:` URL or the call returns `{ success: false, error: 'unsupported-url' }`.

###### Returns

`Promise`\<[`ElectronOpenUrlResult`](#electronopenurlresult)\>

URL open result.

IPC: `open-external-browser`.

##### onXboxUserSignedOut()

```ts
onXboxUserSignedOut(callback: ElectronIpcListener): void
```

Defined in: electron/bridge.d.ts:178

Register a callback for Xbox user sign-out.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called when the Xbox user signs out.

IPC: `xbox-user-signed-out`.

###### Returns

`void`

##### onXboxLicenseLost()

```ts
onXboxLicenseLost(callback: ElectronIpcListener): void
```

Defined in: electron/bridge.d.ts:189

Register a callback for Game Pass / Store license loss.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called when the store license is lost.

IPC: `xbox-license-lost`.

###### Returns

`void`

##### onXboxUserSignedIn()

```ts
onXboxUserSignedIn(callback: ElectronIpcListener): void
```

Defined in: electron/bridge.d.ts:200

Register a callback for Xbox user sign-in.

MS Store only — never fires on Steam.

###### Parameters

###### callback

[`ElectronIpcListener`](#electronipclistener)

Called when the Xbox user signs in.

IPC: `xbox-user-signed-in`.

###### Returns

`void`

##### save()

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: electron/bridge.d.ts:212

Write one compressed save file (`.save`).

###### Parameters

###### id

`string`

Save slot id.

###### name

`string`

Display name for the slot.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Full serialized save payload.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Save operation result with output path on success.

IPC: `save`.

##### saveSerialized()

```ts
saveSerialized(id: string, name: string, dataJson: string, metadata?: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: electron/bridge.d.ts:225

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

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Metadata object merged into the `.save` header line.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Save operation result with output path on success.

IPC: `save-serialized`.

##### load()

```ts
load(id: string): Promise<ElectronLoadResult>
```

Defined in: electron/bridge.d.ts:240

Load one save slot by id.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronLoadResult`](#electronloadresult)\>

Parsed save on success, or `{ success: false, error }`.

IPC: `load`.

##### deleteSave()

```ts
deleteSave(id: string): Promise<ElectronSuccessResult | ElectronFailureResult>
```

Defined in: electron/bridge.d.ts:250

Delete one save slot and its backup file.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronSuccessResult`](#electronsuccessresult) \| [`ElectronFailureResult`](#electronfailureresult)\>

`{ success: true }` after deleting primary and backup files.

IPC: `delete-save`.

##### loadRaw()

```ts
loadRaw(name: string): Promise<ElectronLoadResult | null>
```

Defined in: electron/bridge.d.ts:260

Load a raw save file by filename (including extension).

###### Parameters

###### name

`string`

Filename under the saves folder.

###### Returns

`Promise`\<[`ElectronLoadResult`](#electronloadresult) \| `null`\>

Parsed save result, or `null` when the handler cannot resolve the file.

IPC: `load-raw`.

##### exportSave()

```ts
exportSave(id: string): Promise<ElectronExportSaveResult>
```

Defined in: electron/bridge.d.ts:270

Export one save slot as raw bytes for backup/sharing.

###### Parameters

###### id

`string`

Save slot id.

###### Returns

`Promise`\<[`ElectronExportSaveResult`](#electronexportsaveresult)\>

Raw `.save` bytes on success.

IPC: `export-save`.

##### importSave()

```ts
importSave(bytes: ArrayBuffer | Uint8Array<ArrayBufferLike>): Promise<ElectronImportSaveResult>
```

Defined in: electron/bridge.d.ts:280

Import one save from raw exported bytes.

###### Parameters

###### bytes

`ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\>

Raw `.save` file contents.

###### Returns

`Promise`\<[`ElectronImportSaveResult`](#electronimportsaveresult)\>

Import result with parsed header metadata on success.

IPC: `import-save`.

##### getSaveFiles()

```ts
getSaveFiles(): Promise<ElectronSaveFileMetadata[]>
```

Defined in: electron/bridge.d.ts:289

List save slot metadata parsed from each `.save` header line.

###### Returns

`Promise`\<[`ElectronSaveFileMetadata`](#electronsavefilemetadata)[]\>

Save metadata objects; corrupt entries are omitted.

IPC: `get-save-files`.

##### getSaveFolder()

```ts
getSaveFolder(): Promise<string>
```

Defined in: electron/bridge.d.ts:298

Return the absolute path to the active saves folder.

###### Returns

`Promise`\<`string`\>

Absolute filesystem path to the current user's saves directory.

IPC: `get-save-folder`.

##### getLastPlayedGameSync()

```ts
getLastPlayedGameSync(): string | null
```

Defined in: electron/bridge.d.ts:310

Return the last-played save id JSON string.

###### Returns

`string` \| `null`

JSON string shaped like `{ "id": "…" }`, or `null` when unset/unreadable.

IPC: `get-last-played-game-sync`.

##### saveLastPlayedGame()

```ts
saveLastPlayedGame(game: ElectronLastPlayedGame): Promise<ElectronOperationResult>
```

Defined in: electron/bridge.d.ts:320

Persist the last-played save id.

###### Parameters

###### game

[`ElectronLastPlayedGame`](#electronlastplayedgame)

Object containing the save slot `id`.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Write result for `lastPlayedGame.json`.

IPC: `save-last-played-game`.

##### clearLastPlayedGame()

```ts
clearLastPlayedGame(): Promise<ElectronOperationResult>
```

Defined in: electron/bridge.d.ts:329

Clear the persisted last-played save id.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Delete result for `lastPlayedGame.json`.

IPC: `clear-last-played-game`.

##### saveExistsSync()

```ts
saveExistsSync(id: string): boolean
```

Defined in: electron/bridge.d.ts:339

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

Defined in: electron/bridge.d.ts:348

Return the settings JSON string from disk.

###### Returns

`string` \| `null`

Raw `settings.json` contents, or `null` when missing/unreadable.

IPC: `get-settings-sync`.

##### saveSettings()

```ts
saveSettings(settings: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: electron/bridge.d.ts:358

Persist renderer settings JSON to disk.

###### Parameters

###### settings

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Settings object written to `settings.json`.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Write result for the settings file.

IPC: `save-settings`.

##### setFullscreen()

```ts
setFullscreen(shouldBeFullscreen: boolean): Promise<ElectronOperationResult>
```

Defined in: electron/bridge.d.ts:368

Enter or leave fullscreen mode.

###### Parameters

###### shouldBeFullscreen

`boolean`

Target fullscreen state.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Window fullscreen operation result.

IPC: `set-fullscreen`.

##### toggleFullscreen()

```ts
toggleFullscreen(): Promise<ElectronOperationResult>
```

Defined in: electron/bridge.d.ts:377

Toggle fullscreen mode.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Window fullscreen operation result.

IPC: `toggle-fullscreen`.

##### openDevTools()

```ts
openDevTools(): void
```

Defined in: electron/bridge.d.ts:384

Open Chromium DevTools for the game window.

IPC: `open-devtools` (`send`).

###### Returns

`void`

##### isFilePatchingActiveSync()

```ts
isFilePatchingActiveSync(): boolean
```

Defined in: electron/bridge.d.ts:393

Return true when the Steam patch protocol interceptor is active.

###### Returns

`boolean`

True when patched sources are registered and the interceptor is running.

IPC: `is-file-patching-active-sync`.

##### log()

```ts
log(level: ElectronLogLevel, scope: string, message: string): void
```

Defined in: electron/bridge.d.ts:412

Append one line to the host log file (`logs/main.log`).

Fire-and-forget — never awaits IPC completion.

###### Parameters

###### level

[`ElectronLogLevel`](#electronloglevel)

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

Defined in: electron/bridge.d.ts:421

Return local process/runtime versions.

Useful for bug reports and environment probes.

###### Returns

[`ElectronSystemInfo`](#electronsysteminfo)

Version info read from the preload process object.

***

### ElectronCustomMapsApi :id=electroncustommapsapi

<p class="smt-member-path"><code>electron.ElectronCustomMapsApi</code></p>

Defined in: electron/custom-maps.d.ts:11

Custom map editor persistence helpers exposed as `electron.customMaps`.

#### Methods

##### save()

```ts
save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>
```

Defined in: electron/custom-maps.d.ts:22

Write one custom map file (`.custommap`).

###### Parameters

###### id

`string`

Map id used in the filename.

###### name

`string`

Display name stored in metadata.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

Full custom map JSON payload.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Operation result with written `path` on success.

IPC: `custom-map-save`.

##### load()

```ts
load(id: string): Promise<JsonValueV1>
```

Defined in: electron/custom-maps.d.ts:32

Load one custom map by id.

###### Parameters

###### id

`string`

Map id (filename stem).

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)\>

Parsed map JSON, or `null` when missing or invalid.

IPC: `custom-map-load`.

##### list()

```ts
list(): Promise<JsonValueV1[]>
```

Defined in: electron/custom-maps.d.ts:41

List custom map metadata entries (newest first).

###### Returns

`Promise`\<[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)[]\>

Metadata objects parsed from each `.custommap` header line.

IPC: `custom-map-list`.

##### delete()

```ts
delete(id: string): Promise<ElectronOperationResult>
```

Defined in: electron/custom-maps.d.ts:51

Delete one custom map file.

###### Parameters

###### id

`string`

Map id (filename stem).

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Operation result from the delete handler.

IPC: `custom-map-delete`.

***

### ElectronLocalModsApi :id=electronlocalmodsapi

<p class="smt-member-path"><code>electron.ElectronLocalModsApi</code></p>

Defined in: electron/local-mods.d.ts:14

Local developer mod folder helpers exposed as `electron.localMods`.

#### Methods

##### getFolder()

```ts
getFolder(): Promise<string>
```

Defined in: electron/local-mods.d.ts:22

Return the absolute path to the OS local-mods folder.

###### Returns

`Promise`\<`string`\>

Absolute filesystem path to the local mods root.

IPC: `get-local-mods-folder`.

##### openFolder()

```ts
openFolder(): Promise<ElectronOperationResult>
```

Defined in: electron/local-mods.d.ts:31

Open the local-mods folder in the OS file manager.

###### Returns

`Promise`\<[`ElectronOperationResult`](#electronoperationresult)\>

Operation result from the shell open call.

IPC: `open-local-mods-folder`.

##### list()

```ts
list(): Promise<ElectronLocalModsListResult>
```

Defined in: electron/local-mods.d.ts:42

List installed local mod summaries.

Steam only — MS Store returns `{ ok: false, errorCode: 'unsupported_platform' }`.

###### Returns

`Promise`\<[`ElectronLocalModsListResult`](#electronlocalmodslistresult)\>

Listing result with mod summaries in `data` when `ok` is true.

IPC: `local-mods-list`.

##### upload()

```ts
upload(modId: string): Promise<ElectronLocalModsUploadResult>
```

Defined in: electron/local-mods.d.ts:52

Upload one local mod folder to Steam Workshop.

###### Parameters

###### modId

`string`

Local mod folder id under the local-mods directory.

###### Returns

`Promise`\<[`ElectronLocalModsUploadResult`](#electronlocalmodsuploadresult)\>

Upload result with `errorCode` on failure.

IPC: `local-mods-upload`.

***

### ElectronMacRightMouseApi :id=electronmacrightmouseapi

<p class="smt-member-path"><code>electron.ElectronMacRightMouseApi</code></p>

Defined in: electron/mac-right-mouse.d.ts:8

macOS right-button emulation helpers exposed as `electron.macRightMouse`.

#### Methods

##### watch()

```ts
watch(active: boolean, probeScript?: string): void
```

Defined in: electron/mac-right-mouse.d.ts:17

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

Defined in: electron/mac-right-mouse.d.ts:26

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

Defined in: electron/mac-right-mouse.d.ts:35

Register a callback for synthetic right-button release.

###### Parameters

###### callback

() => `void`

Called when the emulated right button is released.

IPC: `mac-right-mouse-up`.

###### Returns

`void`

***

### ElectronPlatformOverlayApi :id=electronplatformoverlayapi

<p class="smt-member-path"><code>electron.ElectronPlatformOverlayApi</code></p>

Defined in: electron/platform.d.ts:11

Platform overlay browser helpers exposed as `electron.platform.overlay`.

#### Methods

##### openUrl()

```ts
openUrl(url: string): Promise<unknown>
```

Defined in: electron/platform.d.ts:20

Open an `https:` URL in the platform overlay browser when available.

###### Parameters

###### url

`string`

External https URL.

###### Returns

`Promise`\<`unknown`\>

Platform-specific overlay open result (`false` when URL is rejected).

IPC: `platform-overlay-open-url`.

***

### ElectronPlatformApi :id=electronplatformapi

<p class="smt-member-path"><code>electron.ElectronPlatformApi</code></p>

Defined in: electron/platform.d.ts:26

Cross-store platform helpers exposed as `electron.platform`.

#### Properties

##### workshop

```ts
workshop: ElectronWorkshopApi
```

Defined in: electron/platform.d.ts:144

Steam Workshop helpers (Steam only; MS Store calls fail gracefully).

##### overlay

```ts
overlay: ElectronPlatformOverlayApi
```

Defined in: electron/platform.d.ts:147

Platform overlay browser helpers.

#### Methods

##### isInitialized()

```ts
isInitialized(): Promise<boolean>
```

Defined in: electron/platform.d.ts:34

Return true when the platform integration finished startup.

###### Returns

`Promise`\<`boolean`\>

Whether Steam / MS Store integration is ready.

IPC: `platform-is-initialized`.

##### getPlayerName()

```ts
getPlayerName(): Promise<string>
```

Defined in: electron/platform.d.ts:43

Return the signed-in player display name.

###### Returns

`Promise`\<`string`\>

Platform account display name.

IPC: `platform-get-player-name`.

##### getPlayerId()

```ts
getPlayerId(): Promise<string>
```

Defined in: electron/platform.d.ts:52

Return the stable platform player id string.

###### Returns

`Promise`\<`string`\>

Platform-specific player identifier.

IPC: `platform-get-player-id`.

##### getAppId()

```ts
getAppId(): Promise<number>
```

Defined in: electron/platform.d.ts:61

Return the platform app id number.

###### Returns

`Promise`\<`number`\>

Steam App ID or MS Store equivalent.

IPC: `platform-get-app-id`.

##### unlockAchievement()

```ts
unlockAchievement(achievementId: string): Promise<unknown>
```

Defined in: electron/platform.d.ts:71

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

Defined in: electron/platform.d.ts:81

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

Defined in: electron/platform.d.ts:91

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

Defined in: electron/platform.d.ts:102

Write one named blob to platform cloud storage.

###### Parameters

###### fileName

`string`

Cloud file key.

###### data

[`JsonValueV1`](api/shared.jsonvalue.md#jsonvaluev1)

JSON-serializable payload.

###### Returns

`Promise`\<`unknown`\>

Platform cloud save result.

IPC: `platform-cloud-save`.

##### cloudLoad()

```ts
cloudLoad(fileName: string): Promise<unknown>
```

Defined in: electron/platform.d.ts:112

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

Defined in: electron/platform.d.ts:122

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

Defined in: electron/platform.d.ts:132

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

Defined in: electron/platform.d.ts:141

Sync local saves with platform cloud storage.

###### Returns

`Promise`\<`unknown`\>

Cloud sync summary from the platform integration.

IPC: `platform-cloud-sync`.

***

### ElectronSuccessResult :id=electronsuccessresult

<p class="smt-member-path"><code>electron.ElectronSuccessResult</code></p>

Defined in: electron/results.d.ts:10

Successful invoke result from save, settings, and window handlers.

#### Properties

##### success

```ts
success: true
```

Defined in: electron/results.d.ts:12

Always `true` for this branch of the result union.

##### path?

```ts
optional path?: string
```

Defined in: electron/results.d.ts:14

Absolute path written when a handler persists a file (save/custom map).

***

### ElectronFailureResult :id=electronfailureresult

<p class="smt-member-path"><code>electron.ElectronFailureResult</code></p>

Defined in: electron/results.d.ts:20

Failed invoke result from save, settings, and window handlers.

#### Properties

##### success

```ts
success: false
```

Defined in: electron/results.d.ts:22

Always `false` for this branch of the result union.

##### error

```ts
error: string
```

Defined in: electron/results.d.ts:24

Human-readable error message from the main process.

***

### ElectronLicenseCheckResult :id=electronlicensecheckresult

<p class="smt-member-path"><code>electron.ElectronLicenseCheckResult</code></p>

Defined in: electron/results.d.ts:35

MS Store license check result from [ElectronBridge.checkLicense](#checklicense).

#### Properties

##### valid

```ts
valid: boolean
```

Defined in: electron/results.d.ts:37

Whether the current license is valid for play.

##### reason

```ts
reason: string | null
```

Defined in: electron/results.d.ts:39

Failure reason when `valid` is false; otherwise `null`.

##### networkError

```ts
networkError: boolean
```

Defined in: electron/results.d.ts:41

True when the check failed due to network or platform errors.

##### cached

```ts
cached: boolean
```

Defined in: electron/results.d.ts:43

True when the result came from a cached license check.

***

### ElectronSaveInput :id=electronsaveinput

<p class="smt-member-path"><code>electron.ElectronSaveInput</code></p>

Defined in: electron/results.d.ts:49

Parsed game save payload passed to [ElectronBridge.save](#save).

#### Properties

##### id

```ts
id: string
```

Defined in: electron/results.d.ts:51

Save slot id (sanitized filename stem).

##### name

```ts
name: string
```

Defined in: electron/results.d.ts:53

Display name shown in the save UI.

##### data

```ts
data: JsonValueV1
```

Defined in: electron/results.d.ts:55

Full serialized game state (`{ store: … }` shape).

***

### ElectronLoadSuccessResult :id=electronloadsuccessresult

<p class="smt-member-path"><code>electron.ElectronLoadSuccessResult</code></p>

Defined in: electron/results.d.ts:61

Successful load result from [ElectronBridge.load](#load).

#### Properties

##### success

```ts
success: true
```

Defined in: electron/results.d.ts:63

Always `true` for this branch of the result union.

##### data

```ts
data: JsonValueV1
```

Defined in: electron/results.d.ts:65

Parsed save body (`{ store: … }`).

***

### ElectronLoadFailureResult :id=electronloadfailureresult

<p class="smt-member-path"><code>electron.ElectronLoadFailureResult</code></p>

Defined in: electron/results.d.ts:71

Failed load result from [ElectronBridge.load](#load).

#### Properties

##### success

```ts
success: false
```

Defined in: electron/results.d.ts:73

Always `false` for this branch of the result union.

##### error

```ts
error: string
```

Defined in: electron/results.d.ts:75

Human-readable load failure message.

***

### ElectronSaveFileMetadata :id=electronsavefilemetadata

<p class="smt-member-path"><code>electron.ElectronSaveFileMetadata</code></p>

Defined in: electron/results.d.ts:86

Metadata parsed from the first line of one `.save` file.

Returned by [ElectronBridge.getSaveFiles](#getsavefiles).

#### Properties

##### id

```ts
id: string
```

Defined in: electron/results.d.ts:88

Save slot id (filename stem).

##### name

```ts
name: string
```

Defined in: electron/results.d.ts:90

Display name stored in the save header.

##### timestamp

```ts
timestamp: string
```

Defined in: electron/results.d.ts:92

ISO timestamp string when the save was written.

##### playTime?

```ts
optional playTime?: number
```

Defined in: electron/results.d.ts:94

Total play time in milliseconds from the save body.

##### worldId?

```ts
optional worldId?: string | null
```

Defined in: electron/results.d.ts:96

World template id, if present.

##### worldName?

```ts
optional worldName?: string | null
```

Defined in: electron/results.d.ts:98

World display name, if present.

##### seed?

```ts
optional seed?: number | null
```

Defined in: electron/results.d.ts:100

World seed, if present.

##### productionPoints?

```ts
optional productionPoints?: number
```

Defined in: electron/results.d.ts:102

Factory production points at save time.

##### structureCount?

```ts
optional structureCount?: number
```

Defined in: electron/results.d.ts:104

Number of placed structures at save time.

##### resources?

```ts
optional resources?: JsonValueV1
```

Defined in: electron/results.d.ts:106

Resource snapshot (`gold`, `fluxite`, `artifacts`, …).

***

### ElectronExportSaveSuccessResult :id=electronexportsavesuccessresult

<p class="smt-member-path"><code>electron.ElectronExportSaveSuccessResult</code></p>

Defined in: electron/results.d.ts:112

Successful export result from [ElectronBridge.exportSave](#exportsave).

#### Properties

##### success

```ts
success: true
```

Defined in: electron/results.d.ts:114

Always `true` for this branch of the result union.

##### data

```ts
data: Uint8Array
```

Defined in: electron/results.d.ts:116

Raw `.save` file bytes (metadata line + gzip payload).

***

### ElectronImportSaveSuccessResult :id=electronimportsavesuccessresult

<p class="smt-member-path"><code>electron.ElectronImportSaveSuccessResult</code></p>

Defined in: electron/results.d.ts:127

Successful import result from [ElectronBridge.importSave](#importsave).

#### Properties

##### success

```ts
success: true
```

Defined in: electron/results.d.ts:129

Always `true` for this branch of the result union.

##### metaData

```ts
metaData: JsonValueV1
```

Defined in: electron/results.d.ts:131

Metadata parsed from the imported file header line.

***

### ElectronLastPlayedGame :id=electronlastplayedgame

<p class="smt-member-path"><code>electron.ElectronLastPlayedGame</code></p>

Defined in: electron/results.d.ts:140

Last-played save marker written by [ElectronBridge.saveLastPlayedGame](#savelastplayedgame).

#### Properties

##### id?

```ts
optional id?: string
```

Defined in: electron/results.d.ts:142

Save slot id of the last played game.

***

### ElectronSystemInfo :id=electronsysteminfo

<p class="smt-member-path"><code>electron.ElectronSystemInfo</code></p>

Defined in: electron/results.d.ts:150

Local process/runtime versions from [ElectronBridge.getSystemInfo](#getsysteminfo).

Read directly in the preload script — no IPC round trip.

#### Properties

##### platform

```ts
platform: string
```

Defined in: electron/results.d.ts:152

Node `process.platform` (for example `linux`, `win32`).

##### arch

```ts
arch: string
```

Defined in: electron/results.d.ts:154

CPU architecture string from `process.arch`.

##### electronVersion

```ts
electronVersion: string
```

Defined in: electron/results.d.ts:156

Electron runtime version from `process.versions.electron`.

##### chromeVersion

```ts
chromeVersion: string
```

Defined in: electron/results.d.ts:158

Chromium version from `process.versions.chrome`.

##### nodeVersion

```ts
nodeVersion: string
```

Defined in: electron/results.d.ts:160

Node.js version from `process.versions.node`.

***

### ElectronLocalModsListResult :id=electronlocalmodslistresult

<p class="smt-member-path"><code>electron.ElectronLocalModsListResult</code></p>

Defined in: electron/results.d.ts:166

Result from [ElectronLocalModsApi.list](#list-1).

#### Properties

##### ok

```ts
ok: boolean
```

Defined in: electron/results.d.ts:168

True when the listing succeeded.

##### data

```ts
data: JsonValueV1[]
```

Defined in: electron/results.d.ts:170

Local mod summary objects when `ok` is true; otherwise `[]`.

##### errorCode?

```ts
optional errorCode?: string
```

Defined in: electron/results.d.ts:172

Error code when `ok` is false (for example `unsupported_platform`).

***

### ElectronLocalModsUploadResult :id=electronlocalmodsuploadresult

<p class="smt-member-path"><code>electron.ElectronLocalModsUploadResult</code></p>

Defined in: electron/results.d.ts:178

Result from [ElectronLocalModsApi.upload](#upload).

#### Properties

##### ok

```ts
ok: boolean
```

Defined in: electron/results.d.ts:180

True when Workshop upload succeeded.

##### errorCode?

```ts
optional errorCode?: string
```

Defined in: electron/results.d.ts:182

Error code when `ok` is false.

##### detail?

```ts
optional detail?: string
```

Defined in: electron/results.d.ts:184

Extra failure detail logged by the main process.

***

### ElectronOpenUrlResult :id=electronopenurlresult

<p class="smt-member-path"><code>electron.ElectronOpenUrlResult</code></p>

Defined in: electron/results.d.ts:190

Result from [ElectronBridge.openExternalBrowser](#openexternalbrowser).

#### Properties

##### success

```ts
success: boolean
```

Defined in: electron/results.d.ts:192

True when the OS opened the URL.

##### error?

```ts
optional error?: string
```

Defined in: electron/results.d.ts:194

Failure reason (for example `unsupported-url`).

***

### ElectronPrimeAchievementsResult :id=electronprimeachievementsresult

<p class="smt-member-path"><code>electron.ElectronPrimeAchievementsResult</code></p>

Defined in: electron/results.d.ts:200

Result from [ElectronBridge.platformPrimeAchievements](#platformprimeachievements).

#### Properties

##### success

```ts
success: boolean
```

Defined in: electron/results.d.ts:202

True when the cache seed completed.

##### error?

```ts
optional error?: string
```

Defined in: electron/results.d.ts:204

Failure message when `success` is false.

***

### ElectronReauthPromptResult :id=electronreauthpromptresult

<p class="smt-member-path"><code>electron.ElectronReauthPromptResult</code></p>

Defined in: electron/results.d.ts:210

Result from [ElectronBridge.platformShowReauthPrompt](#platformshowreauthprompt).

#### Properties

##### response?

```ts
optional response?: number
```

Defined in: electron/results.d.ts:212

Button index chosen in the native MS Store dialog.

##### dismissed?

```ts
optional dismissed?: boolean
```

Defined in: electron/results.d.ts:214

True on Steam where no dialog is shown.

***

### ElectronWorkshopApi :id=electronworkshopapi

<p class="smt-member-path"><code>electron.ElectronWorkshopApi</code></p>

Defined in: electron/workshop.d.ts:12

Steam Workshop helpers exposed as `electron.platform.workshop`.

Steam only — calls fail gracefully on MS Store.

#### Methods

##### subscribe()

```ts
subscribe(itemId: string | number): Promise<unknown>
```

Defined in: electron/workshop.d.ts:21

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

Defined in: electron/workshop.d.ts:31

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

Defined in: electron/workshop.d.ts:41

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

Defined in: electron/workshop.d.ts:51

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

Defined in: electron/workshop.d.ts:61

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

Defined in: electron/workshop.d.ts:70

Return all subscribed Workshop item ids.

###### Returns

`Promise`\<`unknown`\>

Array of subscribed published file ids.

IPC: `platform-workshop-subscribed-list`.

##### getItem()

```ts
getItem(itemId: string | number): Promise<unknown>
```

Defined in: electron/workshop.d.ts:80

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

Defined in: electron/workshop.d.ts:91

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

Defined in: electron/workshop.d.ts:100

Discover Sandkit Workshop mods installed for the current session.

###### Returns

`Promise`\<`unknown`\>

`{ ok, data: { mods, diagnostics }, error }` discovery payload.

IPC: `platform-workshop-sandkit-mods`.

## Type Aliases <!-- {docsify-ignore} -->

### ElectronPlatform :id=electronplatform

<p class="smt-member-path"><code>electron.ElectronPlatform</code></p>

```ts
ElectronPlatform = "steam" | "msstore" | "gog" | string & object
```

Defined in: electron/primitives.d.ts:10

Sandustry distribution channel string.

Returned by [ElectronBridge.getPlatformSync](#getplatformsync).

***

### ElectronLogLevel :id=electronloglevel

<p class="smt-member-path"><code>electron.ElectronLogLevel</code></p>

```ts
ElectronLogLevel = "debug" | "info" | "warn" | "error"
```

Defined in: electron/primitives.d.ts:17

Severity level written through [ElectronBridge.log](#log).

Maps to the main-process file logger (`logs/main.log`).

***

### ElectronIpcListener :id=electronipclistener

<p class="smt-member-path"><code>electron.ElectronIpcListener</code></p>

```ts
ElectronIpcListener = (...args: unknown[]) => void
```

Defined in: electron/primitives.d.ts:24

Callback registered on IPC event channels such as `app-suspend`.

#### Parameters

##### args

...`unknown`[]

Event-specific payload from the main process (often empty).

#### Returns

`void`

***

### ElectronOperationResult :id=electronoperationresult

<p class="smt-member-path"><code>electron.ElectronOperationResult</code></p>

```ts
ElectronOperationResult = ElectronSuccessResult | ElectronFailureResult
```

Defined in: electron/results.d.ts:30

Result union returned by most save, settings, and window invoke handlers.

***

### ElectronLoadResult :id=electronloadresult

<p class="smt-member-path"><code>electron.ElectronLoadResult</code></p>

```ts
ElectronLoadResult = ElectronLoadSuccessResult | ElectronLoadFailureResult
```

Defined in: electron/results.d.ts:79

Result from [ElectronBridge.load](#load).

***

### ElectronExportSaveResult :id=electronexportsaveresult

<p class="smt-member-path"><code>electron.ElectronExportSaveResult</code></p>

```ts
ElectronExportSaveResult = ElectronExportSaveSuccessResult | ElectronFailureResult
```

Defined in: electron/results.d.ts:120

Result from [ElectronBridge.exportSave](#exportsave).

***

### ElectronImportSaveResult :id=electronimportsaveresult

<p class="smt-member-path"><code>electron.ElectronImportSaveResult</code></p>

```ts
ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult
```

Defined in: electron/results.d.ts:135

Result from [ElectronBridge.importSave](#importsave).
