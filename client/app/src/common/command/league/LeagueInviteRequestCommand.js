commangular.create('LeagueInviteRequestCommand',
  function($log, leagueService) {

    return {

      execute: function(inviteParams) {
        $log.debug('LeagueInviteRequestCommand: creating a league invite request...');
        var promise = leagueService.requestInvite(inviteParams);
        return promise;
      },
      onError: function(error) {
        $log.debug("LeagueInviteRequestCommand: failure: " + error.data);
      },
      onResult: function(result) {
        $log.debug("LeagueInviteRequestCommand: success");
      }

    }
  });
