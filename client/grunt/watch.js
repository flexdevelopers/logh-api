
module.exports = {
    options: {
        livereload: true
    },
    js: {
        files: ['<%= globalConfig.srcdir %>/**/*.js'],
        tasks: [ 'build-dev'],
        livereload: {
            port: 3000
        }
    },
    jsTest: {
        files: ['test/spec/**/*.js'],
        tasks: ['newer:jshint:test', 'karma'],
        livereload: {
            port: 3000
        }
    },
    compass: {
        files: ['<%= globalConfig.srcdir %>/**/*.{scss,sass}'],
        tasks: ['compass:dev'],
        livereload: {
            port: 3000
        }
    },
    html: {
        files: ['app/**/*.tpl.html', 'app/**/index.html'],
        tasks: ['copy:dist', 'build-dev'],
        livereload: {
            port: 3000
        }
    }
};