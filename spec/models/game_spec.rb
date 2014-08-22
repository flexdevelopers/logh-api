require 'spec_helper'

describe Game do

  it { should respond_to(:week) }
  its(:week) { should be_nil }

  it { should respond_to(:starts_at) }
  its(:starts_at) { should be_nil }

  it { should respond_to(:loser_squad) }
  its(:loser_squad) { should be_nil }

  it { should respond_to(:home_squad) }
  its(:home_squad) { should be_nil }

  it { should respond_to(:home_squad_score) }
  its(:home_squad_score) { should eq(0) }

  it { should respond_to(:visiting_squad) }
  its(:visiting_squad) { should be_nil }

  it { should respond_to(:visiting_squad_score) }
  its(:visiting_squad_score) { should eq(0) }

  it { should respond_to(:picks) }
  its(:picks) { should be_empty }

  it { should respond_to(:complete) }
  its(:complete) { should be_false }

  context 'when it has no week' do
    subject(:game) { FactoryGirl.build(:game, week: nil) }
    it { should_not be_valid }
  end

  context 'when it has no starts_at' do
    subject(:game) { FactoryGirl.build(:game, starts_at: nil) }
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

  context 'when home squad score is less than zero' do
    subject(:game) { FactoryGirl.build(:game, home_squad_score: -1) }
    it { should_not be_valid }
  end

  context 'when visiting squad score is less than zero' do
    subject(:game) { FactoryGirl.build(:game, visiting_squad_score: -1) }
    it { should_not be_valid }
  end

end
