class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :first_user, null: false 
      t.integer :second_user, null: false 
      t.timestamps
    end
  end
end
