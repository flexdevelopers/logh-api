var FooterController = function($scope, $log) {

  $scope.foo = function() {
    alert('footer');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("footer controller");
  };
  init();
};

FooterController.$inject = ['$scope', '$log'];
module.exports = FooterController;
