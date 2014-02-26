require 'spec_helper'

describe Pick do

  it { should respond_to(:team) }
  its(:team) { should be_nil }

  it { should respond_to(:week) }
  its(:week) { should be_nil }

  it { should respond_to(:loser) }
  its(:loser) { should be_nil }

  it { should respond_to(:correct) }
  its(:correct) { should be_nil }

  context 'when team is not present' do
    subject(:pick) { FactoryGirl.build(:pick, team: nil) }
    it { should_not be_valid }
  end

  context 'when week is not present' do
    subject(:pick) { FactoryGirl.build(:pick, week: nil) }
    it { should_not be_valid }
  end

  context 'when loser is not present' do
    subject(:pick) { FactoryGirl.build(:pick, loser: nil) }
    it { should_not be_valid }
  end

end
