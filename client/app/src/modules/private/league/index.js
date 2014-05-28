module.exports = angular.module('loghApp.league', [])
    .controller('LeagueController', require('./LeagueController'))
    .controller('CreateLeagueController', require('./CreateLeagueController'))
    .controller('EditLeagueController', require('./EditLeagueController'))
    .controller('InviteLeagueController', require('./InviteLeagueController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.league', {
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
                        templateUrl: 'modules/private/league/league.tpl.html',
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
            .state('private.league.new', {
                url: '/new',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/private/league/league.new.tpl.html',
                        controller: 'CreateLeagueController'
                    }
                }
            })
            .state('private.league.edit', {
                url: '/{leagueId}/edit',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/private/league/league.edit.tpl.html',
                        controller: 'EditLeagueController'
                    }
                },
                resolve: {
                    league: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
                    }]
                }
            })
            .state('private.league.invite', {
                url: '/{leagueId}/invite',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/private/league/league.invite.tpl.html',
                        controller: 'InviteLeagueController'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
