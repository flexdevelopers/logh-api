commangular.create('SignoutCommand',
    function($log, $state, userService, userModel) {

        return {

            execute: function() {
                $log.debug('SignoutCommand: signing out user...');
                return userService.signout();
            },
            onError: function(error) {
                $log.debug("SignoutCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("SignoutCommand: success");
                userModel.resetUser();
                $state.go('public.home');
            }

        }
    });
