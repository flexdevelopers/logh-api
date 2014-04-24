require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/header/header.tpl.html', 'common/templates/footer.tpl.html', 'common/templates/master.tpl.html', 'modules/main/main.tpl.html']);

angular.module("common/modules/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/header/header.tpl.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button class=\"navbar-toggle\" type=\"button\" ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#\">loseorgohome.com</a>\n" +
    "    </div>\n" +
    "    <div collapse=\"isCollapsed\" class=\"navbar-collapse bs-js-navbar-collapse\">\n" +
    "      <ul ng-show=\"userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{userData.user.email}} <b class=\"caret\"></b></a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\" ng-click=\"getCurrentUser()\">Edit Profile</a></li>\n" +
    "            <li><a href=\"#\" ng-click=\"logout()\">Sign Out</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul ng-show=\"!userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Join</strong></a>\n" +
    "          <div class=\"dropdown-menu panel panel-default\">\n" +
    "            <div class=\"panel-body\">\n" +
    "              <form role=\"form\" ng-submit=\"createUser(userParams); $event.stopPropagation();\">\n" +
    "                  <div class=\"form-group\">\n" +
    "                  <input type=\"text\" class=\"form-control\" placeholder=\"First name\" ng-model=\"userParams.first_name\" ng-click=\"$event.stopPropagation();\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" ng-model=\"userParams.last_name\" ng-click=\"$event.stopPropagation();\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" ng-model=\"userParams.email\" ng-click=\"$event.stopPropagation();\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"userParams.password\" ng-click=\"$event.stopPropagation();\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" ng-model=\"userParams.password_confirmation\" ng-click=\"$event.stopPropagation();\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In</strong></a>\n" +
    "          <div class=\"dropdown-menu panel panel-default\">\n" +
    "            <div class=\"panel-body\">\n" +
    "              <form role=\"form\" ng-submit=\"login(loginParams); $event.stopPropagation();\">\n" +
    "                <div class=\"form-group\">\n" +
    "                  <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" ng-model=\"loginParams.email\" ng-click=\"$event.stopPropagation();\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"loginParams.password\" ng-click=\"$event.stopPropagation();\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.nav-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>");
}]);

angular.module("common/templates/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/footer.tpl.html",
    "<div class=\"footer\">\n" +
    "    <p>♥ This is the footer</p>\n" +
    "</div>");
}]);

angular.module("common/templates/master.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/master.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <!-- Header -->\n" +
    "    <div ui-view=\"header\"></div>\n" +
    "\n" +
    "    <!-- Content -->\n" +
    "    <div class=\"contentView\" ui-view=\"content\" class=\"row\"></div>\n" +
    "\n" +
    "    <!-- Footer -->\n" +
    "    <div ui-view=\"footer\" class=\"row footer-row\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("modules/main/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/main/main.tpl.html",
    "<div>\n" +
    "\n" +
    "  <div class=\"jumbotron\">\n" +
    "    <h1>Losers Wanted</h1>\n" +
    "    <p class=\"lead\">\n" +
    "      <img src=\"resources/assets/images/loser.png\" alt=\"Hello Loser\"><br>\n" +
    "    </p>\n" +
    "    <div>\n" +
    "      <button type=\"button\" class=\"btn btn-info btn-lg\">Join a League</button>\n" +
    "      <button type=\"button\" class=\"btn btn-info btn-lg\">Create a League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--<div ui-view=\"content\"></div>-->\n" +
    "\n" +
    "</div>");
}]);

},{}],1:[function(require,module,exports){
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

    require('./modules/main').name,

    require('./common/modules/header').name,

    require('./common/aspects').name,
    require('./common/models').name,
    require('./common/api').name,
    require('./common/command').name,

    require('./common/service/application').name,

    //modals

    //filters
    require('./common/filters').name

    ], App)

    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
        .state('app', {
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

loghApp.factory('authInterceptor', function ($rootScope, $q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                // handle the case where the user is not authenticated
            }
            return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});










},{"app-templates":"0VoVTq","./modules/main":2,"./common/modules/header":3,"./common/aspects":4,"./common/models":5,"./common/api":6,"./common/command":7,"./common/service/application":8,"./common/filters":9}],2:[function(require,module,exports){

module.exports = angular.module('loghApp.main', [])
    .controller('MainController', require('./MainController'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('app.main', {
                url: 'main',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    content: {
                        templateUrl: 'modules/main/main.tpl.html',
                        controller: 'MainController'
                    },
                    footer: {                        
						templateUrl: 'common/templates/footer.tpl.html'
                    }
                }

            })
//            .state('app.main.someChildState', {
//                url: '',
//                views: {
//                    content: {
//                        templateUrl: 'modules/somefeature.somefeature.tpl.html',
//                        controller: 'SomeFeatureController'
//                    }
//                }
//            })
        ;
        $urlRouterProvider.otherwise('/');
    });
},{"./MainController":10}],5:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
;
},{"./UserModel":11}],4:[function(require,module,exports){

require("./TestAspect");

module.exports = angular.module('loghApp.aspects', [])
    .config( function() {

       //TODO aspect config if necessary
    }
);
},{"./TestAspect":12}],6:[function(require,module,exports){
/**
 * Define the remote services
 */
module.exports = angular.module('loghApp.api', [])
      .constant('apiConfig', require('./ApiConfig'))
      .service('userService', require('./UserService'))
;
},{"./ApiConfig":13,"./UserService":14}],7:[function(require,module,exports){

//application commands
require('./LoginCommand');
require('./LogoutCommand');
require('./GetCurrentUserCommand');
require('./CreateUserCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand').add('GetCurrentUserCommand');

        $commangularProvider.mapTo('LogoutEvent').asSequence()
            .add('LogoutCommand');

        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');

        $commangularProvider.mapTo('CreateUserEvent').asSequence()
            .add('CreateUserCommand').add('GetCurrentUserCommand');

    }
);


},{"./LogoutCommand":15,"./LoginCommand":16,"./GetCurrentUserCommand":17,"./CreateUserCommand":18}],9:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //models
    .filter('timeFilter', require('./TimeFilter'))
