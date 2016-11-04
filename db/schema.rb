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

ActiveRecord::Schema.define(version: 20161104003126) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "spots", force: :cascade do |t|
    t.integer  "host_id",         null: false
    t.string   "host_name",       null: false
    t.string   "title",           null: false
    t.string   "country",         null: false
    t.string   "state_region",    null: false
    t.string   "post_code",       null: false
    t.string   "street_address",  null: false
    t.string   "price_per_night", null: false
    t.string   "room_type",       null: false
    t.integer  "bed_count",       null: false
    t.string   "spot_pic_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "spots", ["bed_count"], name: "index_spots_on_bed_count", using: :btree
  add_index "spots", ["country"], name: "index_spots_on_country", using: :btree
  add_index "spots", ["post_code"], name: "index_spots_on_post_code", using: :btree
  add_index "spots", ["price_per_night"], name: "index_spots_on_price_per_night", using: :btree
  add_index "spots", ["room_type"], name: "index_spots_on_room_type", using: :btree
  add_index "spots", ["state_region"], name: "index_spots_on_state_region", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "profile_pic_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["first_name"], name: "index_users_on_first_name", using: :btree
  add_index "users", ["last_name"], name: "index_users_on_last_name", using: :btree

end
