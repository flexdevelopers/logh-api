var ConfirmController = function(message, $scope, $log, $uibModalInstance) {

  $scope.message = message;

  $scope.confirm = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("confirm controller");
  };
  init();

};

ConfirmController.$inject = ['message', '$scope', '$log', '$uibModalInstance'];
module.exports = ConfirmController;
