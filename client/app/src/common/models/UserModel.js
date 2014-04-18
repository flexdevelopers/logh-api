
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