;

},{"./TimeFilter":19}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":20}],8:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":21}],10:[function(require,module,exports){
/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $location
 * @constructor
 */
var MainController = function($scope, $window, $location, $commangular, userModel) {

    $scope.user = userModel.user;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
       //dostuff
        console.log("main controller");
    };
    init();
};

MainController.$inject = ['$scope', '$window', '$location', '$commangular', 'userModel'];
module.exports = MainController;

},{}],11:[function(require,module,exports){

/**
 * User Model to hold the user details

 * @param $log
 */
var UserModel = function($window, $log) {

    var user = {};
    user.loaded = false;
    user.id = '';
    user.email = '';
    user.first_name = '';
    user.last_name = '';
    user.admin = false;

    this.user = user;

    this.setUser = function(userData) {
        user.loaded = true;
        user = angular.extend(user, userData);
        $log.log("UserModel: email: " + user.email);
    };

    this.reset = function() {
        $window.sessionStorage.removeItem('token');

        user = {};
        user.loaded = false;
        user.id = '';
        user.email = '';
        user.first_name = '';
        user.last_name = '';
        user.admin = false;

        this.user = user;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("creating user model");
    };
    init();

};

UserModel.$inject = ['$window', '$log'];
module.exports = UserModel;
},{}],12:[function(require,module,exports){

commangular.eventAspect('@Before(/.*/)', function(processor, $log) {

    return {

        execute : function () {

//            if (CurrentTodo.todo.length === 0) {
//                processor.cancel('Empty todo');
//            }
            //$log.log('Test Aspect');

        }
    }
});
},{}],13:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],14:[function(require,module,exports){
var UserService = function($http, $log, $window, apiConfig, userModel) {

    this.login = function(email, password) {
        $log.log('UserService: login');
        var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.log("UserService: POST /api/sessions success");
                $window.sessionStorage.token = data.token;
                return data;
            })
            .error(function(data) {
                $log.log("UserService: POST /api/sessions failure");
                return data;
            });

        return promise;
    };

    this.logout = function() {
        $log.log('UserService: logout');
        var promise = $http.delete(
            apiConfig.baseURL + 'sessions/destroy')
            .success(function(data) {
                $log.log("UserService: DELETE /api/sessions/destroy success");
                return data;
            })
            .error(function(data) {
                $log.log("UserService: DELETE /api/sessions/destroy failure");
                return data;
            });

        return promise;

    };

    this.getCurrentUser = function() {
        $log.log('UserService: getCurrentUser');
        var promise = $http.get(apiConfig.baseURL + "users/current")
            .success(function(data) {
                $log.log("UserService: get current user success");
                $log.log("UserService: current user data:" + data);
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: get current user failed");
                return data;
            });

        return promise;
    };

    this.createUser = function(userParams) {
        $log.log('UserService: createUser');
        var promise = $http.post(apiConfig.baseURL + "users",
            { user: userParams })
            .success(function(data) {
                $log.log("UserService: create user success");
                $window.sessionStorage.token = data.token;
                return data;
            })
            .error(function(data) {
                $log.log("UserService: create user failed");
                return data;
            });

        return promise;
    };

};

