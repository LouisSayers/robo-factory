class BatchController < ApplicationController

  def show
    batch = Batch.last
    robots = batch.robots.map { |robot| RobotPresenter.new(robot) }

    respond_with_json { { data: robots } }
  end

end
