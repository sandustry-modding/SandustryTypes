/**
 * Renderer Electron bridge exposed by `contextBridge` as `window.electron`.
 *
 * Source of truth: Sandustry `preload.js` (`contextBridge.exposeInMainWorld('electron', …)`).
 * Main-process handlers live in `main.js`.
 *
 * Import from `@sandustry-modding/types/electron` for explicit types, or use the ambient
 * `electron` / `window.electron` bindings from `@sandustry-modding/types`.
 *
 * Sync methods use `ipcRenderer.sendSync` and are safe during startup.
 * Async methods use `ipcRenderer.invoke` unless noted (`openDevTools`, `log`).
 *
 * @module
 */

export type { ElectronPlatform, ElectronLogLevel, ElectronIpcListener } from "./primitives";

export type {
  ElectronSuccessResult,
  ElectronFailureResult,
  ElectronOperationResult,
  ElectronLicenseCheckResult,
  ElectronSaveInput,
  ElectronLoadSuccessResult,
  ElectronLoadFailureResult,
  ElectronLoadResult,
  ElectronSaveFileMetadata,
  ElectronExportSaveSuccessResult,
  ElectronExportSaveResult,
  ElectronImportSaveSuccessResult,
  ElectronImportSaveResult,
  ElectronLastPlayedGame,
  ElectronSystemInfo,
  ElectronLocalModsListResult,
  ElectronLocalModsUploadResult,
  ElectronOpenUrlResult,
  ElectronPrimeAchievementsResult,
  ElectronReauthPromptResult,
} from "./results";

export type { ElectronLocalModsApi } from "./local-mods";
export type { ElectronWorkshopApi } from "./workshop";
export type { ElectronPlatformOverlayApi, ElectronPlatformApi } from "./platform";
export type { ElectronMacRightMouseApi } from "./mac-right-mouse";
export type { ElectronCustomMapsApi } from "./custom-maps";
export type { ElectronBridge } from "./bridge";
