var SigninController = function($scope, $log, $location, $uibModal, messageModel, userService) {

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.signin = function(credentials) {
        $scope.dispatch("SigninEvent", credentials);
    };

    $scope.signinGuest = function() {
      userService.signinGuest();
    };

    $scope.resetPassword = function() {

      var modalInstance = $uibModal.open({
        templateUrl: 'modules/private/user/reset/user.reset.tpl.html',
        controller: 'UserResetController'
      });

      modalInstance.result.then(function (email) {
        userService.resetUser(email);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Reset password cancelled' }, false);
      });
    };

    $scope.register = function() {

      var modalInstance = $uibModal.open({
        templateUrl: 'modules/public/register/register.tpl.html',
        controller: 'RegisterController',
        size: 'sm'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
        $log.debug('Register modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Register cancelled' }, false);
      });

    };

    var init = function () {
    };
    init();

};

SigninController.$inject = ['$scope', '$log', '$location', '$uibModal', 'messageModel', 'userService'];
module.exports = SigninController;
