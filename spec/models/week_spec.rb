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

  context 'when the same week number is added to a season twice' do
    it 'raises an error' do
      season = FactoryGirl.create(:season)
      FactoryGirl.create(:week, number: 1, season: season)
      expect { FactoryGirl.create(:week, number: 1, season: season) }.to raise_error
    end
  end

  context 'when the same week number is added to 2 different seasons' do
    it 'is created for each season' do
      season1 = FactoryGirl.create(:season, name: '2014-15 NFL Season')
      season2 = FactoryGirl.create(:season, name: '2015-16 NFL Season')
      FactoryGirl.create(:week, number: 1, season: season1)
      expect { FactoryGirl.create(:week, number: 1, season: season2) }.to change(season2.weeks, :count).by(1)
    end
  end

end
