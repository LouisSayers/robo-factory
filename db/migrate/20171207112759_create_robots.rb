class CreateRobots < ActiveRecord::Migration[5.1]
  def change
    create_table :robots do |t|
      t.references :robot_configuration, foreign_key: true
      t.string :name
      t.boolean :extinguished, default: false

      t.timestamps
    end
  end
end
