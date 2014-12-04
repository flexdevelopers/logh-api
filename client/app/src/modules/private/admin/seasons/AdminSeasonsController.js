var AdminSeasonsController = function($scope, seasonModel) {

  $scope.seasons = seasonModel.seasons;

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSeasonsController.$inject = ['$scope', 'seasonModel'];
module.exports = AdminSeasonsController;
