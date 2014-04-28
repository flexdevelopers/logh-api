
commangular.create('GetCurrentUserCommand',
   function($log, userService, userModel) {

    return {

        execute: function() {
            $log.log('GetCurrentUserCommand: Getting current user details...');
            var userPromise = userService.getCurrentUser();
            return userPromise;
        },
        onError: function(error) {
            $log.log("GetCurrentUserCommand: error in GetCurrentUser: " + error.data);
        },
        onResult: function(result) {
            $log.log("GetCurrentUserCommand: current user data result is " + result);
        }

    }
});