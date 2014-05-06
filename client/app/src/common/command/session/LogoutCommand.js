
commangular.create('LogoutCommand',
    function($log, $state, userService, userModel) {

        return {

            execute: function() {
                $log.log('LogoutCommand: logging out user...');
                return userService.logout();
            },
            onError: function(error) {
                $log.log("LogoutCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("LogoutCommand: success");
                userModel.resetUser();
                $state.go('public.home');
            }

        }
    });


