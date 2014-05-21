
commangular.create('UpdateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.debug('UpdateLeagueCommand: updating a league...');
                var promise = leagueService.updateLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.debug("UpdateLeagueCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("UpdateLeagueCommand: success");
            }

        }
    });