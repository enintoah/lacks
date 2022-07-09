# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Workspace < ApplicationRecord
  validates :name, :owner_id, presence: true 
  validate :check_foreign_key

  def check_foreign_key
    user = User.find_by(id: self.owner_id)
    if !user 
      errors.add(:user_id, "User does not exist")
    end
  end

  has_many :channels,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :workspace_id
  
  belongs_to :owner, 
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id
end
