---
title: 'How was <span class="decidables">decidables</span> made?'
layout: page
script: index
---

The [<span class="decidables">decidables</span>](./) project is a collection of explorable
explanations of decision making: [**<span class="detectable"><span class="math-var
d">d′</span>ete<span class="math-var c">c</span>table</span>**](detectable/), [**<span
class="prospectable">prospect<span class="math-var">α</span>b<span
class="math-var">λ</span>e</span>**](prospectable/), and [**<span class="discountable">dis<span
class="math-var">k</span>ountable</span>**](discountable/). Each explorable is a statically-served
website with interactive elements implemented as [web
components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). The websites and
component libraries are built from source using a toolchain running on
[:tool[Node.js]](https://nodejs.org/) and published to [:tool[GitHub
Pages]](https://pages.github.com/) and the [:tool[npm]](https://www.npmjs.com/) registry
respectively.

**Note:** If you want to see *exactly* how the project is built, nothing beats looking at the source
in the [<span class="decidables">decidables</span>
monorepo](https://github.com/decidables/decidables/) on [:tool[GitHub]](https://github.com/)!

## Websites

The site for each explorable is *published* as [HTML](https://html.spec.whatwg.org/),
[SVG](https://www.w3.org/Graphics/SVG/), [CSS](https://www.w3.org/Style/CSS/), and
[JavaScript](https://tc39.es/ecma262/). However, the content is *authored* in other related
languages that facilitate the development process, and then compiled to the native web languages.

### Text

The body text is authored in [markdown](https://commonmark.org/) which is lighter weight than HTML,
so it makes for a better writing experience for substantive content. The content files also have
front matter written in [YAML](https://yaml.org/) containing metadata to guide their use. They are
compiled into HTML using [:tool[front-matter]](https://github.com/jxson/front-matter) and
[:tool[remark]](https://remark.js.org/), which provides a highly flexible ecosystem for working with
markdown. For example, using
[:tool[remark-directive]](https://www.npmjs.com/package/remark-directive) along with a custom
plugin,
[:tool[remark-terminology]](https://github.com/decidables/decidables/blob/main/scripts/remark-terminology.js),
bespoke formatting is added for keywords (e.g. `:key[Accuracy]`), terminology (e.g.
`:term[fixation]`), tools (e.g. `:tool[remark]`), and UI features (e.g. `ui:[Pause]`).

### Citations and references

Another custom [:tool[remark]](https://remark.js.org/) plugin,
[:tool[remark-citeproc]](https://github.com/decidables/decidables/blob/main/scripts/remark-citeproc.js),
is used to include citations (e.g. `:cite[@Green1966]`). The full set of references for a site are
stored in [BibTeX](http://www.bibtex.org/) format. During compilation,
[:tool[citeproc-js]](https://citeproc-js.readthedocs.io/) and
[:tool[Citation.js]](https://citation.js.org/) are used to generate [APA-formatted
citations](https://apastyle.apa.org/style-grammar-guidelines/citations), and all of the cited works
are collected for output into an [APA-formatted reference
list](https://apastyle.apa.org/style-grammar-guidelines/references) that is injected into a markdown
page.

### Page structure

The structure of the webpages, including headers, footers, and sidebars is written in the [Embedded
JavaScript](https://github.com/mde/ejs/blob/master/docs/syntax.md) templating language with
[YAML](https://yaml.org/) front matter. By combining HTML and JavaScript, this makes it easy to
specify the organization of the pages a single time, and have it reused for every page on the site.
Elements like "next" links are generated programmatically, since their target is different on each
page. [:tool[EJS]](https://ejs.co/) is used to combine the templates with the content output from
[:tool[remark]](https://remark.js.org/) to generate the resulting HTML pages.

### Styling

The styles for each site are written in [SCSS](https://sass-lang.com/documentation/syntax) syntax
using the [:tool[Bootstrap]](https://getbootstrap.com/) framework. Together these help to create
clean consistent styling with much less effort than writing raw CSS from scratch. The SCSS is
compiled to CSS using [:tool[Dart Sass]](https://sass-lang.com/dart-sass).

The look of any project depends in no small part on colors, fonts, icons, and other decorations.
This project uses the [:tool[Source]](https://fonts.adobe.com/search/fonts?query=source)
super-family of fonts from [:tool[Adobe Originals]](https://fonts.adobe.com/foundries/adobe), which
provides serif ([:tool[Source Serif]](https://fonts.adobe.com/fonts/source-serif)), sans-serif
([:tool[Source Sans]](https://fonts.adobe.com/fonts/source-sans)), and monospace ([:tool[Source Code
Pro]](https://fonts.adobe.com/fonts/source-code-pro)) fonts that work together seamlessly and all
have a large compliment of characters, weights, and styles (including [variable
font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) support). 

Color is a powerful way to visually convey meaning, but finding a set of colors that meets the needs
of a diverse audience is a challenge. This project relies on
[:tool[ColorBrewer]](https://colorbrewer2.org/) for a set of distinct, saturated colors
([:tool[9-class Set 1]](https://colorbrewer2.org/#type=qualitative&scheme=Set1&n=9)).

For icons, the project depends on [Bootstrap Icons](https://icons.getbootstrap.com/).

### Script

The code for each site is written in modern JavaScript using [ECMAScript
modules](https://nodejs.org/api/esm.html) and [ES.NEXT](https://tc39.es/ecma262/) features. This
allows for clean, expressive coding using features like template literals and arrow functions. In
order to support a wide range of browsers, [:tool[Babel]](https://babeljs.io/) and
[:tool[rollup]](https://rollupjs.org/) are used to compile this code to
[ES5](https://262.ecma-international.org/5.1/) and an
[IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) for execution in the browser, with
more advanced language features supported by [core-js](https://github.com/zloirock/core-js) and
[regenerator-runtime](http://facebook.github.io/regenerator/).

### Publishing

All of the explorables are developed in the [<span class="decidables">decidables</span>
monorepo](https://github.com/decidables/decidables/) which is a [:tool[Git]](https://git-scm.com/)
repository hosted on [:tool[GitHub]](https://github.com/). When changes are pushed from a local
working copy to the remote origin, this triggers a [:tool[GitHub
Action]](https://docs.github.com/en/actions) which deploys the updates by pushing them to the
[decidables.github.io repository](https://github.com/decidables/decidables.github.io) from where
they are staged to [decidables.github.io](https://decidables.github.io).

## Component libraries

The interactive elements in the explorable explanations are implemented as [web
components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) which are published in
packages to [:tool[npm]](https://www.npmjs.com/).

### Packages

Each explorable is encapsulated in a site package, and has two accompanying library packages: a
*math* library exposes a single class of static methods that implement core calculations of the
associated theory (for example, the subjective value function for cumulative prospect theory); and
an *elements* library containing all of the associated web components. Those web components fall
into three categories: *components*, which are individual interactive graphs, tasks, controls,
etc...; *equations*, which are live visualizations of key equations; and *examples*, which combine
components (and equations?) to form interconnected demonstrations. For example, [**<span
class="detectable"><span class="math-var d">d′</span>ete<span class="math-var
c">c</span>table</span>**](detectable/) has its own
[:tool[detectable]](https://github.com/decidables/decidables/tree/main/sites/detectable) package,
along with
[:tool[detectable-math]](https://github.com/decidables/decidables/tree/main/libraries/detectable-math),
and
[:tool[detectable-elements]](https://github.com/decidables/decidables/tree/main/libraries/detectable-elements).

In addition, there is a core
[:tool[decidables-elements]](https://github.com/decidables/decidables/tree/main/libraries/decidables-elements)
package with basic UI components that are shared across the individual explorables.

### Code

The code for the libraries, like the sites, is written in modern JavaScript using [ECMAScript
modules](https://nodejs.org/api/esm.html) and [ES.NEXT](https://tc39.es/ecma262/). Where
appropriate, this code can be imported directly from source en masse or using [deep
imports](https://nodejs.org/api/packages.html#subpath-exports). For direct use in browsers, it is
also compiled to [ES5](https://262.ecma-international.org/5.1/) and bundled as both
[UMD](https://github.com/umdjs/umd) and [ESM](https://nodejs.org/api/esm.html) using
[:tool[Babel]](https://babeljs.io/) and [:tool[rollup]](https://rollupjs.org/), with advanced
language features supported by [core-js](https://github.com/zloirock/core-js) and
[regenerator-runtime](http://facebook.github.io/regenerator/).

**Note:** The issue of which library formats to provide seems to be both complicated and fraught
these days. I've opted to provide multiple options: untranspiled source exposed by `exports`, a
transpiled UMD bundle exposed by `main`, and a transpiled ESM bundle exposed by `module`. There are
both minified and unminified versions of the bundles available.

### Web components

To support the broadest possible usage, the interactive elements are implemented as native [web
components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), as opposed to the
proprietary components used in many frameworks. This means that they each define a [custom
element](https://html.spec.whatwg.org/multipage/custom-elements.html) that can be used directly in
HTML, once the appropriate library has been included (e.g. via a script tag). For example, an
interactive rendering of ROC space can be used as easily as:<br>
`<roc-space interactive hr="0.75" far="0.25"></roc-space>`<br>
<roc-space interactive hr="0.75" far="0.25"></roc-space>

Our web components are implemented using [:tool[Lit]](https://lit.dev/), which facilitates a
declarative reactive approach based on [tagged template
literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). In
order to support old browsers, the
[webcomponents.js](https://github.com/WebComponents/webcomponentsjs) shim is included.

### Graphics

Most of our graphical components are specified as [SVG](https://www.w3.org/Graphics/SVG/).
Advantages of this format include high resolution at any scale, persistent objects via the
[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), [CSS
styling](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS), and event handling
as in HTML. In order to ease the dynamic integration of data with SVG, we use
[:tool[D3]](https://d3js.org/) to directly bind data to the DOM. It comes in particularly handy when
generating SVG paths from mathematically-defined curves, and for path transitions.

**Note:** Lit and D3 are not a natural fit. The canonical way to update the DOM in Lit is
[declaratively via tagged template literals](https://lit.dev/docs/components/rendering/). The
canonical way to update a component in D3 is [programmatically via
selections](https://d3js.org/#selections). When using D3, we override the typical Lit approach,
which works fine.

### Statistics

Unlike, say [R](https://www.r-project.org/), JavaScript has almost no built in statistics functions.
Fortunately, [:tool[jStat]](https://github.com/jstat/jstat) provides just enough of the right sort
of things, including a nice selection of statistical distributions, to get us where we need to go.

### Publishing

All of the libraries, like the sites, are developed in the [<span
class="decidables">decidables</span> monorepo](https://github.com/decidables/decidables/) which is a
[:tool[Git]](https://git-scm.com/) repository hosted on [:tool[GitHub]](https://github.com/). Unlike
the sites, the library packages are published to the [:tool[npm]](https://www.npmjs.com/) registry.
They all reside in the [<code
class="fw-semibold">@decidables</code>](https://www.npmjs.com/search?q=%40decidables) namespace. For
example, the
[:tool[detectable-elements]](https://github.com/decidables/decidables/tree/main/libraries/detectable-elements)
package would be [<code
class="fw-semibold">@decidables/detectable-elements</code>](https://www.npmjs.com/package/@decidables/detectable-elements).

## Development tools

As much as possible, the development tooling for this project runs in the
[:tool[Node.js]](https://nodejs.org/) ecosystem. The fundamental advantage of this is that the
tooling and the project itself are both running in the same language using the same infrastructure.
This ecosystem works seamlessly across operating systems, and has an astounding variety of packages
for web development. Indeed, I might go so far as to suggest that the Node/npm/GitHub ecosystem is
one of mankind's greatest works of collective engineering.

### Linting

Web development requires the use of multiple languages, each with its own requirements and quirks.
Layered on top of that, they can be used and formatted in a wide variety of ways. We use linting
tools to statically analyze code in order to catch errors early and maintain consistency. We lint
JavaScript with [eslint](https://eslint.org/), CSS with [stylelint](https://stylelint.io/), markdown
with [remark-lint](https://github.com/remarkjs/remark-lint), and HTML with
[HTMLHint](https://htmlhint.com/) and [Nu Html Checker](https://validator.github.io/validator/).

### Task automation

Building libraries and sites with all of the tools described above involves a great deal of
coordination and repetition. The streaming build system and task automation engine
[:tool[gulp]](https://gulpjs.com/) is used to facilitate these processes. Using
[plugins](https://gulpjs.com/plugins/), it allows us to flexibly compose different tools together in
order to take files in a variety of different source formats and process them into files in a
variety of different output formats. Since the structure is specified with JavaScript code, instead
of an esoteric configuration language, the system has easily adapted over time to changing tools and
needs.

### Package management

[:tool[Yarn]](https://yarnpkg.com/) is used for package and workspace management. It is fast at
installing and updating dependencies, and does an excellent job of seamlessly handling our monorepo
organization, where all of the sites and libraries are housed within a single overarching [<span
class="decidables">decidables</span> package/repository](https://github.com/decidables/decidables/).

**Note:** We are not making use of [:tool[Yarn PNP]](https://yarnpkg.com/features/pnp). There are
two main reasons for this. First, when experimenting with it, we've hit multiple inscrutable errors
coming from the depths of our build, and it wasn't obvious how to resolve those issues. Second, it
seems to obfuscate file-system access to our dependencies. It is often helpful to browse the code in
a package to understand exactly what it is doing. PNP makes this harder by removing
[node_modules](https://docs.npmjs.com/cli/v7/configuring-npm/folders) and storing packages in cached
zip files instead.

### Version control

Software development involves a continual process of creating and revising many interrelated files.
A version control system/source code management tool facilitates and empowers this process, while
recording an accurate history of every step along the way. We use
[:tool[Git]](8https://git-scm.com/) for this with a remote repository hosted on
[:tool[GitHub]](https://github.com/), which allows for highly distributed development.

### File editing

The text editor is a coder's nearest and dearest tool. This project has mostly been
developed using first [:tool[Atom]](https://atom.io/) with its supporting
[packages](https://atom.io/packages) and now [:tool[VSCode]](https://code.visualstudio.com/) with
its supporting [extensions](https://marketplace.visualstudio.com/VSCode). Both of these editors are
implemented using JavaScript so they can directly load devtools in our tool chain. For example, the
live linting in the editor uses the identical linter with the identical rules as we run in our build
process.

### Reference management

Literature references were collected and organized using [:tool[Zotero]](https://www.zotero.org/)
and the [:tool[Zotero
Connector]](https://chrome.google.com/webstore/detail/zotero-connector/ekhagklcjbdpajgpjgmbionohlpdbjgc?hl=en)
extension for [:tool[Chrome]](https://www.google.ca/chrome/). Reference data can be pulled in
seamlessly from web pages, and then exported in [BibTeX](http://www.bibtex.org/) format for use in
the project.
