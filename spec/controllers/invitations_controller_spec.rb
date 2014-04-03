require 'spec_helper'

describe API::InvitationsController do
  let(:current_user) { FactoryGirl.create(:user) }

  before do
    sign_in(current_user)
  end

  # GET /leagues/:league_id/invitations
  describe '#index' do
  end

  # POST /leagues/:league_id/invitations
  describe '#create' do
  end

  # DELETE /leagues/:league_id/invitations/:id
  describe '#destroy' do
  end

end