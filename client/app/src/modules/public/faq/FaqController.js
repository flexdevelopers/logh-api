var FaqController = function($scope, $state, $location, seasonModel) {

  $scope.selectedSeasonId = seasonModel.selectedSeasonId;

  $scope.isState = function(state) {
    return $state.current.name == state;
  };

  $scope.createLeague = function(seasonId) {
    $location.url('/season/' + seasonId + '/league/new');
  };

  $scope.joinLeague = function(seasonId) {
    $location.url('/season/' + seasonId + '/leagues/public');
  };

  var init = function() {};
  init();
};

FaqController.$inject = ['$scope', '$state', '$location', 'seasonModel'];
module.exports = FaqController;
