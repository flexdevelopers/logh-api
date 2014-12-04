module.exports = angular.module('loghApp.admin.weeks', [])
  .controller('AdminWeeksController', require('./AdminWeeksController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.weeks', {
        url: 'seasons/{seasonId}/weeks',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/weeks/admin.weeks.tpl.html',
            controller: 'AdminWeeksController',
            resolve: {
              season: function($stateParams, seasonService) {
                return seasonService.getSeason($stateParams.seasonId);
              },
              weeks: function($stateParams, weekService) {
                return weekService.getSeasonWeeks($stateParams.seasonId);
              }
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
