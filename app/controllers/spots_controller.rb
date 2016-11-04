class SpotsController < ApplicationController
  def create
  end

  def index
  end

  def show
  end

  def destroy
  end

  private
    def spot_params
      params.require(:spot).permit(
        :host_id,
        :host_name,
        :title,
        :country,
        :state_region,
        :post_code,
        :street_address,
        :price_per_night,
        :room_type,
        :bed_count
      )
    end
end
