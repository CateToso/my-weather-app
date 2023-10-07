let currentTime = new Date();
let h3 = document.querySelector("h3");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h3.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherConditions(response) {
  document.querySelector("#city").innerHTML = response.data.name.toUpperCase();
  let currentTemperature = Math.round(response.data.main.temp);
  document.querySelector(
    "#current-temperature"
  ).innerHTML = `${currentTemperature}˚C`;
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let metricUnits = `metric`;
  let apiUrl = `${apiEndpoint}${city}&appid=7c4d7f97a6913f4a71f774c285107b42&units=${metricUnits}`;

  axios.get(apiUrl).then(displayWeatherConditions);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
