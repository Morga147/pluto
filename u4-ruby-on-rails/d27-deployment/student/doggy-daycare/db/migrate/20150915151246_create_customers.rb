class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      # This is going to be a password scramble.
      # Convention over configuration insists that this field
      # be named password_digest exactly
      t.string :password_digest
      t.string :email
      t.references :dog, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
