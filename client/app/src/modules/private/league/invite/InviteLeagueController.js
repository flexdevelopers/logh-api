var InviteLeagueController = function($modalInstance, $scope, $log) {

  $scope.invitation = {
    email: ""
  };

  $scope.invite = function () {
    return;
    $modalInstance.dismiss('ok');
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
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
    $log.debug("league invite controller");
  };
  init();
};

InviteLeagueController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = InviteLeagueController;
