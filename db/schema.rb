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

ActiveRecord::Schema.define(version: 20150612023727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_stat_statements"

  create_table "api_keys", force: true do |t|
    t.string   "token",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "api_keys", ["token"], name: "index_api_keys_on_token", unique: true, using: :btree

  create_table "games", force: true do |t|
    t.datetime "starts_at",                            null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "week_id",                              null: false
    t.integer  "home_squad_id",                        null: false
    t.integer  "visiting_squad_id",                    null: false
    t.integer  "home_squad_score",     default: 0,     null: false
    t.integer  "visiting_squad_score", default: 0,     null: false
    t.boolean  "complete",             default: false
    t.integer  "loser_squad_id"
    t.boolean  "shootout",             default: false
    t.integer  "overtimes",            default: 0,     null: false
    t.integer  "innings",              default: 9,     null: false
    t.boolean  "postponed",            default: false, null: false
    t.boolean  "tbd",                  default: false, null: false
    t.boolean  "if_necessary",         default: false, null: false
    t.string   "note"
    t.boolean  "playoff",              default: false, null: false
  end

  add_index "games", ["week_id"], name: "index_games_on_week_id", using: :btree

  create_table "invitations", force: true do |t|
    t.integer  "league_id",   null: false
    t.string   "email",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "accepted_at"
    t.string   "message"
  end

  add_index "invitations", ["league_id", "email"], name: "index_invitations_on_league_id_and_email", unique: true, using: :btree
  add_index "invitations", ["league_id"], name: "index_invitations_on_league_id", using: :btree

  create_table "league_commishes", force: true do |t|
    t.integer  "user_id"
    t.integer  "league_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "league_commishes", ["league_id"], name: "index_league_commishes_on_league_id", using: :btree
  add_index "league_commishes", ["user_id", "league_id"], name: "index_league_commishes_on_user_id_and_league_id", unique: true, using: :btree
  add_index "league_commishes", ["user_id"], name: "index_league_commishes_on_user_id", using: :btree

  create_table "leagues", force: true do |t|
    t.string   "name",                               null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "max_teams_per_user"
    t.integer  "season_id",                          null: false
    t.integer  "start_week_id",                      null: false
    t.boolean  "public",             default: true,  null: false
    t.text     "message"
    t.boolean  "elimination",        default: false
    t.integer  "max_picks_per_week", default: 1
    t.boolean  "eliminate_on_tie",   default: true,  null: false
  end

  add_index "leagues", ["name", "season_id"], name: "index_leagues_on_name_and_season_id", unique: true, using: :btree
  add_index "leagues", ["season_id"], name: "index_leagues_on_season_id", using: :btree

  create_table "losers", force: true do |t|
    t.integer  "week_id",    null: false
    t.integer  "squad_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "game_id"
  end

  add_index "losers", ["week_id", "squad_id"], name: "index_losers_on_week_id_and_squad_id", unique: true, using: :btree
  add_index "losers", ["week_id"], name: "index_losers_on_week_id", using: :btree

  create_table "picks", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "team_id",      null: false
    t.integer  "week_id",      null: false
    t.integer  "squad_id",     null: false
    t.boolean  "correct"
    t.integer  "week_type_id", null: false
    t.integer  "game_id"
  end

  add_index "picks", ["team_id"], name: "index_picks_on_team_id", using: :btree
  add_index "picks", ["week_id"], name: "index_picks_on_week_id", using: :btree

  create_table "seasons", force: true do |t|
    t.string   "name",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "ends_at",     null: false
    t.datetime "starts_at"
    t.string   "season_type"
  end

  create_table "squads", force: true do |t|
    t.string   "name",                       null: false
    t.string   "abbrev",                     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "none",       default: false
    t.string   "squad_type"
    t.integer  "wins",       default: 0,     null: false
    t.integer  "losses",     default: 0,     null: false
    t.integer  "ties",       default: 0,     null: false
    t.string   "short"
    t.integer  "seed",       default: 0,     null: false
  end

  create_table "team_coaches", force: true do |t|
    t.integer  "user_id"
    t.integer  "team_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "team_coaches", ["team_id"], name: "index_team_coaches_on_team_id", using: :btree
  add_index "team_coaches", ["user_id", "team_id"], name: "index_team_coaches_on_user_id_and_team_id", unique: true, using: :btree
  add_index "team_coaches", ["user_id"], name: "index_team_coaches_on_user_id", using: :btree

  create_table "teams", force: true do |t|
    t.string   "name",                         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "league_id",                    null: false
    t.boolean  "active",        default: true, null: false
    t.text     "message"
    t.datetime "eliminated_at"
  end

  add_index "teams", ["league_id"], name: "index_teams_on_league_id", using: :btree
  add_index "teams", ["name", "league_id"], name: "index_teams_on_name_and_league_id", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                           null: false
    t.string   "password_digest",                 null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name",                      null: false
    t.string   "last_name",                       null: false
    t.boolean  "admin",           default: false
    t.boolean  "active",          default: true,  null: false
    t.boolean  "guest",           default: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  create_table "week_types", force: true do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "weeks", force: true do |t|
    t.datetime "starts_at",                        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "season_id",                        null: false
    t.boolean  "complete",         default: false, null: false
    t.integer  "week_type_id",                     null: false
    t.datetime "ends_at"
    t.string   "name"
    t.datetime "reminder_sent_at"
    t.string   "slug"
  end

  add_index "weeks", ["season_id"], name: "index_weeks_on_season_id", using: :btree

end
