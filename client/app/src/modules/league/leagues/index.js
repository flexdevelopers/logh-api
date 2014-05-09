module.exports = angular.module('loghApp.leagues', [])
    .controller('LeaguesController', require('./LeaguesController'))
    .controller('PublicLeaguesController', require('./PublicLeaguesController'))
    .controller('PrivateLeaguesController', require('./PrivateLeaguesController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.leagues', {
                abstract: true,
                url: 'season/{seasonId}/leagues',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    message: {
                        templateUrl: 'common/modules/message/message.tpl.html',
                        controller: 'MessageController'
                    },
                    content: {
                        templateUrl: 'modules/league/leagues/leagues.tpl.html',
                        controller: 'LeaguesController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('app.leagues.public', {
                url: '/public',
                views: {
                    leaguesContent: {
                        templateUrl: 'modules/league/leagues/leagues.public.tpl.html',
                        controller: 'PublicLeaguesController'
                    }
                },
                resolve: {
                    publicLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getPublicLeagues($stateParams.seasonId);
                    }]
                }
            })
            .state('app.leagues.private', {
                url: '/private',
                views: {
                    leaguesContent: {
                        templateUrl: 'modules/league/leagues/leagues.private.tpl.html',
                        controller: 'PrivateLeaguesController'
                    }
                },
                resolve: {
                    privateLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getPrivateLeagues($stateParams.seasonId);
                    }]
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });

