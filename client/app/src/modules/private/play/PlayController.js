var PlayController = function($scope, $location, $state, $stateParams, messageModel, seasonModel) {

	var setStartedSeasons = function() {
		var seasons = angular.copy(seasonModel.currentSeasons.concat(seasonModel.endedSeasons));
		_.each(seasons, function(season) {
			$scope.startedSeasons.push({ id: season.id, ended: !season.current ? 'Previous' : 'Current', name: season.name })
		});
	};

	$scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.startedSeasons = [];

  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.changeSeason = function(seasonId) {
    seasonModel.setSelectedSeasonId(seasonId);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + seasonId);
    $location.url(newPath);
  };

  $scope.myTeams = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/teams');
  };

  $scope.myLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/leagues');
  };

  $scope.resetSearch = function() {
    $scope.query = '';
  };

  $scope.isState = function(states) {
    return _.indexOf(states, $state.current.name) > -1;
  };

  $scope.createLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/league/new');
  };

  $scope.joinLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/leagues/public');
  };

  var init = function () {
    setStartedSeasons();
  };
  init();

};

PlayController.$inject = ['$scope', '$location', '$state', '$stateParams', 'messageModel', 'seasonModel'];
module.exports = PlayController;
