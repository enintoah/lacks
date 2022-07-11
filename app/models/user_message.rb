# == Schema Information
#
# Table name: user_messages
#
#  id              :bigint           not null, primary key
#  author_id       :integer          not null
#  conversation_id :integer          not null
#  recipient_id    :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class UserMessage < ApplicationRecord
  validates :conversation_id, :author_id, :recipient_id, :body, presence: true
  validate :check_foreign_key

  def check_foreign_key
    user1 = User.find_by(id: self.author_id)
    user2 = User.find_by(id: self.recipient_id)
    conversation = Conversation.find_by(id: self.conversation_id)
    if !user1
      errors.add(:author_id, "User does not exist")
    elsif !user2
      errors.add(:recipient_id, "User does not exist")
    elsif !conversation
      errors.add(:conversation_id, "Conversation does not exist")
    end
  end

  belongs_to :conversation,
    class_name: :Conversation,
    primary_key: :id,
    foreign_key: :conversation_id
  
  belongs_to :author, 
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :recipient, 
    class_name: :User,
    primary_key: :id,
    foreign_key: :recipient_id
end
