class BloggersController < ApplicationController
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
