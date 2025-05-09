const inputEl = document.querySelector(".locationInput");
const buttonEl = document.querySelector(".button");
const locationEl = document.querySelector(".location");
const emojiEl = document.getElementsByClassName("emoji");
const temperatureEL = document.getElementsByClassName("temperature");
const descriptionEl = document.getElementsByClassName("description");
const feelsEl = document.getElementsByClassName("feels");
const humidityEl = document.getElementsByClassName("humidity");
const windEl = document.getElementsByClassName("wind");

buttonEl.addEventListener("click", () => {
  const location = inputEl.value;

  if (location) {
    locationEl.innerText = location;
  }
});
