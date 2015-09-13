class CreateBloggers < ActiveRecord::Migration
  def change
    create_table :bloggers do |t|
      t.string :name
      t.string :username
      t.string :password
      t.date :birthday

      t.timestamps null: false
    end
  end
end
