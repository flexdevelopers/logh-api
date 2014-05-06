
commangular.create('GetCurrentUserCommand',
   function($log, userService, userModel) {

    return {

        execute: function() {
            $log.log('GetCurrentUserCommand: getting current user details...');
            var userPromise = userService.getCurrentUser();
            return userPromise;
        },
        onError: function(error) {
            $log.log("GetCurrentUserCommand: failure: " + error.data);
        },
        onResult: function(result) {
            $log.log("GetCurrentUserCommand: success");
        }

    }
});