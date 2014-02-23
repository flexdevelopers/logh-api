require 'spec_helper'

describe Squad do

  it { should respond_to(:name) }
  its(:name) { should be_blank }

  it { should respond_to(:abbrev) }
  its(:abbrev) { should be_blank }

end
