- [Home](/)
- [Namespaces](modules.md)
  - [sandkit](api/sandkit.md)
  - [sandkit.api](api/sandkit.api.md)
  - [sandkit.api (worker)](api/sandkit.api.worker.md)
  - [sandkit.engine](api/sandkit.engine.md)
  - [sandkit.react](api/sandkit.react.md)
- [configs](api/configs.md)
- [JSON Schema](schemas.md)
- [Full API reference](full.md)

---

# Main thread

- Player & controls
  - [player](api/sandkit.api.player.md)
    - [buildings](api/sandkit.api.player.buildings.md)
    - [inventory](api/sandkit.api.player.inventory.md)
  - [input](api/sandkit.api.input.md)
  - [action](api/sandkit.api.action.md)
  - [tools](api/sandkit.api.tools.md)
    - [grabber](api/sandkit.api.tools.grabber.md)
  - [camera](api/sandkit.api.camera.md)
  - [authorization](api/sandkit.api.authorization.md)
  - [cooldown](api/sandkit.api.cooldown.md)
- World & simulation
  - [grid](api/sandkit.api.grid.md)
  - [world](api/sandkit.api.world.md)
    - [pickups](api/sandkit.api.world.pickups.md)
  - [pickups](api/sandkit.api.pickups.md)
  - [elements](api/sandkit.api.elements.md)
  - [terrains](api/sandkit.api.terrains.md)
  - [entities](api/sandkit.api.entities.md)
  - [fire](api/sandkit.api.fire.md)
  - [excavation](api/sandkit.api.excavation.md)
  - [reactions](api/sandkit.api.reactions.md)
  - [raycast](api/sandkit.api.raycast.md)
  - [random](api/sandkit.api.random.md)
  - [time](api/sandkit.api.time.md)
  - [maps](api/sandkit.api.maps.md)
- Factory & building
  - [structures](api/sandkit.api.structures.md)
    - [processing](api/sandkit.api.structures.processing.md)
    - [recipes](api/sandkit.api.structures.recipes.md)
  - [building](api/sandkit.api.building.md)
  - [processing](api/sandkit.api.processing.md)
  - [collector](api/sandkit.api.collector.md)
  - [energy](api/sandkit.api.energy.md)
  - [structureBehaviors](api/sandkit.api.structureBehaviors.md)
  - [patterns](api/sandkit.api.patterns.md)
  - [pipes](api/sandkit.api.pipes.md)
  - [factory](api/sandkit.api.factory.md)
  - [blueprints](api/sandkit.api.blueprints.md)
- UI & media
  - [ui](api/sandkit.api.ui.md)
    - [navigation](api/sandkit.api.ui.navigation.md)
    - [overlays](api/sandkit.api.ui.overlays.md)
  - [sprites](api/sandkit.api.sprites.md)
  - [lights](api/sandkit.api.lights.md)
    - [persistent](api/sandkit.api.lights.persistent.md)
    - [temporary](api/sandkit.api.lights.temporary.md)
  - [effects](api/sandkit.api.effects.md)
  - [rendering](api/sandkit.api.rendering.md)
  - [sound](api/sandkit.api.sound.md)
  - [i18n](api/sandkit.api.i18n.md)
  - [scene](api/sandkit.api.scene.md)
- Progression & items
  - [tech](api/sandkit.api.tech.md)
    - [conservatory](api/sandkit.api.tech.conservatory.md)
  - [upgrades](api/sandkit.api.upgrades.md)
  - [discoveries](api/sandkit.api.discoveries.md)
  - [progression](api/sandkit.api.progression.md)
  - [resources](api/sandkit.api.resources.md)
  - [items](api/sandkit.api.items.md)
  - [projectiles](api/sandkit.api.projectiles.md)
- Mods & runtime
  - [mods](api/sandkit.api.mods.md)
  - [settings](api/sandkit.api.settings.md)
  - [storage](api/sandkit.api.storage.md)
    - [local](api/sandkit.api.storage.local.md)
  - [assets](api/sandkit.api.assets.md)
  - [hooks](api/sandkit.api.hooks.md)
  - [events](api/sandkit.api.events.md)
  - [triggers](api/sandkit.api.triggers.md)
  - [schedule](api/sandkit.api.schedule.md)
  - [workers](api/sandkit.api.workers.md)
  - [shared](api/sandkit.api.shared.md)
    - [buffers](api/sandkit.api.shared.buffers.md)
  - [signals](api/sandkit.api.signals.md)
    - [targets](api/sandkit.api.signals.targets.md)
  - [utils](api/sandkit.api.utils.md)
  - [constants](api/sandkit.api.constants.md)
  - [gameConfig](api/sandkit.api.gameConfig.md)
  - [game](api/sandkit.api.game.md)

---

# Worker thread

- [effects](api/sandkit.api.effects.worker.md)
- [elements](api/sandkit.api.elements.worker.md)
- [events](api/sandkit.api.events.worker.md)
- [fire](api/sandkit.api.fire.worker.md)
- [grid](api/sandkit.api.grid.worker.md)
- [hooks](api/sandkit.api.hooks.worker.md)
- [lights](api/sandkit.api.lights.worker.md)
  - [temporary](api/sandkit.api.lights.temporary.worker.md)
