class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :email, :snowboarder
end
