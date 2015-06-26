source 'https://rubygems.org'
ruby '2.1.4'
#ruby-gemset=logh

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.2'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder - 
gem 'jbuilder', '~> 1.2'

# Use Sass for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Uglifier
gem 'uglifier'

# Postgres
gem 'pg'

# New Relic
gem 'newrelic_rpm'

group :development, :test do
  gem 'rspec-rails'
end

group :test do
  gem 'factory_girl_rails'
end

group :production do
  gem 'rails_12factor'
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
gem 'bcrypt-ruby', '~> 3.1.2'

# Gems to manage access token authentication
gem 'redis'
gem 'micro_token'

# Figaro provides a clean and simple way to configure your app and keep the private stuff… private
gem 'figaro'

# decorates models
gem 'draper', '~> 1.3'

# RABL (Ruby API Builder Language)
gem 'rabl'

# optimized json parser - https://github.com/ohler55/oj
gem 'oj'
gem 'oj_mimic_json'

group :production do
  # Use unicorn as the app server
  gem 'unicorn'
end

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
