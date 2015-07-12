'use strict';

var Filter = require('broccoli-filter');
var RSVP = require('rsvp');
var marked = require('marked');

function MarkdownFilter(inputTree, options) {
    if (!(this instanceof MarkdownFilter)) {
        return new MarkdownFilter(inputTree, options);
    }

    this.inputTree = inputTree;

    if (options) {
        marked.setOptions(options);
    }
}

MarkdownFilter.prototype = Object.create(Filter.prototype);
MarkdownFilter.prototype.constructor = MarkdownFilter;

MarkdownFilter.prototype.extensions = ['md'];
MarkdownFilter.prototype.targetExtension = 'html';

MarkdownFilter.prototype.processString = function (markdownString) {
    return new RSVP.Promise(function (resolve, reject) {
        marked(markdownString, function (err, content) {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        });
    });
};

module.exports = MarkdownFilter;
