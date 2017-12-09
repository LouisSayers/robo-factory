require 'rails_helper'

describe BatchController do

  describe 'show' do
    let(:batch) { create(:batch) }
    let(:robot) { create(:robot, extinguished: false, batch: batch) }
    let(:test_json) { "{'test': true}" }
    let(:presenter) { double(as_json: test_json) }
    let(:response_json) { JSON.parse(response.body) }

    subject { get :show, params: { format: :json } }

    context 'has batches' do
      before do
        allow(RobotPresenter).to receive(:new).with(robot) { presenter }
        subject
      end

      it 'returns robot json representations' do
        expect(response_json['data']).to eq [ test_json ]
      end
    end

    context 'no batches' do
      let(:batch) { nil }
      let(:robot) { nil }

      it 'does not raise errors' do
        expect { subject }.not_to raise_error
      end
    end
  end

end
