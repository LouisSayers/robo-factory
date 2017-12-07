class BatchController < ApplicationController

  def show
    respond_with_json do
      {
        data: [
          {
            id: 1,
            name: 'Mr Robot',
            configuration: {
              hasSentience: false,
              hasWheels: true,
              hasTracks: false,
              numberOfRotors: 3,
              colour: 'red'
            },
            statuses: [ 'on fire', 'loose screws' ]
          },
          {
            id: 2,
            name: 'Mr Robot2',
            configuration: {
              hasSentience: false,
              hasWheels: true,
              hasTracks: false,
              numberOfRotors: 3,
              colour: 'red'
            },
            statuses: [ 'on fire', 'loose screws' ]
          }
        ]
      }
    end
  end

end
