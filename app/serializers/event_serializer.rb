class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :mountain_id, :name, :time
  belongs_to :mountain
  belongs_to :user
end
