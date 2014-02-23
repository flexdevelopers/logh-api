# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Season.destroy_all
Week.destroy_all
Game.destroy_all
Squad.destroy_all

User.destroy_all
League.destroy_all
Team.destroy_all
Pick.destroy_all

# create squads
bills = Squad.create(name: 'Buffalo Bills', abbrev: 'BUF')
dolphins = Squad.create(name: 'Miami Dolphins', abbrev: 'MIA')
Squad.create(name: 'New England Patriots', abbrev: 'NEP')
Squad.create(name: 'New York Jets', abbrev: 'NYJ')
Squad.create(name: 'Denver Broncos', abbrev: 'DEN')
Squad.create(name: 'Kansas City Chiefs', abbrev: 'KCC')

# create a season
season = Season.create!(name: '2014-15 NFL Season')

# create 17 weeks for the season
17.times do |i|
  week = Week.create!(number: i + 1, start_date: i.week.from_now, season: season)
  # create 16 games for each week
  16.times do |i|
    Game.create!(start_datetime: week.start_date + 1.day, week: week, home_squad: bills, visiting_squad: dolphins )
  end
end

# create a user and a league for that user and a few teams for that user in that league
user1 = User.create!(first_name: 'Rocky', last_name: 'Balboa', email: 'foo@bar.com', password: 'foobar')
foo_league = League.create!(name: "Foo League", user: user1)
3.times do |i|
  team = Team.create!(name: "#{user1[:first_name]} League ##{i}", league: foo_league, user: user1)
  # and 5 picks for that team
  5.times do |i|
    Pick.create!(team: team, week: Week.find_by(number: i + 1))
  end
end

# create another user and a few teams for that user
user2 = User.create!(first_name: 'Bob', last_name: 'Marley', email: 'bob@bar.com', password: 'bobfoo')
3.times do |i|
  team = Team.create!(name: "#{user2[:first_name]} League ##{i}", league: foo_league, user: user2)
  # and 5 picks for that team
  5.times do |i|
    Pick.create!(team: team, week: Week.find_by(number: i + 1))
  end
end


