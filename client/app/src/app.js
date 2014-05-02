'use strict';
require('app-templates');


var App = function($urlRouterProvider) {
    // unmatched urls should be directed back to the start
    $urlRouterProvider.otherwise('/main');
};

App.$inject = ['$urlRouterProvider'];

var loghApp = angular.module('loghApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'commangular',
    'ui.router',
    'ui.bootstrap',
    'app.templates',
    'ui.router.stateHelper',

    // main modules
    require('./modules/main').name,
    require('./modules/user').name,
    require('./modules/league').name,

    // helper modules
    require('./common/modules/header').name,
    require('./common/modules/message').name,

    require('./common/aspects').name,
    require('./common/models').name,
    require('./common/api').name,
    require('./common/command').name,

    require('./common/service/application').name,

    //directives
    require('./common/directives/focus').name,
    require('./common/directives/match').name,

    //modals

    //filters
    require('./common/filters').name

    ], App)

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app', {
            abstract: true,
            url: '/',
            templateUrl: 'common/templates/master.tpl.html',
            resolve: {
                user: function(userService) {
                    return userService.getCurrentUser();
                }
            }
        })
        .state('home', {
            abstract: true,
            url: '/',
            templateUrl: 'common/templates/master.tpl.html'
        })
    })

    .run(function($rootScope, $urlRouter, $log, applicationService) {
        $log.log("Application starting up...");
        applicationService.startup();
    })
;

loghApp.factory('authInterceptor', function ($rootScope, $q, $window, messageModel, userModel) {
    return {
        request: function (config) {
            messageModel.resetMessage();
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
            messageModel.setMessage(rejection.data.message);
            if (rejection.status === 401) {
                userModel.reset();
            }
            return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});









