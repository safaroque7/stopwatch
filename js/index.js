let swStartButton = document.getElementById("sw-start-button");
let swStopButton = document.getElementById("sw-stop-button");
let swResetButton = document.getElementById("sw-reset-button");

let swOutputMiliseconds = document.getElementById("sw-mili-seconds");
let swOutputSeconds = document.getElementById("sw-seconds");
let swOutputMinutes = document.getElementById("sw-minutes");

let swMiliSeconds = 0;
let swSeconds = 0;
let swMinutes = 0;

let interval;

// start
swStartButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(setTimer, 10);
});

// stop
swStopButton.addEventListener("click", () => {
  clearInterval(interval);
});

// reset
swResetButton.addEventListener("click", () => {
  clearInterval(interval);
  swMiliSeconds = "00";
  swSeconds = "00";
  swMinutes = "00";
  swOutputMiliseconds.innerHTML = swMiliSeconds;
  swOutputSeconds.innerHTML = swSeconds;
  swOutputMinutes.innerHTML = swMinutes;
});

function setTimer() {
  swMiliSeconds++;
  if (swMiliSeconds <= 9) {
    swOutputMiliseconds.innerHTML = "0" + swMiliSeconds;
  }
  if (swMiliSeconds > 9) {
    swOutputMiliseconds.innerHTML = swMiliSeconds;
  }

  if (swMiliSeconds > 99) {
    swSeconds++;
    swOutputSeconds.innerHTML = swSeconds;

    swMiliSeconds = 0;
    swOutputMiliseconds.innerHTML = "0" + 0;
  }

  if (swSeconds <= 9) {
    swOutputSeconds.innerHTML = "0" + swSeconds;
  }

  if (swSeconds > 59) {
    swMinutes++;
    swOutputMinutes.innerHTML = swMinutes;

    swSeconds = 0;
    swOutputSeconds.innerHTML = "0" + 0;
  }

  if (swMinutes <= 9) {
    swOutputMinutes.innerHTML = "0" + swMinutes;
  }
}

setInterval(function () {
  let swColor = ["red", "green", "blue", "magenta"];
  ColorId = Math.floor(Math.random() * swColor.length);
  stopWatch = document.querySelector("#stop-watch-background");
  stopWatch.style.background = swColor[ColorId];
}, 1000);
