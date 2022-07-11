# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Workspace.destroy_all
UsersWorkspace.destroy_all
Channel.destroy_all
Conversation.destroy_all
UserMessage.destroy_all
ChannelMessage.destroy_all

User.create!(name: "Anthonie", email: "anthonie123", password: "123456")
User.create!(name: "Kaylin", email: "kaylin123", password: "123456")
User.create!(name: "Brian", email: "brian123", password: "123456")
User.create!(name: "Celebi", email: "celebi123", password: "123456")
User.create!(name: "Cammy", email: "cammy123", password: "123456")
User.create!(name: "Jessica", email: "jessica123", password: "123456")
User.create!(name: "Siona", email: "siona123", password: "123456")

Workspace.create!(name: "Speech and Debate", owner_id: 1)
Workspace.create!(name: "National Honors Society", owner_id: 4)
Workspace.create!(name: "Tennis", owner_id: 6)

UsersWorkspace.create!(user_id: 1, workspace_id: 1)
UsersWorkspace.create!(user_id: 1, workspace_id: 2)
UsersWorkspace.create!(user_id: 1, workspace_id: 3)
UsersWorkspace.create!(user_id: 2, workspace_id: 1)
UsersWorkspace.create!(user_id: 2, workspace_id: 2)
UsersWorkspace.create!(user_id: 3, workspace_id: 1)
UsersWorkspace.create!(user_id: 3, workspace_id: 2)
UsersWorkspace.create!(user_id: 3, workspace_id: 3)
UsersWorkspace.create!(user_id: 4, workspace_id: 2)
UsersWorkspace.create!(user_id: 4, workspace_id: 3)
UsersWorkspace.create!(user_id: 5, workspace_id: 3)
UsersWorkspace.create!(user_id: 5, workspace_id: 2)
UsersWorkspace.create!(user_id: 6, workspace_id: 3)
UsersWorkspace.create!(user_id: 7, workspace_id: 3)

Channel.create!(name: "Captains", workspace_id: 1)
Channel.create!(name: "Resources", workspace_id: 1)
Channel.create!(name: "Tournament Information", workspace_id: 1)
Channel.create!(name: "Inductees", workspace_id: 2)
Channel.create!(name: "Tutoring", workspace_id: 2)
Channel.create!(name: "Honors Assembly", workspace_id: 2)
Channel.create!(name: "Stringing Locations", workspace_id: 3)
Channel.create!(name: "Practice Times", workspace_id: 3)
Channel.create!(name: "Game Scheduling", workspace_id: 3)

Conversation.create!(first_user_id: 1, second_user_id: 2, workspace_id: 1)
Conversation.create!(first_user_id: 1, second_user_id: 3, workspace_id: 2)
Conversation.create!(first_user_id: 1, second_user_id: 4, workspace_id: 3)
Conversation.create!(first_user_id: 7, second_user_id: 6, workspace_id: 3)

UserMessage.create!(author_id: 1, conversation_id: 1, recipient_id: 2, body: "wassup brother")
UserMessage.create!(author_id: 2, conversation_id: 1, recipient_id: 1, body: "how are you doing?")
UserMessage.create!(author_id: 1, conversation_id: 2, recipient_id: 3, body: "deez nuts")
UserMessage.create!(author_id: 3, conversation_id: 2, recipient_id: 1, body: "you are dumb")

ChannelMessage.create!(channel_id: 1, user_id: 1, body: "hello world")
ChannelMessage.create!(channel_id: 6, user_id: 1, body: "where this going to be at")
