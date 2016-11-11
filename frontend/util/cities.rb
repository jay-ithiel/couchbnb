require 'byebug'

require 'net/http'

locations = "
  SEOUL	| South Korea *
  Sao Paulo |	Brazil *
  Bombay |	India *
  JAKARTA |	Indonesia *
  Karachi |	Pakistan*
  Moscow |	Russia *
  Istanbul |	Turkey *
  Mexico |	Mexico *
  Shanghai |	China *
  TOKYO |	Japan *
  New York |	US *
  BANGKOK |	Thailand *
  BEIJING |	China *
  Delhi |	India *
  LONDON |	UK *
  HongKong |	China *
  CAIRO |	Egypt *
  TEHRAN |	Iran *
  BOGOTA |	Colombia *
  Bandung |	Indonesia *
  Tianjin |	China *
  LIMA |	Peru *
  Rio de Janeiro |	Brazil *
  Lahore |	Pakistan *
  Bogor |	Indonesia *
  SANTIAGO |	Chile *
  St Petersburg |	Russia *
  Shenyang |	China *
  Calcutta |	India *
  Wuhan |	China *
  Sydney |	Australia *
  Guangzhou |	China *
  SINGAPORE |	Singapore *
  Madras |	India *
  BAGHDAD |	Iraq *
  Pusan |	South Korea *
  Los Angeles |	US *
  Yokohama |	Japan *
  DHAKA |	Bangladesh *
  BERLIN |	Germany *
  Alexandria |	Egypt *
  Bangalore |	India *
  Malang |	Indonesia *
  Hyderabad |	India *
  Chongqing |	China *
  Ho Chi Minh City |	Vietnam *
  Haerbin |	China *
  ANKARA |	Turkey *
  BUENOS AIRES |	Argentina *
  Chengdu |	China *
  Ahmedabad |	India *
  Casablanca |	Morocco *
  Chicago |	US *
  Xian |	China *
  MADRID |	Spain *
  Surabaya |	Indonesia *
  PYONGYANG |	North Korea *
  Nanjing |	China *
  ROMA |	Italy *
  Taipei |	China *
  Osaka |	Japan *
  KIEV |	Ukraine *
  YANGON |	Myanmar *
  Toronto |	Canada *
  Zibo |	China *
  Dalian |	China *
  Taegu	| South Korea *
  ADDIS ABABA |	Ethopia *
  Jinan |	China *
  Salvador |	Brazil *
  Inchon | South Korea *
  Semarang | Indonesia *
  Giza |	Egypt *
  Changchun |	China *
  Havanna |	Cuba *
  Nagoya |	Japan *
  Belo Horizonte |	Brazil *
  PARIS |	France *
  TASHKENT |	Uzbekistan *
  Fortaleza |	Brazil *
  Sukabumi |	Indonesia *
  Cali |	Colombia *
  Guayaquil |	Ecuador *
  Qingdao |	China *
  Izmir |	Turkey *
  Cirebon |	Indonesia *
  Taiyuan |	China *
  BRASILIA |	Brazil *
  BUCURESTI |	Romania *
  Faisalabad |	Pakistan *
  Medan |	Indonesia *
  Houston |	US *
  Abidjan	Côte | d’Ivorie *
  Mashhad |	Iran *
  Medellín |	Colombia *
  Kanpur |	India *
  BUDAPEST |	Hungary *
  CARACAS |	Venezuela *
"

cities = []
COUNTRIES = []

locations = locations.split('*').each do |location|
  location = location.split('|')
  cities.push(location[0])
  COUNTRIES.push(location[1])
end

CITIES = []
cities.each do |city|
  city = city.split(' ')
  city = city.map do |c|
    c = c.downcase
    c.capitalize
  end
  CITIES.push(city.join('+'))
end


us_locations = "
  Chicago,+Illinois *
  Charleston, South+Carolina *
  Las+Vegas,+Nevada *
  Seattle,+Washington *
  Washington+DC, District Of+Columbia *
  New+Orleans,+Louisiana *
  San+Diego,+California *
  St+Louis,+Missouri *
  Honolulu,+Hawaii *
  Miami,+Florida *
  Branson,+Missouri *
  Boston,+Massachusetts *
  Savannah,+Georgia *
  Orlando,+Florida *
  Portland,+Oregon *
  Lahaina,+Hawaii *
  Nashville,+Tennessee *
  San+Antonio,+Texas *
  Austin,+Texas *
  Minneapolis,+Minnesota *
"
us_locations = us_locations.split('*')

US_CITIES = []
US_STATES = []

# us_locations.each do |location|
#   location = location.split('|')
#   US_CITIES << location[0]
#   US_STATES << location[1]
# end
# puts US_CITIES

def parseAddress(address)
  url = URI.parse(
    "https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=AIzaSyBDm-uAWZjK-h7w-tf0euzdr_lH9n3bkr8"
  )
  req = Net::HTTP::Get.new(url.to_s)
  res = Net::HTTP.start(url.host, url.port) {|http|
    http.request(req)
  }

  res.body
end

# https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

us_locations.each do |location|
  byebug
  json_address = parseAddress(location.strip)
  byebug
  puts json_address
end
