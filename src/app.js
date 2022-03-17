function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "f93da01be87ea516f1ea4e13f943ea44";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=$apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);
