let SIZE = 16;

const container = document.querySelector("#container");
createRows(container);

function createRows(container) {
  for (let i = 0; i < SIZE; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    createColumn(row);
    container.appendChild(row);
  }
}

function createColumn(column) {
  for (let i = 0; i < SIZE; i++) {
    const itemInColumn = document.createElement("div");
    itemInColumn.classList.add("item");
    itemInColumn.onmouseover = (e) => e.target.classList.add("item--hovered");

    column.appendChild(itemInColumn);
  }
}

function handleGridSizeChange() {
  const newSize = prompt(
    "Input a new grid size from 1 to 100\n(Click on Cancel, submit empty/non-number prompt or press escape to cancel)"
  );
  if (newSize >= 1 && newSize <= 100) {
    SIZE = newSize;
    currentGridSize.textContent = SIZE;
  }
  container.innerHTML = "";
  createRows(container);
}

const currentGridSize = document.querySelector("#current-grid-size");
currentGridSize.textContent = SIZE;

const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("click", handleGridSizeChange);
