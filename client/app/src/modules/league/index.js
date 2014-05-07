
module.exports = angular.module('loghApp.league', [])
    .controller('LeaguesController', require('./LeaguesController'))
    .controller('PublicLeaguesController', require('./PublicLeaguesController'))
    .controller('PrivateLeaguesController', require('./PrivateLeaguesController'))
    .controller('LeagueController', require('./LeagueController'))
    .controller('CreateLeagueController', require('./CreateLeagueController'))
    .controller('EditLeagueController', require('./EditLeagueController'))
    .controller('JoinLeagueController', require('./JoinLeagueController'))
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
                        templateUrl: 'modules/league/leagues.tpl.html',
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
                        templateUrl: 'modules/league/leagues.public.tpl.html',
                        controller: 'PublicLeaguesController'
                    }
                },
                resolve: {
                    publicLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getSeasonLeagues($stateParams.seasonId);
                    }]
                }
            })
            .state('app.leagues.private', {
                url: '/private',
                views: {
                    leaguesContent: {
                        templateUrl: 'modules/league/leagues.private.tpl.html',
                        controller: 'PrivateLeaguesController'
                    }
                },
                resolve: {
                    privateLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getSeasonLeagues($stateParams.seasonId);
                    }]
                }
            })
            .state('app.league', {
                abstract: true,
                url: 'season/{seasonId}/league',
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
                        templateUrl: 'modules/league/league.tpl.html',
                        controller: 'LeagueController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                },
                resolve: {
                    weeks: ['weekService', '$stateParams', function(weekService, $stateParams) {
                        return weekService.getAvailableWeeks($stateParams.seasonId);
                    }]
                }
            })
            .state('app.league.new', {
                url: '/new',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.new.tpl.html',
                        controller: 'CreateLeagueController'
                    }
                }
            })
            .state('app.league.detail', {
                abstract: true,
                url: '/{leagueId}',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.detail.tpl.html'
                    }
                },
                resolve: {
                    loadLeague: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
                    }]
                }

            })
            .state('app.league.detail.edit', {
                url: '/edit',
                views: {
                    leagueDetailContent: {
                        templateUrl: 'modules/league/league.edit.tpl.html',
                        controller: 'EditLeagueController'
                    }
                }
            })
            .state('app.league.detail.join', {
                url: '/join',
                views: {
                    leagueDetailContent: {
                        templateUrl: 'modules/league/league.join.tpl.html',
                        controller: 'JoinLeagueController'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
