require 'spec_helper'

describe Game do

  it { should respond_to(:week) }
  its(:week) { should be_nil }

  it { should respond_to(:start_datetime) }
  its(:start_datetime) { should be_nil }

  it { should respond_to(:home_squad) }
  its(:home_squad) { should be_nil }

  it { should respond_to(:visiting_squad) }
  its(:visiting_squad) { should be_nil }

  context 'when it has no week' do
    subject(:game) { FactoryGirl.build(:game, week: nil) }
    it { should_not be_valid }
  end

  context 'when it has no start_datetime' do
    subject(:game) { FactoryGirl.build(:game, start_datetime: nil) }
    it { should_not be_valid }
  end

  context 'when it has no home squad' do
    subject(:game) { FactoryGirl.build(:game, home_squad: nil) }
    it { should_not be_valid }
  end

  context 'when it has no visiting squad' do
    subject(:game) { FactoryGirl.build(:game, visiting_squad: nil) }
    it { should_not be_valid }
  end

end
