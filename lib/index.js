(function () {
	'use strict';
	var Filter, MarkdownFilter, RSVP, marked;

	Filter = require('broccoli-persistent-filter');

	RSVP = require('rsvp');

	marked = require('marked');

	MarkdownFilter = function (inputNode, options) {
		if (options) {
			marked.setOptions(options);
		}
		Filter.call(this, inputNode);
	};

	MarkdownFilter.prototype = Object.create(Filter.prototype);

	MarkdownFilter.prototype.constructor = MarkdownFilter;

	MarkdownFilter.prototype.extensions = ['md', 'markdown'];

	MarkdownFilter.prototype.targetExtension = 'html';

	MarkdownFilter.prototype.processString = function (markdownString, relativePath) {
		return new RSVP.Promise(function (resolve, reject) {
			return marked(markdownString, function (err, content) {
				if (err) {
					return reject(err);
				} else {
					return resolve(content);
				}
			});
		});
	};

	module.exports = MarkdownFilter;

}).call(this);
