var ApplicationService =
    function($log) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            $log.log("starting the app...");
            startupProcess();
        };

        var startupProcess = function() {
            $log.log("executing startup process...")
        };

        /**
         * Invoked on startup, like a constructor.
         */
        var init = function () {
            $log.log("ApplicationService init application service");

        };
        init();

    };

ApplicationService.$inject = ['$log'];
module.exports = ApplicationService;
