class Robot < ApplicationRecord
  belongs_to :robot_configuration
  has_and_belongs_to_many :statuses
end
