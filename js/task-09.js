function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const widgetColor = document.querySelector(".color");
const widgetChangeColor = document.querySelector(".change-color");

widgetChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  widgetColor.textContent = getRandomHexColor();
});
