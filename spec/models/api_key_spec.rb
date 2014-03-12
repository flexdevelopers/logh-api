require 'spec_helper'

describe APIKey do
  it { should respond_to(:access_token) }
  its(:access_token) { should be_nil }

  it { should respond_to(:user_id) }
  its(:user_id) { should be_nil }

  context 'when access token is not present' do
    it 'should not be valid' do
      user = FactoryGirl.create(:user)
      api_key = APIKey.create!(user: user)
      api_key.access_token = ''
      api_key.save
      expect(api_key).to_not be_valid
    end
  end

  context 'when access token is not unique' do
    it 'raises an error' do
      user1 = FactoryGirl.create(:user)
      user2 = FactoryGirl.create(:user)
      api_key1 = APIKey.create(user: user1)
      api_key2 = APIKey.create(user: user2)
      expect { api_key2.update!(access_token: api_key1.access_token) }.to raise_error
    end
  end

  context 'when user id is not present' do
    subject(:api_key) { APIKey.new }
    it { should_not be_valid }
  end

  context 'when user id is not unique' do
    it 'should raise an error' do
      user = FactoryGirl.create(:user)
      APIKey.create(user: user)
      expect { APIKey.create!(user: user) }.to raise_error
    end
  end
end
