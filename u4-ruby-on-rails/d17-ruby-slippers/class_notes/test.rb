# puts 'Welcome to the personality interview game, what is your name?'
# name_prompt = gets.chomp
# puts "Hello #{name_prompt}, what is your favorite color?"
# color = gets.chomp
# puts "#{color} really brings our your eyes.  Do you have a favorite cartoon?"
# cartoon = gets.chomp
# puts "What? No way, #{cartoon} is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
# super_power = gets.chomp
# puts "Well thank you #{name_prompt}, you sound like you would make a great superhero using #{super_power} for good."

#Control Flow Practice
# if condition
# elsif
# else
# end

# name = 'Joy'
# if name == 'Joy'
#   puts "FOCUS!!!"
# else
#   puts "Focus on focussing!!!"
# end
#
# puts 'Give me a number between 1 and 100:'
# # .to_i is the same as parseInt()
# num_var = gets.chomp.to_i
# 1.upto(num_var) do |i|
#
# if i % 3 == 0 and i % 5 == 0
#   puts 'Fizzbuzz'
# elsif i % 5 == 0
#   puts 'Fizz'
# elsif i % 3 == 0
#   puts 'Buzz'
# else
#   puts i
# end
# end
#
# # For Loops
# for x in 1..5
#   puts x
# end
#
# # While Loops
# i = 0
# terminate = 10
#
# while i < terminate do
#   puts "something"
#   i += 1
# end
#
# # Do-While Loops
# begin
#   puts "something #{i}"
#   i += 1
# end while i < terminate
#
# # Arrays
# turtles = ['Donny', 'Leo', 'Mikey'];
# turtles.push('Raph')
# # Another way of doing it is: turtles << 'Raph'
# puts turtles

# For Practice, write code that prints 1-10 for every kind of Loop
# for x in 1..10
#   puts x
# end
# ##################################
# i = 0
# terminate = 10
# while i<=terminate do
#   puts i
#   i += 1
# end

# DON'T USE SINGLE QUOTES FOR STRING INTERPOLATION! USE DOUBLE QUOTES!
# .. is inclusive, ... is non-inclusive
# people = [["Bobby", "Jaden", "Denis"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]
# for x in 0...people.length do
#   puts "#{people[0][x]}'s favorite color is #{people[1][x]}, and he loves #{people[2][x]}."
# end

# HASHES (Key/Value Pairs)
# my_self = {
#   'name' => 'Pan',
#   'gender' => 'male',
#   'hungry' => true
# }
#
# puts my_self['name']
#
# # Another way to write HASHES
# # :name <== this is called a symbol, a constant that doesn't change.  Use strings when you have a proper noun, use symbols when you don't
# my_self = {
#   :name => 'Joy',
#   :gender => 'Female',
#   :hungry => true
# }
#
# puts my_self[:name]
#
# jenn = {
#   :name => 'Jenn',
#   :gender => 'female',
#   :hungry => true
# }
# puts jenn[:name]
#
# # ANOTHER way to write HASHES
# my_self = {
#   name: 'Pan',
#   gender: 'male',
#   hungry: true
# }
#
# puts my_self[:name]
#
# # ANOTHER way to write a hash
# hash = Hash.new
# hash['fruit'] = 'apple'
# hash[:fruit] = 'apple'
#
# # Say you want all the keys:
# keys = my_self.keys
# puts keys
################ Activity: Have the output say "[Raph] wears a [red] bandana."
tmnt = {
  Raph: 'Red',
  Don: 'Purple',
  Leo: 'Blue',
  Mich: 'Orange'
}
#
# tmnt.each do |key, val|
#   puts "#{key} wears a #{val} bandana."
# end

#  If we translated this to javascript: tmnt.forEach(function(element, index)){};

# ENUMERABLES
# .each
# .map
# .select
# .times
# .upto
# .downto

# tmnt.each do |turtle|
#   puts "Hello #{turtle}!"
# end

# array = [1,2,3,4,5]
# array.each do |x|
#   x += 10
#   puts x
# end

# Practice .map
# new_array = array.map{|e| e+=10}
# puts new_array
#
# Practice .select
# meals = [
#   {name: 'pasta', ingredient: 'sauce'},
#   {name: 'fried rice', ingredient: 'eggs'}
# ]
# saucy_meals = meals.select{|course| course[:ingredient]=='sauce'}
# puts saucy_meals

# FUNCTIONS
def method_name(param1, param2)
  num = 100
  999
  # => return 999

end
# call it
method_name(param1, param2)
