class BatchController < ApplicationController

  def show
    batch = Batch.last
    robots = batch.try(:robots) || []
    robots = robots.map { |robot| RobotPresenter.new(robot) }

    render json: { data: robots, batch: batch.try(:id) }
  end

end
