var ApplicationService =
    function($window, $log, $commangular) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            $log.log("starting the app...");
            startupProcess();
        };

        var startupProcess = function() {
            $log.log("executing startup process...");
            if ($window.sessionStorage.token) {
                $commangular.dispatch("GetCurrentUserEvent");
                return;
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

ApplicationService.$inject = ['$window', '$log', '$commangular'];
module.exports = ApplicationService;
