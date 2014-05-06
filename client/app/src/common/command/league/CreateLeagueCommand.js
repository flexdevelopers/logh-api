
commangular.create('CreateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.log('CreateLeagueCommand: creating a new league...');
                var promise = leagueService.createLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.log("CreateLeagueCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("CreateLeagueCommand: success");
            }

        }
    });