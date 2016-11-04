class Spot < ActiveRecord::Base
  validates :host_id,
            :host_name,
            :title,
            :country,
            :state_region,
            :post_code,
            :street_address,
            :price_per_night,
            :room_type,
            :bed_count,
            :max_guests,
            presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User
end
