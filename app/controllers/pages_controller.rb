class PagesController < ApplicationController
  def index
    render inertia: "Index"
  end

  def about
    render inertia: "About"
  end
end
