const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  handleresize: function () {
    title.innerHTML = "You just resized!";
    title.style.color = colors[1];
  },
  handleMouseOver: function () {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[2];
  },
  handleMouseOut: function () {
    title.innerHTML = "The mouse is gone!";
    title.style.color = colors[3];
  },
  handleContextmenu: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = colors[4];
  },
};

window.addEventListener("resize", superEventHandler.handleresize);
title.addEventListener("mouseover", superEventHandler.handleMouseOver);
title.addEventListener("mouseout", superEventHandler.handleMouseOut);
title.addEventListener("contextmenu", superEventHandler.handleContextmenu);
