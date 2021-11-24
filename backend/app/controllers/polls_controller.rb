class PollsController < ApplicationController

  def index
    @polls = Poll.all
    render json: @polls
  end

  def create
    
  end


end
