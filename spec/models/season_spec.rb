require 'spec_helper'

describe Season do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

end
