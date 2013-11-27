/*
 * grunt-cordova-cli
 * https://github.com/lbdremy/grunt-cordova-cli
 *
 * Copyright (c) 2013 Remy Loubradou
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp', '{plugins,platforms}/*'],
    },

    // Configuration to be run (and then tested).
    cordova_cli: {
      install_plugin : {
        options : {
          cmd : 'plugin',
          subcommand : 'add',
          plugins : ['org.apache.cordova.statusbar']
        }
      },
      install_platform : {
        options : {
          cmd : 'platform',
          subcommand : 'add',
          platforms : ['android']
        }
      },
      // run_android : {
      //   options : {
      //     cmd : 'run',
      //     platforms : [ 'android' ]
      //   }
      // },
      // emulate_android : {
      //   options : {
      //     cmd : 'emulate',
      //     platforms : [ 'android' ]
      //   }
      // },
      prepare_android : {
        options : {
          cmd : 'prepare',
          platforms : [ 'android' ]
        }
      },
      build_android : {
        options : {
          cmd : 'build',
          platforms : [ 'android' ]
        }
      },
      compile_android : {
        options : {
          cmd : 'compile',
          platforms : [ 'android' ]
        }
      },
      // remove_plugin : {
      //   options : {
      //     cmd : 'plugin',
      //     subcommand : 'rm',
      //     plugins : ['org.apache.cordova.statusbar']
      //   }
      // },
      // remove_platform : {
      //   options : {
      //     cmd : 'platform',
      //     subcommand : 'rm',
      //     platforms : ['android']
      //   }
      // }
    },

    // Unit tests.
    nodeunit: {
      tests: ['{test/,../}*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', function(){
    grunt.file.setBase('test/Baz/');
    grunt.task.run(['clean', 'cordova_cli', 'nodeunit']);
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
