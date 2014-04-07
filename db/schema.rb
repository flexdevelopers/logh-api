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

ActiveRecord::Schema.define(version: 20140407221353) do

  create_table "api_keys", force: true do |t|
    t.string   "token",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "api_keys", ["token"], name: "index_api_keys_on_token", unique: true

  create_table "games", force: true do |t|
    t.datetime "starts_at",                        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "week_id",                          null: false
    t.integer  "home_squad_id",                    null: false
    t.integer  "visiting_squad_id",                null: false
    t.integer  "home_squad_score",     default: 0, null: false
    t.integer  "visiting_squad_score", default: 0, null: false
  end

  add_index "games", ["week_id", "home_squad_id"], name: "index_games_on_week_id_and_home_squad_id", unique: true
  add_index "games", ["week_id", "visiting_squad_id"], name: "index_games_on_week_id_and_visiting_squad_id", unique: true
  add_index "games", ["week_id"], name: "index_games_on_week_id"

  create_table "invitations", force: true do |t|
    t.integer  "league_id"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "accepted_at"
  end

  add_index "invitations", ["league_id"], name: "index_invitations_on_league_id"

  create_table "league_commishes", force: true do |t|
    t.integer  "user_id"
    t.integer  "league_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "league_commishes", ["league_id"], name: "index_league_commishes_on_league_id"
  add_index "league_commishes", ["user_id"], name: "index_league_commishes_on_user_id"

  create_table "leagues", force: true do |t|
    t.string   "name",                              null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest",                   null: false
    t.integer  "max_teams_per_user"
    t.integer  "season_id",                         null: false
    t.integer  "start_week_id",                     null: false
    t.boolean  "public",             default: true, null: false
  end

  add_index "leagues", ["season_id"], name: "index_leagues_on_season_id"

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
    t.integer  "team_id",      null: false
    t.integer  "week_id",      null: false
    t.integer  "loser_id",     null: false
    t.boolean  "correct"
    t.integer  "week_type_id", null: false
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

  create_table "team_coaches", force: true do |t|
    t.integer  "user_id"
    t.integer  "team_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "team_coaches", ["team_id"], name: "index_team_coaches_on_team_id"
  add_index "team_coaches", ["user_id"], name: "index_team_coaches_on_user_id"

  create_table "teams", force: true do |t|
    t.string   "name",                       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "league_id",                  null: false
    t.boolean  "alive",      default: true,  null: false
    t.boolean  "paid",       default: false
  end

  add_index "teams", ["league_id"], name: "index_teams_on_league_id"

  create_table "users", force: true do |t|
    t.string   "email",                           null: false
    t.string   "password_digest",                 null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name",                      null: false
    t.string   "last_name",                       null: false
    t.boolean  "admin",           default: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true

  create_table "week_types", force: true do |t|
    t.string   "code"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "weeks", force: true do |t|
    t.integer  "number",                       null: false
    t.datetime "starts_at",                    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "season_id",                    null: false
    t.boolean  "complete",     default: false, null: false
    t.integer  "week_type_id",                 null: false
  end

  add_index "weeks", ["number", "season_id"], name: "index_weeks_on_number_and_season_id", unique: true
  add_index "weeks", ["season_id"], name: "index_weeks_on_season_id"

end
