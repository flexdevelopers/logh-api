/**
 * Define the remote services
 */
module.exports = angular.module('loghApp.api', [])
      .constant('apiConfig', require('./ApiConfig'))
      .service('userService', require('./UserService'))
      .service('leagueService', require('./LeagueService'))
      .service('teamService', require('./TeamService'))
      .service('pickService', require('./PickService'))
      .service('seasonService', require('./SeasonService'))
      .service('weekService', require('./WeekService'))
      .service('gameService', require('./GameService'))
;
