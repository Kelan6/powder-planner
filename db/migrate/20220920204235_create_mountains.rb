class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.string :title
      t.string :address
      t.integer :elevation

      t.timestamps
    end
  end
end
