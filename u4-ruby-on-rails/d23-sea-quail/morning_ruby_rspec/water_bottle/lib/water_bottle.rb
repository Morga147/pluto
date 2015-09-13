class WaterBottle
  attr_reader :capacity, :brand, :measure

  def initialize(brand, capacity)
    @brand = brand
    @capacity = capacity
    @measure = 0
  end # end initialize

  def empty?
    return @measure == 0
  end #end empty?

  def fill
    @measure = @capacity
  end #end fill

  def squirt
    if empty?
      false
    else
      @measure -= 4
    end #end if/else statement
  end # end squirt


end #end class WaterBottle
