require "sinatra/base"
class WineryWebsite < Sinatra::Base
  get '/' do
    File.read('homepage.html')
  end # get '/' do

  get '/search' do
    params.inspect
  end # get '/search' do
end # class
