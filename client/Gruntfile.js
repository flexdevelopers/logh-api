'use strict';

module.exports = function (grunt) {
    var os = require("os");
    var globalConfig = require('./grunt/globalConfig');

    // load time grunt - helps with optimizing build times
    require('time-grunt')(grunt);

    // load grunt task configurations
    require('load-grunt-config')(grunt);

    //default task
    grunt.registerTask('default', ['dev']);

    //heroku - do nothing for now
    grunt.registerTask('heroku', []);

    // dev task
    grunt.registerTask('dev', [
      'build-dev',
      'watch'
    ]);

    // distribution task
    grunt.registerTask('dist', [
      'build'
    ]);

    // build tasks
    grunt.registerTask('build', [
      'copy:dist',
      'build-css',
      'build-js',
      'build-shared-libs'
    ]);

    grunt.registerTask('build-dev', [
      'copy:dist',
      'build-css-dev',
      'build-js-dev',
      'build-shared-libs-dev']
    );

    // prod tasks
    grunt.registerTask('build-css', [
      'compass:prod'
    ]);

    grunt.registerTask('build-js', [
      'html2js',
      'browserify2:app-prod'
    ]);

    grunt.registerTask('build-shared-libs', [
      'browserify2:shared-libs-prod'
    ]);

    // dev tasks
    grunt.registerTask('build-css-dev', [
      'compass:dev'
    ]);

    grunt.registerTask('build-js-dev', [
      'html2js',
      'browserify2:app-dev'
    ]);

    grunt.registerTask('build-shared-libs-dev', [
      'browserify2:shared-libs-dev'
    ]);

};