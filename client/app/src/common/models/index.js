/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('seasonModel', require('./SeasonModel'))
    .service('userModel', require('./UserModel'))
    .service('messageModel', require('./MessageModel'))
;