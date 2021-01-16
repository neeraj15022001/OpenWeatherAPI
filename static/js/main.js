//jshint esversion:6
const submitButton = document.getElementById("submitButton");
const weather = document.getElementById("weather");
const alert = document.getElementById("customAlert");
const mainContainer = document.getElementById("mainContainer");
const cityList = document.getElementById("city-list");
// Injecting Weather data
const cards = document.querySelectorAll(".customCard");
const time = document.getElementById("time");
submitButton.addEventListener("click", (event) => {
  const cityName = document.getElementById("cityName").value;
  event.preventDefault();
  axios
    .post("/", {
      cityName: cityName,
    })
    .then((res) => {
      const data = res.data;
      weather.innerHTML = `<img src="http://openweathermap.org/img/w/${data.icon}.png">${data.temp} °C`;
    })
    .catch((e) => {
      console.log(e);
      alert.classList.remove("d-none");
      setTimeout(() => alert.classList.add("d-none"), 1500);
    });
});
