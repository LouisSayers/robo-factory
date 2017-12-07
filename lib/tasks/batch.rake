
namespace :batch do
  def random_bool
    rand(2) == 0
  end

  def random_integer(max)
    rand(max)
  end

  def random_colour
    colours = %w(red yellow pink green purple orange blue black white)
    colours.sample
  end

  def create_configuration
    RobotConfiguration.create(
      has_sentience: random_bool,
      has_wheels: random_bool,
      has_tracks: random_bool,
      number_of_rotors: random_integer(12),
      colour: random_colour
    )
  end

  def add_statuses_for(all_statuses, robot)
    num_of_statuses = rand(all_statuses.length)
    sample = all_statuses.sample(num_of_statuses)
    sample.each do |status|
      robot.statuses << status
    end
  end

  def create_robot_name
    titles = %w(Mr Mrs Miss Ms Sir Dr Lady Lord)
    first_names = %w(Knight Ghost Moon Mega Rock Roomba Awesome-O Bishop Clank Daft)
    last_names = %w(Punk 5 Android Mindstorm Boy Giant Prime 9000 Rodriguez)

    [titles, first_names, last_names].map(&:sample).join(' ')
  end

  def create_robot(configuration)
    Robot.create(
      name: create_robot_name,
      robot_configuration: configuration
    )
  end

  desc 'Creates a batch of robots'
  task create: :environment do
    batch = Batch.create
    all_statuses = Status.all

    20.times do
      ActiveRecord::Base.transaction do
        configuration = create_configuration()
        robot = create_robot(configuration)
        add_statuses_for(all_statuses, robot)
        batch.robots << robot
      end
    end
  end

  desc 'Destroys all batches of robots'
  task destroy: :environment do
    Batch.destroy_all
  end

end
