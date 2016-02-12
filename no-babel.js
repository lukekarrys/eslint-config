/* eslint no-var:0 */

'use strict';

var alce = require('alce');
var path = require('path');
var fs = require('fs');

module.exports = alce.parse(fs.readFileSync(path.join(__dirname, 'no-babel.json')));
