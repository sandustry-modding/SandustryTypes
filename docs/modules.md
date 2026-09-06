<div class="smt-api-landing">

# Sandkit API

`sandkit.api` namespaces available in a mod's main entry script.
Worker-available namespaces are marked.

<div class="smt-api-stats">
<span><strong>60</strong> namespaces</span>
<span><strong>441</strong> API methods</span>
<span><strong>17</strong> worker-available</span>
</div>

Use groups below to find a namespace, or open [Full API reference](full.md).

## Roots

- [sandkit](api/sandkit.md) — root object shape
- [Main thread](api/sandkit.api.md) — `sandkit.api`
- [Worker](api/sandkit.api.worker.md) — worker-thread `sandkit.api`
- [Engine](api/sandkit.engine.md) — `sandkit.engine`
- [React](api/sandkit.react.md) — `sandkit.react`
- [Enums](api/sandkit.enums.md) — `sandkit.enums`
- [Full API reference](full.md) — all namespaces on one page

## Main thread (`sandkit.api`)

### Player & controls

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.player"><span class="smt-api-card-head"><span class="smt-api-card-name">player</span><span class="smt-api-card-meta">23 methods</span></span><p class="smt-api-card-desc">Read and control player position, movement, collision, inventory, and building unlocks.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.player.buildings">buildings</a></li><li><a href="#/api/sandkit.api.player.inventory">inventory</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.input"><span class="smt-api-card-head"><span class="smt-api-card-name">input</span><span class="smt-api-card-meta">10 methods</span></span><p class="smt-api-card-desc">Register key bindings, read the mouse cell, and query or drive binding state.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.action"><span class="smt-api-card-head"><span class="smt-api-card-name">action</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Read the active hotbar action and store custom data on it.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.tools"><span class="smt-api-card-head"><span class="smt-api-card-name">tools</span><span class="smt-api-card-meta">8 methods</span></span><p class="smt-api-card-desc">Inspect and control the grabber tool: size, active state, and load status.</p></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.tools.grabber">grabber</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.camera"><span class="smt-api-card-head"><span class="smt-api-card-name">camera</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Return the camera to the player, focus a world point, or release focus.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.authorization"><span class="smt-api-card-head"><span class="smt-api-card-name">authorization</span><span class="smt-api-card-meta">6 methods</span></span><p class="smt-api-card-desc">Test build, grab, and tool permissions at cells and look up authorization zone ids.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.cooldown"><span class="smt-api-card-head"><span class="smt-api-card-name">cooldown</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Named per-mod cooldown timers you can check and consume.</p></a></li>
</ul>

### World & simulation

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.grid"><span class="smt-api-card-head"><span class="smt-api-card-name">grid</span><span class="smt-api-card-meta">15 methods</span></span><p class="smt-api-card-desc">Iterate rectangular or circular cell regions with a callback per cell.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.world"><span class="smt-api-card-head"><span class="smt-api-card-name">world</span><span class="smt-api-card-meta">28 methods</span></span><p class="smt-api-card-desc">Read the cell grid, excavate, reveal fog, and run idle-safe world mutations.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.world.pickups">pickups</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.pickups"><span class="smt-api-card-head"><span class="smt-api-card-name">pickups</span><span class="smt-api-card-meta">6 methods</span></span><p class="smt-api-card-desc">Spawn, query, remove, and collect loose items lying in the world.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.elements"><span class="smt-api-card-head"><span class="smt-api-card-name">elements</span><span class="smt-api-card-meta">50 methods</span></span><p class="smt-api-card-desc">Register custom element types and read or change falling-sand cells.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.terrains"><span class="smt-api-card-head"><span class="smt-api-card-name">terrains</span><span class="smt-api-card-meta">27 methods</span></span><p class="smt-api-card-desc">Register terrain types and create, damage, or remove terrain at cells.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.entities"><span class="smt-api-card-head"><span class="smt-api-card-name">entities</span><span class="smt-api-card-meta">7 methods</span></span><p class="smt-api-card-desc">Spawn, query, and control discrete world entities by id and type.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.fire"><span class="smt-api-card-head"><span class="smt-api-card-name">fire</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Test whether a cell can burn and ignite it when the simulation is idle.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.excavation"><span class="smt-api-card-head"><span class="smt-api-card-name">excavation</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Register named excavation profiles that define how digging behaves.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.reactions"><span class="smt-api-card-head"><span class="smt-api-card-name">reactions</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Register contact rules that transform two elements when they touch.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.raycast"><span class="smt-api-card-head"><span class="smt-api-card-name">raycast</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Cast a ray from a world position and return what it hits.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.random"><span class="smt-api-card-head"><span class="smt-api-card-name">random</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Seeded random numbers for deterministic, reproducible values.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.time"><span class="smt-api-card-head"><span class="smt-api-card-name">time</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Read game time in milliseconds and the current simulation tick.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.maps"><span class="smt-api-card-head"><span class="smt-api-card-name">maps</span><span class="smt-api-card-meta">5 methods</span></span><p class="smt-api-card-desc">List available maps and start a custom or vanilla map.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
</ul>

