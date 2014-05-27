# test.js

A simple console API based unit test suite running on node.js and the browser, making testing simple and fun (again). It’s not meant to be a feature-rich testing framework but made for simple and lightweight unit tests.

## Usage

### Creating suites and tests

You can create test suites containing multiple tests according to the following pattern.

```js
test.suite('NAME OF YOUR SUITE', {
	…
    'DESCRIPTION': [EXPRESSION, EXPECTION],
	…
});
```

It’s actually pretty straight-forward…

```js
test.suite('Demo Suite', {
	'true is true': [true, true],
	'false is true': [false, true],
	'one is equal to one': [1, 1],
	'one is equal to two': [1, 2]
});
```

### node.js

```js
var test = require('./test.js');

test.suite('Demo Suite', {
	…
});
```

`example.js` within this repository contains an extensive node.js example.

![node.js screenshot](http://websperts.com/testjs/node.png)

### Browser

```html
<script src="test.js"></script>
<script>
test.suite('Demo Suite', {
	…
});
</script>
```

`example.html` within this repository contains an extensive browser example.

![Browser screenshot](http://websperts.com/testjs/browser.png)

## License

Copyright (c) 2014 websperts  
Licensed under the MIT license.

See LICENSE for more info.