
var PrivateLeaguesController = function(privateLeagues, $scope, $log, $modal) {

    $scope.privateLeagues = privateLeagues.data;

    $scope.requestInvite = function(league) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/league/invite/request/league.invite.request.tpl.html',
        controller: 'LeagueInviteRequestController',
        resolve: {
          leagueId: function() {
            return league.id;
          }
        }
      });

      modalInstance.result.then(function (invitation) {
        $scope.dispatch('LeagueInviteRequestEvent', { inviteParams: invitation });
      }, function () {
        $log.debug('Request invite modal dismissed...');
      });

    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("private leagues controller");
    };
    init();

};

PrivateLeaguesController.$inject = ['privateLeagues', '$scope', '$log', '$modal'];
module.exports = PrivateLeaguesController;

