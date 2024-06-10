/* eslint-disable no-undef */
"use strict";

import "./style.css";
import svg1 from "./assets/menu.svg";

const createElement = (tag, classNames, textContent) => {
  const element = document.createElement(tag);
  if (classNames) {
    classNames.split(" ").forEach((className) => {
      element.classList.add(className);
    });
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

const body = document.querySelector("body");
const header = createElement("div", "header");
const sidebar = createElement("div", "sidebar", "sidebar");
const mainContent = createElement("div", "mainContent", "Main Content");
body.appendChild(header);
body.appendChild(sidebar);
body.appendChild(mainContent);

const menuSvg = createElement("div", "menuIcon");
menuSvg.innerHTML = svg1;

header.appendChild(menuSvg);

document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("menuIcon") ||
    event.target.closest(".menuIcon")
  ) {
    console.log("hey");
    sidebar.classList.toggle("active");
    body.classList.toggle("sidebar-active");
  }
});
