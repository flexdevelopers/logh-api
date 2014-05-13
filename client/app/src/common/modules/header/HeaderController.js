var HeaderController = function($scope, $log, userModel, seasonModel) {

    $scope.isCollapsed = true;

    $scope.userData = userModel;

    $scope.season = seasonModel.season;

    $scope.loginParams = {
        email: '',
        password: ''
    };

    $scope.login = function(loginParams) {
        $log.log("login params: " + loginParams);
        $scope.dispatch("LoginEvent", loginParams);
    };

    $scope.logout = function() {
        $scope.loginParams = {
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
        console.log("header controller");
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', 'userModel', 'seasonModel'];
module.exports = HeaderController;
