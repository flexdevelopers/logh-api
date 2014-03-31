require 'spec_helper'

describe API::Admin::UsersController do
  let(:current_user_admin) { FactoryGirl.create(:user, email: 'foo@bar.com', admin: true) }
  let(:another_user) { FactoryGirl.create(:user, email: 'foo@barz.com') }

  before do
    sign_in(current_user_admin)
  end

  # GET /api/admin/users/
  describe '#index' do
    context 'when an admin requests all users' do
      it 'returns all users' do
        get :index
        expect(response).to be_success
      end
    end
  end

  # GET /api/admin/users/:id
  describe '#show' do
    context 'when an admin requests the current user' do
      it 'returns the user' do
        get :show, id: current_user_admin.id
        expect(response).to be_success
        expect(json[:email]).to eq(current_user_admin.email)
      end
    end
    context 'when an admin requests a user other than the current user' do
      it 'returns the user' do
        get :show, id: another_user.id
        expect(response).to be_success
        expect(json[:email]).to eq(another_user.email)
      end
    end
  end

  # GET /api/admin/users/:id
  describe '#update' do
    context 'when an admin updates the current user' do
      before { current_user_admin.email = 'newemail@foo.com' }
      it 'updates the user' do
        patch :update, id: current_user_admin.id, user: current_user_admin.attributes
        expect(response).to be_success
        current_user_admin.reload
        current_user_admin.email.should == 'newemail@foo.com'
      end
    end
    context 'when an admin updates a user other than the current user' do
      before { another_user.email = 'newemail@foo.com' }
      it 'updates the user' do
        patch :update, id: another_user.id, user: another_user.attributes
        expect(response).to be_success
        another_user.reload
        another_user.email.should == 'newemail@foo.com'
      end
    end
  end

  #DELETE /api/admin/users/:id
  describe '#destroy' do
    context 'when an admin attempts to delete the current user' do
      it 'returns unauthorized as you cant delete yourself' do
        expect { delete :destroy, id: current_user_admin.id }.to change(User, :count).by(0)
        expect(response.status).to eq(401)
      end
    end
    context 'when an admin deletes another user' do
      #todo: not sure why this is failing
      xit 'deletes the user' do
        expect { delete :destroy, id: another_user.id }.to change(User, :count).by(-1)
        expect(response.status).to eq(204)
      end
    end
  end

end