# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_12_191955) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_messages", force: :cascade do |t|
    t.integer "channel_id", null: false
    t.integer "user_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_messages_on_channel_id"
    t.index ["user_id"], name: "index_channel_messages_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.integer "workspace_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["workspace_id"], name: "index_channels_on_workspace_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "first_user_id", null: false
    t.integer "second_user_id", null: false
    t.integer "workspace_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_user_name"
    t.string "second_user_name"
    t.index ["first_user_id"], name: "index_conversations_on_first_user_id"
    t.index ["second_user_id"], name: "index_conversations_on_second_user_id"
    t.index ["workspace_id"], name: "index_conversations_on_workspace_id"
  end

  create_table "user_messages", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "conversation_id", null: false
    t.integer "recipient_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_user_messages_on_author_id"
    t.index ["conversation_id"], name: "index_user_messages_on_conversation_id"
    t.index ["recipient_id"], name: "index_user_messages_on_recipient_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "users_workspaces", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "workspace_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "workspace_id"], name: "index_users_workspaces_on_user_id_and_workspace_id", unique: true
    t.index ["user_id"], name: "index_users_workspaces_on_user_id"
    t.index ["workspace_id"], name: "index_users_workspaces_on_workspace_id"
  end

  create_table "workspaces", force: :cascade do |t|
    t.string "name", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "current_size", default: 0
    t.index ["name"], name: "index_workspaces_on_name", unique: true
    t.index ["owner_id"], name: "index_workspaces_on_owner_id"
  end

end
