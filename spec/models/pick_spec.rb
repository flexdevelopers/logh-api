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

  describe '#correct' do

    context 'when correct is set to false' do
      it 'should mark team as dead' do
        pick = FactoryGirl.create(:pick)
        expect { pick.correct = false }.to change(pick.team, :alive).from(true).to(false)
      end
    end

    context 'when correct is set to true' do
      it 'should not impact the value of team.alive' do
        # you can't bring back a team from the dead
        team = FactoryGirl.create(:team, alive: false)
        pick = FactoryGirl.create(:pick, team: team)
        expect { pick.correct = true }.not_to change(team, :alive).from(false).to(true)
      end
    end

  end

end
