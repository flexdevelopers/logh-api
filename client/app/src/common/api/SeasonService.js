var SeasonService = function($http, $log, apiConfig, seasonModel) {

    this.getCurrentSeason = function() {
        var promise = $http.get(apiConfig.baseURL + "seasons/current")
            .success(function(data) {
                $log.log("SeasonService: getCurrentSeason success");
                seasonModel.setSeason(data);
                return data;
            })
            .error(function(data) {
                $log.log("SeasonService: getCurrentSeason failed");
                return data;
            });

        return promise;
    };

};

SeasonService.$inject = ['$http', '$log', 'apiConfig', 'seasonModel'];
module.exports = SeasonService;