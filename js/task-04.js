const presentValue = document.querySelector("#value");
const minusButtons = document.querySelector('[data-action="decrement"]');
const plusButtons = document.querySelector('[data-action="increment"]');

let counterValue = 0;

minusButtons.addEventListener("click", () => {
  counterValue -= 1;
  presentValue.textContent = counterValue;
});
plusButtons.addEventListener("click", () => {
  counterValue += 1;
  presentValue.textContent = counterValue;
});
