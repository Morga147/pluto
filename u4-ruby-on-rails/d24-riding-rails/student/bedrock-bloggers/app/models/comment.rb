class Comment < ActiveRecord::Base
  # HE WHO POSTED
  belongs_to :blogger
  # WHERE HE POSTED
  belongs_to :blog
end
