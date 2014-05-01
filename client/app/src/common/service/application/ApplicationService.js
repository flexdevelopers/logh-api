var ApplicationService =
    function($window, $location, $log, $commangular) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            $log.log("starting the app...");
            startupProcess();
        };

        var startupProcess = function() {
            $log.log("executing startup process...");
            if ($window.sessionStorage.token || $location.path() != '/main') {
                $commangular.dispatch("GetCurrentUserEvent");
            }
        };

        /**
         * Invoked on startup, like a constructor.
         */
        var init = function () {
            $log.log("ApplicationService init application service");

        };
        init();

    };

ApplicationService.$inject = ['$window', '$location', '$log', '$commangular'];
module.exports = ApplicationService;
