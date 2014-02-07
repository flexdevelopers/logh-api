require 'spec_helper'

describe 'Users API' do
  before { FactoryGirl.create(:api_key) }

  describe 'GET /users' do
    before do
      User.destroy_all
      FactoryGirl.create_list(:user, 10)
    end
    context 'with no api key' do
      it 'returns an unauthorized status' do
        get api_users_path
        response.status.should be(401)
      end
    end
    context 'with a valid api key' do
      it 'returns a list of users' do
        get api_users_path, access_token: APIKey.first[:access_token]
        response.status.should be(200)
        expect(json.length).to eq(10)
      end
    end
  end

  describe 'GET /users/:id' do
    context 'with no api key' do
      it 'returns an unauthorized status' do
        user = FactoryGirl.create(:user)
        get api_user_path(user)
        response.status.should be(401)
      end
    end
    context 'with a valid api key' do
      it 'returns a user' do
        user = FactoryGirl.create(:user)
        get api_user_path(user), access_token: APIKey.first[:access_token]
        expect(response).to be_success
        expect(json['email']).to eq(user.email)
      end
    end
  end

  describe 'GET /users/new' do
    context 'with no api key' do
      it 'returns an unauthorized status' do
        get new_api_user_path
        response.status.should be(401)
      end
    end
    context 'with a valid api key' do
      it 'returns a new user' do
        get new_api_user_path, access_token: APIKey.first[:access_token]
        expect(response).to be_success
      end
    end
  end

  describe 'POST /users' do
    context 'with no api key' do
      it 'does not create a user' do
        user_params = FactoryGirl.attributes_for(:user)
        expect { post api_users_path, user: user_params }.to change(User, :count).by(0)
      end
    end
    context 'with a valid api key' do
      it 'creates a user' do
        user_params = FactoryGirl.attributes_for(:user)
        expect { post api_users_path, user: user_params, access_token: APIKey.first[:access_token] }.to change(User, :count).by(1)
      end
    end
  end

  describe 'PATCH /users/:id' do
    context 'with no api key' do
      it 'does not update a user' do
        user = FactoryGirl.create(:user)
        user.email = 'bar@foo.com'
        patch api_user_path(user), user: user.attributes
        user.reload
        user.email.should_not == 'bar@foo.com'
      end
    end
    context 'with a valid api key' do
      it 'updates a user' do
        user = FactoryGirl.create(:user)
        user.email = 'bar@foo.com'
        patch api_user_path(user), user: user.attributes, access_token: APIKey.first[:access_token]
        user.reload
        user.email.should == 'bar@foo.com'
      end
    end
  end

  describe 'DELETE /users/:id' do
    context 'with no api key' do
      it 'does not delete a user' do
        user = FactoryGirl.create(:user)
        expect { delete api_user_path(user), id: user.id }.to change(User, :count).by(0)
      end
    end
    context 'with a valid api key' do
      it 'deletes a user' do
        user = FactoryGirl.create(:user)
        expect { delete api_user_path(user), id: user.id, access_token: APIKey.first[:access_token] }.to change(User, :count).by(-1)
      end
    end
  end

end
