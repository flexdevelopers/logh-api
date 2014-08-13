# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Reference data
WeekType.destroy_all
Squad.destroy_all

# create week types
WeekType.create(code: 'reg', description: 'Regular Season')
WeekType.create(code: 'play', description: 'Playoff')

# create squads
# afc east
bills = Squad.create(name: 'Buffalo Bills', abbrev: 'BUF')
dolphins = Squad.create(name: 'Miami Dolphins', abbrev: 'MIA')
patriots = Squad.create(name: 'New England Patriots', abbrev: 'NEP')
jets = Squad.create(name: 'New York Jets', abbrev: 'NYJ')

# afc west
broncos = Squad.create(name: 'Denver Broncos', abbrev: 'DEN')
chiefs = Squad.create(name: 'Kansas City Chiefs', abbrev: 'KCC')
raiders = Squad.create(name: 'Oakland Raiders', abbrev: 'OAK')
chargers = Squad.create(name: 'San Diego Chargers', abbrev: 'SDC')

# afc north
bengals = Squad.create(name: 'Cincinnati Bengals', abbrev: 'BEN')
browns = Squad.create(name: 'Cleveland Browns', abbrev: 'BUF')
steelers = Squad.create(name: 'Pittsburgh Steelers', abbrev: 'BUF')
ravens = Squad.create(name: 'Baltimore Ravens', abbrev: 'BUF')

# afc south
texans = Squad.create(name: 'Houston Texans', abbrev: 'BUF')
titans = Squad.create(name: 'Tennessee Titans', abbrev: 'BUF')
colts = Squad.create(name: 'Indianapolis Colts', abbrev: 'BUF')
jaguars = Squad.create(name: 'Jacksonville Jaguars', abbrev: 'BUF')

# nfc east
cowboys = Squad.create(name: 'Dallas Cowboys', abbrev: 'BUF')
giants = Squad.create(name: 'New York Giants', abbrev: 'BUF')
eagles = Squad.create(name: 'Philadelphia Eagles', abbrev: 'BUF')
redskins = Squad.create(name: 'Washington Redskins', abbrev: 'BUF')

# nfc west
rams = Squad.create(name: 'St. Louis Rams', abbrev: 'BUF')
cardinals = Squad.create(name: 'Arizona Cardinals', abbrev: 'BUF')
niners = Squad.create(name: 'San Francisco 49ers', abbrev: 'BUF')
seahawks = Squad.create(name: 'Seattle Seahawks', abbrev: 'BUF')

# nfc north
bears = Squad.create(name: 'Chicago Bears', abbrev: 'BUF')
lions = Squad.create(name: 'Detroit Lions', abbrev: 'BUF')
packers = Squad.create(name: 'Green Bay Packers', abbrev: 'BUF')
vikings = Squad.create(name: 'Minnesota Vikings', abbrev: 'BUF')

# nfc south
falcons = Squad.create(name: 'Atlanta Falcons', abbrev: 'BUF')
saints = Squad.create(name: 'New Orleans Saints', abbrev: 'BUF')
bucs = Squad.create(name: 'Tampa Bay Buccaneers', abbrev: 'BUF')
panthers = Squad.create(name: 'Carolina Panthers', abbrev: 'BUF')

# Transactional data
Season.destroy_all
Week.destroy_all
Game.destroy_all

User.destroy_all
League.destroy_all
Team.destroy_all
Pick.destroy_all

Loser.destroy_all

# create seasons
season1 = Season.create!(name: '2014-15 NFL Season', active: true, ends_at: Time.zone.parse('2015-02-02 06:00'))
season2 = Season.create!(name: '2015-16 NFL Season', active: false, ends_at: Time.zone.parse('2016-02-03 06:00'))

