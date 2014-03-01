require 'spec_helper'

describe Week do

  it { should respond_to(:number) }
  its(:number) { should be_nil }

  it { should respond_to(:start_date) }
  its(:start_date) { should be_nil }

  it { should respond_to(:end_date) }
  its(:end_date) { should be_nil }

  it { should respond_to(:season) }
  its(:season) { should be_nil }

  it { should respond_to(:complete) }
  its(:complete) { should be_false }

  it { should respond_to(:games) }
  its(:games) { should be_empty }

  it { should respond_to(:picks) }
  its(:picks) { should be_empty }

  it { should respond_to(:losers) }
  its(:losers) { should be_empty }

  context 'when week has no number' do
    subject(:week) { FactoryGirl.build(:week, number: nil) }
    it { should_not be_valid }
  end

  context 'when week has a number less than 1' do
    subject(:week) { FactoryGirl.build(:week, number: 0) }
    it { should_not be_valid }
  end

  context 'when week has no season' do
    subject(:week) { FactoryGirl.build(:week, season: nil) }
    it { should_not be_valid }
  end

  context 'when week number is added to a season twice' do
    it 'raises an error' do
      season = FactoryGirl.create(:season)
      FactoryGirl.create(:week, number: 1, season: season)
      expect { FactoryGirl.create(:week, number: 1, season: season) }.to raise_error
    end
  end

end
