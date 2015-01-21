module.exports = angular.module('loghApp.league.view', [])
  .controller('ViewLeagueController', require('./ViewLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.view', {
        url: '/{leagueId}?week',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/view/league.view.tpl.html',
            controller: 'ViewLeagueController'
          }
        },
        resolve: {
          league: function(leagueService, $stateParams) {
            return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
          },
          leagueWeeks: function(league, weekService) {
            return weekService.getLeagueWeeks({ seasonId: league.data.season_id, leagueId: league.data.id });
          },
          leagueTeams: function(league, teamService, $stateParams) {
            return teamService.getAllLeagueTeams({ seasonId: league.data.season_id, leagueId: league.data.id, weekSlug: $stateParams.week });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
