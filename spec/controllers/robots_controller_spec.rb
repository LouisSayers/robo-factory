require 'rails_helper'

describe RobotsController do

  describe 'extinguish' do
    let(:robot) { create(:robot, extinguished: false) }
    subject { post :extinguish, params: { id: robot_id, format: :json } }

    context 'valid robot id' do
      let(:robot_id) { robot.id }

      before do
        subject
        robot.reload
      end

      it 'extinguishes the robot' do
        expect(robot.extinguished).to eq true
      end
    end

    context 'invalid robot id' do
      let(:robot_id) { 'not_a_robot_id' }
      let(:unprocessable_status_code) do
        Rack::Utils::SYMBOL_TO_STATUS_CODE[:unprocessable_entity]
      end

      it 'does not raise an error' do
        expect { subject }.not_to raise_error
      end

      it 'returns with a 	Unprocessable Entity status' do
        subject
        expect(response.status).to eq unprocessable_status_code
      end
    end
  end

end
