class PollsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @polls = Poll.all
    render json: @polls
  end

  def create
    poll = Poll.create!(polls_params)
    render :nothing => true
  end

  def show
    if poll
      render json: poll
    else
      render json: poll.errors
    end
  end

  def update
    @poll = Poll.find_by(alpha_numeric_id: params[:alpha_numeric_id])
    # if poll
      #knowing which one was voted for, need to update corresponding vote count by 1
      restVote = params[:vote] #restaurant_{number}_votes
      @poll.increment!(restVote.to_sym,1)
      user = User.create(name: params[:name], poll_id: poll[:id], restaurant_choice: params[:vote])
      render json: @poll
      # else
    #   render json: poll.errors
    # end
  end

  def results
    poll = Poll.find_by(alpha_numeric_id: params[:alpha_numeric_id])
    users = User.where(poll_id: poll.id)
    #render json: poll
    render :json => {:users => users, 
                                  :poll => poll }
  end
  
  private

  # def vote_params
  #   params.permit(:place_id, :name, :alpha_numeric_id)
  # end
  
  def poll
    @poll ||= Poll.where(alpha_numeric_id: params[:alpha_numeric_id])
  end

  def polls_params
    params.permit(:restaurant_1_name,
    :restaurant_2_name,
    :restaurant_3_name,
    :restaurant_1_votes,
    :restaurant_2_votes,
    :restaurant_3_votes,
    :restaurant_1_business_hours,
    :restaurant_2_business_hours,
    :restaurant_3_business_hours,
    :restaurant_1_phone_number,
    :restaurant_2_phone_number,
    :restaurant_3_phone_number,
    :restaurant_1_website,
    :restaurant_2_website,
    :restaurant_3_website,
    :restaurant_1_maps_directions,
    :restaurant_2_maps_directions,
    :restaurant_3_maps_directions,
    :alpha_numeric_id,
    :restaurant_1_place_id,
    :restaurant_2_place_id,
    :restaurant_3_place_id)
  end
end

