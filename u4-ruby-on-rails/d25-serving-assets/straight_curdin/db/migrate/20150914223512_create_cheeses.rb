class CreateCheeses < ActiveRecord::Migration
  def change
    create_table :cheeses do |t|
      t.string :name
      t.string :milk_type
      t.string :description
      t.string :image_url
      t.timestamp :created_at
      t.timestamp :updated_at

      t.timestamps null: false
    end
  end
end
