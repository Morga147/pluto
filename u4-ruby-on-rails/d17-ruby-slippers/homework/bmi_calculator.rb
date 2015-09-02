puts "What is your weight in pounds?"
weight = gets.chomp.to_i
puts "Your weight is #{weight} lbs."
puts "What is your height in inches?"
height = gets.chomp.to_i
puts "Your height is #{height} in."

step_one = weight*703
step_two = height*height
step_three = step_one/step_two

puts "Your body mass index is #{step_three}."
