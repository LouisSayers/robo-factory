class Robot < ApplicationRecord
  belongs_to :robot_configuration, dependent: :destroy
  belongs_to :batch
  has_and_belongs_to_many :statuses

  alias_attribute :configuration, :robot_configuration

  before_destroy { statuses.clear }
end
