FactoryGirl.define do
  sequence(:email) { |n| "foo#{n}@bar.com" }

  factory :user do
    first_name  'Billy Bob'
    last_name   'Thorton'
    email
    password 'foobar'
  end

  factory :league do |league|
    name                'Bad News Bears'
    league.association  :user
  end

  factory :team do |team|
    name              'Fire Breathing Rubber Duckies'
    team.association  :user
    team.association  :league
  end

  factory :pick do |pick|
    pick.association  :team
    pick.association  :week
  end

  factory :season do
    name              '2014-15 NFL Season'
  end

  factory :week do |week|
    number              1
    start_date          Time.now
    end_date            2.days.from_now
    week.association    :season
  end

  factory :game do |game|
    game.association      :week
    start_datetime        Time.now
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

end
