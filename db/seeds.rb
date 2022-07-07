# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!(name: "Anthonie", email: "anthonie123", password: "123456")
User.create!(name: "Max", email: "max123", password: "123456")
User.create!(name: "Kaylin", email: "kaylin123", password: "123456")
User.create!(name: "Brian", email: "brian123", password: "123456")
User.create!(name: "Celebi", email: "celebi123", password: "123456")
User.create!(name: "Ignes", email: "ignes123", password: "123456")
User.create!(name: "Mahli", email: "mahli123", password: "123456")
User.create!(name: "Cammy", email: "cammy123", password: "123456")
User.create!(name: "Jessica", email: "jessica123", password: "123456")
User.create!(name: "Siona", email: "siona123", password: "123456")