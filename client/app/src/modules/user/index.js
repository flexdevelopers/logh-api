
module.exports = angular.module('loghApp.user', [])
    .controller('UserController', require('./UserController'))
    .config(function($stateProvider, $urlRouterProvider, $injector) {
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                templateUrl: 'modules/user/user.tpl.html'
            })
            .state('user.new', {
                url: '/new',
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
                        templateUrl: 'modules/user/user.new.tpl.html',
                        controller: 'UserController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('user.detail', {
                url: '/detail',
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
                        templateUrl: 'modules/user/user.detail.tpl.html',
                        controller: 'UserController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                },
                resolve: {
                    loadUser: function($injector) {
                        var userModel = $injector.get('userModel');
                        if (!userModel.user.loaded) {
                            var $commangular = $injector.get('$commangular');
                            $commangular.dispatch("GetCurrentUserEvent");
                        }
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });