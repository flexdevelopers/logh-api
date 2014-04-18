
module.exports = {
    dist: {
        files: {
            '<%= globalConfig.resourcesdir %>/assets/js/app.js': [
                '<%= globalConfig.tmpdir %>/app.js'
            ]
        }
    },
    prod: {
        files: {
            '<%= globalConfig.proddir %>/assets/js/app.js': [
                '<%= globalConfig.tmpdir %>/app.js'
            ]
        }
    }
};