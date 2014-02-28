require 'spec_helper'

describe Loser do

  it { should respond_to(:week) }
  its(:week) { should be_nil }

  it { should respond_to(:squad) }
  its(:squad) { should be_nil }

  context 'when week is nil' do
    subject(:loser) { FactoryGirl.build(:loser, week: nil) }
    it { should_not be_valid }
  end

  context 'when squad is nil' do
    subject(:loser) { FactoryGirl.build(:loser, squad: nil) }
    it { should_not be_valid }
  end

  context 'when loser is added twice to a week' do
    it 'raises an error' do
      loser1 = FactoryGirl.create(:loser)
      expect { FactoryGirl.create(:loser, week: loser1.week, squad: loser1.squad) }.to raise_error
    end
  end

end
