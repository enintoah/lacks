class AddForeignKeyConstraints < ActiveRecord::Migration[5.2]
  def change
    add_index :conversations, [:first_user, :second_user], unique: true 
    add_index :conversations, [:second_user, :first_user], unique: true 
  end
end
