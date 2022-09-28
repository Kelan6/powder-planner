class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :email, :snowboarder
  has_many :events
end
