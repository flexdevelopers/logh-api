# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Season.destroy_all
Week.destroy_all
User.destroy_all
League.destroy_all
Team.destroy_all

# create a season
season = Season.create!(name: '2014-15 NFL Season')

# create 16 weeks for the season
16.times do |i|
  Week.create!(number: i + 1, season: season)
end

user1 = User.create!(first_name: 'Rocky', last_name: 'Balboa', email: 'foo@bar.com', password: 'foobar')
user2 = User.create!(first_name: 'Bob', last_name: 'Marley', email: 'bob@bar.com', password: 'bobfoo')

5.times do |i|
  League.create!(name: "Foo League ##{i}", user: user1)
  League.create!(name: "Bob League ##{i}", user: user2)
end

user1_league = League.find_by(user: user1)
5.times do |i|
  Team.create!(name: "Foo Team ##{i}", league: user1_league)
end

user2_league = League.find_by(user: user2)
5.times do |i|
  Team.create!(name: "Bob Team ##{i}", league: user2_league)
end


