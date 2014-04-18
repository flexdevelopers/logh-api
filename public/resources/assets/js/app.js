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
    "      <button type=\"button\" class=\"btn btn-info btn-lg\">\n" +
    "        <span class=\"glyphicon glyphicon-user\"></span> Join a League\n" +
    "      </button>\n" +
    "      <button type=\"button\" class=\"btn btn-info btn-lg\">\n" +
    "        <span class=\"glyphicon glyphicon-plus\"></span> Create a League\n" +
    "      </button>\n" +
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50Ly50bXAvYXBwLXRlbXBsYXRlcy5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9tYWluL2luZGV4LmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL2luZGV4LmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvaW5kZXguanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9pbmRleC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvaW5kZXguanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9tYWluL01haW5Db250cm9sbGVyLmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvVXNlck1vZGVsLmpzIiwiL1VzZXJzL25lby9EZXZlbG9wbWVudC9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL1Rlc3RBc3BlY3QuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9BcGlDb25maWcuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9HZXRVc2VyQ29tbWFuZC5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9Mb2dpbkNvbW1hbmQuanMiLCIvVXNlcnMvbmVvL0RldmVsb3BtZW50L2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvVGltZUZpbHRlci5qcyIsIi9Vc2Vycy9uZW8vRGV2ZWxvcG1lbnQvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC50ZW1wbGF0ZXMnLCBbJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLCAnY29tbW9uL3RlbXBsYXRlcy9mb290ZXIudHBsLmh0bWwnLCAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9tYWluL21haW4udHBsLmh0bWwnXSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWxcIixcbiAgICBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGVmYXVsdFxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPmxvc2VvcmdvaG9tZS5jb208L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNvbGxhcHNlPVxcXCJpc0NvbGxhcHNlZFxcXCIgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZSBicy1qcy1uYXZiYXItY29sbGFwc2VcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBuZy1zaG93PVxcXCJ1c2VyRGF0YS5hdXRoLmF1dGhlbnRpY2F0ZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+e3t1c2VyRGF0YS51c2VyLmVtYWlsfX0gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBuZy1jbGljaz1cXFwiZ2V0VXNlcigpXFxcIj5FZGl0IFByb2ZpbGU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgbmctY2xpY2s9XFxcImxvZ291dCgpXFxcIj5TaWduIE91dDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBuZy1zaG93PVxcXCIhdXNlckRhdGEuYXV0aC5hdXRoZW50aWNhdGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlNpZ24gSW4gPHN0cm9uZyBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Ryb25nPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxmb3JtIHJvbGU9XFxcImZvcm1cXFwiIG5nLXN1Ym1pdD1cXFwic3VibWl0KGxvZ2luUGFyYW1zKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwibG9naW5QYXJhbXMuZW1haWxcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwibG9naW5QYXJhbXMucGFzc3dvcmRcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PjwhLS0gLy5uYXYtY29sbGFwc2UgLS0+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj48IS0tIC8uY29udGFpbmVyLWZsdWlkIC0tPlxcblwiICtcbiAgICBcIjwvbmF2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cD7imaUgVGhpcyBpcyB0aGUgZm9vdGVyPC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tIEhlYWRlciAtLT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiB1aS12aWV3PVxcXCJoZWFkZXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tIENvbnRlbnQgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRWaWV3XFxcIiB1aS12aWV3PVxcXCJjb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLSBGb290ZXIgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgdWktdmlldz1cXFwiZm9vdGVyXFxcIiBjbGFzcz1cXFwicm93IGZvb3Rlci1yb3dcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL21haW4vbWFpbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvbWFpbi9tYWluLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgxPkxvc2VycyBXYW50ZWQ8L2gxPlxcblwiICtcbiAgICBcIiAgICA8cCBjbGFzcz1cXFwibGVhZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGltZyBzcmM9XFxcInJlc291cmNlcy9hc3NldHMvaW1hZ2VzL2xvc2VyLnBuZ1xcXCIgYWx0PVxcXCJIZWxsbyBMb3NlclxcXCI+PGJyPlxcblwiICtcbiAgICBcIiAgICA8L3A+XFxuXCIgK1xuICAgIFwiICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWxnXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcXFwiPjwvc3Bhbj4gSm9pbiBhIExlYWd1ZVxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1sZ1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+IENyZWF0ZSBhIExlYWd1ZVxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLTxkaXYgdWktdmlldz1cXFwiY29udGVudFxcXCI+PC9kaXY+LS0+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnYXBwLXRlbXBsYXRlcycpO1xuXG5cbnZhciBBcHAgPSBmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL21haW4nKTtcbn07XG5cbkFwcC4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInXTtcblxudmFyIGxvZ2hBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcCcsIFtcbiAgICAnbmdDb29raWVzJyxcbiAgICAnbmdSZXNvdXJjZScsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICduZ1JvdXRlJyxcbiAgICAnY29tbWFuZ3VsYXInLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5ib290c3RyYXAnLFxuICAgICdhcHAudGVtcGxhdGVzJyxcbiAgICAndWkucm91dGVyLnN0YXRlSGVscGVyJyxcblxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9tYWluJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvaGVhZGVyJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2FzcGVjdHMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZGVscycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXBpJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9jb21tYW5kJykubmFtZSxcblxuICAgIC8vbW9kYWxzXG5cbiAgICAvL2ZpbHRlcnNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9maWx0ZXJzJykubmFtZVxuXG4gICAgXSwgQXBwKVxuXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdhcHAnLCB7XG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCdcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLnJ1bihmdW5jdGlvbigkcm9vdFNjb3BlLCAkdXJsUm91dGVyLCAkbG9nKSB7XG4gICAgICAgICRsb2cubG9nKFwiQXBwbGljYXRpb24gcnVuLi4uXCIpO1xuICAgICAgICAvL2luamVjdCBhIHNlcnZpY2UgaGVyZSBpZiB5b3Ugd2FudCB0byBydW4gc29tZSBzdGFydHVwIHByb2Nlc3NlcyBlLmcuXG4gICAgICAgIC8vYXBwbGljYXRpb25TZXJ2aWNlLnN0YXJ0dXAoKTtcbiAgICB9KVxuO1xuXG5sb2doQXBwLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkcSwgJHdpbmRvdykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG4gICAgICAgICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24gKHJlamVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHJlamVjdGlvbi5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgdXNlciBpcyBub3QgYXV0aGVudGljYXRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn0pO1xuXG5sb2doQXBwLmNvbmZpZyhmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xuICAgICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2F1dGhJbnRlcmNlcHRvcicpO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubWFpbicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTWFpbkNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdhcHAubWFpbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICdtYWluJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL21haW4vbWFpbi50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlcjogeyAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgLnN0YXRlKCdhcHAubWFpbi5zb21lQ2hpbGRTdGF0ZScsIHtcbi8vICAgICAgICAgICAgICAgIHVybDogJycsXG4vLyAgICAgICAgICAgICAgICB2aWV3czoge1xuLy8gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NvbWVmZWF0dXJlLnNvbWVmZWF0dXJlLnRwbC5odG1sJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NvbWVGZWF0dXJlQ29udHJvbGxlcidcbi8vICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pOyIsIlxucmVxdWlyZShcIi4vVGVzdEFzcGVjdFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hc3BlY3RzJywgW10pXG4gICAgLmNvbmZpZyggZnVuY3Rpb24oKSB7XG5cbiAgICAgICAvL1RPRE8gYXNwZWN0IGNvbmZpZyBpZiBuZWNlc3NhcnlcbiAgICB9XG4pOyIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBtb2RlbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tb2RlbHMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5zZXJ2aWNlKCd1c2VyTW9kZWwnLCByZXF1aXJlKCcuL1VzZXJNb2RlbCcpKVxuOyIsIi8qKlxuICogRGVmaW5lIHRoZSByZW1vdGUgc2VydmljZXNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hcGknLCBbXSlcbiAgICAgIC5jb25zdGFudCgnYXBpQ29uZmlnJywgcmVxdWlyZSgnLi9BcGlDb25maWcnKSlcbiAgICAgIC5zZXJ2aWNlKCd1c2VyU2VydmljZScsIHJlcXVpcmUoJy4vVXNlclNlcnZpY2UnKSlcbjsiLCJcbi8vYXBwbGljYXRpb24gY29tbWFuZHNcbnJlcXVpcmUoJy4vR2V0VXNlckNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vTG9naW5Db21tYW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuY29tbWFuZENvbmZpZycsIFtdKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJGNvbW1hbmd1bGFyUHJvdmlkZXIpIHtcblxuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnR2V0VXNlckV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdHZXRVc2VyQ29tbWFuZCcpO1xuXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdMb2dpbkV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdMb2dpbkNvbW1hbmQnKTtcblxuICAgIH1cbik7XG5cbiIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBmaWx0ZXJzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZmlsdGVycycsIFtdKVxuICAgIC8vbW9kZWxzXG4gICAgLmZpbHRlcigndGltZUZpbHRlcicsIHJlcXVpcmUoJy4vVGltZUZpbHRlcicpKVxuO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5oZWFkZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignSGVhZGVyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vSGVhZGVyQ29udHJvbGxlcicpKSIsIi8qKlxuICogQ29udHJvbGxlciBmb3IgdGhlIG1haW4gYXBwbGljYXRpb24gc2NyZWVuIHRoYXQgY29udHJvbHMgdGhlIGhlYWRlciBhbmQgbWVudS5cbiAqIEBwYXJhbSAkc2NvcGVcbiAqIEBwYXJhbSAkd2luZG93XG4gKiBAcGFyYW0gJGxvY2F0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1haW5Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24sICRjb21tYW5ndWxhciwgdXNlck1vZGVsKSB7XG5cbiAgICAkc2NvcGUudXNlciA9IHVzZXJNb2RlbC51c2VyO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgLy9kb3N0dWZmXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFpbiBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgJyRjb21tYW5ndWxhcicsICd1c2VyTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTWFpbkNvbnRyb2xsZXI7XG4iLCJcbi8qKlxuICogVXNlciBNb2RlbCB0byBob2xkIHRoZSB1c2VyIGRldGFpbHNcblxuICogQHBhcmFtICRsb2dcbiAqL1xudmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKCRsb2cpIHtcblxuICAgIHZhciBhdXRoID0ge307XG4gICAgYXV0aC5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgYXV0aC5mYWlsdXJlID0gZmFsc2U7XG5cbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuXG4gICAgdmFyIHVzZXIgPSB7fTtcbiAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgIHVzZXIuaWQgPSAnJztcbiAgICB1c2VyLnRva2VuID0gJyc7XG4gICAgdXNlci5lbWFpbCA9ICcnO1xuICAgIHVzZXIuZmlyc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuXG4gICAgdGhpcy51c2VyID0gdXNlcjtcblxuICAgIHRoaXMuc2V0QXV0aGVudGljYXRlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGF1dGguYXV0aGVudGljYXRlZCA9IHZhbHVlO1xuICAgICAgICBhdXRoLmZhaWx1cmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRBdXRoZW50aWNhdGlvbkZhaWx1cmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYXV0aC5mYWlsdXJlID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRVc2VyID0gZnVuY3Rpb24odXNlckRhdGEpIHtcbiAgICAgICAgdXNlci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB1c2VyID0gYW5ndWxhci5leHRlbmQodXNlciwgdXNlckRhdGEpO1xuICAgICAgICAkbG9nLmxvZyhcIlVzZXJNb2RlbDogZW1haWw6IFwiICsgdXNlci5lbWFpbCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYXV0aCA9IHt9O1xuICAgICAgICBhdXRoLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgYXV0aC5mYWlsdXJlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcblxuICAgICAgICB1c2VyID0ge307XG4gICAgICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHVzZXIuaWQgPSAnJztcbiAgICAgICAgdXNlci50b2tlbiA9ICcnO1xuICAgICAgICB1c2VyLmVtYWlsID0gJyc7XG4gICAgICAgIHVzZXIuZmlyc3RfbmFtZSA9ICcnO1xuICAgICAgICB1c2VyLmxhc3RfbmFtZSA9ICcnO1xuICAgICAgICB1c2VyLmFkbWluID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdXNlciBtb2RlbFwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVXNlck1vZGVsLiRpbmplY3QgPSBbJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlck1vZGVsOyIsIlxuY29tbWFuZ3VsYXIuZXZlbnRBc3BlY3QoJ0BCZWZvcmUoLy4qLyknLCBmdW5jdGlvbihwcm9jZXNzb3IsICRsb2cpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZSA6IGZ1bmN0aW9uICgpIHtcblxuLy8gICAgICAgICAgICBpZiAoQ3VycmVudFRvZG8udG9kby5sZW5ndGggPT09IDApIHtcbi8vICAgICAgICAgICAgICAgIHByb2Nlc3Nvci5jYW5jZWwoJ0VtcHR5IHRvZG8nKTtcbi8vICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8kbG9nLmxvZygnVGVzdCBBc3BlY3QnKTtcblxuICAgICAgICB9XG4gICAgfVxufSk7IiwiLypcbiAqICBHbG9iYWwgY29uZmlnIGZvciByZW1vdGUgc2VydmljZXNcbiAqL1xuXG52YXIgQXBpQ29uZmlnID0gIHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUNvbmZpZztcbiIsIi8qKlxuICogVXNlciBzZXJ2aWNlIHRoYXQgZ2V0cyB0aGUgdXNlciBkYXRhXG4gKiBAcGFyYW0gJGh0dHBcbiAqIEBwYXJhbSAkbG9nXG4gKiBAcGFyYW0gQXBpQ29uZmlnXG4gKi9cbnZhciBVc2VyU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkd2luZG93LCBhcGlDb25maWcsIHVzZXJNb2RlbCkge1xuXG5cbiAgICB0aGlzLmdldFVzZXIgPSBmdW5jdGlvbih1c2VySWQpIHtcbiAgICAgICAgJGxvZy5sb2coJ1VzZXJTZXJ2aWNlOiBnZXRVc2VyJyk7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9cIiArIHVzZXJJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBnZXQgdXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IHVzZXIgZGF0YTpcIiArIGRhdGEpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogZ2V0IHVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMubG9naW4gPSBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgJGxvZy5sb2coJ1VzZXJTZXJ2aWNlOiBsb2dpbicpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoXG4gICAgICAgICAgICBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnNcIixcbiAgICAgICAgICAgIHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBQT1NUIC9hcGkvc2Vzc2lvbnMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICB1c2VyTW9kZWwuc2V0VXNlcihkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IFBPU1QgL2FwaS9zZXNzaW9ucyBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuXG59O1xuXG5Vc2VyU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyR3aW5kb3cnLCAnYXBpQ29uZmlnJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyU2VydmljZTsiLCJcbmNvbW1hbmd1bGFyLmNyZWF0ZSgnR2V0VXNlckNvbW1hbmQnLFxuICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbih1c2VySWQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKCdHZXRVc2VyQ29tbWFuZDogR2V0dGluZyB1c2VyIGRldGFpbHMuLi4nKTtcbiAgICAgICAgICAgIHZhciB1c2VyUHJvbWlzZSA9IHVzZXJTZXJ2aWNlLmdldFVzZXIodXNlcklkKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyUHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvciA6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkdldFVzZXJDb21tYW5kOiBlcnJvciBpbiBHZXRVc2VyOiBcIiArIGVycm9yLmRhdGEpO1xuLy8gICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC5yZWdpc3RyYXRpb24ubG9naW4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXN1bHQgOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiR2V0VXNlckNvbW1hbmQ6IHVzZXIgZGF0YSByZXN1bHQgaXMgXCIgKyByZXN1bHQpO1xuICAgICAgICB9XG5cblxuICAgIH1cbn0pOyIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdMb2dpbkNvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csICRjb21tYW5ndWxhciwgdXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKCdMb2dpbkNvbW1hbmQ6IEF1dGhlbnRpY2F0aW5nIHVzZXInKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5sb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJMb2dpbkNvbW1hbmQ6IGVycm9yIGluIGxvZ2luOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgdXNlck1vZGVsLnNldEF1dGhlbnRpY2F0aW9uRmFpbHVyZSgpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkxvZ2luQ29tbWFuZDogbG9naW4gc3VjY2Vzc2Z1bCBcIik7XG4gICAgICAgICAgICB1c2VyTW9kZWwuc2V0QXV0aGVudGljYXRlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG5cblxuIiwiXG52YXIgVGltZUZpbHRlciA9IGZ1bmN0aW9uKCRsb2cpIHtcbiAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuXG4gICAgICAgaWYgKGlucHV0IDwgMSkge1xuICAgICAgICAgICByZXR1cm4gXCIwMDowMDowMFwiO1xuICAgICAgIH1cblxuICAgICAgIGZ1bmN0aW9uIGZvcm1hdCh2YWwpIHtcbiAgICAgICAgICAgcmV0dXJuICh2YWw8MTAgPyAnMCcgOiAnJykgKyB2YWw7XG4gICAgICAgfVxuXG4gICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApIC8gMzYwMCk7XG4gICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKCgoaW5wdXQgLyAxMDAwKSAlIDM2MDApIC8gNjApO1xuICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAlIDYwKTtcbiAgICAgICByZXR1cm4gZm9ybWF0KGgpICsgXCI6XCIgKyBmb3JtYXQobSkgKyBcIjpcIiArIGZvcm1hdChzKTtcbiAgIH1cblxufTtcblxuVGltZUZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVGaWx0ZXI7XG4iLCIvKipcbiAqIENvbnRyb2xsZXIgZm9yIHRoZSBtYWluIGFwcGxpY2F0aW9uIHNjcmVlbiB0aGF0IGNvbnRyb2xzIHRoZSBoZWFkZXIgYW5kIG1lbnUuXG4gKiBAcGFyYW0gJHNjb3BlXG4gKiBAcGFyYW0gdXNlck1vZGVsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIEhlYWRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHVzZXJNb2RlbCkge1xuXG4gICAgJHNjb3BlLmFsZXJ0cyA9IFt7XG4gICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICBtc2c6ICdMb2dpbiBGYWlsdXJlJ1xuICAgIH1dO1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gdXNlck1vZGVsO1xuXG4gICAgJHNjb3BlLmxvZ2luUGFyYW1zID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24obG9naW5QYXJhbXMpIHtcbiAgICAgICAgJGxvZy5sb2cobG9naW5QYXJhbXMpO1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJMb2dpbkV2ZW50XCIsIGxvZ2luUGFyYW1zKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmdldFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiR2V0VXNlckV2ZW50XCIsIHsgdXNlcklkOiB1c2VyTW9kZWwudXNlci5pZCB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5IZWFkZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJDb250cm9sbGVyO1xuIl19
;