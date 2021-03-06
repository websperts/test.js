var test = require('./test.js');

test.suite('Demo Suite', {
    'true is true': [true, true],
    'false is true': [false, true],
    'one is equal to one': [1, 1],
    'one is equal to two': [1, 2],
    '1 + 1 = 2': [1 + 1, 2],
    '2 * 2 = 6': [2 * 2, 6],
    'one is greater than two?': [1 > 1],
    'two is greater than one?': [2 > 1],
    'function returns true': [(function() {
        return false;
    })()],
    'function returns 5': [(function() {
        return 10 / 2;
    })(), 5],
    'custom result from function': (function() {
        var question = 2 * 2;
        var expected = 4;
        return [question, expected];
    })()
});
