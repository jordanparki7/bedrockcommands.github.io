import{_ as o,c as r,a as n,e as i,b as e,d as t,o as s,r as l}from"./404.md.741b04df.js";const z=JSON.parse('{"title":"Creating addons with JQ","description":"","frontmatter":{"title":"Creating addons with JQ","hidden":true},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Getting jq","slug":"getting-jq","link":"#getting-jq","children":[]},{"level":2,"title":"Defining Syntax","slug":"defining-syntax","link":"#defining-syntax","children":[{"level":3,"title":"The Dot","slug":"the-dot","link":"#the-dot","children":[]},{"level":3,"title":"Paths","slug":"paths","link":"#paths","children":[]},{"level":3,"title":"Array Access","slug":"array-access","link":"#array-access","children":[]},{"level":3,"title":"Editing Values","slug":"editing-values","link":"#editing-values","children":[]},{"level":3,"title":"The Pipe","slug":"the-pipe","link":"#the-pipe","children":[]},{"level":3,"title":"Logical Operations","slug":"logical-operations","link":"#logical-operations","children":[]},{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]}]},{"level":2,"title":"Builtin Functions","slug":"builtin-functions","link":"#builtin-functions","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Math","slug":"math","link":"#math","children":[]},{"level":3,"title":"Map and Map Values","slug":"map-and-map-values","link":"#map-and-map-values","children":[]},{"level":3,"title":"To and From Entries","slug":"to-and-from-entries","link":"#to-and-from-entries","children":[]},{"level":3,"title":"Walk","slug":"walk","link":"#walk","children":[]},{"level":3,"title":"Further Reading","slug":"further-reading","link":"#further-reading","children":[]}]},{"level":2,"title":"Defining Custom Functions","slug":"defining-custom-functions","link":"#defining-custom-functions","children":[]},{"level":2,"title":"Command Line Use","slug":"command-line-use","link":"#command-line-use","children":[]},{"level":2,"title":"Bringing It All Together","slug":"bringing-it-all-together","link":"#bringing-it-all-together","children":[]}],"relativePath":"meta/jq.md"}'),d={name:"meta/jq.md"},h=i('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><blockquote><p>&quot;jq is like sed for JSON data - you can use it to slice and filter and map and transform structured data with the same ease that sed, awk, grep and friends let you play with text.&quot;</p></blockquote><p>_\u2014 <a href="https://stedolan.github.io/jq/_" target="_blank" rel="noreferrer">https://stedolan.github.io/jq/_</a></p><p>jq is a JSON editing program written in C. It can be thought of similarly to Perl. Because it was explicitly written to parse JSON, however, it has many valuable features that are not present in other text processors. jq defines its programs as filters, as they take an input, your JSON data, and produce an output, your modified JSON data. Though seemingly simple, jq contains many advanced features that can be extremely useful when procedurally generating addon files.</p><p>I&#39;ll be explaining jq from the perspective that jq is a command-line interface. However, wrappers have been designed for jq in essentially every programming language, so you can easily incorporate jq filters into the programing language of your choice, including Go, JavaScript, Java, Ruby, Python, and R. Given that, I will primarily focus on filter design from the perspective of Minecraft addons, and I&#39;ll leave the implementation to your specific use case. I&#39;ll be including embeds from <a href="https://jqterm.com/?query=." target="_blank" rel="noreferrer">jqterm.com</a>, which uses a JavaScript implementation of jq to display filters in a web browser.</p><h2 id="getting-jq" tabindex="-1">Getting jq <a class="header-anchor" href="#getting-jq" aria-hidden="true">#</a></h2><p>The official source to download the jq binaries is <a href="https://stedolan.github.io/jq/download/" target="_blank" rel="noreferrer">https://stedolan.github.io/jq/download/</a>. The executables downloaded here should be essentially portable and just &quot;run&quot;.</p><p>You may also use your system package manager, though if you take this approach, ensure that the version installed is the latest, jq-1.6.</p><p>A community-maintained list of the wrappers available for jq in various languages is available <a href="https://github.com/fiatjaf/awesome-jq" target="_blank" rel="noreferrer">here</a>.</p><h2 id="defining-syntax" tabindex="-1">Defining Syntax <a class="header-anchor" href="#defining-syntax" aria-hidden="true">#</a></h2><h3 id="the-dot" tabindex="-1">The Dot <a class="header-anchor" href="#the-dot" aria-hidden="true">#</a></h3><p>The simplest possible filter in jq is the dot (<code>.</code>), which will take the input JSON and return it unchanged. jq uses the standardized path notation for JSON files. Consider the following structure of a resource pack manifest:</p>',12),u=e("h3",{id:"paths",tabindex:"-1"},[t("Paths "),e("a",{class:"header-anchor",href:"#paths","aria-hidden":"true"},"#")],-1),c=e("p",null,[t("Here, we see that our "),e("code",null,"."),t(" filter returns what we expected: the entire JSON file. Now, let's say we wanted to return some specific part of the JSON file, the header UUID, for example. We would then construct a filter that contains the full path to that value. In this case, that would be "),e("code",null,".header.uuid"),t(". Let's see that in action:")],-1),p=e("h3",{id:"array-access",tabindex:"-1"},[t("Array Access "),e("a",{class:"header-anchor",href:"#array-access","aria-hidden":"true"},"#")],-1),f=e("p",null,[t("We can access arrays in jq similarly to how we would in other languages. Let's say we wanted to return the last number in our minimum engine version array. We would construct the following filter: "),e("code",null,".header.min_engine_version[-1]"),t(". Note that, of course, we could also specify the positive position 2 if we always wanted to return to the second position. Simply using empty brackets, "),e("code",null,".[]"),t(", will return all array elements in a line separated list. Feel free to play around with this and learn the basics:")],-1),m=e("h3",{id:"editing-values",tabindex:"-1"},[t("Editing Values "),e("a",{class:"header-anchor",href:"#editing-values","aria-hidden":"true"},"#")],-1),g=e("p",null,[t("Now let's get into the real meat of jq and start manipulating our JSON data. The way we do this is with the plain assignment operator ("),e("code",null,"="),t("). There are a few variants of this operator, referred to as update-assignment operators, such as "),e("code",null,"|="),t(" and "),e("code",null,"+="),t(", which you can read more about in jq's official "),e("a",{href:"https://stedolan.github.io/jq/manual/#Assignment",target:"_blank",rel:"noreferrer"},"manual"),t(", and experiment within the example below:")],-1),y=e("h3",{id:"the-pipe",tabindex:"-1"},[t("The Pipe "),e("a",{class:"header-anchor",href:"#the-pipe","aria-hidden":"true"},"#")],-1),_=e("p",null,[t("Similar to UNIX command-line interfaces, jq makes use of the pipe, "),e("code",null,"|"),t(". When you use the pipe character, you are essentially telling jq to take the result of your filter on the left of the pipe and run it through the filter to the pipe's right. Let's go back to our array access example, except this time. We will output the entire array apply some filter to the output array. We'll use jq's built-in map function to demonstrate this, which is a handy function as it can be used to apply a specified filter to every value in an input array. We'll add 1 to each value in the minimum engine version array:")],-1),b=i('<h3 id="logical-operations" tabindex="-1">Logical Operations <a class="header-anchor" href="#logical-operations" aria-hidden="true">#</a></h3><h4 id="if-then-else" tabindex="-1">If, Then, Else <a class="header-anchor" href="#if-then-else" aria-hidden="true">#</a></h4><p>Logical statements in jq are essentially written in a human-readable format. They take the form <code>if A then B else C end</code>. &#39;A&#39; in this case could test for a specific value or test if some key exists. More conditions can be added with elif in the form <code>if A then B elif C then D else E end</code>. For comparisons, the operators are essentially the same as Molang, utilizing <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, and <code>&lt;=</code>. In the example below, we&#39;ll conditionally change the description of the pack based on the format version. If the format version is greater than 1, we&#39;ll set the description to &quot;Big Format&quot;. Otherwise, we&#39;ll leave the description alone:</p>',3),v=i('<h4 id="and-or-not" tabindex="-1">And, Or, Not <a class="header-anchor" href="#and-or-not" aria-hidden="true">#</a></h4><p>The operations <code>and</code> and <code>or</code> are also written in plain English. If we wanted to test for condition &#39;A&#39; and condition &#39;B&#39;, we&#39;d write <code>if (A and B) then C else D</code>.</p><p>The operation <code>not</code> behaves like a single argument function, which we&#39;ll discuss in further depth below. When we pipe some boolean into <code>not</code>, it will return the opposite value. We&#39;ll demonstrate this by setting our header description to &quot;Little Version&quot; only if both our header version and module version are not greater than 1:</p>',3),w=e("h3",{id:"variables",tabindex:"-1"},[t("Variables "),e("a",{class:"header-anchor",href:"#variables","aria-hidden":"true"},"#")],-1),A=e("p",null,[t("Variables can be defined anywhere in filter. When a variable is defined, it is valid for use anywhere downstream in the pipe from where it was initially defined. They are defined in the form: "),e("code",null,".input as $var | $var"),t(", which would effectively return "),e("code",null,".input"),t(". Any valid JSON type can also serve as an input, such as objects, arrays, strings, and numbers. Take the simple example:")],-1),C=e("h2",{id:"builtin-functions",tabindex:"-1"},[t("Builtin Functions "),e("a",{class:"header-anchor",href:"#builtin-functions","aria-hidden":"true"},"#")],-1),D=e("h3",{id:"syntax",tabindex:"-1"},[t("Syntax "),e("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#")],-1),B=e("p",null,[t("jq comes with a variety of built-in functions. We've already encountered the function "),e("code",null,"map"),t(" while explaining the pipe. One thing of note regarding jq functions is that their syntax differs depending on the number of arguments they take. Multi-argument functions will take their values enclosed in parentheses and separated by semicolons. In contrast, for single-argument functions, the input is piped in. Take the example below, in which we use the multi-argument function pow to raise the format version to the third power, while we also use the single argument function sqrt to find the square root of the format version. In this example, you'll also note that we introduce the concept of building an entirely new JSON structure within our jq filter. This is extremely useful in situations where we'd like to reshape some input files somehow. It's always important to keep in mind that any valid JSON is valid anywhere in a jq filter:")],-1),q=i('<h3 id="math" tabindex="-1">Math <a class="header-anchor" href="#math" aria-hidden="true">#</a></h3><p>jq incorporates C-style math functions and generally carries over all built-in C math functions from your system. Refer to the <a href="https://stedolan.github.io/jq/manual/#Math" target="_blank" rel="noreferrer">manual</a> for a complete list of these.</p><h3 id="map-and-map-values" tabindex="-1">Map and Map Values <a class="header-anchor" href="#map-and-map-values" aria-hidden="true">#</a></h3><p>We&#39;ve already seen a bit of what <code>map</code> can do, as seen in the pipe section. I&#39;ll explain a bit about its cousin, <code>map_values</code>. While <code>map</code> can apply some filter to all values in an array, <code>map_values</code> apply some filter to all keys in an input list of objects. In the example below, I&#39;ll introduce <code>map_values</code> and a couple of extra functions. Our goal will be to substitute the string &quot;Example&quot; with &quot;Production&quot; by iterating through all the values with the typed string under the header. We must separate the string values from the array values, as we cannot perform the function we will use to make this substitution, <code>gsub</code>, on arrays. The function <code>gsub</code> is a multi-argument function that will take the substring we would like to change, followed by the result we&#39;d like to change that substring to. We&#39;ll also be utilizing the <code>select</code> function to separate our strings from our arrays. We&#39;ll incorporate a variable so we have easy access to all the information contained in the header. We&#39;ll use the function <code>type</code>, which lets us check the JSON data type of input.</p>',4),k=e("h3",{id:"to-and-from-entries",tabindex:"-1"},[t("To and From Entries "),e("a",{class:"header-anchor",href:"#to-and-from-entries","aria-hidden":"true"},"#")],-1),x=e("p",null,[t("The function "),e("code",null,"to_entries"),t(" is a useful single argument jq builtin that is helpful when we'd like to rearrange keys and values. Let's say we wanted to invert all the key/value pairs in the header. Using "),e("code",null,"to_entries"),t(`, we'll construct an array of all key-value pairs in the header, reformatted as objects, and assigned "key" or "value" to reference them later. To understand how this function works, it's important to see what this intermediate looks like. Note that this can also be reversed by appending `),e("code",null,"from_entries"),t(":")],-1),j=e("p",null,[t("Now, we'll use "),e("code",null,"map"),t(" to iterate through each array entry, and finally, we'll introduce a new function, add. This single-argument function will take the array of objects output by "),e("code",null,"map"),t(" and essentially move them up one level to again exist as key-value pairs under the header. We'll also need to convert all our values to strings so they can serve as keys. We'll use the single-argument function "),e("code",null,"tostring"),t(". Note that "),e("code",null,"tonumber"),t(" is the inverse of this:")],-1),T=i('<h3 id="walk" tabindex="-1">Walk <a class="header-anchor" href="#walk" aria-hidden="true">#</a></h3><p>The function <code>walk</code> is compelling, as it will recursively apply to everything in the input at all levels. Take the example of deleting all objects with the value null. We&#39;ll also be introducing the function <code>with_entries</code>, which is just a shorthand for <code>to_entries | map(some filter) | from_entries</code>. We&#39;ll start our filter with <code>walk</code>, indicating we want to go through everything. We&#39;ll then use an if statement to ensure we are only editing objects. Else we&#39;ll leave the input unchanged. For all objects, we&#39;ll use <code>with_entries</code> to convert those to mapped keys and values and run a <code>select</code> function on those to ensure we only carry on values that are not equal to null:</p>',2),S=i('<h3 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-hidden="true">#</a></h3><p>Jq has far too many functions to list off here. I&#39;ve tried to explain those that I find most useful in my jq projects. For further reading, refer to the <a href="https://stedolan.github.io/jq/manual/" target="_blank" rel="noreferrer">jq manual</a>.</p><h2 id="defining-custom-functions" tabindex="-1">Defining Custom Functions <a class="header-anchor" href="#defining-custom-functions" aria-hidden="true">#</a></h2><p>In jq, one can easily define custom functions with the syntax <code>def function_name($input1; $input2): some function;</code>. The variables can then be used all throughout the function. A function can also have no input. Take the boiler plate examples below:</p>',4),I=i(`<h2 id="command-line-use" tabindex="-1">Command Line Use <a class="header-anchor" href="#command-line-use" aria-hidden="true">#</a></h2><p>When invoked from the command line, jq takes the form <code>jq &#39;[filter]&#39; input.json</code>. This will only display the output in the terminal. For bash-based systems, simply use the arrow operator, <code>jq &#39;[filter]&#39; input.json &gt; output.json</code> to write an output file. If you wish to overwrite the input file on the fly, this method will not work. You will need to generate a temp file or use a utility like Sponge from <a href="https://rentes.github.io/unix/utilities/2015/07/27/moreutils-package/" target="_blank" rel="noreferrer">moreutils</a>. Then, you may simply <code>jq &#39;[filter]&#39; input.json | sponge input.json</code>. For large filters, it&#39;s generally easier to employ a shell or bash script. You may use the -n flag to construct a JSON file from scratch rather than specify an input. Finally, you may pass terminal variables to be used in your jq filters as follows:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">jq -n --arg jqvar1 $var1 --arg jqvar2 $var2 &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;var1&quot;: $jqvar1,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;var2&quot;: $jqvar2</span></span>
<span class="line"><span style="color:#A6ACCD;">}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="bringing-it-all-together" tabindex="-1">Bringing It All Together <a class="header-anchor" href="#bringing-it-all-together" aria-hidden="true">#</a></h2><p>Many of the previous examples are abstract and contrived, designed to allow you to become familiar with the basics of jq. Now, I&#39;d like to go over an example of a practical use case of jq. I&#39;ll be explaining the jq filter I wrote for converting a Java model to a Bedrock model for use as an attachable while remapping all its UV values.</p><p>First, we&#39;ll define a simple variable to change the name of our model geometry easily. Next, we&#39;ll define a function to deal with our elements, <code>element_array</code>. We&#39;ll first get some information from the array of textures from our Java model to know how many textures we have, what order they&#39;re in, and therefore how to shift our UV values. Now that we&#39;ve defined all our variables from our texture array, which we&#39;ll use later in UV calculations, we&#39;ll start to map our elements array.</p><p>Iterating through each element in our array of elements, we&#39;ll calculate our origin and size. We can use simple math from jq to do this. To go from Java to Bedrock, we&#39;ll need to change 2 absolute corner positions to one origin value and one size value. We&#39;ll also shift our X and Z coordinates by 8 to account for the different centering of coordinate systems between Bedrock and Java.</p><p>Now, we&#39;ll deal with rotation. The way Java defines its rotations uses a string followed by a value, but we&#39;d like to construct an array based on that. We can do so with a reasonably simple if, then, else statement. Since rotation is optional, we&#39;ll just set that to null for now if we don&#39;t have a rotation. We can delete that later. Next, we&#39;ll set the element pivot, shifting by 8 on the X and Z due to the coordinate difference and setting to null if we lack a pivot.</p><p>We will then calculate our UV values. I wish to shift all our UV&#39;s as if we are generating a single square texture atlas from our input textures. We&#39;ll define a nested function, <code>uv_calc</code>, here. We&#39;ll then use some modular division via the <code>fmod</code> function to figure out the offsets. Finally, we&#39;ll change Java&#39;s four coordinate style UV system to Bedrock&#39;s, which uses a point value and a size value, with simple arithmetic. We&#39;ll then run the function for each of the six faces of our element, and finally, use <code>walk</code> to remove any objects with the value null.</p><p>To make our geometry compatible with custom blocks, we&#39;ll define the function <code>pivot_groups</code>, which we&#39;ll ultimately use to iterate over our element array, find all unique rotation pivot combinations, and create a bone for all elements that share a rotation-pivot variety.</p><p>Lastly, we&#39;ll put down the structure of our actual geometry file. We&#39;ll concatenate in our model name, use our <code>element_array</code> function to bring in all our cubes with no rotation, and add in our special pivot groups. We&#39;ll use the map to give each group a unique name, iterating up one value each time.</p><p>This filter is a little heavy, so I&#39;ve linked it on a separate page rather than embedding it <a href="https://jqterm.com/85a349e33fd8709ceb0c64be6b63c497?query=%22test%22%20as%20%24model_name%20%7C%0A%0Adef%20element_array%3A%0A%20%20%20%20%28.textures%20%7C%20to_entries%20%7C%20sort_by%28.key%29%20%7C%20map%28%7B%28.key%29%3A%20.value%7D%29%20%7C%20add%20%7C%20keys_unsorted%29%20as%20%24texture_array%0A%20%20%20%20%7C%20%28%24texture_array%20%7C%20length%29%20as%20%24frames%0A%20%20%20%20%7C%20%28%28%24frames%20%7C%20sqrt%29%20%7C%20ceil%29%20as%20%24sides%0A%20%20%20%20%7C%20%28.texture_size%5B1%5D%20%2F%2F%2016%29%20as%20%24t1%0A%20%20%20%20%7C%20.elements%20%7C%20map%28%7B%0A%20%20%20%20%20%20%22origin%22%3A%20%5B%28-.to%5B0%5D%20%2B%208%29%2C%20%28.from%5B1%5D%29%2C%20%28.from%5B2%5D%20-%208%29%5D%2C%0A%20%20%20%20%20%20%22size%22%3A%20%5B.to%5B0%5D%20-%20.from%5B0%5D%2C%20.to%5B1%5D%20-%20.from%5B1%5D%2C%20.to%5B2%5D%20-%20.from%5B2%5D%5D%2C%0A%20%20%20%20%20%20%22rotation%22%3A%20%0A%20%20%20%20%20%20%28if%20%28.rotation.axis%29%20%3D%3D%20%22x%22%20then%20%5B%28.rotation.angle%20%7C%20tonumber%20*%20-1%29%2C%200%2C%200%5D%20%0A%20%20%20%20%20%20%20%20elif%20%28.rotation.axis%29%20%3D%3D%20%22y%22%20then%20%5B0%2C%20%28.rotation.angle%20%7C%20tonumber%20*%20-1%29%2C%200%5D%20%0A%20%20%20%20%20%20%20%20elif%20%28.rotation.axis%29%20%3D%3D%20%22z%22%20then%20%5B0%2C%200%2C%20%28.rotation.angle%20%7C%20tonumber%29%5D%20%0A%20%20%20%20%20%20%20%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%22pivot%22%3A%20%28if%20.rotation.origin%20then%20%5B%28-%20.rotation.origin%5B0%5D%20%2B%208%29%2C%20.rotation.origin%5B1%5D%2C%20%28.rotation.origin%5B2%5D%20-%208%29%5D%20else%20null%20end%29%2C%0A%20%20%20%20%20%20%22uv%22%3A%20%28%0A%20%20%20%20%20%20%20%20def%20uv_calc%28%24input%29%3A%0A%20%20%20%20%20%20%20%20%20%20%28if%20%28.faces%20%7C%20.%5B%24input%5D%29%20then%0A%20%20%20%20%20%20%20%20%20%20%28.faces%20%7C%20.%5B%24input%5D.texture%5B1%3A%5D%20as%20%24input_n%20%7C%20%24texture_array%20%7C%20%28index%28%24input_n%29%20%2F%2F%20index%28%22particle%22%29%29%29%20as%20%24pos_n%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B0%5D%20%2F%20%24sides%29%20%2B%20%28%28fmod%28%24pos_n%3B%20%24sides%29%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn0%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B1%5D%20%2F%20%24sides%29%20%2B%20%28%28%28%24pos_n%20%2F%20%24sides%29%20%7C%20floor%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn1%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B2%5D%20%2F%20%24sides%29%20%2B%20%28%28fmod%28%24pos_n%3B%20%24sides%29%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn2%0A%20%20%20%20%20%20%20%20%20%20%7C%20%28%28.faces%20%7C%20.%5B%24input%5D.uv%5B3%5D%20%2F%20%24sides%29%20%2B%20%28%28%28%24pos_n%20%2F%20%24sides%29%20%7C%20floor%29%20*%20%2816%20%2F%20%24sides%29%29%29%20as%20%24fn3%20%7C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22uv%22%3A%20%5B%28%24fn0%29%2C%20%28%24fn1%29%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22uv_size%22%3A%20%5B%28%24fn2%20-%20%24fn0%29%2C%20%28%24fn3%20-%20%24fn1%29%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20null%20end%29%3B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22north%22%3A%20uv_calc%28%22north%22%29%2C%0A%20%20%20%20%20%20%20%20%22south%22%3A%20uv_calc%28%22south%22%29%2C%0A%20%20%20%20%20%20%20%20%22east%22%3A%20uv_calc%28%22east%22%29%2C%0A%20%20%20%20%20%20%20%20%22west%22%3A%20uv_calc%28%22west%22%29%2C%0A%20%20%20%20%20%20%20%20%22up%22%3A%20uv_calc%28%22up%22%29%2C%0A%20%20%20%20%20%20%20%20%22down%22%3A%20uv_calc%28%22down%22%29%0A%20%20%20%20%20%20%20%20%7D%29%0A%20%20%20%20%7D%29%20%7C%20walk%28%20if%20type%20%3D%3D%20%22object%22%20then%20with_entries%28select%28.value%20!%3D%20null%29%29%20else%20.%20end%29%3B%0A%0Adef%20pivot_groups%3A%0A%20%20%20%20%28element_array%29%20as%20%24element_array%20%7C%0A%20%20%20%20%5B%5B.elements%5B%5D.rotation%5D%20%7C%20unique%20%7C%20.%5B%5D%20%7C%20select%20%28.!%3Dnull%29%5D%0A%20%20%20%20%7C%20map%28%28%0A%20%20%20%20%5B%28-%20.origin%5B0%5D%20%2B%208%29%2C%20.origin%5B1%5D%2C%20%28.origin%5B2%5D%20-%208%29%5D%20as%20%24i_piv%20%7C%0A%20%20%20%20%28if%20%28.axis%29%20%3D%3D%20%22x%22%20then%20%5B%28.angle%20%7C%20tonumber%20*%20-1%29%2C%200%2C%200%5D%20%0A%20%20%20%20%20%20elif%20%28.axis%29%20%3D%3D%20%22y%22%20then%20%5B0%2C%20%28.angle%20%7C%20tonumber%20*%20-1%29%2C%200%5D%20%0A%20%20%20%20%20%20else%20%5B0%2C%200%2C%20%28.angle%20%7C%20tonumber%29%5D%20end%29%20as%20%24i_rot%20%7C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd_z%22%2C%0A%20%20%20%20%20%20%22pivot%22%3A%20%28%24i_piv%29%2C%0A%20%20%20%20%20%20%22rotation%22%3A%20%28%24i_rot%29%2C%0A%20%20%20%20%20%20%22mirror%22%3A%20true%2C%0A%20%20%20%20%20%20%22cubes%22%3A%20%5B%28%24element_array%20%7C%20.%5B%5D%20%7C%20select%28.rotation%20%3D%3D%20%24i_rot%20and%20.pivot%20%3D%3D%20%24i_piv%29%29%5D%0A%20%20%20%20%7D%29%29%3B%0A%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22format_version%22%3A%20%221.16.0%22%2C%0A%20%20%20%20%20%20%22minecraft%3Ageometry%22%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%22description%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22identifier%22%3A%20%28%22geometry.geysercmd.%22%20%2B%20%28%24model_name%29%29%2C%0A%20%20%20%20%20%20%20%20%20%20%22texture_width%22%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%22texture_height%22%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%22visible_bounds_width%22%3A%204%2C%0A%20%20%20%20%20%20%20%20%20%20%22visible_bounds_height%22%3A%204.5%2C%0A%20%20%20%20%20%20%20%20%20%20%22visible_bounds_offset%22%3A%20%5B0%2C%200.75%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22bones%22%3A%20%28%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22binding%22%3A%20%22c.item_slot%20%3D%3D%20%27head%27%20%3F%20%27head%27%20%3A%20q.item_slot_to_bone_name%28c.item_slot%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd_x%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd_y%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd_x%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22geysercmd_z%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22parent%22%3A%20%22geysercmd_y%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pivot%22%3A%20%5B0%2C%208%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%22cubes%22%3A%20%5B%28element_array%20%7C%20.%5B%5D%20%7C%20select%28.rotation%20%3D%3D%20null%29%29%5D%0A%20%20%20%20%20%20%20%20%7D%5D%20%2B%20%28pivot_groups%20%7C%20map%28del%28.cubes%5B%5D.rotation%29%29%20%7C%20to_entries%20%7C%20map%28%20%28.value.name%20%3D%20%22rot_%5C%281%2B.key%29%22%20%29%20%7C%20.value%29%29%29%0A%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D" target="_blank" rel="noreferrer">here</a>.</p>`,12);function N(W,F,V,J,P,O){const a=l("JQEmbed");return s(),r("div",null,[h,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=."}),u,c,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.header.uuid"}),p,f,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.header.min_engine_version[-1]"}),m,g,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.format_version%20%3D%203"}),y,_,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=.header.min_engine_version%20%7C%20map%28.%20%2B%201%29"}),b,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=if%20.format_version%20>%201%20then%20.header.description%20%3D%20%22Big%20Format%22%20else%20.%20end"}),v,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=if%20%28.header.version%5B0%5D%20>%201%20and%20.modules%5B0%5D.version%5B0%5D%20>%201%20%7C%20not%29%20%0A%0Athen%20.header.description%20%3D%20%22Little%20Version%22%20else%20.%20end"}),w,A,n(a,{content:"f99c7ad63286e1813cebc4a6dac1df1d?query=%7B%22hello%22%3A%20%22world%22%7D%20as%20%24var%20%7C%20%24var%20%7C%20.hello&slurp=true"}),C,D,B,n(a,{content:"c35537fac79dfd77cd89551b7487abed?query=%7B%0A%20%20%22multi-argument%22%3A%20pow%28.format_version%3B%203%29%2C%0A%20%20%22single-argument%22%3A%20.format_version%20%7C%20sqrt%0A%7D"}),q,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=.header%20as%20%24header%20%7C%0A.header%20%3D%20%28%24header%20%7C%20map_values%28%28select%28type%20%3D%3D%20%22string%22%29%20%7C%20gsub%28%22Example%22%3B%20%22Production%22%29%29%29%29%20%2B%20%28%24header%20%7C%20map_values%28select%28type%20!%3D%20%22string%22%29%29%29"}),k,x,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=.header%20%7C%20to_entries"}),j,n(a,{content:"199ed596c0f7158cdb7d2da8510690c5?query=.header%20%3D%20%28.header%20%7C%20to_entries%20%7C%20map%28%7B%28.value%20%7C%20tostring%29%3A%20.key%7D%29%20%7C%20add%29"}),T,n(a,{content:"ef243c5bcf9cfedf561f351b34947f76?query=walk%28if%20type%20%3D%3D%20%22object%22%20then%20with_entries%28select%28.value%20!%3D%20null%29%29%20else%20.%20end%29"}),S,n(a,{content:"938c5245d17516df7cf8f46c9fd6a525?query=def%20test_func%28%24input1%3B%20%24input2%29%3A%0A%28%24input1%20%2B%20%24input2%29%0A%3B%0A%0Adef%20no_input%3A%0A%281%20%2B%201%29%0A%3B%0A%0A%7B%28test_func%28%22combined%22%3B%20%22Strings%22%29%29%3A%20%28no_input%29%7D"}),I])}const L=o(d,[["render",N]]);export{z as __pageData,L as default};
