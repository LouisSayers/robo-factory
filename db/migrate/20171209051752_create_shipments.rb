class CreateShipments < ActiveRecord::Migration[5.1]
  def change
    create_table :shipments do |t|
      t.timestamps
    end

    add_reference :robots, :shipment, index: true
  end
end
