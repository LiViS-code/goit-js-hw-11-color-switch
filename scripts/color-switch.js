const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

// ссылки на объекты
const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector("button[data-action='start']"),
  btnStop: document.querySelector("button[data-action='stop']"),
};

// задать изанчальный цвет
let currentColor,
  newColor = "#FFFFFF";

// идентификатор таймера изменения цвета
let timerIdStart;

// сгенерировать случайный индекс из массива цветов
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// сменить цвет
const changeColor = () => {
  do {
    newColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  } while (newColor === currentColor);

  refs.body.style.backgroundColor = newColor;
  currentColor = newColor;
};

// задать статус кнопок Стар и Стоп
const btnsSatus = (isOn) => {
  refs.btnStart.disabled = isOn;
  refs.btnStop.disabled = !isOn;
};

// исходное значение кнопок Старт и Стоп
btnsSatus(false);

// слушать нажатие на Старт
refs.btnStart.addEventListener("click", () => {
  btnsSatus(true);
  timerIdStart = setInterval(changeColor, 1000);
});

// слушать нажатие на Сторп
refs.btnStop.addEventListener("click", () => {
  btnsSatus(false);
  clearInterval(timerIdStart);
});
