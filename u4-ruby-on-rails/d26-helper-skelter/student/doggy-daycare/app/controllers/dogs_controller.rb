class DogsController < ApplicationController
  def new

  end

  def create
    dog_params = params.require(:dog).permit(:name, :age_months, :breed, :color, :tagged)
    @dog = Dog.new
    if @dog.valid?
      @message = "Dog name cannot be blank."
      render :new
    else
    @dog.save
    redirect_to dog_url(@dog)
  end

  def show
    @dog = Dog.find(params[:id])
  end

  private

  def set_dog
    @dog = Dog.find(params[:id])
  end

end
end #end class DogsController
