class Dog < ActiveRecord::Base
  BREED = ["Pinscher", "Terrier", "Dachshund", "Retreiver", "Poodle", "Toy", "Other"]
  Dog::BREED
  validates :name :age_months :breed :color, presence: true
  validates :breed, inclusion: {in: BREED}
    # blank? - returns true if the varb is nil or ""
    # present? - returns false if the varb is nil or ""

end
