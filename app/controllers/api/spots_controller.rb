class Api::SpotsController < ApplicationController
  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages
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
    @spots = Spot.all
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
        :country,
        :state_region,
        :city,
        :post_code,
        :street_address,
        :price_per_night,
        :room_type,
        :bed_count,
        :max_guests
      )
    end
end
