"use strict";

// course information, reading the course name, grade received, and
// credit hours

// while(input)

class User {
  constructor() {}
}

let running = true;
let input = null;
let userInfo = [];
let gpa = 0;
let rawgpa = 0;
let hours = 0;
let points = 0;
let totalHours = 0;
let numClicks = 0;

while (running) {
  input = prompt(
    `Enter course name, grade, and credit hours(e.g., "CSC551 B+ 3"). or click OK with no data to terminate the prompt.`
  );
  if (input == "") {
    break;
  } else {
    userInfo.push(input.split(" "));
    console.log(userInfo);
  }
}

const calcGPA = (item, index, array) => {
  let courseName = item[0];
  let grade = item[1];
  let hours = +item[2];
  let points = 0;
  let htmlTable = document.getElementById("table-head");
  let newRow = document.createElement("tr");
  newRow.setAttribute("id", `${numClicks + 1}-row`);
  htmlTable.appendChild(newRow);

  item.forEach((item, index, array) => {
    let newData = document.createElement("td");
    let text = document.createTextNode(item);
    newData.appendChild(text);
    document.getElementById(`${numClicks + 1}-row`).appendChild(newData);
  });

  switch (grade) {
    case "A":
      points = 4;
      break;
    case "B+":
      points = 3.5;
      break;
    case "B":
      points = 3;
      break;
    case "C+":
      points = 2.5;
      break;
    case "C":
      points = 2;
      break;
    case "D":
      points = 1;
      break;
    case "F" || "AF" || "WF":
      points = 0;
      break;
    default:
      points = 0;
  }
  totalHours += hours;
  rawgpa += points * hours;
  numClicks++;
};

userInfo.forEach(calcGPA);
gpa = rawgpa / totalHours;
const htmlrawGPA = document.getElementById("rawGPA");
const htmltotalHours = document.getElementById("total-hours");
const htmlGPA = document.getElementById("GPA");

htmlrawGPA.innerHTML = ` Total grade points = ${rawgpa}`;
htmltotalHours.innerHTML = `Number of hours = ${totalHours}`;
htmlGPA.innerHTML = `GPA = ${gpa}`;
console.log(gpa);
