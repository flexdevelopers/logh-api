
module.exports = {
    options: {
        sassDir: '<%= globalConfig.srcdir %>',
        imagesDir: '<%= globalConfig.srcdir %>/assets/images',
        javascriptsDir: '<%= globalConfig.srcdir %>',
        fontsDir: '<%= globalConfig.srcdir %>/assets/fonts',
        importPath: '<%= globalConfig.app %>/bower_components',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
    },
    dist: {
        options: {
            cssDir: '<%= globalConfig.resourcesdir %>',
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
    dev: {
        options: {
            debugInfo: true,
            cssDir: '<%= globalConfig.resourcesdir %>',
            outputStyle: 'compressed',
            environment: 'production'
        }
    }
};