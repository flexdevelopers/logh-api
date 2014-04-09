require 'spec_helper'

describe API::PicksController do
  let(:current_user) { FactoryGirl.create(:user) }
  let(:coached_team) { FactoryGirl.create(:team, coaches: [current_user]) }
  let(:non_coached_team) { FactoryGirl.create(:team) }

  before do
    sign_in(current_user)
  end

  #GET /api/teams/:team_id/picks
  describe '#index' do
    before {
      FactoryGirl.create(:pick, team: coached_team)
      FactoryGirl.create(:pick, team: coached_team)
      FactoryGirl.create(:pick, team: coached_team)
      FactoryGirl.create(:pick, team: non_coached_team)
    }
    context 'when the current user is a coach of the team' do
      it 'returns a list of picks for the team' do
        get :index, team_id: coached_team.id
        expect(response).to be_success
        expect(json.length).to eq(3)
      end
    end
    context 'when the current user is not a coach of the team' do
      it 'returns unauthorized' do
        get :index, team_id: non_coached_team.id
        expect(response.status).to eq(403)
      end
    end
  end

  #GET /api/teams/:team_id/picks/:id
  describe '#show' do
    context 'when the current user is a coach of the team' do
      let(:pick) { FactoryGirl.create(:pick, team: coached_team) }
      it 'returns the pick for the team' do
        get :show, team_id: pick.team.id, id: pick.id
        expect(response).to be_success
        expect(json[:team_id]).to eq(pick.team.id)
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:pick) { FactoryGirl.create(:pick, team: non_coached_team) }
      it 'returns unauthorized' do
        get :show, team_id: pick.team.id, id: pick.id
        expect(response.status).to eq(403)
      end
    end

  end

  #POST /api/teams/:team_id/picks
  describe '#create' do
    context 'when the current user is a coach of the team' do
      let(:pick) { FactoryGirl.build(:pick, team: coached_team) }
      it 'creates a pick for team' do
        expect { post :create, team_id: pick.team.id, pick: pick.attributes }.to change(pick.team.picks, :count).by(1)
        expect(response).to be_success
      end
      context 'when the team tries to make two picks in a week' do
        let(:week) { FactoryGirl.create(:week, number: 1) }
        let(:squad1) { FactoryGirl.create(:squad) }
        let(:squad2) { FactoryGirl.create(:squad) }
        let(:pick2_params) { FactoryGirl.attributes_for(:pick, week: week, team: coached_team, squad: squad2) }
        before { FactoryGirl.create(:pick, week: week, team: coached_team, squad: squad1) }
        it 'the 2nd pick is not created' do
          pick2_params[:week_type_id] = pick2_params[:week_type].id
          expect { post :create, team_id: coached_team.id, pick: pick2_params }.not_to change(week.picks, :count).by(1)
          expect(response.status).to eq(422) # Unprocessable Entity
        end
      end
      context 'when the team tries make two picks with the same squad in 2 weeks with different week types' do
        let(:regular_week_type) { FactoryGirl.create(:week_type) }
        let(:playoff_week_type) { FactoryGirl.create(:playoff_week_type) }
        let(:week1) { FactoryGirl.create(:week, number: 1, week_type: regular_week_type) }
        let(:week18) { FactoryGirl.create(:week, number: 18, week_type: playoff_week_type) }
        let(:squad) { FactoryGirl.create(:squad) }
        before { FactoryGirl.create(:pick, team: coached_team, week: week1, week_type: week1.week_type, squad: squad) }
        it 'creates a pick for team' do
          pick2 = FactoryGirl.build(:pick, team: coached_team, week: week18, week_type: week18.week_type, squad: squad)
          expect { post :create, team_id: coached_team.id, pick: pick2.attributes }.to change(coached_team.picks, :count).by(1)
          expect(response).to be_success
        end
      end
      context 'when the team tries make two picks with the same squad in 2 weeks with the same week type' do
        let(:regular_week_type) { FactoryGirl.create(:week_type) }
        let(:week1) { FactoryGirl.create(:week, number: 1, week_type: regular_week_type) }
        let(:week2) { FactoryGirl.create(:week, number: 2, week_type: regular_week_type) }
        let(:squad) { FactoryGirl.create(:squad) }
        before { FactoryGirl.create(:pick, team: coached_team, week: week1, week_type: week1.week_type, squad: squad) }
        it 'the 2nd pick is not created' do
          pick2 = FactoryGirl.build(:pick, team: coached_team, week: week2, week_type: week2.week_type, squad: squad)
          expect { post :create, team_id: coached_team.id, pick: pick2.attributes }.not_to change(coached_team.picks, :count).by(1)
          expect(response.status).to eq(422) # Unprocessable Entity
        end
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:pick) { FactoryGirl.build(:pick, team: non_coached_team) }
      it 'returns unauthorized and does not create the pick' do
        expect { post :create, team_id: pick.team.id, pick: pick.attributes }.to change(pick.team.picks, :count).by(0)
        expect(response.status).to eq(403)
      end
    end
  end

  #PATCH/PUT /api/teams/:team_id/picks/:id
  #todo: nothing to update yet - this route needs to be updated
  describe '#update' do
    context 'when the current user is a coach of the team' do
      let(:pick) { FactoryGirl.create(:pick, team: coached_team) }
      it 'updates a pick' do
        patch :update, team_id: pick.team.id, id: pick.id, pick: pick.attributes
        expect(response).to be_success
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:pick) { FactoryGirl.create(:pick, team: non_coached_team) }
      it 'returns unauthorized' do
        patch :update, team_id: pick.team.id, id: pick.id, pick: pick.attributes
        expect(response.status).to eq(403)
      end
    end
  end

  #DELETE /api/teams/:team_id/picks/:id
  describe '#destroy' do
    context 'when the current user is a coach of the team' do
      let(:pick) { FactoryGirl.create(:pick, team: coached_team) }
      it 'deletes a pick' do
        expect { delete :destroy, team_id: pick.team.id, id: pick.id }.to change(pick.team.picks, :count).by(-1)
        expect(response.status).to eq(204)
      end
    end
    context 'when the current user is not a coach of the team' do
      let(:pick) { FactoryGirl.create(:pick, team: non_coached_team) }
      it 'returns unauthorized and does not delete a pick' do
        expect { delete :destroy, team_id: pick.team.id, id: pick.id }.to change(pick.team.picks, :count).by(0)
        expect(response.status).to eq(403)
      end
    end
  end

end
