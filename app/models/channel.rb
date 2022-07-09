# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  workspace_id :integer          not null
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Channel < ApplicationRecord
  validates :name, presence: true 
  validate :check_foreign_key

  def check_foreign_key 
    workspace = Workspace.find_by(id: self.workspace_id)
    if !workspace
      errors.add(:workspace_id, 'Workspace does not exist')
    end
  end

  belongs_to :workspace,
    class_name: :Workspace,
    foreign_key: :workspace_id,
    primary_key: :id

  has_many :messages,
    class_name: :ChannelMessage,
    foreign_key: :channel_id,
    primary_key: :id

end
