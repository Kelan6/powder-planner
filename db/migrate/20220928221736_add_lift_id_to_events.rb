class AddLiftIdToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :lift_id, :integer
  end
end
