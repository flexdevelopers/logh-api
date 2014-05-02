
module.exports = angular.module('loghApp.main', [])
    .controller('MainController', require('./MainController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home.main', {
                url: 'main',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    message: {
                        templateUrl: 'common/modules/message/message.tpl.html',
                        controller: 'MessageController'
                    },
                    content: {
                        templateUrl: 'modules/main/main.tpl.html',
                        controller: 'MainController'
                    },
                    footer: {                        
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                },
                resolve: {
                    season: function(seasonService) {
                        return seasonService.getCurrentSeason();
                    }
                }

            });
        $urlRouterProvider.otherwise('/');
    });