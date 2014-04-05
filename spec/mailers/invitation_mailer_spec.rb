require 'spec_helper'

describe InvitationMailer do

  context '#league_invitation' do
    let(:league) { FactoryGirl.create(:league) }
    let(:invitation)  { FactoryGirl.create(:invitation, league: league) }
    subject { InvitationMailer.league_invitation(invitation) }

    its(:from) { should include('foo@loseorgohome.com') }
    its(:to) { should include(invitation.email) }
    its(:subject) { should eq('You are invited!')}
  end

end
