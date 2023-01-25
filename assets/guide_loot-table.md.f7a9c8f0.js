import{_ as r,c,a as n,w as a,b as s,d as o,e,r as t,o as i}from"./404.md.741b04df.js";const T=JSON.parse('{"title":"Adding a Loot Table, a Spawn rule and a crafting recipe","description":"","frontmatter":{"title":"Adding a Loot Table, a Spawn rule and a crafting recipe","category":"Guide","nav_order":8,"prefix":"8. "},"headers":[{"level":2,"title":"Loot tables","slug":"loot-tables","link":"#loot-tables","children":[]},{"level":2,"title":"Spawn rules","slug":"spawn-rules","link":"#spawn-rules","children":[]},{"level":2,"title":"Crafting recipes","slug":"crafting-recipes","link":"#crafting-recipes","children":[]},{"level":2,"title":"What you have learned","slug":"what-you-have-learned","link":"#what-you-have-learned","children":[]},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far","link":"#your-progress-so-far","children":[]}],"relativePath":"guide/loot-table.md"}'),D={name:"guide/loot-table.md"},F=s("p",null,"Next, we'll enhance the custom Ghost entity by adding some more basic mechanics to it:",-1),y=s("h2",{id:"loot-tables",tabindex:"-1"},[o("Loot tables "),s("a",{class:"header-anchor",href:"#loot-tables","aria-hidden":"true"},"#")],-1),u=s("p",null,"First, we'll make the ghost drop Ectoplasm upon death: create the following file:",-1),C=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">pools</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">rolls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">entries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:ectoplasm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">weight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">functions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">set_count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">								</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">min</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">								</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">							</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>Loot Tables consist of <code>&quot;pools&quot;</code>. Each pool defines a different loot. A pool consists of 3 parts, <code>&quot;rolls&quot;</code>, <code>&quot;entries&quot;</code> and <code>&quot;conditions&quot;</code>. The <code>&quot;conditions&quot;</code> are optional and won&#39;t be covered in this guide. To learn more about conditions, look at <a href="/loot/loot-tables.html">Loot Tables</a>.</li><li>The <code>&quot;rolls&quot;</code> section defines how many times a random entry will be chosen from the following <code>&quot;entries&quot;</code>object.</li><li>The <code>&quot;entries&quot;</code> part defines the items, from which the loot table can choose. Each roll a new item will be chosen.</li><li><code>&quot;type&quot;</code> defines what will be chosen. You can set it to <code>&quot;item&quot;</code> or <code>&quot;loot_table&quot;</code> to either chose an item or an different loot table.</li><li><code>&quot;name&quot;</code> will be set to an item identifier with its namespace. It defines which item will be selected.</li><li><code>&quot;weight&quot;</code> is optional and defines how likely it is, that this item will be selected. If there is more than one item in the <code>&quot;entries&quot;</code> section, the <code>&quot;weight&quot;</code> attribute can be used to make the probability of one item more or less likely. If it isn&#39;t set, it defaults to 1.</li><li><code>&quot;functions&quot;</code> provide a powerful way of customizing the item that will be returned. They can add enchantments to an item, setting an items&#39; name or simply setting the number of items that will be dropped. To define the number of items, we use <code>&quot;set_count&quot;</code>. It takes the <code>&quot;count&quot;</code> attribute, which sets the maximum and minimum amount of items that will be dropped.</li></ul><p>For more information on loot tables, see our extended guide: <a href="/loot/loot-tables.html">Loot Tables</a>!</p><h2 id="spawn-rules" tabindex="-1">Spawn rules <a class="header-anchor" href="#spawn-rules" aria-hidden="true">#</a></h2><p>Next, we&#39;ll make the ghost spawn in deserts at night:</p>`,5),d=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.8.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:spawn_rules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:ghost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">population_control</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">monster</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">conditions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:spawns_on_surface</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:brightness_filter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">min</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">adjust_for_weather</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:difficulty_filter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">min</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">easy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hard</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:weight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:herd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">min_size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">max_size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:biome_filter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">has_biome_tag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">operator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">==</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">desert</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><ul><li>You already know what <code>&quot;format_version&quot;</code>does.</li><li>Inside the <code>&quot;minecraft:spawn_rules&quot;</code> part we define our spawn rules.</li><li>The <code>&quot;description&quot;</code> defines the basic properties of the file. The <code>&quot;identifier&quot;</code> is used to define on which entity this spawn rule applies on. <code>&quot;population_control&quot;</code> is used to limit the amount of entities that will be spawned. Once the pool that is defined inside of <code>&quot;population_control&quot;</code> is full, no more entities will be spawned.</li><li>With <code>&quot;conditions&quot;</code> we can define rules that limit the spawning of this entity to special cases. We will shortly describe each condition used here, but you can learn more conditions and how to use them <a href="/entities/vanilla-usage-spawn-rules.html">here</a>. <ul><li><code>&quot;spawns_on_surface&quot;</code> allows the mob to only spawn on surfaces.</li><li><code>&quot;minecraft:brightness_filter&quot;</code> limits the spawning to areas with a lighting level thats between the defined values. If <code>&quot;adjust_for_weather&quot;</code> is <code>true</code>, the light level decrease during rain and storms will be ignored.</li><li><code>&quot;minecraft:difficulty_filter&quot;</code> defines the difficulty level needed to spawn the entity.</li><li><code>&quot;weight&quot;</code> defines how often this entity will spawn. The higher this value, the more often the mob will spawn.</li><li><code>&quot;minecraft:herd&quot;</code>defines how many entities will be spawned at once.</li><li>With <code>&quot;minecraft:biome_filter&quot;</code> we define the biomes in which the entity is able to spawn.</li></ul></li></ul><p>To learn more about spawn rules, take a look on our guide on <a href="/entities/vanilla-usage-spawn-rules.html">Vanilla spawn rules</a>.</p><h2 id="crafting-recipes" tabindex="-1">Crafting recipes <a class="header-anchor" href="#crafting-recipes" aria-hidden="true">#</a></h2><p>And finally, as an introduction to recipes, we&#39;ll make the Ectoplasm craftable into Slime Blocks:</p>`,5),A=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.12.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:recipe_shaped</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:ectoplasm_slime_block</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">tags</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">crafting_table</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">pattern</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">###</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">###</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">###</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:ectoplasm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">minecraft:slime</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li><code>&quot;format_version&quot;</code> is already known.</li><li>With <code>&quot;recipe_shaped&quot;</code> we define, that each ingredient has a set place in the crafting grid. There are some other types that can be used, you can find more information <a href="/loot/recipes.html">here</a>.</li><li>Inside <code>&quot;description&quot;</code> we define the <code>&quot;identifier&quot;</code> of this recipe, which is the name of the recipe.</li><li><code>&quot;tags&quot;</code> is a list of benches (crafting table, furnace, etc) that are able to use this recipe. After version b1.16.100 it was possible to use custom benches, created by an addon.</li><li><code>&quot;pattern&quot;</code> defines the arrangement of the items inside the crafting grid. Each <code>#</code> represents the item that is set under <code>&quot;key&quot;</code>. In this case, the whole 3x3 grid has to be filled with <code>&quot;wiki:ectoplasm&quot;</code>, our own item. It is possible to define more items, just add an entry to <code>&quot;key&quot;</code> and set the key to a character, that you can use inside <code>&quot;pattern&quot;</code>.</li><li><code>&quot;result&quot;</code> contains an <code>&quot;item&quot;</code>, which is set to the item that will be the output of this recipe.</li></ul><p>For more information on this topic, visit our page about <a href="/loot/recipes.html">recipes</a>!</p><h2 id="what-you-have-learned" tabindex="-1">What you have learned <a class="header-anchor" href="#what-you-have-learned" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">What you have learned:</p><ul><li>How to create a loot table and define which items a mob is able to drop</li><li>How to set the rules for a mob to spawn</li><li>How to create new crafting recipes</li></ul></div><h2 id="your-progress-so-far" tabindex="-1">Your progress so far <a class="header-anchor" href="#your-progress-so-far" aria-hidden="true">#</a></h2><p><strong>What you&#39;ve done:</strong></p>`,7),b=s("ul",null,[s("li",null,"[x] Setup your pack"),s("li",null,"[x] Create a custom item"),s("li",null,"[x] Create a custom entity"),s("li",null,"[x] Create the entity's loot, spawn rules, and a custom recipe")],-1),h=s("p",null,"Congratulations! you have finished the Guide and created your first Add-on. \u{1F389}",-1);function m(q,f,w,_,g,v){const l=t("CodeHeader"),p=t("Checklist");return i(),c("div",null,[F,y,u,n(l,null,{default:a(()=>[o("BP/loot_tables/entities/ghost.json")]),_:1}),C,n(l,null,{default:a(()=>[o("BP/spawn_rules/ghost.json")]),_:1}),d,n(l,null,{default:a(()=>[o("BP/recipes/ectoplasm_slime_blocks.json")]),_:1}),A,n(p,null,{default:a(()=>[b]),_:1}),h])}const E=r(D,[["render",m]]);export{T as __pageData,E as default};
