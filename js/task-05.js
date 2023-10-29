const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value;

  switch (inputValue) {
    case "":
      nameOutput.textContent = "Anonymous";
      break;

    default:
      nameOutput.textContent = inputValue;
      break;
  }
});
