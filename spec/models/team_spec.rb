require 'spec_helper'

describe Team do
  it { should respond_to(:name) }
  it { should respond_to(:active) }
  it { should respond_to(:paid) }
  it { should respond_to(:league) }
  it { should respond_to(:user) }
  it { should respond_to(:picks) }
end
