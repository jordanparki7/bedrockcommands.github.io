import{_ as r,c,a,w as o,e,b as n,d as s,r as l,o as i}from"./404.md.741b04df.js";const j=JSON.parse('{"title":"contents.json","description":"","frontmatter":{"title":"contents.json","mentions":["MedicalJewel105","Osaxely"]},"headers":[{"level":2,"title":"Structure of the file","slug":"structure-of-the-file","link":"#structure-of-the-file","children":[]},{"level":2,"title":"Automatizing the process","slug":"automatizing-the-process","link":"#automatizing-the-process","children":[]},{"level":2,"title":"Additional information","slug":"additional-information","link":"#additional-information","children":[]}],"relativePath":"concepts/contents.md"}'),D={name:"concepts/contents.md"},y=e('<p><code>contents.json</code> is a file that is <em>probably</em> used for the game to process the pack files more easily. It is <em>probably</em> intended for marketplace content creators and Mojang, it is not required to have this file in the pack for the pack to work properly.</p><p>You will find there some instructions about the usage of this file.</p><h2 id="structure-of-the-file" tabindex="-1">Structure of the file <a class="header-anchor" href="#structure-of-the-file" aria-hidden="true">#</a></h2><p><code>contents.json</code> is located at the root of the add-on directory. It contains a list of the files that are included in the pack. Example:</p>',4),F=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">texts/en_US.lang</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">contents.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">manifest.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">animations/my_animation.animation.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">animation_controllers/my_ac.ac.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">entity/my_entity.entity.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">textures/textures_list.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">textures/blocks/my_block.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,1),u=n("h2",{id:"automatizing-the-process",tabindex:"-1"},[s("Automatizing the process "),n("a",{class:"header-anchor",href:"#automatizing-the-process","aria-hidden":"true"},"#")],-1),d=n("p",null,[s("The "),n("code",null,"contents.json"),s(" file can be generated automatically by the game itself, it is very recommended to decrease the risks of making mistakes. However, the file must be prepared first. Create a new empty file called "),n("code",null,"contents.json"),s(" in the root directory of your add-on, and add empty brackets.")],-1),m=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The file content will be automatically written next time the game is launched.</p><h2 id="additional-information" tabindex="-1">Additional information <a class="header-anchor" href="#additional-information" aria-hidden="true">#</a></h2><ul><li>The automatic process can be achieved no matter what is the location of the pack (Development folders or normal folders).</li><li>Do not make multiple <code>contents.json</code> for subpacks, the file at the root of the pack is sufficient.</li><li>This file is not required for the addon to work properly.</li></ul>`,4);function C(b,h,A,_,f,q){const t=l("CodeHeader"),p=l("FolderView");return i(),c("div",null,[y,a(t,null,{default:o(()=>[s("RP/contents.json")]),_:1}),F,a(p,{paths:["RP/texts/en_US.lang","RP/manifest.json","RP/contents.json","RP/animations/my_animation.animation.json","RP/animation_controllers/my_ac.ac.json","RP/entity/my_entity.entity.json","RP/textures/texture_list.json","RP/textures/blocks/my_block.png"]},null,8,["paths"]),u,d,a(t,null,{default:o(()=>[s("BP|RP/contents.json")]),_:1}),m])}const k=r(D,[["render",C]]);export{j as __pageData,k as default};
