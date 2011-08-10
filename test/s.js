var assert = require('assert');
var sorted = require('../');

exports.isSorted = function () {
    assert.ok(sorted.isSorted([5,6,7]));
    assert.ok(sorted.isSorted([0,2,4,6]));
    assert.ok(sorted.isSorted([0,3,3,3]));
    assert.ok(sorted.isSorted([]));
    assert.ok(sorted.isSorted([1]));
    assert.ok(sorted.isSorted([1,1]));
    assert.ok(sorted.isSorted([1,8,8]));
    
    assert.ok(sorted.isSorted([3,2,1], function (a, b) {
        if (a < b) return 1
        else if (a > b) return -1
        else return 0
    }));
    
    assert.ok(sorted.isSorted(['a','b','c']));
    
    assert.ok(!sorted.isSorted([8,7]));
    assert.ok(!sorted.isSorted([3,1,2]));
    assert.ok(!sorted.isSorted([0,1,2,NaN]));
    assert.ok(!sorted.isSorted([NaN]));
};

exports.random = function () {
};
