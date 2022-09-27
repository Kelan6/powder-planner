class AddColumnsToMountains < ActiveRecord::Migration[7.0]
  def change
    remove_column :mountains, :elevation, :integer
    add_column :mountains, :elevation, :string
    add_column :mountains, :description, :text
    add_column :mountains, :image, :string
    add_column :mountai, :string
  end
end
