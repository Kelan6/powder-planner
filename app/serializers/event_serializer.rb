class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :mountain_id, :name
end
