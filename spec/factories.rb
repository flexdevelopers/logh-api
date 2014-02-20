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
    team.association  :league
  end

  factory :pick do |pick|
    pick.association  :team
  end

end
