class Dog
   def initialize (options={})
     @ears = options[:ears]
     @energy = options[:energy]
     @size = options[:size]
     @coat = options[:coat]
   end

  #  Get the variable (Read it)
   def ear
     @ear
   end
  #  Set the variable ()
   def ear =(new_ear)
     @ear = new_ear
   end
  #  Get the variable
   def energy
     @energy
   end
  #  Set the variable
   def energy=(lots_of_energy)
     @energy = lots_of_energy
   end
 end

my_dog = Dog.new({:ear => filbert})
