var resolve = require('./resolve');
var isModule = require('./isModule');
var fs = require('fs');
var Collection = require('./Collection');

module.exports = function getRequirePlusPlus(dirname){
    function requirePlusPlus(expression){
        var filenames = resolve(dirname, expression);
        var contents = {};
        for (var filename in filenames){
            if (filenames.hasOwnProperty(filename)){
                contents[filename] = isModule(filenames[filename])
                    ? require(filenames[filename])
                    : fs.readFileSync(filenames[filename], 'utf8');
            }
        }
        return new Collection(contents);
    }
    return requirePlusPlus;
};