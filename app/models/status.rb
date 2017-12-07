class Status < ApplicationRecord
  has_and_belongs_to_many :robots
end
