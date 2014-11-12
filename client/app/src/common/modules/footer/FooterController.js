var FooterController = function($scope, $log, $location) {

  $scope.home = function() {
    $location.path('/');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("footer controller");
  };
  init();
};

FooterController.$inject = ['$scope', '$log', '$location'];
module.exports = FooterController;
