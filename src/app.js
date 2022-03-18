function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#windSpeed");
  let humidityElement = document.querySelector("#humidity");
  let tempHi = document.querySelector("#highs");
  let tempLo = document.querySelector("#lows");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  tempHi.innerHTML = Math.round(response.data.main.temp_max);
  tempLo.innerHTML = Math.round(response.data.main.temp_min);
}

let apiKey = "f93da01be87ea516f1ea4e13f943ea44";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
