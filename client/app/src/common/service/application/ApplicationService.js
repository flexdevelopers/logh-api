var ApplicationService = function($window, $location, $log, messageModel) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            startupProcess();
        };

        var startupProcess = function() {
          forceSsl();
          checkHtml5Storage();
        };

        var forceSsl = function () {
          if ($location.protocol() != 'https') {
            $window.location.href = $location.absUrl().replace('http', 'https');
          }
        };

        var checkHtml5Storage = function() {

          try {
            $window.sessionStorage.foo = 'bar'; // try to use sessionStorage
            $window.localStorage.bar = 'foo'; // try to use localStorage
          } catch (e) {
            messageModel.setMessage({ type: 'danger', content: 'You are in Privacy Mode. This app will not function properly. Turn off Privacy Mode.'}, true);
          }

        };

        /**
         * Invoked on startup, like a constructor.
         */
        var init = function () {
            $log.debug("ApplicationService init application service");
        };
        init();

    };

ApplicationService.$inject = ['$window', '$location', '$log', 'messageModel'];
module.exports = ApplicationService;
