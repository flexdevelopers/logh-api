
var UserController = function($scope, $window, $location, $commangular, userModel) {

    $scope.user = userModel.user;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("user controller");
    };
    init();
};

UserController.$inject = ['$scope', '$window', '$location', '$commangular', 'userModel'];
module.exports = UserController;
