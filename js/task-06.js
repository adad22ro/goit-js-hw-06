const validInput = document.getElementById("validation-input");

validInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validInput.getAttribute("data-length"));
  const inputValue = validInput.value;

  switch (inputValue.length) {
    case requiredLength:
      validInput.classList.remove("invalid");
      validInput.classList.add("valid");
      break;

    default:
      validInput.classList.remove("valid");
      validInput.classList.add("invalid");
      break;
  }
});
