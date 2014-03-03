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

ActiveRecord::Schema.define(version: 20140303023535) do

  create_table "api_keys", force: true do |t|
    t.string   "access_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "api_keys", ["access_token"], name: "index_api_keys_on_access_token", unique: true

  create_table "games", force: true do |t|
    t.datetime "start_datetime"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "week_id"
    t.integer  "home_squad_id"
    t.integer  "visiting_squad_id"
    t.integer  "home_squad_score"
    t.integer  "visiting_squad_score"
  end

  create_table "leagues", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.string   "password"
    t.integer  "max_teams_per_user", default: 0
  end

  create_table "losers", force: true do |t|
    t.integer  "week_id"
    t.integer  "squad_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "losers", ["week_id", "squad_id"], name: "index_losers_on_week_id_and_squad_id", unique: true

  create_table "picks", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "team_id"
    t.integer  "week_id"
    t.integer  "loser_id"
    t.boolean  "correct"
  end

  create_table "seasons", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "squads", force: true do |t|
    t.string   "name"
    t.string   "abbrev"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "teams", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "league_id"
    t.integer  "user_id"
    t.boolean  "alive",      default: true
    t.boolean  "paid",       default: false
  end

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "password"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name"
    t.string   "last_name"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true

  create_table "weeks", force: true do |t|
    t.integer  "number"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "season_id"
    t.boolean  "complete",   default: false
  end

  add_index "weeks", ["number", "season_id"], name: "index_weeks_on_number_and_season_id", unique: true

end
