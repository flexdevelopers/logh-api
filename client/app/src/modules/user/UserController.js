
var UserController = function($scope, userModel) {

    $scope.userData = angular.copy(userModel);

    $scope.newUserData = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    };

    $scope.update = function(user) {
        $scope.dispatch('UpdateUserEvent', { userParams: user });
    };

    $scope.register = function(newUser) {
        $scope.dispatch('CreateUserEvent', { userParams: newUser } );
    };

    $scope.hasError = function(input) {
        return input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return input.$dirty && input.$error[property];
    };

    $scope.$on('userModel::userUpdated', function(event) {
        $scope.userData = angular.copy(userModel);
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("user controller");
    };
    init();

};

UserController.$inject = ['$scope', 'userModel'];
module.exports = UserController;
