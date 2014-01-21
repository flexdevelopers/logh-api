require 'spec_helper'

describe "Users API" do
  describe "GET /users" do
    it "sends a list of users" do
      get users_path
      response.status.should be(200)
    end
  end
end
