class Spot < ActiveRecord::Base
  validates :host_id,
            :host_name,
            :title,
            :country,
            :city,
            :post_code,
            :street_address,
            :price_per_night,
            :room_type,
            :bed_count,
            :max_guests,
            :lat,
            :lng,
            presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  has_many :bookings,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: :Booking

  def pending_requests?
    pending_requests.size > 0
  end

  def pending_requests
    :bookings.select { |request| request.pending? }
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northeast][:lat])
        .where("lat > ?", bounds[:southwest][:lat])
        .where("lng > ?", bounds[:southwest][:lng])
        .where("lng < ?", bounds[:northeast][:lng])
  end
end
