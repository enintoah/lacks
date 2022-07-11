# == Schema Information
#
# Table name: channel_messages
#
#  id         :bigint           not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ChannelMessage < ApplicationRecord
  validates :channel_id, :body, :user_id, presence: true 
  validate :check_foreign_key

  def check_foreign_key
    user = User.find_by(id: self.user_id)
    channel = Channel.find_by(id: self.channel_id)
    if !user 
      errors.add(:user_id, "User does not exist")
    elsif !channel
      errors.add(:channel_id, "Channel does not exist")
    end
  end

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id, 
    foreign_key: :channel_id

  belongs_to :author,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
end
