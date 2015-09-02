# declare the constant secret number, and the variable "guessed"
SECRET_NUMBER = 7
guessed = false
# print to the screen this message (the user will be able to enter a number at this
# point through the gets.chomp method below)
puts('I\'m thinking of a number between 1 and 10. Can you guess it?')

# while the opposite of the variable "guessed"...
while !guessed
# change what the user inputs from a string to a num and store it in the "guess" variable
  guess = gets.chomp.to_i
# if the user's guess is equal to the secret number...
  if SECRET_NUMBER == guess
# then the variable "guessed" is true
    guessed = true
# Otherwise
  else
# print out the number they inputted and say "Try again!"
    puts("#{guess}? Try again!")
# end both the while loop and the if/else statements
  end
end
# Once they exit the loop (having guessed the right number), print to screen "Great job!"
$stdout.puts('Great job!')
