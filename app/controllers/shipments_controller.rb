class ShipmentsController < ApplicationController

  def create
    ActiveRecord::Base.transaction do
      shipment = Shipment.create
      robots = Robot.where(id: params[:robotIds])

      if robots.count != params[:robotIds].count
        render json: {}, status: :unprocessable_entity
        raise ActiveRecord::Rollback, 'Not all robot ids are valid'
      else
        shipment.robots << robots
        render json: {}
      end
    end
  end

end
