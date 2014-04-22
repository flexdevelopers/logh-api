require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('JJed0N');
},{}],"JJed0N":[function(require,module,exports){
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
    "          <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In <strong class=\"caret\"></strong></a>\n" +
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
    $urlRouterProvider.otherwise('/app/main');
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










},{"app-templates":"JJed0N","./modules/main":2,"./common/modules/header":3,"./common/aspects":4,"./common/models":5,"./common/api":6,"./common/command":7,"./common/service/application":8,"./common/filters":9}],2:[function(require,module,exports){

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
},{"./MainController":10}],4:[function(require,module,exports){

require("./TestAspect");

module.exports = angular.module('loghApp.aspects', [])
    .config( function() {

       //TODO aspect config if necessary
    }
);
},{"./TestAspect":11}],5:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
;
},{"./UserModel":12}],6:[function(require,module,exports){
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

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand').add('GetCurrentUserCommand');

        $commangularProvider.mapTo('LogoutEvent').asSequence()
            .add('LogoutCommand');

        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');

    }
);


},{"./LoginCommand":15,"./LogoutCommand":16,"./GetCurrentUserCommand":17}],9:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //models
    .filter('timeFilter', require('./TimeFilter'))
;

},{"./TimeFilter":18}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":19}],8:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":20}],10:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){

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

};

