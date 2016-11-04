# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({
  first_name: "Guest",
  last_name: "User",
  email: "guest@gmail.com",
  password: "password"
})

User.create({
  first_name: "Host",
  last_name: "User",
  email: "host@gmail.com",
  password: "password"
})

Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "San Francisco Apt Downtown",
  country: "United States",
  state_region: "California",
  post_code: '94103',
  street_address: '12345 California St',
  price_per_night: '$100',
  room_type: "Apartment",
  bed_count: "4",
  spot_pic_url: 'https://www.google.com',
})
