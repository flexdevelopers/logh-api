
commangular.create('GetCurrentSeasonCommand',
    function($log, seasonService) {

        return {

            execute: function() {
                $log.log('GetCurrentSeasonCommand: Getting current season...');
                var promise = seasonService.getCurrentSeason();
                return promise;
            },
            onError: function(error) {
                $log.log("GetCurrentSeasonCommand: error in getCurrentSeason: " + error.data);
            },
            onResult: function(result) {
                $log.log("GetCurrentSeasonCommand: current season data result is " + result);
            }

        }
    });
