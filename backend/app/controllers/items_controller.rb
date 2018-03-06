class ItemsController<ApplicationController
  def index
    @items=Item.all
    render json: @items
  end

  def show
    @item=Item.find(params[:id])
    render json: @item
  end

  def create

  end

  def update

  end

  def destroy

  end

private
  def item_params
    params.require(:item).permit(:name,:price,:restaurant_id)
  end

end