# create regular season weeks
week1 = Week.create!(number: 1, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-09-02 06:00'), ends_at: Time.zone.parse('2014-09-08 23:59'), season: season1)
week2 = Week.create!(number: 2, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-09-09 06:00'), ends_at: Time.zone.parse('2014-09-15 23:59'), season: season1)
week3 = Week.create!(number: 3, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-09-16 06:00'), ends_at: Time.zone.parse('2014-09-22 23:59'), season: season1)
week4 = Week.create!(number: 4, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-09-23 06:00'), ends_at: Time.zone.parse('2014-09-29 23:59'), season: season1)
week5 = Week.create!(number: 5, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-09-30 06:00'), ends_at: Time.zone.parse('2014-10-06 23:59'), season: season1)
week6 = Week.create!(number: 6, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-10-07 06:00'), ends_at: Time.zone.parse('2014-10-13 23:59'), season: season1)
week7 = Week.create!(number: 7, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-10-14 06:00'), ends_at: Time.zone.parse('2014-10-20 23:59'), season: season1)
week8 = Week.create!(number: 8, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-10-21 06:00'), ends_at: Time.zone.parse('2014-10-27 23:59'), season: season1)
week9 = Week.create!(number: 9, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-10-28 06:00'), ends_at: Time.zone.parse('2014-11-03 23:59'), season: season1)
week10 = Week.create!(number: 10, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-11-04 06:00'), ends_at: Time.zone.parse('2014-11-10 23:59'), season: season1)
week11 = Week.create!(number: 11, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-11-11 06:00'), ends_at: Time.zone.parse('2014-11-17 23:59'), season: season1)
week12 = Week.create!(number: 12, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-11-18 06:00'), ends_at: Time.zone.parse('2014-11-24 23:59'), season: season1)
week13 = Week.create!(number: 13, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-11-25 06:00'), ends_at: Time.zone.parse('2014-12-01 23:59'), season: season1)
week14 = Week.create!(number: 14, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-12-02 06:00'), ends_at: Time.zone.parse('2014-12-08 23:59'), season: season1)
week15 = Week.create!(number: 15, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-12-09 06:00'), ends_at: Time.zone.parse('2014-12-15 23:59'), season: season1)
week16 = Week.create!(number: 16, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-12-16 06:00'), ends_at: Time.zone.parse('2014-12-22 23:59'), season: season1)
week17 = Week.create!(number: 17, week_type: WeekType.find_by(code: 'reg'), starts_at: Time.zone.parse('2014-12-23 06:00'), ends_at: Time.zone.parse('2014-12-28 23:59'), season: season1)

# create playoff weeks
week18 = Week.create!(number: 18, week_type: WeekType.find_by(code: 'play'), starts_at: Time.zone.parse('2014-12-29 06:00'), ends_at: Time.zone.parse('2015-01-04 23:59'), season: season1)
week19 = Week.create!(number: 19, week_type: WeekType.find_by(code: 'play'), starts_at: Time.zone.parse('2015-01-05 06:00'), ends_at: Time.zone.parse('2015-01-11 23:59'), season: season1)
week20 = Week.create!(number: 20, week_type: WeekType.find_by(code: 'play'), starts_at: Time.zone.parse('2015-01-12 06:00'), ends_at: Time.zone.parse('2015-01-18 23:59'), season: season1)
week21 = Week.create!(number: 21, week_type: WeekType.find_by(code: 'play'), starts_at: Time.zone.parse('2015-01-19 06:00'), ends_at: Time.zone.parse('2015-02-01 23:59'), season: season1)

# create games
# week 1
Game.create!(starts_at: Time.zone.parse('2014-09-04 20:30'), week: week1, visiting_squad: packers, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: saints, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: vikings, home_squad: rams)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: browns, home_squad: steelers)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: jaguars, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: raiders, home_squad: jets)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: bengals, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: bills, home_squad: bears)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: redskins, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: titans, home_squad: chiefs)
Game.create!(starts_at: Time.zone.parse('2014-09-07 13:00'), week: week1, visiting_squad: patriots, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-09-07 16:25'), week: week1, visiting_squad: panthers, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-09-07 16:25'), week: week1, visiting_squad: niners, home_squad: cowboys)
Game.create!(starts_at: Time.zone.parse('2014-09-07 20:30'), week: week1, visiting_squad: colts, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-09-08 19:10'), week: week1, visiting_squad: giants, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-09-08 22:20'), week: week1, visiting_squad: chargers, home_squad: cardinals)

# week 2
Game.create!(starts_at: Time.zone.parse('2014-09-11 20:25'), week: week2, visiting_squad: steelers, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: dolphins, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: jaguars, home_squad: redskins)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: cowboys, home_squad: titans)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: cardinals, home_squad: giants)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: patriots, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: saints, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: falcons, home_squad: bengals)
Game.create!(starts_at: Time.zone.parse('2014-09-14 13:00'), week: week2, visiting_squad: lions, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-09-14 16:05'), week: week2, visiting_squad: rams, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-09-14 16:05'), week: week2, visiting_squad: seahawks, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-09-14 16:25'), week: week2, visiting_squad: texans, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-09-14 16:25'), week: week2, visiting_squad: jets, home_squad: packers)
Game.create!(starts_at: Time.zone.parse('2014-09-14 16:25'), week: week2, visiting_squad: chiefs, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-09-14 20:30'), week: week2, visiting_squad: bears, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-09-15 20:30'), week: week2, visiting_squad: eagles, home_squad: colts)

# week 3
Game.create!(starts_at: Time.zone.parse('2014-09-18 20:25'), week: week3, visiting_squad: bucs, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: chargers, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: cowboys, home_squad: rams)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: redskins, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: texans, home_squad: giants)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: vikings, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: titans, home_squad: bengals)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: ravens, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: packers, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: colts, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-09-21 13:00'), week: week3, visiting_squad: raiders, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-09-21 16:05'), week: week3, visiting_squad: niners, home_squad: cardinals)
Game.create!(starts_at: Time.zone.parse('2014-09-21 16:25'), week: week3, visiting_squad: broncos, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2014-09-21 16:25'), week: week3, visiting_squad: chiefs, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-09-21 20:30'), week: week3, visiting_squad: steelers, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-09-22 20:30'), week: week3, visiting_squad: bears, home_squad: jets)

