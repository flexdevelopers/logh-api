module.exports = function() {

    var globalConfig = {
        app: 'app',
        resourcesdir: '../public/resources',
        distdir: '../public',
        srcdir: 'app/src',
        tmpdir: '.tmp',
        srcfiles: {
            js: ['./app/src/**/*.js'],
            tpl: ['./app/src/**/*.tpl.html']
        }
    };

    return globalConfig;
}
