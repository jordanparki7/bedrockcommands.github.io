import{_ as l,c as o,a as n,w as e,e as s,r as p,o as r,d as t}from"./404.md.741b04df.js";const i="/assets/images/tutorials/entity-holds-item/blockbench.png",c="/assets/images/tutorials/entity-holds-item/finished_result.png",g=JSON.parse('{"title":"Entity Holds Item","description":"","frontmatter":{"title":"Entity Holds Item","category":"Tutorials","tags":["intermediate"],"mention":["pieterdefour"]},"headers":[{"level":2,"title":"Model","slug":"model","link":"#model","children":[]},{"level":2,"title":"Behavior Pack-side","slug":"behavior-pack-side","link":"#behavior-pack-side","children":[]},{"level":2,"title":"Loot Table","slug":"loot-table","link":"#loot-table","children":[]}],"relativePath":"entities/entity-holds-item.md"}'),d={name:"entities/entity-holds-item.md"},D=s('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This tutorial assumes you have a basic understanding of entities, loot tables, and Blockbench.</p></div><p>In this tutorial, you will learn to have an entity spawn with an item in its hand. I&#39;ll be using a custom <code>mandalorian_armorer</code> entity and a custom <code>hammer</code> item for the examples.</p><h2 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-hidden="true">#</a></h2><p>First of all, you&#39;ll need to have a model in Blockbench that has a map called <code>rightArm</code>. Within this map, there needs to be a submap called &#39;rightItem&#39;. Now set the position of the pivot point of this submap, so it sits in the place you want the entity to hold the item at.</p><p><img src="'+i+'" alt=""></p><h2 id="behavior-pack-side" tabindex="-1">Behavior Pack-side <a class="header-anchor" href="#behavior-pack-side" aria-hidden="true">#</a></h2><p>Now you&#39;ll need to add a <code>minecraft:equipment</code> component in the component list for your entity and add a loot table with the desired item.</p><p>In our example it will look like this:</p>',8),y=s(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">minecraft:equipment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">table</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">loot_tables/entities/gear/mandolorian.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="loot-table" tabindex="-1">Loot Table <a class="header-anchor" href="#loot-table" aria-hidden="true">#</a></h2><p>Finally, add the loot table for your entity. It needs to be in <code>loot_tables/entities/&lt;your_loot_table_name&gt;.json</code> in the behavior pack. In our case, it&#39;s called <code>mandolorian.json</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This isn&#39;t the same loot table as what it drops on death. So make sure it has a different name.</p></div><p>To have the entity always spawn with the same item, add the following loot table:</p>`,5),F=s(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">pools</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">rolls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">entries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dd:hammer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">weight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>If everything went well, you&#39;d have something looking like this:</p><p><img src="`+c+'" alt=""></p>',3);function m(u,h,b,C,_,A){const a=p("CodeHeader");return r(),o("div",null,[D,n(a,null,{default:e(()=>[t("BP/entity/mandolorian.json#components")]),_:1}),y,n(a,null,{default:e(()=>[t("BP/loot_tables/entities/gear/mandolorian.json")]),_:1}),F])}const f=l(d,[["render",m]]);export{g as __pageData,f as default};
