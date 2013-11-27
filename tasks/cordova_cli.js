/*!
 * grunt-cordova-cli
 * https://github.com/lbdremy/grunt-cordova-cli
 *
 * Copyright (c) 2013 Remy Loubradou
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies
 */

var cordova = require('cordova');

module.exports = function (grunt) {

    grunt.registerMultiTask('cordova_cli', 'Run cordova commands.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            cmd: '', // available commands "emulate", "build", "prepare", "compile", "run", "create", "serve", "platform", "plugin"
            subcommand: '', // available "add", "rm"
            platforms: [], // available platforms "android", "ios" ...
            options: [],
            plugins: []
        });

        var self = this;
        var done = function(){
            self.async();
            return function over(){
                grunt.log.writeln(cmd + ' command run successfully.');
            };
        };

        function done(){

        }

        var cmd = options.cmd;
        if (cordova.hasOwnProperty(cmd)) {
            if (cmd === 'emulate' || cmd === 'build' || cmd === 'prepare' || cmd === 'compile' || cmd === 'run') {
                var opts = {
                    platforms: options.platforms,
                    options: options.options
                };
                cordova.raw[cmd].call(null, opts).done(done());
            }else if (cmd === 'create' || cmd === 'serve'){
                throw new Error('Cordova commands "' + cmd + '" is not supported by the plugin. Pull request welcome.');
            }else{
                // platform/plugins add/rm [target(s)]
                var invocation = [options.subcommand]; // this has the sub-command, i.e. "platform add" or "plugin rm"
                var targets = options.plaforms.length > 0 ? options.plaforms: options.plugins; // this should be an array of targets, be it platforms or plugins
                invocation.push(targets);
                cordova.raw[cmd].apply(null, invocation).done(done());
            }
        }else{
            throw new Error('Cordova does not know command "' + cmd + '".');
        }



    });

};