class RobotPresenter

  def initialize(robot)
    @robot = robot
    @configuration = configuration_for(@robot)
    @statuses = statuses_for(@robot)
  end

  def as_json(options = {})
    {
      id: @robot.id,
      name: @robot.name,
      configuration: @configuration,
      statuses: @statuses,
      extinguished: @robot.extinguished
    }
  end

  private

  def configuration_for(robot)
    RobotConfigurationPresenter.new(robot.configuration)
  end

  def statuses_for(robot)
    robot.statuses.map(&:description)
  end

end