### Factory & building

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.structures"><span class="smt-api-card-head"><span class="smt-api-card-name">structures</span><span class="smt-api-card-meta">50 methods</span></span><p class="smt-api-card-desc">Register buildings, recipes, and processors; place, remove, and query structures on the grid.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.structures.processing">processing</a></li><li><a href="#/api/sandkit.api.structures.recipes">recipes</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.building"><span class="smt-api-card-head"><span class="smt-api-card-name">building</span><span class="smt-api-card-meta">4 methods</span></span><p class="smt-api-card-desc">Help place structures: snap positions, test blockage, choose what to build, or cancel.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.processing"><span class="smt-api-card-head"><span class="smt-api-card-name">processing</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Register recipes for built-in Grower, Shaker, and Kinetic Press structures.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.collector"><span class="smt-api-card-head"><span class="smt-api-card-name">collector</span><span class="smt-api-card-meta">5 methods</span></span><p class="smt-api-card-desc">Read collector values per cell and element, test collectability, and report pickups.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.energy"><span class="smt-api-card-head"><span class="smt-api-card-name">energy</span><span class="smt-api-card-meta">6 methods</span></span><p class="smt-api-card-desc">Register energy types and add, consume, or read power on the network at a cell.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.structureBehaviors"><span class="smt-api-card-head"><span class="smt-api-card-name">structureBehaviors</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Register custom conveyor and launcher behavior for transport structures.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.patterns"><span class="smt-api-card-head"><span class="smt-api-card-name">patterns</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Define reusable excavation shapes and apply them at a cell.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.pipes"><span class="smt-api-card-head"><span class="smt-api-card-name">pipes</span><span class="smt-api-card-meta">4 methods</span></span><p class="smt-api-card-desc">Query and toggle liquid and gas pipes and the vents they connect to.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.factory"><span class="smt-api-card-head"><span class="smt-api-card-name">factory</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Read factory level and per-process production counts and rates.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.blueprints"><span class="smt-api-card-head"><span class="smt-api-card-name">blueprints</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Serialize blueprint layouts and translate structure labels through the prefabulator.</p></a></li>
</ul>

