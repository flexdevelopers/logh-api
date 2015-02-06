module.exports = angular.module('loghApp.team.pick', [])
  .controller('TeamPickController', require('./TeamPickController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick', {
        url: '/{teamId}',
        abstract: true,
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/pick/team.pick.tpl.html',
            controller: 'TeamPickController'
          }
        },
        resolve: {
          team: function($stateParams, teamService) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          },
          week: function($stateParams, weekService) {
            return weekService.getCurrentWeek($stateParams.seasonId, $stateParams.leagueId);
          },
          games: function($stateParams, gameService) {
            return gameService.getCurrentGames($stateParams.leagueId);
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
