
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
            }
        ]
    }
};