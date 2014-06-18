commangular.create('InviteLeagueCommand',
  function($log, leagueService) {

    return {

      execute: function(inviteParams) {
        $log.debug('InviteLeagueCommand: creating a league invite...');
        var promise = leagueService.inviteLeague(inviteParams);
        return promise;
      },
      onError: function(error) {
        $log.debug("InviteLeagueCommand: failure: " + error.data);
      },
      onResult: function(result) {
        $log.debug("InviteLeagueCommand: success");
      }

    }
  });
