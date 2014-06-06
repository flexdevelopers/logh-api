module.exports = angular.module('loghApp.team.edit', [])
  .controller('EditTeamController', require('./EditTeamController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.edit', {
        url: '/{teamId}/edit',
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/edit/team.edit.tpl.html',
            controller: 'EditTeamController'
          }
        },
        resolve: {
          team: function(teamService, $stateParams) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