### UI & media

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.ui"><span class="smt-api-card-head"><span class="smt-api-card-name">ui</span><span class="smt-api-card-meta">21 methods</span></span><p class="smt-api-card-desc">Toasts, dialogs, tooltips, overlays, React UI, and controller-focus navigation.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.ui.navigation">navigation</a></li><li><a href="#/api/sandkit.api.ui.overlays">overlays</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.sprites"><span class="smt-api-card-head"><span class="smt-api-card-name">sprites</span><span class="smt-api-card-meta">5 methods</span></span><p class="smt-api-card-desc">Load mod sprites, look them up by id, and manage player mod sprites.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.lights"><span class="smt-api-card-head"><span class="smt-api-card-name">lights</span><span class="smt-api-card-meta">12 methods</span></span><p class="smt-api-card-desc">Transient VFX lights and long-lived managed lights at world positions.</p></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.lights.persistent">persistent</a></li><li><a href="#/api/sandkit.api.lights.temporary">temporary</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.effects"><span class="smt-api-card-head"><span class="smt-api-card-name">effects</span><span class="smt-api-card-meta">10 methods</span></span><p class="smt-api-card-desc">Spawn short-lived visuals at world positions: waves, lasers, lights, and particles.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.rendering"><span class="smt-api-card-head"><span class="smt-api-card-name">rendering</span><span class="smt-api-card-meta">5 methods</span></span><p class="smt-api-card-desc">Cell draw positions, grid metrics, overlay size, and custom overlay drawing.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.sound"><span class="smt-api-card-head"><span class="smt-api-card-name">sound</span><span class="smt-api-card-meta">8 methods</span></span><p class="smt-api-card-desc">Play, layer, and stop sounds with optional distance-based volume and pan.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.i18n"><span class="smt-api-card-head"><span class="smt-api-card-name">i18n</span><span class="smt-api-card-meta">20 methods</span></span><p class="smt-api-card-desc">Register locale strings, translate keys, switch language, and format numbers.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.scene"><span class="smt-api-card-head"><span class="smt-api-card-name">scene</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Read which scene is currently active.</p></a></li>
</ul>

### Progression & items

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.tech"><span class="smt-api-card-head"><span class="smt-api-card-name">tech</span><span class="smt-api-card-meta">10 methods</span></span><p class="smt-api-card-desc">Register tech-tree nodes and read or change their locked state.</p></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.tech.conservatory">conservatory</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.upgrades"><span class="smt-api-card-head"><span class="smt-api-card-name">upgrades</span><span class="smt-api-card-meta">6 methods</span></span><p class="smt-api-card-desc">Register upgrade categories and trees; read chosen and unlocked levels.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.discoveries"><span class="smt-api-card-head"><span class="smt-api-card-name">discoveries</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Mark elements and terrains as discovered in the player's log.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.progression"><span class="smt-api-card-head"><span class="smt-api-card-name">progression</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Mark tutorial and progression steps as complete.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.resources"><span class="smt-api-card-head"><span class="smt-api-card-name">resources</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Collect fluxite at cells and update energy resource values.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.items"><span class="smt-api-card-head"><span class="smt-api-card-name">items</span><span class="smt-api-card-meta">6 methods</span></span><p class="smt-api-card-desc">Register custom items and create or query item instances.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.projectiles"><span class="smt-api-card-head"><span class="smt-api-card-name">projectiles</span><span class="smt-api-card-meta">7 methods</span></span><p class="smt-api-card-desc">Register projectile definitions and spawn them at world positions.</p></a></li>
</ul>

### Mods & runtime

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.mods"><span class="smt-api-card-head"><span class="smt-api-card-name">mods</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Query asset providers contributed by other loaded mods.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.settings"><span class="smt-api-card-head"><span class="smt-api-card-name">settings</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Read mod config from manifest configSchema and react when values change.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.storage"><span class="smt-api-card-head"><span class="smt-api-card-name">storage</span><span class="smt-api-card-meta">7 methods</span></span><p class="smt-api-card-desc">Persistent per-mod key-value storage and a device-local store.</p></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.storage.local">local</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.assets"><span class="smt-api-card-head"><span class="smt-api-card-name">assets</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Turn mod-relative paths into asset URLs and pick the active provider for a texture kind.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.hooks"><span class="smt-api-card-head"><span class="smt-api-card-name">hooks</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Observe or override behavior at named engine hook points.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.events"><span class="smt-api-card-head"><span class="smt-api-card-name">events</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Subscribe to and emit named lifecycle and gameplay events.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.triggers"><span class="smt-api-card-head"><span class="smt-api-card-name">triggers</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Run a callback on a fixed interval with a configurable repeat count.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.schedule"><span class="smt-api-card-head"><span class="smt-api-card-name">schedule</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Defer a callback until the next simulation tick.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.workers"><span class="smt-api-card-head"><span class="smt-api-card-name">workers</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Enable this mod's post-update worker hook.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.shared"><span class="smt-api-card-head"><span class="smt-api-card-name">shared</span><span class="smt-api-card-meta">8 methods</span></span><p class="smt-api-card-desc">SharedArrayBuffer storage for data shared between main and worker threads.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.shared.buffers">buffers</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.signals"><span class="smt-api-card-head"><span class="smt-api-card-name">signals</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Register handlers for signal target types.</p></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.signals.targets">targets</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.utils"><span class="smt-api-card-head"><span class="smt-api-card-name">utils</span><span class="smt-api-card-meta">5 methods</span></span><p class="smt-api-card-desc">Geometry helpers: distance, direction, angle, and point interpolation.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.constants"><span class="smt-api-card-head"><span class="smt-api-card-name">constants</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Read-only engine constants, including per-cell physics modes.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.gameConfig"><span class="smt-api-card-head"><span class="smt-api-card-name">gameConfig</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Read-only access to the game's global configuration values.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.game"><span class="smt-api-card-head"><span class="smt-api-card-name">game</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Control the game session lifecycle from your mod.</p></a></li>
</ul>


## Worker (`sandkit.api`)

Worker-thread namespaces. Same names as main where they overlap; pages use a `.worker` URL suffix.

<ul class="smt-api-group">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.effects.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">effects</span><span class="smt-api-card-meta">10 methods</span></span><p class="smt-api-card-desc">Spawn short-lived visuals at world positions: waves, lasers, lights, and particles.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.elements.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">elements</span><span class="smt-api-card-meta">50 methods</span></span><p class="smt-api-card-desc">Register custom element types and read or change falling-sand cells.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.events.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">events</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Subscribe to and emit named lifecycle and gameplay events.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.fire.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">fire</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Test whether a cell can burn and ignite it when the simulation is idle.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.grid.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">grid</span><span class="smt-api-card-meta">15 methods</span></span><p class="smt-api-card-desc">Iterate rectangular or circular cell regions with a callback per cell.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.hooks.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">hooks</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Observe or override behavior at named engine hook points.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.lights.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">lights</span><span class="smt-api-card-meta">12 methods</span></span><p class="smt-api-card-desc">Transient VFX lights and long-lived managed lights at world positions.</p></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.lights.temporary.worker">temporary</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.main.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">main</span><span class="smt-api-card-meta">0 methods</span></span><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.maps.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">maps</span><span class="smt-api-card-meta">5 methods</span></span><p class="smt-api-card-desc">List available maps and start a custom or vanilla map.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.player.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">player</span><span class="smt-api-card-meta">23 methods</span></span><p class="smt-api-card-desc">Read and control player position, movement, collision, inventory, and building unlocks.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.shared.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">shared</span><span class="smt-api-card-meta">8 methods</span></span><p class="smt-api-card-desc">SharedArrayBuffer storage for data shared between main and worker threads.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.shared.buffers.worker">buffers</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.structures.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">structures</span><span class="smt-api-card-meta">50 methods</span></span><p class="smt-api-card-desc">Register buildings, recipes, and processors; place, remove, and query structures on the grid.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a><ul class="smt-api-tree"><li><a href="#/api/sandkit.api.structures.processing.worker">processing</a></li></ul></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.terrains.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">terrains</span><span class="smt-api-card-meta">27 methods</span></span><p class="smt-api-card-desc">Register terrain types and create, damage, or remove terrain at cells.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.ui.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">ui</span><span class="smt-api-card-meta">21 methods</span></span><p class="smt-api-card-desc">Toasts, dialogs, tooltips, overlays, React UI, and controller-focus navigation.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.worker.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">worker</span><span class="smt-api-card-meta">0 methods</span></span><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.api.world.worker"><span class="smt-api-card-head"><span class="smt-api-card-name">world</span><span class="smt-api-card-meta">28 methods</span></span><p class="smt-api-card-desc">Read the cell grid, excavate, reveal fog, and run idle-safe world mutations.</p><span class="smt-api-badge smt-api-badge-worker">worker</span></a></li>
</ul>


## Engine (`sandkit.engine`)

### Game & factory

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.game"><span class="smt-api-card-head"><span class="smt-api-card-name">game</span><span class="smt-api-card-meta">1 method</span></span><p class="smt-api-card-desc">Control the game session lifecycle from your mod.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.factory"><span class="smt-api-card-head"><span class="smt-api-card-name">factory</span><span class="smt-api-card-meta">3 methods</span></span><p class="smt-api-card-desc">Read factory level and per-process production counts and rates.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.conveyors"><span class="smt-api-card-head"><span class="smt-api-card-name">conveyors</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.queue"><span class="smt-api-card-head"><span class="smt-api-card-name">queue</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.heatTransfer"><span class="smt-api-card-head"><span class="smt-api-card-name">heatTransfer</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
</ul>

### Entities & drones

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.entities"><span class="smt-api-card-head"><span class="smt-api-card-name">entities</span><span class="smt-api-card-meta">7 methods</span></span><p class="smt-api-card-desc">Spawn, query, and control discrete world entities by id and type.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.drones"><span class="smt-api-card-head"><span class="smt-api-card-name">drones</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.sweeperDrone"><span class="smt-api-card-head"><span class="smt-api-card-name">sweeperDrone</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.launchers"><span class="smt-api-card-head"><span class="smt-api-card-name">launchers</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.swarmConsole"><span class="smt-api-card-head"><span class="smt-api-card-name">swarmConsole</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
</ul>

### World & terrain

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.matters"><span class="smt-api-card-head"><span class="smt-api-card-name">matters</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.foliage"><span class="smt-api-card-head"><span class="smt-api-card-name">foliage</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.wall"><span class="smt-api-card-head"><span class="smt-api-card-name">wall</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.shadows"><span class="smt-api-card-head"><span class="smt-api-card-name">shadows</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.portals"><span class="smt-api-card-head"><span class="smt-api-card-name">portals</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.teleportZones"><span class="smt-api-card-head"><span class="smt-api-card-name">teleportZones</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.strataform"><span class="smt-api-card-head"><span class="smt-api-card-name">strataform</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
</ul>

### Prefabs & blueprints

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.prefabData"><span class="smt-api-card-head"><span class="smt-api-card-name">prefabData</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.prefabDecor"><span class="smt-api-card-head"><span class="smt-api-card-name">prefabDecor</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.prefabulator"><span class="smt-api-card-head"><span class="smt-api-card-name">prefabulator</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.blueprints"><span class="smt-api-card-head"><span class="smt-api-card-name">blueprints</span><span class="smt-api-card-meta">2 methods</span></span><p class="smt-api-card-desc">Serialize blueprint layouts and translate structure labels through the prefabulator.</p></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.clipboard"><span class="smt-api-card-head"><span class="smt-api-card-name">clipboard</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
</ul>

### Materials & pickers

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.auralite"><span class="smt-api-card-head"><span class="smt-api-card-name">auralite</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.prismaline"><span class="smt-api-card-head"><span class="smt-api-card-name">prismaline</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.prismite"><span class="smt-api-card-head"><span class="smt-api-card-name">prismite</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.augments"><span class="smt-api-card-head"><span class="smt-api-card-name">augments</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.colorPicker"><span class="smt-api-card-head"><span class="smt-api-card-name">colorPicker</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.coloringTool"><span class="smt-api-card-head"><span class="smt-api-card-name">coloringTool</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.foundationColorPicker"><span class="smt-api-card-head"><span class="smt-api-card-name">foundationColorPicker</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.lightColorPicker"><span class="smt-api-card-head"><span class="smt-api-card-name">lightColorPicker</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
</ul>

