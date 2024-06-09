const COLUMNS = 16;
const ROWS = COLUMNS;

createRows();

function createRows() {
  for (let i = 0; i < COLUMNS; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    createColumn(row);
    document.body.appendChild(row);
  }
}

function createColumn(column) {
  for (let i = 0; i < ROWS; i++) {
    const itemInColumn = document.createElement("div");
    itemInColumn.classList.add("item");
    itemInColumn.onmouseover = (e) => e.target.classList.add("item--hovered");

    column.appendChild(itemInColumn);
  }
}
