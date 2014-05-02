
var RegisterController = function($scope) {

    $scope.newUserData = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    };

    $scope.register = function(newUser) {
        $scope.dispatch('CreateUserEvent', { userParams: newUser } );
    };

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("register controller");
    };
    init();

};

RegisterController.$inject = ['$scope'];
module.exports = RegisterController;
