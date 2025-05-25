class UsersController < ApplicationController
  def new
    render inertia: "Auth/SignUp"
  end
end
