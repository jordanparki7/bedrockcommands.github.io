if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let a={};const r=s=>l(s,t),u={module:{uri:t},exports:a,require:r};e[t]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.7e75bafd.js",revision:null},{url:"assets/404.md.7e75bafd.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.a9086e40.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.a9086e40.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ec81f69f.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ec81f69f.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.51f65be2.js",revision:null},{url:"assets/animation-controllers_death-commands.md.51f65be2.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.5edf68fc.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.5edf68fc.lean.js",revision:null},{url:"assets/animation-controllers_index.md.1da53911.js",revision:null},{url:"assets/animation-controllers_index.md.1da53911.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.5c57dcad.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.5c57dcad.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.19695439.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.19695439.lean.js",revision:null},{url:"assets/app.593edfad.js",revision:null},{url:"assets/blocks_applying-effects.md.cb0cd124.js",revision:null},{url:"assets/blocks_applying-effects.md.cb0cd124.lean.js",revision:null},{url:"assets/blocks_block-materials.md.8c10b86f.js",revision:null},{url:"assets/blocks_block-materials.md.8c10b86f.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.acabd426.js",revision:null},{url:"assets/blocks_block-shapes.md.acabd426.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.683a68b4.js",revision:null},{url:"assets/blocks_block-sounds.md.683a68b4.lean.js",revision:null},{url:"assets/blocks_block-tags.md.83e16735.js",revision:null},{url:"assets/blocks_block-tags.md.83e16735.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.83764c3f.js",revision:null},{url:"assets/blocks_block-texture-variation.md.83764c3f.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.cb12e849.js",revision:null},{url:"assets/blocks_blocks-16.md.cb12e849.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.cbf22367.js",revision:null},{url:"assets/blocks_blocks-intro.md.cbf22367.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.4b98844b.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.4b98844b.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.42868a6f.js",revision:null},{url:"assets/blocks_custom-tree.md.42868a6f.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.48712a3a.js",revision:null},{url:"assets/blocks_fake-blocks.md.48712a3a.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.e28e0d43.js",revision:null},{url:"assets/blocks_flipbook-textures.md.e28e0d43.lean.js",revision:null},{url:"assets/blocks_index.md.8a7184cd.js",revision:null},{url:"assets/blocks_index.md.8a7184cd.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.481ed7e2.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.481ed7e2.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.cc379293.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.cc379293.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.1907ef9d.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.1907ef9d.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.6cf305ca.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.6cf305ca.lean.js",revision:null},{url:"assets/chunks/AlgoliaSearch.8ac88c51.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.c5ae4c34.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_index.md.bf657eb7.js",revision:null},{url:"assets/commands_index.md.bf657eb7.lean.js",revision:null},{url:"assets/commands_mcfunction.md.a6f1156c.js",revision:null},{url:"assets/commands_mcfunction.md.a6f1156c.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.00433197.js",revision:null},{url:"assets/commands_nbt-commands.md.00433197.lean.js",revision:null},{url:"assets/commands_new-execute.md.1a66c881.js",revision:null},{url:"assets/commands_new-execute.md.1a66c881.lean.js",revision:null},{url:"assets/commands_on-death.md.c51e9cd7.js",revision:null},{url:"assets/commands_on-death.md.c51e9cd7.lean.js",revision:null},{url:"assets/commands_on-first-join.md.5f30c18f.js",revision:null},{url:"assets/commands_on-first-join.md.5f30c18f.lean.js",revision:null},{url:"assets/commands_on-join.md.8793508f.js",revision:null},{url:"assets/commands_on-join.md.8793508f.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.177206bf.js",revision:null},{url:"assets/commands_relative-coordinates.md.177206bf.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5be589f5.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5be589f5.lean.js",revision:null},{url:"assets/commands_selectors.md.5237c704.js",revision:null},{url:"assets/commands_selectors.md.5237c704.lean.js",revision:null},{url:"assets/commands_tellraw.md.ec822653.js",revision:null},{url:"assets/commands_tellraw.md.ec822653.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.872e0cea.js",revision:null},{url:"assets/commands_tick_json-creations.md.872e0cea.lean.js",revision:null},{url:"assets/commands_timers.md.6d1b7585.js",revision:null},{url:"assets/commands_timers.md.6d1b7585.lean.js",revision:null},{url:"assets/concepts_contents.md.ce4bf644.js",revision:null},{url:"assets/concepts_contents.md.ce4bf644.lean.js",revision:null},{url:"assets/concepts_emojis.md.daae624d.js",revision:null},{url:"assets/concepts_emojis.md.daae624d.lean.js",revision:null},{url:"assets/concepts_index.md.24301741.js",revision:null},{url:"assets/concepts_index.md.24301741.lean.js",revision:null},{url:"assets/concepts_molang.md.a53621e2.js",revision:null},{url:"assets/concepts_molang.md.a53621e2.lean.js",revision:null},{url:"assets/concepts_namespaces.md.f2fe03c2.js",revision:null},{url:"assets/concepts_namespaces.md.f2fe03c2.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.737bdfb5.js",revision:null},{url:"assets/concepts_overwriting-assets.md.737bdfb5.lean.js",revision:null},{url:"assets/concepts_shaders.md.a241d88e.js",revision:null},{url:"assets/concepts_shaders.md.a241d88e.lean.js",revision:null},{url:"assets/concepts_sounds.md.cbfca893.js",revision:null},{url:"assets/concepts_sounds.md.cbfca893.lean.js",revision:null},{url:"assets/concepts_subpacks.md.03daa17f.js",revision:null},{url:"assets/concepts_subpacks.md.03daa17f.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.c9f6bd15.js",revision:null},{url:"assets/concepts_text-and-translations.md.c9f6bd15.lean.js",revision:null},{url:"assets/concepts_textures-list.md.409f9932.js",revision:null},{url:"assets/concepts_textures-list.md.409f9932.lean.js",revision:null},{url:"assets/contribute-how-to.md.08ab09e5.js",revision:null},{url:"assets/contribute-how-to.md.08ab09e5.lean.js",revision:null},{url:"assets/contribute-style.md.8ea95c77.js",revision:null},{url:"assets/contribute-style.md.8ea95c77.lean.js",revision:null},{url:"assets/contribute.md.62c54353.js",revision:null},{url:"assets/contribute.md.62c54353.lean.js",revision:null},{url:"assets/discord.md.2a099616.js",revision:null},{url:"assets/discord.md.2a099616.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.6f86bc6b.js",revision:null},{url:"assets/documentation_advanced-molang.md.6f86bc6b.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.c650cc45.js",revision:null},{url:"assets/documentation_creative-categories.md.c650cc45.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.97a2dd03.js",revision:null},{url:"assets/documentation_fog-ids.md.97a2dd03.lean.js",revision:null},{url:"assets/documentation_index.md.6105c15f.js",revision:null},{url:"assets/documentation_index.md.6105c15f.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.2d567874.js",revision:null},{url:"assets/documentation_material-config-description.md.2d567874.lean.js",revision:null},{url:"assets/documentation_materials.md.432a45b5.js",revision:null},{url:"assets/documentation_materials.md.432a45b5.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.fa2cf219.js",revision:null},{url:"assets/documentation_pack-structure.md.fa2cf219.lean.js",revision:null},{url:"assets/documentation_projectiles.md.403b1cf6.js",revision:null},{url:"assets/documentation_projectiles.md.403b1cf6.lean.js",revision:null},{url:"assets/documentation_queries.md.b993f601.js",revision:null},{url:"assets/documentation_queries.md.b993f601.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.7b198491.js",revision:null},{url:"assets/documentation_shared-constructs.md.7b198491.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.4794b694.js",revision:null},{url:"assets/documentation_sound-definitions.md.4794b694.lean.js",revision:null},{url:"assets/entities_boat-entities.md.6a1aef12.js",revision:null},{url:"assets/entities_boat-entities.md.6a1aef12.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.26524407.js",revision:null},{url:"assets/entities_detecting-other-entities.md.26524407.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.c651bef4.js",revision:null},{url:"assets/entities_disabling-team-damage.md.c651bef4.lean.js",revision:null},{url:"assets/entities_dummy-components.md.d6e79144.js",revision:null},{url:"assets/entities_dummy-components.md.d6e79144.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.1f6a327a.js",revision:null},{url:"assets/entities_dummy-entities.md.1f6a327a.lean.js",revision:null},{url:"assets/entities_entity-attack.md.e87741db.js",revision:null},{url:"assets/entities_entity-attack.md.e87741db.lean.js",revision:null},{url:"assets/entities_entity-events.md.a2713d5d.js",revision:null},{url:"assets/entities_entity-events.md.a2713d5d.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.a4fccac7.js",revision:null},{url:"assets/entities_entity-holds-item.md.a4fccac7.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d34c1a3c.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d34c1a3c.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.b56d5cff.js",revision:null},{url:"assets/entities_entity-intro-rp.md.b56d5cff.lean.js",revision:null},{url:"assets/entities_entity-movement.md.e5cb08f9.js",revision:null},{url:"assets/entities_entity-movement.md.e5cb08f9.lean.js",revision:null},{url:"assets/entities_entity-properties.md.b2701657.js",revision:null},{url:"assets/entities_entity-properties.md.b2701657.lean.js",revision:null},{url:"assets/entities_flying-entities.md.44255d57.js",revision:null},{url:"assets/entities_flying-entities.md.44255d57.lean.js",revision:null},{url:"assets/entities_index.md.4a8246b2.js",revision:null},{url:"assets/entities_index.md.4a8246b2.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.d2a8a314.js",revision:null},{url:"assets/entities_introduction-to-aec.md.d2a8a314.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3084364d.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3084364d.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.76221a1b.js",revision:null},{url:"assets/entities_look-at-entity.md.76221a1b.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.65014007.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.65014007.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.dc4813d4.js",revision:null},{url:"assets/entities_npc-dialogs.md.dc4813d4.lean.js",revision:null},{url:"assets/entities_render-controllers.md.b48ad9c8.js",revision:null},{url:"assets/entities_render-controllers.md.b48ad9c8.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.528ed44d.js",revision:null},{url:"assets/entities_runtime-identifier.md.528ed44d.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.9420a5b3.js",revision:null},{url:"assets/entities_sleeping-entities.md.9420a5b3.lean.js",revision:null},{url:"assets/entities_solid-entities.md.6a8e355b.js",revision:null},{url:"assets/entities_solid-entities.md.6a8e355b.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.b8cfe0b3.js",revision:null},{url:"assets/entities_spawn-rules.md.b8cfe0b3.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.1ead8230.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.1ead8230.lean.js",revision:null},{url:"assets/entities_timers.md.6e3f85a1.js",revision:null},{url:"assets/entities_timers.md.6e3f85a1.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.95b42fba.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.95b42fba.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.5a62e616.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.5a62e616.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.6992dd25.js",revision:null},{url:"assets/entities_village-mechanic.md.6992dd25.lean.js",revision:null},{url:"assets/entities_vuc-full.md.d8d60124.lean.js",revision:null},{url:"assets/entities_vusr-full.md.7e8b660b.js",revision:null},{url:"assets/entities_vusr-full.md.7e8b660b.lean.js",revision:null},{url:"assets/graph-test.md.869e20f8.js",revision:null},{url:"assets/graph-test.md.869e20f8.lean.js",revision:null},{url:"assets/guide_addons.md.41e47096.js",revision:null},{url:"assets/guide_addons.md.41e47096.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.0b57d176.js",revision:null},{url:"assets/guide_advancedmanifest.md.0b57d176.lean.js",revision:null},{url:"assets/guide_blockbench.md.aa2ee266.js",revision:null},{url:"assets/guide_blockbench.md.aa2ee266.lean.js",revision:null},{url:"assets/guide_custom-entity.md.1d4a120c.js",revision:null},{url:"assets/guide_custom-entity.md.1d4a120c.lean.js",revision:null},{url:"assets/guide_custom-item.md.03106688.js",revision:null},{url:"assets/guide_custom-item.md.03106688.lean.js",revision:null},{url:"assets/guide_download-packs.md.91435987.js",revision:null},{url:"assets/guide_download-packs.md.91435987.lean.js",revision:null},{url:"assets/guide_format-version.md.8257f5cf.js",revision:null},{url:"assets/guide_format-version.md.8257f5cf.lean.js",revision:null},{url:"assets/guide_index.md.afcd8c05.js",revision:null},{url:"assets/guide_index.md.afcd8c05.lean.js",revision:null},{url:"assets/guide_introduction.md.180cf31d.js",revision:null},{url:"assets/guide_introduction.md.180cf31d.lean.js",revision:null},{url:"assets/guide_loot-table.md.dfafcaf1.js",revision:null},{url:"assets/guide_loot-table.md.dfafcaf1.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.7ae75920.js",revision:null},{url:"assets/guide_project-setup-android.md.7ae75920.lean.js",revision:null},{url:"assets/guide_project-setup.md.8adc0341.js",revision:null},{url:"assets/guide_project-setup.md.8adc0341.lean.js",revision:null},{url:"assets/guide_software-preparation.md.f122c143.js",revision:null},{url:"assets/guide_software-preparation.md.f122c143.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.61f24cbd.js",revision:null},{url:"assets/guide_troubleshooting.md.61f24cbd.lean.js",revision:null},{url:"assets/guide_understanding-json.md.a76df815.js",revision:null},{url:"assets/guide_understanding-json.md.a76df815.lean.js",revision:null},{url:"assets/hacktoberfest.md.71c32e11.js",revision:null},{url:"assets/hacktoberfest.md.71c32e11.lean.js",revision:null},{url:"assets/index.md.20d1c33f.js",revision:null},{url:"assets/index.md.20d1c33f.lean.js",revision:null},{url:"assets/items_attachables.md.50dc6388.js",revision:null},{url:"assets/items_attachables.md.50dc6388.lean.js",revision:null},{url:"assets/items_custom-armor.md.5a044946.js",revision:null},{url:"assets/items_custom-armor.md.5a044946.lean.js",revision:null},{url:"assets/items_custom-weapon.md.3777499b.js",revision:null},{url:"assets/items_custom-weapon.md.3777499b.lean.js",revision:null},{url:"assets/items_enchantments.md.60782c7d.js",revision:null},{url:"assets/items_enchantments.md.60782c7d.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.808b24a0.js",revision:null},{url:"assets/items_equipped-item-commands.md.808b24a0.lean.js",revision:null},{url:"assets/items_index.md.e6abeb7c.js",revision:null},{url:"assets/items_index.md.e6abeb7c.lean.js",revision:null},{url:"assets/items_item-identifiers.md.6a53f7fc.js",revision:null},{url:"assets/items_item-identifiers.md.6a53f7fc.lean.js",revision:null},{url:"assets/items_items-16.md.8e93482a.js",revision:null},{url:"assets/items_items-16.md.8e93482a.lean.js",revision:null},{url:"assets/items_items-intro.md.3b260dce.js",revision:null},{url:"assets/items_items-intro.md.3b260dce.lean.js",revision:null},{url:"assets/items_spawning-items.md.bb468d28.js",revision:null},{url:"assets/items_spawning-items.md.bb468d28.lean.js",revision:null},{url:"assets/items_throwable.md.1cdb0d5d.js",revision:null},{url:"assets/items_throwable.md.1cdb0d5d.lean.js",revision:null},{url:"assets/items_tool-durability.md.2d35db8b.js",revision:null},{url:"assets/items_tool-durability.md.2d35db8b.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.b2f8facc.js",revision:null},{url:"assets/items_troubleshooting-items.md.b2f8facc.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.4e9ac6c0.js",revision:null},{url:"assets/items_vanilla-usage-items.md.4e9ac6c0.lean.js",revision:null},{url:"assets/items_vui-full.md.a5c01237.js",revision:null},{url:"assets/items_vui-full.md.a5c01237.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.0c066374.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.0c066374.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.a2ceb75e.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.a2ceb75e.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.b64f34f1.js",revision:null},{url:"assets/json-ui_best-practices.md.b64f34f1.lean.js",revision:null},{url:"assets/json-ui_index.md.1bdaefd1.js",revision:null},{url:"assets/json-ui_index.md.1bdaefd1.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2abecbee.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2abecbee.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.d58c21cc.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.d58c21cc.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.ce0043dc.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.ce0043dc.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.8d8053ef.js",revision:null},{url:"assets/json-ui_string-to-number.md.8d8053ef.lean.js",revision:null},{url:"assets/loot_index.md.09cc69b5.js",revision:null},{url:"assets/loot_index.md.09cc69b5.lean.js",revision:null},{url:"assets/loot_item-functions.md.33beb8d2.js",revision:null},{url:"assets/loot_item-functions.md.33beb8d2.lean.js",revision:null},{url:"assets/loot_loot-tables.md.f0123b1c.js",revision:null},{url:"assets/loot_loot-tables.md.f0123b1c.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.e8769b50.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.e8769b50.lean.js",revision:null},{url:"assets/loot_recipes.md.f35a9238.js",revision:null},{url:"assets/loot_recipes.md.f35a9238.lean.js",revision:null},{url:"assets/loot_trade-tables.md.5b9c97df.js",revision:null},{url:"assets/loot_trade-tables.md.5b9c97df.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.ee27104e.js",revision:null},{url:"assets/loot_trading-behavior.md.ee27104e.lean.js",revision:null},{url:"assets/meta_addon-performance.md.7061c6b9.js",revision:null},{url:"assets/meta_addon-performance.md.7061c6b9.lean.js",revision:null},{url:"assets/meta_index.md.35516f05.js",revision:null},{url:"assets/meta_index.md.35516f05.lean.js",revision:null},{url:"assets/meta_jq.md.60c84159.js",revision:null},{url:"assets/meta_jq.md.60c84159.lean.js",revision:null},{url:"assets/meta_style-guide.md.ea40e5b9.js",revision:null},{url:"assets/meta_style-guide.md.ea40e5b9.lean.js",revision:null},{url:"assets/meta_useful-links.md.8eaf36a5.js",revision:null},{url:"assets/meta_useful-links.md.8eaf36a5.lean.js",revision:null},{url:"assets/meta_using-schemas.md.4151656a.js",revision:null},{url:"assets/meta_using-schemas.md.4151656a.lean.js",revision:null},{url:"assets/meta_version-control.md.453fe4dc.js",revision:null},{url:"assets/meta_version-control.md.453fe4dc.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.893b380d.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.893b380d.lean.js",revision:null},{url:"assets/nbt_index.md.7df93580.js",revision:null},{url:"assets/nbt_index.md.7df93580.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.0afacd95.js",revision:null},{url:"assets/nbt_mcstructure.md.0afacd95.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.96c9ad08.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.96c9ad08.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.47710c78.js",revision:null},{url:"assets/nbt_step-by-step-example.md.47710c78.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.15054f47.js",revision:null},{url:"assets/nbt_structure-limits.md.15054f47.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.9e678d93.js",revision:null},{url:"assets/particles_disabling-particles.md.9e678d93.lean.js",revision:null},{url:"assets/particles_index.md.9fe25aa5.js",revision:null},{url:"assets/particles_index.md.9fe25aa5.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.63c06685.js",revision:null},{url:"assets/particles_particles-and-sounds.md.63c06685.lean.js",revision:null},{url:"assets/particles_particles.md.25d920a4.js",revision:null},{url:"assets/particles_particles.md.25d920a4.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.bf0bbc88.js",revision:null},{url:"assets/particles_vanilla-particles.md.bf0bbc88.lean.js",revision:null},{url:"assets/privacy.md.56d3469b.js",revision:null},{url:"assets/privacy.md.56d3469b.lean.js",revision:null},{url:"assets/scripting_custom-command.md.ac080fcf.js",revision:null},{url:"assets/scripting_custom-command.md.ac080fcf.lean.js",revision:null},{url:"assets/scripting_game-tests.md.5f89e682.js",revision:null},{url:"assets/scripting_game-tests.md.5f89e682.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.d95081d1.js",revision:null},{url:"assets/scripting_gametest-form.md.d95081d1.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.6fe6b58f.js",revision:null},{url:"assets/scripting_gametest-qna.md.6fe6b58f.lean.js",revision:null},{url:"assets/scripting_index.md.34b9fbd9.js",revision:null},{url:"assets/scripting_index.md.34b9fbd9.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.55775b60.js",revision:null},{url:"assets/scripting_saving-loading.md.55775b60.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.b4d27eb7.js",revision:null},{url:"assets/scripting_scripting-intro.md.b4d27eb7.lean.js",revision:null},{url:"assets/scripting_typescript.md.bec06f6b.js",revision:null},{url:"assets/scripting_typescript.md.bec06f6b.lean.js",revision:null},{url:"assets/servers_index.md.af0f6b58.js",revision:null},{url:"assets/servers_index.md.af0f6b58.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.70841bb8.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.70841bb8.lean.js",revision:null},{url:"assets/servers_server-software.md.ae1e95cd.js",revision:null},{url:"assets/servers_server-software.md.ae1e95cd.lean.js",revision:null},{url:"assets/style.1e62f284.css",revision:null},{url:"assets/test.md.1967a13b.js",revision:null},{url:"assets/test.md.1967a13b.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.11d3753d.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.11d3753d.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.31f77d6c.js",revision:null},{url:"assets/visuals_animation-effects.md.31f77d6c.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.2f5a7142.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.2f5a7142.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.38796af6.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.38796af6.lean.js",revision:null},{url:"assets/visuals_death-animations.md.6f0f5f1f.js",revision:null},{url:"assets/visuals_death-animations.md.6f0f5f1f.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.85db1167.js",revision:null},{url:"assets/visuals_glowing-texture.md.85db1167.lean.js",revision:null},{url:"assets/visuals_index.md.f4e3b67c.js",revision:null},{url:"assets/visuals_index.md.f4e3b67c.lean.js",revision:null},{url:"assets/visuals_introduction.md.476aacac.js",revision:null},{url:"assets/visuals_introduction.md.476aacac.lean.js",revision:null},{url:"assets/visuals_leash-position.md.0923ad7e.js",revision:null},{url:"assets/visuals_leash-position.md.0923ad7e.lean.js",revision:null},{url:"assets/visuals_materials.md.71c761dd.js",revision:null},{url:"assets/visuals_materials.md.71c761dd.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.f613236a.js",revision:null},{url:"assets/visuals_math-based-animations.md.f613236a.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.387dd932.js",revision:null},{url:"assets/visuals_player-geometry.md.387dd932.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.dea2a982.js",revision:null},{url:"assets/visuals_remove-shadows.md.dea2a982.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.0a4fcc04.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.0a4fcc04.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.5ae385a6.js",revision:null},{url:"assets/visuals_structure-presentation.md.5ae385a6.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3e168653.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3e168653.lean.js",revision:null},{url:"assets/vr_index.md.abc3a5ed.js",revision:null},{url:"assets/vr_index.md.abc3a5ed.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.78590d2d.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.78590d2d.lean.js",revision:null},{url:"assets/vr_pack_setup.md.031b896d.js",revision:null},{url:"assets/vr_pack_setup.md.031b896d.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.c0e272aa.js",revision:null},{url:"assets/world-generation_biome-tags.md.c0e272aa.lean.js",revision:null},{url:"assets/world-generation_biomes.md.15709e78.js",revision:null},{url:"assets/world-generation_biomes.md.15709e78.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.6daed0eb.js",revision:null},{url:"assets/world-generation_custom-ores.md.6daed0eb.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.1decb93f.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.1decb93f.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.2794a56a.js",revision:null},{url:"assets/world-generation_feature-types.md.2794a56a.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.e6a5553a.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.e6a5553a.lean.js",revision:null},{url:"assets/world-generation_index.md.be9f90e8.js",revision:null},{url:"assets/world-generation_index.md.be9f90e8.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.6b1fc05f.js",revision:null},{url:"assets/world-generation_structure-features.md.6b1fc05f.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.97f923ee.js",revision:null},{url:"assets/world-generation_surface-builder.md.97f923ee.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.4fdb42e2.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.4fdb42e2.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
