require 'spec_helper'

describe UserMailer do

  context '#welcome' do
    let(:user) { FactoryGirl.create(:user) }
    subject { UserMailer.welcome(user) }

    its(:from) { should include('no-reply@loseorgohome.com') }
    its(:to) { should include(user.email) }
    its(:subject) { should eq("Welcome to LoseOrGoHome.com, #{user.first_name}") }
  end

end
