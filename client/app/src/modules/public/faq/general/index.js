module.exports = angular.module('loghApp.public.faq.general', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public.faq.general', {
        url: '',
        views: {
          faqContent: {
            templateUrl: 'modules/public/faq/general/faq.general.tpl.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
