'use strict';

var CoffeeMaker = require('broccoli-coffee');
var CoffeeBeanChecker = require('ember-cli-coffeescript/lib/coffee-linter');

var noCoffee = new CoffeeMaker(CoffeeBeanChecker('src'));

module.exports = noCoffee;
