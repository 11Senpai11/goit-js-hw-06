const fontSizeControl = document.querySelector("#font-size-control");

text.style.fontSize = "56px ";

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
