const controlSize = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

controlSize.addEventListener("input", () => {
  const fontSize = controlSize.value;
  textElement.style.fontSize = `${fontSize}px`;
});
