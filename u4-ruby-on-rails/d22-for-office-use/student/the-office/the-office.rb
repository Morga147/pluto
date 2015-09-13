require "sinatra"
require "pg"

$db = PG.connect({dbname: 'the_office'})

class TheOffice < Sinatra::Base
  def title
    @title || "Default Title"
  end

  # dynamic style sheet (if it was in public file, it would be static)
  get '/style.css'do
    scss :style
  end

  get '/' do
    @title = "The Office"
    erb :homepage
  end

  post '/for-office-use-only' do
    $db.exec_params("INSERT INTO forms (name, password) VALUES ($1, $2)", [params[:name], params[:password]])
    redirect '/'
  end

end #end class TheOffice
