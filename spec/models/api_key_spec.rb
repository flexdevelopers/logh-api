require 'spec_helper'

describe APIKey do
  it { should respond_to(:access_token) }
  its(:access_token) { should be_nil }

  context 'when access token is not present' do
    it 'should not be valid' do
      api_key = APIKey.create!
      api_key.access_token = ''
      api_key.save
      expect(api_key).to_not be_valid
    end
  end

  context 'when access token is not unique' do
    it 'raises an error' do
      api_key1 = APIKey.create!
      api_key2 = APIKey.create!
      expect { api_key2.update!(access_token: api_key1.access_token) }.to raise_error
    end
  end
end
