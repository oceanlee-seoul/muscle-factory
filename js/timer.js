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

function onClickPlay() {
  setInterval(() => {
    sec += 1;
    if (sec < 10) {
      $sec.textContent = "0" + sec.toString();
    } else {
      $sec.textContent = sec;
    }
  }, 1000);
}

function onClickPause() {}

function onClickReset() {
  clearInterval(interval);
  $hour.textContent = "00";
  $min.textContent = "00";
  $min.textContent = "00";
}

$timer_play.addEventListener("click", onClickPlay);
$timer_pause.addEventListener("click", onClickPause);
$timer_reset.addEventListener("click", onClickReset);
