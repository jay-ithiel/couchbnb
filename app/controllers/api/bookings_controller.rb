class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save

    else
      render json: @booking.errors.full_messages
    end
  end

  def index

  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render json: {}
  end

  private
    def booking_params
      params.require(:booking).permit(
        :spot_id,
        :guest_id,
        :location,
        :status,
        :check_id_date,
        :check_out_date,
        :numGuests,
        :price
      )
    end

end
