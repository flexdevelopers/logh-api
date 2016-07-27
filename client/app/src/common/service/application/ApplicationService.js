var ApplicationService = function($window, $location) {

        this.startup = function() {
          forceHttp();
        };

        var forceHttp = function () {
          if ($location.protocol() == 'https') {
            $window.location.href = $location.absUrl().replace('https', 'http');
          }
        };

    };

ApplicationService.$inject = ['$window', '$location'];
module.exports = ApplicationService;
