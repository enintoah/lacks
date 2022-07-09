class ChannelMessage < ApplicationRecord
  validates :channel_id, :body, :author_id, presence: true 
  validate :check_foreign_key

  def check_foreign_key
    user = User.find_by(id: self.author_id)
    channel = Channel.find_by(id: self.channel_id)
    if !user 
      errors.add(:author_id, "User does not exist")
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
    foreign_key: :author_id,
    primary_key: :id
end
