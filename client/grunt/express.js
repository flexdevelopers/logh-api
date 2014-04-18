
module.exports = {
    dev: {
        options: {
            script: './server/server.js'
        }
    },
    prod: {
        options: {
            script: './server/server.js',
            node_env: 'production'
        }
    },
    test: {
        options: {
            script: './server/server.js'
        }
    }
};