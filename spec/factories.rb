FactoryGirl.define do
  sequence(:email) { |n| "foo#{n}@bar.com" }

  factory :user do
    first_name              'Billy Bob'
    last_name               'Thorton'
    email
    password                'foobar'
    password_confirmation   'foobar'
  end

  factory :session do
    email     'foo@bar.com'
    password  'foobar'
  end

  factory :league do |league|
    name                    'Bad News Bears'
    password                'foobar'
    password_confirmation   'foobar'
    league.association      :season
    start_week_id           { FactoryGirl.create(:week).id }
  end

  factory :team do |team|
    name              'Fire Breathing Rubber Duckies'
    team.association  :league
  end

  factory :pick do |pick|
    pick.association  :team
    pick.association  :week
    loser             { FactoryGirl.create(:squad) }
  end

  factory :season do
    name              '2014-15 NFL Season'
  end

  factory :week do |week|
    number              1
    starts_at           Time.now
    week.association    :season
  end

  factory :game do |game|
    game.association      :week
    starts_at             Date.today.midnight
    home_squad            { FactoryGirl.create(:squad) }
    visiting_squad        { FactoryGirl.create(:squad) }
  end

  factory :loser do |loser|
    loser.association :week
    loser.association :squad
  end

  factory :squad do
    name    'Denver Broncos'
    abbrev  'DEN'
  end

  factory :invitation do |invitation|
    invitation.association  :league
    email                   'foo@bar.com'
  end

end
