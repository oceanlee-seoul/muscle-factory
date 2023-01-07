const $hour = document.querySelector("#hour");
const $min = document.querySelector("#min");
const $sec = document.querySelector("#sec");

const $timer_play = document.querySelector("#play");
const $timer_pause = document.querySelector("#pause");
const $timer_reset = document.querySelector("#reset");

let hour = 0;
let min = 0;
let sec = 0;
let playing = false;

function timer() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min += 1;
  }
  if (min === 60) {
    min = 0;
    hour += 1;
  }
  timerPrint();
}

function timerPrint() {
  if (hour < 10) {
    $hour.textContent = `0${hour}`;
  } else {
    $hour.textContent = hour;
  }

  if (min < 10) {
    $min.textContent = `0${min}`;
  } else {
    $min.textContent = min;
  }

  if (sec < 10) {
    $sec.textContent = `0${sec}`;
  } else {
    $sec.textContent = sec;
  }
}

function onClick(event) {
  const target = event.target.id;
  if (target === "play" && playing === false) {
    playing = true;
    interval = setInterval(timer, 1000);
  } else if (target === "play" && playing === true) {
    return;
  } else if (target === "pause" && playing === true) {
    clearInterval(interval);
    playing = false;
  } else if (target === "reset") {
    playing = false;
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    $hour.textContent = "00";
    $min.textContent = "00";
    $sec.textContent = "00";
  }
}

$timer_play.addEventListener("click", onClick);
$timer_pause.addEventListener("click", onClick);
$timer_reset.addEventListener("click", onClick);
