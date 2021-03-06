class ReviewsController < ApplicationController
  before_action :load_product
  before_action :ensure_logged_in, only: [:create, :destroy]

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = @product.reviews.build(review_params)
    @review.user = current_user
    if @review.save
      respond_to do |format|
        format.html do
          if request.xhr?
            render @review
          else
            redirect_to product_path(@product), notice: "Review created successfully"
          end
        end
        format.js
      end
        else
          render 'products/show'
        end



  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to product_path(@product)
  end

  private
  def review_params
    params.require(:review).permit(:comment, :product_id)
  end

  def load_product
    @product = Product.find(params[:product_id])
  end
end
