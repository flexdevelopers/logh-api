var HeaderController = function($scope, $log, $location, userModel, seasonModel) {

    $scope.isCollapsed = true;

    $scope.userData = userModel;

    $scope.season = seasonModel.season;

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.signin = function(credentials) {
        $log.debug("signin credentials: " + credentials);
        $scope.dispatch("SigninEvent", credentials);
    };

    $scope.signout = function() {
        $scope.credentials = {
            email: '',
            password: ''
        };
        $scope.dispatch("SignoutEvent");
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
        $log.debug("header controller");
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', '$location', 'userModel', 'seasonModel'];
module.exports = HeaderController;
