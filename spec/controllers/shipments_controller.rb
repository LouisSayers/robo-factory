require 'rails_helper'

describe ShipmentsController do

  describe 'create' do
    let(:robot) { create(:robot, :with_batch, extinguished: false) }

    subject { put :create, params: { robotIds: robot_ids, format: :json } }

    context 'valid robot id' do
      let(:robot_ids) { [ robot.id ] }

      before do
        subject
        robot.reload
      end

      it 'adds the robot to a shipment' do
        expect(robot.shipment).not_to be_nil
      end
    end

    context 'invalid robot id' do
      let(:invalid_robot_id) { 99999 }
      let(:robot_ids) { [ robot.id, invalid_robot_id ] }

      before { subject }

      it 'does not create a shipment' do
        expect(Shipment.count).to eq 0
      end

      it 'does not add the robot to a shipment' do
        expect(robot.shipment).to be_nil
      end

      it 'returns with a 	Unprocessable Entity status' do
        expect(response.status).to eq unprocessable_status_code
      end
    end
  end

end
