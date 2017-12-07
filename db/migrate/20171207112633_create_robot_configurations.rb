class CreateRobotConfigurations < ActiveRecord::Migration[5.1]
  def change
    create_table :robot_configurations do |t|
      t.boolean :has_sentience, default: false
      t.boolean :has_wheels, default: false
      t.boolean :has_tracks, default: false
      t.integer :number_of_rotors, default: 0
      t.string :colour, default: 'black'

      t.timestamps
    end
  end
end
