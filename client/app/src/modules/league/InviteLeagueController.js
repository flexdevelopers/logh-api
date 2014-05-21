var InviteLeagueController = function($scope, $log, $stateParams) {

    $scope.foo = 'request an invite to league #' + $stateParams.leagueId;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("invite league controller");
    };
    init();

};

InviteLeagueController.$inject = ['$scope', '$log', '$stateParams'];
module.exports = InviteLeagueController;
