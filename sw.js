if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.a793211b.js",revision:null},{url:"assets/404.md.a793211b.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.566a1400.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.566a1400.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.c974015a.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.c974015a.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.ef2404a0.js",revision:null},{url:"assets/animation-controllers_death-commands.md.ef2404a0.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.087a5d82.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.087a5d82.lean.js",revision:null},{url:"assets/animation-controllers_index.md.f4b0258c.js",revision:null},{url:"assets/animation-controllers_index.md.f4b0258c.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.11029a08.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.11029a08.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.7d355d21.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.7d355d21.lean.js",revision:null},{url:"assets/app.9c9c6aad.js",revision:null},{url:"assets/blocks_applying-effects.md.2eb6ea4c.js",revision:null},{url:"assets/blocks_applying-effects.md.2eb6ea4c.lean.js",revision:null},{url:"assets/blocks_block-materials.md.29ed6b1a.js",revision:null},{url:"assets/blocks_block-materials.md.29ed6b1a.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.4e0a92fe.js",revision:null},{url:"assets/blocks_block-shapes.md.4e0a92fe.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.43457b2b.js",revision:null},{url:"assets/blocks_block-sounds.md.43457b2b.lean.js",revision:null},{url:"assets/blocks_block-tags.md.6c65c566.js",revision:null},{url:"assets/blocks_block-tags.md.6c65c566.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.847f25bd.js",revision:null},{url:"assets/blocks_block-texture-variation.md.847f25bd.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.b7ff915f.js",revision:null},{url:"assets/blocks_blocks-16.md.b7ff915f.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.c6848810.js",revision:null},{url:"assets/blocks_blocks-intro.md.c6848810.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.781e4c3c.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.781e4c3c.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.26a54174.js",revision:null},{url:"assets/blocks_custom-tree.md.26a54174.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.c09aed68.js",revision:null},{url:"assets/blocks_fake-blocks.md.c09aed68.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.1ee45d9c.js",revision:null},{url:"assets/blocks_flipbook-textures.md.1ee45d9c.lean.js",revision:null},{url:"assets/blocks_index.md.a98740d1.js",revision:null},{url:"assets/blocks_index.md.a98740d1.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.ae4be220.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.ae4be220.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.fec5092f.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.fec5092f.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.13a2f76e.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.13a2f76e.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.dabf8cb1.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.dabf8cb1.lean.js",revision:null},{url:"assets/chunks/AlgoliaSearch.802ff808.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.d7751e9d.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.ad3e5e62.js",revision:null},{url:"assets/commands_block-states.md.ad3e5e62.lean.js",revision:null},{url:"assets/commands_index.md.3c171ce7.js",revision:null},{url:"assets/commands_index.md.3c171ce7.lean.js",revision:null},{url:"assets/commands_mcfunction.md.45508d64.js",revision:null},{url:"assets/commands_mcfunction.md.45508d64.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.f99d22eb.js",revision:null},{url:"assets/commands_nbt-commands.md.f99d22eb.lean.js",revision:null},{url:"assets/commands_new-execute.md.8af38f02.js",revision:null},{url:"assets/commands_new-execute.md.8af38f02.lean.js",revision:null},{url:"assets/commands_on-death.md.0a50fef1.js",revision:null},{url:"assets/commands_on-death.md.0a50fef1.lean.js",revision:null},{url:"assets/commands_on-first-join.md.d57ed882.js",revision:null},{url:"assets/commands_on-first-join.md.d57ed882.lean.js",revision:null},{url:"assets/commands_on-join.md.b48caa1b.js",revision:null},{url:"assets/commands_on-join.md.b48caa1b.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.393e4337.js",revision:null},{url:"assets/commands_relative-coordinates.md.393e4337.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.42e0c91e.js",revision:null},{url:"assets/commands_scoreboard-operations.md.42e0c91e.lean.js",revision:null},{url:"assets/commands_selectors.md.14c3ec42.js",revision:null},{url:"assets/commands_selectors.md.14c3ec42.lean.js",revision:null},{url:"assets/commands_tellraw.md.75eadd5f.js",revision:null},{url:"assets/commands_tellraw.md.75eadd5f.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.2ab1cf05.js",revision:null},{url:"assets/commands_tick_json-creations.md.2ab1cf05.lean.js",revision:null},{url:"assets/commands_timers.md.e6e5a323.js",revision:null},{url:"assets/commands_timers.md.e6e5a323.lean.js",revision:null},{url:"assets/concepts_contents.md.aa5cfe93.js",revision:null},{url:"assets/concepts_contents.md.aa5cfe93.lean.js",revision:null},{url:"assets/concepts_emojis.md.0ad5a09e.js",revision:null},{url:"assets/concepts_emojis.md.0ad5a09e.lean.js",revision:null},{url:"assets/concepts_index.md.bf533a00.js",revision:null},{url:"assets/concepts_index.md.bf533a00.lean.js",revision:null},{url:"assets/concepts_molang.md.335b76b3.js",revision:null},{url:"assets/concepts_molang.md.335b76b3.lean.js",revision:null},{url:"assets/concepts_namespaces.md.e26befd9.js",revision:null},{url:"assets/concepts_namespaces.md.e26befd9.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.04fa5119.js",revision:null},{url:"assets/concepts_overwriting-assets.md.04fa5119.lean.js",revision:null},{url:"assets/concepts_shaders.md.bc43828a.js",revision:null},{url:"assets/concepts_shaders.md.bc43828a.lean.js",revision:null},{url:"assets/concepts_sounds.md.0ab16f76.js",revision:null},{url:"assets/concepts_sounds.md.0ab16f76.lean.js",revision:null},{url:"assets/concepts_subpacks.md.838b6a28.js",revision:null},{url:"assets/concepts_subpacks.md.838b6a28.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.f0a4a2ee.js",revision:null},{url:"assets/concepts_text-and-translations.md.f0a4a2ee.lean.js",revision:null},{url:"assets/concepts_textures-list.md.dd468ff9.js",revision:null},{url:"assets/concepts_textures-list.md.dd468ff9.lean.js",revision:null},{url:"assets/contribute-how-to.md.e7af92d2.js",revision:null},{url:"assets/contribute-how-to.md.e7af92d2.lean.js",revision:null},{url:"assets/contribute-style.md.802a7d87.js",revision:null},{url:"assets/contribute-style.md.802a7d87.lean.js",revision:null},{url:"assets/contribute.md.c2273eb3.js",revision:null},{url:"assets/contribute.md.c2273eb3.lean.js",revision:null},{url:"assets/discord.md.5b2c425c.js",revision:null},{url:"assets/discord.md.5b2c425c.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.e8451074.js",revision:null},{url:"assets/documentation_advanced-molang.md.e8451074.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.0e83e0c3.js",revision:null},{url:"assets/documentation_creative-categories.md.0e83e0c3.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.3fb8834a.js",revision:null},{url:"assets/documentation_fog-ids.md.3fb8834a.lean.js",revision:null},{url:"assets/documentation_index.md.2ac408b1.js",revision:null},{url:"assets/documentation_index.md.2ac408b1.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.781a119a.js",revision:null},{url:"assets/documentation_material-config-description.md.781a119a.lean.js",revision:null},{url:"assets/documentation_materials.md.2bb44d84.js",revision:null},{url:"assets/documentation_materials.md.2bb44d84.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.be374529.js",revision:null},{url:"assets/documentation_pack-structure.md.be374529.lean.js",revision:null},{url:"assets/documentation_projectiles.md.eea2ad66.js",revision:null},{url:"assets/documentation_projectiles.md.eea2ad66.lean.js",revision:null},{url:"assets/documentation_queries.md.b5506983.js",revision:null},{url:"assets/documentation_queries.md.b5506983.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.5cd1eb56.js",revision:null},{url:"assets/documentation_shared-constructs.md.5cd1eb56.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.4e97252a.js",revision:null},{url:"assets/documentation_sound-definitions.md.4e97252a.lean.js",revision:null},{url:"assets/entities_boat-entities.md.d4374448.js",revision:null},{url:"assets/entities_boat-entities.md.d4374448.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.6d2152ad.js",revision:null},{url:"assets/entities_detecting-other-entities.md.6d2152ad.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.2a93d1aa.js",revision:null},{url:"assets/entities_disabling-team-damage.md.2a93d1aa.lean.js",revision:null},{url:"assets/entities_dummy-components.md.073c7ce7.js",revision:null},{url:"assets/entities_dummy-components.md.073c7ce7.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.04f63337.js",revision:null},{url:"assets/entities_dummy-entities.md.04f63337.lean.js",revision:null},{url:"assets/entities_entity-attack.md.a060120d.js",revision:null},{url:"assets/entities_entity-attack.md.a060120d.lean.js",revision:null},{url:"assets/entities_entity-events.md.c78a0c67.js",revision:null},{url:"assets/entities_entity-events.md.c78a0c67.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.5ce036df.js",revision:null},{url:"assets/entities_entity-holds-item.md.5ce036df.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d69f11ee.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d69f11ee.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.07ac9a61.js",revision:null},{url:"assets/entities_entity-intro-rp.md.07ac9a61.lean.js",revision:null},{url:"assets/entities_entity-movement.md.409accfe.js",revision:null},{url:"assets/entities_entity-movement.md.409accfe.lean.js",revision:null},{url:"assets/entities_entity-properties.md.89d8a711.js",revision:null},{url:"assets/entities_entity-properties.md.89d8a711.lean.js",revision:null},{url:"assets/entities_flying-entities.md.7e569fa8.js",revision:null},{url:"assets/entities_flying-entities.md.7e569fa8.lean.js",revision:null},{url:"assets/entities_index.md.a128bbe3.js",revision:null},{url:"assets/entities_index.md.a128bbe3.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.fd323414.js",revision:null},{url:"assets/entities_introduction-to-aec.md.fd323414.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.181caf39.js",revision:null},{url:"assets/entities_invulnerable-entities.md.181caf39.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.39f84792.js",revision:null},{url:"assets/entities_look-at-entity.md.39f84792.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.b8fb1080.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.b8fb1080.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.9e4a99eb.js",revision:null},{url:"assets/entities_npc-dialogs.md.9e4a99eb.lean.js",revision:null},{url:"assets/entities_render-controllers.md.52804757.js",revision:null},{url:"assets/entities_render-controllers.md.52804757.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.f2de75e4.js",revision:null},{url:"assets/entities_runtime-identifier.md.f2de75e4.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.bb6943d4.js",revision:null},{url:"assets/entities_sleeping-entities.md.bb6943d4.lean.js",revision:null},{url:"assets/entities_solid-entities.md.1e59a6fa.js",revision:null},{url:"assets/entities_solid-entities.md.1e59a6fa.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.9f9ca2a5.js",revision:null},{url:"assets/entities_spawn-rules.md.9f9ca2a5.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.863b1b0c.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.863b1b0c.lean.js",revision:null},{url:"assets/entities_timers.md.ddbf06fb.js",revision:null},{url:"assets/entities_timers.md.ddbf06fb.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.765a8432.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.765a8432.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.7eae3f93.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.7eae3f93.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.db6953e3.js",revision:null},{url:"assets/entities_village-mechanic.md.db6953e3.lean.js",revision:null},{url:"assets/entities_vuc-full.md.61513259.lean.js",revision:null},{url:"assets/entities_vusr-full.md.d7c41b1d.js",revision:null},{url:"assets/entities_vusr-full.md.d7c41b1d.lean.js",revision:null},{url:"assets/graph-test.md.4f0839a1.js",revision:null},{url:"assets/graph-test.md.4f0839a1.lean.js",revision:null},{url:"assets/guide_addons.md.6ff1aea0.js",revision:null},{url:"assets/guide_addons.md.6ff1aea0.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.5c7ec1b4.js",revision:null},{url:"assets/guide_advancedmanifest.md.5c7ec1b4.lean.js",revision:null},{url:"assets/guide_blockbench.md.65e6fb81.js",revision:null},{url:"assets/guide_blockbench.md.65e6fb81.lean.js",revision:null},{url:"assets/guide_custom-entity.md.a9a7fc11.js",revision:null},{url:"assets/guide_custom-entity.md.a9a7fc11.lean.js",revision:null},{url:"assets/guide_custom-item.md.a4bc92dd.js",revision:null},{url:"assets/guide_custom-item.md.a4bc92dd.lean.js",revision:null},{url:"assets/guide_download-packs.md.b6258ff6.js",revision:null},{url:"assets/guide_download-packs.md.b6258ff6.lean.js",revision:null},{url:"assets/guide_format-version.md.e5d4e5a2.js",revision:null},{url:"assets/guide_format-version.md.e5d4e5a2.lean.js",revision:null},{url:"assets/guide_index.md.018f3aa0.js",revision:null},{url:"assets/guide_index.md.018f3aa0.lean.js",revision:null},{url:"assets/guide_introduction.md.3cd130c5.js",revision:null},{url:"assets/guide_introduction.md.3cd130c5.lean.js",revision:null},{url:"assets/guide_loot-table.md.446cc963.js",revision:null},{url:"assets/guide_loot-table.md.446cc963.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.787d34c2.js",revision:null},{url:"assets/guide_project-setup-android.md.787d34c2.lean.js",revision:null},{url:"assets/guide_project-setup.md.d8ce5378.js",revision:null},{url:"assets/guide_project-setup.md.d8ce5378.lean.js",revision:null},{url:"assets/guide_software-preparation.md.1ba355cd.js",revision:null},{url:"assets/guide_software-preparation.md.1ba355cd.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.d86d5449.js",revision:null},{url:"assets/guide_troubleshooting.md.d86d5449.lean.js",revision:null},{url:"assets/guide_understanding-json.md.2242c838.js",revision:null},{url:"assets/guide_understanding-json.md.2242c838.lean.js",revision:null},{url:"assets/hacktoberfest.md.d8e092dc.js",revision:null},{url:"assets/hacktoberfest.md.d8e092dc.lean.js",revision:null},{url:"assets/index.md.e79bea7a.js",revision:null},{url:"assets/index.md.e79bea7a.lean.js",revision:null},{url:"assets/items_attachables.md.7db909f5.js",revision:null},{url:"assets/items_attachables.md.7db909f5.lean.js",revision:null},{url:"assets/items_custom-armor.md.c2d2493b.js",revision:null},{url:"assets/items_custom-armor.md.c2d2493b.lean.js",revision:null},{url:"assets/items_custom-weapon.md.fdd40742.js",revision:null},{url:"assets/items_custom-weapon.md.fdd40742.lean.js",revision:null},{url:"assets/items_enchantments.md.8d87a124.js",revision:null},{url:"assets/items_enchantments.md.8d87a124.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.bccbfe14.js",revision:null},{url:"assets/items_equipped-item-commands.md.bccbfe14.lean.js",revision:null},{url:"assets/items_index.md.9e7ed71d.js",revision:null},{url:"assets/items_index.md.9e7ed71d.lean.js",revision:null},{url:"assets/items_item-identifiers.md.cadd7dcc.js",revision:null},{url:"assets/items_item-identifiers.md.cadd7dcc.lean.js",revision:null},{url:"assets/items_items-16.md.719110c1.js",revision:null},{url:"assets/items_items-16.md.719110c1.lean.js",revision:null},{url:"assets/items_items-intro.md.f078d8fd.js",revision:null},{url:"assets/items_items-intro.md.f078d8fd.lean.js",revision:null},{url:"assets/items_spawning-items.md.65778e47.js",revision:null},{url:"assets/items_spawning-items.md.65778e47.lean.js",revision:null},{url:"assets/items_throwable.md.25481bd5.js",revision:null},{url:"assets/items_throwable.md.25481bd5.lean.js",revision:null},{url:"assets/items_tool-durability.md.3ade0137.js",revision:null},{url:"assets/items_tool-durability.md.3ade0137.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.f2869645.js",revision:null},{url:"assets/items_troubleshooting-items.md.f2869645.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.c2a344e1.js",revision:null},{url:"assets/items_vanilla-usage-items.md.c2a344e1.lean.js",revision:null},{url:"assets/items_vui-full.md.f1c2b4f6.js",revision:null},{url:"assets/items_vui-full.md.f1c2b4f6.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.2ad3a412.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.2ad3a412.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cb64c903.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cb64c903.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.9ced61b1.js",revision:null},{url:"assets/json-ui_best-practices.md.9ced61b1.lean.js",revision:null},{url:"assets/json-ui_index.md.76910147.js",revision:null},{url:"assets/json-ui_index.md.76910147.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.017a36cf.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.017a36cf.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.d19cd378.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.d19cd378.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.6b06642a.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.6b06642a.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.d95fc1cd.js",revision:null},{url:"assets/json-ui_string-to-number.md.d95fc1cd.lean.js",revision:null},{url:"assets/loot_index.md.d4ba4b76.js",revision:null},{url:"assets/loot_index.md.d4ba4b76.lean.js",revision:null},{url:"assets/loot_item-functions.md.8b9b93bc.js",revision:null},{url:"assets/loot_item-functions.md.8b9b93bc.lean.js",revision:null},{url:"assets/loot_loot-tables.md.5f6caca5.js",revision:null},{url:"assets/loot_loot-tables.md.5f6caca5.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.68c31e7a.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.68c31e7a.lean.js",revision:null},{url:"assets/loot_recipes.md.4e1fa9c2.js",revision:null},{url:"assets/loot_recipes.md.4e1fa9c2.lean.js",revision:null},{url:"assets/loot_trade-tables.md.0e983438.js",revision:null},{url:"assets/loot_trade-tables.md.0e983438.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.92e6191f.js",revision:null},{url:"assets/loot_trading-behavior.md.92e6191f.lean.js",revision:null},{url:"assets/meta_addon-performance.md.992bcfb9.js",revision:null},{url:"assets/meta_addon-performance.md.992bcfb9.lean.js",revision:null},{url:"assets/meta_index.md.f39f160b.js",revision:null},{url:"assets/meta_index.md.f39f160b.lean.js",revision:null},{url:"assets/meta_jq.md.b74a7bd2.js",revision:null},{url:"assets/meta_jq.md.b74a7bd2.lean.js",revision:null},{url:"assets/meta_style-guide.md.47339ca1.js",revision:null},{url:"assets/meta_style-guide.md.47339ca1.lean.js",revision:null},{url:"assets/meta_useful-links.md.2183c676.js",revision:null},{url:"assets/meta_useful-links.md.2183c676.lean.js",revision:null},{url:"assets/meta_using-schemas.md.aeca474d.js",revision:null},{url:"assets/meta_using-schemas.md.aeca474d.lean.js",revision:null},{url:"assets/meta_version-control.md.dd8cddb3.js",revision:null},{url:"assets/meta_version-control.md.dd8cddb3.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.0b5a77c5.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.0b5a77c5.lean.js",revision:null},{url:"assets/nbt_index.md.2257db20.js",revision:null},{url:"assets/nbt_index.md.2257db20.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.b0b3a82c.js",revision:null},{url:"assets/nbt_mcstructure.md.b0b3a82c.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.aa21ff9a.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.aa21ff9a.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.a274885c.js",revision:null},{url:"assets/nbt_step-by-step-example.md.a274885c.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.df3bb0ef.js",revision:null},{url:"assets/nbt_structure-limits.md.df3bb0ef.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.6407b23d.js",revision:null},{url:"assets/particles_disabling-particles.md.6407b23d.lean.js",revision:null},{url:"assets/particles_index.md.ede61094.js",revision:null},{url:"assets/particles_index.md.ede61094.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.b7539ada.js",revision:null},{url:"assets/particles_particles-and-sounds.md.b7539ada.lean.js",revision:null},{url:"assets/particles_particles.md.8079f224.js",revision:null},{url:"assets/particles_particles.md.8079f224.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.b712dd90.js",revision:null},{url:"assets/particles_vanilla-particles.md.b712dd90.lean.js",revision:null},{url:"assets/privacy.md.e2049d7d.js",revision:null},{url:"assets/privacy.md.e2049d7d.lean.js",revision:null},{url:"assets/scripting_custom-command.md.7f2cf655.js",revision:null},{url:"assets/scripting_custom-command.md.7f2cf655.lean.js",revision:null},{url:"assets/scripting_game-tests.md.09644b58.js",revision:null},{url:"assets/scripting_game-tests.md.09644b58.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.da4e7f0b.js",revision:null},{url:"assets/scripting_gametest-form.md.da4e7f0b.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.1edcc4f8.js",revision:null},{url:"assets/scripting_gametest-qna.md.1edcc4f8.lean.js",revision:null},{url:"assets/scripting_index.md.d5d8a435.js",revision:null},{url:"assets/scripting_index.md.d5d8a435.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.602bcfdb.js",revision:null},{url:"assets/scripting_saving-loading.md.602bcfdb.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.5a280e83.js",revision:null},{url:"assets/scripting_scripting-intro.md.5a280e83.lean.js",revision:null},{url:"assets/scripting_typescript.md.cfdc88ec.js",revision:null},{url:"assets/scripting_typescript.md.cfdc88ec.lean.js",revision:null},{url:"assets/servers_index.md.04210b7d.js",revision:null},{url:"assets/servers_index.md.04210b7d.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.33f5a759.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.33f5a759.lean.js",revision:null},{url:"assets/servers_server-software.md.fab9bf44.js",revision:null},{url:"assets/servers_server-software.md.fab9bf44.lean.js",revision:null},{url:"assets/style.1e62f284.css",revision:null},{url:"assets/test.md.d53addf6.js",revision:null},{url:"assets/test.md.d53addf6.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.aeb8a0d5.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.aeb8a0d5.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.70735024.js",revision:null},{url:"assets/visuals_animation-effects.md.70735024.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.25a2ac4d.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.25a2ac4d.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.1417da55.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.1417da55.lean.js",revision:null},{url:"assets/visuals_death-animations.md.f3b21c1f.js",revision:null},{url:"assets/visuals_death-animations.md.f3b21c1f.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.58ad5f6d.js",revision:null},{url:"assets/visuals_glowing-texture.md.58ad5f6d.lean.js",revision:null},{url:"assets/visuals_index.md.feace33e.js",revision:null},{url:"assets/visuals_index.md.feace33e.lean.js",revision:null},{url:"assets/visuals_introduction.md.447de8e6.js",revision:null},{url:"assets/visuals_introduction.md.447de8e6.lean.js",revision:null},{url:"assets/visuals_leash-position.md.d872ac79.js",revision:null},{url:"assets/visuals_leash-position.md.d872ac79.lean.js",revision:null},{url:"assets/visuals_materials.md.0aa52314.js",revision:null},{url:"assets/visuals_materials.md.0aa52314.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.2266ade0.js",revision:null},{url:"assets/visuals_math-based-animations.md.2266ade0.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.06b1ecf4.js",revision:null},{url:"assets/visuals_player-geometry.md.06b1ecf4.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.eb72e236.js",revision:null},{url:"assets/visuals_remove-shadows.md.eb72e236.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.25be319a.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.25be319a.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.f2825aad.js",revision:null},{url:"assets/visuals_structure-presentation.md.f2825aad.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.605b1b91.js",revision:null},{url:"assets/vr_editing-your-first-model.md.605b1b91.lean.js",revision:null},{url:"assets/vr_index.md.a6ffee67.js",revision:null},{url:"assets/vr_index.md.a6ffee67.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.4e49a304.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.4e49a304.lean.js",revision:null},{url:"assets/vr_pack_setup.md.90c2a279.js",revision:null},{url:"assets/vr_pack_setup.md.90c2a279.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.c0b52f18.js",revision:null},{url:"assets/world-generation_biome-tags.md.c0b52f18.lean.js",revision:null},{url:"assets/world-generation_biomes.md.036ca29a.js",revision:null},{url:"assets/world-generation_biomes.md.036ca29a.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.de3509bd.js",revision:null},{url:"assets/world-generation_custom-ores.md.de3509bd.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.01a118d6.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.01a118d6.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.7771795a.js",revision:null},{url:"assets/world-generation_feature-types.md.7771795a.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.23f97e9e.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.23f97e9e.lean.js",revision:null},{url:"assets/world-generation_index.md.8e59e507.js",revision:null},{url:"assets/world-generation_index.md.8e59e507.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.dd60c9fc.js",revision:null},{url:"assets/world-generation_structure-features.md.dd60c9fc.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.b2f3d1fc.js",revision:null},{url:"assets/world-generation_surface-builder.md.b2f3d1fc.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.7c6629e1.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.7c6629e1.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
