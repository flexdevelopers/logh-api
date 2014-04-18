
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
//            generatedImagesDir: '<%= globalConfig.resourcesdir %>/images/generated',
            cssDir: '<%= globalConfig.resourcesdir %>',
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
    prod: {
        options: {
//            generatedImagesDir: '<%= globalConfig.proddir %>/images/generated',
            cssDir: '<%= globalConfig.proddir %>',
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
    dev: {
        options: {
            debugInfo: true,
//            generatedImagesDir: '<%= globalConfig.resourcesdir %>/images/generated',
            cssDir: '<%= globalConfig.resourcesdir %>',
            outputStyle: 'compressed',
            environment: 'production'
        }
    }
};