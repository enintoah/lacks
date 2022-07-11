class ResetConversationsTablePart2 < ActiveRecord::Migration[5.2]
  def change
    drop_table :conversations
    create_table :conversations do |t|
      t.integer :first_user_id, null: false 
      t.integer :second_user_id, null: false 
      t.integer :workspace_id, null: false
      t.timestamps
    end
    add_index :conversations, :first_user_id
    add_index :conversations, :second_user_id
    add_index :conversations, :workspace_id
  end
end
