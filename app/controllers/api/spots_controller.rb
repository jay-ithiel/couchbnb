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
    spots = bounds ? Spot.in_bounds(params[:bounds]) : Spot.all

    if (params[:minPrice] && params[:maxPrice])
      spots = spots.where(price: price_range)
    end
    #
    # if (params[:check_in_date] && params[:check_out_date])
    #
    # end
    #
    # @spots = spots.includes(:room_type)

    @spots = spots

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
        :bounds,
        :minPrice,
        :maxPrice,
        :check_in_date,
        :check_out_date
      )
    end

    def price_range
      (params[:minPrice]..params[:maxPrice])
    end

    def date_range
      (params[:check_in_date]..params[:check_out_date])
    end

    def bounds
      params[:bounds]
    end

end
