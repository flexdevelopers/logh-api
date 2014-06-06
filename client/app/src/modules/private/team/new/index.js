module.exports = angular.module('loghApp.team.new', [])
  .controller('NewTeamController', require('./NewTeamController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.new', {
        url: '/new',
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/new/team.new.tpl.html',
            controller: 'NewTeamController'
          }
        },
        resolve: {
          league: function(leagueService, $stateParams) {
            return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
