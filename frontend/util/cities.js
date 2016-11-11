

let locations = "SEOUL|South Korea*Sao Paulo|Brazil*Bombay|India*JAKARTA|Indonesia*Karachi|Pakista*Moscow|Russia*Istanbul|Turkey*Mexico|Mexico*Shanghai|China*TOKYO|Japan*New York|US*BANGKOK|Thailand*BEIJING|China*Delhi|India*LONDON|UK*HongKong|China*CAIRO|Egypt*TEHRAN|Iran*BOGOTA|Colombia*Bandung|Indonesia*Tianjin|China*LIMA|Peru*Rio de Janeiro|Brazil*Lahore|Pakistan*Bogor|Indonesia*SANTIAGO|Chile*St Petersburg|Russia*Shenyang|China*Calcutta|India*Wuhan|China*Sydney|Australia*Guangzhou|China*SINGAPORE|Singapore*Madras|India*BAGHDAD|Iraq*Pusan|South Korea*Los Angeles|US*Yokohama|Japan*DHAKA|Bangladesh*BERLIN|Germany*Alexandria|Egypt*Bangalore|India*Malang|Indonesia*Hyderabad|India*Chongqing|China*Ho Chi Minh City|Vietnam*Haerbin|China*ANKARA|Turkey*BUENOS AIRES|Argentina*Chengdu|China*Ahmedabad|India*Casablanca|Morocco*Chicago|US*Xian|China*MADRID|Spain*Surabaya|Indonesia*PYONGYANG|North Korea*Nanjing|China*ROMA|Italy*Taipei|China*Osaka|Japan*KIEV|Ukraine*YANGON|Myanmar*Toronto|Canada*Zibo|China*Dalian|China*Taegu|South Korea*ADDIS ABABA|Ethopia*Jinan|China*Salvador|Brazil*Inchon|South Korea*Semarang|Indonesia*Giza|Egypt*Changchun|China*Havanna|Cuba*Nagoya|Japan*Belo Horizonte|Brazil*PARIS|France*TASHKENT|Uzbekistan*Fortaleza|Brazil*Sukabumi|Indonesia*Cali|Colombia*Guayaquil|Ecuador*Qingdao|China*Izmir|Turkey*Cirebon|Indonesia*Taiyuan|China*BRASILIA|Brazil*BUCURESTI|Romania*Faisalabad|Pakistan*Medan|Indonesia*Houston|US*Medellin|Colombia*Kanpur|India*BUDAPEST|Hungary*CARACAS|Venezuela ";

let cities = [];
let countries = [];

locations = locations.split('*').forEach( location => {
  location = location.split('|');
  cities.push(location[0]);
  if (!countries.includes(location[1])) { countries.push(location[1]); }
});

cities = cities.sort();
const COUNTRIES = countries.sort();
const CITIES = [];

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

cities.forEach( city => {
  city = city.split(' ');
  city = city.map(toTitleCase).join('+');
  CITIES.push(city);
});

let cityCoords = [];
CITIES.forEach( city => {
  $.ajax ({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBDm-uAWZjK-h7w-tf0euzdr_lH9n3bkr8`,
    success: data => console.log('success', data),
    error: data => console.log('error', data)
  });
});

// console.log(cityCoords);

// let usLocations = " Chicago, Illinois, US * Charleston, South Carolina, US * Las+Vegas, Nevada, US * Seattle, Washington, US * Washington+DC, District Of Columbia, US * New+Orleans, Louisiana, US * San+Diego, California, US * St+Louis, Missouri, US * Honolulu, Hawaii, US * Miami, Florida, US * Branson, Missouri, US * Boston, Massachusetts, US * Savannah, Georgia, US * Orlando, Florida, US * Portland, Oregon, US * Lahaina, Hawaii, US * Nashville, Tennessee, US * San+Antonio, Texas, US * Austin, Texas, US * Minneapolis, Minnesota, US *";
// usLocations = usLocations.split('*');
//
// const US_CITIES = [];
// const US_STATES = [];
//
// usLocations.forEach( location => {
//   location = location.split('|');
//   US_CITIES.push(location[0]);
//   US_STATES.push(location[1]);
// });
//
//
// $.ajax ({
//   method: 'GET',
//   url: "https://maps.googleapis.com/maps/api/geocode/json?address=NashVille&appid=AIzaSyBDm-uAWZjK-h7w-tf0euzdr_lH9n3bkr8",
//   success: data => console.log('success', data),
//   error: data => console.log('error', data)
// });
