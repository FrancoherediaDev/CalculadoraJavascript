const displayValueTop = document.querySelector("#valueBottom");
const displayValueBottom = document.querySelector("#valueTop");
const buttons = document.querySelectorAll(".number");
const buttonsOpt = document.querySelectorAll(".operator");

const display = new Display(displayValueBottom, displayValueTop);

buttons.forEach((buton) => {
  buton.addEventListener("click", () => display.addNumer(buton.innerHTML));
});

buttonsOpt.forEach((button) => {
  button.addEventListener("click", () => display.computer(button.value));
});
