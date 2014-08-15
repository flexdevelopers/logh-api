require 'spec_helper'

describe League do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:open) }
  its(:open) { should be_true }

  it { should respond_to(:public) }
  its(:public) { should be_true }

  it { should respond_to(:max_teams_per_user) }
  its(:max_teams_per_user) { should be_nil }

  it { should respond_to(:start_week) }
  its(:start_week) { should be_nil }

  it { should respond_to(:message) }
  its(:message) { should be_blank }

  it { should respond_to(:season) }
  its(:season) { should be_nil }

  it { should respond_to(:teams) }
  its(:teams) { should be_empty }

  it { should respond_to(:commishes) }
  its(:commishes) { should be_empty }

  it { should respond_to(:invitations) }
  its(:invitations) { should be_empty }

  context 'when league has no name' do
    subject(:league) { FactoryGirl.build(:league, name: '') }
    it { should_not be_valid }
  end

  context 'when league has a name greater than 35 characters' do
    subject(:league) { FactoryGirl.build(:league, name: 'a' * 36) }
    it { should_not be_valid }
  end

  context 'when league has no season' do
    subject(:league) { FactoryGirl.build(:league, season: nil) }
    it { should_not be_valid }
  end

  context 'when league has no start week' do
    subject(:league) { FactoryGirl.build(:league, start_week: nil) }
    it { should_not be_valid }
  end

  context 'when league has a message greater than 200 characters' do
    subject(:league) { FactoryGirl.build(:league, message: 'a' * 201) }
    it { should_not be_valid }
  end

  context 'when league has no message' do
    subject(:league) { FactoryGirl.build(:league, message: nil) }
    it { should be_valid }
  end

  context 'when league has defined no max teams per user' do
    subject(:league) { FactoryGirl.build(:league, max_teams_per_user: nil) }
    it { should be_valid }
  end

  context 'when league has max teams per user greater than zero' do
    subject(:league) { FactoryGirl.build(:league, max_teams_per_user: 2) }
    it { should be_valid }
  end

  context 'when league has max teams per user of zero' do
    subject(:league) { FactoryGirl.build(:league, max_teams_per_user: 0) }
    it { should_not be_valid }
  end

  context 'when league has max teams per user of less than zero' do
    subject(:league) { FactoryGirl.build(:league, max_teams_per_user: -1) }
    it { should_not be_valid }
  end

end