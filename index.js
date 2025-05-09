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
    if (location === element.city) {
      descriptionEl.innerText = element.participation;
      if (element.participation === "rain") {
        emojiEl.innerHTML = "🌧";
      }
      if (element.participation === "sun") {
        emojiEl.innerHTML = "☀";
      }
      if (element.participation === "cloudy") {
        emojiEl.innerHTML = "☁";
      }
      temperatureEL.innerText = `${element.temperature} \u00B0C`;
      feelsEl.innerText = `Feels like: ${element.feels} \u00B0C`;
      humidityEl.innerText = `Humidity: ${element.humidity}%`;
      windEl.innerText = `Wind speed: ${element.wind} m/s`;
    }
  }
}
