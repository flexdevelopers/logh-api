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

ActiveRecord::Schema.define(version: 20140304040226) do

  create_table "api_keys", force: true do |t|
    t.string   "access_token", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "api_keys", ["access_token"], name: "index_api_keys_on_access_token", unique: true

  create_table "games", force: true do |t|
    t.datetime "start_datetime",                   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "week_id",                          null: false
    t.integer  "home_squad_id",                    null: false
    t.integer  "visiting_squad_id",                null: false
    t.integer  "home_squad_score",     default: 0, null: false
    t.integer  "visiting_squad_score", default: 0, null: false
  end

  add_index "games", ["week_id"], name: "index_games_on_week_id"

  create_table "leagues", force: true do |t|
    t.string   "name",               null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id",            null: false
    t.string   "password"
    t.integer  "max_teams_per_user"
  end

  add_index "leagues", ["user_id"], name: "index_leagues_on_user_id"

  create_table "losers", force: true do |t|
    t.integer  "week_id",    null: false
    t.integer  "squad_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "losers", ["squad_id"], name: "index_losers_on_squad_id"
  add_index "losers", ["week_id", "squad_id"], name: "index_losers_on_week_id_and_squad_id", unique: true
  add_index "losers", ["week_id"], name: "index_losers_on_week_id"

  create_table "picks", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "team_id",    null: false
    t.integer  "week_id",    null: false
    t.integer  "loser_id",   null: false
    t.boolean  "correct"
  end

  add_index "picks", ["team_id", "loser_id"], name: "index_picks_on_team_id_and_loser_id", unique: true
  add_index "picks", ["team_id"], name: "index_picks_on_team_id"
  add_index "picks", ["week_id", "team_id"], name: "index_picks_on_week_id_and_team_id", unique: true
  add_index "picks", ["week_id"], name: "index_picks_on_week_id"

  create_table "seasons", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "squads", force: true do |t|
    t.string   "name",       null: false
    t.string   "abbrev",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "teams", force: true do |t|
    t.string   "name",                       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "league_id",                  null: false
    t.integer  "user_id",                    null: false
    t.boolean  "alive",      default: true
    t.boolean  "paid",       default: false
  end

  add_index "teams", ["league_id"], name: "index_teams_on_league_id"
  add_index "teams", ["user_id"], name: "index_teams_on_user_id"

  create_table "users", force: true do |t|
    t.string   "email",      null: false
    t.string   "password",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name", null: false
    t.string   "last_name",  null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true

  create_table "weeks", force: true do |t|
    t.integer  "number",                     null: false
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "season_id",                  null: false
    t.boolean  "complete",   default: false
  end

  add_index "weeks", ["number", "season_id"], name: "index_weeks_on_number_and_season_id", unique: true

end
