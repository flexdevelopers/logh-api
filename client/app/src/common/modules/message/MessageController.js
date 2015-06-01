var MessageController = function($scope, $log, messageModel) {

    $scope.messageData = messageModel;

    $scope.dismissMessage = function(message) {
        message.resetMessage();
    };

    $scope.share = function() {
      FB.ui(
        {
          method: 'feed',
          name: 'name field',
          link: 'https://www.loseorgohome.com',
          picture: 'https://www.loseorgohome.com/resources/assets/images/background2.jpg',
          caption: "hi there",
          description: 'description field',
          message: 'here is the message field'
        });
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("message controller");
    };
    init();
};

MessageController.$inject = ['$scope', '$log', 'messageModel'];
module.exports = MessageController;
