class CreateChannelMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_messages do |t|
      t.integer :channel_id, null: false 
      t.integer :user_id, null: false 
      t.text :body, null: false 
      t.timestamps
    end
    add_index :channel_messages, :channel_id
    add_index :channel_messages, :user_id
  end
end
