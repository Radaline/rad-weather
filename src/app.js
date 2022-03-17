function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "f93da01be87ea516f1ea4e13f943ea44";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);
