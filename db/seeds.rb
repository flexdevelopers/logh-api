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
home_squads = []
visiting_squads = []
home_squads << Squad.create(name: 'Buffalo Bills', abbrev: 'BUF')
home_squads << Squad.create(name: 'Miami Dolphins', abbrev: 'MIA')
home_squads << Squad.create(name: 'New England Patriots', abbrev: 'NEP')
visiting_squads << Squad.create(name: 'New York Jets', abbrev: 'NYJ')
visiting_squads << Squad.create(name: 'Denver Broncos', abbrev: 'DEN')
visiting_squads << Squad.create(name: 'Kansas City Chiefs', abbrev: 'KCC')

# Transactional data
Season.destroy_all
Week.destroy_all
Game.destroy_all

User.destroy_all
League.destroy_all
Team.destroy_all
Pick.destroy_all

Loser.destroy_all


# create a season
season = Season.create!(name: '2014-15 NFL Season')

# create 5 weeks for the season
5.times do |i|
  week = Week.create!(number: i + 1, week_type: WeekType.find_by(code: 'reg'), starts_at: i.week.from_now + 1.day, season: season)
  # create 3 games for each week
  3.times do |i|
    game = Game.create!(starts_at: week.starts_at + 1.day, week: week, home_squad: home_squads[i], visiting_squad: visiting_squads[i] )
    game.update(home_squad_score: 45, visiting_squad_score: 24)
  end
end

# create a user and a league for that user and a few teams for that user in that league
user1 = User.create!(first_name: 'Rocky', last_name: 'Balboa', email: 'foo@bar.com', password: 'foobar', password_confirmation: 'foobar')
# create 50 public and private leagues with random but unique names
50.times do |i|
  League.create!(name: "#{('a'..'j').to_a.shuffle[0..9].join} #{i}", public: true, max_teams_per_user: 10, commishes: [user1], season: season, start_week_id: Week.first.id)
  League.create!(name: "#{('k'..'z').to_a.shuffle[0..9].join} #{i}", public: false, max_teams_per_user: 10, commishes: [user1], season: season, start_week_id: Week.first.id)
end
foo_league = League.create!(name: "Foo League 852", max_teams_per_user: 10, commishes: [user1], season: season, start_week_id: Week.first.id)
3.times do |i|
  team = Team.create!(name: "#{user1[:first_name]} Team ##{i}", league: foo_league, coaches: [user1])
  # and 3 picks for that team
  3.times do |i|
    week = Week.find_by(number: i + 1, season: season)
    Pick.create!(team: team, week: week, week_type: week.week_type, squad: home_squads[i])
  end
end

# create another user and a few teams for that user
user2 = User.create!(first_name: 'Bob', last_name: 'Marley', email: 'bar@foo.com', password: 'barfoo', password_confirmation: 'barfoo')
3.times do |i|
  team = Team.create!(name: "#{user2[:first_name]} Team ##{i}", league: foo_league, coaches: [user2])
  # and 3 picks for that team
  3.times do |i|
    week = Week.find_by(number: i + 1, season: season)
    Pick.create!(team: team, week: week, week_type: week.week_type, squad: visiting_squads[i])
  end
end

