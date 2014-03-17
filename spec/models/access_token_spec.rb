require 'spec_helper'

describe AccessToken do

  let(:fake_redis) { FakeRedis.new }
  let(:existing_token) { nil }
  subject(:access_token) { AccessToken.new(existing_token, fake_redis) }

  it { should respond_to(:token) }
  it { should respond_to(:ttl) }
  it { should respond_to(:user) }
  it { should respond_to(:expired?) }
  it { should respond_to(:valid?) }

  shared_examples_for :fresh_token do
    its(:token)       { should be_present }
    its(:last_seen)   { should be_within(2.seconds).of(Time.now) }
    its(:ttl)         { should be_within(2).of(1200) }
    its(:expired?)    { should be_false }
    its(:valid?)      { should be_true }
  end

  context 'when creating a new access token' do
    its(:user) { should be_nil }
    it_behaves_like :fresh_token
  end

  context 'when refreshing an existing, non-expired access token' do
    let(:existing_token) { AccessToken.new(nil, fake_redis).token }
    before { fake_redis["access_token/#{existing_token}/last_seen"] = (AccessToken::TTL - 1.minute).ago.iso8601 }

    it_behaves_like :fresh_token
  end

  context 'when refreshing an existing, expired access token' do
    let(:existing_token) { AccessToken.new(nil, fake_redis).token }
    before { fake_redis["access_token/#{existing_token}/last_seen"] = (AccessToken::TTL + 1.minute).ago.iso8601 }

    it { should be_expired }
    it { should_not be_valid }
    its(:ttl) { should eq(0) }
  end

  context 'when associating a user with the access token' do
    let(:user) { FactoryGirl.create(:user) }

    context 'when refreshing an existing, non-expired access token' do
      let(:existing_token) { AccessToken.new(nil, fake_redis).token }
      before do
        AccessToken.new(existing_token, fake_redis).user = user
        fake_redis["access_token/#{existing_token}/last_seen"] = (AccessToken::TTL - 1.minute).ago.iso8601
      end

      it_behaves_like :fresh_token
      its(:user) { should eq(user) }
    end

    context 'when refreshing an existing, expired access token' do
      let(:existing_token) { AccessToken.new(nil, fake_redis).token }
      before do
        AccessToken.new(existing_token, fake_redis).user = user
        fake_redis["access_token/#{existing_token}/last_seen"] = (AccessToken::TTL + 1.minute).ago.iso8601
      end

      it { should be_expired }
      it { should_not be_valid }
      its(:ttl) { should eq(0) }
      its(:user) { should be_nil }
    end
  end

  describe '#delete!' do
    let(:token) { AccessToken.new(nil, fake_redis) }
    before { token }

    it 'deletes the access token key from redis' do
      expect { token.delete! }.to change(fake_redis, :dbsize).from(1).to(0)
    end

    it 'sets the access token to expired' do
      expect { token.delete! }.to change(token, :expired?).from(false).to(true)
    end

    it 'sets the access token ttl to zero' do
      expect { token.delete! }.to change(token, :ttl).to(0)
    end

  end




end