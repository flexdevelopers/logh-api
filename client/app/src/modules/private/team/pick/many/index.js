module.exports = angular.module('loghApp.team.pick.many', [])
  .controller('TeamPickManyController', require('./TeamPickManyController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick.many', {
        url: '/picks',
        views: {
          pickContent: {
            templateUrl: 'modules/private/team/pick/many/team.pick.many.tpl.html',
            controller: 'TeamPickManyController'
          }
        },
        resolve: {
          picks: function($stateParams, pickService) {
            return pickService.getSelectedPicks({ teamId: $stateParams.teamId });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
