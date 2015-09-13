class BloggersController < ApplicationController
<<<<<<< HEAD
  def index
    #calling an action
    #view all bloggers
    @bloggers = Blogger.all
  end # end index
  def show
    #view one blogger
    @blogger = Blogger.find(params[:id])
  end #end show
end #end class BloggersController
=======

  def index
      @bloggers = Blogger.all
  end

  def show
    @blogger = Blogger.find(params[:id])
  end

end
>>>>>>> 56cf2f5bb562c006994b5768923b86f3e11c2362
