module.exports = angular.module('loghApp.teams.dead', [])
  .controller('DeadTeamsController', require('./DeadTeamsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.teams.dead', {
        url: '/dead',
        views: {
          teamsContent: {
            templateUrl: 'modules/private/team/teams/dead/teams.dead.tpl.html',
            controller: 'DeadTeamsController'
          }
        },
        resolve: {
          deadTeams: ['teamService', '$stateParams', function(teamService, $stateParams) {
            return teamService.getDeadTeams($stateParams.seasonId);
          }]
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });

