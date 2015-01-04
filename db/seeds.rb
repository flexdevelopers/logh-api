# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)
##
# create week types
# reg = WeekType.create(description: 'NFL Regular Season')
# play = WeekType.create(description: 'NFL Playoffs')
#
# # create squads
#
# # null squad used for 'no pick' teams
# Squad.create(name: 'None', abbrev: 'NONE')
#
# NFL
#
# # afc east
# bills = Squad.create(name: 'Buffalo Bills', abbrev: 'BUF', squad_type: 'NFL')
# dolphins = Squad.create(name: 'Miami Dolphins', abbrev: 'MIA', squad_type: 'NFL')
# patriots = Squad.create(name: 'New England Patriots', abbrev: 'NE', squad_type: 'NFL')
# jets = Squad.create(name: 'New York Jets', abbrev: 'NYJ', squad_type: 'NFL')
#
# # afc west
# broncos = Squad.create(name: 'Denver Broncos', abbrev: 'DEN', squad_type: 'NFL')
# chiefs = Squad.create(name: 'Kansas City Chiefs', abbrev: 'KC', squad_type: 'NFL')
# raiders = Squad.create(name: 'Oakland Raiders', abbrev: 'OAK', squad_type: 'NFL')
# chargers = Squad.create(name: 'San Diego Chargers', abbrev: 'SD', squad_type: 'NFL')
#
# # afc north
# bengals = Squad.create(name: 'Cincinnati Bengals', abbrev: 'CIN', squad_type: 'NFL')
# browns = Squad.create(name: 'Cleveland Browns', abbrev: 'CLE', squad_type: 'NFL')
# steelers = Squad.create(name: 'Pittsburgh Steelers', abbrev: 'PIT', squad_type: 'NFL')
# ravens = Squad.create(name: 'Baltimore Ravens', abbrev: 'BAL', squad_type: 'NFL')
#
# # afc south
# texans = Squad.create(name: 'Houston Texans', abbrev: 'HOU', squad_type: 'NFL')
# titans = Squad.create(name: 'Tennessee Titans', abbrev: 'TEN', squad_type: 'NFL')
# colts = Squad.create(name: 'Indianapolis Colts', abbrev: 'IND', squad_type: 'NFL')
# jaguars = Squad.create(name: 'Jacksonville Jaguars', abbrev: 'JAC', squad_type: 'NFL')
#
# # nfc east
# cowboys = Squad.create(name: 'Dallas Cowboys', abbrev: 'DAL', squad_type: 'NFL')
# giants = Squad.create(name: 'New York Giants', abbrev: 'NYG', squad_type: 'NFL')
# eagles = Squad.create(name: 'Philadelphia Eagles', abbrev: 'PHI', squad_type: 'NFL')
# redskins = Squad.create(name: 'Washington Redskins', abbrev: 'WAS', squad_type: 'NFL')
#
# # nfc west
# rams = Squad.create(name: 'St. Louis Rams', abbrev: 'STL', squad_type: 'NFL')
# cardinals = Squad.create(name: 'Arizona Cardinals', abbrev: 'ARI', squad_type: 'NFL')
# niners = Squad.create(name: 'San Francisco 49ers', abbrev: 'SF', squad_type: 'NFL')
# seahawks = Squad.create(name: 'Seattle Seahawks', abbrev: 'SEA', squad_type: 'NFL')
#
# # nfc north
# bears = Squad.create(name: 'Chicago Bears', abbrev: 'CHI', squad_type: 'NFL')
# lions = Squad.create(name: 'Detroit Lions', abbrev: 'DET', squad_type: 'NFL')
# packers = Squad.create(name: 'Green Bay Packers', abbrev: 'GB', squad_type: 'NFL')
# vikings = Squad.create(name: 'Minnesota Vikings', abbrev: 'MIN', squad_type: 'NFL')
#
# # nfc south
# falcons = Squad.create(name: 'Atlanta Falcons', abbrev: 'ATL', squad_type: 'NFL')
# saints = Squad.create(name: 'New Orleans Saints', abbrev: 'NO', squad_type: 'NFL')
# bucs = Squad.create(name: 'Tampa Bay Buccaneers', abbrev: 'TB', squad_type: 'NFL')
# panthers = Squad.create(name: 'Carolina Panthers', abbrev: 'CAR', squad_type: 'NFL')
#
# # create nfl season
# season1 = Season.create!(name: '2014-15 NFL Season', starts_at: Time.zone.parse('2014-07-31 06:00'), ends_at: Time.zone.parse('2015-02-02 06:00'))
#
# # create regular season weeks
# week1 = Week.create!(number: 1, week_type: reg, starts_at: Time.zone.parse('2014-09-01 06:00'), ends_at: Time.zone.parse('2014-09-08 23:59'), season: season1)
# week2 = Week.create!(number: 2, week_type: reg, starts_at: Time.zone.parse('2014-09-09 06:00'), ends_at: Time.zone.parse('2014-09-15 23:59'), season: season1)
# week3 = Week.create!(number: 3, week_type: reg, starts_at: Time.zone.parse('2014-09-16 06:00'), ends_at: Time.zone.parse('2014-09-22 23:59'), season: season1)
# week4 = Week.create!(number: 4, week_type: reg, starts_at: Time.zone.parse('2014-09-23 06:00'), ends_at: Time.zone.parse('2014-09-29 23:59'), season: season1)
# week5 = Week.create!(number: 5, week_type: reg, starts_at: Time.zone.parse('2014-09-30 06:00'), ends_at: Time.zone.parse('2014-10-06 23:59'), season: season1)
# week6 = Week.create!(number: 6, week_type: reg, starts_at: Time.zone.parse('2014-10-07 06:00'), ends_at: Time.zone.parse('2014-10-13 23:59'), season: season1)
# week7 = Week.create!(number: 7, week_type: reg, starts_at: Time.zone.parse('2014-10-14 06:00'), ends_at: Time.zone.parse('2014-10-20 23:59'), season: season1)
# week8 = Week.create!(number: 8, week_type: reg, starts_at: Time.zone.parse('2014-10-21 06:00'), ends_at: Time.zone.parse('2014-10-27 23:59'), season: season1)
# week9 = Week.create!(number: 9, week_type: reg, starts_at: Time.zone.parse('2014-10-28 06:00'), ends_at: Time.zone.parse('2014-11-03 23:59'), season: season1)
# week10 = Week.create!(number: 10, week_type: reg, starts_at: Time.zone.parse('2014-11-04 06:00'), ends_at: Time.zone.parse('2014-11-10 23:59'), season: season1)
# week11 = Week.create!(number: 11, week_type: reg, starts_at: Time.zone.parse('2014-11-11 06:00'), ends_at: Time.zone.parse('2014-11-17 23:59'), season: season1)
# week12 = Week.create!(number: 12, week_type: reg, starts_at: Time.zone.parse('2014-11-18 06:00'), ends_at: Time.zone.parse('2014-11-24 23:59'), season: season1)
# week13 = Week.create!(number: 13, week_type: reg, starts_at: Time.zone.parse('2014-11-25 06:00'), ends_at: Time.zone.parse('2014-12-01 23:59'), season: season1)
# week14 = Week.create!(number: 14, week_type: reg, starts_at: Time.zone.parse('2014-12-02 06:00'), ends_at: Time.zone.parse('2014-12-08 23:59'), season: season1)
# week15 = Week.create!(number: 15, week_type: reg, starts_at: Time.zone.parse('2014-12-09 06:00'), ends_at: Time.zone.parse('2014-12-15 23:59'), season: season1)
# week16 = Week.create!(number: 16, week_type: reg, starts_at: Time.zone.parse('2014-12-16 06:00'), ends_at: Time.zone.parse('2014-12-22 23:59'), season: season1)
# week17 = Week.create!(number: 17, week_type: reg, starts_at: Time.zone.parse('2014-12-23 06:00'), ends_at: Time.zone.parse('2014-12-28 23:59'), season: season1)
#
# # create playoff weeks
# week18 = Week.create!(number: 18, week_type: play, starts_at: Time.zone.parse('2014-12-29 06:00'), ends_at: Time.zone.parse('2015-01-04 23:59'), season: season1)
# week19 = Week.create!(number: 19, week_type: play, starts_at: Time.zone.parse('2015-01-05 06:00'), ends_at: Time.zone.parse('2015-01-11 23:59'), season: season1)
# week20 = Week.create!(number: 20, week_type: play, starts_at: Time.zone.parse('2015-01-12 06:00'), ends_at: Time.zone.parse('2015-01-18 23:59'), season: season1)
# week21 = Week.create!(number: 21, week_type: play, starts_at: Time.zone.parse('2015-01-19 06:00'), ends_at: Time.zone.parse('2015-02-01 23:59'), season: season1)
#
# # create games
# # week 1
# Game.create!(starts_at: Time.zone.parse('2014-09-04 20:30'), week: week1, visiting_squad: packers, home_squad: seahawks)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: saints, home_squad: falcons)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: bills, home_squad: bears)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: titans, home_squad: chiefs)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: vikings, home_squad: rams)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: patriots, home_squad: dolphins)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: raiders, home_squad: jets)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: jaguars, home_squad: eagles)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: browns, home_squad: steelers)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: bengals, home_squad: ravens)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: redskins, home_squad: texans)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 16:25'), week: week1, visiting_squad: niners, home_squad: cowboys)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 16:25'), week: week1, visiting_squad: panthers, home_squad: bucs)
# Game.create!(starts_at: Time.zone.parse('2014-09-07 20:30'), week: week1, visiting_squad: colts, home_squad: broncos)
# Game.create!(starts_at: Time.zone.parse('2014-09-08 19:10'), week: week1, visiting_squad: giants, home_squad: lions)
# Game.create!(starts_at: Time.zone.parse('2014-09-08 22:20'), week: week1, visiting_squad: chargers, home_squad: cardinals)
#
# # week 18
# Game.create!(starts_at: Time.zone.parse('2015-01-03 13:00'), week: week18, visiting_squad: giants, home_squad: seahawks)
# Game.create!(starts_at: Time.zone.parse('2015-01-03 13:00'), week: week18, visiting_squad: packers, home_squad: eagles)
# Game.create!(starts_at: Time.zone.parse('2015-01-04 13:00'), week: week18, visiting_squad: patriots, home_squad: chargers)
# Game.create!(starts_at: Time.zone.parse('2015-01-04 13:00'), week: week18, visiting_squad: broncos, home_squad: browns)
#
# # week 19
# Game.create!(starts_at: Time.zone.parse('2015-01-10 13:00'), week: week19, visiting_squad: giants, home_squad: niners)
# Game.create!(starts_at: Time.zone.parse('2015-01-10 13:00'), week: week19, visiting_squad: packers, home_squad: saints)
# Game.create!(starts_at: Time.zone.parse('2015-01-11 13:00'), week: week19, visiting_squad: patriots, home_squad: ravens)
# Game.create!(starts_at: Time.zone.parse('2015-01-11 13:00'), week: week19, visiting_squad: broncos, home_squad: colts)
#
# # week 20
# Game.create!(starts_at: Time.zone.parse('2015-01-17 13:00'), week: week20, visiting_squad: packers, home_squad: niners)
# Game.create!(starts_at: Time.zone.parse('2015-01-18 13:00'), week: week20, visiting_squad: broncos, home_squad: ravens)
#
# # week 21
# Game.create!(starts_at: Time.zone.parse('2015-02-01 13:00'), week: week21, visiting_squad: broncos, home_squad: niners)
#
# NBA
#
# hawks = Squad.create(name: 'Atlanta Hawks', abbrev: 'ATL', squad_type: 'NBA')
# nets = Squad.create(name: 'Brooklyn Nets', abbrev: 'BKN', squad_type: 'NBA')
# celtics = Squad.create(name: 'Boston Celtics', abbrev: 'BOS', squad_type: 'NBA')
# hornets = Squad.create(name: 'Charlotte Hornets', abbrev: 'CHA', squad_type: 'NBA')
# bulls = Squad.create(name: 'Chicago Bulls', abbrev: 'CHI', squad_type: 'NBA')
# cavs = Squad.create(name: 'Cleveland Cavaliers', abbrev: 'CLE', squad_type: 'NBA')
# mavs = Squad.create(name: 'Dallas Mavericks', abbrev: 'DAL', squad_type: 'NBA')
# nuggets = Squad.create(name: 'Denver Nuggets', abbrev: 'DEN', squad_type: 'NBA')
# pistons = Squad.create(name: 'Detroit Pistons', abbrev: 'DET', squad_type: 'NBA')
# warriors = Squad.create(name: 'Golden State Warriors', abbrev: 'GSW', squad_type: 'NBA')
# rockets = Squad.create(name: 'Houston Rockets', abbrev: 'HOU', squad_type: 'NBA')
# pacers = Squad.create(name: 'Indiana Pacers', abbrev: 'IND', squad_type: 'NBA')
# clippers = Squad.create(name: 'Los Angeles Clippers', abbrev: 'LAC', squad_type: 'NBA')
# lakers = Squad.create(name: 'Los Angeles Lakers', abbrev: 'LAL', squad_type: 'NBA')
# grizzlies = Squad.create(name: 'Memphis Grizzlies', abbrev: 'MEM', squad_type: 'NBA')
# heat = Squad.create(name: 'Miami Heat', abbrev: 'MIA', squad_type: 'NBA')
# bucks = Squad.create(name: 'Milwaukee Bucks', abbrev: 'MIL', squad_type: 'NBA')
# timberwolves = Squad.create(name: 'Minnesota Timberwolves', abbrev: 'MIN', squad_type: 'NBA')
# pelicans = Squad.create(name: 'New Orleans Pelicans', abbrev: 'NOP', squad_type: 'NBA')
# knicks = Squad.create(name: 'New York Knicks', abbrev: 'NYK', squad_type: 'NBA')
# thunder = Squad.create(name: 'Oklahoma City Thunder', abbrev: 'OKC', squad_type: 'NBA')
# magic = Squad.create(name: 'Orlando Magic', abbrev: 'ORL', squad_type: 'NBA')
# sixers = Squad.create(name: 'Philadelphia 76ers', abbrev: 'PHI', squad_type: 'NBA')
# suns = Squad.create(name: 'Phoenix Suns', abbrev: 'PHX', squad_type: 'NBA')
# blazers = Squad.create(name: 'Portland Trail Blazers', abbrev: 'POR', squad_type: 'NBA')
# kings = Squad.create(name: 'Sacramento Kings', abbrev: 'SAC', squad_type: 'NBA')
# spurs = Squad.create(name: 'San Antonio Spurs', abbrev: 'SAN', squad_type: 'NBA')
# raptors = Squad.create(name: 'Toronto Raptors', abbrev: 'TOR', squad_type: 'NBA')
# jazz = Squad.create(name: 'Utah Jazz', abbrev: 'UTA', squad_type: 'NBA')
# wizards = Squad.create(name: 'Washington Wizards', abbrev: 'WAS', squad_type: 'NBA')
#
# nba_reg = WeekType.create(description: 'NBA Regular Season')
# nba_play = WeekType.create(description: 'NBA Playoffs')
# nba_season = Season.create!(name: '2014-15 NBA Season', starts_at: Time.zone.parse('2014-09-30 06:00'), ends_at: Time.zone.parse('2015-07-01 06:00'))
#
# week1 = Week.create!(number: 1, week_type: nba_reg, starts_at: Time.zone.parse('2014-10-27 06:00'), ends_at: Time.zone.parse('2014-11-02 23:59'), season: nba_season)
# week2 = Week.create!(number: 2, week_type: nba_reg, starts_at: Time.zone.parse('2014-11-03 06:00'), ends_at: Time.zone.parse('2014-11-09 23:59'), season: nba_season)
# week3 = Week.create!(number: 3, week_type: nba_reg, starts_at: Time.zone.parse('2014-11-10 06:00'), ends_at: Time.zone.parse('2014-11-16 23:59'), season: nba_season)
# week4 = Week.create!(number: 4, week_type: nba_reg, starts_at: Time.zone.parse('2014-11-17 06:00'), ends_at: Time.zone.parse('2014-11-23 23:59'), season: nba_season)
# week5 = Week.create!(number: 5, week_type: nba_reg, starts_at: Time.zone.parse('2014-11-24 06:00'), ends_at: Time.zone.parse('2014-11-30 23:59'), season: nba_season)
# week6 = Week.create!(number: 6, week_type: nba_reg, starts_at: Time.zone.parse('2014-12-01 06:00'), ends_at: Time.zone.parse('2014-12-07 23:59'), season: nba_season)
# week7 = Week.create!(number: 7, week_type: nba_reg, starts_at: Time.zone.parse('2014-12-08 06:00'), ends_at: Time.zone.parse('2014-12-14 23:59'), season: nba_season)
# week8 = Week.create!(number: 8, week_type: nba_reg, starts_at: Time.zone.parse('2014-12-15 06:00'), ends_at: Time.zone.parse('2014-12-21 23:59'), season: nba_season)
# week9 = Week.create!(number: 9, week_type: nba_reg, starts_at: Time.zone.parse('2014-12-22 06:00'), ends_at: Time.zone.parse('2014-12-28 23:59'), season: nba_season)
# week10 = Week.create!(number: 10, week_type: nba_reg, starts_at: Time.zone.parse('2014-12-29 06:00'), ends_at: Time.zone.parse('2015-01-04 23:59'), season: nba_season)
# week11 = Week.create!(number: 11, week_type: nba_reg, starts_at: Time.zone.parse('2015-01-05 06:00'), ends_at: Time.zone.parse('2015-01-11 23:59'), season: nba_season)
# week12 = Week.create!(number: 12, week_type: nba_reg, starts_at: Time.zone.parse('2015-01-12 06:00'), ends_at: Time.zone.parse('2015-01-18 23:59'), season: nba_season)
# week13 = Week.create!(number: 13, week_type: nba_reg, starts_at: Time.zone.parse('2015-01-19 06:00'), ends_at: Time.zone.parse('2015-01-25 23:59'), season: nba_season)
# week14 = Week.create!(number: 14, week_type: nba_reg, starts_at: Time.zone.parse('2015-01-26 06:00'), ends_at: Time.zone.parse('2015-02-01 23:59'), season: nba_season)
# week15 = Week.create!(number: 15, week_type: nba_reg, starts_at: Time.zone.parse('2015-02-02 06:00'), ends_at: Time.zone.parse('2015-02-08 23:59'), season: nba_season)
# week16 = Week.create!(number: 16, week_type: nba_reg, starts_at: Time.zone.parse('2015-02-09 06:00'), ends_at: Time.zone.parse('2015-02-15 23:59'), season: nba_season)
# week17 = Week.create!(number: 17, week_type: nba_reg, starts_at: Time.zone.parse('2015-02-16 06:00'), ends_at: Time.zone.parse('2015-02-22 23:59'), season: nba_season)
# week18 = Week.create!(number: 18, week_type: nba_reg, starts_at: Time.zone.parse('2015-02-23 06:00'), ends_at: Time.zone.parse('2015-03-01 23:59'), season: nba_season)
# week19 = Week.create!(number: 19, week_type: nba_reg, starts_at: Time.zone.parse('2015-03-02 06:00'), ends_at: Time.zone.parse('2015-03-08 23:59'), season: nba_season)
# week20 = Week.create!(number: 20, week_type: nba_reg, starts_at: Time.zone.parse('2015-03-09 06:00'), ends_at: Time.zone.parse('2015-03-15 23:59'), season: nba_season)
# week21 = Week.create!(number: 21, week_type: nba_reg, starts_at: Time.zone.parse('2015-03-16 06:00'), ends_at: Time.zone.parse('2015-03-22 23:59'), season: nba_season)
# week22 = Week.create!(number: 22, week_type: nba_reg, starts_at: Time.zone.parse('2015-03-23 06:00'), ends_at: Time.zone.parse('2015-03-29 23:59'), season: nba_season)
# week23 = Week.create!(number: 23, week_type: nba_reg, starts_at: Time.zone.parse('2015-03-30 06:00'), ends_at: Time.zone.parse('2015-04-05 23:59'), season: nba_season)
# week24 = Week.create!(number: 24, week_type: nba_reg, starts_at: Time.zone.parse('2015-04-06 06:00'), ends_at: Time.zone.parse('2015-04-12 23:59'), season: nba_season)
# week25 = Week.create!(number: 25, week_type: nba_reg, starts_at: Time.zone.parse('2015-04-13 06:00'), ends_at: Time.zone.parse('2015-04-15 23:59'), season: nba_season)
#
# week26 = Week.create!(number: 26, week_type: nba_play, starts_at: Time.zone.parse('2015-04-16 06:00'), ends_at: Time.zone.parse('2015-04-30 23:59'), season: nba_season)
# week27 = Week.create!(number: 27, week_type: nba_play, starts_at: Time.zone.parse('2015-05-01 06:00'), ends_at: Time.zone.parse('2015-05-15 23:59'), season: nba_season)
# week27 = Week.create!(number: 28, week_type: nba_play, starts_at: Time.zone.parse('2015-05-16 06:00'), ends_at: Time.zone.parse('2015-05-31 23:59'), season: nba_season)
# week27 = Week.create!(number: 29, week_type: nba_play, starts_at: Time.zone.parse('2015-06-01 06:00'), ends_at: Time.zone.parse('2015-06-15 23:59'), season: nba_season)
#
# # create games
# # week 1 (10/27 - 11/2)
# Game.create!(starts_at: Time.zone.parse('2014-10-28 20:00'), week: week1, visiting_squad: magic, home_squad: pelicans)
# Game.create!(starts_at: Time.zone.parse('2014-10-28 20:00'), week: week1, visiting_squad: mavs, home_squad: spurs)
# Game.create!(starts_at: Time.zone.parse('2014-10-28 20:00'), week: week1, visiting_squad: rockets, home_squad: lakers)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: sixers, home_squad: pacers)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: bucks, home_squad: hornets)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: nets, home_squad: celtics)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: wizards, home_squad: heat)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: hawks, home_squad: raptors)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: bulls, home_squad: knicks)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: timberwolves, home_squad: grizzlies)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: pistons, home_squad: nuggets)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: rockets, home_squad: jazz)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: lakers, home_squad: suns)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: warriors, home_squad: kings)
# Game.create!(starts_at: Time.zone.parse('2014-10-29 20:00'), week: week1, visiting_squad: thunder, home_squad: blazers)
# Game.create!(starts_at: Time.zone.parse('2014-10-30 20:00'), week: week1, visiting_squad: wizards, home_squad: magic)
# Game.create!(starts_at: Time.zone.parse('2014-10-30 20:00'), week: week1, visiting_squad: knicks, home_squad: cavs)
# Game.create!(starts_at: Time.zone.parse('2014-10-30 20:00'), week: week1, visiting_squad: pistons, home_squad: timberwolves)
# Game.create!(starts_at: Time.zone.parse('2014-10-30 20:00'), week: week1, visiting_squad: jazz, home_squad: mavs)
# Game.create!(starts_at: Time.zone.parse('2014-10-30 20:00'), week: week1, visiting_squad: thunder, home_squad: clippers)
# Game.create!(starts_at: Time.zone.parse('2014-10-31 20:00'), week: week1, visiting_squad: grizzlies, home_squad: pacers)
# Game.create!(starts_at: Time.zone.parse('2014-10-31 20:00'), week: week1, visiting_squad: cavs, home_squad: bulls)
# Game.create!(starts_at: Time.zone.parse('2014-10-31 20:00'), week: week1, visiting_squad: sixers, home_squad: bucks)
# Game.create!(starts_at: Time.zone.parse('2014-10-31 20:00'), week: week1, visiting_squad: spurs, home_squad: suns)
# Game.create!(starts_at: Time.zone.parse('2014-10-31 20:00'), week: week1, visiting_squad: blazers, home_squad: kings)
# Game.create!(starts_at: Time.zone.parse('2014-10-31 20:00'), week: week1, visiting_squad: clippers, home_squad: lakers)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: mavs, home_squad: pelicans)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: raptors, home_squad: magic)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: heat, home_squad: sixers)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: bucks, home_squad: wizards)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: grizzlies, home_squad: hornets)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: pacers, home_squad: hawks)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: nets, home_squad: pistons)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: celtics, home_squad: rockets)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: bulls, home_squad: timberwolves)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: nuggets, home_squad: thunder)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: suns, home_squad: jazz)
# Game.create!(starts_at: Time.zone.parse('2014-11-01 20:00'), week: week1, visiting_squad: lakers, home_squad: warriors)
# Game.create!(starts_at: Time.zone.parse('2014-11-02 20:00'), week: week1, visiting_squad: kings, home_squad: clippers)
# Game.create!(starts_at: Time.zone.parse('2014-11-02 20:00'), week: week1, visiting_squad: raptors, home_squad: heat)
# Game.create!(starts_at: Time.zone.parse('2014-11-02 20:00'), week: week1, visiting_squad: hornets, home_squad: knicks)
# Game.create!(starts_at: Time.zone.parse('2014-11-02 20:00'), week: week1, visiting_squad: warriors, home_squad: blazers)
#
# NHL
#
# Squad.create(name: 'Tampa Bay Lightning', abbrev: 'TBL', squad_type: 'NHL')
# Squad.create(name: 'Montreal Canadiens', abbrev: 'MTL', squad_type: 'NHL')
# Squad.create(name: 'Detroit Red Wings', abbrev: 'DET', squad_type: 'NHL')
# Squad.create(name: 'Toronto Maple Leafs', abbrev: 'TOR', squad_type: 'NHL')
# Squad.create(name: 'Boston Bruins', abbrev: 'BOS', squad_type: 'NHL')
# Squad.create(name: 'Buffalo Sabres', abbrev: 'BUF', squad_type: 'NHL')
# Squad.create(name: 'Ottawa Senators', abbrev: 'OTT', squad_type: 'NHL')
# Squad.create(name: 'Florida Panthers', abbrev: 'FLA', squad_type: 'NHL')
# Squad.create(name: 'Chicago Blackhawks', abbrev: 'CHI', squad_type: 'NHL')
# Squad.create(name: 'Dallas Stars', abbrev: 'DAL', squad_type: 'NHL')
# Squad.create(name: 'Colorado Avalanche', abbrev: 'COL', squad_type: 'NHL')
# Squad.create(name: 'St. Louis Blues', abbrev: 'STL', squad_type: 'NHL')
# Squad.create(name: 'Nashville Predators', abbrev: 'NSH', squad_type: 'NHL')
# Squad.create(name: 'Winnipeg Jets', abbrev: 'WPG', squad_type: 'NHL')
# Squad.create(name: 'Minnesota Wild', abbrev: 'MIN', squad_type: 'NHL')
# Squad.create(name: 'Carolina Hurricanes', abbrev: 'CAR', squad_type: 'NHL')
# Squad.create(name: 'New Jersey Devils', abbrev: 'NJD', squad_type: 'NHL')
# Squad.create(name: 'New York Islanders', abbrev: 'NYI', squad_type: 'NHL')
# Squad.create(name: 'New York Rangers', abbrev: 'NYR', squad_type: 'NHL')
# Squad.create(name: 'Philadelphia Flyers', abbrev: 'PHI', squad_type: 'NHL')
# Squad.create(name: 'Pittsburgh Penguins', abbrev: 'PIT', squad_type: 'NHL')
# Squad.create(name: 'Washington Capitals', abbrev: 'WSH', squad_type: 'NHL')
# Squad.create(name: 'Columbus Blue Jackets', abbrev: 'CBJ', squad_type: 'NHL')
# Squad.create(name: 'Calgary Flames', abbrev: 'CGY', squad_type: 'NHL')
# Squad.create(name: 'Edmonton Oilers', abbrev: 'EDM', squad_type: 'NHL')
# Squad.create(name: 'Los Angeles Kings', abbrev: 'LAK', squad_type: 'NHL')
# Squad.create(name: 'San Jose Sharks', abbrev: 'SJS', squad_type: 'NHL')
# Squad.create(name: 'Vancouver Canucks', abbrev: 'VAN', squad_type: 'NHL')
# Squad.create(name: 'Arizona Coyotes', abbrev: 'ARI', squad_type: 'NHL')
# Squad.create(name: 'Anaheim Ducks', abbrev: 'ANA', squad_type: 'NHL')
#
# Week.create!(name: 'Week 1', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-10-6 06:00'), ends_at: Time.zone.parse('2014-10-12 23:59'), season_id: 3)
# Week.create!(name: 'Week 2', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-10-13 06:00'), ends_at: Time.zone.parse('2014-10-19 23:59'), season_id: 3)
# Week.create!(name: 'Week 3', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-10-20 06:00'), ends_at: Time.zone.parse('2014-10-26 23:59'), season_id: 3)
# Week.create!(name: 'Week 4', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-10-27 06:00'), ends_at: Time.zone.parse('2014-11-2 23:59'), season_id: 3)
# Week.create!(name: 'Week 5', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-11-3 06:00'), ends_at: Time.zone.parse('2014-11-9 23:59'), season_id: 3)
# Week.create!(name: 'Week 6', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-11-10 06:00'), ends_at: Time.zone.parse('2014-11-16 23:59'), season_id: 3)
# Week.create!(name: 'Week 7', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-11-17 06:00'), ends_at: Time.zone.parse('2014-11-23 23:59'), season_id: 3)
# Week.create!(name: 'Week 8', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-11-24 06:00'), ends_at: Time.zone.parse('2014-11-30 23:59'), season_id: 3)
# Week.create!(name: 'Week 9', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-12-1 06:00'), ends_at: Time.zone.parse('2014-12-7 23:59'), season_id: 3)
# Week.create!(name: 'Week 10', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-12-8 06:00'), ends_at: Time.zone.parse('2014-12-14 23:59'), season_id: 3)
# Week.create!(name: 'Week 11', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-12-15 06:00'), ends_at: Time.zone.parse('2014-12-21 23:59'), season_id: 3)
# Week.create!(name: 'Week 12', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-12-22 06:00'), ends_at: Time.zone.parse('2014-12-28 23:59'), season_id: 3)
# Week.create!(name: 'Week 13', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2014-12-29 06:00'), ends_at: Time.zone.parse('2015-1-4 23:59'), season_id: 3)
# Week.create!(name: 'Week 14', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-1-5 06:00'), ends_at: Time.zone.parse('2015-1-11 23:59'), season_id: 3)
# Week.create!(name: 'Week 15', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-1-12 06:00'), ends_at: Time.zone.parse('2015-1-18 23:59'), season_id: 3)
# Week.create!(name: 'Week 16', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-1-19 06:00'), ends_at: Time.zone.parse('2015-1-25 23:59'), season_id: 3)
# Week.create!(name: 'Week 17', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-1-26 06:00'), ends_at: Time.zone.parse('2015-2-1 23:59'), season_id: 3)
# Week.create!(name: 'Week 18', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-2-2 06:00'), ends_at: Time.zone.parse('2015-2-8 23:59'), season_id: 3)
# Week.create!(name: 'Week 19', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-2-9 06:00'), ends_at: Time.zone.parse('2015-2-15 23:59'), season_id: 3)
# Week.create!(name: 'Week 20', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-2-16 06:00'), ends_at: Time.zone.parse('2015-2-22 23:59'), season_id: 3)
# Week.create!(name: 'Week 21', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-2-23 06:00'), ends_at: Time.zone.parse('2015-3-1 23:59'), season_id: 3)
# Week.create!(name: 'Week 22', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-3-2 06:00'), ends_at: Time.zone.parse('2015-3-8 23:59'), season_id: 3)
# Week.create!(name: 'Week 23', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-3-9 06:00'), ends_at: Time.zone.parse('2015-3-15 23:59'), season_id: 3)
# Week.create!(name: 'Week 24', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-3-16 06:00'), ends_at: Time.zone.parse('2015-3-22 23:59'), season_id: 3)
# Week.create!(name: 'Week 25', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-3-23 06:00'), ends_at: Time.zone.parse('2015-3-29 23:59'), season_id: 3)
# Week.create!(name: 'Week 26', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-3-30 06:00'), ends_at: Time.zone.parse('2015-4-5 23:59'), season_id: 3)
# Week.create!(name: 'Week 27', description: 'Choose the loser of a game', week_type_id: 1, starts_at: Time.zone.parse('2015-4-6 06:00'), ends_at: Time.zone.parse('2015-4-12 23:59'), season_id: 3)
#
# Week.create!(name: 'Round 1', description: 'Choose the loser of a series', week_type_id: 2, starts_at: Time.zone.parse('2015-4-13 06:00'), ends_at: Time.zone.parse('2015-4-26 23:59'), season_id: 3)
# Week.create!(name: 'Round 2', description: 'Choose the loser of a series', week_type_id: 2, starts_at: Time.zone.parse('2015-4-27 06:00'), ends_at: Time.zone.parse('2015-5-10 23:59'), season_id: 3)
# Week.create!(name: 'Conference Finals', description: 'Choose the loser of a series', week_type_id: 2, starts_at: Time.zone.parse('2015-5-11 06:00'), ends_at: Time.zone.parse('2015-5-24 23:59'), season_id: 3)
# Week.create!(name: 'Stanley Cup Finals', description: 'Choose the loser of the finals', week_type_id: 2, starts_at: Time.zone.parse('2015-5-25 06:00'), ends_at: Time.zone.parse('2015-6-7 23:59'), season_id: 3)