UserService.$inject = ['$http', '$log', '$window', 'apiConfig', 'userModel'];
module.exports = UserService;
},{}],15:[function(require,module,exports){

commangular.create('LogoutCommand',
    function($log, userService, userModel) {

        return {

            execute: function() {
                $log.log('LogoutCommand: Logout user');
                return userService.logout();
            },
            onError: function(error) {
                $log.log("LogoutCommand: error in logout: " + error.data);
            },
            onResult: function(result) {
                $log.log("LogoutCommand: logout successful");
                userModel.reset();
            }

        }
    });



},{}],16:[function(require,module,exports){

commangular.create('LoginCommand',
    function($log, userService) {

    return {

        execute: function(email, password) {
            $log.log('LoginCommand: Authenticating user');
            return userService.login(email, password);
        },
        onError: function(error) {
            $log.log("LoginCommand: error in login: " + error.data);
        },
        onResult: function(result) {
            $log.log("LoginCommand: login successful ");
        }

    }
});



},{}],17:[function(require,module,exports){

commangular.create('GetCurrentUserCommand',
   function($log, userService) {

    return {

        execute: function() {
            $log.log('GetCurrentUserCommand: Getting current user details...');
            var userPromise = userService.getCurrentUser();
            return userPromise;
        },
        onError : function(error) {
            $log.log("GetCurrentUserCommand: error in GetCurrentUser: " + error.data);
//            $state.go('app.registration.login');
        },
        onResult : function(result) {
            $log.log("GetCurrentUserCommand: current user data result is " + result);
        }

    }
});
},{}],18:[function(require,module,exports){

commangular.create('CreateUserCommand',
    function($log, userService) {

        return {

            execute: function(userParams) {
                $log.log('CreateUserCommand: Creating a new user...');
                var userPromise = userService.createUser(userParams);
                return userPromise;
            },
            onError : function(error) {
                $log.log("CreateUserCommand: error in CreateUser: " + error.data);
            },
            onResult : function(result) {
                $log.log("CreateUserCommand: create user was successful");
            }

        }
    });
},{}],19:[function(require,module,exports){

var TimeFilter = function($log) {
   return function(input) {

       if (input < 1) {
           return "00:00:00";
       }

       function format(val) {
           return (val<10 ? '0' : '') + val;
       }

       var h = Math.floor((input / 1000) / 3600);
       var m = Math.floor(((input / 1000) % 3600) / 60);
       var s = Math.floor((input / 1000) % 60);
       return format(h) + ":" + format(m) + ":" + format(s);
   }

};

TimeFilter.$inject = ['$log'];
module.exports = TimeFilter;

},{}],20:[function(require,module,exports){
var HeaderController = function($scope, $log, userModel) {

    $scope.userData = userModel;

    $scope.loginParams = {
        email: '',
        password: ''
    };

    $scope.userParams = {
        email: '',
        password: '',
        password_confirmation: '',
        first_name: '',
        last_name: ''
    };

    $scope.login = function(loginParams) {
        $log.log(loginParams);
        $scope.dispatch("LoginEvent", loginParams);
    };

    $scope.logout = function() {
        $scope.loginParams = {
            email: '',
            password: ''
        };
        $scope.dispatch("LogoutEvent");
    };

    $scope.createUser = function(userParams) {
        $log.log(userParams);
        $scope.dispatch('CreateUserEvent', { userParams: userParams} );
    };

    $scope.getCurrentUser = function() {
        // todo: switch views only. you already have the user
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("header controller");
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', 'userModel'];
module.exports = HeaderController;

},{}],21:[function(require,module,exports){
(function(){var ApplicationService =
    function($window, $log, $commangular) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            $log.log("starting the app...");
            startupProcess();
        };

        var startupProcess = function() {
            $log.log("executing startup process...")
            if ($window.sessionStorage.token) {
                $commangular.dispatch("GetCurrentUserEvent");
                return;
            }
        };

        /**
         * Invoked on startup, like a constructor.
         */
        var init = function () {
            $log.log("ApplicationService init application service");

        };
        init();

    };

ApplicationService.$inject = ['$window', '$log', '$commangular'];
module.exports = ApplicationService;

})()
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvLnRtcC9hcHAtdGVtcGxhdGVzLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvYXBwLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9tYWluL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvbWFpbi9NYWluQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvVXNlck1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FzcGVjdHMvVGVzdEFzcGVjdC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvQXBpQ29uZmlnLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL0xvZ291dENvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9Mb2dpbkNvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9HZXRDdXJyZW50VXNlckNvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9DcmVhdGVVc2VyQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL1RpbWVGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAudGVtcGxhdGVzJywgWydjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJywgJ2NvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sJywgJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJywgJ21vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sJ10pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsXG4gICAgXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPmxvc2VvcmdvaG9tZS5jb208L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNvbGxhcHNlPVxcXCJpc0NvbGxhcHNlZFxcXCIgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZSBicy1qcy1uYXZiYXItY29sbGFwc2VcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBuZy1zaG93PVxcXCJ1c2VyRGF0YS51c2VyLmxvYWRlZFxcXCIgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIj57e3VzZXJEYXRhLnVzZXIuZW1haWx9fSA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIG5nLWNsaWNrPVxcXCJnZXRDdXJyZW50VXNlcigpXFxcIj5FZGl0IFByb2ZpbGU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgbmctY2xpY2s9XFxcImxvZ291dCgpXFxcIj5TaWduIE91dDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBuZy1zaG93PVxcXCIhdXNlckRhdGEudXNlci5sb2FkZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+Sm9pbjwvc3Ryb25nPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxmb3JtIHJvbGU9XFxcImZvcm1cXFwiIG5nLXN1Ym1pdD1cXFwiY3JlYXRlVXNlcih1c2VyUGFyYW1zKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBuYW1lXFxcIiBuZy1tb2RlbD1cXFwidXNlclBhcmFtcy5maXJzdF9uYW1lXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3QgbmFtZVxcXCIgbmctbW9kZWw9XFxcInVzZXJQYXJhbXMubGFzdF9uYW1lXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcInVzZXJQYXJhbXMuZW1haWxcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwidXNlclBhcmFtcy5wYXNzd29yZFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ29uZmlybSBQYXNzd29yZFxcXCIgbmctbW9kZWw9XFxcInVzZXJQYXJhbXMucGFzc3dvcmRfY29uZmlybWF0aW9uXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+U3VibWl0PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlNpZ24gSW48L3N0cm9uZz48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8Zm9ybSByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcImxvZ2luKGxvZ2luUGFyYW1zKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwibG9naW5QYXJhbXMuZW1haWxcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwibG9naW5QYXJhbXMucGFzc3dvcmRcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PjwhLS0gLy5uYXYtY29sbGFwc2UgLS0+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj48IS0tIC8uY29udGFpbmVyLWZsdWlkIC0tPlxcblwiICtcbiAgICBcIjwvbmF2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cD7imaUgVGhpcyBpcyB0aGUgZm9vdGVyPC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tIEhlYWRlciAtLT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiB1aS12aWV3PVxcXCJoZWFkZXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tIENvbnRlbnQgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRWaWV3XFxcIiB1aS12aWV3PVxcXCJjb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLSBGb290ZXIgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgdWktdmlldz1cXFwiZm9vdGVyXFxcIiBjbGFzcz1cXFwicm93IGZvb3Rlci1yb3dcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL21haW4vbWFpbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgxPkxvc2VycyBXYW50ZWQ8L2gxPlxcblwiICtcbiAgICBcIiAgICA8cCBjbGFzcz1cXFwibGVhZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGltZyBzcmM9XFxcInJlc291cmNlcy9hc3NldHMvaW1hZ2VzL2xvc2VyLnBuZ1xcXCIgYWx0PVxcXCJIZWxsbyBMb3NlclxcXCI+PGJyPlxcblwiICtcbiAgICBcIiAgICA8L3A+XFxuXCIgK1xuICAgIFwiICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWxnXFxcIj5Kb2luIGEgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWxnXFxcIj5DcmVhdGUgYSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDwhLS08ZGl2IHVpLXZpZXc9XFxcImNvbnRlbnRcXFwiPjwvZGl2Pi0tPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJ2FwcC10ZW1wbGF0ZXMnKTtcblxuXG52YXIgQXBwID0gZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgLy8gdW5tYXRjaGVkIHVybHMgc2hvdWxkIGJlIGRpcmVjdGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL21haW4nKTtcbn07XG5cbkFwcC4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInXTtcblxudmFyIGxvZ2hBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcCcsIFtcbiAgICAnbmdDb29raWVzJyxcbiAgICAnbmdSZXNvdXJjZScsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICduZ1JvdXRlJyxcbiAgICAnY29tbWFuZ3VsYXInLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5ib290c3RyYXAnLFxuICAgICdhcHAudGVtcGxhdGVzJyxcbiAgICAndWkucm91dGVyLnN0YXRlSGVscGVyJyxcblxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9tYWluJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvaGVhZGVyJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2FzcGVjdHMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZGVscycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXBpJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9jb21tYW5kJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24nKS5uYW1lLFxuXG4gICAgLy9tb2RhbHNcblxuICAgIC8vZmlsdGVyc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2ZpbHRlcnMnKS5uYW1lXG5cbiAgICBdLCBBcHApXG5cbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJ1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICR1cmxSb3V0ZXIsICRsb2csIGFwcGxpY2F0aW9uU2VydmljZSkge1xuICAgICAgICAkbG9nLmxvZyhcIkFwcGxpY2F0aW9uIHN0YXJ0aW5nIHVwLi4uXCIpO1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZpY2Uuc3RhcnR1cCgpO1xuICAgIH0pXG47XG5cbmxvZ2hBcHAuZmFjdG9yeSgnYXV0aEludGVyY2VwdG9yJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRxLCAkd2luZG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcbiAgICAgICAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9LFxuICAgICAgICByZXNwb25zZUVycm9yOiBmdW5jdGlvbiAocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tYWluJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9NYWluQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5tYWluJywge1xuICAgICAgICAgICAgICAgIHVybDogJ21haW4nLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7ICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAuc3RhdGUoJ2FwcC5tYWluLnNvbWVDaGlsZFN0YXRlJywge1xuLy8gICAgICAgICAgICAgICAgdXJsOiAnJyxcbi8vICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc29tZWZlYXR1cmUuc29tZWZlYXR1cmUudHBsLmh0bWwnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU29tZUZlYXR1cmVDb250cm9sbGVyJ1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7IiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIG1vZGVsc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLm1vZGVscycsIFtdKVxuICAgIC8vbW9kZWxzXG4gICAgLnNlcnZpY2UoJ3VzZXJNb2RlbCcsIHJlcXVpcmUoJy4vVXNlck1vZGVsJykpXG47IiwiXG5yZXF1aXJlKFwiLi9UZXN0QXNwZWN0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFzcGVjdHMnLCBbXSlcbiAgICAuY29uZmlnKCBmdW5jdGlvbigpIHtcblxuICAgICAgIC8vVE9ETyBhc3BlY3QgY29uZmlnIGlmIG5lY2Vzc2FyeVxuICAgIH1cbik7IiwiLyoqXG4gKiBEZWZpbmUgdGhlIHJlbW90ZSBzZXJ2aWNlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFwaScsIFtdKVxuICAgICAgLmNvbnN0YW50KCdhcGlDb25maWcnLCByZXF1aXJlKCcuL0FwaUNvbmZpZycpKVxuICAgICAgLnNlcnZpY2UoJ3VzZXJTZXJ2aWNlJywgcmVxdWlyZSgnLi9Vc2VyU2VydmljZScpKVxuOyIsIlxuLy9hcHBsaWNhdGlvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9Mb2dpbkNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vTG9nb3V0Q29tbWFuZCcpO1xucmVxdWlyZSgnLi9HZXRDdXJyZW50VXNlckNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vQ3JlYXRlVXNlckNvbW1hbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5jb21tYW5kQ29uZmlnJywgW10pXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkY29tbWFuZ3VsYXJQcm92aWRlcikge1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdMb2dpbkV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdMb2dpbkNvbW1hbmQnKS5hZGQoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZCcpO1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdMb2dvdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnTG9nb3V0Q29tbWFuZCcpO1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdHZXRDdXJyZW50VXNlckV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnKTtcblxuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnQ3JlYXRlVXNlckV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdDcmVhdGVVc2VyQ29tbWFuZCcpLmFkZCgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbiAgICB9XG4pO1xuXG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gZmlsdGVyc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZpbHRlcnMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5maWx0ZXIoJ3RpbWVGaWx0ZXInLCByZXF1aXJlKCcuL1RpbWVGaWx0ZXInKSlcbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuaGVhZGVyJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0hlYWRlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0hlYWRlckNvbnRyb2xsZXInKSkiLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gc2VydmljZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmFwcGxpY2F0aW9uJywgW10pXG4gICAgLnNlcnZpY2UoJ2FwcGxpY2F0aW9uU2VydmljZScsIHJlcXVpcmUoJy4vQXBwbGljYXRpb25TZXJ2aWNlJykpOyIsIi8qKlxuICogQ29udHJvbGxlciBmb3IgdGhlIG1haW4gYXBwbGljYXRpb24gc2NyZWVuIHRoYXQgY29udHJvbHMgdGhlIGhlYWRlciBhbmQgbWVudS5cbiAqIEBwYXJhbSAkc2NvcGVcbiAqIEBwYXJhbSAkd2luZG93XG4gKiBAcGFyYW0gJGxvY2F0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1haW5Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24sICRjb21tYW5ndWxhciwgdXNlck1vZGVsKSB7XG5cbiAgICAkc2NvcGUudXNlciA9IHVzZXJNb2RlbC51c2VyO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgLy9kb3N0dWZmXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFpbiBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgJyRjb21tYW5ndWxhcicsICd1c2VyTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTWFpbkNvbnRyb2xsZXI7XG4iLCJcbi8qKlxuICogVXNlciBNb2RlbCB0byBob2xkIHRoZSB1c2VyIGRldGFpbHNcblxuICogQHBhcmFtICRsb2dcbiAqL1xudmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKCR3aW5kb3csICRsb2cpIHtcblxuICAgIHZhciB1c2VyID0ge307XG4gICAgdXNlci5sb2FkZWQgPSBmYWxzZTtcbiAgICB1c2VyLmlkID0gJyc7XG4gICAgdXNlci5lbWFpbCA9ICcnO1xuICAgIHVzZXIuZmlyc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuXG4gICAgdGhpcy51c2VyID0gdXNlcjtcblxuICAgIHRoaXMuc2V0VXNlciA9IGZ1bmN0aW9uKHVzZXJEYXRhKSB7XG4gICAgICAgIHVzZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdXNlciA9IGFuZ3VsYXIuZXh0ZW5kKHVzZXIsIHVzZXJEYXRhKTtcbiAgICAgICAgJGxvZy5sb2coXCJVc2VyTW9kZWw6IGVtYWlsOiBcIiArIHVzZXIuZW1haWwpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblxuICAgICAgICB1c2VyID0ge307XG4gICAgICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHVzZXIuaWQgPSAnJztcbiAgICAgICAgdXNlci5lbWFpbCA9ICcnO1xuICAgICAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICAgICAgdXNlci5sYXN0X25hbWUgPSAnJztcbiAgICAgICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIHVzZXIgbW9kZWxcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJNb2RlbC4kaW5qZWN0ID0gWyckd2luZG93JywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlck1vZGVsOyIsIlxuY29tbWFuZ3VsYXIuZXZlbnRBc3BlY3QoJ0BCZWZvcmUoLy4qLyknLCBmdW5jdGlvbihwcm9jZXNzb3IsICRsb2cpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZSA6IGZ1bmN0aW9uICgpIHtcblxuLy8gICAgICAgICAgICBpZiAoQ3VycmVudFRvZG8udG9kby5sZW5ndGggPT09IDApIHtcbi8vICAgICAgICAgICAgICAgIHByb2Nlc3Nvci5jYW5jZWwoJ0VtcHR5IHRvZG8nKTtcbi8vICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8kbG9nLmxvZygnVGVzdCBBc3BlY3QnKTtcblxuICAgICAgICB9XG4gICAgfVxufSk7IiwiLypcbiAqICBHbG9iYWwgY29uZmlnIGZvciByZW1vdGUgc2VydmljZXNcbiAqL1xuXG52YXIgQXBpQ29uZmlnID0gIHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUNvbmZpZztcbiIsInZhciBVc2VyU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkd2luZG93LCBhcGlDb25maWcsIHVzZXJNb2RlbCkge1xuXG4gICAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAkbG9nLmxvZygnVXNlclNlcnZpY2U6IGxvZ2luJyk7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZXNzaW9uc1wiLFxuICAgICAgICAgICAgeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IFBPU1QgL2FwaS9zZXNzaW9ucyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogUE9TVCAvYXBpL3Nlc3Npb25zIGZhaWx1cmVcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5sb2dvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvZy5sb2coJ1VzZXJTZXJ2aWNlOiBsb2dvdXQnKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5kZWxldGUoXG4gICAgICAgICAgICBhcGlDb25maWcuYmFzZVVSTCArICdzZXNzaW9ucy9kZXN0cm95JylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBERUxFVEUgL2FwaS9zZXNzaW9ucy9kZXN0cm95IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBERUxFVEUgL2FwaS9zZXNzaW9ucy9kZXN0cm95IGZhaWx1cmVcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcblxuICAgIH07XG5cbiAgICB0aGlzLmdldEN1cnJlbnRVc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRsb2cubG9nKCdVc2VyU2VydmljZTogZ2V0Q3VycmVudFVzZXInKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBnZXQgY3VycmVudCB1c2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogY3VycmVudCB1c2VyIGRhdGE6XCIgKyBkYXRhKTtcbiAgICAgICAgICAgICAgICB1c2VyTW9kZWwuc2V0VXNlcihkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IGdldCBjdXJyZW50IHVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgJGxvZy5sb2coJ1VzZXJTZXJ2aWNlOiBjcmVhdGVVc2VyJyk7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnNcIixcbiAgICAgICAgICAgIHsgdXNlcjogdXNlclBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IGNyZWF0ZSB1c2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBjcmVhdGUgdXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5Vc2VyU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyR3aW5kb3cnLCAnYXBpQ29uZmlnJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyU2VydmljZTsiLCJcbmNvbW1hbmd1bGFyLmNyZWF0ZSgnTG9nb3V0Q29tbWFuZCcsXG4gICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKCdMb2dvdXRDb21tYW5kOiBMb2dvdXQgdXNlcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiTG9nb3V0Q29tbWFuZDogZXJyb3IgaW4gbG9nb3V0OiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIkxvZ291dENvbW1hbmQ6IGxvZ291dCBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5yZXNldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4iLCJcbmNvbW1hbmd1bGFyLmNyZWF0ZSgnTG9naW5Db21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKCdMb2dpbkNvbW1hbmQ6IEF1dGhlbnRpY2F0aW5nIHVzZXInKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5sb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJMb2dpbkNvbW1hbmQ6IGVycm9yIGluIGxvZ2luOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkxvZ2luQ29tbWFuZDogbG9naW4gc3VjY2Vzc2Z1bCBcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn0pO1xuXG5cbiIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnLFxuICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbG9nLmxvZygnR2V0Q3VycmVudFVzZXJDb21tYW5kOiBHZXR0aW5nIGN1cnJlbnQgdXNlciBkZXRhaWxzLi4uJyk7XG4gICAgICAgICAgICB2YXIgdXNlclByb21pc2UgPSB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJQcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yIDogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiR2V0Q3VycmVudFVzZXJDb21tYW5kOiBlcnJvciBpbiBHZXRDdXJyZW50VXNlcjogXCIgKyBlcnJvci5kYXRhKTtcbi8vICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAucmVnaXN0cmF0aW9uLmxvZ2luJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0IDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkdldEN1cnJlbnRVc2VyQ29tbWFuZDogY3VycmVudCB1c2VyIGRhdGEgcmVzdWx0IGlzIFwiICsgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7IiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0NyZWF0ZVVzZXJDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZygnQ3JlYXRlVXNlckNvbW1hbmQ6IENyZWF0aW5nIGEgbmV3IHVzZXIuLi4nKTtcbiAgICAgICAgICAgICAgICB2YXIgdXNlclByb21pc2UgPSB1c2VyU2VydmljZS5jcmVhdGVVc2VyKHVzZXJQYXJhbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyUHJvbWlzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yIDogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIkNyZWF0ZVVzZXJDb21tYW5kOiBlcnJvciBpbiBDcmVhdGVVc2VyOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVzdWx0IDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJDcmVhdGVVc2VyQ29tbWFuZDogY3JlYXRlIHVzZXIgd2FzIHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pOyIsIlxudmFyIFRpbWVGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblxuICAgICAgIGlmIChpbnB1dCA8IDEpIHtcbiAgICAgICAgICAgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICAgICB9XG5cbiAgICAgICBmdW5jdGlvbiBmb3JtYXQodmFsKSB7XG4gICAgICAgICAgIHJldHVybiAodmFsPDEwID8gJzAnIDogJycpICsgdmFsO1xuICAgICAgIH1cblxuICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAvIDM2MDApO1xuICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoKGlucHV0IC8gMTAwMCkgJSAzNjAwKSAvIDYwKTtcbiAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgJSA2MCk7XG4gICAgICAgcmV0dXJuIGZvcm1hdChoKSArIFwiOlwiICsgZm9ybWF0KG0pICsgXCI6XCIgKyBmb3JtYXQocyk7XG4gICB9XG5cbn07XG5cblRpbWVGaWx0ZXIuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUaW1lRmlsdGVyO1xuIiwidmFyIEhlYWRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHVzZXJNb2RlbCkge1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gdXNlck1vZGVsO1xuXG4gICAgJHNjb3BlLmxvZ2luUGFyYW1zID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUudXNlclBhcmFtcyA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG4gICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICBsYXN0X25hbWU6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKGxvZ2luUGFyYW1zKSB7XG4gICAgICAgICRsb2cubG9nKGxvZ2luUGFyYW1zKTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiTG9naW5FdmVudFwiLCBsb2dpblBhcmFtcyk7XG4gICAgfTtcblxuICAgICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmxvZ2luUGFyYW1zID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIkxvZ291dEV2ZW50XCIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgJGxvZy5sb2codXNlclBhcmFtcyk7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaCgnQ3JlYXRlVXNlckV2ZW50JywgeyB1c2VyUGFyYW1zOiB1c2VyUGFyYW1zfSApO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZ2V0Q3VycmVudFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdG9kbzogc3dpdGNoIHZpZXdzIG9ubHkuIHlvdSBhbHJlYWR5IGhhdmUgdGhlIHVzZXJcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5IZWFkZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJDb250cm9sbGVyO1xuIiwiKGZ1bmN0aW9uKCl7dmFyIEFwcGxpY2F0aW9uU2VydmljZSA9XG4gICAgZnVuY3Rpb24oJHdpbmRvdywgJGxvZywgJGNvbW1hbmd1bGFyKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBBcHBsaWNhdGlvbiBTdGFydHVwIFByb2Nlc3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhcnR1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJzdGFydGluZyB0aGUgYXBwLi4uXCIpO1xuICAgICAgICAgICAgc3RhcnR1cFByb2Nlc3MoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3RhcnR1cFByb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiZXhlY3V0aW5nIHN0YXJ0dXAgcHJvY2Vzcy4uLlwiKVxuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAkY29tbWFuZ3VsYXIuZGlzcGF0Y2goXCJHZXRDdXJyZW50VXNlckV2ZW50XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiQXBwbGljYXRpb25TZXJ2aWNlIGluaXQgYXBwbGljYXRpb24gc2VydmljZVwiKTtcblxuICAgICAgICB9O1xuICAgICAgICBpbml0KCk7XG5cbiAgICB9O1xuXG5BcHBsaWNhdGlvblNlcnZpY2UuJGluamVjdCA9IFsnJHdpbmRvdycsICckbG9nJywgJyRjb21tYW5ndWxhciddO1xubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvblNlcnZpY2U7XG5cbn0pKCkiXX0=
;