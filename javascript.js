const container = document.getElementById("grid");

function newGrid(size = 16) {
  container.innerHTML = "";

  const squareQuantity = size * size;
  const squareSize = 640 / size;

  for (let i = 0; i < squareQuantity; i++) {
    let block = document.createElement("div");
    block.classList.add("grid-item");
    block.style.width = `${squareSize}px`;
    block.style.height = `${squareSize}px`;

    block.addEventListener("mouseover", () => {
      block.style.backgroundColor = "black";
    });

    container.appendChild(block);
  }
}

newGrid();

document.getElementById("reset").addEventListener("click", () => {
  let size = parseInt(prompt("Grid size? (max 100)"));
  newGrid(size);
});
