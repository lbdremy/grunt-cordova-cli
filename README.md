# grunt-cordova-cli

> Run cordova commands.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cordova-cli --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cordova-cli');
```

## The "cordova_cli" task

### Overview
In your project's Gruntfile, add a section named `cordova_cli` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cordova_cli: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.cmd
Type: `String`
Default value: `empty string`

Name of the Cordova command to execute. E.g: "emulate", "build", "prepare", "compile", "run", "create", "serve", "platform", "plugin"

#### options.subcommand
Type: `String`
Default value: `empty string`

#### options.options
Type: `Array`
Default value: `[]`

List of options to alter the behavior of the Cordova command specified by `cmd`.

#### options.platforms
Type: `Array`
Default value: `[]`

List of targeted platforms by the `cmd`. E.g: "android", "ios" ...

#### options.plugins
Type: `Array`
Default value: `[]`

List of targeted plugins by the `cmd`, either "platform" or "plugin" with the `subcommand` "add" or "rm". E.g: "org.apache.cordova.contacts" , "org.apache.cordova.statusbar"

Name of the Cordova sub-command to execute. E.g: "add" or "rm" only for the `cmd` "platform" and "plugin"

### Usage Examples

#### Deploy the cordova app to an android phone
**Important**: the current working directory of the task should be the root folder containing the `www`, `platforms`, `plugins` folder. Also you need the Android SDK properly installed see more [here](http://cordova.apache.org/docs/en/3.2.0/guide_platforms_index.md.html#Platform%20Guides) and the environment variables `JAVA_HOME` and `ANDROID_HOME` set in your current environment.

```js
grunt.initConfig({
  cordova_cli: {
    options : {
      cmd : 'run',
      platforms : [ 'android' ]
    }
  }
```

#### Deploy the cordova app to an android emulator
**Important**: the current working directory of the task should be the root folder containing the `www`, `platforms`, `plugins` folder. Also you need the Android SDK properly installed see more [here](http://cordova.apache.org/docs/en/3.2.0/guide_platforms_index.md.html#Platform%20Guides) and the environment variables `JAVA_HOME` and `ANDROID_HOME` set in your current environment.

```js
grunt.initConfig({
  cordova_cli: {
    options : {
      cmd : 'emulate',
      platforms : [ 'android' ]
    }
  }
});
```

**N.B:** Have a look to the tasks inside the `Gruntfile.js` of this repo you will find more usage examples for the task `cordova_cli`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
Look at the commit history, thanks.
