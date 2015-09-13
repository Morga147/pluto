require 'sinatra'
require 'pg'

$db = PG.connect(dbname: 'facebook')

class FacebookApp < Sinatra::Base
  get '/' do
    @result = $db.exec("SELECT * FROM people")
    # output = "<ul>"
    # result.each do |person|
    #   output += "<li>#{person['first_name']}</li>"
    #
    # end # end do |person|
    # output += "</ul>"
    erb :homepage
  end
end
