var AdminWeeksController = function(season, weeks, $scope, $location) {

  $scope.season = season.data;

  $scope.weeks = weeks.data;

  $scope.showWeek = function(week) {
    $location.path($location.path() + '/' + week.id + '/games');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeeksController.$inject = ['season', 'weeks', '$scope', '$location'];
module.exports = AdminWeeksController;
