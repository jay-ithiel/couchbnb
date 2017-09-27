class Review < ActiveRecord::Base
  validates :guest_id, :spot_id, :description, :rating, presence: true

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User

  belongs_to :spot,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: :Spot
end
