
module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: '<%= globalConfig.srcdir %>',
                dest: '<%= globalConfig.resourcesdir %>',
                src: [
                    'assets/images/**/*',
                    'assets/fonts/**/*'
                ]
            },
            {
                expand: true,
                dot: true,
                cwd: '<%= globalConfig.srcdir %>',
                dest: '<%= globalConfig.distdir %>',
                src: [
                    '*.html'
                ]
            },
            {
                expand: true,
                cwd: '.tmp/images',
                dest: '<%= globalConfig.resourcesdir %>/images',
                src: ['generated/*']
            }]
    },
    prod: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: '<%= globalConfig.srcdir %>',
                dest: '<%= globalConfig.proddir %>',
                src: [
                    '*.html',
                    'assets/images/**/*',
                    'assets/fonts/**/*'
                ]
            },
            {
                expand: true,
                cwd: '.tmp/images',
                dest: '<%= globalConfig.proddir %>/images',
                src: ['generated/*']
            }]

    },
    export: {
        files: [ {
            expand: true,
            dot: true,
            cwd: '<%= globalConfig.proddir %>',
            dest: '<%= globalConfig.exportdir %>',
            src: [
                '**/*.*'
            ]
        }]
    },
    export_ci: {
        files: [ {
            expand: true,
            dot: true,
            cwd: '<%= globalConfig.proddir %>',
            dest: '<%= globalConfig.exportcidir %>',
            src: [
                '**/*.*'
            ]
        }]
    }
//    ,
//    styles: {
//        expand: true,
//        cwd: '<%= globalConfig.srcdir %>/assets/css',
//        dest: '.tmp/styles/',
//        src: '{,*/}*.css'
//    }
};