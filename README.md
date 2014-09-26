# broccoli-marked

[![Build Status](https://travis-ci.org/bjfletcher/broccoli-marked.png?branch=master)](https://travis-ci.org/bjfletcher/broccoli-marked)

A Markdown filter for Broccoli using Christopher Jeffrey's fast parser and compiler called <a href="https://github.com/chjj/marked">marked</a>,

## Installation

```bash
npm install --save-dev broccoli-marked
```

## Usage

```js
var markdown = require('broccoli-marked');
tree = markdown(tree);
```
