const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector("button[data-action='start']"),
  btnStop: document.querySelector("button[data-action='stop']"),
};

let currentColor,
  newColor = "#FFFFFF";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = () => {
  do {
    newColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  } while (newColor === currentColor);

  refs.body.style.backgroundColor = newColor;
  currentColor = newColor;
};

const btnsSatus = (isOn) => {
  refs.btnStart.disabled = isOn;
  refs.btnStop.disabled = !isOn;
};

let timerIdStart;

btnsSatus(false);

refs.btnStart.addEventListener("click", () => {
  btnsSatus(true);
  timerIdStart = setInterval(changeColor, 1000);
});

refs.btnStop.addEventListener("click", () => {
  btnsSatus(false);
  clearInterval(timerIdStart);
});
