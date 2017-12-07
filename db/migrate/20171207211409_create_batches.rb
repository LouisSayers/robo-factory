class CreateBatches < ActiveRecord::Migration[5.1]
  def change
    create_table :batches do |t|
      t.timestamps
    end

    add_reference :robots, :batch, index: true
  end
end
