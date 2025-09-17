let now = new Date();

// feature 1
function currentTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()]; // 0 and 6

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let newTime = `${day} ${hours}:${minutes}`;

  return newTime;
}

let time = document.querySelector("#current-time");
time.innerHTML = `${currentTime(now)}`;

// feature 2

function search(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-input");
  let cityName = document.querySelector("#search-city");
  cityName.innerHTML = cityInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
