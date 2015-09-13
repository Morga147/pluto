json.array!(@users) do |user|
  json.extract! user, :id, :email, :password, :first_name, :last_name, :address, :city, :state, :zip, :phone, :birthday
  json.url user_url(user, format: :json)
end
