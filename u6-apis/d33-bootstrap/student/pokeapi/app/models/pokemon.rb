RestClient.proxy = 'http://localhost:60833'

class Pokemon < ActiveRecord::Base
  serialize :resource_data

  def self.fetch
    response = RestClient.get "http://pokeapi.co/api/v1/pokedex/1"
    pokedex = JSON.parse(response)["pokemon"]
    pokedex.each do |pokemon|
      Pokemon.find_or_create_by!({
        name: pokemon["name"],
        resource_uri: pokemon["resource_uri"]
      })
    end
  end

  # GET THE DATA FROM resource_uri AND STORE THE RESULT in resource_data
  def fetch
    response = RestClient.get "http://pokeapi.co/#{resource_uri}"
    update(resource_data: JSON.parse(response))
  end

  def types
    resource_data["types"]
  end

  def weight
    resource_data["weight"]
  end

  def height
    resource_data["height"]
  end

  def primary_type

  end

  def hp
    resource_data["hp"]
  end

  def attack
    resource_data["attack"]
  end

  def speed
    resource_data["speed"]
  end

  def battle!(pokemon)
  end

end
