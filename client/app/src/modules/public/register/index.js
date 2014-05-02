
module.exports = angular.module('loghApp.public.register', [])
    .controller('RegisterController', require('./RegisterController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('public.register', {
                url: 'register',
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
                        templateUrl: 'modules/public/register/register.tpl.html',
                        controller: 'RegisterController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
