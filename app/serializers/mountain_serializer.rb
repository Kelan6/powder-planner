class MountainSerializer < ActiveModel::Serializer
  attributes :id, :title, :address, :elevation, :description, :image, :map
  has_many :lifts
end
