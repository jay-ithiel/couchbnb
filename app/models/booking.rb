class Booking < ActiveRecord::Base
  validates :spot_id,
            :spot,
            :guest_id,
            :guest,
            :location,
            :check_in_date,
            :check_out_date,
            :num_guests,
            :price,
            presence: true

  validates :status,
            presence: true,
            inclusion: { in: %w(PENDING APPROVED DENIED) }

  validate :overlapping_requests?, :overlapping_approved_requests?

  belongs_to :spot,
    primary_key: :id,
    foreign_key: :spot_id,
    class_name: :Spot

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User

  def overlapping_requests?
    requests = [get_overlapping_requests]
    requests.count < 1 ? false : true
  end

  def overlapping_approved_requests?
    requests = [get_overlapping_requests.where(
      "status = 'APPROVED' AND '#{status}' = 'APPROVED'"
    )]
    requests.count < 1 ? false : true
  end

  def overlapping_pending_requests?
    requests = [get_overlapping_requests.where(
      "status = 'PENDING' AND '#{status}' = 'PENDING'"
    )]
    requests.count < 1 ? false : true
  end

  def get_overlapping_requests
    Booking.where(
      "(check_out_date > '#{check_in_date}'
      AND check_in_date < '#{check_out_date}')\
      OR (check_in_date < '#{check_out_date}'
      AND check_out_date > '#{check_in_date}')\
      OR (check_out_date > '#{check_out_date}'
      AND check_in_date < '#{check_in_date}')\
      OR (check_out_date < '#{check_out_date}'
      AND check_in_date > '#{check_in_date}')
      OR check_in_date = '#{check_in_date}'"
    ).where("spot_id = '#{spot_id}'")
  end

  def approve!
    Booking.transaction do
      self.status = "APPROVED"
      get_overlapping_requests.where("status = 'PENDING'").each do |request|
        request.deny!
      end
      self.save!
    end
  end

  def deny!
    Booking.transaction do
      self.status = 'DENIED'
      self.save!
    end
  end

  def pending?
    status == 'PENDING'
  end

end
