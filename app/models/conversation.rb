# == Schema Information
#
# Table name: conversations
#
#  id             :bigint           not null, primary key
#  first_user_id  :integer          not null
#  second_user_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Conversation < ApplicationRecord
  validate :check_duplicate
  validate :check_foreign_key
  validates :first_user_id, :second_user_id, :workspace_id, presence: true 


  def check_duplicate
    conversation = Conversation.find_by(first_user_id: self.first_user_id, second_user_id: self.second_user_id, workspace_id: self.workspace_id)
    conversation2 = Conversation.find_by(first_user_id: self.second_user_id, second_user_id: self.first_user_id, workspace_id: self.workspace_id)
    if conversation
      errors.add(:second_user_id, "Conversation already exists")
    elsif conversation2
      errors.add(:second_user_id, "Conversation already exists")
    elsif self.first_user_id == self.second_user_id
      errors.add(:second_user_id, "Cannot have a conversation with yourself")
    end
  end

  def check_foreign_key
    user1 = User.find_by(id: self.first_user_id)
    user2 = User.find_by(id: self.second_user_id)
    workspace = Workspace.find_by(id: self.workspace_id)
    if !user1 
      errors.add(:first_user_id, "User does not exist")
    elsif !user2
      errors.add(:second_user_id, "User does not exist")
    elsif !workspace
      errors.add(:workspace_id, "Workspace dose not exist")
    end
  end

  has_many :messages,
    class_name: :UserMessage,
    primary_key: :id,
    foreign_key: :conversation_id
    
end
