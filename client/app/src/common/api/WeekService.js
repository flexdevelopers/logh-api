var WeekService = function($http, $log, apiConfig) {

    this.getAvailableWeeks = function(seasonId) {
        $log.log('WeekService: get available weeks');
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/available")
            .success(function(data) {
                $log.log("WeekService: get available weeks success");
                return data;
            })
            .error(function(data) {
                $log.log("WeekService: get available weeks failed");
                return data;
            });

        return promise;
    };

};

WeekService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = WeekService;
