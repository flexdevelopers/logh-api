require 'spec_helper'

describe League do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:password) }
  its(:password) { should be_blank }

  it { should respond_to(:max_teams_per_user) }
  its(:max_teams_per_user) { should be_zero }

  it { should respond_to(:user) }
  its(:user) { should be_nil }

  it { should respond_to(:teams) }
  its(:teams) { should be_empty }

end