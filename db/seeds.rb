# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!(name: "Anthonie", email: "anthonie123", password: "123456")
User.create!(name: "Sunny", email: "sunny123", password: "123456")
User.create!(name: "Alec", email: "alec123", password: "123456")
User.create!(name: "Max", email: "max123", password: "123456")
User.create!(name: "Celebi", email: "celebi", password: "123456")