require 'spec_helper'

describe Season do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:active) }
  its(:open) { should be_false }

  it { should respond_to(:ends_at) }
  its(:ends_at) { should be_nil }

  it { should respond_to(:weeks) }
  its(:weeks) { should be_empty }

  context 'when season has no name' do
    subject(:season) { FactoryGirl.build(:season, name: '') }
    it { should_not be_valid }
  end

  context 'when season name is greater than 20 characters' do
    subject(:season) { FactoryGirl.build(:season, name: 'a' * 21) }
    it { should_not be_valid }
  end

  context 'when it has no ends_at' do
    subject(:season) { FactoryGirl.build(:season, ends_at: nil) }
    it { should_not be_valid }
  end

end
