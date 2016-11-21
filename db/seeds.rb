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
  price_per_night: 100,
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
  price_per_night: 100,
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
  price_per_night: 100,
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
  price_per_night: 50,
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
  price_per_night: 75,
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
  price_per_night: 147,
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
  price_per_night: 801,
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
  price_per_night: 120,
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

spot_locations = [
  {
    "city":"The Castro",
    "state_region":" San Francisco",
    "country":" USA",
    "lat":37.7609082,
    "lng":-122.4350043
  },

  {
    "city":"Berkeley",
    "state_region":" CA",
    "country":" USA",
    "lat":37.8715926,
    "lng":-122.272747
  },

  {
    "city":"Oakland",
    "state_region":" CA",
    "country":" USA",
    "lat":37.8043637,
    "lng":-122.2711137
  },

  {
    "city":"Daly City",
    "state_region":" CA",
    "country":" USA",
    "lat":37.6879241,
    "lng":-122.4702079
  },

  {
    "city":"San Jose",
    "state_region":" CA",
    "country":" USA",
    "lat":37.3382082,
    "lng":-121.8863286
  },

  {
    "city":"San Mateo",
    "state_region":" CA",
    "country":" USA",
    "lat":37.5629917,
    "lng":-122.3255254
  },

  {
    "city":"Palo Alto",
    "state_region":" CA",
    "country":" USA",
    "lat":37.4418834,
    "lng":-122.1430195
  },

  {
    "city":"Mountain View",
    "state_region":" CA",
    "country":" USA",
    "lat":37.3860517,
    "lng":-122.0838511
  },

  {
    "city":"Monterey",
    "state_region":" CA",
    "country":" USA",
    "lat":36.6002378,
    "lng":-121.8946761
  },

  {
    "city":"Bakersfield",
    "state_region":" CA",
    "country":" USA",
    "lat":35.3732921,
    "lng":-119.0187125
  },

  {
    "city":"San Luis Obispo",
    "state_region":" CA",
    "country":" USA",
    "lat":35.2827524,
    "lng":-120.6596156
  },

  {
    "city":"Torrance",
    "state_region":" CA",
    "country":" USA",
    "lat":33.8358492,
    "lng":-118.3406288
  },

  {
    "city":"Lakewood",
    "state_region":" CA",
    "country":" USA",
    "lat":33.8536269,
    "lng":-118.1339563
  },

  {
    "city":"La Habra",
    "state_region":" CA 90631",
    "country":" USA",
    "lat":33.9319578,
    "lng":-117.9461734
  },

  {
    "city":"Anaheim",
    "state_region":" CA",
    "country":" USA",
    "lat":33.8352932,
    "lng":-117.9145036
  },

  {
    "city":"Santa Ana",
    "state_region":" CA",
    "country":" USA",
    "lat":33.7455731,
    "lng":-117.8678338
  },

  {
    "city":"Pomona",
    "state_region":" CA",
    "country":" USA",
    "lat":34.055103,
    "lng":-117.7499909
  },

  {
    "city":"San Bernardino",
    "state_region":" CA",
    "country":" USA",
    "lat":34.1083449,
    "lng":-117.2897652
  },

  {
    "city":"Lancaster",
    "state_region":" CA",
    "country":" USA",
    "lat":34.6867846,
    "lng":-118.1541632
  },

  {
    "city":"Irvine",
    "state_region":" CA",
    "country":" USA",
    "lat":33.6839473,
    "lng":-117.7946942
  },

  {
    "city":"Riverside",
    "state_region":" CA",
    "country":" USA",
    "lat":33.9533487,
    "lng":-117.3961564
  },

  {
    "city":"La Mesa",
    "state_region":" CA",
    "country":" USA",
    "lat":32.7678287,
    "lng":-117.0230839
  },

  {
    "city":"Chula Vista",
    "state_region":" CA",
    "country":" USA",
    "lat":32.6400541,
    "lng":-117.0841955
  },

  {
    "city":"Tijuana",
    "state_region":" Baja California",
    "country":" Mexico",
    "lat":32.5149469,
    "lng":-117.0382471
  },

  {
    "city":"Los Angeles",
    "state_region":" CA",
    "country":" USA",
    "lat":34.0522342,
    "lng":-118.2436849
  },

  {
    "city":"Northridge",
    "state_region":" Los Angeles",
    "country":" USA",
    "lat":34.2381251,
    "lng":-118.530123
  },

  {
    "city":"Hollywood",
    "state_region":" Los Angeles",
    "country":" USA",
    "lat":34.0928092,
    "lng":-118.3286614
  },

  {
    "city":"Orange County",
    "state_region":" CA",
    "country":" USA",
    "lat":33.7174708,
    "lng":-117.8311428
  },

  {
    "city":"Burbank",
    "state_region":" CA",
    "country":" USA",
    "lat":34.1808392,
    "lng":-118.3089661
  },

  {
    "city":"Phoenix",
    "state_region":" AZ",
    "country":" USA",
    "lat":33.4483771,
    "lng":-112.0740373
  },

  {
    "city":"Tucson",
    "state_region":" AZ",
    "country":" USA",
    "lat":32.2217429,
    "lng":-110.926479
  },

  {
    "city":"El Paso",
    "state_region":" TX",
    "country":" USA",
    "lat":31.7618778,
    "lng":-106.4850217
  },

  {
    "city":"Denver",
    "state_region":" CO",
    "country":" USA",
    "lat":39.7392358,
    "lng":-104.990251
  },

  {
    "city":"Fort Collins",
    "state_region":" CO",
    "country":" USA",
    "lat":40.5852602,
    "lng":-105.084423
  },

  {
    "city":"Albuquerque",
    "state_region":" NM",
    "country":" USA",
    "lat":35.0853336,
    "lng":-106.6055534
  },

  {
    "city":"Oklahoma City",
    "state_region":" OK",
    "country":" USA",
    "lat":35.4675602,
    "lng":-97.5164276
  },

  {
    "city":"Tulsa",
    "state_region":" OK",
    "country":" USA",
    "lat":36.1539816,
    "lng":-95.99277500000001
  },

  {
    "city":"Kansas City",
    "state_region":" KS",
    "country":" USA",
    "lat":39.114053,
    "lng":-94.6274636
  },

  {
    "city":"Atlanta",
    "state_region":" GA",
    "country":" USA",
    "lat":33.7489954,
    "lng":-84.3879824
  },

  {
    "city":"Detroit",
    "state_region":" MI",
    "country":" USA",
    "lat":42.331427,
    "lng":-83.0457538
  },

  {
    "city":"Syracuse",
    "state_region":" NY",
    "country":" USA",
    "lat":43.0481221,
    "lng":-76.14742439999999
  },

  {
    "city":"Brooklyn",
    "state_region":" NY",
    "country":" USA",
    "lat":40.6781784,
    "lng":-73.9441579
  },

  {
    "city":"Bronx County",
    "state_region":" NY",
    "country":" USA",
    "lat":40.8370495,
    "lng":-73.86542949999999
  },

  {
    "city":"Queens County",
    "state_region":" NY",
    "country":" USA",
    "lat":40.7282239,
    "lng":-73.7948516
  },

  {
    "city":"Manhattan",
    "state_region":" New York",
    "country":" USA",
    "lat":40.7830603,
    "lng":-73.9712488
  },

  {
    "city":"Chicago",
    "state_region":" IL",
    "country":" USA",
    "lat":41.8781136,
    "lng":-87.6297982
  },

  {
    "city":"Charleston",
    "state_region":" SC",
    "country":" USA",
    "lat":32.7764749,
    "lng":-79.93105120000001
  },

  {
    "city":"Las Vegas",
    "state_region":" NV",
    "country":" USA",
    "lat":36.1699412,
    "lng":-115.1398296
  },

  {
    "city":"Seattle",
    "state_region":" WA",
    "country":" USA",
    "lat":47.6062095,
    "lng":-122.3320708
  },

  {
    "city":"Washington",
    "state_region":" DC",
    "country":" USA",
    "lat":38.9071923,
    "lng":-77.0368707
  },

  {
    "city":"New Orleans",
    "state_region":" LA",
    "country":" USA",
    "lat":29.95106579999999,
    "lng":-90.0715323
  },

  {
    "city":"San Diego",
    "state_region":" CA",
    "country":" USA",
    "lat":32.715738,
    "lng":-117.1610838
  },

  {
    "city":"Saint Louis",
    "state_region":" MO",
    "country":" USA",
    "lat":38.6105426,
    "lng":-90.3371889
  },

  {
    "city":"Honolulu",
    "state_region":" HI",
    "country":" USA",
    "lat":21.3069444,
    "lng":-157.8583333
  },

  {
    "city":"Miami",
    "state_region":" FL",
    "country":" USA",
    "lat":25.7616798,
    "lng":-80.1917902
  },

  {
    "city":"Branson",
    "state_region":" MO 65616",
    "country":" USA",
    "lat":36.6436731,
    "lng":-93.21851439999999
  },

  {
    "city":"Boston",
    "state_region":" MA",
    "country":" USA",
    "lat":42.3600825,
    "lng":-71.0588801
  },

  {
    "city":"Savannah",
    "state_region":" GA",
    "country":" USA",
    "lat":32.0835407,
    "lng":-81.09983419999999
  },

  {
    "city":"Orlando",
    "state_region":" FL",
    "country":" USA",
    "lat":28.5383355,
    "lng":-81.3792365
  },

  {
    "city":"Portland",
    "state_region":" OR",
    "country":" USA",
    "lat":45.5230622,
    "lng":-122.6764816
  },

  {
    "city":"Lahaina",
    "state_region":" HI",
    "country":" USA",
    "lat":20.8783333,
    "lng":-156.6825
  },

  {
    "city":"Nashville",
    "state_region":" TN",
    "country":" USA",
    "lat":36.1626638,
    "lng":-86.7816016
  },

  {
    "city":"San Antonio",
    "state_region":" TX",
    "country":" USA",
    "lat":29.4241219,
    "lng":-98.49362819999999
  },

  {
    "city":"Dallas",
    "state_region":" TX",
    "country":" USA",
    "lat":32.7766642,
    "lng":-96.79698789999999
  },

  {
    "city":"Austin",
    "state_region":" TX",
    "country":" USA",
    "lat":30.267153,
    "lng":-97.7430608
  },

  {
    "city":"Minneapolis",
    "state_region":" MN",
    "country":" USA",
    "lat":44.977753,
    "lng":-93.2650108
  },

    {
    "city":"Seoul",
    "state_region":"",
    "country":" South Korea",
    "lat":37.566535,
    "lng":126.9779692
  },

  {
    "city":"São Paulo",
    "state_region":" State of São Paulo",
    "country":" Brazil",
    "lat":-23.5505199,
    "lng":-46.63330939999999
  },

  {
    "city":"Mumbai",
    "state_region":" Maharashtra",
    "country":" India",
    "lat":19.0759837,
    "lng":72.8776559
  },

  {
    "city":"East Jakarta",
    "state_region":" East Jakarta City",
    "country":" Indonesia",
    "lat":-6.2250138,
    "lng":106.9004472
  },

  {
    "city":"Karachi",
    "state_region":"",
    "country":" Pakistan",
    "lat":24.8614622,
    "lng":67.0099388
  },

  {
    "city":"Moscow",
    "state_region":"",
    "country":" Russia",
    "lat":55.755826,
    "lng":37.6173
  },

  {
    "city":"Istanbul",
    "state_region":" İstanbul",
    "country":" Turkey",
    "lat":41.0082376,
    "lng":28.9783589
  },

  {
    "city":"Mexico City",
    "state_region":" CDMX",
    "country":" Mexico",
    "lat":19.4326077,
    "lng":-99.133208
  },

  {
    "city":"Shanghai",
    "state_region":"",
    "country":" China",
    "lat":31.230416,
    "lng":121.473701
  },

  {
    "city":"Tokyo",
    "state_region":"",
    "country":" Japan",
    "lat":35.7090259,
    "lng":139.7319925
  },

  {
    "city":"New York",
    "state_region":" NY",
    "country":" USA",
    "lat":40.7127837,
    "lng":-74.0059413
  },

  {
    "city":"Bangkok",
    "state_region":"",
    "country":" Thailand",
    "lat":13.7563309,
    "lng":100.5017651
  },

  {
    "city":"Beijing",
    "state_region":"",
    "country":" China",
    "lat":39.904211,
    "lng":116.407395
  },

  {
    "city":"Delhi",
    "state_region":"",
    "country":" India",
    "lat":28.7040592,
    "lng":77.10249019999999
  },

  {
    "city":"London",
    "state_region":"",
    "country":" UK",
    "lat":51.5073509,
    "lng":-0.1277583
  },

  {
    "city":"Hong Kong",
    "state_region": "",
    "country":"Hong Kong",
    "lat":22.396428,
    "lng":114.109497
  },

  {
    "city":"Cairo",
    "state_region":" Cairo Governorate",
    "country":" Egypt",
    "lat":30.0444196,
    "lng":31.2357116
  },

  {
    "city":"Tehran",
    "state_region":" Tehran Province",
    "country":" Iran",
    "lat":35.6891975,
    "lng":51.3889736
  },

  {
    "city":"Bogotá",
    "state_region":" Bogota",
    "country":" Colombia",
    "lat":4.710988599999999,
    "lng":-74.072092
  },

  {
    "city":"Bandung",
    "state_region":" Bandung City",
    "country":" Indonesia",
    "lat":-6.9174639,
    "lng":107.6191228
  },

  {
    "city":"Tianjin",
    "state_region":"",
    "country":" China",
    "lat":39.084158,
    "lng":117.200983
  },

  {
    "city":"Lima District",
    "state_region":"",
    "country":" Peru",
    "lat":-12.046374,
    "lng":-77.0427934
  },

  {
    "city":"Rio de Janeiro",
    "state_region":" State of Rio de Janeiro",
    "country":" Brazil",
    "lat":-22.9068467,
    "lng":-43.1728965
  },

  {
    "city":"Lahore",
    "state_region":"",
    "country":" Pakistan",
    "lat":31.55460609999999,
    "lng":74.3571581
  },

  {
    "city":"Bogor",
    "state_region":" Kp. Parung Jambu",
    "country":" Indonesia",
    "lat":-6.597146899999999,
    "lng":106.8060388
  },

  {
    "city":"Santiago",
    "state_region":" Santiago Metropolitan Region",
    "country":" Chile",
    "lat":-33.4378305,
    "lng":-70.6504492
  },

  {
    "city":"St Petersburg",
    "state_region":"",
    "country":" Russia",
    "lat":59.9342802,
    "lng":30.3350986
  },

  {
    "city":"Shenyang",
    "state_region":" Liaoning",
    "country":" China",
    "lat":41.805699,
    "lng":123.431472
  },

  {
    "city":"Kolkata",
    "state_region":" West Bengal",
    "country":" India",
    "lat":22.572646,
    "lng":88.36389500000001
  },

  {
    "city":"Wuhan",
    "state_region":" Hubei",
    "country":" China",
    "lat":30.593099,
    "lng":114.305393
  },

  {
    "city":"Sydney NSW",
    "state_region":"",
    "country":" Australia",
    "lat":-33.8688197,
    "lng":151.2092955
  },

  {
    "city":"Guangzhou",
    "state_region":" Guangdong",
    "country":" China",
    "lat":23.12911,
    "lng":113.264385
  },

  {
    "city":"Singapore",
    "state_region": "",
    "country":"Singapore",
    "lat":1.3553794,
    "lng":103.8677444
  },

  {
    "city":"Chennai",
    "state_region":" Tamil Nadu",
    "country":" India",
    "lat":13.0826802,
    "lng":80.2707184
  },

  {
    "city":"Baghdad",
    "state_region":"",
    "country":" Iraq",
    "lat":33.3128057,
    "lng":44.3614875
  },

  {
    "city":"Busan",
    "state_region":"",
    "country":" South Korea",
    "lat":35.1795543,
    "lng":129.0756416
  },

  {
    "city":"Los Angeles",
    "state_region":" CA",
    "country":" USA",
    "lat":34.0522342,
    "lng":-118.2436849
  },

  {
    "city":"Yokohama",
    "state_region":" Kanagawa Prefecture",
    "country":" Japan",
    "lat":35.4437078,
    "lng":139.6380256
  },

  {
    "city":"Dhaka",
    "state_region":"",
    "country":" Bangladesh",
    "lat":23.810332,
    "lng":90.4125181
  },

  {
    "city":"Berlin",
    "state_region":"",
    "country":" Germany",
    "lat":52.52000659999999,
    "lng":13.404954
  },

  {
    "city":"Alexandria",
    "state_region":" Alexandria Governorate",
    "country":" Egypt",
    "lat":31.2000924,
    "lng":29.9187387
  },

  {
    "city":"Bengaluru",
    "state_region":" Karnataka",
    "country":" India",
    "lat":12.9715987,
    "lng":77.5945627
  },

  {
    "city":"Malang",
    "state_region":" Malang City",
    "country":" Indonesia",
    "lat":-7.9666204,
    "lng":112.6326321
  },

  {
    "city":"Hyderabad",
    "state_region":" Telangana",
    "country":" India",
    "lat":17.385044,
    "lng":78.486671
  },

  {
    "city":"Chongqing",
    "state_region":"",
    "country":" China",
    "lat":29.56301,
    "lng":106.551556
  },

  {
    "city":"Ho Chi Minh City",
    "state_region":" Ho Chi Minh",
    "country":" Vietnam",
    "lat":10.8230989,
    "lng":106.6296638
  },

  {
    "city":"Harbin",
    "state_region":" Heilongjiang",
    "country":" China",
    "lat":45.80377499999999,
    "lng":126.534967
  },

  {
    "city":"Ankara",
    "state_region":"",
    "country":" Turkey",
    "lat":39.9333635,
    "lng":32.8597419
  },

  {
    "city":"Buenos Aires",
    "state_region":" Autonomous City of Buenos Aires",
    "country":" Argentina",
    "lat":-34.6036844,
    "lng":-58.3815591
  },

  {
    "city":"Chengdu",
    "state_region":" Sichuan",
    "country":" China",
    "lat":30.572816,
    "lng":104.066801
  },

  {
    "city":"Ahmedabad",
    "state_region":" Gujarat",
    "country":" India",
    "lat":23.022505,
    "lng":72.5713621
  },

  {
    "city":"Casablanca",
    "state_region":"",
    "country":" Morocco",
    "lat":33.5731104,
    "lng":-7.589843399999999
  },

  {
    "city":"Chicago",
    "state_region":" IL",
    "country":" USA",
    "lat":41.8781136,
    "lng":-87.6297982
  },

  {
    "city":"Xi'an",
    "state_region":" Shaanxi",
    "country":" China",
    "lat":34.341575,
    "lng":108.93977
  },

  {
    "city":"Madrid",
    "state_region":"",
    "country":" Spain",
    "lat":40.4167754,
    "lng":-3.7037902
  },

  {
    "city":"Surabaya",
    "state_region":" Surabaya City",
    "country":" Indonesia",
    "lat":-7.2574719,
    "lng":112.7520883
  },

  {
    "city":"Nanjing",
    "state_region":" Jiangsu",
    "country":" China",
    "lat":32.060255,
    "lng":118.796877
  },

  {
    "city":"Rome",
    "state_region":"",
    "country":" Italy",
    "lat":41.9027835,
    "lng":12.4963655
  },

  {
    "city":"Taipei City",
    "state_region":"",
    "country":" Taiwan",
    "lat":25.0329636,
    "lng":121.5654268
  },

  {
    "city":"Osaka",
    "state_region":" Osaka Prefecture",
    "country":" Japan",
    "lat":34.6937378,
    "lng":135.5021651
  },

  {
    "city":"Kiev",
    "state_region":"",
    "country":" Ukraine",
    "lat":50.4501,
    "lng":30.5234
  },

  {
    "city":"Yangon",
    "state_region":"",
    "country":" Myanmar (Burma)",
    "lat":16.8660694,
    "lng":96.19513200000002
  },

  {
    "city":"Toronto",
    "state_region":" ON",
    "country":" Canada",
    "lat":43.653226,
    "lng":-79.3831843
  },

  {
    "city":"Zibo",
    "state_region":" Shandong",
    "country":" China",
    "lat":36.81348699999999,
    "lng":118.054927
  },

  {
    "city":"Dalian",
    "state_region":" Liaoning",
    "country":" China",
    "lat":38.91400300000001,
    "lng":121.614682
  },

  {
    "city":"Daegu",
    "state_region":"",
    "country":" South Korea",
    "lat":35.8714354,
    "lng":128.601445
  },

  {
    "city":"Addis Ababa",
    "state_region":"",
    "country":" Ethiopia",
    "lat":8.9806034,
    "lng":38.7577605
  },

  {
    "city":"Jinan",
    "state_region":" Shandong",
    "country":" China",
    "lat":36.651216,
    "lng":117.12
  },

  {
    "city":"Salvador",
    "state_region":" State of Bahia",
    "country":" Brazil",
    "lat":-12.9730401,
    "lng":-38.502304
  },

  {
    "city":"Incheon",
    "state_region":"",
    "country":" South Korea",
    "lat":37.4562557,
    "lng":126.7052062
  },

  {
    "city":"Semarang",
    "state_region":" Semarang City",
    "country":" Indonesia",
    "lat":-7.0051453,
    "lng":110.4381254
  },

  {
    "city":"Giza",
    "state_region":" Al Omraneyah",
    "country":" Egypt",
    "lat":30.0130557,
    "lng":31.2088526
  },

  {
    "city":"Changchun",
    "state_region":" Jilin",
    "country":" China",
    "lat":43.817072,
    "lng":125.323544
  },

  {
    "city":"Havana",
    "state_region":"",
    "country":" Cuba",
    "lat":23.1135925,
    "lng":-82.3665956
  },

  {
    "city":"Nagoya",
    "state_region":" Aichi Prefecture",
    "country":" Japan",
    "lat":35.1814464,
    "lng":136.906398
  },

  {
    "city":"Belo Horizonte",
    "state_region":" State of Minas Gerais",
    "country":" Brazil",
    "lat":-19.9166813,
    "lng":-43.9344931
  },

  {
    "city":"Paris",
    "state_region":"",
    "country":" France",
    "lat":48.856614,
    "lng":2.3522219
  },

  {
    "city":"Tashkent",
    "state_region":"",
    "country":" Uzbekistan",
    "lat":41.2994958,
    "lng":69.2400734
  },

  {
    "city":"Fortaleza - Zone 1",
    "state_region":" Fortaleza - State of Ceará",
    "country":" Brazil",
    "lat":-3.7318616,
    "lng":-38.5266704
  },

  {
    "city":"Sukabumi",
    "state_region":" West Java",
    "country":" Indonesia",
    "lat":-6.9277361,
    "lng":106.9299579
  },

  {
    "city":"Cali",
    "state_region":" Valle del Cauca",
    "country":" Colombia",
    "lat":3.4516467,
    "lng":-76.5319854
  },

  {
    "city":"Guayaquil",
    "state_region":"",
    "country":" Ecuador",
    "lat":-2.1709979,
    "lng":-79.9223592
  },

  {
    "city":"Qingdao",
    "state_region":" Shandong",
    "country":" China",
    "lat":36.067108,
    "lng":120.382609
  },

  {
    "city":"Izmir",
    "state_region":" İzmir",
    "country":" Turkey",
    "lat":38.423734,
    "lng":27.142826
  },

  {
    "city":"Cirebon",
    "state_region":" Cirebon City",
    "country":" Indonesia",
    "lat":-6.7320229,
    "lng":108.5523164
  },

  {
    "city":"Taiyuan",
    "state_region":" Shanxi",
    "country":" China",
    "lat":37.87059,
    "lng":112.548879
  },

  {
    "city":"Brasília - Brasilia",
    "state_region":" Federal District",
    "country":" Brazil",
    "lat":-15.7942287,
    "lng":-47.8821658
  },

  {
    "city":"Bucharest",
    "state_region":"",
    "country":" Romania",
    "lat":44.4267674,
    "lng":26.1025384
  },

  {
    "city":"Faisalabad",
    "state_region":"",
    "country":" Pakistan",
    "lat":31.4187142,
    "lng":73.07910729999999
  },

  {
    "city":"Medan",
    "state_region":" Medan City",
    "country":" Indonesia",
    "lat":3.5951956,
    "lng":98.6722227
  },

  {
    "city":"Houston",
    "state_region":" TX",
    "country":" USA",
    "lat":29.7604267,
    "lng":-95.3698028
  },

  {
    "city":"Mashhad",
    "state_region":" Razavi Khorasan Province",
    "country":" Iran",
    "lat":36.2604623,
    "lng":59.6167549
  },

  {
    "city":"Medellin",
    "state_region":" Antioquia",
    "country":" Colombia",
    "lat":6.244203,
    "lng":-75.5812119
  },

  {
    "city":"Kanpur",
    "state_region":" Uttar Pradesh",
    "country":" India",
    "lat":26.449923,
    "lng":80.3318736
  },

  {
    "city":"Budapest",
    "state_region":"",
    "country":" Hungary",
    "lat":47.497912,
    "lng":19.040235
  },

  {
    "city":"Caracas",
    "state_region":" Capital District",
    "country":" Venezuela",
    "lat":10.4805937,
    "lng":-66.90360629999999
  }
]


