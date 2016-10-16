/**
 * Created by chenyihui on 16/9/24.
 */
var assert = require('assert');
var expected,current;
before(function () {
    expected = ['a','b','c'];
})
describe('String#split',function () {
    beforeEach(function () {
        current = 'a,b,c'.split(',');
    })
    it('should return an array',function () {
        assert(Array.isArray(expected));
    });
    it('should return the same array',function () {
        for(var i=0;i<expected.length;i++){
            assert.equal(expected[i],current[i],i+' element is equal');
        }
    });
});