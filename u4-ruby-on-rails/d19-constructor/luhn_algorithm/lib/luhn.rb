require 'pry'
# Write your Luhn class here

class Luhn
  # use "self" when writing a class method (vs. an instance method)
  def self.valid?(number)
    binding.pry
    step_one = number.to_s[-2].to_i
    step_one*2
  end #self.valid?
end # Luhn
