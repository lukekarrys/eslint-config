/* eslint no-var:0, no-magic-numbers:0 */

'use strict';

var alce = require('alce');
var path = require('path');
var fs = require('fs');

var config = alce.parse(fs.readFileSync(path.join(__dirname, 'eslintrc.json')));

// alce cant parse the number -1?
config.rules['no-magic-numbers'][1].ignore = [-1, 0, 1, 2];

module.exports = config;
