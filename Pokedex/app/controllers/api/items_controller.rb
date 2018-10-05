class Api::ItemsController < ApplicationController

  def show
    @item = Item.find(params[:id])
    render :show
  end

  def index
    @items = Item.all
    render :index
  end


  private
  def item_params
    params.require(:item).permit(:pokemon_id, :name, :price, :happiness, :image_url)
  end


end
