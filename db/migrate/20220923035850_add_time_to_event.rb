class AddTimeToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :time, :string
  end
end
