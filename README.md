== README

This repository houses the AngularJS responsive client and the stand-alone Rails API for LOGH located at http://www.loseorgohome.com and http://www.loseorgohome.com/api respectively.

#### Access Token
---

All requests (except for creating a user or creating a session (aka logging in)) require an access token sent via the Authorization Header. Get a valid access token by creating a session like this:

- curl -X POST -H "Content-Type: application/json" -d '{"email":"me@email.com","password":"password"}' http://www.loseorgohome.com/api/sessions

And then you can do this, for example:

- curl -X POST -H "Content-Type: application/json" -H "Authorization: biglongnastytoken" -d '{"league":{"name":"my league","start_week_id":"4","password":"foobar","password_confirmation":"foobar"}}' http://www.loseorgohome.com/api/seasons/9/leagues

#### Non-admin endpoints:

##### Sessions (sign in/out)
---
* POST        /api/sessions                                   [ create session ] { email*, password* }
* DELETE      /api/sessions/destroy                           [ destroy session ]

##### Users
---
* POST        /api/users                                       [ create user ] { email*, first_name*, last_name*, password*, password_confirmation* }
* GET         /api/users/current                               [ show current user ]
* PATCH       /api/users/current                               [ update current user ] { email*, first_name*, last_name*, password, password_confirmation }

##### Seasons
---
* GET         /api/seasons/current                             [ show current season ]

##### Weeks
---
* GET         /api/seasons/:season_id/weeks                    [ season weeks ]
* GET         /api/seasons/:season_id/weeks/available          [ available season weeks ]
* GET         /api/seasons/:season_id/weeks/:id                [ show week ]

##### Leagues
---
* GET         /api/seasons/:season_id/leagues                   [ season leagues ]
* POST        /api/seasons/:season_id/leagues                   [ create league ] { name*, start_week_id*, password*, password_confirmation*, public, max_teams_per_user }
* GET         /api/seasons/:season_id/leagues/:id               [ show league ]
* PATCH/PUT   /api/seasons/:season_id/leagues/:id               [ update league ] { name*, start_week_id*, password, password_confirmation, public, max_teams_per_user }
* DELETE      /api/seasons/:season_id/leagues/:id               [ destroy league ]

##### Invitations
---
* GET         /api/leagues/:league_id/invitations               [ league invitations ]
* POST        /api/leagues/:league_id/invitations               [ create invitation ] { email* }
* DELETE      /api/leagues/:league_id/invitations/:id           [ destroy invitation ]

##### Teams
---
* GET         /api/leagues/:league_id/teams                     [ league teams ]
* POST        /api/leagues/:league_id/teams                     [ create team ] { name*, paid }
* GET         /api/leagues/:league_id/teams/:id                 [ show team ]
* PATCH/PUT   /api/leagues/:league_id/teams/:id                 [ update team ] { name*, paid }
* DELETE      /api/leagues/:league_id/teams/:id                 [ destroy team ]

##### Picks
---
* GET         /api/teams/:team_id/picks                         [ team picks ]
* POST        /api/teams/:team_id/picks                         [ create pick ] { week_id*, week_type_id*, squad_id* }
* GET         /api/teams/:team_id/picks/:id                     [ show pick ]
* PATCH/PUT   /api/teams/:team_id/picks/:id                     [ update pick ] { week_id*, week_type_id*, squad_id* }
* DELETE      /api/teams/:team_id/picks/:id                     [ destroy pick ]

##### Games
---
* GET         /api/weeks/:week_id/games                         [ week games ]
* GET         /api/weeks/:week_id/games/:id                     [ show game ]

#### Admin endpoints:

##### Users
---
* GET         /api/admin/users                                  [ all users ]
* GET         /api/admin/users/:id                              [ show user ]
* PATCH/PUT   /api/admin/users/:id                              [ update user ] { email*, first_name*, last_name*, password, password_confirmation }
* DELETE      /api/admin/users/:id                              [ destroy user ]

##### Seasons
---
* GET         /api/admin/seasons/                               [ all seasons ]
* POST        /api/admin/seasons/                               [ create season ] { name* }
* GET         /api/admin/seasons/:id                            [ show season ]
* PATCH/PUT   /api/admin/seasons/:id                            [ update season ] { name* }
* DELETE      /api/admin/seasons/:id                            [ destroy season ]

##### Weeks
---
* POST        /api/admin/seasons/:season_id/weeks               [ create week ] { number*, starts_at*, week_type_id*, complete }
* PATCH/PUT   /api/admin/seasons/:season_id/weeks/:id           [ update week ] { number*, starts_at*, week_type_id*, complete }
* DELETE      /api/admin/seasons/:season_id/weeks/:id           [ destroy week ]

##### Games
---
* POST        /api/admin/weeks/:week_id/games                   [ create game ] { starts_at*, home_squad_id*, visiting_squad_id*, home_squad_score, visiting_squad_score }
* PATCH/PUT   /api/admin/weeks/:week_id/games/:id               [ update game ] { starts_at*, home_squad_id*, visiting_squad_id*, home_squad_score, visiting_squad_score }
* DELETE      /api/admin/weeks/:week_id/games/:id               [ destroy game ]

##### Leagues
---
* GET        /api/admin/leagues                                 [ all leagues ]


#### Notes:

We all got it coming, kid.

##### Heroku

'heroku config' (to see heroku config settings)

##### Redis

redis-cli -h my-host -p 1234 -a mypassword
KEYS * (to see the keys)