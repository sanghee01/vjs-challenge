// <⚠️ DONT DELETE THIS ⚠️>
import "./index_4.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const sel = document.querySelector("select");

function change() {
  var optionVL = sel.options[sel.selectedIndex].value;
  localStorage.setItem("country", optionVL);
  console.log(optionVL);
}

function load() {
  const local = localStorage.getItem("country");
  sel.options[0].setAttribute("selected", "false");

  if (local === "KR") {
    sel.options[1].setAttribute("selected", "true");
  } else if (local === "GR") {
    sel.options[2].setAttribute("selected", "true");
  } else if (local === "TK") {
    sel.options[3].setAttribute("selected", "true");
  } else {
    sel.options[4].setAttribute("selected", "true");
  }
}

function init() {
  load();
  sel.addEventListener("change", change);
}

init();
