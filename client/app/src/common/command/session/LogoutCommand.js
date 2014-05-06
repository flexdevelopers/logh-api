
commangular.create('LogoutCommand',
    function($log, userService, userModel) {

        return {

            execute: function() {
                $log.log('LogoutCommand: Logout user');
                return userService.logout();
            },
            onError: function(error) {
                $log.log("LogoutCommand: error in logout: " + error.data);
            },
            onResult: function(result) {
                $log.log("LogoutCommand: logout successful");
                userModel.resetUser();
            }

        }
    });


