require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('JJed0N');
},{}],"JJed0N":[function(require,module,exports){
angular.module('app.templates', ['common/modules/header/header.tpl.html', 'common/templates/footer.tpl.html', 'common/templates/master.tpl.html', 'modules/main/main.tpl.html']);

angular.module("common/modules/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/header/header.tpl.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button class=\"navbar-toggle\" type=\"button\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#\">loseorgohome.com</a>\n" +
    "    </div>\n" +
    "    <div collapse=\"isCollapsed\" class=\"navbar-collapse bs-js-navbar-collapse\">\n" +
    "      <ul ng-show=\"userData.auth.authenticated\" class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{userData.user.email}} <b class=\"caret\"></b></a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\" ng-click=\"getUser()\">Edit Profile</a></li>\n" +
    "            <li><a href=\"#\" ng-click=\"logout()\">Sign Out</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul ng-show=\"!userData.auth.authenticated\" class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In <strong class=\"caret\"></strong></a>\n" +
    "          <div class=\"dropdown-menu panel panel-default\">\n" +
    "            <div class=\"panel-body\">\n" +
    "              <form role=\"form\" ng-submit=\"submit(loginParams); $event.stopPropagation();\">\n" +
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
    "</nav>\n" +
    "");
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

    .run(function($rootScope, $urlRouter, $log) {
        $log.log("Application run...");
        //inject a service here if you want to run some startup processes e.g.
        //applicationService.startup();
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










},{"app-templates":"JJed0N","./modules/main":2,"./common/modules/header":3,"./common/aspects":4,"./common/models":5,"./common/api":6,"./common/command":7,"./common/filters":8}],2:[function(require,module,exports){

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
},{"./MainController":9}],4:[function(require,module,exports){

require("./TestAspect");

module.exports = angular.module('loghApp.aspects', [])
    .config( function() {

       //TODO aspect config if necessary
    }
);
},{"./TestAspect":10}],5:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
;
},{"./UserModel":11}],6:[function(require,module,exports){
/**
 * Define the remote services
 */
module.exports = angular.module('loghApp.api', [])
      .constant('apiConfig', require('./ApiConfig'))
      .service('userService', require('./UserService'))
;
},{"./ApiConfig":12,"./UserService":13}],7:[function(require,module,exports){

//application commands
require('./GetUserCommand');
require('./LoginCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        $commangularProvider.mapTo('GetUserEvent').asSequence()
            .add('GetUserCommand');

        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand');

    }
);


},{"./GetUserCommand":14,"./LoginCommand":15}],8:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //models
    .filter('timeFilter', require('./TimeFilter'))
