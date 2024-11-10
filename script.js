let color = document.querySelector("#color");
let body = document.querySelector("body");

color.addEventListener("input", () => {
  body.style.backgroundColor = color.value;
});