### Debug & misc

<ul class="smt-api-group smt-api-cards">
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.debug"><span class="smt-api-card-head"><span class="smt-api-card-name">debug</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.extensions"><span class="smt-api-card-head"><span class="smt-api-card-name">extensions</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.misc"><span class="smt-api-card-head"><span class="smt-api-card-name">misc</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.tutorialBuild"><span class="smt-api-card-head"><span class="smt-api-card-name">tutorialBuild</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.usageTracker"><span class="smt-api-card-head"><span class="smt-api-card-name">usageTracker</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
<li class="smt-api-card"><a class="smt-api-card-link" href="#/api/sandkit.engine.api.workerLocal"><span class="smt-api-card-head"><span class="smt-api-card-name">workerLocal</span><span class="smt-api-card-meta">0 methods</span></span></a></li>
</ul>


## Enums

- [Overview](api/sandkit.enums.md)

<ul class="smt-api-group">
<li><a href="#/api/sandkit.enums.AbilityType">AbilityType</a></li>
<li><a href="#/api/sandkit.enums.ActionState">ActionState</a></li>
<li><a href="#/api/sandkit.enums.ActionType">ActionType</a></li>
<li><a href="#/api/sandkit.enums.AuthorizationType">AuthorizationType</a></li>
<li><a href="#/api/sandkit.enums.BuildingClearance">BuildingClearance</a></li>
<li><a href="#/api/sandkit.enums.BuildMode">BuildMode</a></li>
<li><a href="#/api/sandkit.enums.CellType">CellType</a></li>
<li><a href="#/api/sandkit.enums.ComponentId">ComponentId</a></li>
<li><a href="#/api/sandkit.enums.DroneType">DroneType</a></li>
<li><a href="#/api/sandkit.enums.ElementType">ElementType</a></li>
<li><a href="#/api/sandkit.enums.ItemId">ItemId</a></li>
<li><a href="#/api/sandkit.enums.ItemType">ItemType</a></li>
<li><a href="#/api/sandkit.enums.KeyBinding">KeyBinding</a></li>
<li><a href="#/api/sandkit.enums.KeyState">KeyState</a></li>
<li><a href="#/api/sandkit.enums.MatterType">MatterType</a></li>
<li><a href="#/api/sandkit.enums.PickupType">PickupType</a></li>
<li><a href="#/api/sandkit.enums.ProjectileType">ProjectileType</a></li>
<li><a href="#/api/sandkit.enums.ReloadType">ReloadType</a></li>
<li><a href="#/api/sandkit.enums.Scene">Scene</a></li>
<li><a href="#/api/sandkit.enums.StructureType">StructureType</a></li>
<li><a href="#/api/sandkit.enums.Tech">Tech</a></li>
<li><a href="#/api/sandkit.enums.TechStatus">TechStatus</a></li>
<li><a href="#/api/sandkit.enums.WorldItemType">WorldItemType</a></li>
</ul>


## Shared domain types

- [asset](api/shared.asset.md)
- [engine](api/shared.engine.md)
- [jsonvalue](api/shared.jsonvalue.md)
- [nominal](api/shared.nominal.md)
- [player](api/shared.player.md)

## Electron

Host preload bridge (`window.electron`).
Not part of `sandkit`.

- [Overview](electron-bridge.md) — when to use the bridge and IPC patterns
- [API](api/electron.md) — generated `electron` reference

## Mod files

Not runtime `sandkit` objects.
Import from `@sandustry-modding/types/configs`.

- [TypeScript types](api/configs.md) — `modinfo.json`, `patches.json`, and `workshop.json`
- [JSON Schema](schemas.md) — raw schema URLs for editors

</div>