;

},{"./TimeFilter":16}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":17}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){

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
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],11:[function(require,module,exports){

/**
 * User Model to hold the user details

 * @param $log
 */
var UserModel = function($log) {

    var auth = {};
    auth.authenticated = false;
    auth.failure = false;

    this.auth = auth;

    var user = {};
    user.loaded = false;
    user.id = '';
    user.token = '';
    user.email = '';
    user.first_name = '';
    user.last_name = '';
    user.admin = false;

    this.user = user;

    this.setAuthenticated = function(value) {
        auth.authenticated = value;
        auth.failure = false;
    };

    this.setAuthenticationFailure = function() {
        auth.failure = true;
    };

    this.setUser = function(userData) {
        user.loaded = true;
        user = angular.extend(user, userData);
        $log.log("UserModel: email: " + user.email);
    };

    this.reset = function() {
        auth = {};
        auth.authenticated = false;
        auth.failure = false;

        this.auth = auth;

        user = {};
        user.loaded = false;
        user.id = '';
        user.token = '';
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

UserModel.$inject = ['$log'];
module.exports = UserModel;
},{}],13:[function(require,module,exports){
/**
 * User service that gets the user data
 * @param $http
 * @param $log
 * @param ApiConfig
 */
var UserService = function($http, $log, $window, apiConfig, userModel) {


    this.getUser = function(userId) {
        $log.log('UserService: getUser');
        var promise = $http.get(apiConfig.baseURL + "users/" + userId)
            .success(function(data) {
                $log.log("UserService: get user success");
                $log.log("UserService: user data:" + data);
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: get user failed");
                return data;
            });

        return promise;
    };

    this.login = function(email, password) {
        $log.log('UserService: login');
        var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.log("UserService: POST /api/sessions success");
                $window.sessionStorage.token = data.token;
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: POST /api/sessions failure");
                return data;
            });

        return promise;
    };


};

UserService.$inject = ['$http', '$log', '$window', 'apiConfig', 'userModel'];
module.exports = UserService;
},{}],14:[function(require,module,exports){

commangular.create('GetUserCommand',
   function($log, userService, userModel) {

    return {

        execute: function(userId) {
            $log.log('GetUserCommand: Getting user details...');
            var userPromise = userService.getUser(userId);
            return userPromise;
        },
        onError : function(error) {
            $log.log("GetUserCommand: error in GetUser: " + error.data);
//            $state.go('app.registration.login');
        },
        onResult : function(result) {
            $log.log("GetUserCommand: user data result is " + result);
        }


    }
});
},{}],15:[function(require,module,exports){

commangular.create('LoginCommand',
    function($log, $commangular, userService, userModel) {

    return {

        execute: function(email, password) {
            $log.log('LoginCommand: Authenticating user');
            return userService.login(email, password);
        },
        onError: function(error) {
            $log.log("LoginCommand: error in login: " + error.data);
            userModel.setAuthenticationFailure();
        },
        onResult: function(result) {
            $log.log("LoginCommand: login successful ");
            userModel.setAuthenticated(true);
        }

    }
});



},{}],16:[function(require,module,exports){

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

},{}],17:[function(require,module,exports){
/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param userModel
 * @constructor
 */
var HeaderController = function($scope, $log, userModel) {

    $scope.alerts = [{
        type: 'danger',
        msg: 'Login Failure'
    }];

    $scope.userData = userModel;

    $scope.loginParams = {
        email: '',
        password: ''
    };

    $scope.submit = function(loginParams) {
        $log.log(loginParams);
        $scope.dispatch("LoginEvent", loginParams);
    };

    $scope.getUser = function() {
        $scope.dispatch("GetUserEvent", { userId: userModel.user.id });
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

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50Ly50bXAvYXBwLXRlbXBsYXRlcy5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9tYWluL2luZGV4LmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL2luZGV4LmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvaW5kZXguanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvaW5kZXguanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9tYWluL01haW5Db250cm9sbGVyLmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL1Rlc3RBc3BlY3QuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9BcGlDb25maWcuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9Vc2VyTW9kZWwuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9HZXRVc2VyQ29tbWFuZC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9Mb2dpbkNvbW1hbmQuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvVGltZUZpbHRlci5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAudGVtcGxhdGVzJywgWydjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJywgJ2NvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sJywgJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJywgJ21vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sJ10pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsXG4gICAgXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCIjXFxcIj5sb3Nlb3Jnb2hvbWUuY29tPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjb2xsYXBzZT1cXFwiaXNDb2xsYXBzZWRcXFwiIGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgYnMtanMtbmF2YmFyLWNvbGxhcHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgbmctc2hvdz1cXFwidXNlckRhdGEuYXV0aC5hdXRoZW50aWNhdGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPnt7dXNlckRhdGEudXNlci5lbWFpbH19IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgbmctY2xpY2s9XFxcImdldFVzZXIoKVxcXCI+RWRpdCBQcm9maWxlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIG5nLWNsaWNrPVxcXCJsb2dvdXQoKVxcXCI+U2lnbiBPdXQ8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgbmctc2hvdz1cXFwiIXVzZXJEYXRhLmF1dGguYXV0aGVudGljYXRlZFxcXCIgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIj5TaWduIEluIDxzdHJvbmcgY2xhc3M9XFxcImNhcmV0XFxcIj48L3N0cm9uZz48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8Zm9ybSByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInN1Ym1pdChsb2dpblBhcmFtcyk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcImxvZ2luUGFyYW1zLmVtYWlsXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCIgbmctbW9kZWw9XFxcImxvZ2luUGFyYW1zLnBhc3N3b3JkXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+U3VibWl0PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj48IS0tIC8ubmF2LWNvbGxhcHNlIC0tPlxcblwiICtcbiAgICBcIiAgPC9kaXY+PCEtLSAvLmNvbnRhaW5lci1mbHVpZCAtLT5cXG5cIiArXG4gICAgXCI8L25hdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9mb290ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHA+4pmlIFRoaXMgaXMgdGhlIGZvb3RlcjwvcD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLSBIZWFkZXIgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgdWktdmlldz1cXFwiaGVhZGVyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLSBDb250ZW50IC0tPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50Vmlld1xcXCIgdWktdmlldz1cXFwiY29udGVudFxcXCIgY2xhc3M9XFxcInJvd1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDwhLS0gRm9vdGVyIC0tPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IHVpLXZpZXc9XFxcImZvb3RlclxcXCIgY2xhc3M9XFxcInJvdyBmb290ZXItcm93XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9tYWluL21haW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL21haW4vbWFpbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMT5Mb3NlcnMgV2FudGVkPC9oMT5cXG5cIiArXG4gICAgXCIgICAgPHAgY2xhc3M9XFxcImxlYWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxpbWcgc3JjPVxcXCJyZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9sb3Nlci5wbmdcXFwiIGFsdD1cXFwiSGVsbG8gTG9zZXJcXFwiPjxicj5cXG5cIiArXG4gICAgXCIgICAgPC9wPlxcblwiICtcbiAgICBcIiAgICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1sZ1xcXCI+Sm9pbiBhIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1sZ1xcXCI+Q3JlYXRlIGEgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8IS0tPGRpdiB1aS12aWV3PVxcXCJjb250ZW50XFxcIj48L2Rpdj4tLT5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCdhcHAtdGVtcGxhdGVzJyk7XG5cblxudmFyIEFwcCA9IGZ1bmN0aW9uKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbWFpbicpO1xufTtcblxuQXBwLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG52YXIgbG9naEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwJywgW1xuICAgICduZ0Nvb2tpZXMnLFxuICAgICduZ1Jlc291cmNlJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ25nUm91dGUnLFxuICAgICdjb21tYW5ndWxhcicsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgJ2FwcC50ZW1wbGF0ZXMnLFxuICAgICd1aS5yb3V0ZXIuc3RhdGVIZWxwZXInLFxuXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL21haW4nKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9oZWFkZXInKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXNwZWN0cycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kZWxzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9hcGknKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2NvbW1hbmQnKS5uYW1lLFxuXG4gICAgLy9tb2RhbHNcblxuICAgIC8vZmlsdGVyc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2ZpbHRlcnMnKS5uYW1lXG5cbiAgICBdLCBBcHApXG5cbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJ1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICR1cmxSb3V0ZXIsICRsb2cpIHtcbiAgICAgICAgJGxvZy5sb2coXCJBcHBsaWNhdGlvbiBydW4uLi5cIik7XG4gICAgICAgIC8vaW5qZWN0IGEgc2VydmljZSBoZXJlIGlmIHlvdSB3YW50IHRvIHJ1biBzb21lIHN0YXJ0dXAgcHJvY2Vzc2VzIGUuZy5cbiAgICAgICAgLy9hcHBsaWNhdGlvblNlcnZpY2Uuc3RhcnR1cCgpO1xuICAgIH0pXG47XG5cbmxvZ2hBcHAuZmFjdG9yeSgnYXV0aEludGVyY2VwdG9yJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRxLCAkd2luZG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcbiAgICAgICAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9LFxuICAgICAgICByZXNwb25zZUVycm9yOiBmdW5jdGlvbiAocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tYWluJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9NYWluQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5tYWluJywge1xuICAgICAgICAgICAgICAgIHVybDogJ21haW4nLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7ICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAuc3RhdGUoJ2FwcC5tYWluLnNvbWVDaGlsZFN0YXRlJywge1xuLy8gICAgICAgICAgICAgICAgdXJsOiAnJyxcbi8vICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc29tZWZlYXR1cmUuc29tZWZlYXR1cmUudHBsLmh0bWwnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU29tZUZlYXR1cmVDb250cm9sbGVyJ1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7IiwiXG5yZXF1aXJlKFwiLi9UZXN0QXNwZWN0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFzcGVjdHMnLCBbXSlcbiAgICAuY29uZmlnKCBmdW5jdGlvbigpIHtcblxuICAgICAgIC8vVE9ETyBhc3BlY3QgY29uZmlnIGlmIG5lY2Vzc2FyeVxuICAgIH1cbik7IiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIG1vZGVsc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLm1vZGVscycsIFtdKVxuICAgIC8vbW9kZWxzXG4gICAgLnNlcnZpY2UoJ3VzZXJNb2RlbCcsIHJlcXVpcmUoJy4vVXNlck1vZGVsJykpXG47IiwiLyoqXG4gKiBEZWZpbmUgdGhlIHJlbW90ZSBzZXJ2aWNlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFwaScsIFtdKVxuICAgICAgLmNvbnN0YW50KCdhcGlDb25maWcnLCByZXF1aXJlKCcuL0FwaUNvbmZpZycpKVxuICAgICAgLnNlcnZpY2UoJ3VzZXJTZXJ2aWNlJywgcmVxdWlyZSgnLi9Vc2VyU2VydmljZScpKVxuOyIsIlxuLy9hcHBsaWNhdGlvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9HZXRVc2VyQ29tbWFuZCcpO1xucmVxdWlyZSgnLi9Mb2dpbkNvbW1hbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5jb21tYW5kQ29uZmlnJywgW10pXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkY29tbWFuZ3VsYXJQcm92aWRlcikge1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdHZXRVc2VyRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ0dldFVzZXJDb21tYW5kJyk7XG5cbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ0xvZ2luRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ0xvZ2luQ29tbWFuZCcpO1xuXG4gICAgfVxuKTtcblxuIiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIGZpbHRlcnNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5maWx0ZXJzJywgW10pXG4gICAgLy9tb2RlbHNcbiAgICAuZmlsdGVyKCd0aW1lRmlsdGVyJywgcmVxdWlyZSgnLi9UaW1lRmlsdGVyJykpXG47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmhlYWRlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIZWFkZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9IZWFkZXJDb250cm9sbGVyJykpIiwiLyoqXG4gKiBDb250cm9sbGVyIGZvciB0aGUgbWFpbiBhcHBsaWNhdGlvbiBzY3JlZW4gdGhhdCBjb250cm9scyB0aGUgaGVhZGVyIGFuZCBtZW51LlxuICogQHBhcmFtICRzY29wZVxuICogQHBhcmFtICR3aW5kb3dcbiAqIEBwYXJhbSAkbG9jYXRpb25cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICR3aW5kb3csICRsb2NhdGlvbiwgJGNvbW1hbmd1bGFyLCB1c2VyTW9kZWwpIHtcblxuICAgICRzY29wZS51c2VyID0gdXNlck1vZGVsLnVzZXI7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAvL2Rvc3R1ZmZcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWluIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5NYWluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHdpbmRvdycsICckbG9jYXRpb24nLCAnJGNvbW1hbmd1bGFyJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNYWluQ29udHJvbGxlcjtcbiIsIlxuY29tbWFuZ3VsYXIuZXZlbnRBc3BlY3QoJ0BCZWZvcmUoLy4qLyknLCBmdW5jdGlvbihwcm9jZXNzb3IsICRsb2cpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZSA6IGZ1bmN0aW9uICgpIHtcblxuLy8gICAgICAgICAgICBpZiAoQ3VycmVudFRvZG8udG9kby5sZW5ndGggPT09IDApIHtcbi8vICAgICAgICAgICAgICAgIHByb2Nlc3Nvci5jYW5jZWwoJ0VtcHR5IHRvZG8nKTtcbi8vICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8kbG9nLmxvZygnVGVzdCBBc3BlY3QnKTtcblxuICAgICAgICB9XG4gICAgfVxufSk7IiwiLypcbiAqICBHbG9iYWwgY29uZmlnIGZvciByZW1vdGUgc2VydmljZXNcbiAqL1xuXG52YXIgQXBpQ29uZmlnID0gIHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUNvbmZpZztcbiIsIlxuLyoqXG4gKiBVc2VyIE1vZGVsIHRvIGhvbGQgdGhlIHVzZXIgZGV0YWlsc1xuXG4gKiBAcGFyYW0gJGxvZ1xuICovXG52YXIgVXNlck1vZGVsID0gZnVuY3Rpb24oJGxvZykge1xuXG4gICAgdmFyIGF1dGggPSB7fTtcbiAgICBhdXRoLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICBhdXRoLmZhaWx1cmUgPSBmYWxzZTtcblxuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG5cbiAgICB2YXIgdXNlciA9IHt9O1xuICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgdXNlci5pZCA9ICcnO1xuICAgIHVzZXIudG9rZW4gPSAnJztcbiAgICB1c2VyLmVtYWlsID0gJyc7XG4gICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgdXNlci5sYXN0X25hbWUgPSAnJztcbiAgICB1c2VyLmFkbWluID0gZmFsc2U7XG5cbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuXG4gICAgdGhpcy5zZXRBdXRoZW50aWNhdGVkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgYXV0aC5hdXRoZW50aWNhdGVkID0gdmFsdWU7XG4gICAgICAgIGF1dGguZmFpbHVyZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNldEF1dGhlbnRpY2F0aW9uRmFpbHVyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhdXRoLmZhaWx1cmUgPSB0cnVlO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRsb2cubG9nKFwiVXNlck1vZGVsOiBlbWFpbDogXCIgKyB1c2VyLmVtYWlsKTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhdXRoID0ge307XG4gICAgICAgIGF1dGguYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICBhdXRoLmZhaWx1cmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xuXG4gICAgICAgIHVzZXIgPSB7fTtcbiAgICAgICAgdXNlci5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdXNlci5pZCA9ICcnO1xuICAgICAgICB1c2VyLnRva2VuID0gJyc7XG4gICAgICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICAgICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyB1c2VyIG1vZGVsXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Vc2VyTW9kZWwuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyTW9kZWw7IiwiLyoqXG4gKiBVc2VyIHNlcnZpY2UgdGhhdCBnZXRzIHRoZSB1c2VyIGRhdGFcbiAqIEBwYXJhbSAkaHR0cFxuICogQHBhcmFtICRsb2dcbiAqIEBwYXJhbSBBcGlDb25maWdcbiAqL1xudmFyIFVzZXJTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICR3aW5kb3csIGFwaUNvbmZpZywgdXNlck1vZGVsKSB7XG5cblxuICAgIHRoaXMuZ2V0VXNlciA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuICAgICAgICAkbG9nLmxvZygnVXNlclNlcnZpY2U6IGdldFVzZXInKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL1wiICsgdXNlcklkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IGdldCB1c2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogdXNlciBkYXRhOlwiICsgZGF0YSk7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnNldFVzZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBnZXQgdXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAkbG9nLmxvZygnVXNlclNlcnZpY2U6IGxvZ2luJyk7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZXNzaW9uc1wiLFxuICAgICAgICAgICAgeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IFBPU1QgL2FwaS9zZXNzaW9ucyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogUE9TVCAvYXBpL3Nlc3Npb25zIGZhaWx1cmVcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG5cbn07XG5cblVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHdpbmRvdycsICdhcGlDb25maWcnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJTZXJ2aWNlOyIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdHZXRVc2VyQ29tbWFuZCcsXG4gICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKHVzZXJJZCkge1xuICAgICAgICAgICAgJGxvZy5sb2coJ0dldFVzZXJDb21tYW5kOiBHZXR0aW5nIHVzZXIgZGV0YWlscy4uLicpO1xuICAgICAgICAgICAgdmFyIHVzZXJQcm9taXNlID0gdXNlclNlcnZpY2UuZ2V0VXNlcih1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJQcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yIDogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiR2V0VXNlckNvbW1hbmQ6IGVycm9yIGluIEdldFVzZXI6IFwiICsgZXJyb3IuZGF0YSk7XG4vLyAgICAgICAgICAgICRzdGF0ZS5nbygnYXBwLnJlZ2lzdHJhdGlvbi5sb2dpbicpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdCA6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJHZXRVc2VyQ29tbWFuZDogdXNlciBkYXRhIHJlc3VsdCBpcyBcIiArIHJlc3VsdCk7XG4gICAgICAgIH1cblxuXG4gICAgfVxufSk7IiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0xvZ2luQ29tbWFuZCcsXG4gICAgZnVuY3Rpb24oJGxvZywgJGNvbW1hbmd1bGFyLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgJGxvZy5sb2coJ0xvZ2luQ29tbWFuZDogQXV0aGVudGljYXRpbmcgdXNlcicpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLmxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkxvZ2luQ29tbWFuZDogZXJyb3IgaW4gbG9naW46IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICB1c2VyTW9kZWwuc2V0QXV0aGVudGljYXRpb25GYWlsdXJlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiTG9naW5Db21tYW5kOiBsb2dpbiBzdWNjZXNzZnVsIFwiKTtcbiAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRBdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgICB9XG5cbiAgICB9XG59KTtcblxuXG4iLCJcbnZhciBUaW1lRmlsdGVyID0gZnVuY3Rpb24oJGxvZykge1xuICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG5cbiAgICAgICBpZiAoaW5wdXQgPCAxKSB7XG4gICAgICAgICAgIHJldHVybiBcIjAwOjAwOjAwXCI7XG4gICAgICAgfVxuXG4gICAgICAgZnVuY3Rpb24gZm9ybWF0KHZhbCkge1xuICAgICAgICAgICByZXR1cm4gKHZhbDwxMCA/ICcwJyA6ICcnKSArIHZhbDtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgLyAzNjAwKTtcbiAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKChpbnB1dCAvIDEwMDApICUgMzYwMCkgLyA2MCk7XG4gICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApICUgNjApO1xuICAgICAgIHJldHVybiBmb3JtYXQoaCkgKyBcIjpcIiArIGZvcm1hdChtKSArIFwiOlwiICsgZm9ybWF0KHMpO1xuICAgfVxuXG59O1xuXG5UaW1lRmlsdGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVGltZUZpbHRlcjtcbiIsIi8qKlxuICogQ29udHJvbGxlciBmb3IgdGhlIG1haW4gYXBwbGljYXRpb24gc2NyZWVuIHRoYXQgY29udHJvbHMgdGhlIGhlYWRlciBhbmQgbWVudS5cbiAqIEBwYXJhbSAkc2NvcGVcbiAqIEBwYXJhbSB1c2VyTW9kZWxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgSGVhZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgICAkc2NvcGUuYWxlcnRzID0gW3tcbiAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgIG1zZzogJ0xvZ2luIEZhaWx1cmUnXG4gICAgfV07XG5cbiAgICAkc2NvcGUudXNlckRhdGEgPSB1c2VyTW9kZWw7XG5cbiAgICAkc2NvcGUubG9naW5QYXJhbXMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbihsb2dpblBhcmFtcykge1xuICAgICAgICAkbG9nLmxvZyhsb2dpblBhcmFtcyk7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIkxvZ2luRXZlbnRcIiwgbG9naW5QYXJhbXMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZ2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJHZXRVc2VyRXZlbnRcIiwgeyB1c2VySWQ6IHVzZXJNb2RlbC51c2VyLmlkIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWFkZXIgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbkhlYWRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlckNvbnRyb2xsZXI7XG4iXX0=
;