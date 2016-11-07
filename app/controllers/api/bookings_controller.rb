class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages
    end
  end

  def index
    @bookings = Booking.all
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
        :check_in_date,
        :check_out_date,
        :numGuests,
        :price
      )
    end
end
