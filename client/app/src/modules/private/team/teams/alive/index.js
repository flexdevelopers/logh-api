module.exports = angular.module('loghApp.teams.alive', [])
  .controller('AliveTeamsController', require('./AliveTeamsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.teams.alive', {
        url: '/alive',
        views: {
          teamsContent: {
            templateUrl: 'modules/private/team/teams/alive/teams.alive.tpl.html',
            controller: 'AliveTeamsController'
          }
        },
        resolve: {
          aliveTeams: ['teamService', '$stateParams', function(teamService, $stateParams) {
            return teamService.getAliveTeams($stateParams.seasonId);
          }]
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });

