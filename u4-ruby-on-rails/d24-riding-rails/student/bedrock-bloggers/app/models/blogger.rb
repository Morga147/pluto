class Blogger < ActiveRecord::Base
  has_many :blogs
<<<<<<< HEAD
  has_many :comments
  # similar to: $db.exec_params("SELECT * FROM blogs WHERE blogger_id = $1, [@id])

  def say!
    puts slogan
  end #end say!

end #end class Blogger
=======
end
>>>>>>> 56cf2f5bb562c006994b5768923b86f3e11c2362
