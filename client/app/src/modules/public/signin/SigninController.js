var SigninController = function($scope, $log, $location) {

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.signin = function(credentials) {
        $log.debug("signin credentials: " + credentials);
        $scope.dispatch("SigninEvent", credentials);
    };

    $scope.forgotPassword = function() {
        // todo: implement this
        alert('tough shit');
    };

    $scope.register = function() {
        $location.path('/register');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("signin controller");
    };
    init();

};

SigninController.$inject = ['$scope', '$log', '$location'];
module.exports = SigninController;
