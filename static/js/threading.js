// Web Worker
var w;

function startWorker() {
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("cities.js");
    }
    w.onmessage = function (event) {
      const city = event.data;
      elementCreate(city.city);
      if (city.index === city.lengthOfArray - 1) {
        addEventListenerToEachListItem();
      }
    };
  } else {
    document.getElementById("result").innerHTML =
      "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

function elementCreate(text) {
  let liItem = document.createElement("li");
  liItem.classList.add("list-group-item");
  liItem.innerHTML = text;
  cityList.appendChild(liItem);
}

setTimeout(() => stopWorker(), 5000);

// Adding Event Listener to Each List Item
function addEventListenerToEachListItem() {
  const input = document.getElementById("cityName");
  const ul = document.getElementById("city-list");
  const li = ul.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (event) => {
      const fieldValue = event.target.textContent;
      // input.setAttribute("value",fieldValue)
      input.defaultValue = fieldValue;
    });
  }
}
