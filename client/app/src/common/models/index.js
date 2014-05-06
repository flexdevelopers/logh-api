/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('leagueModel', require('./LeagueModel'))
    .service('messageModel', require('./MessageModel'))
;