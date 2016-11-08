@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking,
      :spot_id,
      :guest_id,
      :location,
      :status,
      :check_id_date,
      :check_out_date,
      :num_guests,
      :price
  end
end
