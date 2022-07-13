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

User.create!(name: "Adam Lin", email: "demo", password: "123456")
User.create!(name: "Anthonie Lorsithong", email: "demo1", password: "123456")
User.create!(name: "Alec Choy", email: "alec123", password: "123456")
User.create!(name: "Alex Kern", email: "alex123", password: "123456")
User.create!(name: "Charlie Xu", email: "charlie123", password: "123456")
User.create!(name: "Lucy Luo", email: "lucy123", password: "123456")
User.create!(name: "Cindy Vuong", email: "cindy123", password: "123456")
User.create!(name: "Danny Wallace", email: "danny123", password: "123456")
User.create!(name: "Hachi Herrera", email: "hachi123", password: "123456")
User.create!(name: "Jacob Justice", email: "jacob123", password: "123456")
User.create!(name: "Peter Romo", email: "peter123", password: "123456")
User.create!(name: "Quang Tran", email: "quang123", password: "123456")
User.create!(name: "Wendy Shi", email: "wendy123", password: "123456")
User.create!(name: "Evie Zheng", email: "evie123", password: "123456")
User.create!(name: "Brian Lin", email: "brian123", password: "123456")
User.create!(name: "Mike Madsen", email: "mike123", password: "123456")
User.create!(name: "Chris Cheasty", email: "chris123", password: "123456")
User.create!(name: "Paulo Bocanegra", email: "paulo123", password: "123456")
User.create!(name: "Abigail Hernandez", email: "abigail123", password: "123456")

Workspace.create!(name: "App Academy", owner_id: 1)
Workspace.create!(name: "Tennis Training", owner_id: 4)
Workspace.create!(name: "Ping Pong Playerz", owner_id: 6)
Workspace.create!(name: "Valorant Club", owner_id: 8)
Workspace.create!(name: "One Piece Association LLC", owner_id: 3)
Workspace.create!(name: "Javascript Tutoring", owner_id: 8)

UsersWorkspace.create!(user_id: 1, workspace_id: 1)
UsersWorkspace.create!(user_id: 2, workspace_id: 1)
UsersWorkspace.create!(user_id: 3, workspace_id: 1)
UsersWorkspace.create!(user_id: 4, workspace_id: 1)
UsersWorkspace.create!(user_id: 5, workspace_id: 1)
UsersWorkspace.create!(user_id: 6, workspace_id: 1)
UsersWorkspace.create!(user_id: 7, workspace_id: 1)
UsersWorkspace.create!(user_id: 8, workspace_id: 1)
UsersWorkspace.create!(user_id: 9, workspace_id: 1)
UsersWorkspace.create!(user_id: 10, workspace_id: 1)
UsersWorkspace.create!(user_id: 11, workspace_id: 1)
UsersWorkspace.create!(user_id: 12, workspace_id: 1)
UsersWorkspace.create!(user_id: 13, workspace_id: 1)
UsersWorkspace.create!(user_id: 14, workspace_id: 1)
UsersWorkspace.create!(user_id: 15, workspace_id: 1)
UsersWorkspace.create!(user_id: 1, workspace_id: 2)
UsersWorkspace.create!(user_id: 2, workspace_id: 2)
UsersWorkspace.create!(user_id: 6, workspace_id: 2)
UsersWorkspace.create!(user_id: 12, workspace_id: 2)
UsersWorkspace.create!(user_id: 13, workspace_id: 2)
UsersWorkspace.create!(user_id: 1, workspace_id: 3)
UsersWorkspace.create!(user_id: 6, workspace_id: 3)
UsersWorkspace.create!(user_id: 8, workspace_id: 3)
UsersWorkspace.create!(user_id: 9, workspace_id: 3)
UsersWorkspace.create!(user_id: 12, workspace_id: 3)
UsersWorkspace.create!(user_id: 13, workspace_id: 3)
UsersWorkspace.create!(user_id: 15, workspace_id: 3)
UsersWorkspace.create!(user_id: 2, workspace_id: 4)
UsersWorkspace.create!(user_id: 3, workspace_id: 4)
UsersWorkspace.create!(user_id: 9, workspace_id: 4)
UsersWorkspace.create!(user_id: 2, workspace_id: 5)
UsersWorkspace.create!(user_id: 3, workspace_id: 5)
UsersWorkspace.create!(user_id: 5, workspace_id: 5)
UsersWorkspace.create!(user_id: 12, workspace_id: 5)
UsersWorkspace.create!(user_id: 15, workspace_id: 5)
UsersWorkspace.create!(user_id: 16, workspace_id: 6)
UsersWorkspace.create!(user_id: 17, workspace_id: 6)
UsersWorkspace.create!(user_id: 18, workspace_id: 6)
UsersWorkspace.create!(user_id: 19, workspace_id: 6)
UsersWorkspace.create!(user_id: 16, workspace_id: 1)
UsersWorkspace.create!(user_id: 17, workspace_id: 1)
UsersWorkspace.create!(user_id: 18, workspace_id: 1)
UsersWorkspace.create!(user_id: 19, workspace_id: 1)
UsersWorkspace.create!(user_id: 16, workspace_id: 3)
UsersWorkspace.create!(user_id: 17, workspace_id: 3)
UsersWorkspace.create!(user_id: 18, workspace_id: 3)
UsersWorkspace.create!(user_id: 19, workspace_id: 3)

