//Updating Current Time
setInterval(() => {
  let date = new Date();
  let formatTime = date.toLocaleTimeString();
  let dayHour = date.getHours();
  if (dayHour >= 0 && dayHour < 6) {
    mainContainer.style.backgroundImage = "url('./images/night.jpg')";
    time.classList.add("text-light");
    weather.classList.add("text-light");
  } else if (dayHour > 6 && dayHour < 17) {
    mainContainer.style.backgroundImage = "url('./images/day.jpg')";
    time.classList.remove("text-light");
    weather.classList.remove("text-light");
  } else {
    mainContainer.style.backgroundImage = "url('./images/evening.jpg')";
    time.classList.remove("text-light");
    weather.classList.remove("text-light");
  }
  time.innerHTML = formatTime;
}, 1000);
