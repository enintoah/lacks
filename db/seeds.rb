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

user1 = User.create!(name: "Anthonie Lorsithong", email: "demo1", password: "123456")
user2 = User.create!(name: "Adam Lin", email: "demo@gmail.com", password: "123456")
user3 = User.create!(name: "Alec Choy", email: "alec123", password: "123456")
user4 = User.create!(name: "Alex Kern", email: "alex123", password: "123456")
user5 = User.create!(name: "Charlie Xu", email: "charlie123", password: "123456")
user6 = User.create!(name: "Lucy Luo", email: "lucy123", password: "123456")
user7 = User.create!(name: "Cindy Vuong", email: "cindy123", password: "123456")
user8 = User.create!(name: "Danny Wallace", email: "danny123", password: "123456")
user9 = User.create!(name: "Hachi Herrera", email: "hachi123", password: "123456")
user10 = User.create!(name: "Jacob Justice", email: "jacob123", password: "123456")
user11 = User.create!(name: "Peter Romo", email: "peter123", password: "123456")
user12 = User.create!(name: "Quang Tran", email: "quang123", password: "123456")
user13 = User.create!(name: "Wendy Shi", email: "wendy123", password: "123456")
user14 = User.create!(name: "Evie Zheng", email: "evie123", password: "123456")
user15 = User.create!(name: "Brian Lin", email: "brian123", password: "123456")
user16 = User.create!(name: "Mike Madsen", email: "mike123", password: "123456")
user17 = User.create!(name: "Chris Cheasty", email: "chris123", password: "123456")
user18 = User.create!(name: "Paulo Bocanegra", email: "paulo123", password: "123456")
user19 = User.create!(name: "Abigail Hernandez", email: "abigail123", password: "123456")

workspace1 = Workspace.create!(name: "App Academy", owner_id: user1.id)
workspace2 = Workspace.create!(name: "Tennis Training", owner_id: user4.id)
workspace3 = Workspace.create!(name: "Ping Pong Playerz", owner_id: user6.id)
workspace4 = Workspace.create!(name: "Valorant Club", owner_id: user8.id)
workspace5 = Workspace.create!(name: "One Piece Association LLC", owner_id: user3.id)
workspace6 = Workspace.create!(name: "Javascript Tutoring", owner_id: user17.id)

UsersWorkspace.create!(user_id: user1.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user2.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user3.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user4.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user5.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user6.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user7.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user8.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user9.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user10.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user11.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user12.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user13.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user14.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user15.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user1.id, workspace_id: workspace2.id)
UsersWorkspace.create!(user_id: user2.id, workspace_id: workspace2.id)
UsersWorkspace.create!(user_id: user6.id, workspace_id: workspace2.id)
UsersWorkspace.create!(user_id: user12.id, workspace_id: workspace2.id)
UsersWorkspace.create!(user_id: user13.id, workspace_id: workspace2.id)
UsersWorkspace.create!(user_id: user1.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user6.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user8.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user9.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user12.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user13.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user15.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user2.id, workspace_id: workspace4.id)
UsersWorkspace.create!(user_id: user3.id, workspace_id: workspace4.id)
UsersWorkspace.create!(user_id: user9.id, workspace_id: workspace4.id)
UsersWorkspace.create!(user_id: user2.id, workspace_id: workspace5.id)
UsersWorkspace.create!(user_id: user3.id, workspace_id: workspace5.id)
UsersWorkspace.create!(user_id: user5.id, workspace_id: workspace5.id)
UsersWorkspace.create!(user_id: user12.id, workspace_id: workspace5.id)
UsersWorkspace.create!(user_id: user15.id, workspace_id: workspace5.id)
UsersWorkspace.create!(user_id: user16.id, workspace_id: workspace6.id)
UsersWorkspace.create!(user_id: user17.id, workspace_id: workspace6.id)
UsersWorkspace.create!(user_id: user18.id, workspace_id: workspace6.id)
UsersWorkspace.create!(user_id: user19.id, workspace_id: workspace6.id)
UsersWorkspace.create!(user_id: user16.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user17.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user18.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user19.id, workspace_id: workspace1.id)
UsersWorkspace.create!(user_id: user16.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user17.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user18.id, workspace_id: workspace3.id)
UsersWorkspace.create!(user_id: user19.id, workspace_id: workspace3.id)

channel1 = Channel.create!(name: "Coding Resources", workspace_id: workspace1.id)
channel2 = Channel.create!(name: "Questions", workspace_id: workspace1.id)
channel3 = Channel.create!(name: "Announcements", workspace_id: workspace1.id)
channel4 = Channel.create!(name: "Videos", workspace_id: workspace2.id)
channel5 = Channel.create!(name: "Court Scheduling", workspace_id: workspace2.id)
channel6 = Channel.create!(name: "Tournament Bracket", workspace_id: workspace3.id)
channel7 = Channel.create!(name: "Ping Pong Tutorials", workspace_id: workspace3.id)
channel8 = Channel.create!(name: "Streaming", workspace_id: workspace4.id)
channel9 = Channel.create!(name: "Aim Trainer", workspace_id: workspace4.id)
channel10 = Channel.create!(name: "Meetups", workspace_id: workspace4.id)
channel11 = Channel.create!(name: "Manga Readers Only", workspace_id: workspace5.id)
channel12 = Channel.create!(name: "Anime Watchers Only", workspace_id: workspace5.id)
channel13 = Channel.create!(name: "Tutoring Dates", workspace_id: workspace6.id)
channel14 = Channel.create!(name: "Async Questions", workspace_id: workspace6.id)

