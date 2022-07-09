class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :workspace_id, null: false
      t.string :name, null: false 
      t.timestamps
    end
    add_index :channels, :workspace_id
  end
end
