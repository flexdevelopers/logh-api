var AdminSeasonNewController = function($scope, $uibModalInstance) {

  $scope.newSeasonData = {
    name: '',
    season_type: '',
    starts_at: moment().format(),
    ends_at: moment().format()
  };

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.closeEndsAt = function() {
    $scope.endsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeEndsAt();

  $scope.createSeason = function(season) {
    $uibModalInstance.close(season);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
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
  };
  init();
};

AdminSeasonNewController.$inject = ['$scope', '$uibModalInstance'];
module.exports = AdminSeasonNewController;
