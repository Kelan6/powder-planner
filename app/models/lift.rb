class Lift < ApplicationRecord
    belongs_to :mountain
    has_many :events
end
