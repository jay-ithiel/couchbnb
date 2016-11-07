class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :host_name, null: false
      t.string :title, null: false
      t.text :description

      t.string :country, null: false, index: true
      t.string :state_region, index: true
      t.string :city, null: false, index: true
      t.string :post_code, null: false, index: true
      t.string :street_address, null: false

      t.string :price_per_night, null: false, index: true
      t.string :room_type, null: false, index: true
      t.integer :bed_count, null: false, index: true
      t.integer :max_guests, null: false, index: true

      t.string :spot_pic_url

      t.timestamps null: false
    end
  end
end
