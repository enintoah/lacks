class AddColumnToWorkspaces < ActiveRecord::Migration[5.2]
  def change
    add_column :workspaces, :current_size, :integer, default: 0
  end
end
