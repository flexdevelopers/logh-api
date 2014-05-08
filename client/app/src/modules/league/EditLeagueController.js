
var EditLeagueController = function($scope, $log, league) {

    $scope.leagueData = league.data;

    $scope.isPasswordHidden = $scope.leagueData.public;

    $scope.wasPublic = $scope.leagueData.public;

    $scope.updateLeague = function(leagueData) {
        $scope.dispatch('UpdateLeagueEvent', { leagueParams: leagueData });
    };

    $scope.hidePasswordFields = function(value) {
        $scope.isPasswordHidden = value;
        if (value) {
            $scope.leagueData.password = '';
            $scope.leagueData.password_confirmation = '';
        }
    };

    $scope.changedToPrivate = function() {
        return $scope.wasPublic && $scope.leagueData.public == false;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("edit league controller");
    };
    init();

};

EditLeagueController.$inject = ['$scope', '$log', 'league'];
module.exports = EditLeagueController;
