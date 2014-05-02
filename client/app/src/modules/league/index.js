
module.exports = angular.module('loghApp.league', [])
    .controller('LeagueController', require('./LeagueController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.league', {
                abstract: true,
                url: 'seasons/{seasonId}/leagues',
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
                        templateUrl: 'modules/league/league.tpl.html'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('app.league.list', {
                url: '',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.list.tpl.html',
                        controller: 'LeagueController'
                    }
                },
                resolve: {
                    weeks: function() {
                        return [];
                    }
                }
            })
            .state('app.league.new', {
                url: '/new',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.new.tpl.html',
                        controller: 'LeagueController'
                    }
                },
                resolve: {
                    weeks: ['weekService', '$stateParams', function(weekService, $stateParams) {
                        return weekService.getAvailableWeeks($stateParams.seasonId);
                    }]
                }
            })
            .state('app.league.detail', {
                url: '/{leagueId}',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.detail.tpl.html',
                        controller: 'LeagueController'
                    }
                },
                resolve: {
                    weeks: function() {
                        return [];
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
