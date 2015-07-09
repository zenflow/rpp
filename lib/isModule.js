function isModule(filename){
    for (var ext in require.extensions){
        if (filename.substr(0 - ext.length) == ext){
            return true;
        }
    }
    return false;
}

module.exports = isModule;