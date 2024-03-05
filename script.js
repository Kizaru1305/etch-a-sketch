// Create grid cell
function createCell() {
  let gridSize = prompt("Enter number between 1 and 100.");
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    gridSize = 16; // Default grid size
  }

  const box = document.querySelector(".box");
  box.style.setProperty("--grid-size", gridSize);

  if (box.hasChildNodes) {
    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }
  }

  for (let i = 0; i < gridSize * gridSize; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    box.appendChild(newCell);
  }

  let newCell = document.querySelectorAll(".cell");

  newCell.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#454138";
    });
  });
}

//Erases cell color
function eraseCell() {
  let newCell = document.querySelectorAll(".cell");

  newCell.forEach((cell) => {
    cell.style.backgroundColor = "#dcd8c0";
  });
}

// Puts default color
function defaultColor() {
  let newCell = document.querySelectorAll(".cell");

  newCell.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#454138";
    });
  });
}

// Puts random color
function randomColor() {
  let newCell = document.querySelectorAll(".cell");

  newCell.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      let rgbValue = "#" + randomColor;
      cell.style.backgroundColor = rgbValue;
    });
  });
}

//Default grid-cell size
const box = document.querySelector(".box");
box.style.setProperty("--grid-size", 16);

// --- Buttons -------

//Button that selects size
document.querySelector("#btn-size").addEventListener("click", createCell);

//Button that erases painted cells
document.querySelector("#btn-erase").addEventListener("click", eraseCell);

//Button that randomizes cell color
document.querySelector("#btn-color").addEventListener("click", randomColor);

// Black color
document.querySelector("#btn-default").addEventListener("click", defaultColor);

// Default box size
for (let i = 0; i < 16 * 16; i++) {
  let newCell = document.createElement("div");
  newCell.classList.add("cell");
  box.appendChild(newCell);
}

let newCell = document.querySelectorAll(".cell");

newCell.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "#454138";
  });
});
