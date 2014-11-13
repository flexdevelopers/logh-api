var HomeController = function($scope, $log, $location, $modal, seasonService, weekService, leagueService, messageModel) {

    var getCurrentSeason = function() {
      seasonService.getCurrentSeason()
        .then(function(season) {
          $scope.currentSeasonId = season.id;
        });
    };

    $scope.createLeague = function(seasonId) {
        var modalInstance = $modal.open({
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController',
            resolve: {
              weeks: function() {
                return weekService.getAvailableWeeks(seasonId);
              }
            }
          });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        $log.debug('Create league modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
      });
    };

    $scope.joinLeague = function(seasonId) {
      $location.path('/season/' + seasonId + '/leagues/public');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
      $log.debug("home controller");
      getCurrentSeason();
    };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', '$modal', 'seasonService', 'weekService', 'leagueService', 'messageModel'];
module.exports = HomeController;
