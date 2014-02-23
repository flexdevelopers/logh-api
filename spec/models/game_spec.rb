require 'spec_helper'

describe Game do

  it { should respond_to(:week) }
  its(:week) { should be_nil }

  it { should respond_to(:start_datetime) }
  its(:start_datetime) { should be_nil }

  it { should respond_to(:home_squad) }
  its(:home_squad) { should be_nil }

  it { should respond_to(:visiting_squad) }
  its(:visiting_squad) { should be_nil }

end
