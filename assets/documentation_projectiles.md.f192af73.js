import{_ as t,c as e,o as d,e as r}from"./404.md.741b04df.js";const g=JSON.parse('{"title":"Projectiles","description":"","frontmatter":{"title":"Projectiles"},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"on_hit","slug":"on-hit","link":"#on-hit","children":[{"level":3,"title":"arrow_effect","slug":"arrow-effect","link":"#arrow-effect","children":[]},{"level":3,"title":"teleport_owner","slug":"teleport-owner","link":"#teleport-owner","children":[]},{"level":3,"title":"catch_fire","slug":"catch-fire","link":"#catch-fire","children":[]},{"level":3,"title":"ignite","slug":"ignite","link":"#ignite","children":[]},{"level":3,"title":"remove_on_hit","slug":"remove-on-hit","link":"#remove-on-hit","children":[]},{"level":3,"title":"douse_fire","slug":"douse-fire","link":"#douse-fire","children":[]},{"level":3,"title":"impact_damage","slug":"impact-damage","link":"#impact-damage","children":[]},{"level":3,"title":"definition_event","slug":"definition-event","link":"#definition-event","children":[]},{"level":3,"title":"stick_in_ground","slug":"stick-in-ground","link":"#stick-in-ground","children":[]},{"level":3,"title":"spawn_aoe_cloud","slug":"spawn-aoe-cloud","link":"#spawn-aoe-cloud","children":[]},{"level":3,"title":"spawn_chance","slug":"spawn-chance","link":"#spawn-chance","children":[]},{"level":3,"title":"particle_on_hit","slug":"particle-on-hit","link":"#particle-on-hit","children":[]},{"level":3,"title":"mob_effect","slug":"mob-effect","link":"#mob-effect","children":[]},{"level":3,"title":"grant_xp","slug":"grant-xp","link":"#grant-xp","children":[]},{"level":3,"title":"freeze_on_hit","slug":"freeze-on-hit","link":"#freeze-on-hit","children":[]},{"level":3,"title":"hurt_owner","slug":"hurt-owner","link":"#hurt-owner","children":[]},{"level":3,"title":"thrown_potion_effect","slug":"thrown-potion-effect","link":"#thrown-potion-effect","children":[]}]},{"level":2,"title":"Aditional Information","slug":"aditional-information","link":"#aditional-information","children":[]}],"relativePath":"documentation/projectiles.md"}'),i={name:"documentation/projectiles.md"},a=r('<h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>This page intends to document all different fields you can use inside <code>minecraft:projectile</code> entity behavior component.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><em>Disclaimer: this component has been mostly documented based on projectiles found in the game or reverse engineering the game.</em><em>This information was last tested on <strong>1.18.2</strong>.</em></p></div><table><thead><tr><th>Name</th><th>Type</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>anchor</td><td>Integer</td><td></td><td></td></tr><tr><td>angle_offset</td><td>Decimal</td><td>0</td><td>Determines the angle at which the projectile is thrown</td></tr><tr><td>catch_fire</td><td>Boolean</td><td>false</td><td>If true, the entity hit will be set on fire</td></tr><tr><td>crit_particle_on_hurt</td><td>Boolean</td><td>false</td><td>If true, the projectile will produce critical hit particles when it happens</td></tr><tr><td>destroy_on_hurt</td><td>Boolean</td><td>false</td><td>If true, this entity will be destroyed when hit</td></tr><tr><td>filter</td><td>String</td><td></td><td>Entity Definitions defined here can&#39;t be hurt by the projectile</td></tr><tr><td>fire_affected_by_griefing</td><td>Boolean</td><td>false</td><td>If true, whether the projectile causes fire is affected by the mob griefing game rule</td></tr><tr><td>gravity</td><td>Decimal</td><td>0.05</td><td>The gravity applied to this entity when thrown. The higher the value, the faster the entity falls</td></tr><tr><td>hit_ground_sound</td><td>String</td><td></td><td>The sound that plays when the projectile hits ground</td></tr><tr><td>hit_sound</td><td>String</td><td></td><td>The sound that plays when the projectile hits an entity</td></tr><tr><td>homing</td><td>Boolean</td><td>false</td><td>If true, the projectile homes in to the nearest. <strong>Does not work on 1.18.2</strong> entity</td></tr><tr><td>inertia</td><td>Decimal</td><td>0.99</td><td>The fraction of the projectile&#39;s speed maintained every frame while traveling in air</td></tr><tr><td>is_dangerous</td><td>Boolean</td><td>false</td><td>If true, the projectile will be treated as dangerous to the players</td></tr><tr><td>knockback</td><td>Boolean</td><td>true</td><td>If true, the projectile will knock back the entity it hits</td></tr><tr><td>lightning</td><td>Boolean</td><td>false</td><td>If true, the entity hit will be struck by lightning</td></tr><tr><td>liquid_inertia</td><td>Decimal</td><td>0.6</td><td>The fraction of the projectile&#39;s speed maintained every frame while traveling in water</td></tr><tr><td>multiple_targets</td><td>Boolean</td><td>true</td><td>If true, the projectile can hit multiple entities per flight</td></tr><tr><td>offset</td><td>Vector [a, b, c]</td><td>[0, 0.5, 0]</td><td>The offset from the entity&#39;s anchor where the projectile will spawn</td></tr><tr><td>on_fire_time</td><td>Decimal</td><td>5</td><td>Time in seconds that the entity hit will be on fire for</td></tr><tr><td>on_hit</td><td>Object</td><td></td><td>Projectile&#39;s behavior on hit. More info <a href="#on_hit">below</a></td></tr><tr><td>particle</td><td>String</td><td>iconcrack</td><td>Particle to use upon collision</td></tr><tr><td>potion_effect</td><td>Integer</td><td>-1</td><td>Defines the effect the arrow will apply to the entity it hits</td></tr><tr><td>power</td><td>Decimal</td><td>1.3</td><td>Determines the velocity of the projectile</td></tr><tr><td>reflect_on_hurt</td><td>Boolean</td><td>false</td><td>If true, this entity will be reflected back when hit</td></tr><tr><td>semi_random_diff_damage</td><td>Boolean</td><td>false</td><td>If true, damage will be randomized based on damage and speed</td></tr><tr><td>shoot_sound</td><td>String</td><td></td><td>The sound that plays when the projectile is shot</td></tr><tr><td>shoot_target</td><td>Boolean</td><td>true</td><td>If true, the projectile will be shot towards the target of the entity firing it</td></tr><tr><td>should_bounce</td><td>Boolean</td><td>false</td><td>If true, the projectile will bounce upon hit</td></tr><tr><td>splash_potion</td><td>Boolean</td><td>false</td><td>If true, the projectile will be treated like a splash potion</td></tr><tr><td>splash_range</td><td>Decimal</td><td>4</td><td>Radius in blocks of the &#39;splash&#39; effect</td></tr><tr><td>stop_on_hurt</td><td>Boolean</td><td></td><td></td></tr><tr><td>uncertainty_base</td><td>Decimal</td><td>0</td><td>The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier</td></tr><tr><td>uncertainty_multiplier</td><td>Decimal</td><td>0</td><td>Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier</td></tr><tr><td>hit_water</td><td>Boolean</td><td>false</td><td>If true, liquid blocks will be treated as solid. <strong>Requires &quot;Education Edition&quot; toggle active</strong></td></tr></tbody></table><h2 id="on-hit" tabindex="-1">on_hit <a class="header-anchor" href="#on-hit" aria-hidden="true">#</a></h2><p>This object contains all behaviors, that can be executed, when projectile hits something.</p><h3 id="arrow-effect" tabindex="-1">arrow_effect <a class="header-anchor" href="#arrow-effect" aria-hidden="true">#</a></h3><p><em>Exact behavior unknown</em></p><h3 id="teleport-owner" tabindex="-1">teleport_owner <a class="header-anchor" href="#teleport-owner" aria-hidden="true">#</a></h3><p>Teleports shooter to the hit location.</p><h3 id="catch-fire" tabindex="-1">catch_fire <a class="header-anchor" href="#catch-fire" aria-hidden="true">#</a></h3><p><em>Exact behavior unknown</em></p><p>Sets target on fire</p><h3 id="ignite" tabindex="-1">ignite <a class="header-anchor" href="#ignite" aria-hidden="true">#</a></h3><p><em>Exact behavior unknown</em></p><p>Sets target on fire</p><h3 id="remove-on-hit" tabindex="-1">remove_on_hit <a class="header-anchor" href="#remove-on-hit" aria-hidden="true">#</a></h3><p>Removes the projectile when it hits something.</p><h3 id="douse-fire" tabindex="-1">douse_fire <a class="header-anchor" href="#douse-fire" aria-hidden="true">#</a></h3><p><em>Exact behavior unknown</em></p><h3 id="impact-damage" tabindex="-1">impact_damage <a class="header-anchor" href="#impact-damage" aria-hidden="true">#</a></h3><p>Deals damage on hit.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>damage</td><td>Integer/Integer Array [min, max]</td><td>Damage dealt to entity on hit</td></tr><tr><td>semi_random_diff_damage</td><td>Boolean</td><td></td></tr><tr><td>max_critical_damage</td><td>Decimal</td><td></td></tr><tr><td>min_critical_damage</td><td>Decimal</td><td></td></tr><tr><td>power_multiplier</td><td>Decimal</td><td></td></tr><tr><td>channeling</td><td>Boolean</td><td></td></tr><tr><td>set_last_hurt_requires_damage</td><td>Boolean</td><td></td></tr><tr><td>destroy_on_hit_requires_damage</td><td>Boolean</td><td></td></tr><tr><td>filter</td><td>String</td><td>Entity to affect. Much more primative than filters used elsewhare, as it cannot &quot;test&quot; for anything other than an identifier</td></tr><tr><td>destroy_on_hit</td><td>Boolean</td><td></td></tr><tr><td>knockback</td><td>Boolean</td><td></td></tr><tr><td>catch_fire</td><td>Boolean</td><td>Dictates wether or not targets will be engulfed in flames</td></tr></tbody></table><h3 id="definition-event" tabindex="-1">definition_event <a class="header-anchor" href="#definition-event" aria-hidden="true">#</a></h3><p>Calls an event on hit.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>affect_projectile</td><td>Boolean</td><td>Event will be triggered for projectile entity</td></tr><tr><td>affect_shooter</td><td>Boolean</td><td>Event will be triggered for shooter entity</td></tr><tr><td>affect_target</td><td>Boolean</td><td>Event will be triggered for hit entity</td></tr><tr><td>affect_splash_area</td><td>Boolean</td><td>Event will be triggered for all entities in an area</td></tr><tr><td>splash_area</td><td>Decimal</td><td>Area of entities</td></tr><tr><td>event_trigger</td><td>Object</td><td>Event to trigger. Structure below.</td></tr></tbody></table><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>event</td><td>String</td><td>Event to trigger</td></tr><tr><td>target</td><td>String</td><td>Target of the event</td></tr><tr><td>filters</td><td>Object</td><td>Crieteria required in order to trigger</td></tr></tbody></table><h3 id="stick-in-ground" tabindex="-1">stick_in_ground <a class="header-anchor" href="#stick-in-ground" aria-hidden="true">#</a></h3><p>Sticks the projectile into the ground.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>shake_time</td><td>Decimal</td><td></td></tr></tbody></table><h3 id="spawn-aoe-cloud" tabindex="-1">spawn_aoe_cloud <a class="header-anchor" href="#spawn-aoe-cloud" aria-hidden="true">#</a></h3><p>Spawns an area of effect cloud of potion effect.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>radius</td><td>Decimal</td><td>Radius of the cloud</td></tr><tr><td>radius_on_use</td><td>Decimal</td><td></td></tr><tr><td>potion</td><td>Integer</td><td>Lingering Potion ID</td></tr><tr><td>particle</td><td>String</td><td><a href="/particles/vanilla-particles.html">Vanilla Particles</a> emitter of the cloud. Only accepts Vanilla Particles. <strong>dragonbreath</strong> enables the usage of Bottles to obtain Dragon&#39;s Breath.</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the cloud in seconds</td></tr><tr><td>color</td><td>Integer array [r, g, b]</td><td>Color of the particles</td></tr><tr><td>affect_owner</td><td>Boolean</td><td>Is potion effect affecting the shooter. Does not appear to apply to the player</td></tr><tr><td>reapplication_delay</td><td>Integer</td><td>Delay in ticks between application of the potion effect</td></tr></tbody></table><h4 id="potion-ids" tabindex="-1">Potion IDs <a class="header-anchor" href="#potion-ids" aria-hidden="true">#</a></h4><table><thead><tr><th>Potion</th><th>Regular</th><th>Extended</th><th>Enhanced (Level II)</th></tr></thead><tbody><tr><td>Water Bottle</td><td>0</td><td></td><td></td></tr><tr><td>Mundane Potion</td><td>1</td><td>2</td><td></td></tr><tr><td>Thick Potion</td><td>3</td><td></td><td></td></tr><tr><td>Awkward Potion</td><td>4</td><td></td><td></td></tr><tr><td>Potion of Night Vision</td><td>5</td><td>6</td><td></td></tr><tr><td>Potion of Invisibility</td><td>7</td><td>8</td><td></td></tr><tr><td>Potion of Leaping</td><td>9</td><td>10</td><td>11</td></tr><tr><td>Potion of Fire Resistance</td><td>12</td><td>13</td><td></td></tr><tr><td>Potion of Swiftness</td><td>14</td><td>15</td><td>16</td></tr><tr><td>Potion of Slowness</td><td>17</td><td>18</td><td></td></tr><tr><td>Potion of Water Breathing</td><td>19</td><td>20</td><td></td></tr><tr><td>Potion of Healing</td><td>21</td><td></td><td>22</td></tr><tr><td>Potion of Harming</td><td>23</td><td></td><td>24</td></tr><tr><td>Potion of Poison</td><td>25</td><td>26</td><td>27</td></tr><tr><td>Potion of Regeneration</td><td>28</td><td>29</td><td>30</td></tr><tr><td>Potion of Strength</td><td>31</td><td>32</td><td>33</td></tr><tr><td>Potion of Weakness</td><td>34</td><td>35</td><td></td></tr><tr><td>Potion of Decay</td><td>36</td><td></td><td></td></tr><tr><td>Potion of Turtle Master</td><td>37</td><td>38</td><td>39</td></tr><tr><td>Potion of Slow Falling</td><td>40</td><td>41</td><td></td></tr><tr><td>Potion of Slowness IV</td><td>42</td><td></td><td></td></tr><tr><td>Potion of Crashing</td><td>43+</td><td></td><td></td></tr></tbody></table><h3 id="spawn-chance" tabindex="-1">spawn_chance <a class="header-anchor" href="#spawn-chance" aria-hidden="true">#</a></h3><p>Spawns an entity on hit.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>first_spawn_percent_chance</td><td>Decimal</td><td></td></tr><tr><td>second_spawn_percent_chance</td><td>Decimal</td><td></td></tr><tr><td>first_spawn_count</td><td>Integer</td><td></td></tr><tr><td>second_spawn_count</td><td>Integer</td><td></td></tr><tr><td>spawn_definition</td><td>String</td><td>ID of the entity to spawn</td></tr><tr><td>spawn_baby</td><td>Boolean</td><td>Whether the spawned entity should be a baby</td></tr></tbody></table><h3 id="particle-on-hit" tabindex="-1">particle_on_hit <a class="header-anchor" href="#particle-on-hit" aria-hidden="true">#</a></h3><p>Spawns particles on hit.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>particle_type</td><td>String</td><td><a href="/particles/vanilla-particles.html">Vanilla Particles</a> to use</td></tr><tr><td>num_particles</td><td>Integer</td><td>Number of particles</td></tr><tr><td>on_entity_hit</td><td>Boolean</td><td>Whether it should spawn particles on entity hit</td></tr><tr><td>on_other_hit</td><td>Boolean</td><td>Whether it should spawn particles on other hit</td></tr></tbody></table><h3 id="mob-effect" tabindex="-1">mob_effect <a class="header-anchor" href="#mob-effect" aria-hidden="true">#</a></h3><p>Applies a mob effect to the target.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>effect</td><td>String</td><td>Effect</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the effect</td></tr><tr><td>durationeasy</td><td>Integer</td><td>Duration of the effect on easy difficulty</td></tr><tr><td>durationnormal</td><td>Integer</td><td>Duration of the effect on normal difficulty</td></tr><tr><td>durationhard</td><td>Integer</td><td>Duration of the effect on hard difficulty</td></tr><tr><td>amplifier</td><td>Integer</td><td>Effect amplifier</td></tr><tr><td>ambient</td><td>Boolean</td><td></td></tr><tr><td>visible</td><td>Boolean</td><td></td></tr></tbody></table><h3 id="grant-xp" tabindex="-1">grant_xp <a class="header-anchor" href="#grant-xp" aria-hidden="true">#</a></h3><p>Despite the name, this actually spawns a number of experience orbs, being worth the amount stated.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>minXP</td><td>Integer</td><td>Minimum amount of experience to give</td></tr><tr><td>maxXP</td><td>Integer</td><td>Maximum amount of experience to give</td></tr><tr><td>xp</td><td>Integer</td><td>Constant amount of experience to give. When set, it will be used instead of min and max values.</td></tr></tbody></table><h3 id="freeze-on-hit" tabindex="-1">freeze_on_hit <a class="header-anchor" href="#freeze-on-hit" aria-hidden="true">#</a></h3><p><em>Exact behavior unknown</em></p><p><em>Requires Education Edition toggle to be enabled.</em> Freezes water on hit.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>shape</td><td>String</td><td>&quot;sphere&quot; or &quot;cube&quot;</td></tr><tr><td>snap_to_block</td><td>Boolean</td><td></td></tr><tr><td>size</td><td>Integer</td><td>The size of the freeze effect</td></tr></tbody></table><h3 id="hurt-owner" tabindex="-1">hurt_owner <a class="header-anchor" href="#hurt-owner" aria-hidden="true">#</a></h3><p><em>Exact behavior unknown. Right now it crashes minecraft probably because of wrong parameters</em></p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>owner_damage</td><td>Integer</td><td></td></tr><tr><td>knockback</td><td>Boolean</td><td></td></tr><tr><td>ignite</td><td>Boolean</td><td></td></tr></tbody></table><h3 id="thrown-potion-effect" tabindex="-1">thrown_potion_effect <a class="header-anchor" href="#thrown-potion-effect" aria-hidden="true">#</a></h3><p><em>Exact behavior unknown. Right now it crashes minecraft probably because it&#39;s only valid for thrown potions</em></p><h2 id="aditional-information" tabindex="-1">Aditional Information <a class="header-anchor" href="#aditional-information" aria-hidden="true">#</a></h2><p>When it comes to creating a custom projectile, such as an arrow or trident variant, or something entirely your own, you may want to consider defining a <a href="/entities/runtime-identifier.html">runtime identifier</a> to ensure that it acts as intended. Not doing so may result in unintended behaviour, from odd visuals to incorrect knockback direction and arrows that you can kill with your bare hands.</p>',58),n=[a];function o(h,l,c,s,f,p){return d(),e("div",null,n)}const m=t(i,[["render",o]]);export{g as __pageData,m as default};