# week 4
Game.create!(starts_at: Time.zone.parse('2014-09-25 20:25'), week: week4, visiting_squad: giants, home_squad: redskins)
Game.create!(starts_at: Time.zone.parse('2014-09-28 13:00'), week: week4, visiting_squad: packers, home_squad: bears)
Game.create!(starts_at: Time.zone.parse('2014-09-28 13:00'), week: week4, visiting_squad: bills, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-09-28 13:00'), week: week4, visiting_squad: titans, home_squad: colts)
Game.create!(starts_at: Time.zone.parse('2014-09-28 13:00'), week: week4, visiting_squad: panthers, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-09-28 13:00'), week: week4, visiting_squad: lions, home_squad: jets)
Game.create!(starts_at: Time.zone.parse('2014-09-28 13:00'), week: week4, visiting_squad: bucs, home_squad: steelers)
Game.create!(starts_at: Time.zone.parse('2014-09-28 13:00'), week: week4, visiting_squad: dolphins, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-09-28 16:05'), week: week4, visiting_squad: jaguars, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-09-28 16:25'), week: week4, visiting_squad: falcons, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-09-28 16:25'), week: week4, visiting_squad: eagles, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-09-28 20:30'), week: week4, visiting_squad: saints, home_squad: cowboys)
Game.create!(starts_at: Time.zone.parse('2014-09-29 20:30'), week: week4, visiting_squad: patriots, home_squad: chiefs)

# week 5
Game.create!(starts_at: Time.zone.parse('2014-10-02 20:25'), week: week5, visiting_squad: vikings, home_squad: packers)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: bears, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: browns, home_squad: titans)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: rams, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: falcons, home_squad: giants)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: bucs, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: texans, home_squad: cowboys)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: bills, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: ravens, home_squad: colts)
Game.create!(starts_at: Time.zone.parse('2014-10-05 13:00'), week: week5, visiting_squad: steelers, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-10-05 16:05'), week: week5, visiting_squad: cardinals, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-10-05 16:25'), week: week5, visiting_squad: chiefs, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-10-05 16:25'), week: week5, visiting_squad: jets, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-10-05 20:30'), week: week5, visiting_squad: bengals, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-10-06 20:30'), week: week5, visiting_squad: seahawks, home_squad: redskins)

