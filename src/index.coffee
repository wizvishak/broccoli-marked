'use strict'

Filter = require 'broccoli-persistent-filter'
RSVP = require 'rsvp'
marked = require 'marked'

MarkdownFilter = (inputNode, options) ->
	if options
		marked.setOptions options
	Filter.call this, inputNode
	return

MarkdownFilter.prototype = Object.create Filter.prototype
MarkdownFilter.prototype.constructor = MarkdownFilter

MarkdownFilter.prototype.extensions = ['md', 'markdown']
MarkdownFilter.prototype.targetExtension = 'html'

MarkdownFilter.prototype.processString = (markdownString, relativePath) ->
	new RSVP.Promise (resolve, reject) ->
		marked markdownString, (err, content) ->
			if (err)
				reject(err)
			else
				resolve(content)

module.exports = MarkdownFilter
