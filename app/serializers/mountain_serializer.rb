class MountainSerializer < ActiveModel::Serializer
  attributes :id, :title, :address, :elevation
  has_many :lifts
end
