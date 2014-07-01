module.exports = angular.module('loghApp.team.view', [])
  .controller('ViewTeamController', require('./ViewTeamController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.view', {
        url: '/{teamId}',
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/view/team.view.tpl.html',
            controller: 'ViewTeamController'
          }
        },
        resolve: {
          team: function(teamService, $stateParams) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          },
          regularPicks: function(team, pickService) {
            return pickService.getRegularPicks({ teamId: team.data.id });
          },
          playoffPicks: function(team, pickService) {
            return pickService.getPlayoffPicks({ teamId: team.data.id });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
