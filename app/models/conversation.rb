class Conversation < ApplicationRecord
  validate :check_duplicate
  validate :check_foreign_key
  validates :first_user_id, uniqueness: { scope: :second_user_id }
  validates :second_user_id, uniqueness: { scope: :first_user_id }


  def check_duplicate
    conversation = Conversation.find_by(first_user_id: self.second_user_id, second_user_id: self.first_user_id)
    if conversation
      errors.add(:second_user_id, "Conversation already exists")
    elsif self.first_user_id == self.second_user_id
      errors.add(:second_user_id, "Cannot have a conversation with yourself")
    end
  end

  def check_foreign_key
    user1 = User.find_by(id: self.first_user_id)
    user2 = User.find_by(id: self.second_user_id)
    if !user1 
      errors.add(:first_user_id, "User does not exist")
    elsif !user2
      errors.add(:second_user_id, "User does not exist")
    end
  end

  has_many :messages,
    class_name: :UserMessage,
    primary_key: :id,
    foreign_key: :conversation_id
    
end
