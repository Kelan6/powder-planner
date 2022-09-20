class Mountain < ApplicationRecord
    has_many :events
    has_many :users, through: :events
    has_many :lifts
end
