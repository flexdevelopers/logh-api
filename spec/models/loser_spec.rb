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

end
