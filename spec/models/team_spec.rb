require 'spec_helper'

describe Team do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:alive) }
  its(:alive) { should be_true }

  it { should respond_to(:paid) }
  its(:paid) { should be_false }

  it { should respond_to(:league) }
  its(:league) { should be_nil }

  it { should respond_to(:user) }
  its(:user) { should be_nil }

  it { should respond_to(:picks) }
  its(:picks) { should be_empty }

  context 'when team has no name' do
    subject(:team) { FactoryGirl.build(:team, name: '') }
    it { should_not be_valid }
  end

  context 'when team has a name greater than 20 characters' do
    subject(:team) { FactoryGirl.build(:team, name: 'a' * 31) }
    it { should_not be_valid }
  end

  context 'when team has no league' do
    subject(:team) { FactoryGirl.build(:team, league: nil) }
    it { should_not be_valid }
  end

  context 'when team has no user' do
    subject(:team) { FactoryGirl.build(:team, user: nil) }
    it { should_not be_valid }
  end

end
