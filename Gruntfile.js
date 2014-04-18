/**
 * Example Grunt Hub
 *
 * Edit the hub.all.src to point to your Gruntfile locations.
 * Then run `grunt`.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    hub: {
      all: {
        src: ['client/Gruntfile.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-hub');

  grunt.registerTask('default', ['heroku']);
//  grunt.registerTask('heroku',['hub']);
  grunt.registerTask('heroku',[]);
};