# week 6
Game.create!(starts_at: Time.zone.parse('2014-10-09 20:25'), week: week6, visiting_squad: colts, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: bears, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: jaguars, home_squad: titans)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: ravens, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: broncos, home_squad: jets)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: lions, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: patriots, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: panthers, home_squad: bengals)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: steelers, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-10-12 13:00'), week: week6, visiting_squad: packers, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-10-12 16:05'), week: week6, visiting_squad: chargers, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-10-12 16:25'), week: week6, visiting_squad: cowboys, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2014-10-12 16:25'), week: week6, visiting_squad: redskins, home_squad: cardinals)
Game.create!(starts_at: Time.zone.parse('2014-10-12 20:30'), week: week6, visiting_squad: giants, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2014-10-13 20:30'), week: week6, visiting_squad: niners, home_squad: rams)

# week 7
Game.create!(starts_at: Time.zone.parse('2014-10-16 20:25'), week: week7, visiting_squad: jets, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: falcons, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: titans, home_squad: redskins)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: seahawks, home_squad: rams)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: browns, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: bengals, home_squad: colts)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: vikings, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: dolphins, home_squad: bears)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: saints, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-10-19 13:00'), week: week7, visiting_squad: panthers, home_squad: packers)
Game.create!(starts_at: Time.zone.parse('2014-10-19 16:05'), week: week7, visiting_squad: chiefs, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-10-19 16:25'), week: week7, visiting_squad: cardinals, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-10-19 16:25'), week: week7, visiting_squad: giants, home_squad: cowboys)
Game.create!(starts_at: Time.zone.parse('2014-10-19 20:30'), week: week7, visiting_squad: niners, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-10-20 20:30'), week: week7, visiting_squad: texans, home_squad: steelers)

# week 8
Game.create!(starts_at: Time.zone.parse('2014-10-23 20:25'), week: week8, visiting_squad: chargers, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-10-26 09:30'), week: week8, visiting_squad: lions, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: rams, home_squad: chiefs)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: texans, home_squad: titans)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: vikings, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: seahawks, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: ravens, home_squad: bengals)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: dolphins, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: bears, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-10-26 13:00'), week: week8, visiting_squad: bills, home_squad: jets)
Game.create!(starts_at: Time.zone.parse('2014-10-26 16:05'), week: week8, visiting_squad: eagles, home_squad: cardinals)
Game.create!(starts_at: Time.zone.parse('2014-10-26 16:25'), week: week8, visiting_squad: raiders, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-10-26 16:25'), week: week8, visiting_squad: colts, home_squad: steelers)
Game.create!(starts_at: Time.zone.parse('2014-10-26 20:30'), week: week8, visiting_squad: packers, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2014-10-27 20:30'), week: week8, visiting_squad: redskins, home_squad: cowboys)

# week 9
Game.create!(starts_at: Time.zone.parse('2014-10-30 20:25'), week: week9, visiting_squad: saints, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-11-02 13:00'), week: week9, visiting_squad: bucs, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-11-02 13:00'), week: week9, visiting_squad: cardinals, home_squad: cowboys)
Game.create!(starts_at: Time.zone.parse('2014-11-02 13:00'), week: week9, visiting_squad: eagles, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-11-02 13:00'), week: week9, visiting_squad: jets, home_squad: chiefs)
Game.create!(starts_at: Time.zone.parse('2014-11-02 13:00'), week: week9, visiting_squad: jaguars, home_squad: bengals)
Game.create!(starts_at: Time.zone.parse('2014-11-02 13:00'), week: week9, visiting_squad: chargers, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-11-02 13:00'), week: week9, visiting_squad: redskins, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-11-02 16:05'), week: week9, visiting_squad: rams, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-11-02 16:25'), week: week9, visiting_squad: broncos, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-11-02 16:25'), week: week9, visiting_squad: raiders, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2014-11-02 20:30'), week: week9, visiting_squad: ravens, home_squad: steelers)
Game.create!(starts_at: Time.zone.parse('2014-11-03 20:30'), week: week9, visiting_squad: colts, home_squad: giants)

# week 10
Game.create!(starts_at: Time.zone.parse('2014-11-06 20:25'), week: week10, visiting_squad: browns, home_squad: bengals)
Game.create!(starts_at: Time.zone.parse('2014-11-09 13:00'), week: week10, visiting_squad: chiefs, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-11-09 13:00'), week: week10, visiting_squad: dolphins, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-11-09 13:00'), week: week10, visiting_squad: cowboys, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-11-09 13:00'), week: week10, visiting_squad: niners, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2014-11-09 13:00'), week: week10, visiting_squad: titans, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-11-09 13:00'), week: week10, visiting_squad: steelers, home_squad: jets)
Game.create!(starts_at: Time.zone.parse('2014-11-09 13:00'), week: week10, visiting_squad: falcons, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-11-09 16:05'), week: week10, visiting_squad: broncos, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-11-09 16:25'), week: week10, visiting_squad: rams, home_squad: cardinals)
Game.create!(starts_at: Time.zone.parse('2014-11-09 16:25'), week: week10, visiting_squad: giants, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2014-11-09 20:30'), week: week10, visiting_squad: bears, home_squad: packers)
Game.create!(starts_at: Time.zone.parse('2014-11-10 20:30'), week: week10, visiting_squad: panthers, home_squad: eagles)

# week 11
Game.create!(starts_at: Time.zone.parse('2014-11-13 20:25'), week: week11, visiting_squad: bills, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: vikings, home_squad: bears)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: texans, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: eagles, home_squad: packers)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: seahawks, home_squad: chiefs)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: falcons, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: bengals, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: bucs, home_squad: redskins)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: broncos, home_squad: rams)
Game.create!(starts_at: Time.zone.parse('2014-11-16 13:00'), week: week11, visiting_squad: niners, home_squad: giants)
Game.create!(starts_at: Time.zone.parse('2014-11-16 16:05'), week: week11, visiting_squad: raiders, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-11-16 16:25'), week: week11, visiting_squad: lions, home_squad: cardinals)
Game.create!(starts_at: Time.zone.parse('2014-11-16 20:30'), week: week11, visiting_squad: patriots, home_squad: colts)
Game.create!(starts_at: Time.zone.parse('2014-11-17 20:30'), week: week11, visiting_squad: steelers, home_squad: titans)

# week 12
Game.create!(starts_at: Time.zone.parse('2014-11-20 20:25'), week: week12, visiting_squad: chiefs, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: browns, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: titans, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: lions, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: packers, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: jaguars, home_squad: colts)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: bengals, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: jets, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-11-23 13:00'), week: week12, visiting_squad: bucs, home_squad: bears)
Game.create!(starts_at: Time.zone.parse('2014-11-23 16:05'), week: week12, visiting_squad: cardinals, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2014-11-23 16:05'), week: week12, visiting_squad: rams, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-11-23 16:25'), week: week12, visiting_squad: dolphins, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-11-23 16:25'), week: week12, visiting_squad: redskins, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-11-23 20:30'), week: week12, visiting_squad: cowboys, home_squad: giants)
Game.create!(starts_at: Time.zone.parse('2014-11-24 20:30'), week: week12, visiting_squad: ravens, home_squad: saints)

