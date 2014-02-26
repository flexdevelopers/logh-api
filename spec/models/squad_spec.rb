require 'spec_helper'

describe Squad do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:abbrev) }
  its(:abbrev) { should be_blank }

  context 'when squad has no name' do
    subject(:squad) { FactoryGirl.build(:squad, name: '') }
    it { should_not be_valid }
  end

  context 'when squad has a name longer than 30 characters' do
    subject(:squad) { FactoryGirl.build(:squad, name: 'a' * 31) }
    it { should_not be_valid }
  end

  context 'when squad has no abbreviation' do
    subject(:squad) { FactoryGirl.build(:squad, abbrev: '') }
    it { should_not be_valid }
  end

  context 'when squad abbrev is exactly 3 characters' do
    subject(:squad) { FactoryGirl.build(:squad, abbrev: 'FOO') }
    it { should be_valid }
  end

  context 'when squad abbrev is greater than 3 characters' do
    subject(:squad) { FactoryGirl.build(:squad, abbrev: 'FOOBAR') }
    it { should_not be_valid }
  end

  context 'when squad abbrev is less than 3 characters' do
    subject(:squad) { FactoryGirl.build(:squad, abbrev: 'FO') }
    it { should_not be_valid }
  end

end
