# I have provided two solutions. the second one (the one that isn't refactored to include the Calculator class) is commented out below the refactored one.

# the server with using the Calculator class and switch statements

require_relative 'calculator'

module SinatraCalculator
  class Server < Sinatra::Base

    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
      redirect '/calc'
    end

    get '/calc' do
      "<h1>Hi there, welcome to the Sinatra Calculator, for all your calculating needs.<h1>"
    end

    # get '/calc/add/:num1/:num2' do
    #   calculator = Calculator.new
    #   "#{calculator.add(params[:num1],params[:num2])}"
    # end # end addition
    #
    # get '/calc/subtract/:num1/:num2' do
    #   calculator = Calculator.new
    #   "#{calculator.subtract(params[:num1],params[:num2])}"
    # end # end subtraction
    #
    # get '/calc/multiply/:num1/:num2' do
    #   calculator = Calculator.new
    #   "#{calculator.multiply(params[:num1],params[:num2])}"
    # end #end multiplication
    #
    # get '/calc/divide/:num1/:num2' do
    #   calculator = Calculator.new
    #   "#{calculator.divide(params[:num1],params[:num2])}"
    # end #end division

    #Refactoring for num. 4
    get '/calc/:operator/:num1/:num2' do |operator, num1, num2|
      calculator = Calculator.new
      if (operator == +)
        "#{calculator.add(params[num1], params[num2])}"
      elsif (operator == -)
        "#{calculator.subtract(params [num1], params[num2])}"
      elsif (operator == *)
        "#{calculator.multiply(params[num1], params[num2])}"
      elsif (operator == /)
        "#{calculator.divide(params[num1], params[num2])}"
    end # end if/else statements
  end #end refactoring get...do...
  end #end class
end #end module
