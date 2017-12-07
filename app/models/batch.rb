class Batch < ApplicationRecord
  has_many :robots, dependent: :destroy
end