def parseLatLng(n)
  change = rand(0.1) * 0.023

  randOp = rand(2)
  if randOp == 0
    return n + change
  else
    return n - change
  end
end

20.times do
  spot_locations.each_with_index do |spot_location|
    spot_location[:lat] = parseLatLng(spot_location[:lat])
    spot_location[:lng] = parseLatLng(spot_location[:lng])

    city = spot_location[:city]

    spot = Spot.new(spot_location)

    title_adjs = [
      'Beautiful',
      'Spacious',
      'Great',
      'Wonderful',
      'Best',
      'Cheap',
      'Luxurious'
    ]
    title_adj_idx = rand(title_adjs.count-1)
    title_adj = title_adjs[title_adj_idx]

    title_nouns = [
      'Home',
      'Room',
      'Place',
      'House',
      'Apartment',
      'Haven',
      'Condo',
      'Residence'
    ]
    title_noun_idx = rand(title_nouns.count-1)
    title_noun = title_nouns[title_noun_idx]

    room_types = [
      'Entire House/Apt',
      'Private Room',
      'Shared Room'
    ]
    room_type_idx = rand(3)
    room_type = room_types[room_type_idx]

    post_code = rand(99999)
    price_per_night = rand(1000) + 10

    bed_count = rand(10) + 1
    max_guests = rand(10) + 1

    spot_pic_urls = [
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900936/spot17_qlwvzm.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900954/spot8_hecbj4.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900939/spot7_es4acz.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900935/spot18_moq6jj.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900939/spot12_rwluji.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900936/spot11_fytnsk.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900937/spot14_tdczmw.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900939/spot2_ukcmjb.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900939/spot19_x2exoh.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900937/spot13_av1dor.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900937/spot4_asyv66.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900940/spot15_ujvbug.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900941/spot9_tfltnp.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900942/spot1_mn0cen.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900956/chicago_sjvjc9.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900943/spot20_bqqzsx.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900961/spot10_mysua7.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900965/spot6_kmsylw.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900958/spot16_dfmr4l.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900956/spot3_ooxov4.jpg",
      "https://res.cloudinary.com/ddgtwtbre/image/upload/v1478900942/spot5_cwagxm.jpg"
    ]
    spot_pic_url_idx = rand(spot_pic_urls.count-1)
    spot_pic_url = spot_pic_urls[spot_pic_url_idx]

    spot.host_id = 2
    spot.host_name = 'Host'
    spot.title = "#{title_adj} #{title_noun} in #{city}"
    spot.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    spot.post_code = "#{post_code}"
    spot.street_address = "12345 fake street address"
    spot.price_per_night = price_per_night
    spot.room_type = "#{room_type}"
    spot.bed_count = bed_count
    spot.max_guests = max_guests
    spot.spot_pic_url = spot_pic_url

    spot.save!
  end
end