UserService.$inject = ['$http', '$log', '$window', 'apiConfig', 'userModel'];
module.exports = UserService;
},{}],15:[function(require,module,exports){

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



},{}],16:[function(require,module,exports){

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

},{}],19:[function(require,module,exports){
var HeaderController = function($scope, $log, userModel) {

    $scope.userData = userModel;

    $scope.loginParams = {
        email: '',
        password: ''
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

},{}],20:[function(require,module,exports){
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50Ly50bXAvYXBwLXRlbXBsYXRlcy5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9tYWluL2luZGV4LmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL2luZGV4LmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvaW5kZXguanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvaW5kZXguanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24vaW5kZXguanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9tYWluL01haW5Db250cm9sbGVyLmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL1Rlc3RBc3BlY3QuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9Vc2VyTW9kZWwuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9BcGlDb25maWcuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9Mb2dpbkNvbW1hbmQuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvTG9nb3V0Q29tbWFuZC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9HZXRDdXJyZW50VXNlckNvbW1hbmQuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvVGltZUZpbHRlci5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvblNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLnRlbXBsYXRlcycsIFsnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsICdjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbCcsICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsICdtb2R1bGVzL21haW4vbWFpbi50cGwuaHRtbCddKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLFxuICAgIFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0XFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImlzQ29sbGFwc2VkID0gIWlzQ29sbGFwc2VkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCIjXFxcIj5sb3Nlb3Jnb2hvbWUuY29tPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjb2xsYXBzZT1cXFwiaXNDb2xsYXBzZWRcXFwiIGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgYnMtanMtbmF2YmFyLWNvbGxhcHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgbmctc2hvdz1cXFwidXNlckRhdGEudXNlci5sb2FkZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+e3t1c2VyRGF0YS51c2VyLmVtYWlsfX0gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBuZy1jbGljaz1cXFwiZ2V0Q3VycmVudFVzZXIoKVxcXCI+RWRpdCBQcm9maWxlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIG5nLWNsaWNrPVxcXCJsb2dvdXQoKVxcXCI+U2lnbiBPdXQ8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgbmctc2hvdz1cXFwiIXVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlNpZ24gSW4gPHN0cm9uZyBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Ryb25nPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxmb3JtIHJvbGU9XFxcImZvcm1cXFwiIG5nLXN1Ym1pdD1cXFwibG9naW4obG9naW5QYXJhbXMpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgZW1haWxcXFwiIG5nLW1vZGVsPVxcXCJsb2dpblBhcmFtcy5lbWFpbFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIG5nLW1vZGVsPVxcXCJsb2dpblBhcmFtcy5wYXNzd29yZFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+PCEtLSAvLm5hdi1jb2xsYXBzZSAtLT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PjwhLS0gLy5jb250YWluZXItZmx1aWQgLS0+XFxuXCIgK1xuICAgIFwiPC9uYXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL3RlbXBsYXRlcy9mb290ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwPuKZpSBUaGlzIGlzIHRoZSBmb290ZXI8L3A+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDwhLS0gSGVhZGVyIC0tPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IHVpLXZpZXc9XFxcImhlYWRlclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDwhLS0gQ29udGVudCAtLT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFZpZXdcXFwiIHVpLXZpZXc9XFxcImNvbnRlbnRcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tIEZvb3RlciAtLT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiB1aS12aWV3PVxcXCJmb290ZXJcXFwiIGNsYXNzPVxcXCJyb3cgZm9vdGVyLXJvd1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9tYWluL21haW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDE+TG9zZXJzIFdhbnRlZDwvaDE+XFxuXCIgK1xuICAgIFwiICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aW1nIHNyYz1cXFwicmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvbG9zZXIucG5nXFxcIiBhbHQ9XFxcIkhlbGxvIExvc2VyXFxcIj48YnI+XFxuXCIgK1xuICAgIFwiICAgIDwvcD5cXG5cIiArXG4gICAgXCIgICAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tbGdcXFwiPkpvaW4gYSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tbGdcXFwiPkNyZWF0ZSBhIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLTxkaXYgdWktdmlldz1cXFwiY29udGVudFxcXCI+PC9kaXY+LS0+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnYXBwLXRlbXBsYXRlcycpO1xuXG5cbnZhciBBcHAgPSBmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL21haW4nKTtcbn07XG5cbkFwcC4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInXTtcblxudmFyIGxvZ2hBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcCcsIFtcbiAgICAnbmdDb29raWVzJyxcbiAgICAnbmdSZXNvdXJjZScsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICduZ1JvdXRlJyxcbiAgICAnY29tbWFuZ3VsYXInLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5ib290c3RyYXAnLFxuICAgICdhcHAudGVtcGxhdGVzJyxcbiAgICAndWkucm91dGVyLnN0YXRlSGVscGVyJyxcblxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9tYWluJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvaGVhZGVyJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2FzcGVjdHMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZGVscycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXBpJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9jb21tYW5kJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24nKS5uYW1lLFxuXG4gICAgLy9tb2RhbHNcblxuICAgIC8vZmlsdGVyc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2ZpbHRlcnMnKS5uYW1lXG5cbiAgICBdLCBBcHApXG5cbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJ1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICR1cmxSb3V0ZXIsICRsb2csIGFwcGxpY2F0aW9uU2VydmljZSkge1xuICAgICAgICAkbG9nLmxvZyhcIkFwcGxpY2F0aW9uIHN0YXJ0aW5nIHVwLi4uXCIpO1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZpY2Uuc3RhcnR1cCgpO1xuICAgIH0pXG47XG5cbmxvZ2hBcHAuZmFjdG9yeSgnYXV0aEludGVyY2VwdG9yJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRxLCAkd2luZG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcbiAgICAgICAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9LFxuICAgICAgICByZXNwb25zZUVycm9yOiBmdW5jdGlvbiAocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tYWluJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9NYWluQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5tYWluJywge1xuICAgICAgICAgICAgICAgIHVybDogJ21haW4nLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7ICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAuc3RhdGUoJ2FwcC5tYWluLnNvbWVDaGlsZFN0YXRlJywge1xuLy8gICAgICAgICAgICAgICAgdXJsOiAnJyxcbi8vICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc29tZWZlYXR1cmUuc29tZWZlYXR1cmUudHBsLmh0bWwnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU29tZUZlYXR1cmVDb250cm9sbGVyJ1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7IiwiXG5yZXF1aXJlKFwiLi9UZXN0QXNwZWN0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFzcGVjdHMnLCBbXSlcbiAgICAuY29uZmlnKCBmdW5jdGlvbigpIHtcblxuICAgICAgIC8vVE9ETyBhc3BlY3QgY29uZmlnIGlmIG5lY2Vzc2FyeVxuICAgIH1cbik7IiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIG1vZGVsc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLm1vZGVscycsIFtdKVxuICAgIC8vbW9kZWxzXG4gICAgLnNlcnZpY2UoJ3VzZXJNb2RlbCcsIHJlcXVpcmUoJy4vVXNlck1vZGVsJykpXG47IiwiLyoqXG4gKiBEZWZpbmUgdGhlIHJlbW90ZSBzZXJ2aWNlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFwaScsIFtdKVxuICAgICAgLmNvbnN0YW50KCdhcGlDb25maWcnLCByZXF1aXJlKCcuL0FwaUNvbmZpZycpKVxuICAgICAgLnNlcnZpY2UoJ3VzZXJTZXJ2aWNlJywgcmVxdWlyZSgnLi9Vc2VyU2VydmljZScpKVxuOyIsIlxuLy9hcHBsaWNhdGlvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9Mb2dpbkNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vTG9nb3V0Q29tbWFuZCcpO1xucmVxdWlyZSgnLi9HZXRDdXJyZW50VXNlckNvbW1hbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5jb21tYW5kQ29uZmlnJywgW10pXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkY29tbWFuZ3VsYXJQcm92aWRlcikge1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdMb2dpbkV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdMb2dpbkNvbW1hbmQnKS5hZGQoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZCcpO1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdMb2dvdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnTG9nb3V0Q29tbWFuZCcpO1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdHZXRDdXJyZW50VXNlckV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnKTtcblxuICAgIH1cbik7XG5cbiIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBmaWx0ZXJzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZmlsdGVycycsIFtdKVxuICAgIC8vbW9kZWxzXG4gICAgLmZpbHRlcigndGltZUZpbHRlcicsIHJlcXVpcmUoJy4vVGltZUZpbHRlcicpKVxuO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5oZWFkZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignSGVhZGVyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vSGVhZGVyQ29udHJvbGxlcicpKSIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBzZXJ2aWNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guYXBwbGljYXRpb24nLCBbXSlcbiAgICAuc2VydmljZSgnYXBwbGljYXRpb25TZXJ2aWNlJywgcmVxdWlyZSgnLi9BcHBsaWNhdGlvblNlcnZpY2UnKSk7IiwiLyoqXG4gKiBDb250cm9sbGVyIGZvciB0aGUgbWFpbiBhcHBsaWNhdGlvbiBzY3JlZW4gdGhhdCBjb250cm9scyB0aGUgaGVhZGVyIGFuZCBtZW51LlxuICogQHBhcmFtICRzY29wZVxuICogQHBhcmFtICR3aW5kb3dcbiAqIEBwYXJhbSAkbG9jYXRpb25cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICR3aW5kb3csICRsb2NhdGlvbiwgJGNvbW1hbmd1bGFyLCB1c2VyTW9kZWwpIHtcblxuICAgICRzY29wZS51c2VyID0gdXNlck1vZGVsLnVzZXI7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAvL2Rvc3R1ZmZcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWluIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5NYWluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHdpbmRvdycsICckbG9jYXRpb24nLCAnJGNvbW1hbmd1bGFyJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNYWluQ29udHJvbGxlcjtcbiIsIlxuY29tbWFuZ3VsYXIuZXZlbnRBc3BlY3QoJ0BCZWZvcmUoLy4qLyknLCBmdW5jdGlvbihwcm9jZXNzb3IsICRsb2cpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZSA6IGZ1bmN0aW9uICgpIHtcblxuLy8gICAgICAgICAgICBpZiAoQ3VycmVudFRvZG8udG9kby5sZW5ndGggPT09IDApIHtcbi8vICAgICAgICAgICAgICAgIHByb2Nlc3Nvci5jYW5jZWwoJ0VtcHR5IHRvZG8nKTtcbi8vICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8kbG9nLmxvZygnVGVzdCBBc3BlY3QnKTtcblxuICAgICAgICB9XG4gICAgfVxufSk7IiwiXG4vKipcbiAqIFVzZXIgTW9kZWwgdG8gaG9sZCB0aGUgdXNlciBkZXRhaWxzXG5cbiAqIEBwYXJhbSAkbG9nXG4gKi9cbnZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbigkd2luZG93LCAkbG9nKSB7XG5cbiAgICB2YXIgdXNlciA9IHt9O1xuICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgdXNlci5pZCA9ICcnO1xuICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICB1c2VyLmxhc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRsb2cubG9nKFwiVXNlck1vZGVsOiBlbWFpbDogXCIgKyB1c2VyLmVtYWlsKTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgdXNlciA9IHt9O1xuICAgICAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB1c2VyLmlkID0gJyc7XG4gICAgICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICAgICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyB1c2VyIG1vZGVsXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Vc2VyTW9kZWwuJGluamVjdCA9IFsnJHdpbmRvdycsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJNb2RlbDsiLCIvKlxuICogIEdsb2JhbCBjb25maWcgZm9yIHJlbW90ZSBzZXJ2aWNlc1xuICovXG5cbnZhciBBcGlDb25maWcgPSAge1xuICAgIGJhc2VVUkw6ICcvYXBpLydcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBpQ29uZmlnO1xuIiwidmFyIFVzZXJTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICR3aW5kb3csIGFwaUNvbmZpZywgdXNlck1vZGVsKSB7XG5cbiAgICB0aGlzLmxvZ2luID0gZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICAgICRsb2cubG9nKCdVc2VyU2VydmljZTogbG9naW4nKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KFxuICAgICAgICAgICAgYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlc3Npb25zXCIsXG4gICAgICAgICAgICB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogUE9TVCAvYXBpL3Nlc3Npb25zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBQT1NUIC9hcGkvc2Vzc2lvbnMgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9nLmxvZygnVXNlclNlcnZpY2U6IGxvZ291dCcpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmRlbGV0ZShcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgJ3Nlc3Npb25zL2Rlc3Ryb3knKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IERFTEVURSAvYXBpL3Nlc3Npb25zL2Rlc3Ryb3kgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IERFTEVURSAvYXBpL3Nlc3Npb25zL2Rlc3Ryb3kgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvZy5sb2coJ1VzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlcicpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnMvY3VycmVudFwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IGdldCBjdXJyZW50IHVzZXIgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBjdXJyZW50IHVzZXIgZGF0YTpcIiArIGRhdGEpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogZ2V0IGN1cnJlbnQgdXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5Vc2VyU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyR3aW5kb3cnLCAnYXBpQ29uZmlnJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyU2VydmljZTsiLCJcbmNvbW1hbmd1bGFyLmNyZWF0ZSgnTG9naW5Db21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKCdMb2dpbkNvbW1hbmQ6IEF1dGhlbnRpY2F0aW5nIHVzZXInKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5sb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJMb2dpbkNvbW1hbmQ6IGVycm9yIGluIGxvZ2luOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkxvZ2luQ29tbWFuZDogbG9naW4gc3VjY2Vzc2Z1bCBcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn0pO1xuXG5cbiIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdMb2dvdXRDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coJ0xvZ291dENvbW1hbmQ6IExvZ291dCB1c2VyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJMb2dvdXRDb21tYW5kOiBlcnJvciBpbiBsb2dvdXQ6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiTG9nb3V0Q29tbWFuZDogbG9nb3V0IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnLFxuICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbG9nLmxvZygnR2V0Q3VycmVudFVzZXJDb21tYW5kOiBHZXR0aW5nIGN1cnJlbnQgdXNlciBkZXRhaWxzLi4uJyk7XG4gICAgICAgICAgICB2YXIgdXNlclByb21pc2UgPSB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJQcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yIDogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiR2V0Q3VycmVudFVzZXJDb21tYW5kOiBlcnJvciBpbiBHZXRDdXJyZW50VXNlcjogXCIgKyBlcnJvci5kYXRhKTtcbi8vICAgICAgICAgICAgJHN0YXRlLmdvKCdhcHAucmVnaXN0cmF0aW9uLmxvZ2luJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0IDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkdldEN1cnJlbnRVc2VyQ29tbWFuZDogY3VycmVudCB1c2VyIGRhdGEgcmVzdWx0IGlzIFwiICsgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7IiwiXG52YXIgVGltZUZpbHRlciA9IGZ1bmN0aW9uKCRsb2cpIHtcbiAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuXG4gICAgICAgaWYgKGlucHV0IDwgMSkge1xuICAgICAgICAgICByZXR1cm4gXCIwMDowMDowMFwiO1xuICAgICAgIH1cblxuICAgICAgIGZ1bmN0aW9uIGZvcm1hdCh2YWwpIHtcbiAgICAgICAgICAgcmV0dXJuICh2YWw8MTAgPyAnMCcgOiAnJykgKyB2YWw7XG4gICAgICAgfVxuXG4gICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApIC8gMzYwMCk7XG4gICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKCgoaW5wdXQgLyAxMDAwKSAlIDM2MDApIC8gNjApO1xuICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAlIDYwKTtcbiAgICAgICByZXR1cm4gZm9ybWF0KGgpICsgXCI6XCIgKyBmb3JtYXQobSkgKyBcIjpcIiArIGZvcm1hdChzKTtcbiAgIH1cblxufTtcblxuVGltZUZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVGaWx0ZXI7XG4iLCJ2YXIgSGVhZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgICAkc2NvcGUudXNlckRhdGEgPSB1c2VyTW9kZWw7XG5cbiAgICAkc2NvcGUubG9naW5QYXJhbXMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKGxvZ2luUGFyYW1zKSB7XG4gICAgICAgICRsb2cubG9nKGxvZ2luUGFyYW1zKTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiTG9naW5FdmVudFwiLCBsb2dpblBhcmFtcyk7XG4gICAgfTtcblxuICAgICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmxvZ2luUGFyYW1zID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIkxvZ291dEV2ZW50XCIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZ2V0Q3VycmVudFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdG9kbzogc3dpdGNoIHZpZXdzIG9ubHkuIHlvdSBhbHJlYWR5IGhhdmUgdGhlIHVzZXJcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5IZWFkZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJDb250cm9sbGVyO1xuIiwiKGZ1bmN0aW9uKCl7dmFyIEFwcGxpY2F0aW9uU2VydmljZSA9XG4gICAgZnVuY3Rpb24oJHdpbmRvdywgJGxvZywgJGNvbW1hbmd1bGFyKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBBcHBsaWNhdGlvbiBTdGFydHVwIFByb2Nlc3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhcnR1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJzdGFydGluZyB0aGUgYXBwLi4uXCIpO1xuICAgICAgICAgICAgc3RhcnR1cFByb2Nlc3MoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3RhcnR1cFByb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiZXhlY3V0aW5nIHN0YXJ0dXAgcHJvY2Vzcy4uLlwiKVxuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAkY29tbWFuZ3VsYXIuZGlzcGF0Y2goXCJHZXRDdXJyZW50VXNlckV2ZW50XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiQXBwbGljYXRpb25TZXJ2aWNlIGluaXQgYXBwbGljYXRpb24gc2VydmljZVwiKTtcblxuICAgICAgICB9O1xuICAgICAgICBpbml0KCk7XG5cbiAgICB9O1xuXG5BcHBsaWNhdGlvblNlcnZpY2UuJGluamVjdCA9IFsnJHdpbmRvdycsICckbG9nJywgJyRjb21tYW5ndWxhciddO1xubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvblNlcnZpY2U7XG5cbn0pKCkiXX0=
;