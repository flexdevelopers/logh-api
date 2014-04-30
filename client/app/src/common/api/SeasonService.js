var SeasonService = function($http, $log, apiConfig, seasonModel) {

    this.getCurrentSeason = function() {
        $log.log('SeasonService: get current season');
        var promise = $http.get(apiConfig.baseURL + "seasons/current")
            .success(function(data) {
                $log.log("UserService: get current season success");
                seasonModel.setSeason(data);
                return data;
            })
            .error(function(data) {
                $log.log("SeasonService: get current season failed");
                return data;
            });

        return promise;
    };

};

SeasonService.$inject = ['$http', '$log', 'apiConfig', 'seasonModel'];
module.exports = SeasonService;