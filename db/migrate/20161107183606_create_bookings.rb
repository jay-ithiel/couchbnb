class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :guest_id, null: false
      t.string :location, null: false

      t.string :status, default: "PENDING"
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false

      t.integer :num_guests, null: false
      t.string :price, null: false

      t.timestamps null: false
    end
  end
end
