var Collection = function(contents){
    for (var key in contents){
        if (contents.hasOwnProperty(key)){
            this[key] = contents[key];
        }
    }
};
Collection.prototype.toArray = function(){
    var result = [];
    for (var key in this){
        if (this.hasOwnProperty(key)){
            result.push(this[key]);
        }
    }
    return result;
};
Collection.prototype.forEach = function(fn, ctx){
    ctx = ctx || null;
    for (var key in this){
        if (this.hasOwnProperty(key)){
            fn.call(ctx, this[key], key);
        }
    }
};
Collection.prototype.map = function(valueFn, keyFn, ctx){
    keyFn = keyFn || function(value, key){return key;};
    ctx = ctx || null;
    var result = {};
    for (var key in this){
        if (this.hasOwnProperty(key)){
            result[keyFn.call(ctx, this[key], key)] = valueFn.call(ctx, this[key], key);
        }
    }
    return result;
};
module.exports = Collection;