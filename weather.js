//
// let getWeather = function() {
//   let latitude = '41.8781';
//   let longitude = '-87.6298';
  // let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  // openweathermap_api_url += 'lat=' + latitude
  // openweathermap_api_url += '&lon=' + longitude
  // openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
//   fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
// };

//Triggers event
let link = document.getElementById("get_forecast")
  link.addEventListener("click", function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(myLocation);
});

// Retrieves city based on long/lat
let myLocation = function(locationData) {
  console.info(locationData)
  let div = document.getElementById("get_forecast");
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + locationData.coords.latitude
  openweathermap_api_url += '&lon=' + locationData.coords.longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  // Get weather data
  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
};

let convertToJSON = function(response) {
      return response.json();
}


let updateWeather = function(weatherData) {
  console.debug(weatherData)
  // Pick out the city name from the waether data
  // Display that city name in the HTML document
  city = weatherData.name;
  document.getElementById("city").innerHTML = city
  //Pick out temp
  //Display temp in HTML document
  temp = weatherData.main.temp;
  document.getElementById("forecast").innerHTML = 'It is ' + temp + ' degrees outside.'
  //Pick out forecast image
  //Display image
  icon = weatherData.weather[0].icon
  document.getElementById("picture").src = 'http://openweathermap.org/img/w/' + icon + '.png'
}

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}



// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
