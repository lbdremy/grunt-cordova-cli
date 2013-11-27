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

exports.cordova_cli = {
  install_platform : function(test){
    var actual = grunt.file.isDir('platforms/android');
    test.equal(actual, true, 'should install the platform android');
    test.done();
  },
  install_plugin : function(test){
    var actual = grunt.file.isDir('plugins/org.apache.cordova.statusbar');
    test.equal(actual,true,'should install the plugin org.apache.cordova.statusbar');
    test.done();
  }
};
