<a name="0.4.1"></a>
## 0.4.1 (2018-04-25)


### Bug Fixes

* fix bug where naming conflict caused stack overflow ([334580d](https://github.com/clenemt/docdash/commit/334580d))
* install html-minifier as a dependency, not a dev dependency, "oops" ([1983d33](https://github.com/clenemt/docdash/commit/1983d33))


### Features

* move details section to bottom of each method & add <hr> ([fa1579b](https://github.com/clenemt/docdash/commit/fa1579b))
* **layout:** move details section below description of each method & remove <hr> ([051b6d3](https://github.com/clenemt/docdash/commit/051b6d3))
* **perf:** generate minimized html files ([d679ee5](https://github.com/clenemt/docdash/commit/d679ee5))



# AsyncAF/docdash

This repo was forked from [docdash](https://github.com/clenemt/docdash) for the purpose of styling [AsyncAF's docs](https://asyncaf.github.io/AsyncAF/AsyncAF.html).

There are some minor changes compared with the original docdash as laid out below.

## Minification
The main feature added is that this fork minifies the HTML/CSS/JS output files. AsyncAF/docdash utilizes [`html-minifier`](https://github.com/kangax/html-minifier) for this task. Click below to see the minifier settings that depart from the normal defaults.

<details><pre><code>
{
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    maxLineLength: 32 * 1024,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true
}
</code></pre></details>

## Template

Other than minification, the only real difference between this repo and the original docdash is layout and styling. Read on to [check out all the changes](#features), or take a look at the [AsyncAF docs](https://asyncaf.github.io/AsyncAF/AsyncAF.html) built using this template.

## Usage

If you like the way the template looks, you can use it in your own project as follows:

#### Install

`$ npm install -D AsyncAF/docdash jsdoc`

_Warning: this will install AsyncAF/docdash from github as I haven't published this fork to npm._

#### Setup

Create a `jsdoc.conf.js` configuration file following the documentation [here](#sample-jsdoc.json) or [here](http://usejsdoc.org/about-configuring-jsdoc.html).

To use the AsyncAF/docdash template, just make sure you point to the template in `opts`:

```js
// jsdoc.conf.js
...
opts: {
  template: 'node_modules/docdash',
},
...
```

Then write an npm script in your `package.json`:

```json
...
"scripts": {
  "docs": "jsdoc -c jsdoc.conf.js",
},
...
```

#### Generate the docs

Just run: `$ npm run docs`

Or, if you're [using the CLI](http://usejsdoc.org/about-getting-started.html): `$ jsdoc -t node_modules/docdash`

<a name="0.4.1"></a>
## 0.4.1 (2018-04-25)


### Bug Fixes

* fix bug where naming conflict caused stack overflow ([334580d](https://github.com/clenemt/docdash/commit/334580d))
* install html-minifier as a dependency, not a dev dependency, "oops" ([1983d33](https://github.com/clenemt/docdash/commit/1983d33))


### Features

* move details section to bottom of each method & add \<hr> ([fa1579b](https://github.com/clenemt/docdash/commit/fa1579b))
* **layout:** move details section below description of each method & remove \<hr> ([051b6d3](https://github.com/clenemt/docdash/commit/051b6d3))
* **perf:** generate minimized html files ([d679ee5](https://github.com/clenemt/docdash/commit/d679ee5))

(end of AsyncAF/docdash notes)
<hr>
(original docdash README)

# Docdash
[![npm package](https://img.shields.io/npm/v/docdash.svg)](https://www.npmjs.com/package/docdash) [![license](https://img.shields.io/npm/l/docdash.svg)](LICENSE.md)

A clean, responsive documentation template theme for JSDoc 3.

![docdash-screenshot](https://cloud.githubusercontent.com/assets/447956/13398144/4dde7f36-defd-11e5-8909-1a9013302cb9.png)

![docdash-screenshot-2](https://cloud.githubusercontent.com/assets/447956/13401057/e30effd8-df0a-11e5-9f51-66257ac38e94.jpg)

## Example
See http://clenemt.github.io/docdash/ for a sample demo. :rocket:

## Install

```bash
$ npm install docdash
```

## Usage
Clone repository to your designated `jsdoc` template directory, then:

```bash
$ jsdoc entry-file.js -t path/to/docdash
```

## Usage (npm)
In your projects `package.json` file add a new script:

```json
"script": {
  "generate-docs": "node_modules/.bin/jsdoc -c jsdoc.json"
}
```

In your `jsdoc.json` file, add a template option.

```json
"opts": {
  "template": "node_modules/docdash"
}
```

## Sample `jsdoc.json`
See the config file for the [fixtures](fixtures/fixtures.conf.json) or the sample below.

```json
{
    "tags": {
        "allowUnknownTags": false
    },
    "source": {
        "include": "../js",
        "includePattern": ".js$",
        "excludePattern": "(node_modules/|docs)"
    },
    "plugins": [
        "plugins/markdown"
    ],
    "opts": {
        "template": "assets/template/docdash/",
        "encoding": "utf8",
        "destination": "docs/",
        "recurse": true,
        "verbose": true
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

## Options
Docdash supports the following options:

```
{
    "docdash": {
        "static": [false|true],  // Display the static members inside the navbar
        "sort": [false|true]     // Sort the methods in the navbar
    }
}
```

Place them anywhere inside your `jsdoc.json` file.

## Thanks
Thanks to [lodash](https://lodash.com) and [minami](https://github.com/nijikokun/minami).

## License
Licensed under the Apache License, version 2.0. (see [Apache-2.0](LICENSE.md)).
