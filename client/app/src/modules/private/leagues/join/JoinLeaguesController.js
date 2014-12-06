var JoinLeaguesController = function($scope, $log, $location, $modal, $stateParams, userModel, messageModel, seasonModel, weekService, leagueService) {

  $scope.currentSeasonId = seasonModel.currentSeasons[0].id;

  $scope.currentSeasons = angular.copy(seasonModel.currentSeasons);

  $scope.selectedSeason = {
    id: parseInt($stateParams.seasonId)
  };

  $scope.leagueOptions = { closed: false };

  $scope.leagueQuery = '';

  $scope.publicLeagues = function() {
    $location.path('/season/' + $stateParams.seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function() {
    $location.path('/season/' + $stateParams.seasonId + '/leagues/private');
  };

  $scope.changeSeason = function() {
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + $scope.selectedSeason.id);
    $location.path(newPath);
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.leagueQuery.toLowerCase()) != -1 || item.commish_names.join(', ').indexOf($scope.leagueQuery.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  $scope.resetSearch = function() {
    $scope.leagueQuery = '';
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
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

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("join leagues controller");
  };
  init();

};

JoinLeaguesController.$inject = ['$scope', '$log', '$location', '$modal', '$stateParams', 'userModel', 'messageModel', 'seasonModel', 'weekService', 'leagueService'];
module.exports = JoinLeaguesController;
