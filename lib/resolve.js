var path = require('path');
var fs = require('fs');
var glob = require('glob');

function resolve(dirname, expression){
    if ((expression.substr(0, 1) != '/') && (expression.substr(0, 2) != './') && (expression.substr(0, 3) != '../')){
        throw new Error('requiring from node_modules is not yet supported');
    }
    var filenames = glob.sync(expression, {cwd: dirname});
    var full_filenames = {};
    for (var i = 0; i < filenames.length; i++){
        var full_filename = path.join(dirname, filenames[i]);
        if (!fs.statSync(full_filename).isDirectory()){
            full_filenames[filenames[i]] = full_filename;
        }
    }
    return full_filenames;
}

module.exports = resolve;