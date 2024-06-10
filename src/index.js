/* eslint-disable no-undef */
"use strict";

import "./style.css";
const images = require.context("./assets", false, /\.jpg$/);
import next from "./assets/next.svg";
import prev from "./assets/prev.svg";

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
const header = createElement("div", "header", "Image Carousal");
const mainContent = createElement("div", "mainContent");
const frameDiv = createElement("div", "frame");

body.appendChild(header);
body.appendChild(mainContent);
mainContent.appendChild(frameDiv);

const prevBtn = createElement("div", "prevBtn");
prevBtn.setAttribute("id", "previous");
const nextBtn = createElement("div", "nextBtn");
prevBtn.setAttribute("id", "next");
prevBtn.innerHTML = prev;
nextBtn.innerHTML = next;
frameDiv.appendChild(nextBtn);
frameDiv.appendChild(prevBtn);

console.log(images.keys());
const imageArray = images.keys().map(images);
// console.log(imageArray);

let i = 0;
const totalImages = imageArray.length;
const changeImage = () => {
  frameDiv.style.backgroundImage = `url('${imageArray[i]}')`;
  i = (i + 1) % totalImages;
};

const imagePoints=createElement('div','imagePoints');
frameDiv.appendChild(imagePoints)

for (let j = 0; j < totalImages; j++) {
  const li = createElement("li", `li-${j}`);
  imagePoints.appendChild(li);
}

document.addEventListener("DOMContentLoaded", () => {
  changeImage();
  setInterval(changeImage, 6000);
});

const getPrevImage = () => {
  frameDiv.style.backgroundImage = `url('${imageArray[i - 1]}')`;
  i = (i + 1) % totalImages;
};
const getNextImage = () => {
  frameDiv.style.backgroundImage = `url('${imageArray[i + 1]}')`;
  i = (i + 1) % totalImages;
};

const changeViaPoint=(i)=>{
    frameDiv.style.backgroundImage = `url('${imageArray[i]}')`;
    i = (i + 1) % totalImages;
}

document.addEventListener("click", (event) => {
  if (event.target.id === "previous") {
    getPrevImage();
  } else if (event.target.id === "next") {
    getNextImage();
  }
  else if (event.target.tagName==='LI'){
    const pointNum=event.target.className.slice(3,);
    changeViaPoint(pointNum);
  }
});


