
commangular.create('CreateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.log('CreateLeagueCommand: Creating a new league...');
                var promise = leagueService.createLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.log("CreateLeagueCommand: error in CreateLeague: " + error.data);
            },
            onResult: function(result) {
                $log.log("CreateLeagueCommand: create league was successful");
            }

        }
    });