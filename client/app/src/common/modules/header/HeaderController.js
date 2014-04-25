var HeaderController = function($scope, $log, $state, userModel) {

    $scope.userData = userModel;

    $scope.loginParams = {
        email: '',
        password: ''
    };

    $scope.userParams = {
        email: '',
        password: '',
        password_confirmation: '',
        first_name: '',
        last_name: ''
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

    $scope.createUser = function(userParams) {
        $log.log(userParams);
        $scope.dispatch('CreateUserEvent', { userParams: userParams} );
    };

    $scope.viewUser = function() {
        $state.go('app.user');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("header controller");
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', '$state', 'userModel'];
module.exports = HeaderController;
