class AddTitleToMountain < ActiveRecord::Migration[7.0]
  def change
    remove_column :mountains, :tite, :string
    add_column :mountains, :title, :string
  end
end
