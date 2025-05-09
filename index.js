import { data } from "./data/cities.js";

const inputEl = document.querySelector(".locationInput");
const buttonEl = document.querySelector(".button");
const locationEl = document.querySelector(".location");
const emojiEl = document.querySelector(".emoji");
const temperatureEL = document.querySelector(".temperature");
const descriptionEl = document.querySelector(".description");
const feelsEl = document.querySelector(".feels");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

buttonEl.addEventListener("click", () => {
  const location = inputEl.value;

  if (location) {
    locationEl.innerText = location;
    participation(location);
  }
});

function participation(location) {
  for (const element of data) {
    if (location.toLowerCase() === element.city.toLowerCase()) {
      descriptionEl.innerText = element.precipitation;
      if (element.precipitation === "rain") {
        emojiEl.innerHTML = "🌧️";
      }
      if (element.precipitation === "sun") {
        emojiEl.innerHTML = "☀️";
      }
      if (element.precipitation === "cloudy") {
        emojiEl.innerHTML = "☁️";
      }
      temperatureEL.innerText = `${element.temperature} \u00B0C`;
      feelsEl.innerText = `Feels like: ${element.feels_like} \u00B0C`;
      humidityEl.innerText = `Humidity: ${element.humidity}%`;
      windEl.innerText = `Wind speed: ${element.wind} m/s`;
    }
  }
}
