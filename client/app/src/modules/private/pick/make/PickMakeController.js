var PickMakeController = function(currentGames, $modalInstance, $scope, $log) {

  $scope.games = currentGames.data;

  $scope.makePick = function(game) {
    if ($scope.isValid(game)) {
      $modalInstance.close();
    }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.isValid = function(game) {
    return !game.started;
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
    $log.debug("make pick controller");
  };
  init();
};

PickMakeController.$inject = ['currentGames', '$modalInstance', '$scope', '$log'];
module.exports = PickMakeController;
