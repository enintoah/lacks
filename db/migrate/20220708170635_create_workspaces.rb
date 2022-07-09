class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.string :name, null: false 
      t.integer :owner_id, null: false 
      t.timestamps
    end
    add_index :workspaces, :name, unique: true 
    add_index :workspaces, :owner_id
  end
end
