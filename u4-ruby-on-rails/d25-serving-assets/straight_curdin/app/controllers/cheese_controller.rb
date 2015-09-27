class CheeseController < ActionController::Base

  def index
    @cheeses = Cheese.all
  end
  def show
    @cheese = Cheese.find(params[:id])
  end

end
