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
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  country: "United States",
  state_region: "California",
  city: "San Francisco",
  post_code: '94103',
  street_address: '12345 California St',
  price_per_night: '$100',
  room_type: "Entire House/Apt",
  bed_count: 4,
  max_guests: 4,
  spot_pic_url: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1478492826/spot1pic3_hdfvpl.jpg',
  lat: 37.794144,
  lng: -122.408957
})

Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "Los Angeles Apt Downtown",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  country: "United States",
  state_region: "California",
  city: "Los Angeles",
  post_code: '91002',
  street_address: '12345 Wilshire Blvd',
  price_per_night: '$100',
  room_type: "Entire House/Apt",
  bed_count: 4,
  max_guests: 4,
  spot_pic_url: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1478492826/spot1pic1_ojh6w2.jpg',
  lat: 34.052256,
  lng: -118.254381
})


Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "Private Studio in London",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  country: "United Kingdom",
  state_region: "",
  city: "London",
  post_code: 'AG42NB',
  street_address: '12345 California St',
  price_per_night: '£100',
  room_type: "Private Room",
  bed_count: 1,
  max_guests: 2,
  spot_pic_url: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1478492826/spot1pic4_r0oafw.jpg',
  lat: 51.520915,
  lng: -0.149832,
})

Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "Quaint room in Los Angeles",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  country: "United States",
  state_region: "California",
  city: "Los Angeles",
  post_code: '91002',
  street_address: '12345 Sunset Blvd',
  price_per_night: '$50',
  room_type: "Shared Room",
  bed_count: 2,
  max_guests: 4,
  spot_pic_url: 'http://res.cloudinary.com/ddgtwtbre/image/upload/v1478492826/spot1pic2_ucamo9.jpg',
  lat: 34.090932,
  lng: -118.406058
})

Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "Disneyland Paris perfect for 5!",
  description: "This apartment is ideally located at the foot of the famous Valley Shopping and just close to the Disney Parks!! Finish a day full of emotions for a moment of relaxation in the pool of the residence.",
  country: "France",
  state_region: "Île-de-France",
  city: "Serris",
  post_code: "77700",
  street_address: "12345 Paris Ave",
  price_per_night: "$75",
  room_type: "Entire House/Apt",
  bed_count: 2,
  max_guests: 5,
  spot_pic_url: 'https://res.cloudinary.com/ddgtwtbre/image/upload/c_scale,h_604/v1478628133/paris-eiffel-tower_hxpxjx.jpg',
  lat: 48.843499,
  lng: 2.785134
})

Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "Luxury Flat",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  country: "Netherlands",
  state_region: "Noord-Holland",
  city: "Amsterdam",
  post_code: "12010",
  street_address: "12345 Amsterdam Street",
  price_per_night: "$147",
  room_type: "Entire House/Apt",
  bed_count: 6,
  max_guests: 8,
  spot_pic_url: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1478628600/amsterdam-luxury-flat_jkgxej.webp',
  lat: 52.374172,
  lng: 4.861534
})

Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "Entertainer's Paradise, Heart of Umhlanga",
  description: "Our contemporary home boasts open plan living at its finest. This fully furnished home is situated in a quiet and safe complex in Umhlanga, Durban. The house consists of four en-suite bedrooms, a fully equipped kitchen, 12 seating dining area & 2 TV lounges. There is a large infinity pool with heated Jacuzzi located off a sunset facing pool deck looking into natural bush.

  A 2 minute drive to the beach, our home is the perfect escape.",
  country: "South Africa",
  state_region: 'KZN',
  city: "Durban",
  post_code: '12345',
  street_address: "12345 Durban Poison Ave",
  price_per_night: "$801",
  room_type: "Entire House/Apt",
  bed_count: 5,
  max_guests: 8,
  spot_pic_url: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1478629001/durban-south-africa_yp7win.webp',
  lat: -29.856882,
  lng: 31.036159
})

Spot.create({
  host_id: 2,
  host_name: "Host",
  title: "Spacious Home in heart of Seoul",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  country: "South Korea",
  state_region: "",
  city: "Seoul",
  post_code: '09876',
  street_address: "1234 Seoul Street",
  price_per_night: "$123",
  room_type: "Entire House/Apt",
  bed_count: 3,
  max_guests: 6,
  spot_pic_url: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1478629386/seoul-south-korea_a1lsjg.jpg',
  lat: 37.513837,
  lng: 127.029368
})

# Booking.create({
#   spot_id: 1,
#   guest_id: 1,
#   location: "City, State/Region, Country",
#   status: "PENDING",
#   check_in_date: Mon, 07 Nov 2016,
#   check_out_date: Mon, 07 Nov 2016,
#   num_guests: 2,
#   price: "$100"
# })
