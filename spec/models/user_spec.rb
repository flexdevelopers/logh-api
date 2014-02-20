require 'spec_helper'

describe User do
  it { should respond_to(:email) }
  it { should respond_to(:password) }
  it { should respond_to(:leagues) }
  it { should respond_to(:teams) }

  describe 'without a unique email address' do
    it 'fails validation' do
      user1 = FactoryGirl.create(:user)
      user2 = FactoryGirl.build(:user, email: user1.email.upcase)
      expect(user2).not_to be_valid
    end
  end
end
