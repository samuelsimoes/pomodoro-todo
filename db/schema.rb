# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140829142410) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pomodoro_lists", force: true do |t|
    t.string   "title",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pomodoros", force: true do |t|
    t.integer  "order",            null: false
    t.string   "description",      null: false
    t.datetime "started_at"
    t.datetime "finished_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "pomodoro_list_id", null: false
    t.index ["pomodoro_list_id"], :name => "index_pomodoros_on_pomodoro_list_id"
    t.foreign_key ["pomodoro_list_id"], "pomodoro_lists", ["id"], :on_update => :no_action, :on_delete => :no_action, :name => "fk_pomodoros_pomodoro_list_id"
  end

  create_table "tomatoes", force: true do |t|
    t.integer  "order",            null: false
    t.string   "description",      null: false
    t.datetime "started_at"
    t.datetime "finished_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "pomodoro_list_id", null: false
    t.index ["pomodoro_list_id"], :name => "index_tomatoes_on_pomodoro_list_id"
  end

end
