require 'pg'

$db = PG.connect(dbname: 'facebook')

class Person
  def self.find(id)
    # $1 is a placeholder, the below way is safe from injection hacks
    person = $db.exec_params("SELECT * FROM people WHERE id = $1", [id]).first
    Person.new(person)
  end # end self.find(id)

  def initialize(options={})
    @first_name = options['first_name']
    @last_name = options['last_name']
    @birthday = options['birthday']
    @id = options['id']
  end #end initialize

  def full_name
    "#{@first_name.capitalize} #{@last_name.capitalize}"
  end #end full_name

  def age
    birthday = Date.parse(@birthday)
    age = Date.today - birthday
    "Age: #{age}"
  end #end age
  attr_reader :id, :first_name, :last_name, :birthday
end #end class Person
