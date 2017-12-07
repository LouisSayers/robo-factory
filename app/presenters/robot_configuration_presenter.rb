class RobotConfigurationPresenter

  def initialize(configuration)
    @configuration = configuration
  end

  def as_json
    {
      hasSentience: @configuration.has_sentience,
      hasWheels: @configuration.has_wheels,
      hasTracks: @configuration.has_tracks,
      numberOfRotors: @configuration.number_of_rotors,
      colour: @configuration.colour
    }
  end

end
