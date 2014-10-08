require 'spec_helper'

describe Team do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:alive) }
  its(:alive) { should be_true }

  it { should respond_to(:active) }
  its(:active) { should be_true }

  it { should respond_to(:paid) }
  its(:paid) { should be_false }

  it { should respond_to(:message) }
  its(:message) { should be_blank }

  it { should respond_to(:coaches) }
  its(:coaches) { should be_empty }

  it { should respond_to(:league) }
  its(:league) { should be_nil }

  it { should respond_to(:picks) }
  its(:picks) { should be_empty }

  context 'name is not present' do
    subject(:team) { FactoryGirl.build(:team, name: '') }
    it { should_not be_valid }
  end

  context 'when name is greater than 30 characters' do
    subject(:team) { FactoryGirl.build(:team, name: 'a' * 31) }
    it { should_not be_valid }
  end

  context 'league is not present' do
    subject(:team) { FactoryGirl.build(:team, league: nil) }
    it { should_not be_valid }
  end

  context 'when active is not present' do
    subject(:team) { FactoryGirl.build(:team, active: nil) }
    it { should_not be_valid }
  end

  context 'when alive is not present' do
    subject(:team) { FactoryGirl.build(:team, alive: nil) }
    it { should_not be_valid }
  end

  context 'when paid is not present' do
    subject(:team) { FactoryGirl.build(:team, paid: nil) }
    it { should_not be_valid }
  end

  context 'when team has a message greater than 500 characters' do
    subject(:team) { FactoryGirl.build(:team, message: 'a' * 501) }
    it { should_not be_valid }
  end

end
