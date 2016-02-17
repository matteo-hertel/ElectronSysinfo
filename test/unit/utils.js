var assert = require('assert');

var utils = require(__dirname + "/../../js/Helpers/Utilities.js");

describe('Utilities', function() {
    describe('#round()', function() {
        it('round PI should be 3.14', function() {
            assert.equal(3.14, utils.round(Math.PI));
        });
    });
    describe('#convert()', function() {
        it('1024 byte should be 1kb', function() {
            assert.equal(1, utils.convertTo(1024, "KB"));
        });
        it('1048576 byte should be 1MB', function() {
            assert.equal(1, utils.convertTo(1048576, "MB"));
        });
        it('1073741824 byte should be 1GB', function() {
            assert.equal(1, utils.convertTo(1073741824, "GB"));
        });
        it('if no size is give it should return the value given', function() {
            var bytes =  utils.round(Math.random() * 100);
            assert.equal(bytes, utils.convertTo(bytes));
        });
    });
});
