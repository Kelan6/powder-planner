class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :mountain_id, :name, :time, :lift_id
  belongs_to :mountain
  belongs_to :user
  belongs_to :lift
end
