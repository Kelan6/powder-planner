class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :mountain_id, :name
  belongs_to :mountain
  belongs_to :user
end
