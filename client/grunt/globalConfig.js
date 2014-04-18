
module.exports = function() {
    var globalConfig = {
        app: 'app',
        resourcesdir: '../public/resources',
        distdir: '../public',
        proddir: 'app/prod/resources',
        //exportdir: 'somepath',
        exportcidir: 'app/ci',
        srcdir: 'app/src',
        tmpdir: '.tmp',
        srcfiles: {
            js: ['./app/src/**/*.js'],
            tpl: ['./app/src/**/*.tpl.html']
        }

    };

    return globalConfig;

}
