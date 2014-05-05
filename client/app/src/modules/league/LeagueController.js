
var LeagueController = function($scope, $log, $stateParams, weeks) {

    $scope.isPasswordHidden = true;

    $scope.weeks = weeks.data;

    $scope.newLeagueData = {
        name: '',
        season_id: $stateParams.seasonId,
        start_week_id: $scope.weeks[0].id,
        public: true,
        max_teams_per_user: '',
        password: '',
        password_confirmation: ''
    };

    $scope.hidePasswordFields = function(value) {
        $scope.isPasswordHidden = value;
        if (value) {
            $scope.newLeagueData.password = '';
            $scope.newLeagueData.password_confirmation = '';
        }
    };

    $scope.createLeague = function(league) {
        $scope.dispatch('CreateLeagueEvent', { leagueParams: league });
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
        $log.log("league controller");
    };
    init();

};

LeagueController.$inject = ['$scope', '$log', '$stateParams', 'weeks'];
module.exports = LeagueController;
