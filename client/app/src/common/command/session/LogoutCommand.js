
commangular.create('LogoutCommand',
    function($log, $state, userService, userModel) {

        return {

            execute: function() {
                $log.debug('LogoutCommand: logging out user...');
                return userService.logout();
            },
            onError: function(error) {
                $log.debug("LogoutCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("LogoutCommand: success");
                userModel.resetUser();
                $state.go('public.home');
            }

        }
    });


