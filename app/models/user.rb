class User < ApplicationRecord
    has_many :events
    has_many :mountains, through: :events
    
    has_secure_password
    validates :name, uniqueness: true
    
end
