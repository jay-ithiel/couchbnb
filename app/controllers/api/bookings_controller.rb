class Api::BookingsController < ApplicationController

  def create
    booking_info = booking_params
    booking_info[:check_in_date] = Time.at(booking_info[:check_in_date].to_i)
    booking_info[:check_out_date] = Time.at(booking_info[:check_out_date].to_i)

    @booking = Booking.new(booking_info)

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
        :num_guests,
        :price
      )
    end
end
