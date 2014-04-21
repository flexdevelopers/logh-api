
//application commands
require('./GetCurrentUserCommand');
require('./LoginCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand').add('GetCurrentUserCommand');

        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');

    }
);

