require 'spec_helper'

describe Game do

  it { should respond_to(:start_datetime) }
  its(:start_datetime) { should be_nil }

  it { should respond_to(:week) }
  its(:week) { should be_nil }

end
