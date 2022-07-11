class ResetConversationsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :conversations, name: "index_conversations_on_second_user_id_and_first_user_id"
    remove_index :conversations, name: "index_conversations_on_second_user_id"
    add_column :conversations, :workspace_id, :integer
  end
end
