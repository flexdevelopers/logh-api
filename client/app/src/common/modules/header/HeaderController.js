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
