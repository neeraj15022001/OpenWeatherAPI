// jshint esversion:6
const express = require("express");
require("dotenv").config();
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.raw());
const https = require("https");
app.use(express.static("static"));

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = process.env.API_KEY;
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units;
  fetchData(url, res);
});

function fetchData(url, res) {
  try {
    https.get(url, function (response) {
      console.log(response.statusCode);
      if (response.statusCode === 200) {
        response.on("data", function (data) {
          const weatherData = JSON.parse(data);
          const cityName = weatherData.name;
          const temp = weatherData.main.temp;
          const date = new Date();
          const icon = weatherData.weather[0].icon;
          res.send({
            cityName: cityName,
            temp: temp,
            date: date,
            icon: icon,
          });
        });
      } else {
        res.sendStatus(404);
      }
    });
  } catch (e) {
    console.log(error);
  }
}

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is now running on port 3000");
});
