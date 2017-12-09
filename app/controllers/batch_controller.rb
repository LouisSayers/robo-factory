class BatchController < ApplicationController

  def show
    batch = Batch.last
    robots = batch.robots.map { |robot| RobotPresenter.new(robot) }

    render json: { data: robots }
  end

end
