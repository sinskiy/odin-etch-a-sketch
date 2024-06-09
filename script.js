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
    itemInColumn.addEventListener("mouseenter", handleItemHover);

    column.appendChild(itemInColumn);
  }
}

function handleItemHover(e) {
  const { classList, style } = e.target;
  if (!classList.contains("item--hovered")) {
    style.backgroundColor = randomRGBColor();
    classList.add("item--hovered");
  } else {
    style.opacity = darken(style.opacity);
  }
}

function darken(opacity) {
  if (opacity) {
    return opacity - 0.1;
  } else {
    return 0.9;
  }
}

const currentGridSize = document.querySelector("#current-grid-size");
currentGridSize.textContent = SIZE;

const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("click", handleGridSizeChange);

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

function randomRGBColor() {
  const red = randomBetween(0, 255);
  const green = randomBetween(0, 255);
  const blue = randomBetween(0, 255);
  const RGB = `rgb(${red},${green},${blue})`;
  return RGB;
}

const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));
