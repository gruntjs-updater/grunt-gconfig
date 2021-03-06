'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.gconfig = {
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    dev: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/index.dev.html');
        var expected = grunt.file.read('test/expected/index.dev.html');
        test.equal(actual.replace(/ +?/g, ''),
                   expected.replace(/ +?/g, ''),
                   'should describe what the default behavior is.');

        test.done();
    },
    dist: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/index.dist.html');
        var expected = grunt.file.read('test/expected/index.dist.html');
        test.equal(actual.replace(/ +?/g, ''),
                   expected.replace(/ +?/g, ''),
                   'should describe what the custom option(s) behavior is.');

        test.done();
    },
};
