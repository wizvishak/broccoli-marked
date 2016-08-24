# broccoli-marked

[![Build Status](https://travis-ci.org/wizvishak/broccoli-marked.png?branch=master)](https://travis-ci.org/wizvishak/broccoli-marked)

> :coffee: Markdown-to-HTML transpiler for [broccoli](https://github.com/joliss/broccoli) nodes.
Uses [@chjj](//github.com/chjj)'s fast markdown compiler, [marked](//github.com/chjj/marked).

### Install

Install with [npm](https://github.com/npm/npm#npm1----node-package-manager). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm install --save-dev git@github.com:wizvishak/broccoli-marked.git
```

### Usage

```js
var Markdown = require('broccoli-marked');
htmls = Markdown('path/to/markdown-files');
```

### Code Highlighting<a name="code-highlighting"></a>

To use [highlight.js](https://github.com/isagalaev/highlight.js):

```bash
npm install --save-dev highlight.js
```

and in Brocfile:

```js
var Markdown = require('broccoli-marked');
var highlight = require('highlight.js');

var htmls = Markdown('path/to/markdown-files', {
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
});
```

You will need to include one of highlight.js's vast choice of [styles](https://highlightjs.org/static/test.html) including ones that resemble those at GitHub, GoogleCode and many more. 

For example:

```js
var highlightCss = pickFiles('node_modules/highlight.js', {
  srcDir: 'styles',
  files: ['googlecode.css'],
  destDir: '.'
});
```

or just manually include the `.css` in the `.html`.

### Thanks To
- [@bjfletcher/broccoli-marked](https://github.com/bjfletcher/broccoli-marked)
- [@chjj/marked](https://github.com/chjj/marked)
- [@isagalaev/highlight.js](https://github.com/isagalaev/highlight.js)

### License
MIT
