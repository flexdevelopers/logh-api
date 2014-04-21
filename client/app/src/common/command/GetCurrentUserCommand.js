
commangular.create('GetCurrentUserCommand',
   function($log, userService) {

    return {

        execute: function() {
            $log.log('GetCurrentUserCommand: Getting current user details...');
            var userPromise = userService.getCurrentUser();
            return userPromise;
        },
        onError : function(error) {
            $log.log("GetCurrentUserCommand: error in GetCurrentUser: " + error.data);
//            $state.go('app.registration.login');
        },
        onResult : function(result) {
            $log.log("GetCurrentUserCommand: current user data result is " + result);
        }

    }
});