require 'spec_helper'

describe Week do

  it { should respond_to(:number) }
  its(:number) { should be_nil }

  it { should respond_to(:week_type) }
  its(:week_type) { should be_nil }

  it { should respond_to(:starts_at) }
  its(:starts_at) { should be_nil }

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

  context 'when week has no start date/time' do
    subject(:week) { FactoryGirl.build(:week, starts_at: nil) }
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

  context 'when week has no type' do
    subject(:week) { FactoryGirl.build(:week, week_type: nil) }
    it { should_not be_valid }
  end

  context 'when complete is not defined' do
    subject(:week) { FactoryGirl.build(:week, complete: nil) }
    it { should_not be_valid }
  end

  describe '#complete' do

    context 'when complete is set to false' do
      it 'should not update pick.correct' do
        week = FactoryGirl.create(:week)
        pick1 = FactoryGirl.create(:pick, week: week, team: FactoryGirl.create(:team), loser: FactoryGirl.create(:squad) )
        pick2 = FactoryGirl.create(:pick, week: week, team: FactoryGirl.create(:team), loser: FactoryGirl.create(:squad) )
        pick3 = FactoryGirl.create(:pick, week: week, team: FactoryGirl.create(:team), loser: FactoryGirl.create(:squad) )
        week.picks << pick1 << pick2 << pick3
        week.complete = false
        expect(pick1.correct).to be_nil
        expect(pick2.correct).to be_nil
        expect(pick3.correct).to be_nil
      end
    end

    context 'when complete is set to true' do
      it 'should update pick.correct' do
        week = FactoryGirl.create(:week)
        pick1 = FactoryGirl.create(:pick, week: week, team: FactoryGirl.create(:team), loser: FactoryGirl.create(:squad) )
        pick2 = FactoryGirl.create(:pick, week: week, team: FactoryGirl.create(:team), loser: FactoryGirl.create(:squad) )
        pick3 = FactoryGirl.create(:pick, week: week, team: FactoryGirl.create(:team), loser: FactoryGirl.create(:squad) )
        week.picks << pick1 << pick2 << pick3
        week.complete = true
        expect(pick1.correct).not_to be_nil
        expect(pick2.correct).not_to be_nil
        expect(pick3.correct).not_to be_nil
      end
    end

  end

end
