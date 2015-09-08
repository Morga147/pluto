require 'pg'
require 'sinatra'

$db = PG.connect(dbname: 'star_stalker')

class App < Sinatra::Base

  get '/' do
    erb :index, layout: :default_layout
  end

  get '/about' do
    erb :about, layout: :default_layout
  end

  get '/stars' do
    @results = $db.exec("SELECT * FROM stars")
    erb :stars, layout: :default_layout
  end

  get '/stars/:id' do |id|
    @results = $db.exec("SELECT * FROM stars WHERE id='#{id}'")
    erb :stars, layout: :default_layout
  end

end #end class App
