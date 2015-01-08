var AdminWeekEditController = function(week, weekTypes, $scope, $modalInstance) {

  $scope.weekData = angular.copy(week);

  $scope.weekTypes = weekTypes.data;

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

  $scope.editWeek = function(week) {
    $modalInstance.close(week);
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
  };
  init();
};

AdminWeekEditController.$inject = ['week', 'weekTypes', '$scope', '$modalInstance'];
module.exports = AdminWeekEditController;
