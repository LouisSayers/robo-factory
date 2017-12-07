
namespace :batch do
  def random_bool
    rand(2) == 0
  end

  def random_integer(max)
    rand(max)
  end

  def random_colour
    colours = %w(red yellow pink green purple orange blue black white)
    colours[rand(colours.length + 1)]
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

  desc 'Creates a batch of robots'
  task create: :environment do
    batch = Batch.create
    all_statuses = Status.all

    10.times do
      ActiveRecord::Base.transaction do
        configuration = create_configuration()
        robot = Robot.create(robot_configuration: configuration)
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
