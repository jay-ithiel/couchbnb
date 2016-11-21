require 'byebug'
require 'net/http'
require 'json'

def parseAddress(address)
  url = URI(
    "https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=AIzaSyBDm-uAWZjK-h7w-tf0euzdr_lH9n3bkr8"
  )
  Net::HTTP.get(url)
end

cit = []

File.open('cities.txt').each_line { |line|
  cit << line.strip
}

cit = cit.map do |location_info|
  location_json = JSON.parse(parseAddress(location_info))
  location = location_json['results'].first['formatted_address'].split(',')
  lat_lng = location_json['results'].first['geometry']['location']

  city, state_region, country = '', '', ''
  lat, lng = lat_lng['lat'], lat_lng['lng']

  if location.count == 2
    city = location.first
    country = location.last
  else
    city = location.first
    state_region = location[1]
    country = location.last
  end

  location_params = {
    city: city,
    state_region: state_region,
    country: country,
    lat: lat,
    lng: lng
  }
end

cit = cit.to_json

File.write('city_seeds.json', cit)
