# sandkit.api.grid (worker)

**`Internal`**

Worker-thread `sandkit.api.grid` — grid reads, activity, and excavation.

Worker mutations are immediate. Main thread defers grid writes through `api.grid.mutate`.

Worker subset; do not import main-thread [sandkit.api.grid](api/sandkit.md#grid) iteration helpers here.

## References <!-- {docsify-ignore} -->

### getCellIdAtCell :id=getcellidatcell

<p class="smt-member-path"><code>sandkit.api.grid.getCellIdAtCell (worker)</code></p>

Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

---

### isCellEmptyAtCell :id=iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.grid.isCellEmptyAtCell (worker)</code></p>

Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

---

### isTerrainAtCell :id=isterrainatcell

<p class="smt-member-path"><code>sandkit.api.grid.isTerrainAtCell (worker)</code></p>

Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

---

### reportActivityAtCell :id=reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.grid.reportActivityAtCell (worker)</code></p>

Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

---

### excavateAtCell :id=excavateatcell

<p class="smt-member-path"><code>sandkit.api.grid.excavateAtCell (worker)</code></p>

Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

---

### getDimensions :id=getdimensions

<p class="smt-member-path"><code>sandkit.api.grid.getDimensions (worker)</code></p>

Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

---

### ExcavateOptions :id=excavateoptions

<p class="smt-member-path"><code>sandkit.api.grid.ExcavateOptions (worker)</code></p>

Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

---

### CellId :id=cellid

<p class="smt-member-path"><code>sandkit.api.grid.CellId (worker)</code></p>

Re-exports [CellId](api/sandkit.api.grid.md#cellid)

---

### GridDimensions :id=griddimensions

<p class="smt-member-path"><code>sandkit.api.grid.GridDimensions (worker)</code></p>

Re-exports [GridDimensions](api/sandkit.api.grid.md#griddimensions)
