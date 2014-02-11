require 'spec_helper'

describe League do
  it { should respond_to(:name) }
  it { should respond_to(:active?) }
  it { should respond_to(:user) }
end