# broccoli-marked

[![Build Status](https://travis-ci.org/bjfletcher/broccoli-marked.png?branch=master)](https://travis-ci.org/bjfletcher/broccoli-marked)

A Markdown filter for Broccoli using Christopher Jeffrey's fast Markdown parser and compiler [Marked](//github.com/chjj/marked).  This plugin is too built for speed through doing the parsing and compiling asynchronously. You can ask for code highlighting too using [highlight.js](//github.com/isagalaev/highlight.js) (see [Code Highlighting](#code-highlighting) below).

## Installation

```bash
npm install --save-dev broccoli-marked
```

## Usage

```js
var markdownToHtml = require('broccoli-marked');
htmls = markdownToHtml('path/to/markdown-files');
```

### Code Highlighting<a name="code-highlighting"></a>

To use [highlight.js](//github.com/isagalaev/highlight.js):

```bash
npm install --save-dev highlight.js
```

and in Brocfile:

```js
var markdownToHtml = require('broccoli-marked');
var highlight = require('highlight.js');

var htmls = markdownToHtml('path/to/markdown-files', {
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
});
```

You will need to include one of [highlight.js](//github.com/isagalaev/highlight.js)'s vast choice of [styles](https://highlightjs.org/static/test.html) including ones that resemble those at GitHub, GoogleCode and many more.  For example:

```js
var highlightCss = pickFiles('node_modules/highlight.js', {
  srcDir: 'styles',
  files: ['googlecode.css'],
  destDir: '.'
});
```

or just manually include the `.css` in the `.html`.
