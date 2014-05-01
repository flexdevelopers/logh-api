
module.exports = angular.module('loghApp.user', [])
    .controller('UserController', require('./UserController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.user', {
                abstract: true,
                url: 'user',
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
                        templateUrl: 'modules/user/user.tpl.html'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('app.user.new', {
                url: '/new',
                views: {
                    userContent: {
                        templateUrl: 'modules/user/user.new.tpl.html',
                        controller: 'UserController'
                    }
                }
            })
            .state('app.user.detail', {
                url: '/detail',
                views: {
                    userContent: {
                        templateUrl: 'modules/user/user.detail.tpl.html',
                        controller: 'UserController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });