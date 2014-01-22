FactoryGirl.define do
  factory :user do
    email    'foo@bar.com'
    password 'foobar'
  end

  factory :api_key do
    access_token  'foobaz'
  end
end
