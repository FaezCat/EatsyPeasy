class PollsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @polls = Poll.all
    render json: @polls
  end

  def create
    #p params
    poll = Poll.create!(polls_params)
    render :nothing => true
  end


  private

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

