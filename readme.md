# twada-assert

![twada-assert](http://monosnap.com/image/BTbldNMSAfu5AZQ8wTLkNfvvV6xq4h.png)

## Installation

``` sh
npm install
```


## Usage

``` sh
npm test
```

## Test Code

``` js
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
```

## t-wada assert?

You can obtaine `twada` feature through the use of these tools for now!

* [twada/power-assert](https://github.com/twada/power-assert "twada/power-assert")
* [twada/espower-loader](https://github.com/twada/espower-loader "twada/espower-loader")

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
