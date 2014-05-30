
var CreateLeagueController = function($scope, $log, $stateParams) {

    $scope.newLeagueData = {
        name: '',
        season_id: $stateParams.seasonId,
        start_week_id: $scope.weeks[0].id,
        public: true,
        max_teams_per_user: ''
    };

    $scope.createLeague = function(league) {
        $scope.dispatch('CreateLeagueEvent', { leagueParams: league });
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("create league controller");
    };
    init();

};

CreateLeagueController.$inject = ['$scope', '$log', '$stateParams'];
module.exports = CreateLeagueController;
