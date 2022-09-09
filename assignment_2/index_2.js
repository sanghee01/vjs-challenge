// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body"),
  h2 = document.querySelector("h2");

h2.style.color = "white";

function eventFnc() {
  const width = window.innerWidth;
  if (width < 1000) {
    body.style.backgroundColor = "blue";
  } else if (width >= 1000 && width < 1500) {
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "yellow";
  }
}
window.addEventListener("resize", eventFnc);
