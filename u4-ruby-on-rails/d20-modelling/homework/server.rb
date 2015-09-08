require 'sinatra'


  class Server < Sinatra::Base
    # Tell Sinatra what to render
    get '/' do

      def initialize
        @compliments = [
  "people behind you in class think you are the perfect height.",
  "your instructors think you're amazing.",
  "your posture during breaks effectively masks your exhaustion.",
  "you don't eat every donut on Monday and leave some for others.",
  "your fingers are magic on the keys.",
  "you always call your functions."]

      @random_compliment = @compliments.sample
    end # end initialize
    initialize
    erb :index
    end # end '/'


    get '/:name' do |new_name|
      @compliments = [
"people behind you in class think you are the perfect height.",
"your instructors think you're amazing.",
"your posture during breaks effectively masks your exhaustion.",
"you don't eat every donut on Monday and leave some for others.",
"your fingers are magic on the keys.",
"you always call your functions."]

    @random_compliment = @compliments.sample

    @name = "<h1>#{:new_name}, you really are great. I bet #{@random_compliment}<h1>"
    erb :index
    end # '/:name'

end # end class Sever
