var HeaderController = function($scope, $log, userModel, seasonModel) {

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

    $scope.logout = function() {
        $scope.credentials = {
            email: '',
            password: ''
        };
        $scope.dispatch("LogoutEvent");
    };

    $scope.forgotPassword = function() {
        // todo: implement this
        alert('tough shit');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("header controller");
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', 'userModel', 'seasonModel'];
module.exports = HeaderController;
