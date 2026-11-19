const lines = [
  "Ну привет. Я уже тут, на твоём сервере.",
  "Подмигнул. Значит, домен доехал домой.",
  "На этой планете кошек лучше не оставлять без присмотра.",
  "Если страница открылась — прокси живой. Можно выдыхать.",
  "Я с Мелмака. Сервер, судя по всему, из-под Москвы.",
  "Ещё раз нажми. Мне не сложно, я артист.",
  "Уилли бы попросил убрать меня с главной. Поздно.",
  "Свет горит, порт открыт, гость с другой планеты на месте.",
];

const button = document.querySelector("#alf");
const bubble = document.querySelector("#bubble");
const count = document.querySelector("#count");
const storageKey = "alf-winks";

let winks = Number(localStorage.getItem(storageKey) || 0);
let lastLine = 0;

function renderCount() {
  count.textContent = `Подмигиваний за всё время: ${winks}`;
}

function wink() {
  button.classList.remove("wink");
  void button.offsetWidth;
  button.classList.add("wink");

  let next = Math.floor(Math.random() * lines.length);
  if (next === lastLine) next = (next + 1) % lines.length;
  lastLine = next;
  bubble.textContent = lines[next];

  winks += 1;
  localStorage.setItem(storageKey, String(winks));
  renderCount();
}

button.addEventListener("click", wink);
renderCount();
