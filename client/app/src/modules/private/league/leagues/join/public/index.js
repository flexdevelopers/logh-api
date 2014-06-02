module.exports = angular.module('loghApp.leagues.join.public', [])
  .controller('PublicLeaguesController', require('./PublicLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join.public', {
        url: 'public',
        views: {
          joinLeaguesContent: {
            templateUrl: 'modules/private/league/leagues/join/public/leagues.join.public.tpl.html',
            controller: 'PublicLeaguesController'
          }
        },
        resolve: {
          publicLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
            return leagueService.getPublicLeagues($stateParams.seasonId);
          }]
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });

