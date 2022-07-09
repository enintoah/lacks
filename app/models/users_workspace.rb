# == Schema Information
#
# Table name: users_workspaces
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  workspace_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class UsersWorkspace < ApplicationRecord
  validate :check_foreign_key
  validates :user_id, :workspace_id, presence: true 

  def check_foreign_key
    user = User.find_by(id: self.user_id)
    workspace = Workspace.find_by(id: self.workspace_id)
    if !user 
      errors.add(:user_id, "User does not exist")
    elsif !workspace
      errors.add(:workspace_id, "Workspace does not exist")
    end
  end
end
