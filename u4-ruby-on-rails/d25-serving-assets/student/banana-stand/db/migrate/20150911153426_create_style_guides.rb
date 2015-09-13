class CreateStyleGuides < ActiveRecord::Migration
  def change
    create_table :style_guides do |t|
      t.string :title
      t.text :content
      t.string :author
      t.date :date

      t.timestamps null: false
    end
  end
end
