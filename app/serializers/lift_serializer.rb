class LiftSerializer < ActiveModel::Serializer
  attributes :id, :title, :mountain_id
  belongs_to :mountain
end
