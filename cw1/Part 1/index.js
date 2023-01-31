"use strict";
let minHeight = 0;
let maxHeight = 0;
const btn = document.querySelector(".button");
let feet = 0;
let inch = 0;
let numClicks = 0;
let newRow;
let interval;
let eleToRemove;

const convertToImperialLength = () => {
  minHeight = +document.getElementById("user-min-input").value;
  maxHeight = +document.getElementById("user-max-input").value;
  interval = +document.getElementById("user-interval").value;

  if (
    isNaN(minHeight) ||
    minHeight < 0 ||
    isNaN(maxHeight) ||
    maxHeight < 0 ||
    isNaN(interval) ||
    interval < 0 ||
    minHeight > maxHeight
  ) {
    document.getElementById("height-display").innerHTML =
      "Type only numbers with positive value and minimum height should be smaller than max height";
    document.getElementById("user-min-input").value = "";
    document.getElementById("user-max-input").value = "";
    document.getElementById("user-interval").value = "";
  } else {
    document.getElementById("height-display").innerHTML = "";
    let finalResult = [];

    for (let i = minHeight; i < maxHeight; i = i + interval) {
      feet = Math.floor(i / 30.48);
      inch = Math.round((i / 2.54 / 12 - feet) * 12);
      let result = [i, feet, inch];
      finalResult.push(result);
      if (i + interval >= maxHeight) {
        feet = Math.floor(maxHeight / 30.48);
        inch = Math.round((maxHeight / 2.54 / 12 - feet) * 12);
        result = [maxHeight, feet, inch];
        finalResult.push(result);
      }
    }

    if (numClicks > 0) {
      for (let i = 0; i < numClicks; i++) {
        eleToRemove = document.getElementById(`${i + 1}-row`);
        eleToRemove.parentNode.removeChild(eleToRemove);
      }
      numClicks = 0;
    }
    finalResult.forEach(rowCreator);
  }
};

const rowCreator = (item, index, array) => {
  newRow = document.createElement("tr");
  newRow.setAttribute("id", `${numClicks + 1}-row`);
  document.getElementById("table-head").appendChild(newRow);
  item.forEach((item, index, array) => {
    let newData = document.createElement("td");
    let text = document.createTextNode(item);
    newData.appendChild(text);
    document.getElementById(`${numClicks + 1}-row`).appendChild(newData);
  });
  numClicks++;
  document.getElementById("user-min-input").value = "";
  document.getElementById("user-max-input").value = "";
  document.getElementById("user-interval").value = "";
};

document
  .getElementById("convert-button")
  .addEventListener("click", convertToImperialLength);

const removeElement = () => {
  document.removeChild;
};
