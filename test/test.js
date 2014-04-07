var twada = require('power-assert');
describe('Array', function () {
    beforeEach(function () {
        this.ary = [1, 2, 3];
    });
    describe('#indexOf()', function () {
        it('should return index when the value is present', function () {
            var zero = 0, two = 2;
            twada(this.ary.indexOf(zero) === two);
        });
    });
});