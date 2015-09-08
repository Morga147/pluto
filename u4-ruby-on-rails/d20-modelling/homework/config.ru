require 'sinatra'
require 'sinatra/reloader'
require 'pry'

require_relative 'server'

run Server
