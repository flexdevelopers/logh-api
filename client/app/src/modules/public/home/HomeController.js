var HomeController = function($scope, $log, $location, $modal, statsService, userService, messageModel, seasonModel) {

    var getStats = function() {
      statsService.getStats()
        .then(function(data) {
          $scope.stats = data;
        });
    };

    $scope.selectedSeasonId = seasonModel.selectedSeasonId;

    $scope.stats = {
      public: 0,
      private: 0,
      teams: 0,
      picks: 0
    };

    $scope.createLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/league/new');
    };

    $scope.joinLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/leagues/public');
    };

    $scope.register = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/register.tpl.html',
        controller: 'RegisterController'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Register cancelled' }, false);
        $log.debug('Register modal dismissed...');
      });

    };

  /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
      $log.debug("home controller");
      getStats();
  };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', '$modal', 'statsService', 'userService', 'messageModel', 'seasonModel'];
module.exports = HomeController;
