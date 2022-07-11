class AddUniqueIndexToUsersWorkspaces < ActiveRecord::Migration[5.2]
  def change
    add_index :conversations, :first_user_id
    add_index :conversations, :second_user_id
    add_index :users_workspaces, [:user_id, :workspace_id], unique: true 
  end
end
