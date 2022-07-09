class CreateUserMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :user_messages do |t|
      t.integer :author_id, null: false 
      t.integer :conversation_id, null: false 
      t.integer :recipient_id, null: false
      t.text :body, null: false 
      t.timestamps
    end
    add_index :user_messages, :author_id
    add_index :user_messages, :conversation_id
    add_index :user_messages, :recipient_id
  end
end