Channel.create!(name: "Coding Resources", workspace_id: 1)
Channel.create!(name: "Questions", workspace_id: 1)
Channel.create!(name: "Announcements", workspace_id: 1)
Channel.create!(name: "Videos", workspace_id: 2)
Channel.create!(name: "Court Scheduling", workspace_id: 2)
Channel.create!(name: "Tournament Bracket", workspace_id: 3)
Channel.create!(name: "Ping Pong Tutorials", workspace_id: 3)
Channel.create!(name: "Streaming", workspace_id: 4)
Channel.create!(name: "Aim Trainer", workspace_id: 4)
Channel.create!(name: "Meetups", workspace_id: 4)
Channel.create!(name: "Manga Readers Only", workspace_id: 5)
Channel.create!(name: "Anime Watchers Only", workspace_id: 5)
Channel.create!(name: "Tutoring Dates", workspace_id: 6)
Channel.create!(name: "Async Questions", workspace_id: 6)

Conversation.create!(first_user_id: 1, second_user_id: 2, workspace_id: 1)
Conversation.create!(first_user_id: 1, second_user_id: 3, workspace_id: 1)
Conversation.create!(first_user_id: 1, second_user_id: 4, workspace_id: 1)
Conversation.create!(first_user_id: 1, second_user_id: 6, workspace_id: 1)
Conversation.create!(first_user_id: 1, second_user_id: 13, workspace_id: 1)
Conversation.create!(first_user_id: 1, second_user_id: 6, workspace_id: 2)
Conversation.create!(first_user_id: 1, second_user_id: 13, workspace_id: 2)
Conversation.create!(first_user_id: 1, second_user_id: 12, workspace_id: 2)
Conversation.create!(first_user_id: 1, second_user_id: 8, workspace_id: 3)
Conversation.create!(first_user_id: 1, second_user_id: 9, workspace_id: 3)
Conversation.create!(first_user_id: 1, second_user_id: 15, workspace_id: 3)
Conversation.create!(first_user_id: 1, second_user_id: 19, workspace_id: 3)

UserMessage.create!(author_id: 1, conversation_id: 1, recipient_id: 2, body: "wassup brother")
UserMessage.create!(author_id: 2, conversation_id: 1, recipient_id: 1, body: "how are you doing?")
UserMessage.create!(author_id: 1, conversation_id: 1, recipient_id: 2, body: "I am doing good. How are you?")
UserMessage.create!(author_id: 3, conversation_id: 2, recipient_id: 1, body: "are you going to the food festival later today?")
UserMessage.create!(author_id: 1, conversation_id: 2, recipient_id: 3, body: "No, I don't think so. I am going home to sleep.")
UserMessage.create!(author_id: 3, conversation_id: 2, recipient_id: 1, body: "You should go without me")
UserMessage.create!(author_id: 1, conversation_id: 3, recipient_id: 4, body: "can you send me the pair programming project for today?")
UserMessage.create!(author_id: 4, conversation_id: 3, recipient_id: 1, body: "sure just give me one second.")
UserMessage.create!(author_id: 6, conversation_id: 4, recipient_id: 1, body: "hello are you there?")
UserMessage.create!(author_id: 1, conversation_id: 5, recipient_id: 13, body: "bro. text me back. It is urgent.")

ChannelMessage.create!(channel_id: 1, user_id: 16, body: "For more information, search it up on google.")
ChannelMessage.create!(channel_id: 1, user_id: 18, body: "Come to the meeting today for more information.")
ChannelMessage.create!(channel_id: 1, user_id: 17, body: "Ask more questions on Progress Tracker. Also download the skeleton for the project.")
ChannelMessage.create!(channel_id: 2, user_id: 1, body: "Where can I find some resources on Async and Await functions?")
ChannelMessage.create!(channel_id: 2, user_id: 5, body: "If my key is exposed on github, what can I do to fix it?")
ChannelMessage.create!(channel_id: 2, user_id: 13, body: "Are there any good restaurants around this area?")
ChannelMessage.create!(channel_id: 2, user_id: 14, body: "My progress tracker is not working. How do I fix it?")
ChannelMessage.create!(channel_id: 3, user_id: 19, body: "The next exam is going to be the hardest. Take the practice test at least 5 times.")
ChannelMessage.create!(channel_id: 3, user_id: 16, body: "The Progress Tracker is down so ask the questions in person!")
ChannelMessage.create!(channel_id: 3, user_id: 18, body: "The project today is going to take a lot of debugging and working together.")
ChannelMessage.create!(channel_id: 3, user_id: 17, body: "Make sure to do your homework for tonight. It is very important.")
ChannelMessage.create!(channel_id: 3, user_id: 17, body: "There will be no flex time for today. Make sure to go over your project with your team leader. Have a great night")
ChannelMessage.create!(channel_id: 1, user_id: 17, body: "There will additional resources coming next week. Stay tuned!")