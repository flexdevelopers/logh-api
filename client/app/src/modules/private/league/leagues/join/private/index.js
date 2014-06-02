module.exports = angular.module('loghApp.leagues.join.private', [])
  .controller('PrivateLeaguesController', require('./PrivateLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join.private', {
        url: 'private',
        views: {
          joinLeaguesContent: {
            templateUrl: 'modules/private/league/leagues/join/private/leagues.join.private.tpl.html',
            controller: 'PrivateLeaguesController'
          }
        },
        resolve: {
          privateLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
            return leagueService.getPrivateLeagues($stateParams.seasonId);
          }]
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });

