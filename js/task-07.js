const fontSizeControl = document.querySelector("#font-size-control");

fontSizeControl.addEventListener("input", () => {
 text.style.fontSize = `${fontSizeControl.value}px`
});
