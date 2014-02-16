require 'spec_helper'

describe League do
  it { should respond_to(:name) }
  it { should respond_to(:password) }
  it { should respond_to(:max_teams_per_user) }
  it { should respond_to(:user) }
  it { should respond_to(:teams) }
end