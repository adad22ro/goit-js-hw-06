let count = 0;
const buttonDown = document.querySelector('[data-action="decrement"]');
const buttonUp = document.querySelector('[data-action="increment"]');

buttonUp.addEventListener("click", () => {
  count++;
  value.innerHTML = count;
});

buttonDown.addEventListener("click", () => {
  count--;
  value.innerHTML = count;
});
