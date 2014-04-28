
/**
 * User Model to hold the user details

 * @param $log
 */
var UserModel = function($rootScope, $window, $log) {

    var auth = {};
    auth.authenticated = false;

    this.auth = auth;

    var user = {};
    user.loaded = false;
    user.id = '';
    user.email = '';
    user.first_name = '';
    user.last_name = '';
    user.admin = false;

    this.user = user;

    this.setAuthenticated = function(value) {
        auth.authenticated = value;
    };

    this.setUserEmail = function(value) {
        user.email = value;
    };

    this.setUserAdmin = function(value) {
        user.admin = value;
    };

    this.setUser = function(userData) {
        user.loaded = true;
        user = angular.extend(user, userData);
        $rootScope.$broadcast('userModel::userUpdated', user);
        $log.log("UserModel: email: " + user.email);
    };

    this.reset = function() {
        $window.sessionStorage.removeItem('token');

        auth.authenticated = false;

        this.auth = auth;

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

UserModel.$inject = ['$rootScope', '$window', '$log'];
module.exports = UserModel;