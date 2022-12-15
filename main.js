// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// Change the background of current-color---v
const colorScale = document.querySelectorAll(".color")

colorScale.forEach(colorsDiv => {
  colorsDiv.addEventListener('click', buttonClicked = () => {
    const afterColor = colorsDiv.style.background
    const presentColor = document.getElementById("current-color")
    presentColor.style.background = afterColor
  })
})

// Change cells to the currently selected color --v
const neededCells = document.querySelectorAll("#canvas .cell")

neededCells.forEach( cell => {
  cell.addEventListener('click', buttonCLicked = () => {
    cell.style.background = document.getElementById("current-color").style.background
  })
})

// Reset Buttons, make the default white--v
// make in HTML button data to run through properly!
const resetClick = document.querySelector(".reset")

resetClick.addEventListener('click', () => {
  neededCells.forEach( cell => cell.style.background = "white")
})
