# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
League.destroy_all
Team.destroy_all

user1 = User.create!(email: 'foo@bar.com', password: 'foobar')
user2 = User.create!(email: 'bob@foo.com', password: 'bobfoo')

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


