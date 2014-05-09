var CreateTeamController = function($scope, $log) {

    $scope.bar = 'foo';

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("create team controller");
    };
    init();

};

CreateTeamController.$inject = ['$scope', '$log'];
module.exports = CreateTeamController;