# week 13
Game.create!(starts_at: Time.zone.parse('2014-11-27 12:30'), week: week13, visiting_squad: bears, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-11-27 16:30'), week: week13, visiting_squad: eagles, home_squad: cowboys)
Game.create!(starts_at: Time.zone.parse('2014-11-27 20:30'), week: week13, visiting_squad: seahawks, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: redskins, home_squad: colts)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: titans, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: browns, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: chargers, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: giants, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: bengals, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: raiders, home_squad: rams)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: saints, home_squad: steelers)
Game.create!(starts_at: Time.zone.parse('2014-11-30 13:00'), week: week13, visiting_squad: panthers, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-11-30 16:05'), week: week13, visiting_squad: cardinals, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-11-30 16:25'), week: week13, visiting_squad: patriots, home_squad: packers)
Game.create!(starts_at: Time.zone.parse('2014-11-30 20:30'), week: week13, visiting_squad: broncos, home_squad: chiefs)
Game.create!(starts_at: Time.zone.parse('2014-12-01 20:30'), week: week13, visiting_squad: dolphins, home_squad: jets)

# week 14
Game.create!(starts_at: Time.zone.parse('2014-12-04 20:25'), week: week14, visiting_squad: cowboys, home_squad: bears)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: steelers, home_squad: bengals)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: rams, home_squad: redskins)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: giants, home_squad: titans)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: panthers, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: jets, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: ravens, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: colts, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: bucs, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-12-07 13:00'), week: week14, visiting_squad: texans, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-12-07 16:05'), week: week14, visiting_squad: bills, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-12-07 16:05'), week: week14, visiting_squad: chiefs, home_squad: cardinals)
Game.create!(starts_at: Time.zone.parse('2014-12-07 16:25'), week: week14, visiting_squad: seahawks, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2014-12-07 16:25'), week: week14, visiting_squad: niners, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-12-07 20:30'), week: week14, visiting_squad: patriots, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-12-08 20:30'), week: week14, visiting_squad: falcons, home_squad: packers)

