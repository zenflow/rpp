var test = require('tape');
var rpp = require('../lib')(__dirname);

test('require dummy raw', function(t){
    var dummy = rpp('./dummy/**/**');
    t.equal(JSON.stringify(dummy), JSON.stringify({
        './dummy/a.js': 'a',
        './dummy/b.json': 'b',
        './dummy/c.txt': 'c',
        './dummy/d': 'd',
        './dummy/e/index.js': 'e',
        './dummy/foo/f.json': 'f'
    }));
    t.end();
});