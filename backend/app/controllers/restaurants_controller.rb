class RestaurantsController<ApplicationController

  def index
    @restaurants=Restaurant.all
    render json: @restaurants
  end

  def show
    @restaurant=Restaurant.find(params[:id])
    render json: @restaurant
  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def user_params
    params.require(:restaurant).permit(:name,:cuisine,:location)
  end
end
