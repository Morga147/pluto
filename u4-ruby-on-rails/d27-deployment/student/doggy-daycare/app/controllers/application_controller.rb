class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_customer
    if session[:customer_id]
      Customer.find(session[:customer_id])
    end #end if/else statement
  end #end current_customer
end #end ApplicationController
