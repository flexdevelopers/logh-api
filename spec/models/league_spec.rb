require 'spec_helper'

describe League do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:password) }
  its(:password) { should be_blank }

  it { should respond_to(:password_confirmation) }
  its(:password_confirmation) { should be_blank }

  it { should respond_to(:password_digest) }
  its(:password_digest) { should be_blank }

  it { should respond_to(:max_teams_per_user) }
  its(:max_teams_per_user) { should be_nil }

  it { should respond_to(:season) }
  its(:season) { should be_nil }

  it { should respond_to(:teams) }
  its(:teams) { should be_empty }

  it { should respond_to(:commishes) }
  its(:commishes) { should be_empty }

  context 'when league has no name' do
    subject(:league) { FactoryGirl.build(:league, name: '') }
    it { should_not be_valid }
  end

  context 'when league has a name greater than 30 characters' do
    subject(:league) { FactoryGirl.build(:league, name: 'a' * 31) }
    it { should_not be_valid }
  end

  context 'when league has no season' do
    subject(:league) { FactoryGirl.build(:league, season: nil) }
    it { should_not be_valid }
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

  context 'when league has no password' do
    subject(:league) { FactoryGirl.build(:league, password: nil, password_confirmation: nil) }
    it { should_not be_valid }
  end

  context 'when league has a password less than 6 characters' do
    subject(:league) { FactoryGirl.build(:league, password: 'a' * 5, password_confirmation: 'a' * 5) }
    it { should_not be_valid }
  end

  context 'when league password does not match password confirmation' do
    subject(:league) { FactoryGirl.build(:league, password: 'foobar', password_confirmation: 'barfoo') }
    it { should_not be_valid }
  end

  describe 'return value of authenticate method' do
    subject(:league) { FactoryGirl.create(:league) }
    let(:found_league) { League.find(league.id) }

    context 'with a valid passord' do
      it { should eq found_league.authenticate(league.password) }
    end

    context 'with an invalid password' do
      let(:league_for_invalid_password) { found_league.authenticate('invalid') }

      it { should_not == league_for_invalid_password }
      specify { expect(league_for_invalid_password).to be_false }
    end
  end

end