import{_ as e,c as t,o as a,e as n}from"./404.md.741b04df.js";const u=JSON.parse('{"title":"About NBT (Named Binary Tag)","description":"","frontmatter":{"title":"About NBT (Named Binary Tag)","category":"NBT in Depth","mention":["ConsoleTerm"],"tags":["expert"]},"headers":[{"level":2,"title":"NBT Tags and Data Types","slug":"nbt-tags-and-data-types","link":"#nbt-tags-and-data-types","children":[]},{"level":2,"title":"How to read/write NBT tags","slug":"how-to-read-write-nbt-tags","link":"#how-to-read-write-nbt-tags","children":[{"level":3,"title":"Reading Types","slug":"reading-types","link":"#reading-types","children":[]},{"level":3,"title":"Reading Numbers","slug":"reading-numbers","link":"#reading-numbers","children":[]},{"level":3,"title":"Reading Strings","slug":"reading-strings","link":"#reading-strings","children":[]},{"level":3,"title":"Reading Lists","slug":"reading-lists","link":"#reading-lists","children":[]},{"level":3,"title":"Reading Compouds","slug":"reading-compouds","link":"#reading-compouds","children":[]}]},{"level":2,"title":"Minecrft BE NBT files","slug":"minecrft-be-nbt-files","link":"#minecrft-be-nbt-files","children":[]},{"level":2,"title":"Writing NBT","slug":"writing-nbt","link":"#writing-nbt","children":[]},{"level":2,"title":"Bedrock NBT File header","slug":"bedrock-nbt-file-header","link":"#bedrock-nbt-file-header","children":[]},{"level":2,"title":"Little-Endian","slug":"little-endian","link":"#little-endian","children":[]}],"relativePath":"nbt/nbt-in-depth.md"}'),s={name:"nbt/nbt-in-depth.md"},i=n(`<p>NBT (Named Binary Tag) is a name for data encoding format at the binary level, you certainly know format JSON which is based on the text level. Therefore, we will be able to use the JSON format for some examples, you may also notice that minecraft itself uses JSON to represent NBT in commands such as java commands or simplified bedrock commands ( <code>/give</code>, <code>/replaceitem</code>). See <a href="/commands/nbt-commands.html">NBT Commands</a> . In this article, we will show NBT in much more detail than you will ever expect, because what you could see in the commands is far from NBT, and we will show you how NBT works and how to read it, also how <code>Minecraft BE</code> itself uses it as well.</p><h2 id="nbt-tags-and-data-types" tabindex="-1">NBT Tags and Data Types <a class="header-anchor" href="#nbt-tags-and-data-types" aria-hidden="true">#</a></h2><p>NBT, just like JSON, has given types and knows how to read them, for example JSON knows that a compound object starts with the symbol <code>{</code> and ends with <code>}</code>, it also knows that when it has to read a string, the string always starts with the symbol &quot;, this means that we want to learn to read and understand NBT so you need to know when a composite object starts, and how to read individual types. Now let&#39;s look at the table of NBT tags for NBT types and how they are marked in NBT. As it was said, NBT works on a binary level, so you need to know that the smallest data type is a byte, which is 8 bits in size. And individual types can contain multiple bytes, but they can never be 1/2 byte extra or less, not possible! : ) We also cannot say how the tags should be named, because everyone can call NBT tags differently, but they must always have the same binary base (<code>id</code>), id is represented by one byte.</p><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:right;">Binary ID</th><th style="text-align:left;">Binary Size</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Byte</td><td style="text-align:right;">0x01</td><td style="text-align:left;">1 byte (8-bits)</td><td style="text-align:left;">One byte size type</td></tr><tr><td style="text-align:center;">Int16 (short)</td><td style="text-align:right;">0x02</td><td style="text-align:left;">2 bytes (16-bits)</td><td style="text-align:left;">A two-byte type</td></tr><tr><td style="text-align:center;">Int32 (intiger)</td><td style="text-align:right;">0x03</td><td style="text-align:left;">4 bytes (32-bits)</td><td style="text-align:left;">A four-byte type</td></tr><tr><td style="text-align:center;">Int64 (long)</td><td style="text-align:right;">0x04</td><td style="text-align:left;">8 bytes (64-bits)</td><td style="text-align:left;">An eight-byte type</td></tr><tr><td style="text-align:center;">Float</td><td style="text-align:right;">0x05</td><td style="text-align:left;">4 bytes (32-bits)</td><td style="text-align:left;">A four-byte type with regular decimal precision</td></tr><tr><td style="text-align:center;">Double</td><td style="text-align:right;">0x06</td><td style="text-align:left;">8 bytes (64-bits)</td><td style="text-align:left;">An eight-byte type with higher decimal precision</td></tr><tr><td style="text-align:center;">String</td><td style="text-align:right;">0x08</td><td style="text-align:left;">Predefined</td><td style="text-align:left;">A string type that has a predefined size. Text uses UTF-8 encoding</td></tr><tr><td style="text-align:center;">List</td><td style="text-align:right;">0x09</td><td style="text-align:left;">Predefined</td><td style="text-align:left;">A list type with a predefined size and defining type for the elements in the list</td></tr><tr><td style="text-align:center;">Compoud</td><td style="text-align:right;">0x0A (10)</td><td style="text-align:left;">Undefined</td><td style="text-align:left;">Type compound, the compound does not have a predefined size, so it is necessary to read the keys and values until we do not encounter the tag for ending the compound.</td></tr><tr><td style="text-align:center;">End of the Compoud</td><td style="text-align:right;">0x00</td><td style="text-align:left;">0 bytes</td><td style="text-align:left;">This tag is not a type but only a tag and can only be used depending on the compound. It marks the end of a compound</td></tr><tr><td style="text-align:center;">Byte List</td><td style="text-align:right;">0x07</td><td style="text-align:left;">Predefined</td><td style="text-align:left;">List type of Byte and predefined size, not commonly used by Minecraft BE</td></tr><tr><td style="text-align:center;">Int List</td><td style="text-align:right;">0x0B (11)</td><td style="text-align:left;">Predefined</td><td style="text-align:left;">List type of Int and predefined size, not commonly used by Minecraft BE</td></tr><tr><td style="text-align:center;">Long List</td><td style="text-align:right;">0x0C (12)</td><td style="text-align:left;">Predefined</td><td style="text-align:left;">List type of Long and predefined size, not commonly used by Minecraft BE</td></tr></tbody></table><p>You may notice that there is no boolean value like in JSON and that means we will express true false values as 1 and 0 using Byte.</p><h2 id="how-to-read-write-nbt-tags" tabindex="-1">How to read/write NBT tags <a class="header-anchor" href="#how-to-read-write-nbt-tags" aria-hidden="true">#</a></h2><p>The same reading method applies to all numbers, read as many bytes as the number tag type is large, such as: Int16 (short) is 2 bytes in size, so I will read 2 bytes, but you need to know that Minecraft BE uses the <a href="#little-endian">little-endian</a>, unlike Java, it uses big-endian. <a href="#little-endian">Little-endian</a> is a way to write or read bytes of numbers.</p><h3 id="reading-types" tabindex="-1">Reading Types <a class="header-anchor" href="#reading-types" aria-hidden="true">#</a></h3><p>Type is always one byte in size, so we read the type and find out what to read next for the tag.</p><h3 id="reading-numbers" tabindex="-1">Reading Numbers <a class="header-anchor" href="#reading-numbers" aria-hidden="true">#</a></h3><p>When reading a number, it is necessary to know what type of number we are reading, we can find out by reading the type <em>(<a href="#reading-types">Reading types</a>)</em>. Then when we know what type of number we have to read, we read it, for example, if we know that we want type <code>3</code>, then we look in the table and we know that type 3 is a number of 4-bytes size, so we read 4 bytes. All numbers <em><strong>BE</strong></em> reads/writes with <a href="#little-endian">little-endian</a> method.</p><h3 id="reading-strings" tabindex="-1">Reading Strings <a class="header-anchor" href="#reading-strings" aria-hidden="true">#</a></h3><p>When reading a string, you need to know its length in bytes, this string length is always written with Int16 (short) <code>2 bytes</code> (<a href="#reading-numbers">how to read numbers</a>) before the string, i.e. first we read the number, then we read the number of bytes of the number we read before, after we know the bytes we can stuff them through UTF-8 encoding and we get text from them.</p><h3 id="reading-lists" tabindex="-1">Reading Lists <a class="header-anchor" href="#reading-lists" aria-hidden="true">#</a></h3><p>When reading a list, we must first read the list (<a href="#reading-types">type</a>), whether this list contains numbers or other lists or strings, etc. So first we read the type of this list, then we read the <a href="#reading-numbers">number</a> of elements which is written as an Int32 (int) number, so we read 4 bytes, now we know the type of our elements and their count, so we read this type as many times as we know from the readed number before. Reading the size of a list is not the same as reading the size of a string! Should read Int32 no Int16! This solution does not apply to <code>Byte-List, Int-List, Long-List</code>!</p><h3 id="reading-compouds" tabindex="-1">Reading Compouds <a class="header-anchor" href="#reading-compouds" aria-hidden="true">#</a></h3><p>Compound has all properties named so when reading an property it is always necessary to read its name as well. The procedure for reading Compoud is rather simple. First, we read the type, the type can be anything, but if it is equal to an empty byte, then it is the end of the compound and then we jut stop reading, but if the type is not equal to the Compoud Ending tag, then the significant type of the property that we will read. The read property is always followed by the name (key), which needs to be read as a <a href="#reading-strings">string</a>, and after the string is read, then we can read value.</p><h2 id="minecrft-be-nbt-files" tabindex="-1">Minecrft BE NBT files <a class="header-anchor" href="#minecrft-be-nbt-files" aria-hidden="true">#</a></h2><p>When reading Minecraft NBT files, it is always important to be careful if there is no Bedrock Header at the beginning of the file, see <a href="#bedrock-nbt-file-header">Bedrock NBT Header</a>, but not all MCBE NBT files contain this header, for example <code>.mcstructure</code> also does not contain a Bedrock NBT header, unlike <code>level.dat</code>. You also need to pay attention to the root element in the file, i.e. the list or compoud, The root element also looks like a property, so you need to read the name of this root property, although Bedrock does not use these names, so these names are empty, but they are there. Here is how .mcstructure looks like where JSON represents NBT.</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[],</span><span style="color:#676E95;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">structure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{},</span><span style="color:#676E95;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">structure_world_origin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[]</span><span style="color:#676E95;">//..</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This example shows that it is also necessary to read the name of the basic element, although it is usually unused and empty.</p></div><h2 id="writing-nbt" tabindex="-1">Writing NBT <a class="header-anchor" href="#writing-nbt" aria-hidden="true">#</a></h2><p>There is no certain procedure for writing, because it is the same mothods as when reading, but backwards. That&#39;s why we recommend first understanding NBT and learning to read it correctly, then it won&#39;t be difficult to write NBT.</p><h2 id="bedrock-nbt-file-header" tabindex="-1">Bedrock NBT File header <a class="header-anchor" href="#bedrock-nbt-file-header" aria-hidden="true">#</a></h2><p>The NBT bedrock Header is indicated by two 4-byte numbers, the first is always 8 and the second indicates the size of the nbt structure in bytes. E.g.</p><ul><li><code>08 00 00 00</code> - <code>bf 00 00 00</code></li><li>&lt; always 8 &gt; &lt; always the size of the NBT structure - exclude headers 8 bytes&gt;</li></ul><h2 id="little-endian" tabindex="-1">Little-Endian <a class="header-anchor" href="#little-endian" aria-hidden="true">#</a></h2><p>Little-Endian is the common method of writing numbers in bytes to streams or files. It&#39;s not a science and it&#39;s easy to understand. So if Int16 <code>(short)</code> of value <code>0x5a72</code> then we convert it to bytes [<code>0x5a</code>, <code>0x72</code>] and then reverse their order that means [<code>0x72</code>, <code>0x5a</code>] and write d file: <code>72 5a</code>. It may seem illogical, but little-endian is almost always used when writing and reading from files. A single <code>byte</code> is the same in both methods because it is one byte in size. For example:</p><ul><li>Int16 (long) <code>0x11223344aabbccdd</code></li><li>Split to 8 bytes <code>0x11 0x22 0x33 0x44 0xAA 0xBB 0xCC 0xDD</code></li><li>Reverse <code>0xDD 0xCC 0xBB 0xAA 0x44 0x33 0x22 0x11</code></li><li>Write <code>dd cc bb aa 44 33 22 11</code></li><li>Done (when reading the number just go backwards this example.)</li></ul>`,29),r=[i];function d(l,o,h,c,y,p){return a(),t("div",null,r)}const b=e(s,[["render",d]]);export{u as __pageData,b as default};
