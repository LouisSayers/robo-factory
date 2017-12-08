class RobotsController < ApplicationController
  before_action :retrieve_robot, only: [:extinguish]

  def extinguish
    @robot.update(extinguished: true)
    respond_with_json { {} }
  end

  def recycle
    robots = Robot.where(id: params[:robotIds])
    robots.destroy_all
    respond_with_json { {} }
  end

  private

  def retrieve_robot
    begin
      @robot = Robot.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: {}, status: :unprocessable_entity
    end
  end

end