- [main](api/sandkit.api.main.worker.md)
- [maps](api/sandkit.api.maps.worker.md)
- [player](api/sandkit.api.player.worker.md)
- [shared](api/sandkit.api.shared.worker.md)
  - [buffers](api/sandkit.api.shared.buffers.worker.md)
- [structures](api/sandkit.api.structures.worker.md)
  - [processing](api/sandkit.api.structures.processing.worker.md)
- [terrains](api/sandkit.api.terrains.worker.md)
- [ui](api/sandkit.api.ui.worker.md)
- [worker](api/sandkit.api.worker.worker.md)
- [world](api/sandkit.api.world.worker.md)

---

# Engine

- Game & factory
  - [game](api/sandkit.engine.api.game.md)
  - [factory](api/sandkit.engine.api.factory.md)
  - [conveyors](api/sandkit.engine.api.conveyors.md)
  - [queue](api/sandkit.engine.api.queue.md)
  - [heatTransfer](api/sandkit.engine.api.heatTransfer.md)
- Entities & drones
  - [entities](api/sandkit.engine.api.entities.md)
  - [drones](api/sandkit.engine.api.drones.md)
  - [sweeperDrone](api/sandkit.engine.api.sweeperDrone.md)
  - [launchers](api/sandkit.engine.api.launchers.md)
  - [swarmConsole](api/sandkit.engine.api.swarmConsole.md)
- World & terrain
  - [matters](api/sandkit.engine.api.matters.md)
  - [foliage](api/sandkit.engine.api.foliage.md)
  - [wall](api/sandkit.engine.api.wall.md)
  - [shadows](api/sandkit.engine.api.shadows.md)
  - [portals](api/sandkit.engine.api.portals.md)
  - [teleportZones](api/sandkit.engine.api.teleportZones.md)
  - [strataform](api/sandkit.engine.api.strataform.md)
- Prefabs & blueprints
  - [prefabData](api/sandkit.engine.api.prefabData.md)
  - [prefabDecor](api/sandkit.engine.api.prefabDecor.md)
  - [prefabulator](api/sandkit.engine.api.prefabulator.md)
  - [blueprints](api/sandkit.engine.api.blueprints.md)
  - [clipboard](api/sandkit.engine.api.clipboard.md)
- Materials & pickers
  - [auralite](api/sandkit.engine.api.auralite.md)
  - [prismaline](api/sandkit.engine.api.prismaline.md)
  - [prismite](api/sandkit.engine.api.prismite.md)
  - [augments](api/sandkit.engine.api.augments.md)
  - [colorPicker](api/sandkit.engine.api.colorPicker.md)
  - [coloringTool](api/sandkit.engine.api.coloringTool.md)
  - [foundationColorPicker](api/sandkit.engine.api.foundationColorPicker.md)
  - [lightColorPicker](api/sandkit.engine.api.lightColorPicker.md)
- Debug & misc
  - [debug](api/sandkit.engine.api.debug.md)
  - [extensions](api/sandkit.engine.api.extensions.md)
  - [misc](api/sandkit.engine.api.misc.md)
  - [tutorialBuild](api/sandkit.engine.api.tutorialBuild.md)
  - [usageTracker](api/sandkit.engine.api.usageTracker.md)
  - [workerLocal](api/sandkit.engine.api.workerLocal.md)

---

# Enums

- [Overview](api/sandkit.enums.md)
- [AbilityType](api/sandkit.enums.AbilityType.md)
- [ActionState](api/sandkit.enums.ActionState.md)
- [ActionType](api/sandkit.enums.ActionType.md)
- [AuthorizationType](api/sandkit.enums.AuthorizationType.md)
- [BuildingClearance](api/sandkit.enums.BuildingClearance.md)
- [BuildMode](api/sandkit.enums.BuildMode.md)
- [CellType](api/sandkit.enums.CellType.md)
- [ComponentId](api/sandkit.enums.ComponentId.md)
- [DroneType](api/sandkit.enums.DroneType.md)
- [ElementType](api/sandkit.enums.ElementType.md)
- [ItemId](api/sandkit.enums.ItemId.md)
- [ItemType](api/sandkit.enums.ItemType.md)
- [KeyBinding](api/sandkit.enums.KeyBinding.md)
- [KeyState](api/sandkit.enums.KeyState.md)
- [MatterType](api/sandkit.enums.MatterType.md)
- [PickupType](api/sandkit.enums.PickupType.md)
- [ProjectileType](api/sandkit.enums.ProjectileType.md)
- [ReloadType](api/sandkit.enums.ReloadType.md)
- [Scene](api/sandkit.enums.Scene.md)
- [StructureType](api/sandkit.enums.StructureType.md)
- [Tech](api/sandkit.enums.Tech.md)
- [TechStatus](api/sandkit.enums.TechStatus.md)
- [WorldItemType](api/sandkit.enums.WorldItemType.md)

---

# Shared types

- [asset](api/shared.asset.md)
- [engine](api/shared.engine.md)
- [jsonvalue](api/shared.jsonvalue.md)
- [nominal](api/shared.nominal.md)
- [player](api/shared.player.md)

---

# Other

- [sandkit.api.building.StructureType](api/sandkit.api.building.StructureType.md)
- [sandkit.api.elements.MatterType](api/sandkit.api.elements.MatterType.md)
- [types](api/types.md)
