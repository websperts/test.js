/**
 * @preserve test.js
 * https://github.com/websperts/test.js
 *
 * Copyright (c) 2014 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/test.js/blob/master/LICENSE
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory(root);
    } else {
        root.test = factory(root);
    }
})(this, function(root) {

    'use strict';

    var isNode = typeof exports === 'object';

    var test = {

        cli: {
            reset: '\x1b[0m',
            bold: '\x1b[1m',
            underscore: '\x1b[4m',
            red: '\x1b[31m',
            green: '\x1b[32m',
            yellow: '\x1b[33m',
            blue: '\x1b[34m',
            ok: '\u2714',
            fail: '\u2718'
        },

        suite: function(name, units, setup, teardown) {
            test.start(name);
            if (typeof units === 'function') {
                units();
            } else {
                for (var _name in units) {
                    if (units[_name][1] == null) {
                        units[_name][1] = true;
                    }
                    if (typeof setup === 'function') {
                        setup(_name);
                    }
                    test.ok(units[_name][0], units[_name][1], _name);
                    if (typeof teardown === 'function') {
                        teardown(_name);
                    }
                }
            }
            test.end();
        },

        start: function(name) {
            if (isNode) {
                console.log(test.cli.bold + test.cli.underscore + name + test.cli.reset);
            } else {
                console.group(name);
            }
        },

        end: function() {
            console[isNode ? 'log' : 'groupEnd']();
        },

        ok: function(expression, expection, name) {
            var result = expression === expection;
            if (isNode) {
                console.log();
                if (result) {
                    console.log(test.cli.bold + test.cli.green + test.cli.ok + ' OK:' + test.cli.reset + ' ' + name);
                } else {
                    console.log(test.cli.bold + test.cli.red + test.cli.fail + ' FAIL:' + test.cli.reset + ' ' + name);
                    console.log();
                    console.log('  ' + test.cli.yellow + 'Expected:' + test.cli.reset + ' ' + expection);
                    console.log('  ' + test.cli.blue + 'Result:  ' + test.cli.reset + ' ' + expression);
                }
            } else {
                console[result ? 'groupCollapsed' : 'group']((result ? 'OK' : 'FAIL') + ': ' + name);
                console[result ? 'info' : 'warn']('Expected: ' + expection);
                console.info('Result: ' + expression);
                console.groupEnd();
            }

        }
    };

    return test;

});
