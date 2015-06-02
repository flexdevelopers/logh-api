var MessageController = function($rootScope, $scope, $log, messageModel) {

    $scope.messageData = messageModel;

    $scope.dismissMessage = function(message) {
        message.resetMessage();
    };

    $scope.shareLeagueFB = function() {
      $rootScope.$broadcast('messageController::shareLeagueFB');
    };

    $scope.shareTeamFB = function() {
      $rootScope.$broadcast('messageController::shareTeamFB');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("message controller");
    };
    init();
};

MessageController.$inject = ['$rootScope', '$scope', '$log', 'messageModel'];
module.exports = MessageController;
