
var LeagueController = function($scope, $log, $stateParams, weeks) {

    $scope.isPasswordHidden = true;

    $scope.newLeagueData = {
        name: '',
        season_id: $stateParams.seasonId,
        start_week_id: '',
        public: true,
        max_teams_per_user: '',
        password: '',
        password_confirmation: ''
    };

    $scope.weeks = weeks.data;

    $scope.hidePasswordFields = function(value) {
        $scope.isPasswordHidden = value;
        if (value) {
            $scope.newLeagueData.password = '';
            $scope.newLeagueData.password_confirmation = '';
        }
    };

    $scope.createLeague = function(newLeague) {
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
