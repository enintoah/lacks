# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true 
  validates :password_digest, presence: true 
  validates :session_token, presence: true, uniqueness: true
  validates :name, presence: true 
  validates :password, length: { minimum: 6 }, allow_nil: true 
  after_initialize :ensure_session_token
  attr_reader :password 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user
      if user.check_password?(password)
        return user 
      end
    end
    return nil 
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def check_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def workspaces
    Workspace.joins("INNER JOIN users_workspaces ON workspaces.id = users_workspaces.workspace_id").where("users_workspaces.user_id = #{self.id}")
  end

  def workspace_ids
    Workspace.joins("INNER JOIN users_workspaces ON workspaces.id = users_workspaces.workspace_id").where("users_workspaces.user_id = #{self.id}").pluck(:id)
  end

  has_many :sent_user_messages,
    class_name: :UserMessage,
    foreign_key: :author_id,
    primary_key: :id

  has_many :received_user_messages, 
    class_name: :UserMessage,
    foreign_key: :recipient_id,
    primary_key: :id
  
  has_many :channel_messages, 
    class_name: :ChannelMessage,
    foreign_key: :user_id,
    primary_key: :id

  has_many :owned_workspaces,
    class_name: :Workspace,
    foreign_key: :owner_id,
    primary_key: :id

  has_one_attached :profile_picture
end
