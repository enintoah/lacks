class CreateUsersWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :users_workspaces do |t|
      t.integer :user_id, null: false 
      t.integer :workspace_id, null: false 
      t.timestamps
    end
    add_index :users_workspaces, :user_id
    add_index :users_workspaces, :workspace_id
  end
end
