
var CreateLeagueController = function($scope, $log, $stateParams) {

    $scope.newLeagueData = {
        name: '',
        season_id: $stateParams.seasonId,
        start_week_id: $scope.weeks[0].id,
        public: true,
        max_teams_per_user: '',
        password: '',
        password_confirmation: ''
    };

    $scope.createLeague = function(league) {
        $scope.dispatch('CreateLeagueEvent', { leagueParams: league });
    };

    $scope.isPasswordHidden = true;

    $scope.hidePasswordFields = function(value) {
        $scope.isPasswordHidden = value;
        if (value) {
            $scope.newLeagueData.password = '';
            $scope.newLeagueData.password_confirmation = '';
        }
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("create league controller");
    };
    init();

};

CreateLeagueController.$inject = ['$scope', '$log', '$stateParams'];
module.exports = CreateLeagueController;
