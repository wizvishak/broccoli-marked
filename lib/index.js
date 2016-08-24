'use strict';

var Filter = require('broccoli-persistent-filter');
var RSVP = require('rsvp');
var marked = require('marked');

MarkdownFilter.prototype = Object.create(Filter.prototype);
MarkdownFilter.prototype.constructor = MarkdownFilter;
function MarkdownFilter(inputNode, options) {
	if (options) marked.setOptions(options);
	Filter.call(this, inputNode);
}

MarkdownFilter.prototype.extensions = ['md', 'markdown'];
MarkdownFilter.prototype.targetExtension = 'html';

MarkdownFilter.prototype.processString = function (markdownString, relativePath) {
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
