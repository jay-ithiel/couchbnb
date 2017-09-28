class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    if params.include?("spotId")
      @reviews = Review.where(spot_id: params["spotId"])
    else
      @reviews = Review.all.limit(20)
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private
    def review_params
      params.require(:review).permit(
        :guest_id,
        :spot_id,
        :body,
        :rating
      )
    end
end
