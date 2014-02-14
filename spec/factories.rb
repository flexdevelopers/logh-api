FactoryGirl.define do

  factory :user do
    email    'foo@bar.com'
    password 'foobar'
  end

  factory :league do |league|
    name                'Bad News Bears'
    league.association  :user
  end

  factory :team do |team|
    name              'Fire Breathing Rubber Duckies'
    team.association  :league
  end

end
