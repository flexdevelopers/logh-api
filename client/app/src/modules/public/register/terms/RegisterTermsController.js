var RegisterTermsController = function($uibModalInstance, $scope, $log) {

  $scope.close = function () {
    $uibModalInstance.dismiss('close');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("register terms and conditions controller");
  };
  init();
};

RegisterTermsController.$inject = ['$uibModalInstance', '$scope', '$log'];
module.exports = RegisterTermsController;
