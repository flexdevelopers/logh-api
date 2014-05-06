
var LeagueController = function($scope, $log, leagueModel, weeks) {

    $scope.leagueData = angular.copy(leagueModel);

    $scope.weeks = weeks.data;

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    $scope.$on('leagueModel::leagueUpdated', function(event) {
        $scope.leagueData = angular.copy(leagueModel);
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("league controller");
    };
    init();

};

LeagueController.$inject = ['$scope', '$log', 'leagueModel', 'weeks'];
module.exports = LeagueController;
