class CreateStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :statuses do |t|
      t.string :description
    end

    create_table :robots_statuses do |t|
      t.references :robot, index: true
      t.references :status, index: true
    end
  end
end

