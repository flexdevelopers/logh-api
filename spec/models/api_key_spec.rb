require 'spec_helper'

describe APIKey do
  it { should respond_to(:access_token) }

  context 'when access token is not unique' do
    it 'raises an error' do
      api_key1 = APIKey.create!
      api_key2 = APIKey.create!
      expect { api_key2.update!(access_token: api_key1.access_token) }.to raise_error
    end
  end
end
