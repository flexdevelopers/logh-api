require 'spec_helper'

describe Team do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:alive) }
  its(:alive) { should be_true }

  it { should respond_to(:paid) }
  its(:paid) { should be_false }

  it { should respond_to(:league) }
  its(:league) { should be_nil }

  it { should respond_to(:user) }
  its(:user) { should be_nil }

  it { should respond_to(:picks) }
  its(:picks) { should be_empty }

end
