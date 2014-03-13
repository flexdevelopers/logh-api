require 'spec_helper'

describe Session do

  it { should respond_to(:email) }
  its(:email) { should be_blank }

  it { should respond_to(:password) }
  its(:password) { should be_blank }

  context 'when email is blank' do
    it 'should not be valid' do
      session = Session.new(email: '', password: 'foobar')
      expect(session).not_to be_valid
    end
  end

  context 'when password is blank' do
    it 'should not be valid' do
      session = Session.new(email: 'foo@bar.com', password: '')
      expect(session).not_to be_valid
    end
  end

end