# week 15
Game.create!(starts_at: Time.zone.parse('2014-12-11 20:25'), week: week15, visiting_squad: cardinals, home_squad: rams)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: steelers, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: redskins, home_squad: giants)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: dolphins, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: raiders, home_squad: chiefs)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: texans, home_squad: colts)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: jaguars, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: packers, home_squad: bills)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: bucs, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: bengals, home_squad: browns)
Game.create!(starts_at: Time.zone.parse('2014-12-14 13:00'), week: week15, visiting_squad: vikings, home_squad: lions)
Game.create!(starts_at: Time.zone.parse('2014-12-14 16:05'), week: week15, visiting_squad: jets, home_squad: titans)
Game.create!(starts_at: Time.zone.parse('2014-12-14 16:05'), week: week15, visiting_squad: broncos, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2014-12-14 16:25'), week: week15, visiting_squad: niners, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2014-12-14 20:30'), week: week15, visiting_squad: cowboys, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2014-12-15 20:30'), week: week15, visiting_squad: saints, home_squad: bears)

# week 16
Game.create!(starts_at: Time.zone.parse('2014-12-18 20:25'), week: week16, visiting_squad: titans, home_squad: jaguars)
Game.create!(starts_at: Time.zone.parse('2014-12-20 13:00'), week: week16, visiting_squad: chargers, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-12-20 13:00'), week: week16, visiting_squad: eagles, home_squad: redskins)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: vikings, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: ravens, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: lions, home_squad: bears)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: browns, home_squad: panthers)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: falcons, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: packers, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: chiefs, home_squad: steelers)
Game.create!(starts_at: Time.zone.parse('2014-12-21 13:00'), week: week16, visiting_squad: patriots, home_squad: jets)
Game.create!(starts_at: Time.zone.parse('2014-12-21 16:05'), week: week16, visiting_squad: giants, home_squad: rams)
Game.create!(starts_at: Time.zone.parse('2014-12-21 16:25'), week: week16, visiting_squad: bills, home_squad: raiders)
Game.create!(starts_at: Time.zone.parse('2014-12-21 16:25'), week: week16, visiting_squad: colts, home_squad: cowboys)
Game.create!(starts_at: Time.zone.parse('2014-12-21 20:30'), week: week16, visiting_squad: seahawks, home_squad: cardinals)
Game.create!(starts_at: Time.zone.parse('2014-12-22 20:30'), week: week16, visiting_squad: broncos, home_squad: bengals)

# week 17
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: panthers, home_squad: falcons)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: browns, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: cowboys, home_squad: redskins)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: colts, home_squad: titans)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: lions, home_squad: packers)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: jaguars, home_squad: texans)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: chargers, home_squad: chiefs)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: jets, home_squad: dolphins)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: bears, home_squad: vikings)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: bills, home_squad: patriots)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: eagles, home_squad: giants)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: bengals, home_squad: steelers)
Game.create!(starts_at: Time.zone.parse('2014-12-28 13:00'), week: week17, visiting_squad: saints, home_squad: bucs)
Game.create!(starts_at: Time.zone.parse('2014-12-28 16:25'), week: week17, visiting_squad: raiders, home_squad: broncos)
Game.create!(starts_at: Time.zone.parse('2014-12-28 16:25'), week: week17, visiting_squad: cardinals, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2014-12-28 16:25'), week: week17, visiting_squad: rams, home_squad: seahawks)

# week 18
Game.create!(starts_at: Time.zone.parse('2015-01-03 13:00'), week: week18, visiting_squad: giants, home_squad: seahawks)
Game.create!(starts_at: Time.zone.parse('2015-01-03 13:00'), week: week18, visiting_squad: packers, home_squad: eagles)
Game.create!(starts_at: Time.zone.parse('2015-01-04 13:00'), week: week18, visiting_squad: patriots, home_squad: chargers)
Game.create!(starts_at: Time.zone.parse('2015-01-04 13:00'), week: week18, visiting_squad: broncos, home_squad: browns)

# week 19
Game.create!(starts_at: Time.zone.parse('2015-01-10 13:00'), week: week19, visiting_squad: giants, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2015-01-10 13:00'), week: week19, visiting_squad: packers, home_squad: saints)
Game.create!(starts_at: Time.zone.parse('2015-01-11 13:00'), week: week19, visiting_squad: patriots, home_squad: ravens)
Game.create!(starts_at: Time.zone.parse('2015-01-11 13:00'), week: week19, visiting_squad: broncos, home_squad: colts)

# week 20
Game.create!(starts_at: Time.zone.parse('2015-01-17 13:00'), week: week20, visiting_squad: packers, home_squad: niners)
Game.create!(starts_at: Time.zone.parse('2015-01-18 13:00'), week: week20, visiting_squad: broncos, home_squad: ravens)

# week 21
Game.create!(starts_at: Time.zone.parse('2015-02-01 13:00'), week: week21, visiting_squad: broncos, home_squad: niners)

# create a user and a league for that user and a few teams for that user in that league
user1 = User.create!(first_name: 'Jeremy', last_name: 'Mitchell', admin: true, email: 'mitchell852@gmail.com', password: 'foobar852', password_confirmation: 'foobar852')
user2 = User.create!(first_name: 'Tate', last_name: 'Mitchell', email: 'tatecmitchell@gmail.com', password: '00001221', password_confirmation: '00001221')
user3 = User.create!(first_name: 'Joie', last_name: 'Mitchell', email: 'joie@foobar.com', password: 'i love wine', password_confirmation: 'i love wine')
user4 = User.create!(first_name: 'Mason', last_name: 'Mitchell', email: 'mason@foobar.com', password: 'i love pizza', password_confirmation: 'i love pizza')
# create 20 public and private leagues with random but unique names
200.times do |i|
  user = [user1, user2, user3, user4].sample
  League.create!(name: "#{('a'..'j').to_a.shuffle[0..9].join} #{i}", public: true, max_teams_per_user: 10, commishes: [ user ], season: season1, start_week_id: Week.first.id)
  League.create!(name: "#{('k'..'z').to_a.shuffle[0..9].join} #{i}", public: false, max_teams_per_user: 10, commishes: [ user ], season: season1, start_week_id: Week.first.id)
end
league_count = League.all.count
111.times do |i|
  Team.create!(name: "#{user1[:first_name]} Team ##{i}", league: League.all[(0..league_count-1).to_a.sample], coaches: [user1])
  Team.create!(name: "#{user2[:first_name]} Team ##{i}", league: League.all[(0..league_count-1).to_a.sample], coaches: [user2])
  Team.create!(name: "#{user3[:first_name]} Team ##{i}", league: League.all[(0..league_count-1).to_a.sample], coaches: [user3])
  Team.create!(name: "#{user4[:first_name]} Team ##{i}", league: League.all[(0..league_count-1).to_a.sample], coaches: [user4])
end

