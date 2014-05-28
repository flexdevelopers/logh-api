module.exports = angular.module('loghApp.leagues', [])
    .controller('LeaguesController', require('./LeaguesController'))
    .controller('ManageLeaguesController', require('./ManageLeaguesController'))
    .controller('PublicLeaguesController', require('./PublicLeaguesController'))
    .controller('PrivateLeaguesController', require('./PrivateLeaguesController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.leagues', {
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
                        templateUrl: 'modules/private/league/leagues/leagues.tpl.html',
                        controller: 'LeaguesController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('private.leagues.manage', {
                url: '/manage',
                views: {
                    leaguesContent: {
                        templateUrl: 'modules/private/league/leagues/leagues.manage.tpl.html',
                        controller: 'ManageLeaguesController'
                    }
                },
                resolve: {
                    managedLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getManagedLeagues($stateParams.seasonId);
                    }]
                }
            })
            .state('private.leagues.join', {
                url: '/',
                abstract: true,
                views: {
                    leaguesContent: {
                        templateUrl: 'modules/private/league/leagues/leagues.join.tpl.html'
                    }
                }
            })
            .state('private.leagues.join.public', {
                url: 'public',
                views: {
                    joinLeaguesContent: {
                        templateUrl: 'modules/private/league/leagues/leagues.join.public.tpl.html',
                        controller: 'PublicLeaguesController'
                    }
                },
                resolve: {
                    publicLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getPublicLeagues($stateParams.seasonId);
                    }]
                }
            })
            .state('private.leagues.join.private', {
                url: 'private',
                views: {
                    joinLeaguesContent: {
                        templateUrl: 'modules/private/league/leagues/leagues.join.private.tpl.html',
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

