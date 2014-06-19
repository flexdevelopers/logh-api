commangular.create('CreateLeagueInviteCommand',
  function($log, leagueService) {

    return {

      execute: function(inviteParams) {
        $log.debug('CreateLeagueInviteCommand: creating a league invite...');
        var promise = leagueService.createInvite(inviteParams);
        return promise;
      },
      onError: function(error) {
        $log.debug("CreateLeagueInviteCommand: failure: " + error.data);
      },
      onResult: function(result) {
        $log.debug("CreateLeagueInviteCommand: success");
      }

    }
  });
