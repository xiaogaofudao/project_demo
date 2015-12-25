
var requireDir = require('require-dir');

// grab all tasks
requireDir('./tasks', { recurse: true });

// grab all runners
//requireDir('./runners', { recurse: true });