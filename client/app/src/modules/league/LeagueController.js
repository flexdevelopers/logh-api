
var LeagueController = function($scope, $log, $stateParams) {

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

    $scope.weeks = [
        {name:'week 1', id:'23'},
        {name:'week 2', id:'45'},
        {name:'week 3', id:'56'},
        {name:'week 4', id:'78'}
    ];

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

LeagueController.$inject = ['$scope', '$log', '$stateParams'];
module.exports = LeagueController;
