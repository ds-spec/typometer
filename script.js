var text = document.querySelector("#text-input");
var timer = document.querySelector("#timer");
var wpm = document.querySelector("#wpm-calc");
var wpmText = document.querySelector("#comparable-text");
let timeContent = timer.textContent;
let inputStop;
let timerCountdown;
// const comparableText = wpmText.textContent
//   .split(/\s+/)
//   .filter((word) => word.length > 0);
const comparableText = wpmText.textContent
  .split(" ")
  .map((word) => word.replace(/\n/g, "").trim())
  .filter((word) => word.length > 0);
console.log(comparableText);

const compareText = () => {};

text.addEventListener("input", (e) => {
  const textAreaWords = text.value.split("").length;
  if (inputStop) {
    e.preventDefault();
    text.value = text.value.slice(0, -1);
  }
  wpm.textContent = Math.round((textAreaWords / (60 - timeContent)) * 60);
  if (!timerCountdown) {
    timerCountdown = setInterval(() => {
      if (timeContent > 0) {
        timeContent--;
        timer.textContent = timeContent;
      } else {
        inputStop = true;
        clearInterval(timerCountdown);
      }
    }, 100);
  }
});
