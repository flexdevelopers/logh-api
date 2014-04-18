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