conversation1 = Conversation.create!(first_user_id: user1.id, second_user_id: user2.id, workspace_id: workspace1.id)
conversation2 = Conversation.create!(first_user_id: user1.id, second_user_id: user3.id, workspace_id: workspace1.id)
conversation3 = Conversation.create!(first_user_id: user1.id, second_user_id: user4.id, workspace_id: workspace1.id)
conversation4 = Conversation.create!(first_user_id: user1.id, second_user_id: user6.id, workspace_id: workspace1.id)
conversation5 = Conversation.create!(first_user_id: user1.id, second_user_id: user13.id, workspace_id: workspace1.id)
conversation6 = Conversation.create!(first_user_id: user1.id, second_user_id: user6.id, workspace_id: workspace2.id)
conversation7 = Conversation.create!(first_user_id: user1.id, second_user_id: user13.id, workspace_id: workspace2.id)
conversation8 = Conversation.create!(first_user_id: user1.id, second_user_id: user12.id, workspace_id: workspace2.id)
conversation9 = Conversation.create!(first_user_id: user1.id, second_user_id: user8.id, workspace_id: workspace3.id)
conversation10 = Conversation.create!(first_user_id: user1.id, second_user_id: user9.id, workspace_id: workspace3.id)
conversation11 = Conversation.create!(first_user_id: user1.id, second_user_id: user15.id, workspace_id: workspace3.id)
conversation12 = Conversation.create!(first_user_id: user1.id, second_user_id: user19.id, workspace_id: workspace3.id)

UserMessage.create!(author_id: user1.id, conversation_id: conversation1.id, recipient_id: user2.id, body: "wassup brother")
UserMessage.create!(author_id: user2.id, conversation_id: conversation1.id, recipient_id: user1.id, body: "how are you doing?")
UserMessage.create!(author_id: user1.id, conversation_id: conversation1.id, recipient_id: user2.id, body: "I am doing good. How are you?")
UserMessage.create!(author_id: user3.id, conversation_id: conversation2.id, recipient_id: user1.id, body: "are you going to the food festival later today?")
UserMessage.create!(author_id: user1.id, conversation_id: conversation2.id, recipient_id: user3.id, body: "No, I don't think so. I am going home to sleep.")
UserMessage.create!(author_id: user3.id, conversation_id: conversation2.id, recipient_id: user1.id, body: "You should go without me")
UserMessage.create!(author_id: user1.id, conversation_id: conversation3.id, recipient_id: user4.id, body: "can you send me the pair programming project for today?")
UserMessage.create!(author_id: user4.id, conversation_id: conversation3.id, recipient_id: user1.id, body: "sure just give me one second.")
UserMessage.create!(author_id: user6.id, conversation_id: conversation4.id, recipient_id: user1.id, body: "hello are you there?")
UserMessage.create!(author_id: user1.id, conversation_id: conversation5.id, recipient_id: user13.id, body: "bro. text me back. It is urgent.")

ChannelMessage.create!(channel_id: channel1.id, user_id: user16.id, body: "For more information, search it up on google.")
ChannelMessage.create!(channel_id: channel1.id, user_id: user18.id, body: "Come to the meeting today for more information.")
ChannelMessage.create!(channel_id: channel1.id, user_id: user17.id, body: "Ask more questions on Progress Tracker. Also download the skeleton for the project.")
ChannelMessage.create!(channel_id: channel2.id, user_id: user1.id, body: "Where can I find some resources on Async and Await functions?")
ChannelMessage.create!(channel_id: channel2.id, user_id: user5.id, body: "If my key is exposed on github, what can I do to fix it?")
ChannelMessage.create!(channel_id: channel2.id, user_id: user13.id, body: "Are there any good restaurants around this area?")
ChannelMessage.create!(channel_id: channel2.id, user_id: user14.id, body: "My progress tracker is not working. How do I fix it?")
ChannelMessage.create!(channel_id: channel3.id, user_id: user19.id, body: "The next exam is going to be the hardest. Take the practice test at least 5 times.")
ChannelMessage.create!(channel_id: channel3.id, user_id: user16.id, body: "The Progress Tracker is down so ask the questions in person!")
ChannelMessage.create!(channel_id: channel3.id, user_id: user18.id, body: "The project today is going to take a lot of debugging and working together.")
ChannelMessage.create!(channel_id: channel3.id, user_id: user17.id, body: "Make sure to do your homework for tonight. It is very important.")
ChannelMessage.create!(channel_id: channel3.id, user_id: user17.id, body: "There will be no flex time for today. Make sure to go over your project with your team leader. Have a great night")
ChannelMessage.create!(channel_id: channel1.id, user_id: user17.id, body: "There will additional resources coming next week. Stay tuned!")