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
          regularPicks: function(team, teamService) {
            return [
              {foo:'bar',bar:'foo'},
              {foo:'bar',bar:'foo'},
              {foo:'bar',bar:'foo'},
              {foo:'bar',bar:'foo'}
            ];
//            return teamService.getRegularPicks({ seasonId: league.data.season_id, leagueId: league.data.id });
          },
          playoffPicks: function(team, teamService) {
            return [
              {foo:'bar',bar:'foo'},
              {foo:'bar',bar:'foo'},
              {foo:'bar',bar:'foo'},
              {foo:'bar',bar:'foo'}
            ];
//            return teamService.getDeadTeams({ seasonId: league.data.season_id, leagueId: league.data.id });
          }

        }
      });
    $urlRouterProvider.otherwise('/');
  });
