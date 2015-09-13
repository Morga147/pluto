# Correct the following code to print out Taylor's face.

################################################################################
# Part 1
################################################################################

# Step 1
# Require the file taylors.rb
require_relative './taylors.rb'
# Require the file boneyard/exes.rb
require_relative './boneyard/exes.rb'
# Step 2
# Methods

def sing(lyric)
  "♬#{lyric}♬"
end
# sing("I stay out too late")
# sing("Got nothing on my brain")

def mmm_mmm(lyric)
  "#{lyric}, mmm-mmm"
end
# mmm_mmm("That's what people say")

def back_up(lyric, number_of_words)
  repeated_lyrics = lyric.split(' ').last(number_of_words).join(' ')
  "#{lyric} (#{repeated_lyrics})"
end
# back_up("I'm dancing on my own", 4)
# back_up("I make the moves up as I go", 5)
# mmm_mmm("And that's what they don't see")
# mmm_mmm("That's what they don't see")

# Step 3
# Create the additional methods

def repeat(lyric)
  "#{lyric}, #{lyric.split.last}, #{lyric.split.last}, #{lyric.split.last}, #{lyric.split.last}"
end

def double(lyric)
 "#{lyric}, #{lyric}"
end

def stutter(lyric)
  "#{lyric.split.first}, #{lyric.split.first}, #{lyric}"
end
# ("I shake it off, I shake it off") == ("I, I, I shake it off, I shake it off")

$stdout.puts(TAYLORS[0][:head])

exit unless sing("I stay out too late") == "♬I stay out too late♬"
exit unless sing("Got nothing in my brain").include?("♬Got nothing in my brain♬")
exit unless mmm_mmm("That's what people say") == ("That's what people say, mmm-mmm")

$stdout.puts(TAYLORS[0][:face])

exit unless back_up("I'm dancing on my own", 4) == "I'm dancing on my own (dancing on my own)"
exit unless back_up("I make the moves up as I go", 5).include?("(moves up as I go)")
exit unless mmm_mmm("And that's what they don't see") == "And that's what they don't see, mmm-mmm"
exit unless mmm_mmm("That's what they don't see").include?(", mmm-mmm")

$stdout.puts(TAYLORS[0][:mouth])

exit unless repeat("'Cause the players gonna play") == ("'Cause the players gonna play, play, play, play, play")
exit unless repeat("And the haters gonna hate").include?("hate, hate, hate, hate, hate")
exit unless repeat("Baby, I'm just gonna shake").include?("shake, shake, shake, shake, shake")
exit unless double("I shake it off") == "I shake it off, I shake it off"

$stdout.puts(TAYLORS[0][:neck])

exit unless repeat("Baby, I'm just gonna shake").include?("shake, shake, shake, shake, shake")
exit unless repeat("Heart-breakers gonna break").include?("break, break, break, break, break")


exit unless repeat("And the fakers gonna fake").include?("fake, fake, fake, fake, fake")
exit unless double("I shake it off") == "I shake it off, I shake it off"

$stdout.puts(TAYLORS[0][:shoulders])

exit unless stutter("I shake it off, I shake it off") == ("I, I, I shake it off, I shake it off")
