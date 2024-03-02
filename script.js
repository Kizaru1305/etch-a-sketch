function createCell() {
  let boxSize = prompt("Enter number of squares");

  const box = document.querySelector(".box");

  if(box.hasChildNodes) {
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
  }

  for (let i = 0; i < boxSize * boxSize; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    box.appendChild(newCell);
  }
}

const box = document.querySelector(".box");
document.querySelector("#btn-size").addEventListener("click", createCell);

// Default box size

for (let i = 0; i < 16 * 16; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    box.appendChild(newCell);
  }