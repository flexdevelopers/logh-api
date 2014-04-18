/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $location
 * @constructor
 */
var MainController = function($scope, $window, $location, $commangular, userModel) {

    $scope.user = userModel.user;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
       //dostuff
        console.log("main controller");
    };
    init();
};

MainController.$inject = ['$scope', '$window', '$location', '$commangular', 'userModel'];
module.exports = MainController;
