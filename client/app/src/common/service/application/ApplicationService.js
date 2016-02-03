var ApplicationService = function($window, $location) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            startupProcess();
        };

        var startupProcess = function() {
//          forceSsl();
        };

        var forceSsl = function () {
          if ($location.host() == 'localhost') return;
          if ($location.protocol() != 'https') {
            $window.location.href = $location.absUrl().replace('http', 'https');
          }
        };

    };

ApplicationService.$inject = ['$window', '$location'];
module.exports = ApplicationService;
