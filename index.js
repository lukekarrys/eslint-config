var alce = require('alce');
var path = require('path');
var fs = require('fs');

module.exports = alce.parse(fs.readFileSync(path.join(__dirname, 'eslintrc.json'))); 
