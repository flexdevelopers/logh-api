
commangular.create('CreateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.debug('CreateLeagueCommand: creating a new league...');
                var promise = leagueService.createLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.debug("CreateLeagueCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("CreateLeagueCommand: success");
            }

        }
    });