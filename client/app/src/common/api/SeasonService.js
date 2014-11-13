var SeasonService = function($http, $log, $q, apiConfig) {

    this.getCurrentSeason = function() {
        var deferred = $q.defer();
        $http.get(apiConfig.baseURL + "seasons/current")
            .success(function(data) {
                $log.debug("SeasonService: getCurrentSeason success");
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("SeasonService: getCurrentSeason failed");
                deferred.reject();
            });
        return deferred.promise;
    };

};

SeasonService.$inject = ['$http', '$log', '$q', 'apiConfig'];
module.exports = SeasonService;