import{_ as e,c as s,o as a,e as n}from"./404.md.35c629ec.js";const g=JSON.parse('{"title":"New Execute","description":"","frontmatter":{"title":"New Execute","category":"General","tags":["easy"],"mention":["JaylyDev"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Understanding Execution Context","slug":"understanding-execution-context","link":"#understanding-execution-context","children":[]},{"level":2,"title":"Execute, and Why it Changed","slug":"execute-and-why-it-changed","link":"#execute-and-why-it-changed","children":[]},{"level":2,"title":"New Syntax","slug":"new-syntax","link":"#new-syntax","children":[{"level":3,"title":"/execute as","slug":"execute-as","link":"#execute-as","children":[]},{"level":3,"title":"/execute at","slug":"execute-at","link":"#execute-at","children":[]},{"level":3,"title":"/execute in","slug":"execute-in","link":"#execute-in","children":[]},{"level":3,"title":"/execute positioned","slug":"execute-positioned","link":"#execute-positioned","children":[]},{"level":3,"title":"/execute align","slug":"execute-align","link":"#execute-align","children":[]},{"level":3,"title":"/execute anchored","slug":"execute-anchored","link":"#execute-anchored","children":[]},{"level":3,"title":"/execute rotated","slug":"execute-rotated","link":"#execute-rotated","children":[]},{"level":3,"title":"/execute facing","slug":"execute-facing","link":"#execute-facing","children":[]},{"level":3,"title":"/execute (if|unless)","slug":"execute-if-unless","link":"#execute-if-unless","children":[]},{"level":3,"title":"/execute run","slug":"execute-run","link":"#execute-run","children":[]}]},{"level":2,"title":"Examples and Upgrading Old Commands","slug":"examples-and-upgrading-old-commands","link":"#examples-and-upgrading-old-commands","children":[]}],"relativePath":"commands/new-execute.md"}'),t={name:"commands/new-execute.md"},o=n(`<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>With the release of 1.19.50, the <code>/execute</code> command was given a syntax overhaul. While the syntax is now more verbose and longer to write, it allows much finer control over the contextual components of commands and adds support for conditions to commands, superseding the use of commands like <code>/testfor</code>, <code>/testforblock</code>, and <code>/testforblocks</code>.</p><p>Before we dive into the syntax and how to write it, we need to understand how the old <code>/execute</code> command worked, and what changed and why. This will make explaining the concepts found in the syntax easier.</p><h2 id="understanding-execution-context" tabindex="-1">Understanding Execution Context <a class="header-anchor" href="#understanding-execution-context" aria-hidden="true">#</a></h2><p>For both beginners to commands and those well versed in how old <code>/execute</code> behaved, it may be a good idea to review the concept of a command&#39;s <strong>execution context</strong>.</p><p>In short, these are the parameters that affects how a command runs. Who the command will run as, also known as its executor; where the command will run, and in which dimension; and the rotation applied to the command are all parameters that can be changed.</p><p>Every command has this context applied to it, and this context changes depending on how the command runs. Commands fired from command blocks do not have an executor, and the position is set to that command block; commands ran from chat define the executor as the player, and it runs at the player&#39;s position.</p><h2 id="execute-and-why-it-changed" tabindex="-1">Execute, and Why it Changed <a class="header-anchor" href="#execute-and-why-it-changed" aria-hidden="true">#</a></h2><p>The <code>/execute</code> command executes a command on behalf of one or more entities. The old syntax used to be this:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute &lt;target&gt; &lt;position&gt; &lt;command&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">/execute &lt;target&gt; &lt;position&gt; detect &lt;position&gt; &lt;block&gt; &lt;data value&gt; &lt;command&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You specified a target to execute as, then the command&#39;s context would change to run as that target, and at that target. Any position changes were then always relative to that target.</p><p>While this is useful in most cases, it also forces the fact that a command&#39;s target and its position are always tied together (unless you were to manually insert world coordinates in place of <code>&lt;position&gt;</code>). It is also not very malleable in regards to making conditional statements, as you have to execute as an entity every time.</p><p>Back in the Summer of 2017 during the Update Aquatic&#39;s development, the developers of Minecraft: Java Edition were getting feedback from the community on how they can improve the <code>/execute</code> command&#39;s syntax, and the basic concept that was conceived is this: <code>/execute</code> takes an unlimited number of <strong>subcommands</strong> that manipulate certain aspects of the command in the order you specify, then a &quot;run&quot; subcommand is placed at the end to fire a command.</p><p>This allows for much greater control for what <code>/execute</code> can do to a command, and allows splitting up the executor and the command&#39;s position.</p><h2 id="new-syntax" tabindex="-1">New Syntax <a class="header-anchor" href="#new-syntax" aria-hidden="true">#</a></h2><p>Now, let us review the new <code>/execute</code> syntax. They are as follows:</p><h3 id="execute-as" tabindex="-1"><code>/execute as</code> <a class="header-anchor" href="#execute-as" aria-hidden="true">#</a></h3><p>Changes the executor of the command, or what the target selector <code>@s</code> will select.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute as &lt;origin: target&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>This does not change the position, rotation, or dimension context of the command.</p><p>If multiple targets are specified then a command is ran once for each target, where <code>@s</code> selects each entity in turn.</p><h3 id="execute-at" tabindex="-1"><code>/execute at</code> <a class="header-anchor" href="#execute-at" aria-hidden="true">#</a></h3><p>Changes where the command runs, setting the command&#39;s position, rotation, and dimension context to the entity.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute at &lt;origin: target&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>This does not change the executor of the command, so <code>@s</code> will remain as whoever was targeted last.</p><p>If multiple targets are specified then a command is ran once for each target, setting the position, rotation, and dimension context to each target.</p><h3 id="execute-in" tabindex="-1"><code>/execute in</code> <a class="header-anchor" href="#execute-in" aria-hidden="true">#</a></h3><p>Sets the dimension in which the command should run.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute in &lt;dimension: string&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Currently accepted values are <code>overworld</code>, <code>nether</code>, and <code>the_end</code>.</p><p>This change in dimension will respect that dimension&#39;s scale; going from the Overworld to The Nether will apply a scale of x0.125 to the position, and vice versa will apply a x8 scale to the position.</p><h3 id="execute-positioned" tabindex="-1"><code>/execute positioned</code> <a class="header-anchor" href="#execute-positioned" aria-hidden="true">#</a></h3><p>Directly sets the position context of the command.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute positioned &lt;position: x y z&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Sets the position of the command to specific values. <a href="/commands/relative-coordinates.html">Relative and local coordinates</a> are based around the current position of the command.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute positioned as &lt;origin: target&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Sets the position of the command to a target&#39;s location. This is similar to how <code>/execute at</code> works, but it only sets the command&#39;s position and not its rotation or dimension.</p><p>If multiple targets are specified then a command is ran once for each target, setting the position context to the target&#39;s position.</p><h3 id="execute-align" tabindex="-1"><code>/execute align</code> <a class="header-anchor" href="#execute-align" aria-hidden="true">#</a></h3><p>Aligns the current position of the command to the block grid.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute align &lt;axes: swizzle&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Aligning a position will floor it. This subcommand accepts any non-repeating combination of the letters &quot;x&quot;, &quot;y&quot;, and &quot;z&quot;, and will floor the position along each axis specified.</p><h3 id="execute-anchored" tabindex="-1"><code>/execute anchored</code> <a class="header-anchor" href="#execute-anchored" aria-hidden="true">#</a></h3><p>Sets the anchor of the command to the executor&#39;s feet or eyes. Changing the anchor will affect the position where local coordinates will start at.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute anchored (eyes|feet) -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The default anchor when executing at a target is their feet.</p><p>When the anchor is set to <code>eyes</code>, the command&#39;s local position is offset by some amount corresponding to the &quot;eye height&quot; of the current executor.</p><p>This offset should only apply to local coordinates, but it currently affects relative coordinates due to a bug: <a href="https://bugs.mojang.com/browse/MCPE-162681" target="_blank" rel="noreferrer">MCPE-162681</a>.</p><h3 id="execute-rotated" tabindex="-1"><code>/execute rotated</code> <a class="header-anchor" href="#execute-rotated" aria-hidden="true">#</a></h3><p>Directly sets the rotation context of the command.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute rotated &lt;yaw: value&gt; &lt;pitch: value&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Sets the rotation of the command to specific values. Relative and local coordinates are based around the current rotation of the command. This defaults to 0 for both pitch and yaw, unless the rotation was changed prior.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute rotated as &lt;origin: target&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Sets the rotation of the command to a target&#39;s rotation.</p><p>If multiple targets are specified then a command is ran once for each target, setting the rotation context to the target&#39;s rotation.</p><h3 id="execute-facing" tabindex="-1"><code>/execute facing</code> <a class="header-anchor" href="#execute-facing" aria-hidden="true">#</a></h3><p>Sets the rotation of the command to face some position. This rotation is calculated based on the current position of the command.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute facing &lt;position: x y z&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Sets the rotation to face a block position. Relative and local coordinates are based around the current position of the command.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute facing entity &lt;origin: target&gt; (eyes|feet) -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Sets the rotation to face a target&#39;s position. Setting the anchor to <code>feet</code> will aim the rotation to face where they are currently standing, while setting the anchor to <code>eyes</code> will aim the command up at the &quot;eye position&quot; of that target (see <a href="/commands/new-execute.html#execute-anchored"><code>/execute anchored</code></a>).</p><p>If multiple targets are specified then a command is ran once for each target, setting the rotation context to face that target.</p><h3 id="execute-if-unless" tabindex="-1"><code>/execute (if|unless)</code> <a class="header-anchor" href="#execute-if-unless" aria-hidden="true">#</a></h3><p>Prevents running a command based on a condition. If the condition is true then the command will continue, or stop otherwise.</p><p><code>/execute unless</code> acts as the opposite, testing if the condition is false in order to continue.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute if entity &lt;target: target&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Acts like <code>/testfor</code>. Returns true if the targets exist.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute if block &lt;position: x y z&gt; &lt;block: string&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Acts like <code>/testforblock</code>. Returns true if the block at the specified location exists.</p><p>A data value or block state may additionally be specified, otherwise it ignores block states (acts as if it were set to <code>-1</code>).</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute if blocks &lt;begin: x y z&gt; &lt;end: x y z&gt; &lt;destination: x y z&gt; (all|masked) -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Acts like <code>/testforblocks</code>. It constructs a volume between the beginning and end positions, and returns true if the volume at the destination matches the original volume.</p><p>The parameter <code>all</code> tests that all blocks must match, while <code>masked</code> will ignore air blocks.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute if score &lt;target: target&gt; &lt;objective: string&gt; matches &lt;range: integer range&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Tests if a specified score is a certain value. This uses the integer range syntax.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute if score &lt;target: target&gt; &lt;objective: string&gt; (=|&lt;|&lt;=|&gt;|&gt;=) &lt;source: target&gt; &lt;objective: string&gt; -&gt; execute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Tests if a specified score matches some logical comparison to another score. Operators are equals (<code>=</code>), greater than (<code>&gt;</code>), greater than or equal to (<code>&gt;=</code>), less than (<code>&lt;</code>), and less than or equal to (<code>&lt;=</code>).</p><h3 id="execute-run" tabindex="-1"><code>/execute run</code> <a class="header-anchor" href="#execute-run" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/execute run &lt;command: command&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Runs a command using all of the currently applied context modifications. This subcommand always goes last in one <code>/execute</code> command.</p><p>This subcommand is not always required however; an <code>/execute</code> command ending with an <code>if</code> or <code>unless</code> subcommand is valid too, and will return the success of the test it performed.</p><h2 id="examples-and-upgrading-old-commands" tabindex="-1">Examples and Upgrading Old Commands <a class="header-anchor" href="#examples-and-upgrading-old-commands" aria-hidden="true">#</a></h2><p>Since subcommands can be chained limitlessly, there really is a nearly infinite combination of arguments for an <code>/execute</code> command and they cannot all be listed. Instead, listed here are some common examples of commands.</p><p>The old functionality of <code>/execute</code> can be replicated with <code>as &lt;target&gt; at @s</code>. If you need a positional offset relative to the entity, add <code>positioned</code>. If you want to detect if a block is present, add <code>if block</code>. Here are some equivalents:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># Teleport with an offset</span></span>
<span class="line"><span style="color:#A6ACCD;">/execute @p ~ ~1.62 ~ teleport @s ^ ^ ^3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/execute as @p at @s positioned ~ ~1.62 ~ run teleport @s ^ ^ ^3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># Chaining multiple &#39;/execute&#39;s</span></span>
<span class="line"><span style="color:#A6ACCD;">/execute @e[type=sheep] ~ ~ ~ execute @e[type=item,r=5] ~ ~ ~ detect ~ ~-1 ~ stone 0 kill @s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/execute at @e[type=sheep] as @e[type=item,r=5] at @s if block ~ ~-1 ~ stone 0 run kill @s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>(Note that we do not use <code>as @e[type=sheep] at @s</code> because we do not need to execute as the sheep; only the position here is required.)</p><p>Now for some examples of things that were not possible to do in one command, or were more difficult to perform before the new syntax was introduced.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># Testing a fake player&#39;s score</span></span>
<span class="line"><span style="color:#A6ACCD;">/execute if score game_settings var matches 3.. run say [Game] Difficulty set to Hard.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Comparing if two scores are equal</span></span>
<span class="line"><span style="color:#A6ACCD;">/execute as @a if score @s x = @s y run say My X is equal to my Y.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Test for an entity without targeting it</span></span>
<span class="line"><span style="color:#A6ACCD;">/execute as @a at @s if entity @e[type=armor_stand,r=10] run gamemode survival @s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,89),c=[o];function i(l,r,p,d,u,h){return a(),s("div",null,c)}const b=e(t,[["render",i]]);export{g as __pageData,b as default};