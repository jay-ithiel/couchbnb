class Api::SpotsController < ApplicationController
  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def update
    @spot = Spot.find(params[:id])
    if @spot.update
      render :show
    else
      render json: @spot.errors.full_messages
    end
  end

  def index
    @spots = Spot.in_bounds(params[:bounds])
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    render :show
  end

  def destroy
    @spot = Spot.find(params[:id])
    @spot.destroy
    render json: {}
  end

  private
    def spot_params
      params.require(:spot).permit(
        :host_id,
        :host_name,
        :title,
        :description,
        :room_type,
        :price_per_night,
        :max_guests,
        :bed_count,
        :street_address,
        :city,
        :state_region,
        :country,
        :post_code,
        :lat,
        :lng,
        :bounds
      )
    end
end
