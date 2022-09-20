class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :mountain_id
      t.string :name

      t.timestamps
    end
  end
end
