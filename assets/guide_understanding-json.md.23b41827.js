import{_ as t,c as n,a,e as s,o,r as l}from"./404.md.741b04df.js";const C=JSON.parse('{"title":"Understanding JSON","description":"","frontmatter":{"title":"Understanding JSON","category":"Extra","nav_order":1,"prefix":"a. "},"headers":[{"level":2,"title":"Valid JSON","slug":"valid-json","link":"#valid-json","children":[]},{"level":2,"title":"Data Structures","slug":"data-structures","link":"#data-structures","children":[{"level":3,"title":"Arrays","slug":"arrays","link":"#arrays","children":[]},{"level":3,"title":"Objects","slug":"objects","link":"#objects","children":[]}]},{"level":2,"title":"JSON Structure","slug":"json-structure","link":"#json-structure","children":[]},{"level":2,"title":"Troubleshooting Examples","slug":"troubleshooting-examples","link":"#troubleshooting-examples","children":[]}],"relativePath":"guide/understanding-json.md"}'),r={name:"guide/understanding-json.md"},p=s('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is an appendix page. You can start the guide from the beginning <a href="/guide/index.html">here</a>.</p></div><p>JSON is a simple &quot;language&quot; that is used for lots of things in Computer Science... including making Minecraft Bedrock Addons! If you have never heard of JSON before, you are encouraged to read through <a href="https://www.digitalocean.com/community/tutorials/an-introduction-to-json" target="_blank" rel="noreferrer">this tutorial</a>. It will teach you everything you need to know about writing valid JSON files.</p><h2 id="valid-json" tabindex="-1">Valid JSON <a class="header-anchor" href="#valid-json" aria-hidden="true">#</a></h2><p>The important thing to remember when writing JSON is that it must be <em>completely error free</em>, or it won&#39;t work at all. Even one wrong character, or one extra comma will cause the entire file to fail. For this reason, it&#39;s super important you write valid JSON.</p><p>We can use an online tool called <a href="https://jsonlint.com/" target="_blank" rel="noreferrer">json lint</a> to tell us whether our JSON is valid. Simply paste your code into the website, and press <code>Validate JSON</code>. You will get a response indicating whether your code is correct or not, as well as the location and type of any errors.</p><h2 id="data-structures" tabindex="-1">Data Structures <a class="header-anchor" href="#data-structures" aria-hidden="true">#</a></h2><p>In JSON, data can be written in a number of formats. Each format is specialized for the kind of data it wants to represent. Here are the structures we have available:</p><table><thead><tr><th>Name</th><th>Example</th><th>Explanation</th></tr></thead><tbody><tr><td>String</td><td>&quot;hello!&quot;</td><td>Words, or characters. Requires quotes.</td></tr><tr><td>Int</td><td>15</td><td>A number. No quotes.</td></tr><tr><td>Float</td><td>1.2</td><td>A fractional number. No quotes.</td></tr><tr><td>Bool</td><td>true</td><td>Either true or false. No quotes.</td></tr></tbody></table><p>In addition to these simple structures, we also have access to two special structures. Special structures are used to nest structures together.</p><h3 id="arrays" tabindex="-1">Arrays <a class="header-anchor" href="#arrays" aria-hidden="true">#</a></h3><p>Arrays are written as two square brackets <code>[]</code>. They represent a <em>list</em>. We can put <em>other data structures</em> inside of the list. Each <em>element</em> of the list should be separated by a comma.</p><p>Some examples:</p><table><thead><tr><th>Structure</th><th>Comment</th></tr></thead><tbody><tr><td>[1, 2, 3]</td><td>A list of integers.</td></tr><tr><td>[&quot;Red&quot;, &quot;blue&quot;]</td><td>A list of strings. Notice the quotes!</td></tr></tbody></table><h3 id="objects" tabindex="-1">Objects <a class="header-anchor" href="#objects" aria-hidden="true">#</a></h3><p>Objects are written as two curly-brackets <code>{}</code>. Objects are a special syntax which contains <em>named</em> data structures. The name is called a <code>key</code>, and the structure is called a <code>value</code>.</p><p>This key-value syntax looks like this: <code>&quot;key&quot;: &lt;any structure&gt;</code>. Notice the quotes around the key, and the colon.</p><p>Here is an example of an object, which contains a few <em>key-value-pairs</em>.</p>',17),c=s(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">a_list_of_integers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">is_json_cool</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>We need to separate each key-value pair with a comma.</p><p>We call the key-value pairs of an object as its <em>child</em> or as being <em>inside</em> the object.</p><h2 id="json-structure" tabindex="-1">JSON Structure <a class="header-anchor" href="#json-structure" aria-hidden="true">#</a></h2><p>In Minecraft, JSON files always begin with an <em>object</em>, which you can remember is two curly brackets:<code>{}</code>. We call this the <em>top level object</em>. We write our code <em>inside</em> of this object, in the form of key-value pairs.</p><p>Here is an example of a simple json file, used for Minecraft addons:</p>`,6),i=s(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.12.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">animations</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">animation.car.wheel_spin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">loop</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">animation_length</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">bones</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">front_wheels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">rotation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">query.modified_distance_moved * -30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">back_wheels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">rotation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">query.modified_distance_moved * -30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Take a careful look at the format. You will see that the entire structure is built out the data-structures that we have already learned. If you want to practice your json skills, try to answer these questions:</p><ul><li>How many keys are there in the <em>top level object</em>. Can you name them?</li><li>What is the value of <code>format_version</code>?</li><li>What <code>structure</code> is the value for: <code>&quot;loop&quot;: true</code>?</li></ul><h2 id="troubleshooting-examples" tabindex="-1">Troubleshooting Examples <a class="header-anchor" href="#troubleshooting-examples" aria-hidden="true">#</a></h2><hr><p>You wrote: <code>&quot;format_version&quot;: 1.12</code></p><p>They said: &quot;<em>The value for format_version is the wrong type. It should be a string.</em></p><p>Remember that <code>type</code> means one of the structures: <code>String</code>, <code>Int</code>, <code>Float</code>, <code>Array</code> or <code>Object</code>. If we examine our code, we will see that we put <code>format_version</code> to an <code>Int</code>, instead of a <code>String</code>. We can fix this problem by adding quotes around the <code>1.12</code>.</p><hr><p>You wrote: <code>[1 2 5 6]</code></p><p>They said: &quot;<em>Your array is missing commas.</em>&quot;</p><p>Remember that array elements need to be separated by commas. Your array should look like this: <code>[1, 2, 5, 6]</code></p><hr><p>They said: <em>&quot;You accidentally put the format version inside your description. It should go outside at the top level</em>&quot;.</p><p>This means that the key-value pair for <code>&quot;format_version&quot;</code> as a <em>child</em> of the description. You should copy/paste the key-value pair out from the description object, and place it at the top level.</p>`,15);function d(u,y,h,D,F,m){const e=l("CodeHeader");return o(),n("div",null,[p,a(e),c,a(e),i])}const A=t(r,[["render",d]]);export{C as __pageData,A as default};
