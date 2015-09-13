class Blogger < ActiveRecord::Base
  has_many :blogs
  has_many :comments
  # similar to: $db.exec_params("SELECT * FROM blogs WHERE blogger_id = $1, [@id])

  def say!
    puts slogan
  end #end say!

end #end class Blogger
