require 'spec_helper'

describe Invitation do

  it { should respond_to(:league) }
  its(:league) { should be_nil }

  it { should respond_to(:email) }
  its(:email) { should be_blank }

  it { should respond_to(:message) }
  its(:message) { should be_blank }

  context 'when league is not present' do
    subject(:invitation) { FactoryGirl.build(:invitation, league: nil) }
    it { should_not be_valid }
  end

  context 'when email is not present' do
    subject(:invitation) { FactoryGirl.build(:invitation, email: '') }
    it { should_not be_valid }
  end

  context 'when email address is not unique for a league' do
    it 'raises an error' do
      invitation = FactoryGirl.create(:invitation)
      expect { FactoryGirl.create(:invitation, league: invitation.league, email: invitation.email) }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context 'when email format is invalid' do
    it 'should be invalid' do
      addresses = %w{user@foo,com user@foo...com user_at_foo.org example.user@foo. foo@bar_baz.com foo@bar+baz.com}
      addresses.each do |invalid_address|
        invitation = FactoryGirl.build(:invitation, email: invalid_address)
        expect(invitation).not_to be_valid
      end
    end
  end

  context 'when email format is valid' do
    it 'should be valid' do
      addresses = %w{user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn}
      addresses.each do |valid_address|
        invitation = FactoryGirl.create(:invitation, email: valid_address)
        expect(invitation).to be_valid
      end
    end
  end

  context 'when email has upper case characters' do
    let(:mixed_case_email) { 'Foo@Bar.com' }
    subject(:invitation) { FactoryGirl.create(:invitation, email: mixed_case_email) }
    its(:email) { should eq(mixed_case_email.downcase) }
  end

  context 'when invitation has a message greater than 200 characters' do
    subject(:invitation) { FactoryGirl.build(:invitation, message: 'a' * 201) }
    it { should_not be_valid }
  end

end
