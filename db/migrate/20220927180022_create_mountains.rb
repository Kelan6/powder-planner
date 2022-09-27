class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.string :title
      t.string :address
      t.string :elevation
      t.text :description
      t.string :image
      t.string :map

      t.timestamps
    end
  end
end
