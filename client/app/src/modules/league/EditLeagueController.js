
var EditLeagueController = function($scope, $log) {

    $scope.isPasswordHidden = $scope.leagueData.league.public;

    $scope.wasPublic = $scope.leagueData.league.public;

    $scope.updateLeague = function(league) {
        $scope.dispatch('UpdateLeagueEvent', { leagueParams: league });
    };

    $scope.hidePasswordFields = function(value) {
        $scope.isPasswordHidden = value;
        if (value) {
            $scope.leagueData.league.password = '';
            $scope.leagueData.league.password_confirmation = '';
        }
    };

    $scope.changedToPrivate = function() {
        return $scope.wasPublic && $scope.leagueData.league.public == false;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("edit league controller");
    };
    init();

};

EditLeagueController.$inject = ['$scope', '$log'];
module.exports = EditLeagueController;
