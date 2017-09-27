class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :guest_id, null: false
      t.integer :spot_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end

    add_index :reviews, :guest_id
    add_index :reviews, :spot_id
  end
end
