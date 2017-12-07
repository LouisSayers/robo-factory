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

ActiveRecord::Schema.define(version: 20171207113519) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "robot_configurations", force: :cascade do |t|
    t.boolean "has_sentience", default: false
    t.boolean "has_wheels", default: false
    t.boolean "has_tracks", default: false
    t.integer "number_of_rotors", default: 0
    t.string "colour", default: "black"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "robots", force: :cascade do |t|
    t.bigint "robot_configuration_id"
    t.string "name"
    t.boolean "extinguished", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["robot_configuration_id"], name: "index_robots_on_robot_configuration_id"
  end

  create_table "robots_statuses", force: :cascade do |t|
    t.bigint "robot_id"
    t.bigint "status_id"
    t.index ["robot_id"], name: "index_robots_statuses_on_robot_id"
    t.index ["status_id"], name: "index_robots_statuses_on_status_id"
  end

  create_table "statuses", force: :cascade do |t|
    t.string "description"
  end

  add_foreign_key "robots", "robot_configurations"
end
