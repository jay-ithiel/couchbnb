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
    spots = Spot.all
    if params[:roomType].length > 1
      spots = spots.where(room_type: params[:roomType])
    else
      spots = Spot.all
    end

    spots = bounds ? spots.in_bounds(params[:bounds]) : spots # Spot.all

    if (params[:minPrice] && params[:maxPrice])
      spots = spots.where(price_per_night: price_range)
    end

    if params[:numGuests]
      spots = spots.where(max_guests: (params[:numGuests].to_i)..100)
    end

    # if (params[:check_in_date] && params[:check_out_date])
    #   spots = current_user.tasks.where(due_date: 1.week.ago..Date.today)
    #   spots = Spot.where()
    # end

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
        :numGuests,
        :checkIn,
        :checkOut
      )
    end

    def price_range
      params[:minPrice] = params[:minPrice].to_i
      params[:maxPrice] = params[:maxPrice].to_i
      (params[:minPrice]..params[:maxPrice])
    end

    def date_range
      (params[:check_in_date]..params[:check_out_date])
    end

    def bounds
      params[:bounds]
    end

end
