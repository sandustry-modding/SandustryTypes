window.SMT_SEARCH_INDEX = [
  {
    "title": "Sandkit API",
    "body": "Community reference for the live Sandustry sandkit modding API: every namespace, method, and enum — reverse-engineered and kept in sync with the game. Install types as @sandustry-modding/types. New to modding? Start with the step-by-step guides: - Getting started — what a mod is, required files, and a minimal example - The mod lifecycle — compilation, load order, events, and hooks - modinfo.json reference — manifest fields, limits, and capabilities - Patching with patches.json — bundle find-and-replace patches - Worker mods — simulation-worker entry and shared buffers - Publishing to Steam Workshop — packaging and workshop.json All guides → Open generated Sandkit pages from Search. Empty search lists namespaces. Typed search finds methods and types by live sandkit path. Direct pages: - Electron — host preload bridge (window.electron), not part of sandkit - Overview — when to use the bridge and IPC patterns - API — generated electron reference - Mod files — not runtime sandkit objects - TypeScript types — modinfo.json, patches.json, and workshop.json - JSON Schema — raw schema URLs for editors - Full API reference — every namespace on one page",
    "path": "/",
    "id": ""
  },
  {
    "title": "Sandkit API.Ambient types (preferred)",
    "body": "Load the host sandkit ambient with a triple-slash reference. Put it at the top of main.js / worker.js, or in a small ambient .d.ts that your tsconfig / jsconfig includes: Works in .ts and .js (including checked JS). Do not put @sandustry-modding/types under compilerOptions.types — that list only loads packages from node modules/@types. Use the ambient sandkit free name in main.js. In worker.js, type the API as WorkerSandkitApi — worker and main surfaces overlap but are not the same. - Changelog — package and docs history - Official Sandkit API — host API from the game - npm package - Mod template — starter mod and setup guide - Official Sandustry wiki From the package repo root:",
    "path": "/",
    "id": ""
  },
  {
    "title": "configs",
    "body": "Sandkit mod file schemas: modinfo.json, patches.json, and workshop.json. These are not runtime sandkit properties. Import from @sandustry-modding/types/configs when typing mod folder config files. JSON Schema (GitHub Pages): https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json - Official docs - JSON Schema docs",
    "path": "/api/configs",
    "id": ""
  },
  {
    "title": "configs.ConfigSchemaNumber",
    "body": "Property Type Description --- --- --- type \"number\" Discriminator. Must be \"number\". default number Value used when the player has not changed the setting. min? number Inclusive lower bound for the setting. max? number Inclusive upper bound for the setting. step? number UI step size for the number control. label? string Plain-text label shown in the settings UI. labelKey? string i18n key for the settings label (preferred over label when both exist). description? string Plain-text help text for the setting. descriptionKey? string i18n key for the setting help text. type default min? max? step? label? labelKey? description? descriptionKey? Number setting in modinfo.json configSchema.",
    "path": "/api/configs",
    "id": "configschemanumber"
  },
  {
    "title": "configs.ConfigSchemaBoolean",
    "body": "Property Type Description --- --- --- type \"boolean\" Discriminator. Must be \"boolean\". default boolean Value used when the player has not changed the setting. label? string Plain-text label shown in the settings UI. labelKey? string i18n key for the settings label. description? string Plain-text help text for the setting. descriptionKey? string i18n key for the setting help text. type default label? labelKey? description? descriptionKey? Boolean setting in modinfo.json configSchema.",
    "path": "/api/configs",
    "id": "configschemaboolean"
  },
  {
    "title": "configs.ConfigSchemaChoiceOption",
    "body": "Property Type Description --- --- --- value string Stored value written when the player picks this option. label? string Plain-text label for the option. labelKey? string i18n key for the option label. value label? labelKey? One option inside a ConfigSchemaChoice.",
    "path": "/api/configs",
    "id": "configschemachoiceoption"
  },
  {
    "title": "configs.ConfigSchemaChoice",
    "body": "Property Type Description --- --- --- type \"choice\" Discriminator. Must be \"choice\". default string Default option ConfigSchemaChoiceOption.value. label? string Plain-text label shown in the settings UI. labelKey? string i18n key for the settings label. description? string Plain-text help text for the setting. descriptionKey? string i18n key for the setting help text. options readonly ConfigSchemaChoiceOption[] Allowed choices for this setting. type default label? labelKey? description? descriptionKey? options Choice setting in modinfo.json configSchema.",
    "path": "/api/configs",
    "id": "configschemachoice"
  },
  {
    "title": "configs.TextureOverride",
    "body": "Property Type Description --- --- --- path string Path to the replacement image, relative to the mod root. frameWidth? number Width in pixels of one animation frame. frames? number Number of frames in the spritesheet. intervalMs? number Milliseconds between animation frames. path frameWidth? frames? intervalMs? Animated (or static) texture replacement for a vanilla asset id. See Official docs",
    "path": "/api/configs",
    "id": "textureoverride"
  },
  {
    "title": "configs.ModProvide",
    "body": "Property Type Description --- --- --- kind string Kind of provided content (for example \"structureTextures\"). id string Id of this provide entry within its kind. textureOverrides? Record Texture paths keyed by the vanilla or structure texture id they replace. kind id textureOverrides? Optional content pack exposed by this mod for other mods or the game to consume. See Official docs",
    "path": "/api/configs",
    "id": "modprovide"
  },
  {
    "title": "configs.ModMapBlueprints",
    "body": "Property Type Description --- --- --- terrain? string Terrain color map image. lights? string Lights layout image. sensors? string Sensors layout image. authorization? string Authorization zones image. wall? string Wall layout image. lightsMeta? string Lights metadata image. decor? string Decor layout image. config? string Map config JSON path. terrain? lights? sensors? authorization? wall? lightsMeta? decor? config? Blueprint image paths for a custom map pack. Paths are relative to the mod root. See Official docs",
    "path": "/api/configs",
    "id": "modmapblueprints"
  },
  {
    "title": "configs.ModMapPoint",
    "body": "Property Type Description --- --- --- x number World X in pixels. y number World Y in pixels. x y World-pixel spawn or unstuck point. See Official docs",
    "path": "/api/configs",
    "id": "modmappoint"
  },
  {
    "title": "configs.ModMapTopBounds",
    "body": "Property Type Description --- --- --- hard? number Hard top bound in world pixels. soft? number Soft top bound in world pixels. hard? soft? Vertical camera / travel bounds for the custom map. See Official docs",
    "path": "/api/configs",
    "id": "modmaptopbounds"
  },
  {
    "title": "configs.ModMapDepthLight",
    "body": "Property Type Description --- --- --- startY? number World Y where depth light scaling starts. endY? number World Y where depth light scaling ends. maxSize? number Maximum light size at the shallow end of the range. minSize? number Minimum light size at the deep end of the range. startY? endY? maxSize? minSize? Depth-based light sizing for the custom map. See Official docs",
    "path": "/api/configs",
    "id": "modmapdepthlight"
  },
  {
    "title": "configs.ModMapParallax",
    "body": "Property Type Description --- --- --- widthScale? number Horizontal scale of the parallax layer. offsetY? number Vertical offset of the parallax layer in pixels. widthScale? offsetY? Parallax background tuning for the custom map. See Official docs",
    "path": "/api/configs",
    "id": "modmapparallax"
  },
  {
    "title": "configs.ModMapColorMappingLayers",
    "body": "Property Type Description --- --- --- background? string Background terrain id for this blueprint RGB. foreground? string Foreground terrain id for this blueprint RGB. background? foreground? Color-map cell that paints both background and foreground terrain. See Official docs",
    "path": "/api/configs",
    "id": "modmapcolormappinglayers"
  },
  {
    "title": "configs.ModMapDefinition",
    "body": "Property Type Description --- --- --- blueprints ModMapBlueprints Paths to blueprint images and map config under the mod root. width number Map width in cells. height number Map height in cells. spawn? ModMapPoint Player spawn position in world pixels. unstuck? ModMapPoint Unstuck / rescue position in world pixels. deployment? string Deployment mode for the map (for example \"skip\"). topBounds? ModMapTopBounds Vertical travel bounds at the top of the world. depthLight? ModMapDepthLight Depth-based light size curve. parallax? ModMapParallax Parallax background tuning. colorMappings? Record Maps blueprint RGB keys (\"r, g, b\") to terrain ids or layered terrain. blueprints width height spawn? unstuck? deployment? topBounds? depthLight? parallax? colorMappings? Custom map pack block in modinfo.json. See Official docs",
    "path": "/api/configs",
    "id": "modmapdefinition"
  },
  {
    "title": "configs.ModGameVersion",
    "body": "Property Type Description --- --- --- minimum? string Lowest supported game version string. maximum? string Highest supported game version string. minimum? maximum? Compatible game version range for the mod. See Official docs",
    "path": "/api/configs",
    "id": "modgameversion"
  },
  {
    "title": "configs.ModInfo",
    "body": "Property Type Description --- --- --- $schema? string Optional JSON Schema URL for editors (for example VS Code). Not read by the game loader. manifestVersion 1 Manifest format version. Must be 1 for Sandkit apiVersion 1. id string Unique mod id. Prefer author.mod-name (matches folder / Workshop identity). name string Display name shown in the mod list and Workshop UI. version string Semver-style mod version string. apiVersion 1 Sandkit host API version this mod targets. Must be 1. entry? string Main-thread script path relative to the mod root (for example \"main.js\"). Omit for texture-only, map-only, or config-only mods that declare another capability instead. workerEntry? string Simulation-worker script path relative to the mod root. Required when the mod registers worker hooks or uses worker-only APIs. patches? string Path to the patches file relative to the mod root (usually \"patches.json\"). When omitted, a present patches.json may still auto-load per official docs. description? string Long description shown in the mod list / Workshop. author? string Author display name. gameVersion? ModGameVersion Inclusive game version range this mod claims to support. dependencies? string[] Other mod ids that should load with this mod. loadOrder? number Relative load priority. Lower values load earlier; higher values load later. configSchema? Record Player-facing settings schema. Keys are setting ids; values define type and UI. Read at runtime with api.settings.get. configOverrides? Record Paths to JSON config overrides keyed by vanilla config id (for example \"drill\"). shaderOverrides? Record Paths to GLSL shader replacements keyed by shader id (for example \"sky\"). textureOverrides? Record Texture replacements keyed by vanilla texture id. A string value is a path; an object adds spritesheet frame metadata. provides? ModProvide[] Optional content this mod publishes for others to consume. map? ModMapDefinition Embedded custom map pack definition for this mod. $schema? manifestVersion id name version apiVersion entry? workerEntry? patches? description? author? gameVersion? dependencies? loadOrder? configSchema? configOverrides? shaderOverrides? textureOverrides? provides? map? Sandkit mod manifest (modinfo.json). Required for every mod folder. Minimal script mods need manifestVersion, id, name, version, apiVersion, and entry. At least one capability is required: entry, workerEntry, configOverrides, textureOverrides, provides, or map. configSchema alone does not count. See Official docs",
    "path": "/api/configs",
    "id": "modinfo"
  },
  {
    "title": "configs.BundlePatchRegex",
    "body": "Property Type Description --- --- --- pattern string JavaScript regex pattern source (without surrounding / delimiters). Capture groups may be referenced from BundlePatch.code as $1, $2, … flags? string Optional regex flags (for example \"g\" or \"m\"). pattern flags? Regex finder when the target is not a plain BundlePatch.find string. See Official docs",
    "path": "/api/configs",
    "id": "bundlepatchregex"
  },
  {
    "title": "configs.BundlePatch",
    "body": "Property Type Description --- --- --- file PatchTargetFile Compiled bundle to modify. find? string Exact source substring to locate in the bundle. Mutually exclusive with regex in typical patches. code? string Replacement or inserted source text. Official examples use code; some loaders also accept replace. replace? string Alias of code used by some patch loaders and workshop mods. operation? PatchOperation How to apply the match. Defaults to replace-style behaviour when omitted in common workshop patches. expectedMatches? number \\ \"any\" How many times find / regex must match. Use a number (often 1) so the load fails on miss or over-match. Some loaders accept \"any\". regex? BundlePatchRegex Regex-based locator instead of a literal find string. before? string Text inserted before the match when operation is \"wrap\". after? string Text inserted after the match when operation is \"wrap\". id? string Optional stable id for logging and tooling. atomicGroup? string Group id shared by patches that must all succeed or all fail together. Use the same string on paired main (js/bundle.js) and worker (js/simulation-worker.js) patches. occurrence? number \\ \"all\" Which match to rewrite when find / regex hits more than once. \"all\" (default when omitted in the loader) or a 1-based index. Must not exceed expectedMatches when both are numbers. description? string Human-readable note for maintainers. Not required by the official schema. file find? code? replace? operation? expectedMatches? regex? before? after? id? atomicGroup? occurrence? description? One entry in patches.json. The file is an array of these objects. Prefer expectedMatches so a missed or duplicated match fails loudly. When several patches must succeed together (for example main + worker), set the same atomicGroup on each. Example patches.json example See Official docs",
    "path": "/api/configs",
    "id": "bundlepatch"
  },
  {
    "title": "configs.BundlePatchesDocument",
    "body": "Property Type Description --- --- --- $schema? string Optional JSON Schema URL for editors (for example VS Code). Not read by the game loader. patches BundlePatch[] Ordered patch list (same as the bare-array game format). $schema? patches Editor-friendly patches.json wrapper with an optional $schema URL. The game loader expects a bare BundlePatch array. Prefer that array in shipped mods. Use this object shape only when your editor needs inline $schema.",
    "path": "/api/configs",
    "id": "bundlepatchesdocument"
  },
  {
    "title": "configs.WorkshopJson",
    "body": "Property Type Description --- --- --- schemaVersion 1 File format version. Must be 1. publishedFileId string Steam Workshop published file id. Managed by the publisher. schemaVersion publishedFileId Links a local mod folder to its Steam Workshop item. Example workshop.json",
    "path": "/api/configs",
    "id": "workshopjson"
  },
  {
    "title": "configs.ConfigSchemaEntry",
    "body": "One entry under modinfo.json configSchema. Keys of configSchema are setting ids read via api.settings.get. See Official docs",
    "path": "/api/configs",
    "id": "configschemaentry"
  },
  {
    "title": "configs.ModMapColorMapping",
    "body": "One map.colorMappings value: a single terrain id, or layered background/foreground ids. See Official docs",
    "path": "/api/configs",
    "id": "modmapcolormapping"
  },
  {
    "title": "configs.PatchTargetFile",
    "body": "Known compiled bundle paths the loader can patch. Value Role --- --- js/bundle.js Main renderer js/manager-worker.js Manager worker js/simulation-worker.js Simulation workers js/utility-worker.js Utility worker See Official docs",
    "path": "/api/configs",
    "id": "patchtargetfile"
  },
  {
    "title": "configs.PatchOperation",
    "body": "Supported patch operations. Value Behaviour --- --- replace Replace the matched text with BundlePatch.code / BundlePatch.replace remove Delete the matched text insertBefore Insert BundlePatch.code before the match insertAfter Insert BundlePatch.code after the match wrap Surround the match with BundlePatch.before and BundlePatch.after See Official docs",
    "path": "/api/configs",
    "id": "patchoperation"
  },
  {
    "title": "configs.BundlePatchesFile",
    "body": "Root shape of patches.json: a bare BundlePatch array (game format), or a BundlePatchesDocument object when the file includes $schema. See Official docs",
    "path": "/api/configs",
    "id": "bundlepatchesfile"
  },
  {
    "title": "electron",
    "body": "Renderer Electron bridge exposed by contextBridge as window.electron. Source of truth: Sandustry preload.js (contextBridge.exposeInMainWorld('electron', …)). Main-process handlers live in main.js. Import from @sandustry-modding/types/electron for explicit types, or use the ambient electron / window.electron bindings from @sandustry-modding/types. Sync methods use ipcRenderer.sendSync and are safe during startup. Async methods use ipcRenderer.invoke unless noted (openDevTools, log).",
    "path": "/api/electron",
    "id": ""
  },
  {
    "title": "electron.ElectronBridge",
    "body": "Property Type Description --- --- --- localMods ElectronLocalModsApi Local developer mod folder helpers (electron.localMods). macRightMouse ElectronMacRightMouseApi macOS right-button emulation helpers (electron.macRightMouse). platform ElectronPlatformApi Cross-store platform helpers (electron.platform). customMaps ElectronCustomMapsApi Custom map editor persistence helpers (electron.customMaps). localMods macRightMouse platform customMaps Methods getPlatformSync() Defined in: electron/bridge.d.ts:41 Return the active distribution channel. Returns ElectronPlatform \"steam\", \"msstore\", \"gog\", or another platform string. IPC: get-platform-sync. getModdingEnabledSync() Defined in: electron/bridge.d.ts:50 Return whether local modding is enabled for this build/session. Returns boolean True when the local mods folder and dev upload paths are enabled. IPC: get-modding-enabled-sync. getIsSteamDeckSync() Defined in: electron/bridge.d.ts:59 Return true on Steam Deck / gamescope hosts. Returns boolean True when running on Steam Deck class hardware. IPC: get-is-steam-deck-sync. getPreferredSystemLanguagesSync() Defined in: electron/bridge.d.ts:68 Return BCP-47 language tags preferred by the OS. Returns string[] Ordered list of preferred language codes. IPC: get-preferred-system-languages-sync. onAppSuspend() Defined in: electron/bridge.d.ts:77 Register a callback for app suspend (sleep / Xbox quick suspend). Parameters callback ElectronIpcListener Called with IPC event arguments when the app suspends. IPC: app-suspend. Returns void onAppResume() Defined in: electron/bridge.d.ts:86 Register a callback for app resume. Parameters callback ElectronIpcListener Called with IPC event arguments when the app resumes. IPC: app-resume. Returns void diagnostics() Defined in: electron/bridge.d.ts:95 Return platform diagnostics JSON. Returns Promise\\ Diagnostics object from the active platform integration. IPC: platform-diagnostics. checkLicense() Defined in: electron/bridge.d.ts:106 Check the MS Store license. Always returns { valid: true } on Steam when platform checks are unavailable. Returns Promise\\ License validation result. IPC: platform-check-license. writeGameEvent() Defined in: electron/bridge.d.ts:118 Send one telemetry event to the platform SDK when available. Parameters eventName string Telemetry event name. dimensions? Record\\ String key/value dimensions. measurements? Record\\ Numeric measurements. Returns Promise\\ False when the platform SDK rejects or ignores the event. IPC: platform-write-game-event. platformPrimeAchievements() Defined in: electron/bridge.d.ts:134 Prime the MS Store achievement cache after sign-in. No-op success on Steam. Parameters ids string[] Achievement ids to seed in the local cache. Returns Promise\\ Prime operation result. IPC: platform-prime-achievements. platformShowReauthPrompt() Defined in: electron/bridge.d.ts:146 Show the native MS Store re-auth dialog. Resolves immediately with { dismissed: true } on Steam. Parameters reason string \"license-lost\" or \"signed-out\". Returns Promise\\ Dialog button index or dismissed flag. IPC: platform-show-reauth-prompt. appQuit() Defined in: electron/bridge.d.ts:157 Quit the application. Works in fullscreen where window.close() is unreliable. Returns Promise\\ { success: true } after scheduling quit. IPC: app-quit. openExternalBrowser() Defined in: electron/bridge.d.ts:167 Open an external https: URL in the system browser. Parameters url string Must be an https: URL or the call returns { success: false, error: 'unsupported-url' }. Returns Promise\\ URL open result. IPC: open-external-browser. onXboxUserSignedOut() Defined in: electron/bridge.d.ts:178 Register a callback for Xbox user sign-out. MS Store only — never fires on Steam. Parameters callback ElectronIpcListener Called when the Xbox user signs out. IPC: xbox-user-signed-out. Returns void onXboxLicenseLost() Defined in: electron/bridge.d.ts:189 Register a callback for Game Pass / Store license loss. MS Store only — never fires on Steam. Parameters callback ElectronIpcListener Called when the store license is lost. IPC: xbox-license-lost. Returns void onXboxUserSignedIn() Defined in: electron/bridge.d.ts:200 Register a callback for Xbox user sign-in. MS Store only — never fires on Steam. Parameters callback ElectronIpcListener Called when the Xbox user signs in. IPC: xbox-user-signed-in. Returns void save() Defined in: electron/bridge.d.ts:212 Write one compressed save file (.save). Parameters id string Save slot id. name string Display name for the slot. data JsonValueV1 Full serialized save payload. Returns Promise\\ Save operation result with output path on success. IPC: save. saveSerialized() Defined in: electron/bridge.d.ts:225 Write one save from pre-serialized JSON and metadata. Parameters id string Save slot id. name string Display name for the slot. dataJson string Stringified save body (gzip-compressed by the main process). metadata? JsonValueV1 Metadata object merged into the .save header line. Returns Promise\\ Save operation result with output path on success. IPC: save-serialized. load() Defined in: electron/bridge.d.ts:240 Load one save slot by id. Parameters id string Save slot id. Returns Promise\\ Parsed save on success, or { success: false, error }. IPC: load. deleteSave() Defined in: electron/bridge.d.ts:250 Delete one save slot and its backup file. Parameters id string Save slot id. Returns Promise\\ { success: true } after deleting primary and backup files. IPC: delete-save. loadRaw() Defined in: electron/bridge.d.ts:260 Load a raw save file by filename (including extension). Parameters name string Filename under the saves folder. Returns Promise\\ Parsed save result, or null when the handler cannot resolve the file. IPC: load-raw. exportSave() Defined in: electron/bridge.d.ts:270 Export one save slot as raw bytes for backup/sharing. Parameters id string Save slot id. Returns Promise\\ Raw .save bytes on success. IPC: export-save. importSave() Defined in: electron/bridge.d.ts:280 Import one save from raw exported bytes. Parameters bytes ArrayBuffer \\ Uint8Array\\ Raw .save file contents. Returns Promise\\ Import result with parsed header metadata on success. IPC: import-save. getSaveFiles() Defined in: electron/bridge.d.ts:289 List save slot metadata parsed from each .save header line. Returns Promise\\ Save metadata objects; corrupt entries are omitted. IPC: get-save-files. getSaveFolder() Defined in: electron/bridge.d.ts:298 Return the absolute path to the active saves folder. Returns Promise\\ Absolute filesystem path to the current user's saves directory. IPC: get-save-folder. getLastPlayedGameSync() Defined in: electron/bridge.d.ts:310 Return the last-played save id JSON string. Returns string \\ null JSON string shaped like { \"id\": \"…\" }, or null when unset/unreadable. IPC: get-last-played-game-sync. saveLastPlayedGame() Defined in: electron/bridge.d.ts:320 Persist the last-played save id. Parameters game ElectronLastPlayedGame Object containing the save slot id. Returns Promise\\ Write result for lastPlayedGame.json. IPC: save-last-played-game. clearLastPlayedGame() Defined in: electron/bridge.d.ts:329 Clear the persisted last-played save id. Returns Promise\\ Delete result for lastPlayedGame.json. IPC: clear-last-played-game. saveExistsSync() Defined in: electron/bridge.d.ts:339 Return whether a save file exists for the given id. Parameters id string Save slot id. Returns boolean True when .save exists in the active saves folder. IPC: save-exists-sync. getSettingsSync() Defined in: electron/bridge.d.ts:348 Return the settings JSON string from disk. Returns string \\ null Raw settings.json contents, or null when missing/unreadable. IPC: get-settings-sync. saveSettings() Defined in: electron/bridge.d.ts:358 Persist renderer settings JSON to disk. Parameters settings JsonValueV1 Settings object written to settings.json. Returns Promise\\ Write result for the settings file. IPC: save-settings. setFullscreen() Defined in: electron/bridge.d.ts:368 Enter or leave fullscreen mode. Parameters shouldBeFullscreen boolean Target fullscreen state. Returns Promise\\ Window fullscreen operation result. IPC: set-fullscreen. toggleFullscreen() Defined in: electron/bridge.d.ts:377 Toggle fullscreen mode. Returns Promise\\ Window fullscreen operation result. IPC: toggle-fullscreen. openDevTools() Defined in: electron/bridge.d.ts:384 Open Chromium DevTools for the game window. IPC: open-devtools (send). Returns void isFilePatchingActiveSync() Defined in: electron/bridge.d.ts:393 Return true when the Steam patch protocol interceptor is active. Returns boolean True when patched sources are registered and the interceptor is running. IPC: is-file-patching-active-sync. log() Defined in: electron/bridge.d.ts:412 Append one line to the host log file (logs/main.log). Fire-and-forget — never awaits IPC completion. Parameters level ElectronLogLevel Log severity (console.log maps to \"info\" in mod shims). scope string Category tag (mod id for mod logging). message string Plain-text log line. IPC: log:write (send). Returns void getSystemInfo() Defined in: electron/bridge.d.ts:421 Return local process/runtime versions. Useful for bug reports and environment probes. Returns ElectronSystemInfo Version info read from the preload process object.",
    "path": "/api/electron",
    "id": "electronbridge"
  },
  {
    "title": "save()",
    "body": "Custom map editor persistence helpers exposed as electron.customMaps. Methods save() Defined in: electron/custom-maps.d.ts:22 Write one custom map file (.custommap). Parameters id string Map id used in the filename. name string Display name stored in metadata. data JsonValueV1 Full custom map JSON payload. Returns Promise\\ Operation result with written path on success. IPC: custom-map-save. load() Defined in: electron/custom-maps.d.ts:32 Load one custom map by id. Parameters id string Map id (filename stem). Returns Promise\\ Parsed map JSON, or null when missing or invalid. IPC: custom-map-load. list() Defined in: electron/custom-maps.d.ts:41 List custom map metadata entries (newest first). Returns Promise\\ Metadata objects parsed from each .custommap header line. IPC: custom-map-list. delete() Defined in: electron/custom-maps.d.ts:51 Delete one custom map file. Parameters id string Map id (filename stem). Returns Promise\\ Operation result from the delete handler. IPC: custom-map-delete.",
    "path": "/api/electron",
    "id": "electroncustommapsapi"
  },
  {
    "title": "getFolder()",
    "body": "Local developer mod folder helpers exposed as electron.localMods. Methods getFolder() Defined in: electron/local-mods.d.ts:22 Return the absolute path to the OS local-mods folder. Returns Promise\\ Absolute filesystem path to the local mods root. IPC: get-local-mods-folder. openFolder() Defined in: electron/local-mods.d.ts:31 Open the local-mods folder in the OS file manager. Returns Promise\\ Operation result from the shell open call. IPC: open-local-mods-folder. list() Defined in: electron/local-mods.d.ts:42 List installed local mod summaries. Steam only — MS Store returns { ok: false, errorCode: 'unsupported platform' }. Returns Promise\\ Listing result with mod summaries in data when ok is true. IPC: local-mods-list. upload() Defined in: electron/local-mods.d.ts:52 Upload one local mod folder to Steam Workshop. Parameters modId string Local mod folder id under the local-mods directory. Returns Promise\\ Upload result with errorCode on failure. IPC: local-mods-upload.",
    "path": "/api/electron",
    "id": "electronlocalmodsapi"
  },
  {
    "title": "watch()",
    "body": "macOS right-button emulation helpers exposed as electron.macRightMouse. Methods watch() Defined in: electron/mac-right-mouse.d.ts:17 Enable or disable global right-button probing on macOS. Parameters active boolean When true, start watching for synthetic right-click gestures. probeScript? string Optional probe script forwarded to the main process. IPC: mac-right-mouse-watch (send). Returns void onPos() Defined in: electron/mac-right-mouse.d.ts:26 Register a callback for synthetic right-button position updates. Parameters callback (x: number, y: number) = void Receives screen coordinates for the emulated right click. IPC: mac-right-mouse-pos. Returns void onUp() Defined in: electron/mac-right-mouse.d.ts:35 Register a callback for synthetic right-button release. Parameters callback () = void Called when the emulated right button is released. IPC: mac-right-mouse-up. Returns void",
    "path": "/api/electron",
    "id": "electronmacrightmouseapi"
  },
  {
    "title": "openUrl()",
    "body": "Platform overlay browser helpers exposed as electron.platform.overlay. Methods openUrl() Defined in: electron/platform.d.ts:20 Open an https: URL in the platform overlay browser when available. Parameters url string External https URL. Returns Promise\\ Platform-specific overlay open result (false when URL is rejected). IPC: platform-overlay-open-url.",
    "path": "/api/electron",
    "id": "electronplatformoverlayapi"
  },
  {
    "title": "electron.ElectronPlatformApi",
    "body": "Property Type Description --- --- --- workshop ElectronWorkshopApi Steam Workshop helpers (Steam only; MS Store calls fail gracefully). overlay ElectronPlatformOverlayApi Platform overlay browser helpers. workshop overlay Cross-store platform helpers exposed as electron.platform. Methods isInitialized() Defined in: electron/platform.d.ts:34 Return true when the platform integration finished startup. Returns Promise\\ Whether Steam / MS Store integration is ready. IPC: platform-is-initialized. getPlayerName() Defined in: electron/platform.d.ts:43 Return the signed-in player display name. Returns Promise\\ Platform account display name. IPC: platform-get-player-name. getPlayerId() Defined in: electron/platform.d.ts:52 Return the stable platform player id string. Returns Promise\\ Platform-specific player identifier. IPC: platform-get-player-id. getAppId() Defined in: electron/platform.d.ts:61 Return the platform app id number. Returns Promise\\ Steam App ID or MS Store equivalent. IPC: platform-get-app-id. unlockAchievement() Defined in: electron/platform.d.ts:71 Unlock one platform achievement. Parameters achievementId string Platform achievement identifier. Returns Promise\\ Platform achievement unlock result. IPC: platform-unlock-achievement. isAchievementUnlocked() Defined in: electron/platform.d.ts:81 Return whether an achievement is already unlocked. Parameters achievementId string Platform achievement identifier. Returns Promise\\ True when the achievement is unlocked on the platform account. IPC: platform-is-achievement-unlocked. clearAchievement() Defined in: electron/platform.d.ts:91 Clear one platform achievement (debug / QA). Parameters achievementId string Platform achievement identifier. Returns Promise\\ Platform achievement clear result. IPC: platform-clear-achievement. cloudSave() Defined in: electron/platform.d.ts:102 Write one named blob to platform cloud storage. Parameters fileName string Cloud file key. data JsonValueV1 JSON-serializable payload. Returns Promise\\ Platform cloud save result. IPC: platform-cloud-save. cloudLoad() Defined in: electron/platform.d.ts:112 Read one named blob from platform cloud storage. Parameters fileName string Cloud file key. Returns Promise\\ Parsed cloud payload, or null when missing. IPC: platform-cloud-load. cloudFileExists() Defined in: electron/platform.d.ts:122 Return whether a cloud file key exists. Parameters fileName string Cloud file key. Returns Promise\\ True when the cloud file is present. IPC: platform-cloud-file-exists. cloudDelete() Defined in: electron/platform.d.ts:132 Delete one named cloud file. Parameters fileName string Cloud file key. Returns Promise\\ Platform cloud delete result. IPC: platform-cloud-delete. cloudSync() Defined in: electron/platform.d.ts:141 Sync local saves with platform cloud storage. Returns Promise\\ Cloud sync summary from the platform integration. IPC: platform-cloud-sync.",
    "path": "/api/electron",
    "id": "electronplatformapi"
  },
  {
    "title": "electron.ElectronSuccessResult",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. path? string Absolute path written when a handler persists a file (save/custom map). success path? Successful invoke result from save, settings, and window handlers.",
    "path": "/api/electron",
    "id": "electronsuccessresult"
  },
  {
    "title": "electron.ElectronFailureResult",
    "body": "Property Type Description --- --- --- success false Always false for this branch of the result union. error string Human-readable error message from the main process. success error Failed invoke result from save, settings, and window handlers.",
    "path": "/api/electron",
    "id": "electronfailureresult"
  },
  {
    "title": "electron.ElectronLicenseCheckResult",
    "body": "Property Type Description --- --- --- valid boolean Whether the current license is valid for play. reason string \\ null Failure reason when valid is false; otherwise null. networkError boolean True when the check failed due to network or platform errors. cached boolean True when the result came from a cached license check. valid reason networkError cached MS Store license check result from ElectronBridge.checkLicense.",
    "path": "/api/electron",
    "id": "electronlicensecheckresult"
  },
  {
    "title": "electron.ElectronSaveInput",
    "body": "Property Type Description --- --- --- id string Save slot id (sanitized filename stem). name string Display name shown in the save UI. data JsonValueV1 Full serialized game state ({ store: … } shape). id name data Parsed game save payload passed to ElectronBridge.save.",
    "path": "/api/electron",
    "id": "electronsaveinput"
  },
  {
    "title": "electron.ElectronLoadSuccessResult",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. data JsonValueV1 Parsed save body ({ store: … }). success data Successful load result from ElectronBridge.load.",
    "path": "/api/electron",
    "id": "electronloadsuccessresult"
  },
  {
    "title": "electron.ElectronLoadFailureResult",
    "body": "Property Type Description --- --- --- success false Always false for this branch of the result union. error string Human-readable load failure message. success error Failed load result from ElectronBridge.load.",
    "path": "/api/electron",
    "id": "electronloadfailureresult"
  },
  {
    "title": "electron.ElectronSaveFileMetadata",
    "body": "Property Type Description --- --- --- id string Save slot id (filename stem). name string Display name stored in the save header. timestamp string ISO timestamp string when the save was written. playTime? number Total play time in milliseconds from the save body. worldId? string \\ null World template id, if present. worldName? string \\ null World display name, if present. seed? number \\ null World seed, if present. productionPoints? number Factory production points at save time. structureCount? number Number of placed structures at save time. resources? JsonValueV1 Resource snapshot (gold, fluxite, artifacts, …). id name timestamp playTime? worldId? worldName? seed? productionPoints? structureCount? resources? Metadata parsed from the first line of one .save file. Returned by ElectronBridge.getSaveFiles.",
    "path": "/api/electron",
    "id": "electronsavefilemetadata"
  },
  {
    "title": "electron.ElectronExportSaveSuccessResult",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. data Uint8Array Raw .save file bytes (metadata line + gzip payload). success data Successful export result from ElectronBridge.exportSave.",
    "path": "/api/electron",
    "id": "electronexportsavesuccessresult"
  },
  {
    "title": "electron.ElectronImportSaveSuccessResult",
    "body": "Property Type Description --- --- --- success true Always true for this branch of the result union. metaData JsonValueV1 Metadata parsed from the imported file header line. success metaData Successful import result from ElectronBridge.importSave.",
    "path": "/api/electron",
    "id": "electronimportsavesuccessresult"
  },
  {
    "title": "electron.ElectronLastPlayedGame",
    "body": "Property Type Description --- --- --- id? string Save slot id of the last played game. id? Last-played save marker written by ElectronBridge.saveLastPlayedGame.",
    "path": "/api/electron",
    "id": "electronlastplayedgame"
  },
  {
    "title": "electron.ElectronSystemInfo",
    "body": "Property Type Description --- --- --- platform string Node process.platform (for example linux, win32). arch string CPU architecture string from process.arch. electronVersion string Electron runtime version from process.versions.electron. chromeVersion string Chromium version from process.versions.chrome. nodeVersion string Node.js version from process.versions.node. platform arch electronVersion chromeVersion nodeVersion Local process/runtime versions from ElectronBridge.getSystemInfo. Read directly in the preload script — no IPC round trip.",
    "path": "/api/electron",
    "id": "electronsysteminfo"
  },
  {
    "title": "electron.ElectronLocalModsListResult",
    "body": "Property Type Description --- --- --- ok boolean True when the listing succeeded. data JsonValueV1[] Local mod summary objects when ok is true; otherwise []. errorCode? string Error code when ok is false (for example unsupported platform). ok data errorCode? Result from ElectronLocalModsApi.list.",
    "path": "/api/electron",
    "id": "electronlocalmodslistresult"
  },
  {
    "title": "electron.ElectronLocalModsUploadResult",
    "body": "Property Type Description --- --- --- ok boolean True when Workshop upload succeeded. errorCode? string Error code when ok is false. detail? string Extra failure detail logged by the main process. ok errorCode? detail? Result from ElectronLocalModsApi.upload.",
    "path": "/api/electron",
    "id": "electronlocalmodsuploadresult"
  },
  {
    "title": "electron.ElectronOpenUrlResult",
    "body": "Property Type Description --- --- --- success boolean True when the OS opened the URL. error? string Failure reason (for example unsupported-url). success error? Result from ElectronBridge.openExternalBrowser.",
    "path": "/api/electron",
    "id": "electronopenurlresult"
  },
  {
    "title": "electron.ElectronPrimeAchievementsResult",
    "body": "Property Type Description --- --- --- success boolean True when the cache seed completed. error? string Failure message when success is false. success error? Result from ElectronBridge.platformPrimeAchievements.",
    "path": "/api/electron",
    "id": "electronprimeachievementsresult"
  },
  {
    "title": "electron.ElectronReauthPromptResult",
    "body": "Property Type Description --- --- --- response? number Button index chosen in the native MS Store dialog. dismissed? boolean True on Steam where no dialog is shown. response? dismissed? Result from ElectronBridge.platformShowReauthPrompt.",
    "path": "/api/electron",
    "id": "electronreauthpromptresult"
  },
  {
    "title": "electron.ElectronWorkshopApi",
    "body": "Steam Workshop helpers exposed as electron.platform.workshop. Steam only — calls fail gracefully on MS Store. Methods subscribe() Defined in: electron/workshop.d.ts:21 Subscribe to a Workshop item. Parameters itemId string \\ number Steam Workshop published file id. Returns Promise\\ Platform workshop subscribe result. IPC: platform-workshop-subscribe. unsubscribe() Defined in: electron/workshop.d.ts:31 Unsubscribe from a Workshop item. Parameters itemId string \\ number Steam Workshop published file id. Returns Promise\\ Platform workshop unsubscribe result. IPC: platform-workshop-unsubscribe. installInfo() Defined in: electron/workshop.d.ts:41 Return install state for a subscribed Workshop item. Parameters itemId string \\ number Steam Workshop published file id. Returns Promise\\ Install info object from the Steam workshop API wrapper. IPC: platform-workshop-install-info. downloadInfo() Defined in: electron/workshop.d.ts:51 Return download progress for a Workshop item. Parameters itemId string \\ number Steam Workshop published file id. Returns Promise\\ Download info object from the Steam workshop API wrapper. IPC: platform-workshop-download-info. getState() Defined in: electron/workshop.d.ts:61 Return the Steam Workshop item state flags. Parameters itemId string \\ number Steam Workshop published file id. Returns Promise\\ Numeric workshop item state from the Steam API wrapper. IPC: platform-workshop-state. getSubscribedItems() Defined in: electron/workshop.d.ts:70 Return all subscribed Workshop item ids. Returns Promise\\ Array of subscribed published file ids. IPC: platform-workshop-subscribed-list. getItem() Defined in: electron/workshop.d.ts:80 Fetch Workshop item metadata. Parameters itemId string \\ number Steam Workshop published file id. Returns Promise\\ Workshop item details from the Steam API wrapper. IPC: platform-workshop-get-item. download() Defined in: electron/workshop.d.ts:91 Queue or prioritize a Workshop item download. Parameters itemId string \\ number Steam Workshop published file id. highPriority? boolean When true, request a high-priority download queue slot. Returns Promise\\ Download request result from the Steam API wrapper. IPC: platform-workshop-download. getSandkitMods() Defined in: electron/workshop.d.ts:100 Discover Sandkit Workshop mods installed for the current session. Returns Promise\\ { ok, data: { mods, diagnostics }, error } discovery payload. IPC: platform-workshop-sandkit-mods.",
    "path": "/api/electron",
    "id": "electronworkshopapi"
  },
  {
    "title": "electron.ElectronPlatform",
    "body": "Sandustry distribution channel string. Returned by ElectronBridge.getPlatformSync.",
    "path": "/api/electron",
    "id": "electronplatform"
  },
  {
    "title": "electron.ElectronLogLevel",
    "body": "Severity level written through ElectronBridge.log. Maps to the main-process file logger (logs/main.log).",
    "path": "/api/electron",
    "id": "electronloglevel"
  },
  {
    "title": "electron.ElectronIpcListener",
    "body": "Argument Type Description --- --- --- args ...unknown[] Event-specific payload from the main process (often empty). args Callback registered on IPC event channels such as app-suspend.",
    "path": "/api/electron",
    "id": "electronipclistener"
  },
  {
    "title": "electron.ElectronOperationResult",
    "body": "Result union returned by most save, settings, and window invoke handlers.",
    "path": "/api/electron",
    "id": "electronoperationresult"
  },
  {
    "title": "electron.ElectronLoadResult",
    "body": "Result from ElectronBridge.load.",
    "path": "/api/electron",
    "id": "electronloadresult"
  },
  {
    "title": "electron.ElectronExportSaveResult",
    "body": "Result from ElectronBridge.exportSave.",
    "path": "/api/electron",
    "id": "electronexportsaveresult"
  },
  {
    "title": "electron.ElectronImportSaveResult",
    "body": "Result from ElectronBridge.importSave.",
    "path": "/api/electron",
    "id": "electronimportsaveresult"
  },
  {
    "title": "sandkit.api.action",
    "body": "sandkit.api.action — active hotbar action and custom handler data. Main thread only.",
    "path": "/api/sandkit.api.action",
    "id": ""
  },
  {
    "title": "sandkit.api.action.Action",
    "body": "Hotbar action asset reference.",
    "path": "/api/sandkit.api.action",
    "id": "action"
  },
  {
    "title": "sandkit.api.action.getActive()",
    "body": "Return the action slot the player is using. AssetRef Active hotbar action reference.",
    "path": "/api/sandkit.api.action",
    "id": "getactive"
  },
  {
    "title": "sandkit.api.action.getSelected()",
    "body": "Return the action slot selected in the hotbar. AssetRef Selected hotbar action reference.",
    "path": "/api/sandkit.api.action",
    "id": "getselected"
  },
  {
    "title": "sandkit.api.action.setCustomData",
    "body": "Argument Type Description --- --- --- data Input Serializable payload attached to the active action. data Store custom data on the active action handler. Type Parameters Input Input Example",
    "path": "/api/sandkit.api.action",
    "id": "setcustomdata"
  },
  {
    "title": "sandkit.api.assets",
    "body": "sandkit.api.assets — mod asset URLs and asset provider selection. Main thread only.",
    "path": "/api/sandkit.api.assets",
    "id": ""
  },
  {
    "title": "sandkit.api.assets.AssetProviderV1",
    "body": "Property Type Description --- --- --- id ${string}:${string}:${string} kind string localId? string modId? number modName string id kind localId? modId? modName Describes a mod or pack that supplies assets for a kind.",
    "path": "/api/sandkit.api.assets",
    "id": "assetproviderv1"
  },
  {
    "title": "sandkit.api.assets.getUrl()",
    "body": "Argument Type Description --- --- --- relativePath string Path relative to the calling mod folder. relativePath Resolves a path under the mod folder to a loadable URL.",
    "path": "/api/sandkit.api.assets",
    "id": "geturl"
  },
  {
    "title": "sandkit.api.assets.getSelectedProvider()",
    "body": "Argument Type Description --- --- --- kind string Asset kind identifier. kind Returns the selected provider for an asset kind, or null. AssetProviderV1 \\ null",
    "path": "/api/sandkit.api.assets",
    "id": "getselectedprovider"
  },
  {
    "title": "sandkit.api.assets.selectProvider()",
    "body": "Argument Type Description --- --- --- kind string Asset kind identifier. providerId string \\\\ null Provider id from getSelectedProvider, or null to clear. kind providerId Selects a provider for an asset kind. Returns true on success.",
    "path": "/api/sandkit.api.assets",
    "id": "selectprovider"
  },
  {
    "title": "sandkit.api.authorization",
    "body": "sandkit.api.authorization — player permission checks for build, grab, and tools. Main thread only.",
    "path": "/api/sandkit.api.authorization",
    "id": ""
  },
  {
    "title": "sandkit.api.authorization.canBuildAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player may place a structure at the cell. True when building is allowed in the authorization zone.",
    "path": "/api/sandkit.api.authorization",
    "id": "canbuildatcell"
  },
  {
    "title": "sandkit.api.authorization.canGrabAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player may grab at the cell. True when grabbing is allowed in the authorization zone.",
    "path": "/api/sandkit.api.authorization",
    "id": "cangrabatcell"
  },
  {
    "title": "sandkit.api.authorization.canUseTool()",
    "body": "Argument Type Description --- --- --- player Player Player state snapshot. isFlamethrower? boolean When true, apply flamethrower-specific rules. player isFlamethrower? Return true when the player may use a tool. True when tool use is allowed for the player.",
    "path": "/api/sandkit.api.authorization",
    "id": "canusetool"
  },
  {
    "title": "sandkit.api.authorization.canUseToolAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args Return true when the player may use a tool at the cell. True when tool use is allowed at the cell.",
    "path": "/api/sandkit.api.authorization",
    "id": "canusetoolatcell"
  },
  {
    "title": "sandkit.api.authorization.getZoneIdAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the authorization zone id at the cell. Numeric zone id for the cell.",
    "path": "/api/sandkit.api.authorization",
    "id": "getzoneidatcell"
  },
  {
    "title": "sandkit.api.authorization.getPlayerZoneId()",
    "body": "Return the authorization zone id for the player. Numeric zone id for the player's current position.",
    "path": "/api/sandkit.api.authorization",
    "id": "getplayerzoneid"
  },
  {
    "title": "sandkit.api.blueprints",
    "body": "Structure blueprint serialize and localize helpers. Available as sandkit.api.blueprints. Official docs",
    "path": "/api/sandkit.api.blueprints",
    "id": ""
  },
  {
    "title": "sandkit.api.blueprints.BlueprintStructure",
    "body": "Property Type Description --- --- --- x number y number x y Serialized structure entry used in blueprints. Indexable",
    "path": "/api/sandkit.api.blueprints",
    "id": "blueprintstructure"
  },
  {
    "title": "sandkit.api.blueprints.serializeStructures()",
    "body": "Argument Type Description --- --- --- structures readonly Structure[] Structure instances to encode. structures Serialize live structure instances into blueprint records. BlueprintStructure[] See Official docs",
    "path": "/api/sandkit.api.blueprints",
    "id": "serializestructures"
  },
  {
    "title": "sandkit.api.blueprints.localizeStructures()",
    "body": "Argument Type Description --- --- --- structures readonly BlueprintStructure[] Blueprint structure records to localize. structures Localize blueprint structure records for placement. BlueprintStructure[] See Official docs",
    "path": "/api/sandkit.api.blueprints",
    "id": "localizestructures"
  },
  {
    "title": "sandkit.api.building.StructureType",
    "body": "Defined in: sandkit/api/building.d.ts:10 Built-in structure type ids used during placement.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": ""
  },
  {
    "title": "sandkit.api.building.StructureType.ConveyorLeft",
    "body": "Left-facing conveyor belt.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "conveyorleft"
  },
  {
    "title": "sandkit.api.building.StructureType.ConveyorRight",
    "body": "Right-facing conveyor belt.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "conveyorright"
  },
  {
    "title": "sandkit.api.building.StructureType.ShakerLeft",
    "body": "Left-facing shaker.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "shakerleft"
  },
  {
    "title": "sandkit.api.building.StructureType.ShakerRight",
    "body": "Right-facing shaker.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "shakerright"
  },
  {
    "title": "sandkit.api.building.StructureType.LauncherUp",
    "body": "Up-facing launcher.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "launcherup"
  },
  {
    "title": "sandkit.api.building.StructureType.LauncherLeft",
    "body": "Left-facing launcher.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "launcherleft"
  },
  {
    "title": "sandkit.api.building.StructureType.LauncherRight",
    "body": "Right-facing launcher.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "launcherright"
  },
  {
    "title": "sandkit.api.building.StructureType.SplitterLeft",
    "body": "Left-facing splitter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "splitterleft"
  },
  {
    "title": "sandkit.api.building.StructureType.SplitterRight",
    "body": "Right-facing splitter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "splitterright"
  },
  {
    "title": "sandkit.api.building.StructureType.Dropper",
    "body": "Dropper structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "dropper"
  },
  {
    "title": "sandkit.api.building.StructureType.Foundation",
    "body": "Foundation block.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundation"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationAngledLeft",
    "body": "Angled foundation facing left.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationangledleft"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationTriangleLeftDel",
    "body": "Left triangle foundation (deprecated id).",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationtriangleleftdel"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationAngledRight",
    "body": "Angled foundation facing right.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationangledright"
  },
  {
    "title": "sandkit.api.building.StructureType.FoundationTriangleRightDel",
    "body": "Right triangle foundation (deprecated id).",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "foundationtrianglerightdel"
  },
  {
    "title": "sandkit.api.building.StructureType.Collector",
    "body": "Collector structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "collector"
  },
  {
    "title": "sandkit.api.building.StructureType.FilterLeft",
    "body": "Left-facing filter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "filterleft"
  },
  {
    "title": "sandkit.api.building.StructureType.FilterRight",
    "body": "Right-facing filter.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "filterright"
  },
  {
    "title": "sandkit.api.building.StructureType.SlidingFoundation",
    "body": "Sliding foundation block.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "slidingfoundation"
  },
  {
    "title": "sandkit.api.building.StructureType.VelocitySoaker",
    "body": "Velocity soaker structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "velocitysoaker"
  },
  {
    "title": "sandkit.api.building.StructureType.Grower",
    "body": "Grower structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "grower"
  },
  {
    "title": "sandkit.api.building.StructureType.SoundBox",
    "body": "Sound box structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "soundbox"
  },
  {
    "title": "sandkit.api.building.StructureType.Pipe",
    "body": "Pipe segment.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "pipe"
  },
  {
    "title": "sandkit.api.building.StructureType.Pump",
    "body": "Pump structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "pump"
  },
  {
    "title": "sandkit.api.building.StructureType.LiquidVent",
    "body": "Liquid vent structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "liquidvent"
  },
  {
    "title": "sandkit.api.building.StructureType.Light",
    "body": "Light structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "light"
  },
  {
    "title": "sandkit.api.building.StructureType.GloomEmitter",
    "body": "Gloom emitter structure.",
    "path": "/api/sandkit.api.building.StructureType",
    "id": "gloomemitter"
  },
  {
    "title": "sandkit.api.building",
    "body": "sandkit.api.building — structure placement and built-in structure types. Main thread only. - StructureType",
    "path": "/api/sandkit.api.building",
    "id": ""
  },
  {
    "title": "sandkit.api.building.getSnappedPositionAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the snapped world position for placement at the cell. Vector2 Snapped world position in pixels.",
    "path": "/api/sandkit.api.building",
    "id": "getsnappedpositionatcell"
  },
  {
    "title": "sandkit.api.building.isBlockedAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when placement is blocked at the cell. True when a structure cannot be placed at the cell.",
    "path": "/api/sandkit.api.building",
    "id": "isblockedatcell"
  },
  {
    "title": "sandkit.api.building.cancelPlacement()",
    "body": "Cancel the current structure placement preview.",
    "path": "/api/sandkit.api.building",
    "id": "cancelplacement"
  },
  {
    "title": "sandkit.api.building.selectStructure()",
    "body": "Argument Type Description --- --- --- structureTypeOrId StructureRef \\\\ StructureType Built-in StructureType value or registered structure id. structureTypeOrId Select a structure for placement by type or id. StructureRef \\ null Resolved selection, or null when the type or id is invalid.",
    "path": "/api/sandkit.api.building",
    "id": "selectstructure"
  },
  {
    "title": "sandkit.api.camera",
    "body": "sandkit.api.camera — camera focus and follow control. Main thread only.",
    "path": "/api/sandkit.api.camera",
    "id": ""
  },
  {
    "title": "sandkit.api.camera.snapToPlayer()",
    "body": "Snap the camera to the player position.",
    "path": "/api/sandkit.api.camera",
    "id": "snaptoplayer"
  },
  {
    "title": "sandkit.api.camera.setFocusAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. worldX worldY Move camera focus to world coordinates. True when focus was applied.",
    "path": "/api/sandkit.api.camera",
    "id": "setfocusatworld"
  },
  {
    "title": "sandkit.api.camera.releaseFocus()",
    "body": "Argument Type Description --- --- --- options? Optional transition duration in milliseconds. options? Release scripted focus and return control to the player. True when focus was released. Example",
    "path": "/api/sandkit.api.camera",
    "id": "releasefocus"
  },
  {
    "title": "sandkit.api.collector",
    "body": "sandkit.api.collector — collector structure value and pickup handling. Main thread only.",
    "path": "/api/sandkit.api.collector",
    "id": ""
  },
  {
    "title": "sandkit.api.collector.getValueFromCellId()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell identifier. cellId Returns the collector value for a cell id.",
    "path": "/api/sandkit.api.collector",
    "id": "getvaluefromcellid"
  },
  {
    "title": "sandkit.api.collector.getValueByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type id. elementType Returns the collector value for an element type.",
    "path": "/api/sandkit.api.collector",
    "id": "getvaluebytype"
  },
  {
    "title": "sandkit.api.collector.isCellIdCollectable()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell identifier. cellId Returns true when the cell id can be collected.",
    "path": "/api/sandkit.api.collector",
    "id": "iscellidcollectable"
  },
  {
    "title": "sandkit.api.collector.isCellIdCollectableForSprite()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell identifier. cellId Returns true when the cell id can be collected for sprite display.",
    "path": "/api/sandkit.api.collector",
    "id": "iscellidcollectableforsprite"
  },
  {
    "title": "sandkit.api.collector.notifyPickupAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Notifies collector logic that a pickup happened at the cell.",
    "path": "/api/sandkit.api.collector",
    "id": "notifypickupatcell"
  },
  {
    "title": "sandkit.api.constants",
    "body": "",
    "path": "/api/sandkit.api.constants",
    "id": ""
  },
  {
    "title": "const",
    "body": "Skip-physics modes for element physics fields.",
    "path": "/api/sandkit.api.constants",
    "id": "physics"
  },
  {
    "title": "sandkit.api.cooldown",
    "body": "sandkit.api.cooldown — reusable cooldown timers for abilities and items. Main thread only.",
    "path": "/api/sandkit.api.cooldown",
    "id": ""
  },
  {
    "title": "sandkit.api.cooldown.Cooldown",
    "body": "Property Type Description --- --- --- last number Timestamp when the cooldown was last triggered (game time). time number Cooldown duration in milliseconds. last time Cooldown state object passed to check and isReady.",
    "path": "/api/sandkit.api.cooldown",
    "id": "cooldown"
  },
  {
    "title": "sandkit.api.cooldown.check()",
    "body": "Argument Type Description --- --- --- cooldown Cooldown Cooldown state object to check and update. overrideTime? number Optional timestamp (ms) instead of current game time. cooldown overrideTime? Starts the cooldown when ready and returns true; otherwise returns false.",
    "path": "/api/sandkit.api.cooldown",
    "id": "check"
  },
  {
    "title": "sandkit.api.cooldown.isReady()",
    "body": "Argument Type Description --- --- --- cooldown Cooldown Cooldown state object to check. overrideTime? number Optional timestamp (ms) instead of current game time. cooldown overrideTime? Returns true when the cooldown has elapsed.",
    "path": "/api/sandkit.api.cooldown",
    "id": "isready"
  },
  {
    "title": "sandkit.api.discoveries",
    "body": "sandkit.api.discoveries — unlock element and terrain entries in the discovery log. Main thread only.",
    "path": "/api/sandkit.api.discoveries",
    "id": ""
  },
  {
    "title": "sandkit.api.discoveries.addElementByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type id. elementType Marks an element type as discovered for the player.",
    "path": "/api/sandkit.api.discoveries",
    "id": "addelementbytype"
  },
  {
    "title": "sandkit.api.discoveries.addTerrainByType()",
    "body": "Argument Type Description --- --- --- terrainType TerrainType Numeric terrain type id. terrainType Marks a terrain type as discovered for the player.",
    "path": "/api/sandkit.api.discoveries",
    "id": "addterrainbytype"
  },
  {
    "title": "sandkit.api.effects",
    "body": "sandkit.api.effects — visual effects, particles, and lasers at world positions. Main thread only. Temporary lights live under lights.temporary.",
    "path": "/api/sandkit.api.effects",
    "id": ""
  },
  {
    "title": "sandkit.api.effects.LaserEffectOptions",
    "body": "Property Type Description --- --- --- width? number Beam width in pixels. brightness? number Beam brightness multiplier. color? number Beam color as a packed integer. glow? boolean When true, draws a glow around the beam. width? brightness? color? glow? Options for laser beam effects.",
    "path": "/api/sandkit.api.effects",
    "id": "lasereffectoptions"
  },
  {
    "title": "destroy()",
    "body": "Handle returned by createLaserAtWorld. Methods destroy() Defined in: sandkit/api/effects.d.ts:136 Removes the laser from the scene. Returns void",
    "path": "/api/sandkit.api.effects",
    "id": "lasereffecthandle"
  },
  {
    "title": "sandkit.api.effects.DistortionEffectOptions",
    "body": "Property Type Description --- --- --- style? \"implode\" \\ \"explode\" Distortion style: implode or explode. duration? number Effect duration in seconds. maxRadius? number Maximum radius of the wave. intensity? number Visual intensity of the distortion. color? [number, number, number, number] RGBA color components for the effect. style? duration? maxRadius? intensity? color? Options for distortion wave effects.",
    "path": "/api/sandkit.api.effects",
    "id": "distortioneffectoptions"
  },
  {
    "title": "sandkit.api.effects.EffectOptions",
    "body": "Property Type Description --- --- --- duration? number maxRadius? number intensity? number duration? maxRadius? intensity? Generic duration and radius options for world effects.",
    "path": "/api/sandkit.api.effects",
    "id": "effectoptions"
  },
  {
    "title": "sandkit.api.effects.TemporaryLightOptions",
    "body": "Property Type Description --- --- --- brightness? number duration? number durationMs? number size? number color? [number, number, number, number] decay number Light decay rate after spawn. unclamped? boolean skipDedup? boolean useLightZones? boolean noopIfFull? boolean priority? number dedupKey string Dedupe key when the light pool is full or dedup is enabled. brightness? duration? durationMs? size? color? decay unclamped? skipDedup? useLightZones? noopIfFull? priority? dedupKey Options for createLightAtWorld.",
    "path": "/api/sandkit.api.effects",
    "id": "temporarylightoptions"
  },
  {
    "title": "sandkit.api.effects.ParticleEffectOptions",
    "body": "Property Type Description --- --- --- count? number velocity? Vector2 minSpeed? number maxSpeed? number color? number Hex code. No alpha. minSize? number maxSize? number minLifetime? number maxLifetime? number background? boolean imageName? string fadeOutOnly? boolean fadeStart? number fadeEnd? number damp? number count? velocity? minSpeed? maxSpeed? color? minSize? maxSize? minLifetime? maxLifetime? background? imageName? fadeOutOnly? fadeStart? fadeEnd? damp? Options for createParticlesAtWorld.",
    "path": "/api/sandkit.api.effects",
    "id": "particleeffectoptions"
  },
  {
    "title": "sandkit.api.effects.createAtWorld()",
    "body": "Argument Type Description --- --- --- effectId string Registered effect id (for example heatWave). worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? EffectOptions Duration, radius, and intensity settings. effectId worldX worldY options? Creates a named screen effect at world coordinates. See Official docs",
    "path": "/api/sandkit.api.effects",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.effects.createEffectAtWorld()",
    "body": "Argument Type Description --- --- --- effectId string worldX number worldY number options? EffectOptions effectId worldX worldY options? Deprecated Use createAtWorld instead. See Official docs",
    "path": "/api/sandkit.api.effects",
    "id": "createeffectatworld"
  },
  {
    "title": "sandkit.api.effects.createLightAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number worldY number options? TemporaryLightOptions worldX worldY options? lightId: number null optional index?: number null Deprecated Use lights.temporary.createAtWorld instead. See Official docs",
    "path": "/api/sandkit.api.effects",
    "id": "createlightatworld"
  },
  {
    "title": "sandkit.api.effects.createDistortionWaveAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? DistortionEffectOptions Style, duration, radius, intensity, and color. worldX worldY options? Creates a distortion wave effect at world coordinates. Example See Official docs",
    "path": "/api/sandkit.api.effects",
    "id": "createdistortionwaveatworld"
  },
  {
    "title": "sandkit.api.effects.createLaserAtWorld()",
    "body": "Argument Type Description --- --- --- startWorldX number Beam start world X in pixels. startWorldY number Beam start world Y in pixels. endWorldX number Beam end world X in pixels. endWorldY number Beam end world Y in pixels. options? LaserEffectOptions Width, brightness, color, and glow options. startWorldX startWorldY endWorldX endWorldY options? Creates a laser beam between two world points. Returns a handle to destroy it. LaserEffectHandle See Official docs",
    "path": "/api/sandkit.api.effects",
    "id": "createlaseratworld"
  },
  {
    "title": "sandkit.api.effects.removeLightById()",
    "body": "Argument Type Description --- --- --- lightId number lightId Deprecated Use lights.temporary.removeById instead. See Official docs",
    "path": "/api/sandkit.api.effects",
    "id": "removelightbyid"
  },
  {
    "title": "sandkit.api.effects.createParticlesAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. options? ParticleEffectOptions Count, velocity, colour, and lifetime settings. worldX worldY options? Emit particles at world coordinates.",
    "path": "/api/sandkit.api.effects",
    "id": "createparticlesatworld"
  },
  {
    "title": "sandkit.api.effects (worker)",
    "body": "Internal Worker-thread sandkit.api.effects — world-space visual effects on workers. Temporary lights live under lights.temporary, not here. Worker-only surface; main thread exposes additional effect helpers.",
    "path": "/api/sandkit.api.effects.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.effects.createAtWorld()",
    "body": "Argument Type Description --- --- --- effectId string Registered effect id. worldX number World x position in pixels. worldY number World y position in pixels. options? EffectOptions Duration, radius, and intensity settings. effectId worldX worldY options? Spawn a named screen-space or world effect. See Official docs",
    "path": "/api/sandkit.api.effects.worker",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.effects.createEffectAtWorld()",
    "body": "Argument Type Description --- --- --- effectId string worldX number worldY number options? EffectOptions effectId worldX worldY options? Deprecated Use createAtWorld instead. See Official docs",
    "path": "/api/sandkit.api.effects.worker",
    "id": "createeffectatworld"
  },
  {
    "title": "sandkit.api.elements.MatterType",
    "body": "Defined in: shared/api/elements.d.ts:41 Physical behaviour category for an element. Official docs",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": ""
  },
  {
    "title": "sandkit.api.elements.MatterType.Solid",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "solid"
  },
  {
    "title": "sandkit.api.elements.MatterType.Liquid",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "liquid"
  },
  {
    "title": "sandkit.api.elements.MatterType.Particle",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "particle"
  },
  {
    "title": "sandkit.api.elements.MatterType.Gas",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "gas"
  },
  {
    "title": "sandkit.api.elements.MatterType.Static",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "static"
  },
  {
    "title": "sandkit.api.elements.MatterType.Slushy",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "slushy"
  },
  {
    "title": "sandkit.api.elements.MatterType.Wisp",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "wisp"
  },
  {
    "title": "sandkit.api.elements.MatterType.Powder",
    "body": "",
    "path": "/api/sandkit.api.elements.MatterType",
    "id": "powder"
  },
  {
    "title": "sandkit.api.elements",
    "body": "sandkit.api.elements — register elements and read or change cells on the main thread. Main thread only. Official docs - MatterType",
    "path": "/api/sandkit.api.elements",
    "id": ""
  },
  {
    "title": "sandkit.api.elements.InteractionStructureMetadata",
    "body": "Property Type Description --- --- --- textKey? string i18n key for custom interaction label text. crossedOutWhen? object Hide the label when a data field matches a value. visibleWhen? object Show the label only when a data field matches a value. onlyWhenTranslated? boolean Require the text key to exist in the active locale. textKey? crossedOutWhen? visibleWhen? onlyWhenTranslated? Optional tooltip metadata on structure interactions.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionstructuremetadata"
  },
  {
    "title": "sandkit.api.elements.ElementCreateOptions",
    "body": "Property Type Description --- --- --- data? Record Initial element data bag. density? number Override element density. durationTicks? number Set both max and remaining duration in simulation ticks. duration? number isFreeFalling? boolean Override free-fall state on spawn. dataFields? object Override default data fields 1–4. particle? object Spawn as a particle with the given velocity. skipCollectorCheck? boolean Skip collector accounting when placing the element. data? density? durationTicks? duration? isFreeFalling? dataFields? particle? skipCollectorCheck? Options for createAtCell, replace, and related create helpers. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "elementcreateoptions"
  },
  {
    "title": "sandkit.api.elements.ElementRemovalOptions",
    "body": "Property Type Description --- --- --- skipCollectorCheck? boolean Skip collector accounting when removing the element. skipCollectorCheck? Options for element removal helpers. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "elementremovaloptions"
  },
  {
    "title": "sandkit.api.elements.InteractionDestroyer",
    "body": "Property Type Description --- --- --- kind \"destroyer\" items readonly string[] Item ids removed by this interaction (for example \"drill\"). kind items Interaction that destroys specific items.",
    "path": "/api/sandkit.api.elements",
    "id": "interactiondestroyer"
  },
  {
    "title": "sandkit.api.elements.InteractionStructure",
    "body": "Interaction that affects specific structures. Type Declaration kind structures Structure ids shown in the interaction tooltip.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionstructure"
  },
  {
    "title": "sandkit.api.elements.InteractionEntity",
    "body": "Property Type Description --- --- --- kind \"entity\" entities readonly string[] Entity type ids referenced by the interaction. kind entities Interaction that affects specific entities.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionentity"
  },
  {
    "title": "sandkit.api.elements.InteractionFlammable",
    "body": "Property Type Description --- --- --- kind \"flammable\" kind Interaction that marks the element as flammable.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionflammable"
  },
  {
    "title": "sandkit.api.elements.InteractionMeltable",
    "body": "Property Type Description --- --- --- kind \"meltable\" kind Interaction that marks the element as meltable.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionmeltable"
  },
  {
    "title": "sandkit.api.elements.InteractionFreezable",
    "body": "Property Type Description --- --- --- kind \"freezable\" kind Interaction that marks the element as freezable.",
    "path": "/api/sandkit.api.elements",
    "id": "interactionfreezable"
  },
  {
    "title": "sandkit.api.elements.InteractionCustom",
    "body": "Interaction handled by custom mod logic and tooltip text. Type Declaration kind",
    "path": "/api/sandkit.api.elements",
    "id": "interactioncustom"
  },
  {
    "title": "sandkit.api.elements.Interaction",
    "body": "Union of element interaction kinds for tool and structure logic.",
    "path": "/api/sandkit.api.elements",
    "id": "interaction"
  },
  {
    "title": "sandkit.api.elements.ElementType",
    "body": "Numeric element type handle. Built-in ElementTypeEnum values autocomplete; getTypeById returns a tagged handle. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "elementtype"
  },
  {
    "title": "sandkit.api.elements.ElementId",
    "body": "Mod or built-in element string id. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "elementid"
  },
  {
    "title": "sandkit.api.elements.ElementRef",
    "body": "Type handle or string id accepted by lookup helpers. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "elementref"
  },
  {
    "title": "sandkit.api.elements.ElementDefinition",
    "body": "Property Type Description --- --- --- id string nameKey string defaultDataFields? object colors object density number matterType MatterType metaColor? number UI/meta color as 0xRRGGBB. isGrabbable? boolean When true, the grabber can pick up this element. isTransportable? boolean When true, conveyors can move this element. getExtraProps? () = object id nameKey defaultDataFields? colors density matterType metaColor? isGrabbable? isTransportable? getExtraProps? Mod-registered element definition snapshot. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "elementdefinition"
  },
  {
    "title": "sandkit.api.elements.getRegisteredTypes()",
    "body": "Returns all registered element type ids. ElementType[] See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getregisteredtypes"
  },
  {
    "title": "sandkit.api.elements.register()",
    "body": "Argument Type Description --- --- --- definition ElementDefinition Full element definition to register. definition Registers a new element and returns its assigned type id. Object with the assigned elementType. elementType: ElementType See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "register"
  },
  {
    "title": "sandkit.api.elements.updateDefinition()",
    "body": "Argument Type Description --- --- --- elementTypeOrId ElementRef Numeric type or string id. partial Partial\\ Fields to merge onto the definition. elementTypeOrId partial Updates fields on an existing element definition. Example See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.elements.addInteractionInfo()",
    "body": "Argument Type Description --- --- --- elementTypeOrId ElementRef Numeric type or string id. interaction Interaction Interaction entry to append. elementTypeOrId interaction Adds an interaction entry to an element definition. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "addinteractioninfo"
  },
  {
    "title": "sandkit.api.elements.getNameByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type. elementType Returns the display name for an element type. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getnamebytype"
  },
  {
    "title": "sandkit.api.elements.findFreeCellInStructure()",
    "body": "Argument Type Description --- --- --- structureCellX number Structure anchor cell column. structureCellY number Structure anchor cell row. structureSizeCells number Structure footprint size in cells. structureCellX structureCellY structureSizeCells Finds a free cell inside a structure footprint, or null. Vector2 \\ null Cell coordinates of a free cell, or null when none. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "findfreecellinstructure"
  },
  {
    "title": "sandkit.api.elements.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Create an element at a cell. Main-entry writes are deferred; reads see the old grid. Examples Main entry options.durationTicks See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.elements.createAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Deprecated Use createAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "createatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Replace the element at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.elements.replaceAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Deprecated Use replaceAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "replaceatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRemovalOptions\\] args Remove the element at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.elements.removeAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRemovalOptions\\] args Deprecated Use removeAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "removeatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.teleportBetweenCells()",
    "body": "Argument Type Description --- --- --- fromCellX number Source cell column. fromCellY number Source cell row. toCellX number Destination cell column. toCellY number Destination cell row. fromCellX fromCellY toCellX toCellY Move an element between cells. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "teleportbetweencells"
  },
  {
    "title": "sandkit.api.elements.teleportBetweenCellsWhenIdle()",
    "body": "Argument Type Description --- --- --- fromCellX number fromCellY number toCellX number toCellY number fromCellX fromCellY toCellX toCellY Deprecated Use teleportBetweenCells instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "teleportbetweencellswhenidle"
  },
  {
    "title": "sandkit.api.elements.setVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid. Example See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setvelocityatcell"
  },
  {
    "title": "sandkit.api.elements.setVelocityAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Deprecated Use setVelocityAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setvelocityatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.addParticleVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2, number\\] args Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid. Example See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "addparticlevelocityatcell"
  },
  {
    "title": "sandkit.api.elements.addParticleVelocityAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2, number\\] args Deprecated Use addParticleVelocityAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "addparticlevelocityatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.convertToParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid. Example See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "converttoparticleatcell"
  },
  {
    "title": "sandkit.api.elements.convertToParticleAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Deprecated Use convertToParticleAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "converttoparticleatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.convertFromParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "convertfromparticleatcell"
  },
  {
    "title": "sandkit.api.elements.convertFromParticleAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Deprecated Use convertFromParticleAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "convertfromparticleatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.setDataFieldAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, 1 \\\\ 2 \\\\ 3 \\\\ 4, number\\] args Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setdatafieldatcell"
  },
  {
    "title": "sandkit.api.elements.setDataFieldAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, 1 \\\\ 2 \\\\ 3 \\\\ 4, number\\] args Deprecated Use setDataFieldAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setdatafieldatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.refreshColorAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "refreshcoloratcell"
  },
  {
    "title": "sandkit.api.elements.refreshColorAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Deprecated Use refreshColorAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "refreshcoloratcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.setPhysicsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setphysicsatcell"
  },
  {
    "title": "sandkit.api.elements.setPhysicsAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Deprecated Use setPhysicsAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setphysicsatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.setDurationAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number, object\\] args Set element duration at a cell. Main-entry writes are deferred; reads see the old grid. Example Main entry See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setdurationatcell"
  },
  {
    "title": "sandkit.api.elements.setDurationAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number, object\\] args Deprecated Use setDurationAtCell instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "setdurationatcellwhenidle"
  },
  {
    "title": "sandkit.api.elements.getIdByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type. elementType Return the mod string id for a numeric element type. string & object See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getidbytype"
  },
  {
    "title": "sandkit.api.elements.getTypeById()",
    "body": "Argument Type Description --- --- --- elementId string & object Mod-registered element id. elementId Resolve a mod element string id to a type handle. ElementType See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "gettypebyid"
  },
  {
    "title": "sandkit.api.elements.getTypeFromId()",
    "body": "Argument Type Description --- --- --- elementId string & object elementId ElementType Deprecated Use getTypeById instead. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "gettypefromid"
  },
  {
    "title": "sandkit.api.elements.getDefinitionByType()",
    "body": "Argument Type Description --- --- --- elementType ElementType Numeric element type. elementType Look up the definition for a type handle. ElementDefinition \\ undefined See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getdefinitionbytype"
  },
  {
    "title": "sandkit.api.elements.getTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the raw element type at a cell (may differ from resolved type). ElementType \\ null See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "gettypeatcell"
  },
  {
    "title": "sandkit.api.elements.getResolvedTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the resolved element type after overlays and particles. ElementType \\ null See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getresolvedtypeatcell"
  },
  {
    "title": "sandkit.api.elements.getResolvedTypeFromCellId()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell id from world.getCellIdAtCell. cellId Return the resolved element type from a packed cell id. ElementType \\ null See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getresolvedtypefromcellid"
  },
  {
    "title": "sandkit.api.elements.getInfoAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return element index, particle flag, and ids at a cell. \\{ elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; \\} \\ null See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getinfoatcell"
  },
  {
    "title": "sandkit.api.elements.getMatterTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the matter category at a cell, or null when empty. MatterType \\ null See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getmattertypeatcell"
  },
  {
    "title": "sandkit.api.elements.isTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef\\] args Return true when the cell holds the given element type or id. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "istypeatcell"
  },
  {
    "title": "sandkit.api.elements.isFreeFallingAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the element at the cell is falling. See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "isfreefallingatcell"
  },
  {
    "title": "sandkit.api.elements.getVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return per-cell velocity for moving elements. \\{ x: number; y: number; \\} \\ null See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getvelocityatcell"
  },
  {
    "title": "sandkit.api.elements.getDataFieldAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, 1 \\\\ 2 \\\\ 3 \\\\ 4\\] args Read element data field 1–4 at a cell. number \\ null See Official docs",
    "path": "/api/sandkit.api.elements",
    "id": "getdatafieldatcell"
  },
  {
    "title": "sandkit.api.elements (worker)",
    "body": "Internal Worker-thread sandkit.api.elements — shared reads plus immediate grid mutations. Worker-entry mutations apply immediately. Main thread defers matching helpers in sandkit.api.elements. Worker extension; not interchangeable with main-thread sandkit.api.elements. Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.elements.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Create an element at a cell immediately on this worker. Example Worker entry See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.elements.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRef, ElementCreateOptions\\] args Replace the element at a cell immediately on this worker. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.elements.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [ElementRemovalOptions\\] args Remove the element at a cell immediately on this worker. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.elements.moveBetweenCells()",
    "body": "Argument Type Description --- --- --- fromCellX number Source cell column. fromCellY number Source cell row. toCellX number Destination cell column. toCellY number Destination cell row. fromCellX fromCellY toCellX toCellY Move an element between cells immediately on this worker. True when the move succeeded. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "movebetweencells"
  },
  {
    "title": "sandkit.api.elements.teleportBetweenCells()",
    "body": "Argument Type Description --- --- --- fromCellX number Source cell column. fromCellY number Source cell row. toCellX number Destination cell column. toCellY number Destination cell row. fromCellX fromCellY toCellX toCellY Teleport an element between cells immediately on this worker. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "teleportbetweencells"
  },
  {
    "title": "sandkit.api.elements.swapBetweenCells()",
    "body": "Argument Type Description --- --- --- firstCellX number First cell column. firstCellY number First cell row. secondCellX number Second cell column. secondCellY number Second cell row. firstCellX firstCellY secondCellX secondCellY Swap elements between two cells immediately on this worker. True when the swap succeeded. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "swapbetweencells"
  },
  {
    "title": "sandkit.api.elements.swapCells()",
    "body": "Argument Type Description --- --- --- firstCellX number firstCellY number secondCellX number secondCellY number firstCellX firstCellY secondCellX secondCellY Deprecated Use swapBetweenCells instead. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "swapcells"
  },
  {
    "title": "sandkit.api.elements.markMovementBlockedByIndex()",
    "body": "Argument Type Description --- --- --- elementIndex number Element index from getInfoAtCell. elementIndex Mark an element index as movement-blocked for this tick. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "markmovementblockedbyindex"
  },
  {
    "title": "sandkit.api.elements.markMovementBlockedByElementIndex()",
    "body": "Argument Type Description --- --- --- elementIndex number elementIndex Deprecated Use markMovementBlockedByIndex instead. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "markmovementblockedbyelementindex"
  },
  {
    "title": "sandkit.api.elements.setVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Set particle velocity at a cell immediately on this worker. True when velocity was set. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setvelocityatcell"
  },
  {
    "title": "sandkit.api.elements.addParticleVelocityAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2, number\\] args Add velocity to a particle at a cell immediately on this worker. True when velocity was updated. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "addparticlevelocityatcell"
  },
  {
    "title": "sandkit.api.elements.convertToParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2\\] args Convert a cell element to a particle immediately on this worker. True when conversion succeeded. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "converttoparticleatcell"
  },
  {
    "title": "sandkit.api.elements.convertFromParticleAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Convert a particle back to a solid element immediately on this worker. True when conversion succeeded. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "convertfromparticleatcell"
  },
  {
    "title": "sandkit.api.elements.setDataFieldAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, 1 \\\\ 2 \\\\ 3 \\\\ 4, number\\] args Set a data field on the element at a cell immediately on this worker. True when the field was set. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setdatafieldatcell"
  },
  {
    "title": "sandkit.api.elements.refreshColorAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Refresh the rendered color at a cell immediately on this worker. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "refreshcoloratcell"
  },
  {
    "title": "sandkit.api.elements.setPhysicsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set the physics skip mode at a cell immediately on this worker. See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setphysicsatcell"
  },
  {
    "title": "sandkit.api.elements.setDurationAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number, object\\] args Set element duration at a cell immediately on this worker. True when duration was updated. Example Worker entry See Official docs",
    "path": "/api/sandkit.api.elements.worker",
    "id": "setdurationatcell"
  },
  {
    "title": "sandkit.api.energy",
    "body": "sandkit.api.energy — structure energy networks, storage, and consumption. Main thread only.",
    "path": "/api/sandkit.api.energy",
    "id": ""
  },
  {
    "title": "sandkit.api.energy.EnergyRegisterTypeOptions",
    "body": "Property Type Description --- --- --- capacity? number Maximum stored energy for storage nodes. energyType? string Energy type id when multiple networks exist. capacity? energyType? Options for registerType. Indexable",
    "path": "/api/sandkit.api.energy",
    "id": "energyregistertypeoptions"
  },
  {
    "title": "sandkit.api.energy.EnergyAddOptions",
    "body": "Property Type Description --- --- --- energyType? string Energy type id when multiple networks exist. energyType? Options for addAtCell. Indexable",
    "path": "/api/sandkit.api.energy",
    "id": "energyaddoptions"
  },
  {
    "title": "sandkit.api.energy.registerType()",
    "body": "Argument Type Description --- --- --- structureId string Structure type id string. type \"storage\" \\\\ \"conductor\" conductor forwards energy; storage holds energy. options? EnergyRegisterTypeOptions Capacity and energy-type options for storage nodes. structureId type options? Registers an energy type on a structure as conductor or storage.",
    "path": "/api/sandkit.api.energy",
    "id": "registertype"
  },
  {
    "title": "sandkit.api.energy.addAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, number, [EnergyAddOptions\\] args Adds energy at a cell. Returns the amount actually added.",
    "path": "/api/sandkit.api.energy",
    "id": "addatcell"
  },
  {
    "title": "sandkit.api.energy.consume()",
    "body": "Argument Type Description --- --- --- amount number Energy amount to consume. options? When allOrNothing is true, consume zero unless the full amount is available. amount options? Consumes energy from the global pool. Returns the amount consumed.",
    "path": "/api/sandkit.api.energy",
    "id": "consume"
  },
  {
    "title": "sandkit.api.energy.consumeExcludingNetworkAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Consumes energy from networks other than the one at the cell.",
    "path": "/api/sandkit.api.energy",
    "id": "consumeexcludingnetworkatcell"
  },
  {
    "title": "sandkit.api.energy.getNetworkAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Returns energy network nodes connected at the cell. object[] Example",
    "path": "/api/sandkit.api.energy",
    "id": "getnetworkatcell"
  },
  {
    "title": "sandkit.api.energy.getNetworkFreeCapacityAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Returns free storage capacity in the network at the cell.",
    "path": "/api/sandkit.api.energy",
    "id": "getnetworkfreecapacityatcell"
  },
  {
    "title": "sandkit.api.entities",
    "body": "Entity spawn, capture, and lifecycle helpers. Available as sandkit.api.entities. Official docs",
    "path": "/api/sandkit.api.entities",
    "id": ""
  },
  {
    "title": "sandkit.api.entities.Entity",
    "body": "Property Type Description --- --- --- id number x number y number targetX? number targetY? number id x y targetX? targetY? Active entity instance in the world. Indexable",
    "path": "/api/sandkit.api.entities",
    "id": "entity"
  },
  {
    "title": "sandkit.api.entities.getById()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Return one live entity by runtime id. Entity \\ undefined See Official docs",
    "path": "/api/sandkit.api.entities",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.entities.getAllByType()",
    "body": "Argument Type Description --- --- --- entityTypeId string Registered entity type string id. entityTypeId Return all live entities of one type. Entity[] See Official docs",
    "path": "/api/sandkit.api.entities",
    "id": "getallbytype"
  },
  {
    "title": "sandkit.api.entities.spawnAtWorld()",
    "body": "Argument Type Description --- --- --- entityTypeId string Registered entity type string id. worldX number Spawn x position in world pixels. worldY number Spawn y position in world pixels. entityTypeId worldX worldY Spawn an entity at world position. Entity The spawned entity instance. See Official docs",
    "path": "/api/sandkit.api.entities",
    "id": "spawnatworld"
  },
  {
    "title": "sandkit.api.entities.remove()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Remove an entity from the world. See Official docs",
    "path": "/api/sandkit.api.entities",
    "id": "remove"
  },
  {
    "title": "sandkit.api.entities.launch()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. angleRadians number Launch angle in radians. speed? number Optional launch speed. entityId angleRadians speed? Launch an entity with angle and optional speed. See Official docs",
    "path": "/api/sandkit.api.entities",
    "id": "launch"
  },
  {
    "title": "sandkit.api.entities.startCapture()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Start capture for an entity (for example vacuum capture). See Official docs",
    "path": "/api/sandkit.api.entities",
    "id": "startcapture"
  },
  {
    "title": "sandkit.api.entities.collect()",
    "body": "Argument Type Description --- --- --- entityId number Runtime entity id. entityId Collect an entity (for example into inventory or storage). See Official docs",
    "path": "/api/sandkit.api.entities",
    "id": "collect"
  },
  {
    "title": "sandkit.api.events",
    "body": "sandkit.api.events — subscribe to and emit named game events. Main thread only. The events object is frozen; do not replace on or emit.",
    "path": "/api/sandkit.api.events",
    "id": ""
  },
  {
    "title": "sandkit.api.events.PlayerCollisionPreparePayload",
    "body": "Property Type Description --- --- --- phaseThroughTerrain boolean When true, terrain collision is skipped this sub-step. phaseThroughStructures boolean When true, structure collision is skipped this sub-step. maxStepCells number Max cells the player can step up when blocked horizontally (1–8). phaseThroughTerrain phaseThroughStructures maxStepCells Mutable payload for player:collision:prepare. Listeners may change maxStepCells (clamped 1–8) and phasing flags.",
    "path": "/api/sandkit.api.events",
    "id": "playercollisionpreparepayload"
  },
  {
    "title": "sandkit.api.events.EventPayloadMap",
    "body": "Property Type Description --- --- --- item:used used: object frame:render render: Record scene:game:started game:started: Record scene:started:game started:game: Record earlyAccess:completed completed: Record earlyAccess:complete complete: Record terrain:destroyed destroyed: object fog:cellRevealed cellRevealed: object upgrade:levelSelected levelSelected: object building:placed placed: object building:removing removing: object Fires before building:removed. building:removed removed: object structures:placed placed: object structures:removed removed: object structures:moved moved: object game:ready ready: Record game:started started: Record tutorial:stepChanged stepChanged: object tutorial:completed completed: object tech:unlocked unlocked: object worldItem:pickedUp pickedUp: object resource:collected collected: object player:collision:prepare collision:prepare: PlayerCollisionPreparePayload player:moved moved: object item:used frame:render scene:game:started scene:started:game earlyAccess:completed earlyAccess:complete terrain:destroyed fog:cellRevealed upgrade:levelSelected building:placed building:removing building:removed structures:placed structures:removed structures:moved game:ready game:started tutorial:stepChanged tutorial:completed tech:unlocked worldItem:pickedUp resource:collected player:collision:prepare player:moved Known event payloads. Unlisted ids still use unknown.",
    "path": "/api/sandkit.api.events",
    "id": "eventpayloadmap"
  },
  {
    "title": "sandkit.api.events.EventId",
    "body": "Known event names plus any custom string id.",
    "path": "/api/sandkit.api.events",
    "id": "eventid"
  },
  {
    "title": "sandkit.api.events.EventPayload",
    "body": "Event payload type for a given event id. Type Parameters K K",
    "path": "/api/sandkit.api.events",
    "id": "eventpayload"
  },
  {
    "title": "sandkit.api.events.on",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. callback (payload: EventPayload\\ ) = void Called when the event is emitted. eventId callback Subscribes to an event. Returns an unsubscribe function. Type Parameters K K extends EventId () = void Examples item:used frame:render scene:game:started earlyAccess:completed terrain:destroyed fog:cellRevealed upgrade:levelSelected building:placed building:removing building:removed structures:placed structures:removed structures:moved game:ready game:started tutorial:stepChanged tutorial:completed tech:unlocked worldItem:pickedUp resource:collected See Official docs",
    "path": "/api/sandkit.api.events",
    "id": "on"
  },
  {
    "title": "sandkit.api.events.emit",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. payload EventPayload\\ Serializable payload passed to listeners. eventId payload Emits an event with a payload to all subscribers. Type Parameters K K extends EventId See Official docs",
    "path": "/api/sandkit.api.events",
    "id": "emit"
  },
  {
    "title": "sandkit.api.events (worker)",
    "body": "Internal Worker-thread sandkit.api.events — subscribe to and emit worker-scoped events. Worker-only surface; do not use main-thread sandkit.api.events.",
    "path": "/api/sandkit.api.events.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.events.EventGuard",
    "body": "Property Type Description --- --- --- elementType? ElementType Required when subscribing to element:moved. Optional on emit. terrainType? number Required when subscribing to terrain:updated. Optional on emit. elementType? terrainType? Guard filter for worker events.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventguard"
  },
  {
    "title": "sandkit.api.events.EventEmitOptions",
    "body": "Property Type Description --- --- --- guard? EventGuard guard? Options for emit.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventemitoptions"
  },
  {
    "title": "sandkit.api.events.EventPayloadMap",
    "body": "Property Type Description --- --- --- element:moved moved: Record terrain:updated updated: Record terrain:update update: Record worker:update:post update:post: Record update:post post: Record element:moved terrain:updated terrain:update worker:update:post update:post Known worker event payloads. Unlisted ids still use unknown.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventpayloadmap"
  },
  {
    "title": "sandkit.api.events.EventOnOptions",
    "body": "Options for on. Type Parameters K K extends EventId",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventonoptions"
  },
  {
    "title": "sandkit.api.events.EventId",
    "body": "Known worker event names plus any custom string id.",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventid"
  },
  {
    "title": "sandkit.api.events.EventPayload",
    "body": "Event payload type for a given event id. Type Parameters K K",
    "path": "/api/sandkit.api.events.worker",
    "id": "eventpayload"
  },
  {
    "title": "sandkit.api.events.on",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. callback (payload: EventPayload\\ ) = void Called when the event is emitted. options? EventOnOptions\\ Required guard for filtered events. eventId callback options? Subscribe to a worker event. Returns an unsubscribe function. Type Parameters K K extends EventId () = void Examples element:moved terrain:updated worker:update:post See Official docs",
    "path": "/api/sandkit.api.events.worker",
    "id": "on"
  },
  {
    "title": "sandkit.api.events.emit",
    "body": "Argument Type Description --- --- --- eventId K Registered event name. payload EventPayload\\ Serializable payload passed to listeners. options? EventEmitOptions Optional guard forwarded to filtered listeners. eventId payload options? Emit a worker event with a payload to subscribers. Type Parameters K K extends EventId See Official docs",
    "path": "/api/sandkit.api.events.worker",
    "id": "emit"
  },
  {
    "title": "sandkit.api.excavation",
    "body": "sandkit.api.excavation — register custom excavation tool dig profiles. Main thread only. Official docs",
    "path": "/api/sandkit.api.excavation",
    "id": ""
  },
  {
    "title": "sandkit.api.excavation.ExcavationProfileDefinitionV1",
    "body": "Property Type Description --- --- --- pattern? number[][] Dig pattern grid; non-zero cells are removed. power number Dig strength applied to matched cells. Clamped to 0–1000. options? ExcavationProfileOptions Optional profile-specific excavation flags. terrainRules? readonly ExcavationTerrainRule[] Per-terrain output and damage rules. pattern? power options? terrainRules? Excavation tool profile definition.",
    "path": "/api/sandkit.api.excavation",
    "id": "excavationprofiledefinitionv1"
  },
  {
    "title": "sandkit.api.excavation.ExcavationProfileOptions",
    "body": "Property Type Description --- --- --- fromGun? boolean fromRocketExplosion? boolean fromDrill? boolean useLiteralOutVelocity? boolean destroyNonDestructible? boolean forceRemoveAll? boolean drillTierDamage? number Clamped to 0–1000 when set. fromGun? fromRocketExplosion? fromDrill? useLiteralOutVelocity? destroyNonDestructible? forceRemoveAll? drillTierDamage? Options attached to an excavation profile definition.",
    "path": "/api/sandkit.api.excavation",
    "id": "excavationprofileoptions"
  },
  {
    "title": "sandkit.api.excavation.ExcavationTerrainRule",
    "body": "Property Type Description --- --- --- cellType TerrainRef Terrain cell type to match. terrainType? TerrainRef damage? number Damage applied when this rule matches. outputElementType? ElementRef Element type produced when this terrain is excavated. cellType terrainType? damage? outputElementType? Terrain match rule within an excavation profile.",
    "path": "/api/sandkit.api.excavation",
    "id": "excavationterrainrule"
  },
  {
    "title": "sandkit.api.excavation.registerProfile()",
    "body": "Argument Type Description --- --- --- id string Unique profile id (1–128 chars: letters, numbers, ., , :, -). definition ExcavationProfileDefinitionV1 Pattern, power, terrain rules, and profile options. id definition Registers an excavation profile by id. Example See Official docs",
    "path": "/api/sandkit.api.excavation",
    "id": "registerprofile"
  },
  {
    "title": "sandkit.api.factory",
    "body": "Factory progression level and process counters. Available as sandkit.api.factory. Official docs",
    "path": "/api/sandkit.api.factory",
    "id": ""
  },
  {
    "title": "sandkit.api.factory.FactoryProcessId",
    "body": "Built-in factory process identifiers.",
    "path": "/api/sandkit.api.factory",
    "id": "factoryprocessid"
  },
  {
    "title": "sandkit.api.factory.getLevel()",
    "body": "Return the current factory level. See Official docs",
    "path": "/api/sandkit.api.factory",
    "id": "getlevel"
  },
  {
    "title": "sandkit.api.factory.getProcessCount()",
    "body": "Argument Type Description --- --- --- processId FactoryProcessId Built-in factory process id. processId Return completed count for a factory process. See Official docs",
    "path": "/api/sandkit.api.factory",
    "id": "getprocesscount"
  },
  {
    "title": "sandkit.api.factory.getProcessRate()",
    "body": "Argument Type Description --- --- --- processId FactoryProcessId Built-in factory process id. processId Return completion rate for a factory process. See Official docs",
    "path": "/api/sandkit.api.factory",
    "id": "getprocessrate"
  },
  {
    "title": "sandkit.api.fire",
    "body": "sandkit.api.fire — ignite and burn elements at grid cells. Main thread only. Official docs",
    "path": "/api/sandkit.api.fire",
    "id": ""
  },
  {
    "title": "sandkit.api.fire.canBurnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Returns true when the element at the cell can burn. See Official docs",
    "path": "/api/sandkit.api.fire",
    "id": "canburnelementatcell"
  },
  {
    "title": "sandkit.api.fire.burnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Burn the element at the cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.fire",
    "id": "burnelementatcell"
  },
  {
    "title": "sandkit.api.fire.burnElementAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Deprecated Use burnElementAtCell instead. See Official docs",
    "path": "/api/sandkit.api.fire",
    "id": "burnelementatcellwhenidle"
  },
  {
    "title": "sandkit.api.fire (worker)",
    "body": "Internal Worker-thread sandkit.api.fire — ignite and burn elements at grid cells. Worker burns are immediate. Main thread defers burns with burnElementAtCell. Worker-only surface; do not use main-thread sandkit.api.fire.",
    "path": "/api/sandkit.api.fire.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.fire.canBurnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the element at the cell can burn. See Official docs",
    "path": "/api/sandkit.api.fire.worker",
    "id": "canburnelementatcell"
  },
  {
    "title": "sandkit.api.fire.burnElementAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Burn the element at the cell immediately on this worker. True when the burn succeeded. See Official docs",
    "path": "/api/sandkit.api.fire.worker",
    "id": "burnelementatcell"
  },
  {
    "title": "sandkit.api.game",
    "body": "Game session start helpers. Available as sandkit.api.game. Official docs",
    "path": "/api/sandkit.api.game",
    "id": ""
  },
  {
    "title": "sandkit.api.game.GameStartOptions",
    "body": "Property Type Description --- --- --- skipIntro? boolean When true, skip the intro sequence. skipIntro? Options for start.",
    "path": "/api/sandkit.api.game",
    "id": "gamestartoptions"
  },
  {
    "title": "sandkit.api.game.start()",
    "body": "Argument Type Description --- --- --- options? GameStartOptions Optional session start flags. options? Start or restart the game session. Example See Official docs",
    "path": "/api/sandkit.api.game",
    "id": "start"
  },
  {
    "title": "sandkit.api.gameConfig",
    "body": "sandkit.api.gameConfig — read merged game configuration values. Main thread only.",
    "path": "/api/sandkit.api.gameConfig",
    "id": ""
  },
  {
    "title": "sandkit.api.gameConfig.get()",
    "body": "Argument Type Description --- --- --- key string Game config key (merged defaults and overrides). key Returns a config value by key, or undefined when missing. JsonValueV1 \\ undefined",
    "path": "/api/sandkit.api.gameConfig",
    "id": "get"
  },
  {
    "title": "sandkit.api.gameConfig.getAll()",
    "body": "Returns the full config object. JsonObjectV1",
    "path": "/api/sandkit.api.gameConfig",
    "id": "getall"
  },
  {
    "title": "sandkit.api.grid",
    "body": "sandkit.api.grid — grid cell queries, deferred mutations, and iteration. Main thread only. Official docs",
    "path": "/api/sandkit.api.grid",
    "id": ""
  },
  {
    "title": "sandkit.api.grid.GridMutationWriter",
    "body": "Property Type Description --- --- --- elements GridMutationWriterElements Element cell mutations inside a mutate callback. terrains GridMutationWriterTerrains Terrain cell mutations inside a mutate callback. elements terrains Deferred element and terrain mutations passed to mutate.",
    "path": "/api/sandkit.api.grid",
    "id": "gridmutationwriter"
  },
  {
    "title": "createAtCell()",
    "body": "Element writers available on GridMutationWriter.elements. Methods createAtCell() Defined in: sandkit/api/grid.d.ts:185 Create an element at a cell inside a mutate callback. Parameters args ...\\number, number, [ElementRef, ElementCreateOptions\\] Returns void See Official docs replaceAtCell() Defined in: sandkit/api/grid.d.ts:203 Replace the element at a cell inside a mutate callback. Parameters args ...\\number, number, [ElementRef, ElementCreateOptions\\] Returns void See Official docs removeAtCell() Defined in: sandkit/api/grid.d.ts:220 Remove the element at a cell inside a mutate callback. Parameters args ...\\number, number, [ElementRemovalOptions\\] Returns void See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "gridmutationwriterelements"
  },
  {
    "title": "createAtCell()",
    "body": "Terrain writers available on GridMutationWriter.terrains. Methods createAtCell() Defined in: sandkit/api/grid.d.ts:235 Create terrain at a cell inside a mutate callback. Parameters args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] Returns void See Official docs replaceAtCell() Defined in: sandkit/api/grid.d.ts:253 Replace terrain at a cell inside a mutate callback. Parameters args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] Returns void See Official docs removeAtCell() Defined in: sandkit/api/grid.d.ts:270 Remove terrain at a cell inside a mutate callback. Parameters args ...\\number, number, [TerrainMutationOptions\\] Returns void See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "gridmutationwriterterrains"
  },
  {
    "title": "sandkit.api.grid.GridDimensions",
    "body": "Property Type Description --- --- --- widthCells number Grid width in cells. heightCells number Grid height in cells. widthCells heightCells World grid width and height in cells.",
    "path": "/api/sandkit.api.grid",
    "id": "griddimensions"
  },
  {
    "title": "sandkit.api.grid.ExcavateOptions",
    "body": "Property Type Description --- --- --- fromGun? boolean Treat the dig as gun fire for terrain resistance checks. fromRocketExplosion? boolean Treat the dig as rocket or dynamite explosion damage. fromDrill? boolean Treat the dig as drill damage. useLiteralOutVelocity? boolean Use outVelocity literally instead of deriving ejection speed. destroyNonDestructible? boolean Allow removing terrain marked non-destructible. forceRemoveAll? boolean Force-remove all matched cells regardless of normal rules. drillTierDamage? number Extra drill-tier damage when fromDrill is true. Clamped to 0–1000. fromGun? fromRocketExplosion? fromDrill? useLiteralOutVelocity? destroyNonDestructible? forceRemoveAll? drillTierDamage? Flags that control how excavateAtCell resolves damage and drops.",
    "path": "/api/sandkit.api.grid",
    "id": "excavateoptions"
  },
  {
    "title": "sandkit.api.grid.CellId",
    "body": "Packed cell id from getCellIdAtCell.",
    "path": "/api/sandkit.api.grid",
    "id": "cellid"
  },
  {
    "title": "sandkit.api.grid.mutate()",
    "body": "Argument Type Description --- --- --- callback (writer: GridMutationWriter) = void Receives a writer for element and terrain cell mutations. callback Run deferred grid mutations on the main thread. Reads see the old grid until mutations apply. Examples Deferred main-thread mutations See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "mutate"
  },
  {
    "title": "sandkit.api.grid.revealFogAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Reveal fog of war at a cell. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "revealfogatcell"
  },
  {
    "title": "sandkit.api.grid.redrawAroundCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Request redraw around a cell. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "redrawaroundcell"
  },
  {
    "title": "sandkit.api.grid.forEachCellInCircle()",
    "body": "Argument Type Description --- --- --- centerCellX number Circle center cell column. centerCellY number Circle center cell row. radiusCells number Circle radius in cells. callback (...args: CellCoordinates) = void Invoked for each cell with (cellX, cellY). centerCellX centerCellY radiusCells callback Calls the callback for each cell inside a circle. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "foreachcellincircle"
  },
  {
    "title": "sandkit.api.grid.forEachCellInRectangle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, number, number, (...args: [CellCoordinates) = void\\] args Calls the callback for each cell in a rectangle. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "foreachcellinrectangle"
  },
  {
    "title": "sandkit.api.grid.forEachCellInRect()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, number, number, (...args: [CellCoordinates) = void\\] args Deprecated Use forEachCellInRectangle instead. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "foreachcellinrect"
  },
  {
    "title": "sandkit.api.grid.getCellIdAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the packed cell id at grid coordinates. CellId Packed cell id for the cell. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "getcellidatcell"
  },
  {
    "title": "sandkit.api.grid.isCellEmptyAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the cell has no element or terrain content. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "iscellemptyatcell"
  },
  {
    "title": "sandkit.api.grid.isTerrainAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the cell holds terrain (not an element). See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "isterrainatcell"
  },
  {
    "title": "sandkit.api.grid.reportActivityAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Mark the cell active for simulation this tick. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "reportactivityatcell"
  },
  {
    "title": "sandkit.api.grid.excavateAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [Vector2, number, ExcavateOptions\\] args Apply excavation damage and eject velocity at a cell. See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "excavateatcell"
  },
  {
    "title": "sandkit.api.grid.getDimensions()",
    "body": "Return the world grid size in cells. GridDimensions See Official docs",
    "path": "/api/sandkit.api.grid",
    "id": "getdimensions"
  },
  {
    "title": "sandkit.api.grid (worker)",
    "body": "Internal Worker-thread sandkit.api.grid — grid reads, activity, and excavation. Worker mutations are immediate. Main thread defers grid writes through api.grid.mutate. Worker subset; do not import main-thread sandkit.api.grid iteration helpers here.",
    "path": "/api/sandkit.api.grid.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.hooks",
    "body": "sandkit.api.hooks — intercept and modify internal game hook points. Main thread only.",
    "path": "/api/sandkit.api.hooks",
    "id": ""
  },
  {
    "title": "sandkit.api.hooks.HookContext",
    "body": "Property Type Description --- --- --- cancelled boolean True after cancel was called on this context. cancelled Context passed to intercept hook callbacks. Methods cancel() Defined in: sandkit/api/hooks.d.ts:399 When called, the intercepted action is skipped. Returns void",
    "path": "/api/sandkit.api.hooks",
    "id": "hookcontext"
  },
  {
    "title": "sandkit.api.hooks.HookOptions",
    "body": "Property Type Description --- --- --- priority? number Run this hook before others with lower priority. priority? Options shared by intercept and modify hooks. Indexable",
    "path": "/api/sandkit.api.hooks",
    "id": "hookoptions"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookMap",
    "body": "Property Type Description --- --- --- item:use use: object teleport:effect:create effect:create: Record teleport:effect effect: Record action:start start: object & Record action:intercept intercept: object & Record input:keyDown keyDown: object input:keydown keydown: object input:keyUp keyUp: object input:keyup keyup: object placePoints:suppress suppress: object & Record placePoints:isSuppressed isSuppressed: object & Record placePoints:directionalArrows:suppress directionalArrows:suppress: object & Record placePoints:directionalArrows:isSuppressed directionalArrows:isSuppressed: object & Record entity:update update: object building:place place: object building:clearShape clearShape: object input:scroll scroll: object & Record input:boostDown boostDown: Record input:boost-down boost-down: Record input:descendDown descendDown: Record input:descend-down descend-down: Record input:escape escape: Record interactable:suppressHover suppressHover: object & Record fire:element:ignite element:ignite: object projectile:fire:overStructure fire:overStructure: object projectile:hit hit: object player:position:commit position:commit: object progression:purchase purchase: object item:use teleport:effect:create teleport:effect action:start action:intercept input:keyDown input:keydown input:keyUp input:keyup placePoints:suppress placePoints:isSuppressed placePoints:directionalArrows:suppress placePoints:directionalArrows:isSuppressed entity:update building:place building:clearShape input:scroll input:boostDown input:boost-down input:descendDown input:descend-down input:escape interactable:suppressHover fire:element:ignite projectile:fire:overStructure projectile:hit player:position:commit progression:purchase Intercept hook argument shapes keyed by hook id.",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookmap"
  },
  {
    "title": "sandkit.api.hooks.ModifierHookMap",
    "body": "Property Type Description --- --- --- excavation:prepare prepare: object locator:scan:prepare scan:prepare: object vacuum:prepare prepare: object vacuum:element:prepare element:prepare: object player:movement:prepare movement:prepare: Record player:movement movement: Record building:placementLimit:prepare placementLimit:prepare: object & Record building:placementLimit placementLimit: object & Record building:placement-limit placement-limit: object & Record fluxEmanator:processing:prepare processing:prepare: object & Record fluxEmanator:processing processing: object & Record flux-emanator:processing processing: object & Record render:pipes:prepare pipes:prepare: object & Record render:pipes pipes: object & Record structures:moved:prepare moved:prepare: object structures:removed:prepare removed:prepare: object weapon:reload:prepare reload:prepare: object projectile:travel:prepare travel:prepare: object projectile:impact:prepare impact:prepare: object player:collision:prepare collision:prepare: object trigger:schedule:prepare schedule:prepare: object progression:cost:prepare cost:prepare: object resource:collection:prepare collection:prepare: object resource:delivery:prepare delivery:prepare: object resource:balance:prepare balance:prepare: object gold:removal:prepare removal:prepare: object gold:removal:settle removal:settle: object excavation:prepare locator:scan:prepare vacuum:prepare vacuum:element:prepare player:movement:prepare player:movement building:placementLimit:prepare building:placementLimit building:placement-limit fluxEmanator:processing:prepare fluxEmanator:processing flux-emanator:processing render:pipes:prepare render:pipes structures:moved:prepare structures:removed:prepare weapon:reload:prepare projectile:travel:prepare projectile:impact:prepare player:collision:prepare trigger:schedule:prepare progression:cost:prepare resource:collection:prepare resource:delivery:prepare resource:balance:prepare gold:removal:prepare gold:removal:settle Modify hook argument shapes keyed by hook id.",
    "path": "/api/sandkit.api.hooks",
    "id": "modifierhookmap"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookOptions",
    "body": "Options for intercept. Type Parameters K K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookoptions"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookOptions",
    "body": "Options for modify.",
    "path": "/api/sandkit.api.hooks",
    "id": "modifyhookoptions"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookId",
    "body": "Known main-thread intercept hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookid"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookId",
    "body": "Known main-thread modify hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks",
    "id": "modifyhookid"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookArgs",
    "body": "Intercept hook args for a given hook id. Type Parameters K K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks",
    "id": "intercepthookargs"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookArgs",
    "body": "Modify hook args for a given hook id. Type Parameters K K extends ModifyHookId",
    "path": "/api/sandkit.api.hooks",
    "id": "modifyhookargs"
  },
  {
    "title": "sandkit.api.hooks.intercept",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: InterceptHookArgs\\ , context: HookContext) = void Called with hook arguments and context; may cancel the hook. options? InterceptHookOptions\\ Optional priority and filter options. hookId callback options? Registers an intercept hook. Returns an unsubscribe function. Type Parameters K K extends InterceptHookId () = void Examples item:use teleport:effect:create action:start input:keyDown input:keyUp placePoints:suppress placePoints:directionalArrows:suppress entity:update building:place building:clearShape input:scroll input:boostDown input:descendDown input:escape interactable:suppressHover fire:element:ignite projectile:fire:overStructure projectile:hit player:position:commit progression:purchase See Official docs",
    "path": "/api/sandkit.api.hooks",
    "id": "intercept"
  },
  {
    "title": "sandkit.api.hooks.modify",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: ModifyHookArgs\\ ) = void Called with hook arguments; may mutate hook payload. options? ModifyHookOptions Optional priority and filter options. hookId callback options? Registers a modifier hook. Returns an unsubscribe function. Type Parameters K K extends ModifyHookId () = void Examples excavation:prepare locator:scan:prepare vacuum:prepare vacuum:element:prepare player:movement:prepare building:placementLimit:prepare fluxEmanator:processing:prepare render:pipes:prepare structures:moved:prepare structures:removed:prepare weapon:reload:prepare projectile:travel:prepare projectile:impact:prepare player:collision:prepare trigger:schedule:prepare progression:cost:prepare resource:collection:prepare resource:delivery:prepare resource:balance:prepare gold:removal:prepare gold:removal:settle See Official docs",
    "path": "/api/sandkit.api.hooks",
    "id": "modify"
  },
  {
    "title": "sandkit.api.hooks (worker)",
    "body": "Internal Worker-thread sandkit.api.hooks — intercept and modify simulation hook points. Worker-only surface; do not use main-thread sandkit.api.hooks.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.hooks.HookContext",
    "body": "Property Type Description --- --- --- cancelled boolean True after cancel was called on this context. cancelled Context passed to intercept hook callbacks. Methods cancel() Defined in: worker/api/hooks.d.ts:114 When called, the intercepted action is skipped. Returns void",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "hookcontext"
  },
  {
    "title": "sandkit.api.hooks.HookGuard",
    "body": "Property Type Description --- --- --- elementType? ElementType Required for element-scoped intercept hooks and optional on emit. terrainType? number Required for terrain-scoped event guards; optional on emit. elementType? terrainType? Guard filter for worker hook registration.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "hookguard"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookOptions",
    "body": "Property Type Description --- --- --- guard? HookGuard priority? number guard? priority? Options for modify.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookoptions"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookMap",
    "body": "Property Type Description --- --- --- cell:process process: Record element:update update: Record element:move move: Record element:move:blocked move:blocked: Record element:blocked blocked: Record element:duration:expire duration:expire: Record element:duration duration: Record fire:element:burn element:burn: Record fire:terrain:burn terrain:burn: Record shaker:elementOn elementOn: Record cell:process element:update element:move element:move:blocked element:blocked element:duration:expire element:duration fire:element:burn fire:terrain:burn shaker:elementOn Intercept hook argument shapes keyed by hook id.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookmap"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookOptions",
    "body": "Options for intercept. Type Parameters K K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookoptions"
  },
  {
    "title": "sandkit.api.hooks.ElementGuardedInterceptHookId",
    "body": "Intercept hook ids with a required element guard.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "elementguardedintercepthookid"
  },
  {
    "title": "sandkit.api.hooks.TerrainGuardedInterceptHookId",
    "body": "Intercept hook ids with a required terrain guard.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "terrainguardedintercepthookid"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookId",
    "body": "Known worker intercept hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookid"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookId",
    "body": "Known worker modify hook ids plus custom strings.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookid"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookMap",
    "body": "Modify hook argument shapes keyed by hook id. Unlisted ids use unknown.",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookmap"
  },
  {
    "title": "sandkit.api.hooks.InterceptHookArgs",
    "body": "Intercept hook args for a given hook id. Type Parameters K K extends InterceptHookId",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercepthookargs"
  },
  {
    "title": "sandkit.api.hooks.ModifyHookArgs",
    "body": "Modify hook args for a given hook id. Type Parameters K K extends ModifyHookId",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modifyhookargs"
  },
  {
    "title": "sandkit.api.hooks.intercept",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: InterceptHookArgs\\ , context: HookContext) = void Called with hook arguments and context; may cancel the hook. options? InterceptHookOptions\\ Optional guard and priority. hookId callback options? Register an intercept hook on this worker. Returns an unsubscribe function. Type Parameters K K extends InterceptHookId () = void Examples cell:process element:update element:move element:move:blocked element:duration:expire fire:element:burn fire:terrain:burn shaker:elementOn See Official docs",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "intercept"
  },
  {
    "title": "sandkit.api.hooks.modify",
    "body": "Argument Type Description --- --- --- hookId K Registered hook identifier. callback (args: ModifyHookArgs\\ ) = void Called with hook arguments; may mutate hook payload. options? ModifyHookOptions Optional guard and priority. hookId callback options? Register a modifier hook on this worker. Returns an unsubscribe function. Type Parameters K K extends ModifyHookId () = void Example Worker entry See Official docs",
    "path": "/api/sandkit.api.hooks.worker",
    "id": "modify"
  },
  {
    "title": "sandkit.api.i18n",
    "body": "sandkit.api.i18n — translations, locales, and display strings for mods. Main thread only.",
    "path": "/api/sandkit.api.i18n",
    "id": ""
  },
  {
    "title": "sandkit.api.i18n.I18nNumberFormatOptions",
    "body": "Property Type Description --- --- --- minimumFractionDigits? number Minimum fraction digits. maximumFractionDigits? number Maximum fraction digits. useGrouping? boolean When true, use grouping separators. minimumFractionDigits? maximumFractionDigits? useGrouping? Number format options for formatNumber. Indexable",
    "path": "/api/sandkit.api.i18n",
    "id": "i18nnumberformatoptions"
  },
  {
    "title": "sandkit.api.i18n.Locale",
    "body": "Locale code. \"en\" autocompletes; any locale string is allowed.",
    "path": "/api/sandkit.api.i18n",
    "id": "locale"
  },
  {
    "title": "sandkit.api.i18n.t()",
    "body": "Argument Type Description --- --- --- key string Translation key. params? Record\\ Placeholder values for the key template. key params? Translates a key with optional parameter substitution. Example See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "t"
  },
  {
    "title": "sandkit.api.i18n.register()",
    "body": "Argument Type Description --- --- --- locale Locale Locale code (e.g. en). translations Record\\ Map of keys to translated strings. locale translations Registers translation strings for a locale. Example See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "register"
  },
  {
    "title": "sandkit.api.i18n.getLocale()",
    "body": "Returns the active locale code. Locale See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "getlocale"
  },
  {
    "title": "sandkit.api.i18n.hasTranslation()",
    "body": "Argument Type Description --- --- --- key string Translation key. locale? Locale Optional locale; defaults to the active locale. key locale? Returns true when a translation exists for the key. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "hastranslation"
  },
  {
    "title": "sandkit.api.i18n.setLocale()",
    "body": "Argument Type Description --- --- --- locale Locale Locale code to activate. locale Sets the active locale. Promise\\ See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "setlocale"
  },
  {
    "title": "sandkit.api.i18n.getLanguages()",
    "body": "Returns metadata for all known languages. object[] See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "getlanguages"
  },
  {
    "title": "sandkit.api.i18n.getAvailableLocales()",
    "body": "Returns locale codes that have registered translations. Locale[] See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "getavailablelocales"
  },
  {
    "title": "sandkit.api.i18n.formatNumber()",
    "body": "Argument Type Description --- --- --- value number Number to format. options? I18nNumberFormatOptions Intl-style number format options. value options? Formats a number for the active locale. Example See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "formatnumber"
  },
  {
    "title": "sandkit.api.i18n.joinKey()",
    "body": "Argument Type Description --- --- --- parts ...string[] Key segments joined with .. parts Joins key parts into a single translation key. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "joinkey"
  },
  {
    "title": "sandkit.api.i18n.key()",
    "body": "Argument Type Description --- --- --- parts ...string[] parts Deprecated Use joinKey instead. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "key"
  },
  {
    "title": "sandkit.api.i18n.getName()",
    "body": "Argument Type Description --- --- --- definition Object with nameKey or name. definition Returns the display name from a definition with nameKey or name. Example See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "getname"
  },
  {
    "title": "sandkit.api.i18n.getDescription()",
    "body": "Argument Type Description --- --- --- definition Object with descriptionKey or description. definition Returns the description from a definition with descriptionKey or description. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "getdescription"
  },
  {
    "title": "sandkit.api.i18n.createTranslatable()",
    "body": "Argument Type Description --- --- --- key string Translation key. fallback string Text used when no translation is registered. key fallback Creates a translatable string object with a fallback. \\ \\ translatable: true key: string fallback: string See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "createtranslatable"
  },
  {
    "title": "sandkit.api.i18n.translatable()",
    "body": "Argument Type Description --- --- --- key string fallback string key fallback \\ \\ translatable: true key: string fallback: string Deprecated Use createTranslatable instead. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "translatable"
  },
  {
    "title": "sandkit.api.i18n.setGlobal()",
    "body": "Argument Type Description --- --- --- key string Global helper key. value string \\\\ (() = string) Static string or function that returns the current value. key value Sets a global string or lazy resolver used in translations. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "setglobal"
  },
  {
    "title": "sandkit.api.i18n.getGlobal()",
    "body": "Argument Type Description --- --- --- key string Global helper key. key Returns a global translation helper value. string \\ undefined See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "getglobal"
  },
  {
    "title": "sandkit.api.i18n.removeGlobal()",
    "body": "Argument Type Description --- --- --- key string Global helper key. key Removes a global translation helper value. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "removeglobal"
  },
  {
    "title": "sandkit.api.i18n.clearGlobal()",
    "body": "Argument Type Description --- --- --- key string key Deprecated Use removeGlobal instead. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "clearglobal"
  },
  {
    "title": "sandkit.api.i18n.getGlobals()",
    "body": "Returns all global translation helper values. Record\\ See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "getglobals"
  },
  {
    "title": "sandkit.api.i18n.formatKeyForDisplay()",
    "body": "Argument Type Description --- --- --- keyCode string Keyboard key code or binding name. keyCode Formats a key code for display in UI. See Official docs",
    "path": "/api/sandkit.api.i18n",
    "id": "formatkeyfordisplay"
  },
  {
    "title": "sandkit.api.input",
    "body": "sandkit.api.input — key bindings, mouse position, and modifier keys. Main thread only.",
    "path": "/api/sandkit.api.input",
    "id": ""
  },
  {
    "title": "sandkit.api.input.InputBindingHandlers",
    "body": "Property Type Description --- --- --- down? () = void Called when the binding is pressed. up? () = void Called when the binding is released. down? up? Handlers invoked when a binding is pressed or released.",
    "path": "/api/sandkit.api.input",
    "id": "inputbindinghandlers"
  },
  {
    "title": "sandkit.api.input.InputBindingDefinition",
    "body": "Property Type Description --- --- --- displayName string Display name shown in settings. displayNameKey? string i18n key for the display name (overrides displayName when set). category string Settings category for grouping. handlers InputBindingHandlers Press and release handlers. displayName displayNameKey? category handlers Definition for a registered input binding. Indexable",
    "path": "/api/sandkit.api.input",
    "id": "inputbindingdefinition"
  },
  {
    "title": "sandkit.api.input.BindingId",
    "body": "Binding id. Vanilla KeyBindingEnum names autocomplete; custom ids are allowed.",
    "path": "/api/sandkit.api.input",
    "id": "bindingid"
  },
  {
    "title": "sandkit.api.input.KeyCode",
    "body": "KeyboardEvent.code, a modifier alias (Shift), or a chord (Control+KeyC).",
    "path": "/api/sandkit.api.input",
    "id": "keycode"
  },
  {
    "title": "sandkit.api.input.registerBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Unique id for the binding (also used in settings). defaultKeys KeyCode[] Default key codes (for example \"Control+KeyC\"). definition InputBindingDefinition Display metadata and press/release handlers. bindingId defaultKeys definition Register a key binding and return its binding id. BindingId The registered binding id. Example",
    "path": "/api/sandkit.api.input",
    "id": "registerbinding"
  },
  {
    "title": "sandkit.api.input.getMouseCellPosition()",
    "body": "Return the mouse position in cell coordinates. Cell { x, y } under the cursor. x: number y: number",
    "path": "/api/sandkit.api.input",
    "id": "getmousecellposition"
  },
  {
    "title": "sandkit.api.input.getBoundKeys()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Return the keys currently bound to a binding id. KeyCode[] Key strings from settings (for example \"KeyA\" or \"Shift\"). Session input.keys is keyed by KeyboardEvent.code. Modifier aliases (Shift, Alt, Control, Meta) expand to ShiftLeft / ShiftRight and the same for the other modifiers.",
    "path": "/api/sandkit.api.input",
    "id": "getboundkeys"
  },
  {
    "title": "sandkit.api.input.getDisplayKey()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. defaultLabel? string Fallback label when no key is bound. bindingId defaultLabel? Return a display label for the bound key. Human-readable key label for UI.",
    "path": "/api/sandkit.api.input",
    "id": "getdisplaykey"
  },
  {
    "title": "sandkit.api.input.triggerBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Fire the binding down handler as if the key was pressed.",
    "path": "/api/sandkit.api.input",
    "id": "triggerbinding"
  },
  {
    "title": "sandkit.api.input.pressBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Fire the binding down handler without a matching release.",
    "path": "/api/sandkit.api.input",
    "id": "pressbinding"
  },
  {
    "title": "sandkit.api.input.releaseBinding()",
    "body": "Argument Type Description --- --- --- bindingId BindingId Registered binding id. bindingId Fire the binding up handler.",
    "path": "/api/sandkit.api.input",
    "id": "releasebinding"
  },
  {
    "title": "sandkit.api.input.resetMouseState()",
    "body": "Clear internal mouse button state.",
    "path": "/api/sandkit.api.input",
    "id": "resetmousestate"
  },
  {
    "title": "sandkit.api.input.isCtrlHeld()",
    "body": "Return true when Ctrl is held. True when the Ctrl modifier is down.",
    "path": "/api/sandkit.api.input",
    "id": "isctrlheld"
  },
  {
    "title": "sandkit.api.input.isAltHeld()",
    "body": "Return true when Alt is held. True when the Alt modifier is down.",
    "path": "/api/sandkit.api.input",
    "id": "isaltheld"
  },
  {
    "title": "sandkit.api.items",
    "body": "sandkit.api.items — register custom inventory items and query active items. Main thread only.",
    "path": "/api/sandkit.api.items",
    "id": ""
  },
  {
    "title": "sandkit.api.items.ItemDefinition",
    "body": "Property Type Description --- --- --- handleAction? (state: State, action: Action) = unknown Handles item use actions. afterRender? (state: State) = void Called after the item is rendered each frame. handleAction? afterRender? Definition for a mod-registered inventory item. Type Parameters State State = unknown Action Action = unknown Indexable",
    "path": "/api/sandkit.api.items",
    "id": "itemdefinition"
  },
  {
    "title": "sandkit.api.items.ItemId",
    "body": "Inventory item id. Built-in ItemIdEnum values autocomplete; custom string ids are allowed.",
    "path": "/api/sandkit.api.items",
    "id": "itemid"
  },
  {
    "title": "sandkit.api.items.ItemType",
    "body": "Item category handle. Built-in ItemTypeEnum values autocomplete.",
    "path": "/api/sandkit.api.items",
    "id": "itemtype"
  },
  {
    "title": "sandkit.api.items.ModItem",
    "body": "Runtime item instance (not yet typed in declarations).",
    "path": "/api/sandkit.api.items",
    "id": "moditem"
  },
  {
    "title": "sandkit.api.items.register()",
    "body": "Argument Type Description --- --- --- definition ItemDefinition Item id, handlers, and display metadata. definition Registers a new item definition.",
    "path": "/api/sandkit.api.items",
    "id": "register"
  },
  {
    "title": "sandkit.api.items.updateDefinition()",
    "body": "Argument Type Description --- --- --- itemId ItemId Registered item id. partial Partial\\ Fields to merge into the definition. itemId partial Updates fields on an existing item definition. Example",
    "path": "/api/sandkit.api.items",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.items.getDefinitionById()",
    "body": "Argument Type Description --- --- --- itemId ItemId Registered item id. itemId Returns the item definition for an id, or undefined. ItemDefinition\\ \\ undefined",
    "path": "/api/sandkit.api.items",
    "id": "getdefinitionbyid"
  },
  {
    "title": "sandkit.api.items.createFromId()",
    "body": "Argument Type Description --- --- --- itemId ItemId Registered item id. itemId Creates a runtime item instance from an id.",
    "path": "/api/sandkit.api.items",
    "id": "createfromid"
  },
  {
    "title": "sandkit.api.items.getActive()",
    "body": "Returns the item definition for the active hotbar slot. ItemDefinition\\ \\ undefined",
    "path": "/api/sandkit.api.items",
    "id": "getactive"
  },
  {
    "title": "sandkit.api.items.isActiveById()",
    "body": "Argument Type Description --- --- --- itemId ItemId Item id or numeric type to compare. itemType? ItemType Optional item type discriminator. itemId itemType? Returns true when the given item is the active hotbar item.",
    "path": "/api/sandkit.api.items",
    "id": "isactivebyid"
  },
  {
    "title": "sandkit.api.lights",
    "body": "sandkit.api.lights — temporary lights and persistent world lights. Main thread only. - temporary - persistent",
    "path": "/api/sandkit.api.lights",
    "id": ""
  },
  {
    "title": "sandkit.api.lights.TemporaryLightHandle",
    "body": "Property Type Description --- --- --- lightId number \\ null Assigned temporary light id, or null when creation failed. index number \\ null lightId index Handle returned from temporary.createAtWorld.",
    "path": "/api/sandkit.api.lights",
    "id": "temporarylighthandle"
  },
  {
    "title": "sandkit.api.lights.PersistentLightOptions",
    "body": "Property Type Description --- --- --- brightness? number Light brightness multiplier. size? number Light radius in pixels. color? [number, number, number, number] RGBA color components. brightness? size? color? Options for persistent world lights. Indexable",
    "path": "/api/sandkit.api.lights",
    "id": "persistentlightoptions"
  },
  {
    "title": "sandkit.api.lights.TemporaryLightOptions",
    "body": "Options for temporary lights.",
    "path": "/api/sandkit.api.lights",
    "id": "temporarylightoptions"
  },
  {
    "title": "sandkit.api.lights.PersistentLightHandle",
    "body": "Handle returned from persistent.createAtWorld.",
    "path": "/api/sandkit.api.lights",
    "id": "persistentlighthandle"
  },
  {
    "title": "sandkit.api.lights.persistent",
    "body": "Lights that persist in the world save.",
    "path": "/api/sandkit.api.lights.persistent",
    "id": ""
  },
  {
    "title": "sandkit.api.lights.persistent.createAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? PersistentLightOptions Brightness, size, color, and persistence options. worldX worldY options? Create a persistent light at world coordinates. Example See Official docs",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.lights.persistent.removeAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. worldX worldY Remove the persistent light at world coordinates. See Official docs",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "removeatworld"
  },
  {
    "title": "sandkit.api.lights.persistent.fadeAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. durationMs? number Fade duration in milliseconds. worldX worldY durationMs? Fade out the persistent light at world coordinates over durationMs. See Official docs",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "fadeatworld"
  },
  {
    "title": "sandkit.api.lights.persistent.markDirty()",
    "body": "Mark persistent lights dirty so they are saved on the next flush. See Official docs",
    "path": "/api/sandkit.api.lights.persistent",
    "id": "markdirty"
  },
  {
    "title": "sandkit.api.lights.temporary",
    "body": "Short-lived visual effect lights.",
    "path": "/api/sandkit.api.lights.temporary",
    "id": ""
  },
  {
    "title": "sandkit.api.lights.temporary.createAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. options? TemporaryLightOptions Brightness, duration, color, and dedup options. worldX worldY options? Create a temporary light at world coordinates. TemporaryLightHandle Examples Main entry options.durationTicks options.durationMs See Official docs",
    "path": "/api/sandkit.api.lights.temporary",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.lights.temporary.removeById()",
    "body": "Argument Type Description --- --- --- lightId number Light id returned from createAtWorld. lightId Remove a temporary light by its id. Example See Official docs",
    "path": "/api/sandkit.api.lights.temporary",
    "id": "removebyid"
  },
  {
    "title": "sandkit.api.lights.temporary (worker)",
    "body": "Short-lived visual effect lights. Official docs",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.lights.temporary.TemporaryLightHandle",
    "body": "Property Type Description --- --- --- lightId number \\ null Runtime light id, or null when the pool is full. index? number \\ null lightId index? Handle returned by createAtWorld.",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": "temporarylighthandle"
  },
  {
    "title": "sandkit.api.lights.temporary.TemporaryLightOptions",
    "body": "Options for createAtWorld.",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": "temporarylightoptions"
  },
  {
    "title": "sandkit.api.lights.temporary.createAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. options? TemporaryLightOptions Brightness, duration, colour, and dedup settings. worldX worldY options? Create a temporary light at world coordinates. TemporaryLightHandle Example Worker entry See Official docs",
    "path": "/api/sandkit.api.lights.temporary.worker",
    "id": "createatworld"
  },
  {
    "title": "sandkit.api.lights (worker)",
    "body": "Internal Worker-thread sandkit.api.lights — temporary visual effect lights. Worker exposes only temporary; persistent lights are main-thread only. - temporary",
    "path": "/api/sandkit.api.lights.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.main (worker)",
    "body": "Internal Worker thread only. sandkit.api.main — send events to the main thread. Base shape reused by WorkerSandkitApi. Main thread has a larger sandkit.api surface; do not assume parity.",
    "path": "/api/sandkit.api.main.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.main.emitEvent",
    "body": "Argument Type Description --- --- --- eventId string Registered event name. payload Payload Serializable payload passed to main-thread listeners. eventId payload Emit a custom event on the main thread. Type Parameters Payload Payload = any",
    "path": "/api/sandkit.api.main.worker",
    "id": "emitevent"
  },
  {
    "title": "sandkit.api.maps",
    "body": "",
    "path": "/api/sandkit.api.maps",
    "id": ""
  },
  {
    "title": "sandkit.api.maps.ArtifactLocation",
    "body": "Property Type Description --- --- --- cellX number cellY number name string cellX cellY name Artifact location entry from getArtifactLocations. Indexable",
    "path": "/api/sandkit.api.maps",
    "id": "artifactlocation"
  },
  {
    "title": "sandkit.api.maps.AvailableMapV1",
    "body": "Property Type Description --- --- --- id string Map identifier passed to start. name? string Display name or translation key. id name? Available map entry shape. Indexable",
    "path": "/api/sandkit.api.maps",
    "id": "availablemapv1"
  },
  {
    "title": "sandkit.api.maps.getAvailable()",
    "body": "Return maps the player can start. readonly Readonly\\ []",
    "path": "/api/sandkit.api.maps",
    "id": "getavailable"
  },
  {
    "title": "sandkit.api.maps.start()",
    "body": "Argument Type Description --- --- --- mapId string Custom map identifier. mapId Start a map by id. Return true when start succeeds.",
    "path": "/api/sandkit.api.maps",
    "id": "start"
  },
  {
    "title": "sandkit.api.maps.getArtifactLocations()",
    "body": "Return artifact marker locations for the active map. readonly ArtifactLocation[] Example See Official docs",
    "path": "/api/sandkit.api.maps",
    "id": "getartifactlocations"
  },
  {
    "title": "sandkit.api.maps (worker)",
    "body": "Internal Shared sandkit.api.maps base — active custom map metadata. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.maps.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.maps.ActiveMapV1",
    "body": "Property Type Description --- --- --- id? string deployment? unknown spawn? unknown topBounds? object parallax? unknown depthLight? unknown id? deployment? spawn? topBounds? parallax? depthLight? Active custom map record (version 1 schema). Shape varies by map. Known fields are optional; additional keys may exist. Indexable",
    "path": "/api/sandkit.api.maps.worker",
    "id": "activemapv1"
  },
  {
    "title": "sandkit.api.maps.getActive()",
    "body": "Return the currently loaded custom map definition. Readonly\\ \\ null Active map metadata, or null outside custom maps.",
    "path": "/api/sandkit.api.maps.worker",
    "id": "getactive"
  },
  {
    "title": "sandkit.api",
    "body": "Main-thread sandkit.api barrel. Re-exports all namespaces available as sandkit.api. on the main thread. Prefer these methods over sandkit.engine when both exist. - action - assets - authorization - blueprints - building - camera - collector - constants - cooldown - discoveries - effects - elements - energy - entities - events - excavation - factory - fire - game - gameConfig - grid - hooks - i18n - input - items - lights - maps - mods - patterns - pickups - pipes - player - processing - progression - projectiles - random - raycast - reactions - rendering - resources - scene - schedule - settings - shared - signals - sound - sprites - storage - structureBehaviors - structures - tech - terrains - time - tools - triggers - ui - upgrades - utils - workers - world",
    "path": "/api/sandkit.api",
    "id": ""
  },
  {
    "title": "sandkit.api.mods",
    "body": "",
    "path": "/api/sandkit.api.mods",
    "id": ""
  },
  {
    "title": "sandkit.api.mods.AssetProviderV1",
    "body": "Asset provider entry shape.",
    "path": "/api/sandkit.api.mods",
    "id": "assetproviderv1"
  },
  {
    "title": "sandkit.api.mods.getProviders()",
    "body": "Argument Type Description --- --- --- kind string Asset kind identifier (e.g. texture pack category). kind Return asset providers registered for a kind string. readonly AssetProviderV1[]",
    "path": "/api/sandkit.api.mods",
    "id": "getproviders"
  },
  {
    "title": "sandkit.api.patterns",
    "body": "",
    "path": "/api/sandkit.api.patterns",
    "id": ""
  },
  {
    "title": "sandkit.api.patterns.PatternExcavateOptions",
    "body": "Options for pattern-based excavation. Same shape as shared.api.world.ExcavateOptions.",
    "path": "/api/sandkit.api.patterns",
    "id": "patternexcavateoptions"
  },
  {
    "title": "sandkit.api.patterns.createCircle()",
    "body": "Argument Type Description --- --- --- size number Pattern width and height in cells. size Build a circular excavation pattern matrix for the given size. number[][] Square matrix with 1 inside the circle and 0 outside.",
    "path": "/api/sandkit.api.patterns",
    "id": "createcircle"
  },
  {
    "title": "sandkit.api.patterns.excavateAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number[][], Vector2, number, ExcavateOptions\\] args Excavate at a cell using a pattern matrix and output velocity. Examples Main entry Worker entry",
    "path": "/api/sandkit.api.patterns",
    "id": "excavateatcell"
  },
  {
    "title": "sandkit.api.pickups",
    "body": "World pickups — spawn, collect, and query pickup instances. Available as sandkit.api.pickups. Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": ""
  },
  {
    "title": "sandkit.api.pickups.WorldItemLight",
    "body": "Property Type Description --- --- --- brightness? number Light brightness multiplier. Default 1. size? number Light radius in world pixels. Default 100. color? [number, number, number] \\ [number, number, number, number] RGB or RGBA color components in 0–1 range. brightness? size? color? Optional point light attached when spawning a pickup.",
    "path": "/api/sandkit.api.pickups",
    "id": "worlditemlight"
  },
  {
    "title": "sandkit.api.pickups.WorldItem",
    "body": "Property Type Description --- --- --- id number x number y number type PickupType data Record id x y type data Active world pickup instance.",
    "path": "/api/sandkit.api.pickups",
    "id": "worlditem"
  },
  {
    "title": "sandkit.api.pickups.PickupType",
    "body": "Official pickup type discriminator.",
    "path": "/api/sandkit.api.pickups",
    "id": "pickuptype"
  },
  {
    "title": "sandkit.api.pickups.WorldItemType",
    "body": "Deprecated Use PickupType instead. See Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": "worlditemtype"
  },
  {
    "title": "sandkit.api.pickups.spawnAtWorld()",
    "body": "Argument Type Description --- --- --- type PickupType Pickup type discriminator. worldX number World x position in pixels. worldY number World y position in pixels. data? Record\\ Optional per-item data bag copied onto the instance. light? WorldItemLight Optional point light spawned with the pickup. type worldX worldY data? light? Spawn a pickup at world position. WorldItem The spawned pickup instance. See Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": "spawnatworld"
  },
  {
    "title": "sandkit.api.pickups.remove()",
    "body": "Argument Type Description --- --- --- pickup WorldItem Pickup returned from spawn or lookup helpers. pickup Remove a pickup instance from the world. See Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": "remove"
  },
  {
    "title": "sandkit.api.pickups.destroy()",
    "body": "Argument Type Description --- --- --- pickup WorldItem pickup Deprecated Use remove instead. See Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": "destroy"
  },
  {
    "title": "sandkit.api.pickups.pickUp()",
    "body": "Argument Type Description --- --- --- pickup WorldItem Pickup to collect. pickup Pick up a world item into inventory. True when the item was collected. See Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": "pickup"
  },
  {
    "title": "sandkit.api.pickups.getAll()",
    "body": "Return all active pickups. WorldItem[] See Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": "getall"
  },
  {
    "title": "sandkit.api.pickups.getById()",
    "body": "Argument Type Description --- --- --- pickupId number Runtime pickup id. pickupId Return a pickup by numeric id. WorldItem \\ undefined See Official docs",
    "path": "/api/sandkit.api.pickups",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.pipes",
    "body": "Pipe network queries and enablement at grid cells. Available as sandkit.api.pipes. Official docs",
    "path": "/api/sandkit.api.pipes",
    "id": ""
  },
  {
    "title": "sandkit.api.pipes.PipeVentCell",
    "body": "Property Type Description --- --- --- cellX number cellY number cellX cellY Connected vent cell position. Indexable",
    "path": "/api/sandkit.api.pipes",
    "id": "pipeventcell"
  },
  {
    "title": "sandkit.api.pipes.isAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when a pipe occupies the cell. See Official docs",
    "path": "/api/sandkit.api.pipes",
    "id": "isatcell"
  },
  {
    "title": "sandkit.api.pipes.isEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when pipe flow is enabled at the cell. See Official docs",
    "path": "/api/sandkit.api.pipes",
    "id": "isenabledatcell"
  },
  {
    "title": "sandkit.api.pipes.getConnectedVentsAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return connected liquid vent cell positions for the pipe at a cell. readonly PipeVentCell[] See Official docs",
    "path": "/api/sandkit.api.pipes",
    "id": "getconnectedventsatcell"
  },
  {
    "title": "sandkit.api.pipes.setEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args Enable or disable pipe flow at a cell. See Official docs",
    "path": "/api/sandkit.api.pipes",
    "id": "setenabledatcell"
  },
  {
    "title": "sandkit.api.player.buildings",
    "body": "Player building unlock helpers.",
    "path": "/api/sandkit.api.player.buildings",
    "id": ""
  },
  {
    "title": "sandkit.api.player.buildings.unlockById()",
    "body": "Argument Type Description --- --- --- structureId string Registered structure id string. structureId Unlock a structure type for building. See Official docs",
    "path": "/api/sandkit.api.player.buildings",
    "id": "unlockbyid"
  },
  {
    "title": "sandkit.api.player.buildings.unlockByType()",
    "body": "Argument Type Description --- --- --- structureId string structureId Deprecated Use unlockById instead. See Official docs",
    "path": "/api/sandkit.api.player.buildings",
    "id": "unlockbytype"
  },
  {
    "title": "sandkit.api.player.buildings.removeById()",
    "body": "Argument Type Description --- --- --- structureId string Registered structure id string. structureId Remove a structure unlock from the player. See Official docs",
    "path": "/api/sandkit.api.player.buildings",
    "id": "removebyid"
  },
  {
    "title": "sandkit.api.player.inventory",
    "body": "Player inventory helpers.",
    "path": "/api/sandkit.api.player.inventory",
    "id": ""
  },
  {
    "title": "sandkit.api.player.inventory.addById()",
    "body": "Argument Type Description --- --- --- itemId string Registered item id string. itemId Add an item to inventory by item id. See Official docs",
    "path": "/api/sandkit.api.player.inventory",
    "id": "addbyid"
  },
  {
    "title": "sandkit.api.player.inventory.addFromId()",
    "body": "Argument Type Description --- --- --- itemId string itemId Deprecated Use addById instead. See Official docs",
    "path": "/api/sandkit.api.player.inventory",
    "id": "addfromid"
  },
  {
    "title": "sandkit.api.player",
    "body": "- inventory - buildings",
    "path": "/api/sandkit.api.player",
    "id": ""
  },
  {
    "title": "sandkit.api.player.setPositionAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. worldX worldY Set the player world position. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "setpositionatworld"
  },
  {
    "title": "sandkit.api.player.setWorldPosition()",
    "body": "Argument Type Description --- --- --- worldX number worldY number worldX worldY Deprecated Use setPositionAtWorld instead. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "setworldposition"
  },
  {
    "title": "sandkit.api.player.setVelocity()",
    "body": "Argument Type Description --- --- --- velocityX number Horizontal velocity in pixels per second. velocityY number Vertical velocity in pixels per second. velocityX velocityY Set the player velocity. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "setvelocity"
  },
  {
    "title": "sandkit.api.player.setMovementSpeedMultiplier()",
    "body": "Argument Type Description --- --- --- multiplier number Speed scale factor (1 is default walk). 0 freezes movement. Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly 1. multiplier Set the movement speed multiplier. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "setmovementspeedmultiplier"
  },
  {
    "title": "sandkit.api.player.setMovementMode()",
    "body": "Argument Type Description --- --- --- mode \"normal\" \\\\ \"hover\" \"normal\" for default physics, or \"hover\" for hover flight. mode Set movement mode to normal or hover. True when the mode changes. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "setmovementmode"
  },
  {
    "title": "sandkit.api.player.isOnGround()",
    "body": "Return true when the player is on ground. Tests solid cells 1 pixel below the hitbox. Do not use player.onGround on the store snapshot — that flag is not updated during play. True when the player touches solid ground. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "isonground"
  },
  {
    "title": "sandkit.api.player.teleportToGround()",
    "body": "Move the player down until ground is found. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "teleporttoground"
  },
  {
    "title": "sandkit.api.player.isPositionClearAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels to test. worldY number World y position in pixels to test. worldX worldY Return true when the world position has no collision. True when the player hitbox fits at the position. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "ispositionclearatworld"
  },
  {
    "title": "sandkit.api.player.isWorldPositionClear()",
    "body": "Argument Type Description --- --- --- worldX number worldY number worldX worldY Deprecated Use isPositionClearAtWorld instead. See Official docs",
    "path": "/api/sandkit.api.player",
    "id": "isworldpositionclear"
  },
  {
    "title": "sandkit.api.player (worker)",
    "body": "Internal Shared sandkit.api.player base — player position and collision queries. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.player.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.player.getPositionAtWorld()",
    "body": "Return the player center position in world pixels. Vector2 World position as { x, y } in pixels. See Official docs",
    "path": "/api/sandkit.api.player.worker",
    "id": "getpositionatworld"
  },
  {
    "title": "sandkit.api.player.getWorldPosition()",
    "body": "Vector2 Deprecated Use getPositionAtWorld instead. See Official docs",
    "path": "/api/sandkit.api.player.worker",
    "id": "getworldposition"
  },
  {
    "title": "sandkit.api.player.isCollidingWithCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player hitbox overlaps the cell. True when the player overlaps the cell. See Official docs",
    "path": "/api/sandkit.api.player.worker",
    "id": "iscollidingwithcell"
  },
  {
    "title": "sandkit.api.player.isWithinRadiusOfCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Return true when the player is within radius cells of the point. True when the player is inside the radius. See Official docs",
    "path": "/api/sandkit.api.player.worker",
    "id": "iswithinradiusofcell"
  },
  {
    "title": "sandkit.api.processing",
    "body": "",
    "path": "/api/sandkit.api.processing",
    "id": ""
  },
  {
    "title": "sandkit.api.processing.WeightedRecipeOutput",
    "body": "Property Type Description --- --- --- elementType ElementType Output element type (1–255). chance number Output probability from 0 to 1. elementType chance Weighted element output entry shared by machine recipes.",
    "path": "/api/sandkit.api.processing",
    "id": "weightedrecipeoutput"
  },
  {
    "title": "sandkit.api.processing.PlanterBoxRecipeDefinitionV1",
    "body": "Property Type Description --- --- --- input ElementType Input element type placed on the grower. output ElementType Output element type produced by the grower. chance? number Success chance from 0 to 1. Default 1. input output chance? Planter box grower recipe definition.",
    "path": "/api/sandkit.api.processing",
    "id": "planterboxrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.processing.ShakerRecipeDefinitionV1",
    "body": "Property Type Description --- --- --- input ElementType Input element type dropped on the shaker. outputsAbove WeightedRecipeOutput[] Weighted outputs ejected upward. outputsBelow WeightedRecipeOutput[] Weighted outputs ejected downward. input outputsAbove outputsBelow Shaker recipe definition.",
    "path": "/api/sandkit.api.processing",
    "id": "shakerrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.processing.KineticPressRecipeDefinitionV1",
    "body": "Property Type Description --- --- --- input ElementType Input element type processed by the press. minimumDownwardVelocity number Minimum downward velocity required to trigger the press. outputs WeightedRecipeOutput[] Weighted outputs produced by the press. input minimumDownwardVelocity outputs Kinetic press recipe definition.",
    "path": "/api/sandkit.api.processing",
    "id": "kineticpressrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.processing.registerGrower()",
    "body": "Argument Type Description --- --- --- definition PlanterBoxRecipeDefinitionV1 Grower input/output recipe. definition Register a planter box grower recipe.",
    "path": "/api/sandkit.api.processing",
    "id": "registergrower"
  },
  {
    "title": "sandkit.api.processing.registerShaker()",
    "body": "Argument Type Description --- --- --- definition ShakerRecipeDefinitionV1 Shaker input and weighted outputs. definition Register a shaker recipe.",
    "path": "/api/sandkit.api.processing",
    "id": "registershaker"
  },
  {
    "title": "sandkit.api.processing.registerKineticPress()",
    "body": "Argument Type Description --- --- --- definition KineticPressRecipeDefinitionV1 Press input, velocity threshold, and outputs. definition Register a kinetic press recipe.",
    "path": "/api/sandkit.api.processing",
    "id": "registerkineticpress"
  },
  {
    "title": "sandkit.api.progression",
    "body": "",
    "path": "/api/sandkit.api.progression",
    "id": ""
  },
  {
    "title": "sandkit.api.progression.ProgressionCompletionRequestV1",
    "body": "Property Type Description --- --- --- id string Progression step or quest identifier. id Progression completion request shape. Indexable",
    "path": "/api/sandkit.api.progression",
    "id": "progressioncompletionrequestv1"
  },
  {
    "title": "sandkit.api.progression.complete()",
    "body": "Argument Type Description --- --- --- request ProgressionCompletionRequestV1 Progression id and optional metadata for the step. request Mark a progression step complete. Return true when completion succeeds. Example",
    "path": "/api/sandkit.api.progression",
    "id": "complete"
  },
  {
    "title": "sandkit.api.projectiles",
    "body": "",
    "path": "/api/sandkit.api.projectiles",
    "id": ""
  },
  {
    "title": "sandkit.api.projectiles.ProjectileDefinition",
    "body": "Property Type Description --- --- --- id string sprite object getOptions () = Record Returns spawn-time physics and visual options. getModData? (state: unknown, projectile: Projectile) = Record Optional per-projectile mutable data factory. id sprite getOptions getModData? Mod-registered projectile definition. Indexable",
    "path": "/api/sandkit.api.projectiles",
    "id": "projectiledefinition"
  },
  {
    "title": "sandkit.api.projectiles.ProjectileBlueprint",
    "body": "Property Type Description --- --- --- opts Record type unknown opts type Blueprint used to spawn a projectile.",
    "path": "/api/sandkit.api.projectiles",
    "id": "projectileblueprint"
  },
  {
    "title": "sandkit.api.projectiles.Projectile",
    "body": "Property Type Description --- --- --- id number x number y number id x y Active projectile instance. Indexable",
    "path": "/api/sandkit.api.projectiles",
    "id": "projectile"
  },
  {
    "title": "sandkit.api.projectiles.register()",
    "body": "Argument Type Description --- --- --- definition ProjectileDefinition Projectile id, sprite, and runtime options factory. definition Register a projectile definition.",
    "path": "/api/sandkit.api.projectiles",
    "id": "register"
  },
  {
    "title": "sandkit.api.projectiles.getDefinitionById()",
    "body": "Argument Type Description --- --- --- projectileId string Registered projectile id. projectileId Return a projectile definition by string id. ProjectileDefinition \\ undefined",
    "path": "/api/sandkit.api.projectiles",
    "id": "getdefinitionbyid"
  },
  {
    "title": "sandkit.api.projectiles.createBlueprintFromId()",
    "body": "Argument Type Description --- --- --- projectileId string Registered projectile id. projectileId Build a spawn blueprint from a projectile string id. ProjectileBlueprint Blueprint passed to spawnAtWorld.",
    "path": "/api/sandkit.api.projectiles",
    "id": "createblueprintfromid"
  },
  {
    "title": "sandkit.api.projectiles.getAll()",
    "body": "Return all active projectiles. Projectile[]",
    "path": "/api/sandkit.api.projectiles",
    "id": "getall"
  },
  {
    "title": "sandkit.api.projectiles.getById()",
    "body": "Argument Type Description --- --- --- projectileId number Runtime projectile id. projectileId Return a projectile by numeric id. Projectile \\ undefined",
    "path": "/api/sandkit.api.projectiles",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.projectiles.remove()",
    "body": "Argument Type Description --- --- --- projectile Projectile Projectile instance to remove. projectile Remove a projectile from the world.",
    "path": "/api/sandkit.api.projectiles",
    "id": "remove"
  },
  {
    "title": "sandkit.api.projectiles.spawnAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number Spawn x position in world pixels. worldY number Spawn y position in world pixels. angle number Launch angle in radians. blueprint ProjectileBlueprint Blueprint from createBlueprintFromId. worldX worldY angle blueprint Spawn a projectile at world position with angle and blueprint. Projectile The spawned projectile instance.",
    "path": "/api/sandkit.api.projectiles",
    "id": "spawnatworld"
  },
  {
    "title": "sandkit.api.random",
    "body": "",
    "path": "/api/sandkit.api.random",
    "id": ""
  },
  {
    "title": "sandkit.api.random.int()",
    "body": "Argument Type Description --- --- --- min number Minimum value (inclusive). max number Maximum value (inclusive). min max Return a random integer in the inclusive range.",
    "path": "/api/sandkit.api.random",
    "id": "int"
  },
  {
    "title": "sandkit.api.random.float()",
    "body": "Argument Type Description --- --- --- min number Minimum value (inclusive). max number Maximum value (inclusive). min max Return a random float in the inclusive range.",
    "path": "/api/sandkit.api.random",
    "id": "float"
  },
  {
    "title": "sandkit.api.raycast",
    "body": "",
    "path": "/api/sandkit.api.raycast",
    "id": ""
  },
  {
    "title": "sandkit.api.raycast.castFromWorld()",
    "body": "Argument Type Description --- --- --- startWorldX number Ray origin world X in pixels. startWorldY number Ray origin world Y in pixels. angle number Ray direction in radians. maxDistance number Maximum ray length in pixels. startWorldX startWorldY angle maxDistance Cast a ray from world position. Return hit point and distance, or null. Vector2 & object \\ null",
    "path": "/api/sandkit.api.raycast",
    "id": "castfromworld"
  },
  {
    "title": "sandkit.api.reactions",
    "body": "",
    "path": "/api/sandkit.api.reactions",
    "id": ""
  },
  {
    "title": "sandkit.api.reactions.ContactRecipeDefinitionV1",
    "body": "Property Type Description --- --- --- inputA ElementType First reacting element type. inputB ElementType Second reacting element type. outputA ElementType \\ null Element type produced from input A, or null for no output. outputB ElementType \\ null Element type produced from input B, or null for no output. orientation? \"any\" \\ \"stacked\" Contact layout requirement. Default \"any\". inputA inputB outputA outputB orientation? Contact reaction recipe definition.",
    "path": "/api/sandkit.api.reactions",
    "id": "contactrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.reactions.registerContact()",
    "body": "Argument Type Description --- --- --- definition ContactRecipeDefinitionV1 Contact recipe inputs, outputs, and orientation. definition Register a contact reaction between elements. Example",
    "path": "/api/sandkit.api.reactions",
    "id": "registercontact"
  },
  {
    "title": "sandkit.api.rendering",
    "body": "",
    "path": "/api/sandkit.api.rendering",
    "id": ""
  },
  {
    "title": "sandkit.api.rendering.getDrawPositionAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return screen draw position for a grid cell. Vector2",
    "path": "/api/sandkit.api.rendering",
    "id": "getdrawpositionatcell"
  },
  {
    "title": "sandkit.api.rendering.getDrawPositionAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World x position in pixels. worldY number World y position in pixels. worldX worldY Return screen draw position for a world-space point. Vector2 Example See Official docs",
    "path": "/api/sandkit.api.rendering",
    "id": "getdrawpositionatworld"
  },
  {
    "title": "sandkit.api.rendering.getGridMetrics()",
    "body": "Return cell size and snap grid metrics. cellSize: number snapGridCellSize: number Example",
    "path": "/api/sandkit.api.rendering",
    "id": "getgridmetrics"
  },
  {
    "title": "sandkit.api.rendering.getOverlayViewportSize()",
    "body": "Return overlay viewport width and height in pixels. width: number height: number",
    "path": "/api/sandkit.api.rendering",
    "id": "getoverlayviewportsize"
  },
  {
    "title": "sandkit.api.rendering.withOverlayContext",
    "body": "Argument Type Description --- --- --- callback (context: CanvasRenderingContext2D) = T Receives the overlay 2D context; return value is passed through. callback Run a callback with the overlay canvas context. Type Parameters T T Example",
    "path": "/api/sandkit.api.rendering",
    "id": "withoverlaycontext"
  },
  {
    "title": "sandkit.api.resources",
    "body": "",
    "path": "/api/sandkit.api.resources",
    "id": ""
  },
  {
    "title": "sandkit.api.resources.collectFluxiteAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Collect fluxite at the given cell.",
    "path": "/api/sandkit.api.resources",
    "id": "collectfluxiteatcell"
  },
  {
    "title": "sandkit.api.resources.updateEnergy()",
    "body": "Argument Type Description --- --- --- amount number Energy delta (positive or negative). options? When deferUi is true, skip immediate UI refresh. amount options? Update stored energy by amount with optional UI deferral. Example Official \\api.resources.adjustEnergy\\ (typed deprecated alias: updateEnergy)",
    "path": "/api/sandkit.api.resources",
    "id": "updateenergy"
  },
  {
    "title": "sandkit.api.scene",
    "body": "",
    "path": "/api/sandkit.api.scene",
    "id": ""
  },
  {
    "title": "sandkit.api.scene.getActive()",
    "body": "Return the active scene. Scene",
    "path": "/api/sandkit.api.scene",
    "id": "getactive"
  },
  {
    "title": "sandkit.api.schedule",
    "body": "",
    "path": "/api/sandkit.api.schedule",
    "id": ""
  },
  {
    "title": "sandkit.api.schedule.nextTick()",
    "body": "Argument Type Description --- --- --- callback () = void Function invoked once on the next tick. callback Run a callback on the next game tick. Example",
    "path": "/api/sandkit.api.schedule",
    "id": "nexttick"
  },
  {
    "title": "sandkit.api.settings",
    "body": "",
    "path": "/api/sandkit.api.settings",
    "id": ""
  },
  {
    "title": "sandkit.api.settings.FieldId",
    "body": "Settings field id. Any string is allowed.",
    "path": "/api/sandkit.api.settings",
    "id": "fieldid"
  },
  {
    "title": "sandkit.api.settings.ConfigValueV1",
    "body": "Settings field value shape.",
    "path": "/api/sandkit.api.settings",
    "id": "configvaluev1"
  },
  {
    "title": "sandkit.api.settings.get()",
    "body": "Argument Type Description --- --- --- fieldId string & object Settings field identifier. fieldId Return a settings field value by id. ConfigValueV1 \\ undefined",
    "path": "/api/sandkit.api.settings",
    "id": "get"
  },
  {
    "title": "sandkit.api.settings.getAll()",
    "body": "Return all settings as a read-only map. Readonly\\ \\",
    "path": "/api/sandkit.api.settings",
    "id": "getall"
  },
  {
    "title": "sandkit.api.settings.onChange()",
    "body": "Argument Type Description --- --- --- callback (values: Readonly\\ \\ ) = void Called with the full settings map after a change. callback Subscribe to settings changes. Return an unsubscribe function. () = void Example",
    "path": "/api/sandkit.api.settings",
    "id": "onchange"
  },
  {
    "title": "sandkit.api.shared.buffers",
    "body": "Shared buffer ensure and lookup.",
    "path": "/api/sandkit.api.shared.buffers",
    "id": ""
  },
  {
    "title": "sandkit.api.shared.buffers.ensure()",
    "body": "Argument Type Description --- --- --- key string Buffer name shared across threads. config Typed array kind and element count. key config Create or return a named shared buffer with type and length. SharedArray Example See Official docs",
    "path": "/api/sandkit.api.shared.buffers",
    "id": "ensure"
  },
  {
    "title": "sandkit.api.shared.buffers.create()",
    "body": "Argument Type Description --- --- --- key string config key config SharedArray Deprecated Use ensure instead. See Official docs",
    "path": "/api/sandkit.api.shared.buffers",
    "id": "create"
  },
  {
    "title": "sandkit.api.shared.buffers.get()",
    "body": "Argument Type Description --- --- --- key string Buffer name shared across threads. key Look up a named shared buffer without creating it. SharedArray \\ undefined The typed array, or undefined when the buffer does not exist. See Official docs",
    "path": "/api/sandkit.api.shared.buffers",
    "id": "get"
  },
  {
    "title": "sandkit.api.shared.buffers (worker)",
    "body": "Named shared memory buffers for worker threads.",
    "path": "/api/sandkit.api.shared.buffers.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.shared.buffers.require()",
    "body": "Argument Type Description --- --- --- key string Buffer name shared across threads. config Expected array type and length for validation. key config Attach to a named shared buffer on this worker. The buffer must already exist on the main thread with the same SharedArrayType and length as config. SharedArray Example See Official docs",
    "path": "/api/sandkit.api.shared.buffers.worker",
    "id": "require"
  },
  {
    "title": "sandkit.api.shared",
    "body": "- buffers",
    "path": "/api/sandkit.api.shared",
    "id": ""
  },
  {
    "title": "sandkit.api.shared.SharedArray",
    "body": "Typed array backing a shared buffer. Use SharedArrayType when creating or requiring a buffer. The runtime returns the matching Array constructor for the configured type.",
    "path": "/api/sandkit.api.shared",
    "id": "sharedarray"
  },
  {
    "title": "sandkit.api.shared.SharedArrayType",
    "body": "Discriminator for the underlying typed array kind.",
    "path": "/api/sandkit.api.shared",
    "id": "sharedarraytype"
  },
  {
    "title": "sandkit.api.shared (worker)",
    "body": "Internal Worker thread only. sandkit.api.shared — shared memory buffers for workers. Workers require buffers created on the main thread. Main thread only gets existing buffers. See shared for the shared base declarations. Worker extension of shared; not interchangeable with main-thread sandkit.api.shared. - buffers",
    "path": "/api/sandkit.api.shared.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.signals",
    "body": "- targets",
    "path": "/api/sandkit.api.signals",
    "id": ""
  },
  {
    "title": "sandkit.api.signals.StructureType",
    "body": "Structure type id or enum value.",
    "path": "/api/sandkit.api.signals",
    "id": "structuretype"
  },
  {
    "title": "sandkit.api.signals.Structure",
    "body": "Structure instance in the world.",
    "path": "/api/sandkit.api.signals",
    "id": "structure"
  },
  {
    "title": "sandkit.api.signals.SignalTargetPayloadV1",
    "body": "Payload delivered to a signal target handler.",
    "path": "/api/sandkit.api.signals",
    "id": "signaltargetpayloadv1"
  },
  {
    "title": "sandkit.api.signals.targets",
    "body": "Signal target registration for structure types.",
    "path": "/api/sandkit.api.signals.targets",
    "id": ""
  },
  {
    "title": "sandkit.api.signals.targets.register()",
    "body": "Argument Type Description --- --- --- structureTypeOrId unknown Structure type id or enum value. apply (structure: unknown, payload: unknown) = void Called when a signal reaches a matching structure. structureTypeOrId apply Register a handler when a signal targets a structure type. Example",
    "path": "/api/sandkit.api.signals.targets",
    "id": "register"
  },
  {
    "title": "sandkit.api.sound",
    "body": "",
    "path": "/api/sandkit.api.sound",
    "id": ""
  },
  {
    "title": "stop()",
    "body": "Handle returned from a play call. Methods stop() Defined in: sandkit/api/sound.d.ts:87 Stop this sound instance. Returns void",
    "path": "/api/sandkit.api.sound",
    "id": "soundhandle"
  },
  {
    "title": "sandkit.api.sound.SoundLayer",
    "body": "Property Type Description --- --- --- soundId string Sound id for this layer. volume? number Layer volume multiplier. delay? number Delay in milliseconds before this layer plays. playbackRate? number Playback rate for this layer. soundId volume? delay? playbackRate? One layer in a layered sound. Indexable",
    "path": "/api/sandkit.api.sound",
    "id": "soundlayer"
  },
  {
    "title": "sandkit.api.sound.SoundOptions",
    "body": "Property Type Description --- --- --- volume? number Volume multiplier (0–1 typical). playbackRate? number Playback rate multiplier. position? object World position for distance attenuation. loop? boolean When true, loop until stopped. rateLimitKey? string Key used with rateLimitMs to dedupe rapid replays. rateLimitMs? number Minimum ms between plays with the same rateLimitKey. volume? playbackRate? position? loop? rateLimitKey? rateLimitMs? Options passed to sound play helpers. Indexable",
    "path": "/api/sandkit.api.sound",
    "id": "soundoptions"
  },
  {
    "title": "sandkit.api.sound.SoundLayersOptions",
    "body": "Property Type Description --- --- --- position? object World position applied to all layers. volume? number Volume multiplier applied to all layers. rateLimitKey? string Key used with rateLimitMs to dedupe rapid replays. rateLimitMs? number Minimum ms between plays with the same rateLimitKey. position? volume? rateLimitKey? rateLimitMs? Shared options for playLayers.",
    "path": "/api/sandkit.api.sound",
    "id": "soundlayersoptions"
  },
  {
    "title": "sandkit.api.sound.play()",
    "body": "Argument Type Description --- --- --- soundId string Registered sound identifier. options? SoundOptions Volume, position, playback rate, and rate-limit options. soundId options? Play a sound by id with optional options. SoundHandle See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "play"
  },
  {
    "title": "sandkit.api.sound.playActive()",
    "body": "Argument Type Description --- --- --- soundId string Registered sound identifier. options? SoundOptions Volume, position, playback rate, and rate-limit options. soundId options? Play a sound on the active sound channel. SoundHandle See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "playactive"
  },
  {
    "title": "sandkit.api.sound.playLayers()",
    "body": "Argument Type Description --- --- --- layers SoundLayer[] Layer definitions (sound id, volume, delay, and per-layer options). options? SoundLayersOptions Shared position, volume, and rate-limit options for all layers. layers options? Play multiple sound layers with shared options. SoundHandle[] See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "playlayers"
  },
  {
    "title": "sandkit.api.sound.calculateDistanceOptionsAtWorld()",
    "body": "Argument Type Description --- --- --- worldX number World X coordinate in pixels. worldY number World Y coordinate in pixels. baseVolume? number Base volume before distance attenuation. worldX worldY baseVolume? Build distance-based volume options for a world position. SoundOptions See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "calculatedistanceoptionsatworld"
  },
  {
    "title": "sandkit.api.sound.stopBySoundId()",
    "body": "Argument Type Description --- --- --- soundId string Registered sound identifier to stop. soundId Stop a sound by id. See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "stopbysoundid"
  },
  {
    "title": "sandkit.api.sound.stopById()",
    "body": "Argument Type Description --- --- --- soundId string soundId Deprecated Use stopBySoundId instead. See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "stopbyid"
  },
  {
    "title": "sandkit.api.sound.stopActive()",
    "body": "Stop the active sound channel. See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "stopactive"
  },
  {
    "title": "sandkit.api.sound.stopAll()",
    "body": "Stop all playing sounds. See Official docs",
    "path": "/api/sandkit.api.sound",
    "id": "stopall"
  },
  {
    "title": "sandkit.api.sprites",
    "body": "",
    "path": "/api/sandkit.api.sprites",
    "id": ""
  },
  {
    "title": "sandkit.api.sprites.SpriteLoadOptions",
    "body": "Property Type Description --- --- --- tint? number Packed RGB tint applied after load. tint? Options for load and loadFromMod. Indexable",
    "path": "/api/sandkit.api.sprites",
    "id": "spriteloadoptions"
  },
  {
    "title": "sandkit.api.sprites.LoadedSprite",
    "body": "Loaded sprite handle (runtime texture or display object).",
    "path": "/api/sandkit.api.sprites",
    "id": "loadedsprite"
  },
  {
    "title": "sandkit.api.sprites.load()",
    "body": "Argument Type Description --- --- --- spriteId string Id used with getById. path string URL or asset path to load. options? SpriteLoadOptions Optional tint and load options. spriteId path options? Load a sprite from a URL path. Promise\\",
    "path": "/api/sandkit.api.sprites",
    "id": "load"
  },
  {
    "title": "sandkit.api.sprites.loadFromMod()",
    "body": "Argument Type Description --- --- --- spriteId string Id used with getById. relativePath string Path relative to the mod folder. options? SpriteLoadOptions Optional tint and load options. spriteId relativePath options? Load a sprite from the calling mod folder. Promise\\",
    "path": "/api/sandkit.api.sprites",
    "id": "loadfrommod"
  },
  {
    "title": "sandkit.api.sprites.getById()",
    "body": "Argument Type Description --- --- --- spriteId string Sprite id from load or loadFromMod. spriteId Return a loaded sprite by id.",
    "path": "/api/sandkit.api.sprites",
    "id": "getbyid"
  },
  {
    "title": "sandkit.api.sprites.hideAllPlayerModSprites()",
    "body": "Hide all player mod-attached sprites.",
    "path": "/api/sandkit.api.sprites",
    "id": "hideallplayermodsprites"
  },
  {
    "title": "sandkit.api.sprites.rotatePlayerModSprites()",
    "body": "Argument Type Description --- --- --- angle number Rotation in radians. angle Rotate all player mod-attached sprites by angle.",
    "path": "/api/sandkit.api.sprites",
    "id": "rotateplayermodsprites"
  },
  {
    "title": "sandkit.api.storage.local",
    "body": "Local session storage without mod id scope.",
    "path": "/api/sandkit.api.storage.local",
    "id": ""
  },
  {
    "title": "sandkit.api.storage.local.get()",
    "body": "Argument Type Description --- --- --- key string Storage key. key Read a local storage value by key. JsonValueV1 \\ undefined",
    "path": "/api/sandkit.api.storage.local",
    "id": "get"
  },
  {
    "title": "sandkit.api.storage.local.set()",
    "body": "Argument Type Description --- --- --- key string Storage key. value JsonValueV1 JSON-serializable value. key value Write a local storage value by key.",
    "path": "/api/sandkit.api.storage.local",
    "id": "set"
  },
  {
    "title": "sandkit.api.storage.local.remove()",
    "body": "Argument Type Description --- --- --- key string Storage key. key Remove a local storage key.",
    "path": "/api/sandkit.api.storage.local",
    "id": "remove"
  },
  {
    "title": "sandkit.api.storage",
    "body": "- local",
    "path": "/api/sandkit.api.storage",
    "id": ""
  },
  {
    "title": "sandkit.api.storage.ensure()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier (typically modinfo.id). modId Ensure storage exists for a mod id. JsonObjectV1",
    "path": "/api/sandkit.api.storage",
    "id": "ensure"
  },
  {
    "title": "sandkit.api.storage.get()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier. key string Storage key. modId key Read a value from mod storage by key. JsonValueV1 \\ undefined",
    "path": "/api/sandkit.api.storage",
    "id": "get"
  },
  {
    "title": "sandkit.api.storage.set()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier. key string Storage key. value JsonValueV1 JSON-serializable value. modId key value Write a value to mod storage by key.",
    "path": "/api/sandkit.api.storage",
    "id": "set"
  },
  {
    "title": "sandkit.api.storage.remove()",
    "body": "Argument Type Description --- --- --- modId string Mod identifier. key string Storage key. modId key Remove a key from mod storage.",
    "path": "/api/sandkit.api.storage",
    "id": "remove"
  },
  {
    "title": "sandkit.api.structureBehaviors",
    "body": "",
    "path": "/api/sandkit.api.structureBehaviors",
    "id": ""
  },
  {
    "title": "sandkit.api.structureBehaviors.registerConveyorType()",
    "body": "Argument Type Description --- --- --- structureId string Structure type id string. options? Transport offset, velocity, distance, and run direction. structureId options? Register conveyor behavior for a structure type. Example",
    "path": "/api/sandkit.api.structureBehaviors",
    "id": "registerconveyortype"
  },
  {
    "title": "sandkit.api.structureBehaviors.registerLauncherType()",
    "body": "Argument Type Description --- --- --- definition Launcher type ids, velocities, and optional shared buffer key. definition Register launcher behavior for up, left, and right launcher types.",
    "path": "/api/sandkit.api.structureBehaviors",
    "id": "registerlaunchertype"
  },
  {
    "title": "sandkit.api.structures",
    "body": "- recipes - processing",
    "path": "/api/sandkit.api.structures",
    "id": ""
  },
  {
    "title": "sandkit.api.structures.StructureBuildMode",
    "body": "Property Type Description --- --- --- type string directions? string[] spanTiles? number Fixed span length in tiles for line-linked structures. type directions? spanTiles? Build mode entry for a structure definition.",
    "path": "/api/sandkit.api.structures",
    "id": "structurebuildmode"
  },
  {
    "title": "sandkit.api.structures.StructureVariant",
    "body": "Property Type Description --- --- --- id StructureRef angles number[] id angles Rotated variant entry for a structure definition.",
    "path": "/api/sandkit.api.structures",
    "id": "structurevariant"
  },
  {
    "title": "sandkit.api.structures.StructureTooltipHover",
    "body": "Property Type Description --- --- --- type \"custom\" dataFieldMessage object type dataFieldMessage Custom hover tooltip driven by structure data fields. Example Official example See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "structuretooltiphover"
  },
  {
    "title": "sandkit.api.structures.StructureTooltipHoverField",
    "body": "Property Type Description --- --- --- param string field string fallback? string \\ number round? boolean valueLabels? Record valueKeys? Record param field fallback? round? valueLabels? valueKeys? One interpolated field in a StructureTooltipHover message.",
    "path": "/api/sandkit.api.structures",
    "id": "structuretooltiphoverfield"
  },
  {
    "title": "sandkit.api.structures.StructureSpritesheet",
    "body": "Property Type Description --- --- --- frameSize object frames number intervalMs number rowDataField? string When set, frame row follows this structure data field. frameSize frames intervalMs rowDataField? Spritesheet animation on a structure render block.",
    "path": "/api/sandkit.api.structures",
    "id": "structurespritesheet"
  },
  {
    "title": "sandkit.api.structures.StructureRenderUi",
    "body": "Property Type Description --- --- --- imageName? string size? object offset? object outline? boolean width? string height? string clipToBounds? boolean imageName? size? offset? outline? width? height? clipToBounds? Hotbar / build-menu UI sprite settings.",
    "path": "/api/sandkit.api.structures",
    "id": "structurerenderui"
  },
  {
    "title": "sandkit.api.structures.StructureRender",
    "body": "Property Type Description --- --- --- imageName? string size? object offset? object z? number ambienceGroup? string ui? StructureRenderUi spritesheet? StructureSpritesheet imageName? size? offset? z? ambienceGroup? ui? spritesheet? Render settings for a structure definition.",
    "path": "/api/sandkit.api.structures",
    "id": "structurerender"
  },
  {
    "title": "sandkit.api.structures.SandkitStructureDefinition",
    "body": "Property Type Description --- --- --- id string & object name? string nameKey? string description? string descriptionKey? string categoryKey? string order? number buildModes? StructureBuildMode[] shape? number[][] variants? StructureVariant[] render? StructureRender defaultData? Record linkedClearance? string Linked placement clearance mode (for example \"allOrNothing\"). tooltipHover? StructureTooltipHover Custom hover tooltip over the built structure. rejectWhenBlocked? boolean Reject placement when the footprint is blocked. alwaysUnlocked? boolean Show in the build menu without research unlock. descriptionParams? Record Values interpolated into the structure description string. id name? nameKey? description? descriptionKey? categoryKey? order? buildModes? shape? variants? render? defaultData? linkedClearance? tooltipHover? rejectWhenBlocked? alwaysUnlocked? descriptionParams? Full structure definition registered with the game. Indexable",
    "path": "/api/sandkit.api.structures",
    "id": "sandkitstructuredefinition"
  },
  {
    "title": "sandkit.api.structures.StructureBuildOptions",
    "body": "Options passed to buildAtCell. Indexable",
    "path": "/api/sandkit.api.structures",
    "id": "structurebuildoptions"
  },
  {
    "title": "sandkit.api.structures.StructureRemovalOptions",
    "body": "Property Type Description --- --- --- removeCells? boolean Also remove underlying terrain cells in the footprint. skipVisuals? boolean Skip visual teardown effects. removeCells? skipVisuals? Options passed to removeAtCell.",
    "path": "/api/sandkit.api.structures",
    "id": "structureremovaloptions"
  },
  {
    "title": "sandkit.api.structures.StructureBulkRemovalOptions",
    "body": "Property Type Description --- --- --- removeCells? boolean skipVisuals? boolean preserveUnselectable? boolean When set, only remove structures at these positions. onlyPositions? Vector2[] removeCells? skipVisuals? preserveUnselectable? onlyPositions? Options passed to bulk structure removal helpers.",
    "path": "/api/sandkit.api.structures",
    "id": "structurebulkremovaloptions"
  },
  {
    "title": "sandkit.api.structures.StructureProcessingContext",
    "body": "Context passed to structure processing callbacks. See Official docs Methods getResolvedTypeAtCell() Defined in: sandkit/api/structures.d.ts:730 Return the resolved element type at a cell, or null. Parameters args ...CellCoordinates Returns ElementType \\ null See Official docs getElementTypeAtCell() Defined in: sandkit/api/structures.d.ts:737 Parameters args ...CellCoordinates Returns ElementType \\ null Deprecated Use getResolvedTypeAtCell instead. See Official docs isCellEmptyAtCell() Defined in: sandkit/api/structures.d.ts:744 Return true when the cell has no element or terrain. Parameters args ...CellCoordinates Returns boolean See Official docs isCellEmpty() Defined in: sandkit/api/structures.d.ts:751 Parameters args ...CellCoordinates Returns boolean Deprecated Use isCellEmptyAtCell instead. See Official docs commit() Defined in: sandkit/api/structures.d.ts:760 Commit batched grid mutations from the processing callback. Parameters mutations unknown Mutation writer payload accepted by the runtime. Returns void See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "structureprocessingcontext"
  },
  {
    "title": "sandkit.api.structures.StructureProcessorDefinitionV1",
    "body": "Property Type Description --- --- --- intervalMs number Tick interval in milliseconds. Must be 0. process (structure: Structure, context: StructureProcessingContext) = void Synchronous callback invoked for each structure instance. intervalMs process Deprecated Use StructureProcessingDefinitionV1 with processing.register instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "structureprocessordefinitionv1"
  },
  {
    "title": "sandkit.api.structures.PlacementConfigIntegerField",
    "body": "Property Type Description --- --- --- type \"integer\" id string labelKey string min? number max? number default? number type id labelKey min? max? default? Integer placement field with optional bounds.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigintegerfield"
  },
  {
    "title": "sandkit.api.structures.PlacementConfigChoiceField",
    "body": "Property Type Description --- --- --- type \"choice\" id string labelKey string options readonly object[] type id labelKey options Choice placement field with labeled options.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigchoicefield"
  },
  {
    "title": "sandkit.api.structures.PlacementConfigDefinition",
    "body": "Property Type Description --- --- --- structureId string & object fields PlacementConfigField[] structureId fields Placement rule definition for a structure type.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigdefinition"
  },
  {
    "title": "sandkit.api.structures.WeightedRefineryRecipeDefinitionV1",
    "body": "Property Type Description --- --- --- input ElementType outputs WeightedRecipeOutput[] input outputs Weighted refinery recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "weightedrefineryrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.structures.StructureProcessingDefinitionV1",
    "body": "Property Type Description --- --- --- structureType StructureRef intervalMs number process (structure: Structure, context: StructureProcessingContext) = void structureType intervalMs process Custom structure processing definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "structureprocessingdefinitionv1"
  },
  {
    "title": "sandkit.api.structures.PlacementConfigField",
    "body": "Placement hotbar field definition.",
    "path": "/api/sandkit.api.structures",
    "id": "placementconfigfield"
  },
  {
    "title": "sandkit.api.structures.PlanterBoxRecipeDefinitionV1",
    "body": "Planter box recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "planterboxrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.structures.ShakerRecipeDefinitionV1",
    "body": "Shaker recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "shakerrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.structures.KineticPressRecipeDefinitionV1",
    "body": "Kinetic press recipe definition shape.",
    "path": "/api/sandkit.api.structures",
    "id": "kineticpressrecipedefinitionv1"
  },
  {
    "title": "sandkit.api.structures.register()",
    "body": "Argument Type Description --- --- --- definition SandkitStructureDefinition Full structure definition. options? When useRawShape is true, keep the shape matrix as-is. definition options? Register a new structure definition. Example See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "register"
  },
  {
    "title": "sandkit.api.structures.updateDefinition()",
    "body": "Argument Type Description --- --- --- structureTypeOrId StructureRef Structure type value or string id. partial Partial\\ Fields to merge onto the definition. options? When useRawShape is true, keep the shape matrix as-is. structureTypeOrId partial options? Patch fields on an existing structure definition. Example See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.structures.registerVariant()",
    "body": "Argument Type Description --- --- --- baseStructureTypeOrId StructureRef Base structure type or id. variant Variant id and supported rotation angles. options? Optional build-mode wiring for the variant. baseStructureTypeOrId variant options? Add a rotated variant to a base structure type. Example See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "registervariant"
  },
  {
    "title": "sandkit.api.structures.addVariant()",
    "body": "Argument Type Description --- --- --- baseStructureTypeOrId StructureRef variant options? baseStructureTypeOrId variant options? Deprecated Use registerVariant instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "addvariant"
  },
  {
    "title": "sandkit.api.structures.registerPlacementConfig()",
    "body": "Argument Type Description --- --- --- definition PlacementConfigDefinition Hotbar placement field configuration. definition Register placement rules for a structure. Example See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "registerplacementconfig"
  },
  {
    "title": "sandkit.api.structures.getAvailableTypes()",
    "body": "Return structure types available for building. Set\\ See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "getavailabletypes"
  },
  {
    "title": "sandkit.api.structures.getUnlockedTypes()",
    "body": "Set\\ Deprecated Use getAvailableTypes instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "getunlockedtypes"
  },
  {
    "title": "sandkit.api.structures.isBlockedByPlayerAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when the player blocks building at the cell. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "isblockedbyplayeratcell"
  },
  {
    "title": "sandkit.api.structures.isLauncherAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when a launcher structure is at the cell. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "islauncheratcell"
  },
  {
    "title": "sandkit.api.structures.isLockedByType()",
    "body": "Argument Type Description --- --- --- structureType StructureRef Structure type value or string id. structureType Return structure lock state for a type. Official docs list isUnlockedByType as a deprecated alias of this function (same implementation and return value; names differ only). See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "islockedbytype"
  },
  {
    "title": "sandkit.api.structures.isUnlockedByType()",
    "body": "Argument Type Description --- --- --- structureType StructureRef structureType Deprecated Use isLockedByType instead. Same function as isLockedByType; return value is not inverted. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "isunlockedbytype"
  },
  {
    "title": "sandkit.api.structures.mapValueToSpritesheetIndex()",
    "body": "Argument Type Description --- --- --- value number Numeric value to map. thresholds number[] Ascending threshold values. value thresholds Map a numeric value through thresholds to a spritesheet index. Spritesheet frame index. Example See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "mapvaluetospritesheetindex"
  },
  {
    "title": "sandkit.api.structures.buildAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [StructureRef, StructureBuildOptions\\] args Build a structure at a cell. Main-thread writes are deferred. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "buildatcell"
  },
  {
    "title": "sandkit.api.structures.buildAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [StructureRef, StructureBuildOptions\\] args Deprecated Use buildAtCell instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "buildatcellwhenidle"
  },
  {
    "title": "sandkit.api.structures.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [StructureRemovalOptions\\] args Remove a structure at a cell. Main-thread writes are deferred. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.structures.removeAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [StructureRemovalOptions\\] args Deprecated Use removeAtCell instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcellwhenidle"
  },
  {
    "title": "sandkit.api.structures.removeBetweenCells()",
    "body": "Argument Type Description --- --- --- startCellX number Start cell column. startCellY number Start cell row. endCellX number End cell column. endCellY number End cell row. options? StructureBulkRemovalOptions Optional bulk-removal flags. startCellX startCellY endCellX endCellY options? Remove structures between two cells. Main-thread writes are deferred. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "removebetweencells"
  },
  {
    "title": "sandkit.api.structures.removeBetweenCellsWhenIdle()",
    "body": "Argument Type Description --- --- --- startCellX number startCellY number endCellX number endCellY number options? StructureBulkRemovalOptions startCellX startCellY endCellX endCellY options? Deprecated Use removeBetweenCells instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "removebetweencellswhenidle"
  },
  {
    "title": "sandkit.api.structures.removeAtCells()",
    "body": "Argument Type Description --- --- --- positions Vector2[] Cell positions to clear. options? StructureBulkRemovalOptions Optional bulk-removal flags. positions options? Remove structures at many cells. Main-thread writes are deferred. Example See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcells"
  },
  {
    "title": "sandkit.api.structures.removeAtCellsWhenIdle()",
    "body": "Argument Type Description --- --- --- positions Vector2[] options? StructureBulkRemovalOptions positions options? Deprecated Use removeAtCells instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "removeatcellswhenidle"
  },
  {
    "title": "sandkit.api.structures.addProcessor()",
    "body": "Argument Type Description --- --- --- structureId StructureRef definition StructureProcessorDefinitionV1 structureId definition Deprecated Use processing.register instead. See Official docs",
    "path": "/api/sandkit.api.structures",
    "id": "addprocessor"
  },
  {
    "title": "sandkit.api.structures.processing",
    "body": "Per-structure processing enablement and registration.",
    "path": "/api/sandkit.api.structures.processing",
    "id": ""
  },
  {
    "title": "sandkit.api.structures.processing.register()",
    "body": "Argument Type Description --- --- --- id string & object Unique processing registration id. definition StructureProcessingDefinitionV1 Structure type, interval, and callback. id definition Register a custom processing definition by id. Example See Official docs",
    "path": "/api/sandkit.api.structures.processing",
    "id": "register"
  },
  {
    "title": "sandkit.api.structures.processing.setEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args Enable or disable processing at a cell. True when the enabled state changed. See Official docs",
    "path": "/api/sandkit.api.structures.processing",
    "id": "setenabledatcell"
  },
  {
    "title": "sandkit.api.structures.processing.setEnabledAt()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, boolean\\] args Deprecated Use setEnabledAtCell instead. See Official docs",
    "path": "/api/sandkit.api.structures.processing",
    "id": "setenabledat"
  },
  {
    "title": "sandkit.api.structures.processing (worker)",
    "body": "Structure processing enablement checks.",
    "path": "/api/sandkit.api.structures.processing.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.structures.processing.isEnabledAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when processing is enabled at the cell. See Official docs",
    "path": "/api/sandkit.api.structures.processing.worker",
    "id": "isenabledatcell"
  },
  {
    "title": "sandkit.api.structures.processing.isEnabledAt()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Deprecated Use isEnabledAtCell instead. See Official docs",
    "path": "/api/sandkit.api.structures.processing.worker",
    "id": "isenabledat"
  },
  {
    "title": "sandkit.api.structures.recipes",
    "body": "Structure recipe registration by machine kind.",
    "path": "/api/sandkit.api.structures.recipes",
    "id": ""
  },
  {
    "title": "register()",
    "body": "Call Signature Defined in: sandkit/api/structures.d.ts:471 Register a planter box recipe. Parameters id \"planterBox\" Machine recipe slot id. definition PlanterBoxRecipeDefinitionV1 Grower recipe definition. Returns void Example See Official docs Call Signature Defined in: sandkit/api/structures.d.ts:481 Register a shaker recipe. Parameters id \"shaker\" Machine recipe slot id. definition ShakerRecipeDefinitionV1 Shaker recipe definition. Returns void See Official docs Call Signature Defined in: sandkit/api/structures.d.ts:491 Register a kinetic press recipe. Parameters id \"kineticPress\" Machine recipe slot id. definition KineticPressRecipeDefinitionV1 Kinetic press recipe definition. Returns void See Official docs Call Signature Defined in: sandkit/api/structures.d.ts:501 Register a weighted refinery machine recipe. Parameters id \"condenser\" \\ \"steamDryer\" \\ \"synthesizer\" \\ \"snowmaker\" \\ \"smelter\" Refinery machine id. definition WeightedRefineryRecipeDefinitionV1 Weighted input/output recipe. Returns void See Official docs",
    "path": "/api/sandkit.api.structures.recipes",
    "id": "register"
  },
  {
    "title": "sandkit.api.structures (worker)",
    "body": "Internal Shared sandkit.api.structures base — structure lookup and mutation. Base namespace reused by main and worker declarations. - processing",
    "path": "/api/sandkit.api.structures.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.structures.StructureData",
    "body": "Property Type Description --- --- --- elementId? string \\ null elementType? TaggedNumber \\ null elementId? elementType? Per-structure custom data bag. Indexable",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structuredata"
  },
  {
    "title": "sandkit.api.structures.Structure",
    "body": "Property Type Description --- --- --- x number y number trapped? boolean data? StructureData x y trapped? data? Live structure instance in the world grid. Indexable",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structure"
  },
  {
    "title": "sandkit.api.structures.StructureType",
    "body": "Numeric structure type handle. Built-in enum values autocomplete.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structuretype"
  },
  {
    "title": "sandkit.api.structures.StructureId",
    "body": "Mod or built-in structure string id.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structureid"
  },
  {
    "title": "sandkit.api.structures.StructureRef",
    "body": "Type handle or string id accepted by lookup helpers.",
    "path": "/api/sandkit.api.structures.worker",
    "id": "structureref"
  },
  {
    "title": "sandkit.api.structures.forEachOfType()",
    "body": "Argument Type Description --- --- --- structureTypeOrId StructureRef Structure type value or string id. callback (structure: Structure) = void Called once per matching structure instance. structureTypeOrId callback Invoke a callback for every structure of the given type. Example Worker entry See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "foreachoftype"
  },
  {
    "title": "sandkit.api.structures.getAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the structure at a cell, or null when none. Structure \\ null See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "getatcell"
  },
  {
    "title": "sandkit.api.structures.getDefinitionByType()",
    "body": "Argument Type Description --- --- --- structureType StructureRef Structure type value or string id. structureType Return the mod-registered or built-in definition for a structure type. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "getdefinitionbytype"
  },
  {
    "title": "sandkit.api.structures.getTypeById()",
    "body": "Argument Type Description --- --- --- structureId string & object Structure string id. structureId Map a structure string id to its runtime type value. StructureType See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "gettypebyid"
  },
  {
    "title": "sandkit.api.structures.getTypeFromId()",
    "body": "Argument Type Description --- --- --- structureId string & object structureId StructureType Deprecated Use getTypeById instead. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "gettypefromid"
  },
  {
    "title": "sandkit.api.structures.hasBuiltAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when a completed structure occupies the cell. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "hasbuiltatcell"
  },
  {
    "title": "sandkit.api.structures.isType()",
    "body": "Argument Type Description --- --- --- structure Structure \\\\ null Structure instance, or null. structureId string & object Structure string id to compare. structure structureId Return true when the structure matches the given id. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "istype"
  },
  {
    "title": "sandkit.api.structures.isTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, string & object\\] args Return true when the cell structure matches the given id. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "istypeatcell"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndex()",
    "body": "Argument Type Description --- --- --- structure Structure Target structure instance. index number Spritesheet frame index. structure index Set the spritesheet frame index on a structure instance. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindex"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndexAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set spritesheet frame index for the structure at a cell. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindexatcell"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndexByValue()",
    "body": "Argument Type Description --- --- --- structure Structure Target structure instance. value number Numeric value mapped through thresholds. thresholds number[] Ascending threshold values. structure value thresholds Pick spritesheet index from a value and threshold table on a structure. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindexbyvalue"
  },
  {
    "title": "sandkit.api.structures.setSpritesheetIndexByValueAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number, number[]\\] args Same as setSpritesheetIndexByValue for the structure at a cell. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setspritesheetindexbyvalueatcell"
  },
  {
    "title": "sandkit.api.structures.update()",
    "body": "Argument Type Description --- --- --- structure Structure Structure instance to update. options? When propagateToWorkers is true, sync to worker threads. structure options? Push structure field changes to simulation. Example Worker entry See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "update"
  },
  {
    "title": "sandkit.api.structures.updateData()",
    "body": "Argument Type Description --- --- --- structure Structure Structure instance to update. partial any Fields to merge onto structure.data. options? When propagateToWorkers is true, sync to worker threads. structure partial options? Merge partial data onto a structure. Example Worker entry See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "updatedata"
  },
  {
    "title": "sandkit.api.structures.setData()",
    "body": "Argument Type Description --- --- --- structure Structure partial any options? structure partial options? Deprecated Use updateData instead. See Official docs",
    "path": "/api/sandkit.api.structures.worker",
    "id": "setdata"
  },
  {
    "title": "sandkit.api.tech.conservatory",
    "body": "Conservatory unlock wiring for built-in tech nodes.",
    "path": "/api/sandkit.api.tech.conservatory",
    "id": ""
  },
  {
    "title": "sandkit.api.tech.conservatory.appendUnlock()",
    "body": "Argument Type Description --- --- --- techId TechGridId Built-in or custom tech id. unlocks ConservatoryUnlocks Optional structure and item ids to unlock. techId unlocks Append structure or item unlocks to a conservatory tech node. Example See Official docs",
    "path": "/api/sandkit.api.tech.conservatory",
    "id": "appendunlock"
  },
  {
    "title": "sandkit.api.tech",
    "body": "- conservatory",
    "path": "/api/sandkit.api.tech",
    "id": ""
  },
  {
    "title": "sandkit.api.tech.TechDefinition",
    "body": "Property Type Description --- --- --- name? string Plain display name (when not using nameKey). nameKey? string Display name translation key. description? string Plain description (when not using descriptionKey). descriptionKey? string Description translation key. cost? number Research cost. currencyType? string Currency used for cost (for example \"gold\"). branch? string Tech tree branch id (often copied from the parent node). unlocks? object Content unlocked when this tech is researched. requires? readonly string[] Prerequisite tech ids. name? nameKey? description? descriptionKey? cost? currencyType? branch? unlocks? requires? Tech definition shape. Indexable",
    "path": "/api/sandkit.api.tech",
    "id": "techdefinition"
  },
  {
    "title": "sandkit.api.tech.TechGridPosition",
    "body": "Property Type Description --- --- --- x number y number x y Position on the tech grid.",
    "path": "/api/sandkit.api.tech",
    "id": "techgridposition"
  },
  {
    "title": "sandkit.api.tech.ConservatoryUnlocks",
    "body": "Property Type Description --- --- --- structures? readonly string[] Structure ids to unlock. items? readonly string[] Item ids to unlock. structures? items? Unlock payload for conservatory.appendUnlock.",
    "path": "/api/sandkit.api.tech",
    "id": "conservatoryunlocks"
  },
  {
    "title": "sandkit.api.tech.TechGridId",
    "body": "Tech grid node id. Built-in TechEnum values autocomplete; custom string ids and tagged handles are allowed.",
    "path": "/api/sandkit.api.tech",
    "id": "techgridid"
  },
  {
    "title": "sandkit.api.tech.getDefinitionById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry identifier. techId Return a tech definition by string id. TechDefinition \\ undefined See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "getdefinitionbyid"
  },
  {
    "title": "sandkit.api.tech.updateDefinition()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry identifier. updates Partial\\ Fields to merge into the definition. techId updates Patch fields on an existing tech definition. Example See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.tech.registerDefinition()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry identifier. definition TechDefinition Full tech definition to register. techId definition Register a new tech definition by id. Example See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "registerdefinition"
  },
  {
    "title": "sandkit.api.tech.addDefinition()",
    "body": "Argument Type Description --- --- --- techId TechGridId definition TechDefinition techId definition Deprecated Use registerDefinition instead. See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "adddefinition"
  },
  {
    "title": "sandkit.api.tech.registerNode()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech grid node id. definition TechDefinition Tech definition for the node. options Parent node id and optional preferred grid position. techId definition options Register a tech node on the grid with parent and position options. TechGridPosition Example See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "registernode"
  },
  {
    "title": "sandkit.api.tech.isLockedById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry id (string or numeric enum). techId Return true when a tech entry is locked. See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "islockedbyid"
  },
  {
    "title": "sandkit.api.tech.setLockedById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry id (string or numeric enum). locked boolean When true, the tech cannot be purchased. techId locked Set locked state for a tech entry by id. See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "setlockedbyid"
  },
  {
    "title": "sandkit.api.tech.isResearchedById()",
    "body": "Argument Type Description --- --- --- techId TechGridId Tech entry id (string or numeric enum). techId Return true when a tech entry has been researched. See Official docs",
    "path": "/api/sandkit.api.tech",
    "id": "isresearchedbyid"
  },
  {
    "title": "sandkit.api.terrains",
    "body": "",
    "path": "/api/sandkit.api.terrains",
    "id": ""
  },
  {
    "title": "sandkit.api.terrains.TerrainDefinition",
    "body": "Property Type Description --- --- --- interactions? readonly Interaction[] Tooltip interactions shown for this terrain. interactions? Terrain definition shape with typed element interactions. See Official docs Extends - Omit\\ Indexable",
    "path": "/api/sandkit.api.terrains",
    "id": "terraindefinition"
  },
  {
    "title": "sandkit.api.terrains.register()",
    "body": "Argument Type Description --- --- --- definition TerrainDefinition Terrain definition to register. definition Register a new terrain definition. Object with the assigned cellType. cellType: TerrainType See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "register"
  },
  {
    "title": "sandkit.api.terrains.updateDefinition()",
    "body": "Argument Type Description --- --- --- cellTypeOrId TerrainRef Numeric cell type or terrain string id. partial Partial\\ Fields to merge onto the definition. cellTypeOrId partial Patch fields on an existing terrain definition. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.terrains.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Create terrain at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.terrains.createAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Deprecated Use createAtCell instead. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "createatcellwhenidle"
  },
  {
    "title": "sandkit.api.terrains.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.terrains.replaceAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Deprecated Use replaceAtCell instead. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "replaceatcellwhenidle"
  },
  {
    "title": "sandkit.api.terrains.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainMutationOptions\\] args Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.terrains.removeAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainMutationOptions\\] args Deprecated Use removeAtCell instead. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "removeatcellwhenidle"
  },
  {
    "title": "sandkit.api.terrains.setHitPointsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "sethitpointsatcell"
  },
  {
    "title": "sandkit.api.terrains.setHpAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Deprecated Use setHitPointsAtCell instead. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "sethpatcell"
  },
  {
    "title": "sandkit.api.terrains.setHpAtCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Deprecated Use setHitPointsAtCell instead. See Official docs",
    "path": "/api/sandkit.api.terrains",
    "id": "sethpatcellwhenidle"
  },
  {
    "title": "sandkit.api.terrains (worker)",
    "body": "Internal Shared sandkit.api.terrains base — terrain type lookup and cell mutation. Worker-entry mutations are immediate. Main thread defers matching helpers in sandkit.api.terrains. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.terrains.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.terrains.TerrainDefinition",
    "body": "Property Type Description --- --- --- id string Unique mod-scoped terrain id. nameKey? string i18n key for the terrain display name. hp? number Default terrain hit points. materialId? number Material id used for rendering. Must be obstacle breakpoint and id nameKey? hp? materialId? metaColor? colorHSL? excavationRequirements? interactions? output? Terrain definition shape for register and getDefinitionByType. See Official docs Indexable",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terraindefinition"
  },
  {
    "title": "sandkit.api.terrains.TerrainDataAtCell",
    "body": "Property Type Description --- --- --- cellType TerrainType Numeric terrain cell type. hitPoints number \\ null Current hit points, or null when the terrain has no hp. hp? number \\ null cellType hitPoints hp? Terrain cell data returned by getDataAtCell. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terraindataatcell"
  },
  {
    "title": "sandkit.api.terrains.TerrainMutationOptions",
    "body": "Property Type Description --- --- --- skipShadow? boolean Skip shadow updates around the changed cell. skipShadow? Options for terrain create, replace, or remove calls. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terrainmutationoptions"
  },
  {
    "title": "sandkit.api.terrains.TerrainType",
    "body": "Numeric terrain / CellTypeEnum handle. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terraintype"
  },
  {
    "title": "sandkit.api.terrains.TerrainId",
    "body": "Mod or built-in terrain string id. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terrainid"
  },
  {
    "title": "sandkit.api.terrains.TerrainRef",
    "body": "Type handle or string id accepted by mutation helpers. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "terrainref"
  },
  {
    "title": "sandkit.api.terrains.getIdByType()",
    "body": "Argument Type Description --- --- --- terrainType TerrainType Numeric terrain cell type. terrainType Return the mod string id for a numeric terrain type. string & object See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "getidbytype"
  },
  {
    "title": "sandkit.api.terrains.getTypeById()",
    "body": "Argument Type Description --- --- --- terrainId string & object Mod-registered or built-in terrain id. terrainId Resolve a terrain string id to a numeric cell type. TerrainType See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "gettypebyid"
  },
  {
    "title": "sandkit.api.terrains.getTypeFromId()",
    "body": "Argument Type Description --- --- --- terrainId string & object terrainId TerrainType Deprecated Use getTypeById instead. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "gettypefromid"
  },
  {
    "title": "sandkit.api.terrains.getDefinitionByType()",
    "body": "Argument Type Description --- --- --- terrainType TerrainType Numeric terrain cell type. terrainType Look up the definition for a terrain type. TerrainDefinition \\ undefined See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "getdefinitionbytype"
  },
  {
    "title": "sandkit.api.terrains.getTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return the terrain cell type at a cell, or null when none. TerrainType \\ null See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "gettypeatcell"
  },
  {
    "title": "sandkit.api.terrains.getDataAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return terrain cell type and hit points at a cell. TerrainDataAtCell \\ null Cell type and hit points, or null when the cell is not terrain. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "getdataatcell"
  },
  {
    "title": "sandkit.api.terrains.isAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Return true when any terrain occupies the cell. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "isatcell"
  },
  {
    "title": "sandkit.api.terrains.isTypeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, string & object\\] args Return true when the cell terrain matches the given id. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "istypeatcell"
  },
  {
    "title": "sandkit.api.terrains.isCellIdTerrain()",
    "body": "Argument Type Description --- --- --- cellId CellId Packed cell id from world.getCellIdAtCell. cellId Return true when a packed cell id refers to terrain. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "iscellidterrain"
  },
  {
    "title": "sandkit.api.terrains.damageAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Apply damage to terrain at a cell. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "damageatcell"
  },
  {
    "title": "sandkit.api.terrains.meltAtCell()",
    "body": "Argument Type Description --- --- --- args ...CellCoordinates args Melt terrain at a cell (for example ice to water). Worker-entry writes are immediate. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "meltatcell"
  },
  {
    "title": "sandkit.api.terrains.createAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Place terrain at an empty cell. Worker-entry writes are immediate. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "createatcell"
  },
  {
    "title": "sandkit.api.terrains.replaceAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainRef, TerrainMutationOptions\\] args Replace existing terrain at a cell. Worker-entry writes are immediate. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "replaceatcell"
  },
  {
    "title": "sandkit.api.terrains.removeAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\number, number, [TerrainMutationOptions\\] args Remove terrain from a cell. Worker-entry writes are immediate. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "removeatcell"
  },
  {
    "title": "sandkit.api.terrains.setHitPointsAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Set terrain hit points at a cell. Worker-entry writes are immediate. True when hit points changed or the terrain was removed. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "sethitpointsatcell"
  },
  {
    "title": "sandkit.api.terrains.setHpAtCell()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Deprecated Use setHitPointsAtCell instead. See Official docs",
    "path": "/api/sandkit.api.terrains.worker",
    "id": "sethpatcell"
  },
  {
    "title": "sandkit.api.time",
    "body": "",
    "path": "/api/sandkit.api.time",
    "id": ""
  },
  {
    "title": "sandkit.api.time.getTimeMs()",
    "body": "Return elapsed game time in milliseconds.",
    "path": "/api/sandkit.api.time",
    "id": "gettimems"
  },
  {
    "title": "sandkit.api.time.getTick()",
    "body": "Return the current simulation tick number.",
    "path": "/api/sandkit.api.time",
    "id": "gettick"
  },
  {
    "title": "sandkit.api.tools.grabber",
    "body": "Grabber tool size and state.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": ""
  },
  {
    "title": "sandkit.api.tools.grabber.setSize()",
    "body": "Argument Type Description --- --- --- size number Grab radius in cells. size Set grabber radius size.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "setsize"
  },
  {
    "title": "sandkit.api.tools.grabber.getSize()",
    "body": "Return current grabber radius size. Grab radius in cells.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "getsize"
  },
  {
    "title": "sandkit.api.tools.grabber.isActive()",
    "body": "Return true when grabber tool is active. True when the grabber is the active tool.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "isactive"
  },
  {
    "title": "sandkit.api.tools.grabber.isLoaded()",
    "body": "Return true when grabber holds elements. True when the grabber buffer is not empty.",
    "path": "/api/sandkit.api.tools.grabber",
    "id": "isloaded"
  },
  {
    "title": "sandkit.api.tools",
    "body": "- grabber",
    "path": "/api/sandkit.api.tools",
    "id": ""
  },
  {
    "title": "sandkit.api.triggers",
    "body": "",
    "path": "/api/sandkit.api.triggers",
    "id": ""
  },
  {
    "title": "sandkit.api.triggers.MainTriggerDefinition",
    "body": "Property Type Description --- --- --- interval number Interval between callbacks in simulation ticks. callback () = void Called each time the trigger fires. interval callback Main-thread trigger definition shape. Indexable",
    "path": "/api/sandkit.api.triggers",
    "id": "maintriggerdefinition"
  },
  {
    "title": "sandkit.api.triggers.register()",
    "body": "Argument Type Description --- --- --- triggerId string Unique trigger identifier. definition MainTriggerDefinition Interval in ticks and callback to invoke. triggerId definition Register a repeating trigger with interval and callback. Example",
    "path": "/api/sandkit.api.triggers",
    "id": "register"
  },
  {
    "title": "sandkit.api.ui",
    "body": "api.ui.components.ActionSlot api.ui.components.Button api.ui.components.Panel api.ui.hotbar.createBankSource api.ui.hotbar.useHotbar api.ui.overrides.register api.ui.regions.mount api.ui.regions.mountHandle.update api.ui.select api.ui.useGameEvent - overlays - navigation",
    "path": "/api/sandkit.api.ui",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.TooltipMessageData",
    "body": "Property Type Description --- --- --- type \"message\" Discriminator for tooltip renderer selection. text LocalizedText Message body as localized text. type text Message tooltip with localized body text.",
    "path": "/api/sandkit.api.ui",
    "id": "tooltipmessagedata"
  },
  {
    "title": "sandkit.api.ui.Focusable",
    "body": "Property Type Description --- --- --- ref RefObject Ref to attach to the focusable element. focused boolean True when the element has controller focus. focus () = void Move controller focus to this element. ref focused focus Focusable element state from useFocusable. Type Parameters T T extends HTMLElement = HTMLDivElement",
    "path": "/api/sandkit.api.ui",
    "id": "focusable"
  },
  {
    "title": "sandkit.api.ui.FocusOptions",
    "body": "Property Type Description --- --- --- id string Unique id within the focus scope. scope string Focus scope id this element belongs to. onActivate (element?: HTMLElement) = void Called when the element is activated (A button / Enter). onFocus? () = void Called when the element receives focus. disabled? boolean When true, skip this element during navigation. x? number Optional grid column for spatial navigation. y? number Optional grid row for spatial navigation. neighbors? Partial Neighbor ids for directional navigation. scrollIntoView? boolean When true, scroll the element into view on focus. id scope onActivate onFocus? disabled? x? y? neighbors? scrollIntoView? Options for useFocusable registration.",
    "path": "/api/sandkit.api.ui",
    "id": "focusoptions"
  },
  {
    "title": "sandkit.api.ui.OverlaySlot",
    "body": "Overlay slot name. Known vanilla slots autocomplete; any string is allowed.",
    "path": "/api/sandkit.api.ui",
    "id": "overlayslot"
  },
  {
    "title": "sandkit.api.ui.ComponentId",
    "body": "Registered UI component id. Built-in ComponentIdEnum values autocomplete; custom string ids are allowed.",
    "path": "/api/sandkit.api.ui",
    "id": "componentid"
  },
  {
    "title": "sandkit.api.ui.ComponentUpdateOptions",
    "body": "Component-specific update payload passed to update.",
    "path": "/api/sandkit.api.ui",
    "id": "componentupdateoptions"
  },
  {
    "title": "sandkit.api.ui.TooltipData",
    "body": "Tooltip payload shown near the cursor or UI target.",
    "path": "/api/sandkit.api.ui",
    "id": "tooltipdata"
  },
  {
    "title": "sandkit.api.ui.update()",
    "body": "Argument Type Description --- --- --- componentId ComponentId Built-in ComponentIdEnum value or custom string id. options? ComponentUpdateOptions Component-specific update payload. componentId options? Update a registered UI component by id.",
    "path": "/api/sandkit.api.ui",
    "id": "update"
  },
  {
    "title": "sandkit.api.ui.openPauseMenu()",
    "body": "Open the pause menu.",
    "path": "/api/sandkit.api.ui",
    "id": "openpausemenu"
  },
  {
    "title": "sandkit.api.ui.showTooltip()",
    "body": "Argument Type Description --- --- --- data TooltipMessageData Tooltip type and localized content. data Show a tooltip with the given data.",
    "path": "/api/sandkit.api.ui",
    "id": "showtooltip"
  },
  {
    "title": "sandkit.api.ui.alert()",
    "body": "Argument Type Description --- --- --- message LocalizedText Dialog body text. title? LocalizedText Optional dialog title. message title? Show an alert dialog. Promise\\ Promise that resolves when the user dismisses the dialog. Example",
    "path": "/api/sandkit.api.ui",
    "id": "alert"
  },
  {
    "title": "sandkit.api.ui.confirm()",
    "body": "Argument Type Description --- --- --- message LocalizedText Dialog body text. title? LocalizedText Optional dialog title. message title? Show a confirm dialog. Promise\\ Promise that resolves with true when confirmed, or false when cancelled. Example",
    "path": "/api/sandkit.api.ui",
    "id": "confirm"
  },
  {
    "title": "sandkit.api.ui.prompt()",
    "body": "Argument Type Description --- --- --- message LocalizedText Dialog body text. defaultValue? string Initial input value. placeholder? LocalizedText Placeholder text in the input field. title? LocalizedText Optional dialog title. allowCopy? boolean When true, allow copying the result from the dialog. message defaultValue? placeholder? title? allowCopy? Show a prompt dialog. Promise\\ Promise that resolves with entered text, or null when cancelled. Example",
    "path": "/api/sandkit.api.ui",
    "id": "prompt"
  },
  {
    "title": "sandkit.api.ui.inject()",
    "body": "Argument Type Description --- --- --- componentId ComponentId Overlay slot or custom mount point id. component ComponentType\\ \\ React component to render. componentId component Mount a React component by id. Function that unmounts the injected component. () = void",
    "path": "/api/sandkit.api.ui",
    "id": "inject"
  },
  {
    "title": "sandkit.api.ui.navigation",
    "body": "Controller focus and scope navigation hooks.",
    "path": "/api/sandkit.api.ui.navigation",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.navigation.useFocusable",
    "body": "Argument Type Description --- --- --- options FocusOptions Focus registration and neighbor wiring. options React hook for a focusable UI element in a scope. Type Parameters T T extends HTMLElement = HTMLDivElement Focusable\\ Ref, focus state, and a focus helper. Example",
    "path": "/api/sandkit.api.ui.navigation",
    "id": "usefocusable"
  },
  {
    "title": "sandkit.api.ui.navigation.useFocusScope()",
    "body": "Argument Type Description --- --- --- options Scope id, priority, default focus, and back handler. options React hook to register a focus scope with back handling. Example",
    "path": "/api/sandkit.api.ui.navigation",
    "id": "usefocusscope"
  },
  {
    "title": "sandkit.api.ui.navigation.controllerFocusClass()",
    "body": "Argument Type Description --- --- --- focused boolean True when the element has controller focus. focused Return CSS class for controller focus ring state. Class name string for the focus ring.",
    "path": "/api/sandkit.api.ui.navigation",
    "id": "controllerfocusclass"
  },
  {
    "title": "sandkit.api.ui.overlays",
    "body": "Overlay slot registration and updates.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.overlays.register()",
    "body": "Argument Type Description --- --- --- slot OverlaySlot Slot name (for example \"hotbar\"). overlayId string Unique id for this overlay within the slot. render () = ReactNode Function that returns React content. slot overlayId render Register a render function in an overlay slot.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": "register"
  },
  {
    "title": "sandkit.api.ui.overlays.unregister()",
    "body": "Argument Type Description --- --- --- slot OverlaySlot Slot name the overlay was registered in. overlayId string Overlay id passed to register. slot overlayId Remove an overlay from a slot.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": "unregister"
  },
  {
    "title": "sandkit.api.ui.overlays.update()",
    "body": "Argument Type Description --- --- --- slot OverlaySlot Slot name to refresh. slot Request a re-render for all overlays in a slot.",
    "path": "/api/sandkit.api.ui.overlays",
    "id": "update"
  },
  {
    "title": "sandkit.api.ui (worker)",
    "body": "Internal Shared sandkit.api.ui base — lightweight UI helpers available on workers. Main thread adds richer UI APIs on top of this shape. Base namespace reused by main and worker declarations.",
    "path": "/api/sandkit.api.ui.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.ui.I18nTextKey",
    "body": "Property Type Description --- --- --- key string Namespaced translation key (for example ui\\ save\\ save). params? Record Values merged into the translated string. key params? Translation key with optional parameter substitution.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "i18ntextkey"
  },
  {
    "title": "sandkit.api.ui.I18nTranslatable",
    "body": "Property Type Description --- --- --- \\ \\ translatable true key string fallback string \\ \\ translatable key fallback Value returned by sandkit.api.i18n.translatable.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "i18ntranslatable"
  },
  {
    "title": "sandkit.api.ui.ToastOptions",
    "body": "Property Type Description --- --- --- cooldown? number Minimum ms before the same toast can show again. cooldownKey? string Dedupe key paired with ToastOptions.cooldown. Defaults to the message string or message.key. duration? number \\ false Auto-dismiss delay in ms. Default 5000. Set false to keep the toast until another toast replaces it. variant? string & object \\ \"danger\" \\ \"hint\" \\ \"hole\" Visual style applied to the toast body. cooldown? cooldownKey? duration? variant? Cooldown, style, and auto-dismiss options for toast.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "toastoptions"
  },
  {
    "title": "sandkit.api.ui.LocalizedText",
    "body": "Plain text, translation key object, or i18n translatable value.",
    "path": "/api/sandkit.api.ui.worker",
    "id": "localizedtext"
  },
  {
    "title": "sandkit.api.ui.toast()",
    "body": "Argument Type Description --- --- --- message LocalizedText Plain text, translation key, or translatable value. options? ToastOptions Cooldown, style, and auto-dismiss options. message options? Show a short on-screen toast message. Example Worker entry",
    "path": "/api/sandkit.api.ui.worker",
    "id": "toast"
  },
  {
    "title": "sandkit.api.upgrades",
    "body": "",
    "path": "/api/sandkit.api.upgrades",
    "id": ""
  },
  {
    "title": "sandkit.api.upgrades.UpgradeDefinition",
    "body": "Property Type Description --- --- --- itemId string itemNameKey? string categoryId? string upgrade object itemId itemNameKey? categoryId? upgrade Upgrade definition registered for an item. Indexable",
    "path": "/api/sandkit.api.upgrades",
    "id": "upgradedefinition"
  },
  {
    "title": "sandkit.api.upgrades.UpgradeCategoryDefinition",
    "body": "Property Type Description --- --- --- id string Category identifier referenced by upgrades. nameKey? string Display name translation key. id nameKey? Upgrade category definition shape. Indexable",
    "path": "/api/sandkit.api.upgrades",
    "id": "upgradecategorydefinition"
  },
  {
    "title": "sandkit.api.upgrades.registerCategory()",
    "body": "Argument Type Description --- --- --- definition UpgradeCategoryDefinition Category id and display metadata. definition Register an upgrade category.",
    "path": "/api/sandkit.api.upgrades",
    "id": "registercategory"
  },
  {
    "title": "sandkit.api.upgrades.register()",
    "body": "Argument Type Description --- --- --- definition UpgradeDefinition Item id, upgrade id, costs, and level metadata. definition Register an upgrade definition.",
    "path": "/api/sandkit.api.upgrades",
    "id": "register"
  },
  {
    "title": "sandkit.api.upgrades.updateDefinition()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. partial Partial\\ Fields to merge into the definition. itemId upgradeId partial Patch fields on an existing upgrade definition.",
    "path": "/api/sandkit.api.upgrades",
    "id": "updatedefinition"
  },
  {
    "title": "sandkit.api.upgrades.getLevelById()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. itemId upgradeId Return the current purchased level for an upgrade.",
    "path": "/api/sandkit.api.upgrades",
    "id": "getlevelbyid"
  },
  {
    "title": "sandkit.api.upgrades.getAvailableLevelById()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. itemId upgradeId Return the maximum available level for an upgrade.",
    "path": "/api/sandkit.api.upgrades",
    "id": "getavailablelevelbyid"
  },
  {
    "title": "sandkit.api.upgrades.setLevelById()",
    "body": "Argument Type Description --- --- --- itemId string Parent item id. upgradeId string Upgrade id within the item. level number Level to set. itemId upgradeId level Set the purchased level for an upgrade. See Official docs",
    "path": "/api/sandkit.api.upgrades",
    "id": "setlevelbyid"
  },
  {
    "title": "sandkit.api.utils",
    "body": "",
    "path": "/api/sandkit.api.utils",
    "id": ""
  },
  {
    "title": "sandkit.api.utils.getDistance()",
    "body": "Argument Type Description --- --- --- pointA Vector2 First point. pointB Vector2 Second point. pointA pointB Return distance between two points. See Official docs",
    "path": "/api/sandkit.api.utils",
    "id": "getdistance"
  },
  {
    "title": "sandkit.api.utils.getDirection()",
    "body": "Argument Type Description --- --- --- pointA Vector2 Origin point. pointB Vector2 Target point. pointA pointB Return normalized direction from point A to point B. Vector2 See Official docs",
    "path": "/api/sandkit.api.utils",
    "id": "getdirection"
  },
  {
    "title": "sandkit.api.utils.getAngle()",
    "body": "Argument Type Description --- --- --- pointA Vector2 Origin point. pointB Vector2 Target point. pointA pointB Return angle in radians from point A to point B. See Official docs",
    "path": "/api/sandkit.api.utils",
    "id": "getangle"
  },
  {
    "title": "sandkit.api.utils.getCoordinatesBetweenCells()",
    "body": "Argument Type Description --- --- --- pointA Vector2 Line start in cell coordinates. pointB Vector2 Line end in cell coordinates. pointA pointB Return grid cells along a line between two points. Vector2[] See Official docs",
    "path": "/api/sandkit.api.utils",
    "id": "getcoordinatesbetweencells"
  },
  {
    "title": "sandkit.api.utils.getCoordinatesBetweenPoints()",
    "body": "Argument Type Description --- --- --- pointA Vector2 pointB Vector2 pointA pointB Vector2[] Deprecated Use getCoordinatesBetweenCells instead. See Official docs",
    "path": "/api/sandkit.api.utils",
    "id": "getcoordinatesbetweenpoints"
  },
  {
    "title": "sandkit.api (worker)",
    "body": "Worker-thread sandkit.api namespaces. Prefer these declarations in worker.js. Type sandkit.api as WorkerSandkitApi. Do not assume main-thread methods exist here. See sandkit.api for the main-thread public API. - maps - player - structures - terrains - ui - effects - elements - events - fire - grid - world - hooks - lights - main - shared - worker",
    "path": "/api/sandkit.api.worker",
    "id": ""
  },
  {
    "title": "WorkerSandkitApi",
    "body": "Defined in: worker/sandkit-api.d.ts:14 Composed worker-thread sandkit.api object. Namespace members are documented under worker. Use this type in worker.js / worker.ts: Main and worker surfaces overlap but are not interchangeable. Do not use sandkit.SandkitApi on worker threads. Properties constants Defined in: worker/sandkit-api.d.ts:15 collector Defined in: worker/sandkit-api.d.ts:16 effects Defined in: worker/sandkit-api.d.ts:17 elements Defined in: worker/sandkit-api.d.ts:18 events Defined in: worker/sandkit-api.d.ts:19 fire Defined in: worker/sandkit-api.d.ts:20 grid Defined in: worker/sandkit-api.d.ts:21 hooks Defined in: worker/sandkit-api.d.ts:22 lights Defined in: worker/sandkit-api.d.ts:23 main Defined in: worker/sandkit-api.d.ts:24 maps Defined in: worker/sandkit-api.d.ts:25 patterns Defined in: worker/sandkit-api.d.ts:26 player Defined in: worker/sandkit-api.d.ts:27 random Defined in: worker/sandkit-api.d.ts:28 shared Defined in: worker/sandkit-api.d.ts:29 structures Defined in: worker/sandkit-api.d.ts:30 terrains Defined in: worker/sandkit-api.d.ts:31 ui Defined in: worker/sandkit-api.d.ts:32 utils Defined in: worker/sandkit-api.d.ts:33 worker Defined in: worker/sandkit-api.d.ts:34 world Defined in: worker/sandkit-api.d.ts:40 Deprecated Use grid instead. See Official docs",
    "path": "/api/sandkit.api.worker",
    "id": "workersandkitapi"
  },
  {
    "title": "sandkit.api.worker (worker)",
    "body": "Internal Worker thread only. sandkit.api.worker — identity of the current simulation worker. Base shape reused by WorkerSandkitApi. Not the same as main-thread APIs.",
    "path": "/api/sandkit.api.worker.worker",
    "id": ""
  },
  {
    "title": "sandkit.api.worker.getIndex()",
    "body": "Return the zero-based index of this worker in the worker pool. Worker index (0 … getCount() - 1).",
    "path": "/api/sandkit.api.worker.worker",
    "id": "getindex"
  },
  {
    "title": "sandkit.api.worker.getCount()",
    "body": "Return the total number of simulation workers. Worker count for the active simulation.",
    "path": "/api/sandkit.api.worker.worker",
    "id": "getcount"
  },
  {
    "title": "sandkit.api.workers",
    "body": "",
    "path": "/api/sandkit.api.workers",
    "id": ""
  },
  {
    "title": "sandkit.api.workers.setPostUpdateEnabled()",
    "body": "Argument Type Description --- --- --- enabled boolean When true, workers run post-update hooks each tick. enabled Enable or disable worker post-update callbacks.",
    "path": "/api/sandkit.api.workers",
    "id": "setpostupdateenabled"
  },
  {
    "title": "sandkit.api.world",
    "body": "Use grid instead. Official docs - pickups",
    "path": "/api/sandkit.api.world",
    "id": ""
  },
  {
    "title": "sandkit.api.world.runWhenSimulationIdle()",
    "body": "Argument Type Description --- --- --- callback () = void callback Deprecated Use grid.mutate instead. See Official docs",
    "path": "/api/sandkit.api.world",
    "id": "runwhensimulationidle"
  },
  {
    "title": "sandkit.api.world.redrawAroundCellWhenIdle()",
    "body": "Argument Type Description --- --- --- args ...\\[number, number, number\\] args Deprecated Use grid.redrawAroundCell instead. See Official docs",
    "path": "/api/sandkit.api.world",
    "id": "redrawaroundcellwhenidle"
  },
  {
    "title": "sandkit.api.world.pickups",
    "body": "Use pickups instead. Official docs",
    "path": "/api/sandkit.api.world.pickups",
    "id": ""
  },
  {
    "title": "sandkit.api.world (worker)",
    "body": "Use grid instead. Official docs",
    "path": "/api/sandkit.api.world.worker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.augments",
    "body": "Internal sandkit.engine.api.augments — player augment levels and unlocked perks. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.augments",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.augments.getDigLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current dig augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getdiglevel"
  },
  {
    "title": "sandkit.engine.api.augments.getGunLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current gun augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getgunlevel"
  },
  {
    "title": "sandkit.engine.api.augments.getPhaseLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current phase augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getphaselevel"
  },
  {
    "title": "sandkit.engine.api.augments.getRocketAmmoLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current rocket ammo augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getrocketammolevel"
  },
  {
    "title": "sandkit.engine.api.augments.getRocketReloadLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current rocket reload augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getrocketreloadlevel"
  },
  {
    "title": "sandkit.engine.api.augments.getSprintCapLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current sprint cap augment level.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "getsprintcaplevel"
  },
  {
    "title": "sandkit.engine.api.augments.hasBigDig()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the big-dig augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasbigdig"
  },
  {
    "title": "sandkit.engine.api.augments.hasBulletSpeed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the bullet-speed augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasbulletspeed"
  },
  {
    "title": "sandkit.engine.api.augments.hasBulletTracer()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the bullet-tracer augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasbullettracer"
  },
  {
    "title": "sandkit.engine.api.augments.hasKickstartBoost()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the kickstart-boost augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "haskickstartboost"
  },
  {
    "title": "sandkit.engine.api.augments.hasPhaseDash()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the phase-dash augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasphasedash"
  },
  {
    "title": "sandkit.engine.api.augments.hasPhaseDashCharge()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the phase-dash-charge augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasphasedashcharge"
  },
  {
    "title": "sandkit.engine.api.augments.hasRideBoost()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the ride-boost augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasrideboost"
  },
  {
    "title": "sandkit.engine.api.augments.hasRocketDamage()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the rocket-damage augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasrocketdamage"
  },
  {
    "title": "sandkit.engine.api.augments.hasRocketWarhead()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the rocket-warhead augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hasrocketwarhead"
  },
  {
    "title": "sandkit.engine.api.augments.hasSprintPower()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the sprint-power augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hassprintpower"
  },
  {
    "title": "sandkit.engine.api.augments.hasTripleShot()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the triple-shot augment is unlocked.",
    "path": "/api/sandkit.engine.api.augments",
    "id": "hastripleshot"
  },
  {
    "title": "sandkit.engine.api.auralite",
    "body": "Internal sandkit.engine.api.auralite — auralite production tracking. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.auralite",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.auralite.ensureProducedAtLeast()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Ensure at least the given amount of auralite has been produced.",
    "path": "/api/sandkit.engine.api.auralite",
    "id": "ensureproducedatleast"
  },
  {
    "title": "sandkit.engine.api.auralite.getProduced()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total auralite produced so far.",
    "path": "/api/sandkit.engine.api.auralite",
    "id": "getproduced"
  },
  {
    "title": "sandkit.engine.api.blueprints",
    "body": "Internal sandkit.engine.api.blueprints — blueprint save, load, and import/export. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.blueprints.delete()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Delete a saved blueprint. Runtime property name is delete.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "delete"
  },
  {
    "title": "sandkit.engine.api.blueprints.exportAllString()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Export all blueprints as one string.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "exportallstring"
  },
  {
    "title": "sandkit.engine.api.blueprints.exportString()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Export one blueprint as a string.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "exportstring"
  },
  {
    "title": "sandkit.engine.api.blueprints.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all saved blueprints.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.blueprints.importString()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Import a blueprint from a string.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "importstring"
  },
  {
    "title": "sandkit.engine.api.blueprints.load()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Load a blueprint into the active session.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "load"
  },
  {
    "title": "sandkit.engine.api.blueprints.save()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Save the current selection as a blueprint.",
    "path": "/api/sandkit.engine.api.blueprints",
    "id": "save"
  },
  {
    "title": "sandkit.engine.api.clipboard",
    "body": "Internal sandkit.engine.api.clipboard — build clipboard copy, paste, and history. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.clipboard.activate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Activate the clipboard tool or mode.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "activate"
  },
  {
    "title": "sandkit.engine.api.clipboard.clear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Clear the current clipboard contents.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "clear"
  },
  {
    "title": "sandkit.engine.api.clipboard.get()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current clipboard payload.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "get"
  },
  {
    "title": "sandkit.engine.api.clipboard.getHistory()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return clipboard history entries.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "gethistory"
  },
  {
    "title": "sandkit.engine.api.clipboard.getSignalLinks()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return signal links stored on the clipboard.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "getsignallinks"
  },
  {
    "title": "sandkit.engine.api.clipboard.selectFromHistory()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Restore a clipboard entry from history.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "selectfromhistory"
  },
  {
    "title": "sandkit.engine.api.clipboard.set()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set the clipboard payload.",
    "path": "/api/sandkit.engine.api.clipboard",
    "id": "set"
  },
  {
    "title": "sandkit.engine.api.colorPicker",
    "body": "Internal sandkit.engine.api.colorPicker — structure color palette UI helpers. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:12 Sentinel value for cycling through predefined colors.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:14 Sentinel value for no color selected.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:16 List of predefined palette colors.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "const",
    "body": "Defined in: sandkit/engine/api/colorPicker.d.ts:18 Sentinel value for a random palette color.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.colorPicker.closePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Close the active color palette UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "closepalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.getActivePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the active palette identifier.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "getactivepalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.getCycleColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the next color in the cycle.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "getcyclecolor"
  },
  {
    "title": "sandkit.engine.api.colorPicker.getRandomColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return a random predefined color.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "getrandomcolor"
  },
  {
    "title": "sandkit.engine.api.colorPicker.hexToRgba()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Convert a hex color string to RGBA components.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "hextorgba"
  },
  {
    "title": "sandkit.engine.api.colorPicker.renderColorButton()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Render a color-picker button in the UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "rendercolorbutton"
  },
  {
    "title": "sandkit.engine.api.colorPicker.renderColorSection()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Render a color section in the UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "rendercolorsection"
  },
  {
    "title": "sandkit.engine.api.colorPicker.renderPalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Render the full color palette UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "renderpalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.rgbaToHex()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Convert RGBA components to a hex color string.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "rgbatohex"
  },
  {
    "title": "sandkit.engine.api.colorPicker.setActivePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set the active palette identifier.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "setactivepalette"
  },
  {
    "title": "sandkit.engine.api.colorPicker.togglePalette()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Open or close the color palette UI.",
    "path": "/api/sandkit.engine.api.colorPicker",
    "id": "togglepalette"
  },
  {
    "title": "sandkit.engine.api.coloringTool",
    "body": "Internal sandkit.engine.api.coloringTool — paint-bucket and flood-fill structure coloring. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.coloringTool.colorStructure()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Apply a color to one structure.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "colorstructure"
  },
  {
    "title": "sandkit.engine.api.coloringTool.floodFillColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Flood-fill connected structures with a color.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "floodfillcolor"
  },
  {
    "title": "sandkit.engine.api.coloringTool.getColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the color on a structure.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "getcolor"
  },
  {
    "title": "sandkit.engine.api.coloringTool.isColorableStructure()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a structure can be colored.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "iscolorablestructure"
  },
  {
    "title": "sandkit.engine.api.coloringTool.isMatchColorMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether match-color mode is active.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "ismatchcolormode"
  },
  {
    "title": "sandkit.engine.api.coloringTool.isPaintBucketMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether paint-bucket mode is active.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "ispaintbucketmode"
  },
  {
    "title": "sandkit.engine.api.coloringTool.setColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set the color on a structure.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "setcolor"
  },
  {
    "title": "sandkit.engine.api.coloringTool.toggleMatchColorMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Toggle match-color mode on or off.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "togglematchcolormode"
  },
  {
    "title": "sandkit.engine.api.coloringTool.togglePaintBucketMode()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Toggle paint-bucket mode on or off.",
    "path": "/api/sandkit.engine.api.coloringTool",
    "id": "togglepaintbucketmode"
  },
  {
    "title": "sandkit.engine.api.conveyors",
    "body": "Internal sandkit.engine.api.conveyors — conveyor type registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.conveyors",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.conveyors.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom conveyor type.",
    "path": "/api/sandkit.engine.api.conveyors",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.debug",
    "body": "Internal sandkit.engine.api.debug — debug overlay registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.debug",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.debug.register()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a debug overlay or helper.",
    "path": "/api/sandkit.engine.api.debug",
    "id": "register"
  },
  {
    "title": "sandkit.engine.api.drones",
    "body": "Internal sandkit.engine.api.drones — drone spawn and removal. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.drones",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.drones.kill()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Remove one or more drones.",
    "path": "/api/sandkit.engine.api.drones",
    "id": "kill"
  },
  {
    "title": "sandkit.engine.api.drones.spawn()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Spawn a drone instance.",
    "path": "/api/sandkit.engine.api.drones",
    "id": "spawn"
  },
  {
    "title": "sandkit.engine.api.entities",
    "body": "Internal sandkit.engine.api.entities — entity type registration, spawn, and queries. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.entities",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.entities.createLight()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Create a light entity attached to a parent.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "createlight"
  },
  {
    "title": "sandkit.engine.api.entities.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all live entities.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.entities.getAllByType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all entities of one type.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getallbytype"
  },
  {
    "title": "sandkit.engine.api.entities.getAllTypeDefs()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all registered entity type definitions.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getalltypedefs"
  },
  {
    "title": "sandkit.engine.api.entities.getSprite()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the sprite for an entity.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "getsprite"
  },
  {
    "title": "sandkit.engine.api.entities.getTypeDef()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return one entity type definition by id.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "gettypedef"
  },
  {
    "title": "sandkit.engine.api.entities.launch()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Launch an entity with velocity or trajectory.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "launch"
  },
  {
    "title": "sandkit.engine.api.entities.registerSpawner()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register an entity spawner behavior.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "registerspawner"
  },
  {
    "title": "sandkit.engine.api.entities.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom entity type.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.entities.spawn()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Spawn an entity instance.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "spawn"
  },
  {
    "title": "sandkit.engine.api.entities.startCapture()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Start capturing entities for a tool or effect.",
    "path": "/api/sandkit.engine.api.entities",
    "id": "startcapture"
  },
  {
    "title": "sandkit.engine.api.extensions",
    "body": "Internal sandkit.engine.api.extensions — structure extension definitions. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.extensions",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.extensions.define()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Define a structure extension type.",
    "path": "/api/sandkit.engine.api.extensions",
    "id": "define"
  },
  {
    "title": "sandkit.engine.api.factory",
    "body": "Internal sandkit.engine.api.factory — factory tier progression and process tracking. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.factory",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.factory.addViabilityGold()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Add viability gold toward the next factory tier.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "addviabilitygold"
  },
  {
    "title": "sandkit.engine.api.factory.canUnlockNextTier()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the next factory tier can be unlocked.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "canunlocknexttier"
  },
  {
    "title": "sandkit.engine.api.factory.ensureProcessAtLeast()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Ensure at least the given process count has been recorded.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "ensureprocessatleast"
  },
  {
    "title": "sandkit.engine.api.factory.flushDeferredLevelUps()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Apply deferred factory level-ups.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "flushdeferredlevelups"
  },
  {
    "title": "sandkit.engine.api.factory.getLevel()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current factory level.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "getlevel"
  },
  {
    "title": "sandkit.engine.api.factory.getProcessCount()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total recorded process count.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "getprocesscount"
  },
  {
    "title": "sandkit.engine.api.factory.getProcessRate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the current process rate.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "getprocessrate"
  },
  {
    "title": "sandkit.engine.api.factory.recordProcess()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Record one factory process event.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "recordprocess"
  },
  {
    "title": "sandkit.engine.api.factory.unlockNextTier()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Unlock the next factory tier.",
    "path": "/api/sandkit.engine.api.factory",
    "id": "unlocknexttier"
  },
  {
    "title": "sandkit.engine.api.foliage",
    "body": "Internal sandkit.engine.api.foliage — procedural foliage generation and clusters. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.foliage.generate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Generate foliage for a region or world chunk.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "generate"
  },
  {
    "title": "sandkit.engine.api.foliage.getClusters()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return foliage cluster data.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "getclusters"
  },
  {
    "title": "sandkit.engine.api.foliage.getContainer()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the foliage render container.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "getcontainer"
  },
  {
    "title": "sandkit.engine.api.foliage.hasProcgenData()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether procgen foliage data exists for a location.",
    "path": "/api/sandkit.engine.api.foliage",
    "id": "hasprocgendata"
  },
  {
    "title": "sandkit.engine.api.foundationColorPicker",
    "body": "Internal sandkit.engine.api.foundationColorPicker — foundation tile color lookup. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.foundationColorPicker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.foundationColorPicker.getColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the color on a foundation tile.",
    "path": "/api/sandkit.engine.api.foundationColorPicker",
    "id": "getcolor"
  },
  {
    "title": "sandkit.engine.api.game",
    "body": "Internal sandkit.engine.api.game — game session start, save, and load. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.game",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.game.load()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Load a saved game into the session.",
    "path": "/api/sandkit.engine.api.game",
    "id": "load"
  },
  {
    "title": "sandkit.engine.api.game.save()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Save the current session.",
    "path": "/api/sandkit.engine.api.game",
    "id": "save"
  },
  {
    "title": "sandkit.engine.api.game.start()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Start a new game session.",
    "path": "/api/sandkit.engine.api.game",
    "id": "start"
  },
  {
    "title": "sandkit.engine.api.heatTransfer",
    "body": "Internal sandkit.engine.api.heatTransfer — temperature diffusion and absorption. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.heatTransfer.absorbAdjacentElements()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Absorb heat from adjacent elements into a cell.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "absorbadjacentelements"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.addTemperature()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Add temperature to a cell or region.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "addtemperature"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.computeDiffusedTemperatures()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Compute diffused temperatures for connected cells.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "computediffusedtemperatures"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.computeEqualizedTemperature()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Compute one equalized temperature across connected cells.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "computeequalizedtemperature"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.consumeTemperatureNear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Consume temperature near a point or cell.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "consumetemperaturenear"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.ensureTemperature()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Ensure a cell has at least the given temperature.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "ensuretemperature"
  },
  {
    "title": "sandkit.engine.api.heatTransfer.equalizeConnected()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Equalize temperature across a connected component.",
    "path": "/api/sandkit.engine.api.heatTransfer",
    "id": "equalizeconnected"
  },
  {
    "title": "sandkit.engine.api.launchers",
    "body": "Internal sandkit.engine.api.launchers — launcher type registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.launchers",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.launchers.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom launcher type.",
    "path": "/api/sandkit.engine.api.launchers",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.lightColorPicker",
    "body": "Internal sandkit.engine.api.lightColorPicker — light color lookup. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.lightColorPicker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.lightColorPicker.getColor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the color on a light structure.",
    "path": "/api/sandkit.engine.api.lightColorPicker",
    "id": "getcolor"
  },
  {
    "title": "sandkit.engine.api.matters",
    "body": "Internal sandkit.engine.api.matters — matter type registration and solid updates. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.matters",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.matters.getMatterTypeFromId()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Resolve a matter type from an id string.",
    "path": "/api/sandkit.engine.api.matters",
    "id": "getmattertypefromid"
  },
  {
    "title": "sandkit.engine.api.matters.register()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom matter type.",
    "path": "/api/sandkit.engine.api.matters",
    "id": "register"
  },
  {
    "title": "sandkit.engine.api.matters.runSolidUpdate()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Run one solid-matter update step.",
    "path": "/api/sandkit.engine.api.matters",
    "id": "runsolidupdate"
  },
  {
    "title": "sandkit.engine.api.misc",
    "body": "Internal sandkit.engine.api.misc — miscellaneous structure behavior registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.misc",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.misc.register()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a miscellaneous structure behavior.",
    "path": "/api/sandkit.engine.api.misc",
    "id": "register"
  },
  {
    "title": "sandkit.engine.api.portals",
    "body": "Internal sandkit.engine.api.portals — portal marker queries. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.portals",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.portals.getMarkers()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return portal markers in the world.",
    "path": "/api/sandkit.engine.api.portals",
    "id": "getmarkers"
  },
  {
    "title": "sandkit.engine.api.prefabData",
    "body": "Internal sandkit.engine.api.prefabData — prefab artifact and metadata lookup. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prefabData.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all prefab data entries.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.prefabData.getAllMetadata()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return metadata for all prefabs.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getallmetadata"
  },
  {
    "title": "sandkit.engine.api.prefabData.getArtifactLocations()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return artifact locations for prefabs.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getartifactlocations"
  },
  {
    "title": "sandkit.engine.api.prefabData.getAtCell()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return prefab data at one grid cell.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getatcell"
  },
  {
    "title": "sandkit.engine.api.prefabData.getMetadata()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return metadata for one prefab.",
    "path": "/api/sandkit.engine.api.prefabData",
    "id": "getmetadata"
  },
  {
    "title": "sandkit.engine.api.prefabDecor",
    "body": "Internal sandkit.engine.api.prefabDecor — prefab decorative placement. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prefabDecor",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prefabDecor.getPlacementByName()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return a decor placement definition by name.",
    "path": "/api/sandkit.engine.api.prefabDecor",
    "id": "getplacementbyname"
  },
  {
    "title": "sandkit.engine.api.prefabDecor.replaceDecor()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Replace decor instances in a region or prefab.",
    "path": "/api/sandkit.engine.api.prefabDecor",
    "id": "replacedecor"
  },
  {
    "title": "sandkit.engine.api.prefabulator",
    "body": "Internal sandkit.engine.api.prefabulator — blueprint structure serialization for prefabs. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prefabulator",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prefabulator.localizeBlueprintStructures()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Convert serialized blueprint structures to world-local coordinates.",
    "path": "/api/sandkit.engine.api.prefabulator",
    "id": "localizeblueprintstructures"
  },
  {
    "title": "sandkit.engine.api.prefabulator.serializeBlueprintStructures()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Serialize blueprint structures for prefab storage.",
    "path": "/api/sandkit.engine.api.prefabulator",
    "id": "serializeblueprintstructures"
  },
  {
    "title": "sandkit.engine.api.prismaline",
    "body": "Internal sandkit.engine.api.prismaline — prismaline resource consume and availability. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prismaline.consume()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Consume prismaline from the player or world.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": "consume"
  },
  {
    "title": "sandkit.engine.api.prismaline.getAvailable()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return available prismaline amount.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": "getavailable"
  },
  {
    "title": "sandkit.engine.api.prismaline.getConsumed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total prismaline consumed so far.",
    "path": "/api/sandkit.engine.api.prismaline",
    "id": "getconsumed"
  },
  {
    "title": "sandkit.engine.api.prismite",
    "body": "Internal sandkit.engine.api.prismite — prismite resource consume and availability. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.prismite.consume()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Consume prismite from the player or world.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": "consume"
  },
  {
    "title": "sandkit.engine.api.prismite.getAvailable()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return available prismite amount.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": "getavailable"
  },
  {
    "title": "sandkit.engine.api.prismite.getConsumed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total prismite consumed so far.",
    "path": "/api/sandkit.engine.api.prismite",
    "id": "getconsumed"
  },
  {
    "title": "sandkit.engine.api.queue",
    "body": "Internal sandkit.engine.api.queue — deferred tick queue with handlers. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.queue",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.queue.enqueue()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Enqueue work to run on a future tick.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "enqueue"
  },
  {
    "title": "sandkit.engine.api.queue.enqueueInTicks()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Enqueue work to run after a tick delay.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "enqueueinticks"
  },
  {
    "title": "sandkit.engine.api.queue.enqueueSkipTick()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Enqueue work that skips the current tick.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "enqueueskiptick"
  },
  {
    "title": "sandkit.engine.api.queue.process()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Process pending queue items for the current tick.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "process"
  },
  {
    "title": "sandkit.engine.api.queue.registerHandler()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a handler for a queue item type.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "registerhandler"
  },
  {
    "title": "sandkit.engine.api.queue.removeByKey()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Remove queued items by key.",
    "path": "/api/sandkit.engine.api.queue",
    "id": "removebykey"
  },
  {
    "title": "sandkit.engine.api.shadows",
    "body": "Internal sandkit.engine.api.shadows — shadow map refresh for regions. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.shadows.refresh()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Refresh shadows for the whole visible area.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refresh"
  },
  {
    "title": "sandkit.engine.api.shadows.refreshRadius()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Refresh shadows within a circular radius.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refreshradius"
  },
  {
    "title": "sandkit.engine.api.shadows.refreshRect()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Refresh shadows within a rectangle.",
    "path": "/api/sandkit.engine.api.shadows",
    "id": "refreshrect"
  },
  {
    "title": "sandkit.engine.api.strataform",
    "body": "Internal sandkit.engine.api.strataform — strataform event triggers and type registration. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.strataform.getDefaultConfig()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the default strataform configuration.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "getdefaultconfig"
  },
  {
    "title": "sandkit.engine.api.strataform.getRegisteredTypes()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all registered strataform types.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "getregisteredtypes"
  },
  {
    "title": "sandkit.engine.api.strataform.registerType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register a custom strataform type.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "registertype"
  },
  {
    "title": "sandkit.engine.api.strataform.trigger()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Trigger a strataform event at a location.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "trigger"
  },
  {
    "title": "sandkit.engine.api.strataform.triggerByType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Trigger a strataform event by type id.",
    "path": "/api/sandkit.engine.api.strataform",
    "id": "triggerbytype"
  },
  {
    "title": "sandkit.engine.api.swarmConsole",
    "body": "Internal sandkit.engine.api.swarmConsole — swarm convergence console state. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.swarmConsole.decrementConvergenceBuffer()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Decrease the convergence buffer by one step.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "decrementconvergencebuffer"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getCrystalMined()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return total crystal mined for swarm consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getcrystalmined"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getDiskRadiusCells()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the disk radius in cells for a console.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getdiskradiuscells"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getEntityType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the entity type used by swarm consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getentitytype"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getNearestConvergence()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the nearest convergence point.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getnearestconvergence"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getPendingConvergence()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the pending convergence target.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getpendingconvergence"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getPlacedConsoles()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all placed swarm console structures.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getplacedconsoles"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.getRadiusPx()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the console effect radius in pixels.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "getradiuspx"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.isSpawnJammed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether swarm spawn is currently jammed.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "isspawnjammed"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.registerEntityType()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Register the entity type for swarm consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "registerentitytype"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Reset convergence buffers on all consoles.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "resetallconvergencebuffers"
  },
  {
    "title": "sandkit.engine.api.swarmConsole.setSpawnJammed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set whether swarm spawn is jammed.",
    "path": "/api/sandkit.engine.api.swarmConsole",
    "id": "setspawnjammed"
  },
  {
    "title": "sandkit.engine.api.sweeperDrone",
    "body": "Internal sandkit.engine.api.sweeperDrone — sweeper drone selection control. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.sweeperDrone",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.sweeperDrone.cancelSelection()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Cancel the active sweeper drone selection.",
    "path": "/api/sandkit.engine.api.sweeperDrone",
    "id": "cancelselection"
  },
  {
    "title": "sandkit.engine.api.teleportZones",
    "body": "Internal sandkit.engine.api.teleportZones — player teleport zone management. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.teleportZones.add()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Add a teleport zone to the world.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "add"
  },
  {
    "title": "sandkit.engine.api.teleportZones.getAll()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return all teleport zones.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "getall"
  },
  {
    "title": "sandkit.engine.api.teleportZones.getAtCell()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the teleport zone at one grid cell.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "getatcell"
  },
  {
    "title": "sandkit.engine.api.teleportZones.getById()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return one teleport zone by id.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "getbyid"
  },
  {
    "title": "sandkit.engine.api.teleportZones.remove()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Remove a teleport zone.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "remove"
  },
  {
    "title": "sandkit.engine.api.teleportZones.spawnDefaultParticles()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Spawn default particles at a teleport zone.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "spawndefaultparticles"
  },
  {
    "title": "sandkit.engine.api.teleportZones.teleportPlayerTo()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Teleport the player to a zone or position.",
    "path": "/api/sandkit.engine.api.teleportZones",
    "id": "teleportplayerto"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild",
    "body": "Internal sandkit.engine.api.tutorialBuild — tutorial build-step constraints and targets. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.areAllTargetsBuilt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether all active tutorial targets are built.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "arealltargetsbuilt"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether all targets in a structure family are built.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "arefamilytargetsbuilt"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether placement is allowed at the active target.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "canplaceatactivetarget"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.getFoundationMoveDests()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return foundation move destination cells for the tutorial step.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "getfoundationmovedests"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.getFoundationMoveSources()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return foundation move source cells for the tutorial step.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "getfoundationmovesources"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.getTargets()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return build targets for the current tutorial step.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "gettargets"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.hasDefinition()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a tutorial build definition exists.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "hasdefinition"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.isStepConstrained()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the current step restricts building.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "isstepconstrained"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.matchesFoundationMove()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a foundation move matches tutorial rules.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "matchesfoundationmove"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.matchesFoundationRemove()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether a foundation remove matches tutorial rules.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "matchesfoundationremove"
  },
  {
    "title": "sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return whether the active target should be protected at a cell.",
    "path": "/api/sandkit.engine.api.tutorialBuild",
    "id": "shouldprotectactivetargetat"
  },
  {
    "title": "sandkit.engine.api.usageTracker",
    "body": "Internal sandkit.engine.api.usageTracker — tool and structure usage statistics. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.usageTracker.clear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Clear recorded usage statistics.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": "clear"
  },
  {
    "title": "sandkit.engine.api.usageTracker.getLatest()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the most recently used item or structure.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": "getlatest"
  },
  {
    "title": "sandkit.engine.api.usageTracker.getMostUsed()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the most frequently used item or structure.",
    "path": "/api/sandkit.engine.api.usageTracker",
    "id": "getmostused"
  },
  {
    "title": "sandkit.engine.api.wall",
    "body": "Internal sandkit.engine.api.wall — wall tile palette and cell data. Internal API. Prefer sandkit.api when a public method exists. Methods use loose stubs; signatures may take game state as the first argument. Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.",
    "path": "/api/sandkit.engine.api.wall",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.wall.getPaletteData()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return wall palette data for rendering.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "getpalettedata"
  },
  {
    "title": "sandkit.engine.api.wall.getWallDataAt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return wall tile data at one cell.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "getwalldataat"
  },
  {
    "title": "sandkit.engine.api.wall.getWallDataSize()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Return the byte size of wall tile data.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "getwalldatasize"
  },
  {
    "title": "sandkit.engine.api.wall.setWallDataAt()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Game state first, then method-specific arguments. args Set wall tile data at one cell.",
    "path": "/api/sandkit.engine.api.wall",
    "id": "setwalldataat"
  },
  {
    "title": "sandkit.engine.api.workerLocal",
    "body": "Internal sandkit.engine.api.workerLocal — per-worker ephemeral key-value storage. Internal API. Prefer sandkit.api when a public method exists. Available on worker threads only. Values do not persist across workers.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": ""
  },
  {
    "title": "sandkit.engine.api.workerLocal.clear()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Remove all keys from worker-local storage.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "clear"
  },
  {
    "title": "sandkit.engine.api.workerLocal.get()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Return a value by key, or undefined when missing.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "get"
  },
  {
    "title": "sandkit.engine.api.workerLocal.getOrInit()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Return a value by key, initializing it when missing.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "getorinit"
  },
  {
    "title": "sandkit.engine.api.workerLocal.set()",
    "body": "Argument Type Description --- --- --- args ...unknown[] Worker-local context first on workers; otherwise game state first, then method-specific arguments. args Store a value by key.",
    "path": "/api/sandkit.engine.api.workerLocal",
    "id": "set"
  },
  {
    "title": "sandkit.engine",
    "body": "Internal sandkit.engine — state-first engine APIs and Retro Console. Runtime paths: sandkit.engine.api. and sandkit.engine.state (same object as sandkit.state). Available on both the main thread (main.js) and worker thread (worker.js). The public sandkit.api surface still differs by runtime. Internal API. Prefer sandkit.api when a public method exists. These declarations are best-effort stubs. There is no guarantee they are complete or correct. - augments - auralite - blueprints - clipboard - colorPicker - coloringTool - conveyors - debug - drones - entities - extensions - factory - foliage - foundationColorPicker - game - heatTransfer - launchers - lightColorPicker - matters - misc - portals - prefabData - prefabDecor - prefabulator - prismaline - prismite - queue - shadows - strataform - swarmConsole - sweeperDrone - teleportZones - tutorialBuild - usageTracker - wall - workerLocal",
    "path": "/api/sandkit.engine",
    "id": ""
  },
  {
    "title": "sandkit.engine",
    "body": "Defined in: sandkit/engine/index.d.ts:132 Internal Host sandkit.engine object (main and worker). Internal API. Prefer sandkit.api when a public method exists. At runtime sandkit.engine.state === sandkit.state. Properties api Defined in: sandkit/engine/index.d.ts:133 state Defined in: sandkit/engine/index.d.ts:134",
    "path": "/api/sandkit.engine",
    "id": "sandkitengine"
  },
  {
    "title": "sandkit.engine.RetroConsoleDisplay",
    "body": "Property Type Description --- --- --- width number height number width height Internal Low-resolution display buffer for a Retro Console game. Methods clearScreen() Defined in: sandkit/engine/retro-console.d.ts:18 Clear the framebuffer. Optional fill value defaults to off. Parameters value? RetroConsolePixel Returns void drawPixel() Defined in: sandkit/engine/retro-console.d.ts:20 Set one pixel in the framebuffer. Parameters x number y number value RetroConsolePixel Returns void",
    "path": "/api/sandkit.engine",
    "id": "retroconsoledisplay"
  },
  {
    "title": "sandkit.engine.RetroConsoleInput",
    "body": "Property Type Description --- --- --- x number y number x y Internal Directional input from the Retro Console controls.",
    "path": "/api/sandkit.engine",
    "id": "retroconsoleinput"
  },
  {
    "title": "sandkit.engine.RetroConsoleGameOptions",
    "body": "Property Type Description --- --- --- width number height number width height Internal Display size options for a registered Retro Console game.",
    "path": "/api/sandkit.engine",
    "id": "retroconsolegameoptions"
  },
  {
    "title": "sandkit.engine.RetroConsoleGame",
    "body": "Property Type Description --- --- --- id string name string options? RetroConsoleGameOptions id name options? Internal Retro Console game definition passed to RetroConsoleApi.registerGame. Type Parameters TState TState = unknown Methods init() Defined in: sandkit/engine/retro-console.d.ts:41 Create initial game state and draw the first frame. Parameters display RetroConsoleDisplay Returns TState update() Defined in: sandkit/engine/retro-console.d.ts:43 Advance one frame and return updated game state. Parameters display RetroConsoleDisplay state TState Returns TState handleInput()? Defined in: sandkit/engine/retro-console.d.ts:45 Handle player input when provided. Parameters display RetroConsoleDisplay state TState input RetroConsoleInput Returns TState",
    "path": "/api/sandkit.engine",
    "id": "retroconsolegame"
  },
  {
    "title": "sandkit.engine.RetroConsoleApi",
    "body": "Internal sandkit.engine.api.retroConsole registration API. Methods registerGame() Defined in: sandkit/engine/retro-console.d.ts:51 Register a Retro Console mini-game. Type Parameters TState TState Parameters game RetroConsoleGame\\ Returns void",
    "path": "/api/sandkit.engine",
    "id": "retroconsoleapi"
  },
  {
    "title": "SandkitEngineApi",
    "body": "Defined in: sandkit/engine/index.d.ts:32 Internal Composed sandkit.engine.api shape. Overlap namespaces mirror sandkit.api with state-first signatures. Engine-only namespaces are declared under api/. Properties action Defined in: sandkit/engine/index.d.ts:34 authorization Defined in: sandkit/engine/index.d.ts:35 building Defined in: sandkit/engine/index.d.ts:36 camera Defined in: sandkit/engine/index.d.ts:37 collector Defined in: sandkit/engine/index.d.ts:38 constants Defined in: sandkit/engine/index.d.ts:39 cooldown Defined in: sandkit/engine/index.d.ts:40 discoveries Defined in: sandkit/engine/index.d.ts:41 effects Defined in: sandkit/engine/index.d.ts:42 elements Defined in: sandkit/engine/index.d.ts:43 energy Defined in: sandkit/engine/index.d.ts:44 events Defined in: sandkit/engine/index.d.ts:45 excavation Defined in: sandkit/engine/index.d.ts:46 fire Defined in: sandkit/engine/index.d.ts:47 grid Defined in: sandkit/engine/index.d.ts:48 hooks Defined in: sandkit/engine/index.d.ts:49 i18n Defined in: sandkit/engine/index.d.ts:50 input Defined in: sandkit/engine/index.d.ts:51 items Defined in: sandkit/engine/index.d.ts:52 lights Defined in: sandkit/engine/index.d.ts:53 maps Defined in: sandkit/engine/index.d.ts:54 patterns Defined in: sandkit/engine/index.d.ts:55 player Defined in: sandkit/engine/index.d.ts:56 processing Defined in: sandkit/engine/index.d.ts:57 progression Defined in: sandkit/engine/index.d.ts:58 projectiles Defined in: sandkit/engine/index.d.ts:59 random Defined in: sandkit/engine/index.d.ts:60 raycast Defined in: sandkit/engine/index.d.ts:61 reactions Defined in: sandkit/engine/index.d.ts:62 rendering Defined in: sandkit/engine/index.d.ts:63 resources Defined in: sandkit/engine/index.d.ts:64 scene Defined in: sandkit/engine/index.d.ts:65 schedule Defined in: sandkit/engine/index.d.ts:66 signals Defined in: sandkit/engine/index.d.ts:67 sound Defined in: sandkit/engine/index.d.ts:68 sprites Defined in: sandkit/engine/index.d.ts:69 storage Defined in: sandkit/engine/index.d.ts:70 structures Defined in: sandkit/engine/index.d.ts:71 tech Defined in: sandkit/engine/index.d.ts:72 terrains Defined in: sandkit/engine/index.d.ts:73 tools Defined in: sandkit/engine/index.d.ts:74 triggers Defined in: sandkit/engine/index.d.ts:75 ui Defined in: sandkit/engine/index.d.ts:76 upgrades Defined in: sandkit/engine/index.d.ts:77 utils Defined in: sandkit/engine/index.d.ts:78 workers Defined in: sandkit/engine/index.d.ts:79 world Defined in: sandkit/engine/index.d.ts:80 augments Defined in: sandkit/engine/index.d.ts:83 auralite Defined in: sandkit/engine/index.d.ts:84 blueprints Defined in: sandkit/engine/index.d.ts:85 clipboard Defined in: sandkit/engine/index.d.ts:86 colorPicker Defined in: sandkit/engine/index.d.ts:87 coloringTool Defined in: sandkit/engine/index.d.ts:88 conveyors Defined in: sandkit/engine/index.d.ts:89 debug Defined in: sandkit/engine/index.d.ts:90 drones Defined in: sandkit/engine/index.d.ts:91 entities Defined in: sandkit/engine/index.d.ts:92 extensions Defined in: sandkit/engine/index.d.ts:93 factory Defined in: sandkit/engine/index.d.ts:94 foliage Defined in: sandkit/engine/index.d.ts:95 foundationColorPicker Defined in: sandkit/engine/index.d.ts:96 game Defined in: sandkit/engine/index.d.ts:97 heatTransfer Defined in: sandkit/engine/index.d.ts:98 launchers Defined in: sandkit/engine/index.d.ts:99 lightColorPicker Defined in: sandkit/engine/index.d.ts:100 matters Defined in: sandkit/engine/index.d.ts:101 misc Defined in: sandkit/engine/index.d.ts:102 portals Defined in: sandkit/engine/index.d.ts:103 prefabData Defined in: sandkit/engine/index.d.ts:104 prefabDecor Defined in: sandkit/engine/index.d.ts:105 prefabulator Defined in: sandkit/engine/index.d.ts:106 prismaline Defined in: sandkit/engine/index.d.ts:107 prismite Defined in: sandkit/engine/index.d.ts:108 queue Defined in: sandkit/engine/index.d.ts:109 shadows Defined in: sandkit/engine/index.d.ts:110 strataform Defined in: sandkit/engine/index.d.ts:111 swarmConsole Defined in: sandkit/engine/index.d.ts:112 sweeperDrone Defined in: sandkit/engine/index.d.ts:113 teleportZones Defined in: sandkit/engine/index.d.ts:114 tutorialBuild Defined in: sandkit/engine/index.d.ts:115 usageTracker Defined in: sandkit/engine/index.d.ts:116 wall Defined in: sandkit/engine/index.d.ts:117 workerLocal Defined in: sandkit/engine/index.d.ts:118 config Defined in: sandkit/engine/index.d.ts:119 extend Defined in: sandkit/engine/index.d.ts:120 retroConsole Defined in: sandkit/engine/index.d.ts:121",
    "path": "/api/sandkit.engine",
    "id": "sandkitengineapi"
  },
  {
    "title": "sandkit.engine.RetroConsolePixel",
    "body": "Internal Pixel value for the Retro Console framebuffer.",
    "path": "/api/sandkit.engine",
    "id": "retroconsolepixel"
  },
  {
    "title": "SandkitState",
    "body": "Defined in: sandkit/engine/state.d.ts:12 Internal Live game state exposed on sandkit.engine.state. Properties environment Defined in: sandkit/engine/state.d.ts:13 Index Signature \\[key: string\\]: unknown context multithreading sandkit Defined in: sandkit/engine/state.d.ts:18 Index Signature \\[key: string\\]: unknown events gameReady graphics hooks keyBindings mods registeredLauncherTypes session Defined in: sandkit/engine/state.d.ts:28 shared Defined in: sandkit/engine/state.d.ts:29 store Defined in: sandkit/engine/state.d.ts:30",
    "path": "/api/sandkit.engine",
    "id": "sandkitstate"
  },
  {
    "title": "sandkit.enums.AbilityType",
    "body": "Defined in: sandkit/enums/index.d.ts:9 Item ability categories (dig, shoot, spray, laser).",
    "path": "/api/sandkit.enums.AbilityType",
    "id": ""
  },
  {
    "title": "sandkit.enums.AbilityType.Dig",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "dig"
  },
  {
    "title": "sandkit.enums.AbilityType.Shoot",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "shoot"
  },
  {
    "title": "sandkit.enums.AbilityType.Spray",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "spray"
  },
  {
    "title": "sandkit.enums.AbilityType.Laser",
    "body": "",
    "path": "/api/sandkit.enums.AbilityType",
    "id": "laser"
  },
  {
    "title": "sandkit.enums.ActionState",
    "body": "Defined in: sandkit/enums/index.d.ts:17 Phases of a held or repeated player action.",
    "path": "/api/sandkit.enums.ActionState",
    "id": ""
  },
  {
    "title": "sandkit.enums.ActionState.Start",
    "body": "",
    "path": "/api/sandkit.enums.ActionState",
    "id": "start"
  },
  {
    "title": "sandkit.enums.ActionState.Active",
    "body": "",
    "path": "/api/sandkit.enums.ActionState",
    "id": "active"
  },
  {
    "title": "sandkit.enums.ActionState.End",
    "body": "",
    "path": "/api/sandkit.enums.ActionState",
    "id": "end"
  },
  {
    "title": "sandkit.enums.ActionType",
    "body": "Defined in: sandkit/enums/index.d.ts:24 High-level action channel (weapon, building, tool, mod).",
    "path": "/api/sandkit.enums.ActionType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ActionType.Weapon",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "weapon"
  },
  {
    "title": "sandkit.enums.ActionType.Building",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "building"
  },
  {
    "title": "sandkit.enums.ActionType.Tool",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "tool"
  },
  {
    "title": "sandkit.enums.ActionType.Mod",
    "body": "",
    "path": "/api/sandkit.enums.ActionType",
    "id": "mod"
  },
  {
    "title": "sandkit.enums.AuthorizationType",
    "body": "Defined in: sandkit/enums/index.d.ts:32 Zone rules that restrict player abilities.",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": ""
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoJetpack",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "nojetpack"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoGrab",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "nograb"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoBuild",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "nobuild"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoTool",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "notool"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoExcavation",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "noexcavation"
  },
  {
    "title": "sandkit.enums.AuthorizationType.NoToolExceptFlamethrower",
    "body": "",
    "path": "/api/sandkit.enums.AuthorizationType",
    "id": "notoolexceptflamethrower"
  },
  {
    "title": "sandkit.enums.BuildMode",
    "body": "Defined in: sandkit/enums/index.d.ts:42 Linear vs rectangular structure placement.",
    "path": "/api/sandkit.enums.BuildMode",
    "id": ""
  },
  {
    "title": "sandkit.enums.BuildMode.Linear",
    "body": "",
    "path": "/api/sandkit.enums.BuildMode",
    "id": "linear"
  },
  {
    "title": "sandkit.enums.BuildMode.Rectangular",
    "body": "",
    "path": "/api/sandkit.enums.BuildMode",
    "id": "rectangular"
  },
  {
    "title": "sandkit.enums.BuildingClearance",
    "body": "Defined in: sandkit/enums/index.d.ts:48 Result of a build placement check.",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": ""
  },
  {
    "title": "sandkit.enums.BuildingClearance.Available",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "available"
  },
  {
    "title": "sandkit.enums.BuildingClearance.FullyBlocked",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "fullyblocked"
  },
  {
    "title": "sandkit.enums.BuildingClearance.PartiallyBlocked",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "partiallyblocked"
  },
  {
    "title": "sandkit.enums.BuildingClearance.CanBeReplaced",
    "body": "",
    "path": "/api/sandkit.enums.BuildingClearance",
    "id": "canbereplaced"
  },
  {
    "title": "sandkit.enums.CellType",
    "body": "Defined in: sandkit/enums/index.d.ts:56 Terrain / special cell kinds in the simulation grid.",
    "path": "/api/sandkit.enums.CellType",
    "id": ""
  },
  {
    "title": "sandkit.enums.CellType.Empty",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "empty"
  },
  {
    "title": "sandkit.enums.CellType.Element",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "element"
  },
  {
    "title": "sandkit.enums.CellType.Dirt",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "dirt"
  },
  {
    "title": "sandkit.enums.CellType.SporeSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "sporesoil"
  },
  {
    "title": "sandkit.enums.CellType.Fog",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fog"
  },
  {
    "title": "sandkit.enums.CellType.FogJetpackBlock",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fogjetpackblock"
  },
  {
    "title": "sandkit.enums.CellType.FogWater",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fogwater"
  },
  {
    "title": "sandkit.enums.CellType.FreezingIceSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "freezingicesoil"
  },
  {
    "title": "sandkit.enums.CellType.Divider",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "divider"
  },
  {
    "title": "sandkit.enums.CellType.Grass",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "grass"
  },
  {
    "title": "sandkit.enums.CellType.Moss",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "moss"
  },
  {
    "title": "sandkit.enums.CellType.GoldSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "goldsoil"
  },
  {
    "title": "sandkit.enums.CellType.Petal",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "petal"
  },
  {
    "title": "sandkit.enums.CellType.FogLava",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "foglava"
  },
  {
    "title": "sandkit.enums.CellType.Fluxite",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "fluxite"
  },
  {
    "title": "sandkit.enums.CellType.Block",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "block"
  },
  {
    "title": "sandkit.enums.CellType.SlidingBlock",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "slidingblock"
  },
  {
    "title": "sandkit.enums.CellType.SlidingBlockLeft",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "slidingblockleft"
  },
  {
    "title": "sandkit.enums.CellType.SlidingBlockRight",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "slidingblockright"
  },
  {
    "title": "sandkit.enums.CellType.ConveyorLeft",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "conveyorleft"
  },
  {
    "title": "sandkit.enums.CellType.ConveyorRight",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "conveyorright"
  },
  {
    "title": "sandkit.enums.CellType.ShakerLeft",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "shakerleft"
  },
  {
    "title": "sandkit.enums.CellType.ShakerRight",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "shakerright"
  },
  {
    "title": "sandkit.enums.CellType.Stone",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "stone"
  },
  {
    "title": "sandkit.enums.CellType.VelocitySoaker",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "velocitysoaker"
  },
  {
    "title": "sandkit.enums.CellType.Ice",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "ice"
  },
  {
    "title": "sandkit.enums.CellType.Grower",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "grower"
  },
  {
    "title": "sandkit.enums.CellType.NascentWater",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "nascentwater"
  },
  {
    "title": "sandkit.enums.CellType.SandiumSoil",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "sandiumsoil"
  },
  {
    "title": "sandkit.enums.CellType.Obsidian",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "obsidian"
  },
  {
    "title": "sandkit.enums.CellType.Crackstone",
    "body": "",
    "path": "/api/sandkit.enums.CellType",
    "id": "crackstone"
  },
  {
    "title": "sandkit.enums.ComponentId",
    "body": "Defined in: sandkit/enums/index.d.ts:91 UI component ids for HUD and menu routing.",
    "path": "/api/sandkit.enums.ComponentId",
    "id": ""
  },
  {
    "title": "sandkit.enums.ComponentId.Hotbar",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "hotbar"
  },
  {
    "title": "sandkit.enums.ComponentId.SoundBoxConfig",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "soundboxconfig"
  },
  {
    "title": "sandkit.enums.ComponentId.Root",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "root"
  },
  {
    "title": "sandkit.enums.ComponentId.Menu",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "menu"
  },
  {
    "title": "sandkit.enums.ComponentId.Management",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "management"
  },
  {
    "title": "sandkit.enums.ComponentId.FilterConfig",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "filterconfig"
  },
  {
    "title": "sandkit.enums.ComponentId.Resources",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "resources"
  },
  {
    "title": "sandkit.enums.ComponentId.TechTree",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "techtree"
  },
  {
    "title": "sandkit.enums.ComponentId.Tutorial",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "tutorial"
  },
  {
    "title": "sandkit.enums.ComponentId.Loader",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "loader"
  },
  {
    "title": "sandkit.enums.ComponentId.Options",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "options"
  },
  {
    "title": "sandkit.enums.ComponentId.ShortcutHelper",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "shortcuthelper"
  },
  {
    "title": "sandkit.enums.ComponentId.Upgrades",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "upgrades"
  },
  {
    "title": "sandkit.enums.ComponentId.Tooltip",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "tooltip"
  },
  {
    "title": "sandkit.enums.ComponentId.Notifications",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "notifications"
  },
  {
    "title": "sandkit.enums.ComponentId.Objectives",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "objectives"
  },
  {
    "title": "sandkit.enums.ComponentId.DroneAdminList",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "droneadminlist"
  },
  {
    "title": "sandkit.enums.ComponentId.HotbarOverlays",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "hotbaroverlays"
  },
  {
    "title": "sandkit.enums.ComponentId.IntroScreen",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "introscreen"
  },
  {
    "title": "sandkit.enums.ComponentId.StoryNotifications",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "storynotifications"
  },
  {
    "title": "sandkit.enums.ComponentId.FactoryProgress",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "factoryprogress"
  },
  {
    "title": "sandkit.enums.ComponentId.Dialogs",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "dialogs"
  },
  {
    "title": "sandkit.enums.ComponentId.GlobalOverlays",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "globaloverlays"
  },
  {
    "title": "sandkit.enums.ComponentId.Lexicon",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "lexicon"
  },
  {
    "title": "sandkit.enums.ComponentId.ModsScreen",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "modsscreen"
  },
  {
    "title": "sandkit.enums.ComponentId.CustomMapsScreen",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "custommapsscreen"
  },
  {
    "title": "sandkit.enums.ComponentId.CinematicPanel",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "cinematicpanel"
  },
  {
    "title": "sandkit.enums.ComponentId.Feedback",
    "body": "",
    "path": "/api/sandkit.enums.ComponentId",
    "id": "feedback"
  },
  {
    "title": "sandkit.enums.DroneType",
    "body": "Defined in: sandkit/enums/index.d.ts:123 Autonomous drone kinds.",
    "path": "/api/sandkit.enums.DroneType",
    "id": ""
  },
  {
    "title": "sandkit.enums.DroneType.Digger",
    "body": "",
    "path": "/api/sandkit.enums.DroneType",
    "id": "digger"
  },
  {
    "title": "sandkit.enums.DroneType.Hauler",
    "body": "",
    "path": "/api/sandkit.enums.DroneType",
    "id": "hauler"
  },
  {
    "title": "sandkit.enums.ElementType",
    "body": "Defined in: sandkit/enums/index.d.ts:129 Built-in element type ids (prefer API string ids when registering mods).",
    "path": "/api/sandkit.enums.ElementType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ElementType.Sand",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "sand"
  },
  {
    "title": "sandkit.enums.ElementType.Particle",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "particle"
  },
  {
    "title": "sandkit.enums.ElementType.Water",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "water"
  },
  {
    "title": "sandkit.enums.ElementType.WetSand",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "wetsand"
  },
  {
    "title": "sandkit.enums.ElementType.Sandium",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "sandium"
  },
  {
    "title": "sandkit.enums.ElementType.Residue",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "residue"
  },
  {
    "title": "sandkit.enums.ElementType.Gold",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "gold"
  },
  {
    "title": "sandkit.enums.ElementType.Gloom",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "gloom"
  },
  {
    "title": "sandkit.enums.ElementType.Shake",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "shake"
  },
  {
    "title": "sandkit.enums.ElementType.Steam",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "steam"
  },
  {
    "title": "sandkit.enums.ElementType.Fire",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "fire"
  },
  {
    "title": "sandkit.enums.ElementType.FreezingIce",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "freezingice"
  },
  {
    "title": "sandkit.enums.ElementType.Flame",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "flame"
  },
  {
    "title": "sandkit.enums.ElementType.BurntResidue",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "burntresidue"
  },
  {
    "title": "sandkit.enums.ElementType.Seed",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "seed"
  },
  {
    "title": "sandkit.enums.ElementType.WetSeed",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "wetseed"
  },
  {
    "title": "sandkit.enums.ElementType.Seedling",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "seedling"
  },
  {
    "title": "sandkit.enums.ElementType.Petalium",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "petalium"
  },
  {
    "title": "sandkit.enums.ElementType.Lava",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "lava"
  },
  {
    "title": "sandkit.enums.ElementType.Basalt",
    "body": "",
    "path": "/api/sandkit.enums.ElementType",
    "id": "basalt"
  },
  {
    "title": "sandkit.enums.ItemId",
    "body": "Defined in: sandkit/enums/index.d.ts:153 Built-in hotbar item ids.",
    "path": "/api/sandkit.enums.ItemId",
    "id": ""
  },
  {
    "title": "sandkit.enums.ItemId.Shovel",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "shovel"
  },
  {
    "title": "sandkit.enums.ItemId.Grabber",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "grabber"
  },
  {
    "title": "sandkit.enums.ItemId.Demolisher",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "demolisher"
  },
  {
    "title": "sandkit.enums.ItemId.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.ItemId.Vacuum",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "vacuum"
  },
  {
    "title": "sandkit.enums.ItemId.Gun",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "gun"
  },
  {
    "title": "sandkit.enums.ItemId.Copier",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "copier"
  },
  {
    "title": "sandkit.enums.ItemId.RocketLauncher",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "rocketlauncher"
  },
  {
    "title": "sandkit.enums.ItemId.Digger",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "digger"
  },
  {
    "title": "sandkit.enums.ItemId.Shotgun",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "shotgun"
  },
  {
    "title": "sandkit.enums.ItemId.Teleporter",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "teleporter"
  },
  {
    "title": "sandkit.enums.ItemId.Flamethrower",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "flamethrower"
  },
  {
    "title": "sandkit.enums.ItemId.PipeRemover",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "piperemover"
  },
  {
    "title": "sandkit.enums.ItemId.Hauler",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "hauler"
  },
  {
    "title": "sandkit.enums.ItemId.Cryoblaster",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "cryoblaster"
  },
  {
    "title": "sandkit.enums.ItemId.MegaShotgun",
    "body": "",
    "path": "/api/sandkit.enums.ItemId",
    "id": "megashotgun"
  },
  {
    "title": "sandkit.enums.ItemType",
    "body": "Defined in: sandkit/enums/index.d.ts:173 Item category (weapon, tool, consumable, mod).",
    "path": "/api/sandkit.enums.ItemType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ItemType.Weapon",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "weapon"
  },
  {
    "title": "sandkit.enums.ItemType.Tool",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "tool"
  },
  {
    "title": "sandkit.enums.ItemType.Consumable",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "consumable"
  },
  {
    "title": "sandkit.enums.ItemType.Mod",
    "body": "",
    "path": "/api/sandkit.enums.ItemType",
    "id": "mod"
  },
  {
    "title": "sandkit.enums.KeyBinding",
    "body": "Defined in: sandkit/enums/index.d.ts:181 Named input bindings (settings keys).",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": ""
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenBuildMenu",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "openbuildmenu"
  },
  {
    "title": "sandkit.enums.KeyBinding.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.KeyBinding.Escape",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "escape"
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenTechTree",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "opentechtree"
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenInventory",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "openinventory"
  },
  {
    "title": "sandkit.enums.KeyBinding.ReverseBuildDirection",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "reversebuilddirection"
  },
  {
    "title": "sandkit.enums.KeyBinding.Marquee",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "marquee"
  },
  {
    "title": "sandkit.enums.KeyBinding.Pause",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "pause"
  },
  {
    "title": "sandkit.enums.KeyBinding.Copy",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "copy"
  },
  {
    "title": "sandkit.enums.KeyBinding.Paste",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "paste"
  },
  {
    "title": "sandkit.enums.KeyBinding.Flip",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "flip"
  },
  {
    "title": "sandkit.enums.KeyBinding.Delete",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "delete"
  },
  {
    "title": "sandkit.enums.KeyBinding.PauseCamera",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "pausecamera"
  },
  {
    "title": "sandkit.enums.KeyBinding.OpenUpgrades",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "openupgrades"
  },
  {
    "title": "sandkit.enums.KeyBinding.BuildMode",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "buildmode"
  },
  {
    "title": "sandkit.enums.KeyBinding.Demolish",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "demolish"
  },
  {
    "title": "sandkit.enums.KeyBinding.Hover",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "hover"
  },
  {
    "title": "sandkit.enums.KeyBinding.Ruler",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "ruler"
  },
  {
    "title": "sandkit.enums.KeyBinding.Left",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "left"
  },
  {
    "title": "sandkit.enums.KeyBinding.Right",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "right"
  },
  {
    "title": "sandkit.enums.KeyBinding.Boost",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "boost"
  },
  {
    "title": "sandkit.enums.KeyBinding.Descend",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "descend"
  },
  {
    "title": "sandkit.enums.KeyBinding.SprintBoost",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "sprintboost"
  },
  {
    "title": "sandkit.enums.KeyBinding.OverrideReplaceStructures",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "overridereplacestructures"
  },
  {
    "title": "sandkit.enums.KeyBinding.QuickSave",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "quicksave"
  },
  {
    "title": "sandkit.enums.KeyBinding.QuickLoad",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "quickload"
  },
  {
    "title": "sandkit.enums.KeyBinding.ToggleGameHud",
    "body": "",
    "path": "/api/sandkit.enums.KeyBinding",
    "id": "togglegamehud"
  },
  {
    "title": "sandkit.enums.KeyState",
    "body": "Defined in: sandkit/enums/index.d.ts:212 Key transition state for input polling.",
    "path": "/api/sandkit.enums.KeyState",
    "id": ""
  },
  {
    "title": "sandkit.enums.KeyState.Up",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "up"
  },
  {
    "title": "sandkit.enums.KeyState.Down",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "down"
  },
  {
    "title": "sandkit.enums.KeyState.Pressed",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "pressed"
  },
  {
    "title": "sandkit.enums.KeyState.Released",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "released"
  },
  {
    "title": "sandkit.enums.KeyState.All",
    "body": "",
    "path": "/api/sandkit.enums.KeyState",
    "id": "all"
  },
  {
    "title": "sandkit.enums.MatterType",
    "body": "Defined in: sandkit/enums/index.d.ts:221 Physical behaviour category for elements (mirrors shared API enum).",
    "path": "/api/sandkit.enums.MatterType",
    "id": ""
  },
  {
    "title": "sandkit.enums.MatterType.Solid",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "solid"
  },
  {
    "title": "sandkit.enums.MatterType.Liquid",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "liquid"
  },
  {
    "title": "sandkit.enums.MatterType.Particle",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "particle"
  },
  {
    "title": "sandkit.enums.MatterType.Gas",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "gas"
  },
  {
    "title": "sandkit.enums.MatterType.Static",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "static"
  },
  {
    "title": "sandkit.enums.MatterType.Slushy",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "slushy"
  },
  {
    "title": "sandkit.enums.MatterType.Wisp",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "wisp"
  },
  {
    "title": "sandkit.enums.MatterType.Powder",
    "body": "",
    "path": "/api/sandkit.enums.MatterType",
    "id": "powder"
  },
  {
    "title": "sandkit.enums.PickupType",
    "body": "Defined in: sandkit/enums/index.d.ts:413 Pickups and interactable world items.",
    "path": "/api/sandkit.enums.PickupType",
    "id": ""
  },
  {
    "title": "sandkit.enums.PickupType.Artifact",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "artifact"
  },
  {
    "title": "sandkit.enums.PickupType.GlyphKey",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "glyphkey"
  },
  {
    "title": "sandkit.enums.PickupType.Stratacore",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "stratacore"
  },
  {
    "title": "sandkit.enums.PickupType.Orb",
    "body": "",
    "path": "/api/sandkit.enums.PickupType",
    "id": "orb"
  },
  {
    "title": "sandkit.enums.ProjectileType",
    "body": "Defined in: sandkit/enums/index.d.ts:233 Projectile kinds spawned by weapons and tools.",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ProjectileType.Bullet",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "bullet"
  },
  {
    "title": "sandkit.enums.ProjectileType.Rocket",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "rocket"
  },
  {
    "title": "sandkit.enums.ProjectileType.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.ProjectileType.Fire",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "fire"
  },
  {
    "title": "sandkit.enums.ProjectileType.Digger",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "digger"
  },
  {
    "title": "sandkit.enums.ProjectileType.Mod",
    "body": "",
    "path": "/api/sandkit.enums.ProjectileType",
    "id": "mod"
  },
  {
    "title": "sandkit.enums.ReloadType",
    "body": "Defined in: sandkit/enums/index.d.ts:243 Weapon reload behaviour.",
    "path": "/api/sandkit.enums.ReloadType",
    "id": ""
  },
  {
    "title": "sandkit.enums.ReloadType.Clip",
    "body": "",
    "path": "/api/sandkit.enums.ReloadType",
    "id": "clip"
  },
  {
    "title": "sandkit.enums.ReloadType.Single",
    "body": "",
    "path": "/api/sandkit.enums.ReloadType",
    "id": "single"
  },
  {
    "title": "sandkit.enums.ReloadType.OverTime",
    "body": "",
    "path": "/api/sandkit.enums.ReloadType",
    "id": "overtime"
  },
  {
    "title": "sandkit.enums.Scene",
    "body": "Defined in: sandkit/enums/index.d.ts:250 Top-level game scene (menu, intro, deploy, in-game).",
    "path": "/api/sandkit.enums.Scene",
    "id": ""
  },
  {
    "title": "sandkit.enums.Scene.MainMenu",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "mainmenu"
  },
  {
    "title": "sandkit.enums.Scene.Intro",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "intro"
  },
  {
    "title": "sandkit.enums.Scene.Deploy",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "deploy"
  },
  {
    "title": "sandkit.enums.Scene.Game",
    "body": "",
    "path": "/api/sandkit.enums.Scene",
    "id": "game"
  },
  {
    "title": "sandkit.enums.StructureType",
    "body": "Defined in: sandkit/enums/index.d.ts:258 Built-in structure type ids.",
    "path": "/api/sandkit.enums.StructureType",
    "id": ""
  },
  {
    "title": "sandkit.enums.StructureType.ConveyorLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "conveyorleft"
  },
  {
    "title": "sandkit.enums.StructureType.ConveyorRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "conveyorright"
  },
  {
    "title": "sandkit.enums.StructureType.ShakerLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "shakerleft"
  },
  {
    "title": "sandkit.enums.StructureType.ShakerRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "shakerright"
  },
  {
    "title": "sandkit.enums.StructureType.LauncherUp",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "launcherup"
  },
  {
    "title": "sandkit.enums.StructureType.LauncherLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "launcherleft"
  },
  {
    "title": "sandkit.enums.StructureType.LauncherRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "launcherright"
  },
  {
    "title": "sandkit.enums.StructureType.SplitterLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "splitterleft"
  },
  {
    "title": "sandkit.enums.StructureType.SplitterRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "splitterright"
  },
  {
    "title": "sandkit.enums.StructureType.Dropper",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "dropper"
  },
  {
    "title": "sandkit.enums.StructureType.Foundation",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundation"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationAngledLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationangledleft"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationTriangleLeftDel",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationtriangleleftdel"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationAngledRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationangledright"
  },
  {
    "title": "sandkit.enums.StructureType.FoundationTriangleRightDel",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "foundationtrianglerightdel"
  },
  {
    "title": "sandkit.enums.StructureType.Collector",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "collector"
  },
  {
    "title": "sandkit.enums.StructureType.FilterLeft",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "filterleft"
  },
  {
    "title": "sandkit.enums.StructureType.FilterRight",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "filterright"
  },
  {
    "title": "sandkit.enums.StructureType.SlidingFoundation",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "slidingfoundation"
  },
  {
    "title": "sandkit.enums.StructureType.VelocitySoaker",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "velocitysoaker"
  },
  {
    "title": "sandkit.enums.StructureType.Grower",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "grower"
  },
  {
    "title": "sandkit.enums.StructureType.SoundBox",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "soundbox"
  },
  {
    "title": "sandkit.enums.StructureType.Pipe",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "pipe"
  },
  {
    "title": "sandkit.enums.StructureType.Pump",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "pump"
  },
  {
    "title": "sandkit.enums.StructureType.LiquidVent",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "liquidvent"
  },
  {
    "title": "sandkit.enums.StructureType.Light",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "light"
  },
  {
    "title": "sandkit.enums.StructureType.FluxEmanator",
    "body": "",
    "path": "/api/sandkit.enums.StructureType",
    "id": "fluxemanator"
  },
  {
    "title": "sandkit.enums.Tech",
    "body": "Defined in: sandkit/enums/index.d.ts:289 Tech tree node ids (mixed numeric and string keys).",
    "path": "/api/sandkit.enums.Tech",
    "id": ""
  },
  {
    "title": "sandkit.enums.Tech.Shaker",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "shaker"
  },
  {
    "title": "sandkit.enums.Tech.Conveyors",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "conveyors"
  },
  {
    "title": "sandkit.enums.Tech.Guns1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns1"
  },
  {
    "title": "sandkit.enums.Tech.Filters1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters1"
  },
  {
    "title": "sandkit.enums.Tech.Flamethrower",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "flamethrower"
  },
  {
    "title": "sandkit.enums.Tech.Gun",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "gun"
  },
  {
    "title": "sandkit.enums.Tech.KineticPress",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "kineticpress"
  },
  {
    "title": "sandkit.enums.Tech.Guns2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns2"
  },
  {
    "title": "sandkit.enums.Tech.Drones1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones1"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading2"
  },
  {
    "title": "sandkit.enums.Tech.Filters2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters2"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading3"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading4"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading5",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading5"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading6"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading7"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading8",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading8"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading9",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading9"
  },
  {
    "title": "sandkit.enums.Tech.Upgrading10",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "upgrading10"
  },
  {
    "title": "sandkit.enums.Tech.PlanterBox",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "planterbox"
  },
  {
    "title": "sandkit.enums.Tech.Thermo",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "thermo"
  },
  {
    "title": "sandkit.enums.Tech.Rocket",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "rocket"
  },
  {
    "title": "sandkit.enums.Tech.Pipes",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes"
  },
  {
    "title": "sandkit.enums.Tech.StaticLights",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "staticlights"
  },
  {
    "title": "sandkit.enums.Tech.Drones2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones2"
  },
  {
    "title": "sandkit.enums.Tech.Smelter",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "smelter"
  },
  {
    "title": "sandkit.enums.Tech.Tools4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools4"
  },
  {
    "title": "sandkit.enums.Tech.Guns3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns3"
  },
  {
    "title": "sandkit.enums.Tech.Pipes2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes2"
  },
  {
    "title": "sandkit.enums.Tech.ConveyorsMk2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "conveyorsmk2"
  },
  {
    "title": "sandkit.enums.Tech.Lights2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "lights2"
  },
  {
    "title": "sandkit.enums.Tech.Refining6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "refining6"
  },
  {
    "title": "sandkit.enums.Tech.Refining7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "refining7"
  },
  {
    "title": "sandkit.enums.Tech.Guns4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns4"
  },
  {
    "title": "sandkit.enums.Tech.Guns5",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "guns5"
  },
  {
    "title": "sandkit.enums.Tech.Tools5",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools5"
  },
  {
    "title": "sandkit.enums.Tech.Tools6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools6"
  },
  {
    "title": "sandkit.enums.Tech.Filters3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters3"
  },
  {
    "title": "sandkit.enums.Tech.Filters4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters4"
  },
  {
    "title": "sandkit.enums.Tech.Pipes3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes3"
  },
  {
    "title": "sandkit.enums.Tech.Pipes4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "pipes4"
  },
  {
    "title": "sandkit.enums.Tech.Logistics3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logistics3"
  },
  {
    "title": "sandkit.enums.Tech.Logistics4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logistics4"
  },
  {
    "title": "sandkit.enums.Tech.Lights3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "lights3"
  },
  {
    "title": "sandkit.enums.Tech.Lights4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "lights4"
  },
  {
    "title": "sandkit.enums.Tech.Drones3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones3"
  },
  {
    "title": "sandkit.enums.Tech.Drones4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drones4"
  },
  {
    "title": "sandkit.enums.Tech.Alien",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alien"
  },
  {
    "title": "sandkit.enums.Tech.Electricity",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "electricity"
  },
  {
    "title": "sandkit.enums.Tech.AlienCore",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "aliencore"
  },
  {
    "title": "sandkit.enums.Tech.Emanators1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "emanators1"
  },
  {
    "title": "sandkit.enums.Tech.AlienPlasmaConduits",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienplasmaconduits"
  },
  {
    "title": "sandkit.enums.Tech.AlienQuantumMatrix",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienquantummatrix"
  },
  {
    "title": "sandkit.enums.Tech.AlienPlasmaCore",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienplasmacore"
  },
  {
    "title": "sandkit.enums.Tech.AlienVoidEngine",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "alienvoidengine"
  },
  {
    "title": "sandkit.enums.Tech.FlareGun",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "flaregun"
  },
  {
    "title": "sandkit.enums.Tech.Sweeper",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "sweeper"
  },
  {
    "title": "sandkit.enums.Tech.Utilities3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "utilities3"
  },
  {
    "title": "sandkit.enums.Tech.Cryoblaster",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "cryoblaster"
  },
  {
    "title": "sandkit.enums.Tech.Vacuum",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "vacuum"
  },
  {
    "title": "sandkit.enums.Tech.Utilities6",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "utilities6"
  },
  {
    "title": "sandkit.enums.Tech.Utilities7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "utilities7"
  },
  {
    "title": "sandkit.enums.Tech.Filters",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "filters"
  },
  {
    "title": "sandkit.enums.Tech.AdvancedFilters",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "advancedfilters"
  },
  {
    "title": "sandkit.enums.Tech.Infrastructure3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "infrastructure3"
  },
  {
    "title": "sandkit.enums.Tech.Decorations1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "decorations1"
  },
  {
    "title": "sandkit.enums.Tech.Decorations2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "decorations2"
  },
  {
    "title": "sandkit.enums.Tech.Decorations3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "decorations3"
  },
  {
    "title": "sandkit.enums.Tech.Blocks1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "blocks1"
  },
  {
    "title": "sandkit.enums.Tech.Drill",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "drill"
  },
  {
    "title": "sandkit.enums.Tech.SteamTurbine",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "steamturbine"
  },
  {
    "title": "sandkit.enums.Tech.Electricity3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "electricity3"
  },
  {
    "title": "sandkit.enums.Tech.Electricity4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "electricity4"
  },
  {
    "title": "sandkit.enums.Tech.Logic1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic1"
  },
  {
    "title": "sandkit.enums.Tech.Logic2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic2"
  },
  {
    "title": "sandkit.enums.Tech.Logic3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic3"
  },
  {
    "title": "sandkit.enums.Tech.Logic4",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logic4"
  },
  {
    "title": "sandkit.enums.Tech.Various1",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "various1"
  },
  {
    "title": "sandkit.enums.Tech.Various2",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "various2"
  },
  {
    "title": "sandkit.enums.Tech.Various3",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "various3"
  },
  {
    "title": "sandkit.enums.Tech.Locator",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "locator"
  },
  {
    "title": "sandkit.enums.Tech.QuantumPortal",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "quantumportal"
  },
  {
    "title": "sandkit.enums.Tech.VoidRift",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "voidrift"
  },
  {
    "title": "sandkit.enums.Tech.Blink",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "blink"
  },
  {
    "title": "sandkit.enums.Tech.Recall",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "recall"
  },
  {
    "title": "sandkit.enums.Tech.ImplosionGun",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "implosiongun"
  },
  {
    "title": "sandkit.enums.Tech.Refining8",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "refining8"
  },
  {
    "title": "sandkit.enums.Tech.Tools7",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "tools7"
  },
  {
    "title": "sandkit.enums.Tech.Diggers",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "diggers"
  },
  {
    "title": "sandkit.enums.Tech.Haulers",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "haulers"
  },
  {
    "title": "sandkit.enums.Tech.Map",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "map"
  },
  {
    "title": "sandkit.enums.Tech.ColoringTool",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "coloringtool"
  },
  {
    "title": "sandkit.enums.Tech.SignalGate",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "signalgate"
  },
  {
    "title": "sandkit.enums.Tech.GrapplingHook",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "grapplinghook"
  },
  {
    "title": "sandkit.enums.Tech.GlassFoundation",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "glassfoundation"
  },
  {
    "title": "sandkit.enums.Tech.PrecisionTools",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "precisiontools"
  },
  {
    "title": "sandkit.enums.Tech.SignalDevices",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "signaldevices"
  },
  {
    "title": "sandkit.enums.Tech.SignalControls",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "signalcontrols"
  },
  {
    "title": "sandkit.enums.Tech.LogicGates",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "logicgates"
  },
  {
    "title": "sandkit.enums.Tech.RetroConsole",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "retroconsole"
  },
  {
    "title": "sandkit.enums.Tech.WallTool",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "walltool"
  },
  {
    "title": "sandkit.enums.Tech.Corraller",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "corraller"
  },
  {
    "title": "sandkit.enums.Tech.PlainFoundation",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "plainfoundation"
  },
  {
    "title": "sandkit.enums.Tech.ClearingFrame",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "clearingframe"
  },
  {
    "title": "sandkit.enums.Tech.Heatmap",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "heatmap"
  },
  {
    "title": "sandkit.enums.Tech.MiningLaser",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "mininglaser"
  },
  {
    "title": "sandkit.enums.Tech.GoldBattery",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "goldbattery"
  },
  {
    "title": "sandkit.enums.Tech.Hover",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "hover"
  },
  {
    "title": "sandkit.enums.Tech.SprintBoost",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "sprintboost"
  },
  {
    "title": "sandkit.enums.Tech.CritterFence",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "critterfence"
  },
  {
    "title": "sandkit.enums.Tech.FluxEmanator",
    "body": "",
    "path": "/api/sandkit.enums.Tech",
    "id": "fluxemanator"
  },
  {
    "title": "sandkit.enums.TechStatus",
    "body": "Defined in: sandkit/enums/index.d.ts:404 Visibility and research state of a tech node.",
    "path": "/api/sandkit.enums.TechStatus",
    "id": ""
  },
  {
    "title": "sandkit.enums.TechStatus.Available",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "available"
  },
  {
    "title": "sandkit.enums.TechStatus.Visible",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "visible"
  },
  {
    "title": "sandkit.enums.TechStatus.Researched",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "researched"
  },
  {
    "title": "sandkit.enums.TechStatus.Unknown",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "unknown"
  },
  {
    "title": "sandkit.enums.TechStatus.Hidden",
    "body": "",
    "path": "/api/sandkit.enums.TechStatus",
    "id": "hidden"
  },
  {
    "title": "sandkit.enums.WorldItemType",
    "body": "Defined in: sandkit/enums/index.d.ts:423 Use PickupType instead.",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": ""
  },
  {
    "title": "sandkit.enums.WorldItemType.Artifact",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "artifact"
  },
  {
    "title": "sandkit.enums.WorldItemType.GlyphKey",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "glyphkey"
  },
  {
    "title": "sandkit.enums.WorldItemType.Stratacore",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "stratacore"
  },
  {
    "title": "sandkit.enums.WorldItemType.Orb",
    "body": "",
    "path": "/api/sandkit.enums.WorldItemType",
    "id": "orb"
  },
  {
    "title": "sandkit.enums",
    "body": "- AbilityType - ActionState - ActionType - AuthorizationType - BuildMode - BuildingClearance - CellType - ComponentId - DroneType - ElementType - ItemId - ItemType - KeyBinding - KeyState - MatterType - ProjectileType - ReloadType - Scene - StructureType - Tech - TechStatus - PickupType - WorldItemType",
    "path": "/api/sandkit.enums",
    "id": ""
  },
  {
    "title": "SandkitEnums",
    "body": "Defined in: sandkit/enums/index.d.ts:431 Composed sandkit.enums object. Properties AbilityType Defined in: sandkit/enums/index.d.ts:432 ActionState Defined in: sandkit/enums/index.d.ts:433 ActionType Defined in: sandkit/enums/index.d.ts:434 AuthorizationType Defined in: sandkit/enums/index.d.ts:435 BuildMode Defined in: sandkit/enums/index.d.ts:436 BuildingClearance Defined in: sandkit/enums/index.d.ts:437 CellType Defined in: sandkit/enums/index.d.ts:438 ComponentId Defined in: sandkit/enums/index.d.ts:439 DroneType Defined in: sandkit/enums/index.d.ts:440 ElementType Defined in: sandkit/enums/index.d.ts:441 ItemId Defined in: sandkit/enums/index.d.ts:442 ItemType Defined in: sandkit/enums/index.d.ts:443 KeyBinding Defined in: sandkit/enums/index.d.ts:444 KeyState Defined in: sandkit/enums/index.d.ts:445 MatterType Defined in: sandkit/enums/index.d.ts:446 ProjectileType Defined in: sandkit/enums/index.d.ts:447 ReloadType Defined in: sandkit/enums/index.d.ts:448 Scene Defined in: sandkit/enums/index.d.ts:449 StructureType Defined in: sandkit/enums/index.d.ts:450 Tech Defined in: sandkit/enums/index.d.ts:451 TechStatus Defined in: sandkit/enums/index.d.ts:452 PickupType Defined in: sandkit/enums/index.d.ts:453 WorldItemType Defined in: sandkit/enums/index.d.ts:457 Deprecated Use PickupType instead.",
    "path": "/api/sandkit.enums",
    "id": "sandkitenums"
  },
  {
    "title": "sandkit",
    "body": "Live sandkit object — shape, ambient binding docs, and nested bags. Mirrors on-disk src/sandkit/ and the host free variable: api, engine, enums, react, state. Prefer the free name sandkit in mod code (src/global.d.ts); do not import a value binding.",
    "path": "/api/sandkit",
    "id": ""
  },
  {
    "title": "SandkitApi",
    "body": "Defined in: sandkit/api/sandkit-api.d.ts:8 Composed main-thread sandkit.api object type. Each property matches a namespace under sandkit.api. . Namespace members are documented in their module files. Use this type when typing the host sandkit.api value as a whole. Properties action Defined in: sandkit/api/sandkit-api.d.ts:10 Player action and custom action data. assets Defined in: sandkit/api/sandkit-api.d.ts:12 Mod asset URLs and provider selection. authorization Defined in: sandkit/api/sandkit-api.d.ts:14 Build authorization checks. building Defined in: sandkit/api/sandkit-api.d.ts:16 Building mode and placement. blueprints Defined in: sandkit/api/sandkit-api.d.ts:18 Structure blueprint serialize and localize helpers. camera Defined in: sandkit/api/sandkit-api.d.ts:20 Camera position and bounds. collector Defined in: sandkit/api/sandkit-api.d.ts:22 Collector machine helpers. constants Defined in: sandkit/api/sandkit-api.d.ts:24 Shared game constants. cooldown Defined in: sandkit/api/sandkit-api.d.ts:26 Cooldown timers. discoveries Defined in: sandkit/api/sandkit-api.d.ts:28 Discovery tracking. effects Defined in: sandkit/api/sandkit-api.d.ts:30 Visual and gameplay effects. elements Defined in: sandkit/api/sandkit-api.d.ts:32 Element types and cell mutations. entities Defined in: sandkit/api/sandkit-api.d.ts:34 Entity spawn, capture, and lifecycle. energy Defined in: sandkit/api/sandkit-api.d.ts:36 Energy network helpers. events Defined in: sandkit/api/sandkit-api.d.ts:38 Game event subscription. excavation Defined in: sandkit/api/sandkit-api.d.ts:40 Excavation helpers. fire Defined in: sandkit/api/sandkit-api.d.ts:42 Fire and burning helpers. factory Defined in: sandkit/api/sandkit-api.d.ts:44 Factory progression level and process counters. game Defined in: sandkit/api/sandkit-api.d.ts:46 Game session start helpers. gameConfig Defined in: sandkit/api/sandkit-api.d.ts:48 Game configuration values. grid Defined in: sandkit/api/sandkit-api.d.ts:53 Cell queries, deferred mutations, fog, and redraw. Official name for the former api.world surface. hooks Defined in: sandkit/api/sandkit-api.d.ts:55 Intercept and modify hooks. i18n Defined in: sandkit/api/sandkit-api.d.ts:57 Localization strings. input Defined in: sandkit/api/sandkit-api.d.ts:59 Input state and bindings. items Defined in: sandkit/api/sandkit-api.d.ts:61 Item definitions and inventory. lights Defined in: sandkit/api/sandkit-api.d.ts:63 Dynamic light sources. maps Defined in: sandkit/api/sandkit-api.d.ts:65 Map selection and session start. mods Defined in: sandkit/api/sandkit-api.d.ts:67 Mod asset provider lookup. patterns Defined in: sandkit/api/sandkit-api.d.ts:69 Excavation pattern helpers. pipes Defined in: sandkit/api/sandkit-api.d.ts:71 Pipe network queries and enablement. pickups Defined in: sandkit/api/sandkit-api.d.ts:73 World pickup spawn, collect, and lookup. player Defined in: sandkit/api/sandkit-api.d.ts:75 Player position, movement, and inventory. processing Defined in: sandkit/api/sandkit-api.d.ts:77 Processing recipe registration. progression Defined in: sandkit/api/sandkit-api.d.ts:79 Story progression completion. projectiles Defined in: sandkit/api/sandkit-api.d.ts:81 Projectile spawn and lifecycle. random Defined in: sandkit/api/sandkit-api.d.ts:83 Game random number helpers. raycast Defined in: sandkit/api/sandkit-api.d.ts:85 World raycast queries. reactions Defined in: sandkit/api/sandkit-api.d.ts:87 Element contact reactions. rendering Defined in: sandkit/api/sandkit-api.d.ts:89 Screen drawing and overlay canvas. resources Defined in: sandkit/api/sandkit-api.d.ts:91 Fluxite and energy resources. scene Defined in: sandkit/api/sandkit-api.d.ts:93 Active game scene. schedule Defined in: sandkit/api/sandkit-api.d.ts:95 Next-tick callback scheduling. settings Defined in: sandkit/api/sandkit-api.d.ts:97 Game settings read and change events. shared Defined in: sandkit/api/sandkit-api.d.ts:99 Cross-thread shared buffers. signals Defined in: sandkit/api/sandkit-api.d.ts:101 Signal target registration. sound Defined in: sandkit/api/sandkit-api.d.ts:103 Sound playback and stop controls. sprites Defined in: sandkit/api/sandkit-api.d.ts:105 Sprite load and transforms. storage Defined in: sandkit/api/sandkit-api.d.ts:107 Per-mod and local storage. structureBehaviors Defined in: sandkit/api/sandkit-api.d.ts:109 Conveyor and launcher behaviors. structures Defined in: sandkit/api/sandkit-api.d.ts:111 Structure registration and queries. tech Defined in: sandkit/api/sandkit-api.d.ts:113 Tech tree definitions and locks. terrains Defined in: sandkit/api/sandkit-api.d.ts:115 Terrain registration and mutations. time Defined in: sandkit/api/sandkit-api.d.ts:117 Game time and tick counter. tools Defined in: sandkit/api/sandkit-api.d.ts:119 Tool-specific helpers. triggers Defined in: sandkit/api/sandkit-api.d.ts:121 Interval trigger registration. ui Defined in: sandkit/api/sandkit-api.d.ts:123 UI overlays, dialogs, and navigation. upgrades Defined in: sandkit/api/sandkit-api.d.ts:125 Upgrade categories and levels. utils Defined in: sandkit/api/sandkit-api.d.ts:127 Vector math helpers. workers Defined in: sandkit/api/sandkit-api.d.ts:129 Worker post-update control. world Defined in: sandkit/api/sandkit-api.d.ts:133 Deprecated Use grid for cell APIs and pickups for world items.",
    "path": "/api/sandkit",
    "id": "sandkitapi"
  },
  {
    "title": "Sandkit",
    "body": "Property Type Description --- --- --- api SandkitApi Public mod API. See sandkit.api. apiVersion number Sandkit API version number (live value is 1). engine SandkitEngine Internal State-first internals. See SandkitEngine. enums SandkitEnums Runtime enum bags. See sandkit.enums. react SandkitReact Host React package. See SandkitReact. state SandkitState Game state. Same object as sandkit.engine.state at runtime. See SandkitState. api apiVersion engine enums react state Shape of the host-injected sandkit free variable in mod main.js. Example Accessing the API",
    "path": "/api/sandkit",
    "id": "sandkit"
  },
  {
    "title": "sandkit.react",
    "body": "",
    "path": "/api/sandkit.react",
    "id": ""
  },
  {
    "title": "SandkitReact",
    "body": "Defined in: sandkit/react.d.ts:8 Host React runtime at sandkit.react. Kept intentionally shallow so TypeDoc does not ingest @types/react / DOM. Mods should import react through the template JSX runtime, not this bag directly, unless you need to reach the host copy at runtime. Indexable Additional host exports not listed here. Properties Fragment? Defined in: sandkit/react.d.ts:36 Fragment symbol (host copy). Component? Defined in: sandkit/react.d.ts:38 Base class component (host copy). PureComponent? Defined in: sandkit/react.d.ts:40 Pure class component (host copy). StrictMode? Defined in: sandkit/react.d.ts:42 Strict mode wrapper (host copy). Suspense? Defined in: sandkit/react.d.ts:44 Suspense boundary (host copy). version? Defined in: sandkit/react.d.ts:46 React version string from the host bundle. Methods createElement()? Defined in: sandkit/react.d.ts:10 Create a React element (host copy). Parameters args ...unknown[] Returns unknown createContext()? Defined in: sandkit/react.d.ts:12 Create a React context (host copy). Parameters args ...unknown[] Returns unknown createRef()? Defined in: sandkit/react.d.ts:14 Create a ref object (host copy). Parameters args ...unknown[] Returns unknown forwardRef()? Defined in: sandkit/react.d.ts:16 Wrap a component to forward refs (host copy). Parameters args ...unknown[] Returns unknown memo()? Defined in: sandkit/react.d.ts:18 Memoize a component (host copy). Parameters args ...unknown[] Returns unknown lazy()? Defined in: sandkit/react.d.ts:20 Lazy-load a component (host copy). Parameters args ...unknown[] Returns unknown useState()? Defined in: sandkit/react.d.ts:22 State hook (host copy). Parameters args ...unknown[] Returns unknown useEffect()? Defined in: sandkit/react.d.ts:24 Effect hook (host copy). Parameters args ...unknown[] Returns unknown useLayoutEffect()? Defined in: sandkit/react.d.ts:26 Layout effect hook (host copy). Parameters args ...unknown[] Returns unknown useMemo()? Defined in: sandkit/react.d.ts:28 Memo hook (host copy). Parameters args ...unknown[] Returns unknown useCallback()? Defined in: sandkit/react.d.ts:30 Callback hook (host copy). Parameters args ...unknown[] Returns unknown useRef()? Defined in: sandkit/react.d.ts:32 Ref hook (host copy). Parameters args ...unknown[] Returns unknown useContext()? Defined in: sandkit/react.d.ts:34 Context hook (host copy). Parameters args ...unknown[] Returns unknown",
    "path": "/api/sandkit.react",
    "id": "sandkitreact"
  },
  {
    "title": "shared.asset",
    "body": "",
    "path": "/api/shared.asset",
    "id": ""
  },
  {
    "title": "shared.asset.AssetRef",
    "body": "Property Type Description --- --- --- id number Runtime asset id. type number Asset category discriminator used by the renderer. id type Reference to a loaded sprite or texture asset.",
    "path": "/api/shared.asset",
    "id": "assetref"
  },
  {
    "title": "shared.engine",
    "body": "",
    "path": "/api/shared.engine",
    "id": ""
  },
  {
    "title": "shared.engine.EngineFn",
    "body": "Argument Type Description --- --- --- args ...unknown[] args Internal Stub for an unresolved engine method.",
    "path": "/api/shared.engine",
    "id": "enginefn"
  },
  {
    "title": "shared.engine.EngineOverlapNs",
    "body": "Internal Loose bag for namespaces that overlap sandkit.api (different names / state-first).",
    "path": "/api/shared.engine",
    "id": "engineoverlapns"
  },
  {
    "title": "shared.jsonvalue",
    "body": "",
    "path": "/api/shared.jsonvalue",
    "id": ""
  },
  {
    "title": "shared.jsonvalue.JsonObjectV1",
    "body": "JSON object with string keys and JsonValueV1 values. Use for open-ended config bags and serialized mod data. Indexable",
    "path": "/api/shared.jsonvalue",
    "id": "jsonobjectv1"
  },
  {
    "title": "shared.jsonvalue.JsonValueV1",
    "body": "JSON value: primitive, object, array, or null. Does not include undefined — omit keys instead.",
    "path": "/api/shared.jsonvalue",
    "id": "jsonvaluev1"
  },
  {
    "title": "shared.nominal",
    "body": "",
    "path": "/api/shared.nominal",
    "id": ""
  },
  {
    "title": "shared.nominal.LooseString",
    "body": "Known string literals plus any other string. T string collapses to string and drops autocomplete. Type Parameters T T extends string",
    "path": "/api/shared.nominal",
    "id": "loosestring"
  },
  {
    "title": "shared.nominal.LooseNumber",
    "body": "Known numeric literals plus any other number. T number collapses to number and drops autocomplete. Type Parameters T T extends number",
    "path": "/api/shared.nominal",
    "id": "loosenumber"
  },
  {
    "title": "shared.nominal.TaggedNumber",
    "body": "Number handle that does not mix with a different tag. Plain number is not assignable; numeric literals and enum members are. Type Declaration \\ \\ tag? Type Parameters Tag Tag extends string",
    "path": "/api/shared.nominal",
    "id": "taggednumber"
  },
  {
    "title": "shared.nominal.CellId",
    "body": "Packed simulation cell id from world.getCellIdAtCell.",
    "path": "/api/shared.nominal",
    "id": "cellid"
  },
  {
    "title": "shared.player",
    "body": "",
    "path": "/api/shared.player",
    "id": ""
  },
  {
    "title": "shared.player.Player",
    "body": "Property Type Description --- --- --- x number Player hitbox left edge in world pixels. y number Player hitbox top edge in world pixels. width number Player hitbox width in world pixels. height number Player hitbox height in world pixels. velocity Vector2 Current movement velocity in pixels per second. threshold Vector2 Movement threshold accumulator used by physics. onGround boolean Spawn flag. Live physics does not update this field. Use sandkit.api.player.isOnGround() (solid cells 1px below the hitbox). speedCapOverdrive object Temporary speed-cap bonuses applied on each axis. inventory InventoryItem[] Items currently held in the player inventory. buildings number[] Structure type ids the player has unlocked for building. tech object Tech tree nodes and their unlock metadata. lockedTechs object Tech ids explicitly locked for this save. action null Active world action, or null when idle. hotbar object Hotbar slots, active indices, and item sprites. grapplingHook boolean True when the grappling hook is equipped or active. cooldowns object Cooldown timestamps for movement particles and slowdown. isHovering boolean True when hover movement mode is active. weaponsMeta object Per-weapon runtime metadata. x y width height velocity threshold onGround speedCapOverdrive inventory buildings tech lockedTechs action hotbar grapplingHook cooldowns isHovering weaponsMeta Live player state snapshot (read-only shape for mods). Reflects sandkit.engine.state / store player fields exposed to mods.",
    "path": "/api/shared.player",
    "id": "player"
  },
  {
    "title": "shared.player.InventoryItem",
    "body": "Property Type Description --- --- --- id number itemType number abilities object[] nameKey string descriptionKey string categoryKey \"excavation\" \\ \"utility\" \\ \"drones\" sprite? AssetRef id itemType abilities nameKey descriptionKey categoryKey sprite? One hotbar or inventory item entry.",
    "path": "/api/shared.player",
    "id": "inventoryitem"
  },
  {
    "title": "shared.player.CellCoordinates",
    "body": "Grid cell position as [cellX, cellY]. Cell coordinates match sandkit.api. AtCell helpers: column first, then row.",
    "path": "/api/shared.player",
    "id": "cellcoordinates"
  },
  {
    "title": "shared.player.Vector2",
    "body": "Property Type Description --- --- --- x number Horizontal component. y number Vertical component. x y 2D vector in world or cell space. World positions use pixels. Cell helpers may return pixel or cell units depending on the API.",
    "path": "/api/shared.player",
    "id": "vector2"
  },
  {
    "title": "Sandkit API types",
    "body": "TypeScript declarations and community docs for the live Sandustry sandkit modding API. Package name: @sandustry-modding/types. Originally a fork of flamableassassin/sandustry-modding-types. The docs site ships API reference pages, modding guides, and JSON Schema for modinfo.json / patches.json. Folder layout mirrors runtime shape so you can jump from code to the matching .d.ts path. Path Runtime object ------------------------------- ----------------------------------------------------------------------- src/sandkit/api/ sandkit.api (main thread) src/sandkit/engine/api/ sandkit.engine.api src/sandkit/engine/state.d.ts sandkit.engine.state / sandkit.state src/sandkit/enums/ sandkit.enums src/sandkit/react.d.ts sandkit.react src/sandkit/index.d.ts Composed Sandkit root type src/global.d.ts Ambient sandkit free variable and type aliases src/worker/ Worker-thread sandkit.api (see WorkerSandkitApi) src/shared/ Internal base shapes reused by main and worker declarations src/configs/ modinfo.json / patches.json TypeScript types (not a runtime object) src/electron/ Renderer preload bridge (window.electron; not a runtime sandkit object) At runtime, every API bag is a plain object with function properties — not a TypeScript namespace. MCP checks on a live game session show: - sandkit.api, sandkit.api.ui, sandkit.api.ui.overlays, and sandkit.engine.api.game are all typeof \"object\" with Object.prototype - Nested keys hold functions or further plain objects Declaration files use export namespace because it is the usual .d.ts pattern for nested object APIs. It matches how you call the API (sandkit.api.ui.update) and supports export import when main and worker share base shapes under shared/. interface or type object literals would also work for runtime shape, but they do not support the export import re-export style used across main, worker, and shared modules.",
    "path": "/api/types",
    "id": ""
  },
  {
    "title": "Sandkit API types.Ambient types (preferred)",
    "body": "Pull the host sandkit ambient into your project with a triple-slash reference. Put it at the top of main.js / worker.js, or in a small ambient .d.ts that your tsconfig / jsconfig includes: That works in .ts and .js (including checked JS with checkJs). Do not list @sandustry-modding/types under compilerOptions.types. That list only loads packages from node modules/@types (for example \"react\" or \"node\"). Deep declaration modules are also available, for example: - Main mod (main.js): use the ambient free name sandkit. Type aliases such as SandkitApi are global; do not import a value binding. - Worker mod (worker.js): type sandkit.api as WorkerSandkitApi. Worker and main APIs overlap but are not interchangeable. - Shared folder: not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend. - Configs folder: modinfo.json and patches.json TypeScript types (@sandustry-modding/types/configs). Not part of the live sandkit object. JSON Schema: https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json and https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json - Electron folder: renderer preload bridge (@sandustry-modding/types/electron). Ambient electron on @sandustry-modding/types. Docs: Electron bridge. Edit .d.ts files under src/. Regenerate the Docsify API reference and JSON Schema after JSDoc or config-type changes. npm run generate merges scripts/api-gen/overrides.json, the official Sandkit API HTML, and src/sandkit/api/ declarations. It writes scripts/api-gen/generated/api-catalog.json, refreshes scripts/api-gen/generated/namespace-summaries.json, and reports gaps in docs/generated/api-gaps.md. Edit namespace descriptions and alias mappings in scripts/api-gen/overrides.json. Guides live under docs/guides/ (getting started, mod lifecycle, manifest, patches, workers, Workshop). Regenerate the Docsify API reference and JSON Schema from these declarations: Output lands in docs/api/ and docs/schemas/. Browse namespaces from Search on the docs site. The sidebar is the static file docs/ sidebar.md. npm run generate does not rewrite it. The combined page is docs/full.md. npm run docs runs that step, then serves the docs site. npm run docs:links fails when a markdown link does not resolve to a Docsify page or heading id. npm run validate fails when committed schemas do not match src/configs/. npm run docs:archive-sandkit asks for a base file name, then writes docs/official-api/ .md from https://sandustry.com/sandkit.html.",
    "path": "/api/types",
    "id": ""
  },
  {
    "title": "Electron bridge",
    "body": "The Electron bridge is the renderer-side API that talks to Sandustry's main process over IPC. It is not part of sandkit. The game exposes it as window.electron from the preload script (preload.js). Mod code can use the ambient free name electron (same object as window.electron). Most mods only use sandkit.api. Reach for electron when you need host integration that Sandkit does not wrap: - Writing to the host log file (electron.log) - Opening the local mods folder or uploading a dev build to Workshop - Reading distribution channel, Steam Deck detection, or OS language preferences at startup - Platform achievements, cloud saves, or Steam Workshop helpers (Steam builds) - Custom map editor file I/O (.custommap files on disk) The game itself uses the bridge for saves, settings, fullscreen, and platform licensing. Treat save and settings helpers as host internals unless you have a specific reason to call them from a mod. Install @sandustry-modding/types and load the ambient bindings: You can annotate with global types (ElectronBridge, ElectronLogLevel, ElectronPlatform) or import explicit shapes: Bundled mods from the mod template also receive const electron = globalThis.window?.electron at the top of main.js. That keeps bare electron. calls safe when the preload bridge is present. Methods fall into three groups. Sync (sendSync) — safe during early startup. Examples: getPlatformSync(), getSettingsSync(), saveExistsSync(). Async (invoke) — returns a Promise. Examples: save(), load(), platform.cloudSave(), localMods.list(). Fire-and-forget (send) — no return value; the main process handles the message later. Examples: log(), openDevTools(), macRightMouse.watch(). Each member in the generated reference lists its IPC channel in a IPC: line. The top-level object is ElectronBridge. Nested bags group related calls: Property Role Generated reference --- --- --- localMods Local dev mod folder and Steam upload ElectronLocalModsApi platform Steam / MS Store account, achievements, cloud, overlay ElectronPlatformApi platform.workshop Steam Workshop subscribe, download, and discovery ElectronWorkshopApi platform.overlay In-game overlay browser for https: URLs ElectronPlatformOverlayApi customMaps Custom map editor save / load / list / delete ElectronCustomMapsApi macRightMouse macOS right-click emulation probes ElectronMacRightMouseApi Area Examples Reference --- --- --- Startup probes getPlatformSync(), getModdingEnabledSync(), getIsSteamDeckSync() ElectronBridge App lifecycle onAppSuspend(), onAppResume(), appQuit() ElectronBridge Logging log(level, scope, message) → logs/main.log ElectronBridge · ElectronLogLevel Saves & settings save(), load(), getSaveFiles(), saveSettings() ElectronBridge · result types below Window setFullscreen(), toggleFullscreen(), openDevTools() ElectronBridge Platform (MS Store) checkLicense(), Xbox sign-in / license listeners ElectronBridge · ElectronLicenseCheckResult Environment getSystemInfo() (local, no IPC) ElectronSystemInfo Invoke handlers return small result objects instead of throwing for expected failures. Type Used for --- --- ElectronOperationResult Generic { success, path?, error? } from saves, settings, and window calls ElectronLoadResult Parsed save body or load error ElectronExportSaveResult Raw .save bytes for backup ElectronImportSaveResult Import from exported bytes ElectronLocalModsListResult Local mod summaries (ok, data, errorCode) ElectronLocalModsUploadResult Workshop upload from a local folder Primitive aliases: ElectronPlatform, ElectronLogLevel, ElectronIpcListener. getPlatformSync() returns \"steam\", \"msstore\", \"gog\", or another channel string. Some nested APIs are Steam-only. MS Store builds return { ok: false, errorCode: 'unsupported platform' } or no-op success where noted in the type docs. Xbox sign-in and license listeners never fire on Steam. File patching (isFilePatchingActiveSync()) is active on Steam when Workshop bundle patches are registered. Every interface, property, method, @param, and @returns note lives on one page: electron — generated API reference Declaration sources are split under src/electron/ in the npm package (bridge, platform, workshop, local-mods, and related modules). Deep imports are available, for example @sandustry-modding/types/electron/bridge. - configs — modinfo.json, patches.json, and workshop.json (mod files, not runtime APIs) - Sandkit API home — sandkit.api reference and modding guides - Changelog — package history including electron types in 0.6.0",
    "path": "/electron-bridge",
    "id": ""
  },
  {
    "title": "API catalog gaps",
    "body": "Generated by npm run generate. Edit descriptions and expected members in scripts/api-gen/overrides.json. - Official source: https://sandustry.com/sandkit.html - Generated: 2026-09-06T19:15:55.560Z - Namespaces: 67 - Official methods (HTML): 268 - Declared methods (types): 441 - Open gaps: 45",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.ui",
    "body": "- ui.useRefresh - ui.useScale - ui.hotbar.selectAction - ui.hotbar.getBankCount - ui.hotbar.getActiveBankIndex - ui.hotbar.getActiveSlotIndex - ui.hotbar.getSlotKeyLabel - ui.components.ActionSlot — React hotbar action slot component - ui.components.Button — React button component - ui.components.Panel — React panel component - ui.hotbar.createBankSource — Create a hotbar bank source - ui.hotbar.useHotbar — React hook for hotbar state - ui.select — Modal choice picker - ui.useGameEvent — React hook subscribing to game events - ui.overrides.register — Wrap a built-in UI component - ui.regions.mount — Mount a React region in a UI slot - ui.regions.setVisible — Show or hide a mounted region",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.source",
    "body": "- source.isAvailable - source.getBankIndex - source.getSlotCount - source.getAction - source.activateSlot - source.clearSlot - source.dispose",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.local",
    "body": "- local.get - local.set - local.remove",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.physics",
    "body": "- physics.normal - physics.skip - physics.aggressiveSkip",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.items",
    "body": "- items.getRegisteredIds - items.spriteMounts",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.signals",
    "body": "- signals.registerSenderType — Register a signal sender structure type - signals.setOutputAtCell — Write signal output at a structure cell",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.worker",
    "body": "- worker.getIndex - worker.getCount",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.cooldown",
    "body": "- cooldown.start — Official name; types expose check and isReady",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.elements",
    "body": "- elements.moveBetweenCells",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.input",
    "body": "- input.getMousePositionAtWorld",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.main",
    "body": "- main.emitEvent",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.overrideHandle",
    "body": "- overrideHandle.remove",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.player",
    "body": "- player.inventory.hasById — Test whether inventory contains an item id",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.resources",
    "body": "- resources.refresh",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.structures",
    "body": "- structures.processing.context.commit",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "API catalog gaps.visibilityHandle",
    "body": "- visibilityHandle.restore",
    "path": "/generated/api-gaps",
    "id": ""
  },
  {
    "title": "JSON Schema files",
    "body": "Generated from @sandustry-modding/types/configs (ModInfo, BundlePatchesFile in src/configs/). Prefer the official Sandkit docs when a schema and the game disagree. After GitHub Pages publishes docs/, use these raw schema URLs: File Schema URL -------------- ----------------------------------------------------------------------- modinfo.json https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json patches.json https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json Point $schema at the URL for the file you edit.",
    "path": "/schemas",
    "id": ""
  },
  {
    "title": "`modinfo.json`",
    "body": "",
    "path": "/schemas",
    "id": ""
  },
  {
    "title": "`patches.json`",
    "body": "The game loads a bare array . For inline $schema, wrap the list (editors only — unwrap to a bare array before shipping, or map the schema by path): A bare [ ... ] array also validates. You can instead bind the schema by path (for example VS Code json.schemas) and keep the game array form in the file. Import the same shapes from the npm package: See configs for the full type reference. From the package repo root: npm run validate fails when committed schemas do not match the TypeScript defs.",
    "path": "/schemas",
    "id": ""
  }
];
