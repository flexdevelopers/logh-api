require 'spec_helper'

describe Week do

  it { should respond_to(:number) }
  its(:number) { should be_nil }

  it { should respond_to(:start_date) }
  its(:start_date) { should be_nil }

  it { should respond_to(:end_date) }
  its(:end_date) { should be_nil }

  it { should respond_to(:season) }
  its(:season) { should be_nil }

  it { should respond_to(:games) }
  its(:games) { should be_empty }

  it { should respond_to(:picks) }
  its(:picks) { should be_empty }

end
