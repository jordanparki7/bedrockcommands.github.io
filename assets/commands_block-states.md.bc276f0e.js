import{_ as i,c as r,a as t,w as a,e as s,b as o,d as e,r as c,o as d}from"./404.md.78e04946.js";const C=JSON.parse('{"title":"Block States","description":"","frontmatter":{"title":"Block States","category":"General","mention":["BedrockCommands","EziGotFliped"],"tags":["info"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Block States List","slug":"block-states-list","link":"#block-states-list","children":[]},{"level":2,"title":"Converting Aux Values to Block States","slug":"converting-aux-values-to-block-states","link":"#converting-aux-values-to-block-states","children":[]},{"level":2,"title":"Block State Examples & Syntax","slug":"block-state-examples-syntax","link":"#block-state-examples-syntax","children":[]}],"relativePath":"commands/block-states.md"}'),u={name:"commands/block-states.md"},p=s('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced by Bedrock Commands Community Discord</a></p><p>Block States or Block Properties are additonal data that defines how the block appears or behaves. Such as the direction it is facing, it&#39;s color, it&#39;s variant, whether it is powered or unpowered and so on.</p><p>This is used in a multitude of commands such as <code>/clone</code>, <code>/execute</code>, <code>/fill</code>, <code>/setblock</code> and <code>/testforblock</code></p><p>In Bedrock Edition we used Aux values (also known as Metadata) to define a block. However; as of 1.19.70 and beyond this is no longer supported and have been fully replaced with Block States instead.</p>',5),h=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#Aux Value Example:</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wool 1</span></span>
<span class="line"><span style="color:#676E95;">#It&#39;s Block State equivelant:</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wool [&quot;color&quot;:&quot;orange&quot;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Note; leaving the brackets blank will default to 0</p><ul><li>Any command block using aux values will continue to function as it is however block states will need to be adopted when updating them.</li><li>Similarly any commands using aux values in behaviour or function packs with <code>min_engine_version</code> 1.19.63 or below will also continue to function however block states must be adopted if the <code>min_engine_version</code> is updated to 1.19.70 or above.</li></ul><h2 id="block-states-list" tabindex="-1">Block States List <a class="header-anchor" href="#block-states-list" aria-hidden="true">#</a></h2><p>A list of all the block states currently available within Bedrock can be found at: <a href="https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockstateslist</a></p><h2 id="converting-aux-values-to-block-states" tabindex="-1">Converting Aux Values to Block States <a class="header-anchor" href="#converting-aux-values-to-block-states" aria-hidden="true">#</a></h2><p>For your convenience; download any of the excel sheet below to find the full list of block IDs, their aux values and equivelant block states in Bedrock. <em>Shared by kayla@Mojang</em></p>`,7),b=o("p",null,[e("Note; the above sheet was quickly generated and contains some minor errors. Boolean values "),o("code",null,"0"),e(" should be replaced with "),o("code",null,"false"),e(" and "),o("code",null,"1"),e(" should be replaced with "),o("code",null,"true")],-1),m=o("p",null,[e("Alternate, sheet: "),o("em",null,"Shared by @ItsRichHearts")],-1),k=o("p",null,[e("You may also use this "),o("a",{href:"https://auxval-to-blockstates.netlify.app/",target:"_blank",rel:"noreferrer"},"Lookup Table"),e(" instead instead without downloading any files.")],-1),_=o("h2",{id:"block-state-examples-syntax",tabindex:"-1"},[e("Block State Examples & Syntax "),o("a",{class:"header-anchor",href:"#block-state-examples-syntax","aria-hidden":"true"},"#")],-1),f=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wool [&quot;color&quot;:&quot;white&quot;]</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wheat [&quot;growth&quot;:0]</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wood [&quot;wood_type&quot;:&quot;birch&quot;,&quot;stripped_bit&quot;:true]</span></span>
<span class="line"><span style="color:#C3E88D;">/setblock ~ ~ ~ wool []</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>Block states are enclosed in sqaure brackets <code>[ ]</code></li><li>When specifying multiple block states a comma <code>,</code> is used to separate them.</li><li>Quotation marks <code>&quot; &quot;</code> are used around strings such as <code>&quot;birch&quot;, &quot;spruce&quot; etc..</code></li><li>Integer values <code>0, 1, 2..</code> and boolean values <code>true/false</code> do not use quotation marks.</li><li>Leaving the brackets blank is also a correct syntax, it will simply default to 0.</li><li><code>wool 0</code> is white wool hence you may simply write it as <code>wool []</code> instead of <code>wool [&quot;color&quot;:&quot;white&quot;]</code></li></ul>`,2);function v(w,y,g,x,S,q){const l=c("CodeHeader"),n=c("BButton");return d(),r("div",null,[p,t(l,null,{default:a(()=>[e("example")]),_:1}),h,t(n,{link:"https://github.com/BedrockCommands/bedrockcommands.github.io/files/10987839/Aux-Value_to_Block-States_Map.xlsx",color:"white"},{default:a(()=>[e("Download")]),_:1}),b,m,t(n,{link:"https://github.com/BedrockCommands/bedrockcommands.github.io/files/11069804/All.Block-Item.List.Bedrock.pdf",color:"white"},{default:a(()=>[e("Download")]),_:1}),k,_,t(l,null,{default:a(()=>[e("Examples")]),_:1}),f])}const T=i(u,[["render",v]]);export{C as __pageData,T as default};
