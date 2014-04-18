
//application commands
require('./GetUserCommand');
require('./LoginCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        $commangularProvider.mapTo('GetUserEvent').asSequence()
            .add('GetUserCommand');

        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand');

    }
);

